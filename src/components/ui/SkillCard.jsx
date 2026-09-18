import { motion, useReducedMotion } from 'framer-motion'

export function SkillCard({ name, description, icon: Icon }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group rounded-xl border border-border bg-surface/60 p-5 hover:border-accent/50 hover:shadow-glow transition-[border-color,box-shadow] duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="grid place-items-center w-10 h-10 rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
          <Icon size={18} />
        </div>
        <h3 className="font-medium">{name}</h3>
      </div>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </motion.div>
  )
}
