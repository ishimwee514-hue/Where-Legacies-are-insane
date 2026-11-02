import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FilterBar, PageIntro, PlaceCard, SearchField } from "@/components/cards";
import { Shell } from "@/components/shell";
import { places, type Region } from "@/data/legacies";

export const Route = createFileRoute("/places")({ component: PlacesPage });

const filters: { id: "all" | Region; label: string }[] = [
  { id: "all", label: "All" },
  { id: "africa", label: "Africa" },
  { id: "asia", label: "Asia" },
  { id: "europe", label: "Europe" },
  { id: "americas", label: "Americas" },
  { id: "oceania", label: "Oceania" },
];

function PlacesPage() {
  const [filter, setFilter] = useState<"all" | Region>("all");
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return places.filter((p) => {
      if (filter !== "all" && p.region !== filter) return false;
      if (!needle) return true;
      return `${p.title} ${p.location} ${p.era} ${p.summary}`.toLowerCase().includes(needle);
    });
  }, [filter, q]);

  return (
    <Shell>
      <PageIntro
        title="Amazing places"
        lede="From rock churches in Ethiopia to a desert university in Mali, a prison island, a Jordanian city, and a Japanese warning left in stone. Filter by continent. Every region is part of the same world."
      />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <SearchField value={q} onChange={setQ} placeholder="Search by name, region, or era" />
        <div className="mt-6">
          <FilterBar options={filters} value={filter} onChange={(id) => setFilter(id as "all" | Region)} />
        </div>
        {list.length === 0 ? (
          <p className="py-16 text-center text-muted">Nothing matches that search. Try a broader word.</p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <PlaceCard key={p.id} place={p} />
            ))}
          </div>
        )}
      </div>
    </Shell>
  );
}
