import type { ServiceId } from "@/content/services";
import type { CaseStudyId } from "@/content/caseStudies";

/**
 * Client-facing offers (texts in t.services.items): the /services page each one links to, and the
 * case study behind its example when there is one (null: example shown as text, or hidden if empty).
 */
export const OFFER_LINKS: Record<string, { page: ServiceId; caseStudy: CaseStudyId | null }> = {
  vitrine: { page: "web", caseStudy: "sd-international-group" },
  plateforme: { page: "django", caseStudy: "axis-transport" },
  mvp: { page: "react-nextjs", caseStudy: null },
  mobile: { page: "flutter", caseStudy: "axis-transport" },
  integrations: { page: "django", caseStudy: null },
  automatisation: { page: "django", caseStudy: null },
};
