import {o as un, p as ln, q as dn, t as fn, r as s, _ as pn, n as r, L as xe, v as mn, O as hn, w as xn, x as gn, M as vn, y as wn, z as Mn, S as yn} from "./components-DmR_25ih.js";
import {c as Ue, a as I, u as O, b as Rn, d as Ke, e as Me, C as Cn, B as De, L as bn, A as Pe, f as Te, g as ke, h as Oe, H as Nn} from "./alert-BnNSXUeU.js";
import {c as ce, P as S, u as ie, a as W, b as ze, d as ge, e as g, f as $e, g as Be, h as Ve, R as _n, A as In, i as Sn, j as En, k as jn, l as An, m as Dn, F as Pn, D as Tn, C as kn, n as On, o as Ln} from "./check-C2Jf-NGV.js";
import {r as Fn} from "./index-BrGSZei8.js";
import {B as Gn} from "./badge-BO-BUPwj.js";
/**
 * @remix-run/react v2.16.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
let Le = "positions";
function Un({getKey: e, ...t}) {
    let {isSpaMode: n} = un()
      , o = ln()
      , a = dn();
    fn({
        getKey: e,
        storageKey: Le
    });
    let c = s.useMemo( () => {
        if (!e)
            return null;
        let u = e(o, a);
        return u !== o.key ? u : null
    }
    , []);
    if (n)
        return null;
    let d = ( (u, p) => {
        if (!window.history.state || !window.history.state.key) {
            let f = Math.random().toString(32).slice(2);
            window.history.replaceState({
                key: f
            }, "")
        }
        try {
            let l = JSON.parse(sessionStorage.getItem(u) || "{}")[p || window.history.state.key];
            typeof l == "number" && window.scrollTo(0, l)
        } catch (f) {
            console.error(f),
            sessionStorage.removeItem(u)
        }
    }
    ).toString();
    return s.createElement("script", pn({}, t, {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: `(${d})(${JSON.stringify(Le)}, ${JSON.stringify(c)})`
        }
    }))
}
const Kn = "/assets/tailwind-BtqrfEGf.css"
  , zn = "/assets/style-Dl9Bm5cW.css"
  , $n = () => r.jsxs(xe, {
    to: "/",
    className: Ue("flex items-center justify-start gap-4 w-fit group"),
    children: [r.jsx("img", {
        src: "/pathos-logo-64x64.png",
        alt: "Pathos Logo",
        width: 64,
        height: 64
    }), r.jsx("h1", {
        className: "text-3xl hidden sm:block font-medium text-gray-100 text-gray-150 group-hover:underline decoration-gray-400/50 decoration-3 underline-offset-4 transition-all",
        children: "Pathos - III"
    })]
});
var Bn = Fn();
function Vn() {
    return Bn.useSyncExternalStore(Hn, () => !0, () => !1)
}
function Hn() {
    return () => {}
}
var ye = "Avatar"
  , [Wn,Or] = ce(ye)
  , [Yn,He] = Wn(ye)
  , We = s.forwardRef( (e, t) => {
    const {__scopeAvatar: n, ...o} = e
      , [a,c] = s.useState("idle");
    return r.jsx(Yn, {
        scope: n,
        imageLoadingStatus: a,
        onImageLoadingStatusChange: c,
        children: r.jsx(S.span, {
            ...o,
            ref: t
        })
    })
}
);
We.displayName = ye;
var Ye = "AvatarImage"
  , Xe = s.forwardRef( (e, t) => {
    const {__scopeAvatar: n, src: o, onLoadingStatusChange: a= () => {}
    , ...c} = e
      , d = He(Ye, n)
      , u = Xn(o, c)
      , p = ie(f => {
        a(f),
        d.onImageLoadingStatusChange(f)
    }
    );
    return W( () => {
        u !== "idle" && p(u)
    }
    , [u, p]),
    u === "loaded" ? r.jsx(S.img, {
        ...c,
        ref: t,
        src: o
    }) : null
}
);
Xe.displayName = Ye;
var qe = "AvatarFallback"
  , Je = s.forwardRef( (e, t) => {
    const {__scopeAvatar: n, delayMs: o, ...a} = e
      , c = He(qe, n)
      , [d,u] = s.useState(o === void 0);
    return s.useEffect( () => {
        if (o !== void 0) {
            const p = window.setTimeout( () => u(!0), o);
            return () => window.clearTimeout(p)
        }
    }
    , [o]),
    d && c.imageLoadingStatus !== "loaded" ? r.jsx(S.span, {
        ...a,
        ref: t
    }) : null
}
);
Je.displayName = qe;
function Fe(e, t) {
    return e ? t ? (e.src !== t && (e.src = t),
    e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
}
function Xn(e, {referrerPolicy: t, crossOrigin: n}) {
    const o = Vn()
      , a = s.useRef(null)
      , c = o ? (a.current || (a.current = new window.Image),
    a.current) : null
      , [d,u] = s.useState( () => Fe(c, e));
    return W( () => {
        u(Fe(c, e))
    }
    , [c, e]),
    W( () => {
        const p = i => () => {
            u(i)
        }
        ;
        if (!c)
            return;
        const f = p("loaded")
          , l = p("error");
        return c.addEventListener("load", f),
        c.addEventListener("error", l),
        t && (c.referrerPolicy = t),
        typeof n == "string" && (c.crossOrigin = n),
        () => {
            c.removeEventListener("load", f),
            c.removeEventListener("error", l)
        }
    }
    , [c, n, t]),
    d
}
var Ze = We
  , Qe = Xe
  , et = Je;
const tt = s.forwardRef( ({className: e, ...t}, n) => r.jsx(Ze, {
    ref: n,
    className: I("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
    ...t
}));
tt.displayName = Ze.displayName;
const nt = s.forwardRef( ({className: e, ...t}, n) => r.jsx(Qe, {
    ref: n,
    className: I("aspect-square h-full w-full", e),
    ...t
}));
nt.displayName = Qe.displayName;
const ot = s.forwardRef( ({className: e, ...t}, n) => r.jsx(et, {
    ref: n,
    className: I("flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800", e),
    ...t
}));
ot.displayName = et.displayName;
function qn(e, t) {
    return s.useReducer( (n, o) => t[n][o] ?? n, e)
}
var q = e => {
    const {present: t, children: n} = e
      , o = Jn(t)
      , a = typeof n == "function" ? n({
        present: o.isPresent
    }) : s.Children.only(n)
      , c = O(o.ref, Zn(a));
    return typeof n == "function" || o.isPresent ? s.cloneElement(a, {
        ref: c
    }) : null
}
;
q.displayName = "Presence";
function Jn(e) {
    const [t,n] = s.useState()
      , o = s.useRef({})
      , a = s.useRef(e)
      , c = s.useRef("none")
      , d = e ? "mounted" : "unmounted"
      , [u,p] = qn(d, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return s.useEffect( () => {
        const f = re(o.current);
        c.current = u === "mounted" ? f : "none"
    }
    , [u]),
    W( () => {
        const f = o.current
          , l = a.current;
        if (l !== e) {
            const m = c.current
              , x = re(f);
            e ? p("MOUNT") : x === "none" || (f == null ? void 0 : f.display) === "none" ? p("UNMOUNT") : p(l && m !== x ? "ANIMATION_OUT" : "UNMOUNT"),
            a.current = e
        }
    }
    , [e, p]),
    W( () => {
        if (t) {
            let f;
            const l = t.ownerDocument.defaultView ?? window
              , i = x => {
                const w = re(o.current).includes(x.animationName);
                if (x.target === t && w && (p("ANIMATION_END"),
                !a.current)) {
                    const M = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    f = l.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = M)
                    }
                    )
                }
            }
              , m = x => {
                x.target === t && (c.current = re(o.current))
            }
            ;
            return t.addEventListener("animationstart", m),
            t.addEventListener("animationcancel", i),
            t.addEventListener("animationend", i),
            () => {
                l.clearTimeout(f),
                t.removeEventListener("animationstart", m),
                t.removeEventListener("animationcancel", i),
                t.removeEventListener("animationend", i)
            }
        } else
            p("ANIMATION_END")
    }
    , [t, p]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(u),
        ref: s.useCallback(f => {
            f && (o.current = getComputedStyle(f)),
            n(f)
        }
        , [])
    }
}
function re(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function Zn(e) {
    var o, a;
    let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var he = "rovingFocusGroup.onEntryFocus"
  , Qn = {
    bubbles: !1,
    cancelable: !0
}
  , J = "RovingFocusGroup"
  , [ve,rt,eo] = ze(J)
  , [to,at] = ce(J, [eo])
  , [no,oo] = to(J)
  , st = s.forwardRef( (e, t) => r.jsx(ve.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: r.jsx(ve.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: r.jsx(ro, {
            ...e,
            ref: t
        })
    })
}));
st.displayName = J;
var ro = s.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, orientation: o, loop: a=!1, dir: c, currentTabStopId: d, defaultCurrentTabStopId: u, onCurrentTabStopIdChange: p, onEntryFocus: f, preventScrollOnEntryFocus: l=!1, ...i} = e
      , m = s.useRef(null)
      , x = O(t, m)
      , v = $e(c)
      , [w,M] = Be({
        prop: d,
        defaultProp: u ?? null,
        onChange: p,
        caller: J
    })
      , [j,y] = s.useState(!1)
      , R = ie(f)
      , ee = rt(n)
      , z = s.useRef(!1)
      , [te,T] = s.useState(0);
    return s.useEffect( () => {
        const C = m.current;
        if (C)
            return C.addEventListener(he, R),
            () => C.removeEventListener(he, R)
    }
    , [R]),
    r.jsx(no, {
        scope: n,
        orientation: o,
        dir: v,
        loop: a,
        currentTabStopId: w,
        onItemFocus: s.useCallback(C => M(C), [M]),
        onItemShiftTab: s.useCallback( () => y(!0), []),
        onFocusableItemAdd: s.useCallback( () => T(C => C + 1), []),
        onFocusableItemRemove: s.useCallback( () => T(C => C - 1), []),
        children: r.jsx(S.div, {
            tabIndex: j || te === 0 ? -1 : 0,
            "data-orientation": o,
            ...i,
            ref: x,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: g(e.onMouseDown, () => {
                z.current = !0
            }
            ),
            onFocus: g(e.onFocus, C => {
                const G = !z.current;
                if (C.target === C.currentTarget && G && !j) {
                    const k = new CustomEvent(he,Qn);
                    if (C.currentTarget.dispatchEvent(k),
                    !k.defaultPrevented) {
                        const $ = ee().filter(A => A.focusable)
                          , B = $.find(A => A.active)
                          , ne = $.find(A => A.id === w)
                          , fe = [B, ne, ...$].filter(Boolean).map(A => A.ref.current);
                        ut(fe, l)
                    }
                }
                z.current = !1
            }
            ),
            onBlur: g(e.onBlur, () => y(!1))
        })
    })
}
)
  , ct = "RovingFocusGroupItem"
  , it = s.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, focusable: o=!0, active: a=!1, tabStopId: c, children: d, ...u} = e
      , p = ge()
      , f = c || p
      , l = oo(ct, n)
      , i = l.currentTabStopId === f
      , m = rt(n)
      , {onFocusableItemAdd: x, onFocusableItemRemove: v} = l;
    return s.useEffect( () => {
        if (o)
            return x(),
            () => v()
    }
    , [o, x, v]),
    r.jsx(ve.ItemSlot, {
        scope: n,
        id: f,
        focusable: o,
        active: a,
        children: r.jsx(S.span, {
            tabIndex: i ? 0 : -1,
            "data-orientation": l.orientation,
            ...u,
            ref: t,
            onMouseDown: g(e.onMouseDown, w => {
                o ? l.onItemFocus(f) : w.preventDefault()
            }
            ),
            onFocus: g(e.onFocus, () => l.onItemFocus(f)),
            onKeyDown: g(e.onKeyDown, w => {
                if (w.key === "Tab" && w.shiftKey) {
                    l.onItemShiftTab();
                    return
                }
                if (w.target !== w.currentTarget)
                    return;
                const M = co(w, l.orientation, l.dir);
                if (M !== void 0) {
                    if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey)
                        return;
                    w.preventDefault();
                    let y = m().filter(R => R.focusable).map(R => R.ref.current);
                    if (M === "last")
                        y.reverse();
                    else if (M === "prev" || M === "next") {
                        M === "prev" && y.reverse();
                        const R = y.indexOf(w.currentTarget);
                        y = l.loop ? io(y, R + 1) : y.slice(R + 1)
                    }
                    setTimeout( () => ut(y))
                }
            }
            ),
            children: typeof d == "function" ? d({
                isCurrentTabStop: i
            }) : d
        })
    })
}
);
it.displayName = ct;
var ao = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function so(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}
function co(e, t, n) {
    const o = so(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
        return ao[o]
}
function ut(e, t=!1) {
    const n = document.activeElement;
    for (const o of e)
        if (o === n || (o.focus({
            preventScroll: t
        }),
        document.activeElement !== n))
            return
}
function io(e, t) {
    return e.map( (n, o) => e[(t + o) % e.length])
}
var uo = st
  , lo = it
  , we = ["Enter", " "]
  , fo = ["ArrowDown", "PageUp", "Home"]
  , lt = ["ArrowUp", "PageDown", "End"]
  , po = [...fo, ...lt]
  , mo = {
    ltr: [...we, "ArrowRight"],
    rtl: [...we, "ArrowLeft"]
}
  , ho = {
    ltr: ["ArrowLeft"],
    rtl: ["ArrowRight"]
}
  , Z = "Menu"
  , [Y,xo,go] = ze(Z)
  , [L,dt] = ce(Z, [go, Ve, at])
  , ue = Ve()
  , ft = at()
  , [vo,F] = L(Z)
  , [wo,Q] = L(Z)
  , pt = e => {
    const {__scopeMenu: t, open: n=!1, children: o, dir: a, onOpenChange: c, modal: d=!0} = e
      , u = ue(t)
      , [p,f] = s.useState(null)
      , l = s.useRef(!1)
      , i = ie(c)
      , m = $e(a);
    return s.useEffect( () => {
        const x = () => {
            l.current = !0,
            document.addEventListener("pointerdown", v, {
                capture: !0,
                once: !0
            }),
            document.addEventListener("pointermove", v, {
                capture: !0,
                once: !0
            })
        }
          , v = () => l.current = !1;
        return document.addEventListener("keydown", x, {
            capture: !0
        }),
        () => {
            document.removeEventListener("keydown", x, {
                capture: !0
            }),
            document.removeEventListener("pointerdown", v, {
                capture: !0
            }),
            document.removeEventListener("pointermove", v, {
                capture: !0
            })
        }
    }
    , []),
    r.jsx(_n, {
        ...u,
        children: r.jsx(vo, {
            scope: t,
            open: n,
            onOpenChange: i,
            content: p,
            onContentChange: f,
            children: r.jsx(wo, {
                scope: t,
                onClose: s.useCallback( () => i(!1), [i]),
                isUsingKeyboardRef: l,
                dir: m,
                modal: d,
                children: o
            })
        })
    })
}
;
pt.displayName = Z;
var Mo = "MenuAnchor"
  , Re = s.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...o} = e
      , a = ue(n);
    return r.jsx(In, {
        ...a,
        ...o,
        ref: t
    })
}
);
Re.displayName = Mo;
var Ce = "MenuPortal"
  , [yo,mt] = L(Ce, {
    forceMount: void 0
})
  , ht = e => {
    const {__scopeMenu: t, forceMount: n, children: o, container: a} = e
      , c = F(Ce, t);
    return r.jsx(yo, {
        scope: t,
        forceMount: n,
        children: r.jsx(q, {
            present: n || c.open,
            children: r.jsx(Sn, {
                asChild: !0,
                container: a,
                children: o
            })
        })
    })
}
;
ht.displayName = Ce;
var _ = "MenuContent"
  , [Ro,be] = L(_)
  , xt = s.forwardRef( (e, t) => {
    const n = mt(_, e.__scopeMenu)
      , {forceMount: o=n.forceMount, ...a} = e
      , c = F(_, e.__scopeMenu)
      , d = Q(_, e.__scopeMenu);
    return r.jsx(Y.Provider, {
        scope: e.__scopeMenu,
        children: r.jsx(q, {
            present: o || c.open,
            children: r.jsx(Y.Slot, {
                scope: e.__scopeMenu,
                children: d.modal ? r.jsx(Co, {
                    ...a,
                    ref: t
                }) : r.jsx(bo, {
                    ...a,
                    ref: t
                })
            })
        })
    })
}
)
  , Co = s.forwardRef( (e, t) => {
    const n = F(_, e.__scopeMenu)
      , o = s.useRef(null)
      , a = O(t, o);
    return s.useEffect( () => {
        const c = o.current;
        if (c)
            return En(c)
    }
    , []),
    r.jsx(Ne, {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: g(e.onFocusOutside, c => c.preventDefault(), {
            checkForDefaultPrevented: !1
        }),
        onDismiss: () => n.onOpenChange(!1)
    })
}
)
  , bo = s.forwardRef( (e, t) => {
    const n = F(_, e.__scopeMenu);
    return r.jsx(Ne, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1)
    })
}
)
  , No = Rn("MenuContent.ScrollLock")
  , Ne = s.forwardRef( (e, t) => {
    const {__scopeMenu: n, loop: o=!1, trapFocus: a, onOpenAutoFocus: c, onCloseAutoFocus: d, disableOutsidePointerEvents: u, onEntryFocus: p, onEscapeKeyDown: f, onPointerDownOutside: l, onFocusOutside: i, onInteractOutside: m, onDismiss: x, disableOutsideScroll: v, ...w} = e
      , M = F(_, n)
      , j = Q(_, n)
      , y = ue(n)
      , R = ft(n)
      , ee = xo(n)
      , [z,te] = s.useState(null)
      , T = s.useRef(null)
      , C = O(t, T, M.onContentChange)
      , G = s.useRef(0)
      , k = s.useRef("")
      , $ = s.useRef(0)
      , B = s.useRef(null)
      , ne = s.useRef("right")
      , oe = s.useRef(0)
      , fe = v ? Dn : s.Fragment
      , A = v ? {
        as: No,
        allowPinchZoom: !0
    } : void 0
      , cn = h => {
        var K, je;
        const N = k.current + h
          , E = ee().filter(D => !D.disabled)
          , P = document.activeElement
          , pe = (K = E.find(D => D.ref.current === P)) == null ? void 0 : K.textValue
          , me = E.map(D => D.textValue)
          , Ee = Lo(me, N, pe)
          , V = (je = E.find(D => D.textValue === Ee)) == null ? void 0 : je.ref.current;
        (function D(Ae) {
            k.current = Ae,
            window.clearTimeout(G.current),
            Ae !== "" && (G.current = window.setTimeout( () => D(""), 1e3))
        }
        )(N),
        V && setTimeout( () => V.focus())
    }
    ;
    s.useEffect( () => () => window.clearTimeout(G.current), []),
    An();
    const U = s.useCallback(h => {
        var E, P;
        return ne.current === ((E = B.current) == null ? void 0 : E.side) && Go(h, (P = B.current) == null ? void 0 : P.area)
    }
    , []);
    return r.jsx(Ro, {
        scope: n,
        searchRef: k,
        onItemEnter: s.useCallback(h => {
            U(h) && h.preventDefault()
        }
        , [U]),
        onItemLeave: s.useCallback(h => {
            var N;
            U(h) || ((N = T.current) == null || N.focus(),
            te(null))
        }
        , [U]),
        onTriggerLeave: s.useCallback(h => {
            U(h) && h.preventDefault()
        }
        , [U]),
        pointerGraceTimerRef: $,
        onPointerGraceIntentChange: s.useCallback(h => {
            B.current = h
        }
        , []),
        children: r.jsx(fe, {
            ...A,
            children: r.jsx(Pn, {
                asChild: !0,
                trapped: a,
                onMountAutoFocus: g(c, h => {
                    var N;
                    h.preventDefault(),
                    (N = T.current) == null || N.focus({
                        preventScroll: !0
                    })
                }
                ),
                onUnmountAutoFocus: d,
                children: r.jsx(Tn, {
                    asChild: !0,
                    disableOutsidePointerEvents: u,
                    onEscapeKeyDown: f,
                    onPointerDownOutside: l,
                    onFocusOutside: i,
                    onInteractOutside: m,
                    onDismiss: x,
                    children: r.jsx(uo, {
                        asChild: !0,
                        ...R,
                        dir: j.dir,
                        orientation: "vertical",
                        loop: o,
                        currentTabStopId: z,
                        onCurrentTabStopIdChange: te,
                        onEntryFocus: g(p, h => {
                            j.isUsingKeyboardRef.current || h.preventDefault()
                        }
                        ),
                        preventScrollOnEntryFocus: !0,
                        children: r.jsx(kn, {
                            role: "menu",
                            "aria-orientation": "vertical",
                            "data-state": Dt(M.open),
                            "data-radix-menu-content": "",
                            dir: j.dir,
                            ...y,
                            ...w,
                            ref: C,
                            style: {
                                outline: "none",
                                ...w.style
                            },
                            onKeyDown: g(w.onKeyDown, h => {
                                const E = h.target.closest("[data-radix-menu-content]") === h.currentTarget
                                  , P = h.ctrlKey || h.altKey || h.metaKey
                                  , pe = h.key.length === 1;
                                E && (h.key === "Tab" && h.preventDefault(),
                                !P && pe && cn(h.key));
                                const me = T.current;
                                if (h.target !== me || !po.includes(h.key))
                                    return;
                                h.preventDefault();
                                const V = ee().filter(K => !K.disabled).map(K => K.ref.current);
                                lt.includes(h.key) && V.reverse(),
                                ko(V)
                            }
                            ),
                            onBlur: g(e.onBlur, h => {
                                h.currentTarget.contains(h.target) || (window.clearTimeout(G.current),
                                k.current = "")
                            }
                            ),
                            onPointerMove: g(e.onPointerMove, X(h => {
                                const N = h.target
                                  , E = oe.current !== h.clientX;
                                if (h.currentTarget.contains(N) && E) {
                                    const P = h.clientX > oe.current ? "right" : "left";
                                    ne.current = P,
                                    oe.current = h.clientX
                                }
                            }
                            ))
                        })
                    })
                })
            })
        })
    })
}
);
xt.displayName = _;
var _o = "MenuGroup"
  , _e = s.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...o} = e;
    return r.jsx(S.div, {
        role: "group",
        ...o,
        ref: t
    })
}
);
_e.displayName = _o;
var Io = "MenuLabel"
  , gt = s.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...o} = e;
    return r.jsx(S.div, {
        ...o,
        ref: t
    })
}
);
gt.displayName = Io;
var ae = "MenuItem"
  , Ge = "menu.itemSelect"
  , le = s.forwardRef( (e, t) => {
    const {disabled: n=!1, onSelect: o, ...a} = e
      , c = s.useRef(null)
      , d = Q(ae, e.__scopeMenu)
      , u = be(ae, e.__scopeMenu)
      , p = O(t, c)
      , f = s.useRef(!1)
      , l = () => {
        const i = c.current;
        if (!n && i) {
            const m = new CustomEvent(Ge,{
                bubbles: !0,
                cancelable: !0
            });
            i.addEventListener(Ge, x => o == null ? void 0 : o(x), {
                once: !0
            }),
            jn(i, m),
            m.defaultPrevented ? f.current = !1 : d.onClose()
        }
    }
    ;
    return r.jsx(vt, {
        ...a,
        ref: p,
        disabled: n,
        onClick: g(e.onClick, l),
        onPointerDown: i => {
            var m;
            (m = e.onPointerDown) == null || m.call(e, i),
            f.current = !0
        }
        ,
        onPointerUp: g(e.onPointerUp, i => {
            var m;
            f.current || (m = i.currentTarget) == null || m.click()
        }
        ),
        onKeyDown: g(e.onKeyDown, i => {
            const m = u.searchRef.current !== "";
            n || m && i.key === " " || we.includes(i.key) && (i.currentTarget.click(),
            i.preventDefault())
        }
        )
    })
}
);
le.displayName = ae;
var vt = s.forwardRef( (e, t) => {
    const {__scopeMenu: n, disabled: o=!1, textValue: a, ...c} = e
      , d = be(ae, n)
      , u = ft(n)
      , p = s.useRef(null)
      , f = O(t, p)
      , [l,i] = s.useState(!1)
      , [m,x] = s.useState("");
    return s.useEffect( () => {
        const v = p.current;
        v && x((v.textContent ?? "").trim())
    }
    , [c.children]),
    r.jsx(Y.ItemSlot, {
        scope: n,
        disabled: o,
        textValue: a ?? m,
        children: r.jsx(lo, {
            asChild: !0,
            ...u,
            focusable: !o,
            children: r.jsx(S.div, {
                role: "menuitem",
                "data-highlighted": l ? "" : void 0,
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                ...c,
                ref: f,
                onPointerMove: g(e.onPointerMove, X(v => {
                    o ? d.onItemLeave(v) : (d.onItemEnter(v),
                    v.defaultPrevented || v.currentTarget.focus({
                        preventScroll: !0
                    }))
                }
                )),
                onPointerLeave: g(e.onPointerLeave, X(v => d.onItemLeave(v))),
                onFocus: g(e.onFocus, () => i(!0)),
                onBlur: g(e.onBlur, () => i(!1))
            })
        })
    })
}
)
  , So = "MenuCheckboxItem"
  , wt = s.forwardRef( (e, t) => {
    const {checked: n=!1, onCheckedChange: o, ...a} = e;
    return r.jsx(bt, {
        scope: e.__scopeMenu,
        checked: n,
        children: r.jsx(le, {
            role: "menuitemcheckbox",
            "aria-checked": se(n) ? "mixed" : n,
            ...a,
            ref: t,
            "data-state": Se(n),
            onSelect: g(a.onSelect, () => o == null ? void 0 : o(se(n) ? !0 : !n), {
                checkForDefaultPrevented: !1
            })
        })
    })
}
);
wt.displayName = So;
var Mt = "MenuRadioGroup"
  , [Eo,jo] = L(Mt, {
    value: void 0,
    onValueChange: () => {}
})
  , yt = s.forwardRef( (e, t) => {
    const {value: n, onValueChange: o, ...a} = e
      , c = ie(o);
    return r.jsx(Eo, {
        scope: e.__scopeMenu,
        value: n,
        onValueChange: c,
        children: r.jsx(_e, {
            ...a,
            ref: t
        })
    })
}
);
yt.displayName = Mt;
var Rt = "MenuRadioItem"
  , Ct = s.forwardRef( (e, t) => {
    const {value: n, ...o} = e
      , a = jo(Rt, e.__scopeMenu)
      , c = n === a.value;
    return r.jsx(bt, {
        scope: e.__scopeMenu,
        checked: c,
        children: r.jsx(le, {
            role: "menuitemradio",
            "aria-checked": c,
            ...o,
            ref: t,
            "data-state": Se(c),
            onSelect: g(o.onSelect, () => {
                var d;
                return (d = a.onValueChange) == null ? void 0 : d.call(a, n)
            }
            , {
                checkForDefaultPrevented: !1
            })
        })
    })
}
);
Ct.displayName = Rt;
var Ie = "MenuItemIndicator"
  , [bt,Ao] = L(Ie, {
    checked: !1
})
  , Nt = s.forwardRef( (e, t) => {
    const {__scopeMenu: n, forceMount: o, ...a} = e
      , c = Ao(Ie, n);
    return r.jsx(q, {
        present: o || se(c.checked) || c.checked === !0,
        children: r.jsx(S.span, {
            ...a,
            ref: t,
            "data-state": Se(c.checked)
        })
    })
}
);
Nt.displayName = Ie;
var Do = "MenuSeparator"
  , _t = s.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...o} = e;
    return r.jsx(S.div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t
    })
}
);
_t.displayName = Do;
var Po = "MenuArrow"
  , It = s.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...o} = e
      , a = ue(n);
    return r.jsx(On, {
        ...a,
        ...o,
        ref: t
    })
}
);
It.displayName = Po;
var To = "MenuSub"
  , [Lr,St] = L(To)
  , H = "MenuSubTrigger"
  , Et = s.forwardRef( (e, t) => {
    const n = F(H, e.__scopeMenu)
      , o = Q(H, e.__scopeMenu)
      , a = St(H, e.__scopeMenu)
      , c = be(H, e.__scopeMenu)
      , d = s.useRef(null)
      , {pointerGraceTimerRef: u, onPointerGraceIntentChange: p} = c
      , f = {
        __scopeMenu: e.__scopeMenu
    }
      , l = s.useCallback( () => {
        d.current && window.clearTimeout(d.current),
        d.current = null
    }
    , []);
    return s.useEffect( () => l, [l]),
    s.useEffect( () => {
        const i = u.current;
        return () => {
            window.clearTimeout(i),
            p(null)
        }
    }
    , [u, p]),
    r.jsx(Re, {
        asChild: !0,
        ...f,
        children: r.jsx(vt, {
            id: a.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": n.open,
            "aria-controls": a.contentId,
            "data-state": Dt(n.open),
            ...e,
            ref: Ke(t, a.onTriggerChange),
            onClick: i => {
                var m;
                (m = e.onClick) == null || m.call(e, i),
                !(e.disabled || i.defaultPrevented) && (i.currentTarget.focus(),
                n.open || n.onOpenChange(!0))
            }
            ,
            onPointerMove: g(e.onPointerMove, X(i => {
                c.onItemEnter(i),
                !i.defaultPrevented && !e.disabled && !n.open && !d.current && (c.onPointerGraceIntentChange(null),
                d.current = window.setTimeout( () => {
                    n.onOpenChange(!0),
                    l()
                }
                , 100))
            }
            )),
            onPointerLeave: g(e.onPointerLeave, X(i => {
                var x, v;
                l();
                const m = (x = n.content) == null ? void 0 : x.getBoundingClientRect();
                if (m) {
                    const w = (v = n.content) == null ? void 0 : v.dataset.side
                      , M = w === "right"
                      , j = M ? -5 : 5
                      , y = m[M ? "left" : "right"]
                      , R = m[M ? "right" : "left"];
                    c.onPointerGraceIntentChange({
                        area: [{
                            x: i.clientX + j,
                            y: i.clientY
                        }, {
                            x: y,
                            y: m.top
                        }, {
                            x: R,
                            y: m.top
                        }, {
                            x: R,
                            y: m.bottom
                        }, {
                            x: y,
                            y: m.bottom
                        }],
                        side: w
                    }),
                    window.clearTimeout(u.current),
                    u.current = window.setTimeout( () => c.onPointerGraceIntentChange(null), 300)
                } else {
                    if (c.onTriggerLeave(i),
                    i.defaultPrevented)
                        return;
                    c.onPointerGraceIntentChange(null)
                }
            }
            )),
            onKeyDown: g(e.onKeyDown, i => {
                var x;
                const m = c.searchRef.current !== "";
                e.disabled || m && i.key === " " || mo[o.dir].includes(i.key) && (n.onOpenChange(!0),
                (x = n.content) == null || x.focus(),
                i.preventDefault())
            }
            )
        })
    })
}
);
Et.displayName = H;
var jt = "MenuSubContent"
  , At = s.forwardRef( (e, t) => {
    const n = mt(_, e.__scopeMenu)
      , {forceMount: o=n.forceMount, ...a} = e
      , c = F(_, e.__scopeMenu)
      , d = Q(_, e.__scopeMenu)
      , u = St(jt, e.__scopeMenu)
      , p = s.useRef(null)
      , f = O(t, p);
    return r.jsx(Y.Provider, {
        scope: e.__scopeMenu,
        children: r.jsx(q, {
            present: o || c.open,
            children: r.jsx(Y.Slot, {
                scope: e.__scopeMenu,
                children: r.jsx(Ne, {
                    id: u.contentId,
                    "aria-labelledby": u.triggerId,
                    ...a,
                    ref: f,
                    align: "start",
                    side: d.dir === "rtl" ? "left" : "right",
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: l => {
                        var i;
                        d.isUsingKeyboardRef.current && ((i = p.current) == null || i.focus()),
                        l.preventDefault()
                    }
                    ,
                    onCloseAutoFocus: l => l.preventDefault(),
                    onFocusOutside: g(e.onFocusOutside, l => {
                        l.target !== u.trigger && c.onOpenChange(!1)
                    }
                    ),
                    onEscapeKeyDown: g(e.onEscapeKeyDown, l => {
                        d.onClose(),
                        l.preventDefault()
                    }
                    ),
                    onKeyDown: g(e.onKeyDown, l => {
                        var x;
                        const i = l.currentTarget.contains(l.target)
                          , m = ho[d.dir].includes(l.key);
                        i && m && (c.onOpenChange(!1),
                        (x = u.trigger) == null || x.focus(),
                        l.preventDefault())
                    }
                    )
                })
            })
        })
    })
}
);
At.displayName = jt;
function Dt(e) {
    return e ? "open" : "closed"
}
function se(e) {
    return e === "indeterminate"
}
function Se(e) {
    return se(e) ? "indeterminate" : e ? "checked" : "unchecked"
}
function ko(e) {
    const t = document.activeElement;
    for (const n of e)
        if (n === t || (n.focus(),
        document.activeElement !== t))
            return
}
function Oo(e, t) {
    return e.map( (n, o) => e[(t + o) % e.length])
}
function Lo(e, t, n) {
    const a = t.length > 1 && Array.from(t).every(f => f === t[0]) ? t[0] : t
      , c = n ? e.indexOf(n) : -1;
    let d = Oo(e, Math.max(c, 0));
    a.length === 1 && (d = d.filter(f => f !== n));
    const p = d.find(f => f.toLowerCase().startsWith(a.toLowerCase()));
    return p !== n ? p : void 0
}
function Fo(e, t) {
    const {x: n, y: o} = e;
    let a = !1;
    for (let c = 0, d = t.length - 1; c < t.length; d = c++) {
        const u = t[c]
          , p = t[d]
          , f = u.x
          , l = u.y
          , i = p.x
          , m = p.y;
        l > o != m > o && n < (i - f) * (o - l) / (m - l) + f && (a = !a)
    }
    return a
}
function Go(e, t) {
    if (!t)
        return !1;
    const n = {
        x: e.clientX,
        y: e.clientY
    };
    return Fo(n, t)
}
function X(e) {
    return t => t.pointerType === "mouse" ? e(t) : void 0
}
var Uo = pt
  , Ko = Re
  , zo = ht
  , $o = xt
  , Bo = _e
  , Vo = gt
  , Ho = le
  , Wo = wt
  , Yo = yt
  , Xo = Ct
  , qo = Nt
  , Jo = _t
  , Zo = It
  , Qo = Et
  , er = At
  , de = "DropdownMenu"
  , [tr,Fr] = ce(de, [dt])
  , b = dt()
  , [nr,Pt] = tr(de)
  , Tt = e => {
    const {__scopeDropdownMenu: t, children: n, dir: o, open: a, defaultOpen: c, onOpenChange: d, modal: u=!0} = e
      , p = b(t)
      , f = s.useRef(null)
      , [l,i] = Be({
        prop: a,
        defaultProp: c ?? !1,
        onChange: d,
        caller: de
    });
    return r.jsx(nr, {
        scope: t,
        triggerId: ge(),
        triggerRef: f,
        contentId: ge(),
        open: l,
        onOpenChange: i,
        onOpenToggle: s.useCallback( () => i(m => !m), [i]),
        modal: u,
        children: r.jsx(Uo, {
            ...p,
            open: l,
            onOpenChange: i,
            dir: o,
            modal: u,
            children: n
        })
    })
}
;
Tt.displayName = de;
var kt = "DropdownMenuTrigger"
  , Ot = s.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, disabled: o=!1, ...a} = e
      , c = Pt(kt, n)
      , d = b(n);
    return r.jsx(Ko, {
        asChild: !0,
        ...d,
        children: r.jsx(S.button, {
            type: "button",
            id: c.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": c.open,
            "aria-controls": c.open ? c.contentId : void 0,
            "data-state": c.open ? "open" : "closed",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            ...a,
            ref: Ke(t, c.triggerRef),
            onPointerDown: g(e.onPointerDown, u => {
                !o && u.button === 0 && u.ctrlKey === !1 && (c.onOpenToggle(),
                c.open || u.preventDefault())
            }
            ),
            onKeyDown: g(e.onKeyDown, u => {
                o || (["Enter", " "].includes(u.key) && c.onOpenToggle(),
                u.key === "ArrowDown" && c.onOpenChange(!0),
                ["Enter", " ", "ArrowDown"].includes(u.key) && u.preventDefault())
            }
            )
        })
    })
}
);
Ot.displayName = kt;
var or = "DropdownMenuPortal"
  , Lt = e => {
    const {__scopeDropdownMenu: t, ...n} = e
      , o = b(t);
    return r.jsx(zo, {
        ...o,
        ...n
    })
}
;
Lt.displayName = or;
var Ft = "DropdownMenuContent"
  , Gt = s.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...o} = e
      , a = Pt(Ft, n)
      , c = b(n)
      , d = s.useRef(!1);
    return r.jsx($o, {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...c,
        ...o,
        ref: t,
        onCloseAutoFocus: g(e.onCloseAutoFocus, u => {
            var p;
            d.current || (p = a.triggerRef.current) == null || p.focus(),
            d.current = !1,
            u.preventDefault()
        }
        ),
        onInteractOutside: g(e.onInteractOutside, u => {
            const p = u.detail.originalEvent
              , f = p.button === 0 && p.ctrlKey === !0
              , l = p.button === 2 || f;
            (!a.modal || l) && (d.current = !0)
        }
        ),
        style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
Gt.displayName = Ft;
var rr = "DropdownMenuGroup"
  , ar = s.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...o} = e
      , a = b(n);
    return r.jsx(Bo, {
        ...a,
        ...o,
        ref: t
    })
}
);
ar.displayName = rr;
var sr = "DropdownMenuLabel"
  , Ut = s.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...o} = e
      , a = b(n);
    return r.jsx(Vo, {
        ...a,
        ...o,
        ref: t
    })
}
);
Ut.displayName = sr;
var cr = "DropdownMenuItem"
  , Kt = s.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...o} = e
      , a = b(n);
    return r.jsx(Ho, {
        ...a,
        ...o,
        ref: t
    })
}
);
Kt.displayName = cr;
var ir = "DropdownMenuCheckboxItem"
  , zt = s.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...o} = e
      , a = b(n);
    return r.jsx(Wo, {
        ...a,
        ...o,
        ref: t
    })
}
);
zt.displayName = ir;
var ur = "DropdownMenuRadioGroup"
  , lr = s.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...o} = e
      , a = b(n);
    return r.jsx(Yo, {
        ...a,
        ...o,
        ref: t
    })
}
);
lr.displayName = ur;
var dr = "DropdownMenuRadioItem"
  , $t = s.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...o} = e
      , a = b(n);
    return r.jsx(Xo, {
        ...a,
        ...o,
        ref: t
    })
}
);
$t.displayName = dr;
var fr = "DropdownMenuItemIndicator"
  , Bt = s.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...o} = e
      , a = b(n);
    return r.jsx(qo, {
        ...a,
        ...o,
        ref: t
    })
}
);
Bt.displayName = fr;
var pr = "DropdownMenuSeparator"
  , Vt = s.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...o} = e
      , a = b(n);
    return r.jsx(Jo, {
        ...a,
        ...o,
        ref: t
    })
}
);
Vt.displayName = pr;
var mr = "DropdownMenuArrow"
  , hr = s.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...o} = e
      , a = b(n);
    return r.jsx(Zo, {
        ...a,
        ...o,
        ref: t
    })
}
);
hr.displayName = mr;
var xr = "DropdownMenuSubTrigger"
  , Ht = s.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...o} = e
      , a = b(n);
    return r.jsx(Qo, {
        ...a,
        ...o,
        ref: t
    })
}
);
Ht.displayName = xr;
var gr = "DropdownMenuSubContent"
  , Wt = s.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...o} = e
      , a = b(n);
    return r.jsx(er, {
        ...a,
        ...o,
        ref: t,
        style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
Wt.displayName = gr;
var vr = Tt
  , wr = Ot
  , Mr = Lt
  , Yt = Gt
  , Xt = Ut
  , qt = Kt
  , Jt = zt
  , Zt = $t
  , Qt = Bt
  , en = Vt
  , tn = Ht
  , nn = Wt;
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yr = Me("Circle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]);
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = Me("LogOut", [["path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
    key: "1uf3rs"
}], ["polyline", {
    points: "16 17 21 12 16 7",
    key: "1gabdz"
}], ["line", {
    x1: "21",
    x2: "9",
    y1: "12",
    y2: "12",
    key: "1uyos4"
}]]);
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = Me("SquareChevronDown", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
}], ["path", {
    d: "m16 10-4 4-4-4",
    key: "894hmk"
}]])
  , br = vr
  , Nr = wr
  , _r = s.forwardRef( ({className: e, inset: t, children: n, ...o}, a) => r.jsxs(tn, {
    ref: a,
    className: I("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-100 data-[state=open]:bg-zinc-100 dark:focus:bg-zinc-800 dark:data-[state=open]:bg-zinc-800", t && "pl-8", e),
    ...o,
    children: [n, r.jsx(Cn, {
        className: "ml-auto h-4 w-4"
    })]
}));
_r.displayName = tn.displayName;
const Ir = s.forwardRef( ({className: e, ...t}, n) => r.jsx(nn, {
    ref: n,
    className: I("z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50", e),
    ...t
}));
Ir.displayName = nn.displayName;
const on = s.forwardRef( ({className: e, sideOffset: t=4, ...n}, o) => r.jsx(Mr, {
    children: r.jsx(Yt, {
        ref: o,
        sideOffset: t,
        className: I("z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50", e),
        ...n
    })
}));
on.displayName = Yt.displayName;
const rn = s.forwardRef( ({className: e, inset: t, ...n}, o) => r.jsx(qt, {
    ref: o,
    className: I("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50", t && "pl-8", e),
    ...n
}));
rn.displayName = qt.displayName;
const Sr = s.forwardRef( ({className: e, children: t, checked: n, ...o}, a) => r.jsxs(Jt, {
    ref: a,
    className: I("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50", e),
    checked: n,
    ...o,
    children: [r.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: r.jsx(Qt, {
            children: r.jsx(Ln, {
                className: "h-4 w-4"
            })
        })
    }), t]
}));
Sr.displayName = Jt.displayName;
const Er = s.forwardRef( ({className: e, children: t, ...n}, o) => r.jsxs(Zt, {
    ref: o,
    className: I("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50", e),
    ...n,
    children: [r.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: r.jsx(Qt, {
            children: r.jsx(yr, {
                className: "h-2 w-2 fill-current"
            })
        })
    }), t]
}));
Er.displayName = Zt.displayName;
const an = s.forwardRef( ({className: e, inset: t, ...n}, o) => r.jsx(Xt, {
    ref: o,
    className: I("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n
}));
an.displayName = Xt.displayName;
const sn = s.forwardRef( ({className: e, ...t}, n) => r.jsx(en, {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800", e),
    ...t
}));
sn.displayName = en.displayName;
const jr = ({data: e}) => {
    var n, o, a, c;
    const t = mn({
        key: "user-profile"
    });
    return r.jsxs("div", {
        className: Ue("flex items-center justify-start gap-4 w-fit"),
        children: [r.jsxs(tt, {
            className: "w-16 h-16",
            children: [r.jsx(nt, {
                src: e == null ? void 0 : e.picture
            }), r.jsx(ot, {
                children: ((a = (o = (n = e == null ? void 0 : e.username) == null ? void 0 : n.match(/\S+/g)) == null ? void 0 : o.map(d => d.at(0))) == null ? void 0 : a.join("").toUpperCase()) ?? ((c = e == null ? void 0 : e.username.at(0)) == null ? void 0 : c.toUpperCase())
            })]
        }), r.jsxs("div", {
            className: "flex items-start justify-center flex-col gap-1",
            children: [r.jsxs("p", {
                className: "text-xl hidden font-medium text-gray-100 text-gray-150 sm:flex items-center gap-1",
                children: [e == null ? void 0 : e.username, r.jsxs(br, {
                    children: [r.jsx(Nr, {
                        children: r.jsx(Cr, {
                            className: "pt-1"
                        })
                    }), r.jsxs(on, {
                        children: [r.jsx(an, {
                            children: "My Account"
                        }), r.jsx(sn, {}), r.jsxs(rn, {
                            className: "cursor-pointer",
                            onClick: () => {
                                console.log("Clicked"),
                                t.submit({
                                    type: "logout"
                                }, {
                                    method: "POST",
                                    encType: "application/json"
                                })
                            }
                            ,
                            children: [r.jsx(Rr, {}), " Log Out"]
                        })]
                    })]
                })]
            }), r.jsx(Gn, {
                variant: (e == null ? void 0 : e.securityClass) ?? "CD",
                children: (e == null ? void 0 : e.securityClass) ?? "CD"
            })]
        })]
    })
}
  , Gr = () => [{
    rel: "stylesheet",
    href: Kn
}, {
    rel: "stylesheet",
    href: zn
}];
function Ur({children: e}) {
    const t = xn("root")
      , n = gn()
      , o = t == null ? void 0 : t.roblox;
    return r.jsxs("html", {
        lang: "en",
        className: "dark",
        children: [r.jsxs("head", {
            children: [r.jsx("meta", {
                charSet: "utf-8"
            }), r.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }), r.jsx(vn, {}), r.jsx(wn, {})]
        }), r.jsxs("body", {
            children: [r.jsxs("main", {
                className: "w-full h-full min-h-screen max-w-screen p-12 flex flex-col bg-zinc-900 text-zinc-200",
                children: [r.jsxs("div", {
                    className: "w-full h-fit flex justify-between",
                    children: [r.jsx($n, {}), o ? r.jsx(jr, {
                        data: o
                    }) : r.jsx(De, {
                        children: r.jsxs(xe, {
                            to: `${t == null ? void 0 : t.ENV.PUBLIC_API_URL}/auth/roblox/login-admin`,
                            className: "inline-flex items-center gap-1",
                            children: [r.jsx(bn, {}), " Log In"]
                        })
                    })]
                }), Mn(n) ? r.jsxs("div", {
                    className: "w-full flex flex-col pt-24 items-center justify-center",
                    children: [r.jsx("h1", {
                        className: "text-[6rem] font-bold tracking-tight text-zinc-400/50 shadow-inner",
                        children: n.statusText
                    }), r.jsxs("h1", {
                        className: "text-2xl font-semibold text-zinc-600/50 tracking-tight font-mono",
                        children: ["(Error ", n.status, ")"]
                    }), n.status !== 404 && r.jsxs(Pe, {
                        variant: "destructive",
                        className: "w-max mt-8",
                        children: [r.jsx(Te, {
                            className: "h-4 w-4"
                        }), r.jsx(ke, {
                            children: "Error"
                        }), r.jsx(Oe, {
                            children: n.data
                        })]
                    }), r.jsx(De, {
                        variant: "secondary",
                        className: "mt-6",
                        children: r.jsxs(xe, {
                            to: "/",
                            className: "inline-flex items-center gap-1",
                            children: [r.jsx(Nn, {}), "Go Home"]
                        })
                    })]
                }) : n instanceof Error ? r.jsx("div", {
                    className: "w-full flex flex-col pt-24 items-center justify-center",
                    children: r.jsxs(Pe, {
                        variant: "destructive",
                        className: "w-max mt-8",
                        children: [r.jsx(Te, {
                            className: "h-4 w-4"
                        }), r.jsx(ke, {
                            children: "Server Error"
                        }), r.jsx(Oe, {
                            children: n.message
                        })]
                    })
                }) : e]
            }), r.jsx(yn, {}), r.jsx(Un, {})]
        })]
    })
}
function Kr() {
    return r.jsx(hn, {})
}
export {Ur as Layout, Kr as default, Gr as links};
