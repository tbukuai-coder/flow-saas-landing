import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function AnimatedSection({ children, className, ...props }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/* ── Navbar ── */
function Navbar() {
  return (
    <motion.nav
      className="v1-navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="v1-navbar-logo">Flow <span className="v1-version-badge">v1</span></div>
      <ul className="v1-navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <a href="#cta" className="v1-btn v1-btn-primary v1-navbar-cta">Get Started</a>
    </motion.nav>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="v1-hero">
      <div className="v1-hero-gradient" aria-hidden="true" />
      <div className="v1-hero-orb v1-hero-orb-1" aria-hidden="true" />
      <div className="v1-hero-orb v1-hero-orb-2" aria-hidden="true" />
      <div className="v1-hero-content">
        <motion.div className="v1-hero-badge" variants={fadeUp} custom={0}>
          <span className="v1-hero-badge-dot" aria-hidden="true" /> Now in public beta
        </motion.div>
        <motion.h1 variants={fadeUp} custom={1}>
          Productivity,<br />
          <span className="v1-grad">Unleashed.</span>
        </motion.h1>
        <motion.p variants={fadeUp} custom={2}>
          Flow brings your tasks, docs, and team into one beautiful workspace. Less context-switching. More deep work. Ship faster.
        </motion.p>
        <motion.div className="v1-hero-buttons" variants={fadeUp} custom={3}>
          <a href="#cta" className="v1-btn v1-btn-primary">Start Free Trial →</a>
          <a href="#features" className="v1-btn v1-btn-secondary">See How It Works</a>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Features ── */
const features = [
  { icon: '⚡', iconClass: 'v1-feature-icon-purple', title: 'Lightning Fast', desc: 'Sub-50ms sync across all devices. Your workspace updates in real-time — no refresh needed.' },
  { icon: '🧩', iconClass: 'v1-feature-icon-pink', title: 'Deep Integrations', desc: 'Connect Notion, GitHub, Figma, Slack, and 200+ tools. One hub for your entire stack.' },
  { icon: '🤖', iconClass: 'v1-feature-icon-teal', title: 'AI-Powered Flow', desc: 'Smart suggestions, auto-prioritization, and AI summaries that actually save you time.' },
]

function Features() {
  return (
    <section className="v1-section" id="features">
      <AnimatedSection className="v1-section-header">
        <motion.span className="v1-section-label" variants={fadeUp}>Features</motion.span>
        <motion.h2 className="v1-section-title" variants={fadeUp} custom={1}>Everything you need to stay in flow</motion.h2>
        <motion.p className="v1-section-desc" variants={fadeUp} custom={2}>Built for teams who value speed, clarity, and deep work.</motion.p>
      </AnimatedSection>
      <div className="v1-features-grid">
        {features.map((f, i) => (
          <motion.div key={f.title} className="v1-feature-card" variants={scaleIn} custom={i} whileHover={{ y: -8 }} tabIndex={0}>
            <div className={`v1-feature-icon ${f.iconClass}`}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ── Pricing ── */
const plans = [
  { tier: 'Starter', name: 'Solo', price: 'Free', period: 'forever', features: ['Up to 5 projects', 'Basic integrations', '1 GB storage', 'Community support'], featured: false, cta: 'Get Started' },
  { tier: 'Pro', name: 'Growth', price: '$12', period: '/month', features: ['Unlimited projects', 'All integrations', '100 GB storage', 'Priority support', 'AI assistant', 'Custom workflows'], featured: true, cta: 'Start Trial' },
  { tier: 'Enterprise', name: 'Scale', price: '$49', period: '/month', features: ['Everything in Pro', 'SSO & SAML', 'Unlimited storage', 'Dedicated account manager', 'Custom SLA', 'On-premise option'], featured: false, cta: 'Contact Sales' },
]

function Pricing() {
  return (
    <section className="v1-section v1-pricing-section" id="pricing">
      <AnimatedSection className="v1-section-header">
        <motion.span className="v1-section-label" variants={fadeUp}>Pricing</motion.span>
        <motion.h2 className="v1-section-title" variants={fadeUp} custom={1}>Simple, transparent pricing</motion.h2>
        <motion.p className="v1-section-desc" variants={fadeUp} custom={2}>Start free. Scale when you're ready. No surprises.</motion.p>
      </AnimatedSection>
      <div className="v1-pricing-grid">
        {plans.map((p, i) => (
          <motion.div key={p.name} className={`v1-pricing-card${p.featured ? ' v1-featured' : ''}`} variants={scaleIn} custom={i} whileHover={{ y: -8 }} tabIndex={0} aria-label={`${p.name} plan: ${p.price}${p.period}`}>
            <div className="v1-pricing-tier">{p.tier}</div>
            <div className="v1-pricing-name">{p.name}</div>
            <div className="v1-pricing-price">{p.price}{p.period && <span> {p.period}</span>}</div>
            <div className="v1-pricing-period">{p.price === 'Free' ? 'No credit card required' : 'Billed monthly'}</div>
            <ul className="v1-pricing-features" role="list">
              {p.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <a href="#cta" className={`v1-btn ${p.featured ? 'v1-btn-primary' : 'v1-btn-secondary'}`}>{p.cta}</a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ── Testimonials ── */
const testimonials = [
  { text: "Flow replaced 4 tools for our team. We ship 2x faster now and actually enjoy our daily standups.", name: 'Sarah Chen', role: 'Head of Engineering, Vercel', avatar: 'SC', color: 'linear-gradient(135deg, #6c5ce7, #a29bfe)' },
  { text: "The AI features are genuinely useful — not just a gimmick. It's like having a brilliant PM on call 24/7.", name: 'Marcus Johnson', role: 'CTO, Stripe', avatar: 'MJ', color: 'linear-gradient(135deg, #fd79a8, #e17055)' },
  { text: "We evaluated 12 tools before choosing Flow. Nothing else comes close in speed and design quality.", name: 'Aiko Tanaka', role: 'Product Lead, Figma', avatar: 'AT', color: 'linear-gradient(135deg, #00cec9, #0984e3)' },
]

function Testimonials() {
  return (
    <section className="v1-section" id="testimonials">
      <AnimatedSection className="v1-section-header">
        <motion.span className="v1-section-label" variants={fadeUp}>Testimonials</motion.span>
        <motion.h2 className="v1-section-title" variants={fadeUp} custom={1}>Loved by teams worldwide</motion.h2>
        <motion.p className="v1-section-desc" variants={fadeUp} custom={2}>Join 10,000+ teams already shipping faster with Flow.</motion.p>
      </AnimatedSection>
      <div className="v1-testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} className="v1-testimonial-card" variants={scaleIn} custom={i} whileHover={{ y: -8 }} tabIndex={0}>
            <div className="v1-testimonial-stars" aria-label="5 stars">★★★★★</div>
            <p className="v1-testimonial-text">"{t.text}"</p>
            <div className="v1-testimonial-author">
              <div className="v1-testimonial-avatar" style={{ background: t.color }} aria-hidden="true">{t.avatar}</div>
              <div>
                <div className="v1-testimonial-name">{t.name}</div>
                <div className="v1-testimonial-role">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ── CTA ── */
function CTA() {
  return (
    <section className="v1-cta-section" id="cta">
      <div className="v1-cta-gradient" aria-hidden="true" />
      <AnimatedSection className="v1-cta-content">
        <motion.h2 variants={fadeUp}>Ready to find your <span className="v1-grad">flow?</span></motion.h2>
        <motion.p variants={fadeUp} custom={1}>Start your free 14-day trial. No credit card required. Cancel anytime.</motion.p>
        <motion.div variants={fadeUp} custom={2}>
          <a href="#" className="v1-btn v1-btn-primary">Get Started Free →</a>
        </motion.div>
      </AnimatedSection>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="v1-footer">
      <p>© 2026 Flow, Inc. All rights reserved.</p>
    </footer>
  )
}

/* ── App ── */
export default function V1Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
