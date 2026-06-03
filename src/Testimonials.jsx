import { motion } from 'framer-motion'
import { fadeUp, scaleIn, A } from './lib'

const testimonials = [
  { text: "Flow replaced 4 tools for our team. We ship 2x faster now and actually enjoy our daily standups.", name: 'Sarah Chen', role: 'Head of Engineering', avatar: 'SC', color: '#0D9488' },
  { text: "The AI features are genuinely useful — not just a gimmick. It's like having a brilliant PM on call 24/7.", name: 'Marcus Johnson', role: 'CTO', avatar: 'MJ', color: '#EA580C' },
  { text: "We evaluated 12 tools before choosing Flow. Nothing else comes close in speed and design quality.", name: 'Aiko Tanaka', role: 'Product Lead', avatar: 'AT', color: '#14B8A6' },
]

export default function Testimonials() {
  return (
    <section className="section" id="testimonials" aria-labelledby="th">
      <A className="section-header">
        <motion.span className="section-label" variants={fadeUp}>Testimonials</motion.span>
        <motion.h2 className="section-title" id="th" variants={fadeUp} custom={1}>Loved by teams worldwide</motion.h2>
        <motion.p className="section-desc" variants={fadeUp} custom={2}>Join 10,000+ teams already shipping faster with Flow.</motion.p>
      </A>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.article key={t.name} className="testimonial-card" variants={scaleIn} custom={i} whileHover={{ y: -6 }} tabIndex={0}>
            <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar" style={{ background: t.color }} aria-hidden="true">{t.avatar}</div>
              <div><div className="testimonial-name">{t.name}</div><div className="testimonial-role">{t.role}</div></div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
