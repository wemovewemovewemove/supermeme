import {n as a} from "./components-DmR_25ih.js";
import {a as t, i as o} from "./alert-BnNSXUeU.js";
const i = "text-center font-bold border-transparent"
  , c = {
    CD: "bg-orange-500 text-zinc-50 hover:bg-orange-500/80",
    CE: "bg-slate-700 text-zinc-50 hover:bg-slate-700/80",
    SC0: "bg-gray-500 text-zinc-50 hover:bg-gray-500/80",
    SC1: "bg-yellow-300 text-zinc-800 hover:bg-yellow-300/80",
    SC2: "bg-amber-500 text-zinc-50 hover:bg-amber-500/80",
    SC3: "bg-rose-500 text-zinc-50 hover:bg-rose-400/80",
    SC4: "bg-red-700 text-zinc-50 hover:bg-red-700/80",
    SC5: "bg-blue-600 text-zinc-50 hover:bg-blue-600/80"
}
  , s = Object.fromEntries(Object.entries(c).map( ([e,r]) => [e, t(i, r)]))
  , b = o("inline-flex items-center rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300", {
    variants: {
        variant: {
            default: "border-transparent bg-zinc-900 text-zinc-50 hover:bg-zinc-900/80 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/80",
            secondary: "border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
            destructive: "border-transparent bg-red-500 text-zinc-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/80",
            outline: "text-zinc-950 dark:text-zinc-50",
            ...s
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function z({className: e, variant: r, ...n}) {
    return a.jsx("div", {
        className: t(b({
            variant: r
        }), e),
        ...n
    })
}
export {z as B};
