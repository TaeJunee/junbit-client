import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'
import Header from './components/header/Header'
import ChartPage from './pages/chart/[tokenName]'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/chart/:token_name" element={<ChartPage />} />
      </Routes>
    </>
  )
}

export default App
