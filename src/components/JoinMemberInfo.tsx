// import React, { useRef, useCallback } from 'react'
import React, { useRef } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

interface Type {
  joinState: object
  setJoinState: React.Dispatch<React.SetStateAction<void>>
}

export default function JoinMemberInfo(props: Type) {
  const { joinState, setJoinState } = props
  const userId = useRef(null)
  const userPw = useRef(null)
  // const navigate = useNavigate()

  // const onSubmit = useCallback(async () => {
  //   try {
  //     await axios
  //       .post('http://localhost:4000/join', {
  //         joinState: joinState,
  //       })
  //       .then((res) => {
  //         console.log('response:', res)
  //         if (res.status === 200) {
  //           navigate('/Login')
  //         }
  //       })
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }, [joinState])

  const initData = () => {
    axios
      .post('http://localhost:4000/join/init')
      .then(function (response) {
        console.log(response)
        if (response.status === 200) {
          alert('초기 데이터 셋 성공')
        }
      })
      .catch(function (error) {
        console.log(error)
        alert('초기 데이터 셋 실패')
      })
  }

  return (
    <div className="all">
      <div className="container">
        <div className="info">회원정보를 입력해주세요 !</div>
        <div className="join_wrap">
          <form className="form_wrap">
            <div className="form_row">
              <div className="form_row_title">아이디</div>
              <div className="form_row_content include_btn">
                <input placeholder="아이디를 입력해주세요" ref={userId} />
                <button type="button">중복체크</button>
              </div>
            </div>
            <div className="form_row">
              <div className="form_row_title">비밀번호</div>
              <div className="form_row_content">
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  ref={userPw}
                />
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
            <button
              type="button"
              className="btn_before"
              onClick={() => {
                setJoinState({
                  ...joinState,
                  pageIndex: joinState.pageIndex - 1,
                  user_name: '',
                  user_tel: '',
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
                  user_id: userId.current.value,
                  user_password: userPw.current.value,
                })
                // onSubmit(),
                initData()
              }}
            >
              회원가입 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
