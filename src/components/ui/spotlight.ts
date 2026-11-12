// Mouse-follow glow on cards, adapted from the 21st.dev "Spotlight Card" (Hossain Jahed, EaseMize UI).
// One shared pointer listener for all cards, throttled with requestAnimationFrame, mouse only:
// no effect and no listener on touch screens. Styles live in src/index.css (.spotlight).
const cards = new Set<HTMLElement>();
let frame = 0;
let pointer: { x: number; y: number } | null = null;

function paint() {
  frame = 0;
  if (!pointer) return;
  for (const el of cards) {
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${(pointer.x - rect.left).toFixed(1)}px`);
    el.style.setProperty("--y", `${(pointer.y - rect.top).toFixed(1)}px`);
  }
}

function onPointerMove(event: PointerEvent) {
  if (event.pointerType !== "mouse") return;
  pointer = { x: event.clientX, y: event.clientY };
  if (!frame) frame = requestAnimationFrame(paint);
}

const canHover = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/** Callback ref (React 19 cleanup): `<article ref={spotlight} className="spotlight …">`. Safe in loops and SSR. */
export function spotlight(el: HTMLElement | null): (() => void) | undefined {
  if (!el || !canHover()) return undefined;
  if (cards.size === 0) document.addEventListener("pointermove", onPointerMove, { passive: true });
  cards.add(el);
  return () => {
    cards.delete(el);
    if (cards.size === 0) {
      document.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(frame);
      frame = 0;
    }
  };
}
