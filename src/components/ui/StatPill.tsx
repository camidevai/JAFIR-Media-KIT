import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import SimpleCounter from './SimpleCounter'

interface StatPillProps {
  icon: ReactNode
  value: number
  label: string
  suffix?: string
  className?: string
}

const StatPill = ({ icon, value, label, suffix = '', className = '' }: StatPillProps) => {
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
        <SimpleCounter
          end={value}
          delay={300}
          suffix={suffix}
          className="text-xl font-bold text-gradient"
        />
        <div className="text-sm text-muted">{label}</div>
      </div>
    </motion.div>
  )
}

export default StatPill
