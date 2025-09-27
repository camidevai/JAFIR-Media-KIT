import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from './Button'

interface PricingCardProps {
  title: string
  bullets: string[]
  cta: string
  featured?: boolean
  onCtaClick?: () => void
}

const PricingCard = ({
  title,
  bullets,
  cta,
  featured = false,
  onCtaClick
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`card-glass p-8 relative overflow-hidden ${
        featured ? 'neon-border scale-105' : ''
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary"></div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="heading-md mb-4">{title}</h3>
      </div>

      <ul className="space-y-3 mb-8">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="text-accent flex-shrink-0" size={20} />
            <span className="text-text">{bullet}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={featured ? 'primary' : 'secondary'}
        className="w-full"
        onClick={onCtaClick}
      >
        {cta}
      </Button>
    </motion.div>
  )
}

export default PricingCard
