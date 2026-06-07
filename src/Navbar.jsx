import { motion } from 'framer-motion'
import { useLocation, Link } from 'react-router-dom'
import { fadeUp, useTheme } from './lib'
import { Icons } from './icons'

export default function Navbar() {
  const [theme, toggle] = useTheme()
  const loc = useLocation()
  const isV1 = loc.pathname.startsWith('/v1')
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      role="navigation"
      aria-label="Main"
    >
      <motion.div className="navbar-logo" whileHover={{ scale: 1.03 }}>
        Flow <span className="version-badge">{isV1 ? 'v1' : 'v2'}</span>
      </motion.div>
      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <div className="navbar-right">
        <Link to={isV1 ? '/v2' : '/v1'} className="version-switch" aria-label="Switch version">
          {isV1 ? '→ v2' : '→ v1'}
        </Link>
        <motion.button
          className="theme-toggle"
          onClick={toggle}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          {theme === 'light' ? <Icons.Moon /> : <Icons.Sun />}
        </motion.button>
        <motion.a
          href="#cta"
          className="btn btn-ghost navbar-cta"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Get Started<span className="arrow" aria-hidden="true">→</span>
        </motion.a>
      </div>
    </motion.nav>
  )
}
