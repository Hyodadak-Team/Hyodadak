/* eslint-disable no-underscore-dangle */
import { Link, useParams } from 'react-router-dom'
import { useLayoutEffect, useState } from 'react'
import RoundBtn from '../composables/Button/RoundBtn'
import formatCategory from '../utils/formatCategory'
import formatDate from '../utils/formateDate'
import formatContent from '../utils/formatContent'
import { INotice } from '../types/notice'
import { getPrevAndCurAndNext } from '../apis/notice'

function NoticeArticle() {
  const params = useParams()
  const index = Number(params.index)
  const [notice, setNotice] = useState<INotice>()
  const [prevNotice, setPrevNotice] = useState()
  const [nextNotice, setNextNotice] = useState()

  const getNotices = async (idx: number) => {
    try {
      const [prev, cur, next] = await getPrevAndCurAndNext(idx)
      console.log('prev', prev, 'next', next)
      setPrevNotice(prev)
      setNotice(cur)
      setNextNotice(next)
    } catch (err) {
      console.error(err)
    }
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    getNotices(index)
  }, [index])

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
      {notice && (
        <>
          <div className="ques_title">
            <p className="article title bold">
              [{formatCategory(notice.category)}] {notice.title}
            </p>
            <p className="article date">{formatDate(notice.createTime)}</p>
          </div>
          <div className="divide-list" />
          <div className="article-content">{formatContent(notice)}</div>
          <div className="divide-list" />
          <div className="article-control">
            <div className="prev_page">
              <p>이전</p>
              {prevNotice !== null ? (
                // eslint-disable-next-line no-underscore-dangle
                <Link to={`/notice/article/${Number(index - 1)}`}>
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
              {nextNotice !== null ? (
                // eslint-disable-next-line no-underscore-dangle
                <Link to={`/notice/article/${Number(index - 1)}`}>
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
