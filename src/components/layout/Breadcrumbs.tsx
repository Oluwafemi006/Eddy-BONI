import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-subtle">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
            {item.href ? (
              <a href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </a>
            ) : (
              <span aria-current="page" className="text-muted-foreground">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
