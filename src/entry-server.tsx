import { renderToString } from "react-dom/server";
import App from "./App";
import { allPages, matchPath, SITE_URL } from "@/seo/routes";
import { buildHead } from "@/seo/head";
import { buildSitemap } from "@/seo/sitemap";

export function render(pathname: string) {
  const { page, language } = matchPath(pathname);
  return {
    html: renderToString(<App pathname={pathname} />),
    head: buildHead(page, language),
    language,
  };
}

export { allPages, buildSitemap, SITE_URL };
