import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RiseInProps {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
}

const RiseIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  distance = 30, 
  className = '' 
}: RiseInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default RiseIn
