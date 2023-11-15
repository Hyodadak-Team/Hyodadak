import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import formatContent from '../utils/formatContent'
import RoundBtn from '../composables/Button/RoundBtn'

function NoticeArticle() {
  const location = useLocation()
  const filteredNotice = location.state.notice
  const prevNotice =
    location.state.noticeList[
      location.state.noticeList.length - location.state.notice.idx + 1
    ]
  const nextNotice =
    location.state.noticeList[
      location.state.noticeList.length - location.state.notice.idx - 1
    ]

  const convertedContent = formatContent(filteredNotice)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
      <div className="ques_title">
        <p className="article title bold">
          [{filteredNotice.category}] {filteredNotice.title}
        </p>
        <p className="article date">{filteredNotice.createTime}</p>
      </div>
      <div className="divide-list" />
      <div className="article-content">{convertedContent}</div>
      <div className="divide-list" />
      <div className="article-control">
        <div className="prev_page">
          <p>이전</p>
          {prevNotice !== undefined ? (
            <Link
              to="/notice/article"
              state={{
                notice: prevNotice,
                noticeList: location.state.noticeList,
              }}
            >
              <p>
                [{prevNotice.category}] {prevNotice.title}
              </p>
            </Link>
          ) : (
            <p className="no_article">이전 게시물이 없습니다.</p>
          )}
        </div>
        <div className="next_page">
          <p>다음</p>
          {nextNotice !== undefined ? (
            <Link
              to="/notice/article"
              state={{
                notice: nextNotice,
                noticeList: location.state.noticeList,
              }}
            >
              <p>
                [{nextNotice.category}] {nextNotice.title}
              </p>
            </Link>
          ) : (
            <p className="no_article">다음 게시물이 없습니다.</p>
          )}
        </div>
      </div>
      <div className="divide-list" />
      <div className="article-button_section">
        <RoundBtn icon="list" path="notice" content="목록으로" />
      </div>
    </div>
  )
}

export default NoticeArticle
