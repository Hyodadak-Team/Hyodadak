import { useParams, Link } from 'react-router-dom'
import noticeList from '../constants/noticeList'
import formatContent from '../utils/formatContent'

function NoticeArticle() {
  const { id } = useParams()
  const noticeId = id ? parseInt(id, 10) : null
  const filteredNotice = noticeList.filter(
    (notice) => notice.id === noticeId,
  )[0]
  const convertedContent = formatContent(filteredNotice)

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
    </div>
  )
}

export default NoticeArticle
