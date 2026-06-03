import { motion } from 'framer-motion'
import { fadeUp } from './lib'

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>
      <div className="hero-content">
        <motion.div className="hero-badge" variants={fadeUp} custom={0}>
          <span className="hero-badge-dot" aria-hidden="true" />Now in public beta
        </motion.div>
        <motion.h1 variants={fadeUp} custom={1}>Productivity,<br /><span className="accent">Unleashed.</span></motion.h1>
        <motion.p variants={fadeUp} custom={2}>Flow brings your tasks, docs, and team into one beautiful workspace. Less context-switching. More deep work. Ship faster.</motion.p>
        <motion.div className="hero-buttons" variants={fadeUp} custom={3}>
          <a href="#cta" className="btn btn-primary">Start Free Trial<span className="arrow" aria-hidden="true">→</span></a>
          <a href="#features" className="btn btn-secondary">See How It Works</a>
        </motion.div>
      </div>
    </section>
  )
}
