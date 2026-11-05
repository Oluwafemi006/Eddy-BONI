/** Hero portrait. /images is cached for 30 days, so give the files a new name (v2, v3…) whenever the photo changes.
 *  Hero portrait: 240px and 480px wide (1x / 2x), AVIF with a WebP fallback. Preloaded on the home pages (src/seo/head.ts). */
export const PORTRAIT = {
  avif: "/images/eddy-boni-v2-240.avif 240w, /images/eddy-boni-v2-480.avif 480w",
  webp: "/images/eddy-boni-v2-240.webp 240w, /images/eddy-boni-v2-480.webp 480w",
  // Rendered 310px tall below 640px wide (~207px wide), 410px tall above (~273px wide).
  sizes: "(min-width: 640px) 273px, 207px",
} as const;
