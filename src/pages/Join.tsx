import React from 'react'
import JoinSelect from '../components/JoinSelect'
// import JoinMemberInfo from '../components/JoinMemberInfo'
// import JoinPersonalInfo from '../components/JoinPersonalInfo'

// useState로 상태값 변경해서 props로 자식 컴포넌트로 넘겨주는 식으로 구현하면 될듯
export default function Join() {
  return <JoinSelect />
  // return <JoinPersonalInfo />
  // return <JoinMemberInfo />
}
