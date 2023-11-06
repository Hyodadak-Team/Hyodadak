const timeDifference = (prev: string): string => {
  const previous = new Date(prev)
  const current = new Date()
  const millisecondsPerMinute: number = 60 * 1000
  const millisecondsPerHour: number = millisecondsPerMinute * 60
  const millisecondsPerDay: number = millisecondsPerHour * 24
  const millisecondsPerMonth: number = millisecondsPerDay * 30
  const millisecondsPerYear: number = millisecondsPerDay * 365

  const elapsed: number = current.getTime() - previous.getTime()

  if (elapsed < millisecondsPerMinute) {
    return `${Math.round(elapsed / 1000)}초 전`
  }
  if (elapsed < millisecondsPerHour) {
    return `${Math.round(elapsed / millisecondsPerMinute)}분 전`
  }
  if (elapsed < millisecondsPerDay) {
    return `${Math.round(elapsed / millisecondsPerHour)}시간 전`
  }
  if (elapsed < millisecondsPerMonth) {
    return `${Math.round(elapsed / millisecondsPerDay)}일 전`
  }
  if (elapsed < millisecondsPerYear) {
    return `${Math.round(elapsed / millisecondsPerMonth)}달 전`
  }

  return `${Math.round(elapsed / millisecondsPerYear)}년 전`
}

export default timeDifference
