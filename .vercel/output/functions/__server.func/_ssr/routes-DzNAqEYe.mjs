import { C as require_jsx_runtime, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./shell-CJPiZf6R.mjs";
import { a as featuredPlaceIds, c as quoteOfDay, i as featuredEventIds, l as quotes, r as events, s as places, t as byIds } from "./legacies-CHKXM529.mjs";
import { i as PlaceCard, t as EventCard } from "./cards-CWbrGWeA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DzNAqEYe.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const quote = quoteOfDay();
	const navigate = useNavigate();
	const featuredPlaces = byIds(places, featuredPlaceIds);
	const featuredEvents = byIds(events, featuredEventIds);
	function wander() {
		const roll = Math.floor(Math.random() * 3);
		if (roll === 0) {
			const place = places[Math.floor(Math.random() * places.length)];
			navigate({
				to: "/places/$id",
				params: { id: place.id }
			});
		} else if (roll === 1) {
			const event = events[Math.floor(Math.random() * events.length)];
			navigate({
				to: "/events/$id",
				params: { id: event.id }
			});
		} else {
			const line = quotes[Math.floor(Math.random() * quotes.length)];
			navigate({
				to: "/quotes",
				search: { q: line.author }
			});
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line px-5 py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "inline-flex rounded-full border border-gold px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold",
						children: "For every young person who inherits this world"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl",
						children: ["History with a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "pulse"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl text-lg text-muted",
						children: "Places, turning points, and words from every continent — written so a student in Lagos, Kigali, Seoul, or São Paulo can feel the story is also theirs."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/places",
								className: "inline-flex min-h-11 items-center rounded-card bg-gold px-5 font-semibold text-ink",
								children: "Explore places"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/events",
								className: "inline-flex min-h-11 items-center rounded-card border border-line px-5 font-semibold text-fg",
								children: "Read history"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/quotes",
								className: "inline-flex min-h-11 items-center rounded-card border border-line px-5 font-semibold text-fg",
								children: "Open quotes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: wander,
								className: "inline-flex min-h-11 items-center rounded-card border border-gold px-5 font-semibold text-gold-soft",
								children: "Surprise me"
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Places that still answer back"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: "Africa first in the frame, then the rest of the world — because a global archive that starts in Europe is already a choice."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-3",
					children: featuredPlaces.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/places",
						className: "text-sm font-medium text-gold-soft hover:text-gold",
						children: "All places"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-semibold",
							children: "Moments that still reach the young"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "Victories you can stand on, and crimes that still shape the border, the language, and the classroom."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 md:grid-cols-3",
						children: featuredEvents.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event: e }, e.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							className: "text-sm font-medium text-gold-soft hover:text-gold",
							children: "All events"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-5 py-16 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-gold",
					children: "Line for today"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mt-4 font-display text-2xl font-medium italic leading-snug md:text-3xl",
					children: [
						"“",
						quote.text,
						"”"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted",
					children: ["— ", quote.author]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-gold",
					children: quote.region
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/quotes",
					className: "mt-6 inline-flex min-h-11 items-center text-sm font-medium text-gold-soft",
					children: "More quotes"
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
