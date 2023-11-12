import { Link } from 'react-router-dom'
import '../styles/partnerQuestion.scss'

export default function PartnerQuestion() {
  return (
    <div className="background">
      <div className="innerBox res">
        <div className="subHeader">
          <p className="subHeader_title">파트너 질문보기</p>
          <Link to="/mypartner" className="subHeader_management">
            <p className="subHeader_management_text">파트너 관리 </p>
            <img
              className="subHeader_management_icon"
              src="/img/right_icon.svg"
              alt="이동하기"
            />
          </Link>
        </div>
        <div className="questionBoard">
          <div className="questionBoard_sidebar">
            <ul>
              <li>
                <p>전체</p>
              </li>
              <li>
                <p>무인주문기</p>
              </li>
              <li>
                <p>스마트 가전제품 사용</p>
              </li>
              <li>
                <p>상품구매</p>
              </li>
              <li>
                <p>이동수단</p>
              </li>
              <li>
                <p>서비스이용 예약</p>
              </li>
              <li>
                <p>기타</p>
              </li>
            </ul>
          </div>
          <div className="questionBoard_main">
            <div className="questionBoard_main_box">
              <div className="questionBoard_main_box_head">
                <Link
                  to="/quest_detail/abc123"
                  className="questionBoard_main_box_head_text"
                >
                  <div className="questionBoard_main_box_head_property">
                    <p className="questionBoard_main_box_head_property_category">
                      거북이 · 무인자판기
                    </p>
                    <p className="questionBoard_main_box_head_property_time">
                      2분전
                    </p>
                  </div>

                  <div className="questionBoard_main_box_head_title">
                    <p>서브웨이 어떻게 먹어요...</p>
                  </div>
                </Link>
                <div className="questionBoard_main_box_head_btn">
                  <img src="/img/main_chat_icon.svg" alt="채팅하기" />
                  <p>채팅하기</p>
                </div>
              </div>
              <div className="questionBoard_main_box_detail">
                <p>
                  너무 복잡해서 못 먹것다 논현역 근처에 사시는 분 안계신가요?
                  너무 복잡해요.. 메뉴 선택하다가 사람들 눈치보여서 그냥
                  나왔어요.. 제발 도와주세요. 저 서브웨이 못 먹은지 3달 됐단
                  말이에요...
                </p>
              </div>
            </div>
            <div className="questionBoard_main_box">
              <div className="questionBoard_main_box_head">
                <Link
                  to="/quest_detail/abc123"
                  className="questionBoard_main_box_head_text"
                >
                  <div className="questionBoard_main_box_head_property">
                    <p className="questionBoard_main_box_head_property_point">
                      100
                    </p>
                    <p className="questionBoard_main_box_head_property_category">
                      티코 · 이동수단
                    </p>
                    <p className="questionBoard_main_box_head_property_time">
                      2분전
                    </p>
                  </div>
                  <div className="questionBoard_main_box_head_title">
                    <p>KTX 시간 바꾸고 싶어요</p>
                  </div>
                </Link>
                <div className="questionBoard_main_box_head_btn-complete">
                  <p>채택완료</p>
                </div>
              </div>
              <div className="questionBoard_main_box_detail">
                <p>
                  KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마
                  안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수
                  있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게
                  해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날
                  것 같아서 겁...
                </p>
              </div>
            </div>
            <div className="questionBoard_main_box">
              <div className="questionBoard_main_box_head">
                <Link
                  to="/quest_detail/abc123"
                  className="questionBoard_main_box_head_text"
                >
                  <div className="questionBoard_main_box_head_property">
                    <p className="questionBoard_main_box_head_property_point">
                      100
                    </p>
                    <p className="questionBoard_main_box_head_property_category">
                      달력 · 이동수단
                    </p>
                    <p className="questionBoard_main_box_head_property_time">
                      2분전
                    </p>
                  </div>
                  <div className="questionBoard_main_box_head_title">
                    <p>따릉이 대여했는데 반납이 안돼요</p>
                  </div>
                </Link>
                <div className="questionBoard_main_box_head_btn">
                  <img src="/img/main_chat_icon.svg" alt="채팅하기" />
                  <p>채팅하기</p>
                </div>
              </div>
              <div className="questionBoard_main_box_detail">
                <p>
                  왜 반납이 안 될까요. 딸이 알려준대로 반납 버튼 눌렀는데
                  반납되었다는 문자가 안 오네요.. 상담원 전화는 계속 이용자가
                  많다고 떠서 연락이 불가한 것 같은데 큰일 났네요...
                </p>
              </div>
            </div>
            <div className="questionBoard_main_box">
              <div className="questionBoard_main_box_head">
                <Link
                  to="/quest_detail/abc123"
                  className="questionBoard_main_box_head_text"
                >
                  <div className="questionBoard_main_box_head_property">
                    <p className="questionBoard_main_box_head_property_category">
                      냠냠 · 상품구매
                    </p>
                    <p className="questionBoard_main_box_head_property_time">
                      2분전
                    </p>
                  </div>
                  <div className="questionBoard_main_box_head_title">
                    <p>이거 혹시 보이스 피싱인가요?</p>
                  </div>
                </Link>
                <div className="questionBoard_main_box_head_btn">
                  <img src="/img/main_chat_icon.svg" alt="채팅하기" />
                  <p>채팅하기</p>
                </div>
              </div>
              <div className="questionBoard_main_box_detail">
                <p>
                  문자로 연락이 왔는데요. 요즘 하도 보이스 피싱이 많다고 하니까
                  괜히 의심이 돼서요. 이거 문자에 있는 링크 눌러도 되는건가요?
                  잘 못 눌렀다가 개인정보 다 털리면 어떡하죠? 무섭네요..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
