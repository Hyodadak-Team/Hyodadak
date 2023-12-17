import React, {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import AlertModal from '../components_res/AlertModal'

interface HeaderQuesProps {
  user: boolean
  login: boolean
  setLogin: Dispatch<SetStateAction<boolean>>
}

export default function HeadeQues(props: HeaderQuesProps) {
  const { user, login, setLogin } = props
  const navigate = useNavigate()
  const logout = () => {
    window.localStorage.clear()
    navigate('/login')
    setLogin(false)
  }
  const navigateLogin = () => {
    navigate('/login')
  }
  console.log(user)
  const [notice, setNotice] = useState<boolean>(false)
  useEffect(() => {
    // 나중에 백엔드에서 user정보 받아와서 업데이트 필요!
    setNotice(false)
  }, [])
  const noticeRef = useRef<HTMLDivElement>(null)
  const noticeBtnClick = (): void => {
    if (noticeRef.current?.classList.value === 'alertBox') {
      noticeRef.current.classList.value = 'alertBox hidden'
    } else if (noticeRef.current?.classList.value === 'alertBox hidden') {
      noticeRef.current.classList.value = 'alertBox'
    }
  }
  return (
    <div className="header header_ques">
      <div className="innerBox flexBtw">
        <Link to="/main_ques">
          <img src="" alt="효다닥로고" />
        </Link>
        <ul className="flexBtw naviMenu">
          <li>
            <Link to="/questionBoard">질문게시판</Link>
          </li>
          <li>
            <Link to="/simulation">체험하기</Link>
          </li>
        </ul>
        <div className="blank">
          {login ? (
            <Button onClick={logout}>로그아웃</Button>
          ) : (
            <Button onClick={navigateLogin}>로그인 ㄱㄱ</Button>
          )}
        </div>
        <ul className="flexBtw">
          <li>
            <div className="btn_notice_box">
              <button type="button" onClick={noticeBtnClick}>
                <img
                  className="btn_notice"
                  src={`/img/notice_${!notice ? 'off' : 'on'}_icon.svg`}
                  alt="알림icon"
                />
                <p>알림</p>
              </button>
              <div ref={noticeRef} className="alertBox hidden">
                <AlertModal user={user} />
              </div>
            </div>
          </li>
          <li>
            <Link to="/mypage">
              <img src="/img/mypage_icon.svg" alt="내정보icon" />내 정보
            </Link>
          </li>
        </ul>
        <Link
          to="/createQuestion"
          className="btn_header_main btn_header_main_on"
        >
          <img src="/img/ques_icon.svg" alt="" />
          질문하기
        </Link>
      </div>
    </div>
  )
}
