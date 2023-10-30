import React from 'react'

interface PagenationBtnType {
  pageIndex: number
  setPageIndex: React.Dispatch<React.SetStateAction<number>>
}
export default function JoinSelect(props: PagenationBtnType) {
  const { pageIndex, setPageIndex } = props
  return (
    <div className="all">
      <div className="container">
        <div className="info">당신은 어떤 유형인가요?</div>
        <div className="select_container">
          <div
            role="presentation"
            className="select_questioner"
            onClick={() => {
              setPageIndex(pageIndex + 1)
              console.log(pageIndex)
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
              setPageIndex(pageIndex + 1)
              console.log(pageIndex)
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
