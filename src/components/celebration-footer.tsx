import { useState } from "react";
import confetti from "canvas-confetti";
import { ArrowUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export function CelebrationFooter() {
  const [celebrated, setCelebrated] = useState(false);

  function celebrate() {
    confetti({
      particleCount: 85,
      spread: 64,
      startVelocity: 34,
      origin: { y: 0.72 },
      colors: ["#17464a", "#6b9b91", "#d7a24a", "#f3efe4"],
      disableForReducedMotion: true,
    });
    setCelebrated(true);
  }

  return (
    <footer className="bg-ink px-5 py-14 text-white sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="mb-5 grid size-12 place-items-center rounded-full border border-white/15 bg-white/5 text-sun">
          <Sparkles className="size-5" aria-hidden="true" />
        </div>
        <p className="text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
          Every day, still choosing you
        </p>
        <h2 className="mt-3 font-editorial text-5xl text-paper sm:text-6xl">
          Waras Mubarak.
        </h2>
        <Button
          type="button"
          onClick={celebrate}
          className="mt-7 h-11 rounded-full bg-sun px-5 text-ink hover:bg-[#e2b45f]"
        >
          {celebrated ? "A little more joy, just for you" : "Send a little confetti"}
          <Sparkles className="ml-2 size-4" aria-hidden="true" />
        </Button>
        <p className="sr-only" aria-live="polite">
          {celebrated ? "A little more joy, just for you." : ""}
        </p>
        <div className="mt-12 flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <span>Made with love, for {siteContent.recipient}.</span>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun"
          >
            Back to the beginning
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
