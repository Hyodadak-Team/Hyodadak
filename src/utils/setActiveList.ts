import { INotice } from '../types/notice'

const setActiveList = (menuId: number, list: INotice[]) => {
  let filteredList: INotice[] = []

  if (menuId === 1) {
    return list
  }

  filteredList = list.filter((notice: INotice) => {
    if (menuId === 2) {
      return notice.category === 'notification'
    }
    if (menuId === 3) {
      return notice.category === 'event'
    }
    return true
  })

  return filteredList
}

export default setActiveList
