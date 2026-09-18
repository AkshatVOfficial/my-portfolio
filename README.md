# Akshat — Portfolio

A dark-first, animated developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and a touch of React Three Fiber.

## Running it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

Requires Node 18+.

## Where to edit your info

Everything personal lives in `src/data/`, so you shouldn't need to touch component code to update content:

| File | What it controls |
| --- | --- |
| `src/data/config.js` | Name, role, hero copy, about paragraphs, email, GitHub/LinkedIn URLs, location, nav links |
| `src/data/projects.js` | Project cards + the detail modal (problem/solution/challenges/results) |
| `src/data/skills.js` | Skill categories and cards |
| `src/data/journey.js` | The "My Journey" timeline |
| `src/data/experience.js` | The "Experience & Journey" list |
| `src/data/achievements.js` | The compact achievement/stat cards |
| `src/data/exploring.js` | "What I'm Exploring" cards |

A few things were deliberately left as placeholders rather than invented — search for `[` in `src/data/` to find them (email, LinkedIn URL, a couple of experience entries).

## Things to hook up before it's fully live

- **Contact form** — `src/components/sections/Contact.jsx` validates input but doesn't send anywhere yet (there's no backend). Wire up something like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) in `handleSubmit`.
- **Project links** — `githubUrl` / `liveUrl` in `src/data/projects.js` are empty, so those buttons are hidden. Add real URLs and they'll appear automatically.
- **GitHub stats** — `src/components/sections/GithubActivity.jsx` is a static placeholder by design (no fabricated numbers). Wire it up to the GitHub REST API if you want live stats.
- **Social preview image** — `index.html` references `/og-image.png` (1200x630) for link previews. Drop one into `public/`.
- **Profile "photo"** — `About.jsx` uses a generated monogram instead of a real photo. Swap it for an `<img>` if you'd like.

## Design system

Colors are CSS variables in `src/index.css` (`--color-background`, `--color-accent`, etc.) — dark is the default, and adding `.light` to `<html>` (handled automatically by the theme toggle) swaps every token at once. Change the values there to retheme the whole site.

Fonts are self-hosted via `@fontsource` (Space Grotesk for display type, Manrope for body text, JetBrains Mono for code) — no external font requests at runtime.

## Notes

- The 3D shape behind the hero code window only loads on tablet-width screens and up, and is lazy-loaded so it never blocks the initial page load.
- All motion respects `prefers-reduced-motion`.
