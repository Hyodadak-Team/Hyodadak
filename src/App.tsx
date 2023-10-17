import { Route, Routes } from 'react-router-dom'
import Index from './pages/index'
import Notice from './pages/notice'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<Index />} />
          <Route path="/notice" element={<Notice />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
