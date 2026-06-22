import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Auth from './pages/Auth'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import TermsOfService from './pages/legal/TermsOfService'
import CookiePolicy from './pages/legal/CookiePolicy'
import AcceptableUsePolicy from './pages/legal/AcceptableUsePolicy'
import RefundPolicy from './pages/legal/RefundPolicy'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PageWrapper({ children }) {
  const { pathname } = useLocation()
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  )
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
              <StickyCTA />
              <main>
                <PageWrapper>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/legal/privacy" element={<PrivacyPolicy />} />
                    <Route path="/legal/terms" element={<TermsOfService />} />
                    <Route path="/legal/cookies" element={<CookiePolicy />} />
                    <Route path="/legal/acceptable-use" element={<AcceptableUsePolicy />} />
                    <Route path="/legal/refunds" element={<RefundPolicy />} />
                  </Routes>
                </PageWrapper>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </ThemeProvider>
  )
}

