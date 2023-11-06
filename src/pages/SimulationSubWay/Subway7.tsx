import React from 'react'
import { Link } from 'react-router-dom'

export default function SubWay7() {
  return (
    <div className="inner">
      <div className="SubWaySimulation1">
        <div className="SubwayDisplay7">
          <div className="Subway_choose_bread_header">
            <img src="/img/subway_logo.svg" alt="로고" />
            <span className="Subway_choose_bread_header_first">햄</span>
            <span className="Subway_choose_bread_header_second">
              {' '}
              - 야채 선택
            </span>
          </div>
          <img
            className="Subway_choose_begi"
            src="/img/image chooseBegi.svg"
            alt="야채 화면"
          />
          <img
            className="Subway_Lactuca"
            src="/img/image 양상추.svg"
            alt="야채 화면"
          />
          <img
            className="Subway_cucumber"
            src="/img/image 오이.svg"
            alt="야채 화면"
          />
          <img
            className="Subway_tomato"
            src="/img/image 토마토.svg"
            alt="야채 화면"
          />
          <img
            className="Subway_pimang"
            src="/img/image 피망.svg"
            alt="야채 화면"
          />
          <img
            className="Subway_yangpa"
            src="/img/image 양파.svg"
            alt="야채 화면"
          />
          <div className="Subway_choose_allbegi">
            <img
              className="Subway_allbegi"
              src="/img/image allbegi.svg"
              alt="야채 화면"
            />
            <img
              className="Subway_notallbegi"
              src="/img/image notallbegi.svg"
              alt="야채 화면"
            />
          </div>

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
              <div className="Subway_choose_menu">
                <div className="Subway_choose_menu_kind default">
                  <p>야채</p>
                </div>
                <div className="Subway_choose_menu_detail">
                  <div className="Subway_choose_menu_detail_begi">
                    양상추, 토마토, 오이, 피망, 양파, 피클, 올리브, 할라피뇨
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="SubwaySteb7">
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
                  모든 야채를 선택하거나 뺼 수 있습니다.
                </li>
                <li className="second_content">원하는 야채를 선택해주세요.</li>
                <li className="third_content">
                  주문 담기를 눌러 치즈 선택을 완료합니다.
                </li>
                <div className="option">
                  <p className="option_title">부가 기능</p>
                  <ul>
                    <li>홈버튼</li>
                    <p>처음 화면으로 이동할 수 있습니다.</p>
                    <li>이전 다음 버튼</li>
                    <p>다른 종류의 메뉴로 넘어갈 수 있습니다.</p>
                    <li>아래 화살표 버튼</li>
                    <p>
                      아래로 이동해 메뉴를 더 볼 수 있습니다. 화면을
                      쓸어내리거나 올려서 이동할 수도 있습니다.
                    </p>
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
