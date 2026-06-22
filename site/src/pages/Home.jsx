import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  { num: '01', title: 'Find', body: 'Wagora scans the web, LinkedIn, Instagram, and business directories to identify prospects that match your exact ideal client profile. Not random leads. The right ones.' },
  { num: '02', title: 'Reach', body: 'Every prospect gets a message written specifically for them: their company, their role, their visible pain points. No templates. No copy-paste. Just outreach that actually gets replies.' },
  { num: '03', title: 'Close', body: 'Wagora reads every reply, handles objections, answers questions, books discovery calls, and adapts its closing path to how each prospect thinks.' },
  { num: '04', title: 'Notify', body: 'The moment a deal is closed or a call is booked, you get a full briefing: who they are, what they agreed to, and exactly what to do next.' },
]

const features = [
  { title: 'Intelligent Prospect Scraping', body: 'Wagora pulls qualified leads from LinkedIn, Instagram, Google, Clutch, and dozens of business directories, filtered by industry, role, company size, location, and pain signal.' },
  { title: 'Personalized Outreach at Scale', body: 'Set your brand voice once. Wagora writes every message from scratch, using real context about each prospect. Your outreach sounds like you, on your best day, every day.' },
  { title: 'Adaptive Conversation Handling', body: 'Some clients close over email. Some need a call. Wagora detects where each prospect is and responds accordingly: fast close, call booking, or nurture sequence.' },
  { title: 'Platform-Native Behavior', body: 'Wagora operates within each platform\'s rules: human-like timing, rate limiting, behavioral patterns that avoid flags. Your accounts stay safe.' },
]

const faqs = [
  { q: 'Will prospects know it\'s an AI sending the messages?', a: 'Wagora writes messages in your brand voice, not as a robot. The messages read like a thoughtful human wrote them, because the context and personalization behind them is real.' },
  { q: 'What if a prospect wants to speak to a real person?', a: 'Wagora is built to hand off cleanly. When a prospect escalates, the system notifies you immediately and pauses the automated flow. You step in. Nothing gets mishandled.' },
  { q: 'Won\'t my LinkedIn or Instagram account get banned?', a: 'Wagora uses platform-native behavior: randomized timing, rate limiting, and behavioral patterns that mirror human usage. It minimizes risk by design.' },
  { q: 'How does the AI know my brand voice?', a: 'You upload your brand documents (offer guides, tone of voice documents, pricing decks) and configure preferences during setup. Wagora builds understanding from your own materials.' },
  { q: 'What happens after a deal is closed?', a: 'You get a full deal summary: prospect details, service agreed, price, conversation highlights, and next steps. Delivery is entirely yours.' },
]

const plans = [
  { name: 'Free', price: '$0', period: '/mo', desc: 'For founders testing the waters.', features: ['20 emails per day', 'Email outreach only', '100 AI conversations', 'Basic analytics', '1 active campaign'], cta: 'Start Free' },
  { name: 'Starter', price: '$23', period: '/mo', desc: 'For growing agencies ready to build pipeline.', badge: 'Most Popular', features: ['50 emails per day', 'Email + LinkedIn outreach', 'Unlimited AI conversations', 'Full analytics dashboard', '3 active campaigns', 'Priority support'], cta: 'Get Started' },
  { name: 'Growth', price: '$49', period: '/mo', desc: 'For agencies running serious outbound operations.', features: ['1,000 prospects per month', 'All platforms', 'Unlimited AI conversations', 'Advanced analytics', '10 active campaigns', 'Voice calling (when live)'], cta: 'Get Started' },
  { name: 'Agency', price: 'Coming Soon', period: '', desc: 'For studios managing multiple brands.', badge: 'Full Power', features: ['Unlimited prospects', 'All platforms', 'Unlimited conversations', 'Multi-workspace support', 'White-label ready', 'Dedicated support'], cta: 'Join Waitlist' },
]

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-outline-variant/60 bg-surface-container-lowest rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="flex justify-between items-center w-full p-6 text-left cursor-pointer">
        <span className="font-satoshi font-bold text-on-surface pr-4">{q}</span>
        <span className="material-symbols-outlined text-primary shrink-0">{open ? 'remove' : 'add'}</span>
      </button>
      {open && <div className="px-6 pb-6 -mt-2"><p className="font-satoshi text-sm text-on-surface-variant leading-relaxed">{a}</p></div>}
    </div>
  )
}

