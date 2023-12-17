import React, { Dispatch, SetStateAction, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface Type {
  setLogin: Dispatch<SetStateAction<boolean>>
}

export default function Login(props: Type) {
  const { setLogin } = props
  const navigate = useNavigate()
  const id = useRef(null)
  const pw = useRef(null)

  const navigateToJoin = () => {
    navigate('/join')
  }

  // 로그인을 위한 통신 (로그인 버튼 클릭시 /login으로 post 요청)
  const sendData = async (data) => {
    axios
      .post('http://localhost:4000/login', {
        id: data.id.current.value,
        pw: data.pw.current.value,
      })
      .then((result) => {
        console.log(result.data.token)
        window.localStorage.setItem('token', result.data.token)
        setLogin(true)
        navigate('/')
      })
  }

  return (
    <div className="all">
      <div className="container">
        <div className="info">효다닥에 오신것을 환영합니다.</div>
        <div className="login_top">
          <div className="login_wrap">
            <form>
              <div className="login_form_row">
                <input
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  ref={id}
                />
              </div>
              <div className="login_form_row">
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  ref={pw}
                />
              </div>
              <div className="comment_rule">
                <span className="material-symbols-outlined">error</span>
                &nbsp;비밀번호는 특수기호 숫자가 반드시 포함됩니다.
              </div>
              <div className="btn_set login_btn">
                <button
                  type="button"
                  className="member_login"
                  onClick={() => {
                    sendData({ id, pw })
                  }}
                >
                  로그인
                </button>
              </div>
              <div className="btn_set login_btn">
                <button type="button" className="kakao_login">
                  카카오톡 로그인
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="login_bottom">
          <div className="login_wrap">
            <hr />
            <div className="comment_join">효다닥이 처음이신가요?</div>
            <div className="btn_set join_btn">
              <button
                type="button"
                className="member_join"
                onClick={navigateToJoin}
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
