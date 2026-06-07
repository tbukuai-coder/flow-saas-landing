import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem, useMagneticHover } from './lib'
import { Icons } from './icons'

const plans = [
  { tier: 'Starter', name: 'Solo', price: 'Free', period: 'forever', features: ['Up to 5 projects', 'Basic integrations', '1 GB storage', 'Community support'], featured: false, cta: 'Get Started' },
  { tier: 'Pro', name: 'Growth', price: '$12', period: '/month', features: ['Unlimited projects', 'All integrations', '100 GB storage', 'Priority support', 'AI assistant', 'Custom workflows'], featured: true, cta: 'Start Trial' },
  { tier: 'Enterprise', name: 'Scale', price: '$49', period: '/month', features: ['Everything in Pro', 'SSO & SAML', 'Unlimited storage', 'Dedicated account manager', 'Custom SLA', 'On-premise option'], featured: false, cta: 'Contact Sales' },
]

function PricingCard({ p, i }) {
  const { x, y, handleMouseMove, handleMouseLeave } = useMagneticHover(0.12)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className={`pricing-card${p.featured ? ' featured' : ''}`}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      tabIndex={0}
      aria-label={`${p.name} plan: ${p.price}${p.period}`}
    >
      <motion.div
        className="pricing-glow"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        aria-hidden="true"
      />
      <div className="pricing-tier">{p.tier}</div>
      <div className="pricing-name">{p.name}</div>
      <motion.div
        className="pricing-price"
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 300, damping: 20 }}
      >
        {p.price}{p.period && <span> {p.period}</span>}
      </motion.div>
      <div className="pricing-period">{p.price === 'Free' ? 'No credit card required' : 'Billed monthly'}</div>
      <ul className="pricing-features" role="list">
        {p.features.map((f, fi) => (
          <motion.li
            key={f}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.1 + fi * 0.05, duration: 0.3 }}
          >
            <span className="pricing-check" aria-hidden="true"><Icons.Check /></span>{f}
          </motion.li>
        ))}
      </ul>
      <motion.a
        href="#cta"
        className={`btn ${p.featured ? 'btn-primary' : 'btn-secondary'}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {p.cta}
      </motion.a>
    </motion.div>
  )
}

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="section pricing-section" id="pricing" aria-labelledby="ph">
      <motion.div
        className="section-header"
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        <motion.span className="section-label" variants={staggerItem}>Pricing</motion.span>
        <motion.h2 className="section-title" id="ph" variants={staggerItem}>Simple, transparent pricing</motion.h2>
        <motion.p className="section-desc" variants={staggerItem}>Start free. Scale when you're ready. No surprises.</motion.p>
      </motion.div>
      <div className="pricing-grid">
        {plans.map((p, i) => (
          <PricingCard key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  )
}
