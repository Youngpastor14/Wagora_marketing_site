import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/40 transition-colors duration-300">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 h-20">
        {/* Logo */}
        <Link to="/" className="font-clash text-2xl font-bold tracking-tighter text-on-surface hover:text-primary transition-colors">
          WAGORA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-satoshi text-sm font-semibold transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-primary border-b-2 border-primary pb-0.5'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggle}
            className="p-2 rounded-lg hover:bg-surface-container transition-colors"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-on-surface-variant text-xl">
              {dark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <a
            href={`${import.meta.env.VITE_APP_URL || 'http://localhost:5174'}/auth/signin`}
            className="hidden sm:block font-satoshi text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            Sign In
          </a>

          <a
            href={`${import.meta.env.VITE_APP_URL || 'http://localhost:5174'}/auth/signup`}
            className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-satoshi text-sm font-bold hover:opacity-90 active:scale-95 transition-all"
          >
            Start Free
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-container transition-colors"
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-on-surface">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-drawer md:hidden border-t border-outline-variant/40 bg-surface-container-lowest/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`font-satoshi text-sm font-semibold py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/5'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Divider */}
            <div className="border-t border-outline-variant/30 my-2" />

            {/* Sign In */}
            <a
              href={`${import.meta.env.VITE_APP_URL || 'http://localhost:5174'}/auth/signin`}
              className="font-satoshi text-sm font-semibold py-3 px-4 rounded-lg text-on-surface-variant border border-outline-variant/60 text-center hover:text-primary hover:border-primary/40 hover:bg-surface-container transition-colors"
            >
              Sign In
            </a>

            {/* Start Free — Primary CTA */}
            <a
              href={`${import.meta.env.VITE_APP_URL || 'http://localhost:5174'}/auth/signup`}
              className="bg-primary text-on-primary font-satoshi text-sm font-bold py-3 px-4 rounded-lg text-center hover:opacity-90 active:scale-[0.97] transition-all mt-1"
            >
              Start Free
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
