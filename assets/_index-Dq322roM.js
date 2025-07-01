import {D as o, n as s, L as a} from "./components-DmR_25ih.js";
import {B as x, a as h, b as j, c as m, d as p, e as f, S as u, f as N} from "./error-boundary-DoNHze20.js";
import {e as g, B as i} from "./alert-BnNSXUeU.js";
import {C as r, a as n, e as t, b as l, d as c} from "./card-DdgerNtE.js";
import {S as e} from "./settings-DWXd4U9a.js";
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C = g("ListCollapse", [["path", {
    d: "m3 10 2.5-2.5L3 5",
    key: "i6eama"
}], ["path", {
    d: "m3 19 2.5-2.5L3 14",
    key: "w2gmor"
}], ["path", {
    d: "M10 6h11",
    key: "c7qv1k"
}], ["path", {
    d: "M10 12h11",
    key: "6m4ad9"
}], ["path", {
    d: "M10 18h11",
    key: "11hvi2"
}]])
  , A = () => [{
    title: "Pathos Administration"
}];
function y() {
    return s.jsx(h, {
        children: s.jsxs(j, {
            children: [s.jsx(m, {
                children: s.jsx(p, {
                    href: "/",
                    children: "Home"
                })
            }), s.jsx(f, {
                children: s.jsx(u, {})
            }), s.jsx(m, {
                children: s.jsx(N, {
                    children: "Overview"
                })
            })]
        })
    })
}
const P = x
  , B = () => s.jsxs("div", {
    className: "py-6",
    children: [s.jsx("h1", {
        className: "text-3xl font-semibold",
        children: "Administration"
    }), s.jsxs("div", {
        className: "flex flex-wrap gap-8 p-6 max-w-screen-xl",
        children: [s.jsxs(r, {
            className: "w-full max-w-96 min-h-fit",
            children: [s.jsxs(n, {
                children: [s.jsxs(t, {
                    className: "flex items-center gap-1",
                    children: [s.jsx(C, {
                        className: "mt-0.5"
                    }), " App Templates"]
                }), s.jsx(l, {
                    children: "Configure Application Templates"
                })]
            }), s.jsx(c, {
                className: "flex justify-end",
                children: s.jsx(i, {
                    children: s.jsxs(a, {
                        to: "/app-templates",
                        className: "inline-flex gap-1 items-center",
                        children: [s.jsx(e, {}), "Edit"]
                    })
                })
            })]
        }), s.jsxs(r, {
            className: "w-full max-w-96 min-h-fit",
            children: [s.jsxs(n, {
                children: [s.jsxs(t, {
                    className: "flex items-center gap-1",
                    children: [s.jsx(e, {
                        className: "mt-0.5"
                    }), " System Config"]
                }), s.jsx(l, {
                    children: "Configure Cytosine Internal settings"
                })]
            }), s.jsx(c, {
                className: "flex justify-end",
                children: s.jsx(i, {
                    children: s.jsxs(a, {
                        to: "/config-items",
                        className: "inline-flex gap-1 items-center",
                        children: [s.jsx(e, {}), "Configure"]
                    })
                })
            })]
        }), s.jsxs(r, {
            className: "w-full max-w-96 min-h-fit",
            children: [s.jsxs(n, {
                children: [s.jsxs(t, {
                    className: "flex items-center gap-1",
                    children: [s.jsx(e, {
                        className: "mt-0.5"
                    }), " Permission Policies"]
                }), s.jsx(l, {
                    children: "Configure Pathos Permissions Policies"
                })]
            }), s.jsx(c, {
                className: "flex justify-end",
                children: s.jsx(i, {
                    children: s.jsxs(a, {
                        to: "/permission-policies",
                        className: "inline-flex gap-1 items-center",
                        children: [s.jsx(e, {}), "Configure"]
                    })
                })
            })]
        })]
    })]
});
function S() {
    const {isAdmin: d} = o();
    return s.jsxs("div", {
        children: [s.jsx("div", {
            className: "py-3",
            children: s.jsx(y, {})
        }), d ? s.jsx(B, {}) : s.jsxs("div", {
            className: "py-6",
            children: [s.jsx("h1", {
                className: "text-3xl font-semibold",
                children: "Administration"
            }), s.jsx("p", {
                className: "text-zinc-500",
                children: "You do not have permission to access the administration panel."
            })]
        })]
    })
}
export {P as ErrorBoundary, S as default, A as meta};
