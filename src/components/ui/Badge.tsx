import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'primary'
  className?: string
}

const Badge = ({ children, variant = 'default', className = '' }: BadgeProps) => {
  const variantClasses = {
    default: 'bg-card/80 text-text border-accent/30',
    accent: 'bg-accent/20 text-accent border-accent/50',
    primary: 'bg-primary/20 text-primary border-primary/50'
  }

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.span>
  )
}

export default Badge
