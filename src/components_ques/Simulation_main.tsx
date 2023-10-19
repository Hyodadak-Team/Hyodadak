import React from 'react'

export default function SimulationMainQues() {
  return (
    <div>
      <div className="simulation_btn">
        <li>전체</li>
        <li>무인주문기</li>
        <li>금융서비스</li>
        <li>상품구매</li>
        <li>예매</li>
        <li>이동수단</li>
        <li>기타</li>
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
