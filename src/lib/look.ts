export const themes = [
  { id: "night", label: "Night gold", note: "Museum after hours" },
  { id: "paper", label: "Paper day", note: "A journal in daylight" },
  { id: "indigo", label: "Indigo", note: "Dusk, for late reading" },
  { id: "savanna", label: "Savanna", note: "Warm earth, open sky" },
] as const;

export const fonts = [
  { id: "archive", label: "Archive", sample: "Fraunces", note: "Soft serif, gallery calm" },
  { id: "gazette", label: "Gazette", sample: "Newsreader", note: "Newspaper, built to be read" },
  { id: "signal", label: "Signal", sample: "Syne", note: "Bold, like a contemporary hall" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];
export type FontId = (typeof fonts)[number]["id"];

const THEME_KEY = "wl-theme";
const FONT_KEY = "wl-font";

export function readLook(): { theme: ThemeId; font: FontId } {
  if (typeof window === "undefined") return { theme: "night", font: "archive" };
  const theme = window.localStorage.getItem(THEME_KEY);
  const font = window.localStorage.getItem(FONT_KEY);
  return {
    theme: themes.some((t) => t.id === theme) ? (theme as ThemeId) : "night",
    font: fonts.some((f) => f.id === font) ? (font as FontId) : "archive",
  };
}

export function applyLook(theme: ThemeId, font: FontId) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.font = font;
  window.localStorage.setItem(THEME_KEY, theme);
  window.localStorage.setItem(FONT_KEY, font);
}
