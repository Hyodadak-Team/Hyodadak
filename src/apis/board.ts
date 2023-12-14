import { TQuestionField } from '../types/questionBoard'
import api from './index'

export const init = async () => {
  try {
    const res = await api.post('/board/init')
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

// READ
export const getAllBoard = async () => {
  try {
    const res = await api.get('/board/all')
    return res.data
  } catch (err) {
    return console.error(err)
  }
}
export const getBoardDetail = async (id: string) => {
  try {
    const res = await api.get(`/board/detail/${id}`)
    return res.data
  } catch (err) {
    return console.error(err)
  }
}
export const postAnswerReply = async (
  boardId: string | undefined,
  answerId: string,
  userId: string,
  comment: string,
) => {
  try {
    const res = await api.put(`add-comment/${boardId}/${answerId}`, {
      user_id: userId,
      comment_contents: comment,
    })
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

// CREATE
export const createBoard = async (formData: TQuestionField) => {
  try {
    const res = await api.post('/board/create-board', formData)
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

// UPDATE
export const modifyBoard = async (id: string, formData: TQuestionField) => {
  try {
    const res = await api.put(`/board//modify-board/${id}`, formData)
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

// DELETE
