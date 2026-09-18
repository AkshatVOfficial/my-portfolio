import { GitBranch, Briefcase, Mail } from "lucide-react";

// ---------------------------------------------------------------------
// Everything personal lives here. Change your name, links, and blurbs
// in this one file and the whole site updates.
// ---------------------------------------------------------------------

export const siteConfig = {
  name: "Akshat",

  role: "Frontend Developer",

  heroStatement:
    "I build interactive web experiences while turning what I learn into real projects.",

  heroParagraph:
    "I'm a self-taught frontend developer focused on JavaScript and React. I learn by building — starting with small experiments and gradually working my way toward larger, more practical applications. I care about understanding how things work, not just making them work.",

  aboutParagraphs: [
    "My interest in coding started early, with my first exposure to Java and DBMS in school. I later explored Python, but it wasn't until 2025 that I decided to seriously pursue web development.",

    "I started with HTML and CSS, then moved into JavaScript and built project after project — from games and calculators to API-driven applications like a weather app, currency converter, expense tracker, and GitHub profile finder. Building these projects helped me move beyond beginner-level JavaScript and develop a stronger understanding of how real applications work.",

    "I'm currently learning React and using it to take my frontend skills further. My next step is backend development and databases, with the long-term goal of becoming capable of building complete applications from frontend to backend.",
  ],

  email: "akshatvofficial@gmail.com",

  github: "https://github.com/akshatvofficial",

  linkedin: "https://linkedin.com/in/akshatverma271/",

  location: "Uttar Pradesh, India",

  focusArea: "Full-stack web development",

  currentlyLearning: "React",

  availability: "Open to opportunities",
};

export const socialLinks = [
  { label: "GitHub", url: siteConfig.github, icon: GitBranch },

  { label: "LinkedIn", url: siteConfig.linkedin, icon: Briefcase },

  { label: "Email", url: `mailto:${siteConfig.email}`, icon: Mail },
];

export const navLinks = [
  { label: "Home", href: "#home" },

  { label: "About", href: "#about" },

  { label: "Skills", href: "#skills" },

  { label: "Projects", href: "#projects" },

  { label: "Journey", href: "#journey" },

  { label: "Contact", href: "#contact" },
];
