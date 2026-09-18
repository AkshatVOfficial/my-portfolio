import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { projects } from '../../data/projects.js'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { RevealOnScroll } from '../ui/RevealOnScroll.jsx'
import { ProjectCard } from '../ui/ProjectCard.jsx'
import { ProjectModal } from '../ui/ProjectModal.jsx'

export function Projects() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section id="projects" className="scroll-mt-20 py-24 sm:py-32">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Things I've built" description="A few projects, picked for range rather than volume — tap any card for details." />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 0.06}>
              <ProjectCard project={project} onOpen={setSelected} />
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
