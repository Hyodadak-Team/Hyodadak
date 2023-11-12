type DataType = {
  point: number
  category: string
  title: string
  detail: string
  time: string
}
interface PartnerAnswerBoxProps {
  data: DataType
}
export default function PartnerAnswerBox(props: PartnerAnswerBoxProps) {
  const { data } = props
  const { point, category, title, detail, time } = data

  return (
    <div className="partnerAnswer_post">
      <div className="partnerAnswer_post_property">
        <p className="partnerAnswer_post_property_point">{point}</p>
        <p className="partnerAnswer_post_property_category">{category}</p>
      </div>
      <p className="partnerAnswer_post_title">{title}</p>
      <p className="partnerAnswer_post_detail">{detail}</p>
      <div className="partnerAnswer_post_footer">
        <p className="partnerAnswer_post_footer_time">{time}</p>
        <div className="partnerAnswer_post_footer_chatBtn">
          <img src="/img/main_chat_icon.svg" alt="채팅하기" />
          <p>채팅하기</p>
        </div>
      </div>
    </div>
  )
}
