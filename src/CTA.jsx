import { motion } from 'framer-motion'
import { fadeUp, A } from './lib'

export default function CTA() {
  return (
    <section className="cta-section" id="cta" aria-label="Call to action">
      <div className="cta-gradient" aria-hidden="true" />
      <A className="cta-content">
        <motion.h2 variants={fadeUp}>Ready to find your <span className="accent">flow?</span></motion.h2>
        <motion.p variants={fadeUp} custom={1}>Start your free 14-day trial. No credit card required. Cancel anytime.</motion.p>
        <motion.div variants={fadeUp} custom={2}>
          <a href="#" className="btn btn-primary">Get Started Free<span className="arrow" aria-hidden="true">→</span></a>
        </motion.div>
      </A>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <p>© 2026 Flow, Inc. All rights reserved.</p>
    </footer>
  )
}
