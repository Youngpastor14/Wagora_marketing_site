export default function LegalLayout({ title, subtitle, effectiveDate, lastUpdated, children }) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-12 px-6 border-b border-outline-variant/30">
        <div className="max-w-3xl mx-auto">
          <span className="font-geist-mono text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
            Legal
          </span>
          <h1 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-on-surface leading-[1.08] mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="font-satoshi text-base text-on-surface-variant leading-relaxed">{subtitle}</p>
          )}
          <div className="flex flex-wrap gap-6 mt-6">
            {effectiveDate && (
              <div>
                <span className="font-geist-mono text-[10px] uppercase tracking-widest text-outline block mb-0.5">Effective Date</span>
                <span className="font-satoshi text-sm text-on-surface">{effectiveDate}</span>
              </div>
            )}
            {lastUpdated && (
              <div>
                <span className="font-geist-mono text-[10px] uppercase tracking-widest text-outline block mb-0.5">Last Updated</span>
                <span className="font-satoshi text-sm text-on-surface">{lastUpdated}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-16 pb-32">
        <div className="legal-prose">
          {children}
        </div>
      </section>
    </div>
  )
}
