import React from 'react'
import { Link } from 'react-router-dom'

export default function SubWay4() {
  return (
    <div className="inner">
      <div className="SubWaySimulation1">
        <div className="SubwayDisplay4">
          <div className="opacity_dark" />
          <div className="Subway_choose">
            <div className="Subway_choose_title">
              <img src="" alt="" />
              <p>햄</p>
            </div>
            <div className="Subway_choose_check">
              <div />
              <div />
            </div>
            <div className="Subway_choose_ok">
              <p>확인</p>
            </div>
          </div>
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
          <img
            className="Subway_ham"
            src="/img/image ham.svg"
            alt="서브웨이 3"
          />
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
              <img src="/img/image 67.svg" alt="주문결제" />
            </div>
          </div>
        </div>
        <div className="SubwaySteb4">
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
                  기본조합으로 주문하는 경우, 선택하세요.
                </li>
                <li className="second_content">
                  빵 길이와 빵을 데울지 선택하세요.
                </li>
                <li className="third_content">
                  만약 샌드위치 속재료를 직접 고르는 경우, 선택하세요.
                </li>
                <li className="forth_content">마지막으로 확인을 눌러주세요.</li>
                <div className="option">
                  <p className="option_title">부가 기능</p>
                  <ul>
                    <li>닫기버튼</li>
                    <p>현재 창이 닫힙니다.</p>
                  </ul>
                </div>
                <div className="option" />
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
