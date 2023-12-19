/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { INotice, INoticeMenu } from '../types/notice'
import noticeMenu from '../constants/noticeMenu'

import Pagination from '../composables/Pagination'
import Title from '../components_ques/Title'
import openNewTab from '../utils/openNewTab'
import formatDate from '../utils/formateDate'
import formatCategory from '../utils/formatCategory'

import { init, pagination, noticesLength } from '../apis/notice'

type TitleType = {
  data: [string, string, string, string]
}

const DIGITAL_LEARNING_CENTER_URL =
  'https://www.xn--2z1bw8k1pjz5ccumkb.kr/main.do'

function Notice() {
  const currentUrl: TitleType['data'] = ['공지사항', '/notice', '', '']

  const [activeMenu, setActiveMenu] = useState(0)
  const [noticeList, setNoticeList] = useState<INotice[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [noticeLength, setNoticeLength] = useState(0)
  // const [originalNoticeList, setOriginalNoticeList] = useState<INotice[]>([])
  // const [searchItem, setSearchItem] = useState('')
  // const [selectedNotice, setSelectedNotice] = useState<INotice | null>(null)
  const itemsPerPage = 7

  // notice-menu
  const handleMenuClick = (menuId: number) => {
    setActiveMenu(menuId)
    // // 이미 초기 데이터가 있는 경우
    // const filteredList = setActiveList(menuId, originalNoticeList)
    // setNoticeList(filteredList)
  }

  // notice-pagination
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  // notice-search
  // const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchItem(e.currentTarget.value)
  // }
  // const searchContent = () => {
  //   const filteredList = originalNoticeList.filter((notice: INotice) =>
  //     notice.title.includes(searchItem),
  //   )
  //   setNoticeList(filteredList)
  // }

  // test axios
  const getNoticesLength = async (categoryNumber) => {
    try {
      const res = await noticesLength(categoryNumber)
      console.log(res)
      setNoticeLength(res)
    } catch (err) {
      console.error(err)
    }
  }
  const setInitData = async () => {
    try {
      await init()
    } catch (err) {
      console.error(err)
    }
  }
  const getNoticesByPage = async (categoryNumber, page) => {
    try {
      const res = await pagination(categoryNumber, page)
      console.log(res)
      setNoticeList(res)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getNoticesLength(activeMenu)
  }, [activeMenu])

  useEffect(() => {
    getNoticesByPage(activeMenu, currentPage)
  }, [activeMenu, currentPage])

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
            <button type="button" onClick={setInitData}>
              공지사항 초기 데이터
            </button>
          </div>
          <div className="main_section">
            <div className="search_section">
              <input
                className="search-input ques"
                placeholder="궁금한 내용을 입력해보세요"
                // value={searchItem}
                // onChange={searchHandler}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    // searchContent()
                  }
                }}
              />
              <button
                // onClick={searchContent}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    // searchContent()
                  }
                }}
                tabIndex={0}
                className="search-icon"
              >
                <img src="/img/search-icon.svg" alt="search-icon" />
              </button>
            </div>
            <div className="notice_list-section">
              {noticeList.map((notice: INotice, index) => {
                const pageLength = Math.ceil(noticeLength / itemsPerPage)
                const adjustedIndex =
                  (pageLength - currentPage) * itemsPerPage +
                  (noticeLength % itemsPerPage) -
                  index
                return (
                  <div className="notice_list" key={notice._id}>
                    <Link to={`/notice/article/${adjustedIndex}`}>
                      <div
                        className="notice_box"
                        onClick={() => {
                          // setSelectedNotice(notice)
                        }}
                        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            // setSelectedNotice(notice)
                          }
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        <div>{adjustedIndex}</div>
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
            {/* {selectedNotice && <NoticeArticle />} */}
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={noticeLength}
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
