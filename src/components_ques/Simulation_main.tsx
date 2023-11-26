import React from 'react'
import { Link } from 'react-router-dom'

export default function SimulationMainQues() {
  return (
    <div>
      <div className="simulation_btn innerBox">
        <li>
          <button type="button">전체</button>
        </li>
        <li>
          <button type="button">무인주문기</button>
        </li>
        <li>
          <button type="button">금융서비스</button>
        </li>
        <li>
          <button type="button">상품구매</button>
        </li>
        <li>
          <button type="button">예매</button>
        </li>
        <li>
          <button type="button">이동수단</button>
        </li>
        <li>
          <button type="button">기타</button>
        </li>
      </div>
      <div className="simulation_main_box innerBox">
        <Link to="/simulation/subwayhome">
          <div className="simulation_main_inner">
            <div className="inner_up">
              <div className="successable">
                <p>출시 예정</p>
              </div>
              <img
                className="sublogo"
                src="/img/서브웨이 로고.svg"
                alt="서브웨이 로고"
              />
            </div>
            <div className="inner_down">
              <p className="inner_down_title">서브웨이 샌드위치</p>
              <p className="inner_down_subtitle">무인주문기 · 용돈1000</p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="simulation_main_inner">
            <div className="inner_up">
              <div className="successable">
                <p>출시 예정</p>
              </div>
              <img
                className="megalogo"
                src="/img/로고_메가MGC커피.svg"
                alt="메가커피 로고"
              />
            </div>
            <div className="inner_down">
              <p className="inner_down_title">메가 커피</p>
              <p className="inner_down_subtitle">무인주문기</p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="simulation_main_inner">
            <div className="inner_up">
              <div className="successable">
                <p>출시 예정</p>
              </div>
              <img
                className="meclogo"
                src="/img/image 92.svg"
                alt="맥도날드 로고"
              />
            </div>
            <div className="inner_down">
              <p className="inner_down_title">맥도날드</p>
              <p className="inner_down_subtitle">무인주문기</p>
            </div>
          </div>
        </Link>
      </div>
      <p className="simulation_update">새로운 서비스 업데이트 예정입니다.</p>
    </div>
  )
}
