import React from 'react'

export default function SimulationMainQues() {
  return (
    <div>
      <div className="simulation_btn">
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
      <div className="simulation_main_box">
        <div className="simulation_main_inner">
          <div className="inner_up">
            <div className="successable">
              <p>성공</p>
            </div>
            <img src="/img/simulation_subway.png" alt="서브웨이 로고" />
          </div>
          <div className="inner_down">
            <p className="inner_down_title">서브웨이 샌드위치</p>
            <p className="inner_down_subtitle">무인주문기 · 용돈1000</p>
          </div>
        </div>
        <div className="simulation_main_inner">
          <div className="inner_up">
            <div className="successable">
              <p>성공</p>
            </div>
            <img src="/img/simulation_subway.png" alt="서브웨이 로고" />
          </div>
          <div className="inner_down" />
        </div>
        <div className="simulation_main_inner">
          <div className="inner_up">
            <div className="successable">
              <p>성공</p>
            </div>
            <img src="/img/simulation_subway.png" alt="서브웨이 로고" />
          </div>
          <div className="inner_down" />
        </div>
        <div className="simulation_main_inner">
          <div className="inner_up">
            <div className="successable">
              <p>성공</p>
            </div>
            <img src="/img/simulation_subway.png" alt="서브웨이 로고" />
          </div>
          <div className="inner_down" />
        </div>
      </div>
      <p className="simulation_update">새로운 서비스 업데이트 예정입니다.</p>
    </div>
  )
}
