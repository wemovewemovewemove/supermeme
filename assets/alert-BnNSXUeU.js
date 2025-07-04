import {r as f, n as j} from "./components-DmR_25ih.js";
function se(e) {
    var r, t, o = "";
    if (typeof e == "string" || typeof e == "number")
        o += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var s = e.length;
            for (r = 0; r < s; r++)
                e[r] && (t = se(e[r])) && (o && (o += " "),
                o += t)
        } else
            for (t in e)
                e[t] && (o && (o += " "),
                o += t);
    return o
}
function ie() {
    for (var e, r, t = 0, o = "", s = arguments.length; t < s; t++)
        (e = arguments[t]) && (r = se(e)) && (o && (o += " "),
        o += r);
    return o
}
function ee(e, r) {
    if (typeof e == "function")
        return e(r);
    e != null && (e.current = r)
}
function ae(...e) {
    return r => {
        let t = !1;
        const o = e.map(s => {
            const n = ee(s, r);
            return !t && typeof n == "function" && (t = !0),
            n
        }
        );
        if (t)
            return () => {
                for (let s = 0; s < o.length; s++) {
                    const n = o[s];
                    typeof n == "function" ? n() : ee(e[s], null)
                }
            }
    }
}
function dr(...e) {
    return f.useCallback(ae(...e), e)
}
function fe(e) {
    const r = he(e)
      , t = f.forwardRef( (o, s) => {
        const {children: n, ...a} = o
          , i = f.Children.toArray(n)
          , d = i.find(xe);
        if (d) {
            const c = d.props.children
              , u = i.map(m => m === d ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : m);
            return j.jsx(r, {
                ...a,
                ref: s,
                children: f.isValidElement(c) ? f.cloneElement(c, void 0, u) : null
            })
        }
        return j.jsx(r, {
            ...a,
            ref: s,
            children: n
        })
    }
    );
    return t.displayName = `${e}.Slot`,
    t
}
var me = fe("Slot");
function he(e) {
    const r = f.forwardRef( (t, o) => {
        const {children: s, ...n} = t;
        if (f.isValidElement(s)) {
            const a = we(s)
              , i = ve(n, s.props);
            return s.type !== f.Fragment && (i.ref = o ? ae(o, a) : a),
            f.cloneElement(s, i)
        }
        return f.Children.count(s) > 1 ? f.Children.only(null) : null
    }
    );
    return r.displayName = `${e}.SlotClone`,
    r
}
var ye = Symbol("radix.slottable");
function xe(e) {
    return f.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === ye
}
function ve(e, r) {
    const t = {
        ...r
    };
    for (const o in r) {
        const s = e[o]
          , n = r[o];
        /^on[A-Z]/.test(o) ? s && n ? t[o] = (...i) => {
            n(...i),
            s(...i)
        }
        : s && (t[o] = s) : o === "style" ? t[o] = {
            ...s,
            ...n
        } : o === "className" && (t[o] = [s, n].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...t
    }
}
function we(e) {
    var o, s;
    let r = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get
      , t = r && "isReactWarning"in r && r.isReactWarning;
    return t ? e.ref : (r = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get,
    t = r && "isReactWarning"in r && r.isReactWarning,
    t ? e.props.ref : e.props.ref || e.ref)
}
const q = "-"
  , ke = e => {
    const r = Ce(e)
      , {conflictingClassGroups: t, conflictingClassGroupModifiers: o} = e;
    return {
        getClassGroupId: a => {
            const i = a.split(q);
            return i[0] === "" && i.length !== 1 && i.shift(),
            le(i, r) || ze(a)
        }
        ,
        getConflictingClassGroupIds: (a, i) => {
            const d = t[a] || [];
            return i && o[a] ? [...d, ...o[a]] : d
        }
    }
}
  , le = (e, r) => {
    var a;
    if (e.length === 0)
        return r.classGroupId;
    const t = e[0]
      , o = r.nextPart.get(t)
      , s = o ? le(e.slice(1), o) : void 0;
    if (s)
        return s;
    if (r.validators.length === 0)
        return;
    const n = e.join(q);
    return (a = r.validators.find( ({validator: i}) => i(n))) == null ? void 0 : a.classGroupId
}
  , re = /^\[(.+)\]$/
  , ze = e => {
    if (re.test(e)) {
        const r = re.exec(e)[1]
          , t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
        if (t)
            return "arbitrary.." + t
    }
}
  , Ce = e => {
    const {theme: r, prefix: t} = e
      , o = {
        nextPart: new Map,
        validators: []
    };
    return Se(Object.entries(e.classGroups), t).forEach( ([n,a]) => {
        U(a, o, n, r)
    }
    ),
    o
}
  , U = (e, r, t, o) => {
    e.forEach(s => {
        if (typeof s == "string") {
            const n = s === "" ? r : te(r, s);
            n.classGroupId = t;
            return
        }
        if (typeof s == "function") {
            if (Ae(s)) {
                U(s(o), r, t, o);
                return
            }
            r.validators.push({
                validator: s,
                classGroupId: t
            });
            return
        }
        Object.entries(s).forEach( ([n,a]) => {
            U(a, te(r, n), t, o)
        }
        )
    }
    )
}
  , te = (e, r) => {
    let t = e;
    return r.split(q).forEach(o => {
        t.nextPart.has(o) || t.nextPart.set(o, {
            nextPart: new Map,
            validators: []
        }),
        t = t.nextPart.get(o)
    }
    ),
    t
}
  , Ae = e => e.isThemeGetter
  , Se = (e, r) => r ? e.map( ([t,o]) => {
    const s = o.map(n => typeof n == "string" ? r + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map( ([a,i]) => [r + a, i])) : n);
    return [t, s]
}
) : e
  , Re = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let r = 0
      , t = new Map
      , o = new Map;
    const s = (n, a) => {
        t.set(n, a),
        r++,
        r > e && (r = 0,
        o = t,
        t = new Map)
    }
    ;
    return {
        get(n) {
            let a = t.get(n);
            if (a !== void 0)
                return a;
            if ((a = o.get(n)) !== void 0)
                return s(n, a),
                a
        },
        set(n, a) {
            t.has(n) ? t.set(n, a) : s(n, a)
        }
    }
}
  , ce = "!"
  , Ne = e => {
    const {separator: r, experimentalParseClassName: t} = e
      , o = r.length === 1
      , s = r[0]
      , n = r.length
      , a = i => {
        const d = [];
        let c = 0, u = 0, m;
        for (let p = 0; p < i.length; p++) {
            let x = i[p];
            if (c === 0) {
                if (x === s && (o || i.slice(p, p + n) === r)) {
                    d.push(i.slice(u, p)),
                    u = p + n;
                    continue
                }
                if (x === "/") {
                    m = p;
                    continue
                }
            }
            x === "[" ? c++ : x === "]" && c--
        }
        const y = d.length === 0 ? i : i.substring(u)
          , k = y.startsWith(ce)
          , v = k ? y.substring(1) : y
          , h = m && m > u ? m - u : void 0;
        return {
            modifiers: d,
            hasImportantModifier: k,
            baseClassName: v,
            maybePostfixModifierPosition: h
        }
    }
    ;
    return t ? i => t({
        className: i,
        parseClassName: a
    }) : a
}
  , je = e => {
    if (e.length <= 1)
        return e;
    const r = [];
    let t = [];
    return e.forEach(o => {
        o[0] === "[" ? (r.push(...t.sort(), o),
        t = []) : t.push(o)
    }
    ),
    r.push(...t.sort()),
    r
}
  , Ee = e => ({
    cache: Re(e.cacheSize),
    parseClassName: Ne(e),
    ...ke(e)
})
  , Ie = /\s+/
  , Me = (e, r) => {
    const {parseClassName: t, getClassGroupId: o, getConflictingClassGroupIds: s} = r
      , n = []
      , a = e.trim().split(Ie);
    let i = "";
    for (let d = a.length - 1; d >= 0; d -= 1) {
        const c = a[d]
          , {modifiers: u, hasImportantModifier: m, baseClassName: y, maybePostfixModifierPosition: k} = t(c);
        let v = !!k
          , h = o(v ? y.substring(0, k) : y);
        if (!h) {
            if (!v) {
                i = c + (i.length > 0 ? " " + i : i);
                continue
            }
            if (h = o(y),
            !h) {
                i = c + (i.length > 0 ? " " + i : i);
                continue
            }
            v = !1
        }
        const p = je(u).join(":")
          , x = m ? p + ce : p
          , w = x + h;
        if (n.includes(w))
            continue;
        n.push(w);
        const I = s(h, v);
        for (let R = 0; R < I.length; ++R) {
            const V = I[R];
            n.push(x + V)
        }
        i = c + (i.length > 0 ? " " + i : i)
    }
    return i
}
;
function Pe() {
    let e = 0, r, t, o = "";
    for (; e < arguments.length; )
        (r = arguments[e++]) && (t = de(r)) && (o && (o += " "),
        o += t);
    return o
}
const de = e => {
    if (typeof e == "string")
        return e;
    let r, t = "";
    for (let o = 0; o < e.length; o++)
        e[o] && (r = de(e[o])) && (t && (t += " "),
        t += r);
    return t
}
;
function Ge(e, ...r) {
    let t, o, s, n = a;
    function a(d) {
        const c = r.reduce( (u, m) => m(u), e());
        return t = Ee(c),
        o = t.cache.get,
        s = t.cache.set,
        n = i,
        i(d)
    }
    function i(d) {
        const c = o(d);
        if (c)
            return c;
        const u = Me(d, t);
        return s(d, u),
        u
    }
    return function() {
        return n(Pe.apply(null, arguments))
    }
}
const b = e => {
    const r = t => t[e] || [];
    return r.isThemeGetter = !0,
    r
}
  , ue = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Ve = /^\d+\/\d+$/
  , Le = new Set(["px", "full", "screen"])
  , Te = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Oe = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , We = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , _e = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , $e = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , C = e => N(e) || Le.has(e) || Ve.test(e)
  , A = e => E(e, "length", Je)
  , N = e => !!e && !Number.isNaN(Number(e))
  , H = e => E(e, "number", N)
  , P = e => !!e && Number.isInteger(Number(e))
  , Be = e => e.endsWith("%") && N(e.slice(0, -1))
  , l = e => ue.test(e)
  , S = e => Te.test(e)
  , Fe = new Set(["length", "size", "percentage"])
  , He = e => E(e, Fe, pe)
  , Ue = e => E(e, "position", pe)
  , qe = new Set(["image", "url"])
  , Ze = e => E(e, qe, Qe)
  , Ke = e => E(e, "", Xe)
  , G = () => !0
  , E = (e, r, t) => {
    const o = ue.exec(e);
    return o ? o[1] ? typeof r == "string" ? o[1] === r : r.has(o[1]) : t(o[2]) : !1
}
  , Je = e => Oe.test(e) && !We.test(e)
  , pe = () => !1
  , Xe = e => _e.test(e)
  , Qe = e => $e.test(e)
  , Ye = () => {
    const e = b("colors")
      , r = b("spacing")
      , t = b("blur")
      , o = b("brightness")
      , s = b("borderColor")
      , n = b("borderRadius")
      , a = b("borderSpacing")
      , i = b("borderWidth")
      , d = b("contrast")
      , c = b("grayscale")
      , u = b("hueRotate")
      , m = b("invert")
      , y = b("gap")
      , k = b("gradientColorStops")
      , v = b("gradientColorStopPositions")
      , h = b("inset")
      , p = b("margin")
      , x = b("opacity")
      , w = b("padding")
      , I = b("saturate")
      , R = b("scale")
      , V = b("sepia")
      , Z = b("skew")
      , K = b("space")
      , J = b("translate")
      , _ = () => ["auto", "contain", "none"]
      , $ = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , B = () => ["auto", l, r]
      , g = () => [l, r]
      , X = () => ["", C, A]
      , L = () => ["auto", N, l]
      , Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , T = () => ["solid", "dashed", "dotted", "double", "none"]
      , Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , F = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , M = () => ["", "0", l]
      , D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , z = () => [N, l];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [G],
            spacing: [C, A],
            blur: ["none", "", S, l],
            brightness: z(),
            borderColor: [e],
            borderRadius: ["none", "", "full", S, l],
            borderSpacing: g(),
            borderWidth: X(),
            contrast: z(),
            grayscale: M(),
            hueRotate: z(),
            invert: M(),
            gap: g(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Be, A],
            inset: B(),
            margin: B(),
            opacity: z(),
            padding: g(),
            saturate: z(),
            scale: z(),
            sepia: M(),
            skew: z(),
            space: g(),
            translate: g()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", l]
            }],
            container: ["container"],
            columns: [{
                columns: [S]
            }],
            "break-after": [{
                "break-after": D()
            }],
            "break-before": [{
                "break-before": D()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Q(), l]
            }],
            overflow: [{
                overflow: $()
            }],
            "overflow-x": [{
                "overflow-x": $()
            }],
            "overflow-y": [{
                "overflow-y": $()
            }],
            overscroll: [{
                overscroll: _()
            }],
            "overscroll-x": [{
                "overscroll-x": _()
            }],
            "overscroll-y": [{
                "overscroll-y": _()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [h]
            }],
            "inset-x": [{
                "inset-x": [h]
            }],
            "inset-y": [{
                "inset-y": [h]
            }],
            start: [{
                start: [h]
            }],
            end: [{
                end: [h]
            }],
            top: [{
                top: [h]
            }],
            right: [{
                right: [h]
            }],
            bottom: [{
                bottom: [h]
            }],
            left: [{
                left: [h]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", P, l]
            }],
            basis: [{
                basis: B()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", l]
            }],
            grow: [{
                grow: M()
            }],
            shrink: [{
                shrink: M()
            }],
            order: [{
                order: ["first", "last", "none", P, l]
            }],
            "grid-cols": [{
                "grid-cols": [G]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", P, l]
                }, l]
            }],
            "col-start": [{
                "col-start": L()
            }],
            "col-end": [{
                "col-end": L()
            }],
            "grid-rows": [{
                "grid-rows": [G]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [P, l]
                }, l]
            }],
            "row-start": [{
                "row-start": L()
            }],
            "row-end": [{
                "row-end": L()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", l]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", l]
            }],
            gap: [{
                gap: [y]
            }],
            "gap-x": [{
                "gap-x": [y]
            }],
            "gap-y": [{
                "gap-y": [y]
            }],
            "justify-content": [{
                justify: ["normal", ...F()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...F(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...F(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [w]
            }],
            px: [{
                px: [w]
            }],
            py: [{
                py: [w]
            }],
            ps: [{
                ps: [w]
            }],
            pe: [{
                pe: [w]
            }],
            pt: [{
                pt: [w]
            }],
            pr: [{
                pr: [w]
            }],
            pb: [{
                pb: [w]
            }],
            pl: [{
                pl: [w]
            }],
            m: [{
                m: [p]
            }],
            mx: [{
                mx: [p]
            }],
            my: [{
                my: [p]
            }],
            ms: [{
                ms: [p]
            }],
            me: [{
                me: [p]
            }],
            mt: [{
                mt: [p]
            }],
            mr: [{
                mr: [p]
            }],
            mb: [{
                mb: [p]
            }],
            ml: [{
                ml: [p]
            }],
            "space-x": [{
                "space-x": [K]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [K]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", l, r]
            }],
            "min-w": [{
                "min-w": [l, r, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [l, r, "none", "full", "min", "max", "fit", "prose", {
                    screen: [S]
                }, S]
            }],
            h: [{
                h: [l, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [l, r, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [l, r, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", S, A]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", H]
            }],
            "font-family": [{
                font: [G]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", l]
            }],
            "line-clamp": [{
                "line-clamp": ["none", N, H]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", C, l]
            }],
            "list-image": [{
                "list-image": ["none", l]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", l]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [x]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [x]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...T(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", C, A]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", C, l]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: g()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", l]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", l]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [x]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Q(), Ue]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", He]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Ze]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [v]
            }],
            "gradient-via-pos": [{
                via: [v]
            }],
            "gradient-to-pos": [{
                to: [v]
            }],
            "gradient-from": [{
                from: [k]
            }],
            "gradient-via": [{
                via: [k]
            }],
            "gradient-to": [{
                to: [k]
            }],
            rounded: [{
                rounded: [n]
            }],
            "rounded-s": [{
                "rounded-s": [n]
            }],
            "rounded-e": [{
                "rounded-e": [n]
            }],
            "rounded-t": [{
                "rounded-t": [n]
            }],
            "rounded-r": [{
                "rounded-r": [n]
            }],
            "rounded-b": [{
                "rounded-b": [n]
            }],
            "rounded-l": [{
                "rounded-l": [n]
            }],
            "rounded-ss": [{
                "rounded-ss": [n]
            }],
            "rounded-se": [{
                "rounded-se": [n]
            }],
            "rounded-ee": [{
                "rounded-ee": [n]
            }],
            "rounded-es": [{
                "rounded-es": [n]
            }],
            "rounded-tl": [{
                "rounded-tl": [n]
            }],
            "rounded-tr": [{
                "rounded-tr": [n]
            }],
            "rounded-br": [{
                "rounded-br": [n]
            }],
            "rounded-bl": [{
                "rounded-bl": [n]
            }],
            "border-w": [{
                border: [i]
            }],
            "border-w-x": [{
                "border-x": [i]
            }],
            "border-w-y": [{
                "border-y": [i]
            }],
            "border-w-s": [{
                "border-s": [i]
            }],
            "border-w-e": [{
                "border-e": [i]
            }],
            "border-w-t": [{
                "border-t": [i]
            }],
            "border-w-r": [{
                "border-r": [i]
            }],
            "border-w-b": [{
                "border-b": [i]
            }],
            "border-w-l": [{
                "border-l": [i]
            }],
            "border-opacity": [{
                "border-opacity": [x]
            }],
            "border-style": [{
                border: [...T(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [i]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [i]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [x]
            }],
            "divide-style": [{
                divide: T()
            }],
            "border-color": [{
                border: [s]
            }],
            "border-color-x": [{
                "border-x": [s]
            }],
            "border-color-y": [{
                "border-y": [s]
            }],
            "border-color-s": [{
                "border-s": [s]
            }],
            "border-color-e": [{
                "border-e": [s]
            }],
            "border-color-t": [{
                "border-t": [s]
            }],
            "border-color-r": [{
                "border-r": [s]
            }],
            "border-color-b": [{
                "border-b": [s]
            }],
            "border-color-l": [{
                "border-l": [s]
            }],
            "divide-color": [{
                divide: [s]
            }],
            "outline-style": [{
                outline: ["", ...T()]
            }],
            "outline-offset": [{
                "outline-offset": [C, l]
            }],
            "outline-w": [{
                outline: [C, A]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: X()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [x]
            }],
            "ring-offset-w": [{
                "ring-offset": [C, A]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", S, Ke]
            }],
            "shadow-color": [{
                shadow: [G]
            }],
            opacity: [{
                opacity: [x]
            }],
            "mix-blend": [{
                "mix-blend": [...Y(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": Y()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [t]
            }],
            brightness: [{
                brightness: [o]
            }],
            contrast: [{
                contrast: [d]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", S, l]
            }],
            grayscale: [{
                grayscale: [c]
            }],
            "hue-rotate": [{
                "hue-rotate": [u]
            }],
            invert: [{
                invert: [m]
            }],
            saturate: [{
                saturate: [I]
            }],
            sepia: [{
                sepia: [V]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [t]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [o]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [d]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [c]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [u]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [m]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [x]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [I]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [V]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [a]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [a]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [a]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", l]
            }],
            duration: [{
                duration: z()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", l]
            }],
            delay: [{
                delay: z()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", l]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [R]
            }],
            "scale-x": [{
                "scale-x": [R]
            }],
            "scale-y": [{
                "scale-y": [R]
            }],
            rotate: [{
                rotate: [P, l]
            }],
            "translate-x": [{
                "translate-x": [J]
            }],
            "translate-y": [{
                "translate-y": [J]
            }],
            "skew-x": [{
                "skew-x": [Z]
            }],
            "skew-y": [{
                "skew-y": [Z]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", l]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", l]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": g()
            }],
            "scroll-mx": [{
                "scroll-mx": g()
            }],
            "scroll-my": [{
                "scroll-my": g()
            }],
            "scroll-ms": [{
                "scroll-ms": g()
            }],
            "scroll-me": [{
                "scroll-me": g()
            }],
            "scroll-mt": [{
                "scroll-mt": g()
            }],
            "scroll-mr": [{
                "scroll-mr": g()
            }],
            "scroll-mb": [{
                "scroll-mb": g()
            }],
            "scroll-ml": [{
                "scroll-ml": g()
            }],
            "scroll-p": [{
                "scroll-p": g()
            }],
            "scroll-px": [{
                "scroll-px": g()
            }],
            "scroll-py": [{
                "scroll-py": g()
            }],
            "scroll-ps": [{
                "scroll-ps": g()
            }],
            "scroll-pe": [{
                "scroll-pe": g()
            }],
            "scroll-pt": [{
                "scroll-pt": g()
            }],
            "scroll-pr": [{
                "scroll-pr": g()
            }],
            "scroll-pb": [{
                "scroll-pb": g()
            }],
            "scroll-pl": [{
                "scroll-pl": g()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", l]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [C, A, H]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , De = Ge(Ye);
function O(...e) {
    return De(ie(e))
}
const oe = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , ne = ie
  , be = (e, r) => t => {
    var o;
    if ((r == null ? void 0 : r.variants) == null)
        return ne(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
    const {variants: s, defaultVariants: n} = r
      , a = Object.keys(s).map(c => {
        const u = t == null ? void 0 : t[c]
          , m = n == null ? void 0 : n[c];
        if (u === null)
            return null;
        const y = oe(u) || oe(m);
        return s[c][y]
    }
    )
      , i = t && Object.entries(t).reduce( (c, u) => {
        let[m,y] = u;
        return y === void 0 || (c[m] = y),
        c
    }
    , {})
      , d = r == null || (o = r.compoundVariants) === null || o === void 0 ? void 0 : o.reduce( (c, u) => {
        let {class: m, className: y, ...k} = u;
        return Object.entries(k).every(v => {
            let[h,p] = v;
            return Array.isArray(p) ? p.includes({
                ...n,
                ...i
            }[h]) : {
                ...n,
                ...i
            }[h] === p
        }
        ) ? [...c, m, y] : c
    }
    , []);
    return ne(e, a, d, t == null ? void 0 : t.class, t == null ? void 0 : t.className)
}
;
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , ge = (...e) => e.filter( (r, t, o) => !!r && o.indexOf(r) === t).join(" ");
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rr = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = f.forwardRef( ({color: e="currentColor", size: r=24, strokeWidth: t=2, absoluteStrokeWidth: o, className: s="", children: n, iconNode: a, ...i}, d) => f.createElement("svg", {
    ref: d,
    ...rr,
    width: r,
    height: r,
    stroke: e,
    strokeWidth: o ? Number(t) * 24 / Number(r) : t,
    className: ge("lucide", s),
    ...i
}, [...a.map( ([c,u]) => f.createElement(c, u)), ...Array.isArray(n) ? n : [n]]));
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W = (e, r) => {
    const t = f.forwardRef( ({className: o, ...s}, n) => f.createElement(tr, {
        ref: n,
        iconNode: r,
        className: ge(`lucide-${er(e)}`, o),
        ...s
    }));
    return t.displayName = `${e}`,
    t
}
;
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = W("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pr = W("CircleAlert", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = W("Home", [["path", {
    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "y5dka4"
}], ["polyline", {
    points: "9 22 9 12 15 12 15 22",
    key: "e2us08"
}]]);
/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = W("LogIn", [["path", {
    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
    key: "u53s6r"
}], ["polyline", {
    points: "10 17 15 12 10 7",
    key: "1ail0h"
}], ["line", {
    x1: "15",
    x2: "3",
    y1: "12",
    y2: "12",
    key: "v6grx8"
}]])
  , or = be("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300", {
    variants: {
        variant: {
            default: "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
            destructive: "bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
            outline: "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
            secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
            ghost: "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
            link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , nr = f.forwardRef( ({className: e, variant: r, size: t, asChild: o=!1, ...s}, n) => {
    const a = o ? me : "button";
    return j.jsx(a, {
        className: O(or({
            variant: r,
            size: t,
            className: e
        })),
        ref: n,
        ...s
    })
}
);
nr.displayName = "Button";
const sr = be("relative w-full rounded-lg border border-zinc-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-zinc-950 dark:border-zinc-800 dark:[&>svg]:text-zinc-50", {
    variants: {
        variant: {
            default: "bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50",
            destructive: "border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900",
            constructive: "border-green-500/50 text-green-500 dark:border-green-500 [&>svg]:text-green-500 dark:border-green-900/50 dark:text-green-900 dark:dark:border-green-900 dark:[&>svg]:text-green-900"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , ir = f.forwardRef( ({className: e, variant: r, ...t}, o) => j.jsx("div", {
    ref: o,
    role: "alert",
    className: O(sr({
        variant: r
    }), e),
    ...t
}));
ir.displayName = "Alert";
const ar = f.forwardRef( ({className: e, ...r}, t) => j.jsx("h5", {
    ref: t,
    className: O("mb-1 font-medium leading-none tracking-tight", e),
    ...r
}));
ar.displayName = "AlertTitle";
const lr = f.forwardRef( ({className: e, ...r}, t) => j.jsx("div", {
    ref: t,
    className: O("text-sm [&_p]:leading-relaxed", e),
    ...r
}));
lr.displayName = "AlertDescription";
export {ir as A, nr as B, ur as C, br as H, gr as L, me as S, O as a, fe as b, ie as c, ae as d, W as e, pr as f, ar as g, lr as h, be as i, dr as u};
