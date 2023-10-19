import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Mypage() {
  const [data, setData] = useState({
    profile_img: '',
    name: '박지원',
    money: 1000,
    question: 4,
    partner_num: 5,
  }) // 백엔드 작업 후 빈 {} 로 수정필요
  const [modifiyInput, setModifiyInput] = useState('')
  const [modifiyMode, setModifiyMode] = useState(false)
  useEffect(() => {
    // 나중에 백엔드에서 user정보 받아와서 업데이트 필요!
    setData({
      profile_img: '',
      name: '박지원',
      money: 1000,
      question: 4,
      partner_num: 5,
    })
  }, [])

  useEffect(() => {}, [modifiyMode])

  const modifyValue = (value: string) => {
    return (value === '' || value) && setModifiyMode(false)
  }

  return (
    <div className="innerBox ">
      <div className="ques_navbar">
        <img src="/img/home_icon.svg" className="icon home" alt="home-icon" />
        <Link to="/">
          <li>처음으로</li>
        </Link>
        <div className="divide-line" />
        <Link to="/notice">
          <li>내 정보</li>
        </Link>
      </div>
      <div className="ques_title">
        <p>내 정보</p>
      </div>
      <main className="mypage_ques">
        <div className="profile">
          <div className="imgBox">
            {data.profile_img ? (
              <img src="" alt="프로필 이미지" />
            ) : (
              <img
                className="basic_profile_img"
                src="/img/mypage_icon.svg"
                alt="프로필 이미지"
              />
            )}
            <Link to="#/">프로필 수정</Link>
          </div>

          <div className="nameBox">
            {modifiyMode ? (
              <input
                defaultValue={data.name}
                onChange={(e) => setModifiyInput(e.target.value)}
                data-testid="modify-input"
              />
            ) : (
              <p>{data.name}</p>
            )}
            {modifiyMode ? (
              <button type="button" onClick={() => modifyValue(modifiyInput)}>
                저장
              </button>
            ) : (
              <Link
                to="#/"
                onClick={() => setModifiyMode((cur: boolean) => !cur)}
              >
                수정
              </Link>
            )}
          </div>
        </div>
        <ul className="info">
          <li>
            <p>보유용돈 : {data.money}원</p>
            <Link to="/simulation">용돈 충전하기</Link>
          </li>
          <li>
            <p>채택질문 : {data.question}개</p>
            <Link to="/questionboard/mine">내 질문 보기</Link>
          </li>
          <li>
            <p>파트너 수 : {data.partner_num}명</p>
            <Link to="/mypartner">파트너 관리</Link>
          </li>
        </ul>
        <p className="logout">
          <Link to="/logout">로그아웃</Link>|<Link to="/quit">회원탈퇴</Link>
        </p>
      </main>
    </div>
  )
}
