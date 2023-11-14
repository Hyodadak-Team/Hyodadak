import { ObjectId } from 'mongoose'

export interface INoticeMenu {
  id: number
  range: string
  content: string
  isActive: boolean
}
export interface INotice {
  _id: ObjectId
  idx: number
  category: string
  title: string
  createTime: string
  contents: string
}

export interface IPaginationProps {
  itemsPerPage: number
  totalItems: number
  currentPage: number
  onPageChange: (pageNumber: number) => void
}
