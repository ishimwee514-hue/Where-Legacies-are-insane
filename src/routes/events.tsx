import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { EventCard, FilterBar, PageIntro, SearchField } from "@/components/cards";
import { Shell } from "@/components/shell";
import { events, type EventKind } from "@/data/legacies";

export const Route = createFileRoute("/events")({ component: EventsPage });

function EventsPage() {
  const [filter, setFilter] = useState<"all" | EventKind>("all");
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return events.filter((e) => {
      if (filter !== "all" && e.kind !== filter) return false;
      if (!needle) return true;
      return `${e.title} ${e.year} ${e.summary}`.toLowerCase().includes(needle);
    });
  }, [filter, q]);

  return (
    <Shell>
      <PageIntro
        title="Best and worst of history"
        lede="High moments and failures from every continent, told so a young reader can feel the stake: language, land, school, borders, and the chance to invent what comes next."
      />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <SearchField value={q} onChange={setQ} placeholder="Search by name, year, or theme" />
        <div className="mt-6">
          <FilterBar
            options={[
              { id: "all", label: "All" },
              { id: "best", label: "Best moments" },
              { id: "worst", label: "Worst moments" },
            ]}
            value={filter}
            onChange={(id) => setFilter(id as "all" | EventKind)}
          />
        </div>
        {list.length === 0 ? (
          <p className="py-16 text-center text-muted">No event matches that search.</p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        )}
      </div>
    </Shell>
  );
}
