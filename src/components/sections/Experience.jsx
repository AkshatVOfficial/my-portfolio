import { experience } from '../../data/experience.js'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { RevealOnScroll } from '../ui/RevealOnScroll.jsx'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24 sm:py-32">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience & journey" description="Freelance work, personal projects, and what's next." />

        <div className="flex flex-col gap-4">
          {experience.map((entry, index) => (
            <RevealOnScroll key={entry.role} delay={index * 0.06}>
              <div className="rounded-xl border-l-2 border-accent bg-surface/60 border border-border p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                  <h3 className="font-display font-semibold text-lg">{entry.role}</h3>
                  <span className="text-xs font-mono text-muted">{entry.date}</span>
                </div>
                <p className="text-sm text-accent mb-3">{entry.organization}</p>
                <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">{entry.description}</p>
                {entry.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {entry.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-background border border-border text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
