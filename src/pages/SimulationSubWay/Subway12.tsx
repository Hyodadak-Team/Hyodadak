import { useState } from 'react'
import { Link } from 'react-router-dom'

function Subway12() {
  const [count, setCount] = useState(1)

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const increaseCount = () => {
    setCount(count + 1)
  }

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter' || event.key === ' ') {
      decreaseCount()
    }
  }
  const handleKeyUp = (event: { key: string }) => {
    if (event.key === 'Enter' || event.key === ' ') {
      increaseCount()
    }
  }

  return (
    <div className="inner">
      <div className="SubWaySimulation1">
        <div className="SubwayDisplay12">
          <img
            className="Subway_menu"
            src="/img/image 66.svg"
            alt="서브웨이 3"
          />
          <div className="opacity_dark" />
          <div className="Subway_choose">
            <div className="Subway_choose_title">
              <img src="/img/subway_logo.svg" alt="서브웨이 로고" />
              <p>스테이크&치즈</p>
            </div>
            <div className="Subway_choose_check">
              <div className="explanation">
                <p>아래에 주문한 내역을 확인한 후</p>
                <p>각각의 좌측 버튼을 눌러 수정할 수 있습니다.</p>
              </div>
              <div className="green_line bold" />
              <div className="Subway_choose_menu">
                <div className="Subway_choose_menu_kind default">
                  <p>빵</p>
                </div>
                <div className="Subway_choose_menu_detail">
                  <p>15CM, 토스팅, 화이트</p>
                </div>
              </div>
              <div className="Subway_choose_menu">
                <div className="Subway_choose_menu_kind default">
                  <p>치즈</p>
                </div>
                <div className="Subway_choose_menu_detail">
                  <p>아메리칸 치즈</p>
                </div>
              </div>
              <div className="Subway_choose_menu">
                <div className="Subway_choose_menu_kind default">
                  <p>야채</p>
                </div>
                <div className="Subway_choose_menu_detail">
                  <p>
                    양상추, 토마토, 오이, 피망, 양파, 피클, 올리브, 할라피뇨
                  </p>
                </div>
              </div>
              <div className="Subway_choose_menu">
                <div className="Subway_choose_menu_kind default">
                  <p>소스/시즈닝</p>
                </div>
                <div className="Subway_choose_menu_detail">
                  <p>마요네즈, 사우스 웨스트 치폴레</p>
                </div>
              </div>
              <div className="yellow_line_light" />
              <div className="Subway_choose_menu">
                <div className="Subway_choose_menu_kind option">
                  <p>추가선택</p>
                </div>
                <div className="Subway_choose_menu_detail" />
              </div>
              <div className="Subway_choose_menu">
                <div className="Subway_choose_menu_kind option">
                  <p>쿠키/칩/음료</p>
                </div>
                <div className="Subway_choose_menu_detail">
                  <p>[+2,500] 탄산음료 16oz, 라즈베리 치즈케익 쿠키</p>
                </div>
              </div>
              <div className="Subway_choose_menu">
                <div className="Subway_choose_menu_kind request">
                  <p>요청사항</p>
                </div>
                <div className="Subway_choose_menu_detail" />
              </div>
              <div className="green_line bold" />
              <div className="Subway_calculate">
                <div className="Subway_calculate_counts">
                  <p>수량</p>
                  <div
                    className="count_btn"
                    onClick={decreaseCount}
                    onKeyDown={handleKeyDown}
                    role="button"
                    tabIndex={0}
                  >
                    <p>-</p>
                  </div>
                  <div className="menu_counts">{count}</div>
                  <div
                    className="count_btn"
                    onClick={increaseCount}
                    onKeyDown={handleKeyUp}
                    role="button"
                    tabIndex={0}
                  >
                    <p>+</p>
                  </div>
                </div>
                <div className="Subway_calculate_amount">
                  <p>금액</p>
                  <p className="total_amount">{10400 * count}</p>
                </div>
              </div>
            </div>

            <div className="Subway_choose_button">
              <div className="Subway_choose cancel">
                <p>취소</p>
              </div>
              <div className="Subway_choose ok">
                <p>확인</p>
              </div>
            </div>
          </div>
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
        <div className="SubwaySteb12">
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
                  앞서 선택한 항목들을 확인할 수 있습니다.
                </li>
                <li className="second_content">
                  해당 메뉴의 수량을 선택할 수 있습니다.
                </li>
                <li className="third_content">
                  금액과 모든 사항을 확인하고, 확인을 눌러주세요.
                </li>
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

export default Subway12
