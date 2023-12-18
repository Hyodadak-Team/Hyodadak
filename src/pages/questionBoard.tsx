/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { questionTypes } from '../constants/questionBoard'
import RoundBtn from '../composables/Button/RoundBtn'
import ToggleBtn from '../composables/Button/ToggleBtn'
import Pagination from '../composables/Pagination'
import setPagination from '../utils/pagination'
import { IQuestion } from '../types/questionBoard'
import Title from '../components_ques/Title'
import { deleteBoard, getAllBoard } from '../apis/board'
import formatDate from '../utils/formateDate'

type TitleType = {
  data: [string, string, string, string]
}

function QuestionBoard() {
  const navigate = useNavigate()

  const itemsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)
  const [questionList, setQuestionList] = useState<Array<IQuestion>>([])
  const { currentItems } = setPagination(
    questionList,
    currentPage,
    itemsPerPage,
  )
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const currentUrl: TitleType['data'] = ['질문하기', '/questionBoard', '', '']

  const getQuestions = async () => {
    try {
      const res = await getAllBoard()
      setQuestionList(() => res)
    } catch (err) {
      console.error(err)
    }
  }

  const deletePost = async (boardId: string | undefined) => {
    try {
      await deleteBoard(boardId as unknown as string)
      navigate('/questionBoard')
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])

  useEffect(() => {
    getQuestions()
  }, [questionList])

  return (
    <div className="innerBox ques">
      <Title data={currentUrl} />
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
            <Link to={`/quest_detail/${ques._id}`}>
              <div key={ques._id} className="question">
                <div className="question_header">
                  <div className="question_property">
                    <p className="question_property_point">
                      {ques.board_point}
                    </p>
                    <p className="question_property_type">
                      {ques.board_category}
                    </p>
                    <div className="divide-circle" />
                    <p className="question_property_date">
                      {formatDate(ques.create_time)}
                    </p>
                  </div>
                  <div className="question_control">
                    <Link to={`/modify/${ques._id}`}>
                      <p className="question_control_edit">수정</p>
                    </Link>
                    <div
                      onClick={() => deletePost(ques?._id)}
                      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          deletePost(ques?._id)
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <p className="question_control_delete">삭제</p>
                    </div>
                  </div>
                </div>
                <div className="question_title">
                  <p>{ques.board_title}</p>
                  {ques.board_img.length !== 0 && (
                    <img src="/img/photo_icon.svg" alt="photos-icon" />
                  )}
                </div>
                <div className="question_footer">
                  <p className="question_detail">{ques.board_contents}</p>
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
            </Link>
          ))}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={currentItems.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
export default QuestionBoard
