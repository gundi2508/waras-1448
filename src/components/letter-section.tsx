import { useRef, useState } from "react";
import confetti from "canvas-confetti";
import { Heart, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/content/site";

export function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [celebrated, setCelebrated] = useState(false);
  const envelopeButtonRef = useRef<HTMLButtonElement>(null);
  const confettiButtonRef = useRef<HTMLButtonElement>(null);

  function toggleLetter() {
    if (!isOpen) {
      const bounds = envelopeButtonRef.current?.getBoundingClientRect();
      const origin = bounds
        ? {
            x: (bounds.left + bounds.width / 2) / window.innerWidth,
            y: (bounds.top + bounds.height / 2) / window.innerHeight,
          }
        : { x: 0.5, y: 0.7 };

      confetti({
        particleCount: 48,
        spread: 66,
        startVelocity: 27,
        origin,
        colors: ["#17464a", "#6b9b91", "#d7a24a", "#e7b6ac", "#f3efe4"],
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 24,
        spread: 100,
        startVelocity: 18,
        origin,
        colors: ["#d7a24a", "#e7b6ac", "#f3efe4"],
        disableForReducedMotion: true,
      });
    }

    setIsOpen((open) => !open);
  }

  function celebrateLetter() {
    const bounds = confettiButtonRef.current?.getBoundingClientRect();
    const origin = bounds
      ? {
          x: (bounds.left + bounds.width / 2) / window.innerWidth,
          y: (bounds.top + bounds.height / 2) / window.innerHeight,
        }
      : { x: 0.5, y: 0.72 };

    confetti({
      particleCount: 85,
      spread: 64,
      startVelocity: 34,
      origin,
      colors: ["#17464a", "#6b9b91", "#d7a24a", "#f3efe4"],
      disableForReducedMotion: true,
    });
    setCelebrated(true);
  }

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
                A little note for you.
              </h2>
              <Mail
                className="mb-1 size-7 shrink-0 text-sun"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="px-6 py-6 sm:px-10 sm:py-8">
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              Sealed with love, and a tiny surprise when you open it.
            </p>
            <div
              className={`letter-envelope ${isOpen ? "is-open" : ""}`}
            >
              <div className="envelope-shape">
                <div className="envelope-back" aria-hidden="true" />
                <div className="envelope-letter" aria-hidden="true">
                  <Heart className="size-5 fill-current text-sun" />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="envelope-pocket" aria-hidden="true" />
                <div className="envelope-flap" aria-hidden="true" />
                <button
                  ref={envelopeButtonRef}
                  type="button"
                  className="envelope-seal"
                  aria-label={isOpen ? "Tuck the letter away" : "Open the envelope"}
                  aria-expanded={isOpen}
                  aria-controls="personal-letter"
                  onClick={toggleLetter}
                >
                  <Heart className="size-5 fill-current text-paper" />
                </button>
              </div>
            </div>

            <div
              id="personal-letter"
              hidden={!isOpen}
              className={`letter-message mt-7 border-t border-ink/10 pt-7 ${isOpen ? "is-open" : ""}`}
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
              <div className="mt-7 flex justify-end">
                <Button
                  ref={confettiButtonRef}
                  type="button"
                  onClick={celebrateLetter}
                  className="h-11 rounded-full bg-sun px-5 text-ink hover:bg-[#e2b45f]"
                >
                  {celebrated
                    ? "A little more joy, just for you"
                    : "Send a little confetti"}
                  <Sparkles className="ml-2 size-4" aria-hidden="true" />
                </Button>
              </div>
              <p className="sr-only" aria-live="polite">
                {celebrated ? "A little more joy, just for you." : ""}
              </p>
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
