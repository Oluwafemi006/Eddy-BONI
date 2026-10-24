/** Hero portrait: 240px and 480px wide (1x / 2x), AVIF with a WebP fallback. Preloaded on the home pages (src/seo/head.ts). */
export const PORTRAIT = {
  avif: "/images/eddy-boni-240.avif 240w, /images/eddy-boni-480.avif 480w",
  webp: "/images/eddy-boni-240.webp 240w, /images/eddy-boni-480.webp 480w",
  // Rendered 290px tall below 640px wide (~194px wide), 350px tall above (~234px wide).
  sizes: "(min-width: 640px) 234px, 194px",
} as const;
