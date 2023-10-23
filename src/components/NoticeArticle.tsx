import { useParams, Link } from 'react-router-dom'
import noticeList from '../constants/noticeList'
import formatContent from '../utils/formatContent'
import setPrevNextValues from '../utils/setPrevNextValues'
import RoundBtn from '../composables/Button/RoundBtn'

function NoticeArticle() {
  const { id } = useParams()
  const noticeId = id ? parseInt(id, 10) : null
  const filteredNotice = noticeList.filter(
    (notice) => notice.id === noticeId,
  )[0]
  const convertedContent = formatContent(filteredNotice)

  const { prevId, nextId, prevType, prevTitle, nextType, nextTitle } =
    setPrevNextValues(noticeId, noticeList)

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
        <p className="article title">
          [{filteredNotice.type}] {filteredNotice.title}
        </p>
        <p className="article date">{filteredNotice.date}</p>
      </div>
      <div className="divide-list" />
      <div className="article-content">{convertedContent}</div>
      <div className="divide-list" />
      <div className="article-control">
        <div className="prev_page">
          <p>이전</p>
          {prevId && prevId >= 0 ? (
            <Link to={`/notice/article/${prevId}`}>
              <p>
                [{prevType}] {prevTitle}
              </p>
            </Link>
          ) : (
            <p className="no_article">이전 게시물이 없습니다.</p>
          )}
        </div>
        <div className="next_page">
          <p>다음</p>
          {nextId && nextId < noticeList.length ? (
            <Link to={`/notice/article/${nextId + 1}`}>
              <p>
                [{nextType}] {nextTitle}
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
