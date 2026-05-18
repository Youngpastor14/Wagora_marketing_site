import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Auth from './pages/Auth'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="grain-overlay" />
      <ScrollToTop />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </ThemeProvider>
  )
}
