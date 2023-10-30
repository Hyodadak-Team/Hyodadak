import { Link } from 'react-router-dom'
import { useState } from 'react'
import { questionList, questionTypes } from '../constants/questionBoard'
import RoundBtn from '../composables/Button/RoundBtn'
import ToggleBtn from '../composables/Button/ToggleBtn'
import Pagination from '../composables/Pagination'
import setPagination from '../utils/pagination'
import { IQuestion } from '../types/questionBoard'

function QuestionBoard() {
  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)
  const { sortedList, currentItems } = setPagination(
    questionList,
    currentPage,
    itemsPerPage,
  )
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div className="innerBox ques">
      <div className="ques_navbar">
        <img src="/img/home_icon.svg" className="icon home" alt="home-icon" />
        <Link to="/">
          <li>처음으로</li>
        </Link>
        <div className="divide-line" />
        <Link to="/questionBoard">
          <li>질문하기</li>
        </Link>
      </div>
      <div className="ques_title">
        <p className="bold">질문하기</p>
      </div>
      <div className="question_board">
        <div className="board-type">
          {questionTypes.map((ques) => (
            <div key={ques.type}>
              <RoundBtn content={ques.type} path={`questionBoard/${ques.id}`} />
            </div>
          ))}
        </div>
        <div className="board-filter">
          <p>내 질문과 사람들의 질문을 구별해서 볼 수 있어요</p>
          <div className="toggle_section">
            <p>내 질문 보기</p>
            <ToggleBtn />
          </div>
        </div>
        <div className="search_section">
          <input
            className="search-input ques"
            placeholder="궁금한 제목을 입력해보세요"
          />
          <img
            src="/img/search-icon.svg"
            className="search-icon"
            alt="search-icon"
          />
        </div>
        <div className="questionBox">
          {currentItems.map((ques: IQuestion) => (
            <div key={ques.id} className="question">
              <div className="question_header">
                <div className="question_property">
                  <p className="question_property_point">{ques.point}</p>
                  <p className="question_property_type">{ques.type}</p>
                  <div className="divide-circle" />
                  <p className="question_property_date">{ques.date}</p>
                </div>
                <div className="question_control">
                  <p className="question_control_edit">수정</p>
                  <p className="question_control_delete">삭제</p>
                </div>
              </div>
              <div className="question_title">
                <p>{ques.title}</p>
                {ques.photo !== '' && (
                  <img src="/img/photo_icon.svg" alt="photos-icon" />
                )}
              </div>
              <div className="question_footer">
                <p className="question_detail">{ques.content}</p>
                <div className="question_counts">
                  <div className="question_counts_footer_answers">
                    <img src="/img/chat_icon.svg" alt="chat-icon" />
                    <p>답변 {ques.answers}</p>
                  </div>
                  <div className="question_counts_footer_views">
                    <img src="/img/eye_icon.svg" alt="eye-icon" />
                    <p>조회수 {ques.views}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={sortedList.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
export default QuestionBoard
