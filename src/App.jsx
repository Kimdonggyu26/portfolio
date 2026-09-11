import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import InvestomeDetail from './pages/InvestomeDetail'
import ProjectPlaceholder from './pages/ProjectPlaceholder'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return <div className="site-shell"><ScrollToTop /><Header /><main><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects/investome" element={<InvestomeDetail />} />
    <Route path="/projects/cruella" element={<ProjectPlaceholder slug="cruella" />} />
    <Route path="/projects/mvp" element={<ProjectPlaceholder slug="mvp" />} />
  </Routes></main><Footer /></div>
}


