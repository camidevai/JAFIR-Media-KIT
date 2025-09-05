import { motion } from 'framer-motion'
import { Video, Mic, Users } from 'lucide-react'
import RiseIn from '../motion/RiseIn'
import ScaleIn from '../motion/ScaleIn'

const About = () => {
  const features = [
    {
      icon: <Video size={32} />,
      title: 'Productora Audiovisual',
      description: 'Experiencia técnica con mi hermano en Playmedia. Calidad profesional garantizada.'
    },
    {
      icon: <Mic size={32} />,
      title: 'Experto en Eventos',
      description: 'Ex-manager de artistas locales. Sé cómo manejar público y crear momentos memorables.'
    },
    {
      icon: <Users size={32} />,
      title: 'Humor Situacional',
      description: 'Interacción espontánea con personas reales. Contenido auténtico que conecta.'
    }
  ]

  const achievements = [
    { number: '976K', label: 'Views mensuales IG' },
    { number: '17.4M', label: 'Views TikTok 8 semanas' },
    { number: '50+', label: 'Marcas trabajadas' },
    { number: '95%', label: 'Clientes satisfechos' }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-0 w-2 h-32 bg-gradient-to-b from-accent to-transparent"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-0 w-2 h-32 bg-gradient-to-t from-primary to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RiseIn className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Experiencia que <span className="text-gradient">Respalda</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Productora audiovisual con experiencia técnica. Experto en producción de eventos 
            y ex-manager de artistas locales. Humor situacional + experiencia técnica = campañas que venden.
          </p>
        </RiseIn>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScaleIn key={index} delay={index * 0.2}>
              <div className="card-glass p-8 text-center h-full">
                <div className="text-accent mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text mb-4">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            </ScaleIn>
          ))}
        </div>

        {/* Achievements */}
        <RiseIn delay={0.6}>
          <div className="card-glass p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </RiseIn>

        {/* Personal touch */}
        <RiseIn delay={0.8} className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl font-medium text-text italic mb-6">
              "No solo hago reír, creo conexiones reales entre tu marca y las personas. 
              Cada sketch, cada interacción está pensada para generar conversación y ventas."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                <img
                  src="https://subir-imagen.com/images/2025/09/04/Imagen-de-WhatsApp-2025-08-31-a-las-15.26.25_071b1460.jpg"
                  alt="Jafir Torres"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-text">Jafir Torres</div>
                <div className="text-muted">Creador de Contenido & Productor</div>
              </div>
            </div>
          </div>
        </RiseIn>
      </div>
    </section>
  )
}

export default About
