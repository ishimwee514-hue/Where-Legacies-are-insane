import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./shell-CJPiZf6R.mjs";
import { n as eventById } from "./legacies-CHKXM529.mjs";
import { r as Route$1 } from "./router-DlPWc_oO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events._id-B0eWpnuR.js
var import_jsx_runtime = require_jsx_runtime();
function EventDetail() {
	const { id } = Route$1.useParams();
	const event = eventById(id);
	if (!event) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-5 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Event not in the archive"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/events",
			className: "mt-4 inline-block text-gold-soft",
			children: "Back to events"
		})]
	}) });
	const best = event.kind === "best";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-64 md:h-96",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: event.image,
			alt: "",
			className: "h-full w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg to-transparent" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-5 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: `-mt-16 relative text-xs font-semibold uppercase tracking-widest ${best ? "text-gold" : "text-rust"}`,
				children: [
					best ? "Best" : "Worst",
					" · ",
					event.year
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "relative mt-2 font-display text-4xl font-semibold",
				children: event.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg text-fg",
				children: event.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base text-muted",
				children: event.body
			}),
			event.why ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 border-l-4 border-gold bg-surface px-4 py-3 text-base text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs font-semibold uppercase tracking-widest text-gold",
					children: "Why it still matters"
				}), event.why]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/events",
				className: "mt-8 inline-flex min-h-11 items-center text-sm font-medium text-gold-soft",
				children: "All events"
			})
		]
	})] }) });
}
//#endregion
export { EventDetail as component };
