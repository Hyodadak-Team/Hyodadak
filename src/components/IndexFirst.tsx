import { useNavigate } from 'react-router-dom'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

export default function IndexFirst() {
  const navigate = useNavigate()

  const navigateToLogin = () => {
    navigate('/login')
  }

  return (
    <div className="all">
      <div className="main_img">
        <img src="/img/index.svg" alt="indexImg" />
      </div>
      <div className="info_area">
        <div className="info_container">
          <div className="first_info">과거와 미래를 잇다</div>
          <div className="second_info">
            <span>효다닥</span>에서 후다닥 해결해요
          </div>
          <div className="third_info">
            <span>
              아날로그에 익숙한 기성세대와 디지털에 친숙한 신세대의 만남.
            </span>
            <br />
            <span>
              누구나 편하게 도움받고 미리 연습할 수 있도록 효다닥이 함께합니다.
            </span>
          </div>
        </div>
        <div className="button_container">
          <button
            type="button"
            className="login-page"
            onClick={navigateToLogin}
          >
            로그인하고 서비스 이용하기
          </button>
        </div>
        <div className="img_container">
          <img src="/img/phone_cut.svg" alt="phoneImg" />
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            className="banner"
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
          >
            <SwiperSlide>
              <img src="/img/info1.svg" alt="info1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/info2.svg" alt="info2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/info3.svg" alt="info3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/info4.svg" alt="info4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
