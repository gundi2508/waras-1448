import { useState } from "react";
import { ChevronDown, MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site";

export function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="letter" className="px-5 pb-24 pt-8 sm:px-8 sm:pb-32">
      <Reveal className="mx-auto max-w-3xl">
        <Card className="overflow-hidden rounded-[2rem] border-ink/10 bg-paper shadow-[0_25px_70px_-45px_rgba(23,56,61,0.5)]">
          <div className="border-b border-ink/10 bg-[#e9e9dc] px-6 py-7 sm:px-10 sm:py-9">
            <p className="text-xs font-bold tracking-[0.2em] text-lake uppercase">
              A note, just for you
            </p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <h2 className="font-editorial text-4xl leading-none text-ink sm:text-5xl">
                When you’re ready.
              </h2>
              <MailOpen
                className="mb-1 size-7 shrink-0 text-sun"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="px-6 py-6 sm:px-10 sm:py-8">
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              There are a few words I wanted you to have all to yourself.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-5 h-11 rounded-full border-primary/20 px-5 text-primary hover:bg-secondary"
              aria-expanded={isOpen}
              aria-controls="personal-letter"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? "Fold this note" : "Open your letter"}
              <ChevronDown
                className={`ml-2 size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </Button>

            <div
              id="personal-letter"
              hidden={!isOpen}
              className="mt-7 border-t border-ink/10 pt-7"
            >
              <p className="font-editorial text-2xl text-primary">
                {siteContent.letter.greeting}
              </p>
              <div className="mt-5 flex flex-col gap-4 text-sm leading-7 text-ink/80 sm:text-base">
                {siteContent.letter.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-7 text-sm text-muted-foreground">With all my love,</p>
              <p className="mt-1 font-editorial text-2xl text-primary">
                {siteContent.letter.signOff}
              </p>
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
