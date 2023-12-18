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
    const res = await api.get('/board/boards')
    return res.data
  } catch (err) {
    return console.error(err)
  }
}
export const getBoardDetail = async (id: string) => {
  try {
    const res = await api.get(`/board/board/${id}`)
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

// CREATE
export const createBoard = async (formData: TQuestionField) => {
  try {
    const res = await api.post('/board/board/add', formData)
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

export const createAnswer = async (
  boardId: string,
  answer: string | undefined,
) => {
  try {
    const res = await api.patch(`/board/answer/add/${boardId}`, {
      answer_user_info: {
        user_id: 'jiwonKing',
        pro_img: 'm1',
        interest_category: ['이동수단', '무인자판기', '기타'],
      },
      answer_contents: answer,
    })
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

export const createComment = async (
  boardId: string,
  answerId: string,
  comment: string | undefined,
) => {
  try {
    const res = await api.patch(`board/comment/add/${boardId}/${answerId}`, {
      comment_contents: comment,
      comment_user_info: {
        user_id: 'jiwonKing',
        pro_img: 'm1',
        interest_category: ['이동수단', '무인자판기', '기타'],
      },
    })
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

// UPDATE
export const modifyBoard = async (id: string, formData: TQuestionField) => {
  try {
    const res = await api.put(`/board/board/modify/${id}`, formData)
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

// DELETE
export const deleteBoard = async (id: string) => {
  try {
    return await api.delete(`/board/board/delete/${id}`)
  } catch (err) {
    console.error(err)
    throw err
  }
}
