import { useEffect, useState } from 'react'

import JoinSelect from '../components/JoinSelect'
import JoinMemberInfo from '../components/JoinMemberInfo'
import JoinPersonalInfo from '../components/JoinPersonalInfo'
import JoinComplete from '../components/joinComplete'

export default function Join() {
  const [joinState, setJoinState] = useState({
    pageIndex: 0,
    certificate: false,
    user_id: '',
    user_pw: '',
    user_type: '',
    user_tel: '',
    user_name: '',
  })
  useEffect(() => {
    console.log(joinState)
  }, [joinState])
  let page = null
  if (joinState.pageIndex === 0) {
    page = <JoinSelect joinState={joinState} setJoinState={setJoinState} />
  } else if (joinState.pageIndex === 1) {
    page = (
      <JoinPersonalInfo joinState={joinState} setJoinState={setJoinState} />
    )
  } else if (joinState.pageIndex === 2) {
    page = <JoinMemberInfo joinState={joinState} setJoinState={setJoinState} />
  } else if (joinState.pageIndex === 3) {
    page = <JoinComplete joinState={joinState} />
  }
  return page
}
