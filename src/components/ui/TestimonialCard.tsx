import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  avatar?: string
}

const TestimonialCard = ({ name, role, content, rating, avatar }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="card-glass p-6 h-full"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-accent fill-current' : 'text-muted'}
          />
        ))}
      </div>
      
      <p className="text-text mb-6 italic">"{content}"</p>
      
      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-bg font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold text-text">{name}</div>
          <div className="text-sm text-muted">{role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
