import React, { useState } from 'react'

import JoinSelect from '../components/JoinSelect'
import JoinMemberInfo from '../components/JoinMemberInfo'
import JoinPersonalInfo from '../components/JoinPersonalInfo'

// useState로 상태값 변경해서 props로 자식 컴포넌트로 넘겨주는 식으로 구현하면 될듯
export default function Join() {
  const [pageIndex, setPageIndex] = useState(0)
  let page = null
  if (pageIndex === 0) {
    page = <JoinSelect pageIndex={pageIndex} setPageIndex={setPageIndex} />
  } else if (pageIndex === 1) {
    page = (
      <JoinPersonalInfo pageIndex={pageIndex} setPageIndex={setPageIndex} />
    )
  } else if (pageIndex === 2) {
    page = <JoinMemberInfo pageIndex={pageIndex} setPageIndex={setPageIndex} />
  }
  return page
}
