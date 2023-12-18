export interface IQuestion {
  answers: Array<string>
  board_access: string
  board_category: string
  board_contents: string
  board_img: Array<string>
  board_point: number
  board_title: string
  create_time: string
  selected_answer: string
  status: string
  views: number
  writer_id: string
  _id: string
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
