import {r as s, n as t} from "./components-DmR_25ih.js";
import {a as d} from "./alert-BnNSXUeU.js";
const o = s.forwardRef( ({className: a, ...e}, r) => t.jsx("div", {
    ref: r,
    className: d("rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50", a),
    ...e
}));
o.displayName = "Card";
const i = s.forwardRef( ({className: a, ...e}, r) => t.jsx("div", {
    ref: r,
    className: d("flex flex-col space-y-1.5 p-6", a),
    ...e
}));
i.displayName = "CardHeader";
const n = s.forwardRef( ({className: a, ...e}, r) => t.jsx("h3", {
    ref: r,
    className: d("text-2xl font-semibold leading-none tracking-tight", a),
    ...e
}));
n.displayName = "CardTitle";
const c = s.forwardRef( ({className: a, ...e}, r) => t.jsx("p", {
    ref: r,
    className: d("text-sm text-zinc-500 dark:text-zinc-400", a),
    ...e
}));
c.displayName = "CardDescription";
const l = s.forwardRef( ({className: a, ...e}, r) => t.jsx("div", {
    ref: r,
    className: d("p-6 pt-0", a),
    ...e
}));
l.displayName = "CardContent";
const m = s.forwardRef( ({className: a, ...e}, r) => t.jsx("div", {
    ref: r,
    className: d("flex items-center p-6 pt-0", a),
    ...e
}));
m.displayName = "CardFooter";
export {o as C, i as a, c as b, l as c, m as d, n as e};
