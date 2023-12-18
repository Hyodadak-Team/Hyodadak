// 유저 props 타입
export interface QuestionDetailProps {
  user: boolean
}

// 댓글 타입
export type CommentsType = {
  comment_contents: string
  comment_create_time: string
  comment_user_info: CommentUserInfoType
}
export type CommentUserInfoType = {
  user_id: string
  pro_img: string
}
export type CommentInputRefType = {
  id: string
  ref: HTMLTextAreaElement | null
}
// 답변 타입
export type AnswerUserInfoType = {
  pro_img: string
  interest_category: Array<string>
  user_id: string
}
export type AnswerType = {
  answer_user_info: AnswerUserInfoType
  answer_contents: string
  answer_create_time: number
  comments: Array<CommentsType>
  _id: string
}
// 게시물DB 타입
export interface WriterInfo {
  user_type: string
  user_id: string
}
export interface PostDataType {
  answers: Array<AnswerType>
  board_access: string
  board_category: Array<string>
  board_contents: string
  board_img: Array<string>
  board_point: number
  board_title: string
  create_time: string
  selected_answer: Array<AnswerType>
  status: string
  views: number
  _id: string
  writer_user_info: WriterInfo
}
