import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/index'
import Notice from './pages/notice'
import Mypage from './pages/mypage'
import HeaderRes from './composables/HeaderRes'
import HeaderQues from './composables/HeaderQues'
import SimulationQues from './pages/simulation'
import MyPartner from './pages/mypartner'
import MainPageAnswerer from './pages/mainPageAnswerer'
import NoticeArticle from './components/NoticeArticle'
import PartnerQuestion from './pages/partnerQuestion'
import Login from './components/Login'
import QuestionDetail from './pages/questionDetail'
import Join from './pages/join'
import MainQues from './pages/mainQues'
import SubWay1 from './pages/SimulationSubWay/Subway1'
import QuestionBoard from './pages/questionBoard'
import SubWay2 from './pages/SimulationSubWay/Subway2'
import SubWay3 from './pages/SimulationSubWay/Subway3'
import MyResponse from './pages/myresponse'
import SubWay4 from './pages/SimulationSubWay/Subway4'
import CreateQuestion from './pages/createQuestion'
import SubWay12 from './pages/SimulationSubWay/Subway12'
import Subway13 from './pages/SimulationSubWay/Subway13'
import Chat from './pages/chat'
import SubWay5 from './pages/SimulationSubWay/Subway5'
import SubWay6 from './pages/SimulationSubWay/Subway6'
import SubWay7 from './pages/SimulationSubWay/Subway7'
import Subway16 from './pages/SimulationSubWay/Subway16'
import Subway17 from './pages/SimulationSubWay/Subway17'
import Subway18 from './pages/SimulationSubWay/Subway18'
import Subway19 from './pages/SimulationSubWay/Subway19'

function App() {
  const [user, setUser] = useState<boolean>(false)
  const [chat, setChat] = useState<boolean>(true)
  useEffect(() => {
    // 나중에 백엔드에서 user정보 받아와서 업데이트 필요!
    setUser(false)
    setChat(true)
  }, [])
  return (
    <div className="App">
      {user ? <HeaderRes user={user} /> : <HeaderQues user={user} />}
      {chat && <Chat />}
      <Routes>
        <Route>
          <Route path="/" element={<Index />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/article/:id" element={<NoticeArticle />} />
          <Route path="/simulation" element={<SimulationQues />} />
          <Route path="/simulation/subwayhome" element={<SubWay1 />} />
          <Route path="/simulation/subway2" element={<SubWay2 />} />
          <Route path="/simulation/subway3" element={<SubWay3 />} />
          <Route path="/simulation/subway4" element={<SubWay4 />} />
          <Route path="/simulation/subway12" element={<SubWay12 />} />
          <Route path="/simulation/subway13" element={<Subway13 />} />
          <Route path="/simulation/subway5" element={<SubWay5 />} />
          <Route path="/simulation/subway6" element={<SubWay6 />} />
          <Route path="/simulation/subway7" element={<SubWay7 />} />
          <Route path="/simulation/subway16" element={<Subway16 />} />
          <Route path="/simulation/subway17" element={<Subway17 />} />
          <Route path="/simulation/subway18" element={<Subway18 />} />
          <Route path="/simulation/subway19" element={<Subway19 />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypartner" element={<MyPartner />} />
          <Route path="/myres" element={<MyResponse />} />
          <Route path="/main_res" element={<MainPageAnswerer />} />
          <Route path="/partner_ques" element={<PartnerQuestion />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/quest_detail/abc123"
            element={<QuestionDetail user={user} />}
          />
          <Route path="join" element={<Join />} />
          <Route path="/main_ques" element={<MainQues />} />
          <Route path="/questionBoard" element={<QuestionBoard />} />
          <Route path="/createQuestion" element={<CreateQuestion />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
