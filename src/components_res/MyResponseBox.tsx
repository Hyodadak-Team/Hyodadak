import { Link } from 'react-router-dom'
import GradientBtn from '../composables/Button/GradientBtn'
import { IResponserInfo } from '../types/mypage'

type MyPresponseProps = {
  data: IResponserInfo
}
export default function MyResponseBox({ data }: MyPresponseProps) {
  const { title, type, writer, createTime, money, content } = data
  const contentDate = new Date(createTime)
  const currentDate = new Date()
  function timeDifference(current: Date, previous: Date): string {
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

  const difference: string = timeDifference(currentDate, contentDate)
  return (
    <Link to="detail주소바꾸자" className="question_box">
      <p className="pink_txt">
        {money && <span className="money">{money}</span>}
        {writer} · {type}
        <span className="time"> {difference}</span>
      </p>
      <p className="title">{title}</p>
      <p className="content">{content}</p>
      <GradientBtn icon="chat" path="chat" content="채팅하기" />
    </Link>
  )
}
