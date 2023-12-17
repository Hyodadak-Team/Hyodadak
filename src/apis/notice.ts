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

export const noticesLength = async () => {
  try {
    const res = await api.get('/notice/notices-count')
    return res.data
  } catch (err) {
    return console.error(err)
  }
}
