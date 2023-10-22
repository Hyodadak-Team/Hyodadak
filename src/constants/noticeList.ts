/* eslint-disable no-irregular-whitespace */
import { INotice } from '../types/notice'

const noticeList: INotice[] = [
  {
    id: 1,
    type: '공지',
    title: '효다닥 사용자 무료 교육 안내ㅣ23년 9월 20일(수)',
    date: '23.07.24',
    content: `안녕하세요, 효다닥입니다.

    Chrome 브라우저의 91버전 업데이트 후 그룹웨어 결합상품에서 효다닥 로그인이 불가합니다.
    \t– 대상 버전 : Chromium 91 버전(Chrome, Whale, Edge)
    \t– Internet Explorer와 Safari 브라우저는 정상적으로 사용이 가능합니다.
    \t(Safari 브라우저는 공식 지원이 종료되었으나, 로그인 이슈로 인해 한시적으로 이용을 안내드립니다.)
    
    Chrome 브라우저 91버전부터 보안 정책 강화의 일환으로
    현재 사이트에서 도메인이 다른 3rd party 쿠키를 허용하지 않도록 새로운 쿠키 정책이 적용되었습니다.
    
    이에 따라, 고객사 자체 그룹웨어 포탈을 통해 효다닥을 접속하거나
    일부 파트너사에서 제공하고 있는 그룹웨어 결합형 효다닥을 사용하고 계시는 경우,
    포탈 사이트에서 효다닥으로 로그인이 불가한 현상이 발생하고 있습니다.
    
    브라우저 보안 정책은 새로운 공격을 방어하기 위해 계속해서 진화하고 변경됩니다.
    이번 Chrome의 조치는 사이트간 쿠키기반 요청 위조(CSRF, Cross-Site Request Forgery) 공격을 방지하기 위한 보안 강화 차원에서 진행이 되었고,
    향후 다른 브라우저에도 동일한 조치가 적용될 수 있습니다.
    
    \t※CSRF(Cross-Site Request Forgery)란?
    \t사용자가 피싱(Phishing) 사이트에 접근하게 되면
    \t피싱사이트는 접근한 사용자의 네이버웍스 쿠키를 기반으로 네이버웍스를 실행하고,
    \t(피싱을 당한) 사용자의 의지와는 무관하게 공격자가 의도한 행위(결제, 수정, 삭제, 등록 등)를 할 수 있습니다.
    
    이러한 보안 강화 흐름에 맞춰 자체 포탈 및 그룹웨어에 효다닥을 결합하여 사용하는 경우
    iframe 방식이 아닌 팝업 방식으로 구현하여 브라우저에서 요구하는 보안 정책을 준수해주시면 감사하겠습니다.
    
    관련 자세한 사항은 각 회사의 IT 관리자 및 그룹웨어를 제공한 파트너사를 통해 문의주시기 바랍니다.
    앞으로도 더 좋은 서비스를 제공하기 위해 지속적으로 노력하겠습니다.
    
    감사합니다.​`,
  },
  {
    id: 2,
    type: '이벤트',
    title: '효다닥 X 오더퀸 결합 서비스 신규 가입 20% 추가 할인 (~12.31)',
    date: '23.07.22',
    content: 'test',
  },
  {
    id: 3,
    type: '공지',
    title: '효다닥 서비스 접속 정상화 안내',
    date: '22.12.10',
    content: 'test',
  },
  {
    id: 4,
    type: '공지',
    title: 'Chrome 91 업데이트에 따른 로그인 오류 안내',
    date: '22.06.09',
    content: 'test',
  },
  {
    id: 5,
    type: '이벤트',
    title: '효다닥 신규 가입자 3개월 무료 제공 혜택',
    date: '22.05.24',
    content: 'test',
  },
  {
    id: 6,
    type: '공지',
    title: '효다닥 사용자 무료 교육 안내ㅣ23년 9월 20일(수)',
    date: '23.07.24',
    content: 'test',
  },
  {
    id: 7,
    type: '이벤트',
    title: '효다닥 X 오더퀸 결합 서비스 신규 가입 20% 추가 할인 (~12.31)',
    date: '23.07.22',
    content: 'test',
  },
  {
    id: 8,
    type: '공지',
    title: '효다닥 서비스 접속 정상화 안내',
    date: '22.12.10',
    content: 'test',
  },
  {
    id: 9,
    type: '공지',
    title: 'Chrome 91 업데이트에 따른 로그인 오류 안내',
    date: '22.06.09',
    content: 'test',
  },
  {
    id: 10,
    type: '이벤트',
    title: '효다닥 신규 가입자 3개월 무료 제공 혜택',
    date: '22.05.24',
    content: 'test',
  },
  {
    id: 11,
    type: '공지',
    title: '효다닥 사용자 무료 교육 안내ㅣ23년 9월 20일(수)',
    date: '23.07.24',
    content: 'test',
  },
  {
    id: 12,
    type: '이벤트',
    title: '효다닥 X 오더퀸 결합 서비스 신규 가입 20% 추가 할인 (~12.31)',
    date: '23.07.22',
    content: 'test',
  },
  {
    id: 13,
    type: '공지',
    title: '효다닥 서비스 접속 정상화 안내',
    date: '22.12.10',
    content: 'test',
  },
  {
    id: 14,
    type: '공지',
    title: 'Chrome 91 업데이트에 따른 로그인 오류 안내',
    date: '22.06.09',
    content: 'test',
  },
  {
    id: 15,
    type: '이벤트',
    title: '효다닥 신규 가입자 3개월 무료 제공 혜택',
    date: '22.05.24',
    content: 'test',
  },
  {
    id: 16,
    type: '공지',
    title: '효다닥 사용자 무료 교육 안내ㅣ23년 9월 20일(수)',
    date: '23.07.24',
    content: 'test',
  },
  {
    id: 17,
    type: '이벤트',
    title: '효다닥 X 오더퀸 결합 서비스 신규 가입 20% 추가 할인 (~12.31)',
    date: '23.07.22',
    content: 'test',
  },
  {
    id: 18,
    type: '공지',
    title: '효다닥 서비스 접속 정상화 안내',
    date: '22.12.10',
    content: 'test',
  },
  {
    id: 19,
    type: '공지',
    title: 'Chrome 91 업데이트에 따른 로그인 오류 안내',
    date: '22.06.09',
    content: 'test',
  },
  {
    id: 20,
    type: '이벤트',
    title: '효다닥 신규 가입자 3개월 무료 제공 혜택',
    date: '22.05.24',
    content: 'test',
  },
]

export default noticeList
