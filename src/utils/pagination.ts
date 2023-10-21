import { INotice } from '../types/notice'

const setPagination = (
  noticeList: INotice[],
  currentPage: number,
  itemsPerPage: number,
) => {
  // id 기준으로 내림차순 정렬
  const sortedList = noticeList.sort((a, b) => b.id - a.id)

  // 현재 페이지에 해당하는 아이템만 가져오기
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = sortedList.slice(indexOfFirstItem, indexOfLastItem)

  return { sortedList, currentItems }
}

export default setPagination
