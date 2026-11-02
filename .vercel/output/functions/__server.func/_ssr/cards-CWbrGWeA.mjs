import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as regionLabel } from "./legacies-CHKXM529.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cards-CWbrGWeA.js
var import_jsx_runtime = require_jsx_runtime();
function PlaceCard({ place }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/places/$id",
		params: { id: place.id },
		className: "group flex flex-col overflow-hidden rounded-card border border-line bg-surface transition duration-200 hover:-translate-y-1 hover:border-gold",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-44 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: place.image,
				alt: "",
				className: "h-full w-full object-cover transition duration-300 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-gold",
					children: [
						regionLabel[place.region],
						" · ",
						place.location.split(",")[0]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-xl font-semibold",
					children: place.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 flex-1 text-sm text-muted",
					children: place.summary
				}),
				place.why ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-gold-soft",
					children: place.why
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-faint",
					children: place.era
				})
			]
		})]
	});
}
function EventCard({ event }) {
	const best = event.kind === "best";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/events/$id",
		params: { id: event.id },
		className: "group flex flex-col overflow-hidden rounded-card border border-line bg-surface transition duration-200 hover:-translate-y-1 hover:border-gold",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-44 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: event.image,
				alt: "",
				className: "h-full w-full object-cover transition duration-300 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: `text-xs font-semibold uppercase tracking-widest ${best ? "text-gold" : "text-rust"}`,
					children: [
						best ? "Best" : "Worst",
						" · ",
						event.year
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-xl font-semibold",
					children: event.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 flex-1 text-sm text-muted",
					children: event.summary
				}),
				event.why ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-gold-soft",
					children: event.why
				}) : null
			]
		})]
	});
}
function FilterBar({ options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap justify-center gap-2",
		children: options.map((o) => {
			const active = value === o.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onChange(o.id),
				className: active ? "min-h-11 rounded-full bg-gold px-4 text-sm font-semibold text-ink" : "min-h-11 rounded-full border border-line bg-elevated px-4 text-sm text-muted hover:text-fg",
				children: o.label
			}, o.id);
		})
	});
}
function SearchField({ value, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mx-auto mt-6 block max-w-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: placeholder
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			className: "h-12 w-full rounded-full border border-line bg-surface px-5 text-sm text-fg outline-none placeholder:text-faint focus:border-gold"
		})]
	});
}
function PageIntro({ title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line bg-surface px-5 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold tracking-tight md:text-5xl",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-base text-muted",
				children: lede
			})]
		})
	});
}
//#endregion
export { SearchField as a, PlaceCard as i, FilterBar as n, PageIntro as r, EventCard as t };
