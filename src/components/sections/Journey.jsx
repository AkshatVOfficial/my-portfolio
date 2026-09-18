import { journey } from '../../data/journey.js'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { RevealOnScroll } from '../ui/RevealOnScroll.jsx'

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-20 py-24 sm:py-32">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My journey" description="How the stack grew, roughly in order." />

        <div className="relative max-w-2xl">
          <div className="absolute left-[5px] top-1 bottom-1 w-px bg-border" aria-hidden="true" />

          <ol className="flex flex-col gap-10">
            {journey.map((milestone, index) => (
              <RevealOnScroll key={milestone.title} delay={index * 0.08} as="li" className="relative pl-8">
                <span className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full bg-accent ring-[5px] ring-background" />
                <p className="font-mono text-xs text-accent mb-1.5">{milestone.year}</p>
                <h3 className="font-display font-semibold text-lg mb-1.5">{milestone.title}</h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed max-w-lg">{milestone.description}</p>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