export default function Home() {
  useScrollReveal()
  const [selectedPlan, setSelectedPlan] = useState(1)

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-16 md:pt-24 pb-16 md:pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-primary)_0%,transparent_70%)] opacity-[0.04]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-geist-mono text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">YOUR AUTONOMOUS AI SALES AGENT</span>
          <h1 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-on-surface mb-6">
            Your next client is already online. Wagora will go get them.
          </h1>
          <p className="font-satoshi text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
            Wagora finds your ideal clients, sends personalized outreach, handles every reply, and closes the deal, while you focus on delivering great work.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href={`${import.meta.env.VITE_APP_URL || 'http://localhost:5174'}/auth/signup`} className="bg-primary text-on-primary px-8 py-4 rounded-lg font-satoshi font-bold text-base hover:opacity-90 active:scale-[0.97] transition-all">
              Start For Free
            </a>
            <Link to="/how-it-works" className="border border-outline text-on-surface px-8 py-4 rounded-lg font-satoshi font-bold text-base hover:bg-surface-container transition-all flex items-center justify-center gap-2">
              See how it works <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
          <p className="font-geist-mono text-[11px] uppercase tracking-widest text-outline">Trusted by agencies and founders across 10+ industries</p>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-[680px] mx-auto px-6 text-center reveal">
          <h2 className="font-clash text-3xl md:text-4xl font-bold text-on-surface mb-8">Great work doesn't sell itself.</h2>
          <p className="font-satoshi text-base md:text-lg text-on-surface-variant leading-relaxed mb-8">
            You built a serious business. You know what you do is valuable. But finding the right clients, writing the perfect pitch, following up without feeling desperate, handling objections, booking calls. That's a full-time sales job. And you're already doing a full-time everything else.
          </p>
          <p className="font-satoshi text-lg md:text-xl font-bold text-on-surface">
            Wagora is the sales rep you never had, and never have to hire.
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16 reveal text-center">
          <span className="font-geist-mono text-xs font-bold tracking-widest text-primary uppercase block mb-3">HOW IT WORKS</span>
          <h2 className="font-clash text-4xl md:text-5xl font-bold text-on-surface mb-3">From zero to closed. Fully automated.</h2>
          <p className="font-satoshi text-on-surface-variant">Wagora runs your entire outbound sales pipeline in four steps.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="reveal p-8 md:p-10 bg-surface-container-lowest border border-outline-variant/60 rounded-lg hover:border-primary/60 transition-colors group" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="font-geist-mono text-3xl font-bold text-primary/80 bg-primary/5 w-14 h-14 flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary/10 transition-colors">{s.num}</div>
              <h3 className="font-clash text-2xl font-bold text-on-surface mb-3">{s.title}</h3>
              <p className="font-satoshi text-sm text-on-surface-variant leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DIFFERENTIATOR ===== */}
      <section className="py-24 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal">
            <h2 className="font-clash text-3xl md:text-5xl font-bold text-on-surface mb-6">Most tools find leads.<br/>Wagora closes them.</h2>
            <p className="font-satoshi text-on-surface-variant leading-relaxed">
              Wagora doesn't hand you a spreadsheet and wish you luck. It handles the conversation, reads the room, and does what a great salesperson does: it listens, adapts, and closes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center reveal">
            <div>
              <div className="font-geist-mono text-5xl md:text-6xl font-bold text-on-surface mb-2">4 hrs</div>
              <p className="font-geist-mono text-xs uppercase tracking-widest text-outline">Average time saved per client</p>
            </div>
            <div className="bg-secondary-container p-8 rounded-xl border border-secondary">
              <div className="font-geist-mono text-5xl md:text-6xl font-bold text-on-secondary-container mb-2">0</div>
              <p className="font-geist-mono text-xs uppercase tracking-widest text-on-secondary-container font-bold">Sales reps needed</p>
            </div>
            <div>
              <div className="font-geist-mono text-5xl md:text-6xl font-bold text-on-surface mb-2">3x</div>
              <p className="font-geist-mono text-xs uppercase tracking-widest text-outline">More outreach than manual</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES DEEP DIVE ===== */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 reveal">
            <span className="font-geist-mono text-xs font-bold tracking-widest text-primary uppercase block mb-3">BUILT FOR SERIOUS OPERATORS</span>
            <h2 className="font-clash text-4xl md:text-5xl font-bold text-on-surface">Everything your sales pipeline needs.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="reveal p-8 md:p-10 bg-surface-container-high border border-outline-variant/60 rounded-lg hover:border-primary/40 transition-colors" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="material-symbols-outlined text-primary mb-4 block text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {['search_insights', 'edit_note', 'psychology', 'shield'][i]}
                </span>
                <h3 className="font-clash text-xl md:text-2xl font-bold text-on-surface mb-3">{f.title}</h3>
                <p className="font-satoshi text-sm text-on-surface-variant leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO IT'S FOR ===== */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 reveal">
            <span className="font-geist-mono text-xs font-bold tracking-widest text-primary uppercase block mb-3">BUILT FOR YOU IF</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="reveal p-10 md:p-12 border-t-4 border-primary bg-surface-container-lowest border-x border-b border-outline-variant/60 rounded-lg">
              <h4 className="font-clash text-2xl md:text-3xl font-bold text-on-surface mb-4">Agency Owners</h4>
              <p className="font-satoshi text-on-surface-variant mb-6 leading-relaxed">You deliver great work. You just need more of it. Wagora runs your new business pipeline in the background. No more feast-and-famine cycles.</p>
              <ul className="space-y-3">
                {['Consistent outreach & revenue', 'No more chasing referrals'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-on-surface">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal p-10 md:p-12 border-t-4 border-primary bg-surface-container-lowest border-x border-b border-outline-variant/60 rounded-lg" style={{ transitionDelay: '80ms' }}>
              <h4 className="font-clash text-2xl md:text-3xl font-bold text-on-surface mb-4">Solo Founders</h4>
              <p className="font-satoshi text-on-surface-variant mb-6 leading-relaxed">You're the product. Stop being the salesperson too. Wagora gives you a sales operation that runs while you sleep.</p>
              <ul className="space-y-3">
                {['Wake up to booked calls', 'Zero-commission lead gen'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-on-surface">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-24 md:py-32 px-6" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="font-geist-mono text-xs font-bold tracking-widest text-primary uppercase block mb-3">PRICING</span>
            <h2 className="font-clash text-4xl md:text-5xl font-bold text-on-surface mb-4">Start free. Scale when you're ready.</h2>
            <p className="font-satoshi text-on-surface-variant">No contracts. No hidden fees. Cancel any time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((p, i) => {
              const isSelected = selectedPlan === i
              return (
                <div
                  key={i}
                  onClick={() => setSelectedPlan(i)}
                  className={`p-8 flex flex-col rounded-lg relative cursor-pointer transition-all duration-200 ${isSelected ? 'border-2 border-primary bg-surface-container-lowest scale-[1.02] shadow-lg shadow-primary/5' : 'border border-outline-variant/60 bg-surface-container-lowest hover:border-primary/40'}`}
                >
                  {p.badge && <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full whitespace-nowrap ${isSelected ? 'bg-primary text-on-primary' : 'bg-secondary-container text-on-secondary-container'}`}>{p.badge}</div>}
                  <h4 className="font-clash text-xl font-bold text-on-surface mb-1">{p.name}</h4>
                  <div className="font-geist-mono text-3xl font-bold text-on-surface mb-1">{p.price}<span className="text-sm font-normal text-outline">{p.period}</span></div>
                  <p className="font-satoshi text-sm text-on-surface-variant mb-6">{p.desc}</p>
                  <ul className="text-sm space-y-3 mb-8 flex-grow">
                    {p.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href={`${import.meta.env.VITE_APP_URL || 'http://localhost:5174'}/auth/signup?plan=${['free', 'pro', 'growth', 'agency'][i]}`} className={`w-full py-3 rounded-lg font-satoshi font-bold text-sm text-center block transition-all active:scale-[0.97] ${isSelected ? 'bg-primary text-on-primary hover:opacity-90' : 'border border-outline text-on-surface hover:bg-surface-container'}`}>
                    {p.cta}
                  </a>
                </div>
              )
            })}
          </div>
          <p className="text-center mt-8 font-satoshi text-sm text-on-surface-variant">Not sure which plan is right? Start free, no credit card required.</p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-clash text-3xl md:text-4xl font-bold text-on-surface text-center mb-12 reveal">Questions worth asking.</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => <FAQ key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto bg-primary py-16 md:py-24 px-8 md:px-12 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--color-on-primary)_0%,transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="font-clash text-3xl sm:text-4xl md:text-6xl font-bold text-on-primary mb-6 leading-tight">Your pipeline shouldn't depend on how much energy you have today.</h2>
            <p className="font-satoshi text-on-primary/80 max-w-xl mx-auto mb-10 text-base md:text-lg">
              Wagora runs it whether you're in a client meeting, on a flight, or asleep. Consistent outreach. Real conversations. Closed deals.
            </p>
            <a href={`${import.meta.env.VITE_APP_URL || 'http://localhost:5174'}/auth/signup`} className="inline-block bg-on-primary text-primary px-10 py-4 rounded-lg font-satoshi font-bold text-sm md:text-base tracking-wide hover:opacity-90 active:scale-[0.97] transition-all">
              Start For Free. No Credit Card Required.
            </a>
            <p className="mt-6 font-satoshi text-sm text-on-primary/60">
              Already have an account? <a href={`${import.meta.env.VITE_APP_URL || 'http://localhost:5174'}/auth/signin`} className="text-on-primary/90 underline">Sign in →</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
