/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import { useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { INotice, INoticeMenu } from '../types/notice'
import noticeMenu from '../constants/noticeMenu'
import setPagination from '../utils/pagination'
import Pagination from '../composables/Pagination'
import NoticeArticle from '../components/NoticeArticle'
import Title from '../components_ques/Title'
import openNewTab from '../utils/openNewTab'
import formatDate from '../utils/formateDate'
import formatCategory from '../utils/formatCategory'
import setActiveList from '../utils/setActiveList'
import { getAllBoard, init } from '../apis/notice'

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
  const [searchItem, setSearchItem] = useState('')
  const [selectedNotice, setSelectedNotice] = useState<INotice | null>(null)
  const itemsPerPage = 7

  // notice-menu
  const handleMenuClick = (menuId: number) => {
    setActiveMenu(menuId)
    sessionStorage.setItem('noticeMenuId', menuId.toString())

    // 이미 초기 데이터가 있는 경우
    const filteredList = setActiveList(menuId, originalNoticeList)
    setNoticeList(filteredList)
  }

  // notice-pagination
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const { sortedList, currentItems } = setPagination(
    noticeList,
    currentPage,
    itemsPerPage,
  )

  // notice-search
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.currentTarget.value)
  }
  const searchContent = () => {
    const filteredList = originalNoticeList.filter((notice: INotice) =>
      notice.title.includes(searchItem),
    )
    setNoticeList(filteredList)
  }

  // test axios
  const getAllNotices = async () => {
    try {
      const res = await getAllBoard()
      setOriginalNoticeList(res)
      setNoticeList(res)
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

  const getSessionStorageId = (initList: INotice[]) => {
    const storeMenuId = sessionStorage.getItem('noticeMenuId')

    if (storeMenuId) {
      const storedMenuIdNumber = parseInt(storeMenuId, 10)
      setActiveMenu(storedMenuIdNumber)

      // 이미 초기 데이터가 있는 경우
      const filteredList = setActiveList(storedMenuIdNumber, initList)
      setNoticeList(filteredList)
    }
  }
  useLayoutEffect(() => {
    getAllNotices()
  }, [])

  useEffect(() => {
    getSessionStorageId(originalNoticeList)
  }, [originalNoticeList])

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
                value={searchItem}
                onChange={searchHandler}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    searchContent()
                  }
                }}
              />
              <button
                onClick={searchContent}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    searchContent()
                  }
                }}
                tabIndex={0}
                className="search-icon"
              >
                <img src="/img/search-icon.svg" alt="search-icon" />
              </button>
            </div>
            <div className="notice_list-section">
              {currentItems.map((notice: INotice, index) => {
                const pageLength = Math.ceil(sortedList.length / itemsPerPage)
                const adjustedIndex =
                  (pageLength - currentPage) * itemsPerPage +
                  (sortedList.length % itemsPerPage) -
                  index
                return (
                  <div className="notice_list" key={notice._id}>
                    <Link to={`/notice/article/${adjustedIndex}`}>
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
            {selectedNotice && <NoticeArticle />}
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={noticeList.length}
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
