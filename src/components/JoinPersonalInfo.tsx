import React, { useRef } from 'react'

interface Type {
  joinState: object
  setJoinState: React.Dispatch<React.SetStateAction<void>>
}
export default function JoinPersonalInfo(props: Type) {
  const { joinState, setJoinState } = props
  const userName = useRef(null)
  const userTel = useRef(null)
  return (
    <div className="all">
      <div className="container">
        <div className="info">개인정보를 입력해주세요 !</div>
        <div className="join_wrap">
          <form className="form_wrap">
            <div className="form_row">
              <div className="form_row_title">이름</div>
              <div className="form_row_content">
                <input placeholder="이름을 입력해주세요" ref={userName} />
              </div>
            </div>
            <div className="form_row">
              <div className="form_row_title">전화번호</div>
              <div className="form_row_content include_btn">
                <input placeholder="전화번호를 입력해주세요" ref={userTel} />
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
                setJoinState({
                  ...joinState,
                  pageIndex: joinState.pageIndex - 1,
                  user_type: '',
                })
              }}
            >
              이전
            </button>
            <button
              type="button"
              className="btn_after"
              onClick={() => {
                setJoinState({
                  ...joinState,
                  pageIndex: joinState.pageIndex + 1,
                  user_name: userName.current.value,
                  user_tel: userTel.current.value,
                })
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
