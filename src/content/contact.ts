/** Contact links, shared by the header, contact section, footer and pages. */
export const CONTACT = {
  email: "eddybaoke@gmail.com",
  github: "https://github.com/Oluwafemi006",
  githubLabel: "github.com/Oluwafemi006",
  linkedin: "https://www.linkedin.com/in/adjé-oladjidé-kenneth-eddy-boni-6794512b3/",
  comeup: "https://comeup.com/fr/@eddy-boni",
  /** WhatsApp number in international format, digits only (+229 01 96 62 06 95). */
  whatsapp: "2290196620695",
  /** TODO: add the CV PDF (e.g. /cv/eddy-boni-cv.pdf in public/) and set its path here; the button appears once set. */
  cv: null as string | null,
} as const;

/** wa.me link with a prefilled message. */
export const whatsappLink = (message: string) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
