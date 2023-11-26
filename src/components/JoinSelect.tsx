import React from 'react'

interface Type {
  joinState: object
  setJoinState: React.Dispatch<React.SetStateAction<void>>
}
export default function JoinSelect(props: Type) {
  const { joinState, setJoinState } = props

  return (
    <div className="all">
      <div className="container">
        <div className="info">당신은 어떤 유형인가요?</div>
        <div className="select_container">
          <div
            role="presentation"
            className="select_questioner"
            onClick={() => {
              setJoinState({
                ...joinState,
                pageIndex: joinState.pageIndex + 1,
                user_type: 'questioner',
              })
            }}
          >
            <div className="img_area">
              <img src="/img/questioner.png" alt="select_questioner" />
            </div>
            <div className="explain_area">
              <div>디지털 사용에 궁금한게 많은</div>
              <div className="type">질문자</div>
            </div>
          </div>
          <div
            role="presentation"
            className="select_respondent"
            onClick={() => {
              setJoinState({
                ...joinState,
                pageIndex: joinState.pageIndex + 1,
                user_type: 'respondent',
              })
            }}
          >
            <div className="img_area">
              <img src="/img/respondent.png" alt="slect_respondent" />
            </div>
            <div className="explain_area">
              <div>디지털 사용법을 공유할 줄 아는</div>
              <div className="type">답변자</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
