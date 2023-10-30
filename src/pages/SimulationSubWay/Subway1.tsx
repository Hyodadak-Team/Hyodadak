import React from 'react'
import { Link } from 'react-router-dom'

// 키오스크 첫화면

export default function SubWay1() {
  return (
    <div className="inner">
      <div className="SubWaySimulation1">
        <div className="SubwayDisplay1">
          <img
            className="Subway_home"
            src="/img/서브웨이-홈 1.svg"
            alt="서브웨이 1"
          />
          <Link to="/simulation/subway2">
            <img
              className="Subway_kio1"
              src="/img/image 96.svg"
              alt="키오스크 칸"
            />
          </Link>
          <img
            className="Subway_kio2"
            src="/img/image 97.svg"
            alt="키오스크 칸"
          />
          <img
            className="Subway_num"
            src="/img/Group 1303.svg"
            alt="키오스크 칸"
          />
        </div>
        <div className="SubwaySteb1">
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
                <li className="start_content">주문하기를 눌러주세요. </li>
              </div>
              <div className="other">
                <img src="/img/Ellipse 239.svg" alt="막대기" />
                <li>메뉴 선택</li>
              </div>
              <div className="other">
                <img src="/img/Ellipse 239.svg" alt="막대기" />
                <li>결제하기</li>
              </div>
              <div className="other">
                <img src="/img/Ellipse 239.svg" alt="막대기" />
                <li>완료</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
