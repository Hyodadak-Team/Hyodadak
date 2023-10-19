import { DataType } from '../types/mypage'

type MyPartnerBoxProps = {
  data: DataType
}

export default function MyPartnerBox({
  data: {
    profile_img: profileImg,
    name,
    major,
    intro,
    level,
    question_num: questionNum,
    money,
  },
}: MyPartnerBoxProps) {
  return (
    <div className="my_partner_comp">
      <img
        className={`${profileImg || 'basic_profile_img'} profile_img`}
        src={profileImg || '/img/mypage_icon.svg'}
        alt="프로필이미지"
      />
      <div className="partnerBox">
        <p className="name">{name}</p>
        <p className="major">{major.map((el: string) => `${el} · `)}</p>
        <p>{intro}</p>
        <div className="etc">
          <span>Lv.{level}</span> <span>답변수 {questionNum}</span>{' '}
          <span>쌓인 용돈 {money}</span>
        </div>
      </div>
      <div className="btn_gradient_cut">
        <img src="/img/cut_icon.svg" alt="" />
        파트너 끊기
      </div>
    </div>
  )
}
