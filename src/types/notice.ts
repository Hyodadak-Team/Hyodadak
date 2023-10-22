export interface INoticeMenu {
  id: number
  range: string
  content: string
  isActive: boolean
}
export interface INotice {
  id: number
  type: string
  title: string
  date: string
  content: string
}

export interface IPaginationProps {
  itemsPerPage: number
  totalItems: number
  currentPage: number
  onPageChange: (pageNumber: number) => void
}
