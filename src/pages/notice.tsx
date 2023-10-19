import { useState } from 'react'
import { Link } from 'react-router-dom'
import { INoticeMenu } from '../types/notice'
import noticeMenu from '../constants/noticeMenu'

function Notice() {
  const [activeMenu, setActiveMenu] = useState(1)
  const handleMenuClick = (menuId: number) => {
    setActiveMenu(menuId)
  }

  return (
    <>
      <div className="shortcut_bar">
        <p>디지털 배움터</p>
        <div />
        <p className="highlight">바로가기</p>
      </div>
      <div className="innerBox">
        <div className="ques_navbar">
          <img src="/img/home_icon.svg" className="icon home" alt="home-icon" />
          <Link to="/">
            <li>처음으로</li>
          </Link>
          <div className="divide-line" />
          <Link to="/notice">
            <li>공지사항</li>
          </Link>
        </div>
        <div className="ques_title">
          <p>공지사항</p>
        </div>
        <div className="notice_main">
          <div className="side_section">
            {noticeMenu.map((menu: INoticeMenu) => (
              <div
                className={`menu ${menu.id === activeMenu ? 'active' : ''}`}
                key={menu.id}
                onClick={() => handleMenuClick(menu.id)}
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleMenuClick(menu.id)
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <img
                  src={`/img/notice-${menu.range}_${
                    menu.id === activeMenu ? 'on' : 'off'
                  }_icon.svg`}
                  alt="menu-icon"
                />
                <p>{menu.content}</p>
              </div>
            ))}
          </div>
          <div className="main_section">작업 예정</div>
        </div>
      </div>
    </>
  )
}

export default Notice
