import { Link } from 'react-router-dom'
import '../styles/mainPageAnswerer.scss'
import { Table } from 'antd'
import PartnerAnswerBox from '../components_res/PartnerAnswerBox'
import PARTNER_ANSWER_DATA from '../constants/mainPageAnswererData'
import timeDifference from '../utils/timeDifference'

interface DataSourceType {
  key: string
  title: string
  name: string
  category: string
  isDone: string
  money: string
  answerCounts: number
  date: string
}
const postData: Array<DataSourceType> = [
  {
    key: '1',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '거북이',
    category: '무인주문기',
    isDone: '완료',
    money: '기본',
    answerCounts: 3,
    date: '2023-11-11',
  },
  {
    key: '2',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '두루미',
    category: '무인주문기',
    isDone: '완료',
    money: '100',
    answerCounts: 5,
    date: '2023-11-12',
  },
  {
    key: '3',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '가자미',
    category: '무인주문기',
    isDone: '완료',
    money: '200',
    answerCounts: 7,
    date: '2023-11-13',
  },
  {
    key: '4',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '토끼',
    category: '무인주문기',
    isDone: '완료',
    money: '700',
    answerCounts: 9,
    date: '2023-11-11',
  },
  {
    key: '5',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '호랑이',
    category: '무인주문기',
    isDone: '완료',
    money: '기본',
    answerCounts: 2,
    date: '2023-11-11',
  },
  {
    key: '6',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '거북이',
    category: '무인주문기',
    isDone: '완료',
    money: '80',
    answerCounts: 4,
    date: '2023-11-11',
  },
  {
    key: '7',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '거북이1',
    category: '무인주문기',
    isDone: '완료',
    money: '80',
    answerCounts: 4,
    date: '2023-11-11',
  },
  {
    key: '8',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '거북이2',
    category: '무인주문기',
    isDone: '완료',
    money: '80',
    answerCounts: 4,
    date: '2023-11-11',
  },
  {
    key: '9',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '거북이3',
    category: '무인주문기',
    isDone: '완료',
    money: '80',
    answerCounts: 4,
    date: '2023-11-11',
  },
  {
    key: '10',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '거북이4',
    category: '무인주문기',
    isDone: '완료',
    money: '80',
    answerCounts: 4,
    date: '2023-11-11',
  },
  {
    key: '11',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '거북이5',
    category: '무인주문기',
    isDone: '완료',
    money: '80',
    answerCounts: 4,
    date: '2023-11-11',
  },
  {
    key: '12',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '거북이6',
    category: '무인주문기',
    isDone: '완료',
    money: '80',
    answerCounts: 4,
    date: '2023-11-11',
  },
  {
    key: '13',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '거북이7',
    category: '무인주문기',
    isDone: '완료',
    money: '80',
    answerCounts: 4,
    date: '2023-11-11',
  },
  {
    key: '14',
    title: '서브웨이 어떻게 먹어요? / 너무 복잡해서 못먹겠다 혹....',
    name: '거북이8',
    category: '무인주문기',
    isDone: '완료',
    money: '80',
    answerCounts: 4,
    date: '2023-11-11',
  },
]

const columns = [
  {
    title: '제목 + 내용',
    dataIndex: 'title',
    key: 'title',
    render: (text: string) => <Link to="/quest_detail/abc123">{text}</Link>,
  },
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '유형',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '채택',
    dataIndex: 'isDone',
    key: 'isDone',
  },
  {
    title: '용돈',
    dataIndex: 'money',
    key: 'money',
    sorter: (a: DataSourceType, b: DataSourceType) => {
      let first: string = a.money
      let second: string = b.money
      if (first === '기본') {
        first = '50'
      }
      if (second === '기본') {
        second = '50'
      }
      return Number(first) - Number(second)
    },
  },
  {
    title: '답변수',
    dataIndex: 'answerCounts',
    key: 'answerCounts',

    sorter: (a: DataSourceType, b: DataSourceType) =>
      a.answerCounts - b.answerCounts,
  },
  {
    title: '등록일',
    dataIndex: 'date',
    key: 'date',
    render: (text: string) => timeDifference(text),
    sorter: (a: DataSourceType, b: DataSourceType) => {
      const first = new Date(a.date)
      const second = new Date(b.date)
      return first.getTime() - second.getTime()
    },
  },
]

export default function MainPageAnswerer() {
  return (
    <div>
      <div className="partnerAnswer">
        <div className="partnerAnswer_inner innerBox res">
          <div className="partnerAnswer_text">
            <p className="partnerAnswer_title">파트너 질문</p>
            <p className="partnerAnswer_plus">더보기 +</p>
          </div>
          <div className="partnerAnswer_postBox">
            {/* data => 파트너 질문 최신순 4개로 가져오기 */}
            {PARTNER_ANSWER_DATA.map((data) => (
              <PartnerAnswerBox data={data} key={data.key} />
            ))}
          </div>
        </div>
      </div>
      <div className="innerBox res">
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
          <Table
            dataSource={postData}
            columns={columns}
            pagination={{
              defaultPageSize: 5,
              pageSize: 5,
              position: ['bottomCenter'],
              hideOnSinglePage: true,
              size: 'small',
            }}
          />
        </div>
      </div>
    </div>
  )
}
