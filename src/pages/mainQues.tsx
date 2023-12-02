/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import MainAnsBox from '../components_ques/MainAnsBox'
import { AnswerInfo } from '../types/mainQues'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { INotice } from '../types/notice'
import formatCategory from '../utils/formatCategory'
import formatDate from '../utils/formateDate'
import setPagination from '../utils/pagination'

// 답변 데이터 중 답변자, 제목 가져오기
const dataJson: AnswerInfo[] = [
  {
    respondent: '차은우',
    title: '1-서브웨이 어떻게 먹어요...',
    url: '/quest_detail/abc123',
    idx: 1,
  },
  {
    respondent: '서강준',
    title: '2-서브웨이 어떻게 먹어요...',
    url: '/quest_detail/abc123',
    idx: 2,
  },
  {
    respondent: '박보검',
    title: '3-서브웨이 어떻게 먹어요...',
    url: '/quest_detail/abc123',
    idx: 3,
  },
]

export default function MainQues() {
  const [noticeList, setNoticeList] = useState<INotice[]>([])

  const currentPage = 1
  const itemsPerPage = 3

  // notice-pagination
  const { currentItems } = setPagination(noticeList, currentPage, itemsPerPage)

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

  return (
    <>
      <Link to="/simulation">
        <div className="shortcut_bar">
          <p>
            새로운 체험이 업데이트 되었습니다. <span>바로가기</span>
          </p>
        </div>
      </Link>

      <div className="banner_section_bg">
        <div className="innerBox">
          <div className="banner_section">
            <div className="titles">
              <p className="main_title">디지털과 친해지도록</p>
              <p className="main_title">
                <b>
                  <span>효다닥</span>이 함께합니다
                </b>
              </p>
              <p className="sub_title">
                <b>우측 바로가기 메뉴</b>로 원하는 서비스를 이용해보세요
              </p>
            </div>
            <div className="btns">
              <div className="btn_menu">
                <Link to="/createQuestion">
                  <div className="img_box">
                    <img src="/img/main_ques_question.svg" alt="질문하기" />
                  </div>
                  <p>질문하기</p>
                </Link>
              </div>
              {/* '내 질문보기' 링크는 질문게시판에서 '내 질문보기' 선택된 상태의 페이지?? */}
              <div className="btn_menu">
                <Link to="/questionBoard">
                  <div className="img_box">
                    <img src="/img/main_ques_answer.svg" alt="내 질문보기" />
                  </div>
                  <p>내 질문보기</p>
                </Link>
              </div>
              <div className="btn_menu">
                <Link to="/searchPartner">
                  <div className="img_box">
                    <img
                      src="/img/main_ques_partner.svg"
                      alt="파트너 둘러보기"
                    />
                  </div>
                  <p>파트너 둘러보기</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="innerBox">
        <div className="swiper_section">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 5000 }}
          >
            {dataJson.map((el) => (
              <SwiperSlide key={el.idx}>
                <MainAnsBox data={el} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="notice_section">
          <p>공지사항</p>
          <div className="notice_list">
            <ul>
              {currentItems.map((notice: INotice, index) => {
                const adjustedIndex =
                  (currentPage - 1) * itemsPerPage + index + 1
                return (
                  <Link to={`/notice/article/${notice.idx}`} key={notice._id}>
                    <li>
                      <div>{adjustedIndex}</div>
                      <div className="notice_title">
                        <div>[{formatCategory(notice.category)}]</div>
                        <div>{notice.title}</div>
                      </div>
                      <div className="notice_date">
                        {formatDate(notice.createTime)}
                      </div>
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div>
          <div className="notice_more">
            <Link to="/notice">
              <button type="button">
                <img src="/img/plus-icon.svg" alt="더보기icon" />
                더보기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
