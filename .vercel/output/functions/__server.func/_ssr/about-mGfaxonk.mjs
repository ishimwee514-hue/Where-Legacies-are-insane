import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./shell-CJPiZf6R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-mGfaxonk.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-2xl px-5 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-widest text-gold",
				children: "About"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-semibold",
				children: "Why this archive exists"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-4 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Memory is short. Places fall out of care, hard lessons get softened, and sentences that once moved crowds turn into decorations." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "World Legacies is for a worldwide public, and it speaks first to people young enough to inherit what these pages record. African youth are not a footnote here. Adwa, Timbuktu, Soweto, the Berlin map, and the women who planted trees sit beside Hiroshima, the Moon landing, and the rights written after the worst war — one archive, many heirs." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The tone stays educational. Hope is allowed. Denial is not. Short lines marked “why it still matters” are for the reader who is still in school or just leaving it." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Entries are short on purpose. They are starting points, not the last word. Dates and figures follow widely accepted accounts; where a quotation’s author is uncertain, the page says so." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-8 space-y-3 text-sm text-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-line bg-surface px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/places",
							className: "font-medium text-gold-soft",
							children: "Places"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: " — built wonders and landscapes with a reason to last."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-line bg-surface px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							className: "font-medium text-gold-soft",
							children: "Events"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: " — achievements and crimes, labeled plainly."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-line bg-surface px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quotes",
							className: "font-medium text-gold-soft",
							children: "Quotes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: " — lines from many regions, searchable by author or theme."
						})]
					})
				]
			})
		]
	}) });
}
//#endregion
export { AboutPage as component };
