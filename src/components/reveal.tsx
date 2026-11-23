import { useEffect, useRef, useState, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () =>
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window),
  );

  useEffect(() => {
    const element = ref.current;

    if (!element || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -48px 0px", threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      {...props}
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </div>
  );
}
