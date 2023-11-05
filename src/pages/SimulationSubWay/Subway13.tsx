import { Link } from 'react-router-dom'

function Subway12() {
  return (
    <div className="inner">
      <div className="SubWaySimulation1">
        <div className="SubwayDisplay13">
          <img
            className="Subway_menu"
            src="/img/image 66.svg"
            alt="서브웨이 3"
          />
          <div className="Subway_total">
            <div className="Subway_total_box">
              <p>전체취소</p>
              <div className="Subway_total_count">
                <div className="counts_section">
                  <p>주문수량</p>
                  <p className="counts">1</p>
                </div>
                <div className="price_section">
                  <p>주문금액</p>
                  <p className="price">10400</p>
                </div>
              </div>
            </div>
            <div className="Subway_total_menus">
              <div className="menu-default">
                <div>주문수정</div>
                <div>스테이크&치즈 1 10400</div>
                <button type="button">+</button>
                <button type="button">-</button>
              </div>
            </div>
            <div className="Subway_total_pay">
              <img src="/img/image 67.svg" alt="주문결제" />
            </div>
          </div>
        </div>
        <div className="SubwaySteb13">
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
