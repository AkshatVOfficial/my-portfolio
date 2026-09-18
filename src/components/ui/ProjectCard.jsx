import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";

export function ProjectCard({ project, onOpen }) {
  const shouldReduceMotion = useReducedMotion();
  const Cover = project.coverIcon;

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group rounded-2xl border border-border bg-surface/60 overflow-hidden hover:border-accent/50 hover:shadow-glow transition-[border-color,box-shadow] duration-300 flex flex-col"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="text-left flex flex-col flex-1"
        aria-haspopup="dialog"
      >
        <div className="relative aspect-video overflow-hidden bg-background">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5 flex flex-col gap-3 flex-1">
          <h3 className="font-display font-semibold text-lg flex items-center gap-1.5">
            {project.title}
            <ArrowUpRight
              size={16}
              className="text-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            {project.description}
          </p>
        </div>
      </button>

      <div className="px-5 pb-5 flex flex-col gap-4 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full bg-background border border-border text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="flex items-center gap-4 text-sm">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
              >
                <GitBranch size={14} /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
              >
                <ArrowUpRight size={14} /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
