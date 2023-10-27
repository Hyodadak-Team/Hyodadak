import { Link } from 'react-router-dom'
import { questionTypes } from '../constants/questionBoard'
import RoundBtn from '../composables/Button/RoundBtn'
import ToggleBtn from '../composables/Button/ToggleBtn'

function QuestionBoard() {
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
      </div>
    </div>
  )
}
export default QuestionBoard
