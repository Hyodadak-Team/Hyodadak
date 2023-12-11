import api from './index'

export const init = async () => {
  try {
    const res = await api.post('/notice/init')
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

export const getAllBoard = async () => {
  try {
    const res = await api.get('/notice/all')
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

export const getPrevAndCurAndNext = async (index: number) => {
  try {
    const res = await api.get(`/notice/three/${index}`)
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

export const getLatestThree = async () => {
  try {
    const res = await api.get('notice/latest')
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

export const getLength = async () => {
  try {
    const res = await api.get('/notice/count')
    return res.data
  } catch (err) {
    return console.error(err)
  }
}
