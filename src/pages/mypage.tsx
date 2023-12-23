/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Title from '../components_ques/Title'
import ManagementBox from '../components_res/ManagementBox'
import ProfileModal from '../components/PropfileModal'
import api from '../apis'
import EditUserInfoModal from '../components/EditUserInfoModal'

export default function Mypage() {
  const [openProfile, setOpenProfile] = useState(false)
  const [openUserInfo, setOpenUserInfo] = useState(false)
  const [userData, setUserData] = useState({}) // 백엔드 작업 후 빈 {} 로 수정필요
  const [modifiyInput, setModifiyInput] = useState('')
  const [modifiyMode, setModifiyMode] = useState(false)
  const navigate = useNavigate()

  const fetchData = async () => {
    const token = localStorage.getItem('token')
    try {
      const res = await api.get('mypage/getuser', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setUserData(res.data)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {}, [modifiyMode])

  const modifyValue = (value: string) => {
    return (value === '' || value) && setModifiyMode(false)
  }
  const {
    profile_img = '',
    user_name = '',
    point = 0,
    select_board_answer = '',
    partner_id = '',
    user_type = '',
    level = '',
    interest_category = [],
    intro = '',
  } = userData

  const showModal = () => {
    setOpenProfile(true)
  }
  const logout = () => {
    window.localStorage.clear()
    navigate('/login')
  }
  return user_type === 'ques' ? (
    <div className="innerBox ques">
      <Title data={['내 정보', '/notice', '', '']} />
      <main className="mypage_ques">
        <div className="profile">
          <div className="imgBox imgBox_ques">
            {profile_img ? (
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
            <ProfileModal
              type="ques profile"
              openProfile={openProfile}
              setOpenProfile={setOpenProfile}
            />
          </div>
          <div className="nameBox">
            {modifiyMode ? (
              <>
                <input
                  defaultValue={user_name}
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
                <p>{user_name}</p>
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
            <p>보유용돈 : {point || 0}원</p>
            <Link to="/simulation">용돈 충전하기</Link>
          </li>
          <li>
            <p>채택질문 : {select_board_answer || 0}개</p>
            <Link to="/questionboard">내 질문 보기</Link>
          </li>
          <li>
            <p>파트너 수 : {partner_id?.length || 0}명</p>
            <Link to="/mypartner">파트너 관리</Link>
          </li>
        </ul>
        <p className="logout">
          <button type="button" onClick={logout}>
            로그아웃
          </button>
          |<Link to="/quit">회원탈퇴</Link>
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
              {profile_img ? (
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
            <ProfileModal
              type="res profile"
              openProfile={openProfile}
              setOpenProfile={setOpenProfile}
            />
          </div>
          <div className="my_info_text">
            <h3>
              <span className="pink">Lv.{level || 0}</span>
              {user_name}
            </h3>
            <p className="interest_category">
              {interest_category?.map((el: string) => `${el} · `)}
            </p>
            <ul className="spec flexBox">
              <li>
                채택 받은 질문
                <span className="pink"> {select_board_answer || 0}</span>
              </li>
              <li>
                보유 용돈
                <span className="pink"> {point || 0}</span>
              </li>
              <li>
                파트너
                <span className="pink"> {partner_id?.length || 0}</span>
              </li>
            </ul>
            <p className="intro">{intro}</p>
            <div className="acconut flexBtw">
              <button
                className="btn_update"
                type="button"
                onClick={() => setOpenUserInfo(!openUserInfo)}
              >
                정보수정
              </button>{' '}
              |{' '}
              <button className="btn_update" type="button" onClick={logout}>
                로그아웃
              </button>{' '}
              |<Link to="/">회원탈퇴</Link>
            </div>
          </div>
        </div>
        <EditUserInfoModal
          openUserInfo={openUserInfo}
          setOpenUserInfo={setOpenUserInfo}
        />
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
