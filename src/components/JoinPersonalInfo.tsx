import React from 'react'

interface PagenationBtnType {
  pageIndex: number
  setPageIndex: React.Dispatch<React.SetStateAction<number>>
}
export default function JoinPersonalInfo(props: PagenationBtnType) {
  const { pageIndex, setPageIndex } = props
  return (
    <div className="all">
      <div className="container">
        <div className="info">개인정보를 입력해주세요 !</div>
        <div className="join_wrap">
          <form className="form_wrap">
            <div className="form_row">
              <div className="form_row_title">이름</div>
              <div className="form_row_content">
                <input placeholder="이름을 입력해주세요" />
              </div>
            </div>
            <div className="form_row">
              <div className="form_row_title">전화번호</div>
              <div className="form_row_content include_btn">
                <input placeholder="전화번호를 입력해주세요" />
                <button type="button">번호인증</button>
              </div>
            </div>
            <div className="comment_rule">
              <span className="material-symbols-outlined">error</span>
              &nbsp;&apos;번호인증&apos;을 누르고 메시지를 확인하세요
            </div>
            <div className="form_row">
              <div className="form_row_title" />
              <div className="form_row_content">
                <input placeholder="인증번호를 입력해주세요" />
              </div>
            </div>
          </form>
          <div className="btn_set">
            <button
              type="button"
              className="btn_before"
              onClick={() => {
                setPageIndex(pageIndex - 1)
              }}
            >
              이전
            </button>
            <button
              type="button"
              className="btn_after"
              onClick={() => {
                setPageIndex(pageIndex + 1)
              }}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
