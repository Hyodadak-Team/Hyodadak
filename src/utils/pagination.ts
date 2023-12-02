/* eslint-disable @typescript-eslint/no-explicit-any */

const setPagination = (
  noticeList: any[],
  currentPage: number,
  itemsPerPage: number,
) => {
  // idx 기준으로 오름차순 정렬
  const sortedList = noticeList
  // console.log(noticeList);
  sortedList.sort((a, b) => b.idx - a.idx)
  // 현재 페이지에 해당하는 아이템만 가져오기
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = sortedList.slice(indexOfFirstItem, indexOfLastItem)

  return { sortedList, currentItems }
}

export default setPagination
