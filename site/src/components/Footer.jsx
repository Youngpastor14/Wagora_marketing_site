import { Link } from 'react-router-dom'

const footerLinks = {
  Product: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Pricing', path: '/pricing' },
  ],
  Company: [
    { label: 'About', path: '/about' },
    { label: 'Contact', href: 'mailto:hello@getwagora.com' },
  ],
  Legal: [
    { label: 'Privacy Policy', path: '/legal/privacy' },
    { label: 'Terms of Service', path: '/legal/terms' },
    { label: 'Cookie Policy', path: '/legal/cookies' },
    { label: 'Acceptable Use', path: '/legal/acceptable-use' },
    { label: 'Refund Policy', path: '/legal/refunds' },
  ],
}

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/wagora',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/getwagora',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/getwagora',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zM17.083 20.098h1.833L7.084 4.126H5.117L17.083 20.098z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="sm:col-span-2">
            <Link to="/" className="font-clash text-lg font-bold text-on-surface tracking-tighter hover:text-primary transition-colors">
              WAGORA
            </Link>
            <p className="mt-3 font-satoshi text-sm text-on-surface-variant leading-relaxed max-w-xs">
              Autonomous AI sales for the next generation of founders and agencies. Find clients. Close deals. Sleep well.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg border border-outline-variant/60 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3">
              <h4 className="font-geist-mono text-[10px] font-bold text-primary uppercase tracking-widest">
                {category}
              </h4>
              {links.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-satoshi text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="font-satoshi text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-satoshi text-xs text-on-surface-variant text-center sm:text-left">
          © {new Date().getFullYear()} Wagora. All rights reserved. Built by{' '}
          <a href="https://fortexforge.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Fortex Forge
          </a>.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-geist-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  )
}
