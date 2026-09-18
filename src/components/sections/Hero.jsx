import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig, socialLinks } from "../../data/config.js";
import { HeroVisual } from "./HeroVisual.jsx";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? {}
    : { initial: "hidden", animate: "visible", variants: container };
  const itemMotionProps = shouldReduceMotion ? {} : { variants: item };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-x-hidden"
    >
      <div className="max-w-content w-full mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div {...motionProps} className="flex flex-col gap-6 min-w-0">
          <motion.span
            {...itemMotionProps}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted"
          >
            👋 Hello, I&rsquo;m
          </motion.span>

          <motion.h1
            {...itemMotionProps}
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold tracking-tight leading-[1.05]"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            {...itemMotionProps}
            className="text-lg sm:text-xl text-accent font-medium font-display"
          >
            {siteConfig.role}
          </motion.p>

          <motion.p
            {...itemMotionProps}
            className="text-xl sm:text-2xl text-foreground/90 max-w-xl text-balance"
          >
            {siteConfig.heroStatement}
          </motion.p>

          <motion.p
            {...itemMotionProps}
            className="text-muted text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {siteConfig.heroParagraph}
          </motion.p>

          <motion.div
            {...itemMotionProps}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground font-medium px-6 py-3 hover:opacity-90 transition-opacity"
            >
              View my work
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium hover:border-accent/50 hover:text-accent transition-colors"
            >
              Contact me
            </a>
          </motion.div>

          <motion.div
            {...itemMotionProps}
            className="flex items-center gap-3 mt-2"
          >
            {socialLinks.map(({ label, url, icon: Icon }) => (
              <a
                key={label}
                href={url}
                target={url.startsWith("http") ? "_blank" : undefined}
                rel={url.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="grid place-items-center w-11 h-11 rounded-full border border-border text-muted hover:text-accent hover:border-accent/50 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="min-w-0"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
