import { useState } from 'react'
import { Link } from 'react-router-dom'
import { INotice, INoticeMenu } from '../types/notice'
import noticeMenu from '../constants/noticeMenu'
import noticeList from '../constants/noticeList'
import setPagination from '../utils/pagination'
import Pagination from '../composables/Pagination'
import NoticeArticle from '../components/NoticeArticle'
import Title from '../components_ques/Title'

type TitleType = {
  data: [string, string, string, string]
}

function Notice() {
  const currentUrl: TitleType['data'] = ['공지사항', '/notice', '', '']

  // notice-menu
  const [activeMenu, setActiveMenu] = useState(1)
  const handleMenuClick = (menuId: number) => {
    setActiveMenu(menuId)
  }

  // notice-pagination
  const itemsPerPage = 7
  const [currentPage, setCurrentPage] = useState(1)
  const { sortedList, currentItems } = setPagination(
    noticeList,
    currentPage,
    itemsPerPage,
  )
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  // notice-article
  const [selectedNotice, setSelectedNotice] = useState<INotice | null>(null)

  return (
    <>
      <div className="shortcut_bar">
        <p>디지털 배움터</p>
        <div />
        <p className="highlight">바로가기</p>
      </div>
      <div className="innerBox ques">
        <Title data={currentUrl} />
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
          <div className="main_section">
            <div className="search_section">
              <input
                className="search-input ques"
                placeholder="궁금한 내용을 입력해보세요"
              />
              <img
                src="/img/search-icon.svg"
                className="search-icon"
                alt="search-icon"
              />
            </div>
            <div className="notice_list-section">
              {currentItems.map((notice: INotice) => {
                return (
                  <div className="notice_list" key={notice.id}>
                    <Link to={`/notice/article/${notice.id}`}>
                      <div
                        className="notice_box"
                        onClick={() => {
                          setSelectedNotice(notice)
                        }}
                        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            setSelectedNotice(notice)
                          }
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        <div>{notice.id}</div>
                        <div className="notice-title">
                          <div>[{notice.type}]</div>
                          <div>{notice.title}</div>
                        </div>
                        <div>{notice.date}</div>
                      </div>
                    </Link>
                    <div className="divide-list" />
                  </div>
                )
              })}
            </div>
            {selectedNotice && <NoticeArticle />}
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={sortedList.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Notice
