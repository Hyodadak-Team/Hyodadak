/* eslint-disable @typescript-eslint/no-explicit-any */

const setPagination = (
  noticeList: any[],
  currentPage: number,
  itemsPerPage: number,
) => {
  // idx 기준으로 오름차순 정렬
  // console.log(noticeList);
  // 현재 페이지에 해당하는 아이템만 가져오기
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = noticeList.slice(indexOfFirstItem, indexOfLastItem)

  return { currentItems }
}

export default setPagination
