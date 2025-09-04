import { motion } from 'framer-motion'
import ReelCard from '../ui/ReelCard'
import RiseIn from '../motion/RiseIn'

const ReelsShowcase = () => {
  const reels = [
    { views: '1.4M', title: 'Pregunta incómoda en el mall' },
    { views: '794K', title: 'Reto express con extraños' },
    { views: '517.8K', title: 'Broma en el transporte público' },
    { views: '297K', title: 'Interacción con vendedores' },
    { views: '40K', title: 'Sketch en la calle' },
    { views: '32K', title: 'Dinámica con público' }
  ]

  return (
    <section id="reels" className="py-20 bg-gradient-to-b from-bg to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RiseIn className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Contenido que <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Más de 3.5M de visualizaciones combinadas. 
            Cada video está diseñado para generar conversación y engagement real.
          </p>
        </RiseIn>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {reels.map((reel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${
                index === 0 ? 'md:row-span-2' : 
                index === 2 ? 'md:row-span-2' : ''
              }`}
            >
              <ReelCard
                views={reel.views}
                title={reel.title}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <RiseIn delay={0.8} className="text-center mt-12">
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              ¿Listo para crear contenido viral?
            </h3>
            <p className="text-muted mb-6">
              Cada video está pensado estratégicamente para maximizar el alcance 
              y generar conversación alrededor de tu marca.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Crear Mi Contenido
            </motion.button>
          </div>
        </RiseIn>
      </div>
    </section>
  )
}

export default ReelsShowcase
