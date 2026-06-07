import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem, useMagneticHover } from './lib'

const testimonials = [
  { text: "Flow replaced 4 tools for our team. We ship 2x faster now and actually enjoy our daily standups.", name: 'Sarah Chen', role: 'Head of Engineering', avatar: 'SC', color: 'var(--c-primary)' },
  { text: "The AI features are genuinely useful — not just a gimmick. It's like having a brilliant PM on call 24/7.", name: 'Marcus Johnson', role: 'CTO', avatar: 'MJ', color: 'var(--c-accent)' },
  { text: "We evaluated 12 tools before choosing Flow. Nothing else comes close in speed and design quality.", name: 'Aiko Tanaka', role: 'Product Lead', avatar: 'AT', color: 'var(--c-secondary)' },
]

function TestimonialCard({ t, i }) {
  const { x, y, handleMouseMove, handleMouseLeave } = useMagneticHover(0.1)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      className="testimonial-card"
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: i * 0.12, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      tabIndex={0}
    >
      <motion.div
        className="testimonial-stars"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 + i * 0.12 }}
        aria-label="5 stars"
      >
        {'★★★★★'}
      </motion.div>
      <motion.p
        className="testimonial-text"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 + i * 0.12 }}
      >
        "{t.text}"
      </motion.p>
      <motion.div
        className="testimonial-author"
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4 + i * 0.12 }}
      >
        <motion.div
          className="testimonial-avatar"
          style={{ background: t.color }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          aria-hidden="true"
        >
          {t.avatar}
        </motion.div>
        <div>
          <div className="testimonial-name">{t.name}</div>
          <div className="testimonial-role">{t.role}</div>
        </div>
      </motion.div>
      <motion.div
        className="testimonial-glow"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />
    </motion.article>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="section" id="testimonials" aria-labelledby="th">
      <motion.div
        className="section-header"
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        <motion.span className="section-label" variants={staggerItem}>Testimonials</motion.span>
        <motion.h2 className="section-title" id="th" variants={staggerItem}>Loved by teams worldwide</motion.h2>
        <motion.p className="section-desc" variants={staggerItem}>Join 10,000+ teams already shipping faster with Flow.</motion.p>
      </motion.div>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} t={t} i={i} />
        ))}
      </div>
    </section>
  )
}
