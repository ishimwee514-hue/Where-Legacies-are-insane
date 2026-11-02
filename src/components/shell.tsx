import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { LookPanel } from "@/components/look-panel";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/places", label: "Places" },
  { to: "/events", label: "Events" },
  { to: "/quotes", label: "Quotes" },
  { to: "/about", label: "About" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="font-display text-xl font-semibold tracking-tight">
            World <span className="text-gold">Legacies</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => {
              const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={
                    active
                      ? "text-sm font-medium text-gold-soft underline decoration-gold decoration-2 underline-offset-8"
                      : "text-sm font-medium text-muted hover:text-fg"
                  }
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-card border border-line text-fg md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
            <LookPanel />
          </div>
        </div>
        {open ? (
          <nav className="flex flex-col gap-1 border-t border-line px-4 py-3 md:hidden">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-card px-3 py-3 text-base text-fg hover:bg-surface"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-line bg-ink">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg">
              World <span className="text-gold">Legacies</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Places, turning points, and words for a worldwide generation — with Africa in the frame, not at the edge.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-faint">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/places" className="text-muted hover:text-gold-soft">Amazing places</Link></li>
              <li><Link to="/events" className="text-muted hover:text-gold-soft">Best and worst events</Link></li>
              <li><Link to="/quotes" className="text-muted hover:text-gold-soft">Quotes</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-faint">Project</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/about" className="text-muted hover:text-gold-soft">Mission</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line px-5 py-4 text-center text-xs text-faint">
          World Legacies · educational archive · not a substitute for primary sources
        </div>
      </footer>
    </div>
  );
}
