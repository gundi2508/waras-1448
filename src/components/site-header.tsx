import { ArrowDownRight, Heart } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-5 pt-5 text-white sm:px-8 sm:pt-7">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex max-w-7xl items-center justify-center"
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 rounded-full text-base font-semibold tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sun sm:text-lg"
          aria-label="Waras Mubarak — back to the beginning"
        >
          <span className="grid size-9 place-items-center rounded-full border border-white/30 bg-white/10">
            <Heart className="size-4 fill-current" aria-hidden="true" />
          </span>
          <span className="text-base sm:text-3xl">A little album of us</span>
        </a>

        <a
          href="#everyday"
          className="sr-only focus:not-sr-only focus:absolute focus:right-6 focus:top-16 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to memories <ArrowDownRight className="inline size-4" />
        </a>
      </nav>
    </header>
  );
}
