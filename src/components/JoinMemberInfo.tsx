import React from 'react'

export default function JoinMemberInfo() {
  return (
    <div className="all">
      <div className="container">
        <div className="info">회원정보를 입력해주세요 !</div>
        <div className="join_wrap">
          <form className="form_wrap">
            <div className="form_row">
              <div className="form_row_title">아이디</div>
              <div className="form_row_content include_btn">
                <input placeholder="아이디를 입력해주세요" />
                <button type="button">중복체크</button>
              </div>
            </div>
            <div className="form_row">
              <div className="form_row_title">비밀번호</div>
              <div className="form_row_content">
                <input type="password" placeholder="비밀번호를 입력해주세요" />
              </div>
            </div>
            <div className="comment_rule">
              <span className="material-symbols-outlined">error</span>
              &nbsp;비밀번호는 특수기호 숫자가 반드시 포함됩니다.
            </div>
            <div className="form_row">
              <div className="form_row_title">비밀번호 확인</div>
              <div className="form_row_content">
                <input
                  type="password"
                  placeholder="비밀번호를 한 번 더 입력해주세요"
                />
              </div>
            </div>
          </form>
          <div className="btn_set">
            <button type="button" className="btn_before">
              이전
            </button>
            <button type="button" className="btn_after">
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
