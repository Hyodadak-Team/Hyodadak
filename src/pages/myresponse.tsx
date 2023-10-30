import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MyResponseBox from '../components_res/MyResponseBox'

export default function MyResponse() {
  const [quesData, setQuesData] = useState([
    {
      title: '서브웨이 어떻게 먹어요...',
      type: '무인자판기',
      writer: '거북이',
      createTime: '2023-10-30 15:10:00',
      money: 1000,
      content:
        '너무 복잡해서 못 먹것다 논현역 근처에 사시는 분 안계신가요? 너무 복잡해요.. 메뉴 선택하다가 사람들 눈치보여서 그냥 나왔어요.. \n 제발 도와주세요. 저 서브웨이 못 먹은지 3달 됐단 말이에요...',
    },
    {
      title: '서브웨이 어떻게 먹어요...',
      type: '무인자판기',
      writer: '거북이',
      createTime: '2023-10-30 15:10:00',
      money: 100,
      content:
        '너무 복잡해서 못 먹것다 논현역 근처에 사시는 분 안계신가요? 너무 복잡해요.. 메뉴 선택하다가 사람들 눈치보여서 그냥 나왔어요.. \n 제발 도와주세요. 저 서브웨이 못 먹은지 3달 됐단 말이에요...',
    },
  ])

  // 백엔드 작업 후 빈 {} 로 수정필요
  useEffect(() => {
    // 나중에 백엔드에서 user정보 받아와서 업데이트 필요!
    setQuesData([
      {
        title: '서브웨이 어떻게 먹어요...',
        type: '무인자판기',
        writer: '거북이',
        createTime: '2023-10-30 15:10:00',
        money: 100,
        content:
          '너무 복잡해서 못 먹것다 논현역 근처에 사시는 분 안계신가요? 너무 복잡해요.. 메뉴 선택하다가 사람들 눈치보여서 그냥 나왔어요.. \n 제발 도와주세요. 저 서브웨이 못 먹은지 3달 됐단 말이에요...',
      },
      {
        title: '서브웨이 어떻게 먹어요...',
        type: '무인자판기',
        writer: '거북이',
        createTime: '2023-10-30 15:10:00',
        money: 100,
        content:
          '너무 복잡해서 못 먹것다 논현역 근처에 사시는 분 안계신가요? 너무 복잡해요.. 메뉴 선택하다가 사람들 눈치보여서 그냥 나왔어요.. \n 제발 도와주세요. 저 서브웨이 못 먹은지 3달 됐단 말이에요...',
      },
    ])
  }, [])
  return (
    <div className="innerBox res myresponse_container">
      <div className="res_title">내 답변</div>
      <div className="flexBtw">
        <ul className="filter_box">
          <li>
            <Link className="default" to="?tab=total">
              전체
            </Link>
          </li>
          <li>
            <Link to="?tab=pause">채택 대기 질문</Link>
          </li>
          <li>
            <Link to="?tab=done">채택 완료</Link>
          </li>
        </ul>
        <div className="list_box">
          <div className="search_box">
            <input type="text" />
          </div>
          {quesData.map((data) => (
            <MyResponseBox data={data} />
          ))}
        </div>
      </div>
    </div>
  )
}
