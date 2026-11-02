import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageIntro, SearchField } from "@/components/cards";
import { Shell } from "@/components/shell";
import { quotes } from "@/data/legacies";

export const Route = createFileRoute("/quotes")({
  validateSearch: (search: Record<string, unknown>): { q?: string } => ({
    q: typeof search.q === "string" && search.q.length > 0 ? search.q : undefined,
  }),
  component: QuotesPage,
});

function QuotesPage() {
  const initial = Route.useSearch().q ?? "";
  const [q, setQ] = useState(initial);
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return quotes;
    return quotes.filter((item) =>
      `${item.text} ${item.author} ${item.region}`.toLowerCase().includes(needle),
    );
  }, [q]);

  return (
    <Shell>
      <PageIntro
        title="Words that endure"
        lede="Lines from Burkina Faso, Soweto, Ghana, Kenya, Pakistan, and further — chosen because a young person can still use them, not because a poster already did."
      />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <SearchField value={q} onChange={setQ} placeholder="Search by author, region, or words" />
        {list.length === 0 ? (
          <p className="py-16 text-center text-muted">No quote matches that search.</p>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {list.map((item) => (
              <figure key={item.id} className="border-l-4 border-gold bg-surface p-5">
                <blockquote className="font-display text-lg italic leading-snug">“{item.text}”</blockquote>
                <figcaption className="mt-4 text-sm text-muted">— {item.author}</figcaption>
                <p className="mt-1 text-xs text-gold">{item.region}</p>
              </figure>
            ))}
          </div>
        )}
      </div>
    </Shell>
  );
}
