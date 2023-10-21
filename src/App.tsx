import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/index'
import Notice from './pages/notice'
import Mypage from './pages/mypage'
import HeaderRes from './composables/HeaderRes'
import HeaderQues from './composables/HeaderQues'
import SimulationQues from './pages/Simulation'
import MyPartner from './pages/mypartner'

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
          <Route path="/notice" element={<Notice />} />
          <Route path="/simulation" element={<SimulationQues />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypartner" element={<MyPartner />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
