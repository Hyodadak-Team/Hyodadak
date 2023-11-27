import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RoundBtn from '../composables/Button/RoundBtn'
import { INotice } from '../types/notice'
import formatCategory from '../utils/formatCategory'
import formatDate from '../utils/formateDate'
import formatContent from '../utils/formatContent'

function NoticeArticle() {
  const { idx } = useParams()
  const [noticeList, setNoticeList] = useState([])
  const [filteredNotice, setFilteredNotice] = useState<INotice>()

  // noitce-api
  const getAllNotices = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_API_URL}/notice/all`)
      .then((response) => {
        setNoticeList(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getAllNotices()
  }, [])

  useEffect(() => {
    const foundNotice: INotice | undefined = noticeList.find(
      (notice: INotice) => notice.idx === Number(idx),
    )
    setFilteredNotice(foundNotice)
    window.scrollTo(0, 0)
  }, [noticeList, idx])

  let noticeIndex
  let prevNotice: INotice | undefined
  let nextNotice: INotice | undefined

  if (filteredNotice) {
    noticeIndex = filteredNotice.idx
    prevNotice = noticeList[noticeIndex - 1]
    nextNotice = noticeList[noticeIndex + 1]
  }

  return (
    <div className="innerBox ques">
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
      {filteredNotice && (
        <>
          <div className="ques_title">
            <p className="article title bold">
              [{formatCategory(filteredNotice.category)}] {filteredNotice.title}
            </p>
            <p className="article date">
              {formatDate(filteredNotice.createTime)}
            </p>
          </div>
          <div className="divide-list" />
          <div className="article-content">{formatContent(filteredNotice)}</div>
          <div className="divide-list" />
          <div className="article-control">
            <div className="prev_page">
              <p>이전</p>
              {prevNotice !== undefined ? (
                <Link to={`/notice/article/${prevNotice.idx}`}>
                  <p>
                    [{formatCategory(prevNotice.category)}] {prevNotice.title}
                  </p>
                </Link>
              ) : (
                <p className="no_article">이전 게시물이 없습니다.</p>
              )}
            </div>
            <div className="next_page">
              <p>다음</p>
              {nextNotice !== undefined ? (
                <Link to={`/notice/article/${nextNotice.idx}`}>
                  <p>
                    [{formatCategory(nextNotice.category)}] {nextNotice.title}
                  </p>
                </Link>
              ) : (
                <p className="no_article">다음 게시물이 없습니다.</p>
              )}
            </div>
          </div>
        </>
      )}
      <div className="divide-list" />
      <div className="article-button_section">
        <RoundBtn icon="list" path="notice" content="목록으로" />
      </div>
    </div>
  )
}

export default NoticeArticle
