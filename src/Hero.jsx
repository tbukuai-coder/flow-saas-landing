import { motion, useMotionValue, useSpring } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, useMagneticHover } from './lib'

function MagneticButton({ children, className, href }) {
  const { x, y, handleMouseMove, handleMouseLeave } = useMagneticHover(0.25)
  return (
    <motion.a
      className={className}
      href={href}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  )
}

function MockCard({ title, tag, tagColor, i }) {
  return (
    <motion.div
      className="mock-card"
      initial={{ opacity: 0, x: -20, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 1.2 + i * 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.03, y: -2 }}
    >
      <div className="mock-card-header">
        <div className="mock-card-dots">
          <span /><span /><span />
        </div>
        <span className="mock-tag" style={{ background: tagColor }}>{tag}</span>
      </div>
      <div className="mock-card-title">{title}</div>
      <div className="mock-card-bar">
        <motion.div
          className="mock-card-bar-fill"
          style={{ background: tagColor }}
          initial={{ width: 0 }}
          animate={{ width: `${60 + i * 12}%` }}
          transition={{ delay: 1.6 + i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </motion.div>
  )
}

function MockWorkspace() {
  return (
    <motion.div
      className="mock-workspace"
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mock-workspace-header">
        <div className="mock-workspace-dots">
          <span className="dot-red" /><span className="dot-yellow" /><span className="dot-green" />
        </div>
        <div className="mock-workspace-tabs">
          <span className="mock-tab active">Board</span>
          <span className="mock-tab">List</span>
          <span className="mock-tab">Timeline</span>
        </div>
        <div className="mock-workspace-actions">
          <div className="mock-avatar">SC</div>
          <div className="mock-avatar">MJ</div>
          <div className="mock-avatar">+3</div>
        </div>
      </div>
      <div className="mock-columns">
        <div className="mock-col">
          <div className="mock-col-header"><span className="mock-col-dot" />To Do</div>
          <MockCard title="Design system audit" tag="Design" tagColor="rgba(13,148,136,0.2)" i={0} />
          <MockCard title="API rate limiting" tag="Backend" tagColor="rgba(234,88,12,0.2)" i={1} />
        </div>
        <div className="mock-col">
          <div className="mock-col-header"><span className="mock-col-dot in-progress" />In Progress</div>
          <MockCard title="Onboarding flow v2" tag="Product" tagColor="rgba(20,184,166,0.2)" i={2} />
        </div>
        <div className="mock-col">
          <div className="mock-col-header"><span className="mock-col-dot done" />Done</div>
          <MockCard title="SSO integration" tag="DevOps" tagColor="rgba(13,148,136,0.15)" i={3} />
          <MockCard title="Performance audit" tag="QA" tagColor="rgba(234,88,12,0.15)" i={4} />
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
        <motion.div
          className="hero-orb hero-orb-1"
          animate={{
            scale: [1, 1.05, 0.95, 1],
            x: [0, -20, 15, 0],
            y: [0, 25, -15, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-orb hero-orb-2"
          animate={{
            scale: [1, 1.1, 0.9, 1],
            x: [0, 30, -20, 0],
            y: [0, -20, 25, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-orb hero-orb-3"
          animate={{
            scale: [1, 0.9, 1.1, 1],
            x: [0, 15, -25, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="hero-content">
        <motion.div className="hero-badge" variants={fadeUp} custom={0}>
          <motion.span
            className="hero-badge-dot"
            animate={{ scale: [1, 0.6, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />Now in public beta
        </motion.div>
        <motion.h1 variants={fadeUp} custom={1}>
          Productivity,<br /><span className="accent">Unleashed.</span>
        </motion.h1>
        <motion.p variants={fadeUp} custom={2}>
          Flow brings your tasks, docs, and team into one beautiful workspace. Less context-switching. More deep work. Ship faster.
        </motion.p>
        <motion.div className="hero-buttons" variants={fadeUp} custom={3}>
          <MagneticButton href="#cta" className="btn btn-primary">Start Free Trial<span className="arrow" aria-hidden="true">→</span></MagneticButton>
          <MagneticButton href="#features" className="btn btn-secondary">See How It Works</MagneticButton>
        </motion.div>
      </div>
      <div className="hero-workspace-wrap">
        <MockWorkspace />
      </div>
    </section>
  )
}
