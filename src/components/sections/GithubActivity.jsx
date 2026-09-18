import { useEffect, useState } from "react";
import { GitBranch, FolderGit2, Star, ArrowUpRight } from "lucide-react";

import { siteConfig } from "../../data/config.js";
import { SectionHeading } from "../ui/SectionHeading.jsx";
import { RevealOnScroll } from "../ui/RevealOnScroll.jsx";
import { followValue } from "framer-motion";

export function GithubActivity() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    async function fetchGithub() {
      const response = await fetch(
        "https://api.github.com/users/akshatvofficial",
      );

      const data = await response.json();

      setGithubData(data);
    }

    fetchGithub();
  }, []);

  if (!githubData) {
    return <p>Loading...</p>;
  }

  const stats = [
    {
      label: "Public repos",
      icon: FolderGit2,
      value: githubData.public_repos,
    },

    {
      label: "Followers",
      icon: GitBranch,
      value: githubData.followers,
    },
    {
      label: "Following",
      icon: Star,
      value: githubData.following
    },
  ];
  return (
    <section id="github" className="scroll-mt-20 py-24 sm:py-32">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="GitHub activity"
          description="Live stats aren't wired up yet — connect the GitHub API here, or just check the profile directly."
        />

        <RevealOnScroll className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-6">
            {stats.map(({ label, icon: Icon, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="grid place-items-center w-10 h-10 rounded-lg bg-accent/10 text-accent shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-display font-semibold text-xl">{value}</p>
                  <p className="text-xs text-muted">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
            <p className="text-sm text-muted">
              Projects stay the source of truth — this section is just a
              shortcut.
            </p>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors shrink-0"
            >
              View GitHub profile
              <ArrowUpRight size={14} />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
