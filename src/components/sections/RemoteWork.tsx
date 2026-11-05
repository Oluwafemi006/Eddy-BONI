import { GitBranch, MessagesSquare, Server } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section, SectionHeader } from "@/components/sections/SectionHeader";
import { stagger } from "@/components/layout/useReveal";

const ICONS: Record<string, typeof GitBranch> = {
  git: GitBranch,
  deploy: Server,
  updates: MessagesSquare,
};

export function RemoteWork() {
  const { t } = useLanguage();

  return (
    <Section id="remote" tone="alt">
      <SectionHeader
        eyebrow={t.remoteWork.eyebrow}
        title={t.remoteWork.titlePrefix}
        highlight={t.remoteWork.titleHighlight}
        subtitle={t.remoteWork.subtitle}
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {t.remoteWork.items.map((item, i) => {
          const Icon = ICONS[item.id];
          return (
            <article
              key={item.id}
              style={stagger(i, 0.15)}
              className="reveal lift flex flex-col gap-4 rounded-[20px] border border-border bg-card p-6 hover:border-[#2C4680] hover:bg-[#0F1A33] sm:p-7"
            >
              <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <Icon size={22} />
              </span>
              <h3 className="text-lg font-bold leading-snug text-white">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-secondary-foreground">{item.description}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

