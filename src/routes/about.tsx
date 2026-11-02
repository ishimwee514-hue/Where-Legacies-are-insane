import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <Shell>
      <article className="mx-auto max-w-2xl px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">About</p>
        <h1 className="mt-3 font-display text-4xl font-semibold">Why this archive exists</h1>
        <div className="mt-6 space-y-4 text-muted">
          <p>
            Memory is short. Places fall out of care, hard lessons get softened, and sentences that once moved crowds turn into decorations.
          </p>
          <p>
            World Legacies is for a worldwide public, and it speaks first to people young enough to inherit what these pages record. African youth are not a footnote here. Adwa, Timbuktu, Soweto, the Berlin map, and the women who planted trees sit beside Hiroshima, the Moon landing, and the rights written after the worst war — one archive, many heirs.
          </p>
          <p>
            The tone stays educational. Hope is allowed. Denial is not. Short lines marked “why it still matters” are for the reader who is still in school or just leaving it.
          </p>
          <p>
            Entries are short on purpose. They are starting points, not the last word. Dates and figures follow widely accepted accounts; where a quotation’s author is uncertain, the page says so.
          </p>
        </div>
        <ul className="mt-8 space-y-3 text-sm text-fg">
          <li className="rounded-card border border-line bg-surface px-4 py-3">
            <Link to="/places" className="font-medium text-gold-soft">Places</Link>
            <span className="text-muted"> — built wonders and landscapes with a reason to last.</span>
          </li>
          <li className="rounded-card border border-line bg-surface px-4 py-3">
            <Link to="/events" className="font-medium text-gold-soft">Events</Link>
            <span className="text-muted"> — achievements and crimes, labeled plainly.</span>
          </li>
          <li className="rounded-card border border-line bg-surface px-4 py-3">
            <Link to="/quotes" className="font-medium text-gold-soft">Quotes</Link>
            <span className="text-muted"> — lines from many regions, searchable by author or theme.</span>
          </li>
        </ul>
      </article>
    </Shell>
  );
}
