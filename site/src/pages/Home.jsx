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

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-16 md:pt-24 pb-0 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-primary)_0%,transparent_60%)] opacity-[0.05]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-geist-mono text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">YOUR AUTONOMOUS AI SALES AGENT</span>
          <h1 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-on-surface mb-6">
            Your next client is already online. Wagora will go get them.
          </h1>
          <p className="font-satoshi text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
            Wagora finds your ideal clients, sends personalized outreach, handles every reply, and closes the deal — while you focus on delivering great work.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a href={`${import.meta.env.VITE_APP_URL || 'http://localhost:5174'}/auth/signup`} className="bg-primary text-on-primary px-8 py-4 rounded-lg font-satoshi font-bold text-base hover:opacity-90 active:scale-[0.97] transition-all inline-flex items-center justify-center gap-2">
              Start Free <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
            <Link to="/how-it-works" className="border border-outline text-on-surface px-8 py-4 rounded-lg font-satoshi font-bold text-base hover:bg-surface-container transition-all flex items-center justify-center gap-2">
              See how it works
            </Link>
          </div>
          <p className="font-geist-mono text-[11px] uppercase tracking-widest text-outline mb-10">Trusted by agencies and founders across 10+ industries</p>
        </div>

        {/* ===== HERO DASHBOARD MOCKUP ===== */}
        <div className="relative max-w-5xl mx-auto z-10 px-0 md:px-6">
          {/* Floating notification */}
          <div className="hero-notify absolute -top-4 right-4 md:right-16 z-20 flex items-center gap-2.5 bg-surface-container-lowest border border-primary/30 rounded-xl px-3.5 py-2.5 shadow-lg shadow-primary/10">
            <div className="relative shrink-0">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <span className="hero-ring absolute inset-0 rounded-full border border-primary/40" />
            </div>
            <div>
              <p className="font-satoshi text-xs font-bold text-on-surface leading-none mb-0.5">Deal Closed · $3,200/mo</p>
              <p className="font-geist-mono text-[10px] text-primary">Wagora just closed Marcus Reid</p>
            </div>
          </div>

          {/* Dashboard shell */}
          <div className="rounded-t-2xl overflow-hidden border border-outline-variant/50 border-b-0 bg-surface-container-lowest shadow-2xl shadow-primary/5">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-container border-b border-outline-variant/40">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high border border-outline-variant/40 w-48">
                  <span className="material-symbols-outlined text-outline text-xs">lock</span>
                  <span className="font-geist-mono text-[10px] text-on-surface-variant">app.getwagora.com</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                  <span className="font-clash text-on-primary text-[10px] font-bold">W</span>
                </div>
                <span className="font-clash text-xs font-bold text-on-surface hidden sm:block">Wagora</span>
              </div>
            </div>

            {/* Dashboard body */}
            <div className="flex min-h-[340px] md:min-h-[400px]">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col w-44 shrink-0 border-r border-outline-variant/40 bg-surface-container-low p-3 gap-1">
                {[
                  { icon: 'dashboard', label: 'Dashboard', active: true },
                  { icon: 'campaign', label: 'Campaigns', active: false },
                  { icon: 'group', label: 'Prospects', active: false },
                  { icon: 'chat', label: 'Conversations', active: false },
                  { icon: 'analytics', label: 'Analytics', active: false },
                ].map(item => (
                  <div key={item.label} className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-default ${item.active ? 'bg-primary/10 text-primary' : 'text-on-surface-variant'}`}>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: item.active ? "'FILL' 1" : "'FILL' 0" }}>{item.icon}</span>
                    <span className="font-satoshi text-xs font-semibold">{item.label}</span>
                  </div>
                ))}
                <div className="mt-auto pt-3 border-t border-outline-variant/30">
                  <div className="flex items-center gap-2 px-2 py-1.5">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-clash text-[10px] font-bold text-primary">A</span>
                    </div>
                    <div>
                      <div className="font-satoshi text-[10px] font-bold text-on-surface">Agency Co.</div>
                      <div className="font-geist-mono text-[8px] text-primary">● Active</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 md:p-6 overflow-hidden">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: 'Prospects Found', value: '247', trend: '+12 today', icon: 'person_search' },
                    { label: 'Messages Sent', value: '89', trend: 'Last 24h', icon: 'send' },
                    { label: 'Deals Closed', value: '3', trend: 'This week', icon: 'handshake' },
                  ].map(stat => (
                    <div key={stat.label} className="p-3 rounded-lg bg-surface-container border border-outline-variant/40">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-geist-mono text-[9px] uppercase tracking-wider text-outline">{stat.label}</span>
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                      </div>
                      <div className="font-clash text-xl md:text-2xl font-bold text-on-surface">{stat.value}</div>
                      <div className="font-geist-mono text-[9px] text-primary mt-0.5">{stat.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Campaign progress */}
                <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/40 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-satoshi text-xs font-bold text-on-surface">SaaS Founders · Q3 Outreach</span>
                      <span className="ml-2 px-1.5 py-0.5 rounded-full bg-primary/10 font-geist-mono text-[9px] text-primary font-bold">LIVE</span>
                    </div>
                    <span className="font-geist-mono text-[10px] text-on-surface-variant">68%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                    <div className="hero-progress h-full rounded-full bg-primary" style={{ width: '0%' }} />
                  </div>
                </div>

                {/* Prospect list */}
                <div className="space-y-2">
                  {[
                    { name: 'Sarah Chen', role: 'CEO · NovaTech', status: 'Replied', score: 95 },
                    { name: 'Marcus Reid', role: 'Founder · Gridline', status: 'Closed', score: 92 },
                    { name: 'Priya Sharma', role: 'CMO · BrightPath', status: 'Outreach sent', score: 87 },
                  ].map((p, i) => (
                    <div key={p.name} className="flex items-center gap-3 p-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="font-clash text-[11px] font-bold text-primary">{p.name[0]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-satoshi text-xs font-bold text-on-surface truncate">{p.name}</div>
                        <div className="font-satoshi text-[10px] text-on-surface-variant truncate">{p.role}</div>
                      </div>
                      <div className={`shrink-0 px-2 py-0.5 rounded-full font-geist-mono text-[9px] font-bold ${
                        p.status === 'Closed'        ? 'bg-primary/15 text-primary' :
                        p.status === 'Replied'       ? 'bg-secondary-container/60 text-on-secondary-container' :
                                                       'bg-surface-container text-outline'
                      }`}>{p.status}</div>
                      <div className="shrink-0 font-geist-mono text-[10px] text-on-surface-variant w-8 text-right">{p.score}%</div>
                    </div>
                  ))}
                  {/* Typing row */}
                  <div className="flex items-center gap-3 p-2.5 rounded-lg border border-primary/20 bg-primary/3">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="font-clash text-[11px] font-bold text-primary">J</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-satoshi text-xs font-bold text-on-surface">James Okafor</div>
                      <div className="flex items-center gap-1 font-satoshi text-[10px] text-primary">
                        <span>Wagora is composing a reply</span>
                        <span className="hero-cursor font-bold">|</span>
                      </div>
                    </div>
                    <div className="shrink-0 w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fade-out gradient at bottom to merge with next section */}
          <div className="h-24 bg-gradient-to-b from-transparent to-surface-container-low" />
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
            <div className="bg-primary/8 p-8 rounded-xl border border-primary/20">
              <div className="font-geist-mono text-5xl md:text-6xl font-bold text-primary mb-2">0</div>
              <p className="font-geist-mono text-xs uppercase tracking-widest text-primary/70 font-bold">Sales reps needed</p>
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

      {/* ===== PRICING TEASER ===== */}
      <section className="py-20 md:py-28 px-6 bg-surface-container-low" id="pricing">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="font-geist-mono text-xs font-bold tracking-widest text-primary uppercase block mb-4">PRICING</span>
          <h2 className="font-clash text-3xl md:text-4xl font-bold text-on-surface mb-4">Start free. Scale when you're ready.</h2>
          <p className="font-satoshi text-on-surface-variant mb-8">No contracts. No hidden fees. Cancel any time. Free plan includes 20 emails per day — no credit card required.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`${import.meta.env.VITE_APP_URL || 'http://localhost:5174'}/auth/signup`} className="bg-primary text-on-primary px-8 py-4 rounded-lg font-satoshi font-bold text-base hover:opacity-90 active:scale-[0.97] transition-all inline-flex items-center justify-center gap-2">
              Start Free <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
            <Link to="/pricing" className="border border-outline text-on-surface px-8 py-4 rounded-lg font-satoshi font-bold text-base hover:bg-surface-container transition-all flex items-center justify-center gap-2">
              View all plans
            </Link>
          </div>
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
            <a href={`${import.meta.env.VITE_APP_URL || 'http://localhost:5174'}/auth/signup`} className="inline-flex items-center gap-2 bg-on-primary text-primary px-10 py-4 rounded-lg font-satoshi font-bold text-base hover:opacity-90 active:scale-[0.97] transition-all">
              Start Free <span className="material-symbols-outlined text-base">arrow_forward</span>
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
