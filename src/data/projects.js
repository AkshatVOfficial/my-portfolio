import {
  Orbit,
  Aperture,
  FolderSearch,
  ListChecks,
  Wallet,
  MoveIcon,
  WalletCards,
  Calculator,
} from "lucide-react";
import { list } from "postcss";

// Add or remove projects freely — every card on the Projects section
// is generated from this array. githubUrl / liveUrl are optional:
// leave them out (or empty) and that button just won't render.
export const projects = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A practical expense management app for tracking spending, organizing expenses by category, and keeping an eye on overall finances.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    coverImage: "/images/expense_tracker.png",
    coverIcon: Wallet,
    githubUrl: "https://github.com/AkshatVOfficial/expenseTracker",
    liveUrl: "https://akshatvofficial.github.io/expenseTracker/",
    details: {
      problem:
        "Wanted a simple way to record and manage everyday expenses without relying on a complicated finance application.",
      solution:
        "Built an interactive expense tracker that lets users add, edit, and delete expenses, organize them into categories, and keep track of income, expenses, and the remaining balance.",
      challenges:
        "Managing application data and keeping the interface synchronized as expenses are added, edited, or removed while also persisting the data between sessions.",
      results:
        "A responsive personal finance tool with expense management, categorization, balance calculations, and persistent local data.",
    },
  },

  {
    id: "github-profile-finder",
    title: "GitHub Profile Finder",
    description:
      "Search any GitHub user, browse their repos, and save favorites — with a full theme and accent-color system.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub API"],
    coverImage: "/images/github_finder.png",
    coverIcon: WalletCards,
    githubUrl: "https://github.com/AkshatVOfficial/expenseTracker",
    liveUrl: "https://akshatvofficial.github.io/github-profile-finder/",
    details: {
      problem:
        "Wanted a fast, no-framework way to explore GitHub profiles and repositories without leaving a single page.",
      solution:
        "A vanilla JavaScript app that queries the GitHub REST API for user and repo data, with pagination, a recent-searches list, and favoriting.",
      challenges:
        "Building a full light/dark theme system with a selectable accent color — purple, blue, green, yellow, orange, red, or pink — all persisted, using only CSS variables and localStorage, no framework.",
      results:
        "A fully responsive, themeable GitHub explorer with working search, pagination, favorites, and persisted preferences.",
    },
  },
  {
    id: "calculator",

    title: "Calculator",

    description:
      "A responsive calculator with a customizable theme system that lets users change the interface color to match their preference.",

    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    coverImage: "/images/calculator.png",
    coverIcon: Calculator,

    githubUrl: "https://github.com/AkshatVOfficial/ezCalculator",

    liveUrl: "https://akshatvofficial.github.io/ezCalculator/",

    details: {
      problem:
        "Wanted to build more than a basic calculator by combining functional calculations with a more interactive and personalized interface.",

      solution:
        "Built a fully functional calculator with JavaScript-powered calculations and a theme system that allows users to switch between different interface colors.",

      challenges:
        "Managing calculator logic while keeping the UI state synchronized with the selected theme and making the interface responsive across different screen sizes.",

      results:
        "A responsive calculator with working arithmetic operations, customizable color themes, and persistent user preferences.",
    },
  },
  {
    id: "todo-list",
    title: "Todo List",
    description:
      "A task management application for creating, editing, completing, and organizing everyday tasks.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    coverImage: "/images/todo_list.png",
    coverIcon: ListChecks,
    githubUrl: "https://github.com/AkshatVOfficial/taskFlow",
    liveUrl: "https://akshatvofficial.github.io/taskFlow/",
    details: {
      problem:
        "Wanted a simple but practical project to understand how application state changes as users continuously interact with a list of tasks.",
      solution:
        "Built a task manager that lets users add, edit, delete, and complete tasks, with filtering and persistent storage so tasks remain available between sessions.",
      challenges:
        "Keeping task state consistent across multiple interactions and synchronizing changes with LocalStorage.",
      results:
        "A responsive task management application with full task CRUD operations, completion tracking, filtering, and persistent data.",
    },
  },
];
