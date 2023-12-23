import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import AlertModal from '../components_res/AlertModal'

interface HeaderQuesProps {
  user: boolean
}

export default function HeadeQues(props: HeaderQuesProps) {
  const { user } = props
  const [notice, setNotice] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>('')
  useEffect(() => {
    const getToken = localStorage.getItem('token')
    setToken(getToken)
    setNotice(false)
  }, []) // TODO: 나중에 의존성 배열에 전역적으로 user의 로그인상태를 확인해주는 변수를 담아서 로그인에 따라 헤더가 변경되도록 변경 필요!!!
  const noticeRef = useRef<HTMLDivElement>(null)
  const noticeBtnClick = (): void => {
    if (noticeRef.current?.classList.value === 'alertBox') {
      noticeRef.current.classList.value = 'alertBox hidden'
    } else if (noticeRef.current?.classList.value === 'alertBox hidden') {
      noticeRef.current.classList.value = 'alertBox'
    }
  }

  return (
    <div className="header header_ques">
      <div className="innerBox flexBtw">
        <Link to="/main_ques">
          <img src="" alt="효다닥로고" />
        </Link>
        <ul className="flexBtw naviMenu">
          <li>
            <Link to="/questionBoard">질문게시판</Link>
          </li>
          <li>
            <Link to="/simulation">체험하기</Link>
          </li>
        </ul>
        <div className="blank"> </div>
        <ul className="flexBtw">
          <li>
            <div className="btn_notice_box">
              <button type="button" onClick={noticeBtnClick}>
                <img
                  className="btn_notice"
                  src={`/img/notice_${!notice ? 'off' : 'on'}_icon.svg`}
                  alt="알림icon"
                />
                <p>알림</p>
              </button>
              <div ref={noticeRef} className="alertBox hidden">
                <AlertModal user={user} />
              </div>
            </div>
          </li>
          {token !== null ? (
            <li>
              <Link to="/mypage">
                <img src="/img/mypage_icon.svg" alt="내정보icon" />내 정보
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">
                <img src="/img/mypage_icon.svg" alt="내정보icon" />
                로그인
              </Link>
            </li>
          )}
        </ul>
        <Link
          to="/createQuestion"
          className="btn_header_main btn_header_main_on"
        >
          <img src="/img/ques_icon.svg" alt="" />
          질문하기
        </Link>
      </div>
    </div>
  )
}
