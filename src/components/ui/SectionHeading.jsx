import { RevealOnScroll } from './RevealOnScroll.jsx'

export function SectionHeading({ title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <RevealOnScroll className={`flex flex-col gap-4 mb-12 md:mb-16 max-w-2xl ${alignment}`}>
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-tight text-balance">{title}</h2>
      {description && <p className="text-muted text-base sm:text-lg leading-relaxed text-balance">{description}</p>}
    </RevealOnScroll>
  )
}
