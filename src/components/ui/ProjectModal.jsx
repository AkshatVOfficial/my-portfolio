import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { X, GitBranch, ArrowUpRight } from 'lucide-react'

const FIELDS = [
  { key: 'problem', label: 'Problem' },
  { key: 'solution', label: 'Solution' },
  { key: 'challenges', label: 'Challenges' },
  { key: 'results', label: 'Results' },
]

export function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    closeButtonRef.current?.focus()

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const Cover = project.coverIcon

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[70] grid place-items-center p-4"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-surface shadow-glow"
      >
        <div className="sticky top-0 flex items-center justify-between gap-4 px-6 py-4 border-b border-border bg-surface/95 backdrop-blur">
          <h3 id="project-modal-title" className="font-display font-semibold text-xl flex items-center gap-2">
            <Cover size={20} className="text-accent" />
            {project.title}
          </h3>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="grid place-items-center w-9 h-9 rounded-full border border-border hover:border-accent/50 hover:text-accent transition-colors shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-6">
          <p className="text-muted leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-background border border-border text-muted">
                {tech}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {FIELDS.map(({ key, label }) => (
              <div key={key}>
                <h4 className="text-sm font-medium text-accent mb-1.5">{label}</h4>
                <p className="text-sm text-muted leading-relaxed">{project.details[key]}</p>
              </div>
            ))}
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className="flex items-center gap-4 pt-2 border-t border-border">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm hover:text-accent transition-colors"
                >
                  <GitBranch size={15} /> View code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm hover:text-accent transition-colors"
                >
                  <ArrowUpRight size={15} /> Live demo
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
