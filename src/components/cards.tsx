import { Link } from "@tanstack/react-router";
import type { HistoryEvent, Place } from "@/data/legacies";
import { regionLabel } from "@/data/legacies";

export function PlaceCard({ place }: { place: Place }) {
  return (
    <Link
      to="/places/$id"
      params={{ id: place.id }}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface transition duration-200 hover:-translate-y-1 hover:border-gold"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={place.image}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          {regionLabel[place.region]} · {place.location.split(",")[0]}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold">{place.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{place.summary}</p>
        {place.why ? <p className="mt-3 text-sm text-gold-soft">{place.why}</p> : null}
        <p className="mt-4 text-xs text-faint">{place.era}</p>
      </div>
    </Link>
  );
}

export function EventCard({ event }: { event: HistoryEvent }) {
  const best = event.kind === "best";
  return (
    <Link
      to="/events/$id"
      params={{ id: event.id }}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface transition duration-200 hover:-translate-y-1 hover:border-gold"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={event.image}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className={`text-xs font-semibold uppercase tracking-widest ${best ? "text-gold" : "text-rust"}`}>
          {best ? "Best" : "Worst"} · {event.year}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold">{event.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{event.summary}</p>
        {event.why ? <p className="mt-3 text-sm text-gold-soft">{event.why}</p> : null}
      </div>
    </Link>
  );
}

export function FilterBar({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {options.map((o) => {
        const active = value === o.id;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            className={
              active
                ? "min-h-11 rounded-full bg-gold px-4 text-sm font-semibold text-ink"
                : "min-h-11 rounded-full border border-line bg-elevated px-4 text-sm text-muted hover:text-fg"
            }
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export function SearchField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <label className="mx-auto mt-6 block max-w-lg">
      <span className="sr-only">{placeholder}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-full border border-line bg-surface px-5 text-sm text-fg outline-none placeholder:text-faint focus:border-gold"
      />
    </label>
  );
}

export function PageIntro({ title, lede }: { title: string; lede: string }) {
  return (
    <header className="border-b border-line bg-surface px-5 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-base text-muted">{lede}</p>
      </div>
    </header>
  );
}
