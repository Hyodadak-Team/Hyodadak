import { Route, Routes } from 'react-router-dom'
import Index from './pages/index'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<Index />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
