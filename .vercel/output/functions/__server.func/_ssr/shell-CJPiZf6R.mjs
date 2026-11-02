import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, r as SlidersHorizontal, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-CJPiZf6R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var themes = [
	{
		id: "night",
		label: "Night gold",
		note: "Museum after hours"
	},
	{
		id: "paper",
		label: "Paper day",
		note: "A journal in daylight"
	},
	{
		id: "indigo",
		label: "Indigo",
		note: "Dusk, for late reading"
	},
	{
		id: "savanna",
		label: "Savanna",
		note: "Warm earth, open sky"
	}
];
var fonts = [
	{
		id: "archive",
		label: "Archive",
		sample: "Fraunces",
		note: "Soft serif, gallery calm"
	},
	{
		id: "gazette",
		label: "Gazette",
		sample: "Newsreader",
		note: "Newspaper, built to be read"
	},
	{
		id: "signal",
		label: "Signal",
		sample: "Syne",
		note: "Bold, like a contemporary hall"
	}
];
var THEME_KEY = "wl-theme";
var FONT_KEY = "wl-font";
function readLook() {
	if (typeof window === "undefined") return {
		theme: "night",
		font: "archive"
	};
	const theme = window.localStorage.getItem(THEME_KEY);
	const font = window.localStorage.getItem(FONT_KEY);
	return {
		theme: themes.some((t) => t.id === theme) ? theme : "night",
		font: fonts.some((f) => f.id === font) ? font : "archive"
	};
}
function applyLook(theme, font) {
	document.documentElement.dataset.theme = theme;
	document.documentElement.dataset.font = font;
	window.localStorage.setItem(THEME_KEY, theme);
	window.localStorage.setItem(FONT_KEY, font);
}
function LookPanel() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [theme, setTheme] = (0, import_react.useState)("night");
	const [font, setFont] = (0, import_react.useState)("archive");
	const panel = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const saved = readLook();
		setTheme(saved.theme);
		setFont(saved.font);
		applyLook(saved.theme, saved.font);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		function onPointer(event) {
			if (!panel.current?.contains(event.target)) setOpen(false);
		}
		window.addEventListener("mousedown", onPointer);
		return () => window.removeEventListener("mousedown", onPointer);
	}, [open]);
	function chooseTheme(id) {
		setTheme(id);
		applyLook(id, font);
	}
	function chooseFont(id) {
		setFont(id);
		applyLook(theme, id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref: panel,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-expanded": open,
			"aria-label": "Change theme and type",
			onClick: () => setOpen((v) => !v),
			className: "inline-flex h-11 items-center gap-2 rounded-card border border-line bg-surface px-3 text-sm font-medium text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: "Look"
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute right-0 z-50 mt-2 w-80 rounded-card border border-line bg-surface p-4 shadow-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-faint",
					children: "Theme"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-2 gap-2",
					children: themes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => chooseTheme(item.id),
						className: theme === item.id ? "rounded-card border border-gold bg-elevated px-3 py-2 text-left" : "rounded-card border border-line px-3 py-2 text-left hover:border-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mb-2 block h-6 w-full rounded-card swatch-${item.id}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium text-fg",
								children: item.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: item.note
							})
						]
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs font-semibold uppercase tracking-widest text-faint",
					children: "Type"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-2",
					children: fonts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => chooseFont(item.id),
						className: font === item.id ? "flex w-full items-baseline justify-between rounded-card border border-gold bg-elevated px-3 py-2 text-left" : "flex w-full items-baseline justify-between rounded-card border border-line px-3 py-2 text-left hover:border-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `block text-lg text-fg font-sample-${item.id}`,
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted",
							children: item.note
						})] })
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-display text-2xl leading-tight text-fg",
					children: "History with a pulse"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "This is how the archive will read."
				})
			]
		}) : null]
	});
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/places",
		label: "Places"
	},
	{
		to: "/events",
		label: "Events"
	},
	{
		to: "/quotes",
		label: "Quotes"
	},
	{
		to: "/about",
		label: "About"
	}
];
function Shell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "font-display text-xl font-semibold tracking-tight",
							children: ["World ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "Legacies"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-7 md:flex",
							children: links.map((l) => {
								const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: l.to,
									className: active ? "text-sm font-medium text-gold-soft underline decoration-gold decoration-2 underline-offset-8" : "text-sm font-medium text-muted hover:text-fg",
									children: l.label
								}, l.to);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "grid h-11 w-11 place-items-center rounded-card border border-line text-fg md:hidden",
								"aria-label": open ? "Close menu" : "Open menu",
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LookPanel, {})]
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col gap-1 border-t border-line px-4 py-3 md:hidden",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						onClick: () => setOpen(false),
						className: "rounded-card px-3 py-3 text-base text-fg hover:bg-surface",
						children: l.label
					}, l.to))
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line bg-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-lg",
							children: ["World ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "Legacies"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xs text-sm text-muted",
							children: "Places, turning points, and words for a worldwide generation — with Africa in the frame, not at the edge."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-widest text-faint",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/places",
									className: "text-muted hover:text-gold-soft",
									children: "Amazing places"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/events",
									className: "text-muted hover:text-gold-soft",
									children: "Best and worst events"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/quotes",
									className: "text-muted hover:text-gold-soft",
									children: "Quotes"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-widest text-faint",
							children: "Project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "text-muted hover:text-gold-soft",
								children: "Mission"
							}) })
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-line px-5 py-4 text-center text-xs text-faint",
					children: "World Legacies · educational archive · not a substitute for primary sources"
				})]
			})
		]
	});
}
//#endregion
export { Shell as t };
