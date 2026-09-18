import { lazy, Suspense, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext.jsx";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

// three.js + @react-three/fiber are the heaviest deps in this project —
// load them lazily so they never block the initial page paint.
const HeroScene3D = lazy(() => import("../three/HeroScene3D.jsx"));

const ACCENT_BY_THEME = { dark: "#9D6FFF", light: "#7C4FE0" };

const CODE_LINES = [
  {
    n: 1,
    content: (
      <>
        <span className="text-accent">const</span>{" "}
        <span className="text-foreground">developer</span>{" "}
        <span className="text-muted">=</span>{" "}
        <span className="text-muted">{"{"}</span>
      </>
    ),
  },
  {
    n: 2,
    content: (
      <>
        {"  "}
        <span className="text-sky-300">name</span>
        <span className="text-muted">:</span>{" "}
        <span className="text-emerald-300">"Akshat"</span>
        <span className="text-muted">,</span>
      </>
    ),
  },
  {
    n: 3,
    content: (
      <>
        {"  "}
        <span className="text-sky-300">skills</span>
        <span className="text-muted">:</span>{" "}
        <span className="text-muted">[</span>
        <span className="text-emerald-300">"React"</span>
        <span className="text-muted">, </span>
        <span className="text-emerald-300">"Three.js"</span>
        <span className="text-muted">, </span>
        <span className="text-emerald-300">"Python"</span>
        <span className="text-muted">],</span>
      </>
    ),
  },
  {
    n: 4,
    content: (
      <>
        {"  "}
        <span className="text-sky-300">passion</span>
        <span className="text-muted">:</span>{" "}
        <span className="text-emerald-300">"Building interactive things"</span>
        <span className="text-muted">,</span>
      </>
    ),
  },
  { n: 5, content: <span className="text-muted">{"};"}</span> },
];

export function HeroVisual() {
  const wrapperRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const showScene3D = useMediaQuery("(min-width: 768px)");

  return (
    <div
      ref={wrapperRef}
      className="relative w-full aspect-square max-w-md mx-auto"
    >
      {showScene3D && (
        <div className="absolute inset-0 -m-12 sm:-m-16">
          <Suspense fallback={null}>
            <HeroScene3D
              eventSource={wrapperRef}
              color={ACCENT_BY_THEME[theme]}
              reducedMotion={shouldReduceMotion}
            />
          </Suspense>
        </div>
      )}

      <div className="relative animate-float">
        <div className="rounded-2xl border border-border glass shadow-glow overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 text-xs text-muted font-mono">
              developer.js
            </span>
          </div>

          <div className="px-5 py-6 font-mono text-[13px] sm:text-sm leading-relaxed overflow-x-auto">
            {CODE_LINES.map((line) => (
              <div key={line.n} className="flex gap-4 whitespace-pre">
                <span className="text-muted/50 select-none w-3 text-right shrink-0">
                  {line.n}
                </span>
                <span>{line.content}</span>
              </div>
            ))}
            <div className="flex gap-4 whitespace-pre-wrap break-words">
              <span className="text-muted/50 select-none w-3 text-right shrink-0">
                6
              </span>
              <span
                className="inline-block w-[7px] h-[15px] bg-accent/70 animate-pulse"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
