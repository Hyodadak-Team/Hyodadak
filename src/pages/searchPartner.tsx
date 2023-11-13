import React from 'react'
import { Link } from 'react-router-dom'
import { PartnerInfo } from '../types/searchPartner'
import PartnerBox from '../components_ques/PartnerBox'

export default function SearchPartner() {
  // 데이터 가져오기
  const dataJson: PartnerInfo[] = [
    {
      image: 'partnerbox_img.svg',
      name: '기믄정',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '지원',
      category: ['이동수단', '상품구매'],
      expl: '자칭 IT 전문가인 파트너입니다.',
      level: 5,
      answer: 30,
      point: 30000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '민선',
      category: ['이동수단', '스마트가전', '상품구매', '기타'],
      expl: '무엇이든 물어봐주세요!',
      level: 2,
      answer: 15,
      point: 10000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '송민선',
      category: ['예약'],
      expl: '친절히 알려드립니다.',
      level: 1,
      answer: 10,
      point: 5000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '기믄정',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
  ]

  return (
    <>
      <div className="banner_bg">
        <div className="innerBox ques">
          <div className="ques_navbar">
            <img
              src="/img/home_icon.svg"
              className="icon home"
              alt="home-icon"
            />
            <Link to="/main_ques">
              <li>처음으로</li>
            </Link>
            <div className="divide-line" />
            <Link to="/searchPartner">
              <li>파트너 둘러보기</li>
            </Link>
          </div>
          <div className="banner">
            <div className="banner_text">
              <p className="banner_title">파트너 둘러보기</p>
              <p className="banner_subtitle">
                1:1 실시간 채팅으로 보다 정확하고 신속한 답변이 가능합니다
              </p>
              <ul>
                <li>
                  <b>실시간으로 채팅</b>하며 질문하고 답할 수 있어요
                </li>
                <li>
                  질문을 올리면 <b>파트너에게 먼저</b> 답변 받을 수 있어요
                </li>
              </ul>
            </div>
            <div className="banner_img">
              <img src="/img/searchpartner.svg" alt="파트너 둘러보기img" />
            </div>
          </div>
        </div>
      </div>

      <div className="innerBox ques">
        <div className="partner_list">
          {dataJson.map((el) => (
            <PartnerBox data={el} />
          ))}
        </div>
      </div>
    </>
  )
}
