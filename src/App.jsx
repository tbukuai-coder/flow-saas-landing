import Navbar from './Navbar'
import ScrollProgress from './ScrollProgress'
import Hero from './Hero'
import Features from './Features'
import Stats from './Stats'
import Pricing from './Pricing'
import Testimonials from './Testimonials'
import CTA, { Footer } from './CTA'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
