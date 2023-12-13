export interface IQuestion {
  id: number
  point: number
  type: string
  date: string
  title: string
  photo: string
  content: string
  answers: number
  views: number
  isAdopted: boolean
}

export type TQuestionField = {
  board_title: string
  board_contents: string
  board_category: string
  board_access: string
  board_point: number
  writer_user_info: object
  board_img?: Array<string>
}
