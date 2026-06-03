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
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="navbar-logo">Flow</div>
      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <a href="#cta" className="btn btn-primary navbar-cta">Get Started</a>
    </motion.nav>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-gradient" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="hero-content">
        <motion.div className="hero-badge" variants={fadeUp} custom={0}>
          <span className="hero-badge-dot" /> Now in public beta
        </motion.div>

        <motion.h1 variants={fadeUp} custom={1}>
          Productivity,<br />
          <span className="grad">Unleashed.</span>
        </motion.h1>

        <motion.p variants={fadeUp} custom={2}>
          Flow brings your tasks, docs, and team into one beautiful workspace.
          Less context-switching. More deep work. Ship faster.
        </motion.p>

        <motion.div className="hero-buttons" variants={fadeUp} custom={3}>
          <a href="#cta" className="btn btn-primary">Start Free Trial →</a>
          <a href="#features" className="btn btn-secondary">See How It Works</a>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Features ── */
const features = [
  {
    icon: '⚡',
    iconClass: 'feature-icon-purple',
    title: 'Lightning Fast',
    desc: 'Sub-50ms sync across all devices. Your workspace updates in real-time — no refresh needed.',
  },
  {
    icon: '🧩',
    iconClass: 'feature-icon-pink',
    title: 'Deep Integrations',
    desc: 'Connect Notion, GitHub, Figma, Slack, and 200+ tools. One hub for your entire stack.',
  },
  {
    icon: '🤖',
    iconClass: 'feature-icon-teal',
    title: 'AI-Powered Flow',
    desc: 'Smart suggestions, auto-prioritization, and AI summaries that actually save you time.',
  },
]

function Features() {
  return (
    <section className="section" id="features">
      <AnimatedSection className="section-header">
        <motion.span className="section-label" variants={fadeUp}>Features</motion.span>
        <motion.h2 className="section-title" variants={fadeUp} custom={1}>
          Everything you need to stay in flow
        </motion.h2>
        <motion.p className="section-desc" variants={fadeUp} custom={2}>
          Built for teams who value speed, clarity, and deep work.
        </motion.p>
      </AnimatedSection>

      <div className="features-grid">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="feature-card"
            variants={scaleIn}
            custom={i}
            whileHover={{ y: -8 }}
          >
            <div className={`feature-icon ${f.iconClass}`}>{f.icon}</div>
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
  {
    tier: 'Starter',
    name: 'Solo',
    price: 'Free',
    period: 'forever',
    features: ['Up to 5 projects', 'Basic integrations', '1 GB storage', 'Community support'],
    featured: false,
  },
  {
    tier: 'Pro',
    name: 'Growth',
    price: '$12',
    period: '/month',
    features: ['Unlimited projects', 'All integrations', '100 GB storage', 'Priority support', 'AI assistant', 'Custom workflows'],
    featured: true,
  },
  {
    tier: 'Enterprise',
    name: 'Scale',
    price: '$49',
    period: '/month',
    features: ['Everything in Pro', 'SSO & SAML', 'Unlimited storage', 'Dedicated account manager', 'Custom SLA', 'On-premise option'],
    featured: false,
  },
]

function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <AnimatedSection className="section-header">
        <motion.span className="section-label" variants={fadeUp}>Pricing</motion.span>
        <motion.h2 className="section-title" variants={fadeUp} custom={1}>
          Simple, transparent pricing
        </motion.h2>
        <motion.p className="section-desc" variants={fadeUp} custom={2}>
          Start free. Scale when you're ready. No surprises.
        </motion.p>
      </AnimatedSection>

      <div className="pricing-grid">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            className={`pricing-card${p.featured ? ' featured' : ''}`}
            variants={scaleIn}
            custom={i}
            whileHover={{ y: -8 }}
          >
            <div className="pricing-tier">{p.tier}</div>
            <div className="pricing-name">{p.name}</div>
            <div className="pricing-price">
              {p.price}
              {p.period && <span> {p.period}</span>}
            </div>
            <div className="pricing-period">
              {p.price === 'Free' ? 'No credit card required' : 'Billed monthly'}
            </div>
            <ul className="pricing-features">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href="#cta" className={`btn ${p.featured ? 'btn-primary' : 'btn-secondary'}`}>
              {p.price === 'Free' ? 'Get Started' : 'Start Trial'}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ── Testimonials ── */
const testimonials = [
  {
    text: "Flow replaced 4 tools for our team. We ship 2x faster now and actually enjoy our daily standups.",
    name: 'Sarah Chen',
    role: 'Head of Engineering, Vercel',
    avatar: 'SC',
    color: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
  },
  {
    text: "The AI features are genuinely useful — not just a gimmick. It's like having a brilliant PM on call 24/7.",
    name: 'Marcus Johnson',
    role: 'CTO, Stripe',
    avatar: 'MJ',
    color: 'linear-gradient(135deg, #fd79a8, #e17055)',
  },
  {
    text: "We evaluated 12 tools before choosing Flow. Nothing else comes close in speed and design quality.",
    name: 'Aiko Tanaka',
    role: 'Product Lead, Figma',
    avatar: 'AT',
    color: 'linear-gradient(135deg, #00cec9, #0984e3)',
  },
]

function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <AnimatedSection className="section-header">
        <motion.span className="section-label" variants={fadeUp}>Testimonials</motion.span>
        <motion.h2 className="section-title" variants={fadeUp} custom={1}>
          Loved by teams worldwide
        </motion.h2>
        <motion.p className="section-desc" variants={fadeUp} custom={2}>
          Join 10,000+ teams already shipping faster with Flow.
        </motion.p>
      </AnimatedSection>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="testimonial-card"
            variants={scaleIn}
            custom={i}
            whileHover={{ y: -8 }}
          >
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar" style={{ background: t.color }}>
                {t.avatar}
              </div>
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
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
    <section className="cta-section" id="cta">
      <div className="cta-gradient" />
      <AnimatedSection className="cta-content">
        <motion.h2 variants={fadeUp}>
          Ready to find your <span className="grad">flow?</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={1}>
          Start your free 14-day trial. No credit card required.
          Cancel anytime.
        </motion.p>
        <motion.div variants={fadeUp} custom={2}>
          <a href="#" className="btn btn-primary">Get Started Free →</a>
        </motion.div>
      </AnimatedSection>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Flow, Inc. All rights reserved.</p>
    </footer>
  )
}

/* ── App ── */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
