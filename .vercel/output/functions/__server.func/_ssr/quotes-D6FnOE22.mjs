import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./shell-CJPiZf6R.mjs";
import { l as quotes } from "./legacies-CHKXM529.mjs";
import { a as SearchField, r as PageIntro } from "./cards-CWbrGWeA.mjs";
import { i as Route$2 } from "./router-DlPWc_oO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quotes-D6FnOE22.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QuotesPage() {
	const initial = Route$2.useSearch().q ?? "";
	const [q, setQ] = (0, import_react.useState)(initial);
	const list = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		if (!needle) return quotes;
		return quotes.filter((item) => `${item.text} ${item.author} ${item.region}`.toLowerCase().includes(needle));
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: "Words that endure",
		lede: "Lines from Burkina Faso, Soweto, Ghana, Kenya, Pakistan, and further — chosen because a young person can still use them, not because a poster already did."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
			value: q,
			onChange: setQ,
			placeholder: "Search by author, region, or words"
		}), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "py-16 text-center text-muted",
			children: "No quote matches that search."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
			children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "border-l-4 border-gold bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "font-display text-lg italic leading-snug",
						children: [
							"“",
							item.text,
							"”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-4 text-sm text-muted",
						children: ["— ", item.author]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-gold",
						children: item.region
					})
				]
			}, item.id))
		})]
	})] });
}
//#endregion
export { QuotesPage as component };
