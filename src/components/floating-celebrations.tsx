import { Heart } from "lucide-react";

const decorations = [
  {
    kind: "heart",
    left: "7%",
    delay: "-12s",
    duration: "19s",
    tone: "text-sun",
    size: "size-6",
  },
  {
    kind: "balloon",
    left: "18%",
    delay: "-4s",
    duration: "17s",
    tone: "bg-[#dc8d7c] text-[#dc8d7c]",
    size: "size-5",
  },
  {
    kind: "heart",
    left: "31%",
    delay: "-16s",
    duration: "21s",
    tone: "text-[#e7b6ac]",
    size: "size-5",
  },
  {
    kind: "balloon",
    left: "48%",
    delay: "-8s",
    duration: "20s",
    tone: "bg-[#b5cbbb] text-[#b5cbbb]",
    size: "size-5",
  },
  {
    kind: "heart",
    left: "63%",
    delay: "-2s",
    duration: "18s",
    tone: "text-sun",
    size: "size-6",
  },
  {
    kind: "balloon",
    left: "76%",
    delay: "-13s",
    duration: "22s",
    tone: "bg-[#dfaa50] text-[#dfaa50]",
    size: "size-5",
  },
  {
    kind: "heart",
    left: "89%",
    delay: "-9s",
    duration: "16s",
    tone: "text-[#e7b6ac]",
    size: "size-6",
  },
];

export function FloatingCelebrations() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {decorations.map((decoration) => (
        <span
          key={`${decoration.kind}-${decoration.left}`}
          className="floating-decoration"
          style={{
            left: decoration.left,
            animationDelay: decoration.delay,
            animationDuration: decoration.duration,
          }}
        >
          {decoration.kind === "heart" ? (
            <Heart
              className={`${decoration.size} ${decoration.tone} fill-current`}
              aria-hidden="true"
            />
          ) : (
            <span className={`celebration-balloon ${decoration.tone}`} />
          )}
        </span>
      ))}
    </div>
  );
}
