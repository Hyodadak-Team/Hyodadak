import React from 'react'
import { Link } from 'react-router-dom'

export default function SubWay2() {
  return (
    <div className="inner">
      <div className="SubWaySimulation1">
        <div className="SubwayDisplay1">
          <img
            className="Subway_menu"
            src="/img/image 66.svg"
            alt="서브웨이 1"
          />
          <Link to="/simulation/subway3">
            <img
              className="Subway_kio1"
              src="/img/image 96.svg"
              alt="키오스크 칸"
            />
          </Link>
        </div>
        <div className="SubwaySteb1" />
      </div>
    </div>
  )
}
