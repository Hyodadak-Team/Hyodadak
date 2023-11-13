import React from 'react'
import { Link } from 'react-router-dom'

interface FinBoxProps {
  onClose: () => void
}

export default function SimulationFin(props: FinBoxProps) {
  const reward = 1000 // 시뮬레이션 당 용돈 값 받아오기 예정

  const { onClose } = props
  const closeBox = () => {
    onClose()
  }

  return (
    <div className="fin_modal">
      <button
        type="button"
        onClick={closeBox}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            closeBox()
          }
        }}
      >
        <img src="/img/xmark_icon_gray.svg" alt="닫기icon" />
      </button>
      <div className="fin_content">
        <p className="fin_title">축하드립니다</p>
        <p>
          서브웨이 무인주문기 체험을 완료했습니다
          <br />
          용돈 지급받으세요
        </p>
        <div className="fin_btns">
          <Link to="/simulation/subwayhome">
            <div className="fin_btn subColor">다시 하기</div>
          </Link>
          <Link to="/simulation">
            {/* 용돈 DB값 증가 */}
            <div className="fin_btn mainColor">용돈 {reward}원 지급받기</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
