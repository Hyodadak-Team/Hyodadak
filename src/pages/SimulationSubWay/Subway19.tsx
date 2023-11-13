import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SimulationFin from '../../components_ques/SimulationFin'

export default function Subway19() {
  const [visible, setVisible] = useState(false)

  const showFinBox = () => {
    setVisible(!visible)
  }

  const closeFinBox = () => {
    setVisible(!visible)
  }

  return (
    <div className="inner">
      <div className="SubWaySimulation1">
        <div className="SubwayDisplay19">
          <div className="subway19_modal">
            <div className="subway19_title">
              <img
                src="/img/simul_subway_logo.svg"
                alt="서브웨이 로고"
                className="logo"
              />
              <p>결제완료</p>
              <img src="/img/xmark_icon.svg" alt="닫기icon" className="close" />
            </div>
            <div className="subway19_content">
              <p>결제가 완료 되었습니다. 호출번호를 확인하여 주세요.</p>
              <p className="num_title">호출번호</p>
              <p className="num_content">1036</p>
              <img src="/img/subway19.svg" alt="영수증img" />
              <p>영수증이 출력되었습니다.</p>
            </div>
            <div
              className={`subway19_submit ${visible ? 'done' : ''}`}
              onClick={showFinBox}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  showFinBox()
                }
              }}
              role="button"
              tabIndex={0}
            >
              확인
            </div>
          </div>
        </div>
        <div className={`SubwaySteb19 ${visible ? 'done' : ''}`}>
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
                <li className="start_content">
                  결제가 완료되었습니다. 영수증에 출력된 번호를 확인해 주세요.
                  해당 체험에서는 ‘확인’을 누르면, 용돈이 지급됩니다.
                </li>
              </div>
              <div className="other">
                <img src="/img/Ellipse 239.svg" alt="막대기" />
                <p className="fin">완료</p>
              </div>
            </ul>
          </div>
        </div>
        {visible && <SimulationFin onClose={closeFinBox} />}
      </div>
    </div>
  )
}
