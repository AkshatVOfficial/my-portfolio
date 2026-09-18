import { siteConfig, socialLinks } from "../../data/config.js";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-16 rounded-full object-cover object-center"
        />
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-display font-semibold">
            <span className="font-mono text-accent">&lt;</span>
            {siteConfig.name}
            <span className="font-mono text-accent"> /&gt;</span>
          </span>
          <p className="text-sm text-muted">Building things for the web.</p>
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, url, icon: Icon }) => (
            <a
              key={label}
              href={url}
              target={url.startsWith("http") ? "_blank" : undefined}
              rel={url.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="grid place-items-center w-10 h-10 rounded-full border border-border text-muted hover:text-accent hover:border-accent/50 transition-colors"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center sm:items-end gap-1 text-sm text-muted">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p>Built with React & ☕</p>
        </div>
      </div>
    </footer>
  );
}
