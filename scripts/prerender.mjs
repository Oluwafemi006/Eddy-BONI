// Turns the client build in dist/ into one static HTML file per page, with the real page content
// and page-specific <head> tags, so crawlers that don't run JavaScript still see everything.
// Runs after `vite build` and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const template = await fs.readFile(path.join(distDir, "index.html"), "utf-8");
const { render, allPages, buildSitemap } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

/** "/" -> index.html, "/en/" -> en/index.html, "/projets/x" -> projets/x.html (served by Netlify at /projets/x). */
function outputFile(urlPath) {
  if (urlPath.endsWith("/")) return path.join(distDir, urlPath, "index.html");
  return path.join(distDir, `${urlPath}.html`);
}

function renderPage(urlPath) {
  const { html, head, language } = render(urlPath);
  return template
    .replace('<html lang="fr"', `<html lang="${language}"`)
    .replace(/\s*<!-- Fallback for the dev server[^>]*-->\s*<title>[^<]*<\/title>/, "")
    .replace("<!--app-head-->", head.trimStart())
    .replace("<!--app-html-->", html);
}

async function write(file, content) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content);
  console.log(`  ${path.relative(root, file)}`);
}

console.log("Prerendering pages:");
for (const { path: urlPath } of allPages()) {
  await write(outputFile(urlPath), renderPage(urlPath));
}
await write(path.join(distDir, "404.html"), renderPage("/404"));
await write(path.join(distDir, "sitemap.xml"), buildSitemap(new Date().toISOString().slice(0, 10)));

await fs.rm(ssrDir, { recursive: true, force: true });
