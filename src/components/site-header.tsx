import { ArrowDownRight, Compass } from "lucide-react";

const links = [
  { href: "#everyday", label: "Our days" },
  { href: "#wedding", label: "The wedding" },
  { href: "#letter", label: "A note" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-5 pt-5 text-white sm:px-8 sm:pt-7">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-5"
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 rounded-full text-sm font-semibold tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sun"
          aria-label="Waras Mubarak — back to the beginning"
        >
          <span className="grid size-9 place-items-center rounded-full border border-white/30 bg-white/10">
            <Compass className="size-4" aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">A little album of us</span>
        </a>

        <div className="flex items-center gap-1 rounded-full border border-white/15 bg-ink/35 p-1 backdrop-blur-md sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full px-3 text-xs font-medium text-white transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun sm:px-4 sm:text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#everyday"
            className="sr-only focus:not-sr-only focus:absolute focus:right-6 focus:top-16 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
          >
            Skip to memories <ArrowDownRight className="inline size-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
