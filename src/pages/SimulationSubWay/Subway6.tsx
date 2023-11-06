import React from 'react'
import { Link } from 'react-router-dom'

export default function SubWay6() {
  return (
    <div className="inner">
      <div className="SubWaySimulation1">
        <div className="SubwayDisplay6">
          <div className="Subway_choose_bread_header">
            <img src="/img/subway_logo.svg" alt="로고" />
            <span className="Subway_choose_bread_header_first">햄</span>
            <span className="Subway_choose_bread_header_second">
              {' '}
              - 치즈 선택
            </span>
          </div>
          <img
            className="Subway_choose_cheeze"
            src="/img/image chooseCheeze.svg"
            alt="치즈 화면"
          />
          <img
            className="Subway_sured"
            src="/img/image 슈레드.svg"
            alt="치즈 화면"
          />
          <img
            className="Subway_american"
            src="/img/image 아메리카.svg"
            alt="치즈 화면"
          />
          <img
            className="Subway_mozza"
            src="/img/image 모짜렐라.svg"
            alt="치즈 화면"
          />
          <img
            className="Subway_notchoose"
            src="/img/image 선택안함.svg"
            alt="치즈 화면"
          />

          {/* X 닫기 버튼 아이콘 */}
          <div className="Subway_total">
            <div className="Subway_total_box">
              <p>0</p>
              <img src="/img/image putorder.svg" alt="주문 담기" />
              {/* 클릭시 밑에 div로 체크된 정보들 입력되게 */}
            </div>
            <div className="Subway_choose">
              <div className="Subway_choose_menu">
                <div className="Subway_choose_menu_kind default">
                  <p>빵</p>
                </div>
                <div className="Subway_choose_menu_detail">
                  <div>15cm</div>
                  <div>토스팅</div>
                  <div>화이트</div>
                </div>
              </div>
              <div className="Subway_choose_menu">
                <div className="Subway_choose_menu_kind default">
                  <p>치즈</p>
                </div>
                <div className="Subway_choose_menu_detail">
                  <div>아메리카 치즈</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="SubwaySteb6">
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
                <li className="start_content">치즈 종류를 선택해주세요.</li>
                <li className="second_content">
                  주문 담기를 눌러 치즈 선택을 완료합니다.
                </li>
                <div className="option">
                  <p className="option_title">부가 기능</p>
                  <ul>
                    <li>홈버튼</li>
                    <p>처음 화면으로 이동할 수 있습니다.</p>
                    <li>이전 다음 버튼</li>
                    <p>다른 종류의 메뉴로 넘어갈 수 있습니다.</p>
                    {/* <li>아래 화살표 버튼</li>
                    <p>
                      아래로 이동해 메뉴를 더 볼 수 있습니다. 화면을
                      쓸어내리거나 올려서 이동할 수도 있습니다.
                    </p> */}
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
