import '../styles/MainPageAnswerer.scss'
// polygon chat_icon image_icon

export default function MainPageAnswerer() {
  return (
    <div className="innerBox res">
      <div className="partnerAnswer">
        <div className="partnerAnswer_text">
          <p className="partnerAnswer_title">파트너 질문</p>
          <p className="partnerAnswer_plus">더보기 +</p>
        </div>
        <div className="partnerAnswer_postBox">
          <div className="partnerAnswer_post">
            <div className="partnerAnswer_post_property">
              <p className="partnerAnswer_post_property_point">100</p>
              <p className="partnerAnswer_post_property_category">
                거북이 · 무인자판기
              </p>
            </div>
            <p className="partnerAnswer_post_title">KTX 시간 바꾸고 싶어요</p>
            <p className="partnerAnswer_post_detail">
              KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마
              안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는
              곳이 문을 닫아..
            </p>
            <div className="partnerAnswer_post_footer">
              <p className="partnerAnswer_post_footer_time">1분전</p>
              <div className="partnerAnswer_post_footer_chatBtn">
                <img src="/img/main_chat_icon.svg" alt="채팅하기" />
                <p>채팅하기</p>
              </div>
            </div>
          </div>
          <div className="partnerAnswer_post">
            <div className="partnerAnswer_post_property">
              <p className="partnerAnswer_post_property_point">100</p>
              <p className="partnerAnswer_post_property_category">
                거북이 · 무인자판기
              </p>
            </div>
            <p className="partnerAnswer_post_title">KTX 시간 바꾸고 싶어요</p>
            <p className="partnerAnswer_post_detail">
              KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마
              안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는
              곳이 문을 닫아..
            </p>
            <div className="partnerAnswer_post_footer">
              <p className="partnerAnswer_post_footer_time">1분전</p>
              <div className="partnerAnswer_post_footer_chatBtn">
                <img src="/img/main_chat_icon.svg" alt="채팅하기" />
                <p>채팅하기</p>
              </div>
            </div>
          </div>
          <div className="partnerAnswer_post">
            <div className="partnerAnswer_post_property">
              <p className="partnerAnswer_post_property_point">100</p>
              <p className="partnerAnswer_post_property_category">
                거북이 · 무인자판기
              </p>
            </div>
            <p className="partnerAnswer_post_title">KTX 시간 바꾸고 싶어요</p>
            <p className="partnerAnswer_post_detail">
              KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마
              안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는
              곳이 문을 닫아..
            </p>
            <div className="partnerAnswer_post_footer">
              <p className="partnerAnswer_post_footer_time">1분전</p>
              <div className="partnerAnswer_post_footer_chatBtn">
                <img src="/img/main_chat_icon.svg" alt="채팅하기" />
                <p>채팅하기</p>
              </div>
            </div>
          </div>
          <div className="partnerAnswer_post">
            <div className="partnerAnswer_post_property">
              <p className="partnerAnswer_post_property_point">100</p>
              <p className="partnerAnswer_post_property_category">
                거북이 · 무인자판기
              </p>
            </div>
            <p className="partnerAnswer_post_title">KTX 시간 바꾸고 싶어요</p>
            <p className="partnerAnswer_post_detail">
              KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마
              안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는
              곳이 문을 닫아..
            </p>
            <div className="partnerAnswer_post_footer">
              <p className="partnerAnswer_post_footer_time">1분전</p>
              <div className="partnerAnswer_post_footer_chatBtn">
                <img src="/img/main_chat_icon.svg" alt="채팅하기" />
                <p>채팅하기</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search">
        <div className="search_option">
          <div className="search_title">
            <p>제목</p>
            <input type="text" placeholder="검색어를 입력해주세요" />
          </div>
          <div className="search_detail">
            <p>내용</p>
            <input type="text" placeholder="검색어를 입력해주세요" />
          </div>
          <div className="search_category">
            <p>유형</p>
            <ul>
              <li>전체</li>
              <li>무인주문기</li>
              <li>스마트 가전제품 사용</li>
              <li>상품구매</li>
              <li>이동수단</li>
              <li>서비스이용 예약</li>
              <li>기타</li>
            </ul>
          </div>
          <div className="search_selection">
            <p>채택</p>
            <div className="search_selection_radio">
              <label htmlFor="selected">
                <input id="selected" type="radio" name="isSelection" />
                전체
              </label>
              <label htmlFor="notSelected">
                <input id="notSelected" type="radio" name="isSelection" />
                채택미완료
              </label>
            </div>
          </div>
        </div>
        <div className="search_button">검색</div>
      </div>
      <div className="questionList">
        <div className="questionList_header">
          <p className="questionList_header_title">질문목록</p>
          <p className="questionList_header_numbers">총 20개</p>
        </div>
        <table className="question_table">
          <thead className="question_table_header">
            <tr>
              <th>제목 + 내용</th>
              <th>이름</th>
              <th>유형</th>
              <th>채택</th>
              <th>
                용돈
                <img src="/img/main_polygon_icon.svg" alt="화살표" />
              </th>
              <th>
                답변수
                <img src="/img/main_polygon_icon.svg" alt="화살표" />
              </th>
              <th>
                등록일
                <img src="/img/main_polygon_icon.svg" alt="화살표" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="question_table_body_title">
                  <span className="question_table_body_title_content">
                    서브웨이 어떻게 먹어요?
                  </span>
                  <span>
                    {' '}
                    / 너무 복잡해서 못먹겠다 혹....
                    <img src="/img/main_image_icon.svg" alt="이미지" />
                  </span>
                </div>
              </td>
              <td>거북이</td>
              <td>무인주문기</td>
              <td>완료</td>
              <td>기본</td>
              <td>0</td>
              <td>1분전</td>
            </tr>
            <tr>
              <td>
                <div className="question_table_body_title">
                  <span className="question_table_body_title_content">
                    서브웨이 어떻게 먹어요?
                  </span>
                  <span> / 너무 복잡해서 못먹겠다 혹....</span>
                </div>
              </td>
              <td>거북이</td>
              <td>무인주문기</td>
              <td>완료</td>
              <td>기본</td>
              <td>0</td>
              <td>1분전</td>
            </tr>
            <tr>
              <td>
                <div className="question_table_body_title">
                  <span className="question_table_body_title_content">
                    서브웨이 어떻게 먹어요?
                  </span>
                  <span>
                    {' '}
                    / 너무 복잡해서 못먹겠다 혹....
                    <img src="/img/main_image_icon.svg" alt="이미지" />
                  </span>
                </div>
              </td>
              <td>거북이</td>
              <td>무인주문기</td>
              <td>완료</td>
              <td>기본</td>
              <td>0</td>
              <td>1분전</td>
            </tr>
            <tr>
              <td>
                <div className="question_table_body_title">
                  <span className="question_table_body_title_content">
                    서브웨이 어떻게 먹어요?
                  </span>
                  <span> / 너무 복잡해서 못먹겠다 혹....</span>
                </div>
              </td>
              <td>거북이</td>
              <td>무인주문기</td>
              <td>완료</td>
              <td>기본</td>
              <td>0</td>
              <td>1분전</td>
            </tr>
            <tr>
              <td>
                <div className="question_table_body_title">
                  <span className="question_table_body_title_content">
                    서브웨이 어떻게 먹어요?
                  </span>
                  <span>
                    {' '}
                    / 너무 복잡해서 못먹겠다 혹....
                    <img src="/img/main_image_icon.svg" alt="이미지" />
                  </span>
                </div>
              </td>
              <td>거북이</td>
              <td>무인주문기</td>
              <td>완료</td>
              <td>기본</td>
              <td>0</td>
              <td>1분전</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
