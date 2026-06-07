import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem, useMagneticHover } from './lib'

function MagneticButton({ children, className, href }) {
  const { x, y, handleMouseMove, handleMouseLeave } = useMagneticHover(0.25)
  return (
    <motion.a
      className={className}
      href={href}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  )
}

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="cta-section" id="cta" aria-label="Call to action">
      <motion.div
        className="cta-gradient"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="cta-content"
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        <motion.h2 variants={staggerItem}>
          Ready to find your <span className="accent">flow?</span>
        </motion.h2>
        <motion.p variants={staggerItem}>
          Start your free 14-day trial. No credit card required. Cancel anytime.
        </motion.p>
        <motion.div variants={staggerItem}>
          <MagneticButton href="#" className="btn btn-primary">
            Get Started Free<span className="arrow" aria-hidden="true">→</span>
          </MagneticButton>
        </motion.div>
      </motion.div>
      <motion.div
        className="cta-orb cta-orb-1"
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="cta-orb cta-orb-2"
        animate={{ scale: [1, 0.85, 1], y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
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
