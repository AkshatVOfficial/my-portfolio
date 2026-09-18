import { skillCategories } from '../../data/skills.js'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { RevealOnScroll } from '../ui/RevealOnScroll.jsx'
import { SkillCard } from '../ui/SkillCard.jsx'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24 sm:py-32">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Tools I work with" description="The languages, frameworks, and tools I reach for most." />

        <div className="flex flex-col gap-12">
          {skillCategories.map((group, groupIndex) => (
            <div key={group.category}>
              <RevealOnScroll delay={groupIndex * 0.05} className="text-sm font-medium text-muted mb-4">
                {group.category}
              </RevealOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {group.skills.map((skill, index) => (
                  <RevealOnScroll key={skill.name} delay={groupIndex * 0.05 + index * 0.04}>
                    <SkillCard {...skill} />
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
