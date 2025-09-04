import { motion } from 'framer-motion'
import { Instagram, TrendingUp } from 'lucide-react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import StatPill from '../ui/StatPill'
import RiseIn from '../motion/RiseIn'
import Stagger from '../motion/Stagger'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-bg"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <RiseIn delay={0.2}>
              <Badge variant="accent" className="mb-4">
                Creador de Contenido Viral
              </Badge>
            </RiseIn>

            <Stagger staggerDelay={0.1}>
              <h1 className="heading-xl text-gradient leading-tight">
                HUMOR QUE VENDE,
                <br />
                CALLE QUE CONECTA
              </h1>
              
              <p className="text-xl text-muted max-w-lg leading-relaxed">
                Sketches + Interacciones reales para marcas con impacto inmediato. 
                Contenido real, en la calle, donde está la gente.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <StatPill
                  icon={<Instagram size={24} />}
                  value="976K"
                  label="IG Views/90d"
                />
                <StatPill
                  icon={<TrendingUp size={24} />}
                  value="17.4M"
                  label="TikTok Views/8sem"
                />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={scrollToContact}
                >
                  Reservar Sketch
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={scrollToContact}
                >
                  Interacción en la Calle
                </Button>
              </div>
            </Stagger>
          </div>

          {/* Image */}
          <RiseIn delay={0.4} className="lg:order-first">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-card to-bg rounded-3xl p-8 neon-border">
                  <div className="aspect-[3/4] bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center">
                    {/* Placeholder for user photo */}
                    <div className="text-8xl font-heading text-gradient">JT</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </RiseIn>
        </div>
      </div>
    </section>
  )
}

export default Hero
