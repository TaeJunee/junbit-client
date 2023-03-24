import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const MainPage = lazy(() => import('./pages/main'))
const Header = lazy(() => import('./components/header/Header'))
const ChartPage = lazy(() => import('./pages/chart/[tokenName]'))

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>로딩 중입니다</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/chart/:token_name" element={<ChartPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
