import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface Type {
  joinState: object
}

export default function JoinComplete(props: Type) {
  const { joinState } = props
  const navigate = useNavigate()

  const testData = (data) => {
    axios
      .post('http://localhost:4000/join/test', { data })
      .then(function (response) {
        if (response.status === 200) {
          navigate('/login')
        }
      })
      .catch(function (error) {
        console.log(error)
        // alert('초기 데이터 셋 실패')
      })
  }

  useEffect(() => {
    testData(joinState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      회원가입 성공 ㅊㅊ
      <div>{joinState.user_id}</div>
      <div>{joinState.user_pw}</div>
      {/* <div>{joinState.user_pwCheck}</div> */}
      <div>{joinState.user_type}</div>
      <div>{joinState.user_tel}</div>
      <div>{joinState.user_name}</div>
    </div>
  )
}
