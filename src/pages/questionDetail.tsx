import { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/questionDetail.scss'
import PartnerRequest from '../components_ques/PartnerRequest'

interface QuestionDetailProps {
  user: boolean
}
export default function DetailPageAnswerer(props: QuestionDetailProps) {
  const { user } = props
  const partnerReqBox = useRef<HTMLDivElement>(null)
  const partnerReqBoxClick = () => {
    // if (
    //   partnerReqBox.current?.classList.value ===
    //   'questionDetail_answerList_box_profile_partnerRequest'
    // ) {
    //   partnerReqBox.current.classList.value =
    //     'questionDetail_answerList_box_profile_partnerRequest hide'
    // }
    // 추후 Redux 상태관리를 통해 모달창 열고 닫기
    if (
      partnerReqBox.current?.classList.value ===
      'questionDetail_answerList_box_profile_partnerRequest hide'
    ) {
      partnerReqBox.current.classList.value =
        'questionDetail_answerList_box_profile_partnerRequest'
    }
  }
  return (
    <div>
      {user ? (
        // user가 true인 경우 -> res
        <div className="res">
          <div className="questionDetail_header innerBox ">
            <div className="questionDetail_header_property">
              <p className="questionDetail_header_property_point">100</p>
              <p className="questionDetail_header_property_category">
                티코 · 이동수단
              </p>
              <p className="questionDetail_header_property_time">2분전</p>
            </div>
            <div className="questionDetail_header_title">
              <p className="questionDetail_header_title_state">채택완료</p>
              <p className="questionDetail_header_title_title">
                KTX 시간 바꾸고 싶어요
              </p>
            </div>
          </div>
          <div className="questionDetail_detail innerBox ">
            <img
              className="questionDetail_detail_img"
              src="/img/detail_ktx_img.svg"
              alt="ktx예시"
            />
            <p className="questionDetail_detail_text">
              KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마
              안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는
              곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지
              모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서
              겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요
            </p>
            <div className="questionDetail_detail_property">
              <img
                className="questionDetail_detail_property_viewIcon"
                src="/img/detail_eye_icon.svg"
                alt="조회수"
              />
              <p className="questionDetail_detail_property_viewCount">65</p>
              <img
                className="questionDetail_detail_property_answerIcon"
                src="/img/detail_reply_icon.svg"
                alt="댓글"
              />
              <p className="questionDetail_detail_property_answerCount">3</p>
            </div>
          </div>
          <div className="questionDetail_answer">
            <form className="innerBox">
              <textarea
                className="questionDetail_answer_input"
                placeholder="답변을 상세히 기입해주세요"
              />
              <div className="questionDetail_answer_btn">
                <img
                  className="questionDetail_answer_btn_img"
                  src="/img/detail_img_icon.svg"
                  alt="이미지 업로드"
                />
                <input
                  className="questionDetail_answer_btn_submit"
                  type="submit"
                  value="답변하기"
                />
              </div>
            </form>
          </div>
          <div className="questionDetail_answerList innerBox ">
            <div className="questionDetail_answerList_box">
              <div className="questionDetail_answerList_box_profile">
                <div className="questionDetail_answerList_box_profile_left">
                  <img
                    className="questionDetail_answerList_box_profile_left_img"
                    src="/img/detail_default_profile_icon.svg"
                    alt="프로필 이미지"
                  />
                  <div className="questionDetail_answerList_box_profile_left_text">
                    <p className="questionDetail_answerList_box_profile_left_text_id">
                      IT 전문가다
                    </p>
                    <p className="questionDetail_answerList_box_profile_left_text_category">
                      이동수단, 무인자판기에서 활동 중
                    </p>
                  </div>
                </div>
                <div className="questionDetail_answerList_box_profile_right">
                  <p className="questionDetail_answerList_box_profile_right_level">
                    Lv.3
                  </p>
                </div>
              </div>
              <div className="questionDetail_answerList_box_detail">
                <p className="questionDetail_answerList_box_detail_text">
                  KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마
                  안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수
                  있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게
                  해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날
                  것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요.
                  KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마
                  안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수
                  있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게
                  해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날
                  것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요.
                </p>
                <p className="questionDetail_answerList_box_detail_viewReply">
                  1개의 댓글 보기
                </p>
              </div>
              <div className="questionDetail_answerList_box_reply">
                <div className="questionDetail_answerList_box_reply_list">
                  <div className="questionDetail_answerList_box_reply_list_img_box">
                    <img
                      className="questionDetail_answerList_box_reply_list_img"
                      src="/img/detail_profile_dog.svg"
                      alt="프로필이미지"
                    />
                  </div>
                  <div className="questionDetail_answerList_box_reply_list_text">
                    <div className="questionDetail_answerList_box_reply_list_text_info">
                      <p>잘익은 토마토</p>
                      <p>| 2023.04.01</p>
                    </div>
                    <p className="questionDetail_answerList_box_reply_list_text_content">
                      안녕하세요 답변이 맘에 들어요 안녕하세요 답변이 맘에
                      들어요 안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요
                    </p>
                  </div>
                </div>
                <form className="questionDetail_answerList_box_reply_input">
                  <div className="questionDetail_answerList_box_reply_input_img">
                    <img
                      src="/img/detail_profile_dog.svg"
                      alt="프로필 이미지"
                    />
                  </div>

                  <div className="questionDetail_answerList_box_reply_input_box">
                    <textarea
                      className="questionDetail_answerList_box_reply_input_text"
                      placeholder="하고싶은 말을 적어보세요!"
                    />
                    <input
                      className="questionDetail_answerList_box_reply_input_submit"
                      type="submit"
                      value="작성"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // user가 false인 경우 -> ques
        <div className="innerBox ques">
          <div className="questionDetail_header">
            <div className="ques_navbar">
              <img
                src="/img/home_icon.svg"
                className="icon home"
                alt="home-icon"
              />
              <Link to="/">
                <li>처음으로</li>
              </Link>
              <div className="divide-line" />
              <Link to="/quest_detail">
                <li>질문게시판</li>
              </Link>
            </div>
            <div className="questionDetail_header_title">
              <p className="questionDetail_header_title_state">채택완료</p>
              <p className="questionDetail_header_title_title">
                KTX 시간 바꾸고 싶어요
              </p>
            </div>
            <div className="questionDetail_header_sub">
              <p className="questionDetail_header_sub_property">
                티코 · 이동수단 · 2분전
              </p>
              <p className="questionDetail_header_sub_modify">
                {/* 사용자가 게시글의 주인인 경우 조건 추가 해서 렌더링 */}
                <div className="questionDetail_header_sub_modify_modify">
                  <img src="/img/detail_pen_icon.svg" alt="수정하기" />
                  <p>게시물 수정하기</p>
                </div>
                <div className="questionDetail_header_sub_modify_delete">
                  <img src="/img/detail_waste_icon.svg" alt="삭제하기" />
                  <p>게시물 삭제하기</p>
                </div>
              </p>
            </div>
          </div>
          <div className="questionDetail_detail">
            <img
              className="questionDetail_detail_img"
              src="/img/detail_ktx_img.svg"
              alt="ktx예시"
            />
            <p className="questionDetail_detail_text">
              KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마
              안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는
              곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지
              모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서
              겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요
            </p>
            <div className="questionDetail_detail_property">
              <img
                className="questionDetail_detail_property_viewIcon"
                src="/img/detail_Pinkeye_icon.svg"
                alt="조회수"
              />
              <p className="questionDetail_detail_property_viewCount">
                조회수 65
              </p>
              <img
                className="questionDetail_detail_property_answerIcon"
                src="/img/detail_Pinkchat_icon.svg"
                alt="댓글"
              />
              <p className="questionDetail_detail_property_answerCount">
                답변 3
              </p>
            </div>
          </div>
          <div className="questionDetail_answerList">
            <div className="questionDetail_answerList_box">
              <div className="questionDetail_answerList_box_profile">
                <div className="questionDetail_answerList_box_profile_left">
                  <img
                    className="questionDetail_answerList_box_profile_left_img"
                    src="/img/detail_default_profile_icon.svg"
                    alt="프로필 이미지"
                  />
                  <div className="questionDetail_answerList_box_profile_left_text">
                    <div className="questionDetail_answerList_box_profile_left_text_top">
                      <p className="questionDetail_answerList_box_profile_left_text_level">
                        Lv.3
                      </p>
                      <p className="questionDetail_answerList_box_profile_left_text_id">
                        IT 전문가다
                      </p>
                    </div>
                    <div className="questionDetail_answerList_box_profile_left_text_bottom">
                      <p className="questionDetail_answerList_box_profile_left_text_category">
                        이동수단, 무인자판기에서 활동 중
                      </p>
                    </div>
                  </div>
                </div>
                <div className="questionDetail_answerList_box_profile_right">
                  {/* 사용자가 게시글의 주인인 경우 조건 추가 해서 렌더링 */}
                  <button type="button" onClick={partnerReqBoxClick}>
                    <p className="questionDetail_answerList_box_profile_right_request">
                      파트너 요청하기
                    </p>
                  </button>
                  <div
                    ref={partnerReqBox}
                    className="questionDetail_answerList_box_profile_partnerRequest hide"
                  >
                    <PartnerRequest />
                  </div>
                  <p className="questionDetail_answerList_box_profile_right_select">
                    채택하기
                  </p>
                </div>
              </div>
              <div className="questionDetail_answerList_box_detail">
                <p className="questionDetail_answerList_box_detail_text">
                  KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마
                  안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수
                  있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게
                  해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날
                  것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요.
                  KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마
                  안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수
                  있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게
                  해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날
                  것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요.
                </p>
                <p className="questionDetail_answerList_box_detail_viewReply">
                  1개의 댓글 보기
                </p>
              </div>
              <div className="questionDetail_answerList_box_reply">
                <div className="questionDetail_answerList_box_reply_list">
                  <div className="questionDetail_answerList_box_reply_list_img_box">
                    <img
                      className="questionDetail_answerList_box_reply_list_img"
                      src="/img/detail_profile_dog.svg"
                      alt="프로필이미지"
                    />
                  </div>
                  <div className="questionDetail_answerList_box_reply_list_text">
                    <div className="questionDetail_answerList_box_reply_list_text_info">
                      <p>잘익은 토마토</p>
                      <p>| 2023.04.01</p>
                      {/* 댓글 작성자인 경우에만 보이도록 조건부 렌더링 */}
                      <img src="/img/detail_pen_icon.svg" alt="수정하기" />
                      <img src="/img/detail_waste_icon.svg" alt="삭제하기" />
                    </div>
                    <p className="questionDetail_answerList_box_reply_list_text_content">
                      안녕하세요 답변이 맘에 들어요 안녕하세요 답변이 맘에
                      들어요 안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요안녕하세요 답변이 맘에
                      들어요안녕하세요 답변이 맘에 들어요
                    </p>
                  </div>
                </div>
                <form className="questionDetail_answerList_box_reply_input">
                  <div className="questionDetail_answerList_box_reply_input_img">
                    <img
                      src="/img/detail_profile_dog.svg"
                      alt="프로필 이미지"
                    />
                  </div>

                  <div className="questionDetail_answerList_box_reply_input_box">
                    <textarea
                      className="questionDetail_answerList_box_reply_input_text"
                      placeholder="하고싶은 말을 적어보세요!"
                    />
                    <input
                      className="questionDetail_answerList_box_reply_input_submit"
                      type="submit"
                      value="작성"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
