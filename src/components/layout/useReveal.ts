import { useEffect, type CSSProperties } from "react";

/**
 * Reveals every `.reveal` element when it scrolls into view (see `.motion .reveal` in index.css).
 * Runs after hydration, so the classes it adds never cause a hydration mismatch.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");
    if (!root.classList.contains("motion")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/** Stagger delay for the n-th item of a group, as a CSS variable read by `.reveal`. */
export const stagger = (index: number, step = 0.12) => ({ "--d": `${index * step}s` }) as CSSProperties;
