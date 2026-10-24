import { LanguageProvider } from "@/i18n/LanguageContext";
import { matchPath, type Page } from "@/seo/routes";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProjectPage from "@/pages/ProjectPage";
import ServicePage from "@/pages/ServicePage";

function PageView({ page }: { page: Page }) {
  switch (page.kind) {
    case "home":
      return <Home />;
    case "project":
      return <ProjectPage id={page.id} />;
    case "service":
      return <ServicePage id={page.id} />;
    case "notFound":
      return <NotFound />;
  }
}

// Every page is prerendered to its own HTML file, so navigation between pages is a full page load
// and the app only needs to know which page the current URL maps to.
function App({ pathname }: { pathname: string }) {
  const { page, language } = matchPath(pathname);
  return (
    <LanguageProvider language={language} page={page}>
      <PageView page={page} />
    </LanguageProvider>
  );
}

export default App;
