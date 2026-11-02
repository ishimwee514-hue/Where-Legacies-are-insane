import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./shell-CJPiZf6R.mjs";
import { r as events } from "./legacies-CHKXM529.mjs";
import { a as SearchField, n as FilterBar, r as PageIntro, t as EventCard } from "./cards-CWbrGWeA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-C0rIkmHd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EventsPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		return events.filter((e) => {
			if (filter !== "all" && e.kind !== filter) return false;
			if (!needle) return true;
			return `${e.title} ${e.year} ${e.summary}`.toLowerCase().includes(needle);
		});
	}, [filter, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: "Best and worst of history",
		lede: "High moments and failures from every continent, told so a young reader can feel the stake: language, land, school, borders, and the chance to invent what comes next."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
				value: q,
				onChange: setQ,
				placeholder: "Search by name, year, or theme"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
					options: [
						{
							id: "all",
							label: "All"
						},
						{
							id: "best",
							label: "Best moments"
						},
						{
							id: "worst",
							label: "Worst moments"
						}
					],
					value: filter,
					onChange: (id) => setFilter(id)
				})
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-16 text-center text-muted",
				children: "No event matches that search."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event: e }, e.id))
			})
		]
	})] });
}
//#endregion
export { EventsPage as component };
