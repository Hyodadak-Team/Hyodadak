import '../styles/QuestionDetail.scss'

export default function DetailPageAnswerer() {
  return (
    <div className="innerBox res">
      <div className="questionDetail_header">
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
      <div className="questionDetail_detail">
        <img
          className="questionDetail_detail_img"
          src="/img/detail_ktx_img.svg"
          alt="ktx예시"
        />
        <p className="questionDetail_detail_text">
          KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데
          바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서
          온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요.. 기차표
          취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를
          못하겠어요ㅠㅠ 제발 도움 좀 주세요
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
        <form>
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
              안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는
              곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지
              모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서
              겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요. KTX 타고 가려고
              하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데 바꾸고
              싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서
              온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요..
              기차표 취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를
              못하겠어요ㅠㅠ 제발 도움 좀 주세요.
            </p>
            <p className="questionDetail_answerList_box_detail_viewReply">
              1개의 댓글 보기
            </p>
          </div>
          <div className="questionDetail_answerList_box_reply">
            <div className="questionDetail_answerList_box_reply_list">
              <img
                className="questionDetail_answerList_box_reply_list_img"
                src="/img/detail_profile_dog.svg"
                alt="프로필이미지"
              />
              <div className="questionDetail_answerList_box_reply_list_text">
                <div className="questionDetail_answerList_box_reply_list_text_info">
                  <p>잘익은 토마토</p>
                  <p>| 2023.04.01</p>
                </div>
                <p className="questionDetail_answerList_box_reply_list_text_content">
                  안녕하세요 답변이 맘에 들어요
                </p>
              </div>
            </div>
            <form className="questionDetail_answerList_box_reply_input">
              <img src="/img/detail_profile_dog.svg" alt="프로필 이미지" />
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
  )
}
