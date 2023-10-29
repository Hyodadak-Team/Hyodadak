import { Link } from 'react-router-dom'
import MyPartnerBox from '../components_ques/MyPartnerBox'
import { IPartnerInfo } from '../types/mypage'

export default function MyPartner() {
  // dataJson 삭제 예정
  const dataJson: IPartnerInfo[] = [
    {
      profile_img: '',
      name: '기믄정',
      major: ['이동수단', '무인자판기'],
      intro: '월/화/수에 소통이 활발한 파트너입니다',
      level: 3,
      question_num: 20,
      money: 20000,
      type: 'ans',
    },
    {
      profile_img: '',
      name: '박지원',
      major: ['이동수단', '무인자판기'],
      intro: '월/화/수에 소통이 활발한 파트너입니다',
      level: 3,
      question_num: 20,
      money: 20000,
      type: 'ans',
    },
  ]
  return (
    <div className="innerBox ques">
      <div className="ques_navbar">
        <img src="/img/home_icon.svg" className="icon home" alt="home-icon" />
        <Link to="/">
          <li>처음으로</li>
        </Link>
        <div className="divide-line" />
        <Link to="/mypage">
          <li>내 정보</li>
        </Link>
        <div className="divide-line" />
        <Link to="/mypartner">
          <li>파트너관리</li>
        </Link>
      </div>
      <div className="ques_title">
        <p>파트너관리</p>
      </div>
      <div className="mypartner_container">
        {dataJson.map((el) => {
          return <MyPartnerBox data={el} />
        })}
      </div>
    </div>
  )
}
