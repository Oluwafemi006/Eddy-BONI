import { useLanguage } from "@/i18n/LanguageContext";
import { Section, SectionHeader } from "@/components/sections/SectionHeader";

// Hidden until real reviews are added to t.testimonials.items (see the TODO in src/i18n/fr.ts).
export function Testimonials() {
  const { t } = useLanguage();
  if (t.testimonials.items.length === 0) return null;

  return (
    <Section id="testimonials">
      <SectionHeader title={t.testimonials.title} />
      <ul className="grid gap-5 md:grid-cols-2">
        {t.testimonials.items.map((review) => (
          <li key={review.author} className="reveal flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
            <blockquote className="text-[15px] leading-relaxed text-secondary-foreground">« {review.quote} »</blockquote>
            <p className="text-sm">
              <span className="font-semibold text-white">{review.author}</span>
              <span className="text-subtle"> · {review.company}</span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
