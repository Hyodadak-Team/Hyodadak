import React from 'react'
import { Link } from 'react-router-dom'

// 키오스크 두 번째 화면

export default function SubWay2() {
  return (
    <div className="inner">
      <div className="SubWaySimulation1">
        <div className="SubwayDisplay2">
          <img
            className="Subway_menu"
            src="/img/image 66.svg"
            alt="서브웨이 1"
          />
          <Link to="/simulation/subway3" />
          <div className="Subway_total">
            <div className="Subway_total_box">
              <p>초기화면</p>
              <div className="Subway_total_count">
                <p>주문수량 0</p>
                <p>주문금액 0</p>
              </div>
            </div>
            <div className="Subway_total_pay">
              <img src="/img/image 67.svg" alt="주문결제" />
            </div>
          </div>
        </div>
        <div className="SubwaySteb2">
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
            <Link to="/simulation">
              <li>체험하기</li>
            </Link>
            <div className="divide-line" />
            <Link to="/simulation/subwayhome">
              <li>서브웨이</li>
            </Link>
          </div>
          <div className="subwaySteb">
            <ul>
              <img
                className="stick"
                src="/img/Rectangle 532.svg"
                alt="막대기"
              />
              <div className="start">
                <img src="/img/Ellipse 238.svg" alt="막대기" />
                <p className="start_title">시작하기</p>
                <li className="start_content">
                  매장에서 먹는 경우 선택해주세요.{' '}
                </li>
                <li className="second_content">포장할 경우 선택해주세요. </li>
                <li className="third_content">확인을 눌러주세요. </li>
              </div>
              <div className="other">
                <img src="/img/Ellipse 239.svg" alt="막대기" />
                <p>메뉴 선택</p>
              </div>
              <div className="other">
                <img src="/img/Ellipse 239.svg" alt="막대기" />
                <p>결제하기</p>
              </div>
              <div className="other">
                <img src="/img/Ellipse 239.svg" alt="막대기" />
                <p>완료</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
