import '../styles/alertModal.scss'

interface AlertModalProps {
  user: boolean
}

export default function AlertModal(props: AlertModalProps) {
  const { user } = props
  return (
    <div>
      {user ? (
        // user === true 일 때 -> 답변자
        <div className="alertModal res">
          <div className="alertModal_box">
            <p className="alertModal_box_title">
              거북이님의 파트너 요청이 왔습니다
            </p>
            <p className="alertModal_box_detail">
              안녕하세요 답변 주신 내용 잘 확인했습니다. 파트너 가능하실까요?
            </p>
            <div className="alertModal_box_footer">
              <p className="alertModal_box_footer_time">3시간 전</p>
              <div className="alertModal_box_footer_btn">
                <p className="alertModal_box_footer_btn_refuse">거절</p>
                <p className="alertModal_box_footer_btn_accept">수락</p>
              </div>
            </div>
          </div>
          <div className="alertModal_box">
            <p className="alertModal_box_title">
              거북이님의 파트너 요청이 왔습니다
            </p>
            <p className="alertModal_box_detail">
              안녕하세요 답변 주신 내용 잘 확인했습니다. 파트너 가능하실까요?
            </p>
            <div className="alertModal_box_footer">
              <p className="alertModal_box_footer_time">3시간 전</p>
              <p className="alertModal_box_footer_btn-done">수락됨</p>
            </div>
          </div>
          <div className="alertModal_box">
            <p className="alertModal_box_title">
              거북이님의 파트너 요청이 왔습니다
            </p>
            <p className="alertModal_box_detail">
              안녕하세요 답변 주신 내용 잘 확인했습니다. 파트너 가능하실까요?
            </p>
            <div className="alertModal_box_footer">
              <p className="alertModal_box_footer_time">3시간 전</p>
              <p className="alertModal_box_footer_btn-done">거절됨</p>
            </div>
          </div>
          <div className="alertModal_box">
            <p className="alertModal_box_title">
              거북이님의 파트너 요청이 왔습니다
            </p>
            <p className="alertModal_box_detail">
              안녕하세요 답변 주신 내용 잘 확인했습니다. 파트너 가능하실까요?
            </p>
            <div className="alertModal_box_footer">
              <p className="alertModal_box_footer_time">3시간 전</p>
              <div className="alertModal_box_footer_btn">
                <p className="alertModal_box_footer_btn_refuse">거절</p>
                <p className="alertModal_box_footer_btn_accept">수락</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // user === false 일때 => 질문자
        <div className="alertModal ques">
          <div className="alertModal_box">
            <p className="alertModal_box_title">
              거북이님의 파트너 요청이 왔습니다
            </p>
            <p className="alertModal_box_detail">
              안녕하세요 답변 주신 내용 잘 확인했습니다. 파트너 가능하실까요?
            </p>
            <div className="alertModal_box_footer">
              <p className="alertModal_box_footer_time">3시간 전</p>
              <div className="alertModal_box_footer_btn">
                <p className="alertModal_box_footer_btn_refuse">거절</p>
                <p className="alertModal_box_footer_btn_accept">수락</p>
              </div>
            </div>
          </div>
          <div className="alertModal_box">
            <p className="alertModal_box_title">
              거북이님의 파트너 요청이 왔습니다
            </p>
            <p className="alertModal_box_detail">
              안녕하세요 답변 주신 내용 잘 확인했습니다. 파트너 가능하실까요?
            </p>
            <div className="alertModal_box_footer">
              <p className="alertModal_box_footer_time">3시간 전</p>
              <p className="alertModal_box_footer_btn-done">수락됨</p>
            </div>
          </div>
          <div className="alertModal_box">
            <p className="alertModal_box_title">
              거북이님의 파트너 요청이 왔습니다
            </p>
            <p className="alertModal_box_detail">
              안녕하세요 답변 주신 내용 잘 확인했습니다. 파트너 가능하실까요?
            </p>
            <div className="alertModal_box_footer">
              <p className="alertModal_box_footer_time">3시간 전</p>
              <p className="alertModal_box_footer_btn-done">거절됨</p>
            </div>
          </div>
          <div className="alertModal_box">
            <p className="alertModal_box_title">
              거북이님의 파트너 요청이 왔습니다
            </p>
            <p className="alertModal_box_detail">
              안녕하세요 답변 주신 내용 잘 확인했습니다. 파트너 가능하실까요?
            </p>
            <div className="alertModal_box_footer">
              <p className="alertModal_box_footer_time">3시간 전</p>
              <div className="alertModal_box_footer_btn">
                <p className="alertModal_box_footer_btn_refuse">거절</p>
                <p className="alertModal_box_footer_btn_accept">수락</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
