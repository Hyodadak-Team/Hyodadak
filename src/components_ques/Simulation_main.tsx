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
          <div className="simulation_main_card" />
          <div className="simulation_main_card" />
          <div className="simulation_main_card" />
        </div>
      </div>
    </div>
  )
}
