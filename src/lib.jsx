import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import { Icons } from './icons'

const EASE = [0.25, 0.46, 0.45, 0.94]
const SPRING = { type: 'spring', stiffness: 300, damping: 25 }

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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
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

/* ── Animated Counter Hook ── */
function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const started = !startOnView || isInView

  useEffect(() => {
    if (!started) return
    let startTime
    let raf
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [started, end, duration])

  return [count, ref]
}

/* ── Magnetic Hover Hook ── */
function useMagneticHover(strength = 0.3) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, SPRING)
  const springY = useSpring(y, SPRING)

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }, [x, y, strength])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return { x: springX, y: springY, handleMouseMove, handleMouseLeave }
}

/* ── Scroll Progress Hook ── */
function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const total = h.scrollHeight - h.clientHeight
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return progress
}

/* ── Ripple Effect ── */
function useRipple() {
  const [ripples, setRipples] = useState([])
  const addRipple = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    const id = Date.now()
    setRipples(r => [...r, { x, y, size, id }])
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 600)
  }, [])
  return { ripples, addRipple }
}

export {
  Icons, fadeUp, scaleIn, A, useTheme,
  staggerContainer, staggerItem,
  useCountUp, useMagneticHover, useScrollProgress, useRipple,
}
