import api from './index'

export const init = async () => {
  try {
    const res = await api.post('/notice/init')
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

export const allNotices = async () => {
  try {
    const res = await api.get('/notice/notices')
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

export const prevAndCurAndNextNotices = async (index: number) => {
  try {
    const res = await api.get(`/notice/prev-now-next/${index}`)
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

export const latestThreeNotices = async () => {
  try {
    const res = await api.get('notice/latest-notice')
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

export const noticesLength = async (categoryNumber) => {
  try {
    const res = await api.get(`/notice/notices-count/${categoryNumber}`)
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

export const pagination = async (categoryNumber, page) => {
  try {
    const res = await api.get(`/notice/pagination/${categoryNumber}/${page}`)
    return res.data
  } catch (err) {
    return console.error(err)
  }
}

export const noticesByCategory = async (categoryNumber) => {
  try {
    const res = await api.get(`/notice/notices/category/${categoryNumber}`)
    return res.data
  } catch (err) {
    return console.error(err)
  }
}
