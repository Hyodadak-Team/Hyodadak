const formatDate = (createdTime: string) => {
  const date = new Date(createdTime)
  const year = date.getFullYear().toString()
  const yy = year.substring(2, 4)
  let month: number | string = date.getMonth() + 1
  let dt: number | string = date.getDate()

  if (month < 10) {
    month = `0${month}`
  }

  if (dt < 10) {
    dt = `0${dt}`
  }

  return `${yy}.${month}.${dt}`
}

export default formatDate
