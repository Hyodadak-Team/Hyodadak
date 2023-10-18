import React from 'react'

export default function SimulationBanner() {
  return (
    <div className="banner">
      <div className="shortCut">
        <p>처음으로</p>
        <p>체험하기</p>
      </div>
      <div className="main_image">
        <img src="/img/simulation_main_image.png" alt="메인 이미지" />
      </div>
      <div className="main_title">
        <h1>디지털 서비스 체험하기</h1>
        <h3>여러 가지 디지털 서비스의 사용 방법을 실제처럼 배워요!</h3>
      </div>
      <ul className="sub_content">
        <li>실생활의 다양한 디지털 서비스를 체험하고 연습할 수 있어요</li>
        <li>체험을 완료하면 용돈이 지급되어 질문게시판에서 사용할 수 있어요</li>
      </ul>
    </div>
  )
}
