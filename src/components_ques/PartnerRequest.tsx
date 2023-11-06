import { Link } from 'react-router-dom'
import '../styles/PartnerRequest.scss'

export default function PartnerRequest() {
  return (
    <div className="partner_request ques">
      <div className="partner_request_box">
        <div className="partner_request_box_header">
          <p>파트너 요청 보내기</p>
          <Link to="/">
            <img src="/img/partner_req_close_icon.svg" alt="닫기" />
          </Link>
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
