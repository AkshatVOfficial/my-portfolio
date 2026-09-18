import { achievements } from '../../data/achievements.js'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { RevealOnScroll } from '../ui/RevealOnScroll.jsx'

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 py-24 sm:py-32">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Highlights" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, index) => (
            <RevealOnScroll key={item.label} delay={index * 0.06}>
              <div
                className={`h-full rounded-xl border p-5 flex flex-col gap-3 ${
                  item.placeholder ? 'border-dashed border-border/70' : 'border-border bg-surface/60'
                }`}
              >
                <div className="grid place-items-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                  <item.icon size={18} />
                </div>
                <p className="font-display font-semibold text-2xl">{item.value}</p>
                <div>
                  <p className="text-sm font-medium mb-1">{item.label}</p>
                  <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
