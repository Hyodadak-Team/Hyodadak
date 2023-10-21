import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function IndexFirst() {
  const navigate = useNavigate()

  const navigateToLogin = () => {
    navigate('/login')
  }

  return (
    <div className="all">
      <div className="img_area">
        <img src="/img/index.png" alt="indexImg" />
      </div>
      <div className="info_area">
        <div className="info_container">
          <div className="first_info">과거와 미래를 잇다</div>
          <div className="second_info">
            <span>효다닥</span>에서 후다닥 해결해요
          </div>
          <div className="third_info">
            <span>
              아날로그에 익숙한 기성세대와 디지털에 친숙한 신세대의 만남.
            </span>
            <br />
            <span>
              누구나 편하게 도움받고 미리 연습할 수 있도록 효다닥이 함께합니다.
            </span>
          </div>
        </div>
        <div className="button_container">
          <button type="button" onClick={navigateToLogin}>
            로그인하고 서비스 이용하기
          </button>
        </div>
        <div className="img_container">
          <img src="/img/phone.png" alt="phoneImg" />
        </div>
      </div>
    </div>
  )
}
