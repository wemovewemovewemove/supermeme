var Ip = Object.defineProperty;
var Up = (r, i, o) => i in r ? Ip(r, i, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
}) : r[i] = o;
var ho = (r, i, o) => Up(r, typeof i != "symbol" ? i + "" : i, o);
function ud(r, i) {
    for (var o = 0; o < i.length; o++) {
        const s = i[o];
        if (typeof s != "string" && !Array.isArray(s)) {
            for (const c in s)
                if (c !== "default" && !(c in r)) {
                    const d = Object.getOwnPropertyDescriptor(s, c);
                    d && Object.defineProperty(r, c, d.get ? d : {
                        enumerable: !0,
                        get: () => s[c]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
        value: "Module"
    }))
}
function sd(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var gu = {
    exports: {}
}
  , Wl = {}
  , wu = {
    exports: {}
}
  , xe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cf;
function Ap() {
    if (Cf)
        return xe;
    Cf = 1;
    var r = Symbol.for("react.element")
      , i = Symbol.for("react.portal")
      , o = Symbol.for("react.fragment")
      , s = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , d = Symbol.for("react.provider")
      , h = Symbol.for("react.context")
      , m = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
      , v = Symbol.for("react.memo")
      , E = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function S(_) {
        return _ === null || typeof _ != "object" ? null : (_ = y && _[y] || _["@@iterator"],
        typeof _ == "function" ? _ : null)
    }
    var N = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , L = Object.assign
      , M = {};
    function z(_, j, me) {
        this.props = _,
        this.context = j,
        this.refs = M,
        this.updater = me || N
    }
    z.prototype.isReactComponent = {},
    z.prototype.setState = function(_, j) {
        if (typeof _ != "object" && typeof _ != "function" && _ != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, _, j, "setState")
    }
    ,
    z.prototype.forceUpdate = function(_) {
        this.updater.enqueueForceUpdate(this, _, "forceUpdate")
    }
    ;
    function Q() {}
    Q.prototype = z.prototype;
    function I(_, j, me) {
        this.props = _,
        this.context = j,
        this.refs = M,
        this.updater = me || N
    }
    var K = I.prototype = new Q;
    K.constructor = I,
    L(K, z.prototype),
    K.isPureReactComponent = !0;
    var $ = Array.isArray
      , q = Object.prototype.hasOwnProperty
      , J = {
        current: null
    }
      , P = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Y(_, j, me) {
        var we, ye = {}, Ee = null, Ce = null;
        if (j != null)
            for (we in j.ref !== void 0 && (Ce = j.ref),
            j.key !== void 0 && (Ee = "" + j.key),
            j)
                q.call(j, we) && !P.hasOwnProperty(we) && (ye[we] = j[we]);
        var Pe = arguments.length - 2;
        if (Pe === 1)
            ye.children = me;
        else if (1 < Pe) {
            for (var Be = Array(Pe), vt = 0; vt < Pe; vt++)
                Be[vt] = arguments[vt + 2];
            ye.children = Be
        }
        if (_ && _.defaultProps)
            for (we in Pe = _.defaultProps,
            Pe)
                ye[we] === void 0 && (ye[we] = Pe[we]);
        return {
            $$typeof: r,
            type: _,
            key: Ee,
            ref: Ce,
            props: ye,
            _owner: J.current
        }
    }
    function he(_, j) {
        return {
            $$typeof: r,
            type: _.type,
            key: j,
            ref: _.ref,
            props: _.props,
            _owner: _._owner
        }
    }
    function ue(_) {
        return typeof _ == "object" && _ !== null && _.$$typeof === r
    }
    function Re(_) {
        var j = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + _.replace(/[=:]/g, function(me) {
            return j[me]
        })
    }
    var Se = /\/+/g;
    function Me(_, j) {
        return typeof _ == "object" && _ !== null && _.key != null ? Re("" + _.key) : j.toString(36)
    }
    function Ue(_, j, me, we, ye) {
        var Ee = typeof _;
        (Ee === "undefined" || Ee === "boolean") && (_ = null);
        var Ce = !1;
        if (_ === null)
            Ce = !0;
        else
            switch (Ee) {
            case "string":
            case "number":
                Ce = !0;
                break;
            case "object":
                switch (_.$$typeof) {
                case r:
                case i:
                    Ce = !0
                }
            }
        if (Ce)
            return Ce = _,
            ye = ye(Ce),
            _ = we === "" ? "." + Me(Ce, 0) : we,
            $(ye) ? (me = "",
            _ != null && (me = _.replace(Se, "$&/") + "/"),
            Ue(ye, j, me, "", function(vt) {
                return vt
            })) : ye != null && (ue(ye) && (ye = he(ye, me + (!ye.key || Ce && Ce.key === ye.key ? "" : ("" + ye.key).replace(Se, "$&/") + "/") + _)),
            j.push(ye)),
            1;
        if (Ce = 0,
        we = we === "" ? "." : we + ":",
        $(_))
            for (var Pe = 0; Pe < _.length; Pe++) {
                Ee = _[Pe];
                var Be = we + Me(Ee, Pe);
                Ce += Ue(Ee, j, me, Be, ye)
            }
        else if (Be = S(_),
        typeof Be == "function")
            for (_ = Be.call(_),
            Pe = 0; !(Ee = _.next()).done; )
                Ee = Ee.value,
                Be = we + Me(Ee, Pe++),
                Ce += Ue(Ee, j, me, Be, ye);
        else if (Ee === "object")
            throw j = String(_),
            Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
        return Ce
    }
    function Fe(_, j, me) {
        if (_ == null)
            return _;
        var we = []
          , ye = 0;
        return Ue(_, we, "", "", function(Ee) {
            return j.call(me, Ee, ye++)
        }),
        we
    }
    function Je(_) {
        if (_._status === -1) {
            var j = _._result;
            j = j(),
            j.then(function(me) {
                (_._status === 0 || _._status === -1) && (_._status = 1,
                _._result = me)
            }, function(me) {
                (_._status === 0 || _._status === -1) && (_._status = 2,
                _._result = me)
            }),
            _._status === -1 && (_._status = 0,
            _._result = j)
        }
        if (_._status === 1)
            return _._result.default;
        throw _._result
    }
    var Ae = {
        current: null
    }
      , V = {
        transition: null
    }
      , se = {
        ReactCurrentDispatcher: Ae,
        ReactCurrentBatchConfig: V,
        ReactCurrentOwner: J
    };
    function G() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return xe.Children = {
        map: Fe,
        forEach: function(_, j, me) {
            Fe(_, function() {
                j.apply(this, arguments)
            }, me)
        },
        count: function(_) {
            var j = 0;
            return Fe(_, function() {
                j++
            }),
            j
        },
        toArray: function(_) {
            return Fe(_, function(j) {
                return j
            }) || []
        },
        only: function(_) {
            if (!ue(_))
                throw Error("React.Children.only expected to receive a single React element child.");
            return _
        }
    },
    xe.Component = z,
    xe.Fragment = o,
    xe.Profiler = c,
    xe.PureComponent = I,
    xe.StrictMode = s,
    xe.Suspense = p,
    xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se,
    xe.act = G,
    xe.cloneElement = function(_, j, me) {
        if (_ == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
        var we = L({}, _.props)
          , ye = _.key
          , Ee = _.ref
          , Ce = _._owner;
        if (j != null) {
            if (j.ref !== void 0 && (Ee = j.ref,
            Ce = J.current),
            j.key !== void 0 && (ye = "" + j.key),
            _.type && _.type.defaultProps)
                var Pe = _.type.defaultProps;
            for (Be in j)
                q.call(j, Be) && !P.hasOwnProperty(Be) && (we[Be] = j[Be] === void 0 && Pe !== void 0 ? Pe[Be] : j[Be])
        }
        var Be = arguments.length - 2;
        if (Be === 1)
            we.children = me;
        else if (1 < Be) {
            Pe = Array(Be);
            for (var vt = 0; vt < Be; vt++)
                Pe[vt] = arguments[vt + 2];
            we.children = Pe
        }
        return {
            $$typeof: r,
            type: _.type,
            key: ye,
            ref: Ee,
            props: we,
            _owner: Ce
        }
    }
    ,
    xe.createContext = function(_) {
        return _ = {
            $$typeof: h,
            _currentValue: _,
            _currentValue2: _,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        _.Provider = {
            $$typeof: d,
            _context: _
        },
        _.Consumer = _
    }
    ,
    xe.createElement = Y,
    xe.createFactory = function(_) {
        var j = Y.bind(null, _);
        return j.type = _,
        j
    }
    ,
    xe.createRef = function() {
        return {
            current: null
        }
    }
    ,
    xe.forwardRef = function(_) {
        return {
            $$typeof: m,
            render: _
        }
    }
    ,
    xe.isValidElement = ue,
    xe.lazy = function(_) {
        return {
            $$typeof: E,
            _payload: {
                _status: -1,
                _result: _
            },
            _init: Je
        }
    }
    ,
    xe.memo = function(_, j) {
        return {
            $$typeof: v,
            type: _,
            compare: j === void 0 ? null : j
        }
    }
    ,
    xe.startTransition = function(_) {
        var j = V.transition;
        V.transition = {};
        try {
            _()
        } finally {
            V.transition = j
        }
    }
    ,
    xe.unstable_act = G,
    xe.useCallback = function(_, j) {
        return Ae.current.useCallback(_, j)
    }
    ,
    xe.useContext = function(_) {
        return Ae.current.useContext(_)
    }
    ,
    xe.useDebugValue = function() {}
    ,
    xe.useDeferredValue = function(_) {
        return Ae.current.useDeferredValue(_)
    }
    ,
    xe.useEffect = function(_, j) {
        return Ae.current.useEffect(_, j)
    }
    ,
    xe.useId = function() {
        return Ae.current.useId()
    }
    ,
    xe.useImperativeHandle = function(_, j, me) {
        return Ae.current.useImperativeHandle(_, j, me)
    }
    ,
    xe.useInsertionEffect = function(_, j) {
        return Ae.current.useInsertionEffect(_, j)
    }
    ,
    xe.useLayoutEffect = function(_, j) {
        return Ae.current.useLayoutEffect(_, j)
    }
    ,
    xe.useMemo = function(_, j) {
        return Ae.current.useMemo(_, j)
    }
    ,
    xe.useReducer = function(_, j, me) {
        return Ae.current.useReducer(_, j, me)
    }
    ,
    xe.useRef = function(_) {
        return Ae.current.useRef(_)
    }
    ,
    xe.useState = function(_) {
        return Ae.current.useState(_)
    }
    ,
    xe.useSyncExternalStore = function(_, j, me) {
        return Ae.current.useSyncExternalStore(_, j, me)
    }
    ,
    xe.useTransition = function() {
        return Ae.current.useTransition()
    }
    ,
    xe.version = "18.3.1",
    xe
}
var Pf;
function Iu() {
    return Pf || (Pf = 1,
    wu.exports = Ap()),
    wu.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lf;
function $p() {
    if (Lf)
        return Wl;
    Lf = 1;
    var r = Iu()
      , i = Symbol.for("react.element")
      , o = Symbol.for("react.fragment")
      , s = Object.prototype.hasOwnProperty
      , c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , d = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function h(m, p, v) {
        var E, y = {}, S = null, N = null;
        v !== void 0 && (S = "" + v),
        p.key !== void 0 && (S = "" + p.key),
        p.ref !== void 0 && (N = p.ref);
        for (E in p)
            s.call(p, E) && !d.hasOwnProperty(E) && (y[E] = p[E]);
        if (m && m.defaultProps)
            for (E in p = m.defaultProps,
            p)
                y[E] === void 0 && (y[E] = p[E]);
        return {
            $$typeof: i,
            type: m,
            key: S,
            ref: N,
            props: y,
            _owner: c.current
        }
    }
    return Wl.Fragment = o,
    Wl.jsx = h,
    Wl.jsxs = h,
    Wl
}
var Tf;
function Bp() {
    return Tf || (Tf = 1,
    gu.exports = $p()),
    gu.exports
}
var ug = Bp()
  , w = Iu();
const Hp = sd(w)
  , cd = ud({
    __proto__: null,
    default: Hp
}, [w]);
var Su = {
    exports: {}
}
  , Rt = {}
  , Eu = {
    exports: {}
}
  , xu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Df;
function Vp() {
    return Df || (Df = 1,
    function(r) {
        function i(V, se) {
            var G = V.length;
            V.push(se);
            e: for (; 0 < G; ) {
                var _ = G - 1 >>> 1
                  , j = V[_];
                if (0 < c(j, se))
                    V[_] = se,
                    V[G] = j,
                    G = _;
                else
                    break e
            }
        }
        function o(V) {
            return V.length === 0 ? null : V[0]
        }
        function s(V) {
            if (V.length === 0)
                return null;
            var se = V[0]
              , G = V.pop();
            if (G !== se) {
                V[0] = G;
                e: for (var _ = 0, j = V.length, me = j >>> 1; _ < me; ) {
                    var we = 2 * (_ + 1) - 1
                      , ye = V[we]
                      , Ee = we + 1
                      , Ce = V[Ee];
                    if (0 > c(ye, G))
                        Ee < j && 0 > c(Ce, ye) ? (V[_] = Ce,
                        V[Ee] = G,
                        _ = Ee) : (V[_] = ye,
                        V[we] = G,
                        _ = we);
                    else if (Ee < j && 0 > c(Ce, G))
                        V[_] = Ce,
                        V[Ee] = G,
                        _ = Ee;
                    else
                        break e
                }
            }
            return se
        }
        function c(V, se) {
            var G = V.sortIndex - se.sortIndex;
            return G !== 0 ? G : V.id - se.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            r.unstable_now = function() {
                return d.now()
            }
        } else {
            var h = Date
              , m = h.now();
            r.unstable_now = function() {
                return h.now() - m
            }
        }
        var p = []
          , v = []
          , E = 1
          , y = null
          , S = 3
          , N = !1
          , L = !1
          , M = !1
          , z = typeof setTimeout == "function" ? setTimeout : null
          , Q = typeof clearTimeout == "function" ? clearTimeout : null
          , I = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function K(V) {
            for (var se = o(v); se !== null; ) {
                if (se.callback === null)
                    s(v);
                else if (se.startTime <= V)
                    s(v),
                    se.sortIndex = se.expirationTime,
                    i(p, se);
                else
                    break;
                se = o(v)
            }
        }
        function $(V) {
            if (M = !1,
            K(V),
            !L)
                if (o(p) !== null)
                    L = !0,
                    Je(q);
                else {
                    var se = o(v);
                    se !== null && Ae($, se.startTime - V)
                }
        }
        function q(V, se) {
            L = !1,
            M && (M = !1,
            Q(Y),
            Y = -1),
            N = !0;
            var G = S;
            try {
                for (K(se),
                y = o(p); y !== null && (!(y.expirationTime > se) || V && !Re()); ) {
                    var _ = y.callback;
                    if (typeof _ == "function") {
                        y.callback = null,
                        S = y.priorityLevel;
                        var j = _(y.expirationTime <= se);
                        se = r.unstable_now(),
                        typeof j == "function" ? y.callback = j : y === o(p) && s(p),
                        K(se)
                    } else
                        s(p);
                    y = o(p)
                }
                if (y !== null)
                    var me = !0;
                else {
                    var we = o(v);
                    we !== null && Ae($, we.startTime - se),
                    me = !1
                }
                return me
            } finally {
                y = null,
                S = G,
                N = !1
            }
        }
        var J = !1
          , P = null
          , Y = -1
          , he = 5
          , ue = -1;
        function Re() {
            return !(r.unstable_now() - ue < he)
        }
        function Se() {
            if (P !== null) {
                var V = r.unstable_now();
                ue = V;
                var se = !0;
                try {
                    se = P(!0, V)
                } finally {
                    se ? Me() : (J = !1,
                    P = null)
                }
            } else
                J = !1
        }
        var Me;
        if (typeof I == "function")
            Me = function() {
                I(Se)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Ue = new MessageChannel
              , Fe = Ue.port2;
            Ue.port1.onmessage = Se,
            Me = function() {
                Fe.postMessage(null)
            }
        } else
            Me = function() {
                z(Se, 0)
            }
            ;
        function Je(V) {
            P = V,
            J || (J = !0,
            Me())
        }
        function Ae(V, se) {
            Y = z(function() {
                V(r.unstable_now())
            }, se)
        }
        r.unstable_IdlePriority = 5,
        r.unstable_ImmediatePriority = 1,
        r.unstable_LowPriority = 4,
        r.unstable_NormalPriority = 3,
        r.unstable_Profiling = null,
        r.unstable_UserBlockingPriority = 2,
        r.unstable_cancelCallback = function(V) {
            V.callback = null
        }
        ,
        r.unstable_continueExecution = function() {
            L || N || (L = !0,
            Je(q))
        }
        ,
        r.unstable_forceFrameRate = function(V) {
            0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : he = 0 < V ? Math.floor(1e3 / V) : 5
        }
        ,
        r.unstable_getCurrentPriorityLevel = function() {
            return S
        }
        ,
        r.unstable_getFirstCallbackNode = function() {
            return o(p)
        }
        ,
        r.unstable_next = function(V) {
            switch (S) {
            case 1:
            case 2:
            case 3:
                var se = 3;
                break;
            default:
                se = S
            }
            var G = S;
            S = se;
            try {
                return V()
            } finally {
                S = G
            }
        }
        ,
        r.unstable_pauseExecution = function() {}
        ,
        r.unstable_requestPaint = function() {}
        ,
        r.unstable_runWithPriority = function(V, se) {
            switch (V) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                V = 3
            }
            var G = S;
            S = V;
            try {
                return se()
            } finally {
                S = G
            }
        }
        ,
        r.unstable_scheduleCallback = function(V, se, G) {
            var _ = r.unstable_now();
            switch (typeof G == "object" && G !== null ? (G = G.delay,
            G = typeof G == "number" && 0 < G ? _ + G : _) : G = _,
            V) {
            case 1:
                var j = -1;
                break;
            case 2:
                j = 250;
                break;
            case 5:
                j = 1073741823;
                break;
            case 4:
                j = 1e4;
                break;
            default:
                j = 5e3
            }
            return j = G + j,
            V = {
                id: E++,
                callback: se,
                priorityLevel: V,
                startTime: G,
                expirationTime: j,
                sortIndex: -1
            },
            G > _ ? (V.sortIndex = G,
            i(v, V),
            o(p) === null && V === o(v) && (M ? (Q(Y),
            Y = -1) : M = !0,
            Ae($, G - _))) : (V.sortIndex = j,
            i(p, V),
            L || N || (L = !0,
            Je(q))),
            V
        }
        ,
        r.unstable_shouldYield = Re,
        r.unstable_wrapCallback = function(V) {
            var se = S;
            return function() {
                var G = S;
                S = se;
                try {
                    return V.apply(this, arguments)
                } finally {
                    S = G
                }
            }
        }
    }(xu)),
    xu
}
var Nf;
function Wp() {
    return Nf || (Nf = 1,
    Eu.exports = Vp()),
    Eu.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Of;
function Kp() {
    if (Of)
        return Rt;
    Of = 1;
    var r = Iu()
      , i = Wp();
    function o(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var s = new Set
      , c = {};
    function d(e, t) {
        h(e, t),
        h(e + "Capture", t)
    }
    function h(e, t) {
        for (c[e] = t,
        e = 0; e < t.length; e++)
            s.add(t[e])
    }
    var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , p = Object.prototype.hasOwnProperty
      , v = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , E = {}
      , y = {};
    function S(e) {
        return p.call(y, e) ? !0 : p.call(E, e) ? !1 : v.test(e) ? y[e] = !0 : (E[e] = !0,
        !1)
    }
    function N(e, t, n, l) {
        if (n !== null && n.type === 0)
            return !1;
        switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return l ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
            e !== "data-" && e !== "aria-");
        default:
            return !1
        }
    }
    function L(e, t, n, l) {
        if (t === null || typeof t > "u" || N(e, t, n, l))
            return !0;
        if (l)
            return !1;
        if (n !== null)
            switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
            }
        return !1
    }
    function M(e, t, n, l, a, u, f) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = l,
        this.attributeNamespace = a,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = u,
        this.removeEmptyString = f
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        z[e] = new M(e,0,!1,e,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var t = e[0];
        z[t] = new M(t,1,!1,e[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        z[e] = new M(e,2,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        z[e] = new M(e,2,!1,e,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        z[e] = new M(e,3,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        z[e] = new M(e,3,!0,e,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(e) {
        z[e] = new M(e,4,!1,e,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(e) {
        z[e] = new M(e,6,!1,e,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(e) {
        z[e] = new M(e,5,!1,e.toLowerCase(),null,!1,!1)
    });
    var Q = /[\-:]([a-z])/g;
    function I(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Q, I);
        z[t] = new M(t,1,!1,e,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Q, I);
        z[t] = new M(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(Q, I);
        z[t] = new M(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        z[e] = new M(e,1,!1,e.toLowerCase(),null,!1,!1)
    }),
    z.xlinkHref = new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(e) {
        z[e] = new M(e,1,!1,e.toLowerCase(),null,!0,!0)
    });
    function K(e, t, n, l) {
        var a = z.hasOwnProperty(t) ? z[t] : null;
        (a !== null ? a.type !== 0 : l || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (L(t, n, a, l) && (n = null),
        l || a === null ? S(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName,
        l = a.attributeNamespace,
        n === null ? e.removeAttribute(t) : (a = a.type,
        n = a === 3 || a === 4 && n === !0 ? "" : "" + n,
        l ? e.setAttributeNS(l, t, n) : e.setAttribute(t, n))))
    }
    var $ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , q = Symbol.for("react.element")
      , J = Symbol.for("react.portal")
      , P = Symbol.for("react.fragment")
      , Y = Symbol.for("react.strict_mode")
      , he = Symbol.for("react.profiler")
      , ue = Symbol.for("react.provider")
      , Re = Symbol.for("react.context")
      , Se = Symbol.for("react.forward_ref")
      , Me = Symbol.for("react.suspense")
      , Ue = Symbol.for("react.suspense_list")
      , Fe = Symbol.for("react.memo")
      , Je = Symbol.for("react.lazy")
      , Ae = Symbol.for("react.offscreen")
      , V = Symbol.iterator;
    function se(e) {
        return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var G = Object.assign, _;
    function j(e) {
        if (_ === void 0)
            try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                _ = t && t[1] || ""
            }
        return `
` + _ + e
    }
    var me = !1;
    function we(e, t) {
        if (!e || me)
            return "";
        me = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (O) {
                        var l = O
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (O) {
                        l = O
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (O) {
                    l = O
                }
                e()
            }
        } catch (O) {
            if (O && l && typeof O.stack == "string") {
                for (var a = O.stack.split(`
`), u = l.stack.split(`
`), f = a.length - 1, g = u.length - 1; 1 <= f && 0 <= g && a[f] !== u[g]; )
                    g--;
                for (; 1 <= f && 0 <= g; f--,
                g--)
                    if (a[f] !== u[g]) {
                        if (f !== 1 || g !== 1)
                            do
                                if (f--,
                                g--,
                                0 > g || a[f] !== u[g]) {
                                    var k = `
` + a[f].replace(" at new ", " at ");
                                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)),
                                    k
                                }
                            while (1 <= f && 0 <= g);
                        break
                    }
            }
        } finally {
            me = !1,
            Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? j(e) : ""
    }
    function ye(e) {
        switch (e.tag) {
        case 5:
            return j(e.type);
        case 16:
            return j("Lazy");
        case 13:
            return j("Suspense");
        case 19:
            return j("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = we(e.type, !1),
            e;
        case 11:
            return e = we(e.type.render, !1),
            e;
        case 1:
            return e = we(e.type, !0),
            e;
        default:
            return ""
        }
    }
    function Ee(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case P:
            return "Fragment";
        case J:
            return "Portal";
        case he:
            return "Profiler";
        case Y:
            return "StrictMode";
        case Me:
            return "Suspense";
        case Ue:
            return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case Re:
                return (e.displayName || "Context") + ".Consumer";
            case ue:
                return (e._context.displayName || "Context") + ".Provider";
            case Se:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case Fe:
                return t = e.displayName || null,
                t !== null ? t : Ee(e.type) || "Memo";
            case Je:
                t = e._payload,
                e = e._init;
                try {
                    return Ee(e(t))
                } catch {}
            }
        return null
    }
    function Ce(e) {
        var t = e.type;
        switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
            e = e.displayName || e.name || "",
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ee(t);
        case 8:
            return t === Y ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
        }
        return null
    }
    function Pe(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Be(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function vt(e) {
        var t = Be(e) ? "checked" : "value"
          , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , l = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var a = n.get
              , u = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return a.call(this)
                },
                set: function(f) {
                    l = "" + f,
                    u.call(this, f)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(f) {
                    l = "" + f
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function kr(e) {
        e._valueTracker || (e._valueTracker = vt(e))
    }
    function it(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , l = "";
        return e && (l = Be(e) ? e.checked ? "true" : "false" : e.value),
        e = l,
        e !== n ? (t.setValue(e),
        !0) : !1
    }
    function Bt(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function Rr(e, t) {
        var n = t.checked;
        return G({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        })
    }
    function ti(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue
          , l = t.checked != null ? t.checked : t.defaultChecked;
        n = Pe(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: l,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }
    function qt(e, t) {
        t = t.checked,
        t != null && K(e, "checked", t, !1)
    }
    function rl(e, t) {
        qt(e, t);
        var n = Pe(t.value)
          , l = t.type;
        if (n != null)
            l === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (l === "submit" || l === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? _r(e, t.type, n) : t.hasOwnProperty("defaultValue") && _r(e, t.type, Pe(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function ni(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var l = t.type;
            if (!(l !== "submit" && l !== "reset" || t.value !== void 0 && t.value !== null))
                return;
            t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
    }
    function _r(e, t, n) {
        (t !== "number" || Bt(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var tr = Array.isArray;
    function Pn(e, t, n, l) {
        if (e = e.options,
        t) {
            t = {};
            for (var a = 0; a < n.length; a++)
                t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
                a = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== a && (e[n].selected = a),
                a && l && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + Pe(n),
            t = null,
            a = 0; a < e.length; a++) {
                if (e[a].value === n) {
                    e[a].selected = !0,
                    l && (e[a].defaultSelected = !0);
                    return
                }
                t !== null || e[a].disabled || (t = e[a])
            }
            t !== null && (t.selected = !0)
        }
    }
    function ll(e, t) {
        if (t.dangerouslySetInnerHTML != null)
            throw Error(o(91));
        return G({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function ri(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children,
            t = t.defaultValue,
            n != null) {
                if (t != null)
                    throw Error(o(92));
                if (tr(n)) {
                    if (1 < n.length)
                        throw Error(o(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""),
            n = t
        }
        e._wrapperState = {
            initialValue: Pe(n)
        }
    }
    function bt(e, t) {
        var n = Pe(t.value)
          , l = Pe(t.defaultValue);
        n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        l != null && (e.defaultValue = "" + l)
    }
    function Ln(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }
    function il(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function nr(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? il(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Ct, Ot = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, l, a) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, l, a)
            })
        }
        : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for (Ct = Ct || document.createElement("div"),
            Ct.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ct.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    });
    function Tn(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var en = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , Io = ["Webkit", "ms", "Moz", "O"];
    Object.keys(en).forEach(function(e) {
        Io.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            en[t] = en[e]
        })
    });
    function Ht(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || en.hasOwnProperty(e) && en[e] ? ("" + t).trim() : t + "px"
    }
    function ol(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var l = n.indexOf("--") === 0
                  , a = Ht(n, t[n], l);
                n === "float" && (n = "cssFloat"),
                l ? e.setProperty(n, a) : e[n] = a
            }
    }
    var li = G({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Cr(e, t) {
        if (t) {
            if (li[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(o(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                    throw Error(o(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                    throw Error(o(61))
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(o(62))
        }
    }
    function al(e, t) {
        if (e.indexOf("-") === -1)
            return typeof t.is == "string";
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Pr = null;
    function Dn(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Lr = null
      , tn = null
      , nn = null;
    function ii(e) {
        if (e = Tl(e)) {
            if (typeof Lr != "function")
                throw Error(o(280));
            var t = e.stateNode;
            t && (t = Pi(t),
            Lr(e.stateNode, e.type, t))
        }
    }
    function ul(e) {
        tn ? nn ? nn.push(e) : nn = [e] : tn = e
    }
    function oi() {
        if (tn) {
            var e = tn
              , t = nn;
            if (nn = tn = null,
            ii(e),
            t)
                for (e = 0; e < t.length; e++)
                    ii(t[e])
        }
    }
    function sl(e, t) {
        return e(t)
    }
    function rr() {}
    var Nn = !1;
    function ai(e, t, n) {
        if (Nn)
            return e(t, n);
        Nn = !0;
        try {
            return sl(e, t, n)
        } finally {
            Nn = !1,
            (tn !== null || nn !== null) && (rr(),
            oi())
        }
    }
    function lr(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var l = Pi(n);
        if (l === null)
            return null;
        n = l[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (e = e.type,
            l = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !l;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && typeof n != "function")
            throw Error(o(231, t, typeof n));
        return n
    }
    var x = !1;
    if (m)
        try {
            var C = {};
            Object.defineProperty(C, "passive", {
                get: function() {
                    x = !0
                }
            }),
            window.addEventListener("test", C, C),
            window.removeEventListener("test", C, C)
        } catch {
            x = !1
        }
    function F(e, t, n, l, a, u, f, g, k) {
        var O = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, O)
        } catch (B) {
            this.onError(B)
        }
    }
    var U = !1
      , X = null
      , ae = !1
      , de = null
      , ne = {
        onError: function(e) {
            U = !0,
            X = e
        }
    };
    function le(e, t, n, l, a, u, f, g, k) {
        U = !1,
        X = null,
        F.apply(ne, arguments)
    }
    function b(e, t, n, l, a, u, f, g, k) {
        if (le.apply(this, arguments),
        U) {
            if (U) {
                var O = X;
                U = !1,
                X = null
            } else
                throw Error(o(198));
            ae || (ae = !0,
            de = O)
        }
    }
    function te(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (n = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function ge(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function ke(e) {
        if (te(e) !== e)
            throw Error(o(188))
    }
    function tt(e) {
        var t = e.alternate;
        if (!t) {
            if (t = te(e),
            t === null)
                throw Error(o(188));
            return t !== e ? null : e
        }
        for (var n = e, l = t; ; ) {
            var a = n.return;
            if (a === null)
                break;
            var u = a.alternate;
            if (u === null) {
                if (l = a.return,
                l !== null) {
                    n = l;
                    continue
                }
                break
            }
            if (a.child === u.child) {
                for (u = a.child; u; ) {
                    if (u === n)
                        return ke(a),
                        e;
                    if (u === l)
                        return ke(a),
                        t;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (n.return !== l.return)
                n = a,
                l = u;
            else {
                for (var f = !1, g = a.child; g; ) {
                    if (g === n) {
                        f = !0,
                        n = a,
                        l = u;
                        break
                    }
                    if (g === l) {
                        f = !0,
                        l = a,
                        n = u;
                        break
                    }
                    g = g.sibling
                }
                if (!f) {
                    for (g = u.child; g; ) {
                        if (g === n) {
                            f = !0,
                            n = u,
                            l = a;
                            break
                        }
                        if (g === l) {
                            f = !0,
                            l = u,
                            n = a;
                            break
                        }
                        g = g.sibling
                    }
                    if (!f)
                        throw Error(o(189))
                }
            }
            if (n.alternate !== l)
                throw Error(o(190))
        }
        if (n.tag !== 3)
            throw Error(o(188));
        return n.stateNode.current === n ? e : t
    }
    function ze(e) {
        return e = tt(e),
        e !== null ? Le(e) : null
    }
    function Le(e) {
        if (e.tag === 5 || e.tag === 6)
            return e;
        for (e = e.child; e !== null; ) {
            var t = Le(e);
            if (t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var Ve = i.unstable_scheduleCallback
      , dn = i.unstable_cancelCallback
      , ir = i.unstable_shouldYield
      , Vt = i.unstable_requestPaint
      , De = i.unstable_now
      , cl = i.unstable_getCurrentPriorityLevel
      , hn = i.unstable_ImmediatePriority
      , rn = i.unstable_UserBlockingPriority
      , pn = i.unstable_NormalPriority
      , Tr = i.unstable_LowPriority
      , _e = i.unstable_IdlePriority
      , $e = null
      , st = null;
    function or(e) {
        if (st && typeof st.onCommitFiberRoot == "function")
            try {
                st.onCommitFiberRoot($e, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
    }
    var Ne = Math.clz32 ? Math.clz32 : Uo
      , On = Math.log
      , ui = Math.LN2;
    function Uo(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (On(e) / ui | 0) | 0
    }
    var si = 64
      , ci = 4194304;
    function fl(e) {
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
        }
    }
    function fi(e, t) {
        var n = e.pendingLanes;
        if (n === 0)
            return 0;
        var l = 0
          , a = e.suspendedLanes
          , u = e.pingedLanes
          , f = n & 268435455;
        if (f !== 0) {
            var g = f & ~a;
            g !== 0 ? l = fl(g) : (u &= f,
            u !== 0 && (l = fl(u)))
        } else
            f = n & ~a,
            f !== 0 ? l = fl(f) : u !== 0 && (l = fl(u));
        if (l === 0)
            return 0;
        if (t !== 0 && t !== l && (t & a) === 0 && (a = l & -l,
        u = t & -t,
        a >= u || a === 16 && (u & 4194240) !== 0))
            return t;
        if ((l & 4) !== 0 && (l |= n & 16),
        t = e.entangledLanes,
        t !== 0)
            for (e = e.entanglements,
            t &= l; 0 < t; )
                n = 31 - Ne(t),
                a = 1 << n,
                l |= e[n],
                t &= ~a;
        return l
    }
    function nh(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function rh(e, t) {
        for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
            var f = 31 - Ne(u)
              , g = 1 << f
              , k = a[f];
            k === -1 ? ((g & n) === 0 || (g & l) !== 0) && (a[f] = nh(g, t)) : k <= t && (e.expiredLanes |= g),
            u &= ~g
        }
    }
    function Ao(e) {
        return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function ns() {
        var e = si;
        return si <<= 1,
        (si & 4194240) === 0 && (si = 64),
        e
    }
    function $o(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function dl(e, t, n) {
        e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
        e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - Ne(t),
        e[t] = n
    }
    function lh(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
        var l = e.eventTimes;
        for (e = e.expirationTimes; 0 < n; ) {
            var a = 31 - Ne(n)
              , u = 1 << a;
            t[a] = 0,
            l[a] = -1,
            e[a] = -1,
            n &= ~u
        }
    }
    function Bo(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
            var l = 31 - Ne(n)
              , a = 1 << l;
            a & t | e[l] & t && (e[l] |= t),
            n &= ~a
        }
    }
    var je = 0;
    function rs(e) {
        return e &= -e,
        1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var ls, Ho, is, os, as, Vo = !1, di = [], Mn = null, Fn = null, zn = null, hl = new Map, pl = new Map, jn = [], ih = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function us(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Mn = null;
            break;
        case "dragenter":
        case "dragleave":
            Fn = null;
            break;
        case "mouseover":
        case "mouseout":
            zn = null;
            break;
        case "pointerover":
        case "pointerout":
            hl.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            pl.delete(t.pointerId)
        }
    }
    function ml(e, t, n, l, a, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: l,
            nativeEvent: u,
            targetContainers: [a]
        },
        t !== null && (t = Tl(t),
        t !== null && Ho(t)),
        e) : (e.eventSystemFlags |= l,
        t = e.targetContainers,
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e)
    }
    function oh(e, t, n, l, a) {
        switch (t) {
        case "focusin":
            return Mn = ml(Mn, e, t, n, l, a),
            !0;
        case "dragenter":
            return Fn = ml(Fn, e, t, n, l, a),
            !0;
        case "mouseover":
            return zn = ml(zn, e, t, n, l, a),
            !0;
        case "pointerover":
            var u = a.pointerId;
            return hl.set(u, ml(hl.get(u) || null, e, t, n, l, a)),
            !0;
        case "gotpointercapture":
            return u = a.pointerId,
            pl.set(u, ml(pl.get(u) || null, e, t, n, l, a)),
            !0
        }
        return !1
    }
    function ss(e) {
        var t = ar(e.target);
        if (t !== null) {
            var n = te(t);
            if (n !== null) {
                if (t = n.tag,
                t === 13) {
                    if (t = ge(n),
                    t !== null) {
                        e.blockedOn = t,
                        as(e.priority, function() {
                            is(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function hi(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Ko(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var l = new n.constructor(n.type,n);
                Pr = l,
                n.target.dispatchEvent(l),
                Pr = null
            } else
                return t = Tl(n),
                t !== null && Ho(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function cs(e, t, n) {
        hi(e) && n.delete(t)
    }
    function ah() {
        Vo = !1,
        Mn !== null && hi(Mn) && (Mn = null),
        Fn !== null && hi(Fn) && (Fn = null),
        zn !== null && hi(zn) && (zn = null),
        hl.forEach(cs),
        pl.forEach(cs)
    }
    function vl(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Vo || (Vo = !0,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, ah)))
    }
    function yl(e) {
        function t(a) {
            return vl(a, e)
        }
        if (0 < di.length) {
            vl(di[0], e);
            for (var n = 1; n < di.length; n++) {
                var l = di[n];
                l.blockedOn === e && (l.blockedOn = null)
            }
        }
        for (Mn !== null && vl(Mn, e),
        Fn !== null && vl(Fn, e),
        zn !== null && vl(zn, e),
        hl.forEach(t),
        pl.forEach(t),
        n = 0; n < jn.length; n++)
            l = jn[n],
            l.blockedOn === e && (l.blockedOn = null);
        for (; 0 < jn.length && (n = jn[0],
        n.blockedOn === null); )
            ss(n),
            n.blockedOn === null && jn.shift()
    }
    var Dr = $.ReactCurrentBatchConfig
      , pi = !0;
    function uh(e, t, n, l) {
        var a = je
          , u = Dr.transition;
        Dr.transition = null;
        try {
            je = 1,
            Wo(e, t, n, l)
        } finally {
            je = a,
            Dr.transition = u
        }
    }
    function sh(e, t, n, l) {
        var a = je
          , u = Dr.transition;
        Dr.transition = null;
        try {
            je = 4,
            Wo(e, t, n, l)
        } finally {
            je = a,
            Dr.transition = u
        }
    }
    function Wo(e, t, n, l) {
        if (pi) {
            var a = Ko(e, t, n, l);
            if (a === null)
                ua(e, t, l, mi, n),
                us(e, l);
            else if (oh(a, e, t, n, l))
                l.stopPropagation();
            else if (us(e, l),
            t & 4 && -1 < ih.indexOf(e)) {
                for (; a !== null; ) {
                    var u = Tl(a);
                    if (u !== null && ls(u),
                    u = Ko(e, t, n, l),
                    u === null && ua(e, t, l, mi, n),
                    u === a)
                        break;
                    a = u
                }
                a !== null && l.stopPropagation()
            } else
                ua(e, t, l, null, n)
        }
    }
    var mi = null;
    function Ko(e, t, n, l) {
        if (mi = null,
        e = Dn(l),
        e = ar(e),
        e !== null)
            if (t = te(e),
            t === null)
                e = null;
            else if (n = t.tag,
            n === 13) {
                if (e = ge(t),
                e !== null)
                    return e;
                e = null
            } else if (n === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else
                t !== e && (e = null);
        return mi = e,
        null
    }
    function fs(e) {
        switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (cl()) {
            case hn:
                return 1;
            case rn:
                return 4;
            case pn:
            case Tr:
                return 16;
            case _e:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var In = null
      , Qo = null
      , vi = null;
    function ds() {
        if (vi)
            return vi;
        var e, t = Qo, n = t.length, l, a = "value"in In ? In.value : In.textContent, u = a.length;
        for (e = 0; e < n && t[e] === a[e]; e++)
            ;
        var f = n - e;
        for (l = 1; l <= f && t[n - l] === a[u - l]; l++)
            ;
        return vi = a.slice(e, 1 < l ? 1 - l : void 0)
    }
    function yi(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function gi() {
        return !0
    }
    function hs() {
        return !1
    }
    function Pt(e) {
        function t(n, l, a, u, f) {
            this._reactName = n,
            this._targetInst = a,
            this.type = l,
            this.nativeEvent = u,
            this.target = f,
            this.currentTarget = null;
            for (var g in e)
                e.hasOwnProperty(g) && (n = e[g],
                this[g] = n ? n(u) : u[g]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? gi : hs,
            this.isPropagationStopped = hs,
            this
        }
        return G(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = gi)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = gi)
            },
            persist: function() {},
            isPersistent: gi
        }),
        t
    }
    var Nr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Yo = Pt(Nr), gl = G({}, Nr, {
        view: 0,
        detail: 0
    }), ch = Pt(gl), Jo, Xo, wl, wi = G({}, gl, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Zo,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== wl && (wl && e.type === "mousemove" ? (Jo = e.screenX - wl.screenX,
            Xo = e.screenY - wl.screenY) : Xo = Jo = 0,
            wl = e),
            Jo)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Xo
        }
    }), ps = Pt(wi), fh = G({}, wi, {
        dataTransfer: 0
    }), dh = Pt(fh), hh = G({}, gl, {
        relatedTarget: 0
    }), Go = Pt(hh), ph = G({}, Nr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), mh = Pt(ph), vh = G({}, Nr, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), yh = Pt(vh), gh = G({}, Nr, {
        data: 0
    }), ms = Pt(gh), wh = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Sh = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Eh = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function xh(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Eh[e]) ? !!t[e] : !1
    }
    function Zo() {
        return xh
    }
    var kh = G({}, gl, {
        key: function(e) {
            if (e.key) {
                var t = wh[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = yi(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Sh[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Zo,
        charCode: function(e) {
            return e.type === "keypress" ? yi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? yi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Rh = Pt(kh)
      , _h = G({}, wi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , vs = Pt(_h)
      , Ch = G({}, gl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Zo
    })
      , Ph = Pt(Ch)
      , Lh = G({}, Nr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Th = Pt(Lh)
      , Dh = G({}, wi, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Nh = Pt(Dh)
      , Oh = [9, 13, 27, 32]
      , qo = m && "CompositionEvent"in window
      , Sl = null;
    m && "documentMode"in document && (Sl = document.documentMode);
    var Mh = m && "TextEvent"in window && !Sl
      , ys = m && (!qo || Sl && 8 < Sl && 11 >= Sl)
      , gs = " "
      , ws = !1;
    function Ss(e, t) {
        switch (e) {
        case "keyup":
            return Oh.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Es(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var Or = !1;
    function Fh(e, t) {
        switch (e) {
        case "compositionend":
            return Es(t);
        case "keypress":
            return t.which !== 32 ? null : (ws = !0,
            gs);
        case "textInput":
            return e = t.data,
            e === gs && ws ? null : e;
        default:
            return null
        }
    }
    function zh(e, t) {
        if (Or)
            return e === "compositionend" || !qo && Ss(e, t) ? (e = ds(),
            vi = Qo = In = null,
            Or = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return ys && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var jh = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function xs(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!jh[e.type] : t === "textarea"
    }
    function ks(e, t, n, l) {
        ul(l),
        t = Ri(t, "onChange"),
        0 < t.length && (n = new Yo("onChange","change",null,n,l),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var El = null
      , xl = null;
    function Ih(e) {
        Bs(e, 0)
    }
    function Si(e) {
        var t = Ir(e);
        if (it(t))
            return e
    }
    function Uh(e, t) {
        if (e === "change")
            return t
    }
    var Rs = !1;
    if (m) {
        var bo;
        if (m) {
            var ea = "oninput"in document;
            if (!ea) {
                var _s = document.createElement("div");
                _s.setAttribute("oninput", "return;"),
                ea = typeof _s.oninput == "function"
            }
            bo = ea
        } else
            bo = !1;
        Rs = bo && (!document.documentMode || 9 < document.documentMode)
    }
    function Cs() {
        El && (El.detachEvent("onpropertychange", Ps),
        xl = El = null)
    }
    function Ps(e) {
        if (e.propertyName === "value" && Si(xl)) {
            var t = [];
            ks(t, xl, e, Dn(e)),
            ai(Ih, t)
        }
    }
    function Ah(e, t, n) {
        e === "focusin" ? (Cs(),
        El = t,
        xl = n,
        El.attachEvent("onpropertychange", Ps)) : e === "focusout" && Cs()
    }
    function $h(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Si(xl)
    }
    function Bh(e, t) {
        if (e === "click")
            return Si(t)
    }
    function Hh(e, t) {
        if (e === "input" || e === "change")
            return Si(t)
    }
    function Vh(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Wt = typeof Object.is == "function" ? Object.is : Vh;
    function kl(e, t) {
        if (Wt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var n = Object.keys(e)
          , l = Object.keys(t);
        if (n.length !== l.length)
            return !1;
        for (l = 0; l < n.length; l++) {
            var a = n[l];
            if (!p.call(t, a) || !Wt(e[a], t[a]))
                return !1
        }
        return !0
    }
    function Ls(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Ts(e, t) {
        var n = Ls(e);
        e = 0;
        for (var l; n; ) {
            if (n.nodeType === 3) {
                if (l = e + n.textContent.length,
                e <= t && l >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = l
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Ls(n)
        }
    }
    function Ds(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ds(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Ns() {
        for (var e = window, t = Bt(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = Bt(e.document)
        }
        return t
    }
    function ta(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function Wh(e) {
        var t = Ns()
          , n = e.focusedElem
          , l = e.selectionRange;
        if (t !== n && n && n.ownerDocument && Ds(n.ownerDocument.documentElement, n)) {
            if (l !== null && ta(n)) {
                if (t = l.start,
                e = l.end,
                e === void 0 && (e = t),
                "selectionStart"in n)
                    n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                    e = e.getSelection();
                    var a = n.textContent.length
                      , u = Math.min(l.start, a);
                    l = l.end === void 0 ? u : Math.min(l.end, a),
                    !e.extend && u > l && (a = l,
                    l = u,
                    u = a),
                    a = Ts(n, u);
                    var f = Ts(n, l);
                    a && f && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(),
                    t.setStart(a.node, a.offset),
                    e.removeAllRanges(),
                    u > l ? (e.addRange(t),
                    e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset),
                    e.addRange(t)))
                }
            }
            for (t = [],
            e = n; e = e.parentNode; )
                e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
                e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
        }
    }
    var Kh = m && "documentMode"in document && 11 >= document.documentMode
      , Mr = null
      , na = null
      , Rl = null
      , ra = !1;
    function Os(e, t, n) {
        var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        ra || Mr == null || Mr !== Bt(l) || (l = Mr,
        "selectionStart"in l && ta(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        Rl && kl(Rl, l) || (Rl = l,
        l = Ri(na, "onSelect"),
        0 < l.length && (t = new Yo("onSelect","select",null,t,n),
        e.push({
            event: t,
            listeners: l
        }),
        t.target = Mr)))
    }
    function Ei(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var Fr = {
        animationend: Ei("Animation", "AnimationEnd"),
        animationiteration: Ei("Animation", "AnimationIteration"),
        animationstart: Ei("Animation", "AnimationStart"),
        transitionend: Ei("Transition", "TransitionEnd")
    }
      , la = {}
      , Ms = {};
    m && (Ms = document.createElement("div").style,
    "AnimationEvent"in window || (delete Fr.animationend.animation,
    delete Fr.animationiteration.animation,
    delete Fr.animationstart.animation),
    "TransitionEvent"in window || delete Fr.transitionend.transition);
    function xi(e) {
        if (la[e])
            return la[e];
        if (!Fr[e])
            return e;
        var t = Fr[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in Ms)
                return la[e] = t[n];
        return e
    }
    var Fs = xi("animationend")
      , zs = xi("animationiteration")
      , js = xi("animationstart")
      , Is = xi("transitionend")
      , Us = new Map
      , As = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Un(e, t) {
        Us.set(e, t),
        d(t, [e])
    }
    for (var ia = 0; ia < As.length; ia++) {
        var oa = As[ia]
          , Qh = oa.toLowerCase()
          , Yh = oa[0].toUpperCase() + oa.slice(1);
        Un(Qh, "on" + Yh)
    }
    Un(Fs, "onAnimationEnd"),
    Un(zs, "onAnimationIteration"),
    Un(js, "onAnimationStart"),
    Un("dblclick", "onDoubleClick"),
    Un("focusin", "onFocus"),
    Un("focusout", "onBlur"),
    Un(Is, "onTransitionEnd"),
    h("onMouseEnter", ["mouseout", "mouseover"]),
    h("onMouseLeave", ["mouseout", "mouseover"]),
    h("onPointerEnter", ["pointerout", "pointerover"]),
    h("onPointerLeave", ["pointerout", "pointerover"]),
    d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    d("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    d("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    d("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var _l = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Jh = new Set("cancel close invalid load scroll toggle".split(" ").concat(_l));
    function $s(e, t, n) {
        var l = e.type || "unknown-event";
        e.currentTarget = n,
        b(l, t, void 0, e),
        e.currentTarget = null
    }
    function Bs(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var l = e[n]
              , a = l.event;
            l = l.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var f = l.length - 1; 0 <= f; f--) {
                        var g = l[f]
                          , k = g.instance
                          , O = g.currentTarget;
                        if (g = g.listener,
                        k !== u && a.isPropagationStopped())
                            break e;
                        $s(a, g, O),
                        u = k
                    }
                else
                    for (f = 0; f < l.length; f++) {
                        if (g = l[f],
                        k = g.instance,
                        O = g.currentTarget,
                        g = g.listener,
                        k !== u && a.isPropagationStopped())
                            break e;
                        $s(a, g, O),
                        u = k
                    }
            }
        }
        if (ae)
            throw e = de,
            ae = !1,
            de = null,
            e
    }
    function We(e, t) {
        var n = t[pa];
        n === void 0 && (n = t[pa] = new Set);
        var l = e + "__bubble";
        n.has(l) || (Hs(t, e, 2, !1),
        n.add(l))
    }
    function aa(e, t, n) {
        var l = 0;
        t && (l |= 4),
        Hs(n, e, l, t)
    }
    var ki = "_reactListening" + Math.random().toString(36).slice(2);
    function Cl(e) {
        if (!e[ki]) {
            e[ki] = !0,
            s.forEach(function(n) {
                n !== "selectionchange" && (Jh.has(n) || aa(n, !1, e),
                aa(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[ki] || (t[ki] = !0,
            aa("selectionchange", !1, t))
        }
    }
    function Hs(e, t, n, l) {
        switch (fs(t)) {
        case 1:
            var a = uh;
            break;
        case 4:
            a = sh;
            break;
        default:
            a = Wo
        }
        n = a.bind(null, t, n, e),
        a = void 0,
        !x || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0),
        l ? a !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: a
        }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
            passive: a
        }) : e.addEventListener(t, n, !1)
    }
    function ua(e, t, n, l, a) {
        var u = l;
        if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
            e: for (; ; ) {
                if (l === null)
                    return;
                var f = l.tag;
                if (f === 3 || f === 4) {
                    var g = l.stateNode.containerInfo;
                    if (g === a || g.nodeType === 8 && g.parentNode === a)
                        break;
                    if (f === 4)
                        for (f = l.return; f !== null; ) {
                            var k = f.tag;
                            if ((k === 3 || k === 4) && (k = f.stateNode.containerInfo,
                            k === a || k.nodeType === 8 && k.parentNode === a))
                                return;
                            f = f.return
                        }
                    for (; g !== null; ) {
                        if (f = ar(g),
                        f === null)
                            return;
                        if (k = f.tag,
                        k === 5 || k === 6) {
                            l = u = f;
                            continue e
                        }
                        g = g.parentNode
                    }
                }
                l = l.return
            }
        ai(function() {
            var O = u
              , B = Dn(n)
              , H = [];
            e: {
                var A = Us.get(e);
                if (A !== void 0) {
                    var Z = Yo
                      , re = e;
                    switch (e) {
                    case "keypress":
                        if (yi(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        Z = Rh;
                        break;
                    case "focusin":
                        re = "focus",
                        Z = Go;
                        break;
                    case "focusout":
                        re = "blur",
                        Z = Go;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        Z = Go;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        Z = ps;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        Z = dh;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        Z = Ph;
                        break;
                    case Fs:
                    case zs:
                    case js:
                        Z = mh;
                        break;
                    case Is:
                        Z = Th;
                        break;
                    case "scroll":
                        Z = ch;
                        break;
                    case "wheel":
                        Z = Nh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        Z = yh;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        Z = vs
                    }
                    var ie = (t & 4) !== 0
                      , qe = !ie && e === "scroll"
                      , T = ie ? A !== null ? A + "Capture" : null : A;
                    ie = [];
                    for (var R = O, D; R !== null; ) {
                        D = R;
                        var W = D.stateNode;
                        if (D.tag === 5 && W !== null && (D = W,
                        T !== null && (W = lr(R, T),
                        W != null && ie.push(Pl(R, W, D)))),
                        qe)
                            break;
                        R = R.return
                    }
                    0 < ie.length && (A = new Z(A,re,null,n,B),
                    H.push({
                        event: A,
                        listeners: ie
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (A = e === "mouseover" || e === "pointerover",
                    Z = e === "mouseout" || e === "pointerout",
                    A && n !== Pr && (re = n.relatedTarget || n.fromElement) && (ar(re) || re[mn]))
                        break e;
                    if ((Z || A) && (A = B.window === B ? B : (A = B.ownerDocument) ? A.defaultView || A.parentWindow : window,
                    Z ? (re = n.relatedTarget || n.toElement,
                    Z = O,
                    re = re ? ar(re) : null,
                    re !== null && (qe = te(re),
                    re !== qe || re.tag !== 5 && re.tag !== 6) && (re = null)) : (Z = null,
                    re = O),
                    Z !== re)) {
                        if (ie = ps,
                        W = "onMouseLeave",
                        T = "onMouseEnter",
                        R = "mouse",
                        (e === "pointerout" || e === "pointerover") && (ie = vs,
                        W = "onPointerLeave",
                        T = "onPointerEnter",
                        R = "pointer"),
                        qe = Z == null ? A : Ir(Z),
                        D = re == null ? A : Ir(re),
                        A = new ie(W,R + "leave",Z,n,B),
                        A.target = qe,
                        A.relatedTarget = D,
                        W = null,
                        ar(B) === O && (ie = new ie(T,R + "enter",re,n,B),
                        ie.target = D,
                        ie.relatedTarget = qe,
                        W = ie),
                        qe = W,
                        Z && re)
                            t: {
                                for (ie = Z,
                                T = re,
                                R = 0,
                                D = ie; D; D = zr(D))
                                    R++;
                                for (D = 0,
                                W = T; W; W = zr(W))
                                    D++;
                                for (; 0 < R - D; )
                                    ie = zr(ie),
                                    R--;
                                for (; 0 < D - R; )
                                    T = zr(T),
                                    D--;
                                for (; R--; ) {
                                    if (ie === T || T !== null && ie === T.alternate)
                                        break t;
                                    ie = zr(ie),
                                    T = zr(T)
                                }
                                ie = null
                            }
                        else
                            ie = null;
                        Z !== null && Vs(H, A, Z, ie, !1),
                        re !== null && qe !== null && Vs(H, qe, re, ie, !0)
                    }
                }
                e: {
                    if (A = O ? Ir(O) : window,
                    Z = A.nodeName && A.nodeName.toLowerCase(),
                    Z === "select" || Z === "input" && A.type === "file")
                        var oe = Uh;
                    else if (xs(A))
                        if (Rs)
                            oe = Hh;
                        else {
                            oe = $h;
                            var ce = Ah
                        }
                    else
                        (Z = A.nodeName) && Z.toLowerCase() === "input" && (A.type === "checkbox" || A.type === "radio") && (oe = Bh);
                    if (oe && (oe = oe(e, O))) {
                        ks(H, oe, n, B);
                        break e
                    }
                    ce && ce(e, A, O),
                    e === "focusout" && (ce = A._wrapperState) && ce.controlled && A.type === "number" && _r(A, "number", A.value)
                }
                switch (ce = O ? Ir(O) : window,
                e) {
                case "focusin":
                    (xs(ce) || ce.contentEditable === "true") && (Mr = ce,
                    na = O,
                    Rl = null);
                    break;
                case "focusout":
                    Rl = na = Mr = null;
                    break;
                case "mousedown":
                    ra = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ra = !1,
                    Os(H, n, B);
                    break;
                case "selectionchange":
                    if (Kh)
                        break;
                case "keydown":
                case "keyup":
                    Os(H, n, B)
                }
                var fe;
                if (qo)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var pe = "onCompositionStart";
                            break e;
                        case "compositionend":
                            pe = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            pe = "onCompositionUpdate";
                            break e
                        }
                        pe = void 0
                    }
                else
                    Or ? Ss(e, n) && (pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (pe = "onCompositionStart");
                pe && (ys && n.locale !== "ko" && (Or || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && Or && (fe = ds()) : (In = B,
                Qo = "value"in In ? In.value : In.textContent,
                Or = !0)),
                ce = Ri(O, pe),
                0 < ce.length && (pe = new ms(pe,e,null,n,B),
                H.push({
                    event: pe,
                    listeners: ce
                }),
                fe ? pe.data = fe : (fe = Es(n),
                fe !== null && (pe.data = fe)))),
                (fe = Mh ? Fh(e, n) : zh(e, n)) && (O = Ri(O, "onBeforeInput"),
                0 < O.length && (B = new ms("onBeforeInput","beforeinput",null,n,B),
                H.push({
                    event: B,
                    listeners: O
                }),
                B.data = fe))
            }
            Bs(H, t)
        })
    }
    function Pl(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function Ri(e, t) {
        for (var n = t + "Capture", l = []; e !== null; ) {
            var a = e
              , u = a.stateNode;
            a.tag === 5 && u !== null && (a = u,
            u = lr(e, n),
            u != null && l.unshift(Pl(e, u, a)),
            u = lr(e, t),
            u != null && l.push(Pl(e, u, a))),
            e = e.return
        }
        return l
    }
    function zr(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5);
        return e || null
    }
    function Vs(e, t, n, l, a) {
        for (var u = t._reactName, f = []; n !== null && n !== l; ) {
            var g = n
              , k = g.alternate
              , O = g.stateNode;
            if (k !== null && k === l)
                break;
            g.tag === 5 && O !== null && (g = O,
            a ? (k = lr(n, u),
            k != null && f.unshift(Pl(n, k, g))) : a || (k = lr(n, u),
            k != null && f.push(Pl(n, k, g)))),
            n = n.return
        }
        f.length !== 0 && e.push({
            event: t,
            listeners: f
        })
    }
    var Xh = /\r\n?/g
      , Gh = /\u0000|\uFFFD/g;
    function Ws(e) {
        return (typeof e == "string" ? e : "" + e).replace(Xh, `
`).replace(Gh, "")
    }
    function _i(e, t, n) {
        if (t = Ws(t),
        Ws(e) !== t && n)
            throw Error(o(425))
    }
    function Ci() {}
    var sa = null
      , ca = null;
    function fa(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var da = typeof setTimeout == "function" ? setTimeout : void 0
      , Zh = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Ks = typeof Promise == "function" ? Promise : void 0
      , qh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ks < "u" ? function(e) {
        return Ks.resolve(null).then(e).catch(bh)
    }
    : da;
    function bh(e) {
        setTimeout(function() {
            throw e
        })
    }
    function ha(e, t) {
        var n = t
          , l = 0;
        do {
            var a = n.nextSibling;
            if (e.removeChild(n),
            a && a.nodeType === 8)
                if (n = a.data,
                n === "/$") {
                    if (l === 0) {
                        e.removeChild(a),
                        yl(t);
                        return
                    }
                    l--
                } else
                    n !== "$" && n !== "$?" && n !== "$!" || l++;
            n = a
        } while (n);
        yl(t)
    }
    function An(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    function Qs(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var jr = Math.random().toString(36).slice(2)
      , ln = "__reactFiber$" + jr
      , Ll = "__reactProps$" + jr
      , mn = "__reactContainer$" + jr
      , pa = "__reactEvents$" + jr
      , ep = "__reactListeners$" + jr
      , tp = "__reactHandles$" + jr;
    function ar(e) {
        var t = e[ln];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[mn] || n[ln]) {
                if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                    for (e = Qs(e); e !== null; ) {
                        if (n = e[ln])
                            return n;
                        e = Qs(e)
                    }
                return t
            }
            e = n,
            n = e.parentNode
        }
        return null
    }
    function Tl(e) {
        return e = e[ln] || e[mn],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }
    function Ir(e) {
        if (e.tag === 5 || e.tag === 6)
            return e.stateNode;
        throw Error(o(33))
    }
    function Pi(e) {
        return e[Ll] || null
    }
    var ma = []
      , Ur = -1;
    function $n(e) {
        return {
            current: e
        }
    }
    function Ke(e) {
        0 > Ur || (e.current = ma[Ur],
        ma[Ur] = null,
        Ur--)
    }
    function He(e, t) {
        Ur++,
        ma[Ur] = e.current,
        e.current = t
    }
    var Bn = {}
      , dt = $n(Bn)
      , wt = $n(!1)
      , ur = Bn;
    function Ar(e, t) {
        var n = e.type.contextTypes;
        if (!n)
            return Bn;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
            return l.__reactInternalMemoizedMaskedChildContext;
        var a = {}, u;
        for (u in n)
            a[u] = t[u];
        return l && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = a),
        a
    }
    function St(e) {
        return e = e.childContextTypes,
        e != null
    }
    function Li() {
        Ke(wt),
        Ke(dt)
    }
    function Ys(e, t, n) {
        if (dt.current !== Bn)
            throw Error(o(168));
        He(dt, t),
        He(wt, n)
    }
    function Js(e, t, n) {
        var l = e.stateNode;
        if (t = t.childContextTypes,
        typeof l.getChildContext != "function")
            return n;
        l = l.getChildContext();
        for (var a in l)
            if (!(a in t))
                throw Error(o(108, Ce(e) || "Unknown", a));
        return G({}, n, l)
    }
    function Ti(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Bn,
        ur = dt.current,
        He(dt, e),
        He(wt, wt.current),
        !0
    }
    function Xs(e, t, n) {
        var l = e.stateNode;
        if (!l)
            throw Error(o(169));
        n ? (e = Js(e, t, ur),
        l.__reactInternalMemoizedMergedChildContext = e,
        Ke(wt),
        Ke(dt),
        He(dt, e)) : Ke(wt),
        He(wt, n)
    }
    var vn = null
      , Di = !1
      , va = !1;
    function Gs(e) {
        vn === null ? vn = [e] : vn.push(e)
    }
    function np(e) {
        Di = !0,
        Gs(e)
    }
    function Hn() {
        if (!va && vn !== null) {
            va = !0;
            var e = 0
              , t = je;
            try {
                var n = vn;
                for (je = 1; e < n.length; e++) {
                    var l = n[e];
                    do
                        l = l(!0);
                    while (l !== null)
                }
                vn = null,
                Di = !1
            } catch (a) {
                throw vn !== null && (vn = vn.slice(e + 1)),
                Ve(hn, Hn),
                a
            } finally {
                je = t,
                va = !1
            }
        }
        return null
    }
    var $r = []
      , Br = 0
      , Ni = null
      , Oi = 0
      , Mt = []
      , Ft = 0
      , sr = null
      , yn = 1
      , gn = "";
    function cr(e, t) {
        $r[Br++] = Oi,
        $r[Br++] = Ni,
        Ni = e,
        Oi = t
    }
    function Zs(e, t, n) {
        Mt[Ft++] = yn,
        Mt[Ft++] = gn,
        Mt[Ft++] = sr,
        sr = e;
        var l = yn;
        e = gn;
        var a = 32 - Ne(l) - 1;
        l &= ~(1 << a),
        n += 1;
        var u = 32 - Ne(t) + a;
        if (30 < u) {
            var f = a - a % 5;
            u = (l & (1 << f) - 1).toString(32),
            l >>= f,
            a -= f,
            yn = 1 << 32 - Ne(t) + a | n << a | l,
            gn = u + e
        } else
            yn = 1 << u | n << a | l,
            gn = e
    }
    function ya(e) {
        e.return !== null && (cr(e, 1),
        Zs(e, 1, 0))
    }
    function ga(e) {
        for (; e === Ni; )
            Ni = $r[--Br],
            $r[Br] = null,
            Oi = $r[--Br],
            $r[Br] = null;
        for (; e === sr; )
            sr = Mt[--Ft],
            Mt[Ft] = null,
            gn = Mt[--Ft],
            Mt[Ft] = null,
            yn = Mt[--Ft],
            Mt[Ft] = null
    }
    var Lt = null
      , Tt = null
      , Ye = !1
      , Kt = null;
    function qs(e, t) {
        var n = Ut(5, null, null, 0);
        n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
        e.flags |= 16) : t.push(n)
    }
    function bs(e, t) {
        switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
            t !== null ? (e.stateNode = t,
            Lt = e,
            Tt = An(t.firstChild),
            !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
            t !== null ? (e.stateNode = t,
            Lt = e,
            Tt = null,
            !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
            t !== null ? (n = sr !== null ? {
                id: yn,
                overflow: gn
            } : null,
            e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            },
            n = Ut(18, null, null, 0),
            n.stateNode = t,
            n.return = e,
            e.child = n,
            Lt = e,
            Tt = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function wa(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function Sa(e) {
        if (Ye) {
            var t = Tt;
            if (t) {
                var n = t;
                if (!bs(e, t)) {
                    if (wa(e))
                        throw Error(o(418));
                    t = An(n.nextSibling);
                    var l = Lt;
                    t && bs(e, t) ? qs(l, n) : (e.flags = e.flags & -4097 | 2,
                    Ye = !1,
                    Lt = e)
                }
            } else {
                if (wa(e))
                    throw Error(o(418));
                e.flags = e.flags & -4097 | 2,
                Ye = !1,
                Lt = e
            }
        }
    }
    function ec(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
            e = e.return;
        Lt = e
    }
    function Mi(e) {
        if (e !== Lt)
            return !1;
        if (!Ye)
            return ec(e),
            Ye = !0,
            !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !fa(e.type, e.memoizedProps)),
        t && (t = Tt)) {
            if (wa(e))
                throw tc(),
                Error(o(418));
            for (; t; )
                qs(e, t),
                t = An(t.nextSibling)
        }
        if (ec(e),
        e.tag === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(o(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                Tt = An(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                Tt = null
            }
        } else
            Tt = Lt ? An(e.stateNode.nextSibling) : null;
        return !0
    }
    function tc() {
        for (var e = Tt; e; )
            e = An(e.nextSibling)
    }
    function Hr() {
        Tt = Lt = null,
        Ye = !1
    }
    function Ea(e) {
        Kt === null ? Kt = [e] : Kt.push(e)
    }
    var rp = $.ReactCurrentBatchConfig;
    function Dl(e, t, n) {
        if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner,
                n) {
                    if (n.tag !== 1)
                        throw Error(o(309));
                    var l = n.stateNode
                }
                if (!l)
                    throw Error(o(147, e));
                var a = l
                  , u = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(f) {
                    var g = a.refs;
                    f === null ? delete g[u] : g[u] = f
                }
                ,
                t._stringRef = u,
                t)
            }
            if (typeof e != "string")
                throw Error(o(284));
            if (!n._owner)
                throw Error(o(290, e))
        }
        return e
    }
    function Fi(e, t) {
        throw e = Object.prototype.toString.call(t),
        Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }
    function nc(e) {
        var t = e._init;
        return t(e._payload)
    }
    function rc(e) {
        function t(T, R) {
            if (e) {
                var D = T.deletions;
                D === null ? (T.deletions = [R],
                T.flags |= 16) : D.push(R)
            }
        }
        function n(T, R) {
            if (!e)
                return null;
            for (; R !== null; )
                t(T, R),
                R = R.sibling;
            return null
        }
        function l(T, R) {
            for (T = new Map; R !== null; )
                R.key !== null ? T.set(R.key, R) : T.set(R.index, R),
                R = R.sibling;
            return T
        }
        function a(T, R) {
            return T = Gn(T, R),
            T.index = 0,
            T.sibling = null,
            T
        }
        function u(T, R, D) {
            return T.index = D,
            e ? (D = T.alternate,
            D !== null ? (D = D.index,
            D < R ? (T.flags |= 2,
            R) : D) : (T.flags |= 2,
            R)) : (T.flags |= 1048576,
            R)
        }
        function f(T) {
            return e && T.alternate === null && (T.flags |= 2),
            T
        }
        function g(T, R, D, W) {
            return R === null || R.tag !== 6 ? (R = du(D, T.mode, W),
            R.return = T,
            R) : (R = a(R, D),
            R.return = T,
            R)
        }
        function k(T, R, D, W) {
            var oe = D.type;
            return oe === P ? B(T, R, D.props.children, W, D.key) : R !== null && (R.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Je && nc(oe) === R.type) ? (W = a(R, D.props),
            W.ref = Dl(T, R, D),
            W.return = T,
            W) : (W = lo(D.type, D.key, D.props, null, T.mode, W),
            W.ref = Dl(T, R, D),
            W.return = T,
            W)
        }
        function O(T, R, D, W) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== D.containerInfo || R.stateNode.implementation !== D.implementation ? (R = hu(D, T.mode, W),
            R.return = T,
            R) : (R = a(R, D.children || []),
            R.return = T,
            R)
        }
        function B(T, R, D, W, oe) {
            return R === null || R.tag !== 7 ? (R = gr(D, T.mode, W, oe),
            R.return = T,
            R) : (R = a(R, D),
            R.return = T,
            R)
        }
        function H(T, R, D) {
            if (typeof R == "string" && R !== "" || typeof R == "number")
                return R = du("" + R, T.mode, D),
                R.return = T,
                R;
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case q:
                    return D = lo(R.type, R.key, R.props, null, T.mode, D),
                    D.ref = Dl(T, null, R),
                    D.return = T,
                    D;
                case J:
                    return R = hu(R, T.mode, D),
                    R.return = T,
                    R;
                case Je:
                    var W = R._init;
                    return H(T, W(R._payload), D)
                }
                if (tr(R) || se(R))
                    return R = gr(R, T.mode, D, null),
                    R.return = T,
                    R;
                Fi(T, R)
            }
            return null
        }
        function A(T, R, D, W) {
            var oe = R !== null ? R.key : null;
            if (typeof D == "string" && D !== "" || typeof D == "number")
                return oe !== null ? null : g(T, R, "" + D, W);
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case q:
                    return D.key === oe ? k(T, R, D, W) : null;
                case J:
                    return D.key === oe ? O(T, R, D, W) : null;
                case Je:
                    return oe = D._init,
                    A(T, R, oe(D._payload), W)
                }
                if (tr(D) || se(D))
                    return oe !== null ? null : B(T, R, D, W, null);
                Fi(T, D)
            }
            return null
        }
        function Z(T, R, D, W, oe) {
            if (typeof W == "string" && W !== "" || typeof W == "number")
                return T = T.get(D) || null,
                g(R, T, "" + W, oe);
            if (typeof W == "object" && W !== null) {
                switch (W.$$typeof) {
                case q:
                    return T = T.get(W.key === null ? D : W.key) || null,
                    k(R, T, W, oe);
                case J:
                    return T = T.get(W.key === null ? D : W.key) || null,
                    O(R, T, W, oe);
                case Je:
                    var ce = W._init;
                    return Z(T, R, D, ce(W._payload), oe)
                }
                if (tr(W) || se(W))
                    return T = T.get(D) || null,
                    B(R, T, W, oe, null);
                Fi(R, W)
            }
            return null
        }
        function re(T, R, D, W) {
            for (var oe = null, ce = null, fe = R, pe = R = 0, ut = null; fe !== null && pe < D.length; pe++) {
                fe.index > pe ? (ut = fe,
                fe = null) : ut = fe.sibling;
                var Oe = A(T, fe, D[pe], W);
                if (Oe === null) {
                    fe === null && (fe = ut);
                    break
                }
                e && fe && Oe.alternate === null && t(T, fe),
                R = u(Oe, R, pe),
                ce === null ? oe = Oe : ce.sibling = Oe,
                ce = Oe,
                fe = ut
            }
            if (pe === D.length)
                return n(T, fe),
                Ye && cr(T, pe),
                oe;
            if (fe === null) {
                for (; pe < D.length; pe++)
                    fe = H(T, D[pe], W),
                    fe !== null && (R = u(fe, R, pe),
                    ce === null ? oe = fe : ce.sibling = fe,
                    ce = fe);
                return Ye && cr(T, pe),
                oe
            }
            for (fe = l(T, fe); pe < D.length; pe++)
                ut = Z(fe, T, pe, D[pe], W),
                ut !== null && (e && ut.alternate !== null && fe.delete(ut.key === null ? pe : ut.key),
                R = u(ut, R, pe),
                ce === null ? oe = ut : ce.sibling = ut,
                ce = ut);
            return e && fe.forEach(function(Zn) {
                return t(T, Zn)
            }),
            Ye && cr(T, pe),
            oe
        }
        function ie(T, R, D, W) {
            var oe = se(D);
            if (typeof oe != "function")
                throw Error(o(150));
            if (D = oe.call(D),
            D == null)
                throw Error(o(151));
            for (var ce = oe = null, fe = R, pe = R = 0, ut = null, Oe = D.next(); fe !== null && !Oe.done; pe++,
            Oe = D.next()) {
                fe.index > pe ? (ut = fe,
                fe = null) : ut = fe.sibling;
                var Zn = A(T, fe, Oe.value, W);
                if (Zn === null) {
                    fe === null && (fe = ut);
                    break
                }
                e && fe && Zn.alternate === null && t(T, fe),
                R = u(Zn, R, pe),
                ce === null ? oe = Zn : ce.sibling = Zn,
                ce = Zn,
                fe = ut
            }
            if (Oe.done)
                return n(T, fe),
                Ye && cr(T, pe),
                oe;
            if (fe === null) {
                for (; !Oe.done; pe++,
                Oe = D.next())
                    Oe = H(T, Oe.value, W),
                    Oe !== null && (R = u(Oe, R, pe),
                    ce === null ? oe = Oe : ce.sibling = Oe,
                    ce = Oe);
                return Ye && cr(T, pe),
                oe
            }
            for (fe = l(T, fe); !Oe.done; pe++,
            Oe = D.next())
                Oe = Z(fe, T, pe, Oe.value, W),
                Oe !== null && (e && Oe.alternate !== null && fe.delete(Oe.key === null ? pe : Oe.key),
                R = u(Oe, R, pe),
                ce === null ? oe = Oe : ce.sibling = Oe,
                ce = Oe);
            return e && fe.forEach(function(jp) {
                return t(T, jp)
            }),
            Ye && cr(T, pe),
            oe
        }
        function qe(T, R, D, W) {
            if (typeof D == "object" && D !== null && D.type === P && D.key === null && (D = D.props.children),
            typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case q:
                    e: {
                        for (var oe = D.key, ce = R; ce !== null; ) {
                            if (ce.key === oe) {
                                if (oe = D.type,
                                oe === P) {
                                    if (ce.tag === 7) {
                                        n(T, ce.sibling),
                                        R = a(ce, D.props.children),
                                        R.return = T,
                                        T = R;
                                        break e
                                    }
                                } else if (ce.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Je && nc(oe) === ce.type) {
                                    n(T, ce.sibling),
                                    R = a(ce, D.props),
                                    R.ref = Dl(T, ce, D),
                                    R.return = T,
                                    T = R;
                                    break e
                                }
                                n(T, ce);
                                break
                            } else
                                t(T, ce);
                            ce = ce.sibling
                        }
                        D.type === P ? (R = gr(D.props.children, T.mode, W, D.key),
                        R.return = T,
                        T = R) : (W = lo(D.type, D.key, D.props, null, T.mode, W),
                        W.ref = Dl(T, R, D),
                        W.return = T,
                        T = W)
                    }
                    return f(T);
                case J:
                    e: {
                        for (ce = D.key; R !== null; ) {
                            if (R.key === ce)
                                if (R.tag === 4 && R.stateNode.containerInfo === D.containerInfo && R.stateNode.implementation === D.implementation) {
                                    n(T, R.sibling),
                                    R = a(R, D.children || []),
                                    R.return = T,
                                    T = R;
                                    break e
                                } else {
                                    n(T, R);
                                    break
                                }
                            else
                                t(T, R);
                            R = R.sibling
                        }
                        R = hu(D, T.mode, W),
                        R.return = T,
                        T = R
                    }
                    return f(T);
                case Je:
                    return ce = D._init,
                    qe(T, R, ce(D._payload), W)
                }
                if (tr(D))
                    return re(T, R, D, W);
                if (se(D))
                    return ie(T, R, D, W);
                Fi(T, D)
            }
            return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D,
            R !== null && R.tag === 6 ? (n(T, R.sibling),
            R = a(R, D),
            R.return = T,
            T = R) : (n(T, R),
            R = du(D, T.mode, W),
            R.return = T,
            T = R),
            f(T)) : n(T, R)
        }
        return qe
    }
    var Vr = rc(!0)
      , lc = rc(!1)
      , zi = $n(null)
      , ji = null
      , Wr = null
      , xa = null;
    function ka() {
        xa = Wr = ji = null
    }
    function Ra(e) {
        var t = zi.current;
        Ke(zi),
        e._currentValue = t
    }
    function _a(e, t, n) {
        for (; e !== null; ) {
            var l = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
            e === n)
                break;
            e = e.return
        }
    }
    function Kr(e, t) {
        ji = e,
        xa = Wr = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Et = !0),
        e.firstContext = null)
    }
    function zt(e) {
        var t = e._currentValue;
        if (xa !== e)
            if (e = {
                context: e,
                memoizedValue: t,
                next: null
            },
            Wr === null) {
                if (ji === null)
                    throw Error(o(308));
                Wr = e,
                ji.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else
                Wr = Wr.next = e;
        return t
    }
    var fr = null;
    function Ca(e) {
        fr === null ? fr = [e] : fr.push(e)
    }
    function ic(e, t, n, l) {
        var a = t.interleaved;
        return a === null ? (n.next = n,
        Ca(t)) : (n.next = a.next,
        a.next = n),
        t.interleaved = n,
        wn(e, l)
    }
    function wn(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null; )
            e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }
    var Vn = !1;
    function Pa(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function oc(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }
    function Sn(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Wn(e, t, n) {
        var l = e.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Te & 2) !== 0) {
            var a = l.pending;
            return a === null ? t.next = t : (t.next = a.next,
            a.next = t),
            l.pending = t,
            wn(e, n)
        }
        return a = l.interleaved,
        a === null ? (t.next = t,
        Ca(l)) : (t.next = a.next,
        a.next = t),
        l.interleaved = t,
        wn(e, n)
    }
    function Ii(e, t, n) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (n & 4194240) !== 0)) {
            var l = t.lanes;
            l &= e.pendingLanes,
            n |= l,
            t.lanes = n,
            Bo(e, n)
        }
    }
    function ac(e, t) {
        var n = e.updateQueue
          , l = e.alternate;
        if (l !== null && (l = l.updateQueue,
        n === l)) {
            var a = null
              , u = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var f = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    u === null ? a = u = f : u = u.next = f,
                    n = n.next
                } while (n !== null);
                u === null ? a = u = t : u = u.next = t
            } else
                a = u = t;
            n = {
                baseState: l.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: u,
                shared: l.shared,
                effects: l.effects
            },
            e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    function Ui(e, t, n, l) {
        var a = e.updateQueue;
        Vn = !1;
        var u = a.firstBaseUpdate
          , f = a.lastBaseUpdate
          , g = a.shared.pending;
        if (g !== null) {
            a.shared.pending = null;
            var k = g
              , O = k.next;
            k.next = null,
            f === null ? u = O : f.next = O,
            f = k;
            var B = e.alternate;
            B !== null && (B = B.updateQueue,
            g = B.lastBaseUpdate,
            g !== f && (g === null ? B.firstBaseUpdate = O : g.next = O,
            B.lastBaseUpdate = k))
        }
        if (u !== null) {
            var H = a.baseState;
            f = 0,
            B = O = k = null,
            g = u;
            do {
                var A = g.lane
                  , Z = g.eventTime;
                if ((l & A) === A) {
                    B !== null && (B = B.next = {
                        eventTime: Z,
                        lane: 0,
                        tag: g.tag,
                        payload: g.payload,
                        callback: g.callback,
                        next: null
                    });
                    e: {
                        var re = e
                          , ie = g;
                        switch (A = t,
                        Z = n,
                        ie.tag) {
                        case 1:
                            if (re = ie.payload,
                            typeof re == "function") {
                                H = re.call(Z, H, A);
                                break e
                            }
                            H = re;
                            break e;
                        case 3:
                            re.flags = re.flags & -65537 | 128;
                        case 0:
                            if (re = ie.payload,
                            A = typeof re == "function" ? re.call(Z, H, A) : re,
                            A == null)
                                break e;
                            H = G({}, H, A);
                            break e;
                        case 2:
                            Vn = !0
                        }
                    }
                    g.callback !== null && g.lane !== 0 && (e.flags |= 64,
                    A = a.effects,
                    A === null ? a.effects = [g] : A.push(g))
                } else
                    Z = {
                        eventTime: Z,
                        lane: A,
                        tag: g.tag,
                        payload: g.payload,
                        callback: g.callback,
                        next: null
                    },
                    B === null ? (O = B = Z,
                    k = H) : B = B.next = Z,
                    f |= A;
                if (g = g.next,
                g === null) {
                    if (g = a.shared.pending,
                    g === null)
                        break;
                    A = g,
                    g = A.next,
                    A.next = null,
                    a.lastBaseUpdate = A,
                    a.shared.pending = null
                }
            } while (!0);
            if (B === null && (k = H),
            a.baseState = k,
            a.firstBaseUpdate = O,
            a.lastBaseUpdate = B,
            t = a.shared.interleaved,
            t !== null) {
                a = t;
                do
                    f |= a.lane,
                    a = a.next;
                while (a !== t)
            } else
                u === null && (a.shared.lanes = 0);
            pr |= f,
            e.lanes = f,
            e.memoizedState = H
        }
    }
    function uc(e, t, n) {
        if (e = t.effects,
        t.effects = null,
        e !== null)
            for (t = 0; t < e.length; t++) {
                var l = e[t]
                  , a = l.callback;
                if (a !== null) {
                    if (l.callback = null,
                    l = n,
                    typeof a != "function")
                        throw Error(o(191, a));
                    a.call(l)
                }
            }
    }
    var Nl = {}
      , on = $n(Nl)
      , Ol = $n(Nl)
      , Ml = $n(Nl);
    function dr(e) {
        if (e === Nl)
            throw Error(o(174));
        return e
    }
    function La(e, t) {
        switch (He(Ml, t),
        He(Ol, e),
        He(on, Nl),
        e = t.nodeType,
        e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : nr(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
            t = e.namespaceURI || null,
            e = e.tagName,
            t = nr(t, e)
        }
        Ke(on),
        He(on, t)
    }
    function Qr() {
        Ke(on),
        Ke(Ol),
        Ke(Ml)
    }
    function sc(e) {
        dr(Ml.current);
        var t = dr(on.current)
          , n = nr(t, e.type);
        t !== n && (He(Ol, e),
        He(on, n))
    }
    function Ta(e) {
        Ol.current === e && (Ke(on),
        Ke(Ol))
    }
    var Xe = $n(0);
    function Ai(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var Da = [];
    function Na() {
        for (var e = 0; e < Da.length; e++)
            Da[e]._workInProgressVersionPrimary = null;
        Da.length = 0
    }
    var $i = $.ReactCurrentDispatcher
      , Oa = $.ReactCurrentBatchConfig
      , hr = 0
      , Ge = null
      , nt = null
      , ot = null
      , Bi = !1
      , Fl = !1
      , zl = 0
      , lp = 0;
    function ht() {
        throw Error(o(321))
    }
    function Ma(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!Wt(e[n], t[n]))
                return !1;
        return !0
    }
    function Fa(e, t, n, l, a, u) {
        if (hr = u,
        Ge = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        $i.current = e === null || e.memoizedState === null ? up : sp,
        e = n(l, a),
        Fl) {
            u = 0;
            do {
                if (Fl = !1,
                zl = 0,
                25 <= u)
                    throw Error(o(301));
                u += 1,
                ot = nt = null,
                t.updateQueue = null,
                $i.current = cp,
                e = n(l, a)
            } while (Fl)
        }
        if ($i.current = Wi,
        t = nt !== null && nt.next !== null,
        hr = 0,
        ot = nt = Ge = null,
        Bi = !1,
        t)
            throw Error(o(300));
        return e
    }
    function za() {
        var e = zl !== 0;
        return zl = 0,
        e
    }
    function an() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ot === null ? Ge.memoizedState = ot = e : ot = ot.next = e,
        ot
    }
    function jt() {
        if (nt === null) {
            var e = Ge.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = nt.next;
        var t = ot === null ? Ge.memoizedState : ot.next;
        if (t !== null)
            ot = t,
            nt = e;
        else {
            if (e === null)
                throw Error(o(310));
            nt = e,
            e = {
                memoizedState: nt.memoizedState,
                baseState: nt.baseState,
                baseQueue: nt.baseQueue,
                queue: nt.queue,
                next: null
            },
            ot === null ? Ge.memoizedState = ot = e : ot = ot.next = e
        }
        return ot
    }
    function jl(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function ja(e) {
        var t = jt()
          , n = t.queue;
        if (n === null)
            throw Error(o(311));
        n.lastRenderedReducer = e;
        var l = nt
          , a = l.baseQueue
          , u = n.pending;
        if (u !== null) {
            if (a !== null) {
                var f = a.next;
                a.next = u.next,
                u.next = f
            }
            l.baseQueue = a = u,
            n.pending = null
        }
        if (a !== null) {
            u = a.next,
            l = l.baseState;
            var g = f = null
              , k = null
              , O = u;
            do {
                var B = O.lane;
                if ((hr & B) === B)
                    k !== null && (k = k.next = {
                        lane: 0,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null
                    }),
                    l = O.hasEagerState ? O.eagerState : e(l, O.action);
                else {
                    var H = {
                        lane: B,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null
                    };
                    k === null ? (g = k = H,
                    f = l) : k = k.next = H,
                    Ge.lanes |= B,
                    pr |= B
                }
                O = O.next
            } while (O !== null && O !== u);
            k === null ? f = l : k.next = g,
            Wt(l, t.memoizedState) || (Et = !0),
            t.memoizedState = l,
            t.baseState = f,
            t.baseQueue = k,
            n.lastRenderedState = l
        }
        if (e = n.interleaved,
        e !== null) {
            a = e;
            do
                u = a.lane,
                Ge.lanes |= u,
                pr |= u,
                a = a.next;
            while (a !== e)
        } else
            a === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }
    function Ia(e) {
        var t = jt()
          , n = t.queue;
        if (n === null)
            throw Error(o(311));
        n.lastRenderedReducer = e;
        var l = n.dispatch
          , a = n.pending
          , u = t.memoizedState;
        if (a !== null) {
            n.pending = null;
            var f = a = a.next;
            do
                u = e(u, f.action),
                f = f.next;
            while (f !== a);
            Wt(u, t.memoizedState) || (Et = !0),
            t.memoizedState = u,
            t.baseQueue === null && (t.baseState = u),
            n.lastRenderedState = u
        }
        return [u, l]
    }
    function cc() {}
    function fc(e, t) {
        var n = Ge
          , l = jt()
          , a = t()
          , u = !Wt(l.memoizedState, a);
        if (u && (l.memoizedState = a,
        Et = !0),
        l = l.queue,
        Ua(pc.bind(null, n, l, e), [e]),
        l.getSnapshot !== t || u || ot !== null && ot.memoizedState.tag & 1) {
            if (n.flags |= 2048,
            Il(9, hc.bind(null, n, l, a, t), void 0, null),
            at === null)
                throw Error(o(349));
            (hr & 30) !== 0 || dc(n, t, a)
        }
        return a
    }
    function dc(e, t, n) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = Ge.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        Ge.updateQueue = t,
        t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
    }
    function hc(e, t, n, l) {
        t.value = n,
        t.getSnapshot = l,
        mc(t) && vc(e)
    }
    function pc(e, t, n) {
        return n(function() {
            mc(t) && vc(e)
        })
    }
    function mc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !Wt(e, n)
        } catch {
            return !0
        }
    }
    function vc(e) {
        var t = wn(e, 1);
        t !== null && Xt(t, e, 1, -1)
    }
    function yc(e) {
        var t = an();
        return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: jl,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = ap.bind(null, Ge, e),
        [t.memoizedState, e]
    }
    function Il(e, t, n, l) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: l,
            next: null
        },
        t = Ge.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        Ge.updateQueue = t,
        t.lastEffect = e.next = e) : (n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (l = n.next,
        n.next = e,
        e.next = l,
        t.lastEffect = e)),
        e
    }
    function gc() {
        return jt().memoizedState
    }
    function Hi(e, t, n, l) {
        var a = an();
        Ge.flags |= e,
        a.memoizedState = Il(1 | t, n, void 0, l === void 0 ? null : l)
    }
    function Vi(e, t, n, l) {
        var a = jt();
        l = l === void 0 ? null : l;
        var u = void 0;
        if (nt !== null) {
            var f = nt.memoizedState;
            if (u = f.destroy,
            l !== null && Ma(l, f.deps)) {
                a.memoizedState = Il(t, n, u, l);
                return
            }
        }
        Ge.flags |= e,
        a.memoizedState = Il(1 | t, n, u, l)
    }
    function wc(e, t) {
        return Hi(8390656, 8, e, t)
    }
    function Ua(e, t) {
        return Vi(2048, 8, e, t)
    }
    function Sc(e, t) {
        return Vi(4, 2, e, t)
    }
    function Ec(e, t) {
        return Vi(4, 4, e, t)
    }
    function xc(e, t) {
        if (typeof t == "function")
            return e = e(),
            t(e),
            function() {
                t(null)
            }
            ;
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function kc(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Vi(4, 4, xc.bind(null, t, e), n)
    }
    function Aa() {}
    function Rc(e, t) {
        var n = jt();
        t = t === void 0 ? null : t;
        var l = n.memoizedState;
        return l !== null && t !== null && Ma(t, l[1]) ? l[0] : (n.memoizedState = [e, t],
        e)
    }
    function _c(e, t) {
        var n = jt();
        t = t === void 0 ? null : t;
        var l = n.memoizedState;
        return l !== null && t !== null && Ma(t, l[1]) ? l[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
    }
    function Cc(e, t, n) {
        return (hr & 21) === 0 ? (e.baseState && (e.baseState = !1,
        Et = !0),
        e.memoizedState = n) : (Wt(n, t) || (n = ns(),
        Ge.lanes |= n,
        pr |= n,
        e.baseState = !0),
        t)
    }
    function ip(e, t) {
        var n = je;
        je = n !== 0 && 4 > n ? n : 4,
        e(!0);
        var l = Oa.transition;
        Oa.transition = {};
        try {
            e(!1),
            t()
        } finally {
            je = n,
            Oa.transition = l
        }
    }
    function Pc() {
        return jt().memoizedState
    }
    function op(e, t, n) {
        var l = Jn(e);
        if (n = {
            lane: l,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Lc(e))
            Tc(t, n);
        else if (n = ic(e, t, n, l),
        n !== null) {
            var a = gt();
            Xt(n, e, l, a),
            Dc(n, t, l)
        }
    }
    function ap(e, t, n) {
        var l = Jn(e)
          , a = {
            lane: l,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Lc(e))
            Tc(t, a);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer,
            u !== null))
                try {
                    var f = t.lastRenderedState
                      , g = u(f, n);
                    if (a.hasEagerState = !0,
                    a.eagerState = g,
                    Wt(g, f)) {
                        var k = t.interleaved;
                        k === null ? (a.next = a,
                        Ca(t)) : (a.next = k.next,
                        k.next = a),
                        t.interleaved = a;
                        return
                    }
                } catch {} finally {}
            n = ic(e, t, a, l),
            n !== null && (a = gt(),
            Xt(n, e, l, a),
            Dc(n, t, l))
        }
    }
    function Lc(e) {
        var t = e.alternate;
        return e === Ge || t !== null && t === Ge
    }
    function Tc(e, t) {
        Fl = Bi = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function Dc(e, t, n) {
        if ((n & 4194240) !== 0) {
            var l = t.lanes;
            l &= e.pendingLanes,
            n |= l,
            t.lanes = n,
            Bo(e, n)
        }
    }
    var Wi = {
        readContext: zt,
        useCallback: ht,
        useContext: ht,
        useEffect: ht,
        useImperativeHandle: ht,
        useInsertionEffect: ht,
        useLayoutEffect: ht,
        useMemo: ht,
        useReducer: ht,
        useRef: ht,
        useState: ht,
        useDebugValue: ht,
        useDeferredValue: ht,
        useTransition: ht,
        useMutableSource: ht,
        useSyncExternalStore: ht,
        useId: ht,
        unstable_isNewReconciler: !1
    }
      , up = {
        readContext: zt,
        useCallback: function(e, t) {
            return an().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: zt,
        useEffect: wc,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null,
            Hi(4194308, 4, xc.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Hi(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Hi(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = an();
            return t = t === void 0 ? null : t,
            e = e(),
            n.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, n) {
            var l = an();
            return t = n !== void 0 ? n(t) : t,
            l.memoizedState = l.baseState = t,
            e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            },
            l.queue = e,
            e = e.dispatch = op.bind(null, Ge, e),
            [l.memoizedState, e]
        },
        useRef: function(e) {
            var t = an();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: yc,
        useDebugValue: Aa,
        useDeferredValue: function(e) {
            return an().memoizedState = e
        },
        useTransition: function() {
            var e = yc(!1)
              , t = e[0];
            return e = ip.bind(null, e[1]),
            an().memoizedState = e,
            [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var l = Ge
              , a = an();
            if (Ye) {
                if (n === void 0)
                    throw Error(o(407));
                n = n()
            } else {
                if (n = t(),
                at === null)
                    throw Error(o(349));
                (hr & 30) !== 0 || dc(l, t, n)
            }
            a.memoizedState = n;
            var u = {
                value: n,
                getSnapshot: t
            };
            return a.queue = u,
            wc(pc.bind(null, l, u, e), [e]),
            l.flags |= 2048,
            Il(9, hc.bind(null, l, u, n, t), void 0, null),
            n
        },
        useId: function() {
            var e = an()
              , t = at.identifierPrefix;
            if (Ye) {
                var n = gn
                  , l = yn;
                n = (l & ~(1 << 32 - Ne(l) - 1)).toString(32) + n,
                t = ":" + t + "R" + n,
                n = zl++,
                0 < n && (t += "H" + n.toString(32)),
                t += ":"
            } else
                n = lp++,
                t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
      , sp = {
        readContext: zt,
        useCallback: Rc,
        useContext: zt,
        useEffect: Ua,
        useImperativeHandle: kc,
        useInsertionEffect: Sc,
        useLayoutEffect: Ec,
        useMemo: _c,
        useReducer: ja,
        useRef: gc,
        useState: function() {
            return ja(jl)
        },
        useDebugValue: Aa,
        useDeferredValue: function(e) {
            var t = jt();
            return Cc(t, nt.memoizedState, e)
        },
        useTransition: function() {
            var e = ja(jl)[0]
              , t = jt().memoizedState;
            return [e, t]
        },
        useMutableSource: cc,
        useSyncExternalStore: fc,
        useId: Pc,
        unstable_isNewReconciler: !1
    }
      , cp = {
        readContext: zt,
        useCallback: Rc,
        useContext: zt,
        useEffect: Ua,
        useImperativeHandle: kc,
        useInsertionEffect: Sc,
        useLayoutEffect: Ec,
        useMemo: _c,
        useReducer: Ia,
        useRef: gc,
        useState: function() {
            return Ia(jl)
        },
        useDebugValue: Aa,
        useDeferredValue: function(e) {
            var t = jt();
            return nt === null ? t.memoizedState = e : Cc(t, nt.memoizedState, e)
        },
        useTransition: function() {
            var e = Ia(jl)[0]
              , t = jt().memoizedState;
            return [e, t]
        },
        useMutableSource: cc,
        useSyncExternalStore: fc,
        useId: Pc,
        unstable_isNewReconciler: !1
    };
    function Qt(e, t) {
        if (e && e.defaultProps) {
            t = G({}, t),
            e = e.defaultProps;
            for (var n in e)
                t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }
    function $a(e, t, n, l) {
        t = e.memoizedState,
        n = n(l, t),
        n = n == null ? t : G({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Ki = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? te(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var l = gt()
              , a = Jn(e)
              , u = Sn(l, a);
            u.payload = t,
            n != null && (u.callback = n),
            t = Wn(e, u, a),
            t !== null && (Xt(t, e, a, l),
            Ii(t, e, a))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var l = gt()
              , a = Jn(e)
              , u = Sn(l, a);
            u.tag = 1,
            u.payload = t,
            n != null && (u.callback = n),
            t = Wn(e, u, a),
            t !== null && (Xt(t, e, a, l),
            Ii(t, e, a))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = gt()
              , l = Jn(e)
              , a = Sn(n, l);
            a.tag = 2,
            t != null && (a.callback = t),
            t = Wn(e, a, l),
            t !== null && (Xt(t, e, l, n),
            Ii(t, e, l))
        }
    };
    function Nc(e, t, n, l, a, u, f) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, f) : t.prototype && t.prototype.isPureReactComponent ? !kl(n, l) || !kl(a, u) : !0
    }
    function Oc(e, t, n) {
        var l = !1
          , a = Bn
          , u = t.contextType;
        return typeof u == "object" && u !== null ? u = zt(u) : (a = St(t) ? ur : dt.current,
        l = t.contextTypes,
        u = (l = l != null) ? Ar(e, a) : Bn),
        t = new t(n,u),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = Ki,
        e.stateNode = t,
        t._reactInternals = e,
        l && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = a,
        e.__reactInternalMemoizedMaskedChildContext = u),
        t
    }
    function Mc(e, t, n, l) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l),
        t.state !== e && Ki.enqueueReplaceState(t, t.state, null)
    }
    function Ba(e, t, n, l) {
        var a = e.stateNode;
        a.props = n,
        a.state = e.memoizedState,
        a.refs = {},
        Pa(e);
        var u = t.contextType;
        typeof u == "object" && u !== null ? a.context = zt(u) : (u = St(t) ? ur : dt.current,
        a.context = Ar(e, u)),
        a.state = e.memoizedState,
        u = t.getDerivedStateFromProps,
        typeof u == "function" && ($a(e, t, u, n),
        a.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state,
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(),
        t !== a.state && Ki.enqueueReplaceState(a, a.state, null),
        Ui(e, n, a, l),
        a.state = e.memoizedState),
        typeof a.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function Yr(e, t) {
        try {
            var n = ""
              , l = t;
            do
                n += ye(l),
                l = l.return;
            while (l);
            var a = n
        } catch (u) {
            a = `
Error generating stack: ` + u.message + `
` + u.stack
        }
        return {
            value: e,
            source: t,
            stack: a,
            digest: null
        }
    }
    function Ha(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        }
    }
    function Va(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var fp = typeof WeakMap == "function" ? WeakMap : Map;
    function Fc(e, t, n) {
        n = Sn(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
        var l = t.value;
        return n.callback = function() {
            qi || (qi = !0,
            lu = l),
            Va(e, t)
        }
        ,
        n
    }
    function zc(e, t, n) {
        n = Sn(-1, n),
        n.tag = 3;
        var l = e.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var a = t.value;
            n.payload = function() {
                return l(a)
            }
            ,
            n.callback = function() {
                Va(e, t)
            }
        }
        var u = e.stateNode;
        return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
            Va(e, t),
            typeof l != "function" && (Qn === null ? Qn = new Set([this]) : Qn.add(this));
            var f = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: f !== null ? f : ""
            })
        }
        ),
        n
    }
    function jc(e, t, n) {
        var l = e.pingCache;
        if (l === null) {
            l = e.pingCache = new fp;
            var a = new Set;
            l.set(t, a)
        } else
            a = l.get(t),
            a === void 0 && (a = new Set,
            l.set(t, a));
        a.has(n) || (a.add(n),
        e = _p.bind(null, e, t, n),
        t.then(e, e))
    }
    function Ic(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
                return e;
            e = e.return
        } while (e !== null);
        return null
    }
    function Uc(e, t, n, l, a) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
        n.flags |= 131072,
        n.flags &= -52805,
        n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Sn(-1, 1),
        t.tag = 2,
        Wn(n, t, 1))),
        n.lanes |= 1),
        e) : (e.flags |= 65536,
        e.lanes = a,
        e)
    }
    var dp = $.ReactCurrentOwner
      , Et = !1;
    function yt(e, t, n, l) {
        t.child = e === null ? lc(t, null, n, l) : Vr(t, e.child, n, l)
    }
    function Ac(e, t, n, l, a) {
        n = n.render;
        var u = t.ref;
        return Kr(t, a),
        l = Fa(e, t, n, l, u, a),
        n = za(),
        e !== null && !Et ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a,
        En(e, t, a)) : (Ye && n && ya(t),
        t.flags |= 1,
        yt(e, t, l, a),
        t.child)
    }
    function $c(e, t, n, l, a) {
        if (e === null) {
            var u = n.type;
            return typeof u == "function" && !fu(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = u,
            Bc(e, t, u, l, a)) : (e = lo(n.type, null, l, t, t.mode, a),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (u = e.child,
        (e.lanes & a) === 0) {
            var f = u.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : kl,
            n(f, l) && e.ref === t.ref)
                return En(e, t, a)
        }
        return t.flags |= 1,
        e = Gn(u, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Bc(e, t, n, l, a) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (kl(u, l) && e.ref === t.ref)
                if (Et = !1,
                t.pendingProps = l = u,
                (e.lanes & a) !== 0)
                    (e.flags & 131072) !== 0 && (Et = !0);
                else
                    return t.lanes = e.lanes,
                    En(e, t, a)
        }
        return Wa(e, t, n, l, a)
    }
    function Hc(e, t, n) {
        var l = t.pendingProps
          , a = l.children
          , u = e !== null ? e.memoizedState : null;
        if (l.mode === "hidden")
            if ((t.mode & 1) === 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                He(Xr, Dt),
                Dt |= n;
            else {
                if ((n & 1073741824) === 0)
                    return e = u !== null ? u.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    He(Xr, Dt),
                    Dt |= e,
                    null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                l = u !== null ? u.baseLanes : n,
                He(Xr, Dt),
                Dt |= l
            }
        else
            u !== null ? (l = u.baseLanes | n,
            t.memoizedState = null) : l = n,
            He(Xr, Dt),
            Dt |= l;
        return yt(e, t, a, n),
        t.child
    }
    function Vc(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
    }
    function Wa(e, t, n, l, a) {
        var u = St(n) ? ur : dt.current;
        return u = Ar(t, u),
        Kr(t, a),
        n = Fa(e, t, n, l, u, a),
        l = za(),
        e !== null && !Et ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a,
        En(e, t, a)) : (Ye && l && ya(t),
        t.flags |= 1,
        yt(e, t, n, a),
        t.child)
    }
    function Wc(e, t, n, l, a) {
        if (St(n)) {
            var u = !0;
            Ti(t)
        } else
            u = !1;
        if (Kr(t, a),
        t.stateNode === null)
            Yi(e, t),
            Oc(t, n, l),
            Ba(t, n, l, a),
            l = !0;
        else if (e === null) {
            var f = t.stateNode
              , g = t.memoizedProps;
            f.props = g;
            var k = f.context
              , O = n.contextType;
            typeof O == "object" && O !== null ? O = zt(O) : (O = St(n) ? ur : dt.current,
            O = Ar(t, O));
            var B = n.getDerivedStateFromProps
              , H = typeof B == "function" || typeof f.getSnapshotBeforeUpdate == "function";
            H || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (g !== l || k !== O) && Mc(t, f, l, O),
            Vn = !1;
            var A = t.memoizedState;
            f.state = A,
            Ui(t, l, f, a),
            k = t.memoizedState,
            g !== l || A !== k || wt.current || Vn ? (typeof B == "function" && ($a(t, n, B, l),
            k = t.memoizedState),
            (g = Vn || Nc(t, n, g, l, A, k, O)) ? (H || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(),
            typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()),
            typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = l,
            t.memoizedState = k),
            f.props = l,
            f.state = k,
            f.context = O,
            l = g) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            l = !1)
        } else {
            f = t.stateNode,
            oc(e, t),
            g = t.memoizedProps,
            O = t.type === t.elementType ? g : Qt(t.type, g),
            f.props = O,
            H = t.pendingProps,
            A = f.context,
            k = n.contextType,
            typeof k == "object" && k !== null ? k = zt(k) : (k = St(n) ? ur : dt.current,
            k = Ar(t, k));
            var Z = n.getDerivedStateFromProps;
            (B = typeof Z == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (g !== H || A !== k) && Mc(t, f, l, k),
            Vn = !1,
            A = t.memoizedState,
            f.state = A,
            Ui(t, l, f, a);
            var re = t.memoizedState;
            g !== H || A !== re || wt.current || Vn ? (typeof Z == "function" && ($a(t, n, Z, l),
            re = t.memoizedState),
            (O = Vn || Nc(t, n, O, l, A, re, k) || !1) ? (B || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, re, k),
            typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(l, re, k)),
            typeof f.componentDidUpdate == "function" && (t.flags |= 4),
            typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || g === e.memoizedProps && A === e.memoizedState || (t.flags |= 4),
            typeof f.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = l,
            t.memoizedState = re),
            f.props = l,
            f.state = re,
            f.context = k,
            l = O) : (typeof f.componentDidUpdate != "function" || g === e.memoizedProps && A === e.memoizedState || (t.flags |= 4),
            typeof f.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024),
            l = !1)
        }
        return Ka(e, t, n, l, u, a)
    }
    function Ka(e, t, n, l, a, u) {
        Vc(e, t);
        var f = (t.flags & 128) !== 0;
        if (!l && !f)
            return a && Xs(t, n, !1),
            En(e, t, u);
        l = t.stateNode,
        dp.current = t;
        var g = f && typeof n.getDerivedStateFromError != "function" ? null : l.render();
        return t.flags |= 1,
        e !== null && f ? (t.child = Vr(t, e.child, null, u),
        t.child = Vr(t, null, g, u)) : yt(e, t, g, u),
        t.memoizedState = l.state,
        a && Xs(t, n, !0),
        t.child
    }
    function Kc(e) {
        var t = e.stateNode;
        t.pendingContext ? Ys(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ys(e, t.context, !1),
        La(e, t.containerInfo)
    }
    function Qc(e, t, n, l, a) {
        return Hr(),
        Ea(a),
        t.flags |= 256,
        yt(e, t, n, l),
        t.child
    }
    var Qa = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Ya(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function Yc(e, t, n) {
        var l = t.pendingProps, a = Xe.current, u = !1, f = (t.flags & 128) !== 0, g;
        if ((g = f) || (g = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
        g ? (u = !0,
        t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1),
        He(Xe, a & 1),
        e === null)
            return Sa(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824,
            null) : (f = l.children,
            e = l.fallback,
            u ? (l = t.mode,
            u = t.child,
            f = {
                mode: "hidden",
                children: f
            },
            (l & 1) === 0 && u !== null ? (u.childLanes = 0,
            u.pendingProps = f) : u = io(f, l, 0, null),
            e = gr(e, l, n, null),
            u.return = t,
            e.return = t,
            u.sibling = e,
            t.child = u,
            t.child.memoizedState = Ya(n),
            t.memoizedState = Qa,
            e) : Ja(t, f));
        if (a = e.memoizedState,
        a !== null && (g = a.dehydrated,
        g !== null))
            return hp(e, t, f, l, g, a, n);
        if (u) {
            u = l.fallback,
            f = t.mode,
            a = e.child,
            g = a.sibling;
            var k = {
                mode: "hidden",
                children: l.children
            };
            return (f & 1) === 0 && t.child !== a ? (l = t.child,
            l.childLanes = 0,
            l.pendingProps = k,
            t.deletions = null) : (l = Gn(a, k),
            l.subtreeFlags = a.subtreeFlags & 14680064),
            g !== null ? u = Gn(g, u) : (u = gr(u, f, n, null),
            u.flags |= 2),
            u.return = t,
            l.return = t,
            l.sibling = u,
            t.child = l,
            l = u,
            u = t.child,
            f = e.child.memoizedState,
            f = f === null ? Ya(n) : {
                baseLanes: f.baseLanes | n,
                cachePool: null,
                transitions: f.transitions
            },
            u.memoizedState = f,
            u.childLanes = e.childLanes & ~n,
            t.memoizedState = Qa,
            l
        }
        return u = e.child,
        e = u.sibling,
        l = Gn(u, {
            mode: "visible",
            children: l.children
        }),
        (t.mode & 1) === 0 && (l.lanes = n),
        l.return = t,
        l.sibling = null,
        e !== null && (n = t.deletions,
        n === null ? (t.deletions = [e],
        t.flags |= 16) : n.push(e)),
        t.child = l,
        t.memoizedState = null,
        l
    }
    function Ja(e, t) {
        return t = io({
            mode: "visible",
            children: t
        }, e.mode, 0, null),
        t.return = e,
        e.child = t
    }
    function Qi(e, t, n, l) {
        return l !== null && Ea(l),
        Vr(t, e.child, null, n),
        e = Ja(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function hp(e, t, n, l, a, u, f) {
        if (n)
            return t.flags & 256 ? (t.flags &= -257,
            l = Ha(Error(o(422))),
            Qi(e, t, f, l)) : t.memoizedState !== null ? (t.child = e.child,
            t.flags |= 128,
            null) : (u = l.fallback,
            a = t.mode,
            l = io({
                mode: "visible",
                children: l.children
            }, a, 0, null),
            u = gr(u, a, f, null),
            u.flags |= 2,
            l.return = t,
            u.return = t,
            l.sibling = u,
            t.child = l,
            (t.mode & 1) !== 0 && Vr(t, e.child, null, f),
            t.child.memoizedState = Ya(f),
            t.memoizedState = Qa,
            u);
        if ((t.mode & 1) === 0)
            return Qi(e, t, f, null);
        if (a.data === "$!") {
            if (l = a.nextSibling && a.nextSibling.dataset,
            l)
                var g = l.dgst;
            return l = g,
            u = Error(o(419)),
            l = Ha(u, l, void 0),
            Qi(e, t, f, l)
        }
        if (g = (f & e.childLanes) !== 0,
        Et || g) {
            if (l = at,
            l !== null) {
                switch (f & -f) {
                case 4:
                    a = 2;
                    break;
                case 16:
                    a = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    a = 32;
                    break;
                case 536870912:
                    a = 268435456;
                    break;
                default:
                    a = 0
                }
                a = (a & (l.suspendedLanes | f)) !== 0 ? 0 : a,
                a !== 0 && a !== u.retryLane && (u.retryLane = a,
                wn(e, a),
                Xt(l, e, a, -1))
            }
            return cu(),
            l = Ha(Error(o(421))),
            Qi(e, t, f, l)
        }
        return a.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = Cp.bind(null, e),
        a._reactRetry = t,
        null) : (e = u.treeContext,
        Tt = An(a.nextSibling),
        Lt = t,
        Ye = !0,
        Kt = null,
        e !== null && (Mt[Ft++] = yn,
        Mt[Ft++] = gn,
        Mt[Ft++] = sr,
        yn = e.id,
        gn = e.overflow,
        sr = t),
        t = Ja(t, l.children),
        t.flags |= 4096,
        t)
    }
    function Jc(e, t, n) {
        e.lanes |= t;
        var l = e.alternate;
        l !== null && (l.lanes |= t),
        _a(e.return, t, n)
    }
    function Xa(e, t, n, l, a) {
        var u = e.memoizedState;
        u === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: n,
            tailMode: a
        } : (u.isBackwards = t,
        u.rendering = null,
        u.renderingStartTime = 0,
        u.last = l,
        u.tail = n,
        u.tailMode = a)
    }
    function Xc(e, t, n) {
        var l = t.pendingProps
          , a = l.revealOrder
          , u = l.tail;
        if (yt(e, t, l.children, n),
        l = Xe.current,
        (l & 2) !== 0)
            l = l & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Jc(e, n, t);
                    else if (e.tag === 19)
                        Jc(e, n, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            l &= 1
        }
        if (He(Xe, l),
        (t.mode & 1) === 0)
            t.memoizedState = null;
        else
            switch (a) {
            case "forwards":
                for (n = t.child,
                a = null; n !== null; )
                    e = n.alternate,
                    e !== null && Ai(e) === null && (a = n),
                    n = n.sibling;
                n = a,
                n === null ? (a = t.child,
                t.child = null) : (a = n.sibling,
                n.sibling = null),
                Xa(t, !1, a, n, u);
                break;
            case "backwards":
                for (n = null,
                a = t.child,
                t.child = null; a !== null; ) {
                    if (e = a.alternate,
                    e !== null && Ai(e) === null) {
                        t.child = a;
                        break
                    }
                    e = a.sibling,
                    a.sibling = n,
                    n = a,
                    a = e
                }
                Xa(t, !0, n, null, u);
                break;
            case "together":
                Xa(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    function Yi(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
    }
    function En(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
        pr |= t.lanes,
        (n & t.childLanes) === 0)
            return null;
        if (e !== null && t.child !== e.child)
            throw Error(o(153));
        if (t.child !== null) {
            for (e = t.child,
            n = Gn(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null; )
                e = e.sibling,
                n = n.sibling = Gn(e, e.pendingProps),
                n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function pp(e, t, n) {
        switch (t.tag) {
        case 3:
            Kc(t),
            Hr();
            break;
        case 5:
            sc(t);
            break;
        case 1:
            St(t.type) && Ti(t);
            break;
        case 4:
            La(t, t.stateNode.containerInfo);
            break;
        case 10:
            var l = t.type._context
              , a = t.memoizedProps.value;
            He(zi, l._currentValue),
            l._currentValue = a;
            break;
        case 13:
            if (l = t.memoizedState,
            l !== null)
                return l.dehydrated !== null ? (He(Xe, Xe.current & 1),
                t.flags |= 128,
                null) : (n & t.child.childLanes) !== 0 ? Yc(e, t, n) : (He(Xe, Xe.current & 1),
                e = En(e, t, n),
                e !== null ? e.sibling : null);
            He(Xe, Xe.current & 1);
            break;
        case 19:
            if (l = (n & t.childLanes) !== 0,
            (e.flags & 128) !== 0) {
                if (l)
                    return Xc(e, t, n);
                t.flags |= 128
            }
            if (a = t.memoizedState,
            a !== null && (a.rendering = null,
            a.tail = null,
            a.lastEffect = null),
            He(Xe, Xe.current),
            l)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            Hc(e, t, n)
        }
        return En(e, t, n)
    }
    var Gc, Ga, Zc, qc;
    Gc = function(e, t) {
        for (var n = t.child; n !== null; ) {
            if (n.tag === 5 || n.tag === 6)
                e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === t)
                break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === t)
                    return;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
    }
    ,
    Ga = function() {}
    ,
    Zc = function(e, t, n, l) {
        var a = e.memoizedProps;
        if (a !== l) {
            e = t.stateNode,
            dr(on.current);
            var u = null;
            switch (n) {
            case "input":
                a = Rr(e, a),
                l = Rr(e, l),
                u = [];
                break;
            case "select":
                a = G({}, a, {
                    value: void 0
                }),
                l = G({}, l, {
                    value: void 0
                }),
                u = [];
                break;
            case "textarea":
                a = ll(e, a),
                l = ll(e, l),
                u = [];
                break;
            default:
                typeof a.onClick != "function" && typeof l.onClick == "function" && (e.onclick = Ci)
            }
            Cr(n, l);
            var f;
            n = null;
            for (O in a)
                if (!l.hasOwnProperty(O) && a.hasOwnProperty(O) && a[O] != null)
                    if (O === "style") {
                        var g = a[O];
                        for (f in g)
                            g.hasOwnProperty(f) && (n || (n = {}),
                            n[f] = "")
                    } else
                        O !== "dangerouslySetInnerHTML" && O !== "children" && O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && O !== "autoFocus" && (c.hasOwnProperty(O) ? u || (u = []) : (u = u || []).push(O, null));
            for (O in l) {
                var k = l[O];
                if (g = a != null ? a[O] : void 0,
                l.hasOwnProperty(O) && k !== g && (k != null || g != null))
                    if (O === "style")
                        if (g) {
                            for (f in g)
                                !g.hasOwnProperty(f) || k && k.hasOwnProperty(f) || (n || (n = {}),
                                n[f] = "");
                            for (f in k)
                                k.hasOwnProperty(f) && g[f] !== k[f] && (n || (n = {}),
                                n[f] = k[f])
                        } else
                            n || (u || (u = []),
                            u.push(O, n)),
                            n = k;
                    else
                        O === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0,
                        g = g ? g.__html : void 0,
                        k != null && g !== k && (u = u || []).push(O, k)) : O === "children" ? typeof k != "string" && typeof k != "number" || (u = u || []).push(O, "" + k) : O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && (c.hasOwnProperty(O) ? (k != null && O === "onScroll" && We("scroll", e),
                        u || g === k || (u = [])) : (u = u || []).push(O, k))
            }
            n && (u = u || []).push("style", n);
            var O = u;
            (t.updateQueue = O) && (t.flags |= 4)
        }
    }
    ,
    qc = function(e, t, n, l) {
        n !== l && (t.flags |= 4)
    }
    ;
    function Ul(e, t) {
        if (!Ye)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t),
                    t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var l = null; n !== null; )
                    n.alternate !== null && (l = n),
                    n = n.sibling;
                l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
            }
    }
    function pt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , n = 0
          , l = 0;
        if (t)
            for (var a = e.child; a !== null; )
                n |= a.lanes | a.childLanes,
                l |= a.subtreeFlags & 14680064,
                l |= a.flags & 14680064,
                a.return = e,
                a = a.sibling;
        else
            for (a = e.child; a !== null; )
                n |= a.lanes | a.childLanes,
                l |= a.subtreeFlags,
                l |= a.flags,
                a.return = e,
                a = a.sibling;
        return e.subtreeFlags |= l,
        e.childLanes = n,
        t
    }
    function mp(e, t, n) {
        var l = t.pendingProps;
        switch (ga(t),
        t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return pt(t),
            null;
        case 1:
            return St(t.type) && Li(),
            pt(t),
            null;
        case 3:
            return l = t.stateNode,
            Qr(),
            Ke(wt),
            Ke(dt),
            Na(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (e === null || e.child === null) && (Mi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Kt !== null && (au(Kt),
            Kt = null))),
            Ga(e, t),
            pt(t),
            null;
        case 5:
            Ta(t);
            var a = dr(Ml.current);
            if (n = t.type,
            e !== null && t.stateNode != null)
                Zc(e, t, n, l, a),
                e.ref !== t.ref && (t.flags |= 512,
                t.flags |= 2097152);
            else {
                if (!l) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return pt(t),
                    null
                }
                if (e = dr(on.current),
                Mi(t)) {
                    l = t.stateNode,
                    n = t.type;
                    var u = t.memoizedProps;
                    switch (l[ln] = t,
                    l[Ll] = u,
                    e = (t.mode & 1) !== 0,
                    n) {
                    case "dialog":
                        We("cancel", l),
                        We("close", l);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        We("load", l);
                        break;
                    case "video":
                    case "audio":
                        for (a = 0; a < _l.length; a++)
                            We(_l[a], l);
                        break;
                    case "source":
                        We("error", l);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        We("error", l),
                        We("load", l);
                        break;
                    case "details":
                        We("toggle", l);
                        break;
                    case "input":
                        ti(l, u),
                        We("invalid", l);
                        break;
                    case "select":
                        l._wrapperState = {
                            wasMultiple: !!u.multiple
                        },
                        We("invalid", l);
                        break;
                    case "textarea":
                        ri(l, u),
                        We("invalid", l)
                    }
                    Cr(n, u),
                    a = null;
                    for (var f in u)
                        if (u.hasOwnProperty(f)) {
                            var g = u[f];
                            f === "children" ? typeof g == "string" ? l.textContent !== g && (u.suppressHydrationWarning !== !0 && _i(l.textContent, g, e),
                            a = ["children", g]) : typeof g == "number" && l.textContent !== "" + g && (u.suppressHydrationWarning !== !0 && _i(l.textContent, g, e),
                            a = ["children", "" + g]) : c.hasOwnProperty(f) && g != null && f === "onScroll" && We("scroll", l)
                        }
                    switch (n) {
                    case "input":
                        kr(l),
                        ni(l, u, !0);
                        break;
                    case "textarea":
                        kr(l),
                        Ln(l);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof u.onClick == "function" && (l.onclick = Ci)
                    }
                    l = a,
                    t.updateQueue = l,
                    l !== null && (t.flags |= 4)
                } else {
                    f = a.nodeType === 9 ? a : a.ownerDocument,
                    e === "http://www.w3.org/1999/xhtml" && (e = il(n)),
                    e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"),
                    e.innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = f.createElement(n, {
                        is: l.is
                    }) : (e = f.createElement(n),
                    n === "select" && (f = e,
                    l.multiple ? f.multiple = !0 : l.size && (f.size = l.size))) : e = f.createElementNS(e, n),
                    e[ln] = t,
                    e[Ll] = l,
                    Gc(e, t, !1, !1),
                    t.stateNode = e;
                    e: {
                        switch (f = al(n, l),
                        n) {
                        case "dialog":
                            We("cancel", e),
                            We("close", e),
                            a = l;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            We("load", e),
                            a = l;
                            break;
                        case "video":
                        case "audio":
                            for (a = 0; a < _l.length; a++)
                                We(_l[a], e);
                            a = l;
                            break;
                        case "source":
                            We("error", e),
                            a = l;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            We("error", e),
                            We("load", e),
                            a = l;
                            break;
                        case "details":
                            We("toggle", e),
                            a = l;
                            break;
                        case "input":
                            ti(e, l),
                            a = Rr(e, l),
                            We("invalid", e);
                            break;
                        case "option":
                            a = l;
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!l.multiple
                            },
                            a = G({}, l, {
                                value: void 0
                            }),
                            We("invalid", e);
                            break;
                        case "textarea":
                            ri(e, l),
                            a = ll(e, l),
                            We("invalid", e);
                            break;
                        default:
                            a = l
                        }
                        Cr(n, a),
                        g = a;
                        for (u in g)
                            if (g.hasOwnProperty(u)) {
                                var k = g[u];
                                u === "style" ? ol(e, k) : u === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0,
                                k != null && Ot(e, k)) : u === "children" ? typeof k == "string" ? (n !== "textarea" || k !== "") && Tn(e, k) : typeof k == "number" && Tn(e, "" + k) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (c.hasOwnProperty(u) ? k != null && u === "onScroll" && We("scroll", e) : k != null && K(e, u, k, f))
                            }
                        switch (n) {
                        case "input":
                            kr(e),
                            ni(e, l, !1);
                            break;
                        case "textarea":
                            kr(e),
                            Ln(e);
                            break;
                        case "option":
                            l.value != null && e.setAttribute("value", "" + Pe(l.value));
                            break;
                        case "select":
                            e.multiple = !!l.multiple,
                            u = l.value,
                            u != null ? Pn(e, !!l.multiple, u, !1) : l.defaultValue != null && Pn(e, !!l.multiple, l.defaultValue, !0);
                            break;
                        default:
                            typeof a.onClick == "function" && (e.onclick = Ci)
                        }
                        switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            l = !!l.autoFocus;
                            break e;
                        case "img":
                            l = !0;
                            break e;
                        default:
                            l = !1
                        }
                    }
                    l && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                t.flags |= 2097152)
            }
            return pt(t),
            null;
        case 6:
            if (e && t.stateNode != null)
                qc(e, t, e.memoizedProps, l);
            else {
                if (typeof l != "string" && t.stateNode === null)
                    throw Error(o(166));
                if (n = dr(Ml.current),
                dr(on.current),
                Mi(t)) {
                    if (l = t.stateNode,
                    n = t.memoizedProps,
                    l[ln] = t,
                    (u = l.nodeValue !== n) && (e = Lt,
                    e !== null))
                        switch (e.tag) {
                        case 3:
                            _i(l.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && _i(l.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    u && (t.flags |= 4)
                } else
                    l = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(l),
                    l[ln] = t,
                    t.stateNode = l
            }
            return pt(t),
            null;
        case 13:
            if (Ke(Xe),
            l = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Ye && Tt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                    tc(),
                    Hr(),
                    t.flags |= 98560,
                    u = !1;
                else if (u = Mi(t),
                l !== null && l.dehydrated !== null) {
                    if (e === null) {
                        if (!u)
                            throw Error(o(318));
                        if (u = t.memoizedState,
                        u = u !== null ? u.dehydrated : null,
                        !u)
                            throw Error(o(317));
                        u[ln] = t
                    } else
                        Hr(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    pt(t),
                    u = !1
                } else
                    Kt !== null && (au(Kt),
                    Kt = null),
                    u = !0;
                if (!u)
                    return t.flags & 65536 ? t : null
            }
            return (t.flags & 128) !== 0 ? (t.lanes = n,
            t) : (l = l !== null,
            l !== (e !== null && e.memoizedState !== null) && l && (t.child.flags |= 8192,
            (t.mode & 1) !== 0 && (e === null || (Xe.current & 1) !== 0 ? rt === 0 && (rt = 3) : cu())),
            t.updateQueue !== null && (t.flags |= 4),
            pt(t),
            null);
        case 4:
            return Qr(),
            Ga(e, t),
            e === null && Cl(t.stateNode.containerInfo),
            pt(t),
            null;
        case 10:
            return Ra(t.type._context),
            pt(t),
            null;
        case 17:
            return St(t.type) && Li(),
            pt(t),
            null;
        case 19:
            if (Ke(Xe),
            u = t.memoizedState,
            u === null)
                return pt(t),
                null;
            if (l = (t.flags & 128) !== 0,
            f = u.rendering,
            f === null)
                if (l)
                    Ul(u, !1);
                else {
                    if (rt !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (f = Ai(e),
                            f !== null) {
                                for (t.flags |= 128,
                                Ul(u, !1),
                                l = f.updateQueue,
                                l !== null && (t.updateQueue = l,
                                t.flags |= 4),
                                t.subtreeFlags = 0,
                                l = n,
                                n = t.child; n !== null; )
                                    u = n,
                                    e = l,
                                    u.flags &= 14680066,
                                    f = u.alternate,
                                    f === null ? (u.childLanes = 0,
                                    u.lanes = e,
                                    u.child = null,
                                    u.subtreeFlags = 0,
                                    u.memoizedProps = null,
                                    u.memoizedState = null,
                                    u.updateQueue = null,
                                    u.dependencies = null,
                                    u.stateNode = null) : (u.childLanes = f.childLanes,
                                    u.lanes = f.lanes,
                                    u.child = f.child,
                                    u.subtreeFlags = 0,
                                    u.deletions = null,
                                    u.memoizedProps = f.memoizedProps,
                                    u.memoizedState = f.memoizedState,
                                    u.updateQueue = f.updateQueue,
                                    u.type = f.type,
                                    e = f.dependencies,
                                    u.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }),
                                    n = n.sibling;
                                return He(Xe, Xe.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    u.tail !== null && De() > Gr && (t.flags |= 128,
                    l = !0,
                    Ul(u, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!l)
                    if (e = Ai(f),
                    e !== null) {
                        if (t.flags |= 128,
                        l = !0,
                        n = e.updateQueue,
                        n !== null && (t.updateQueue = n,
                        t.flags |= 4),
                        Ul(u, !0),
                        u.tail === null && u.tailMode === "hidden" && !f.alternate && !Ye)
                            return pt(t),
                            null
                    } else
                        2 * De() - u.renderingStartTime > Gr && n !== 1073741824 && (t.flags |= 128,
                        l = !0,
                        Ul(u, !1),
                        t.lanes = 4194304);
                u.isBackwards ? (f.sibling = t.child,
                t.child = f) : (n = u.last,
                n !== null ? n.sibling = f : t.child = f,
                u.last = f)
            }
            return u.tail !== null ? (t = u.tail,
            u.rendering = t,
            u.tail = t.sibling,
            u.renderingStartTime = De(),
            t.sibling = null,
            n = Xe.current,
            He(Xe, l ? n & 1 | 2 : n & 1),
            t) : (pt(t),
            null);
        case 22:
        case 23:
            return su(),
            l = t.memoizedState !== null,
            e !== null && e.memoizedState !== null !== l && (t.flags |= 8192),
            l && (t.mode & 1) !== 0 ? (Dt & 1073741824) !== 0 && (pt(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : pt(t),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(o(156, t.tag))
    }
    function vp(e, t) {
        switch (ga(t),
        t.tag) {
        case 1:
            return St(t.type) && Li(),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Qr(),
            Ke(wt),
            Ke(dt),
            Na(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 5:
            return Ta(t),
            null;
        case 13:
            if (Ke(Xe),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(o(340));
                Hr()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return Ke(Xe),
            null;
        case 4:
            return Qr(),
            null;
        case 10:
            return Ra(t.type._context),
            null;
        case 22:
        case 23:
            return su(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Ji = !1
      , mt = !1
      , yp = typeof WeakSet == "function" ? WeakSet : Set
      , ee = null;
    function Jr(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function")
                try {
                    n(null)
                } catch (l) {
                    Ze(e, t, l)
                }
            else
                n.current = null
    }
    function Za(e, t, n) {
        try {
            n()
        } catch (l) {
            Ze(e, t, l)
        }
    }
    var bc = !1;
    function gp(e, t) {
        if (sa = pi,
        e = Ns(),
        ta(e)) {
            if ("selectionStart"in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var l = n.getSelection && n.getSelection();
                    if (l && l.rangeCount !== 0) {
                        n = l.anchorNode;
                        var a = l.anchorOffset
                          , u = l.focusNode;
                        l = l.focusOffset;
                        try {
                            n.nodeType,
                            u.nodeType
                        } catch {
                            n = null;
                            break e
                        }
                        var f = 0
                          , g = -1
                          , k = -1
                          , O = 0
                          , B = 0
                          , H = e
                          , A = null;
                        t: for (; ; ) {
                            for (var Z; H !== n || a !== 0 && H.nodeType !== 3 || (g = f + a),
                            H !== u || l !== 0 && H.nodeType !== 3 || (k = f + l),
                            H.nodeType === 3 && (f += H.nodeValue.length),
                            (Z = H.firstChild) !== null; )
                                A = H,
                                H = Z;
                            for (; ; ) {
                                if (H === e)
                                    break t;
                                if (A === n && ++O === a && (g = f),
                                A === u && ++B === l && (k = f),
                                (Z = H.nextSibling) !== null)
                                    break;
                                H = A,
                                A = H.parentNode
                            }
                            H = Z
                        }
                        n = g === -1 || k === -1 ? null : {
                            start: g,
                            end: k
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (ca = {
            focusedElem: e,
            selectionRange: n
        },
        pi = !1,
        ee = t; ee !== null; )
            if (t = ee,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                ee = e;
            else
                for (; ee !== null; ) {
                    t = ee;
                    try {
                        var re = t.alternate;
                        if ((t.flags & 1024) !== 0)
                            switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (re !== null) {
                                    var ie = re.memoizedProps
                                      , qe = re.memoizedState
                                      , T = t.stateNode
                                      , R = T.getSnapshotBeforeUpdate(t.elementType === t.type ? ie : Qt(t.type, ie), qe);
                                    T.__reactInternalSnapshotBeforeUpdate = R
                                }
                                break;
                            case 3:
                                var D = t.stateNode.containerInfo;
                                D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(o(163))
                            }
                    } catch (W) {
                        Ze(t, t.return, W)
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        ee = e;
                        break
                    }
                    ee = t.return
                }
        return re = bc,
        bc = !1,
        re
    }
    function Al(e, t, n) {
        var l = t.updateQueue;
        if (l = l !== null ? l.lastEffect : null,
        l !== null) {
            var a = l = l.next;
            do {
                if ((a.tag & e) === e) {
                    var u = a.destroy;
                    a.destroy = void 0,
                    u !== void 0 && Za(t, n, u)
                }
                a = a.next
            } while (a !== l)
        }
    }
    function Xi(e, t) {
        if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var l = n.create;
                    n.destroy = l()
                }
                n = n.next
            } while (n !== t)
        }
    }
    function qa(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }
    function ef(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        ef(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && (delete t[ln],
        delete t[Ll],
        delete t[pa],
        delete t[ep],
        delete t[tp])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    function tf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function nf(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || tf(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function ba(e, t, n) {
        var l = e.tag;
        if (l === 5 || l === 6)
            e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
            t.insertBefore(e, n)) : (t = n,
            t.appendChild(e)),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = Ci));
        else if (l !== 4 && (e = e.child,
        e !== null))
            for (ba(e, t, n),
            e = e.sibling; e !== null; )
                ba(e, t, n),
                e = e.sibling
    }
    function eu(e, t, n) {
        var l = e.tag;
        if (l === 5 || l === 6)
            e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (l !== 4 && (e = e.child,
        e !== null))
            for (eu(e, t, n),
            e = e.sibling; e !== null; )
                eu(e, t, n),
                e = e.sibling
    }
    var ct = null
      , Yt = !1;
    function Kn(e, t, n) {
        for (n = n.child; n !== null; )
            rf(e, t, n),
            n = n.sibling
    }
    function rf(e, t, n) {
        if (st && typeof st.onCommitFiberUnmount == "function")
            try {
                st.onCommitFiberUnmount($e, n)
            } catch {}
        switch (n.tag) {
        case 5:
            mt || Jr(n, t);
        case 6:
            var l = ct
              , a = Yt;
            ct = null,
            Kn(e, t, n),
            ct = l,
            Yt = a,
            ct !== null && (Yt ? (e = ct,
            n = n.stateNode,
            e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ct.removeChild(n.stateNode));
            break;
        case 18:
            ct !== null && (Yt ? (e = ct,
            n = n.stateNode,
            e.nodeType === 8 ? ha(e.parentNode, n) : e.nodeType === 1 && ha(e, n),
            yl(e)) : ha(ct, n.stateNode));
            break;
        case 4:
            l = ct,
            a = Yt,
            ct = n.stateNode.containerInfo,
            Yt = !0,
            Kn(e, t, n),
            ct = l,
            Yt = a;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!mt && (l = n.updateQueue,
            l !== null && (l = l.lastEffect,
            l !== null))) {
                a = l = l.next;
                do {
                    var u = a
                      , f = u.destroy;
                    u = u.tag,
                    f !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Za(n, t, f),
                    a = a.next
                } while (a !== l)
            }
            Kn(e, t, n);
            break;
        case 1:
            if (!mt && (Jr(n, t),
            l = n.stateNode,
            typeof l.componentWillUnmount == "function"))
                try {
                    l.props = n.memoizedProps,
                    l.state = n.memoizedState,
                    l.componentWillUnmount()
                } catch (g) {
                    Ze(n, t, g)
                }
            Kn(e, t, n);
            break;
        case 21:
            Kn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (mt = (l = mt) || n.memoizedState !== null,
            Kn(e, t, n),
            mt = l) : Kn(e, t, n);
            break;
        default:
            Kn(e, t, n)
        }
    }
    function lf(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new yp),
            t.forEach(function(l) {
                var a = Pp.bind(null, e, l);
                n.has(l) || (n.add(l),
                l.then(a, a))
            })
        }
    }
    function Jt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var l = 0; l < n.length; l++) {
                var a = n[l];
                try {
                    var u = e
                      , f = t
                      , g = f;
                    e: for (; g !== null; ) {
                        switch (g.tag) {
                        case 5:
                            ct = g.stateNode,
                            Yt = !1;
                            break e;
                        case 3:
                            ct = g.stateNode.containerInfo,
                            Yt = !0;
                            break e;
                        case 4:
                            ct = g.stateNode.containerInfo,
                            Yt = !0;
                            break e
                        }
                        g = g.return
                    }
                    if (ct === null)
                        throw Error(o(160));
                    rf(u, f, a),
                    ct = null,
                    Yt = !1;
                    var k = a.alternate;
                    k !== null && (k.return = null),
                    a.return = null
                } catch (O) {
                    Ze(a, t, O)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; )
                of(t, e),
                t = t.sibling
    }
    function of(e, t) {
        var n = e.alternate
          , l = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Jt(t, e),
            un(e),
            l & 4) {
                try {
                    Al(3, e, e.return),
                    Xi(3, e)
                } catch (ie) {
                    Ze(e, e.return, ie)
                }
                try {
                    Al(5, e, e.return)
                } catch (ie) {
                    Ze(e, e.return, ie)
                }
            }
            break;
        case 1:
            Jt(t, e),
            un(e),
            l & 512 && n !== null && Jr(n, n.return);
            break;
        case 5:
            if (Jt(t, e),
            un(e),
            l & 512 && n !== null && Jr(n, n.return),
            e.flags & 32) {
                var a = e.stateNode;
                try {
                    Tn(a, "")
                } catch (ie) {
                    Ze(e, e.return, ie)
                }
            }
            if (l & 4 && (a = e.stateNode,
            a != null)) {
                var u = e.memoizedProps
                  , f = n !== null ? n.memoizedProps : u
                  , g = e.type
                  , k = e.updateQueue;
                if (e.updateQueue = null,
                k !== null)
                    try {
                        g === "input" && u.type === "radio" && u.name != null && qt(a, u),
                        al(g, f);
                        var O = al(g, u);
                        for (f = 0; f < k.length; f += 2) {
                            var B = k[f]
                              , H = k[f + 1];
                            B === "style" ? ol(a, H) : B === "dangerouslySetInnerHTML" ? Ot(a, H) : B === "children" ? Tn(a, H) : K(a, B, H, O)
                        }
                        switch (g) {
                        case "input":
                            rl(a, u);
                            break;
                        case "textarea":
                            bt(a, u);
                            break;
                        case "select":
                            var A = a._wrapperState.wasMultiple;
                            a._wrapperState.wasMultiple = !!u.multiple;
                            var Z = u.value;
                            Z != null ? Pn(a, !!u.multiple, Z, !1) : A !== !!u.multiple && (u.defaultValue != null ? Pn(a, !!u.multiple, u.defaultValue, !0) : Pn(a, !!u.multiple, u.multiple ? [] : "", !1))
                        }
                        a[Ll] = u
                    } catch (ie) {
                        Ze(e, e.return, ie)
                    }
            }
            break;
        case 6:
            if (Jt(t, e),
            un(e),
            l & 4) {
                if (e.stateNode === null)
                    throw Error(o(162));
                a = e.stateNode,
                u = e.memoizedProps;
                try {
                    a.nodeValue = u
                } catch (ie) {
                    Ze(e, e.return, ie)
                }
            }
            break;
        case 3:
            if (Jt(t, e),
            un(e),
            l & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    yl(t.containerInfo)
                } catch (ie) {
                    Ze(e, e.return, ie)
                }
            break;
        case 4:
            Jt(t, e),
            un(e);
            break;
        case 13:
            Jt(t, e),
            un(e),
            a = e.child,
            a.flags & 8192 && (u = a.memoizedState !== null,
            a.stateNode.isHidden = u,
            !u || a.alternate !== null && a.alternate.memoizedState !== null || (ru = De())),
            l & 4 && lf(e);
            break;
        case 22:
            if (B = n !== null && n.memoizedState !== null,
            e.mode & 1 ? (mt = (O = mt) || B,
            Jt(t, e),
            mt = O) : Jt(t, e),
            un(e),
            l & 8192) {
                if (O = e.memoizedState !== null,
                (e.stateNode.isHidden = O) && !B && (e.mode & 1) !== 0)
                    for (ee = e,
                    B = e.child; B !== null; ) {
                        for (H = ee = B; ee !== null; ) {
                            switch (A = ee,
                            Z = A.child,
                            A.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Al(4, A, A.return);
                                break;
                            case 1:
                                Jr(A, A.return);
                                var re = A.stateNode;
                                if (typeof re.componentWillUnmount == "function") {
                                    l = A,
                                    n = A.return;
                                    try {
                                        t = l,
                                        re.props = t.memoizedProps,
                                        re.state = t.memoizedState,
                                        re.componentWillUnmount()
                                    } catch (ie) {
                                        Ze(l, n, ie)
                                    }
                                }
                                break;
                            case 5:
                                Jr(A, A.return);
                                break;
                            case 22:
                                if (A.memoizedState !== null) {
                                    sf(H);
                                    continue
                                }
                            }
                            Z !== null ? (Z.return = A,
                            ee = Z) : sf(H)
                        }
                        B = B.sibling
                    }
                e: for (B = null,
                H = e; ; ) {
                    if (H.tag === 5) {
                        if (B === null) {
                            B = H;
                            try {
                                a = H.stateNode,
                                O ? (u = a.style,
                                typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (g = H.stateNode,
                                k = H.memoizedProps.style,
                                f = k != null && k.hasOwnProperty("display") ? k.display : null,
                                g.style.display = Ht("display", f))
                            } catch (ie) {
                                Ze(e, e.return, ie)
                            }
                        }
                    } else if (H.tag === 6) {
                        if (B === null)
                            try {
                                H.stateNode.nodeValue = O ? "" : H.memoizedProps
                            } catch (ie) {
                                Ze(e, e.return, ie)
                            }
                    } else if ((H.tag !== 22 && H.tag !== 23 || H.memoizedState === null || H === e) && H.child !== null) {
                        H.child.return = H,
                        H = H.child;
                        continue
                    }
                    if (H === e)
                        break e;
                    for (; H.sibling === null; ) {
                        if (H.return === null || H.return === e)
                            break e;
                        B === H && (B = null),
                        H = H.return
                    }
                    B === H && (B = null),
                    H.sibling.return = H.return,
                    H = H.sibling
                }
            }
            break;
        case 19:
            Jt(t, e),
            un(e),
            l & 4 && lf(e);
            break;
        case 21:
            break;
        default:
            Jt(t, e),
            un(e)
        }
    }
    function un(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null; ) {
                        if (tf(n)) {
                            var l = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(o(160))
                }
                switch (l.tag) {
                case 5:
                    var a = l.stateNode;
                    l.flags & 32 && (Tn(a, ""),
                    l.flags &= -33);
                    var u = nf(e);
                    eu(e, u, a);
                    break;
                case 3:
                case 4:
                    var f = l.stateNode.containerInfo
                      , g = nf(e);
                    ba(e, g, f);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (k) {
                Ze(e, e.return, k)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function wp(e, t, n) {
        ee = e,
        af(e)
    }
    function af(e, t, n) {
        for (var l = (e.mode & 1) !== 0; ee !== null; ) {
            var a = ee
              , u = a.child;
            if (a.tag === 22 && l) {
                var f = a.memoizedState !== null || Ji;
                if (!f) {
                    var g = a.alternate
                      , k = g !== null && g.memoizedState !== null || mt;
                    g = Ji;
                    var O = mt;
                    if (Ji = f,
                    (mt = k) && !O)
                        for (ee = a; ee !== null; )
                            f = ee,
                            k = f.child,
                            f.tag === 22 && f.memoizedState !== null ? cf(a) : k !== null ? (k.return = f,
                            ee = k) : cf(a);
                    for (; u !== null; )
                        ee = u,
                        af(u),
                        u = u.sibling;
                    ee = a,
                    Ji = g,
                    mt = O
                }
                uf(e)
            } else
                (a.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = a,
                ee = u) : uf(e)
        }
    }
    function uf(e) {
        for (; ee !== null; ) {
            var t = ee;
            if ((t.flags & 8772) !== 0) {
                var n = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            mt || Xi(5, t);
                            break;
                        case 1:
                            var l = t.stateNode;
                            if (t.flags & 4 && !mt)
                                if (n === null)
                                    l.componentDidMount();
                                else {
                                    var a = t.elementType === t.type ? n.memoizedProps : Qt(t.type, n.memoizedProps);
                                    l.componentDidUpdate(a, n.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                                }
                            var u = t.updateQueue;
                            u !== null && uc(t, u, l);
                            break;
                        case 3:
                            var f = t.updateQueue;
                            if (f !== null) {
                                if (n = null,
                                t.child !== null)
                                    switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                    }
                                uc(t, f, n)
                            }
                            break;
                        case 5:
                            var g = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = g;
                                var k = t.memoizedProps;
                                switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    k.autoFocus && n.focus();
                                    break;
                                case "img":
                                    k.src && (n.src = k.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var O = t.alternate;
                                if (O !== null) {
                                    var B = O.memoizedState;
                                    if (B !== null) {
                                        var H = B.dehydrated;
                                        H !== null && yl(H)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(o(163))
                        }
                    mt || t.flags & 512 && qa(t)
                } catch (A) {
                    Ze(t, t.return, A)
                }
            }
            if (t === e) {
                ee = null;
                break
            }
            if (n = t.sibling,
            n !== null) {
                n.return = t.return,
                ee = n;
                break
            }
            ee = t.return
        }
    }
    function sf(e) {
        for (; ee !== null; ) {
            var t = ee;
            if (t === e) {
                ee = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return,
                ee = n;
                break
            }
            ee = t.return
        }
    }
    function cf(e) {
        for (; ee !== null; ) {
            var t = ee;
            try {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Xi(4, t)
                    } catch (k) {
                        Ze(t, n, k)
                    }
                    break;
                case 1:
                    var l = t.stateNode;
                    if (typeof l.componentDidMount == "function") {
                        var a = t.return;
                        try {
                            l.componentDidMount()
                        } catch (k) {
                            Ze(t, a, k)
                        }
                    }
                    var u = t.return;
                    try {
                        qa(t)
                    } catch (k) {
                        Ze(t, u, k)
                    }
                    break;
                case 5:
                    var f = t.return;
                    try {
                        qa(t)
                    } catch (k) {
                        Ze(t, f, k)
                    }
                }
            } catch (k) {
                Ze(t, t.return, k)
            }
            if (t === e) {
                ee = null;
                break
            }
            var g = t.sibling;
            if (g !== null) {
                g.return = t.return,
                ee = g;
                break
            }
            ee = t.return
        }
    }
    var Sp = Math.ceil
      , Gi = $.ReactCurrentDispatcher
      , tu = $.ReactCurrentOwner
      , It = $.ReactCurrentBatchConfig
      , Te = 0
      , at = null
      , be = null
      , ft = 0
      , Dt = 0
      , Xr = $n(0)
      , rt = 0
      , $l = null
      , pr = 0
      , Zi = 0
      , nu = 0
      , Bl = null
      , xt = null
      , ru = 0
      , Gr = 1 / 0
      , xn = null
      , qi = !1
      , lu = null
      , Qn = null
      , bi = !1
      , Yn = null
      , eo = 0
      , Hl = 0
      , iu = null
      , to = -1
      , no = 0;
    function gt() {
        return (Te & 6) !== 0 ? De() : to !== -1 ? to : to = De()
    }
    function Jn(e) {
        return (e.mode & 1) === 0 ? 1 : (Te & 2) !== 0 && ft !== 0 ? ft & -ft : rp.transition !== null ? (no === 0 && (no = ns()),
        no) : (e = je,
        e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : fs(e.type)),
        e)
    }
    function Xt(e, t, n, l) {
        if (50 < Hl)
            throw Hl = 0,
            iu = null,
            Error(o(185));
        dl(e, n, l),
        ((Te & 2) === 0 || e !== at) && (e === at && ((Te & 2) === 0 && (Zi |= n),
        rt === 4 && Xn(e, ft)),
        kt(e, l),
        n === 1 && Te === 0 && (t.mode & 1) === 0 && (Gr = De() + 500,
        Di && Hn()))
    }
    function kt(e, t) {
        var n = e.callbackNode;
        rh(e, t);
        var l = fi(e, e === at ? ft : 0);
        if (l === 0)
            n !== null && dn(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
        else if (t = l & -l,
        e.callbackPriority !== t) {
            if (n != null && dn(n),
            t === 1)
                e.tag === 0 ? np(df.bind(null, e)) : Gs(df.bind(null, e)),
                qh(function() {
                    (Te & 6) === 0 && Hn()
                }),
                n = null;
            else {
                switch (rs(l)) {
                case 1:
                    n = hn;
                    break;
                case 4:
                    n = rn;
                    break;
                case 16:
                    n = pn;
                    break;
                case 536870912:
                    n = _e;
                    break;
                default:
                    n = pn
                }
                n = Sf(n, ff.bind(null, e))
            }
            e.callbackPriority = t,
            e.callbackNode = n
        }
    }
    function ff(e, t) {
        if (to = -1,
        no = 0,
        (Te & 6) !== 0)
            throw Error(o(327));
        var n = e.callbackNode;
        if (Zr() && e.callbackNode !== n)
            return null;
        var l = fi(e, e === at ? ft : 0);
        if (l === 0)
            return null;
        if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t)
            t = ro(e, l);
        else {
            t = l;
            var a = Te;
            Te |= 2;
            var u = pf();
            (at !== e || ft !== t) && (xn = null,
            Gr = De() + 500,
            vr(e, t));
            do
                try {
                    kp();
                    break
                } catch (g) {
                    hf(e, g)
                }
            while (!0);
            ka(),
            Gi.current = u,
            Te = a,
            be !== null ? t = 0 : (at = null,
            ft = 0,
            t = rt)
        }
        if (t !== 0) {
            if (t === 2 && (a = Ao(e),
            a !== 0 && (l = a,
            t = ou(e, a))),
            t === 1)
                throw n = $l,
                vr(e, 0),
                Xn(e, l),
                kt(e, De()),
                n;
            if (t === 6)
                Xn(e, l);
            else {
                if (a = e.current.alternate,
                (l & 30) === 0 && !Ep(a) && (t = ro(e, l),
                t === 2 && (u = Ao(e),
                u !== 0 && (l = u,
                t = ou(e, u))),
                t === 1))
                    throw n = $l,
                    vr(e, 0),
                    Xn(e, l),
                    kt(e, De()),
                    n;
                switch (e.finishedWork = a,
                e.finishedLanes = l,
                t) {
                case 0:
                case 1:
                    throw Error(o(345));
                case 2:
                    yr(e, xt, xn);
                    break;
                case 3:
                    if (Xn(e, l),
                    (l & 130023424) === l && (t = ru + 500 - De(),
                    10 < t)) {
                        if (fi(e, 0) !== 0)
                            break;
                        if (a = e.suspendedLanes,
                        (a & l) !== l) {
                            gt(),
                            e.pingedLanes |= e.suspendedLanes & a;
                            break
                        }
                        e.timeoutHandle = da(yr.bind(null, e, xt, xn), t);
                        break
                    }
                    yr(e, xt, xn);
                    break;
                case 4:
                    if (Xn(e, l),
                    (l & 4194240) === l)
                        break;
                    for (t = e.eventTimes,
                    a = -1; 0 < l; ) {
                        var f = 31 - Ne(l);
                        u = 1 << f,
                        f = t[f],
                        f > a && (a = f),
                        l &= ~u
                    }
                    if (l = a,
                    l = De() - l,
                    l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Sp(l / 1960)) - l,
                    10 < l) {
                        e.timeoutHandle = da(yr.bind(null, e, xt, xn), l);
                        break
                    }
                    yr(e, xt, xn);
                    break;
                case 5:
                    yr(e, xt, xn);
                    break;
                default:
                    throw Error(o(329))
                }
            }
        }
        return kt(e, De()),
        e.callbackNode === n ? ff.bind(null, e) : null
    }
    function ou(e, t) {
        var n = Bl;
        return e.current.memoizedState.isDehydrated && (vr(e, t).flags |= 256),
        e = ro(e, t),
        e !== 2 && (t = xt,
        xt = n,
        t !== null && au(t)),
        e
    }
    function au(e) {
        xt === null ? xt = e : xt.push.apply(xt, e)
    }
    function Ep(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores,
                n !== null))
                    for (var l = 0; l < n.length; l++) {
                        var a = n[l]
                          , u = a.getSnapshot;
                        a = a.value;
                        try {
                            if (!Wt(u(), a))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Xn(e, t) {
        for (t &= ~nu,
        t &= ~Zi,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t; ) {
            var n = 31 - Ne(t)
              , l = 1 << n;
            e[n] = -1,
            t &= ~l
        }
    }
    function df(e) {
        if ((Te & 6) !== 0)
            throw Error(o(327));
        Zr();
        var t = fi(e, 0);
        if ((t & 1) === 0)
            return kt(e, De()),
            null;
        var n = ro(e, t);
        if (e.tag !== 0 && n === 2) {
            var l = Ao(e);
            l !== 0 && (t = l,
            n = ou(e, l))
        }
        if (n === 1)
            throw n = $l,
            vr(e, 0),
            Xn(e, t),
            kt(e, De()),
            n;
        if (n === 6)
            throw Error(o(345));
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        yr(e, xt, xn),
        kt(e, De()),
        null
    }
    function uu(e, t) {
        var n = Te;
        Te |= 1;
        try {
            return e(t)
        } finally {
            Te = n,
            Te === 0 && (Gr = De() + 500,
            Di && Hn())
        }
    }
    function mr(e) {
        Yn !== null && Yn.tag === 0 && (Te & 6) === 0 && Zr();
        var t = Te;
        Te |= 1;
        var n = It.transition
          , l = je;
        try {
            if (It.transition = null,
            je = 1,
            e)
                return e()
        } finally {
            je = l,
            It.transition = n,
            Te = t,
            (Te & 6) === 0 && Hn()
        }
    }
    function su() {
        Dt = Xr.current,
        Ke(Xr)
    }
    function vr(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1,
        Zh(n)),
        be !== null)
            for (n = be.return; n !== null; ) {
                var l = n;
                switch (ga(l),
                l.tag) {
                case 1:
                    l = l.type.childContextTypes,
                    l != null && Li();
                    break;
                case 3:
                    Qr(),
                    Ke(wt),
                    Ke(dt),
                    Na();
                    break;
                case 5:
                    Ta(l);
                    break;
                case 4:
                    Qr();
                    break;
                case 13:
                    Ke(Xe);
                    break;
                case 19:
                    Ke(Xe);
                    break;
                case 10:
                    Ra(l.type._context);
                    break;
                case 22:
                case 23:
                    su()
                }
                n = n.return
            }
        if (at = e,
        be = e = Gn(e.current, null),
        ft = Dt = t,
        rt = 0,
        $l = null,
        nu = Zi = pr = 0,
        xt = Bl = null,
        fr !== null) {
            for (t = 0; t < fr.length; t++)
                if (n = fr[t],
                l = n.interleaved,
                l !== null) {
                    n.interleaved = null;
                    var a = l.next
                      , u = n.pending;
                    if (u !== null) {
                        var f = u.next;
                        u.next = a,
                        l.next = f
                    }
                    n.pending = l
                }
            fr = null
        }
        return e
    }
    function hf(e, t) {
        do {
            var n = be;
            try {
                if (ka(),
                $i.current = Wi,
                Bi) {
                    for (var l = Ge.memoizedState; l !== null; ) {
                        var a = l.queue;
                        a !== null && (a.pending = null),
                        l = l.next
                    }
                    Bi = !1
                }
                if (hr = 0,
                ot = nt = Ge = null,
                Fl = !1,
                zl = 0,
                tu.current = null,
                n === null || n.return === null) {
                    rt = 1,
                    $l = t,
                    be = null;
                    break
                }
                e: {
                    var u = e
                      , f = n.return
                      , g = n
                      , k = t;
                    if (t = ft,
                    g.flags |= 32768,
                    k !== null && typeof k == "object" && typeof k.then == "function") {
                        var O = k
                          , B = g
                          , H = B.tag;
                        if ((B.mode & 1) === 0 && (H === 0 || H === 11 || H === 15)) {
                            var A = B.alternate;
                            A ? (B.updateQueue = A.updateQueue,
                            B.memoizedState = A.memoizedState,
                            B.lanes = A.lanes) : (B.updateQueue = null,
                            B.memoizedState = null)
                        }
                        var Z = Ic(f);
                        if (Z !== null) {
                            Z.flags &= -257,
                            Uc(Z, f, g, u, t),
                            Z.mode & 1 && jc(u, O, t),
                            t = Z,
                            k = O;
                            var re = t.updateQueue;
                            if (re === null) {
                                var ie = new Set;
                                ie.add(k),
                                t.updateQueue = ie
                            } else
                                re.add(k);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                jc(u, O, t),
                                cu();
                                break e
                            }
                            k = Error(o(426))
                        }
                    } else if (Ye && g.mode & 1) {
                        var qe = Ic(f);
                        if (qe !== null) {
                            (qe.flags & 65536) === 0 && (qe.flags |= 256),
                            Uc(qe, f, g, u, t),
                            Ea(Yr(k, g));
                            break e
                        }
                    }
                    u = k = Yr(k, g),
                    rt !== 4 && (rt = 2),
                    Bl === null ? Bl = [u] : Bl.push(u),
                    u = f;
                    do {
                        switch (u.tag) {
                        case 3:
                            u.flags |= 65536,
                            t &= -t,
                            u.lanes |= t;
                            var T = Fc(u, k, t);
                            ac(u, T);
                            break e;
                        case 1:
                            g = k;
                            var R = u.type
                              , D = u.stateNode;
                            if ((u.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (Qn === null || !Qn.has(D)))) {
                                u.flags |= 65536,
                                t &= -t,
                                u.lanes |= t;
                                var W = zc(u, g, t);
                                ac(u, W);
                                break e
                            }
                        }
                        u = u.return
                    } while (u !== null)
                }
                vf(n)
            } catch (oe) {
                t = oe,
                be === n && n !== null && (be = n = n.return);
                continue
            }
            break
        } while (!0)
    }
    function pf() {
        var e = Gi.current;
        return Gi.current = Wi,
        e === null ? Wi : e
    }
    function cu() {
        (rt === 0 || rt === 3 || rt === 2) && (rt = 4),
        at === null || (pr & 268435455) === 0 && (Zi & 268435455) === 0 || Xn(at, ft)
    }
    function ro(e, t) {
        var n = Te;
        Te |= 2;
        var l = pf();
        (at !== e || ft !== t) && (xn = null,
        vr(e, t));
        do
            try {
                xp();
                break
            } catch (a) {
                hf(e, a)
            }
        while (!0);
        if (ka(),
        Te = n,
        Gi.current = l,
        be !== null)
            throw Error(o(261));
        return at = null,
        ft = 0,
        rt
    }
    function xp() {
        for (; be !== null; )
            mf(be)
    }
    function kp() {
        for (; be !== null && !ir(); )
            mf(be)
    }
    function mf(e) {
        var t = wf(e.alternate, e, Dt);
        e.memoizedProps = e.pendingProps,
        t === null ? vf(e) : be = t,
        tu.current = null
    }
    function vf(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return,
            (t.flags & 32768) === 0) {
                if (n = mp(n, t, Dt),
                n !== null) {
                    be = n;
                    return
                }
            } else {
                if (n = vp(n, t),
                n !== null) {
                    n.flags &= 32767,
                    be = n;
                    return
                }
                if (e !== null)
                    e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
                else {
                    rt = 6,
                    be = null;
                    return
                }
            }
            if (t = t.sibling,
            t !== null) {
                be = t;
                return
            }
            be = t = e
        } while (t !== null);
        rt === 0 && (rt = 5)
    }
    function yr(e, t, n) {
        var l = je
          , a = It.transition;
        try {
            It.transition = null,
            je = 1,
            Rp(e, t, n, l)
        } finally {
            It.transition = a,
            je = l
        }
        return null
    }
    function Rp(e, t, n, l) {
        do
            Zr();
        while (Yn !== null);
        if ((Te & 6) !== 0)
            throw Error(o(327));
        n = e.finishedWork;
        var a = e.finishedLanes;
        if (n === null)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
            throw Error(o(177));
        e.callbackNode = null,
        e.callbackPriority = 0;
        var u = n.lanes | n.childLanes;
        if (lh(e, u),
        e === at && (be = at = null,
        ft = 0),
        (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || bi || (bi = !0,
        Sf(pn, function() {
            return Zr(),
            null
        })),
        u = (n.flags & 15990) !== 0,
        (n.subtreeFlags & 15990) !== 0 || u) {
            u = It.transition,
            It.transition = null;
            var f = je;
            je = 1;
            var g = Te;
            Te |= 4,
            tu.current = null,
            gp(e, n),
            of(n, e),
            Wh(ca),
            pi = !!sa,
            ca = sa = null,
            e.current = n,
            wp(n),
            Vt(),
            Te = g,
            je = f,
            It.transition = u
        } else
            e.current = n;
        if (bi && (bi = !1,
        Yn = e,
        eo = a),
        u = e.pendingLanes,
        u === 0 && (Qn = null),
        or(n.stateNode),
        kt(e, De()),
        t !== null)
            for (l = e.onRecoverableError,
            n = 0; n < t.length; n++)
                a = t[n],
                l(a.value, {
                    componentStack: a.stack,
                    digest: a.digest
                });
        if (qi)
            throw qi = !1,
            e = lu,
            lu = null,
            e;
        return (eo & 1) !== 0 && e.tag !== 0 && Zr(),
        u = e.pendingLanes,
        (u & 1) !== 0 ? e === iu ? Hl++ : (Hl = 0,
        iu = e) : Hl = 0,
        Hn(),
        null
    }
    function Zr() {
        if (Yn !== null) {
            var e = rs(eo)
              , t = It.transition
              , n = je;
            try {
                if (It.transition = null,
                je = 16 > e ? 16 : e,
                Yn === null)
                    var l = !1;
                else {
                    if (e = Yn,
                    Yn = null,
                    eo = 0,
                    (Te & 6) !== 0)
                        throw Error(o(331));
                    var a = Te;
                    for (Te |= 4,
                    ee = e.current; ee !== null; ) {
                        var u = ee
                          , f = u.child;
                        if ((ee.flags & 16) !== 0) {
                            var g = u.deletions;
                            if (g !== null) {
                                for (var k = 0; k < g.length; k++) {
                                    var O = g[k];
                                    for (ee = O; ee !== null; ) {
                                        var B = ee;
                                        switch (B.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Al(8, B, u)
                                        }
                                        var H = B.child;
                                        if (H !== null)
                                            H.return = B,
                                            ee = H;
                                        else
                                            for (; ee !== null; ) {
                                                B = ee;
                                                var A = B.sibling
                                                  , Z = B.return;
                                                if (ef(B),
                                                B === O) {
                                                    ee = null;
                                                    break
                                                }
                                                if (A !== null) {
                                                    A.return = Z,
                                                    ee = A;
                                                    break
                                                }
                                                ee = Z
                                            }
                                    }
                                }
                                var re = u.alternate;
                                if (re !== null) {
                                    var ie = re.child;
                                    if (ie !== null) {
                                        re.child = null;
                                        do {
                                            var qe = ie.sibling;
                                            ie.sibling = null,
                                            ie = qe
                                        } while (ie !== null)
                                    }
                                }
                                ee = u
                            }
                        }
                        if ((u.subtreeFlags & 2064) !== 0 && f !== null)
                            f.return = u,
                            ee = f;
                        else
                            e: for (; ee !== null; ) {
                                if (u = ee,
                                (u.flags & 2048) !== 0)
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Al(9, u, u.return)
                                    }
                                var T = u.sibling;
                                if (T !== null) {
                                    T.return = u.return,
                                    ee = T;
                                    break e
                                }
                                ee = u.return
                            }
                    }
                    var R = e.current;
                    for (ee = R; ee !== null; ) {
                        f = ee;
                        var D = f.child;
                        if ((f.subtreeFlags & 2064) !== 0 && D !== null)
                            D.return = f,
                            ee = D;
                        else
                            e: for (f = R; ee !== null; ) {
                                if (g = ee,
                                (g.flags & 2048) !== 0)
                                    try {
                                        switch (g.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Xi(9, g)
                                        }
                                    } catch (oe) {
                                        Ze(g, g.return, oe)
                                    }
                                if (g === f) {
                                    ee = null;
                                    break e
                                }
                                var W = g.sibling;
                                if (W !== null) {
                                    W.return = g.return,
                                    ee = W;
                                    break e
                                }
                                ee = g.return
                            }
                    }
                    if (Te = a,
                    Hn(),
                    st && typeof st.onPostCommitFiberRoot == "function")
                        try {
                            st.onPostCommitFiberRoot($e, e)
                        } catch {}
                    l = !0
                }
                return l
            } finally {
                je = n,
                It.transition = t
            }
        }
        return !1
    }
    function yf(e, t, n) {
        t = Yr(n, t),
        t = Fc(e, t, 1),
        e = Wn(e, t, 1),
        t = gt(),
        e !== null && (dl(e, 1, t),
        kt(e, t))
    }
    function Ze(e, t, n) {
        if (e.tag === 3)
            yf(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    yf(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var l = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Qn === null || !Qn.has(l))) {
                        e = Yr(n, e),
                        e = zc(t, e, 1),
                        t = Wn(t, e, 1),
                        e = gt(),
                        t !== null && (dl(t, 1, e),
                        kt(t, e));
                        break
                    }
                }
                t = t.return
            }
    }
    function _p(e, t, n) {
        var l = e.pingCache;
        l !== null && l.delete(t),
        t = gt(),
        e.pingedLanes |= e.suspendedLanes & n,
        at === e && (ft & n) === n && (rt === 4 || rt === 3 && (ft & 130023424) === ft && 500 > De() - ru ? vr(e, 0) : nu |= n),
        kt(e, t)
    }
    function gf(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ci,
        ci <<= 1,
        (ci & 130023424) === 0 && (ci = 4194304)));
        var n = gt();
        e = wn(e, t),
        e !== null && (dl(e, t, n),
        kt(e, n))
    }
    function Cp(e) {
        var t = e.memoizedState
          , n = 0;
        t !== null && (n = t.retryLane),
        gf(e, n)
    }
    function Pp(e, t) {
        var n = 0;
        switch (e.tag) {
        case 13:
            var l = e.stateNode
              , a = e.memoizedState;
            a !== null && (n = a.retryLane);
            break;
        case 19:
            l = e.stateNode;
            break;
        default:
            throw Error(o(314))
        }
        l !== null && l.delete(t),
        gf(e, n)
    }
    var wf;
    wf = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || wt.current)
                Et = !0;
            else {
                if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
                    return Et = !1,
                    pp(e, t, n);
                Et = (e.flags & 131072) !== 0
            }
        else
            Et = !1,
            Ye && (t.flags & 1048576) !== 0 && Zs(t, Oi, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 2:
            var l = t.type;
            Yi(e, t),
            e = t.pendingProps;
            var a = Ar(t, dt.current);
            Kr(t, n),
            a = Fa(null, t, l, e, a, n);
            var u = za();
            return t.flags |= 1,
            typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1,
            t.memoizedState = null,
            t.updateQueue = null,
            St(l) ? (u = !0,
            Ti(t)) : u = !1,
            t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null,
            Pa(t),
            a.updater = Ki,
            t.stateNode = a,
            a._reactInternals = t,
            Ba(t, l, e, n),
            t = Ka(null, t, l, !0, u, n)) : (t.tag = 0,
            Ye && u && ya(t),
            yt(null, t, a, n),
            t = t.child),
            t;
        case 16:
            l = t.elementType;
            e: {
                switch (Yi(e, t),
                e = t.pendingProps,
                a = l._init,
                l = a(l._payload),
                t.type = l,
                a = t.tag = Tp(l),
                e = Qt(l, e),
                a) {
                case 0:
                    t = Wa(null, t, l, e, n);
                    break e;
                case 1:
                    t = Wc(null, t, l, e, n);
                    break e;
                case 11:
                    t = Ac(null, t, l, e, n);
                    break e;
                case 14:
                    t = $c(null, t, l, Qt(l.type, e), n);
                    break e
                }
                throw Error(o(306, l, ""))
            }
            return t;
        case 0:
            return l = t.type,
            a = t.pendingProps,
            a = t.elementType === l ? a : Qt(l, a),
            Wa(e, t, l, a, n);
        case 1:
            return l = t.type,
            a = t.pendingProps,
            a = t.elementType === l ? a : Qt(l, a),
            Wc(e, t, l, a, n);
        case 3:
            e: {
                if (Kc(t),
                e === null)
                    throw Error(o(387));
                l = t.pendingProps,
                u = t.memoizedState,
                a = u.element,
                oc(e, t),
                Ui(t, l, null, n);
                var f = t.memoizedState;
                if (l = f.element,
                u.isDehydrated)
                    if (u = {
                        element: l,
                        isDehydrated: !1,
                        cache: f.cache,
                        pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
                        transitions: f.transitions
                    },
                    t.updateQueue.baseState = u,
                    t.memoizedState = u,
                    t.flags & 256) {
                        a = Yr(Error(o(423)), t),
                        t = Qc(e, t, l, n, a);
                        break e
                    } else if (l !== a) {
                        a = Yr(Error(o(424)), t),
                        t = Qc(e, t, l, n, a);
                        break e
                    } else
                        for (Tt = An(t.stateNode.containerInfo.firstChild),
                        Lt = t,
                        Ye = !0,
                        Kt = null,
                        n = lc(t, null, l, n),
                        t.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling;
                else {
                    if (Hr(),
                    l === a) {
                        t = En(e, t, n);
                        break e
                    }
                    yt(e, t, l, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return sc(t),
            e === null && Sa(t),
            l = t.type,
            a = t.pendingProps,
            u = e !== null ? e.memoizedProps : null,
            f = a.children,
            fa(l, a) ? f = null : u !== null && fa(l, u) && (t.flags |= 32),
            Vc(e, t),
            yt(e, t, f, n),
            t.child;
        case 6:
            return e === null && Sa(t),
            null;
        case 13:
            return Yc(e, t, n);
        case 4:
            return La(t, t.stateNode.containerInfo),
            l = t.pendingProps,
            e === null ? t.child = Vr(t, null, l, n) : yt(e, t, l, n),
            t.child;
        case 11:
            return l = t.type,
            a = t.pendingProps,
            a = t.elementType === l ? a : Qt(l, a),
            Ac(e, t, l, a, n);
        case 7:
            return yt(e, t, t.pendingProps, n),
            t.child;
        case 8:
            return yt(e, t, t.pendingProps.children, n),
            t.child;
        case 12:
            return yt(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            e: {
                if (l = t.type._context,
                a = t.pendingProps,
                u = t.memoizedProps,
                f = a.value,
                He(zi, l._currentValue),
                l._currentValue = f,
                u !== null)
                    if (Wt(u.value, f)) {
                        if (u.children === a.children && !wt.current) {
                            t = En(e, t, n);
                            break e
                        }
                    } else
                        for (u = t.child,
                        u !== null && (u.return = t); u !== null; ) {
                            var g = u.dependencies;
                            if (g !== null) {
                                f = u.child;
                                for (var k = g.firstContext; k !== null; ) {
                                    if (k.context === l) {
                                        if (u.tag === 1) {
                                            k = Sn(-1, n & -n),
                                            k.tag = 2;
                                            var O = u.updateQueue;
                                            if (O !== null) {
                                                O = O.shared;
                                                var B = O.pending;
                                                B === null ? k.next = k : (k.next = B.next,
                                                B.next = k),
                                                O.pending = k
                                            }
                                        }
                                        u.lanes |= n,
                                        k = u.alternate,
                                        k !== null && (k.lanes |= n),
                                        _a(u.return, n, t),
                                        g.lanes |= n;
                                        break
                                    }
                                    k = k.next
                                }
                            } else if (u.tag === 10)
                                f = u.type === t.type ? null : u.child;
                            else if (u.tag === 18) {
                                if (f = u.return,
                                f === null)
                                    throw Error(o(341));
                                f.lanes |= n,
                                g = f.alternate,
                                g !== null && (g.lanes |= n),
                                _a(f, n, t),
                                f = u.sibling
                            } else
                                f = u.child;
                            if (f !== null)
                                f.return = u;
                            else
                                for (f = u; f !== null; ) {
                                    if (f === t) {
                                        f = null;
                                        break
                                    }
                                    if (u = f.sibling,
                                    u !== null) {
                                        u.return = f.return,
                                        f = u;
                                        break
                                    }
                                    f = f.return
                                }
                            u = f
                        }
                yt(e, t, a.children, n),
                t = t.child
            }
            return t;
        case 9:
            return a = t.type,
            l = t.pendingProps.children,
            Kr(t, n),
            a = zt(a),
            l = l(a),
            t.flags |= 1,
            yt(e, t, l, n),
            t.child;
        case 14:
            return l = t.type,
            a = Qt(l, t.pendingProps),
            a = Qt(l.type, a),
            $c(e, t, l, a, n);
        case 15:
            return Bc(e, t, t.type, t.pendingProps, n);
        case 17:
            return l = t.type,
            a = t.pendingProps,
            a = t.elementType === l ? a : Qt(l, a),
            Yi(e, t),
            t.tag = 1,
            St(l) ? (e = !0,
            Ti(t)) : e = !1,
            Kr(t, n),
            Oc(t, l, a),
            Ba(t, l, a, n),
            Ka(null, t, l, !0, e, n);
        case 19:
            return Xc(e, t, n);
        case 22:
            return Hc(e, t, n)
        }
        throw Error(o(156, t.tag))
    }
    ;
    function Sf(e, t) {
        return Ve(e, t)
    }
    function Lp(e, t, n, l) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Ut(e, t, n, l) {
        return new Lp(e,t,n,l)
    }
    function fu(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Tp(e) {
        if (typeof e == "function")
            return fu(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof,
            e === Se)
                return 11;
            if (e === Fe)
                return 14
        }
        return 2
    }
    function Gn(e, t) {
        var n = e.alternate;
        return n === null ? (n = Ut(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
    }
    function lo(e, t, n, l, a, u) {
        var f = 2;
        if (l = e,
        typeof e == "function")
            fu(e) && (f = 1);
        else if (typeof e == "string")
            f = 5;
        else
            e: switch (e) {
            case P:
                return gr(n.children, a, u, t);
            case Y:
                f = 8,
                a |= 8;
                break;
            case he:
                return e = Ut(12, n, t, a | 2),
                e.elementType = he,
                e.lanes = u,
                e;
            case Me:
                return e = Ut(13, n, t, a),
                e.elementType = Me,
                e.lanes = u,
                e;
            case Ue:
                return e = Ut(19, n, t, a),
                e.elementType = Ue,
                e.lanes = u,
                e;
            case Ae:
                return io(n, a, u, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case ue:
                        f = 10;
                        break e;
                    case Re:
                        f = 9;
                        break e;
                    case Se:
                        f = 11;
                        break e;
                    case Fe:
                        f = 14;
                        break e;
                    case Je:
                        f = 16,
                        l = null;
                        break e
                    }
                throw Error(o(130, e == null ? e : typeof e, ""))
            }
        return t = Ut(f, n, t, a),
        t.elementType = e,
        t.type = l,
        t.lanes = u,
        t
    }
    function gr(e, t, n, l) {
        return e = Ut(7, e, l, t),
        e.lanes = n,
        e
    }
    function io(e, t, n, l) {
        return e = Ut(22, e, l, t),
        e.elementType = Ae,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
    }
    function du(e, t, n) {
        return e = Ut(6, e, null, t),
        e.lanes = n,
        e
    }
    function hu(e, t, n) {
        return t = Ut(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function Dp(e, t, n, l, a) {
        this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = $o(0),
        this.expirationTimes = $o(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = $o(0),
        this.identifierPrefix = l,
        this.onRecoverableError = a,
        this.mutableSourceEagerHydrationData = null
    }
    function pu(e, t, n, l, a, u, f, g, k) {
        return e = new Dp(e,t,n,g,k),
        t === 1 ? (t = 1,
        u === !0 && (t |= 8)) : t = 0,
        u = Ut(3, null, null, t),
        e.current = u,
        u.stateNode = e,
        u.memoizedState = {
            element: l,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Pa(u),
        e
    }
    function Np(e, t, n) {
        var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: J,
            key: l == null ? null : "" + l,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }
    function Ef(e) {
        if (!e)
            return Bn;
        e = e._reactInternals;
        e: {
            if (te(e) !== e || e.tag !== 1)
                throw Error(o(170));
            var t = e;
            do {
                switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (St(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                t = t.return
            } while (t !== null);
            throw Error(o(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (St(n))
                return Js(e, n, t)
        }
        return t
    }
    function xf(e, t, n, l, a, u, f, g, k) {
        return e = pu(n, l, !0, e, a, u, f, g, k),
        e.context = Ef(null),
        n = e.current,
        l = gt(),
        a = Jn(n),
        u = Sn(l, a),
        u.callback = t ?? null,
        Wn(n, u, a),
        e.current.lanes = a,
        dl(e, a, l),
        kt(e, l),
        e
    }
    function oo(e, t, n, l) {
        var a = t.current
          , u = gt()
          , f = Jn(a);
        return n = Ef(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = Sn(u, f),
        t.payload = {
            element: e
        },
        l = l === void 0 ? null : l,
        l !== null && (t.callback = l),
        e = Wn(a, t, f),
        e !== null && (Xt(e, a, f, u),
        Ii(e, a, f)),
        f
    }
    function ao(e) {
        if (e = e.current,
        !e.child)
            return null;
        switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
        }
    }
    function kf(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function mu(e, t) {
        kf(e, t),
        (e = e.alternate) && kf(e, t)
    }
    function Op() {
        return null
    }
    var Rf = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    }
    ;
    function vu(e) {
        this._internalRoot = e
    }
    uo.prototype.render = vu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(o(409));
        oo(e, t, null, null)
    }
    ,
    uo.prototype.unmount = vu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            mr(function() {
                oo(null, e, null, null)
            }),
            t[mn] = null
        }
    }
    ;
    function uo(e) {
        this._internalRoot = e
    }
    uo.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = os();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < jn.length && t !== 0 && t < jn[n].priority; n++)
                ;
            jn.splice(n, 0, e),
            n === 0 && ss(e)
        }
    }
    ;
    function yu(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function so(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }
    function _f() {}
    function Mp(e, t, n, l, a) {
        if (a) {
            if (typeof l == "function") {
                var u = l;
                l = function() {
                    var O = ao(f);
                    u.call(O)
                }
            }
            var f = xf(t, l, e, 0, null, !1, !1, "", _f);
            return e._reactRootContainer = f,
            e[mn] = f.current,
            Cl(e.nodeType === 8 ? e.parentNode : e),
            mr(),
            f
        }
        for (; a = e.lastChild; )
            e.removeChild(a);
        if (typeof l == "function") {
            var g = l;
            l = function() {
                var O = ao(k);
                g.call(O)
            }
        }
        var k = pu(e, 0, !1, null, null, !1, !1, "", _f);
        return e._reactRootContainer = k,
        e[mn] = k.current,
        Cl(e.nodeType === 8 ? e.parentNode : e),
        mr(function() {
            oo(t, k, n, l)
        }),
        k
    }
    function co(e, t, n, l, a) {
        var u = n._reactRootContainer;
        if (u) {
            var f = u;
            if (typeof a == "function") {
                var g = a;
                a = function() {
                    var k = ao(f);
                    g.call(k)
                }
            }
            oo(t, f, e, a)
        } else
            f = Mp(n, t, e, a, l);
        return ao(f)
    }
    ls = function(e) {
        switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = fl(t.pendingLanes);
                n !== 0 && (Bo(t, n | 1),
                kt(t, De()),
                (Te & 6) === 0 && (Gr = De() + 500,
                Hn()))
            }
            break;
        case 13:
            mr(function() {
                var l = wn(e, 1);
                if (l !== null) {
                    var a = gt();
                    Xt(l, e, 1, a)
                }
            }),
            mu(e, 1)
        }
    }
    ,
    Ho = function(e) {
        if (e.tag === 13) {
            var t = wn(e, 134217728);
            if (t !== null) {
                var n = gt();
                Xt(t, e, 134217728, n)
            }
            mu(e, 134217728)
        }
    }
    ,
    is = function(e) {
        if (e.tag === 13) {
            var t = Jn(e)
              , n = wn(e, t);
            if (n !== null) {
                var l = gt();
                Xt(n, e, t, l)
            }
            mu(e, t)
        }
    }
    ,
    os = function() {
        return je
    }
    ,
    as = function(e, t) {
        var n = je;
        try {
            return je = e,
            t()
        } finally {
            je = n
        }
    }
    ,
    Lr = function(e, t, n) {
        switch (t) {
        case "input":
            if (rl(e, n),
            t = n.name,
            n.type === "radio" && t != null) {
                for (n = e; n.parentNode; )
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < n.length; t++) {
                    var l = n[t];
                    if (l !== e && l.form === e.form) {
                        var a = Pi(l);
                        if (!a)
                            throw Error(o(90));
                        it(l),
                        rl(l, a)
                    }
                }
            }
            break;
        case "textarea":
            bt(e, n);
            break;
        case "select":
            t = n.value,
            t != null && Pn(e, !!n.multiple, t, !1)
        }
    }
    ,
    sl = uu,
    rr = mr;
    var Fp = {
        usingClientEntryPoint: !1,
        Events: [Tl, Ir, Pi, ul, oi, uu]
    }
      , Vl = {
        findFiberByHostInstance: ar,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , zp = {
        bundleType: Vl.bundleType,
        version: Vl.version,
        rendererPackageName: Vl.rendererPackageName,
        rendererConfig: Vl.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: $.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = ze(e),
            e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Vl.findFiberByHostInstance || Op,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!fo.isDisabled && fo.supportsFiber)
            try {
                $e = fo.inject(zp),
                st = fo
            } catch {}
    }
    return Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fp,
    Rt.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!yu(t))
            throw Error(o(200));
        return Np(e, t, null, n)
    }
    ,
    Rt.createRoot = function(e, t) {
        if (!yu(e))
            throw Error(o(299));
        var n = !1
          , l = ""
          , a = Rf;
        return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        t = pu(e, 1, !1, null, null, n, !1, l, a),
        e[mn] = t.current,
        Cl(e.nodeType === 8 ? e.parentNode : e),
        new vu(t)
    }
    ,
    Rt.findDOMNode = function(e) {
        if (e == null)
            return null;
        if (e.nodeType === 1)
            return e;
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","),
            Error(o(268, e)));
        return e = ze(t),
        e = e === null ? null : e.stateNode,
        e
    }
    ,
    Rt.flushSync = function(e) {
        return mr(e)
    }
    ,
    Rt.hydrate = function(e, t, n) {
        if (!so(t))
            throw Error(o(200));
        return co(null, e, t, !0, n)
    }
    ,
    Rt.hydrateRoot = function(e, t, n) {
        if (!yu(e))
            throw Error(o(405));
        var l = n != null && n.hydratedSources || null
          , a = !1
          , u = ""
          , f = Rf;
        if (n != null && (n.unstable_strictMode === !0 && (a = !0),
        n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (f = n.onRecoverableError)),
        t = xf(t, null, e, 1, n ?? null, a, !1, u, f),
        e[mn] = t.current,
        Cl(e),
        l)
            for (e = 0; e < l.length; e++)
                n = l[e],
                a = n._getVersion,
                a = a(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
        return new uo(t)
    }
    ,
    Rt.render = function(e, t, n) {
        if (!so(t))
            throw Error(o(200));
        return co(null, e, t, !1, n)
    }
    ,
    Rt.unmountComponentAtNode = function(e) {
        if (!so(e))
            throw Error(o(40));
        return e._reactRootContainer ? (mr(function() {
            co(null, null, e, !1, function() {
                e._reactRootContainer = null,
                e[mn] = null
            })
        }),
        !0) : !1
    }
    ,
    Rt.unstable_batchedUpdates = uu,
    Rt.unstable_renderSubtreeIntoContainer = function(e, t, n, l) {
        if (!so(n))
            throw Error(o(200));
        if (e == null || e._reactInternals === void 0)
            throw Error(o(38));
        return co(e, t, n, !1, l)
    }
    ,
    Rt.version = "18.3.1-next-f1338f8080-20240426",
    Rt
}
var Mf;
function Qp() {
    if (Mf)
        return Su.exports;
    Mf = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (i) {
                console.error(i)
            }
    }
    return r(),
    Su.exports = Kp(),
    Su.exports
}
var fd = Qp();
const Yp = sd(fd)
  , Jp = ud({
    __proto__: null,
    default: Yp
}, [fd]);
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Qe() {
    return Qe = Object.assign ? Object.assign.bind() : function(r) {
        for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o)
                Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s])
        }
        return r
    }
    ,
    Qe.apply(this, arguments)
}
var et;
(function(r) {
    r.Pop = "POP",
    r.Push = "PUSH",
    r.Replace = "REPLACE"
}
)(et || (et = {}));
const Ff = "popstate";
function sg(r) {
    r === void 0 && (r = {});
    function i(s, c) {
        let {pathname: d, search: h, hash: m} = s.location;
        return Gl("", {
            pathname: d,
            search: h,
            hash: m
        }, c.state && c.state.usr || null, c.state && c.state.key || "default")
    }
    function o(s, c) {
        return typeof c == "string" ? c : er(c)
    }
    return Gp(i, o, null, r)
}
function ve(r, i) {
    if (r === !1 || r === null || typeof r > "u")
        throw new Error(i)
}
function br(r, i) {
    if (!r) {
        typeof console < "u" && console.warn(i);
        try {
            throw new Error(i)
        } catch {}
    }
}
function Xp() {
    return Math.random().toString(36).substr(2, 8)
}
function zf(r, i) {
    return {
        usr: r.state,
        key: r.key,
        idx: i
    }
}
function Gl(r, i, o, s) {
    return o === void 0 && (o = null),
    Qe({
        pathname: typeof r == "string" ? r : r.pathname,
        search: "",
        hash: ""
    }, typeof i == "string" ? _n(i) : i, {
        state: o,
        key: i && i.key || s || Xp()
    })
}
function er(r) {
    let {pathname: i="/", search: o="", hash: s=""} = r;
    return o && o !== "?" && (i += o.charAt(0) === "?" ? o : "?" + o),
    s && s !== "#" && (i += s.charAt(0) === "#" ? s : "#" + s),
    i
}
function _n(r) {
    let i = {};
    if (r) {
        let o = r.indexOf("#");
        o >= 0 && (i.hash = r.substr(o),
        r = r.substr(0, o));
        let s = r.indexOf("?");
        s >= 0 && (i.search = r.substr(s),
        r = r.substr(0, s)),
        r && (i.pathname = r)
    }
    return i
}
function Gp(r, i, o, s) {
    s === void 0 && (s = {});
    let {window: c=document.defaultView, v5Compat: d=!1} = s
      , h = c.history
      , m = et.Pop
      , p = null
      , v = E();
    v == null && (v = 0,
    h.replaceState(Qe({}, h.state, {
        idx: v
    }), ""));
    function E() {
        return (h.state || {
            idx: null
        }).idx
    }
    function y() {
        m = et.Pop;
        let z = E()
          , Q = z == null ? null : z - v;
        v = z,
        p && p({
            action: m,
            location: M.location,
            delta: Q
        })
    }
    function S(z, Q) {
        m = et.Push;
        let I = Gl(M.location, z, Q);
        v = E() + 1;
        let K = zf(I, v)
          , $ = M.createHref(I);
        try {
            h.pushState(K, "", $)
        } catch (q) {
            if (q instanceof DOMException && q.name === "DataCloneError")
                throw q;
            c.location.assign($)
        }
        d && p && p({
            action: m,
            location: M.location,
            delta: 1
        })
    }
    function N(z, Q) {
        m = et.Replace;
        let I = Gl(M.location, z, Q);
        v = E();
        let K = zf(I, v)
          , $ = M.createHref(I);
        h.replaceState(K, "", $),
        d && p && p({
            action: m,
            location: M.location,
            delta: 0
        })
    }
    function L(z) {
        let Q = c.location.origin !== "null" ? c.location.origin : c.location.href
          , I = typeof z == "string" ? z : er(z);
        return I = I.replace(/ $/, "%20"),
        ve(Q, "No window.location.(origin|href) available to create URL for href: " + I),
        new URL(I,Q)
    }
    let M = {
        get action() {
            return m
        },
        get location() {
            return r(c, h)
        },
        listen(z) {
            if (p)
                throw new Error("A history only accepts one active listener");
            return c.addEventListener(Ff, y),
            p = z,
            () => {
                c.removeEventListener(Ff, y),
                p = null
            }
        },
        createHref(z) {
            return i(c, z)
        },
        createURL: L,
        encodeLocation(z) {
            let Q = L(z);
            return {
                pathname: Q.pathname,
                search: Q.search,
                hash: Q.hash
            }
        },
        push: S,
        replace: N,
        go(z) {
            return h.go(z)
        }
    };
    return M
}
var Ie;
(function(r) {
    r.data = "data",
    r.deferred = "deferred",
    r.redirect = "redirect",
    r.error = "error"
}
)(Ie || (Ie = {}));
const Zp = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function qp(r) {
    return r.index === !0
}
function Ro(r, i, o, s) {
    return o === void 0 && (o = []),
    s === void 0 && (s = {}),
    r.map( (c, d) => {
        let h = [...o, String(d)]
          , m = typeof c.id == "string" ? c.id : h.join("-");
        if (ve(c.index !== !0 || !c.children, "Cannot specify children on an index route"),
        ve(!s[m], 'Found a route id collision on id "' + m + `".  Route id's must be globally unique within Data Router usages`),
        qp(c)) {
            let p = Qe({}, c, i(c), {
                id: m
            });
            return s[m] = p,
            p
        } else {
            let p = Qe({}, c, i(c), {
                id: m,
                children: void 0
            });
            return s[m] = p,
            c.children && (p.children = Ro(c.children, i, h, s)),
            p
        }
    }
    )
}
function kn(r, i, o) {
    return o === void 0 && (o = "/"),
    So(r, i, o, !1)
}
function So(r, i, o, s) {
    let c = typeof i == "string" ? _n(i) : i
      , d = $t(c.pathname || "/", o);
    if (d == null)
        return null;
    let h = hd(r);
    bp(h);
    let m = null;
    for (let p = 0; m == null && p < h.length; ++p) {
        let v = cm(d);
        m = um(h[p], v, s)
    }
    return m
}
function dd(r, i) {
    let {route: o, pathname: s, params: c} = r;
    return {
        id: o.id,
        pathname: s,
        params: c,
        data: i[o.id],
        handle: o.handle
    }
}
function hd(r, i, o, s) {
    i === void 0 && (i = []),
    o === void 0 && (o = []),
    s === void 0 && (s = "");
    let c = (d, h, m) => {
        let p = {
            relativePath: m === void 0 ? d.path || "" : m,
            caseSensitive: d.caseSensitive === !0,
            childrenIndex: h,
            route: d
        };
        p.relativePath.startsWith("/") && (ve(p.relativePath.startsWith(s), 'Absolute route path "' + p.relativePath + '" nested under path ' + ('"' + s + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        p.relativePath = p.relativePath.slice(s.length));
        let v = sn([s, p.relativePath])
          , E = o.concat(p);
        d.children && d.children.length > 0 && (ve(d.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + v + '".')),
        hd(d.children, i, E, v)),
        !(d.path == null && !d.index) && i.push({
            path: v,
            score: om(v, d.index),
            routesMeta: E
        })
    }
    ;
    return r.forEach( (d, h) => {
        var m;
        if (d.path === "" || !((m = d.path) != null && m.includes("?")))
            c(d, h);
        else
            for (let p of pd(d.path))
                c(d, h, p)
    }
    ),
    i
}
function pd(r) {
    let i = r.split("/");
    if (i.length === 0)
        return [];
    let[o,...s] = i
      , c = o.endsWith("?")
      , d = o.replace(/\?$/, "");
    if (s.length === 0)
        return c ? [d, ""] : [d];
    let h = pd(s.join("/"))
      , m = [];
    return m.push(...h.map(p => p === "" ? d : [d, p].join("/"))),
    c && m.push(...h),
    m.map(p => r.startsWith("/") && p === "" ? "/" : p)
}
function bp(r) {
    r.sort( (i, o) => i.score !== o.score ? o.score - i.score : am(i.routesMeta.map(s => s.childrenIndex), o.routesMeta.map(s => s.childrenIndex)))
}
const em = /^:[\w-]+$/
  , tm = 3
  , nm = 2
  , rm = 1
  , lm = 10
  , im = -2
  , jf = r => r === "*";
function om(r, i) {
    let o = r.split("/")
      , s = o.length;
    return o.some(jf) && (s += im),
    i && (s += nm),
    o.filter(c => !jf(c)).reduce( (c, d) => c + (em.test(d) ? tm : d === "" ? rm : lm), s)
}
function am(r, i) {
    return r.length === i.length && r.slice(0, -1).every( (s, c) => s === i[c]) ? r[r.length - 1] - i[i.length - 1] : 0
}
function um(r, i, o) {
    o === void 0 && (o = !1);
    let {routesMeta: s} = r
      , c = {}
      , d = "/"
      , h = [];
    for (let m = 0; m < s.length; ++m) {
        let p = s[m]
          , v = m === s.length - 1
          , E = d === "/" ? i : i.slice(d.length) || "/"
          , y = _o({
            path: p.relativePath,
            caseSensitive: p.caseSensitive,
            end: v
        }, E)
          , S = p.route;
        if (!y && v && o && !s[s.length - 1].route.index && (y = _o({
            path: p.relativePath,
            caseSensitive: p.caseSensitive,
            end: !1
        }, E)),
        !y)
            return null;
        Object.assign(c, y.params),
        h.push({
            params: c,
            pathname: sn([d, y.pathname]),
            pathnameBase: hm(sn([d, y.pathnameBase])),
            route: S
        }),
        y.pathnameBase !== "/" && (d = sn([d, y.pathnameBase]))
    }
    return h
}
function _o(r, i) {
    typeof r == "string" && (r = {
        path: r,
        caseSensitive: !1,
        end: !0
    });
    let[o,s] = sm(r.path, r.caseSensitive, r.end)
      , c = i.match(o);
    if (!c)
        return null;
    let d = c[0]
      , h = d.replace(/(.)\/+$/, "$1")
      , m = c.slice(1);
    return {
        params: s.reduce( (v, E, y) => {
            let {paramName: S, isOptional: N} = E;
            if (S === "*") {
                let M = m[y] || "";
                h = d.slice(0, d.length - M.length).replace(/(.)\/+$/, "$1")
            }
            const L = m[y];
            return N && !L ? v[S] = void 0 : v[S] = (L || "").replace(/%2F/g, "/"),
            v
        }
        , {}),
        pathname: d,
        pathnameBase: h,
        pattern: r
    }
}
function sm(r, i, o) {
    i === void 0 && (i = !1),
    o === void 0 && (o = !0),
    br(r === "*" || !r.endsWith("*") || r.endsWith("/*"), 'Route path "' + r + '" will be treated as if it were ' + ('"' + r.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + r.replace(/\*$/, "/*") + '".'));
    let s = []
      , c = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (h, m, p) => (s.push({
        paramName: m,
        isOptional: p != null
    }),
    p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return r.endsWith("*") ? (s.push({
        paramName: "*"
    }),
    c += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? c += "\\/*$" : r !== "" && r !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c,i ? void 0 : "i"), s]
}
function cm(r) {
    try {
        return r.split("/").map(i => decodeURIComponent(i).replace(/\//g, "%2F")).join("/")
    } catch (i) {
        return br(!1, 'The URL path "' + r + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + i + ").")),
        r
    }
}
function $t(r, i) {
    if (i === "/")
        return r;
    if (!r.toLowerCase().startsWith(i.toLowerCase()))
        return null;
    let o = i.endsWith("/") ? i.length - 1 : i.length
      , s = r.charAt(o);
    return s && s !== "/" ? null : r.slice(o) || "/"
}
function fm(r, i) {
    i === void 0 && (i = "/");
    let {pathname: o, search: s="", hash: c=""} = typeof r == "string" ? _n(r) : r;
    return {
        pathname: o ? o.startsWith("/") ? o : dm(o, i) : i,
        search: pm(s),
        hash: mm(c)
    }
}
function dm(r, i) {
    let o = i.replace(/\/+$/, "").split("/");
    return r.split("/").forEach(c => {
        c === ".." ? o.length > 1 && o.pop() : c !== "." && o.push(c)
    }
    ),
    o.length > 1 ? o.join("/") : "/"
}
function ku(r, i, o, s) {
    return "Cannot include a '" + r + "' character in a manually specified " + ("`to." + i + "` field [" + JSON.stringify(s) + "].  Please separate it out to the ") + ("`to." + o + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function md(r) {
    return r.filter( (i, o) => o === 0 || i.route.path && i.route.path.length > 0)
}
function Uu(r, i) {
    let o = md(r);
    return i ? o.map( (s, c) => c === o.length - 1 ? s.pathname : s.pathnameBase) : o.map(s => s.pathnameBase)
}
function Au(r, i, o, s) {
    s === void 0 && (s = !1);
    let c;
    typeof r == "string" ? c = _n(r) : (c = Qe({}, r),
    ve(!c.pathname || !c.pathname.includes("?"), ku("?", "pathname", "search", c)),
    ve(!c.pathname || !c.pathname.includes("#"), ku("#", "pathname", "hash", c)),
    ve(!c.search || !c.search.includes("#"), ku("#", "search", "hash", c)));
    let d = r === "" || c.pathname === "", h = d ? "/" : c.pathname, m;
    if (h == null)
        m = o;
    else {
        let y = i.length - 1;
        if (!s && h.startsWith("..")) {
            let S = h.split("/");
            for (; S[0] === ".."; )
                S.shift(),
                y -= 1;
            c.pathname = S.join("/")
        }
        m = y >= 0 ? i[y] : "/"
    }
    let p = fm(c, m)
      , v = h && h !== "/" && h.endsWith("/")
      , E = (d || h === ".") && o.endsWith("/");
    return !p.pathname.endsWith("/") && (v || E) && (p.pathname += "/"),
    p
}
const sn = r => r.join("/").replace(/\/\/+/g, "/")
  , hm = r => r.replace(/\/+$/, "").replace(/^\/*/, "/")
  , pm = r => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r
  , mm = r => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r;
class vm {
    constructor(i, o) {
        this.type = "DataWithResponseInit",
        this.data = i,
        this.init = o || null
    }
}
function ym(r, i) {
    return new vm(r,typeof i == "number" ? {
        status: i
    } : i)
}
class Co extends Error {
}
class gm {
    constructor(i, o) {
        this.pendingKeysSet = new Set,
        this.subscribers = new Set,
        this.deferredKeys = [],
        ve(i && typeof i == "object" && !Array.isArray(i), "defer() only accepts plain objects");
        let s;
        this.abortPromise = new Promise( (d, h) => s = h),
        this.controller = new AbortController;
        let c = () => s(new Co("Deferred data aborted"));
        this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", c),
        this.controller.signal.addEventListener("abort", c),
        this.data = Object.entries(i).reduce( (d, h) => {
            let[m,p] = h;
            return Object.assign(d, {
                [m]: this.trackPromise(m, p)
            })
        }
        , {}),
        this.done && this.unlistenAbortSignal(),
        this.init = o
    }
    trackPromise(i, o) {
        if (!(o instanceof Promise))
            return o;
        this.deferredKeys.push(i),
        this.pendingKeysSet.add(i);
        let s = Promise.race([o, this.abortPromise]).then(c => this.onSettle(s, i, void 0, c), c => this.onSettle(s, i, c));
        return s.catch( () => {}
        ),
        Object.defineProperty(s, "_tracked", {
            get: () => !0
        }),
        s
    }
    onSettle(i, o, s, c) {
        if (this.controller.signal.aborted && s instanceof Co)
            return this.unlistenAbortSignal(),
            Object.defineProperty(i, "_error", {
                get: () => s
            }),
            Promise.reject(s);
        if (this.pendingKeysSet.delete(o),
        this.done && this.unlistenAbortSignal(),
        s === void 0 && c === void 0) {
            let d = new Error('Deferred data for key "' + o + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
            return Object.defineProperty(i, "_error", {
                get: () => d
            }),
            this.emit(!1, o),
            Promise.reject(d)
        }
        return c === void 0 ? (Object.defineProperty(i, "_error", {
            get: () => s
        }),
        this.emit(!1, o),
        Promise.reject(s)) : (Object.defineProperty(i, "_data", {
            get: () => c
        }),
        this.emit(!1, o),
        c)
    }
    emit(i, o) {
        this.subscribers.forEach(s => s(i, o))
    }
    subscribe(i) {
        return this.subscribers.add(i),
        () => this.subscribers.delete(i)
    }
    cancel() {
        this.controller.abort(),
        this.pendingKeysSet.forEach( (i, o) => this.pendingKeysSet.delete(o)),
        this.emit(!0)
    }
    async resolveData(i) {
        let o = !1;
        if (!this.done) {
            let s = () => this.cancel();
            i.addEventListener("abort", s),
            o = await new Promise(c => {
                this.subscribe(d => {
                    i.removeEventListener("abort", s),
                    (d || this.done) && c(d)
                }
                )
            }
            )
        }
        return o
    }
    get done() {
        return this.pendingKeysSet.size === 0
    }
    get unwrappedData() {
        return ve(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds"),
        Object.entries(this.data).reduce( (i, o) => {
            let[s,c] = o;
            return Object.assign(i, {
                [s]: Sm(c)
            })
        }
        , {})
    }
    get pendingKeys() {
        return Array.from(this.pendingKeysSet)
    }
}
function wm(r) {
    return r instanceof Promise && r._tracked === !0
}
function Sm(r) {
    if (!wm(r))
        return r;
    if (r._error)
        throw r._error;
    return r._data
}
const vd = function(i, o) {
    o === void 0 && (o = 302);
    let s = o;
    typeof s == "number" ? s = {
        status: s
    } : typeof s.status > "u" && (s.status = 302);
    let c = new Headers(s.headers);
    return c.set("Location", i),
    new Response(null,Qe({}, s, {
        headers: c
    }))
};
class Er {
    constructor(i, o, s, c) {
        c === void 0 && (c = !1),
        this.status = i,
        this.statusText = o || "",
        this.internal = c,
        s instanceof Error ? (this.data = s.toString(),
        this.error = s) : this.data = s
    }
}
function xr(r) {
    return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data"in r
}
const yd = ["post", "put", "patch", "delete"]
  , Em = new Set(yd)
  , xm = ["get", ...yd]
  , km = new Set(xm)
  , Rm = new Set([301, 302, 303, 307, 308])
  , _m = new Set([307, 308])
  , Ru = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , gd = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , Kl = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
}
  , $u = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Cm = r => ({
    hasErrorBoundary: !!r.hasErrorBoundary
})
  , wd = "remix-router-transitions";
function cg(r) {
    const i = r.window ? r.window : typeof window < "u" ? window : void 0
      , o = typeof i < "u" && typeof i.document < "u" && typeof i.document.createElement < "u"
      , s = !o;
    ve(r.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let c;
    if (r.mapRouteProperties)
        c = r.mapRouteProperties;
    else if (r.detectErrorBoundary) {
        let x = r.detectErrorBoundary;
        c = C => ({
            hasErrorBoundary: x(C)
        })
    } else
        c = Cm;
    let d = {}, h = Ro(r.routes, c, void 0, d), m, p = r.basename || "/", v = r.dataStrategy || Dm, E = r.patchRoutesOnNavigation, y = Qe({
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1
    }, r.future), S = null, N = new Set, L = null, M = null, z = null, Q = r.hydrationData != null, I = kn(h, r.history.location, p), K = !1, $ = null;
    if (I == null && !E) {
        let x = _t(404, {
            pathname: r.history.location.pathname
        })
          , {matches: C, route: F} = Yf(h);
        I = C,
        $ = {
            [F.id]: x
        }
    }
    I && !r.hydrationData && rr(I, h, r.history.location.pathname).active && (I = null);
    let q;
    if (I)
        if (I.some(x => x.route.lazy))
            q = !1;
        else if (!I.some(x => x.route.loader))
            q = !0;
        else if (y.v7_partialHydration) {
            let x = r.hydrationData ? r.hydrationData.loaderData : null
              , C = r.hydrationData ? r.hydrationData.errors : null;
            if (C) {
                let F = I.findIndex(U => C[U.route.id] !== void 0);
                q = I.slice(0, F + 1).every(U => !Ou(U.route, x, C))
            } else
                q = I.every(F => !Ou(F.route, x, C))
        } else
            q = r.hydrationData != null;
    else if (q = !1,
    I = [],
    y.v7_partialHydration) {
        let x = rr(null, h, r.history.location.pathname);
        x.active && x.matches && (K = !0,
        I = x.matches)
    }
    let J, P = {
        historyAction: r.history.action,
        location: r.history.location,
        matches: I,
        initialized: q,
        navigation: Ru,
        restoreScrollPosition: r.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: r.hydrationData && r.hydrationData.loaderData || {},
        actionData: r.hydrationData && r.hydrationData.actionData || null,
        errors: r.hydrationData && r.hydrationData.errors || $,
        fetchers: new Map,
        blockers: new Map
    }, Y = et.Pop, he = !1, ue, Re = !1, Se = new Map, Me = null, Ue = !1, Fe = !1, Je = [], Ae = new Set, V = new Map, se = 0, G = -1, _ = new Map, j = new Set, me = new Map, we = new Map, ye = new Set, Ee = new Map, Ce = new Map, Pe;
    function Be() {
        if (S = r.history.listen(x => {
            let {action: C, location: F, delta: U} = x;
            if (Pe) {
                Pe(),
                Pe = void 0;
                return
            }
            br(Ce.size === 0 || U != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let X = Lr({
                currentLocation: P.location,
                nextLocation: F,
                historyAction: C
            });
            if (X && U != null) {
                let ae = new Promise(de => {
                    Pe = de
                }
                );
                r.history.go(U * -1),
                Dn(X, {
                    state: "blocked",
                    location: F,
                    proceed() {
                        Dn(X, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: F
                        }),
                        ae.then( () => r.history.go(U))
                    },
                    reset() {
                        let de = new Map(P.blockers);
                        de.set(X, Kl),
                        it({
                            blockers: de
                        })
                    }
                });
                return
            }
            return qt(C, F)
        }
        ),
        o) {
            Wm(i, Se);
            let x = () => Km(i, Se);
            i.addEventListener("pagehide", x),
            Me = () => i.removeEventListener("pagehide", x)
        }
        return P.initialized || qt(et.Pop, P.location, {
            initialHydration: !0
        }),
        J
    }
    function vt() {
        S && S(),
        Me && Me(),
        N.clear(),
        ue && ue.abort(),
        P.fetchers.forEach( (x, C) => en(C)),
        P.blockers.forEach( (x, C) => Pr(C))
    }
    function kr(x) {
        return N.add(x),
        () => N.delete(x)
    }
    function it(x, C) {
        C === void 0 && (C = {}),
        P = Qe({}, P, x);
        let F = []
          , U = [];
        y.v7_fetcherPersist && P.fetchers.forEach( (X, ae) => {
            X.state === "idle" && (ye.has(ae) ? U.push(ae) : F.push(ae))
        }
        ),
        ye.forEach(X => {
            !P.fetchers.has(X) && !V.has(X) && U.push(X)
        }
        ),
        [...N].forEach(X => X(P, {
            deletedFetchers: U,
            viewTransitionOpts: C.viewTransitionOpts,
            flushSync: C.flushSync === !0
        })),
        y.v7_fetcherPersist ? (F.forEach(X => P.fetchers.delete(X)),
        U.forEach(X => en(X))) : U.forEach(X => ye.delete(X))
    }
    function Bt(x, C, F) {
        var U, X;
        let {flushSync: ae} = F === void 0 ? {} : F, de = P.actionData != null && P.navigation.formMethod != null && Gt(P.navigation.formMethod) && P.navigation.state === "loading" && ((U = x.state) == null ? void 0 : U._isRedirect) !== !0, ne;
        C.actionData ? Object.keys(C.actionData).length > 0 ? ne = C.actionData : ne = null : de ? ne = P.actionData : ne = null;
        let le = C.loaderData ? Kf(P.loaderData, C.loaderData, C.matches || [], C.errors) : P.loaderData
          , b = P.blockers;
        b.size > 0 && (b = new Map(b),
        b.forEach( (ke, tt) => b.set(tt, Kl)));
        let te = he === !0 || P.navigation.formMethod != null && Gt(P.navigation.formMethod) && ((X = x.state) == null ? void 0 : X._isRedirect) !== !0;
        m && (h = m,
        m = void 0),
        Ue || Y === et.Pop || (Y === et.Push ? r.history.push(x, x.state) : Y === et.Replace && r.history.replace(x, x.state));
        let ge;
        if (Y === et.Pop) {
            let ke = Se.get(P.location.pathname);
            ke && ke.has(x.pathname) ? ge = {
                currentLocation: P.location,
                nextLocation: x
            } : Se.has(x.pathname) && (ge = {
                currentLocation: x,
                nextLocation: P.location
            })
        } else if (Re) {
            let ke = Se.get(P.location.pathname);
            ke ? ke.add(x.pathname) : (ke = new Set([x.pathname]),
            Se.set(P.location.pathname, ke)),
            ge = {
                currentLocation: P.location,
                nextLocation: x
            }
        }
        it(Qe({}, C, {
            actionData: ne,
            loaderData: le,
            historyAction: Y,
            location: x,
            initialized: !0,
            navigation: Ru,
            revalidation: "idle",
            restoreScrollPosition: sl(x, C.matches || P.matches),
            preventScrollReset: te,
            blockers: b
        }), {
            viewTransitionOpts: ge,
            flushSync: ae === !0
        }),
        Y = et.Pop,
        he = !1,
        Re = !1,
        Ue = !1,
        Fe = !1,
        Je = []
    }
    async function Rr(x, C) {
        if (typeof x == "number") {
            r.history.go(x);
            return
        }
        let F = Nu(P.location, P.matches, p, y.v7_prependBasename, x, y.v7_relativeSplatPath, C == null ? void 0 : C.fromRouteId, C == null ? void 0 : C.relative)
          , {path: U, submission: X, error: ae} = If(y.v7_normalizeFormMethod, !1, F, C)
          , de = P.location
          , ne = Gl(P.location, U, C && C.state);
        ne = Qe({}, ne, r.history.encodeLocation(ne));
        let le = C && C.replace != null ? C.replace : void 0
          , b = et.Push;
        le === !0 ? b = et.Replace : le === !1 || X != null && Gt(X.formMethod) && X.formAction === P.location.pathname + P.location.search && (b = et.Replace);
        let te = C && "preventScrollReset"in C ? C.preventScrollReset === !0 : void 0
          , ge = (C && C.flushSync) === !0
          , ke = Lr({
            currentLocation: de,
            nextLocation: ne,
            historyAction: b
        });
        if (ke) {
            Dn(ke, {
                state: "blocked",
                location: ne,
                proceed() {
                    Dn(ke, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: ne
                    }),
                    Rr(x, C)
                },
                reset() {
                    let tt = new Map(P.blockers);
                    tt.set(ke, Kl),
                    it({
                        blockers: tt
                    })
                }
            });
            return
        }
        return await qt(b, ne, {
            submission: X,
            pendingError: ae,
            preventScrollReset: te,
            replace: C && C.replace,
            enableViewTransition: C && C.viewTransition,
            flushSync: ge
        })
    }
    function ti() {
        if (nr(),
        it({
            revalidation: "loading"
        }),
        P.navigation.state !== "submitting") {
            if (P.navigation.state === "idle") {
                qt(P.historyAction, P.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            qt(Y || P.historyAction, P.navigation.location, {
                overrideNavigation: P.navigation,
                enableViewTransition: Re === !0
            })
        }
    }
    async function qt(x, C, F) {
        ue && ue.abort(),
        ue = null,
        Y = x,
        Ue = (F && F.startUninterruptedRevalidation) === !0,
        oi(P.location, P.matches),
        he = (F && F.preventScrollReset) === !0,
        Re = (F && F.enableViewTransition) === !0;
        let U = m || h
          , X = F && F.overrideNavigation
          , ae = F != null && F.initialHydration && P.matches && P.matches.length > 0 && !K ? P.matches : kn(U, C, p)
          , de = (F && F.flushSync) === !0;
        if (ae && P.initialized && !Fe && jm(P.location, C) && !(F && F.submission && Gt(F.submission.formMethod))) {
            Bt(C, {
                matches: ae
            }, {
                flushSync: de
            });
            return
        }
        let ne = rr(ae, U, C.pathname);
        if (ne.active && ne.matches && (ae = ne.matches),
        !ae) {
            let {error: ze, notFoundMatches: Le, route: Ve} = tn(C.pathname);
            Bt(C, {
                matches: Le,
                loaderData: {},
                errors: {
                    [Ve.id]: ze
                }
            }, {
                flushSync: de
            });
            return
        }
        ue = new AbortController;
        let le = qr(r.history, C, ue.signal, F && F.submission), b;
        if (F && F.pendingError)
            b = [wr(ae).route.id, {
                type: Ie.error,
                error: F.pendingError
            }];
        else if (F && F.submission && Gt(F.submission.formMethod)) {
            let ze = await rl(le, C, F.submission, ae, ne.active, {
                replace: F.replace,
                flushSync: de
            });
            if (ze.shortCircuited)
                return;
            if (ze.pendingActionResult) {
                let[Le,Ve] = ze.pendingActionResult;
                if (Nt(Ve) && xr(Ve.error) && Ve.error.status === 404) {
                    ue = null,
                    Bt(C, {
                        matches: ze.matches,
                        loaderData: {},
                        errors: {
                            [Le]: Ve.error
                        }
                    });
                    return
                }
            }
            ae = ze.matches || ae,
            b = ze.pendingActionResult,
            X = _u(C, F.submission),
            de = !1,
            ne.active = !1,
            le = qr(r.history, le.url, le.signal)
        }
        let {shortCircuited: te, matches: ge, loaderData: ke, errors: tt} = await ni(le, C, ae, ne.active, X, F && F.submission, F && F.fetcherSubmission, F && F.replace, F && F.initialHydration === !0, de, b);
        te || (ue = null,
        Bt(C, Qe({
            matches: ge || ae
        }, Qf(b), {
            loaderData: ke,
            errors: tt
        })))
    }
    async function rl(x, C, F, U, X, ae) {
        ae === void 0 && (ae = {}),
        nr();
        let de = Hm(C, F);
        if (it({
            navigation: de
        }, {
            flushSync: ae.flushSync === !0
        }),
        X) {
            let b = await Nn(U, C.pathname, x.signal);
            if (b.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (b.type === "error") {
                let te = wr(b.partialMatches).route.id;
                return {
                    matches: b.partialMatches,
                    pendingActionResult: [te, {
                        type: Ie.error,
                        error: b.error
                    }]
                }
            } else if (b.matches)
                U = b.matches;
            else {
                let {notFoundMatches: te, error: ge, route: ke} = tn(C.pathname);
                return {
                    matches: te,
                    pendingActionResult: [ke.id, {
                        type: Ie.error,
                        error: ge
                    }]
                }
            }
        }
        let ne, le = Xl(U, C);
        if (!le.route.action && !le.route.lazy)
            ne = {
                type: Ie.error,
                error: _t(405, {
                    method: x.method,
                    pathname: C.pathname,
                    routeId: le.route.id
                })
            };
        else if (ne = (await Ln("action", P, x, [le], U, null))[le.route.id],
        x.signal.aborted)
            return {
                shortCircuited: !0
            };
        if (Sr(ne)) {
            let b;
            return ae && ae.replace != null ? b = ae.replace : b = Hf(ne.response.headers.get("Location"), new URL(x.url), p) === P.location.pathname + P.location.search,
            await bt(x, ne, !0, {
                submission: F,
                replace: b
            }),
            {
                shortCircuited: !0
            }
        }
        if (bn(ne))
            throw _t(400, {
                type: "defer-action"
            });
        if (Nt(ne)) {
            let b = wr(U, le.route.id);
            return (ae && ae.replace) !== !0 && (Y = et.Push),
            {
                matches: U,
                pendingActionResult: [b.route.id, ne]
            }
        }
        return {
            matches: U,
            pendingActionResult: [le.route.id, ne]
        }
    }
    async function ni(x, C, F, U, X, ae, de, ne, le, b, te) {
        let ge = X || _u(C, ae)
          , ke = ae || de || Xf(ge)
          , tt = !Ue && (!y.v7_partialHydration || !le);
        if (U) {
            if (tt) {
                let $e = _r(te);
                it(Qe({
                    navigation: ge
                }, $e !== void 0 ? {
                    actionData: $e
                } : {}), {
                    flushSync: b
                })
            }
            let _e = await Nn(F, C.pathname, x.signal);
            if (_e.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (_e.type === "error") {
                let $e = wr(_e.partialMatches).route.id;
                return {
                    matches: _e.partialMatches,
                    loaderData: {},
                    errors: {
                        [$e]: _e.error
                    }
                }
            } else if (_e.matches)
                F = _e.matches;
            else {
                let {error: $e, notFoundMatches: st, route: or} = tn(C.pathname);
                return {
                    matches: st,
                    loaderData: {},
                    errors: {
                        [or.id]: $e
                    }
                }
            }
        }
        let ze = m || h
          , [Le,Ve] = Af(r.history, P, F, ke, C, y.v7_partialHydration && le === !0, y.v7_skipActionErrorRevalidation, Fe, Je, Ae, ye, me, j, ze, p, te);
        if (nn(_e => !(F && F.some($e => $e.route.id === _e)) || Le && Le.some($e => $e.route.id === _e)),
        G = ++se,
        Le.length === 0 && Ve.length === 0) {
            let _e = li();
            return Bt(C, Qe({
                matches: F,
                loaderData: {},
                errors: te && Nt(te[1]) ? {
                    [te[0]]: te[1].error
                } : null
            }, Qf(te), _e ? {
                fetchers: new Map(P.fetchers)
            } : {}), {
                flushSync: b
            }),
            {
                shortCircuited: !0
            }
        }
        if (tt) {
            let _e = {};
            if (!U) {
                _e.navigation = ge;
                let $e = _r(te);
                $e !== void 0 && (_e.actionData = $e)
            }
            Ve.length > 0 && (_e.fetchers = tr(Ve)),
            it(_e, {
                flushSync: b
            })
        }
        Ve.forEach(_e => {
            Ht(_e.key),
            _e.controller && V.set(_e.key, _e.controller)
        }
        );
        let dn = () => Ve.forEach(_e => Ht(_e.key));
        ue && ue.signal.addEventListener("abort", dn);
        let {loaderResults: ir, fetcherResults: Vt} = await il(P, F, Le, Ve, x);
        if (x.signal.aborted)
            return {
                shortCircuited: !0
            };
        ue && ue.signal.removeEventListener("abort", dn),
        Ve.forEach(_e => V.delete(_e.key));
        let De = po(ir);
        if (De)
            return await bt(x, De.result, !0, {
                replace: ne
            }),
            {
                shortCircuited: !0
            };
        if (De = po(Vt),
        De)
            return j.add(De.key),
            await bt(x, De.result, !0, {
                replace: ne
            }),
            {
                shortCircuited: !0
            };
        let {loaderData: cl, errors: hn} = Wf(P, F, ir, te, Ve, Vt, Ee);
        Ee.forEach( (_e, $e) => {
            _e.subscribe(st => {
                (st || _e.done) && Ee.delete($e)
            }
            )
        }
        ),
        y.v7_partialHydration && le && P.errors && (hn = Qe({}, P.errors, hn));
        let rn = li()
          , pn = Cr(G)
          , Tr = rn || pn || Ve.length > 0;
        return Qe({
            matches: F,
            loaderData: cl,
            errors: hn
        }, Tr ? {
            fetchers: new Map(P.fetchers)
        } : {})
    }
    function _r(x) {
        if (x && !Nt(x[1]))
            return {
                [x[0]]: x[1].data
            };
        if (P.actionData)
            return Object.keys(P.actionData).length === 0 ? null : P.actionData
    }
    function tr(x) {
        return x.forEach(C => {
            let F = P.fetchers.get(C.key)
              , U = Ql(void 0, F ? F.data : void 0);
            P.fetchers.set(C.key, U)
        }
        ),
        new Map(P.fetchers)
    }
    function Pn(x, C, F, U) {
        if (s)
            throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        Ht(x);
        let X = (U && U.flushSync) === !0
          , ae = m || h
          , de = Nu(P.location, P.matches, p, y.v7_prependBasename, F, y.v7_relativeSplatPath, C, U == null ? void 0 : U.relative)
          , ne = kn(ae, de, p)
          , le = rr(ne, ae, de);
        if (le.active && le.matches && (ne = le.matches),
        !ne) {
            Ot(x, C, _t(404, {
                pathname: de
            }), {
                flushSync: X
            });
            return
        }
        let {path: b, submission: te, error: ge} = If(y.v7_normalizeFormMethod, !0, de, U);
        if (ge) {
            Ot(x, C, ge, {
                flushSync: X
            });
            return
        }
        let ke = Xl(ne, b)
          , tt = (U && U.preventScrollReset) === !0;
        if (te && Gt(te.formMethod)) {
            ll(x, C, b, ke, ne, le.active, X, tt, te);
            return
        }
        me.set(x, {
            routeId: C,
            path: b
        }),
        ri(x, C, b, ke, ne, le.active, X, tt, te)
    }
    async function ll(x, C, F, U, X, ae, de, ne, le) {
        nr(),
        me.delete(x);
        function b(Ne) {
            if (!Ne.route.action && !Ne.route.lazy) {
                let On = _t(405, {
                    method: le.formMethod,
                    pathname: F,
                    routeId: C
                });
                return Ot(x, C, On, {
                    flushSync: de
                }),
                !0
            }
            return !1
        }
        if (!ae && b(U))
            return;
        let te = P.fetchers.get(x);
        Ct(x, Vm(le, te), {
            flushSync: de
        });
        let ge = new AbortController
          , ke = qr(r.history, F, ge.signal, le);
        if (ae) {
            let Ne = await Nn(X, new URL(ke.url).pathname, ke.signal, x);
            if (Ne.type === "aborted")
                return;
            if (Ne.type === "error") {
                Ot(x, C, Ne.error, {
                    flushSync: de
                });
                return
            } else if (Ne.matches) {
                if (X = Ne.matches,
                U = Xl(X, F),
                b(U))
                    return
            } else {
                Ot(x, C, _t(404, {
                    pathname: F
                }), {
                    flushSync: de
                });
                return
            }
        }
        V.set(x, ge);
        let tt = se
          , Le = (await Ln("action", P, ke, [U], X, x))[U.route.id];
        if (ke.signal.aborted) {
            V.get(x) === ge && V.delete(x);
            return
        }
        if (y.v7_fetcherPersist && ye.has(x)) {
            if (Sr(Le) || Nt(Le)) {
                Ct(x, qn(void 0));
                return
            }
        } else {
            if (Sr(Le))
                if (V.delete(x),
                G > tt) {
                    Ct(x, qn(void 0));
                    return
                } else
                    return j.add(x),
                    Ct(x, Ql(le)),
                    bt(ke, Le, !1, {
                        fetcherSubmission: le,
                        preventScrollReset: ne
                    });
            if (Nt(Le)) {
                Ot(x, C, Le.error);
                return
            }
        }
        if (bn(Le))
            throw _t(400, {
                type: "defer-action"
            });
        let Ve = P.navigation.location || P.location
          , dn = qr(r.history, Ve, ge.signal)
          , ir = m || h
          , Vt = P.navigation.state !== "idle" ? kn(ir, P.navigation.location, p) : P.matches;
        ve(Vt, "Didn't find any matches after fetcher action");
        let De = ++se;
        _.set(x, De);
        let cl = Ql(le, Le.data);
        P.fetchers.set(x, cl);
        let[hn,rn] = Af(r.history, P, Vt, le, Ve, !1, y.v7_skipActionErrorRevalidation, Fe, Je, Ae, ye, me, j, ir, p, [U.route.id, Le]);
        rn.filter(Ne => Ne.key !== x).forEach(Ne => {
            let On = Ne.key
              , ui = P.fetchers.get(On)
              , Uo = Ql(void 0, ui ? ui.data : void 0);
            P.fetchers.set(On, Uo),
            Ht(On),
            Ne.controller && V.set(On, Ne.controller)
        }
        ),
        it({
            fetchers: new Map(P.fetchers)
        });
        let pn = () => rn.forEach(Ne => Ht(Ne.key));
        ge.signal.addEventListener("abort", pn);
        let {loaderResults: Tr, fetcherResults: _e} = await il(P, Vt, hn, rn, dn);
        if (ge.signal.aborted)
            return;
        ge.signal.removeEventListener("abort", pn),
        _.delete(x),
        V.delete(x),
        rn.forEach(Ne => V.delete(Ne.key));
        let $e = po(Tr);
        if ($e)
            return bt(dn, $e.result, !1, {
                preventScrollReset: ne
            });
        if ($e = po(_e),
        $e)
            return j.add($e.key),
            bt(dn, $e.result, !1, {
                preventScrollReset: ne
            });
        let {loaderData: st, errors: or} = Wf(P, Vt, Tr, void 0, rn, _e, Ee);
        if (P.fetchers.has(x)) {
            let Ne = qn(Le.data);
            P.fetchers.set(x, Ne)
        }
        Cr(De),
        P.navigation.state === "loading" && De > G ? (ve(Y, "Expected pending action"),
        ue && ue.abort(),
        Bt(P.navigation.location, {
            matches: Vt,
            loaderData: st,
            errors: or,
            fetchers: new Map(P.fetchers)
        })) : (it({
            errors: or,
            loaderData: Kf(P.loaderData, st, Vt, or),
            fetchers: new Map(P.fetchers)
        }),
        Fe = !1)
    }
    async function ri(x, C, F, U, X, ae, de, ne, le) {
        let b = P.fetchers.get(x);
        Ct(x, Ql(le, b ? b.data : void 0), {
            flushSync: de
        });
        let te = new AbortController
          , ge = qr(r.history, F, te.signal);
        if (ae) {
            let Le = await Nn(X, new URL(ge.url).pathname, ge.signal, x);
            if (Le.type === "aborted")
                return;
            if (Le.type === "error") {
                Ot(x, C, Le.error, {
                    flushSync: de
                });
                return
            } else if (Le.matches)
                X = Le.matches,
                U = Xl(X, F);
            else {
                Ot(x, C, _t(404, {
                    pathname: F
                }), {
                    flushSync: de
                });
                return
            }
        }
        V.set(x, te);
        let ke = se
          , ze = (await Ln("loader", P, ge, [U], X, x))[U.route.id];
        if (bn(ze) && (ze = await Bu(ze, ge.signal, !0) || ze),
        V.get(x) === te && V.delete(x),
        !ge.signal.aborted) {
            if (ye.has(x)) {
                Ct(x, qn(void 0));
                return
            }
            if (Sr(ze))
                if (G > ke) {
                    Ct(x, qn(void 0));
                    return
                } else {
                    j.add(x),
                    await bt(ge, ze, !1, {
                        preventScrollReset: ne
                    });
                    return
                }
            if (Nt(ze)) {
                Ot(x, C, ze.error);
                return
            }
            ve(!bn(ze), "Unhandled fetcher deferred data"),
            Ct(x, qn(ze.data))
        }
    }
    async function bt(x, C, F, U) {
        let {submission: X, fetcherSubmission: ae, preventScrollReset: de, replace: ne} = U === void 0 ? {} : U;
        C.response.headers.has("X-Remix-Revalidate") && (Fe = !0);
        let le = C.response.headers.get("Location");
        ve(le, "Expected a Location header on the redirect Response"),
        le = Hf(le, new URL(x.url), p);
        let b = Gl(P.location, le, {
            _isRedirect: !0
        });
        if (o) {
            let Le = !1;
            if (C.response.headers.has("X-Remix-Reload-Document"))
                Le = !0;
            else if ($u.test(le)) {
                const Ve = r.history.createURL(le);
                Le = Ve.origin !== i.location.origin || $t(Ve.pathname, p) == null
            }
            if (Le) {
                ne ? i.location.replace(le) : i.location.assign(le);
                return
            }
        }
        ue = null;
        let te = ne === !0 || C.response.headers.has("X-Remix-Replace") ? et.Replace : et.Push
          , {formMethod: ge, formAction: ke, formEncType: tt} = P.navigation;
        !X && !ae && ge && ke && tt && (X = Xf(P.navigation));
        let ze = X || ae;
        if (_m.has(C.response.status) && ze && Gt(ze.formMethod))
            await qt(te, b, {
                submission: Qe({}, ze, {
                    formAction: le
                }),
                preventScrollReset: de || he,
                enableViewTransition: F ? Re : void 0
            });
        else {
            let Le = _u(b, X);
            await qt(te, b, {
                overrideNavigation: Le,
                fetcherSubmission: ae,
                preventScrollReset: de || he,
                enableViewTransition: F ? Re : void 0
            })
        }
    }
    async function Ln(x, C, F, U, X, ae) {
        let de, ne = {};
        try {
            de = await Nm(v, x, C, F, U, X, ae, d, c)
        } catch (le) {
            return U.forEach(b => {
                ne[b.route.id] = {
                    type: Ie.error,
                    error: le
                }
            }
            ),
            ne
        }
        for (let[le,b] of Object.entries(de))
            if (Im(b)) {
                let te = b.result;
                ne[le] = {
                    type: Ie.redirect,
                    response: Fm(te, F, le, X, p, y.v7_relativeSplatPath)
                }
            } else
                ne[le] = await Mm(b);
        return ne
    }
    async function il(x, C, F, U, X) {
        let ae = x.matches
          , de = Ln("loader", x, X, F, C, null)
          , ne = Promise.all(U.map(async te => {
            if (te.matches && te.match && te.controller) {
                let ke = (await Ln("loader", x, qr(r.history, te.path, te.controller.signal), [te.match], te.matches, te.key))[te.match.route.id];
                return {
                    [te.key]: ke
                }
            } else
                return Promise.resolve({
                    [te.key]: {
                        type: Ie.error,
                        error: _t(404, {
                            pathname: te.path
                        })
                    }
                })
        }
        ))
          , le = await de
          , b = (await ne).reduce( (te, ge) => Object.assign(te, ge), {});
        return await Promise.all([$m(C, le, X.signal, ae, x.loaderData), Bm(C, b, U)]),
        {
            loaderResults: le,
            fetcherResults: b
        }
    }
    function nr() {
        Fe = !0,
        Je.push(...nn()),
        me.forEach( (x, C) => {
            V.has(C) && Ae.add(C),
            Ht(C)
        }
        )
    }
    function Ct(x, C, F) {
        F === void 0 && (F = {}),
        P.fetchers.set(x, C),
        it({
            fetchers: new Map(P.fetchers)
        }, {
            flushSync: (F && F.flushSync) === !0
        })
    }
    function Ot(x, C, F, U) {
        U === void 0 && (U = {});
        let X = wr(P.matches, C);
        en(x),
        it({
            errors: {
                [X.route.id]: F
            },
            fetchers: new Map(P.fetchers)
        }, {
            flushSync: (U && U.flushSync) === !0
        })
    }
    function Tn(x) {
        return we.set(x, (we.get(x) || 0) + 1),
        ye.has(x) && ye.delete(x),
        P.fetchers.get(x) || gd
    }
    function en(x) {
        let C = P.fetchers.get(x);
        V.has(x) && !(C && C.state === "loading" && _.has(x)) && Ht(x),
        me.delete(x),
        _.delete(x),
        j.delete(x),
        y.v7_fetcherPersist && ye.delete(x),
        Ae.delete(x),
        P.fetchers.delete(x)
    }
    function Io(x) {
        let C = (we.get(x) || 0) - 1;
        C <= 0 ? (we.delete(x),
        ye.add(x),
        y.v7_fetcherPersist || en(x)) : we.set(x, C),
        it({
            fetchers: new Map(P.fetchers)
        })
    }
    function Ht(x) {
        let C = V.get(x);
        C && (C.abort(),
        V.delete(x))
    }
    function ol(x) {
        for (let C of x) {
            let F = Tn(C)
              , U = qn(F.data);
            P.fetchers.set(C, U)
        }
    }
    function li() {
        let x = []
          , C = !1;
        for (let F of j) {
            let U = P.fetchers.get(F);
            ve(U, "Expected fetcher: " + F),
            U.state === "loading" && (j.delete(F),
            x.push(F),
            C = !0)
        }
        return ol(x),
        C
    }
    function Cr(x) {
        let C = [];
        for (let[F,U] of _)
            if (U < x) {
                let X = P.fetchers.get(F);
                ve(X, "Expected fetcher: " + F),
                X.state === "loading" && (Ht(F),
                _.delete(F),
                C.push(F))
            }
        return ol(C),
        C.length > 0
    }
    function al(x, C) {
        let F = P.blockers.get(x) || Kl;
        return Ce.get(x) !== C && Ce.set(x, C),
        F
    }
    function Pr(x) {
        P.blockers.delete(x),
        Ce.delete(x)
    }
    function Dn(x, C) {
        let F = P.blockers.get(x) || Kl;
        ve(F.state === "unblocked" && C.state === "blocked" || F.state === "blocked" && C.state === "blocked" || F.state === "blocked" && C.state === "proceeding" || F.state === "blocked" && C.state === "unblocked" || F.state === "proceeding" && C.state === "unblocked", "Invalid blocker state transition: " + F.state + " -> " + C.state);
        let U = new Map(P.blockers);
        U.set(x, C),
        it({
            blockers: U
        })
    }
    function Lr(x) {
        let {currentLocation: C, nextLocation: F, historyAction: U} = x;
        if (Ce.size === 0)
            return;
        Ce.size > 1 && br(!1, "A router only supports one blocker at a time");
        let X = Array.from(Ce.entries())
          , [ae,de] = X[X.length - 1]
          , ne = P.blockers.get(ae);
        if (!(ne && ne.state === "proceeding") && de({
            currentLocation: C,
            nextLocation: F,
            historyAction: U
        }))
            return ae
    }
    function tn(x) {
        let C = _t(404, {
            pathname: x
        })
          , F = m || h
          , {matches: U, route: X} = Yf(F);
        return nn(),
        {
            notFoundMatches: U,
            route: X,
            error: C
        }
    }
    function nn(x) {
        let C = [];
        return Ee.forEach( (F, U) => {
            (!x || x(U)) && (F.cancel(),
            C.push(U),
            Ee.delete(U))
        }
        ),
        C
    }
    function ii(x, C, F) {
        if (L = x,
        z = C,
        M = F || null,
        !Q && P.navigation === Ru) {
            Q = !0;
            let U = sl(P.location, P.matches);
            U != null && it({
                restoreScrollPosition: U
            })
        }
        return () => {
            L = null,
            z = null,
            M = null
        }
    }
    function ul(x, C) {
        return M && M(x, C.map(U => dd(U, P.loaderData))) || x.key
    }
    function oi(x, C) {
        if (L && z) {
            let F = ul(x, C);
            L[F] = z()
        }
    }
    function sl(x, C) {
        if (L) {
            let F = ul(x, C)
              , U = L[F];
            if (typeof U == "number")
                return U
        }
        return null
    }
    function rr(x, C, F) {
        if (E)
            if (x) {
                if (Object.keys(x[0].params).length > 0)
                    return {
                        active: !0,
                        matches: So(C, F, p, !0)
                    }
            } else
                return {
                    active: !0,
                    matches: So(C, F, p, !0) || []
                };
        return {
            active: !1,
            matches: null
        }
    }
    async function Nn(x, C, F, U) {
        if (!E)
            return {
                type: "success",
                matches: x
            };
        let X = x;
        for (; ; ) {
            let ae = m == null
              , de = m || h
              , ne = d;
            try {
                await E({
                    signal: F,
                    path: C,
                    matches: X,
                    fetcherKey: U,
                    patch: (te, ge) => {
                        F.aborted || Bf(te, ge, de, ne, c)
                    }
                })
            } catch (te) {
                return {
                    type: "error",
                    error: te,
                    partialMatches: X
                }
            } finally {
                ae && !F.aborted && (h = [...h])
            }
            if (F.aborted)
                return {
                    type: "aborted"
                };
            let le = kn(de, C, p);
            if (le)
                return {
                    type: "success",
                    matches: le
                };
            let b = So(de, C, p, !0);
            if (!b || X.length === b.length && X.every( (te, ge) => te.route.id === b[ge].route.id))
                return {
                    type: "success",
                    matches: null
                };
            X = b
        }
    }
    function ai(x) {
        d = {},
        m = Ro(x, c, void 0, d)
    }
    function lr(x, C) {
        let F = m == null;
        Bf(x, C, m || h, d, c),
        F && (h = [...h],
        it({}))
    }
    return J = {
        get basename() {
            return p
        },
        get future() {
            return y
        },
        get state() {
            return P
        },
        get routes() {
            return h
        },
        get window() {
            return i
        },
        initialize: Be,
        subscribe: kr,
        enableScrollRestoration: ii,
        navigate: Rr,
        fetch: Pn,
        revalidate: ti,
        createHref: x => r.history.createHref(x),
        encodeLocation: x => r.history.encodeLocation(x),
        getFetcher: Tn,
        deleteFetcher: Io,
        dispose: vt,
        getBlocker: al,
        deleteBlocker: Pr,
        patchRoutes: lr,
        _internalFetchControllers: V,
        _internalActiveDeferreds: Ee,
        _internalSetRoutes: ai
    },
    J
}
function Pm(r) {
    return r != null && ("formData"in r && r.formData != null || "body"in r && r.body !== void 0)
}
function Nu(r, i, o, s, c, d, h, m) {
    let p, v;
    if (h) {
        p = [];
        for (let y of i)
            if (p.push(y),
            y.route.id === h) {
                v = y;
                break
            }
    } else
        p = i,
        v = i[i.length - 1];
    let E = Au(c || ".", Uu(p, d), $t(r.pathname, o) || r.pathname, m === "path");
    if (c == null && (E.search = r.search,
    E.hash = r.hash),
    (c == null || c === "" || c === ".") && v) {
        let y = Hu(E.search);
        if (v.route.index && !y)
            E.search = E.search ? E.search.replace(/^\?/, "?index&") : "?index";
        else if (!v.route.index && y) {
            let S = new URLSearchParams(E.search)
              , N = S.getAll("index");
            S.delete("index"),
            N.filter(M => M).forEach(M => S.append("index", M));
            let L = S.toString();
            E.search = L ? "?" + L : ""
        }
    }
    return s && o !== "/" && (E.pathname = E.pathname === "/" ? o : sn([o, E.pathname])),
    er(E)
}
function If(r, i, o, s) {
    if (!s || !Pm(s))
        return {
            path: o
        };
    if (s.formMethod && !Am(s.formMethod))
        return {
            path: o,
            error: _t(405, {
                method: s.formMethod
            })
        };
    let c = () => ({
        path: o,
        error: _t(400, {
            type: "invalid-body"
        })
    })
      , d = s.formMethod || "get"
      , h = r ? d.toUpperCase() : d.toLowerCase()
      , m = xd(o);
    if (s.body !== void 0) {
        if (s.formEncType === "text/plain") {
            if (!Gt(h))
                return c();
            let S = typeof s.body == "string" ? s.body : s.body instanceof FormData || s.body instanceof URLSearchParams ? Array.from(s.body.entries()).reduce( (N, L) => {
                let[M,z] = L;
                return "" + N + M + "=" + z + `
`
            }
            , "") : String(s.body);
            return {
                path: o,
                submission: {
                    formMethod: h,
                    formAction: m,
                    formEncType: s.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: S
                }
            }
        } else if (s.formEncType === "application/json") {
            if (!Gt(h))
                return c();
            try {
                let S = typeof s.body == "string" ? JSON.parse(s.body) : s.body;
                return {
                    path: o,
                    submission: {
                        formMethod: h,
                        formAction: m,
                        formEncType: s.formEncType,
                        formData: void 0,
                        json: S,
                        text: void 0
                    }
                }
            } catch {
                return c()
            }
        }
    }
    ve(typeof FormData == "function", "FormData is not available in this environment");
    let p, v;
    if (s.formData)
        p = Mu(s.formData),
        v = s.formData;
    else if (s.body instanceof FormData)
        p = Mu(s.body),
        v = s.body;
    else if (s.body instanceof URLSearchParams)
        p = s.body,
        v = Vf(p);
    else if (s.body == null)
        p = new URLSearchParams,
        v = new FormData;
    else
        try {
            p = new URLSearchParams(s.body),
            v = Vf(p)
        } catch {
            return c()
        }
    let E = {
        formMethod: h,
        formAction: m,
        formEncType: s && s.formEncType || "application/x-www-form-urlencoded",
        formData: v,
        json: void 0,
        text: void 0
    };
    if (Gt(E.formMethod))
        return {
            path: o,
            submission: E
        };
    let y = _n(o);
    return i && y.search && Hu(y.search) && p.append("index", ""),
    y.search = "?" + p,
    {
        path: er(y),
        submission: E
    }
}
function Uf(r, i, o) {
    o === void 0 && (o = !1);
    let s = r.findIndex(c => c.route.id === i);
    return s >= 0 ? r.slice(0, o ? s + 1 : s) : r
}
function Af(r, i, o, s, c, d, h, m, p, v, E, y, S, N, L, M) {
    let z = M ? Nt(M[1]) ? M[1].error : M[1].data : void 0
      , Q = r.createURL(i.location)
      , I = r.createURL(c)
      , K = o;
    d && i.errors ? K = Uf(o, Object.keys(i.errors)[0], !0) : M && Nt(M[1]) && (K = Uf(o, M[0]));
    let $ = M ? M[1].statusCode : void 0
      , q = h && $ && $ >= 400
      , J = K.filter( (Y, he) => {
        let {route: ue} = Y;
        if (ue.lazy)
            return !0;
        if (ue.loader == null)
            return !1;
        if (d)
            return Ou(ue, i.loaderData, i.errors);
        if (Lm(i.loaderData, i.matches[he], Y) || p.some(Me => Me === Y.route.id))
            return !0;
        let Re = i.matches[he]
          , Se = Y;
        return $f(Y, Qe({
            currentUrl: Q,
            currentParams: Re.params,
            nextUrl: I,
            nextParams: Se.params
        }, s, {
            actionResult: z,
            actionStatus: $,
            defaultShouldRevalidate: q ? !1 : m || Q.pathname + Q.search === I.pathname + I.search || Q.search !== I.search || Sd(Re, Se)
        }))
    }
    )
      , P = [];
    return y.forEach( (Y, he) => {
        if (d || !o.some(Ue => Ue.route.id === Y.routeId) || E.has(he))
            return;
        let ue = kn(N, Y.path, L);
        if (!ue) {
            P.push({
                key: he,
                routeId: Y.routeId,
                path: Y.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let Re = i.fetchers.get(he)
          , Se = Xl(ue, Y.path)
          , Me = !1;
        S.has(he) ? Me = !1 : v.has(he) ? (v.delete(he),
        Me = !0) : Re && Re.state !== "idle" && Re.data === void 0 ? Me = m : Me = $f(Se, Qe({
            currentUrl: Q,
            currentParams: i.matches[i.matches.length - 1].params,
            nextUrl: I,
            nextParams: o[o.length - 1].params
        }, s, {
            actionResult: z,
            actionStatus: $,
            defaultShouldRevalidate: q ? !1 : m
        })),
        Me && P.push({
            key: he,
            routeId: Y.routeId,
            path: Y.path,
            matches: ue,
            match: Se,
            controller: new AbortController
        })
    }
    ),
    [J, P]
}
function Ou(r, i, o) {
    if (r.lazy)
        return !0;
    if (!r.loader)
        return !1;
    let s = i != null && i[r.id] !== void 0
      , c = o != null && o[r.id] !== void 0;
    return !s && c ? !1 : typeof r.loader == "function" && r.loader.hydrate === !0 ? !0 : !s && !c
}
function Lm(r, i, o) {
    let s = !i || o.route.id !== i.route.id
      , c = r[o.route.id] === void 0;
    return s || c
}
function Sd(r, i) {
    let o = r.route.path;
    return r.pathname !== i.pathname || o != null && o.endsWith("*") && r.params["*"] !== i.params["*"]
}
function $f(r, i) {
    if (r.route.shouldRevalidate) {
        let o = r.route.shouldRevalidate(i);
        if (typeof o == "boolean")
            return o
    }
    return i.defaultShouldRevalidate
}
function Bf(r, i, o, s, c) {
    var d;
    let h;
    if (r) {
        let v = s[r];
        ve(v, "No route found to patch children into: routeId = " + r),
        v.children || (v.children = []),
        h = v.children
    } else
        h = o;
    let m = i.filter(v => !h.some(E => Ed(v, E)))
      , p = Ro(m, c, [r || "_", "patch", String(((d = h) == null ? void 0 : d.length) || "0")], s);
    h.push(...p)
}
function Ed(r, i) {
    return "id"in r && "id"in i && r.id === i.id ? !0 : r.index === i.index && r.path === i.path && r.caseSensitive === i.caseSensitive ? (!r.children || r.children.length === 0) && (!i.children || i.children.length === 0) ? !0 : r.children.every( (o, s) => {
        var c;
        return (c = i.children) == null ? void 0 : c.some(d => Ed(o, d))
    }
    ) : !1
}
async function Tm(r, i, o) {
    if (!r.lazy)
        return;
    let s = await r.lazy();
    if (!r.lazy)
        return;
    let c = o[r.id];
    ve(c, "No route found in manifest");
    let d = {};
    for (let h in s) {
        let p = c[h] !== void 0 && h !== "hasErrorBoundary";
        br(!p, 'Route "' + c.id + '" has a static property "' + h + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + h + '" will be ignored.')),
        !p && !Zp.has(h) && (d[h] = s[h])
    }
    Object.assign(c, d),
    Object.assign(c, Qe({}, i(c), {
        lazy: void 0
    }))
}
async function Dm(r) {
    let {matches: i} = r
      , o = i.filter(c => c.shouldLoad);
    return (await Promise.all(o.map(c => c.resolve()))).reduce( (c, d, h) => Object.assign(c, {
        [o[h].route.id]: d
    }), {})
}
async function Nm(r, i, o, s, c, d, h, m, p, v) {
    let E = d.map(N => N.route.lazy ? Tm(N.route, p, m) : void 0)
      , y = d.map( (N, L) => {
        let M = E[L]
          , z = c.some(I => I.route.id === N.route.id);
        return Qe({}, N, {
            shouldLoad: z,
            resolve: async I => (I && s.method === "GET" && (N.route.lazy || N.route.loader) && (z = !0),
            z ? Om(i, s, N, M, I, v) : Promise.resolve({
                type: Ie.data,
                result: void 0
            }))
        })
    }
    )
      , S = await r({
        matches: y,
        request: s,
        params: d[0].params,
        fetcherKey: h,
        context: v
    });
    try {
        await Promise.all(E)
    } catch {}
    return S
}
async function Om(r, i, o, s, c, d) {
    let h, m, p = v => {
        let E, y = new Promise( (L, M) => E = M);
        m = () => E(),
        i.signal.addEventListener("abort", m);
        let S = L => typeof v != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + r + '" [routeId: ' + o.route.id + "]"))) : v({
            request: i,
            params: o.params,
            context: d
        }, ...L !== void 0 ? [L] : [])
          , N = (async () => {
            try {
                return {
                    type: "data",
                    result: await (c ? c(M => S(M)) : S())
                }
            } catch (L) {
                return {
                    type: "error",
                    result: L
                }
            }
        }
        )();
        return Promise.race([N, y])
    }
    ;
    try {
        let v = o.route[r];
        if (s)
            if (v) {
                let E, [y] = await Promise.all([p(v).catch(S => {
                    E = S
                }
                ), s]);
                if (E !== void 0)
                    throw E;
                h = y
            } else if (await s,
            v = o.route[r],
            v)
                h = await p(v);
            else if (r === "action") {
                let E = new URL(i.url)
                  , y = E.pathname + E.search;
                throw _t(405, {
                    method: i.method,
                    pathname: y,
                    routeId: o.route.id
                })
            } else
                return {
                    type: Ie.data,
                    result: void 0
                };
        else if (v)
            h = await p(v);
        else {
            let E = new URL(i.url)
              , y = E.pathname + E.search;
            throw _t(404, {
                pathname: y
            })
        }
        ve(h.result !== void 0, "You defined " + (r === "action" ? "an action" : "a loader") + " for route " + ('"' + o.route.id + "\" but didn't return anything from your `" + r + "` ") + "function. Please return a value or `null`.")
    } catch (v) {
        return {
            type: Ie.error,
            result: v
        }
    } finally {
        m && i.signal.removeEventListener("abort", m)
    }
    return h
}
async function Mm(r) {
    let {result: i, type: o} = r;
    if (kd(i)) {
        let y;
        try {
            let S = i.headers.get("Content-Type");
            S && /\bapplication\/json\b/.test(S) ? i.body == null ? y = null : y = await i.json() : y = await i.text()
        } catch (S) {
            return {
                type: Ie.error,
                error: S
            }
        }
        return o === Ie.error ? {
            type: Ie.error,
            error: new Er(i.status,i.statusText,y),
            statusCode: i.status,
            headers: i.headers
        } : {
            type: Ie.data,
            data: y,
            statusCode: i.status,
            headers: i.headers
        }
    }
    if (o === Ie.error) {
        if (Jf(i)) {
            var s, c;
            if (i.data instanceof Error) {
                var d, h;
                return {
                    type: Ie.error,
                    error: i.data,
                    statusCode: (d = i.init) == null ? void 0 : d.status,
                    headers: (h = i.init) != null && h.headers ? new Headers(i.init.headers) : void 0
                }
            }
            return {
                type: Ie.error,
                error: new Er(((s = i.init) == null ? void 0 : s.status) || 500,void 0,i.data),
                statusCode: xr(i) ? i.status : void 0,
                headers: (c = i.init) != null && c.headers ? new Headers(i.init.headers) : void 0
            }
        }
        return {
            type: Ie.error,
            error: i,
            statusCode: xr(i) ? i.status : void 0
        }
    }
    if (Um(i)) {
        var m, p;
        return {
            type: Ie.deferred,
            deferredData: i,
            statusCode: (m = i.init) == null ? void 0 : m.status,
            headers: ((p = i.init) == null ? void 0 : p.headers) && new Headers(i.init.headers)
        }
    }
    if (Jf(i)) {
        var v, E;
        return {
            type: Ie.data,
            data: i.data,
            statusCode: (v = i.init) == null ? void 0 : v.status,
            headers: (E = i.init) != null && E.headers ? new Headers(i.init.headers) : void 0
        }
    }
    return {
        type: Ie.data,
        data: i
    }
}
function Fm(r, i, o, s, c, d) {
    let h = r.headers.get("Location");
    if (ve(h, "Redirects returned/thrown from loaders/actions must have a Location header"),
    !$u.test(h)) {
        let m = s.slice(0, s.findIndex(p => p.route.id === o) + 1);
        h = Nu(new URL(i.url), m, c, !0, h, d),
        r.headers.set("Location", h)
    }
    return r
}
function Hf(r, i, o) {
    if ($u.test(r)) {
        let s = r
          , c = s.startsWith("//") ? new URL(i.protocol + s) : new URL(s)
          , d = $t(c.pathname, o) != null;
        if (c.origin === i.origin && d)
            return c.pathname + c.search + c.hash
    }
    return r
}
function qr(r, i, o, s) {
    let c = r.createURL(xd(i)).toString()
      , d = {
        signal: o
    };
    if (s && Gt(s.formMethod)) {
        let {formMethod: h, formEncType: m} = s;
        d.method = h.toUpperCase(),
        m === "application/json" ? (d.headers = new Headers({
            "Content-Type": m
        }),
        d.body = JSON.stringify(s.json)) : m === "text/plain" ? d.body = s.text : m === "application/x-www-form-urlencoded" && s.formData ? d.body = Mu(s.formData) : d.body = s.formData
    }
    return new Request(c,d)
}
function Mu(r) {
    let i = new URLSearchParams;
    for (let[o,s] of r.entries())
        i.append(o, typeof s == "string" ? s : s.name);
    return i
}
function Vf(r) {
    let i = new FormData;
    for (let[o,s] of r.entries())
        i.append(o, s);
    return i
}
function zm(r, i, o, s, c) {
    let d = {}, h = null, m, p = !1, v = {}, E = o && Nt(o[1]) ? o[1].error : void 0;
    return r.forEach(y => {
        if (!(y.route.id in i))
            return;
        let S = y.route.id
          , N = i[S];
        if (ve(!Sr(N), "Cannot handle redirect results in processLoaderData"),
        Nt(N)) {
            let L = N.error;
            E !== void 0 && (L = E,
            E = void 0),
            h = h || {};
            {
                let M = wr(r, S);
                h[M.route.id] == null && (h[M.route.id] = L)
            }
            d[S] = void 0,
            p || (p = !0,
            m = xr(N.error) ? N.error.status : 500),
            N.headers && (v[S] = N.headers)
        } else
            bn(N) ? (s.set(S, N.deferredData),
            d[S] = N.deferredData.data,
            N.statusCode != null && N.statusCode !== 200 && !p && (m = N.statusCode),
            N.headers && (v[S] = N.headers)) : (d[S] = N.data,
            N.statusCode && N.statusCode !== 200 && !p && (m = N.statusCode),
            N.headers && (v[S] = N.headers))
    }
    ),
    E !== void 0 && o && (h = {
        [o[0]]: E
    },
    d[o[0]] = void 0),
    {
        loaderData: d,
        errors: h,
        statusCode: m || 200,
        loaderHeaders: v
    }
}
function Wf(r, i, o, s, c, d, h) {
    let {loaderData: m, errors: p} = zm(i, o, s, h);
    return c.forEach(v => {
        let {key: E, match: y, controller: S} = v
          , N = d[E];
        if (ve(N, "Did not find corresponding fetcher result"),
        !(S && S.signal.aborted))
            if (Nt(N)) {
                let L = wr(r.matches, y == null ? void 0 : y.route.id);
                p && p[L.route.id] || (p = Qe({}, p, {
                    [L.route.id]: N.error
                })),
                r.fetchers.delete(E)
            } else if (Sr(N))
                ve(!1, "Unhandled fetcher revalidation redirect");
            else if (bn(N))
                ve(!1, "Unhandled fetcher deferred data");
            else {
                let L = qn(N.data);
                r.fetchers.set(E, L)
            }
    }
    ),
    {
        loaderData: m,
        errors: p
    }
}
function Kf(r, i, o, s) {
    let c = Qe({}, i);
    for (let d of o) {
        let h = d.route.id;
        if (i.hasOwnProperty(h) ? i[h] !== void 0 && (c[h] = i[h]) : r[h] !== void 0 && d.route.loader && (c[h] = r[h]),
        s && s.hasOwnProperty(h))
            break
    }
    return c
}
function Qf(r) {
    return r ? Nt(r[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [r[0]]: r[1].data
        }
    } : {}
}
function wr(r, i) {
    return (i ? r.slice(0, r.findIndex(s => s.route.id === i) + 1) : [...r]).reverse().find(s => s.route.hasErrorBoundary === !0) || r[0]
}
function Yf(r) {
    let i = r.length === 1 ? r[0] : r.find(o => o.index || !o.path || o.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: i
        }],
        route: i
    }
}
function _t(r, i) {
    let {pathname: o, routeId: s, method: c, type: d, message: h} = i === void 0 ? {} : i
      , m = "Unknown Server Error"
      , p = "Unknown @remix-run/router error";
    return r === 400 ? (m = "Bad Request",
    c && o && s ? p = "You made a " + c + ' request to "' + o + '" but ' + ('did not provide a `loader` for route "' + s + '", ') + "so there is no way to handle the request." : d === "defer-action" ? p = "defer() is not supported in actions" : d === "invalid-body" && (p = "Unable to encode submission body")) : r === 403 ? (m = "Forbidden",
    p = 'Route "' + s + '" does not match URL "' + o + '"') : r === 404 ? (m = "Not Found",
    p = 'No route matches URL "' + o + '"') : r === 405 && (m = "Method Not Allowed",
    c && o && s ? p = "You made a " + c.toUpperCase() + ' request to "' + o + '" but ' + ('did not provide an `action` for route "' + s + '", ') + "so there is no way to handle the request." : c && (p = 'Invalid request method "' + c.toUpperCase() + '"')),
    new Er(r || 500,m,new Error(p),!0)
}
function po(r) {
    let i = Object.entries(r);
    for (let o = i.length - 1; o >= 0; o--) {
        let[s,c] = i[o];
        if (Sr(c))
            return {
                key: s,
                result: c
            }
    }
}
function xd(r) {
    let i = typeof r == "string" ? _n(r) : r;
    return er(Qe({}, i, {
        hash: ""
    }))
}
function jm(r, i) {
    return r.pathname !== i.pathname || r.search !== i.search ? !1 : r.hash === "" ? i.hash !== "" : r.hash === i.hash ? !0 : i.hash !== ""
}
function Im(r) {
    return kd(r.result) && Rm.has(r.result.status)
}
function bn(r) {
    return r.type === Ie.deferred
}
function Nt(r) {
    return r.type === Ie.error
}
function Sr(r) {
    return (r && r.type) === Ie.redirect
}
function Jf(r) {
    return typeof r == "object" && r != null && "type"in r && "data"in r && "init"in r && r.type === "DataWithResponseInit"
}
function Um(r) {
    let i = r;
    return i && typeof i == "object" && typeof i.data == "object" && typeof i.subscribe == "function" && typeof i.cancel == "function" && typeof i.resolveData == "function"
}
function kd(r) {
    return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.headers == "object" && typeof r.body < "u"
}
function Am(r) {
    return km.has(r.toLowerCase())
}
function Gt(r) {
    return Em.has(r.toLowerCase())
}
async function $m(r, i, o, s, c) {
    let d = Object.entries(i);
    for (let h = 0; h < d.length; h++) {
        let[m,p] = d[h]
          , v = r.find(S => (S == null ? void 0 : S.route.id) === m);
        if (!v)
            continue;
        let E = s.find(S => S.route.id === v.route.id)
          , y = E != null && !Sd(E, v) && (c && c[v.route.id]) !== void 0;
        bn(p) && y && await Bu(p, o, !1).then(S => {
            S && (i[m] = S)
        }
        )
    }
}
async function Bm(r, i, o) {
    for (let s = 0; s < o.length; s++) {
        let {key: c, routeId: d, controller: h} = o[s]
          , m = i[c];
        r.find(v => (v == null ? void 0 : v.route.id) === d) && bn(m) && (ve(h, "Expected an AbortController for revalidating fetcher deferred result"),
        await Bu(m, h.signal, !0).then(v => {
            v && (i[c] = v)
        }
        ))
    }
}
async function Bu(r, i, o) {
    if (o === void 0 && (o = !1),
    !await r.deferredData.resolveData(i)) {
        if (o)
            try {
                return {
                    type: Ie.data,
                    data: r.deferredData.unwrappedData
                }
            } catch (c) {
                return {
                    type: Ie.error,
                    error: c
                }
            }
        return {
            type: Ie.data,
            data: r.deferredData.data
        }
    }
}
function Hu(r) {
    return new URLSearchParams(r).getAll("index").some(i => i === "")
}
function Xl(r, i) {
    let o = typeof i == "string" ? _n(i).search : i.search;
    if (r[r.length - 1].route.index && Hu(o || ""))
        return r[r.length - 1];
    let s = md(r);
    return s[s.length - 1]
}
function Xf(r) {
    let {formMethod: i, formAction: o, formEncType: s, text: c, formData: d, json: h} = r;
    if (!(!i || !o || !s)) {
        if (c != null)
            return {
                formMethod: i,
                formAction: o,
                formEncType: s,
                formData: void 0,
                json: void 0,
                text: c
            };
        if (d != null)
            return {
                formMethod: i,
                formAction: o,
                formEncType: s,
                formData: d,
                json: void 0,
                text: void 0
            };
        if (h !== void 0)
            return {
                formMethod: i,
                formAction: o,
                formEncType: s,
                formData: void 0,
                json: h,
                text: void 0
            }
    }
}
function _u(r, i) {
    return i ? {
        state: "loading",
        location: r,
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text
    } : {
        state: "loading",
        location: r,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}
function Hm(r, i) {
    return {
        state: "submitting",
        location: r,
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text
    }
}
function Ql(r, i) {
    return r ? {
        state: "loading",
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
        data: i
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: i
    }
}
function Vm(r, i) {
    return {
        state: "submitting",
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
        data: i ? i.data : void 0
    }
}
function qn(r) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r
    }
}
function Wm(r, i) {
    try {
        let o = r.sessionStorage.getItem(wd);
        if (o) {
            let s = JSON.parse(o);
            for (let[c,d] of Object.entries(s || {}))
                d && Array.isArray(d) && i.set(c, new Set(d || []))
        }
    } catch {}
}
function Km(r, i) {
    if (i.size > 0) {
        let o = {};
        for (let[s,c] of i)
            o[s] = [...c];
        try {
            r.sessionStorage.setItem(wd, JSON.stringify(o))
        } catch (s) {
            br(!1, "Failed to save applied view transitions in sessionStorage (" + s + ").")
        }
    }
}
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Po() {
    return Po = Object.assign ? Object.assign.bind() : function(r) {
        for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o)
                Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s])
        }
        return r
    }
    ,
    Po.apply(this, arguments)
}
const tl = w.createContext(null)
  , Zl = w.createContext(null)
  , Lo = w.createContext(null)
  , Zt = w.createContext(null)
  , Vu = w.createContext(null)
  , fn = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Rd = w.createContext(null);
function Wu(r, i) {
    let {relative: o} = i === void 0 ? {} : i;
    ql() || ve(!1);
    let {basename: s, navigator: c} = w.useContext(Zt)
      , {hash: d, pathname: h, search: m} = bl(r, {
        relative: o
    })
      , p = h;
    return s !== "/" && (p = h === "/" ? s : sn([s, h])),
    c.createHref({
        pathname: p,
        search: m,
        hash: d
    })
}
function ql() {
    return w.useContext(Vu) != null
}
function Cn() {
    return ql() || ve(!1),
    w.useContext(Vu).location
}
function _d(r) {
    w.useContext(Zt).static || w.useLayoutEffect(r)
}
function Qm() {
    let {isDataRoute: r} = w.useContext(fn);
    return r ? fv() : Ym()
}
function Ym() {
    ql() || ve(!1);
    let r = w.useContext(tl)
      , {basename: i, future: o, navigator: s} = w.useContext(Zt)
      , {matches: c} = w.useContext(fn)
      , {pathname: d} = Cn()
      , h = JSON.stringify(Uu(c, o.v7_relativeSplatPath))
      , m = w.useRef(!1);
    return _d( () => {
        m.current = !0
    }
    ),
    w.useCallback(function(v, E) {
        if (E === void 0 && (E = {}),
        !m.current)
            return;
        if (typeof v == "number") {
            s.go(v);
            return
        }
        let y = Au(v, JSON.parse(h), d, E.relative === "path");
        r == null && i !== "/" && (y.pathname = y.pathname === "/" ? i : sn([i, y.pathname])),
        (E.replace ? s.replace : s.push)(y, E.state, E)
    }, [i, s, h, d, r])
}
const Jm = w.createContext(null);
function Xm(r) {
    let i = w.useContext(fn).outlet;
    return i && w.createElement(Jm.Provider, {
        value: r
    }, i)
}
function bl(r, i) {
    let {relative: o} = i === void 0 ? {} : i
      , {future: s} = w.useContext(Zt)
      , {matches: c} = w.useContext(fn)
      , {pathname: d} = Cn()
      , h = JSON.stringify(Uu(c, s.v7_relativeSplatPath));
    return w.useMemo( () => Au(r, JSON.parse(h), d, o === "path"), [r, h, d, o])
}
function Gm(r, i, o, s) {
    ql() || ve(!1);
    let {navigator: c, static: d} = w.useContext(Zt)
      , {matches: h} = w.useContext(fn)
      , m = h[h.length - 1]
      , p = m ? m.params : {};
    m && m.pathname;
    let v = m ? m.pathnameBase : "/";
    m && m.route;
    let E = Cn(), y;
    y = E;
    let S = y.pathname || "/"
      , N = S;
    if (v !== "/") {
        let z = v.replace(/^\//, "").split("/");
        N = "/" + S.replace(/^\//, "").split("/").slice(z.length).join("/")
    }
    let L = !d && o && o.matches && o.matches.length > 0 ? o.matches : kn(r, {
        pathname: N
    });
    return tv(L && L.map(z => Object.assign({}, z, {
        params: Object.assign({}, p, z.params),
        pathname: sn([v, c.encodeLocation ? c.encodeLocation(z.pathname).pathname : z.pathname]),
        pathnameBase: z.pathnameBase === "/" ? v : sn([v, c.encodeLocation ? c.encodeLocation(z.pathnameBase).pathname : z.pathnameBase])
    })), h, o, s)
}
function Zm() {
    let r = Ld()
      , i = xr(r) ? r.status + " " + r.statusText : r instanceof Error ? r.message : JSON.stringify(r)
      , o = r instanceof Error ? r.stack : null
      , c = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, i), o ? w.createElement("pre", {
        style: c
    }, o) : null, null)
}
const qm = w.createElement(Zm, null);
class bm extends w.Component {
    constructor(i) {
        super(i),
        this.state = {
            location: i.location,
            revalidation: i.revalidation,
            error: i.error
        }
    }
    static getDerivedStateFromError(i) {
        return {
            error: i
        }
    }
    static getDerivedStateFromProps(i, o) {
        return o.location !== i.location || o.revalidation !== "idle" && i.revalidation === "idle" ? {
            error: i.error,
            location: i.location,
            revalidation: i.revalidation
        } : {
            error: i.error !== void 0 ? i.error : o.error,
            location: o.location,
            revalidation: i.revalidation || o.revalidation
        }
    }
    componentDidCatch(i, o) {
        console.error("React Router caught the following error during render", i, o)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(fn.Provider, {
            value: this.props.routeContext
        }, w.createElement(Rd.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function ev(r) {
    let {routeContext: i, match: o, children: s} = r
      , c = w.useContext(tl);
    return c && c.static && c.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = o.route.id),
    w.createElement(fn.Provider, {
        value: i
    }, s)
}
function tv(r, i, o, s) {
    var c;
    if (i === void 0 && (i = []),
    o === void 0 && (o = null),
    s === void 0 && (s = null),
    r == null) {
        var d;
        if (!o)
            return null;
        if (o.errors)
            r = o.matches;
        else if ((d = s) != null && d.v7_partialHydration && i.length === 0 && !o.initialized && o.matches.length > 0)
            r = o.matches;
        else
            return null
    }
    let h = r
      , m = (c = o) == null ? void 0 : c.errors;
    if (m != null) {
        let E = h.findIndex(y => y.route.id && (m == null ? void 0 : m[y.route.id]) !== void 0);
        E >= 0 || ve(!1),
        h = h.slice(0, Math.min(h.length, E + 1))
    }
    let p = !1
      , v = -1;
    if (o && s && s.v7_partialHydration)
        for (let E = 0; E < h.length; E++) {
            let y = h[E];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (v = E),
            y.route.id) {
                let {loaderData: S, errors: N} = o
                  , L = y.route.loader && S[y.route.id] === void 0 && (!N || N[y.route.id] === void 0);
                if (y.route.lazy || L) {
                    p = !0,
                    v >= 0 ? h = h.slice(0, v + 1) : h = [h[0]];
                    break
                }
            }
        }
    return h.reduceRight( (E, y, S) => {
        let N, L = !1, M = null, z = null;
        o && (N = m && y.route.id ? m[y.route.id] : void 0,
        M = y.route.errorElement || qm,
        p && (v < 0 && S === 0 ? (dv("route-fallback"),
        L = !0,
        z = null) : v === S && (L = !0,
        z = y.route.hydrateFallbackElement || null)));
        let Q = i.concat(h.slice(0, S + 1))
          , I = () => {
            let K;
            return N ? K = M : L ? K = z : y.route.Component ? K = w.createElement(y.route.Component, null) : y.route.element ? K = y.route.element : K = E,
            w.createElement(ev, {
                match: y,
                routeContext: {
                    outlet: E,
                    matches: Q,
                    isDataRoute: o != null
                },
                children: K
            })
        }
        ;
        return o && (y.route.ErrorBoundary || y.route.errorElement || S === 0) ? w.createElement(bm, {
            location: o.location,
            revalidation: o.revalidation,
            component: M,
            error: N,
            children: I(),
            routeContext: {
                outlet: null,
                matches: Q,
                isDataRoute: !0
            }
        }) : I()
    }
    , null)
}
var Cd = function(r) {
    return r.UseBlocker = "useBlocker",
    r.UseRevalidator = "useRevalidator",
    r.UseNavigateStable = "useNavigate",
    r
}(Cd || {})
  , Pd = function(r) {
    return r.UseBlocker = "useBlocker",
    r.UseLoaderData = "useLoaderData",
    r.UseActionData = "useActionData",
    r.UseRouteError = "useRouteError",
    r.UseNavigation = "useNavigation",
    r.UseRouteLoaderData = "useRouteLoaderData",
    r.UseMatches = "useMatches",
    r.UseRevalidator = "useRevalidator",
    r.UseNavigateStable = "useNavigate",
    r.UseRouteId = "useRouteId",
    r
}(Pd || {});
function nv(r) {
    let i = w.useContext(tl);
    return i || ve(!1),
    i
}
function ei(r) {
    let i = w.useContext(Zl);
    return i || ve(!1),
    i
}
function rv(r) {
    let i = w.useContext(fn);
    return i || ve(!1),
    i
}
function No(r) {
    let i = rv()
      , o = i.matches[i.matches.length - 1];
    return o.route.id || ve(!1),
    o.route.id
}
function lv() {
    return No()
}
function iv() {
    return ei().navigation
}
function ov() {
    let {matches: r, loaderData: i} = ei();
    return w.useMemo( () => r.map(o => dd(o, i)), [r, i])
}
function av() {
    let r = ei()
      , i = No();
    if (r.errors && r.errors[i] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + i + ")");
        return
    }
    return r.loaderData[i]
}
function uv(r) {
    return ei().loaderData[r]
}
function Ld() {
    var r;
    let i = w.useContext(Rd)
      , o = ei(Pd.UseRouteError)
      , s = No();
    return i !== void 0 ? i : (r = o.errors) == null ? void 0 : r[s]
}
function sv() {
    let r = w.useContext(Lo);
    return r == null ? void 0 : r._data
}
function cv() {
    let r = w.useContext(Lo);
    return r == null ? void 0 : r._error
}
function fv() {
    let {router: r} = nv(Cd.UseNavigateStable)
      , i = No()
      , o = w.useRef(!1);
    return _d( () => {
        o.current = !0
    }
    ),
    w.useCallback(function(c, d) {
        d === void 0 && (d = {}),
        o.current && (typeof c == "number" ? r.navigate(c) : r.navigate(c, Po({
            fromRouteId: i
        }, d)))
    }, [r, i])
}
const Gf = {};
function dv(r, i, o) {
    Gf[r] || (Gf[r] = !0)
}
function hv(r, i) {
    r == null || r.v7_startTransition,
    (r == null ? void 0 : r.v7_relativeSplatPath) === void 0 && (!i || i.v7_relativeSplatPath),
    i && (i.v7_fetcherPersist,
    i.v7_normalizeFormMethod,
    i.v7_partialHydration,
    i.v7_skipActionErrorRevalidation)
}
function fg(r) {
    return Xm(r.context)
}
function pv(r) {
    let {basename: i="/", children: o=null, location: s, navigationType: c=et.Pop, navigator: d, static: h=!1, future: m} = r;
    ql() && ve(!1);
    let p = i.replace(/^\/*/, "/")
      , v = w.useMemo( () => ({
        basename: p,
        navigator: d,
        static: h,
        future: Po({
            v7_relativeSplatPath: !1
        }, m)
    }), [p, m, d, h]);
    typeof s == "string" && (s = _n(s));
    let {pathname: E="/", search: y="", hash: S="", state: N=null, key: L="default"} = s
      , M = w.useMemo( () => {
        let z = $t(E, p);
        return z == null ? null : {
            location: {
                pathname: z,
                search: y,
                hash: S,
                state: N,
                key: L
            },
            navigationType: c
        }
    }
    , [p, E, y, S, N, L, c]);
    return M == null ? null : w.createElement(Zt.Provider, {
        value: v
    }, w.createElement(Vu.Provider, {
        children: o,
        value: M
    }))
}
function mv(r) {
    let {children: i, errorElement: o, resolve: s} = r;
    return w.createElement(yv, {
        resolve: s,
        errorElement: o
    }, w.createElement(gv, null, i))
}
var At = function(r) {
    return r[r.pending = 0] = "pending",
    r[r.success = 1] = "success",
    r[r.error = 2] = "error",
    r
}(At || {});
const vv = new Promise( () => {}
);
class yv extends w.Component {
    constructor(i) {
        super(i),
        this.state = {
            error: null
        }
    }
    static getDerivedStateFromError(i) {
        return {
            error: i
        }
    }
    componentDidCatch(i, o) {
        console.error("<Await> caught the following error during render", i, o)
    }
    render() {
        let {children: i, errorElement: o, resolve: s} = this.props
          , c = null
          , d = At.pending;
        if (!(s instanceof Promise))
            d = At.success,
            c = Promise.resolve(),
            Object.defineProperty(c, "_tracked", {
                get: () => !0
            }),
            Object.defineProperty(c, "_data", {
                get: () => s
            });
        else if (this.state.error) {
            d = At.error;
            let h = this.state.error;
            c = Promise.reject().catch( () => {}
            ),
            Object.defineProperty(c, "_tracked", {
                get: () => !0
            }),
            Object.defineProperty(c, "_error", {
                get: () => h
            })
        } else
            s._tracked ? (c = s,
            d = "_error"in c ? At.error : "_data"in c ? At.success : At.pending) : (d = At.pending,
            Object.defineProperty(s, "_tracked", {
                get: () => !0
            }),
            c = s.then(h => Object.defineProperty(s, "_data", {
                get: () => h
            }), h => Object.defineProperty(s, "_error", {
                get: () => h
            })));
        if (d === At.error && c._error instanceof Co)
            throw vv;
        if (d === At.error && !o)
            throw c._error;
        if (d === At.error)
            return w.createElement(Lo.Provider, {
                value: c,
                children: o
            });
        if (d === At.success)
            return w.createElement(Lo.Provider, {
                value: c,
                children: i
            });
        throw c
    }
}
function gv(r) {
    let {children: i} = r
      , o = sv()
      , s = typeof i == "function" ? i(o) : i;
    return w.createElement(w.Fragment, null, s)
}
function dg(r) {
    let i = {
        hasErrorBoundary: r.ErrorBoundary != null || r.errorElement != null
    };
    return r.Component && Object.assign(i, {
        element: w.createElement(r.Component),
        Component: void 0
    }),
    r.HydrateFallback && Object.assign(i, {
        hydrateFallbackElement: w.createElement(r.HydrateFallback),
        HydrateFallback: void 0
    }),
    r.ErrorBoundary && Object.assign(i, {
        errorElement: w.createElement(r.ErrorBoundary),
        ErrorBoundary: void 0
    }),
    i
}
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function cn() {
    return cn = Object.assign ? Object.assign.bind() : function(r) {
        for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o)
                Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s])
        }
        return r
    }
    ,
    cn.apply(this, arguments)
}
function Ku(r, i) {
    if (r == null)
        return {};
    var o = {}, s = Object.keys(r), c, d;
    for (d = 0; d < s.length; d++)
        c = s[d],
        !(i.indexOf(c) >= 0) && (o[c] = r[c]);
    return o
}
const Eo = "get"
  , Cu = "application/x-www-form-urlencoded";
function Oo(r) {
    return r != null && typeof r.tagName == "string"
}
function wv(r) {
    return Oo(r) && r.tagName.toLowerCase() === "button"
}
function Sv(r) {
    return Oo(r) && r.tagName.toLowerCase() === "form"
}
function Ev(r) {
    return Oo(r) && r.tagName.toLowerCase() === "input"
}
function xv(r) {
    return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)
}
function kv(r, i) {
    return r.button === 0 && (!i || i === "_self") && !xv(r)
}
let mo = null;
function Rv() {
    if (mo === null)
        try {
            new FormData(document.createElement("form"),0),
            mo = !1
        } catch {
            mo = !0
        }
    return mo
}
const _v = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Pu(r) {
    return r != null && !_v.has(r) ? null : r
}
function Cv(r, i) {
    let o, s, c, d, h;
    if (Sv(r)) {
        let m = r.getAttribute("action");
        s = m ? $t(m, i) : null,
        o = r.getAttribute("method") || Eo,
        c = Pu(r.getAttribute("enctype")) || Cu,
        d = new FormData(r)
    } else if (wv(r) || Ev(r) && (r.type === "submit" || r.type === "image")) {
        let m = r.form;
        if (m == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let p = r.getAttribute("formaction") || m.getAttribute("action");
        if (s = p ? $t(p, i) : null,
        o = r.getAttribute("formmethod") || m.getAttribute("method") || Eo,
        c = Pu(r.getAttribute("formenctype")) || Pu(m.getAttribute("enctype")) || Cu,
        d = new FormData(m,r),
        !Rv()) {
            let {name: v, type: E, value: y} = r;
            if (E === "image") {
                let S = v ? v + "." : "";
                d.append(S + "x", "0"),
                d.append(S + "y", "0")
            } else
                v && d.append(v, y)
        }
    } else {
        if (Oo(r))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        o = Eo,
        s = null,
        c = Cu,
        h = r
    }
    return d && c === "text/plain" && (h = d,
    d = void 0),
    {
        action: s,
        method: o.toLowerCase(),
        encType: c,
        formData: d,
        body: h
    }
}
const Pv = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , Lv = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"]
  , Tv = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"]
  , Dv = "6";
try {
    window.__reactRouterVersion = Dv
} catch {}
const Td = w.createContext({
    isTransitioning: !1
})
  , Dd = w.createContext(new Map)
  , Nv = "startTransition"
  , Zf = cd[Nv]
  , Ov = "flushSync"
  , qf = Jp[Ov]
  , Mv = "useId"
  , bf = cd[Mv];
function Fv(r) {
    Zf ? Zf(r) : r()
}
function Yl(r) {
    qf ? qf(r) : r()
}
let zv = class {
    constructor() {
        this.status = "pending",
        this.promise = new Promise( (i, o) => {
            this.resolve = s => {
                this.status === "pending" && (this.status = "resolved",
                i(s))
            }
            ,
            this.reject = s => {
                this.status === "pending" && (this.status = "rejected",
                o(s))
            }
        }
        )
    }
}
;
function pg(r) {
    let {fallbackElement: i, router: o, future: s} = r
      , [c,d] = w.useState(o.state)
      , [h,m] = w.useState()
      , [p,v] = w.useState({
        isTransitioning: !1
    })
      , [E,y] = w.useState()
      , [S,N] = w.useState()
      , [L,M] = w.useState()
      , z = w.useRef(new Map)
      , {v7_startTransition: Q} = s || {}
      , I = w.useCallback(Y => {
        Q ? Fv(Y) : Y()
    }
    , [Q])
      , K = w.useCallback( (Y, he) => {
        let {deletedFetchers: ue, flushSync: Re, viewTransitionOpts: Se} = he;
        Y.fetchers.forEach( (Ue, Fe) => {
            Ue.data !== void 0 && z.current.set(Fe, Ue.data)
        }
        ),
        ue.forEach(Ue => z.current.delete(Ue));
        let Me = o.window == null || o.window.document == null || typeof o.window.document.startViewTransition != "function";
        if (!Se || Me) {
            Re ? Yl( () => d(Y)) : I( () => d(Y));
            return
        }
        if (Re) {
            Yl( () => {
                S && (E && E.resolve(),
                S.skipTransition()),
                v({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: Se.currentLocation,
                    nextLocation: Se.nextLocation
                })
            }
            );
            let Ue = o.window.document.startViewTransition( () => {
                Yl( () => d(Y))
            }
            );
            Ue.finished.finally( () => {
                Yl( () => {
                    y(void 0),
                    N(void 0),
                    m(void 0),
                    v({
                        isTransitioning: !1
                    })
                }
                )
            }
            ),
            Yl( () => N(Ue));
            return
        }
        S ? (E && E.resolve(),
        S.skipTransition(),
        M({
            state: Y,
            currentLocation: Se.currentLocation,
            nextLocation: Se.nextLocation
        })) : (m(Y),
        v({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: Se.currentLocation,
            nextLocation: Se.nextLocation
        }))
    }
    , [o.window, S, E, z, I]);
    w.useLayoutEffect( () => o.subscribe(K), [o, K]),
    w.useEffect( () => {
        p.isTransitioning && !p.flushSync && y(new zv)
    }
    , [p]),
    w.useEffect( () => {
        if (E && h && o.window) {
            let Y = h
              , he = E.promise
              , ue = o.window.document.startViewTransition(async () => {
                I( () => d(Y)),
                await he
            }
            );
            ue.finished.finally( () => {
                y(void 0),
                N(void 0),
                m(void 0),
                v({
                    isTransitioning: !1
                })
            }
            ),
            N(ue)
        }
    }
    , [I, h, E, o.window]),
    w.useEffect( () => {
        E && h && c.location.key === h.location.key && E.resolve()
    }
    , [E, S, c.location, h]),
    w.useEffect( () => {
        !p.isTransitioning && L && (m(L.state),
        v({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: L.currentLocation,
            nextLocation: L.nextLocation
        }),
        M(void 0))
    }
    , [p.isTransitioning, L]),
    w.useEffect( () => {}
    , []);
    let $ = w.useMemo( () => ({
        createHref: o.createHref,
        encodeLocation: o.encodeLocation,
        go: Y => o.navigate(Y),
        push: (Y, he, ue) => o.navigate(Y, {
            state: he,
            preventScrollReset: ue == null ? void 0 : ue.preventScrollReset
        }),
        replace: (Y, he, ue) => o.navigate(Y, {
            replace: !0,
            state: he,
            preventScrollReset: ue == null ? void 0 : ue.preventScrollReset
        })
    }), [o])
      , q = o.basename || "/"
      , J = w.useMemo( () => ({
        router: o,
        navigator: $,
        static: !1,
        basename: q
    }), [o, $, q])
      , P = w.useMemo( () => ({
        v7_relativeSplatPath: o.future.v7_relativeSplatPath
    }), [o.future.v7_relativeSplatPath]);
    return w.useEffect( () => hv(s, o.future), [s, o.future]),
    w.createElement(w.Fragment, null, w.createElement(tl.Provider, {
        value: J
    }, w.createElement(Zl.Provider, {
        value: c
    }, w.createElement(Dd.Provider, {
        value: z.current
    }, w.createElement(Td.Provider, {
        value: p
    }, w.createElement(pv, {
        basename: q,
        location: c.location,
        navigationType: c.historyAction,
        navigator: $,
        future: P
    }, c.initialized || o.future.v7_partialHydration ? w.createElement(jv, {
        routes: o.routes,
        future: o.future,
        state: c
    }) : i))))), null)
}
const jv = w.memo(Iv);
function Iv(r) {
    let {routes: i, future: o, state: s} = r;
    return Gm(i, void 0, s, o)
}
const Uv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Av = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Nd = w.forwardRef(function(i, o) {
    let {onClick: s, relative: c, reloadDocument: d, replace: h, state: m, target: p, to: v, preventScrollReset: E, viewTransition: y} = i, S = Ku(i, Pv), {basename: N} = w.useContext(Zt), L, M = !1;
    if (typeof v == "string" && Av.test(v) && (L = v,
    Uv))
        try {
            let K = new URL(window.location.href)
              , $ = v.startsWith("//") ? new URL(K.protocol + v) : new URL(v)
              , q = $t($.pathname, N);
            $.origin === K.origin && q != null ? v = q + $.search + $.hash : M = !0
        } catch {}
    let z = Wu(v, {
        relative: c
    })
      , Q = Bv(v, {
        replace: h,
        state: m,
        target: p,
        preventScrollReset: E,
        relative: c,
        viewTransition: y
    });
    function I(K) {
        s && s(K),
        K.defaultPrevented || Q(K)
    }
    return w.createElement("a", cn({}, S, {
        href: L || z,
        onClick: M || d ? s : I,
        ref: o,
        target: p
    }))
})
  , $v = w.forwardRef(function(i, o) {
    let {"aria-current": s="page", caseSensitive: c=!1, className: d="", end: h=!1, style: m, to: p, viewTransition: v, children: E} = i
      , y = Ku(i, Lv)
      , S = bl(p, {
        relative: y.relative
    })
      , N = Cn()
      , L = w.useContext(Zl)
      , {navigator: M, basename: z} = w.useContext(Zt)
      , Q = L != null && Yv(S) && v === !0
      , I = M.encodeLocation ? M.encodeLocation(S).pathname : S.pathname
      , K = N.pathname
      , $ = L && L.navigation && L.navigation.location ? L.navigation.location.pathname : null;
    c || (K = K.toLowerCase(),
    $ = $ ? $.toLowerCase() : null,
    I = I.toLowerCase()),
    $ && z && ($ = $t($, z) || $);
    const q = I !== "/" && I.endsWith("/") ? I.length - 1 : I.length;
    let J = K === I || !h && K.startsWith(I) && K.charAt(q) === "/", P = $ != null && ($ === I || !h && $.startsWith(I) && $.charAt(I.length) === "/"), Y = {
        isActive: J,
        isPending: P,
        isTransitioning: Q
    }, he = J ? s : void 0, ue;
    typeof d == "function" ? ue = d(Y) : ue = [d, J ? "active" : null, P ? "pending" : null, Q ? "transitioning" : null].filter(Boolean).join(" ");
    let Re = typeof m == "function" ? m(Y) : m;
    return w.createElement(Nd, cn({}, y, {
        "aria-current": he,
        className: ue,
        ref: o,
        style: Re,
        to: p,
        viewTransition: v
    }), typeof E == "function" ? E(Y) : E)
})
  , Od = w.forwardRef( (r, i) => {
    let {fetcherKey: o, navigate: s, reloadDocument: c, replace: d, state: h, method: m=Eo, action: p, onSubmit: v, relative: E, preventScrollReset: y, viewTransition: S} = r
      , N = Ku(r, Tv)
      , L = zd()
      , M = Wv(p, {
        relative: E
    })
      , z = m.toLowerCase() === "get" ? "get" : "post"
      , Q = I => {
        if (v && v(I),
        I.defaultPrevented)
            return;
        I.preventDefault();
        let K = I.nativeEvent.submitter
          , $ = (K == null ? void 0 : K.getAttribute("formmethod")) || m;
        L(K || I.currentTarget, {
            fetcherKey: o,
            method: $,
            navigate: s,
            replace: d,
            state: h,
            relative: E,
            preventScrollReset: y,
            viewTransition: S
        })
    }
    ;
    return w.createElement("form", cn({
        ref: i,
        method: z,
        action: M,
        onSubmit: c ? v : Q
    }, N))
}
);
var el;
(function(r) {
    r.UseScrollRestoration = "useScrollRestoration",
    r.UseSubmit = "useSubmit",
    r.UseSubmitFetcher = "useSubmitFetcher",
    r.UseFetcher = "useFetcher",
    r.useViewTransitionState = "useViewTransitionState"
}
)(el || (el = {}));
var To;
(function(r) {
    r.UseFetcher = "useFetcher",
    r.UseFetchers = "useFetchers",
    r.UseScrollRestoration = "useScrollRestoration"
}
)(To || (To = {}));
function Mo(r) {
    let i = w.useContext(tl);
    return i || ve(!1),
    i
}
function Md(r) {
    let i = w.useContext(Zl);
    return i || ve(!1),
    i
}
function Bv(r, i) {
    let {target: o, replace: s, state: c, preventScrollReset: d, relative: h, viewTransition: m} = i === void 0 ? {} : i
      , p = Qm()
      , v = Cn()
      , E = bl(r, {
        relative: h
    });
    return w.useCallback(y => {
        if (kv(y, o)) {
            y.preventDefault();
            let S = s !== void 0 ? s : er(v) === er(E);
            p(r, {
                replace: S,
                state: c,
                preventScrollReset: d,
                relative: h,
                viewTransition: m
            })
        }
    }
    , [v, p, E, s, c, o, r, d, h, m])
}
function Hv() {
    if (typeof document > "u")
        throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
}
let Vv = 0
  , Fd = () => "__" + String(++Vv) + "__";
function zd() {
    let {router: r} = Mo(el.UseSubmit)
      , {basename: i} = w.useContext(Zt)
      , o = lv();
    return w.useCallback(function(s, c) {
        c === void 0 && (c = {}),
        Hv();
        let {action: d, method: h, encType: m, formData: p, body: v} = Cv(s, i);
        if (c.navigate === !1) {
            let E = c.fetcherKey || Fd();
            r.fetch(E, o, c.action || d, {
                preventScrollReset: c.preventScrollReset,
                formData: p,
                body: v,
                formMethod: c.method || h,
                formEncType: c.encType || m,
                flushSync: c.flushSync
            })
        } else
            r.navigate(c.action || d, {
                preventScrollReset: c.preventScrollReset,
                formData: p,
                body: v,
                formMethod: c.method || h,
                formEncType: c.encType || m,
                replace: c.replace,
                state: c.state,
                fromRouteId: o,
                flushSync: c.flushSync,
                viewTransition: c.viewTransition
            })
    }, [r, i, o])
}
function Wv(r, i) {
    let {relative: o} = i === void 0 ? {} : i
      , {basename: s} = w.useContext(Zt)
      , c = w.useContext(fn);
    c || ve(!1);
    let[d] = c.matches.slice(-1)
      , h = cn({}, bl(r || ".", {
        relative: o
    }))
      , m = Cn();
    if (r == null) {
        h.search = m.search;
        let p = new URLSearchParams(h.search)
          , v = p.getAll("index");
        if (v.some(y => y === "")) {
            p.delete("index"),
            v.filter(S => S).forEach(S => p.append("index", S));
            let y = p.toString();
            h.search = y ? "?" + y : ""
        }
    }
    return (!r || r === ".") && d.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (h.pathname = h.pathname === "/" ? s : sn([s, h.pathname])),
    er(h)
}
function Kv(r) {
    var i;
    let {key: o} = r === void 0 ? {} : r
      , {router: s} = Mo(el.UseFetcher)
      , c = Md(To.UseFetcher)
      , d = w.useContext(Dd)
      , h = w.useContext(fn)
      , m = (i = h.matches[h.matches.length - 1]) == null ? void 0 : i.route.id;
    d || ve(!1),
    h || ve(!1),
    m == null && ve(!1);
    let p = bf ? bf() : ""
      , [v,E] = w.useState(o || p);
    o && o !== v ? E(o) : v || E(Fd()),
    w.useEffect( () => (s.getFetcher(v),
    () => {
        s.deleteFetcher(v)
    }
    ), [s, v]);
    let y = w.useCallback( (I, K) => {
        m || ve(!1),
        s.fetch(v, m, I, K)
    }
    , [v, m, s])
      , S = zd()
      , N = w.useCallback( (I, K) => {
        S(I, cn({}, K, {
            navigate: !1,
            fetcherKey: v
        }))
    }
    , [v, S])
      , L = w.useMemo( () => w.forwardRef( (K, $) => w.createElement(Od, cn({}, K, {
        navigate: !1,
        fetcherKey: v,
        ref: $
    }))), [v])
      , M = c.fetchers.get(v) || gd
      , z = d.get(v);
    return w.useMemo( () => cn({
        Form: L,
        submit: N,
        load: y
    }, M, {
        data: z
    }), [L, N, y, M, z])
}
const ed = "react-router-scroll-positions";
let vo = {};
function mg(r) {
    let {getKey: i, storageKey: o} = r === void 0 ? {} : r
      , {router: s} = Mo(el.UseScrollRestoration)
      , {restoreScrollPosition: c, preventScrollReset: d} = Md(To.UseScrollRestoration)
      , {basename: h} = w.useContext(Zt)
      , m = Cn()
      , p = ov()
      , v = iv();
    w.useEffect( () => (window.history.scrollRestoration = "manual",
    () => {
        window.history.scrollRestoration = "auto"
    }
    ), []),
    Qv(w.useCallback( () => {
        if (v.state === "idle") {
            let E = (i ? i(m, p) : null) || m.key;
            vo[E] = window.scrollY
        }
        try {
            sessionStorage.setItem(o || ed, JSON.stringify(vo))
        } catch {}
        window.history.scrollRestoration = "auto"
    }
    , [o, i, v.state, m, p])),
    typeof document < "u" && (w.useLayoutEffect( () => {
        try {
            let E = sessionStorage.getItem(o || ed);
            E && (vo = JSON.parse(E))
        } catch {}
    }
    , [o]),
    w.useLayoutEffect( () => {
        let E = i && h !== "/" ? (S, N) => i(cn({}, S, {
            pathname: $t(S.pathname, h) || S.pathname
        }), N) : i
          , y = s == null ? void 0 : s.enableScrollRestoration(vo, () => window.scrollY, E);
        return () => y && y()
    }
    , [s, h, i]),
    w.useLayoutEffect( () => {
        if (c !== !1) {
            if (typeof c == "number") {
                window.scrollTo(0, c);
                return
            }
            if (m.hash) {
                let E = document.getElementById(decodeURIComponent(m.hash.slice(1)));
                if (E) {
                    E.scrollIntoView();
                    return
                }
            }
            d !== !0 && window.scrollTo(0, 0)
        }
    }
    , [m, c, d]))
}
function Qv(r, i) {
    let {capture: o} = {};
    w.useEffect( () => {
        let s = o != null ? {
            capture: o
        } : void 0;
        return window.addEventListener("pagehide", r, s),
        () => {
            window.removeEventListener("pagehide", r, s)
        }
    }
    , [r, o])
}
function Yv(r, i) {
    i === void 0 && (i = {});
    let o = w.useContext(Td);
    o == null && ve(!1);
    let {basename: s} = Mo(el.useViewTransitionState)
      , c = bl(r, {
        relative: i.relative
    });
    if (!o.isTransitioning)
        return !1;
    let d = $t(o.currentLocation.pathname, s) || o.currentLocation.pathname
      , h = $t(o.nextLocation.pathname, s) || o.nextLocation.pathname;
    return _o(c.pathname, h) != null || _o(c.pathname, d) != null
}
var Jv = -1
  , Xv = -2
  , Gv = -3
  , Zv = -4
  , qv = -5
  , bv = -6
  , ey = -7
  , ty = "B"
  , ny = "D"
  , jd = "E"
  , ry = "M"
  , ly = "N"
  , Id = "P"
  , iy = "R"
  , oy = "S"
  , ay = "Y"
  , uy = "U"
  , sy = "Z"
  , Ud = class {
    constructor() {
        ho(this, "promise");
        ho(this, "resolve");
        ho(this, "reject");
        this.promise = new Promise( (r, i) => {
            this.resolve = r,
            this.reject = i
        }
        )
    }
}
;
function cy() {
    const r = new TextDecoder;
    let i = "";
    return new TransformStream({
        transform(o, s) {
            const c = r.decode(o, {
                stream: !0
            })
              , d = (i + c).split(`
`);
            i = d.pop() || "";
            for (const h of d)
                s.enqueue(h)
        },
        flush(o) {
            i && o.enqueue(i)
        }
    })
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Lu = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : void 0;
function Fu(r) {
    const {hydrated: i, values: o} = this;
    if (typeof r == "number")
        return td.call(this, r);
    if (!Array.isArray(r) || !r.length)
        throw new SyntaxError;
    const s = o.length;
    for (const c of r)
        o.push(c);
    return i.length = o.length,
    td.call(this, s)
}
function td(r) {
    const {hydrated: i, values: o, deferred: s, plugins: c} = this;
    let d;
    const h = [[r, p => {
        d = p
    }
    ]];
    let m = [];
    for (; h.length > 0; ) {
        const [p,v] = h.pop();
        switch (p) {
        case ey:
            v(void 0);
            continue;
        case qv:
            v(null);
            continue;
        case Xv:
            v(NaN);
            continue;
        case bv:
            v(1 / 0);
            continue;
        case Gv:
            v(-1 / 0);
            continue;
        case Zv:
            v(-0);
            continue
        }
        if (i[p]) {
            v(i[p]);
            continue
        }
        const E = o[p];
        if (!E || typeof E != "object") {
            i[p] = E,
            v(E);
            continue
        }
        if (Array.isArray(E))
            if (typeof E[0] == "string") {
                const [y,S,N] = E;
                switch (y) {
                case ny:
                    v(i[p] = new Date(S));
                    continue;
                case uy:
                    v(i[p] = new URL(S));
                    continue;
                case ty:
                    v(i[p] = BigInt(S));
                    continue;
                case iy:
                    v(i[p] = new RegExp(S,N));
                    continue;
                case ay:
                    v(i[p] = Symbol.for(S));
                    continue;
                case oy:
                    const L = new Set;
                    i[p] = L;
                    for (let $ = 1; $ < E.length; $++)
                        h.push([E[$], q => {
                            L.add(q)
                        }
                        ]);
                    v(L);
                    continue;
                case ry:
                    const M = new Map;
                    i[p] = M;
                    for (let $ = 1; $ < E.length; $ += 2) {
                        const q = [];
                        h.push([E[$ + 1], J => {
                            q[1] = J
                        }
                        ]),
                        h.push([E[$], J => {
                            q[0] = J
                        }
                        ]),
                        m.push( () => {
                            M.set(q[0], q[1])
                        }
                        )
                    }
                    v(M);
                    continue;
                case ly:
                    const z = Object.create(null);
                    i[p] = z;
                    for (const $ of Object.keys(S).reverse()) {
                        const q = [];
                        h.push([S[$], J => {
                            q[1] = J
                        }
                        ]),
                        h.push([Number($.slice(1)), J => {
                            q[0] = J
                        }
                        ]),
                        m.push( () => {
                            z[q[0]] = q[1]
                        }
                        )
                    }
                    v(z);
                    continue;
                case Id:
                    if (i[S])
                        v(i[p] = i[S]);
                    else {
                        const $ = new Ud;
                        s[S] = $,
                        v(i[p] = $.promise)
                    }
                    continue;
                case jd:
                    const [,Q,I] = E;
                    let K = I && Lu && Lu[I] ? new Lu[I](Q) : new Error(Q);
                    i[p] = K,
                    v(K);
                    continue;
                case sy:
                    v(i[p] = i[S]);
                    continue;
                default:
                    if (Array.isArray(c)) {
                        const $ = []
                          , q = E.slice(1);
                        for (let J = 0; J < q.length; J++) {
                            const P = q[J];
                            h.push([P, Y => {
                                $[J] = Y
                            }
                            ])
                        }
                        m.push( () => {
                            for (const J of c) {
                                const P = J(E[0], ...$);
                                if (P) {
                                    v(i[p] = P.value);
                                    return
                                }
                            }
                            throw new SyntaxError
                        }
                        );
                        continue
                    }
                    throw new SyntaxError
                }
            } else {
                const y = [];
                i[p] = y;
                for (let S = 0; S < E.length; S++) {
                    const N = E[S];
                    N !== Jv && h.push([N, L => {
                        y[S] = L
                    }
                    ])
                }
                v(y);
                continue
            }
        else {
            const y = {};
            i[p] = y;
            for (const S of Object.keys(E).reverse()) {
                const N = [];
                h.push([E[S], L => {
                    N[1] = L
                }
                ]),
                h.push([Number(S.slice(1)), L => {
                    N[0] = L
                }
                ]),
                m.push( () => {
                    y[N[0]] = N[1]
                }
                )
            }
            v(y);
            continue
        }
    }
    for (; m.length > 0; )
        m.pop()();
    return d
}
async function fy(r, i) {
    const {plugins: o} = i ?? {}
      , s = new Ud
      , c = r.pipeThrough(cy()).getReader()
      , d = {
        values: [],
        hydrated: [],
        deferred: {},
        plugins: o
    }
      , h = await dy.call(d, c);
    let m = s.promise;
    return h.done ? s.resolve() : m = hy.call(d, c).then(s.resolve).catch(p => {
        for (const v of Object.values(d.deferred))
            v.reject(p);
        s.reject(p)
    }
    ),
    {
        done: m.then( () => c.closed),
        value: h.value
    }
}
async function dy(r) {
    const i = await r.read();
    if (!i.value)
        throw new SyntaxError;
    let o;
    try {
        o = JSON.parse(i.value)
    } catch {
        throw new SyntaxError
    }
    return {
        done: i.done,
        value: Fu.call(this, o)
    }
}
async function hy(r) {
    let i = await r.read();
    for (; !i.done; ) {
        if (!i.value)
            continue;
        const o = i.value;
        switch (o[0]) {
        case Id:
            {
                const s = o.indexOf(":")
                  , c = Number(o.slice(1, s))
                  , d = this.deferred[c];
                if (!d)
                    throw new Error(`Deferred ID ${c} not found in stream`);
                const h = o.slice(s + 1);
                let m;
                try {
                    m = JSON.parse(h)
                } catch {
                    throw new SyntaxError
                }
                const p = Fu.call(this, m);
                d.resolve(p);
                break
            }
        case jd:
            {
                const s = o.indexOf(":")
                  , c = Number(o.slice(1, s))
                  , d = this.deferred[c];
                if (!d)
                    throw new Error(`Deferred ID ${c} not found in stream`);
                const h = o.slice(s + 1);
                let m;
                try {
                    m = JSON.parse(h)
                } catch {
                    throw new SyntaxError
                }
                const p = Fu.call(this, m);
                d.reject(p);
                break
            }
        default:
            throw new SyntaxError
        }
        i = await r.read()
    }
}
/**
 * @remix-run/server-runtime v2.16.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Ad = Symbol("SingleFetchRedirect");
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
function lt() {
    return lt = Object.assign ? Object.assign.bind() : function(r) {
        for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var s in o)
                Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s])
        }
        return r
    }
    ,
    lt.apply(this, arguments)
}
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
function Rn(r, i) {
    if (r === !1 || r === null || typeof r > "u")
        throw new Error(i)
}
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
async function $d(r, i) {
    if (r.id in i)
        return i[r.id];
    try {
        let o = await import(r.module);
        return i[r.id] = o,
        o
    } catch (o) {
        return console.error(`Error loading route module \`${r.module}\`, reloading page...`),
        console.error(o),
        window.__remixContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
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
function py(r, i, o) {
    let s = r.map(d => {
        var h;
        let m = i[d.route.id]
          , p = o.routes[d.route.id];
        return [p.css ? p.css.map(v => ({
            rel: "stylesheet",
            href: v
        })) : [], (m == null || (h = m.links) === null || h === void 0 ? void 0 : h.call(m)) || []]
    }
    ).flat(2)
      , c = Sy(r, o);
    return Hd(s, c)
}
async function Bd(r, i) {
    var o, s;
    if (!r.css && !i.links || !xy())
        return;
    let c = [((o = r.css) === null || o === void 0 ? void 0 : o.map(m => ({
        rel: "stylesheet",
        href: m
    }))) ?? [], ((s = i.links) === null || s === void 0 ? void 0 : s.call(i)) ?? []].flat(1);
    if (c.length === 0)
        return;
    let d = [];
    for (let m of c)
        !Qu(m) && m.rel === "stylesheet" && d.push({
            ...m,
            rel: "preload",
            as: "style"
        });
    let h = d.filter(m => (!m.media || window.matchMedia(m.media).matches) && !document.querySelector(`link[rel="stylesheet"][href="${m.href}"]`));
    await Promise.all(h.map(my))
}
async function my(r) {
    return new Promise(i => {
        let o = document.createElement("link");
        Object.assign(o, r);
        function s() {
            document.head.contains(o) && document.head.removeChild(o)
        }
        o.onload = () => {
            s(),
            i()
        }
        ,
        o.onerror = () => {
            s(),
            i()
        }
        ,
        document.head.appendChild(o)
    }
    )
}
function Qu(r) {
    return r != null && typeof r.page == "string"
}
function vy(r) {
    return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string"
}
async function yy(r, i, o) {
    let s = await Promise.all(r.map(async c => {
        let d = await $d(i.routes[c.route.id], o);
        return d.links ? d.links() : []
    }
    ));
    return Hd(s.flat(1).filter(vy).filter(c => c.rel === "stylesheet" || c.rel === "preload").map(c => c.rel === "stylesheet" ? {
        ...c,
        rel: "prefetch",
        as: "style"
    } : {
        ...c,
        rel: "prefetch"
    }))
}
function nd(r, i, o, s, c, d, h) {
    let m = Vd(r)
      , p = (y, S) => o[S] ? y.route.id !== o[S].route.id : !0
      , v = (y, S) => {
        var N;
        return o[S].pathname !== y.pathname || ((N = o[S].route.path) === null || N === void 0 ? void 0 : N.endsWith("*")) && o[S].params["*"] !== y.params["*"]
    }
    ;
    return h === "data" && (d.v3_singleFetch || c.search !== m.search) ? i.filter( (y, S) => {
        if (!s.routes[y.route.id].hasLoader)
            return !1;
        if (p(y, S) || v(y, S))
            return !0;
        let L = d.v3_singleFetch || c.search !== m.search;
        if (y.route.shouldRevalidate) {
            var M;
            let z = y.route.shouldRevalidate({
                currentUrl: new URL(c.pathname + c.search + c.hash,window.origin),
                currentParams: ((M = o[0]) === null || M === void 0 ? void 0 : M.params) || {},
                nextUrl: new URL(r,window.origin),
                nextParams: y.params,
                defaultShouldRevalidate: L
            });
            if (typeof z == "boolean")
                return z
        }
        return L
    }
    ) : i.filter( (y, S) => {
        let N = s.routes[y.route.id];
        return (h === "assets" || N.hasLoader) && (p(y, S) || v(y, S))
    }
    )
}
function gy(r, i, o) {
    let s = Vd(r);
    return Yu(i.filter(c => o.routes[c.route.id].hasLoader && !o.routes[c.route.id].hasClientLoader).map(c => {
        let {pathname: d, search: h} = s
          , m = new URLSearchParams(h);
        return m.set("_data", c.route.id),
        `${d}?${m}`
    }
    ))
}
function wy(r, i) {
    return Yu(r.map(o => {
        let s = i.routes[o.route.id]
          , c = [s.module];
        return s.imports && (c = c.concat(s.imports)),
        c
    }
    ).flat(1))
}
function Sy(r, i) {
    return Yu(r.map(o => {
        let s = i.routes[o.route.id]
          , c = [s.module];
        return s.imports && (c = c.concat(s.imports)),
        c
    }
    ).flat(1))
}
function Yu(r) {
    return [...new Set(r)]
}
function Ey(r) {
    let i = {}
      , o = Object.keys(r).sort();
    for (let s of o)
        i[s] = r[s];
    return i
}
function Hd(r, i) {
    let o = new Set
      , s = new Set(i);
    return r.reduce( (c, d) => {
        if (i && !Qu(d) && d.as === "script" && d.href && s.has(d.href))
            return c;
        let m = JSON.stringify(Ey(d));
        return o.has(m) || (o.add(m),
        c.push({
            key: m,
            link: d
        })),
        c
    }
    , [])
}
function Vd(r) {
    let i = _n(r);
    return i.search === void 0 && (i.search = ""),
    i
}
let yo;
function xy() {
    if (yo !== void 0)
        return yo;
    let r = document.createElement("link");
    return yo = r.relList.supports("preload"),
    r = null,
    yo
}
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
const ky = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
}
  , Ry = /[&><\u2028\u2029]/g;
function go(r) {
    return r.replace(Ry, i => ky[i])
}
function rd(r) {
    return {
        __html: r
    }
}
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
function _y(r) {
    return r.headers.get("X-Remix-Catch") != null
}
function Cy(r) {
    return r.headers.get("X-Remix-Error") != null
}
function Py(r) {
    return Ju(r) && r.status >= 400 && r.headers.get("X-Remix-Error") == null && r.headers.get("X-Remix-Catch") == null && r.headers.get("X-Remix-Response") == null
}
function Ly(r) {
    return r.headers.get("X-Remix-Redirect") != null
}
function Ty(r) {
    var i;
    return !!((i = r.headers.get("Content-Type")) !== null && i !== void 0 && i.match(/text\/remix-deferred/))
}
function Ju(r) {
    return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.headers == "object" && typeof r.body < "u"
}
function Dy(r) {
    let i = r;
    return i && typeof i == "object" && typeof i.data == "object" && typeof i.subscribe == "function" && typeof i.cancel == "function" && typeof i.resolveData == "function"
}
async function Wd(r, i, o=0) {
    let s = new URL(r.url);
    s.searchParams.set("_data", i),
    o > 0 && await new Promise(m => setTimeout(m, 5 ** o * 10));
    let c = await Fo(r)
      , d = window.__remixRevalidation
      , h = await fetch(s.href, c).catch(m => {
        if (typeof d == "number" && d === window.__remixRevalidation && (m == null ? void 0 : m.name) === "TypeError" && o < 3)
            return Wd(r, i, o + 1);
        throw m
    }
    );
    if (Cy(h)) {
        let m = await h.json()
          , p = new Error(m.message);
        return p.stack = m.stack,
        p
    }
    if (Py(h)) {
        let m = await h.text()
          , p = new Error(m);
        return p.stack = void 0,
        p
    }
    return h
}
async function Fo(r) {
    let i = {
        signal: r.signal
    };
    if (r.method !== "GET") {
        i.method = r.method;
        let o = r.headers.get("Content-Type");
        o && /\bapplication\/json\b/.test(o) ? (i.headers = {
            "Content-Type": o
        },
        i.body = JSON.stringify(await r.json())) : o && /\btext\/plain\b/.test(o) ? (i.headers = {
            "Content-Type": o
        },
        i.body = await r.text()) : o && /\bapplication\/x-www-form-urlencoded\b/.test(o) ? i.body = new URLSearchParams(await r.text()) : i.body = await r.formData()
    }
    return i
}
const Ny = "__deferred_promise:";
async function Oy(r) {
    if (!r)
        throw new Error("parseDeferredReadableStream requires stream argument");
    let i, o = {};
    try {
        let s = My(r)
          , d = (await s.next()).value;
        if (!d)
            throw new Error("no critical data");
        let h = JSON.parse(d);
        if (typeof h == "object" && h !== null)
            for (let[m,p] of Object.entries(h))
                typeof p != "string" || !p.startsWith(Ny) || (i = i || {},
                i[m] = new Promise( (v, E) => {
                    o[m] = {
                        resolve: y => {
                            v(y),
                            delete o[m]
                        }
                        ,
                        reject: y => {
                            E(y),
                            delete o[m]
                        }
                    }
                }
                ));
        return (async () => {
            try {
                for await(let m of s) {
                    let[p,...v] = m.split(":")
                      , E = v.join(":")
                      , y = JSON.parse(E);
                    if (p === "data")
                        for (let[S,N] of Object.entries(y))
                            o[S] && o[S].resolve(N);
                    else if (p === "error")
                        for (let[S,N] of Object.entries(y)) {
                            let L = new Error(N.message);
                            L.stack = N.stack,
                            o[S] && o[S].reject(L)
                        }
                }
                for (let[m,p] of Object.entries(o))
                    p.reject(new Co(`Deferred ${m} will never be resolved`))
            } catch (m) {
                for (let p of Object.values(o))
                    p.reject(m)
            }
        }
        )(),
        new gm({
            ...h,
            ...i
        })
    } catch (s) {
        for (let c of Object.values(o))
            c.reject(s);
        throw s
    }
}
async function *My(r) {
    let i = r.getReader()
      , o = []
      , s = []
      , c = !1
      , d = new TextEncoder
      , h = new TextDecoder
      , m = async () => {
        if (s.length > 0)
            return s.shift();
        for (; !c && s.length === 0; ) {
            let v = await i.read();
            if (v.done) {
                c = !0;
                break
            }
            o.push(v.value);
            try {
                let y = h.decode(ld(...o)).split(`

`);
                if (y.length >= 2 && (s.push(...y.slice(0, -1)),
                o = [d.encode(y.slice(-1).join(`

`))]),
                s.length > 0)
                    break
            } catch {
                continue
            }
        }
        return s.length > 0 || o.length > 0 && (s = h.decode(ld(...o)).split(`

`).filter(E => E),
        o = []),
        s.shift()
    }
      , p = await m();
    for (; p; )
        yield p,
        p = await m()
}
function ld(...r) {
    let i = new Uint8Array(r.reduce( (s, c) => s + c.length, 0))
      , o = 0;
    for (let s of r)
        i.set(s, o),
        o += s.length;
    return i
}
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
function vg(r, i, o) {
    return async ({request: s, matches: c, fetcherKey: d}) => s.method !== "GET" ? Fy(s, c) : d ? jy(s, c) : zy(r, i, o(), s, c)
}
async function Fy(r, i) {
    let o = i.find(d => d.shouldLoad);
    Rn(o, "No action match found");
    let s, c = await o.resolve(async d => await d(async () => {
        let m = zo(r.url)
          , p = await Fo(r)
          , {data: v, status: E} = await Xu(m, p);
        return s = E,
        zu(v, o.route.id)
    }
    ));
    return Ju(c.result) || xr(c.result) ? {
        [o.route.id]: c
    } : {
        [o.route.id]: {
            type: c.type,
            result: ym(c.result, s)
        }
    }
}
async function zy(r, i, o, s, c) {
    let d = new Set
      , h = !1
      , m = c.map( () => id())
      , p = Promise.all(m.map(L => L.promise))
      , v = id()
      , E = Qd(zo(s.url))
      , y = await Fo(s)
      , S = {}
      , N = Promise.all(c.map(async (L, M) => L.resolve(async z => {
        if (m[M].resolve(),
        !L.shouldLoad) {
            var Q;
            if (!o.state.initialized)
                return;
            if (L.route.id in o.state.loaderData && r.routes[L.route.id] && (Q = i[L.route.id]) !== null && Q !== void 0 && Q.shouldRevalidate) {
                r.routes[L.route.id].hasLoader && (h = !0);
                return
            }
        }
        if (r.routes[L.route.id].hasClientLoader) {
            r.routes[L.route.id].hasLoader && (h = !0);
            try {
                let I = await Kd(z, E, y, L.route.id);
                S[L.route.id] = {
                    type: "data",
                    result: I
                }
            } catch (I) {
                S[L.route.id] = {
                    type: "error",
                    result: I
                }
            }
            return
        }
        r.routes[L.route.id].hasLoader && d.add(L.route.id);
        try {
            let I = await z(async () => {
                let K = await v.promise;
                return Yd(K, L.route.id)
            }
            );
            S[L.route.id] = {
                type: "data",
                result: I
            }
        } catch (I) {
            S[L.route.id] = {
                type: "error",
                result: I
            }
        }
    }
    )));
    if (await p,
    (!o.state.initialized || d.size === 0) && !window.__remixHdrActive)
        v.resolve({});
    else
        try {
            h && d.size > 0 && E.searchParams.set("_routes", c.filter(M => d.has(M.route.id)).map(M => M.route.id).join(","));
            let L = await Xu(E, y);
            v.resolve(L.data)
        } catch (L) {
            v.reject(L)
        }
    return await N,
    S
}
async function jy(r, i) {
    let o = i.find(c => c.shouldLoad);
    Rn(o, "No fetcher match found");
    let s = await o.resolve(async c => {
        let d = Qd(zo(r.url))
          , h = await Fo(r);
        return Kd(c, d, h, o.route.id)
    }
    );
    return {
        [o.route.id]: s
    }
}
function Kd(r, i, o, s) {
    return r(async () => {
        let c = new URL(i);
        c.searchParams.set("_routes", s);
        let {data: d} = await Xu(c, o);
        return Yd(d, s)
    }
    )
}
function Qd(r) {
    let i = r.searchParams.getAll("index");
    r.searchParams.delete("index");
    let o = [];
    for (let s of i)
        s && o.push(s);
    for (let s of o)
        r.searchParams.append("index", s);
    return r
}
function zo(r) {
    let i = typeof r == "string" ? new URL(r,window.location.origin) : r;
    return i.pathname === "/" ? i.pathname = "_root.data" : i.pathname = `${i.pathname.replace(/\/$/, "")}.data`,
    i
}
async function Xu(r, i) {
    let o = await fetch(r, i);
    if (new Set([100, 101, 204, 205]).has(o.status))
        return !i.method || i.method === "GET" ? {
            status: o.status,
            data: {}
        } : {
            status: o.status,
            data: {
                data: null
            }
        };
    Rn(o.body, "No response body to decode");
    try {
        let c = await Iy(o.body, window);
        return {
            status: o.status,
            data: c.value
        }
    } catch (c) {
        throw console.error(c),
        new Error(`Unable to decode turbo-stream response from URL: ${r.toString()}`)
    }
}
function Iy(r, i) {
    return fy(r, {
        plugins: [ (o, ...s) => {
            if (o === "SanitizedError") {
                let[c,d,h] = s
                  , m = Error;
                c && c in i && typeof i[c] == "function" && (m = i[c]);
                let p = new m(d);
                return p.stack = h,
                {
                    value: p
                }
            }
            if (o === "ErrorResponse") {
                let[c,d,h] = s;
                return {
                    value: new Er(d,h,c)
                }
            }
            if (o === "SingleFetchRedirect")
                return {
                    value: {
                        [Ad]: s[0]
                    }
                }
        }
        , (o, s) => {
            if (o === "SingleFetchFallback")
                return {
                    value: void 0
                };
            if (o === "SingleFetchClassInstance")
                return {
                    value: s
                }
        }
        ]
    })
}
function Yd(r, i) {
    let o = r[Ad];
    return o ? zu(o, i) : r[i] !== void 0 ? zu(r[i], i) : null
}
function zu(r, i) {
    if ("error"in r)
        throw r.error;
    if ("redirect"in r) {
        let o = {};
        throw r.revalidate && (o["X-Remix-Revalidate"] = "yes"),
        r.reload && (o["X-Remix-Reload-Document"] = "yes"),
        r.replace && (o["X-Remix-Replace"] = "yes"),
        vd(r.redirect, {
            status: r.status,
            headers: o
        })
    } else {
        if ("data"in r)
            return r.data;
        throw new Error(`No response found for routeId "${i}"`)
    }
}
function id() {
    let r, i, o = new Promise( (s, c) => {
        r = async d => {
            s(d);
            try {
                await o
            } catch {}
        }
        ,
        i = async d => {
            c(d);
            try {
                await o
            } catch {}
        }
    }
    );
    return {
        promise: o,
        resolve: r,
        reject: i
    }
}
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
class yg extends w.Component {
    constructor(i) {
        super(i),
        this.state = {
            error: i.error || null,
            location: i.location
        }
    }
    static getDerivedStateFromError(i) {
        return {
            error: i
        }
    }
    static getDerivedStateFromProps(i, o) {
        return o.location !== i.location ? {
            error: i.error || null,
            location: i.location
        } : {
            error: i.error || o.error,
            location: o.location
        }
    }
    render() {
        return this.state.error ? w.createElement(Jd, {
            error: this.state.error,
            isOutsideRemixApp: !0
        }) : this.props.children
    }
}
function Jd({error: r, isOutsideRemixApp: i}) {
    console.error(r);
    let o = w.createElement("script", {
        dangerouslySetInnerHTML: {
            __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `
        }
    });
    if (xr(r))
        return w.createElement(ju, {
            title: "Unhandled Thrown Response!"
        }, w.createElement("h1", {
            style: {
                fontSize: "24px"
            }
        }, r.status, " ", r.statusText), o);
    let s;
    if (r instanceof Error)
        s = r;
    else {
        let c = r == null ? "Unknown Error" : typeof r == "object" && "toString"in r ? r.toString() : JSON.stringify(r);
        s = new Error(c)
    }
    return w.createElement(ju, {
        title: "Application Error!",
        isOutsideRemixApp: i
    }, w.createElement("h1", {
        style: {
            fontSize: "24px"
        }
    }, "Application Error"), w.createElement("pre", {
        style: {
            padding: "2rem",
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            overflow: "auto"
        }
    }, s.stack), o)
}
function ju({title: r, renderScripts: i, isOutsideRemixApp: o, children: s}) {
    var c;
    let {routeModules: d} = nl();
    return (c = d.root) !== null && c !== void 0 && c.Layout && !o ? s : w.createElement("html", {
        lang: "en"
    }, w.createElement("head", null, w.createElement("meta", {
        charSet: "utf-8"
    }), w.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,viewport-fit=cover"
    }), w.createElement("title", null, r)), w.createElement("body", null, w.createElement("main", {
        style: {
            fontFamily: "system-ui, sans-serif",
            padding: "2rem"
        }
    }, s, i ? w.createElement(lg, null) : null)))
}
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
function Uy() {
    return w.createElement(ju, {
        title: "Loading...",
        renderScripts: !0
    }, w.createElement("script", {
        dangerouslySetInnerHTML: {
            __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://remix.run/route/hydrate-fallback " +
                "for more information."
              );
            `
        }
    }))
}
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
function Xd(r) {
    let i = {};
    return Object.values(r).forEach(o => {
        let s = o.parentId || "";
        i[s] || (i[s] = []),
        i[s].push(o)
    }
    ),
    i
}
function Ay(r, i, o) {
    let s = Gd(i)
      , c = i.HydrateFallback && (!o || r.id === "root") ? i.HydrateFallback : r.id === "root" ? Uy : void 0
      , d = i.ErrorBoundary ? i.ErrorBoundary : r.id === "root" ? () => w.createElement(Jd, {
        error: Ld()
    }) : void 0;
    return r.id === "root" && i.Layout ? {
        ...s ? {
            element: w.createElement(i.Layout, null, w.createElement(s, null))
        } : {
            Component: s
        },
        ...d ? {
            errorElement: w.createElement(i.Layout, null, w.createElement(d, null))
        } : {
            ErrorBoundary: d
        },
        ...c ? {
            hydrateFallbackElement: w.createElement(i.Layout, null, w.createElement(c, null))
        } : {
            HydrateFallback: c
        }
    } : {
        Component: s,
        ErrorBoundary: d,
        HydrateFallback: c
    }
}
function gg(r, i, o, s, c, d) {
    return Gu(i, o, s, c, d, "", Xd(i), r)
}
function wo(r, i, o) {
    if (o) {
        let h = `You cannot call ${r === "action" ? "serverAction()" : "serverLoader()"} in SPA Mode (routeId: "${i.id}")`;
        throw console.error(h),
        new Er(400,"Bad Request",new Error(h),!0)
    }
    let c = `You are trying to call ${r === "action" ? "serverAction()" : "serverLoader()"} on a route that does not have a server ${r} (routeId: "${i.id}")`;
    if (r === "loader" && !i.hasLoader || r === "action" && !i.hasAction)
        throw console.error(c),
        new Er(400,"Bad Request",new Error(c),!0)
}
function Tu(r, i) {
    let o = r === "clientAction" ? "a" : "an"
      , s = `Route "${i}" does not have ${o} ${r}, but you are trying to submit to it. To fix this, please add ${o} \`${r}\` function to the route`;
    throw console.error(s),
    new Er(405,"Method Not Allowed",new Error(s),!0)
}
function Gu(r, i, o, s, c, d="", h=Xd(r), m) {
    return (h[d] || []).map(p => {
        let v = i[p.id];
        async function E(K, $, q) {
            if (typeof q == "function")
                return await q();
            let J = await Hy(K, p);
            return $ ? Vy(J) : J
        }
        function y(K, $, q) {
            return p.hasLoader ? E(K, $, q) : Promise.resolve(null)
        }
        function S(K, $, q) {
            if (!p.hasAction)
                throw Tu("action", p.id);
            return E(K, $, q)
        }
        async function N(K) {
            let $ = i[p.id]
              , q = $ ? Bd(p, $) : Promise.resolve();
            try {
                return K()
            } finally {
                await q
            }
        }
        let L = {
            id: p.id,
            index: p.index,
            path: p.path
        };
        if (v) {
            var M, z, Q;
            Object.assign(L, {
                ...L,
                ...Ay(p, v, c),
                handle: v.handle,
                shouldRevalidate: od(s, v, p.id, m)
            });
            let K = o == null || (M = o.loaderData) === null || M === void 0 ? void 0 : M[p.id]
              , $ = o == null || (z = o.errors) === null || z === void 0 ? void 0 : z[p.id]
              , q = m == null && (((Q = v.clientLoader) === null || Q === void 0 ? void 0 : Q.hydrate) === !0 || !p.hasLoader);
            L.loader = async ({request: J, params: P}, Y) => {
                try {
                    return await N(async () => (Rn(v, "No `routeModule` available for critical-route loader"),
                    v.clientLoader ? v.clientLoader({
                        request: J,
                        params: P,
                        async serverLoader() {
                            if (wo("loader", p, c),
                            q) {
                                if (K !== void 0)
                                    return K;
                                if ($ !== void 0)
                                    throw $;
                                return null
                            }
                            return y(J, !0, Y)
                        }
                    }) : c ? null : y(J, !1, Y)))
                } finally {
                    q = !1
                }
            }
            ,
            L.loader.hydrate = Ky(p, v, c),
            L.action = ({request: J, params: P}, Y) => N(async () => {
                if (Rn(v, "No `routeModule` available for critical-route action"),
                !v.clientAction) {
                    if (c)
                        throw Tu("clientAction", p.id);
                    return S(J, !1, Y)
                }
                return v.clientAction({
                    request: J,
                    params: P,
                    async serverAction() {
                        return wo("action", p, c),
                        S(J, !0, Y)
                    }
                })
            }
            )
        } else
            p.hasClientLoader || (L.loader = ({request: K}, $) => N( () => c ? Promise.resolve(null) : y(K, !1, $))),
            p.hasClientAction || (L.action = ({request: K}, $) => N( () => {
                if (c)
                    throw Tu("clientAction", p.id);
                return S(K, !1, $)
            }
            )),
            L.lazy = async () => {
                let K = await By(p, i)
                  , $ = {
                    ...K
                };
                if (K.clientLoader) {
                    let q = K.clientLoader;
                    $.loader = (J, P) => q({
                        ...J,
                        async serverLoader() {
                            return wo("loader", p, c),
                            y(J.request, !0, P)
                        }
                    })
                }
                if (K.clientAction) {
                    let q = K.clientAction;
                    $.action = (J, P) => q({
                        ...J,
                        async serverAction() {
                            return wo("action", p, c),
                            S(J.request, !0, P)
                        }
                    })
                }
                return {
                    ...$.loader ? {
                        loader: $.loader
                    } : {},
                    ...$.action ? {
                        action: $.action
                    } : {},
                    hasErrorBoundary: $.hasErrorBoundary,
                    shouldRevalidate: od(s, $, p.id, m),
                    handle: $.handle,
                    Component: $.Component,
                    ErrorBoundary: $.ErrorBoundary
                }
            }
            ;
        let I = Gu(r, i, o, s, c, p.id, h, m);
        return I.length > 0 && (L.children = I),
        L
    }
    )
}
function od(r, i, o, s) {
    if (s)
        return $y(o, i.shouldRevalidate, s);
    if (r.v3_singleFetch && i.shouldRevalidate) {
        let c = i.shouldRevalidate;
        return d => c({
            ...d,
            defaultShouldRevalidate: !0
        })
    }
    return i.shouldRevalidate
}
function $y(r, i, o) {
    let s = !1;
    return c => s ? i ? i(c) : c.defaultShouldRevalidate : (s = !0,
    o.has(r))
}
async function By(r, i) {
    let o = await $d(r, i);
    return await Bd(r, o),
    {
        Component: Gd(o),
        ErrorBoundary: o.ErrorBoundary,
        clientAction: o.clientAction,
        clientLoader: o.clientLoader,
        handle: o.handle,
        links: o.links,
        meta: o.meta,
        shouldRevalidate: o.shouldRevalidate
    }
}
async function Hy(r, i) {
    let o = await Wd(r, i.id);
    if (o instanceof Error)
        throw o;
    if (Ly(o))
        throw Wy(o);
    if (_y(o))
        throw o;
    return Ty(o) && o.body ? await Oy(o.body) : o
}
function Vy(r) {
    if (Dy(r))
        return r.data;
    if (Ju(r)) {
        let i = r.headers.get("Content-Type");
        return i && /\bapplication\/json\b/.test(i) ? r.json() : r.text()
    }
    return r
}
function Wy(r) {
    let i = parseInt(r.headers.get("X-Remix-Status"), 10) || 302
      , o = r.headers.get("X-Remix-Redirect")
      , s = {}
      , c = r.headers.get("X-Remix-Revalidate");
    c && (s["X-Remix-Revalidate"] = c);
    let d = r.headers.get("X-Remix-Reload-Document");
    d && (s["X-Remix-Reload-Document"] = d);
    let h = r.headers.get("X-Remix-Replace");
    return h && (s["X-Remix-Replace"] = h),
    vd(o, {
        status: i,
        headers: s
    })
}
function Gd(r) {
    if (r.default == null)
        return;
    if (!(typeof r.default == "object" && Object.keys(r.default).length === 0))
        return r.default
}
function Ky(r, i, o) {
    return o && r.id !== "root" || i.clientLoader != null && (i.clientLoader.hydrate === !0 || r.hasLoader !== !0)
}
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
const xo = new Set
  , Qy = 1e3
  , Do = new Set
  , Yy = 7680;
function Zu(r, i) {
    return r.v3_lazyRouteDiscovery === !0 && !i
}
function Jy(r, i) {
    let o = new Set(i.state.matches.map(h => h.route.id))
      , s = i.state.location.pathname.split("/").filter(Boolean)
      , c = ["/"];
    for (s.pop(); s.length > 0; )
        c.push(`/${s.join("/")}`),
        s.pop();
    c.forEach(h => {
        let m = kn(i.routes, h, i.basename);
        m && m.forEach(p => o.add(p.route.id))
    }
    );
    let d = [...o].reduce( (h, m) => Object.assign(h, {
        [m]: r.routes[m]
    }), {});
    return {
        ...r,
        routes: d
    }
}
function wg(r, i, o, s, c) {
    if (Zu(o, s))
        return async ({path: d, patch: h, signal: m, fetcherKey: p}) => {
            Do.has(d) || await Zd([d], p ? window.location.href : d, r, i, o, s, c, h, m)
        }
}
function Sg(r, i, o, s, c) {
    w.useEffect( () => {
        var d;
        if (!Zu(s, c) || ((d = navigator.connection) === null || d === void 0 ? void 0 : d.saveData) === !0)
            return;
        function h(y) {
            let S = y.tagName === "FORM" ? y.getAttribute("action") : y.getAttribute("href");
            if (!S)
                return;
            let N = new URL(S,window.location.origin);
            Do.has(N.pathname) || xo.add(N.pathname)
        }
        async function m() {
            let y = Array.from(xo.keys()).filter(S => Do.has(S) ? (xo.delete(S),
            !1) : !0);
            if (y.length !== 0)
                try {
                    await Zd(y, null, i, o, s, c, r.basename, r.patchRoutes)
                } catch (S) {
                    console.error("Failed to fetch manifest patches", S)
                }
        }
        document.body.querySelectorAll("a[data-discover], form[data-discover]").forEach(y => h(y)),
        m();
        let p = Gy(m, 100);
        function v(y) {
            return y.nodeType === Node.ELEMENT_NODE
        }
        let E = new MutationObserver(y => {
            let S = new Set;
            y.forEach(N => {
                [N.target, ...N.addedNodes].forEach(L => {
                    v(L) && ((L.tagName === "A" && L.getAttribute("data-discover") || L.tagName === "FORM" && L.getAttribute("data-discover")) && S.add(L),
                    L.tagName !== "A" && L.querySelectorAll("a[data-discover], form[data-discover]").forEach(M => S.add(M)))
                }
                )
            }
            ),
            S.forEach(N => h(N)),
            p()
        }
        );
        return E.observe(document.documentElement, {
            subtree: !0,
            childList: !0,
            attributes: !0,
            attributeFilter: ["data-discover", "href", "action"]
        }),
        () => E.disconnect()
    }
    , [s, c, i, o, r])
}
const Du = "remix-manifest-version";
async function Zd(r, i, o, s, c, d, h, m, p) {
    let v = `${h ?? "/"}/__manifest`.replace(/\/+/g, "/")
      , E = new URL(v,window.location.origin);
    if (r.sort().forEach(M => E.searchParams.append("p", M)),
    E.searchParams.set("version", o.version),
    E.toString().length > Yy) {
        xo.clear();
        return
    }
    let y;
    try {
        let M = await fetch(E, {
            signal: p
        });
        if (M.ok) {
            if (M.status === 204 && M.headers.has("X-Remix-Reload-Document")) {
                if (!i) {
                    console.warn("Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.");
                    return
                }
                if (sessionStorage.getItem(Du) === o.version) {
                    console.error("Unable to discover routes due to manifest version mismatch.");
                    return
                }
                throw sessionStorage.setItem(Du, o.version),
                window.location.href = i,
                new Error("Detected manifest version mismatch, reloading...")
            } else if (M.status >= 400)
                throw new Error(await M.text())
        } else
            throw new Error(`${M.status} ${M.statusText}`);
        sessionStorage.removeItem(Du),
        y = await M.json()
    } catch (M) {
        if (p != null && p.aborted)
            return;
        throw M
    }
    let S = new Set(Object.keys(o.routes))
      , N = Object.values(y).reduce( (M, z) => S.has(z.id) ? M : Object.assign(M, {
        [z.id]: z
    }), {});
    Object.assign(o.routes, N),
    r.forEach(M => Xy(M, Do));
    let L = new Set;
    Object.values(N).forEach(M => {
        (!M.parentId || !N[M.parentId]) && L.add(M.parentId)
    }
    ),
    L.forEach(M => m(M || null, Gu(N, s, null, c, d, M)))
}
function Xy(r, i) {
    if (i.size >= Qy) {
        let o = i.values().next().value;
        typeof o == "string" && i.delete(o)
    }
    i.add(r)
}
function Gy(r, i) {
    let o;
    return (...s) => {
        window.clearTimeout(o),
        o = window.setTimeout( () => r(...s), i)
    }
}
function qd() {
    let r = w.useContext(tl);
    return Rn(r, "You must render this element inside a <DataRouterContext.Provider> element"),
    r
}
function jo() {
    let r = w.useContext(Zl);
    return Rn(r, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    r
}
const bd = w.createContext(void 0);
bd.displayName = "Remix";
function nl() {
    let r = w.useContext(bd);
    return Rn(r, "You must render this element inside a <Remix> element"),
    r
}
function eh(r, i) {
    let[o,s] = w.useState(!1)
      , [c,d] = w.useState(!1)
      , {onFocus: h, onBlur: m, onMouseEnter: p, onMouseLeave: v, onTouchStart: E} = i
      , y = w.useRef(null);
    w.useEffect( () => {
        if (r === "render" && d(!0),
        r === "viewport") {
            let L = z => {
                z.forEach(Q => {
                    d(Q.isIntersecting)
                }
                )
            }
              , M = new IntersectionObserver(L,{
                threshold: .5
            });
            return y.current && M.observe(y.current),
            () => {
                M.disconnect()
            }
        }
    }
    , [r]);
    let S = () => {
        r === "intent" && s(!0)
    }
      , N = () => {
        r === "intent" && (s(!1),
        d(!1))
    }
    ;
    return w.useEffect( () => {
        if (o) {
            let L = setTimeout( () => {
                d(!0)
            }
            , 100);
            return () => {
                clearTimeout(L)
            }
        }
    }
    , [o]),
    [c, y, {
        onFocus: Jl(h, S),
        onBlur: Jl(m, N),
        onMouseEnter: Jl(p, S),
        onMouseLeave: Jl(v, N),
        onTouchStart: Jl(E, S)
    }]
}
const qu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function bu(r, i, o) {
    return r === "render" && !i && !o ? "true" : void 0
}
let Zy = w.forwardRef( ({to: r, prefetch: i="none", discover: o="render", ...s}, c) => {
    let d = typeof r == "string" && qu.test(r)
      , h = Wu(r)
      , [m,p,v] = eh(i, s);
    return w.createElement(w.Fragment, null, w.createElement($v, lt({}, s, v, {
        ref: th(c, p),
        to: r,
        "data-discover": bu(o, d, s.reloadDocument)
    })), m && !d ? w.createElement(ts, {
        page: h
    }) : null)
}
);
Zy.displayName = "NavLink";
let qy = w.forwardRef( ({to: r, prefetch: i="none", discover: o="render", ...s}, c) => {
    let d = typeof r == "string" && qu.test(r)
      , h = Wu(r)
      , [m,p,v] = eh(i, s);
    return w.createElement(w.Fragment, null, w.createElement(Nd, lt({}, s, v, {
        ref: th(c, p),
        to: r,
        "data-discover": bu(o, d, s.reloadDocument)
    })), m && !d ? w.createElement(ts, {
        page: h
    }) : null)
}
);
qy.displayName = "Link";
let by = w.forwardRef( ({discover: r="render", ...i}, o) => {
    let s = typeof i.action == "string" && qu.test(i.action);
    return w.createElement(Od, lt({}, i, {
        ref: o,
        "data-discover": bu(r, s, i.reloadDocument)
    }))
}
);
by.displayName = "Form";
function Jl(r, i) {
    return o => {
        r && r(o),
        o.defaultPrevented || i(o)
    }
}
function es(r, i, o) {
    if (o && !ko)
        return [r[0]];
    if (i) {
        let s = r.findIndex(c => i[c.route.id] !== void 0);
        return r.slice(0, s + 1)
    }
    return r
}
function Eg() {
    let {isSpaMode: r, manifest: i, routeModules: o, criticalCss: s} = nl()
      , {errors: c, matches: d} = jo()
      , h = es(d, c, r)
      , m = w.useMemo( () => py(h, o, i), [h, o, i]);
    return w.createElement(w.Fragment, null, s ? w.createElement("style", {
        dangerouslySetInnerHTML: {
            __html: s
        }
    }) : null, m.map( ({key: p, link: v}) => Qu(v) ? w.createElement(ts, lt({
        key: p
    }, v)) : w.createElement("link", lt({
        key: p
    }, v))))
}
function ts({page: r, ...i}) {
    let {router: o} = qd()
      , s = w.useMemo( () => kn(o.routes, r, o.basename), [o.routes, r, o.basename]);
    return s ? w.createElement(tg, lt({
        page: r,
        matches: s
    }, i)) : (console.warn(`Tried to prefetch ${r} but no routes matched.`),
    null)
}
function eg(r) {
    let {manifest: i, routeModules: o} = nl()
      , [s,c] = w.useState([]);
    return w.useEffect( () => {
        let d = !1;
        return yy(r, i, o).then(h => {
            d || c(h)
        }
        ),
        () => {
            d = !0
        }
    }
    , [r, i, o]),
    s
}
function tg({page: r, matches: i, ...o}) {
    let s = Cn()
      , {future: c, manifest: d, routeModules: h} = nl()
      , {loaderData: m, matches: p} = jo()
      , v = w.useMemo( () => nd(r, i, p, d, s, c, "data"), [r, i, p, d, s, c])
      , E = w.useMemo( () => {
        if (!c.v3_singleFetch)
            return gy(r, v, d);
        if (r === s.pathname + s.search + s.hash)
            return [];
        let L = new Set
          , M = !1;
        if (i.forEach(Q => {
            var I;
            d.routes[Q.route.id].hasLoader && (!v.some(K => K.route.id === Q.route.id) && Q.route.id in m && (I = h[Q.route.id]) !== null && I !== void 0 && I.shouldRevalidate || d.routes[Q.route.id].hasClientLoader ? M = !0 : L.add(Q.route.id))
        }
        ),
        L.size === 0)
            return [];
        let z = zo(r);
        return M && L.size > 0 && z.searchParams.set("_routes", i.filter(Q => L.has(Q.route.id)).map(Q => Q.route.id).join(",")),
        [z.pathname + z.search]
    }
    , [c.v3_singleFetch, m, s, d, v, i, r, h])
      , y = w.useMemo( () => nd(r, i, p, d, s, c, "assets"), [r, i, p, d, s, c])
      , S = w.useMemo( () => wy(y, d), [y, d])
      , N = eg(y);
    return w.createElement(w.Fragment, null, E.map(L => w.createElement("link", lt({
        key: L,
        rel: "prefetch",
        as: "fetch",
        href: L
    }, o))), S.map(L => w.createElement("link", lt({
        key: L,
        rel: "modulepreload",
        href: L
    }, o))), N.map( ({key: L, link: M}) => w.createElement("link", lt({
        key: L
    }, M))))
}
function xg() {
    let {isSpaMode: r, routeModules: i} = nl()
      , {errors: o, matches: s, loaderData: c} = jo()
      , d = Cn()
      , h = es(s, o, r)
      , m = null;
    o && (m = o[h[h.length - 1].route.id]);
    let p = []
      , v = null
      , E = [];
    for (let y = 0; y < h.length; y++) {
        let S = h[y]
          , N = S.route.id
          , L = c[N]
          , M = S.params
          , z = i[N]
          , Q = []
          , I = {
            id: N,
            data: L,
            meta: [],
            params: S.params,
            pathname: S.pathname,
            handle: S.route.handle,
            error: m
        };
        if (E[y] = I,
        z != null && z.meta ? Q = typeof z.meta == "function" ? z.meta({
            data: L,
            params: M,
            location: d,
            matches: E,
            error: m
        }) : Array.isArray(z.meta) ? [...z.meta] : z.meta : v && (Q = [...v]),
        Q = Q || [],
        !Array.isArray(Q))
            throw new Error("The route at " + S.route.path + ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`);
        I.meta = Q,
        E[y] = I,
        p = [...Q],
        v = p
    }
    return w.createElement(w.Fragment, null, p.flat().map(y => {
        if (!y)
            return null;
        if ("tagName"in y) {
            let {tagName: S, ...N} = y;
            if (!ng(S))
                return console.warn(`A meta object uses an invalid tagName: ${S}. Expected either 'link' or 'meta'`),
                null;
            let L = S;
            return w.createElement(L, lt({
                key: JSON.stringify(N)
            }, N))
        }
        if ("title"in y)
            return w.createElement("title", {
                key: "title"
            }, String(y.title));
        if ("charset"in y && (y.charSet ?? (y.charSet = y.charset),
        delete y.charset),
        "charSet"in y && y.charSet != null)
            return typeof y.charSet == "string" ? w.createElement("meta", {
                key: "charSet",
                charSet: y.charSet
            }) : null;
        if ("script:ld+json"in y)
            try {
                let S = JSON.stringify(y["script:ld+json"]);
                return w.createElement("script", {
                    key: `script:ld+json:${S}`,
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: S
                    }
                })
            } catch {
                return null
            }
        return w.createElement("meta", lt({
            key: JSON.stringify(y)
        }, y))
    }
    ))
}
function ng(r) {
    return typeof r == "string" && /^(meta|link)$/.test(r)
}
function rg(r) {
    return w.createElement(mv, r)
}
let ko = !1;
function lg(r) {
    let {manifest: i, serverHandoffString: o, abortDelay: s, serializeError: c, isSpaMode: d, future: h, renderMeta: m} = nl()
      , {router: p, static: v, staticContext: E} = qd()
      , {matches: y} = jo()
      , S = Zu(h, d);
    m && (m.didRenderScripts = !0);
    let N = es(y, null, d);
    w.useEffect( () => {
        ko = !0
    }
    , []);
    let L = (J, P) => {
        let Y;
        return c && P instanceof Error ? Y = c(P) : Y = P,
        `${JSON.stringify(J)}:__remixContext.p(!1, ${go(JSON.stringify(Y))})`
    }
      , M = (J, P, Y) => {
        let he;
        try {
            he = JSON.stringify(Y)
        } catch (ue) {
            return L(P, ue)
        }
        return `${JSON.stringify(P)}:__remixContext.p(${go(he)})`
    }
      , z = (J, P, Y) => {
        let he;
        return c && Y instanceof Error ? he = c(Y) : he = Y,
        `__remixContext.r(${JSON.stringify(J)}, ${JSON.stringify(P)}, !1, ${go(JSON.stringify(he))})`
    }
      , Q = (J, P, Y) => {
        let he;
        try {
            he = JSON.stringify(Y)
        } catch (ue) {
            return z(J, P, ue)
        }
        return `__remixContext.r(${JSON.stringify(J)}, ${JSON.stringify(P)}, ${go(he)})`
    }
      , I = []
      , K = w.useMemo( () => {
        var J;
        let P = h.v3_singleFetch ? "window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());" : ""
          , Y = E ? `window.__remixContext = ${o};${P}` : " "
          , he = h.v3_singleFetch || E == null ? void 0 : E.activeDeferreds;
        Y += he ? ["__remixContext.p = function(v,e,p,x) {", "  if (typeof e !== 'undefined') {", `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p=Promise.reject(x);", "  } else {", "    p=Promise.resolve(v);", "  }", "  return p;", "};", "__remixContext.n = function(i,k) {", "  __remixContext.t = __remixContext.t || {};", "  __remixContext.t[i] = __remixContext.t[i] || {};", "  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});", typeof s == "number" ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${s});` : "", "  return p;", "};", "__remixContext.r = function(i,k,v,e,p,x) {", "  p = __remixContext.t[i][k];", "  if (typeof e !== 'undefined') {", `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p.e(x);", "  } else {", "    p.r(v);", "  }", "};"].join(`
`) + Object.entries(he).map( ([Re,Se]) => {
            let Me = new Set(Se.pendingKeys)
              , Ue = Se.deferredKeys.map(Fe => {
                if (Me.has(Fe))
                    return I.push(w.createElement(ad, {
                        key: `${Re} | ${Fe}`,
                        deferredData: Se,
                        routeId: Re,
                        dataKey: Fe,
                        scriptProps: r,
                        serializeData: Q,
                        serializeError: z
                    })),
                    `${JSON.stringify(Fe)}:__remixContext.n(${JSON.stringify(Re)}, ${JSON.stringify(Fe)})`;
                {
                    let Je = Se.data[Fe];
                    return typeof Je._error < "u" ? L(Fe, Je._error) : M(Re, Fe, Je._data)
                }
            }
            ).join(`,
`);
            return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(Re)}], {${Ue}});`
        }
        ).join(`
`) + (I.length > 0 ? `__remixContext.a=${I.length};` : "") : "";
        let ue = v ? `${(J = i.hmr) !== null && J !== void 0 && J.runtime ? `import ${JSON.stringify(i.hmr.runtime)};` : ""}${S ? "" : `import ${JSON.stringify(i.url)}`};
${N.map( (Re, Se) => `import * as route${Se} from ${JSON.stringify(i.routes[Re.route.id].module)};`).join(`
`)}
${S ? `window.__remixManifest = ${JSON.stringify(Jy(i, p), null, 2)};` : ""}
window.__remixRouteModules = {${N.map( (Re, Se) => `${JSON.stringify(Re.route.id)}:route${Se}`).join(",")}};

import(${JSON.stringify(i.entry.module)});` : " ";
        return w.createElement(w.Fragment, null, w.createElement("script", lt({}, r, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: rd(Y),
            type: void 0
        })), w.createElement("script", lt({}, r, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: rd(ue),
            type: "module",
            async: !0
        })))
    }
    , []);
    if (!v && typeof __remixContext == "object" && __remixContext.a)
        for (let J = 0; J < __remixContext.a; J++)
            I.push(w.createElement(ad, {
                key: J,
                scriptProps: r,
                serializeData: Q,
                serializeError: z
            }));
    let $ = N.map(J => {
        let P = i.routes[J.route.id];
        return (P.imports || []).concat([P.module])
    }
    ).flat(1)
      , q = ko ? [] : i.entry.imports.concat($);
    return ko ? null : w.createElement(w.Fragment, null, S ? null : w.createElement("link", {
        rel: "modulepreload",
        href: i.url,
        crossOrigin: r.crossOrigin
    }), w.createElement("link", {
        rel: "modulepreload",
        href: i.entry.module,
        crossOrigin: r.crossOrigin
    }), og(q).map(J => w.createElement("link", {
        key: J,
        rel: "modulepreload",
        href: J,
        crossOrigin: r.crossOrigin
    })), K, I)
}
function ad({dataKey: r, deferredData: i, routeId: o, scriptProps: s, serializeData: c, serializeError: d}) {
    return typeof document > "u" && i && r && o && Rn(i.pendingKeys.includes(r), `Deferred data for route ${o} with key ${r} was not pending but tried to render a script for it.`),
    w.createElement(w.Suspense, {
        fallback: typeof document > "u" && i && r && o ? null : w.createElement("script", lt({}, s, {
            async: !0,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: " "
            }
        }))
    }, typeof document > "u" && i && r && o ? w.createElement(rg, {
        resolve: i.data[r],
        errorElement: w.createElement(ig, {
            dataKey: r,
            routeId: o,
            scriptProps: s,
            serializeError: d
        }),
        children: h => w.createElement("script", lt({}, s, {
            async: !0,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: c(o, r, h)
            }
        }))
    }) : w.createElement("script", lt({}, s, {
        async: !0,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: " "
        }
    })))
}
function ig({dataKey: r, routeId: i, scriptProps: o, serializeError: s}) {
    let c = cv();
    return w.createElement("script", lt({}, o, {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: s(i, r, c)
        }
    }))
}
function og(r) {
    return [...new Set(r)]
}
function kg() {
    return av()
}
function Rg(r) {
    return uv(r)
}
function _g(r={}) {
    return Kv(r)
}
function th(...r) {
    return i => {
        r.forEach(o => {
            typeof o == "function" ? o(i) : o != null && (o.current = i)
        }
        )
    }
}
export {Iu as A, sd as B, Hp as C, kg as D, Er as E, rg as F, fd as G, cd as H, Yp as I, Qm as J, iv as K, qy as L, xg as M, fg as O, bd as R, lg as S, lt as _, cg as a, vg as b, Gu as c, Iy as d, sg as e, gg as f, wg as g, yg as h, Rn as i, pg as j, dg as k, Qp as l, kn as m, ug as n, nl as o, Cn as p, ov as q, w as r, Ky as s, mg as t, Sg as u, _g as v, Rg as w, Ld as x, Eg as y, xr as z};
