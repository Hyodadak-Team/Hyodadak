import { useParams } from 'react-router-dom'
import noticeList from '../constants/noticeList'

function NoticeArticle() {
  const { id } = useParams()
  const noticeId = id ? parseInt(id, 10) : null
  const filteredNotice = noticeList.filter(
    (notice) => notice.id === noticeId,
  )[0]

  return (
    <>
      <div>{filteredNotice.id}</div>
      <div>{filteredNotice.type}</div>
      <div>{filteredNotice.title}</div>
      <div>{filteredNotice.date}</div>
    </>
  )
}

export default NoticeArticle
