import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Icons } from './icons'

const EASE = [0.25, 0.46, 0.45, 0.94]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: EASE },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: EASE },
  }),
}

function A({ children, className, ...p }) {
  const r = useRef(null)
  const v = useInView(r, { once: true, margin: '-60px' })
  return <motion.div ref={r} initial="hidden" animate={v ? 'visible' : 'hidden'} className={className} {...p}>{children}</motion.div>
}

/* ── Theme Hook ── */
function useTheme() {
  const [t, setT] = useState(() => typeof window !== 'undefined' ? localStorage.getItem('flow-t') || 'light' : 'light')
  useEffect(() => { document.documentElement.setAttribute('data-theme', t); localStorage.setItem('flow-t', t) }, [t])
  return [t, () => setT(x => x === 'light' ? 'dark' : 'light')]
}

export { Icons, fadeUp, scaleIn, A, useTheme }
