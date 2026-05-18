import { Link } from 'react-router-dom'

const footerLinks = {
  Product: [
    { label: 'Solutions', path: '/how-it-works' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Documentation', path: '#' },
  ],
  Company: [
    { label: 'About', path: '/about' },
    { label: 'Careers', path: '#' },
    { label: 'Support', path: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms of Service', path: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-clash text-lg font-bold text-on-surface tracking-tighter">
              WAGORA
            </Link>
            <p className="mt-4 font-satoshi text-sm text-on-surface-variant leading-relaxed max-w-xs">
              Autonomous sales for the next generation of founders and agencies. Precision. Control. Growth.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h4 className="font-satoshi text-xs font-bold text-primary uppercase tracking-widest">
                {category}
              </h4>
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="font-satoshi text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-satoshi text-sm text-on-surface-variant">
          © {new Date().getFullYear()} Wagora. Built by Fortex Forge.
        </p>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-container" />
            <span className="font-geist-mono text-xs text-on-surface-variant uppercase tracking-wider">System Active</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
