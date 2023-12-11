// import { Link } from 'react-router-dom'
import '../styles/partnerRequest.scss'

interface ApplyBoxProps {
  onClose: () => void
}

export default function PartnerRequest(props: ApplyBoxProps) {
  // 모달 닫기
  const { onClose } = props
  const closeBox = () => {
    onClose()
  }

  return (
    <div className="partner_request ques">
      <div className="partner_request_box">
        <div className="partner_request_box_header">
          <p>파트너 요청 보내기</p>
          {/* 기존 코드 */}
          {/* <Link to="/">
            <img src="/img/partner_req_close_icon.svg" alt="닫기" />
          </Link> */}
          {/* 모달 닫기 기능 추가 */}
          <button
            type="button"
            onClick={closeBox}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                closeBox()
              }
            }}
          >
            <img src="/img/partner_req_close_icon.svg" alt="닫기icon" />
          </button>
        </div>
        <form>
          <textarea
            className="partner_request_box_input"
            placeholder="요청 메세지를 입력해주세요"
          />
          <input
            className="partner_request_box_btn_submit"
            type="submit"
            value="차은우님에게 요청 보내기"
          />
        </form>
      </div>
    </div>
  )
}
