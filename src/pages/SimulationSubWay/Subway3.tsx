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
              <img src="/img/image 67.svg" alt="주문결제" />
            </div>
          </div>
        </div>
        <div className="SubwaySteb1" />
      </div>
    </div>
  )
}
