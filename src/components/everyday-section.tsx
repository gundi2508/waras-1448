import { Badge } from "@/components/ui/badge";
import { PhotoGallery } from "@/components/photo-gallery";
import { Reveal } from "@/components/reveal";
import { everydayPhotos } from "@/content/site";

export function EverydaySection() {
  return (
    <section id="everyday" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-5 rounded-full border-lake/30 bg-white/50 px-3 py-1 text-[0.65rem] tracking-[0.18em] text-primary uppercase"
            >
              The little detours
            </Badge>
            <h2 className="font-editorial text-[clamp(2.8rem,6vw,5rem)] leading-[0.94] tracking-tight text-ink">
              Ordinary days,
              <br className="hidden sm:block" /> kept extraordinary.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-base">
            Outings, café stops, and the unplanned bits in between. The moments
            that make a life feel like ours.
          </p>
        </Reveal>
        <PhotoGallery photos={everydayPhotos} label="A small moment from our days" />
      </div>
    </section>
  );
}
