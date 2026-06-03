import { motion } from 'framer-motion'
import { fadeUp, scaleIn, A } from './lib'
import { Icons } from './icons'

const features = [
  { Icon: Icons.Zap, title: 'Lightning Fast', desc: 'Sub-50ms sync across all devices. Your workspace updates in real-time — no refresh needed.', color: 'primary' },
  { Icon: Icons.Puzzle, title: 'Deep Integrations', desc: 'Connect Notion, GitHub, Figma, Slack, and 200+ tools. One hub for your entire stack.', color: 'secondary' },
  { Icon: Icons.Sparkles, title: 'AI-Powered Flow', desc: 'Smart suggestions, auto-prioritization, and AI summaries that actually save you time.', color: 'accent' },
]

export default function Features() {
  return (
    <section className="section" id="features" aria-labelledby="fh">
      <A className="section-header">
        <motion.span className="section-label" variants={fadeUp}>Features</motion.span>
        <motion.h2 className="section-title" id="fh" variants={fadeUp} custom={1}>Everything you need<br />to stay in flow</motion.h2>
        <motion.p className="section-desc" variants={fadeUp} custom={2}>Built for teams who value speed, clarity, and deep work.</motion.p>
      </A>
      <div className="features-grid">
        {features.map((f, i) => (
          <motion.article key={f.title} className="feature-card" variants={scaleIn} custom={i} whileHover={{ y: -6 }} tabIndex={0}>
            <div className={`feature-icon feature-icon-${f.color}`} aria-hidden="true"><f.Icon /></div>
            <h3>{f.title}</h3><p>{f.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
