import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'

export default function HeadeRes() {
  const [notice, setNotice] = useState<boolean>(false)
  const [register, setRegister] = useState<boolean>(false)
  useEffect(() => {
    // 나중에 백엔드에서 user정보 받아와서 업데이트 필요!
    setNotice(false)
    setRegister(false)
  }, [])
  return (
    <div className="header header_res">
      <div className="innerBox flexBtw">
        <Link to="/">
          <img src="" alt="효다닥로고" />
        </Link>
        <div className="blank"> </div>
        <ul className="flexBtw">
          <li>
            <Link to="/notice">
              <img
                src={`/img/notice_${!notice ? 'off' : 'on'}_icon.svg`}
                alt="알림icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/mypage">
              <img src="/img/mypage_icon.svg" alt="내정보icon" />
            </Link>
          </li>
        </ul>
        <Link
          to="/CreateQuestion"
          className={` btn_header_main_${
            register ? 'off' : 'on'
          } btn_header_main`}
        >
          {register ? '파트너 답변달기' : '파트너 등록하기'}
        </Link>
      </div>
    </div>
  )
}
