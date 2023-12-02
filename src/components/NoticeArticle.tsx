import { Link, useLocation } from 'react-router-dom'
import { useLayoutEffect, useState } from 'react'
import axios from 'axios'
import RoundBtn from '../composables/Button/RoundBtn'
import formatCategory from '../utils/formatCategory'
import formatDate from '../utils/formateDate'
import formatContent from '../utils/formatContent'

function NoticeArticle() {
  const location = useLocation()
  const noticeId = location.state.id
  const [notice, setNotice] = useState()
  // const [filteredNotice, noticeList] = location.state

  const getNotice = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_API_URL}/notice/${noticeId}`)
      .then((response) => {
        console.log(response.data)
        setNotice(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useLayoutEffect(() => {
    getNotice()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // useEffect(() => {
  //   const foundNotice: INotice | undefined = noticeList.find(
  //     (notice: INotice) => notice.idx === Number(idx),
  //   )
  //   setFilteredNotice(foundNotice)
  //   window.scrollTo(0, 0)
  // }, [noticeList, idx])

  // let noticeIndex
  // let prevNotice: INotice | undefined
  // let nextNotice: INotice | undefined

  // if (filteredNotice) {
  //   noticeIndex = filteredNotice.idx
  //   prevNotice = noticeList[noticeIndex - 1]
  //   nextNotice = noticeList[noticeIndex + 1]
  // }

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
          {/* <div className="article-control"> */}
          {/*   <div className="prev_page"> */}
          {/*     <p>이전</p> */}
          {/*     {prevId !== null ? ( */}
          {/*       <Link to="/notice/article" state={{ id: prevId }}> */}
          {/*         <p>{prevId}</p> */}
          {/*       </Link> */}
          {/*     ) : ( */}
          {/*       <p className="no_article">이전 게시물이 없습니다.</p> */}
          {/*     )} */}
          {/*   </div> */}
          {/*   <div className="next_page"> */}
          {/*     <p>다음</p> */}
          {/*     {nextId !== null ? ( */}
          {/*       <Link to="/notice/article" state={{ id: nextId }}> */}
          {/*         <p>{nextId}</p> */}
          {/*       </Link> */}
          {/*     ) : ( */}
          {/*       <p className="no_article">다음 게시물이 없습니다.</p> */}
          {/*     )} */}
          {/*   </div> */}
          {/* </div> */}
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
