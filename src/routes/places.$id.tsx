import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { placeById, regionLabel } from "@/data/legacies";

export const Route = createFileRoute("/places/$id")({ component: PlaceDetail });

function PlaceDetail() {
  const { id } = Route.useParams();
  const place = placeById(id);
  if (!place) {
    return (
      <Shell>
        <div className="mx-auto max-w-xl px-5 py-20 text-center">
          <h1 className="font-display text-3xl">Place not in the archive</h1>
          <Link to="/places" className="mt-4 inline-block text-gold-soft">
            Back to places
          </Link>
        </div>
      </Shell>
    );
  }
  return (
    <Shell>
      <article>
        <div className="relative h-64 md:h-96">
          <img src={place.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-bg to-transparent" />
        </div>
        <div className="mx-auto max-w-2xl px-5 pb-16">
          <p className="-mt-16 relative text-xs font-semibold uppercase tracking-widest text-gold">
            {regionLabel[place.region]} · {place.era}
          </p>
          <h1 className="relative mt-2 font-display text-4xl font-semibold">{place.title}</h1>
          <p className="mt-2 text-sm text-muted">{place.location}</p>
          <p className="mt-6 text-lg text-fg">{place.summary}</p>
          <p className="mt-4 text-base text-muted">{place.body}</p>
          {place.why ? (
            <p className="mt-6 border-l-4 border-gold bg-surface px-4 py-3 text-base text-fg">
              <span className="block text-xs font-semibold uppercase tracking-widest text-gold">Why it still matters</span>
              {place.why}
            </p>
          ) : null}
          <Link to="/places" className="mt-8 inline-flex min-h-11 items-center text-sm font-medium text-gold-soft">
            All places
          </Link>
        </div>
      </article>
    </Shell>
  );
}
