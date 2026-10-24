import type { ServiceId } from "@/content/services";
import type { CaseStudyId } from "@/content/caseStudies";

/** Client-facing offers (texts in t.services.items): the /services page and the real example each one links to. */
export const OFFER_LINKS: Record<string, { page: ServiceId; caseStudy: CaseStudyId }> = {
  vitrine: { page: "web-benin", caseStudy: "sd-international-group" },
  plateforme: { page: "django", caseStudy: "axis-transport" },
  mobile: { page: "flutter", caseStudy: "axis-transport" },
};
