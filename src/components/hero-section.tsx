import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FloatingCelebrations } from "@/components/floating-celebrations";
import { heroPhoto, siteContent } from "@/content/site";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[720px] overflow-clip bg-ink text-white sm:min-h-[780px]"
    >
      <FloatingCelebrations />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_82%,rgba(107,155,145,0.28),transparent_42%),linear-gradient(115deg,#102d32_10%,#17464a_68%,#1d5352)]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-36 top-40 -z-10 size-[30rem] rounded-full border border-white/10 sm:size-[42rem]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 top-56 -z-10 size-[22rem] rounded-full border border-white/10 sm:size-[34rem]"
        aria-hidden="true"
      />

      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 pb-20 pt-32 sm:min-h-[780px] sm:px-8 sm:pb-24 sm:pt-36 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
        <div className="relative z-10 max-w-xl">
          <Badge className="mb-7 gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.2em] text-sand uppercase hover:bg-white/10">
            <Sparkles className="size-3.5 text-sun" aria-hidden="true" />
            A day made for you
          </Badge>
          <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-[#c5d5c9] uppercase">
            For {siteContent.recipient}
          </p>
          <h1 className="font-editorial text-[clamp(4rem,10vw,7.8rem)] leading-[0.86] tracking-[-0.045em] text-paper">
            Waras
            <br />
            Mubarak
            <span className="ml-2 text-sun">.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            {siteContent.heroMessage}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
              <MapPin className="size-4 text-sun" aria-hidden="true" />
              {siteContent.birthdayDate}
            </span>
            <span className="text-xs tracking-wide">A collection of our days</span>
          </div>
          <a
            href="#everyday"
            className="mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-sun px-6 text-sm font-semibold text-ink shadow-lg shadow-black/15 transition-colors hover:bg-[#e2b45f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sun"
          >
            Wander through our memories
            <ArrowDown className="ml-2 size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-2xl lg:ml-auto">
          <div className="absolute -inset-4 rotate-[-3deg] rounded-[2rem] border border-white/15 bg-white/5 sm:-inset-5" />
          <figure className="relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-[#24494a] p-2 shadow-2xl shadow-black/25 sm:rounded-[2rem] sm:p-3">
            <img
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              className="block h-auto w-full rounded-[1.1rem] object-contain sm:rounded-[1.5rem]"
              fetchPriority="high"
            />
            {heroPhoto.caption && (
              <figcaption className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-ink/65 px-4 py-2 text-xs text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:text-sm">
                <span className="size-2 rounded-full bg-sun" aria-hidden="true" />
                {heroPhoto.caption}
              </figcaption>
            )}
          </figure>
          <div className="absolute -bottom-8 -left-2 hidden -rotate-6 rounded-xl bg-paper px-5 py-4 text-ink shadow-xl sm:block lg:-left-10">
            <p className="font-editorial text-2xl">Love you ∞</p>
            <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              Keep this one close
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[0.65rem] font-semibold tracking-[0.22em] text-white/50 uppercase">
        Scroll a little
      </div>
    </section>
  );
}
