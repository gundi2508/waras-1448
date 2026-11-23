import { Heart, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PhotoGallery } from "@/components/photo-gallery";
import { Reveal } from "@/components/reveal";
import { weddingPhotos } from "@/content/site";

export function WeddingSection() {
  return (
    <section
      id="wedding"
      className="relative overflow-clip bg-[#e6e9df] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div
        className="pointer-events-none absolute -right-24 top-12 size-80 rounded-full border border-lake/15 sm:size-[34rem]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-10 grid gap-6 sm:mb-14 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="max-w-2xl">
            <Badge className="mb-5 gap-2 rounded-full bg-primary px-3 py-1 text-[0.65rem] tracking-[0.18em] text-white uppercase hover:bg-primary">
              <Sparkles className="size-3" aria-hidden="true" />
              Our beginning
            </Badge>
            <h2 className="font-editorial text-[clamp(2.8rem,6vw,5rem)] leading-[0.94] tracking-tight text-ink">
              The day we
              <br className="hidden sm:block" /> chose forever.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-base">
            A whole room of love, a handful of quiet moments, and the start of
            every day that came after.
          </p>
        </Reveal>

        <div className="mb-8 flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
          <span className="grid size-9 place-items-center rounded-full bg-primary text-white">
            <Heart className="size-4 fill-current" aria-hidden="true" />
          </span>
          <span>Thirteen frames, one day we’ll always carry</span>
          <span className="h-px flex-1 bg-primary/15" aria-hidden="true" />
        </div>
        <PhotoGallery photos={weddingPhotos} label="A moment from our wedding" />
      </div>
    </section>
  );
}
