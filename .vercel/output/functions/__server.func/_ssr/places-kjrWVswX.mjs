import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./shell-CJPiZf6R.mjs";
import { s as places } from "./legacies-CHKXM529.mjs";
import { a as SearchField, i as PlaceCard, n as FilterBar, r as PageIntro } from "./cards-CWbrGWeA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/places-kjrWVswX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "africa",
		label: "Africa"
	},
	{
		id: "asia",
		label: "Asia"
	},
	{
		id: "europe",
		label: "Europe"
	},
	{
		id: "americas",
		label: "Americas"
	},
	{
		id: "oceania",
		label: "Oceania"
	}
];
function PlacesPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		return places.filter((p) => {
			if (filter !== "all" && p.region !== filter) return false;
			if (!needle) return true;
			return `${p.title} ${p.location} ${p.era} ${p.summary}`.toLowerCase().includes(needle);
		});
	}, [filter, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		title: "Amazing places",
		lede: "From rock churches in Ethiopia to a desert university in Mali, a prison island, a Jordanian city, and a Japanese warning left in stone. Filter by continent. Every region is part of the same world."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
				value: q,
				onChange: setQ,
				placeholder: "Search by name, region, or era"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
					options: filters,
					value: filter,
					onChange: (id) => setFilter(id)
				})
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-16 text-center text-muted",
				children: "Nothing matches that search. Try a broader word."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
			})
		]
	})] });
}
//#endregion
export { PlacesPage as component };
