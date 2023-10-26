import React from 'react'
import { Link } from 'react-router-dom'

export default function SimulationBanner() {
  return (
    <div className="backgroundBox">
      <div className="main_box innerBox">
        <div className="main_title">
          <div className="ques_navbar">
            <img
              src="/img/home_icon.svg"
              className="icon home"
              alt="home-icon"
            />
            <Link to="/">
              <li>처음으로</li>
            </Link>
            <div className="divide-line" />
            <Link to="/notice">
              <li>체험하기</li>
            </Link>
          </div>
          <h1>디지털 서비스 체험하기</h1>
          <h3>여러 가지 디지털 서비스의 사용 방법을 실제처럼 배워요!</h3>
          <ul className="sub_content">
            <li>실생활의 다양한 디지털 서비스를 체험하고 연습할 수 있어요</li>
            <li>
              체험을 완료하면 용돈이 지급되어 질문게시판에서 사용할 수 있어요
            </li>
          </ul>
        </div>
        <div className="main_image">
          <img src="/img/undraw_check_boxes_re_v40f 1.svg" alt="메인 이미지" />
        </div>
      </div>
    </div>
  )
}
