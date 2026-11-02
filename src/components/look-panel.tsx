import { useEffect, useRef, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { applyLook, fonts, readLook, themes, type FontId, type ThemeId } from "@/lib/look";

export function LookPanel() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeId>("night");
  const [font, setFont] = useState<FontId>("archive");
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = readLook();
    setTheme(saved.theme);
    setFont(saved.font);
    applyLook(saved.theme, saved.font);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onPointer(event: MouseEvent) {
      if (!panel.current?.contains(event.target as Node)) setOpen(false);
    }
    window.addEventListener("mousedown", onPointer);
    return () => window.removeEventListener("mousedown", onPointer);
  }, [open]);

  function chooseTheme(id: ThemeId) {
    setTheme(id);
    applyLook(id, font);
  }

  function chooseFont(id: FontId) {
    setFont(id);
    applyLook(theme, id);
  }

  return (
    <div className="relative" ref={panel}>
      <button
        type="button"
        aria-expanded={open}
        aria-label="Change theme and type"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 items-center gap-2 rounded-card border border-line bg-surface px-3 text-sm font-medium text-fg"
      >
        <SlidersHorizontal size={16} />
        <span className="hidden sm:inline">Look</span>
      </button>
      {open ? (
        <div className="absolute right-0 z-50 mt-2 w-80 rounded-card border border-line bg-surface p-4 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-faint">Theme</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {themes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => chooseTheme(item.id)}
                className={
                  theme === item.id
                    ? "rounded-card border border-gold bg-elevated px-3 py-2 text-left"
                    : "rounded-card border border-line px-3 py-2 text-left hover:border-gold"
                }
              >
                <span className={`mb-2 block h-6 w-full rounded-card swatch-${item.id}`} />
                <span className="block text-sm font-medium text-fg">{item.label}</span>
                <span className="block text-xs text-muted">{item.note}</span>
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-faint">Type</p>
          <div className="mt-3 space-y-2">
            {fonts.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => chooseFont(item.id)}
                className={
                  font === item.id
                    ? "flex w-full items-baseline justify-between rounded-card border border-gold bg-elevated px-3 py-2 text-left"
                    : "flex w-full items-baseline justify-between rounded-card border border-line px-3 py-2 text-left hover:border-gold"
                }
              >
                <span>
                  <span className={`block text-lg text-fg font-sample-${item.id}`}>{item.label}</span>
                  <span className="block text-xs text-muted">{item.note}</span>
                </span>
              </button>
            ))}
          </div>
          <p className="mt-4 font-display text-2xl leading-tight text-fg">History with a pulse</p>
          <p className="mt-1 text-sm text-muted">This is how the archive will read.</p>
        </div>
      ) : null}
    </div>
  );
}
