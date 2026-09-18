import { exploring } from '../../data/exploring.js'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { RevealOnScroll } from '../ui/RevealOnScroll.jsx'

export function Exploring() {
  return (
    <section id="exploring" className="scroll-mt-20 py-24 sm:py-32">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What I'm exploring" description="The stack keeps growing — here's what's currently in progress." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exploring.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-xl border border-border bg-surface/60 p-5 flex flex-col gap-3 hover:border-accent/50 transition-colors duration-300">
                <div className="grid place-items-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                  <item.icon size={18} />
                </div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
