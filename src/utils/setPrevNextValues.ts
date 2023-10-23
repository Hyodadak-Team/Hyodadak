import { INotice } from '../types/notice'

const setPrevNextValues = (noticeId: number | null, noticeList: INotice[]) => {
  let prevId
  let nextId
  let prevType
  let prevTitle
  let nextType
  let nextTitle

  if (noticeId) {
    prevId = noticeId - 1
    nextId = noticeId

    const [prevContent, nextContent] = [
      noticeList[prevId - 1],
      noticeList[nextId],
    ]

    if (prevContent) {
      prevType = prevContent.type
      prevTitle = prevContent.title
    }
    if (nextContent) {
      nextType = nextContent.type
      nextTitle = nextContent.title
    }
  }

  return { prevId, nextId, prevType, prevTitle, nextType, nextTitle }
}

export default setPrevNextValues
