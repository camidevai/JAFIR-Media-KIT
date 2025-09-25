import { useState, useEffect, useRef } from 'react'

interface SimpleCounterProps {
  end: number
  delay?: number
  suffix?: string
  className?: string
}

const SimpleCounter = ({ 
  end, 
  delay = 0, 
  suffix = '', 
  className = '' 
}: SimpleCounterProps) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          
          setTimeout(() => {
            let current = 0
            const increment = end / 50
            
            const interval = setInterval(() => {
              current += increment
              if (current >= end) {
                setCount(end)
                clearInterval(interval)
              } else {
                setCount(Math.floor(current))
              }
            }, 30)
          }, delay)
          
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, delay, hasStarted])

  const formatDisplay = (num: number): string => {
    if (num === end) {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'
      } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K'
      }
    }
    return num.toLocaleString()
  }

  const displayValue = suffix === '%' ? `${count}%` : formatDisplay(count) + suffix

  return (
    <div ref={ref} className={className}>
      <span className="tabular-nums">{displayValue}</span>
    </div>
  )
}

export default SimpleCounter
