import {
  FileCode2,
  Palette,
  Braces,
  Atom,
  Wind,
  Zap,
  Box,
  Boxes,
  Sparkles,
  Terminal,
  ScanEye,
  GitBranch,
  MonitorSmartphone,
  Cpu,
} from "lucide-react";

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      {
        name: "HTML",
        description: "Semantic, accessible markup as the foundation.",
        icon: FileCode2,
      },
      {
        name: "CSS",
        description: "Layout, animation, and design systems by hand.",
        icon: Palette,
      },
      {
        name: "JavaScript",
        description: "The language underneath everything I build.",
        icon: Braces,
      },
      {
        name: "React",
        description: "Component-based interactive interfaces.",
        icon: Atom,
      },
      {
        name: "Tailwind CSS",
        description: "Fast, consistent styling without leaving markup.",
        icon: Wind,
      },
      {
        name: "Vite",
        description: "Instant dev server, fast production builds.",
        icon: Zap,
      },
    ],
  },
  {
    category: "Tools & Workflow",

    skills: [
      {
        name: "Git",
        description:
          "Version control for managing changes and keeping projects organized.",
        icon: GitBranch,
      },

      {
        name: "GitHub",
        description:
          "Hosting repositories, tracking projects, and sharing my work.",
        icon: MonitorSmartphone,
      },

      {
        name: "Linux",
        description:
          "Fedora as my development environment for everyday coding and web development.",
        icon: Cpu,
      },
    ],
  },
];
