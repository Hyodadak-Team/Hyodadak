import React from 'react'
import { Link } from 'react-router-dom'

export default function Subway16() {
  const paymentMethods = [
    '신용카드',
    '써브카드',
    '써브포인트',
    '카카오페이',
    '페이코',
    '반환보증금 적립액',
    '네이버페이',
  ]

  // 결제금액 받아오기
  const price = 10400
  const totalPrice = price.toLocaleString()

  return (
    <div className="inner">
      <div className="SubWaySimulation1">
        <div className="SubwayDisplay16">
          <div className="subway16_modal">
            <div className="subway16_title">
              <img
                src="/img/simul_subway_logo.svg"
                alt="서브웨이 로고"
                className="logo"
              />
              <p>결제수단 선택</p>
              <img src="/img/xmark_icon.svg" alt="닫기icon" className="close" />
            </div>
            <div className="subway16_coupon">
              <p>쿠폰 사용</p>
              <div className="div_container">
                <div className="div_y">APP 용 설문조사 감사 쿠폰</div>
                <div className="div_g">멤버십 쿠폰</div>
              </div>
            </div>
            <div className="subway16_choice">
              <p className="choice_title">결제 선택</p>
              <p className="choice_content">
                *결제 수단 선택 전 쿠폰 사용을 결정해 주세요.
              </p>
              <div className="choices">
                {paymentMethods.map((text, index) => (
                  <div
                    // key={index}
                    className={`box ${index === 0 ? 'first' : ''}`}
                  >
                    {index === 0 ? (
                      <img src="/img/creditcard.svg" alt="신용카드icon" />
                    ) : null}
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="subway16_total">
              <p className="total_title">결제 내역</p>
              <div className="total_content">
                <div className="total_detail">
                  <div>주문금액</div>
                  <div>{totalPrice}</div>
                  <div>할인금액</div>
                  <div>0</div>
                  <div>결제금액</div>
                  <div>0</div>
                </div>
                <div className="total_price">
                  <div className="price_title">남은 결제금액</div>
                  <div className="price_value">{totalPrice}</div>
                </div>
              </div>
            </div>
            <Link to="/simulation/subway17">
              <div className="subway16_submit">확인</div>
            </Link>
          </div>
        </div>
        <div className="SubwaySteb16">
          <div className="ques_navbar">
            <img
              src="/img/home_icon.svg"
              className="icon home"
              alt="home-icon"
            />
            <Link to="/main_ques">
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
                <Link to="/simulation/subwayhome">
                  <p>시작하기</p>
                </Link>
              </div>
              <div className="other">
                <img src="/img/Ellipse 239.svg" alt="막대기" />
                <Link to="/simulation/subway3">
                  <p>메뉴 선택</p>
                </Link>
              </div>
              <div className="start">
                <img src="/img/Ellipse 238.svg" alt="막대기" />
                <p className="start_title">결제하기</p>
                <li className="start_content">결제 수단을 선택하세요.</li>
                <li className="second_content">
                  최종적으로 결제되는 금액을 확인할 수 있습니다.
                </li>
                <li className="third_content">
                  ‘확인’을 눌러 결제를 진행합니다.
                </li>
              </div>
              <div className="other">
                <img src="/img/Ellipse 239.svg" alt="막대기" />
                <p className="fin">완료</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
