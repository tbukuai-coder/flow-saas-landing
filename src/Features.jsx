import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem, useMagneticHover } from './lib'
import { Icons } from './icons'

const features = [
  { Icon: Icons.Zap, title: 'Lightning Fast', desc: 'Sub-50ms sync across all devices. Your workspace updates in real-time — no refresh needed.', color: 'primary', size: 'tall' },
  { Icon: Icons.Puzzle, title: 'Deep Integrations', desc: 'Connect Notion, GitHub, Figma, Slack, and 200+ tools. One hub for your entire stack.', color: 'secondary', size: 'wide' },
  { Icon: Icons.Sparkles, title: 'AI-Powered Flow', desc: 'Smart suggestions, auto-prioritization, and AI summaries that actually save you time.', color: 'accent', size: 'normal' },
  { Icon: Icons.Layout, title: 'Custom Workspaces', desc: 'Tailor your workspace to match your workflow. Drag-and-drop boards, lists, and timelines.', color: 'primary', size: 'normal' },
  { Icon: Icons.Shield, title: 'Enterprise Security', desc: 'SOC 2 Type II, SSO, SAML, and end-to-end encryption. Your data stays yours.', color: 'secondary', size: 'wide' },
  { Icon: Icons.Globe, title: 'Global Collaboration', desc: 'Work across time zones with real-time cursors, comments, and async video updates.', color: 'accent', size: 'tall' },
]

function FeatureCard({ f, i }) {
  const { x, y, handleMouseMove, handleMouseLeave } = useMagneticHover(0.15)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      className={`feature-card feature-card-${f.size}`}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      tabIndex={0}
    >
      <motion.div
        className={`feature-icon feature-icon-${f.color}`}
        whileHover={{ rotate: 8, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        aria-hidden="true"
      >
        <f.Icon />
      </motion.div>
      <h3>{f.title}</h3>
      <p>{f.desc}</p>
      <motion.div
        className="feature-glow"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />
    </motion.article>
  )
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="section" id="features" aria-labelledby="fh">
      <motion.div
        className="section-header"
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        <motion.span className="section-label" variants={staggerItem}>Features</motion.span>
        <motion.h2 className="section-title" id="fh" variants={staggerItem}>Everything you need<br />to stay in flow</motion.h2>
        <motion.p className="section-desc" variants={staggerItem}>Built for teams who value speed, clarity, and deep work.</motion.p>
      </motion.div>
      <div className="features-grid">
        {features.map((f, i) => (
          <FeatureCard key={f.title} f={f} i={i} />
        ))}
      </div>
    </section>
  )
}
