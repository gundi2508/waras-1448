import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { keepsake } from "@/content/site";

export function KeepsakeSection() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.82fr_1.18fr] md:gap-20">
        <Reveal className="order-2 max-w-lg md:order-1">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-lake uppercase">
            A little keepsake
          </p>
          <h2 className="font-editorial text-[clamp(2.8rem,5vw,4.6rem)] leading-[0.95] text-ink">
            Some pictures
            <br /> say it for us.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
            A small reminder of the life we’re making, one ordinary and
            extraordinary day at a time.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 border-b border-sun pb-2 text-sm font-semibold text-primary">
            Made with love, for you
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </div>
        </Reveal>
        <Reveal className="order-1 mx-auto w-full max-w-md md:order-2">
          <Card className="overflow-hidden rounded-[1.75rem] border-white bg-white/70 p-3 shadow-[0_30px_75px_-40px_rgba(23,56,61,0.6)]">
            <img
              src={keepsake.src}
              alt={keepsake.alt}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full rounded-[1.3rem] object-contain"
            />
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
