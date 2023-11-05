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
  point?: number
  type?: string
  title?: string
  photo?: string
  content?: string
}
