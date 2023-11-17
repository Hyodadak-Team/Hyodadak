/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Title from '../components_ques/Title'
import ManagementBox from '../components_res/ManagementBox'
import ProfileModal from '../components/PropfileModal'

export default function Mypage() {
  const [open, setOpen] = useState(false)
  const [userData, setUserData] = useState({
    profileImg: '',
    name: '박지원',
    money: 1000,
    questionNum: 4,
    partnerNum: 5,
    type: 'res',
    level: 2,
    major: ['무인자판기', '이동수단', '기타'],
    intro:
      '안녕하세요~! 저는 송파구에 사는 IT 천재 박지원입니다. 모르시는 것들에 대해 얼마든지 질문주세요. 친절하게 답변 해드릴게요. 가까운 분들이라면 직접 찾아가서 알려드릴 수 도 있어요!',
  }) // 백엔드 작업 후 빈 {} 로 수정필요
  const [modifiyInput, setModifiyInput] = useState('')
  const [modifiyMode, setModifiyMode] = useState(false)
  useEffect(() => {
    // 나중에 백엔드에서 user정보 받아와서 업데이트 필요!
    setUserData({
      profileImg: '',
      name: '박지원',
      money: 1000,
      questionNum: 4,
      partnerNum: 5,
      type: 'res',
      level: 2,
      major: ['무인자판기', '이동수단', '기타'],
      intro:
        '안녕하세요~! 저는 송파구에 사는 IT 천재 박지원입니다. 모르시는 것들에 대해 얼마든지 질문주세요. 친절하게 답변 해드릴게요. 가까운 분들이라면 직접 찾아가서 알려드릴 수 도 있어요!',
    })
  }, [])

  useEffect(() => {}, [modifiyMode])

  const modifyValue = (value: string) => {
    return (value === '' || value) && setModifiyMode(false)
  }
  const {
    profileImg,
    name,
    money,
    questionNum,
    partnerNum,
    type,
    level,
    major,
    intro,
  } = userData

  const showModal = () => {
    setOpen(true)
  }

  return type === 'ques' ? (
    <div className="innerBox ques">
      <Title data={['내 정보', '/notice', '', '']} />
      <main className="mypage_ques">
        <div className="profile">
          <div className="imgBox imgBox_ques">
            {profileImg ? (
              <img src="" alt="프로필 이미지" />
            ) : (
              <img
                className="basic_profile_img"
                src="/img/mypage_icon.svg"
                alt="프로필 이미지"
              />
            )}
            <button className="edit_btn" type="button" onClick={showModal}>
              프로필 수정
            </button>
            <ProfileModal type="ques profile" open={open} setOpen={setOpen} />
          </div>

          <div className="nameBox">
            {modifiyMode ? (
              <>
                <input
                  defaultValue={name}
                  onChange={(e) => setModifiyInput(e.target.value)}
                  data-testid="modify-input"
                  className="modify_input"
                />
                <button
                  type="button"
                  onClick={() => modifyValue(modifiyInput)}
                  className="modify_button"
                >
                  저장
                </button>
              </>
            ) : (
              <>
                <p>{name}</p>
                <Link
                  to="#/"
                  onClick={() => setModifiyMode((cur: boolean) => !cur)}
                >
                  수정
                </Link>
              </>
            )}
          </div>
        </div>
        <ul className="info">
          <li>
            <p>보유용돈 : {money}원</p>
            <Link to="/simulation">용돈 충전하기</Link>
          </li>
          <li>
            <p>채택질문 : {questionNum}개</p>
            <Link to="/questionboard">내 질문 보기</Link>
          </li>
          <li>
            <p>파트너 수 : {partnerNum}명</p>
            <Link to="/mypartner">파트너 관리</Link>
          </li>
        </ul>
        <p className="logout">
          <Link to="/logout">로그아웃</Link>|<Link to="/quit">회원탈퇴</Link>
        </p>
      </main>
    </div>
  ) : (
    <div className="innerBox res">
      <div className="res_title">마이페이지</div>
      <main className="mypage_res">
        <div className="my_info">
          <div className="my_info_profile">
            <div className="profile_box">
              {profileImg ? (
                <img src="" alt="프로필 이미지" />
              ) : (
                <img
                  className="basic_profile_img"
                  src="/img/mypage_icon.svg"
                  alt="프로필 이미지"
                />
              )}
              <button type="button" className="btn_edit" onClick={showModal}>
                <div>
                  <img src="/img/edit_icon.svg" alt="" />
                </div>
              </button>
            </div>
            <ProfileModal type="res profile" open={open} setOpen={setOpen} />
          </div>
          <div className="my_info_text">
            <h3>
              <span className="pink">Lv.{level}</span>
              {name}
            </h3>
            <p className="major">{major.map((el: string) => `${el} · `)}</p>
            <ul className="spec flexBox">
              <li>
                채택 받은 질문
                <span className="pink"> {questionNum}</span>
              </li>
              <li>
                보유 용돈
                <span className="pink"> {money}</span>
              </li>
              <li>
                파트너
                <span className="pink"> {partnerNum}</span>
              </li>
            </ul>
            <p className="intro">{intro}</p>
            <div className="acconut flexBtw">
              <Link to="/">정보수정</Link> |<Link to="/">로그아웃</Link> |
              <Link to="/">회원탈퇴</Link>
            </div>
          </div>
        </div>
        <div className="flexBtw">
          <ManagementBox
            data={[
              '내 답변',
              '내가 답변한 질문을 모아보세요',
              'my_ans_icon',
              '/myres',
            ]}
          />
          <ManagementBox
            data={[
              '파트너 관리',
              '파트너의 정보를 확인하고 관리하세요',
              'my_partner_icon',
              '/mypartner',
            ]}
          />
        </div>
      </main>
    </div>
  )
}
