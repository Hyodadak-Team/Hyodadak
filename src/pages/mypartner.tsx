import { Link } from 'react-router-dom'
import { ConfigProvider, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import MyPartnerBox from '../components_ques/MyPartnerBox'
import { IPartnerInfo } from '../types/mypage'

interface DataType {
  partner: string
  questionNum: number
  selectionRate: number
  responseSelection: number
  money: number
}

export default function mypartner() {
  // dataJson 삭제 예정
  const dataJson: IPartnerInfo[] = [
    {
      profileImg: '',
      name: '기믄정',
      major: ['이동수단', '무인자판기'],
      intro: '월/화/수에 소통이 활발한 파트너입니다',
      level: 3,
      questionNum: 20,
      money: 20000,
      type: 'ans',
      partnerNum: 1,
    },
    {
      profileImg: '',
      name: '박지원',
      major: ['이동수단', '무인자판기'],
      intro: '월/화/수에 소통이 활발한 파트너입니다',
      level: 3,
      questionNum: 20,
      money: 20000,
      type: 'ans',
      partnerNum: 1,
    },
  ]
  const user = false

  const dataSource = [
    {
      partner: '기믄정',
      questionNum: 3,
      selectionRate: 100,
      responseSelection: 3,
      money: 2000,
    },
    {
      partner: '냠냠',
      questionNum: 3,
      selectionRate: 100,
      responseSelection: 3,
      money: 2000,
    },
  ]

  const columns: ColumnsType<DataType> = [
    {
      title: '파트너',
      dataIndex: 'partner',
      key: 'partner',
      align: 'center',
    },
    {
      title: '질문수',
      dataIndex: 'questionNum',
      align: 'center',
    },
    {
      title: '채택률',
      dataIndex: 'selectionRate',
      key: 'selectionRate',
      align: 'center',
    },
    {
      title: '받은 채택',
      dataIndex: 'responseSelection',
      key: 'responseSelection',
      align: 'center',
    },
    {
      title: '받은 용돈',
      dataIndex: 'money',
      key: 'money',
      align: 'center',
    },
  ]

  return user ? (
    <div className="innerBox ques">
      <div className="ques_navbar">
        <img src="/img/home_icon.svg" className="icon home" alt="home-icon" />
        <Link to="/">
          <li>처음으로</li>
        </Link>
        <div className="divide-line" />
        <Link to="/mypage">
          <li>내 정보</li>
        </Link>
        <div className="divide-line" />
        <Link to="/mypartner">
          <li>파트너관리</li>
        </Link>
      </div>
      <div className="ques_title">
        <p>파트너관리</p>
      </div>
      <div className="mypartner_container">
        {dataJson.map((el) => {
          return <MyPartnerBox data={el} />
        })}
      </div>
    </div>
  ) : (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Pretendard-Medium',
        },
      }}
    >
      <div className="innerBox res">
        <div className="res_title">파트너관리</div>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          className="myresponse_table"
        />
      </div>
    </ConfigProvider>
  )
}
