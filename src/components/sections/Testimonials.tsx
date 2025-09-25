import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import TestimonialCard from '../ui/TestimonialCard'
import RiseIn from '../motion/RiseIn'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
  {
    name: 'Rafael Oyarce',
    role: 'Dueño, El Coppa Pizzas Pucón',
    content: 'Con Jafir logramos que nuestras promociones llegaran a mucho más público en redes sociales. La campaña fue directa, entretenida y nos permitió aumentar los pedidos en el local y el delivery.',
    rating: 5
  },
  {
    name: 'Claudia Calfio',
    role: 'Dueña, Zei Sushi Temuco',
    content: 'El equipo de Jafir entendió perfecto cómo comunicar nuestra propuesta. Gracias a sus ideas creativas, logramos más visibilidad y nuevos clientes que nunca nos habían probado.',
    rating: 5
  },
  {
    name: 'Cristóbal Bravo',
    role: 'Director de Turismo, Villarrica',
    content: 'El trabajo con Jafir nos ayudó a mostrar la identidad de nuestra comuna de una manera fresca y atractiva. Supieron transmitir lo que queremos proyectar como destino turístico.',
    rating: 5
  },
  {
    name: 'Claudio Bielefeldt',
    role: 'Dueño, Mohr Delikatessen Temuco',
    content: 'Con el apoyo de Jafir pudimos posicionar nuestros productos gourmet en redes sociales de forma mucho más profesional. Las publicaciones generaron interacción real y nos hicieron conocidos fuera de Temuco.',
    rating: 5
  }
];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-card/20 to-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RiseIn className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Lo que Dicen <span className="text-gradient">Mis Clientes</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Resultados reales de marcas que confiaron en mi trabajo. 
            Cada proyecto es una oportunidad de superar expectativas.
          </p>
        </RiseIn>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + '%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent' : 'bg-muted/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <RiseIn delay={0.6} className="text-center mt-16">
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              ¿Quieres ser el próximo caso de éxito?
            </h3>
            <p className="text-muted mb-6">
              Únete a las marcas que ya están generando conversación y ventas 
              con contenido auténtico y viral.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Empezar Mi Proyecto
            </motion.button>
          </div>
        </RiseIn>
      </div>
    </section>
  )
}

export default Testimonials
