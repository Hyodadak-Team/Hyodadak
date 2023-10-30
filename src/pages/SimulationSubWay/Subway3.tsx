import React from 'react'
import { Link } from 'react-router-dom'

export default function SubWay3() {
  return (
    <div className="inner">
      <div className="SubWaySimulation1">
        <div className="SubwayDisplay1">
          <img
            className="Subway_menu"
            src="/img/image 66.svg"
            alt="서브웨이 3"
          />
          <img
            className="Subway_kind"
            src="/img/image menu.svg"
            alt="서브웨이 3"
          />
          <Link to="/simulation/subway4">
            <img
              className="Subway_ham"
              src="/img/image ham.svg"
              alt="서브웨이 3"
            />
          </Link>
          <img
            className="Subway_num_menu"
            src="/img/Group 1303.svg"
            alt="서브웨이 3"
          />
          <div className="Subway_total">
            <div className="Subway_total_box">
              <p>초기화면</p>
              <div className="Subway_total_count">
                <p>주문수량 0</p>
                <p>주문금액 0</p>
              </div>
            </div>
            <div className="Subway_total_pay">
              <img src="/img/image 주문결제.svg" alt="주문결제" />
            </div>
          </div>
        </div>
        <div className="SubwaySteb3">
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
              <div className="other">
                <img src="/img/Ellipse 239.svg" alt="막대기" />
                <p>시작하기</p>
              </div>
              <div className="start">
                <img src="/img/Ellipse 238.svg" alt="막대기" />
                <p className="start_title">메뉴 선택</p>
                <li className="start_content">
                  메뉴 종류를 선택해주세요. (업데이트 예정){' '}
                </li>
                <li className="second_content">햄 메뉴를 선택해주세요. </li>
                <ul className="option">
                  <p className="option_title">부가 기능</p>
                  <li className="option1">홈버튼</li>
                  <p>처음 화면으로 이동할 수 있습니다.</p>
                  <li className="option1">이전 다음 버튼</li>
                  <p>다른 종류의 메뉴로 넘어갈 수 있습니다.</p>
                  <li className="option1">아래 화살표 버튼</li>
                  <p>
                    아래로 이동해 메뉴를 더 볼 수 있습니다.화면을 쓸어내리거나
                    올려서 이동할 수 있습니다.
                  </p>
                  <p />
                </ul>
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
