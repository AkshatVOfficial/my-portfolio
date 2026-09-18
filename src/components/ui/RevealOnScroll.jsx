import { motion, useReducedMotion } from 'framer-motion'

/**
 * Wraps a section/block so it fades and rises into place once, the first
 * time it enters the viewport. One consistent recipe used everywhere so
 * the motion reads as a system, not a per-section flourish.
 */
export function RevealOnScroll({ children, delay = 0, y = 20, className = '', as = 'div' }) {
  const shouldReduceMotion = useReducedMotion()
  const Component = motion[as] ?? motion.div

  if (shouldReduceMotion) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  )
}
