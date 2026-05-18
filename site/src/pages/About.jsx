import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  useScrollReveal()

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-16 md:pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-geist-mono text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">OUR STORY</span>
          <h1 className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-on-surface leading-[1.08] mb-6">
            We built Wagora because<br className="hidden sm:block" /> we needed it ourselves.
          </h1>
          <p className="font-satoshi text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Not as a side project. Not as an experiment. As the answer to a problem that was costing us clients, sleep, and momentum.
          </p>
        </div>
      </section>

      {/* ===== THE ORIGIN STORY ===== */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="space-y-6 font-satoshi text-on-surface-variant text-base md:text-lg leading-relaxed reveal">
          <p>
            It started at <strong className="text-on-surface">Fortex Forge</strong>, our creative tech agency. We were doing great work. Clients loved what we delivered. But finding the <em>next</em> client? That was a different story.
          </p>
          <p>
            Every morning started the same way: scroll LinkedIn, write personalized DMs, track who replied, follow up with the ones who didn't, try to remember what we said to whom, and somehow find time to actually <em>do the work we were selling</em>.
          </p>
          <p>
            We tried the tools everyone recommends. Lead scrapers that gave us spreadsheets of strangers. Email blasters that got us flagged as spam. CRMs that needed a full-time admin to maintain. None of them did the actual hard part: <strong className="text-on-surface">having the conversation</strong>.
          </p>
          <p>
            So we built our own.
          </p>
        </div>
      </section>

      {/* ===== PULL QUOTE ===== */}
      <section className="max-w-4xl mx-auto px-6 pb-20 reveal">
        <blockquote className="py-12 md:py-16 px-8 md:px-12 bg-primary/5 border border-primary/15 rounded-2xl text-center relative">
          <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-6 left-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <p className="font-clash text-2xl md:text-3xl lg:text-4xl text-on-surface leading-snug font-bold relative z-10 max-w-2xl mx-auto">
            We didn't want another tool. We wanted a teammate who never sleeps, never forgets to follow up, and never has a bad pitch day.
          </p>
        </blockquote>
      </section>

      {/* ===== WHAT WAGORA ACTUALLY IS ===== */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="space-y-6 font-satoshi text-on-surface-variant text-base md:text-lg leading-relaxed reveal">
          <p>
            Wagora isn't a lead list. It's not a chatbot duct-taped to an email sender. It's a <strong className="text-on-surface">complete sales system</strong> that finds the right people, writes messages that actually sound like you, handles every reply and objection, books calls, and closes deals. All without you lifting a finger.
          </p>
          <p>
            It's what we wished existed when we were burning 4 hours a day on outreach that should have taken 4 minutes.
          </p>
        </div>
      </section>

      {/* ===== WHO WE BUILT THIS FOR ===== */}
      <section className="bg-surface-container-low py-20 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal">
            <span className="font-geist-mono text-xs font-bold tracking-widest text-primary uppercase block mb-3">WHO THIS IS FOR</span>
            <h2 className="font-clash text-3xl md:text-4xl font-bold text-on-surface">If this sounds like you, we built Wagora for you.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            {[
              {
                icon: 'storefront',
                title: 'Agency owners',
                body: "You deliver incredible work, but your pipeline depends on referrals and random luck. You need consistent lead flow without hiring a sales team.",
              },
              {
                icon: 'person',
                title: 'Solo founders',
                body: "You're the product, the operator, and the salesperson. Something has to give. Wagora takes sales off your plate so you can focus on what you're actually good at.",
              },
              {
                icon: 'rocket_launch',
                title: 'Growing teams',
                body: "You've found product-market fit but can't scale outreach fast enough. Wagora gives you the outbound muscle of a 5-person sales team at a fraction of the cost.",
              },
            ].map((card) => (
              <div key={card.title} className="p-8 md:p-10 rounded-xl bg-surface-container-lowest border border-outline-variant/60 hover:border-primary/40 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>{card.icon}</span>
                <h3 className="font-clash text-xl font-bold text-on-surface mb-3">{card.title}</h3>
                <p className="font-satoshi text-sm text-on-surface-variant leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE BELIEVE ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center mb-12 reveal">
          <span className="font-geist-mono text-xs font-bold tracking-widest text-primary uppercase block mb-3">OUR PRINCIPLES</span>
          <h2 className="font-clash text-3xl md:text-4xl font-bold text-on-surface">What guides every line of code we write.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          {[
            {
              title: 'Autonomy over assistance',
              body: "We don't build tools that help you sell. We build systems that sell for you. There's a difference, and it matters when you're trying to scale without burning out.",
            },
            {
              title: 'Precision over volume',
              body: "Blasting 10,000 generic emails isn't outreach; it's spam. Wagora sends fewer messages, but every one lands because it's built on real context about real people.",
            },
            {
              title: 'Your voice, not ours',
              body: "AI that sounds like AI is worse than no AI at all. Wagora learns your tone, your language, your style, so prospects feel like they're hearing from you, not a robot.",
            },
            {
              title: 'Results you can measure',
              body: "We don't hide behind vanity metrics. You'll know exactly how many prospects were found, contacted, engaged, and closed. If it's not working, you'll see it, and so will we.",
            },
          ].map((item) => (
            <div key={item.title} className="p-8 md:p-10 rounded-xl border border-outline-variant/60 bg-surface-container hover:border-primary/40 transition-colors">
              <h3 className="font-clash text-lg md:text-xl font-bold text-on-surface mb-3">{item.title}</h3>
              <p className="font-satoshi text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TRUST / NUMBERS ===== */}
      <section className="max-w-4xl mx-auto px-6 pb-20 reveal">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20 py-10 border-y border-outline-variant/30">
          {[
            { metric: 'Founded 2025', label: 'Born from real need' },
            { metric: '10+ Industries', label: 'Agency, SaaS, consulting & more' },
            { metric: 'By Fortex Forge', label: 'Built by operators, for operators' },
          ].map(item => (
            <div key={item.label} className="text-center">
              <div className="font-geist-mono text-lg md:text-xl font-bold text-on-surface">{item.metric}</div>
              <div className="font-satoshi text-xs text-on-surface-variant mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-32">
        <div className="reveal bg-primary p-12 md:p-16 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--color-on-primary)_0%,transparent_70%)]" />
          <div className="relative z-10">
            <h3 className="font-clash text-3xl md:text-5xl font-bold text-on-primary mb-4 leading-tight">We built this for people like us.<br className="hidden sm:block" /> People like you.</h3>
            <p className="font-satoshi text-on-primary/80 mb-10 max-w-lg mx-auto">
              If you're tired of choosing between doing great work and finding new clients, Wagora was made for exactly that moment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/auth" className="bg-on-primary text-primary px-10 py-4 rounded-lg font-satoshi font-bold text-base hover:opacity-90 active:scale-[0.97] transition-all">
                Start For Free
              </Link>
              <Link to="/how-it-works" className="border border-on-primary/30 text-on-primary px-10 py-4 rounded-lg font-satoshi font-bold text-base hover:bg-on-primary/10 transition-all">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENGINEERED BY ===== */}
      <section className="max-w-3xl mx-auto px-6 pb-16 reveal">
        <div className="flex items-center justify-center gap-6 py-8 border-t border-outline-variant/30">
          <div className="text-center">
            <span className="font-geist-mono text-[10px] font-bold uppercase tracking-widest text-outline block mb-2">Engineered By</span>
            <a href="https://fortexforge.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2">
              <span className="font-clash text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Fortex Forge</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
