/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { INotice, INoticeMenu } from '../types/notice'
import noticeMenu from '../constants/noticeMenu'
import setPagination from '../utils/pagination'
import Pagination from '../composables/Pagination'
import NoticeArticle from '../components/NoticeArticle'
import Title from '../components_ques/Title'
import openNewTab from '../utils/openNewTab'
import formatDate from '../utils/formateDate'
import formatCategory from '../utils/formatCategory'

type TitleType = {
  data: [string, string, string, string]
}

const DIGITAL_LEARNING_CENTER_URL =
  'https://www.xn--2z1bw8k1pjz5ccumkb.kr/main.do'

function Notice() {
  const currentUrl: TitleType['data'] = ['공지사항', '/notice', '', '']

  const [activeMenu, setActiveMenu] = useState(1)
  const [noticeList, setNoticeList] = useState<INotice[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [originalNoticeList, setOriginalNoticeList] = useState<INotice[]>([])
  const itemsPerPage = 7

  // notice-menu
  const setActiveList = (menuId: number, list: INotice[]) => {
    let filteredList: INotice[] = []

    if (menuId === 1) {
      return list
    }

    filteredList = list.filter((notice: INotice) => {
      if (menuId === 2) {
        return notice.category === 'notification'
      }
      if (menuId === 3) {
        return notice.category === 'event'
      }
      return true
    })

    return filteredList
  }
  const handleMenuClick = (menuId: number) => {
    setActiveMenu(menuId)

    // 이미 초기 데이터가 있는 경우
    const filteredList = setActiveList(menuId, originalNoticeList)
    setNoticeList(filteredList)
  }

  // notice-pagination

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  // notice-article
  const [selectedNotice, setSelectedNotice] = useState<INotice | null>(null)

  // test axios
  const getAllNotices = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_API_URL}/notice/all`)
      .then((response) => {
        setOriginalNoticeList(response.data)
        setNoticeList(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const initData = () => {
    axios
      .post(`${import.meta.env.VITE_SERVER_API_URL}/notice/init`)
      .then(function (response) {
        console.log(response)
        if (response.status === 200) {
          alert('초기 데이터 셋 성공')
        }
      })
      .catch(function (error) {
        console.log(error)
        alert('초기 데이터 셋 실패')
      })
  }

  useEffect(() => {
    getAllNotices()
  }, [])

  const { sortedList, currentItems } = setPagination(
    noticeList,
    currentPage,
    itemsPerPage,
  )

  return (
    <>
      <button
        className="shortcut_bar"
        onClick={() => openNewTab(DIGITAL_LEARNING_CENTER_URL)}
      >
        <p>디지털 배움터</p>
        <div />
        <p className="highlight">바로가기</p>
      </button>
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
            <button type="button" onClick={initData}>
              공지사항 초기 데이터
            </button>
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
                  <div className="notice_list" key={notice._id}>
                    <Link to="/notice/article" state={{ notice, noticeList }}>
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
                        <div>{notice.idx}</div>
                        <div className="notice-title">
                          <div>[{formatCategory(notice.category)}]</div>
                          <div>{notice.title}</div>
                        </div>
                        <div>{formatDate(notice.createTime)}</div>
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
