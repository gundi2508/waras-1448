import { useState } from "react";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/reveal";
import type { Photo } from "@/content/site";

export function PhotoGallery({
  photos,
  label,
}: {
  photos: readonly Photo[];
  label: string;
}) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="columns-2 gap-3 sm:gap-5 lg:columns-3 xl:columns-4">
        {photos.map((photo, index) => (
          <Reveal
            key={photo.src}
            className="mb-3 inline-block w-full break-inside-avoid align-top sm:mb-5"
            style={{ transitionDelay: `${(index % 4) * 55}ms` }}
          >
            <Card className="gap-0 rounded-2xl border-ink/10 bg-paper/90 py-0 shadow-[0_8px_24px_-20px_rgba(23,56,61,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_-22px_rgba(23,56,61,0.55)]">
              <button
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="group relative block w-full overflow-hidden rounded-t-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-sun"
                aria-label={`Open photo: ${photo.caption ?? photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full object-contain transition duration-500 group-hover:brightness-105"
                />
                <span className="absolute right-3 top-3 grid size-9 translate-y-1 place-items-center rounded-full bg-ink/70 text-white opacity-0 backdrop-blur-sm transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <ImageIcon className="size-4" aria-hidden="true" />
                </span>
              </button>
              {photo.caption && (
                <CardContent className="flex items-center justify-between gap-3 px-3 py-3 sm:px-4">
                  <p className="font-editorial text-lg leading-tight text-ink sm:text-xl">
                    {photo.caption}
                  </p>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-lake"
                    aria-hidden="true"
                  />
                </CardContent>
              )}
            </Card>
          </Reveal>
        ))}
      </div>

      <Dialog
        open={selectedPhoto !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedPhoto(null);
        }}
      >
        <DialogContent className="w-[calc(100vw-1.5rem)] max-w-5xl rounded-3xl border border-white/10 bg-ink p-3 text-white shadow-2xl sm:p-5">
          {selectedPhoto && (
            <div className="grid gap-4">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[76svh] w-full rounded-2xl object-contain"
              />
              <div className={selectedPhoto.caption ? "px-1 pb-1" : "sr-only"}>
                <DialogTitle
                  className={
                    selectedPhoto.caption
                      ? "font-editorial text-2xl text-paper sm:text-3xl"
                      : ""
                  }
                >
                  {selectedPhoto.caption ?? selectedPhoto.alt}
                </DialogTitle>
                {selectedPhoto.caption && (
                  <DialogDescription className="mt-1 text-sm text-white/65">
                    {label}
                  </DialogDescription>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
