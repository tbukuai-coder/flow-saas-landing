import { motion } from 'framer-motion'
import { fadeUp, scaleIn, A } from './lib'
import { Icons } from './icons'

const plans = [
  { tier: 'Starter', name: 'Solo', price: 'Free', period: 'forever', features: ['Up to 5 projects', 'Basic integrations', '1 GB storage', 'Community support'], featured: false, cta: 'Get Started' },
  { tier: 'Pro', name: 'Growth', price: '$12', period: '/month', features: ['Unlimited projects', 'All integrations', '100 GB storage', 'Priority support', 'AI assistant', 'Custom workflows'], featured: true, cta: 'Start Trial' },
  { tier: 'Enterprise', name: 'Scale', price: '$49', period: '/month', features: ['Everything in Pro', 'SSO & SAML', 'Unlimited storage', 'Dedicated account manager', 'Custom SLA', 'On-premise option'], featured: false, cta: 'Contact Sales' },
]

export default function Pricing() {
  return (
    <section className="section pricing-section" id="pricing" aria-labelledby="ph">
      <A className="section-header">
        <motion.span className="section-label" variants={fadeUp}>Pricing</motion.span>
        <motion.h2 className="section-title" id="ph" variants={fadeUp} custom={1}>Simple, transparent pricing</motion.h2>
        <motion.p className="section-desc" variants={fadeUp} custom={2}>Start free. Scale when you're ready. No surprises.</motion.p>
      </A>
      <div className="pricing-grid">
        {plans.map((p, i) => (
          <motion.div key={p.name} className={`pricing-card${p.featured ? ' featured' : ''}`} variants={scaleIn} custom={i} whileHover={{ y: -6 }} tabIndex={0} aria-label={`${p.name} plan: ${p.price}${p.period}`}>
            <div className="pricing-tier">{p.tier}</div>
            <div className="pricing-name">{p.name}</div>
            <div className="pricing-price">{p.price}{p.period && <span> {p.period}</span>}</div>
            <div className="pricing-period">{p.price === 'Free' ? 'No credit card required' : 'Billed monthly'}</div>
            <ul className="pricing-features" role="list">
              {p.features.map(f => <li key={f}><span className="pricing-check" aria-hidden="true"><Icons.Check /></span>{f}</li>)}
            </ul>
            <a href="#cta" className={`btn ${p.featured ? 'btn-primary' : 'btn-secondary'}`}>{p.cta}</a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
