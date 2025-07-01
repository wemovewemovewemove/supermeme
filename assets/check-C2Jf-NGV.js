import {r as h, n as k, G as kt, H as Nt, C as J, I as Cn} from "./components-DmR_25ih.js";
import {b as Ue, u as ee, e as Sn} from "./alert-BnNSXUeU.js";
function Ft(e, t=[]) {
    let n = [];
    function r(i, c) {
        const s = h.createContext(c)
          , d = n.length;
        n = [...n, c];
        const l = f => {
            var g;
            const {scope: m, children: p, ...y} = f
              , a = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[d]) || s
              , v = h.useMemo( () => y, Object.values(y));
            return k.jsx(a.Provider, {
                value: v,
                children: p
            })
        }
        ;
        l.displayName = i + "Provider";
        function u(f, m) {
            var a;
            const p = ((a = m == null ? void 0 : m[e]) == null ? void 0 : a[d]) || s
              , y = h.useContext(p);
            if (y)
                return y;
            if (c !== void 0)
                return c;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return [l, u]
    }
    const o = () => {
        const i = n.map(c => h.createContext(c));
        return function(s) {
            const d = (s == null ? void 0 : s[e]) || i;
            return h.useMemo( () => ({
                [`__scope${e}`]: {
                    ...s,
                    [e]: d
                }
            }), [s, d])
        }
    }
    ;
    return o.scopeName = e,
    [r, An(o, ...t)]
}
function An(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const c = r.reduce( (s, {useScope: d, scopeName: l}) => {
                const f = d(i)[`__scope${l}`];
                return {
                    ...s,
                    ...f
                }
            }
            , {});
            return h.useMemo( () => ({
                [`__scope${t.scopeName}`]: c
            }), [c])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function ae(e) {
    const t = h.useRef(e);
    return h.useEffect( () => {
        t.current = e
    }
    ),
    h.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
var le = globalThis != null && globalThis.document ? h.useLayoutEffect : () => {}
  , Rn = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , ne = Rn.reduce( (e, t) => {
    const n = Ue(`Primitive.${t}`)
      , r = h.forwardRef( (o, i) => {
        const {asChild: c, ...s} = o
          , d = c ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        k.jsx(d, {
            ...s,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Pn(e, t) {
    e && kt.flushSync( () => e.dispatchEvent(t))
}
function Fe(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
var On = Nt[" useInsertionEffect ".trim().toString()] || le;
function Ko({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,i,c] = Tn({
        defaultProp: t,
        onChange: n
    })
      , s = e !== void 0
      , d = s ? e : o;
    {
        const u = h.useRef(e !== void 0);
        h.useEffect( () => {
            const f = u.current;
            f !== s && console.warn(`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            u.current = s
        }
        , [s, r])
    }
    const l = h.useCallback(u => {
        var f;
        if (s) {
            const m = Ln(u) ? u(e) : u;
            m !== e && ((f = c.current) == null || f.call(c, m))
        } else
            i(u)
    }
    , [s, e, i, c]);
    return [d, l]
}
function Tn({defaultProp: e, onChange: t}) {
    const [n,r] = h.useState(e)
      , o = h.useRef(n)
      , i = h.useRef(t);
    return On( () => {
        i.current = t
    }
    , [t]),
    h.useEffect( () => {
        var c;
        o.current !== n && ((c = i.current) == null || c.call(i, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, i]
}
function Ln(e) {
    return typeof e == "function"
}
function qo(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Ft(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , c = a => {
        const {scope: v, children: g} = a
          , b = J.useRef(null)
          , w = J.useRef(new Map).current;
        return k.jsx(o, {
            scope: v,
            itemMap: w,
            collectionRef: b,
            children: g
        })
    }
    ;
    c.displayName = t;
    const s = e + "CollectionSlot"
      , d = Ue(s)
      , l = J.forwardRef( (a, v) => {
        const {scope: g, children: b} = a
          , w = i(s, g)
          , x = ee(v, w.collectionRef);
        return k.jsx(d, {
            ref: x,
            children: b
        })
    }
    );
    l.displayName = s;
    const u = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , m = Ue(u)
      , p = J.forwardRef( (a, v) => {
        const {scope: g, children: b, ...w} = a
          , x = J.useRef(null)
          , E = ee(v, x)
          , S = i(u, g);
        return J.useEffect( () => (S.itemMap.set(x, {
            ref: x,
            ...w
        }),
        () => void S.itemMap.delete(x))),
        k.jsx(m, {
            [f]: "",
            ref: E,
            children: b
        })
    }
    );
    p.displayName = u;
    function y(a) {
        const v = i(e + "CollectionConsumer", a);
        return J.useCallback( () => {
            const b = v.collectionRef.current;
            if (!b)
                return [];
            const w = Array.from(b.querySelectorAll(`[${f}]`));
            return Array.from(v.itemMap.values()).sort( (S, C) => w.indexOf(S.ref.current) - w.indexOf(C.ref.current))
        }
        , [v.collectionRef, v.itemMap])
    }
    return [{
        Provider: c,
        Slot: l,
        ItemSlot: p
    }, y, r]
}
var Mn = h.createContext(void 0);
function Zo(e) {
    const t = h.useContext(Mn);
    return e || t || "ltr"
}
function Dn(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = ae(e);
    h.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var kn = "DismissableLayer", Ye = "dismissableLayer.update", Nn = "dismissableLayer.pointerDownOutside", Fn = "dismissableLayer.focusOutside", ht, It = h.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), In = h.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: c, onDismiss: s, ...d} = e
      , l = h.useContext(It)
      , [u,f] = h.useState(null)
      , m = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,p] = h.useState({})
      , y = ee(t, C => f(C))
      , a = Array.from(l.layers)
      , [v] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = a.indexOf(v)
      , b = u ? a.indexOf(u) : -1
      , w = l.layersWithOutsidePointerEventsDisabled.size > 0
      , x = b >= g
      , E = Bn(C => {
        const R = C.target
          , T = [...l.branches].some(P => P.contains(R));
        !x || T || (o == null || o(C),
        c == null || c(C),
        C.defaultPrevented || s == null || s())
    }
    , m)
      , S = $n(C => {
        const R = C.target;
        [...l.branches].some(P => P.contains(R)) || (i == null || i(C),
        c == null || c(C),
        C.defaultPrevented || s == null || s())
    }
    , m);
    return Dn(C => {
        b === l.layers.size - 1 && (r == null || r(C),
        !C.defaultPrevented && s && (C.preventDefault(),
        s()))
    }
    , m),
    h.useEffect( () => {
        if (u)
            return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (ht = m.body.style.pointerEvents,
            m.body.style.pointerEvents = "none"),
            l.layersWithOutsidePointerEventsDisabled.add(u)),
            l.layers.add(u),
            mt(),
            () => {
                n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = ht)
            }
    }
    , [u, m, n, l]),
    h.useEffect( () => () => {
        u && (l.layers.delete(u),
        l.layersWithOutsidePointerEventsDisabled.delete(u),
        mt())
    }
    , [u, l]),
    h.useEffect( () => {
        const C = () => p({});
        return document.addEventListener(Ye, C),
        () => document.removeEventListener(Ye, C)
    }
    , []),
    k.jsx(ne.div, {
        ...d,
        ref: y,
        style: {
            pointerEvents: w ? x ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Fe(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: Fe(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: Fe(e.onPointerDownCapture, E.onPointerDownCapture)
    })
}
);
In.displayName = kn;
var Wn = "DismissableLayerBranch"
  , _n = h.forwardRef( (e, t) => {
    const n = h.useContext(It)
      , r = h.useRef(null)
      , o = ee(t, r);
    return h.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    k.jsx(ne.div, {
        ...e,
        ref: o
    })
}
);
_n.displayName = Wn;
function Bn(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = ae(e)
      , r = h.useRef(!1)
      , o = h.useRef( () => {}
    );
    return h.useEffect( () => {
        const i = s => {
            if (s.target && !r.current) {
                let d = function() {
                    Wt(Nn, n, l, {
                        discrete: !0
                    })
                };
                const l = {
                    originalEvent: s
                };
                s.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = d,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : d()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , c = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(c),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function $n(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = ae(e)
      , r = h.useRef(!1);
    return h.useEffect( () => {
        const o = i => {
            i.target && !r.current && Wt(Fn, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function mt() {
    const e = new CustomEvent(Ye);
    document.dispatchEvent(e)
}
function Wt(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Pn(o, i) : o.dispatchEvent(i)
}
var Ie = 0;
function Go() {
    h.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? pt()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? pt()),
        Ie++,
        () => {
            Ie === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            Ie--
        }
    }
    , [])
}
function pt() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var We = "focusScope.autoFocusOnMount"
  , _e = "focusScope.autoFocusOnUnmount"
  , vt = {
    bubbles: !1,
    cancelable: !0
}
  , jn = "FocusScope"
  , Hn = h.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...c} = e
      , [s,d] = h.useState(null)
      , l = ae(o)
      , u = ae(i)
      , f = h.useRef(null)
      , m = ee(t, a => d(a))
      , p = h.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    h.useEffect( () => {
        if (r) {
            let a = function(w) {
                if (p.paused || !s)
                    return;
                const x = w.target;
                s.contains(x) ? f.current = x : q(f.current, {
                    select: !0
                })
            }
              , v = function(w) {
                if (p.paused || !s)
                    return;
                const x = w.relatedTarget;
                x !== null && (s.contains(x) || q(f.current, {
                    select: !0
                }))
            }
              , g = function(w) {
                if (document.activeElement === document.body)
                    for (const E of w)
                        E.removedNodes.length > 0 && q(s)
            };
            document.addEventListener("focusin", a),
            document.addEventListener("focusout", v);
            const b = new MutationObserver(g);
            return s && b.observe(s, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", a),
                document.removeEventListener("focusout", v),
                b.disconnect()
            }
        }
    }
    , [r, s, p.paused]),
    h.useEffect( () => {
        if (s) {
            yt.add(p);
            const a = document.activeElement;
            if (!s.contains(a)) {
                const g = new CustomEvent(We,vt);
                s.addEventListener(We, l),
                s.dispatchEvent(g),
                g.defaultPrevented || (zn(Kn(_t(s)), {
                    select: !0
                }),
                document.activeElement === a && q(s))
            }
            return () => {
                s.removeEventListener(We, l),
                setTimeout( () => {
                    const g = new CustomEvent(_e,vt);
                    s.addEventListener(_e, u),
                    s.dispatchEvent(g),
                    g.defaultPrevented || q(a ?? document.body, {
                        select: !0
                    }),
                    s.removeEventListener(_e, u),
                    yt.remove(p)
                }
                , 0)
            }
        }
    }
    , [s, l, u, p]);
    const y = h.useCallback(a => {
        if (!n && !r || p.paused)
            return;
        const v = a.key === "Tab" && !a.altKey && !a.ctrlKey && !a.metaKey
          , g = document.activeElement;
        if (v && g) {
            const b = a.currentTarget
              , [w,x] = Vn(b);
            w && x ? !a.shiftKey && g === x ? (a.preventDefault(),
            n && q(w, {
                select: !0
            })) : a.shiftKey && g === w && (a.preventDefault(),
            n && q(x, {
                select: !0
            })) : g === b && a.preventDefault()
        }
    }
    , [n, r, p.paused]);
    return k.jsx(ne.div, {
        tabIndex: -1,
        ...c,
        ref: m,
        onKeyDown: y
    })
}
);
Hn.displayName = jn;
function zn(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (q(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function Vn(e) {
    const t = _t(e)
      , n = gt(t, e)
      , r = gt(t.reverse(), e);
    return [n, r]
}
function _t(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function gt(e, t) {
    for (const n of e)
        if (!Un(n, {
            upTo: t
        }))
            return n
}
function Un(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function Yn(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function q(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && Yn(e) && t && e.select()
    }
}
var yt = Xn();
function Xn() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = wt(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = wt(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function wt(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function Kn(e) {
    return e.filter(t => t.tagName !== "A")
}
var qn = Nt[" useId ".trim().toString()] || ( () => {}
)
  , Zn = 0;
function Qo(e) {
    const [t,n] = h.useState(qn());
    return le( () => {
        n(r => r ?? String(Zn++))
    }
    , [e]),
    e || (t ? `radix-${t}` : "")
}
const Gn = ["top", "right", "bottom", "left"]
  , Z = Math.min
  , W = Math.max
  , Pe = Math.round
  , we = Math.floor
  , V = e => ({
    x: e,
    y: e
})
  , Qn = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Jn = {
    start: "end",
    end: "start"
};
function Xe(e, t, n) {
    return W(e, Z(t, n))
}
function X(e, t) {
    return typeof e == "function" ? e(t) : e
}
function K(e) {
    return e.split("-")[0]
}
function fe(e) {
    return e.split("-")[1]
}
function Ge(e) {
    return e === "x" ? "y" : "x"
}
function Qe(e) {
    return e === "y" ? "height" : "width"
}
function G(e) {
    return ["top", "bottom"].includes(K(e)) ? "y" : "x"
}
function Je(e) {
    return Ge(G(e))
}
function er(e, t, n) {
    n === void 0 && (n = !1);
    const r = fe(e)
      , o = Je(e)
      , i = Qe(o);
    let c = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (c = Oe(c)),
    [c, Oe(c)]
}
function tr(e) {
    const t = Oe(e);
    return [Ke(e), t, Ke(t)]
}
function Ke(e) {
    return e.replace(/start|end/g, t => Jn[t])
}
function nr(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , i = ["top", "bottom"]
      , c = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? i : c;
    default:
        return []
    }
}
function rr(e, t, n, r) {
    const o = fe(e);
    let i = nr(K(e), n === "start", r);
    return o && (i = i.map(c => c + "-" + o),
    t && (i = i.concat(i.map(Ke)))),
    i
}
function Oe(e) {
    return e.replace(/left|right|bottom|top/g, t => Qn[t])
}
function or(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Bt(e) {
    return typeof e != "number" ? or(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Te(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function xt(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = G(t)
      , c = Je(t)
      , s = Qe(c)
      , d = K(t)
      , l = i === "y"
      , u = r.x + r.width / 2 - o.width / 2
      , f = r.y + r.height / 2 - o.height / 2
      , m = r[s] / 2 - o[s] / 2;
    let p;
    switch (d) {
    case "top":
        p = {
            x: u,
            y: r.y - o.height
        };
        break;
    case "bottom":
        p = {
            x: u,
            y: r.y + r.height
        };
        break;
    case "right":
        p = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        p = {
            x: r.x - o.width,
            y: f
        };
        break;
    default:
        p = {
            x: r.x,
            y: r.y
        }
    }
    switch (fe(t)) {
    case "start":
        p[c] -= m * (n && l ? -1 : 1);
        break;
    case "end":
        p[c] += m * (n && l ? -1 : 1);
        break
    }
    return p
}
const ir = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: c} = n
      , s = i.filter(Boolean)
      , d = await (c.isRTL == null ? void 0 : c.isRTL(t));
    let l = await c.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: u, y: f} = xt(l, r, d)
      , m = r
      , p = {}
      , y = 0;
    for (let a = 0; a < s.length; a++) {
        const {name: v, fn: g} = s[a]
          , {x: b, y: w, data: x, reset: E} = await g({
            x: u,
            y: f,
            initialPlacement: r,
            placement: m,
            strategy: o,
            middlewareData: p,
            rects: l,
            platform: c,
            elements: {
                reference: e,
                floating: t
            }
        });
        u = b ?? u,
        f = w ?? f,
        p = {
            ...p,
            [v]: {
                ...p[v],
                ...x
            }
        },
        E && y <= 50 && (y++,
        typeof E == "object" && (E.placement && (m = E.placement),
        E.rects && (l = E.rects === !0 ? await c.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : E.rects),
        {x: u, y: f} = xt(l, m, d)),
        a = -1)
    }
    return {
        x: u,
        y: f,
        placement: m,
        strategy: o,
        middlewareData: p
    }
}
;
async function me(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: c, elements: s, strategy: d} = e
      , {boundary: l="clippingAncestors", rootBoundary: u="viewport", elementContext: f="floating", altBoundary: m=!1, padding: p=0} = X(t, e)
      , y = Bt(p)
      , v = s[m ? f === "floating" ? "reference" : "floating" : f]
      , g = Te(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
        boundary: l,
        rootBoundary: u,
        strategy: d
    }))
      , b = f === "floating" ? {
        x: r,
        y: o,
        width: c.floating.width,
        height: c.floating.height
    } : c.reference
      , w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating))
      , x = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , E = Te(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: s,
        rect: b,
        offsetParent: w,
        strategy: d
    }) : b);
    return {
        top: (g.top - E.top + y.top) / x.y,
        bottom: (E.bottom - g.bottom + y.bottom) / x.y,
        left: (g.left - E.left + y.left) / x.x,
        right: (E.right - g.right + y.right) / x.x
    }
}
const sr = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: c, elements: s, middlewareData: d} = t
          , {element: l, padding: u=0} = X(e, t) || {};
        if (l == null)
            return {};
        const f = Bt(u)
          , m = {
            x: n,
            y: r
        }
          , p = Je(o)
          , y = Qe(p)
          , a = await c.getDimensions(l)
          , v = p === "y"
          , g = v ? "top" : "left"
          , b = v ? "bottom" : "right"
          , w = v ? "clientHeight" : "clientWidth"
          , x = i.reference[y] + i.reference[p] - m[p] - i.floating[y]
          , E = m[p] - i.reference[p]
          , S = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(l));
        let C = S ? S[w] : 0;
        (!C || !await (c.isElement == null ? void 0 : c.isElement(S))) && (C = s.floating[w] || i.floating[y]);
        const R = x / 2 - E / 2
          , T = C / 2 - a[y] / 2 - 1
          , P = Z(f[g], T)
          , F = Z(f[b], T)
          , I = P
          , L = C - a[y] - F
          , O = C / 2 - a[y] / 2 + R
          , B = Xe(I, O, L)
          , M = !d.arrow && fe(o) != null && O !== B && i.reference[y] / 2 - (O < I ? P : F) - a[y] / 2 < 0
          , D = M ? O < I ? O - I : O - L : 0;
        return {
            [p]: m[p] + D,
            data: {
                [p]: B,
                centerOffset: O - B - D,
                ...M && {
                    alignmentOffset: D
                }
            },
            reset: M
        }
    }
})
  , cr = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: c, initialPlacement: s, platform: d, elements: l} = t
              , {mainAxis: u=!0, crossAxis: f=!0, fallbackPlacements: m, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: y="none", flipAlignment: a=!0, ...v} = X(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const g = K(o)
              , b = G(s)
              , w = K(s) === s
              , x = await (d.isRTL == null ? void 0 : d.isRTL(l.floating))
              , E = m || (w || !a ? [Oe(s)] : tr(s))
              , S = y !== "none";
            !m && S && E.push(...rr(s, a, y, x));
            const C = [s, ...E]
              , R = await me(t, v)
              , T = [];
            let P = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (u && T.push(R[g]),
            f) {
                const O = er(o, c, x);
                T.push(R[O[0]], R[O[1]])
            }
            if (P = [...P, {
                placement: o,
                overflows: T
            }],
            !T.every(O => O <= 0)) {
                var F, I;
                const O = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1
                  , B = C[O];
                if (B)
                    return {
                        data: {
                            index: O,
                            overflows: P
                        },
                        reset: {
                            placement: B
                        }
                    };
                let M = (I = P.filter(D => D.overflows[0] <= 0).sort( (D, A) => D.overflows[1] - A.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!M)
                    switch (p) {
                    case "bestFit":
                        {
                            var L;
                            const D = (L = P.filter(A => {
                                if (S) {
                                    const N = G(A.placement);
                                    return N === b || N === "y"
                                }
                                return !0
                            }
                            ).map(A => [A.placement, A.overflows.filter(N => N > 0).reduce( (N, H) => N + H, 0)]).sort( (A, N) => A[1] - N[1])[0]) == null ? void 0 : L[0];
                            D && (M = D);
                            break
                        }
                    case "initialPlacement":
                        M = s;
                        break
                    }
                if (o !== M)
                    return {
                        reset: {
                            placement: M
                        }
                    }
            }
            return {}
        }
    }
};
function bt(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Et(e) {
    return Gn.some(t => e[t] >= 0)
}
const ar = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = X(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await me(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , c = bt(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: c,
                            referenceHidden: Et(c)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await me(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , c = bt(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: c,
                            escaped: Et(c)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function lr(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , c = K(n)
      , s = fe(n)
      , d = G(n) === "y"
      , l = ["left", "top"].includes(c) ? -1 : 1
      , u = i && d ? -1 : 1
      , f = X(t, e);
    let {mainAxis: m, crossAxis: p, alignmentAxis: y} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return s && typeof y == "number" && (p = s === "end" ? y * -1 : y),
    d ? {
        x: p * u,
        y: m * l
    } : {
        x: m * l,
        y: p * u
    }
}
const ur = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: c, middlewareData: s} = t
              , d = await lr(t, e);
            return c === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
                x: o + d.x,
                y: i + d.y,
                data: {
                    ...d,
                    placement: c
                }
            }
        }
    }
}
  , fr = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: c=!1, limiter: s={
                fn: v => {
                    let {x: g, y: b} = v;
                    return {
                        x: g,
                        y: b
                    }
                }
            }, ...d} = X(e, t)
              , l = {
                x: n,
                y: r
            }
              , u = await me(t, d)
              , f = G(K(o))
              , m = Ge(f);
            let p = l[m]
              , y = l[f];
            if (i) {
                const v = m === "y" ? "top" : "left"
                  , g = m === "y" ? "bottom" : "right"
                  , b = p + u[v]
                  , w = p - u[g];
                p = Xe(b, p, w)
            }
            if (c) {
                const v = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , b = y + u[v]
                  , w = y - u[g];
                y = Xe(b, y, w)
            }
            const a = s.fn({
                ...t,
                [m]: p,
                [f]: y
            });
            return {
                ...a,
                data: {
                    x: a.x - n,
                    y: a.y - r,
                    enabled: {
                        [m]: i,
                        [f]: c
                    }
                }
            }
        }
    }
}
  , dr = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: c} = t
              , {offset: s=0, mainAxis: d=!0, crossAxis: l=!0} = X(e, t)
              , u = {
                x: n,
                y: r
            }
              , f = G(o)
              , m = Ge(f);
            let p = u[m]
              , y = u[f];
            const a = X(s, t)
              , v = typeof a == "number" ? {
                mainAxis: a,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...a
            };
            if (d) {
                const w = m === "y" ? "height" : "width"
                  , x = i.reference[m] - i.floating[w] + v.mainAxis
                  , E = i.reference[m] + i.reference[w] - v.mainAxis;
                p < x ? p = x : p > E && (p = E)
            }
            if (l) {
                var g, b;
                const w = m === "y" ? "width" : "height"
                  , x = ["top", "left"].includes(K(o))
                  , E = i.reference[f] - i.floating[w] + (x && ((g = c.offset) == null ? void 0 : g[f]) || 0) + (x ? 0 : v.crossAxis)
                  , S = i.reference[f] + i.reference[w] + (x ? 0 : ((b = c.offset) == null ? void 0 : b[f]) || 0) - (x ? v.crossAxis : 0);
                y < E ? y = E : y > S && (y = S)
            }
            return {
                [m]: p,
                [f]: y
            }
        }
    }
}
  , hr = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: c, elements: s} = t
              , {apply: d= () => {}
            , ...l} = X(e, t)
              , u = await me(t, l)
              , f = K(o)
              , m = fe(o)
              , p = G(o) === "y"
              , {width: y, height: a} = i.floating;
            let v, g;
            f === "top" || f === "bottom" ? (v = f,
            g = m === (await (c.isRTL == null ? void 0 : c.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (g = f,
            v = m === "end" ? "top" : "bottom");
            const b = a - u.top - u.bottom
              , w = y - u.left - u.right
              , x = Z(a - u[v], b)
              , E = Z(y - u[g], w)
              , S = !t.middlewareData.shift;
            let C = x
              , R = E;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = w),
            (r = t.middlewareData.shift) != null && r.enabled.y && (C = b),
            S && !m) {
                const P = W(u.left, 0)
                  , F = W(u.right, 0)
                  , I = W(u.top, 0)
                  , L = W(u.bottom, 0);
                p ? R = y - 2 * (P !== 0 || F !== 0 ? P + F : W(u.left, u.right)) : C = a - 2 * (I !== 0 || L !== 0 ? I + L : W(u.top, u.bottom))
            }
            await d({
                ...t,
                availableWidth: R,
                availableHeight: C
            });
            const T = await c.getDimensions(s.floating);
            return y !== T.width || a !== T.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Me() {
    return typeof window < "u"
}
function de(e) {
    return $t(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function _(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Y(e) {
    var t;
    return (t = ($t(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function $t(e) {
    return Me() ? e instanceof Node || e instanceof _(e).Node : !1
}
function $(e) {
    return Me() ? e instanceof Element || e instanceof _(e).Element : !1
}
function U(e) {
    return Me() ? e instanceof HTMLElement || e instanceof _(e).HTMLElement : !1
}
function Ct(e) {
    return !Me() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof _(e).ShadowRoot
}
function ve(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = j(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function mr(e) {
    return ["table", "td", "th"].includes(de(e))
}
function De(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function et(e) {
    const t = tt()
      , n = $(e) ? j(e) : e;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function pr(e) {
    let t = Q(e);
    for (; U(t) && !ue(t); ) {
        if (et(t))
            return t;
        if (De(t))
            return null;
        t = Q(t)
    }
    return null
}
function tt() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function ue(e) {
    return ["html", "body", "#document"].includes(de(e))
}
function j(e) {
    return _(e).getComputedStyle(e)
}
function ke(e) {
    return $(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Q(e) {
    if (de(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Ct(e) && e.host || Y(e);
    return Ct(t) ? t.host : t
}
function jt(e) {
    const t = Q(e);
    return ue(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : U(t) && ve(t) ? t : jt(t)
}
function pe(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = jt(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , c = _(o);
    if (i) {
        const s = qe(c);
        return t.concat(c, c.visualViewport || [], ve(o) ? o : [], s && n ? pe(s) : [])
    }
    return t.concat(o, pe(o, [], n))
}
function qe(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Ht(e) {
    const t = j(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = U(e)
      , i = o ? e.offsetWidth : n
      , c = o ? e.offsetHeight : r
      , s = Pe(n) !== i || Pe(r) !== c;
    return s && (n = i,
    r = c),
    {
        width: n,
        height: r,
        $: s
    }
}
function nt(e) {
    return $(e) ? e : e.contextElement
}
function se(e) {
    const t = nt(e);
    if (!U(t))
        return V(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = Ht(t);
    let c = (i ? Pe(n.width) : n.width) / r
      , s = (i ? Pe(n.height) : n.height) / o;
    return (!c || !Number.isFinite(c)) && (c = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    {
        x: c,
        y: s
    }
}
const vr = V(0);
function zt(e) {
    const t = _(e);
    return !tt() || !t.visualViewport ? vr : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function gr(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== _(e) ? !1 : t
}
function te(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = nt(e);
    let c = V(1);
    t && (r ? $(r) && (c = se(r)) : c = se(e));
    const s = gr(i, n, r) ? zt(i) : V(0);
    let d = (o.left + s.x) / c.x
      , l = (o.top + s.y) / c.y
      , u = o.width / c.x
      , f = o.height / c.y;
    if (i) {
        const m = _(i)
          , p = r && $(r) ? _(r) : r;
        let y = m
          , a = qe(y);
        for (; a && r && p !== y; ) {
            const v = se(a)
              , g = a.getBoundingClientRect()
              , b = j(a)
              , w = g.left + (a.clientLeft + parseFloat(b.paddingLeft)) * v.x
              , x = g.top + (a.clientTop + parseFloat(b.paddingTop)) * v.y;
            d *= v.x,
            l *= v.y,
            u *= v.x,
            f *= v.y,
            d += w,
            l += x,
            y = _(a),
            a = qe(y)
        }
    }
    return Te({
        width: u,
        height: f,
        x: d,
        y: l
    })
}
function rt(e, t) {
    const n = ke(e).scrollLeft;
    return t ? t.left + n : te(Y(e)).left + n
}
function Vt(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : rt(e, r))
      , i = r.top + t.scrollTop;
    return {
        x: o,
        y: i
    }
}
function yr(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , c = Y(r)
      , s = t ? De(t.floating) : !1;
    if (r === c || s && i)
        return n;
    let d = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , l = V(1);
    const u = V(0)
      , f = U(r);
    if ((f || !f && !i) && ((de(r) !== "body" || ve(c)) && (d = ke(r)),
    U(r))) {
        const p = te(r);
        l = se(r),
        u.x = p.x + r.clientLeft,
        u.y = p.y + r.clientTop
    }
    const m = c && !f && !i ? Vt(c, d, !0) : V(0);
    return {
        width: n.width * l.x,
        height: n.height * l.y,
        x: n.x * l.x - d.scrollLeft * l.x + u.x + m.x,
        y: n.y * l.y - d.scrollTop * l.y + u.y + m.y
    }
}
function wr(e) {
    return Array.from(e.getClientRects())
}
function xr(e) {
    const t = Y(e)
      , n = ke(e)
      , r = e.ownerDocument.body
      , o = W(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = W(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let c = -n.scrollLeft + rt(e);
    const s = -n.scrollTop;
    return j(r).direction === "rtl" && (c += W(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: c,
        y: s
    }
}
function br(e, t) {
    const n = _(e)
      , r = Y(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , c = r.clientHeight
      , s = 0
      , d = 0;
    if (o) {
        i = o.width,
        c = o.height;
        const l = tt();
        (!l || l && t === "fixed") && (s = o.offsetLeft,
        d = o.offsetTop)
    }
    return {
        width: i,
        height: c,
        x: s,
        y: d
    }
}
function Er(e, t) {
    const n = te(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = U(e) ? se(e) : V(1)
      , c = e.clientWidth * i.x
      , s = e.clientHeight * i.y
      , d = o * i.x
      , l = r * i.y;
    return {
        width: c,
        height: s,
        x: d,
        y: l
    }
}
function St(e, t, n) {
    let r;
    if (t === "viewport")
        r = br(e, n);
    else if (t === "document")
        r = xr(Y(e));
    else if ($(t))
        r = Er(t, n);
    else {
        const o = zt(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return Te(r)
}
function Ut(e, t) {
    const n = Q(e);
    return n === t || !$(n) || ue(n) ? !1 : j(n).position === "fixed" || Ut(n, t)
}
function Cr(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = pe(e, [], !1).filter(s => $(s) && de(s) !== "body")
      , o = null;
    const i = j(e).position === "fixed";
    let c = i ? Q(e) : e;
    for (; $(c) && !ue(c); ) {
        const s = j(c)
          , d = et(c);
        !d && s.position === "fixed" && (o = null),
        (i ? !d && !o : !d && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ve(c) && !d && Ut(e, c)) ? r = r.filter(u => u !== c) : o = s,
        c = Q(c)
    }
    return t.set(e, r),
    r
}
function Sr(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const c = [...n === "clippingAncestors" ? De(t) ? [] : Cr(t, this._c) : [].concat(n), r]
      , s = c[0]
      , d = c.reduce( (l, u) => {
        const f = St(t, u, o);
        return l.top = W(f.top, l.top),
        l.right = Z(f.right, l.right),
        l.bottom = Z(f.bottom, l.bottom),
        l.left = W(f.left, l.left),
        l
    }
    , St(t, s, o));
    return {
        width: d.right - d.left,
        height: d.bottom - d.top,
        x: d.left,
        y: d.top
    }
}
function Ar(e) {
    const {width: t, height: n} = Ht(e);
    return {
        width: t,
        height: n
    }
}
function Rr(e, t, n) {
    const r = U(t)
      , o = Y(t)
      , i = n === "fixed"
      , c = te(e, !0, i, t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const d = V(0);
    if (r || !r && !i)
        if ((de(t) !== "body" || ve(o)) && (s = ke(t)),
        r) {
            const m = te(t, !0, i, t);
            d.x = m.x + t.clientLeft,
            d.y = m.y + t.clientTop
        } else
            o && (d.x = rt(o));
    const l = o && !r && !i ? Vt(o, s) : V(0)
      , u = c.left + s.scrollLeft - d.x - l.x
      , f = c.top + s.scrollTop - d.y - l.y;
    return {
        x: u,
        y: f,
        width: c.width,
        height: c.height
    }
}
function Be(e) {
    return j(e).position === "static"
}
function At(e, t) {
    if (!U(e) || j(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Y(e) === n && (n = n.ownerDocument.body),
    n
}
function Yt(e, t) {
    const n = _(e);
    if (De(e))
        return n;
    if (!U(e)) {
        let o = Q(e);
        for (; o && !ue(o); ) {
            if ($(o) && !Be(o))
                return o;
            o = Q(o)
        }
        return n
    }
    let r = At(e, t);
    for (; r && mr(r) && Be(r); )
        r = At(r, t);
    return r && ue(r) && Be(r) && !et(r) ? n : r || pr(e) || n
}
const Pr = async function(e) {
    const t = this.getOffsetParent || Yt
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: Rr(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function Or(e) {
    return j(e).direction === "rtl"
}
const Tr = {
    convertOffsetParentRelativeRectToViewportRelativeRect: yr,
    getDocumentElement: Y,
    getClippingRect: Sr,
    getOffsetParent: Yt,
    getElementRects: Pr,
    getClientRects: wr,
    getDimensions: Ar,
    getScale: se,
    isElement: $,
    isRTL: Or
};
function Xt(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function Lr(e, t) {
    let n = null, r;
    const o = Y(e);
    function i() {
        var s;
        clearTimeout(r),
        (s = n) == null || s.disconnect(),
        n = null
    }
    function c(s, d) {
        s === void 0 && (s = !1),
        d === void 0 && (d = 1),
        i();
        const l = e.getBoundingClientRect()
          , {left: u, top: f, width: m, height: p} = l;
        if (s || t(),
        !m || !p)
            return;
        const y = we(f)
          , a = we(o.clientWidth - (u + m))
          , v = we(o.clientHeight - (f + p))
          , g = we(u)
          , w = {
            rootMargin: -y + "px " + -a + "px " + -v + "px " + -g + "px",
            threshold: W(0, Z(1, d)) || 1
        };
        let x = !0;
        function E(S) {
            const C = S[0].intersectionRatio;
            if (C !== d) {
                if (!x)
                    return c();
                C ? c(!1, C) : r = setTimeout( () => {
                    c(!1, 1e-7)
                }
                , 1e3)
            }
            C === 1 && !Xt(l, e.getBoundingClientRect()) && c(),
            x = !1
        }
        try {
            n = new IntersectionObserver(E,{
                ...w,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E,w)
        }
        n.observe(e)
    }
    return c(!0),
    i
}
function Mr(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: c=typeof ResizeObserver == "function", layoutShift: s=typeof IntersectionObserver == "function", animationFrame: d=!1} = r
      , l = nt(e)
      , u = o || i ? [...l ? pe(l) : [], ...pe(t)] : [];
    u.forEach(g => {
        o && g.addEventListener("scroll", n, {
            passive: !0
        }),
        i && g.addEventListener("resize", n)
    }
    );
    const f = l && s ? Lr(l, n) : null;
    let m = -1
      , p = null;
    c && (p = new ResizeObserver(g => {
        let[b] = g;
        b && b.target === l && p && (p.unobserve(t),
        cancelAnimationFrame(m),
        m = requestAnimationFrame( () => {
            var w;
            (w = p) == null || w.observe(t)
        }
        )),
        n()
    }
    ),
    l && !d && p.observe(l),
    p.observe(t));
    let y, a = d ? te(e) : null;
    d && v();
    function v() {
        const g = te(e);
        a && !Xt(a, g) && n(),
        a = g,
        y = requestAnimationFrame(v)
    }
    return n(),
    () => {
        var g;
        u.forEach(b => {
            o && b.removeEventListener("scroll", n),
            i && b.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (g = p) == null || g.disconnect(),
        p = null,
        d && cancelAnimationFrame(y)
    }
}
const Dr = ur
  , kr = fr
  , Nr = cr
  , Fr = hr
  , Ir = ar
  , Rt = sr
  , Wr = dr
  , _r = (e, t, n) => {
    const r = new Map
      , o = {
        platform: Tr,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return ir(e, t, {
        ...o,
        platform: i
    })
}
;
var Se = typeof document < "u" ? h.useLayoutEffect : h.useEffect;
function Le(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Le(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Le(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Kt(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Pt(e, t) {
    const n = Kt(e);
    return Math.round(t * n) / n
}
function $e(e) {
    const t = h.useRef(e);
    return Se( () => {
        t.current = e
    }
    ),
    t
}
function Br(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: c}={}, transform: s=!0, whileElementsMounted: d, open: l} = e
      , [u,f] = h.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [m,p] = h.useState(r);
    Le(m, r) || p(r);
    const [y,a] = h.useState(null)
      , [v,g] = h.useState(null)
      , b = h.useCallback(A => {
        A !== S.current && (S.current = A,
        a(A))
    }
    , [])
      , w = h.useCallback(A => {
        A !== C.current && (C.current = A,
        g(A))
    }
    , [])
      , x = i || y
      , E = c || v
      , S = h.useRef(null)
      , C = h.useRef(null)
      , R = h.useRef(u)
      , T = d != null
      , P = $e(d)
      , F = $e(o)
      , I = $e(l)
      , L = h.useCallback( () => {
        if (!S.current || !C.current)
            return;
        const A = {
            placement: t,
            strategy: n,
            middleware: m
        };
        F.current && (A.platform = F.current),
        _r(S.current, C.current, A).then(N => {
            const H = {
                ...N,
                isPositioned: I.current !== !1
            };
            O.current && !Le(R.current, H) && (R.current = H,
            kt.flushSync( () => {
                f(H)
            }
            ))
        }
        )
    }
    , [m, t, n, F, I]);
    Se( () => {
        l === !1 && R.current.isPositioned && (R.current.isPositioned = !1,
        f(A => ({
            ...A,
            isPositioned: !1
        })))
    }
    , [l]);
    const O = h.useRef(!1);
    Se( () => (O.current = !0,
    () => {
        O.current = !1
    }
    ), []),
    Se( () => {
        if (x && (S.current = x),
        E && (C.current = E),
        x && E) {
            if (P.current)
                return P.current(x, E, L);
            L()
        }
    }
    , [x, E, L, P, T]);
    const B = h.useMemo( () => ({
        reference: S,
        floating: C,
        setReference: b,
        setFloating: w
    }), [b, w])
      , M = h.useMemo( () => ({
        reference: x,
        floating: E
    }), [x, E])
      , D = h.useMemo( () => {
        const A = {
            position: n,
            left: 0,
            top: 0
        };
        if (!M.floating)
            return A;
        const N = Pt(M.floating, u.x)
          , H = Pt(M.floating, u.y);
        return s ? {
            ...A,
            transform: "translate(" + N + "px, " + H + "px)",
            ...Kt(M.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: N,
            top: H
        }
    }
    , [n, s, M.floating, u.x, u.y]);
    return h.useMemo( () => ({
        ...u,
        update: L,
        refs: B,
        elements: M,
        floatingStyles: D
    }), [u, L, B, M, D])
}
const $r = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Rt({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Rt({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , jr = (e, t) => ({
    ...Dr(e),
    options: [e, t]
})
  , Hr = (e, t) => ({
    ...kr(e),
    options: [e, t]
})
  , zr = (e, t) => ({
    ...Wr(e),
    options: [e, t]
})
  , Vr = (e, t) => ({
    ...Nr(e),
    options: [e, t]
})
  , Ur = (e, t) => ({
    ...Fr(e),
    options: [e, t]
})
  , Yr = (e, t) => ({
    ...Ir(e),
    options: [e, t]
})
  , Xr = (e, t) => ({
    ...$r(e),
    options: [e, t]
});
var Kr = "Arrow"
  , qt = h.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return k.jsx(ne.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : k.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
qt.displayName = Kr;
var qr = qt;
function Zr(e) {
    const [t,n] = h.useState(void 0);
    return le( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let c, s;
                if ("borderBoxSize"in i) {
                    const d = i.borderBoxSize
                      , l = Array.isArray(d) ? d[0] : d;
                    c = l.inlineSize,
                    s = l.blockSize
                } else
                    c = e.offsetWidth,
                    s = e.offsetHeight;
                n({
                    width: c,
                    height: s
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var ot = "Popper"
  , [Zt,Jo] = Ft(ot)
  , [Gr,Gt] = Zt(ot)
  , Qt = e => {
    const {__scopePopper: t, children: n} = e
      , [r,o] = h.useState(null);
    return k.jsx(Gr, {
        scope: t,
        anchor: r,
        onAnchorChange: o,
        children: n
    })
}
;
Qt.displayName = ot;
var Jt = "PopperAnchor"
  , en = h.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = Gt(Jt, n)
      , c = h.useRef(null)
      , s = ee(t, c);
    return h.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || c.current)
    }
    ),
    r ? null : k.jsx(ne.div, {
        ...o,
        ref: s
    })
}
);
en.displayName = Jt;
var it = "PopperContent"
  , [Qr,Jr] = Zt(it)
  , tn = h.forwardRef( (e, t) => {
    var st, ct, at, lt, ut, ft;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: c=0, arrowPadding: s=0, avoidCollisions: d=!0, collisionBoundary: l=[], collisionPadding: u=0, sticky: f="partial", hideWhenDetached: m=!1, updatePositionStrategy: p="optimized", onPlaced: y, ...a} = e
      , v = Gt(it, n)
      , [g,b] = h.useState(null)
      , w = ee(t, he => b(he))
      , [x,E] = h.useState(null)
      , S = Zr(x)
      , C = (S == null ? void 0 : S.width) ?? 0
      , R = (S == null ? void 0 : S.height) ?? 0
      , T = r + (i !== "center" ? "-" + i : "")
      , P = typeof u == "number" ? u : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...u
    }
      , F = Array.isArray(l) ? l : [l]
      , I = F.length > 0
      , L = {
        padding: P,
        boundary: F.filter(to),
        altBoundary: I
    }
      , {refs: O, floatingStyles: B, placement: M, isPositioned: D, middlewareData: A} = Br({
        strategy: "fixed",
        placement: T,
        whileElementsMounted: (...he) => Mr(...he, {
            animationFrame: p === "always"
        }),
        elements: {
            reference: v.anchor
        },
        middleware: [jr({
            mainAxis: o + R,
            alignmentAxis: c
        }), d && Hr({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? zr() : void 0,
            ...L
        }), d && Vr({
            ...L
        }), Ur({
            ...L,
            apply: ({elements: he, rects: dt, availableWidth: wn, availableHeight: xn}) => {
                const {width: bn, height: En} = dt.reference
                  , ye = he.floating.style;
                ye.setProperty("--radix-popper-available-width", `${wn}px`),
                ye.setProperty("--radix-popper-available-height", `${xn}px`),
                ye.setProperty("--radix-popper-anchor-width", `${bn}px`),
                ye.setProperty("--radix-popper-anchor-height", `${En}px`)
            }
        }), x && Xr({
            element: x,
            padding: s
        }), no({
            arrowWidth: C,
            arrowHeight: R
        }), m && Yr({
            strategy: "referenceHidden",
            ...L
        })]
    })
      , [N,H] = on(M)
      , ge = ae(y);
    le( () => {
        D && (ge == null || ge())
    }
    , [D, ge]);
    const mn = (st = A.arrow) == null ? void 0 : st.x
      , pn = (ct = A.arrow) == null ? void 0 : ct.y
      , vn = ((at = A.arrow) == null ? void 0 : at.centerOffset) !== 0
      , [gn,yn] = h.useState();
    return le( () => {
        g && yn(window.getComputedStyle(g).zIndex)
    }
    , [g]),
    k.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...B,
            transform: D ? B.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: gn,
            "--radix-popper-transform-origin": [(lt = A.transformOrigin) == null ? void 0 : lt.x, (ut = A.transformOrigin) == null ? void 0 : ut.y].join(" "),
            ...((ft = A.hide) == null ? void 0 : ft.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: k.jsx(Qr, {
            scope: n,
            placedSide: N,
            onArrowChange: E,
            arrowX: mn,
            arrowY: pn,
            shouldHideArrow: vn,
            children: k.jsx(ne.div, {
                "data-side": N,
                "data-align": H,
                ...a,
                ref: w,
                style: {
                    ...a.style,
                    animation: D ? void 0 : "none"
                }
            })
        })
    })
}
);
tn.displayName = it;
var nn = "PopperArrow"
  , eo = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , rn = h.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = Jr(nn, r)
      , c = eo[i.placedSide];
    return k.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [c]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: k.jsx(qr, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
rn.displayName = nn;
function to(e) {
    return e !== null
}
var no = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var v, g, b;
        const {placement: n, rects: r, middlewareData: o} = t
          , c = ((v = o.arrow) == null ? void 0 : v.centerOffset) !== 0
          , s = c ? 0 : e.arrowWidth
          , d = c ? 0 : e.arrowHeight
          , [l,u] = on(n)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[u]
          , m = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + s / 2
          , p = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + d / 2;
        let y = ""
          , a = "";
        return l === "bottom" ? (y = c ? f : `${m}px`,
        a = `${-d}px`) : l === "top" ? (y = c ? f : `${m}px`,
        a = `${r.floating.height + d}px`) : l === "right" ? (y = `${-d}px`,
        a = c ? f : `${p}px`) : l === "left" && (y = `${r.floating.width + d}px`,
        a = c ? f : `${p}px`),
        {
            data: {
                x: y,
                y: a
            }
        }
    }
});
function on(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var ei = Qt
  , ti = en
  , ni = tn
  , ri = rn
  , ro = "Portal"
  , oo = h.forwardRef( (e, t) => {
    var s;
    const {container: n, ...r} = e
      , [o,i] = h.useState(!1);
    le( () => i(!0), []);
    const c = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
    return c ? Cn.createPortal(k.jsx(ne.div, {
        ...r,
        ref: t
    }), c) : null
}
);
oo.displayName = ro;
var io = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , re = new WeakMap
  , xe = new WeakMap
  , be = {}
  , je = 0
  , sn = function(e) {
    return e && (e.host || sn(e.parentNode))
}
  , so = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = sn(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , co = function(e, t, n, r) {
    var o = so(t, Array.isArray(e) ? e : [e]);
    be[n] || (be[n] = new WeakMap);
    var i = be[n]
      , c = []
      , s = new Set
      , d = new Set(o)
      , l = function(f) {
        !f || s.has(f) || (s.add(f),
        l(f.parentNode))
    };
    o.forEach(l);
    var u = function(f) {
        !f || d.has(f) || Array.prototype.forEach.call(f.children, function(m) {
            if (s.has(m))
                u(m);
            else
                try {
                    var p = m.getAttribute(r)
                      , y = p !== null && p !== "false"
                      , a = (re.get(m) || 0) + 1
                      , v = (i.get(m) || 0) + 1;
                    re.set(m, a),
                    i.set(m, v),
                    c.push(m),
                    a === 1 && y && xe.set(m, !0),
                    v === 1 && m.setAttribute(n, "true"),
                    y || m.setAttribute(r, "true")
                } catch (g) {
                    console.error("aria-hidden: cannot operate on ", m, g)
                }
        })
    };
    return u(t),
    s.clear(),
    je++,
    function() {
        c.forEach(function(f) {
            var m = re.get(f) - 1
              , p = i.get(f) - 1;
            re.set(f, m),
            i.set(f, p),
            m || (xe.has(f) || f.removeAttribute(r),
            xe.delete(f)),
            p || f.removeAttribute(n)
        }),
        je--,
        je || (re = new WeakMap,
        re = new WeakMap,
        xe = new WeakMap,
        be = {})
    }
}
  , oi = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = io(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    co(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , z = function() {
    return z = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    z.apply(this, arguments)
};
function cn(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function ao(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
            (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)),
            i[r] = t[r]);
    return e.concat(i || Array.prototype.slice.call(t))
}
var Ae = "right-scroll-bar-position"
  , Re = "width-before-scroll-bar"
  , lo = "with-scroll-bars-hidden"
  , uo = "--removed-body-scroll-bar-size";
function He(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function fo(e, t) {
    var n = h.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var ho = typeof window < "u" ? h.useLayoutEffect : h.useEffect
  , Ot = new WeakMap;
function mo(e, t) {
    var n = fo(null, function(r) {
        return e.forEach(function(o) {
            return He(o, r)
        })
    });
    return ho(function() {
        var r = Ot.get(n);
        if (r) {
            var o = new Set(r)
              , i = new Set(e)
              , c = n.current;
            o.forEach(function(s) {
                i.has(s) || He(s, null)
            }),
            i.forEach(function(s) {
                o.has(s) || He(s, c)
            })
        }
        Ot.set(n, e)
    }, [e]),
    n
}
function po(e) {
    return e
}
function vo(e, t) {
    t === void 0 && (t = po);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(i) {
            var c = t(i, r);
            return n.push(c),
            function() {
                n = n.filter(function(s) {
                    return s !== c
                })
            }
        },
        assignSyncMedium: function(i) {
            for (r = !0; n.length; ) {
                var c = n;
                n = [],
                c.forEach(i)
            }
            n = {
                push: function(s) {
                    return i(s)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(i) {
            r = !0;
            var c = [];
            if (n.length) {
                var s = n;
                n = [],
                s.forEach(i),
                c = n
            }
            var d = function() {
                var u = c;
                c = [],
                u.forEach(i)
            }
              , l = function() {
                return Promise.resolve().then(d)
            };
            l(),
            n = {
                push: function(u) {
                    c.push(u),
                    l()
                },
                filter: function(u) {
                    return c = c.filter(u),
                    n
                }
            }
        }
    };
    return o
}
function go(e) {
    e === void 0 && (e = {});
    var t = vo(null);
    return t.options = z({
        async: !0,
        ssr: !1
    }, e),
    t
}
var an = function(e) {
    var t = e.sideCar
      , n = cn(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return h.createElement(r, z({}, n))
};
an.isSideCarExport = !0;
function yo(e, t) {
    return e.useMedium(t),
    an
}
var ln = go()
  , ze = function() {}
  , Ne = h.forwardRef(function(e, t) {
    var n = h.useRef(null)
      , r = h.useState({
        onScrollCapture: ze,
        onWheelCapture: ze,
        onTouchMoveCapture: ze
    })
      , o = r[0]
      , i = r[1]
      , c = e.forwardProps
      , s = e.children
      , d = e.className
      , l = e.removeScrollBar
      , u = e.enabled
      , f = e.shards
      , m = e.sideCar
      , p = e.noIsolation
      , y = e.inert
      , a = e.allowPinchZoom
      , v = e.as
      , g = v === void 0 ? "div" : v
      , b = e.gapMode
      , w = cn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , x = m
      , E = mo([n, t])
      , S = z(z({}, w), o);
    return h.createElement(h.Fragment, null, u && h.createElement(x, {
        sideCar: ln,
        removeScrollBar: l,
        shards: f,
        noIsolation: p,
        inert: y,
        setCallbacks: i,
        allowPinchZoom: !!a,
        lockRef: n,
        gapMode: b
    }), c ? h.cloneElement(h.Children.only(s), z(z({}, S), {
        ref: E
    })) : h.createElement(g, z({}, S, {
        className: d,
        ref: E
    }), s))
});
Ne.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Ne.classNames = {
    fullWidth: Re,
    zeroRight: Ae
};
var wo = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function xo() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = wo();
    return t && e.setAttribute("nonce", t),
    e
}
function bo(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function Eo(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var Co = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = xo()) && (bo(t, n),
            Eo(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , So = function() {
    var e = Co();
    return function(t, n) {
        h.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , un = function() {
    var e = So()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , Ao = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Ve = function(e) {
    return parseInt(e || "", 10) || 0
}
  , Ro = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ve(n), Ve(r), Ve(o)]
}
  , Po = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return Ao;
    var t = Ro(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , Oo = un()
  , ce = "data-scroll-locked"
  , To = function(e, t, n, r) {
    var o = e.left
      , i = e.top
      , c = e.right
      , s = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(lo, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(ce, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ae, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Re, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ae, " .").concat(Ae, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Re, " .").concat(Re, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ce, `] {
    `).concat(uo, ": ").concat(s, `px;
  }
`)
}
  , Tt = function() {
    var e = parseInt(document.body.getAttribute(ce) || "0", 10);
    return isFinite(e) ? e : 0
}
  , Lo = function() {
    h.useEffect(function() {
        return document.body.setAttribute(ce, (Tt() + 1).toString()),
        function() {
            var e = Tt() - 1;
            e <= 0 ? document.body.removeAttribute(ce) : document.body.setAttribute(ce, e.toString())
        }
    }, [])
}
  , Mo = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    Lo();
    var i = h.useMemo(function() {
        return Po(o)
    }, [o]);
    return h.createElement(Oo, {
        styles: To(i, !t, o, n ? "" : "!important")
    })
}
  , Ze = !1;
if (typeof window < "u")
    try {
        var Ee = Object.defineProperty({}, "passive", {
            get: function() {
                return Ze = !0,
                !0
            }
        });
        window.addEventListener("test", Ee, Ee),
        window.removeEventListener("test", Ee, Ee)
    } catch {
        Ze = !1
    }
var oe = Ze ? {
    passive: !1
} : !1
  , Do = function(e) {
    return e.tagName === "TEXTAREA"
}
  , fn = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Do(e) && n[t] === "visible")
}
  , ko = function(e) {
    return fn(e, "overflowY")
}
  , No = function(e) {
    return fn(e, "overflowX")
}
  , Lt = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = dn(e, r);
        if (o) {
            var i = hn(e, r)
              , c = i[1]
              , s = i[2];
            if (c > s)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , Fo = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , Io = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , dn = function(e, t) {
    return e === "v" ? ko(t) : No(t)
}
  , hn = function(e, t) {
    return e === "v" ? Fo(t) : Io(t)
}
  , Wo = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , _o = function(e, t, n, r, o) {
    var i = Wo(e, window.getComputedStyle(t).direction)
      , c = i * r
      , s = n.target
      , d = t.contains(s)
      , l = !1
      , u = c > 0
      , f = 0
      , m = 0;
    do {
        var p = hn(e, s)
          , y = p[0]
          , a = p[1]
          , v = p[2]
          , g = a - v - i * y;
        (y || g) && dn(e, s) && (f += g,
        m += y),
        s instanceof ShadowRoot ? s = s.host : s = s.parentNode
    } while (!d && s !== document.body || d && (t.contains(s) || t === s));
    return (u && Math.abs(f) < 1 || !u && Math.abs(m) < 1) && (l = !0),
    l
}
  , Ce = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , Mt = function(e) {
    return [e.deltaX, e.deltaY]
}
  , Dt = function(e) {
    return e && "current"in e ? e.current : e
}
  , Bo = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , $o = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , jo = 0
  , ie = [];
function Ho(e) {
    var t = h.useRef([])
      , n = h.useRef([0, 0])
      , r = h.useRef()
      , o = h.useState(jo++)[0]
      , i = h.useState(un)[0]
      , c = h.useRef(e);
    h.useEffect(function() {
        c.current = e
    }, [e]),
    h.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var a = ao([e.lockRef.current], (e.shards || []).map(Dt), !0).filter(Boolean);
            return a.forEach(function(v) {
                return v.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                a.forEach(function(v) {
                    return v.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var s = h.useCallback(function(a, v) {
        if ("touches"in a && a.touches.length === 2 || a.type === "wheel" && a.ctrlKey)
            return !c.current.allowPinchZoom;
        var g = Ce(a), b = n.current, w = "deltaX"in a ? a.deltaX : b[0] - g[0], x = "deltaY"in a ? a.deltaY : b[1] - g[1], E, S = a.target, C = Math.abs(w) > Math.abs(x) ? "h" : "v";
        if ("touches"in a && C === "h" && S.type === "range")
            return !1;
        var R = Lt(C, S);
        if (!R)
            return !0;
        if (R ? E = C : (E = C === "v" ? "h" : "v",
        R = Lt(C, S)),
        !R)
            return !1;
        if (!r.current && "changedTouches"in a && (w || x) && (r.current = E),
        !E)
            return !0;
        var T = r.current || E;
        return _o(T, v, a, T === "h" ? w : x)
    }, [])
      , d = h.useCallback(function(a) {
        var v = a;
        if (!(!ie.length || ie[ie.length - 1] !== i)) {
            var g = "deltaY"in v ? Mt(v) : Ce(v)
              , b = t.current.filter(function(E) {
                return E.name === v.type && (E.target === v.target || v.target === E.shadowParent) && Bo(E.delta, g)
            })[0];
            if (b && b.should) {
                v.cancelable && v.preventDefault();
                return
            }
            if (!b) {
                var w = (c.current.shards || []).map(Dt).filter(Boolean).filter(function(E) {
                    return E.contains(v.target)
                })
                  , x = w.length > 0 ? s(v, w[0]) : !c.current.noIsolation;
                x && v.cancelable && v.preventDefault()
            }
        }
    }, [])
      , l = h.useCallback(function(a, v, g, b) {
        var w = {
            name: a,
            delta: v,
            target: g,
            should: b,
            shadowParent: zo(g)
        };
        t.current.push(w),
        setTimeout(function() {
            t.current = t.current.filter(function(x) {
                return x !== w
            })
        }, 1)
    }, [])
      , u = h.useCallback(function(a) {
        n.current = Ce(a),
        r.current = void 0
    }, [])
      , f = h.useCallback(function(a) {
        l(a.type, Mt(a), a.target, s(a, e.lockRef.current))
    }, [])
      , m = h.useCallback(function(a) {
        l(a.type, Ce(a), a.target, s(a, e.lockRef.current))
    }, []);
    h.useEffect(function() {
        return ie.push(i),
        e.setCallbacks({
            onScrollCapture: f,
            onWheelCapture: f,
            onTouchMoveCapture: m
        }),
        document.addEventListener("wheel", d, oe),
        document.addEventListener("touchmove", d, oe),
        document.addEventListener("touchstart", u, oe),
        function() {
            ie = ie.filter(function(a) {
                return a !== i
            }),
            document.removeEventListener("wheel", d, oe),
            document.removeEventListener("touchmove", d, oe),
            document.removeEventListener("touchstart", u, oe)
        }
    }, []);
    var p = e.removeScrollBar
      , y = e.inert;
    return h.createElement(h.Fragment, null, y ? h.createElement(i, {
        styles: $o(o)
    }) : null, p ? h.createElement(Mo, {
        gapMode: e.gapMode
    }) : null)
}
function zo(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const Vo = yo(ln, Ho);
var Uo = h.forwardRef(function(e, t) {
    return h.createElement(Ne, z({}, e, {
        ref: t,
        sideCar: Vo
    }))
});
Uo.classNames = Ne.classNames;
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ii = Sn("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
export {ti as A, ni as C, In as D, Hn as F, ne as P, ei as R, le as a, qo as b, Ft as c, Qo as d, Fe as e, Zo as f, Ko as g, Jo as h, oo as i, oi as j, Pn as k, Go as l, Uo as m, ri as n, ii as o, Zr as p, ae as u};
