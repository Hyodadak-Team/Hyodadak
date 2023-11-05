import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ResAlert from '../components_res/resAlert'

export default function HeadeRes() {
  const [notice, setNotice] = useState<boolean>(false)
  const [register, setRegister] = useState<boolean>(false)
  const noticeRef = useRef<HTMLDivElement>(null)
  const noticeBtnClick = (): void => {
    if (noticeRef.current?.classList.value === 'alertBox') {
      noticeRef.current.classList.value = 'alertBox hidden'
    } else if (noticeRef.current?.classList.value === 'alertBox hidden') {
      noticeRef.current.classList.value = 'alertBox'
    }
  }
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
            <div className="btn_notice_box">
              <button type="button" onClick={noticeBtnClick}>
                <img
                  className="btn_notice"
                  src={`/img/notice_${!notice ? 'off' : 'on'}_icon.svg`}
                  alt="알림icon"
                />
              </button>
              <div ref={noticeRef} className="alertBox hidden">
                <ResAlert />
              </div>
            </div>
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
