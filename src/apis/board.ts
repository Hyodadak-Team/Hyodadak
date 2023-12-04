import api from './index'

export const init = async () => {
  try {
    const res = await api.post('/board/init')
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

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
