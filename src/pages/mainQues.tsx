import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import MainAnsBox from '../components_ques/MainAnsBox'
import { AnswerInfo } from '../types/mainQues'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

interface Notice {
  id: number
  type: string
  title: string
  date: string
}

const initialNotices: Notice[] = [
  {
    id: 15,
    type: '[공지]',
    title: '효다닥 사용자 무료 교육 안내ㅣ23년 9월 20일(수)',
    date: '23.07.24',
  },
  {
    id: 14,
    type: '[이벤트]',
    title: '효다닥 X 오더퀸 결합 서비스 신규 가입 20% 추가 할인 (~12.31)',
    date: '23.07.22',
  },
  {
    id: 13,
    type: '[공지]',
    title: '효다닥 서비스 접속 정상화 안내',
    date: '22.12.10',
  },
]

// 답변 데이터 중 답변자, 제목 가져오기
const dataJson: AnswerInfo[] = [
  {
    respondent: '차은우',
    title: '1-서브웨이 어떻게 먹어요...',
    url: '/quest_detail/abc123',
  },
  {
    respondent: '서강준',
    title: '2-서브웨이 어떻게 먹어요...',
    url: '/quest_detail/abc123',
  },
  {
    respondent: '박보검',
    title: '3-서브웨이 어떻게 먹어요...',
    url: '/quest_detail/abc123',
  },
]

export default function MainQues() {
  // // 더보기 클릭 시, 밑으로 3개씩 공지사항 보이는 기능
  // const [notices, setNotices] = useState<Notice[]>(initialNotices)

  // const loadMoreNotices = () => {
  //   const newNotices: Notice[] = [
  //     ...notices,
  //     {
  //       id: 12,
  //       type: '[공지]',
  //       title: 'Chrome 91 업데이트에 따른 로그인 오류 안내',
  //       date: '22.06.09',
  //     },
  //     {
  //       id: 11,
  //       type: '[이벤트]',
  //       title: '효다닥 신규 가입자 3개월 무료 제공 혜택',
  //       date: '22.05.24',
  //     },
  //     {
  //       id: 10,
  //       type: '[공지]',
  //       title: '효다닥 서비스 접속 정상화 안내',
  //       date: '22.01.10',
  //     },
  //   ]
  //   setNotices(newNotices)
  // }

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
                <Link to="/findpartner">
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
              <SwiperSlide>
                <MainAnsBox data={el} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="notice_section">
          <p>공지사항</p>
          <div className="notice_list">
            <ul>
              {initialNotices.map((notice) => (
                <Link to={`/notice/article/${notice.id}`}>
                  <li key={notice.id}>
                    <div>{notice.id}</div>
                    <div className="notice_title">
                      <div>{notice.type}</div>
                      <div>{notice.title}</div>
                    </div>
                    <div className="notice_date">{notice.date}</div>
                  </li>
                </Link>
              ))}
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
          {/* <button type="button" onClick={loadMoreNotices}>
            <img src="/img/plus-icon.svg" alt="더보기icon" />
            더보기
          </button> */}
        </div>
      </div>
    </>
  )
}
