import { motion } from 'framer-motion'
import { Camera, Mic } from 'lucide-react'
import PricingCard from '../ui/PricingCard'
import RiseIn from '../motion/RiseIn'

const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const services = [
    {
      title: 'Sketch de humor + actuación',
      bullets: [
        'Guion corto a medida para tu marca',
        'Grabación profesional + edición',
        'Entrega en formato 9:16 y 1:1',
        'Revisiones incluidas',
        'Entrega en 3-5 días hábiles'
      ],
      cta: 'Reservar Sketch',
      icon: <Camera size={32} />,
      featured: false
    },
    {
      title: 'Interacción en la calle con bromas',
      bullets: [
        'Dinámica con público real',
        'Integración natural de marca',
        'Micrófono y dinámica viral',
        'Contenido auténtico y espontáneo',
        'Mayor engagement garantizado'
      ],
      cta: 'Reservar Interacción',
      icon: <Mic size={32} />,
      featured: true
    }
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: 'url(https://subir-imagen.com/images/2025/09/04/703dfcc7-b5e2-4dc2-a69e-b794a5ab27e5.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/70 to-bg/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      </div>

      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 w-32 h-32 border border-accent/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 left-10 w-24 h-24 border border-primary/20 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RiseIn className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Servicios que <span className="text-gradient">Convierten</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Hago reír a tu público y pongo tu marca en la conversación. 
            Medible, rápido y sin rodeos.
          </p>
        </RiseIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <PricingCard
                title={service.title}
                bullets={service.bullets}
                cta={service.cta}
                featured={service.featured}
                onCtaClick={scrollToContact}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <RiseIn delay={0.6} className="text-center mt-12">
          <div className="card-glass p-6 max-w-2xl mx-auto">
            <p className="text-muted">
              <span className="text-accent font-semibold">Garantía:</span> Si el contenido no genera 
              el engagement esperado, trabajamos juntos hasta lograrlo. 
              <span className="text-primary font-semibold"> Respuesta en 24h.</span>
            </p>
          </div>
        </RiseIn>
      </div>
    </section>
  )
}

export default Services
