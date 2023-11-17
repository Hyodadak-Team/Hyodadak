/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import timeDifference from '../utils/timeDifference'

export default function ChatList() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedPartner, setSelectedPartner] = useState<any>({})
  const [visible, setVisible] = useState(false) // 나중에 partnerList의 status를 업데이트 해야함
  const [user, setUser] = useState({ name: '박성재', type: 'res' })
  const [chatLog, setChatLog] = useState([
    {
      name: '기믄정',
      date: '',
      message: '안녕하세.요서브웨이 어떻게 먹는지 답변드립니다.',
    },
    {
      name: '박성재',
      date: '',
      message: '안녕하세요 저는 박성재라고 합니다.',
    },
  ])
  const [partnerList, setPartnerList] = useState([
    {
      id: 1,
      profile: 'path',
      name: '김은정',
      message: '이해가 잘 안돼요 다시 알려주세요 제발',
      contentId: 2, // message가 안읽은 상태인 경우 콘텐츠 내용이 보여야하니까
      contentTitle: 'Q.서브웨이 어떻게 먹어야하는지 모르겠어요',
      createTime: '2023-10-30 15:10:00',
      status: 'not_read', // 안읽은경우 not_read, 종료된경우 end
    },
    {
      id: 2,
      profile: 'path',
      name: '기믄정',
      message: '안녕하세요 이번에 첫 질문드리는것 같네요.',
      contentId: 3,
      contentTitle: 'Q.서브웨이 어떻게 먹어야하는지 모르겠어요',
      createTime: '2023-11-05 15:10:00',
      status: 'end',
    },
  ])

  useEffect(() => {
    setPartnerList([
      {
        id: 1,
        profile: '',
        name: '김은정',
        message: '이해가 잘 안돼요 다시 알려주세요 제발',
        contentId: 2,
        contentTitle: 'Q.서브웨이 어떻게 먹어야하는지 모르겠어요',
        createTime: '2023-10-30 15:10:00',
        status: 'not_read', // 안읽은경우 not_read, 종료된경우 end
      },
      {
        id: 2,
        profile: '',
        name: '기믄정',
        message: '안녕하세요 이번에 첫 질문드리는것 같네요.',
        contentId: 3,
        contentTitle: 'Q.서브웨이 어떻게 먹어야하는지 모르겠어요',
        createTime: '2023-11-05 15:10:00',
        status: 'end',
      },
    ]) // 추후 벡엔드에서 정보 가져올 예정
    setChatLog([
      {
        name: '기믄정',
        date: '',
        message: '안녕하세.요서브웨이 어떻게 먹는지 답변드립니다.',
      },
      {
        name: '박성재',
        date: '',
        message: '안녕하세요 저는 박성재라고 합니다.',
      },
    ])
    setUser({ name: '박성재', type: 'res' })
  }, [])

  return (
    <div className="chat_box">
      {Object.keys(selectedPartner).length !== 0 ? (
        <>
          <div className="chat_header">
            <div
              role="button"
              tabIndex={0}
              aria-label="Previous"
              onKeyDown={(e): void => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedPartner({})
                }
              }}
              onClick={() => setSelectedPartner({})}
            >
              <img src="/img/prev-icon.svg" alt="" />
            </div>
            <p>{selectedPartner.name}</p>
            <Link className="content_link" to="/게시물detail">
              {selectedPartner.contentTitle}
            </Link>
          </div>
          {user.type === 'res' ? (
            <div className="request_btn request_btn_res flexBox">
              <span
                role="button"
                tabIndex={0}
                onKeyDown={(e): void => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setVisible(true)
                  }
                }}
                onClick={() => setVisible(true)}
              >
                종료요청
              </span>
              |<span> 나가기</span>
            </div>
          ) : (
            <div className="request_btn flexBox">
              <span>채팅종료</span>
            </div>
          )}
          <ul className="chat_log">
            {chatLog.map((el) => {
              return (
                <li className={el.name === user.name ? 'me chat' : 'you chat'}>
                  {el.message}
                </li>
              )
            })}
          </ul>
          {visible && (
            <span className="end_chat flexCenter">채팅이 종료되었습니다.</span>
          )}

          <input type="text" placeholder="입력후 Enter키를 눌러주세요" />
        </>
      ) : (
        <>
          <div className="chat_header">파트너 실시간 채팅</div>
          <ul className="partner_list">
            {partnerList.map((el) => {
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <li
                  key={el.id}
                  className={
                    el.status === 'end' ? 'endChat partner_box' : 'partner_box'
                  }
                  onClick={(): void => setSelectedPartner(el)}
                >
                  {el.profile ? (
                    <img src={el.profile} alt="" />
                  ) : (
                    <img
                      className="basic_profile_img"
                      src="/img/mypage_icon.svg"
                      alt="프로필 이미지"
                    />
                  )}
                  <div className="chat_info">
                    <p className="chat_title">
                      {el.name}
                      <span>{timeDifference(el.createTime)}</span>
                    </p>
                    <p className="chat_content">
                      {el.status === 'not_read' ? el.message : el.contentTitle}
                    </p>
                  </div>
                  <div className="status">
                    {el.status === 'not_read' ? (
                      <span className="read"> </span>
                    ) : el.status === 'end' ? (
                      <span className="end"> 종료</span>
                    ) : (
                      ''
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}
