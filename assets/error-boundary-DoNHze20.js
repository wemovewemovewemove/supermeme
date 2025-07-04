import {e as u, a as t, S as j, C as p, A as c, f as l, g as o, h as m, B as d, L as g, H as h} from "./alert-BnNSXUeU.js";
import {r as n, n as e, x as N, z as w, L as x} from "./components-DmR_25ih.js";
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b = u("ShieldX", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}], ["path", {
    d: "m14.5 9.5-5 5",
    key: "17q4r4"
}], ["path", {
    d: "m9.5 9.5 5 5",
    key: "18nt4w"
}]]);
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R = u("Slash", [["path", {
    d: "M22 2 2 22",
    key: "y4kqgn"
}]])
  , y = n.forwardRef( ({...a}, s) => e.jsx("nav", {
    ref: s,
    "aria-label": "breadcrumb",
    ...a
}));
y.displayName = "Breadcrumb";
const B = n.forwardRef( ({className: a, ...s}, r) => e.jsx("ol", {
    ref: r,
    className: t("flex flex-wrap items-center gap-1.5 break-words text-sm text-zinc-500 sm:gap-2.5 dark:text-zinc-400", a),
    ...s
}));
B.displayName = "BreadcrumbList";
const v = n.forwardRef( ({className: a, ...s}, r) => e.jsx("li", {
    ref: r,
    className: t("inline-flex items-center gap-1.5", a),
    ...s
}));
v.displayName = "BreadcrumbItem";
const k = n.forwardRef( ({asChild: a, className: s, ...r}, i) => {
    const f = a ? j : "a";
    return e.jsx(f, {
        ref: i,
        className: t("transition-colors hover:text-zinc-950 dark:hover:text-zinc-50", s),
        ...r
    })
}
);
k.displayName = "BreadcrumbLink";
const z = n.forwardRef( ({className: a, ...s}, r) => e.jsx("span", {
    ref: r,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: t("font-normal text-zinc-950 dark:text-zinc-50", a),
    ...s
}));
z.displayName = "BreadcrumbPage";
const L = ({children: a, className: s, ...r}) => e.jsx("li", {
    role: "presentation",
    "aria-hidden": "true",
    className: t("[&>svg]:size-3.5", s),
    ...r,
    children: a ?? e.jsx(p, {})
});
L.displayName = "BreadcrumbSeparator";
function C() {
    var s, r, i;
    const a = N();
    return w(a) ? a.status === 401 ? e.jsxs("div", {
        className: "w-full flex flex-col pt-24 items-center justify-center",
        children: [e.jsxs("h1", {
            className: "text-[6rem] font-bold tracking-tight text-zinc-700 flex items-center gap-1",
            children: [e.jsx(b, {
                size: "7rem"
            }), " ", a.data.message]
        }), e.jsxs(c, {
            variant: "destructive",
            className: "w-max mt-8",
            children: [e.jsx(l, {
                className: "h-4 w-4"
            }), e.jsx(o, {
                children: "Error"
            }), e.jsx(m, {
                children: "You are not authorized to access this resource."
            })]
        }), e.jsx(d, {
            size: "lg",
            variant: "secondary",
            className: "mt-6",
            children: e.jsxs(x, {
                to: `${((r = (s = a.data) == null ? void 0 : s.ENV) == null ? void 0 : r.PUBLIC_API_URL) ?? "https://api.scpf.site"}/auth/roblox/login-admin`,
                className: "inline-flex items-center gap-2",
                children: [e.jsx(g, {}), "Log In"]
            })
        })]
    }) : e.jsxs("div", {
        className: "w-full flex flex-col pt-24 items-center justify-center",
        children: [e.jsx("h1", {
            className: "text-[6rem] font-bold tracking-tight text-red-400/50 shadow-inner",
            children: "Error"
        }), e.jsxs(c, {
            variant: "destructive",
            className: "w-max mt-8",
            children: [e.jsx(l, {
                className: "h-4 w-4"
            }), e.jsx(o, {
                children: "Error"
            }), e.jsx(m, {
                children: ((i = a.data) == null ? void 0 : i.message) ?? (a == null ? void 0 : a.toString()) ?? "Something went wrong."
            })]
        }), e.jsx(d, {
            variant: "secondary",
            className: "mt-6",
            children: e.jsxs(x, {
                to: "/",
                className: "inline-flex items-center gap-1",
                children: [e.jsx(h, {}), "Go Home"]
            })
        })]
    }) : e.jsxs("div", {
        className: "w-full flex flex-col pt-24 items-center justify-center",
        children: [e.jsx("h1", {
            className: "text-[6rem] font-bold tracking-tight text-red-400/50 shadow-inner",
            children: "Error"
        }), e.jsxs(c, {
            variant: "destructive",
            className: "w-max mt-8",
            children: [e.jsx(l, {
                className: "h-4 w-4"
            }), e.jsx(o, {
                children: "Error"
            }), e.jsx(m, {
                children: "Something went wrong. Please try again later."
            })]
        }), e.jsx(d, {
            variant: "secondary",
            className: "mt-6",
            children: e.jsxs(x, {
                to: "/",
                className: "inline-flex items-center gap-1",
                children: [e.jsx(h, {}), "Go Home"]
            })
        })]
    })
}
export {C as B, R as S, y as a, B as b, v as c, k as d, L as e, z as f};
