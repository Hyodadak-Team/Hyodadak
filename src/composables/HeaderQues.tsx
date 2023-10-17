import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'

export default function HeadeQues() {
  const [notice, setNotice] = useState<boolean>(false)
  useEffect(() => {
    // 나중에 백엔드에서 user정보 받아와서 업데이트 필요!
    setNotice(false)
  }, [])
  return (
    <div className="header header_ques">
      <div className="innerBox flexBtw">
        <img src="" alt="효다닥로고" />
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
            <Link to="/notice">
              <img
                src={`/img/notice_${!notice ? 'off' : 'on'}_icon.svg`}
                alt="알림icon"
              />
              알림
            </Link>
          </li>
          <li>
            <Link to="/mypage">
              <img src="/img/mypage_icon.svg" alt="내정보icon" />내 정보
            </Link>
          </li>
        </ul>
        <Link
          to="/CreateQuestion"
          className="btn_header_main btn_header_main_on"
        >
          <img src="/img/ques_icon.svg" alt="" />
          질문하기
        </Link>
      </div>
    </div>
  )
}
