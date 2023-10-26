import React from 'react'
import { Link } from 'react-router-dom'

export default function SubWay1() {
  return (
    <div className="inner">
      <div className="SubWaySimulation1">
        <div className="SubwayDisplay1">
          <img
            className="Subway_order"
            src="/img/키오스크 칸.svg"
            alt="키오스크 칸"
          />
          <img
            className="Subway_home"
            src="/img/서브웨이-홈 1.svg"
            alt="서브웨이 1"
          />
          <Link to="/simulation/subwayorder">
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
        <div className="SubwaySteb1" />
      </div>
    </div>
  )
}
