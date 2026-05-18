import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const plans = [
  { name: 'Free', price: '$0', period: '/mo', desc: 'For founders testing the waters.', features: ['50 prospects / month', 'Email outreach only', '100 AI conversations', 'Basic analytics', '1 active campaign'], cta: 'Start Free' },
  { name: 'Starter', price: '$23', period: '/mo', desc: 'For growing agencies ready to build pipeline.', badge: 'Most Popular', features: ['300 prospects / month', 'Email + LinkedIn outreach', 'Unlimited AI conversations', 'Full analytics dashboard', '3 active campaigns', 'Priority support'], cta: 'Get Started' },
  { name: 'Growth', price: '$49', period: '/mo', desc: 'For serious outbound operations.', features: ['1,000 prospects / month', 'All platforms (Email, LinkedIn, IG)', 'Unlimited AI conversations', 'Advanced analytics + optimization', '10 active campaigns', 'Voice calling (when live)'], cta: 'Get Started' },
  { name: 'Agency', price: '$86', period: '/mo', desc: 'For studios managing multiple brands.', badge: 'Full Power', features: ['Unlimited prospects', 'All platforms', 'Unlimited conversations', 'Multi-workspace support', 'White-label ready', 'Dedicated support'], cta: 'Get Started' },
]

const comparison = [
  { feature: 'Monthly Prospects', values: ['50', '300', '1,000', 'Unlimited'] },
  { feature: 'Outreach Platforms', values: ['Email', 'Email + LinkedIn', 'All Platforms', 'All Platforms'] },
  { feature: 'AI Conversations', values: ['100', 'Unlimited', 'Unlimited', 'Unlimited'] },
  { feature: 'Active Campaigns', values: ['1', '3', '10', 'Unlimited'] },
  { feature: 'Analytics', values: ['Basic', 'Full Dashboard', 'Advanced', 'Advanced + Custom'] },
  { feature: 'Priority Support', values: [false, true, true, true] },
  { feature: 'Voice Calling', values: [false, false, true, true] },
  { feature: 'Multi-workspace', values: [false, false, false, true] },
  { feature: 'White-label', values: [false, false, false, true] },
]

export default function Pricing() {
  useScrollReveal()
  const [selectedPlan, setSelectedPlan] = useState(1)

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 text-center px-6">
        <h1 className="font-clash text-5xl md:text-7xl font-bold text-on-surface tracking-tight mb-6">Simple pricing. Serious results.</h1>
        <p className="font-satoshi text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Every plan includes the core Wagora engine. Upgrade for more volume, more platforms, and more firepower.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {plans.map((p, i) => {
          const isSelected = selectedPlan === i
          return (
            <div
              key={i}
              onClick={() => setSelectedPlan(i)}
              className={`p-8 flex flex-col rounded-lg relative cursor-pointer transition-all duration-200 ${isSelected ? 'border-2 border-primary bg-surface-container-lowest scale-[1.02] shadow-lg shadow-primary/5' : 'border border-outline-variant/60 bg-surface-container-lowest hover:border-primary/40'}`}
            >
              {p.badge && <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full whitespace-nowrap ${isSelected ? 'bg-primary text-on-primary' : 'bg-secondary-container text-on-secondary-container'}`}>{p.badge}</div>}
              <div className="mb-6">
                <span className="font-geist-mono text-xs font-bold uppercase tracking-widest text-outline">{p.name}</span>
                <h3 className="font-clash text-4xl font-bold text-on-surface mt-1">{p.price}<span className="text-base font-normal text-outline">{p.period}</span></h3>
              </div>
              <p className="font-satoshi text-sm text-on-surface-variant mb-6">{p.desc}</p>
              <ul className="text-sm space-y-3 mb-8 flex-grow">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> {f}
                  </li>
                ))}
              </ul>
              <Link to="/auth" className={`w-full py-3 rounded-lg font-satoshi font-bold text-sm text-center block transition-all active:scale-[0.97] ${isSelected ? 'bg-primary text-on-primary hover:opacity-90' : 'border border-outline text-on-surface hover:bg-surface-container'}`}>
                {p.cta}
              </Link>
            </div>
          )
        })}
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <h2 className="font-clash text-3xl font-bold text-on-surface mb-8 text-center reveal">See exactly what's included</h2>
        <div className="overflow-x-auto reveal border border-outline-variant/60 rounded-lg">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-surface-container-highest">
                <th className="p-5 font-satoshi font-bold text-sm text-outline uppercase tracking-wider">Feature</th>
                {['Free', 'Starter', 'Growth', 'Agency'].map(n => (
                  <th key={n} className="p-5 font-satoshi font-bold text-sm text-on-surface text-center">{n}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className={`border-b border-outline-variant/30 ${i % 2 === 0 ? 'bg-surface-container-low' : 'bg-surface-container-lowest'}`}>
                  <td className="p-5 font-satoshi text-sm font-medium text-on-surface">{row.feature}</td>
                  {row.values.map((v, j) => (
                    <td key={j} className="p-5 text-sm text-on-surface-variant text-center">
                      {typeof v === 'boolean' ? (
                        v ? <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                          : <span className="text-outline-variant">—</span>
                      ) : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="reveal bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 max-w-xl">
            <h2 className="font-clash text-3xl md:text-4xl font-bold text-on-surface mb-4">Not ready to commit?</h2>
            <p className="font-satoshi text-on-surface-variant leading-relaxed">The free plan is genuinely useful. 50 prospects, real AI conversations, real outreach. No credit card. No time limit.</p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link to="/auth" className="bg-primary text-on-primary px-10 py-4 rounded-lg font-satoshi font-bold text-base hover:opacity-90 active:scale-[0.97] transition-all">
              Start Free →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
