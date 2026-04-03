import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function removeReplitBranding() {
  const selectors = [
    ".replit-badge",
    "#replit-badge",
    ".replit-dev-banner",
    "#replit-dev-banner",
    "[data-replit-badge]",
    "[data-replit-dev-banner]",
    'iframe[src*="replit"]',
    'a[href*="replit.com"]',
  ];

  document.querySelectorAll<HTMLElement>(selectors.join(",")).forEach((el) => {
    el.remove();
  });

  document.querySelectorAll<HTMLElement>("body *").forEach((el) => {
    const text = el.textContent?.trim().toLowerCase() ?? "";
    if (
      text === "made with replit" ||
      text === "powered by replit" ||
      text.includes("made with replit")
    ) {
      el.remove();
    }
  });
}

removeReplitBranding();
new MutationObserver(removeReplitBranding).observe(document.documentElement, {
  childList: true,
  subtree: true,
});

createRoot(document.getElementById("root")!).render(<App />);
