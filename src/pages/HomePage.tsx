import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import ReelsShowcase from '../components/sections/ReelsShowcase'
import About from '../components/sections/About'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'

const HomePage = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <ReelsShowcase />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default HomePage
