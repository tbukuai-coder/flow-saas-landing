import { motion } from 'framer-motion'
import { fadeUp, useTheme } from './lib'
import { Icons } from './icons'

export default function Navbar() {
  const [theme, toggle] = useTheme()
  return (
    <motion.nav className="navbar" initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} role="navigation" aria-label="Main">
      <div className="navbar-logo">Flow</div>
      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
          {theme === 'light' ? <Icons.Moon /> : <Icons.Sun />}
        </button>
        <a href="#cta" className="btn btn-ghost navbar-cta">Get Started<span className="arrow" aria-hidden="true">→</span></a>
      </div>
    </motion.nav>
  )
}
