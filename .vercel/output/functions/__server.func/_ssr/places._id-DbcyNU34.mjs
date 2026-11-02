import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./shell-CJPiZf6R.mjs";
import { o as placeById, u as regionLabel } from "./legacies-CHKXM529.mjs";
import { n as Route } from "./router-DlPWc_oO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/places._id-DbcyNU34.js
var import_jsx_runtime = require_jsx_runtime();
function PlaceDetail() {
	const { id } = Route.useParams();
	const place = placeById(id);
	if (!place) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-5 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Place not in the archive"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/places",
			className: "mt-4 inline-block text-gold-soft",
			children: "Back to places"
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-64 md:h-96",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: place.image,
			alt: "",
			className: "h-full w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg to-transparent" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-5 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "-mt-16 relative text-xs font-semibold uppercase tracking-widest text-gold",
				children: [
					regionLabel[place.region],
					" · ",
					place.era
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "relative mt-2 font-display text-4xl font-semibold",
				children: place.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: place.location
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg text-fg",
				children: place.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base text-muted",
				children: place.body
			}),
			place.why ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 border-l-4 border-gold bg-surface px-4 py-3 text-base text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs font-semibold uppercase tracking-widest text-gold",
					children: "Why it still matters"
				}), place.why]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/places",
				className: "mt-8 inline-flex min-h-11 items-center text-sm font-medium text-gold-soft",
				children: "All places"
			})
		]
	})] }) });
}
//#endregion
export { PlaceDetail as component };
