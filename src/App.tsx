import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/index'
import HeaderRes from './composables/HeaderRes'
import HeaderQues from './composables/HeaderQues'

function App() {
  const [user, setUser] = useState<boolean>(false)
  useEffect(() => {
    // 나중에 백엔드에서 user정보 받아와서 업데이트 필요!
    setUser(false)
  }, [])
  return (
    <div className="App">
      {user ? <HeaderRes /> : <HeaderQues />}
      <Routes>
        <Route>
          <Route path="/" element={<Index />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
