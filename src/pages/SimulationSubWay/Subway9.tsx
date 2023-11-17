import React from 'react'
import { Link } from 'react-router-dom'

export default function newComponent() {
  return (
    <div className="innerBox flexBtw ques">
      <div className="display">
        <img src="" alt="" />
      </div>
      <div className="information">
        <div className="ques_navbar">
          <img src="/img/home_icon.svg" className="icon home" alt="home-icon" />
          <Link to="/">
            <li>처음으로</li>
          </Link>
          <div className="divide-line" />
          <Link to="/simulation">
            <li>체험하기</li>
          </Link>
          <div className="divide-line" />
          <Link to="/simulation/subwayhome">
            <li>서브웨이</li>
          </Link>
        </div>
        <ul className="main_step_container">
          <li className="main_step">시작하기</li>
          <li className="main_step step_on">
            메뉴 선택
            <ul className="sub_step_container">
              <li className="sub_step">
                1. 추가하고 싶은 재료를 선택해주세요. 추가금액이 발생합니다.
                원하지 않을 경우, 선택하지 않아도 됩니다.
              </li>
              <li className="sub_step">
                2. ‘주문담기’를 눌러 추가 재료 선택을 완료합니다.
              </li>
            </ul>
          </li>
          <li className="main_step">결제하기</li>
          <li className="main_step">완료</li>
        </ul>
      </div>
    </div>
  )
}
