import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

/* ─── Branded CSS illustrations for each step ─── */
function MockConfigure() {
  return (
    <div className="p-6 bg-surface-container-lowest">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-on-primary font-clash text-xs font-bold">W</div>
        <span className="font-clash text-sm font-bold text-on-surface tracking-tight">Wagora</span>
        <span className="ml-auto font-geist-mono text-[10px] text-primary">Setup: 80%</span>
      </div>
      <div className="w-full h-1.5 rounded-full bg-surface-container-high mb-6"><div className="w-4/5 h-full rounded-full bg-primary" /></div>
      <div className="space-y-4">
        <div>
          <span className="font-satoshi text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block mb-1.5">Brand Voice</span>
          <div className="h-16 rounded-md border border-outline-variant/60 bg-surface-container p-2">
            <div className="h-2 w-3/4 rounded bg-outline-variant/30 mb-1.5" />
            <div className="h-2 w-1/2 rounded bg-outline-variant/30" />
          </div>
        </div>
        <div>
          <span className="font-satoshi text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block mb-1.5">Target Industry</span>
          <div className="h-8 rounded-md border border-outline-variant/60 bg-surface-container flex items-center px-3 justify-between">
            <span className="font-satoshi text-xs text-on-surface">SaaS & Technology</span>
            <span className="material-symbols-outlined text-sm text-outline">expand_more</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          {['Email', 'LinkedIn', 'Instagram'].map((p, j) => (
            <label key={p} className="flex items-center gap-2">
              <div className={`w-8 h-4 rounded-full ${j < 2 ? 'bg-primary' : 'bg-outline-variant/40'} relative`}>
                <div className={`w-3 h-3 rounded-full bg-on-primary absolute top-0.5 ${j < 2 ? 'right-0.5' : 'left-0.5'}`} />
              </div>
              <span className="font-satoshi text-[10px] text-on-surface-variant">{p}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

function MockDiscover() {
  const leads = [
    { name: 'Sarah Chen', role: 'CEO at NovaTech', score: 95 },
    { name: 'Marcus Reid', role: 'Founder at Gridline', score: 92 },
    { name: 'Priya Sharma', role: 'CMO at BrightPath', score: 87 },
  ]
  return (
    <div className="p-6 bg-surface-container-lowest">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-on-primary font-clash text-xs font-bold">W</div>
        <span className="font-satoshi text-xs font-bold text-on-surface">Prospects</span>
        <span className="ml-auto font-geist-mono text-[10px] text-primary">247 found</span>
      </div>
      <div className="space-y-3">
        {leads.map(lead => (
          <div key={lead.name} className="flex items-center gap-3 p-3 rounded-lg border border-outline-variant/60 bg-surface-container">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-clash text-xs font-bold text-primary">{lead.name[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-satoshi text-xs font-bold text-on-surface truncate">{lead.name}</div>
              <div className="font-satoshi text-[10px] text-on-surface-variant truncate">{lead.role}</div>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-primary/10 font-geist-mono text-[10px] font-bold text-primary shrink-0">{lead.score}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockOutreach() {
  return (
    <div className="p-6 bg-surface-container-lowest">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-on-primary font-clash text-xs font-bold">W</div>
        <span className="font-satoshi text-xs font-bold text-on-surface">Compose</span>
        <div className="ml-auto flex gap-1">
          {['mail', 'link', 'photo_camera'].map(ic => (
            <div key={ic} className="w-6 h-6 rounded bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: '12px' }}>{ic}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2 p-4 rounded-lg border border-outline-variant/60 bg-surface-container">
        <p className="font-satoshi text-xs text-on-surface leading-relaxed">
          Hi <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-bold text-[10px]">{'Sarah'}</span>, I came across
          <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-bold text-[10px] mx-0.5">{'NovaTech'}</span>
          and noticed you're scaling your team. At Fortex Forge, we've helped similar companies
          <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-bold text-[10px] mx-0.5">{'reduce churn by 40%'}</span>
          through...
        </p>
        <div className="h-2 w-2/3 rounded bg-outline-variant/20" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-geist-mono text-[10px] text-on-surface-variant">Personalized for each prospect</span>
        <div className="px-3 py-1.5 rounded-md bg-primary text-on-primary font-satoshi text-[10px] font-bold">Send</div>
      </div>
    </div>
  )
}

function MockEngage() {
  const messages = [
    { from: 'prospect', text: "Thanks for reaching out! We're actually looking into this." },
    { from: 'wagora', text: "That's great to hear. Would a 15-min call this Thursday work to walk you through what we've done for similar companies?" },
    { from: 'prospect', text: "Thursday at 2pm works perfectly." },
  ]
  return (
    <div className="p-6 bg-surface-container-lowest">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-on-primary font-clash text-xs font-bold">W</div>
        <span className="font-satoshi text-xs font-bold text-on-surface">Conversations</span>
        <span className="ml-auto px-2 py-0.5 rounded-full bg-primary/10 font-geist-mono text-[10px] font-bold text-primary">3 active</span>
      </div>
      <div className="space-y-2.5">
        {messages.map((m, j) => (
          <div key={j} className={`flex ${m.from === 'wagora' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-3 py-2 rounded-lg text-[11px] leading-relaxed font-satoshi ${m.from === 'wagora' ? 'bg-primary/10 text-on-surface border border-primary/20' : 'bg-surface-container border border-outline-variant/60 text-on-surface-variant'}`}>
              {m.from === 'wagora' && <span className="text-[9px] font-bold text-primary block mb-0.5">Wagora AI</span>}
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="font-geist-mono text-[10px] text-primary">Meeting booked. Notifying you now</span>
      </div>
    </div>
  )
}

function MockClose() {
  return (
    <div className="p-6 bg-surface-container-lowest text-center">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-on-primary font-clash text-xs font-bold">W</div>
        <span className="font-satoshi text-xs font-bold text-on-surface">Deal Briefing</span>
      </div>
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
      </div>
      <div className="font-clash text-lg font-bold text-on-surface mb-1">Deal Closed</div>
      <div className="font-geist-mono text-2xl font-bold text-primary mb-4">$4,500<span className="text-sm text-on-surface-variant">/mo</span></div>
      <div className="space-y-2 text-left max-w-[200px] mx-auto mb-4">
        {[
          { label: 'Client', value: 'Sarah Chen, NovaTech' },
          { label: 'Service', value: 'Brand Strategy Retainer' },
          { label: 'Timeline', value: 'Contacted → Closed in 6 days' },
        ].map(item => (
          <div key={item.label}>
            <span className="font-geist-mono text-[9px] uppercase tracking-wider text-on-surface-variant">{item.label}</span>
            <div className="font-satoshi text-[11px] font-medium text-on-surface">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="px-4 py-2 rounded-md bg-primary text-on-primary font-satoshi text-xs font-bold inline-block">View Full Brief</div>
    </div>
  )
}

const stepMocks = [MockConfigure, MockDiscover, MockOutreach, MockEngage, MockClose]

const steps = [
  { num: '01', label: 'Configure', title: 'You configure. Wagora learns.', body: 'Upload your brand documents, define your ideal client, set your voice, choose your platforms. Or just type a prompt and let Wagora configure everything itself. Either way, it takes minutes, not days.', tag: '⏱ Takes ~5 minutes' },
  { num: '02', label: 'Discover', title: 'Wagora goes hunting.', body: 'The prospect engine scrapes qualified leads from across the web and scores each one against your ICP. Only the right people make it into your campaign.', tag: '🎯 Average 200+ qualified leads' },
  { num: '03', label: 'Outreach', title: 'Outreach goes out. Personalized. At scale.', body: 'Every message is written from scratch using real context about each prospect. Their company. Their role. Their pain. Your voice. Sent across email, LinkedIn, and Instagram.', tag: '📧 3 platforms, one voice' },
  { num: '04', label: 'Engage', title: 'The conversation happens. Automatically.', body: 'Replies come in. Wagora reads them, responds, handles objections, answers questions, and routes each prospect to the right closing path: fast close, discovery call, or nurture sequence.', tag: '🤖 Zero manual replies needed' },
  { num: '05', label: 'Close', title: 'You get the close. We handle everything before it.', body: "When a deal is done or a call is booked, you get a full briefing. Show up, deliver, get paid. That's the only part that needs you.", tag: '💰 You only show up to deliver' },
]

const pipelineSteps = ['Configure', 'Discover', 'Outreach', 'Engage', 'Close']

export default function HowItWorks() {
  useScrollReveal()

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-16 md:pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-geist-mono text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">AUTONOMOUS PRECISION</span>
          <h1 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-on-surface leading-[1.08] mb-6">
            Built to close.<br className="hidden sm:block" /> Not just to reach out.
          </h1>
          <p className="font-satoshi text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10">
            Most outreach tools stop at sending. Wagora starts there.
          </p>
          <a href="#steps" className="inline-flex flex-col items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group">
            <span className="font-satoshi text-sm font-medium">See the 5-step process</span>
            <span className="material-symbols-outlined text-xl animate-bounce">keyboard_arrow_down</span>
          </a>
        </div>
      </section>

      {/* ===== PAIN BRIDGE ===== */}
      <section className="max-w-5xl mx-auto px-6 pb-16 reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-8 md:p-10 rounded-xl bg-surface-container-high border border-outline-variant/60">
            <span className="font-geist-mono text-[10px] font-bold uppercase tracking-widest text-error block mb-4">Without Wagora</span>
            <ul className="space-y-3">
              {['4 hours/day finding leads manually', 'Copy-pasting the same DMs', 'Losing track of conversations', 'Feast-and-famine revenue cycles'].map(item => (
                <li key={item} className="flex items-start gap-3 font-satoshi text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-error text-base mt-0.5 shrink-0">close</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 md:p-10 rounded-xl bg-primary/5 border border-primary/20">
            <span className="font-geist-mono text-[10px] font-bold uppercase tracking-widest text-primary block mb-4">With Wagora</span>
            <ul className="space-y-3">
              {['Set it once, it runs 24/7', 'Every message written from scratch', 'AI handles every reply and objection', 'Consistent pipeline, zero burnout'].map(item => (
                <li key={item} className="flex items-start gap-3 font-satoshi text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== TRUST METRICS ===== */}
      <section className="max-w-4xl mx-auto px-6 pb-20 reveal">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 py-6 border-y border-outline-variant/30">
          {[
            { metric: '4+ hrs', label: 'Saved daily per user' },
            { metric: '10+', label: 'Industries served' },
            { metric: '3', label: 'Platforms, one voice' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <div className="font-geist-mono text-2xl font-bold text-on-surface">{item.metric}</div>
              <div className="font-satoshi text-xs text-on-surface-variant mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STEPS TIMELINE ===== */}
      <section id="steps" className="max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-24 relative scroll-mt-8">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/40 -translate-x-1/2" />

        <div className="space-y-20 md:space-y-32">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1
            const MockComponent = stepMocks[i]
            return (
              <div key={i}>
                <div className="reveal relative">
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-4 w-12 h-12 rounded-full bg-primary text-on-primary font-geist-mono text-sm font-bold items-center justify-center z-10 shadow-lg shadow-primary/20">
                    {step.num}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className={`${isEven ? 'md:order-2 md:pl-16' : 'md:pr-16'}`}>
                      <div className="md:hidden flex items-center gap-3 mb-4">
                        <span className="w-10 h-10 rounded-full bg-primary text-on-primary font-geist-mono text-xs font-bold flex items-center justify-center">{step.num}</span>
                        <span className="font-geist-mono text-primary uppercase tracking-widest text-xs font-bold">{step.label}</span>
                      </div>
                      <div className="hidden md:flex items-center gap-3 mb-4">
                        <span className="w-8 h-[1px] bg-primary" />
                        <span className="font-geist-mono text-primary uppercase tracking-widest text-xs font-bold">{step.label}</span>
                      </div>
                      <h2 className="font-clash text-2xl md:text-3xl lg:text-4xl font-bold text-on-surface mb-4 leading-tight">{step.title}</h2>
                      <p className="font-satoshi text-on-surface-variant text-base leading-relaxed mb-4">{step.body}</p>
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15">
                        <span className="text-sm">{step.tag.split(' ')[0]}</span>
                        <span className="font-satoshi text-xs font-medium text-on-surface">{step.tag.split(' ').slice(1).join(' ')}</span>
                      </span>
                    </div>

                    {/* CSS-built branded mockup */}
                    <div className={`${isEven ? 'md:order-1' : ''}`}>
                      <div className="rounded-xl overflow-hidden border border-outline-variant/60 bg-surface-container-high hover:border-primary/40 transition-colors duration-300 shadow-sm hover:shadow-md">
                        <MockComponent />
                      </div>
                    </div>
                  </div>
                </div>

                {i === 2 && (
                  <div className="reveal text-center py-12 md:py-16">
                    <p className="font-satoshi text-on-surface-variant mb-4">Convinced already?</p>
                    <Link to="/auth" className="inline-flex items-center gap-2 font-satoshi font-bold text-primary hover:underline underline-offset-4 transition-all">
                      Start Free, no credit card required <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== PIPELINE SUMMARY ===== */}
      <section className="max-w-5xl mx-auto px-6 pb-20 reveal">
        <div className="text-center mb-8">
          <span className="font-geist-mono text-xs font-bold tracking-widest text-primary uppercase">The Full Pipeline</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-0">
          {pipelineSteps.map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-high border border-outline-variant/60">
                <span className="font-geist-mono text-xs font-bold text-primary">0{i + 1}</span>
                <span className="font-satoshi text-sm font-bold text-on-surface">{step}</span>
              </div>
              {i < pipelineSteps.length - 1 && (
                <span className="hidden sm:block material-symbols-outlined text-primary/40 text-base mx-1">arrow_forward</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-center mt-6 font-satoshi text-sm text-on-surface-variant">
          End-to-end. Fully autonomous. You only step in to deliver.
        </p>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-32">
        <div className="reveal bg-primary p-12 md:p-16 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--color-on-primary)_0%,transparent_70%)]" />
          <div className="relative z-10">
            <h3 className="font-clash text-3xl md:text-5xl font-bold text-on-primary mb-4 leading-tight">Your next client is<br className="hidden sm:block" /> 5 steps away.</h3>
            <p className="font-satoshi text-on-primary/80 mb-10 max-w-lg mx-auto">
              Stop selling. Start closing. Set up Wagora in minutes and let your pipeline run on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/auth" className="bg-on-primary text-primary px-10 py-4 rounded-lg font-satoshi font-bold text-base hover:opacity-90 active:scale-[0.97] transition-all">
                Start For Free
              </Link>
              <Link to="/pricing" className="border border-on-primary/30 text-on-primary px-10 py-4 rounded-lg font-satoshi font-bold text-base hover:bg-on-primary/10 transition-all">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
