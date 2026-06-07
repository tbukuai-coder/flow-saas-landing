import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp, staggerContainer, staggerItem } from './lib'

function StatItem({ value, suffix, label }) {
  const [count, ref] = useCountUp(value, 2000)
  return (
    <motion.div className="stat-item" variants={staggerItem} ref={ref}>
      <div className="stat-value">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  )
}

const stats = [
  { value: 10000, suffix: '+', label: 'Teams worldwide' },
  { value: 99, suffix: '.9%', label: 'Uptime SLA' },
  { value: 50, suffix: 'ms', label: 'Avg sync speed' },
  { value: 200, suffix: '+', label: 'Integrations' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="section stats-section" aria-label="Stats">
      <motion.div
        className="stats-grid"
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        {stats.map(s => (
          <StatItem key={s.label} {...s} />
        ))}
      </motion.div>
    </section>
  )
}
