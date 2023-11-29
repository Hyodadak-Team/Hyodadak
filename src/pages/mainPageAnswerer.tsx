import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/mainPageAnswerer.scss'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import PartnerAnswerBox from '../components_res/PartnerAnswerBox'
import PARTNER_ANSWER_DATA from '../constants/mainPageAnswererData'
import timeDifference from '../utils/timeDifference'
import { getAllBoard } from '../apis/board'

interface IDataSourceType {
  key: string
  title: string
  name: string
  category: string
  isDone: string
  money: number | string
  answerCounts: number
  date: string
}

interface IPostDataType {
  answers: Array<string>
  board_access: string
  board_category: Array<string>
  board_contents: string
  board_img: Array<string>
  board_point: number
  board_title: string
  create_time: string
  selected_answer: string
  status: string
  views: number
  writer_id: string
  _id: string
}

export default function MainPageAnswerer() {
  const [post, setPost] = useState<Array<IPostDataType>>([])
  const getAllPost = async () => {
    try {
      const res = await getAllBoard()
      setPost(() => res)
    } catch (err) {
      console.error(err)
    }
  }

  const postData: Array<IDataSourceType> = post?.map(
    (data: IPostDataType): IDataSourceType => {
      return {
        // eslint-disable-next-line no-underscore-dangle
        key: data._id,
        name: data.writer_id,
        title: `${data.board_title} / ${data.board_contents.substring(
          0,
          25,
        )}...`,
        category: data.board_category[0],
        isDone: data.selected_answer ? '완료' : '미완료',
        money: data.board_point,
        answerCounts: data.answers.length,
        date: data.create_time,
      }
    },
  )

  const columns: ColumnsType<IDataSourceType> = [
    {
      title: '제목 + 내용',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, data: IDataSourceType) => (
        <Link state={data.key} to={`/quest_detail/${data.key}`}>
          {text}
        </Link>
      ),
      align: 'center',
    },
    {
      title: '이름',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: '유형',
      dataIndex: 'category',
      key: 'category',
      align: 'center',
    },
    {
      title: '채택',
      dataIndex: 'isDone',
      key: 'isDone',
      align: 'center',
    },
    {
      title: '용돈',
      dataIndex: 'money',
      key: 'money',
      sorter: (a: IDataSourceType, b: IDataSourceType) => {
        let first: number | string = a.money
        let second: number | string = b.money
        if (first === '기본') {
          first = 50
        }
        if (second === '기본') {
          second = 50
        }
        return Number(first) - Number(second)
      },
      align: 'center',
    },
    {
      title: '답변수',
      dataIndex: 'answerCounts',
      key: 'answerCounts',

      sorter: (a: IDataSourceType, b: IDataSourceType) =>
        a.answerCounts - b.answerCounts,
      align: 'center',
    },
    {
      title: '등록일',
      dataIndex: 'date',
      key: 'date',
      render: (text: string) => timeDifference(text),
      sorter: (a: IDataSourceType, b: IDataSourceType) => {
        const first = new Date(a.date)
        const second = new Date(b.date)
        return first.getTime() - second.getTime()
      },
      align: 'center',
    },
  ]

  useEffect(() => {
    getAllPost()
  }, [])

  return (
    <div>
      <div className="partnerAnswer">
        <div className="partnerAnswer_inner innerBox res">
          <div className="partnerAnswer_text">
            <p className="partnerAnswer_title">파트너 질문</p>
            <Link to="/partner_ques" className="partnerAnswer_plus">
              더보기 +
            </Link>
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
