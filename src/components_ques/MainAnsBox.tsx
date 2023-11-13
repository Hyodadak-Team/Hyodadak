import React from 'react'
import { Link } from 'react-router-dom'
import { AnswerInfo } from '../types/mainQues'

type MainAnsBoxProps = {
  data: AnswerInfo
}

export default function MainAnsBox({
  data: { respondent, title, url },
}: MainAnsBoxProps) {
  return (
    <div className="ansBox_comp">
      <div className="ansBox_content">
        <div className="answer_name">
          <img src="/img/bell_icon.svg" alt="알림icon" />
          <span>{respondent}</span>님의 답변을 확인해보세요
        </div>
        <div className="answer_title">Q {title}</div>
      </div>
      <div className="ansBox_btn">
        <Link to={url}>
          <button type="button">
            답변 확인하기 <img src="../img/right-icon.svg" alt="다음icon" />
          </button>
        </Link>
      </div>
    </div>
  )
}
