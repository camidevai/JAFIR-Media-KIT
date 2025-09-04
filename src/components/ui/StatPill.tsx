import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface StatPillProps {
  icon: ReactNode
  value: string
  label: string
  className?: string
}

const StatPill = ({ icon, value, label, className = '' }: StatPillProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className={`card-glass p-4 flex items-center gap-3 ${className}`}
    >
      <div className="text-accent">
        {icon}
      </div>
      <div>
        <div className="text-xl font-bold text-gradient">{value}</div>
        <div className="text-sm text-muted">{label}</div>
      </div>
    </motion.div>
  )
}

export default StatPill
