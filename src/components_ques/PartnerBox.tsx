import React, { useState } from 'react'
import { PartnerInfo } from '../types/searchPartner'
import PartnerRequest from './PartnerRequest'

type PartnerBoxProps = {
  data: PartnerInfo
}

export default function PartnerBox({
  data: { image, name, category, expl, level, answer, point },
}: PartnerBoxProps) {
  const [visible, setVisible] = useState(false)

  const showApplyBox = () => {
    setVisible(!visible)
  }

  const closeApplyBox = () => {
    setVisible(!visible)
  }

  return (
    <>
      <div className="PartnerBox_comp">
        <img src={`../img/${image}`} alt="프로필img" />
        <div className="info_content">
          <span className="name">{name}</span> {/* 카테고리 3개까지만 출력 */}
          <span className="category">
            {category.map((el, idx) => {
              let str = ''
              if (idx < 2 && idx === category.length - 1) {
                str += el
                return str
              }
              if (idx < 2) {
                str += `${el} · `
              } else if (idx === 2) {
                str += el
              } else if (idx === 3) {
                str += ' ...'
              }
              return str
            })}
          </span>
          <p className="expl">{expl}</p>
          <span className="level">Lv.{level}</span>
          <span className="answer">답변수 {answer}</span>
          <span className="point">쌓인 용돈 {point}</span>
        </div>
        <div
          className={`btn_apply ${visible ? 'applied' : ''}`}
          onClick={showApplyBox}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              showApplyBox()
            }
          }}
          role="button"
          tabIndex={0}
        >
          파트너 요청하기
        </div>
      </div>
      {visible && <div className="blur" />}
      {visible && <PartnerRequest onClose={closeApplyBox} />}
    </>
  )
}
