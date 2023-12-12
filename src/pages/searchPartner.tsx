import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PartnerInfo } from '../types/searchPartner'
import PartnerBox from '../components_ques/PartnerBox'

export default function SearchPartner() {
  // 답변자 전체 데이터 가져와야. 현재는 더보기 기능 확인 위해 여러개 넣어둠.
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

    {
      image: 'partnerbox_img.svg',
      name: '6',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '7',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '8',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '9',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '10',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '1',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '2',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '3',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '4',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '5',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '6',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '7',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '8',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '9',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '10',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '1',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
    {
      image: 'partnerbox_img.svg',
      name: '2',
      category: ['무인주문기', '이동수단', '기타'],
      expl: '월/화/수에 소통이 활발한 파트너입니다.',
      level: 3,
      answer: 20,
      point: 20000,
    },
  ]

  // 더보기 기능
  const initialVisible = 10 // 초기에 보이는 답변자 수

  const [visibleData, setVisibleData] = useState<PartnerInfo[]>(
    dataJson.slice(0, initialVisible),
  )
  const [visibleCount, setVisibleCount] = useState(initialVisible)

  const loadMoreData = () => {
    const nextVisible = visibleCount + 10
    setVisibleData(dataJson.slice(0, nextVisible))
    setVisibleCount(nextVisible)
  }

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
          {visibleData.map((el) => (
            <PartnerBox data={el} />
          ))}
        </div>

        {visibleCount < dataJson.length && (
          <div className="partner_more">
            <button type="button" onClick={loadMoreData}>
              <img src="/img/plus-icon.svg" alt="더보기icon" />
              더보기
            </button>
          </div>
        )}
      </div>
    </>
  )
}
