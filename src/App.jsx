import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Pricing from './Pricing'
import Testimonials from './Testimonials'
import CTA, { Footer } from './CTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
