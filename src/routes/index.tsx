import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { EventCard, PlaceCard } from "@/components/cards";
import { Shell } from "@/components/shell";
import { events, places, quoteOfDay, featuredPlaceIds, featuredEventIds, byIds, quotes } from "@/data/legacies";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const quote = quoteOfDay();
  const navigate = useNavigate();
  const featuredPlaces = byIds(places, featuredPlaceIds);
  const featuredEvents = byIds(events, featuredEventIds);

  function wander() {
    const roll = Math.floor(Math.random() * 3);
    if (roll === 0) {
      const place = places[Math.floor(Math.random() * places.length)];
      void navigate({ to: "/places/$id", params: { id: place.id } });
    } else if (roll === 1) {
      const event = events[Math.floor(Math.random() * events.length)];
      void navigate({ to: "/events/$id", params: { id: event.id } });
    } else {
      const line = quotes[Math.floor(Math.random() * quotes.length)];
      void navigate({ to: "/quotes", search: { q: line.author } });
    }
  }
  return (
    <Shell>
      <section className="border-b border-line px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-gold px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
            For every young person who inherits this world
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            History with a <span className="text-gold">pulse</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Places, turning points, and words from every continent — written so a student in Lagos, Kigali, Seoul, or São Paulo can feel the story is also theirs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/places" className="inline-flex min-h-11 items-center rounded-card bg-gold px-5 font-semibold text-ink">
              Explore places
            </Link>
            <Link to="/events" className="inline-flex min-h-11 items-center rounded-card border border-line px-5 font-semibold text-fg">
              Read history
            </Link>
            <Link to="/quotes" className="inline-flex min-h-11 items-center rounded-card border border-line px-5 font-semibold text-fg">
              Open quotes
            </Link>
            <button
              type="button"
              onClick={wander}
              className="inline-flex min-h-11 items-center rounded-card border border-gold px-5 font-semibold text-gold-soft"
            >
              Surprise me
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-semibold">Places that still answer back</h2>
          <p className="mt-2 text-muted">Africa first in the frame, then the rest of the world — because a global archive that starts in Europe is already a choice.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredPlaces.map((p) => (
            <PlaceCard key={p.id} place={p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/places" className="text-sm font-medium text-gold-soft hover:text-gold">
            All places
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="mb-8 text-center">
            <h2 className="font-display text-3xl font-semibold">Moments that still reach the young</h2>
            <p className="mt-2 text-muted">Victories you can stand on, and crimes that still shape the border, the language, and the classroom.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredEvents.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/events" className="text-sm font-medium text-gold-soft hover:text-gold">
              All events
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Line for today</p>
        <blockquote className="mt-4 font-display text-2xl font-medium italic leading-snug md:text-3xl">
          “{quote.text}”
        </blockquote>
        <p className="mt-4 text-sm text-muted">— {quote.author}</p>
        <p className="mt-1 text-xs text-gold">{quote.region}</p>
        <Link to="/quotes" className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-gold-soft">
          More quotes
        </Link>
      </section>
    </Shell>
  );
}
