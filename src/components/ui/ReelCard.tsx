import { motion } from 'framer-motion'
import { Play, Eye } from 'lucide-react'
import SimpleCounter from './SimpleCounter'

interface ReelCardProps {
  views: number
  title?: string
  thumbnail: string
  url: string
  className?: string
}

const ReelCard = ({ views, title, thumbnail, url, className = '' }: ReelCardProps) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      onClick={handleClick}
      className={`relative group cursor-pointer overflow-hidden rounded-2xl ${className}`}
    >
      <div className="aspect-[4/5] bg-gradient-to-br from-card to-bg relative overflow-hidden">
        {/* Video thumbnail */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20">
          <img
            src={thumbnail}
            alt={title || "Reel viral de Jafir Torres"}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="bg-white/20 backdrop-blur-sm rounded-full p-4"
          >
            <Play className="text-white" size={32} />
          </motion.div>
        </div>

        {/* Views badge */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
          <Eye size={16} className="text-white" />
          <SimpleCounter
            end={views}
            delay={100}
            className="text-white text-sm font-semibold"
          />
        </div>

        {/* Title overlay */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-white font-semibold text-sm">{title}</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ReelCard
