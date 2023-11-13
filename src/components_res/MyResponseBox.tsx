import { Link } from 'react-router-dom'
import GradientBtn from '../composables/Button/GradientBtn'
import { IResponserInfo } from '../types/mypage'
import timeDifference from '../utils/timeDifference'

type MyPresponseProps = {
  data: IResponserInfo
}
export default function MyResponseBox({ data }: MyPresponseProps) {
  const { title, type, writer, createTime, money, content } = data
  const difference: string = timeDifference(createTime)
  return (
    <div className="question_box">
      <Link to="detail주소바꾸자">
        <p className="pink_txt">
          {money && <span className="money">{money}</span>}
          {writer} · {type}
          <span className="time"> {difference}</span>
        </p>
        <p className="title">{title}</p>
        <p className="content">{content}</p>
      </Link>
      <GradientBtn icon="chat" path="chat" content="채팅하기" />
    </div>
  )
}
