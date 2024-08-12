(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty2 = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty2.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = require_object_assign();
      var n = "function" === typeof Symbol && Symbol.for;
      var p = n ? Symbol.for("react.element") : 60103;
      var q = n ? Symbol.for("react.portal") : 60106;
      var r = n ? Symbol.for("react.fragment") : 60107;
      var t = n ? Symbol.for("react.strict_mode") : 60108;
      var u = n ? Symbol.for("react.profiler") : 60114;
      var v = n ? Symbol.for("react.provider") : 60109;
      var w = n ? Symbol.for("react.context") : 60110;
      var x2 = n ? Symbol.for("react.forward_ref") : 60112;
      var y = n ? Symbol.for("react.suspense") : 60113;
      var z = n ? Symbol.for("react.memo") : 60115;
      var A = n ? Symbol.for("react.lazy") : 60116;
      var B = "function" === typeof Symbol && Symbol.iterator;
      function C(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
          b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var D = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var E = {};
      function F(a, b, c) {
        this.props = a;
        this.context = b;
        this.refs = E;
        this.updater = c || D;
      }
      F.prototype.isReactComponent = {};
      F.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a)
          throw Error(C(85));
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      F.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function G() {
      }
      G.prototype = F.prototype;
      function H(a, b, c) {
        this.props = a;
        this.context = b;
        this.refs = E;
        this.updater = c || D;
      }
      var I = H.prototype = new G();
      I.constructor = H;
      l(I, F.prototype);
      I.isPureReactComponent = true;
      var J = { current: null };
      var K = Object.prototype.hasOwnProperty;
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a, b, c) {
        var e, d = {}, g = null, k = null;
        if (null != b)
          for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b)
            K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
        var f = arguments.length - 2;
        if (1 === f)
          d.children = c;
        else if (1 < f) {
          for (var h = Array(f), m = 0; m < f; m++)
            h[m] = arguments[m + 2];
          d.children = h;
        }
        if (a && a.defaultProps)
          for (e in f = a.defaultProps, f)
            void 0 === d[e] && (d[e] = f[e]);
        return { $$typeof: p, type: a, key: g, ref: k, props: d, _owner: J.current };
      }
      function N(a, b) {
        return { $$typeof: p, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O(a) {
        return "object" === typeof a && null !== a && a.$$typeof === p;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + ("" + a).replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P = /\/+/g;
      var Q = [];
      function R(a, b, c, e) {
        if (Q.length) {
          var d = Q.pop();
          d.result = a;
          d.keyPrefix = b;
          d.func = c;
          d.context = e;
          d.count = 0;
          return d;
        }
        return { result: a, keyPrefix: b, func: c, context: e, count: 0 };
      }
      function S(a) {
        a.result = null;
        a.keyPrefix = null;
        a.func = null;
        a.context = null;
        a.count = 0;
        10 > Q.length && Q.push(a);
      }
      function T(a, b, c, e) {
        var d = typeof a;
        if ("undefined" === d || "boolean" === d)
          a = null;
        var g = false;
        if (null === a)
          g = true;
        else
          switch (d) {
            case "string":
            case "number":
              g = true;
              break;
            case "object":
              switch (a.$$typeof) {
                case p:
                case q:
                  g = true;
              }
          }
        if (g)
          return c(e, a, "" === b ? "." + U(a, 0) : b), 1;
        g = 0;
        b = "" === b ? "." : b + ":";
        if (Array.isArray(a))
          for (var k = 0; k < a.length; k++) {
            d = a[k];
            var f = b + U(d, k);
            g += T(d, f, c, e);
          }
        else if (null === a || "object" !== typeof a ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f)
          for (a = f.call(a), k = 0; !(d = a.next()).done; )
            d = d.value, f = b + U(d, k++), g += T(d, f, c, e);
        else if ("object" === d)
          throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
        return g;
      }
      function V(a, b, c) {
        return null == a ? 0 : T(a, "", b, c);
      }
      function U(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
      }
      function W(a, b) {
        a.func.call(a.context, b, a.count++);
      }
      function aa(a, b, c) {
        var e = a.result, d = a.keyPrefix;
        a = a.func.call(a.context, b, a.count++);
        Array.isArray(a) ? X(a, e, c, function(a2) {
          return a2;
        }) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
      }
      function X(a, b, c, e, d) {
        var g = "";
        null != c && (g = ("" + c).replace(P, "$&/") + "/");
        b = R(b, g, e, d);
        V(a, aa, b);
        S(b);
      }
      var Y = { current: null };
      function Z() {
        var a = Y.current;
        if (null === a)
          throw Error(C(321));
        return a;
      }
      var ba = { ReactCurrentDispatcher: Y, ReactCurrentBatchConfig: { suspense: null }, ReactCurrentOwner: J, IsSomeRendererActing: { current: false }, assign: l };
      exports.Children = { map: function(a, b, c) {
        if (null == a)
          return a;
        var e = [];
        X(a, e, null, b, c);
        return e;
      }, forEach: function(a, b, c) {
        if (null == a)
          return a;
        b = R(null, null, b, c);
        V(a, W, b);
        S(b);
      }, count: function(a) {
        return V(a, function() {
          return null;
        }, null);
      }, toArray: function(a) {
        var b = [];
        X(a, b, null, function(a2) {
          return a2;
        });
        return b;
      }, only: function(a) {
        if (!O(a))
          throw Error(C(143));
        return a;
      } };
      exports.Component = F;
      exports.Fragment = r;
      exports.Profiler = u;
      exports.PureComponent = H;
      exports.StrictMode = t;
      exports.Suspense = y;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;
      exports.cloneElement = function(a, b, c) {
        if (null === a || void 0 === a)
          throw Error(C(267, a));
        var e = l({}, a.props), d = a.key, g = a.ref, k = a._owner;
        if (null != b) {
          void 0 !== b.ref && (g = b.ref, k = J.current);
          void 0 !== b.key && (d = "" + b.key);
          if (a.type && a.type.defaultProps)
            var f = a.type.defaultProps;
          for (h in b)
            K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
        }
        var h = arguments.length - 2;
        if (1 === h)
          e.children = c;
        else if (1 < h) {
          f = Array(h);
          for (var m = 0; m < h; m++)
            f[m] = arguments[m + 2];
          e.children = f;
        }
        return {
          $$typeof: p,
          type: a.type,
          key: d,
          ref: g,
          props: e,
          _owner: k
        };
      };
      exports.createContext = function(a, b) {
        void 0 === b && (b = null);
        a = { $$typeof: w, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
        a.Provider = { $$typeof: v, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M;
      exports.createFactory = function(a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: x2, render: a };
      };
      exports.isValidElement = O;
      exports.lazy = function(a) {
        return { $$typeof: A, _ctor: a, _status: -1, _result: null };
      };
      exports.memo = function(a, b) {
        return { $$typeof: z, type: a, compare: void 0 === b ? null : b };
      };
      exports.useCallback = function(a, b) {
        return Z().useCallback(a, b);
      };
      exports.useContext = function(a, b) {
        return Z().useContext(a, b);
      };
      exports.useDebugValue = function() {
      };
      exports.useEffect = function(a, b) {
        return Z().useEffect(a, b);
      };
      exports.useImperativeHandle = function(a, b, c) {
        return Z().useImperativeHandle(a, b, c);
      };
      exports.useLayoutEffect = function(a, b) {
        return Z().useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return Z().useMemo(a, b);
      };
      exports.useReducer = function(a, b, c) {
        return Z().useReducer(a, b, c);
      };
      exports.useRef = function(a) {
        return Z().useRef(a);
      };
      exports.useState = function(a) {
        return Z().useState(a);
      };
      exports.version = "16.13.1";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      var f;
      var g;
      var h;
      var k;
      var l;
      if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
        p = null, q = null, t = function() {
          if (null !== p)
            try {
              var a = exports.unstable_now();
              p(true, a);
              p = null;
            } catch (b) {
              throw setTimeout(t, 0), b;
            }
        }, u = Date.now();
        exports.unstable_now = function() {
          return Date.now() - u;
        };
        f = function(a) {
          null !== p ? setTimeout(f, 0, a) : (p = a, setTimeout(t, 0));
        };
        g = function(a, b) {
          q = setTimeout(a, b);
        };
        h = function() {
          clearTimeout(q);
        };
        k = function() {
          return false;
        };
        l = exports.unstable_forceFrameRate = function() {
        };
      } else {
        w = window.performance, x2 = window.Date, y = window.setTimeout, z = window.clearTimeout;
        if ("undefined" !== typeof console) {
          A = window.cancelAnimationFrame;
          "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
          "function" !== typeof A && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
        }
        if ("object" === typeof w && "function" === typeof w.now)
          exports.unstable_now = function() {
            return w.now();
          };
        else {
          B = x2.now();
          exports.unstable_now = function() {
            return x2.now() - B;
          };
        }
        C = false, D = null, E = -1, F = 5, G = 0;
        k = function() {
          return exports.unstable_now() >= G;
        };
        l = function() {
        };
        exports.unstable_forceFrameRate = function(a) {
          0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : F = 0 < a ? Math.floor(1e3 / a) : 5;
        };
        H = new MessageChannel(), I = H.port2;
        H.port1.onmessage = function() {
          if (null !== D) {
            var a = exports.unstable_now();
            G = a + F;
            try {
              D(true, a) ? I.postMessage(null) : (C = false, D = null);
            } catch (b) {
              throw I.postMessage(null), b;
            }
          } else
            C = false;
        };
        f = function(a) {
          D = a;
          C || (C = true, I.postMessage(null));
        };
        g = function(a, b) {
          E = y(function() {
            a(exports.unstable_now());
          }, b);
        };
        h = function() {
          z(E);
          E = -1;
        };
      }
      var p;
      var q;
      var t;
      var u;
      var w;
      var x2;
      var y;
      var z;
      var A;
      var B;
      var C;
      var D;
      var E;
      var F;
      var G;
      var H;
      var I;
      function J(a, b) {
        var c = a.length;
        a.push(b);
        a:
          for (; ; ) {
            var d = c - 1 >>> 1, e = a[d];
            if (void 0 !== e && 0 < K(e, b))
              a[d] = b, a[c] = e, c = d;
            else
              break a;
          }
      }
      function L(a) {
        a = a[0];
        return void 0 === a ? null : a;
      }
      function M(a) {
        var b = a[0];
        if (void 0 !== b) {
          var c = a.pop();
          if (c !== b) {
            a[0] = c;
            a:
              for (var d = 0, e = a.length; d < e; ) {
                var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v];
                if (void 0 !== n && 0 > K(n, c))
                  void 0 !== r && 0 > K(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);
                else if (void 0 !== r && 0 > K(r, c))
                  a[d] = r, a[v] = c, d = v;
                else
                  break a;
              }
          }
          return b;
        }
        return null;
      }
      function K(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      var N = [];
      var O = [];
      var P = 1;
      var Q = null;
      var R = 3;
      var S = false;
      var T = false;
      var U = false;
      function V(a) {
        for (var b = L(O); null !== b; ) {
          if (null === b.callback)
            M(O);
          else if (b.startTime <= a)
            M(O), b.sortIndex = b.expirationTime, J(N, b);
          else
            break;
          b = L(O);
        }
      }
      function W(a) {
        U = false;
        V(a);
        if (!T)
          if (null !== L(N))
            T = true, f(X);
          else {
            var b = L(O);
            null !== b && g(W, b.startTime - a);
          }
      }
      function X(a, b) {
        T = false;
        U && (U = false, h());
        S = true;
        var c = R;
        try {
          V(b);
          for (Q = L(N); null !== Q && (!(Q.expirationTime > b) || a && !k()); ) {
            var d = Q.callback;
            if (null !== d) {
              Q.callback = null;
              R = Q.priorityLevel;
              var e = d(Q.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e ? Q.callback = e : Q === L(N) && M(N);
              V(b);
            } else
              M(N);
            Q = L(N);
          }
          if (null !== Q)
            var m = true;
          else {
            var n = L(O);
            null !== n && g(W, n.startTime - b);
            m = false;
          }
          return m;
        } finally {
          Q = null, R = c, S = false;
        }
      }
      function Y(a) {
        switch (a) {
          case 1:
            return -1;
          case 2:
            return 250;
          case 5:
            return 1073741823;
          case 4:
            return 1e4;
          default:
            return 5e3;
        }
      }
      var Z = l;
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        T || S || (T = true, f(X));
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return R;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return L(N);
      };
      exports.unstable_next = function(a) {
        switch (R) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = R;
        }
        var c = R;
        R = b;
        try {
          return a();
        } finally {
          R = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = Z;
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = R;
        R = a;
        try {
          return b();
        } finally {
          R = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        if ("object" === typeof c && null !== c) {
          var e = c.delay;
          e = "number" === typeof e && 0 < e ? d + e : d;
          c = "number" === typeof c.timeout ? c.timeout : Y(a);
        } else
          c = Y(a), e = d;
        c = e + c;
        a = { id: P++, callback: b, priorityLevel: a, startTime: e, expirationTime: c, sortIndex: -1 };
        e > d ? (a.sortIndex = e, J(O, a), null === L(N) && a === L(O) && (U ? h() : U = true, g(W, e - d))) : (a.sortIndex = c, J(N, a), T || S || (T = true, f(X)));
        return a;
      };
      exports.unstable_shouldYield = function() {
        var a = exports.unstable_now();
        V(a);
        var b = L(N);
        return b !== Q && null !== Q && null !== b && null !== b.callback && b.startTime <= a && b.expirationTime < Q.expirationTime || k();
      };
      exports.unstable_wrapCallback = function(a) {
        var b = R;
        return function() {
          var c = R;
          R = b;
          try {
            return a.apply(this, arguments);
          } finally {
            R = c;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var n = require_object_assign();
      var r = require_scheduler();
      function u(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
          b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      if (!aa)
        throw Error(u(227));
      function ba(a, b, c, d, e, f, g, h, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l);
        } catch (m) {
          this.onError(m);
        }
      }
      var da = false;
      var ea = null;
      var fa = false;
      var ha = null;
      var ia = { onError: function(a) {
        da = true;
        ea = a;
      } };
      function ja(a, b, c, d, e, f, g, h, k) {
        da = false;
        ea = null;
        ba.apply(ia, arguments);
      }
      function ka(a, b, c, d, e, f, g, h, k) {
        ja.apply(this, arguments);
        if (da) {
          if (da) {
            var l = ea;
            da = false;
            ea = null;
          } else
            throw Error(u(198));
          fa || (fa = true, ha = l);
        }
      }
      var la = null;
      var ma = null;
      var na = null;
      function oa(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = na(c);
        ka(d, b, void 0, a);
        a.currentTarget = null;
      }
      var pa = null;
      var qa = {};
      function ra() {
        if (pa)
          for (var a in qa) {
            var b = qa[a], c = pa.indexOf(a);
            if (!(-1 < c))
              throw Error(u(96, a));
            if (!sa[c]) {
              if (!b.extractEvents)
                throw Error(u(97, a));
              sa[c] = b;
              c = b.eventTypes;
              for (var d in c) {
                var e = void 0;
                var f = c[d], g = b, h = d;
                if (ta.hasOwnProperty(h))
                  throw Error(u(99, h));
                ta[h] = f;
                var k = f.phasedRegistrationNames;
                if (k) {
                  for (e in k)
                    k.hasOwnProperty(e) && ua(k[e], g, h);
                  e = true;
                } else
                  f.registrationName ? (ua(f.registrationName, g, h), e = true) : e = false;
                if (!e)
                  throw Error(u(98, d, a));
              }
            }
          }
      }
      function ua(a, b, c) {
        if (va[a])
          throw Error(u(100, a));
        va[a] = b;
        wa[a] = b.eventTypes[c].dependencies;
      }
      var sa = [];
      var ta = {};
      var va = {};
      var wa = {};
      function xa(a) {
        var b = false, c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var d = a[c];
            if (!qa.hasOwnProperty(c) || qa[c] !== d) {
              if (qa[c])
                throw Error(u(102, c));
              qa[c] = d;
              b = true;
            }
          }
        b && ra();
      }
      var ya = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var za = null;
      var Aa = null;
      var Ba = null;
      function Ca(a) {
        if (a = ma(a)) {
          if ("function" !== typeof za)
            throw Error(u(280));
          var b = a.stateNode;
          b && (b = la(b), za(a.stateNode, a.type, b));
        }
      }
      function Da(a) {
        Aa ? Ba ? Ba.push(a) : Ba = [a] : Aa = a;
      }
      function Ea() {
        if (Aa) {
          var a = Aa, b = Ba;
          Ba = Aa = null;
          Ca(a);
          if (b)
            for (a = 0; a < b.length; a++)
              Ca(b[a]);
        }
      }
      function Fa(a, b) {
        return a(b);
      }
      function Ga(a, b, c, d, e) {
        return a(b, c, d, e);
      }
      function Ha() {
      }
      var Ia = Fa;
      var Ja = false;
      var Ka = false;
      function La() {
        if (null !== Aa || null !== Ba)
          Ha(), Ea();
      }
      function Ma(a, b, c) {
        if (Ka)
          return a(b, c);
        Ka = true;
        try {
          return Ia(a, b, c);
        } finally {
          Ka = false, La();
        }
      }
      var Na = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var Oa = Object.prototype.hasOwnProperty;
      var Pa = {};
      var Qa = {};
      function Ra(a) {
        if (Oa.call(Qa, a))
          return true;
        if (Oa.call(Pa, a))
          return false;
        if (Na.test(a))
          return Qa[a] = true;
        Pa[a] = true;
        return false;
      }
      function Sa(a, b, c, d) {
        if (null !== c && 0 === c.type)
          return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d)
              return false;
            if (null !== c)
              return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function Ta(a, b, c, d) {
        if (null === b || "undefined" === typeof b || Sa(a, b, c, d))
          return true;
        if (d)
          return false;
        if (null !== c)
          switch (c.type) {
            case 3:
              return !b;
            case 4:
              return false === b;
            case 5:
              return isNaN(b);
            case 6:
              return isNaN(b) || 1 > b;
          }
        return false;
      }
      function v(a, b, c, d, e, f) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f;
      }
      var C = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        C[a] = new v(a, 0, false, a, null, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        C[b] = new v(b, 1, false, a[1], null, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        C[a] = new v(a, 2, false, a.toLowerCase(), null, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        C[a] = new v(a, 2, false, a, null, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        C[a] = new v(a, 3, false, a.toLowerCase(), null, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        C[a] = new v(a, 3, true, a, null, false);
      });
      ["capture", "download"].forEach(function(a) {
        C[a] = new v(a, 4, false, a, null, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        C[a] = new v(a, 6, false, a, null, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        C[a] = new v(a, 5, false, a.toLowerCase(), null, false);
      });
      var Ua = /[\-:]([a-z])/g;
      function Va(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(
          Ua,
          Va
        );
        C[b] = new v(b, 1, false, a, null, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(Ua, Va);
        C[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(Ua, Va);
        C[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        C[a] = new v(a, 1, false, a.toLowerCase(), null, false);
      });
      C.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        C[a] = new v(a, 1, false, a.toLowerCase(), null, true);
      });
      var Wa = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      Wa.hasOwnProperty("ReactCurrentDispatcher") || (Wa.ReactCurrentDispatcher = { current: null });
      Wa.hasOwnProperty("ReactCurrentBatchConfig") || (Wa.ReactCurrentBatchConfig = { suspense: null });
      function Xa(a, b, c, d) {
        var e = C.hasOwnProperty(b) ? C[b] : null;
        var f = null !== e ? 0 === e.type : d ? false : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? false : true;
        f || (Ta(b, c, e, d) && (c = null), d || null === e ? Ra(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
      }
      var Ya = /^(.*)[\\\/]/;
      var E = "function" === typeof Symbol && Symbol.for;
      var Za = E ? Symbol.for("react.element") : 60103;
      var $a = E ? Symbol.for("react.portal") : 60106;
      var ab = E ? Symbol.for("react.fragment") : 60107;
      var bb = E ? Symbol.for("react.strict_mode") : 60108;
      var cb = E ? Symbol.for("react.profiler") : 60114;
      var db = E ? Symbol.for("react.provider") : 60109;
      var eb = E ? Symbol.for("react.context") : 60110;
      var fb = E ? Symbol.for("react.concurrent_mode") : 60111;
      var gb = E ? Symbol.for("react.forward_ref") : 60112;
      var hb = E ? Symbol.for("react.suspense") : 60113;
      var ib = E ? Symbol.for("react.suspense_list") : 60120;
      var jb = E ? Symbol.for("react.memo") : 60115;
      var kb = E ? Symbol.for("react.lazy") : 60116;
      var lb = E ? Symbol.for("react.block") : 60121;
      var mb = "function" === typeof Symbol && Symbol.iterator;
      function nb(a) {
        if (null === a || "object" !== typeof a)
          return null;
        a = mb && a[mb] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      function ob(a) {
        if (-1 === a._status) {
          a._status = 0;
          var b = a._ctor;
          b = b();
          a._result = b;
          b.then(function(b2) {
            0 === a._status && (b2 = b2.default, a._status = 1, a._result = b2);
          }, function(b2) {
            0 === a._status && (a._status = 2, a._result = b2);
          });
        }
      }
      function pb(a) {
        if (null == a)
          return null;
        if ("function" === typeof a)
          return a.displayName || a.name || null;
        if ("string" === typeof a)
          return a;
        switch (a) {
          case ab:
            return "Fragment";
          case $a:
            return "Portal";
          case cb:
            return "Profiler";
          case bb:
            return "StrictMode";
          case hb:
            return "Suspense";
          case ib:
            return "SuspenseList";
        }
        if ("object" === typeof a)
          switch (a.$$typeof) {
            case eb:
              return "Context.Consumer";
            case db:
              return "Context.Provider";
            case gb:
              var b = a.render;
              b = b.displayName || b.name || "";
              return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
            case jb:
              return pb(a.type);
            case lb:
              return pb(a.render);
            case kb:
              if (a = 1 === a._status ? a._result : null)
                return pb(a);
          }
        return null;
      }
      function qb(a) {
        var b = "";
        do {
          a:
            switch (a.tag) {
              case 3:
              case 4:
              case 6:
              case 7:
              case 10:
              case 9:
                var c = "";
                break a;
              default:
                var d = a._debugOwner, e = a._debugSource, f = pb(a.type);
                c = null;
                d && (c = pb(d.type));
                d = f;
                f = "";
                e ? f = " (at " + e.fileName.replace(Ya, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
                c = "\n    in " + (d || "Unknown") + f;
            }
          b += c;
          a = a.return;
        } while (a);
        return b;
      }
      function rb(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return a;
          default:
            return "";
        }
      }
      function sb(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function tb(a) {
        var b = sb(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e = c.get, f = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function xb(a) {
        a._valueTracker || (a._valueTracker = tb(a));
      }
      function yb(a) {
        if (!a)
          return false;
        var b = a._valueTracker;
        if (!b)
          return true;
        var c = b.getValue();
        var d = "";
        a && (d = sb(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function zb(a, b) {
        var c = b.checked;
        return n({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Ab(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c = rb(null != b.value ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function Bb(a, b) {
        b = b.checked;
        null != b && Xa(a, "checked", b, false);
      }
      function Cb(a, b) {
        Bb(a, b);
        var c = rb(b.value), d = b.type;
        if (null != c)
          if ("number" === d) {
            if (0 === c && "" === a.value || a.value != c)
              a.value = "" + c;
          } else
            a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? Db(a, b.type, c) : b.hasOwnProperty("defaultValue") && Db(a, b.type, rb(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
      }
      function Eb(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
            return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function Db(a, b, c) {
        if ("number" !== b || a.ownerDocument.activeElement !== a)
          null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      function Fb(a) {
        var b = "";
        aa.Children.forEach(a, function(a2) {
          null != a2 && (b += a2);
        });
        return b;
      }
      function Gb(a, b) {
        a = n({ children: void 0 }, b);
        if (b = Fb(b.children))
          a.children = b;
        return a;
      }
      function Hb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e = 0; e < c.length; e++)
            b["$" + c[e]] = true;
          for (c = 0; c < a.length; c++)
            e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
        } else {
          c = "" + rb(c);
          b = null;
          for (e = 0; e < a.length; e++) {
            if (a[e].value === c) {
              a[e].selected = true;
              d && (a[e].defaultSelected = true);
              return;
            }
            null !== b || a[e].disabled || (b = a[e]);
          }
          null !== b && (b.selected = true);
        }
      }
      function Ib(a, b) {
        if (null != b.dangerouslySetInnerHTML)
          throw Error(u(91));
        return n({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function Jb(a, b) {
        var c = b.value;
        if (null == c) {
          c = b.children;
          b = b.defaultValue;
          if (null != c) {
            if (null != b)
              throw Error(u(92));
            if (Array.isArray(c)) {
              if (!(1 >= c.length))
                throw Error(u(93));
              c = c[0];
            }
            b = c;
          }
          null == b && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: rb(c) };
      }
      function Kb(a, b) {
        var c = rb(b.value), d = rb(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function Lb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
      }
      var Mb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
      function Nb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function Ob(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? Nb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
      }
      var Pb;
      var Qb = function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
          });
        } : a;
      }(function(a, b) {
        if (a.namespaceURI !== Mb.svg || "innerHTML" in a)
          a.innerHTML = b;
        else {
          Pb = Pb || document.createElement("div");
          Pb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = Pb.firstChild; a.firstChild; )
            a.removeChild(a.firstChild);
          for (; b.firstChild; )
            a.appendChild(b.firstChild);
        }
      });
      function Rb(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      function Sb(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var Tb = { animationend: Sb("Animation", "AnimationEnd"), animationiteration: Sb("Animation", "AnimationIteration"), animationstart: Sb("Animation", "AnimationStart"), transitionend: Sb("Transition", "TransitionEnd") };
      var Ub = {};
      var Vb = {};
      ya && (Vb = document.createElement("div").style, "AnimationEvent" in window || (delete Tb.animationend.animation, delete Tb.animationiteration.animation, delete Tb.animationstart.animation), "TransitionEvent" in window || delete Tb.transitionend.transition);
      function Wb(a) {
        if (Ub[a])
          return Ub[a];
        if (!Tb[a])
          return a;
        var b = Tb[a], c;
        for (c in b)
          if (b.hasOwnProperty(c) && c in Vb)
            return Ub[a] = b[c];
        return a;
      }
      var Xb = Wb("animationend");
      var Yb = Wb("animationiteration");
      var Zb = Wb("animationstart");
      var $b = Wb("transitionend");
      var ac = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var bc = new ("function" === typeof WeakMap ? WeakMap : Map)();
      function cc(a) {
        var b = bc.get(a);
        void 0 === b && (b = /* @__PURE__ */ new Map(), bc.set(a, b));
        return b;
      }
      function dc(a) {
        var b = a, c = a;
        if (a.alternate)
          for (; b.return; )
            b = b.return;
        else {
          a = b;
          do
            b = a, 0 !== (b.effectTag & 1026) && (c = b.return), a = b.return;
          while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function ec(a) {
        if (13 === a.tag) {
          var b = a.memoizedState;
          null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
          if (null !== b)
            return b.dehydrated;
        }
        return null;
      }
      function fc(a) {
        if (dc(a) !== a)
          throw Error(u(188));
      }
      function gc(a) {
        var b = a.alternate;
        if (!b) {
          b = dc(a);
          if (null === b)
            throw Error(u(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e = c.return;
          if (null === e)
            break;
          var f = e.alternate;
          if (null === f) {
            d = e.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e.child === f.child) {
            for (f = e.child; f; ) {
              if (f === c)
                return fc(e), a;
              if (f === d)
                return fc(e), b;
              f = f.sibling;
            }
            throw Error(u(188));
          }
          if (c.return !== d.return)
            c = e, d = f;
          else {
            for (var g = false, h = e.child; h; ) {
              if (h === c) {
                g = true;
                c = e;
                d = f;
                break;
              }
              if (h === d) {
                g = true;
                d = e;
                c = f;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f.child; h; ) {
                if (h === c) {
                  g = true;
                  c = f;
                  d = e;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f;
                  c = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g)
                throw Error(u(189));
            }
          }
          if (c.alternate !== d)
            throw Error(u(190));
        }
        if (3 !== c.tag)
          throw Error(u(188));
        return c.stateNode.current === c ? a : b;
      }
      function hc(a) {
        a = gc(a);
        if (!a)
          return null;
        for (var b = a; ; ) {
          if (5 === b.tag || 6 === b.tag)
            return b;
          if (b.child)
            b.child.return = b, b = b.child;
          else {
            if (b === a)
              break;
            for (; !b.sibling; ) {
              if (!b.return || b.return === a)
                return null;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return null;
      }
      function ic(a, b) {
        if (null == b)
          throw Error(u(30));
        if (null == a)
          return b;
        if (Array.isArray(a)) {
          if (Array.isArray(b))
            return a.push.apply(a, b), a;
          a.push(b);
          return a;
        }
        return Array.isArray(b) ? [a].concat(b) : [a, b];
      }
      function jc(a, b, c) {
        Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
      }
      var kc = null;
      function lc(a) {
        if (a) {
          var b = a._dispatchListeners, c = a._dispatchInstances;
          if (Array.isArray(b))
            for (var d = 0; d < b.length && !a.isPropagationStopped(); d++)
              oa(a, b[d], c[d]);
          else
            b && oa(a, b, c);
          a._dispatchListeners = null;
          a._dispatchInstances = null;
          a.isPersistent() || a.constructor.release(a);
        }
      }
      function mc(a) {
        null !== a && (kc = ic(kc, a));
        a = kc;
        kc = null;
        if (a) {
          jc(a, lc);
          if (kc)
            throw Error(u(95));
          if (fa)
            throw a = ha, fa = false, ha = null, a;
        }
      }
      function nc(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      function oc(a) {
        if (!ya)
          return false;
        a = "on" + a;
        var b = a in document;
        b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);
        return b;
      }
      var pc = [];
      function qc(a) {
        a.topLevelType = null;
        a.nativeEvent = null;
        a.targetInst = null;
        a.ancestors.length = 0;
        10 > pc.length && pc.push(a);
      }
      function rc(a, b, c, d) {
        if (pc.length) {
          var e = pc.pop();
          e.topLevelType = a;
          e.eventSystemFlags = d;
          e.nativeEvent = b;
          e.targetInst = c;
          return e;
        }
        return { topLevelType: a, eventSystemFlags: d, nativeEvent: b, targetInst: c, ancestors: [] };
      }
      function sc(a) {
        var b = a.targetInst, c = b;
        do {
          if (!c) {
            a.ancestors.push(c);
            break;
          }
          var d = c;
          if (3 === d.tag)
            d = d.stateNode.containerInfo;
          else {
            for (; d.return; )
              d = d.return;
            d = 3 !== d.tag ? null : d.stateNode.containerInfo;
          }
          if (!d)
            break;
          b = c.tag;
          5 !== b && 6 !== b || a.ancestors.push(c);
          c = tc(d);
        } while (c);
        for (c = 0; c < a.ancestors.length; c++) {
          b = a.ancestors[c];
          var e = nc(a.nativeEvent);
          d = a.topLevelType;
          var f = a.nativeEvent, g = a.eventSystemFlags;
          0 === c && (g |= 64);
          for (var h = null, k = 0; k < sa.length; k++) {
            var l = sa[k];
            l && (l = l.extractEvents(d, b, f, e, g)) && (h = ic(h, l));
          }
          mc(h);
        }
      }
      function uc(a, b, c) {
        if (!c.has(a)) {
          switch (a) {
            case "scroll":
              vc(b, "scroll", true);
              break;
            case "focus":
            case "blur":
              vc(b, "focus", true);
              vc(b, "blur", true);
              c.set("blur", null);
              c.set("focus", null);
              break;
            case "cancel":
            case "close":
              oc(a) && vc(b, a, true);
              break;
            case "invalid":
            case "submit":
            case "reset":
              break;
            default:
              -1 === ac.indexOf(a) && F(a, b);
          }
          c.set(a, null);
        }
      }
      var wc;
      var xc;
      var yc;
      var zc = false;
      var Ac = [];
      var Bc = null;
      var Cc = null;
      var Dc = null;
      var Ec = /* @__PURE__ */ new Map();
      var Fc = /* @__PURE__ */ new Map();
      var Gc = [];
      var Hc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" ");
      var Ic = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
      function Jc(a, b) {
        var c = cc(b);
        Hc.forEach(function(a2) {
          uc(a2, b, c);
        });
        Ic.forEach(function(a2) {
          uc(a2, b, c);
        });
      }
      function Kc(a, b, c, d, e) {
        return { blockedOn: a, topLevelType: b, eventSystemFlags: c | 32, nativeEvent: e, container: d };
      }
      function Lc(a, b) {
        switch (a) {
          case "focus":
          case "blur":
            Bc = null;
            break;
          case "dragenter":
          case "dragleave":
            Cc = null;
            break;
          case "mouseover":
          case "mouseout":
            Dc = null;
            break;
          case "pointerover":
          case "pointerout":
            Ec.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Fc.delete(b.pointerId);
        }
      }
      function Mc(a, b, c, d, e, f) {
        if (null === a || a.nativeEvent !== f)
          return a = Kc(b, c, d, e, f), null !== b && (b = Nc(b), null !== b && xc(b)), a;
        a.eventSystemFlags |= d;
        return a;
      }
      function Oc(a, b, c, d, e) {
        switch (b) {
          case "focus":
            return Bc = Mc(Bc, a, b, c, d, e), true;
          case "dragenter":
            return Cc = Mc(Cc, a, b, c, d, e), true;
          case "mouseover":
            return Dc = Mc(Dc, a, b, c, d, e), true;
          case "pointerover":
            var f = e.pointerId;
            Ec.set(f, Mc(Ec.get(f) || null, a, b, c, d, e));
            return true;
          case "gotpointercapture":
            return f = e.pointerId, Fc.set(f, Mc(Fc.get(f) || null, a, b, c, d, e)), true;
        }
        return false;
      }
      function Pc(a) {
        var b = tc(a.target);
        if (null !== b) {
          var c = dc(b);
          if (null !== c) {
            if (b = c.tag, 13 === b) {
              if (b = ec(c), null !== b) {
                a.blockedOn = b;
                r.unstable_runWithPriority(a.priority, function() {
                  yc(c);
                });
                return;
              }
            } else if (3 === b && c.stateNode.hydrate) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Qc(a) {
        if (null !== a.blockedOn)
          return false;
        var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
        if (null !== b) {
          var c = Nc(b);
          null !== c && xc(c);
          a.blockedOn = b;
          return false;
        }
        return true;
      }
      function Sc(a, b, c) {
        Qc(a) && c.delete(b);
      }
      function Tc() {
        for (zc = false; 0 < Ac.length; ) {
          var a = Ac[0];
          if (null !== a.blockedOn) {
            a = Nc(a.blockedOn);
            null !== a && wc(a);
            break;
          }
          var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
          null !== b ? a.blockedOn = b : Ac.shift();
        }
        null !== Bc && Qc(Bc) && (Bc = null);
        null !== Cc && Qc(Cc) && (Cc = null);
        null !== Dc && Qc(Dc) && (Dc = null);
        Ec.forEach(Sc);
        Fc.forEach(Sc);
      }
      function Uc(a, b) {
        a.blockedOn === b && (a.blockedOn = null, zc || (zc = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Tc)));
      }
      function Vc(a) {
        function b(b2) {
          return Uc(b2, a);
        }
        if (0 < Ac.length) {
          Uc(Ac[0], a);
          for (var c = 1; c < Ac.length; c++) {
            var d = Ac[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Bc && Uc(Bc, a);
        null !== Cc && Uc(Cc, a);
        null !== Dc && Uc(Dc, a);
        Ec.forEach(b);
        Fc.forEach(b);
        for (c = 0; c < Gc.length; c++)
          d = Gc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Gc.length && (c = Gc[0], null === c.blockedOn); )
          Pc(c), null === c.blockedOn && Gc.shift();
      }
      var Wc = {};
      var Yc = /* @__PURE__ */ new Map();
      var Zc = /* @__PURE__ */ new Map();
      var $c = [
        "abort",
        "abort",
        Xb,
        "animationEnd",
        Yb,
        "animationIteration",
        Zb,
        "animationStart",
        "canplay",
        "canPlay",
        "canplaythrough",
        "canPlayThrough",
        "durationchange",
        "durationChange",
        "emptied",
        "emptied",
        "encrypted",
        "encrypted",
        "ended",
        "ended",
        "error",
        "error",
        "gotpointercapture",
        "gotPointerCapture",
        "load",
        "load",
        "loadeddata",
        "loadedData",
        "loadedmetadata",
        "loadedMetadata",
        "loadstart",
        "loadStart",
        "lostpointercapture",
        "lostPointerCapture",
        "playing",
        "playing",
        "progress",
        "progress",
        "seeking",
        "seeking",
        "stalled",
        "stalled",
        "suspend",
        "suspend",
        "timeupdate",
        "timeUpdate",
        $b,
        "transitionEnd",
        "waiting",
        "waiting"
      ];
      function ad(a, b) {
        for (var c = 0; c < a.length; c += 2) {
          var d = a[c], e = a[c + 1], f = "on" + (e[0].toUpperCase() + e.slice(1));
          f = { phasedRegistrationNames: { bubbled: f, captured: f + "Capture" }, dependencies: [d], eventPriority: b };
          Zc.set(d, b);
          Yc.set(d, f);
          Wc[e] = f;
        }
      }
      ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
      ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
      ad($c, 2);
      for (bd = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), cd = 0; cd < bd.length; cd++)
        Zc.set(bd[cd], 0);
      var bd;
      var cd;
      var dd = r.unstable_UserBlockingPriority;
      var ed = r.unstable_runWithPriority;
      var fd = true;
      function F(a, b) {
        vc(b, a, false);
      }
      function vc(a, b, c) {
        var d = Zc.get(b);
        switch (void 0 === d ? 2 : d) {
          case 0:
            d = gd.bind(null, b, 1, a);
            break;
          case 1:
            d = hd.bind(null, b, 1, a);
            break;
          default:
            d = id.bind(null, b, 1, a);
        }
        c ? a.addEventListener(b, d, true) : a.addEventListener(b, d, false);
      }
      function gd(a, b, c, d) {
        Ja || Ha();
        var e = id, f = Ja;
        Ja = true;
        try {
          Ga(e, a, b, c, d);
        } finally {
          (Ja = f) || La();
        }
      }
      function hd(a, b, c, d) {
        ed(dd, id.bind(null, a, b, c, d));
      }
      function id(a, b, c, d) {
        if (fd)
          if (0 < Ac.length && -1 < Hc.indexOf(a))
            a = Kc(null, a, b, c, d), Ac.push(a);
          else {
            var e = Rc(a, b, c, d);
            if (null === e)
              Lc(a, d);
            else if (-1 < Hc.indexOf(a))
              a = Kc(e, a, b, c, d), Ac.push(a);
            else if (!Oc(e, a, b, c, d)) {
              Lc(a, d);
              a = rc(a, d, null, b);
              try {
                Ma(sc, a);
              } finally {
                qc(a);
              }
            }
          }
      }
      function Rc(a, b, c, d) {
        c = nc(d);
        c = tc(c);
        if (null !== c) {
          var e = dc(c);
          if (null === e)
            c = null;
          else {
            var f = e.tag;
            if (13 === f) {
              c = ec(e);
              if (null !== c)
                return c;
              c = null;
            } else if (3 === f) {
              if (e.stateNode.hydrate)
                return 3 === e.tag ? e.stateNode.containerInfo : null;
              c = null;
            } else
              e !== c && (c = null);
          }
        }
        a = rc(a, d, c, b);
        try {
          Ma(sc, a);
        } finally {
          qc(a);
        }
        return null;
      }
      var jd = {
        animationIterationCount: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var kd = ["Webkit", "ms", "Moz", "O"];
      Object.keys(jd).forEach(function(a) {
        kd.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          jd[b] = jd[a];
        });
      });
      function ld(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || jd.hasOwnProperty(a) && jd[a] ? ("" + b).trim() : b + "px";
      }
      function md(a, b) {
        a = a.style;
        for (var c in b)
          if (b.hasOwnProperty(c)) {
            var d = 0 === c.indexOf("--"), e = ld(c, b[c], d);
            "float" === c && (c = "cssFloat");
            d ? a.setProperty(c, e) : a[c] = e;
          }
      }
      var nd = n({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function od(a, b) {
        if (b) {
          if (nd[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
            throw Error(u(137, a, ""));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children)
              throw Error(u(60));
            if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML))
              throw Error(u(61));
          }
          if (null != b.style && "object" !== typeof b.style)
            throw Error(u(62, ""));
        }
      }
      function pd(a, b) {
        if (-1 === a.indexOf("-"))
          return "string" === typeof b.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var qd = Mb.html;
      function rd(a, b) {
        a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;
        var c = cc(a);
        b = wa[b];
        for (var d = 0; d < b.length; d++)
          uc(b[d], a, c);
      }
      function sd() {
      }
      function td(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a)
          return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function ud(a) {
        for (; a && a.firstChild; )
          a = a.firstChild;
        return a;
      }
      function vd(a, b) {
        var c = ud(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b)
              return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = ud(c);
        }
      }
      function wd(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? wd(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function xd() {
        for (var a = window, b = td(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c)
            a = b.contentWindow;
          else
            break;
          b = td(a.document);
        }
        return b;
      }
      function yd(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      var zd = "$";
      var Ad = "/$";
      var Bd = "$?";
      var Cd = "$!";
      var Dd = null;
      var Ed = null;
      function Fd(a, b) {
        switch (a) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!b.autoFocus;
        }
        return false;
      }
      function Gd(a, b) {
        return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Hd = "function" === typeof setTimeout ? setTimeout : void 0;
      var Id = "function" === typeof clearTimeout ? clearTimeout : void 0;
      function Jd(a) {
        for (; null != a; a = a.nextSibling) {
          var b = a.nodeType;
          if (1 === b || 3 === b)
            break;
        }
        return a;
      }
      function Kd(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if (c === zd || c === Cd || c === Bd) {
              if (0 === b)
                return a;
              b--;
            } else
              c === Ad && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Ld = Math.random().toString(36).slice(2);
      var Md = "__reactInternalInstance$" + Ld;
      var Nd = "__reactEventHandlers$" + Ld;
      var Od = "__reactContainere$" + Ld;
      function tc(a) {
        var b = a[Md];
        if (b)
          return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[Od] || c[Md]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child)
              for (a = Kd(a); null !== a; ) {
                if (c = a[Md])
                  return c;
                a = Kd(a);
              }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Nc(a) {
        a = a[Md] || a[Od];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function Pd(a) {
        if (5 === a.tag || 6 === a.tag)
          return a.stateNode;
        throw Error(u(33));
      }
      function Qd(a) {
        return a[Nd] || null;
      }
      function Rd(a) {
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function Sd(a, b) {
        var c = a.stateNode;
        if (!c)
          return null;
        var d = la(c);
        if (!d)
          return null;
        c = d[b];
        a:
          switch (b) {
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
              (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
              a = !d;
              break a;
            default:
              a = false;
          }
        if (a)
          return null;
        if (c && "function" !== typeof c)
          throw Error(u(
            231,
            b,
            typeof c
          ));
        return c;
      }
      function Td(a, b, c) {
        if (b = Sd(a, c.dispatchConfig.phasedRegistrationNames[b]))
          c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a);
      }
      function Ud(a) {
        if (a && a.dispatchConfig.phasedRegistrationNames) {
          for (var b = a._targetInst, c = []; b; )
            c.push(b), b = Rd(b);
          for (b = c.length; 0 < b--; )
            Td(c[b], "captured", a);
          for (b = 0; b < c.length; b++)
            Td(c[b], "bubbled", a);
        }
      }
      function Vd(a, b, c) {
        a && c && c.dispatchConfig.registrationName && (b = Sd(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a));
      }
      function Wd(a) {
        a && a.dispatchConfig.registrationName && Vd(a._targetInst, null, a);
      }
      function Xd(a) {
        jc(a, Ud);
      }
      var Yd = null;
      var Zd = null;
      var $d = null;
      function ae() {
        if ($d)
          return $d;
        var a, b = Zd, c = b.length, d, e = "value" in Yd ? Yd.value : Yd.textContent, f = e.length;
        for (a = 0; a < c && b[a] === e[a]; a++)
          ;
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
          ;
        return $d = e.slice(a, 1 < d ? 1 - d : void 0);
      }
      function be() {
        return true;
      }
      function ce() {
        return false;
      }
      function G(a, b, c, d) {
        this.dispatchConfig = a;
        this._targetInst = b;
        this.nativeEvent = c;
        a = this.constructor.Interface;
        for (var e in a)
          a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);
        this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : false === c.returnValue) ? be : ce;
        this.isPropagationStopped = ce;
        return this;
      }
      n(G.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = false), this.isDefaultPrevented = be);
      }, stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = true), this.isPropagationStopped = be);
      }, persist: function() {
        this.isPersistent = be;
      }, isPersistent: ce, destructor: function() {
        var a = this.constructor.Interface, b;
        for (b in a)
          this[b] = null;
        this.nativeEvent = this._targetInst = this.dispatchConfig = null;
        this.isPropagationStopped = this.isDefaultPrevented = ce;
        this._dispatchInstances = this._dispatchListeners = null;
      } });
      G.Interface = { type: null, target: null, currentTarget: function() {
        return null;
      }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: null, isTrusted: null };
      G.extend = function(a) {
        function b() {
        }
        function c() {
          return d.apply(this, arguments);
        }
        var d = this;
        b.prototype = d.prototype;
        var e = new b();
        n(e, c.prototype);
        c.prototype = e;
        c.prototype.constructor = c;
        c.Interface = n({}, d.Interface, a);
        c.extend = d.extend;
        de(c);
        return c;
      };
      de(G);
      function ee(a, b, c, d) {
        if (this.eventPool.length) {
          var e = this.eventPool.pop();
          this.call(e, a, b, c, d);
          return e;
        }
        return new this(a, b, c, d);
      }
      function fe(a) {
        if (!(a instanceof this))
          throw Error(u(279));
        a.destructor();
        10 > this.eventPool.length && this.eventPool.push(a);
      }
      function de(a) {
        a.eventPool = [];
        a.getPooled = ee;
        a.release = fe;
      }
      var ge = G.extend({ data: null });
      var he = G.extend({ data: null });
      var ie = [9, 13, 27, 32];
      var je = ya && "CompositionEvent" in window;
      var ke = null;
      ya && "documentMode" in document && (ke = document.documentMode);
      var le = ya && "TextEvent" in window && !ke;
      var me = ya && (!je || ke && 8 < ke && 11 >= ke);
      var ne = String.fromCharCode(32);
      var oe = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") }, compositionStart: { phasedRegistrationNames: {
        bubbled: "onCompositionStart",
        captured: "onCompositionStartCapture"
      }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") } };
      var pe = false;
      function qe(a, b) {
        switch (a) {
          case "keyup":
            return -1 !== ie.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "blur":
            return true;
          default:
            return false;
        }
      }
      function re(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var se = false;
      function te(a, b) {
        switch (a) {
          case "compositionend":
            return re(b);
          case "keypress":
            if (32 !== b.which)
              return null;
            pe = true;
            return ne;
          case "textInput":
            return a = b.data, a === ne && pe ? null : a;
          default:
            return null;
        }
      }
      function ue(a, b) {
        if (se)
          return "compositionend" === a || !je && qe(a, b) ? (a = ae(), $d = Zd = Yd = null, se = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length)
                return b.char;
              if (b.which)
                return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return me && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var ve = { eventTypes: oe, extractEvents: function(a, b, c, d) {
        var e;
        if (je)
          b: {
            switch (a) {
              case "compositionstart":
                var f = oe.compositionStart;
                break b;
              case "compositionend":
                f = oe.compositionEnd;
                break b;
              case "compositionupdate":
                f = oe.compositionUpdate;
                break b;
            }
            f = void 0;
          }
        else
          se ? qe(a, c) && (f = oe.compositionEnd) : "keydown" === a && 229 === c.keyCode && (f = oe.compositionStart);
        f ? (me && "ko" !== c.locale && (se || f !== oe.compositionStart ? f === oe.compositionEnd && se && (e = ae()) : (Yd = d, Zd = "value" in Yd ? Yd.value : Yd.textContent, se = true)), f = ge.getPooled(
          f,
          b,
          c,
          d
        ), e ? f.data = e : (e = re(c), null !== e && (f.data = e)), Xd(f), e = f) : e = null;
        (a = le ? te(a, c) : ue(a, c)) ? (b = he.getPooled(oe.beforeInput, b, c, d), b.data = a, Xd(b)) : b = null;
        return null === e ? b : null === b ? e : [e, b];
      } };
      var we = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function xe(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!we[a.type] : "textarea" === b ? true : false;
      }
      var ye = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };
      function ze(a, b, c) {
        a = G.getPooled(ye.change, a, b, c);
        a.type = "change";
        Da(c);
        Xd(a);
        return a;
      }
      var Ae = null;
      var Be = null;
      function Ce(a) {
        mc(a);
      }
      function De(a) {
        var b = Pd(a);
        if (yb(b))
          return a;
      }
      function Ee(a, b) {
        if ("change" === a)
          return b;
      }
      var Fe = false;
      ya && (Fe = oc("input") && (!document.documentMode || 9 < document.documentMode));
      function Ge() {
        Ae && (Ae.detachEvent("onpropertychange", He), Be = Ae = null);
      }
      function He(a) {
        if ("value" === a.propertyName && De(Be))
          if (a = ze(Be, a, nc(a)), Ja)
            mc(a);
          else {
            Ja = true;
            try {
              Fa(Ce, a);
            } finally {
              Ja = false, La();
            }
          }
      }
      function Ie(a, b, c) {
        "focus" === a ? (Ge(), Ae = b, Be = c, Ae.attachEvent("onpropertychange", He)) : "blur" === a && Ge();
      }
      function Je(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a)
          return De(Be);
      }
      function Ke(a, b) {
        if ("click" === a)
          return De(b);
      }
      function Le(a, b) {
        if ("input" === a || "change" === a)
          return De(b);
      }
      var Me = { eventTypes: ye, _isInputEventSupported: Fe, extractEvents: function(a, b, c, d) {
        var e = b ? Pd(b) : window, f = e.nodeName && e.nodeName.toLowerCase();
        if ("select" === f || "input" === f && "file" === e.type)
          var g = Ee;
        else if (xe(e))
          if (Fe)
            g = Le;
          else {
            g = Je;
            var h = Ie;
          }
        else
          (f = e.nodeName) && "input" === f.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (g = Ke);
        if (g && (g = g(a, b)))
          return ze(g, c, d);
        h && h(a, e, b);
        "blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && Db(e, "number", e.value);
      } };
      var Ne = G.extend({ view: null, detail: null });
      var Oe = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pe(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Oe[a]) ? !!b[a] : false;
      }
      function Qe() {
        return Pe;
      }
      var Re = 0;
      var Se = 0;
      var Te = false;
      var Ue = false;
      var Ve = Ne.extend({ screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: Qe, button: null, buttons: null, relatedTarget: function(a) {
        return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
      }, movementX: function(a) {
        if ("movementX" in a)
          return a.movementX;
        var b = Re;
        Re = a.screenX;
        return Te ? "mousemove" === a.type ? a.screenX - b : 0 : (Te = true, 0);
      }, movementY: function(a) {
        if ("movementY" in a)
          return a.movementY;
        var b = Se;
        Se = a.screenY;
        return Ue ? "mousemove" === a.type ? a.screenY - b : 0 : (Ue = true, 0);
      } });
      var We = Ve.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null });
      var Xe = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: {
        registrationName: "onPointerLeave",
        dependencies: ["pointerout", "pointerover"]
      } };
      var Ye = { eventTypes: Xe, extractEvents: function(a, b, c, d, e) {
        var f = "mouseover" === a || "pointerover" === a, g = "mouseout" === a || "pointerout" === a;
        if (f && 0 === (e & 32) && (c.relatedTarget || c.fromElement) || !g && !f)
          return null;
        f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window;
        if (g) {
          if (g = b, b = (b = c.relatedTarget || c.toElement) ? tc(b) : null, null !== b) {
            var h = dc(b);
            if (b !== h || 5 !== b.tag && 6 !== b.tag)
              b = null;
          }
        } else
          g = null;
        if (g === b)
          return null;
        if ("mouseout" === a || "mouseover" === a) {
          var k = Ve;
          var l = Xe.mouseLeave;
          var m = Xe.mouseEnter;
          var p = "mouse";
        } else if ("pointerout" === a || "pointerover" === a)
          k = We, l = Xe.pointerLeave, m = Xe.pointerEnter, p = "pointer";
        a = null == g ? f : Pd(g);
        f = null == b ? f : Pd(b);
        l = k.getPooled(l, g, c, d);
        l.type = p + "leave";
        l.target = a;
        l.relatedTarget = f;
        c = k.getPooled(m, b, c, d);
        c.type = p + "enter";
        c.target = f;
        c.relatedTarget = a;
        d = g;
        p = b;
        if (d && p)
          a: {
            k = d;
            m = p;
            g = 0;
            for (a = k; a; a = Rd(a))
              g++;
            a = 0;
            for (b = m; b; b = Rd(b))
              a++;
            for (; 0 < g - a; )
              k = Rd(k), g--;
            for (; 0 < a - g; )
              m = Rd(m), a--;
            for (; g--; ) {
              if (k === m || k === m.alternate)
                break a;
              k = Rd(k);
              m = Rd(m);
            }
            k = null;
          }
        else
          k = null;
        m = k;
        for (k = []; d && d !== m; ) {
          g = d.alternate;
          if (null !== g && g === m)
            break;
          k.push(d);
          d = Rd(d);
        }
        for (d = []; p && p !== m; ) {
          g = p.alternate;
          if (null !== g && g === m)
            break;
          d.push(p);
          p = Rd(p);
        }
        for (p = 0; p < k.length; p++)
          Vd(k[p], "bubbled", l);
        for (p = d.length; 0 < p--; )
          Vd(d[p], "captured", c);
        return 0 === (e & 64) ? [l] : [l, c];
      } };
      function Ze(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var $e = "function" === typeof Object.is ? Object.is : Ze;
      var af = Object.prototype.hasOwnProperty;
      function bf(a, b) {
        if ($e(a, b))
          return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
          return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length)
          return false;
        for (d = 0; d < c.length; d++)
          if (!af.call(b, c[d]) || !$e(a[c[d]], b[c[d]]))
            return false;
        return true;
      }
      var cf = ya && "documentMode" in document && 11 >= document.documentMode;
      var df = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } };
      var ef = null;
      var ff = null;
      var gf = null;
      var hf = false;
      function jf(a, b) {
        var c = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;
        if (hf || null == ef || ef !== td(c))
          return null;
        c = ef;
        "selectionStart" in c && yd(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset });
        return gf && bf(gf, c) ? null : (gf = c, a = G.getPooled(df.select, ff, a, b), a.type = "select", a.target = ef, Xd(a), a);
      }
      var kf = { eventTypes: df, extractEvents: function(a, b, c, d, e, f) {
        e = f || (d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument);
        if (!(f = !e)) {
          a: {
            e = cc(e);
            f = wa.onSelect;
            for (var g = 0; g < f.length; g++)
              if (!e.has(f[g])) {
                e = false;
                break a;
              }
            e = true;
          }
          f = !e;
        }
        if (f)
          return null;
        e = b ? Pd(b) : window;
        switch (a) {
          case "focus":
            if (xe(e) || "true" === e.contentEditable)
              ef = e, ff = b, gf = null;
            break;
          case "blur":
            gf = ff = ef = null;
            break;
          case "mousedown":
            hf = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            return hf = false, jf(c, d);
          case "selectionchange":
            if (cf)
              break;
          case "keydown":
          case "keyup":
            return jf(c, d);
        }
        return null;
      } };
      var lf = G.extend({ animationName: null, elapsedTime: null, pseudoElement: null });
      var mf = G.extend({ clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var nf = Ne.extend({ relatedTarget: null });
      function of(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      var pf = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" };
      var qf = {
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
      };
      var rf = Ne.extend({ key: function(a) {
        if (a.key) {
          var b = pf[a.key] || a.key;
          if ("Unidentified" !== b)
            return b;
        }
        return "keypress" === a.type ? (a = of(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? qf[a.keyCode] || "Unidentified" : "";
      }, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: Qe, charCode: function(a) {
        return "keypress" === a.type ? of(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? of(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var sf = Ve.extend({ dataTransfer: null });
      var tf = Ne.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: Qe });
      var uf = G.extend({ propertyName: null, elapsedTime: null, pseudoElement: null });
      var vf = Ve.extend({ deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      }, deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      }, deltaZ: null, deltaMode: null });
      var wf = { eventTypes: Wc, extractEvents: function(a, b, c, d) {
        var e = Yc.get(a);
        if (!e)
          return null;
        switch (a) {
          case "keypress":
            if (0 === of(c))
              return null;
          case "keydown":
          case "keyup":
            a = rf;
            break;
          case "blur":
          case "focus":
            a = nf;
            break;
          case "click":
            if (2 === c.button)
              return null;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            a = Ve;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            a = sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            a = tf;
            break;
          case Xb:
          case Yb:
          case Zb:
            a = lf;
            break;
          case $b:
            a = uf;
            break;
          case "scroll":
            a = Ne;
            break;
          case "wheel":
            a = vf;
            break;
          case "copy":
          case "cut":
          case "paste":
            a = mf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            a = We;
            break;
          default:
            a = G;
        }
        b = a.getPooled(e, b, c, d);
        Xd(b);
        return b;
      } };
      if (pa)
        throw Error(u(101));
      pa = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
      ra();
      var xf = Nc;
      la = Qd;
      ma = xf;
      na = Pd;
      xa({ SimpleEventPlugin: wf, EnterLeaveEventPlugin: Ye, ChangeEventPlugin: Me, SelectEventPlugin: kf, BeforeInputEventPlugin: ve });
      var yf = [];
      var zf = -1;
      function H(a) {
        0 > zf || (a.current = yf[zf], yf[zf] = null, zf--);
      }
      function I(a, b) {
        zf++;
        yf[zf] = a.current;
        a.current = b;
      }
      var Af = {};
      var J = { current: Af };
      var K = { current: false };
      var Bf = Af;
      function Cf(a, b) {
        var c = a.type.contextTypes;
        if (!c)
          return Af;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
          return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f;
        for (f in c)
          e[f] = b[f];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function L(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function Df() {
        H(K);
        H(J);
      }
      function Ef(a, b, c) {
        if (J.current !== Af)
          throw Error(u(168));
        I(J, b);
        I(K, c);
      }
      function Ff(a, b, c) {
        var d = a.stateNode;
        a = b.childContextTypes;
        if ("function" !== typeof d.getChildContext)
          return c;
        d = d.getChildContext();
        for (var e in d)
          if (!(e in a))
            throw Error(u(108, pb(b) || "Unknown", e));
        return n({}, c, {}, d);
      }
      function Gf(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Af;
        Bf = J.current;
        I(J, a);
        I(K, K.current);
        return true;
      }
      function Hf(a, b, c) {
        var d = a.stateNode;
        if (!d)
          throw Error(u(169));
        c ? (a = Ff(a, b, Bf), d.__reactInternalMemoizedMergedChildContext = a, H(K), H(J), I(J, a)) : H(K);
        I(K, c);
      }
      var If = r.unstable_runWithPriority;
      var Jf = r.unstable_scheduleCallback;
      var Kf = r.unstable_cancelCallback;
      var Lf = r.unstable_requestPaint;
      var Mf = r.unstable_now;
      var Nf = r.unstable_getCurrentPriorityLevel;
      var Of = r.unstable_ImmediatePriority;
      var Pf = r.unstable_UserBlockingPriority;
      var Qf = r.unstable_NormalPriority;
      var Rf = r.unstable_LowPriority;
      var Sf = r.unstable_IdlePriority;
      var Tf = {};
      var Uf = r.unstable_shouldYield;
      var Vf = void 0 !== Lf ? Lf : function() {
      };
      var Wf = null;
      var Xf = null;
      var Yf = false;
      var Zf = Mf();
      var $f = 1e4 > Zf ? Mf : function() {
        return Mf() - Zf;
      };
      function ag() {
        switch (Nf()) {
          case Of:
            return 99;
          case Pf:
            return 98;
          case Qf:
            return 97;
          case Rf:
            return 96;
          case Sf:
            return 95;
          default:
            throw Error(u(332));
        }
      }
      function bg(a) {
        switch (a) {
          case 99:
            return Of;
          case 98:
            return Pf;
          case 97:
            return Qf;
          case 96:
            return Rf;
          case 95:
            return Sf;
          default:
            throw Error(u(332));
        }
      }
      function cg(a, b) {
        a = bg(a);
        return If(a, b);
      }
      function dg(a, b, c) {
        a = bg(a);
        return Jf(a, b, c);
      }
      function eg(a) {
        null === Wf ? (Wf = [a], Xf = Jf(Of, fg)) : Wf.push(a);
        return Tf;
      }
      function gg() {
        if (null !== Xf) {
          var a = Xf;
          Xf = null;
          Kf(a);
        }
        fg();
      }
      function fg() {
        if (!Yf && null !== Wf) {
          Yf = true;
          var a = 0;
          try {
            var b = Wf;
            cg(99, function() {
              for (; a < b.length; a++) {
                var c = b[a];
                do
                  c = c(true);
                while (null !== c);
              }
            });
            Wf = null;
          } catch (c) {
            throw null !== Wf && (Wf = Wf.slice(a + 1)), Jf(Of, gg), c;
          } finally {
            Yf = false;
          }
        }
      }
      function hg(a, b, c) {
        c /= 10;
        return 1073741821 - (((1073741821 - a + b / 10) / c | 0) + 1) * c;
      }
      function ig(a, b) {
        if (a && a.defaultProps) {
          b = n({}, b);
          a = a.defaultProps;
          for (var c in a)
            void 0 === b[c] && (b[c] = a[c]);
        }
        return b;
      }
      var jg = { current: null };
      var kg = null;
      var lg = null;
      var mg = null;
      function ng() {
        mg = lg = kg = null;
      }
      function og(a) {
        var b = jg.current;
        H(jg);
        a.type._context._currentValue = b;
      }
      function pg(a, b) {
        for (; null !== a; ) {
          var c = a.alternate;
          if (a.childExpirationTime < b)
            a.childExpirationTime = b, null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
          else if (null !== c && c.childExpirationTime < b)
            c.childExpirationTime = b;
          else
            break;
          a = a.return;
        }
      }
      function qg(a, b) {
        kg = a;
        mg = lg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (a.expirationTime >= b && (rg = true), a.firstContext = null);
      }
      function sg(a, b) {
        if (mg !== a && false !== b && 0 !== b) {
          if ("number" !== typeof b || 1073741823 === b)
            mg = a, b = 1073741823;
          b = { context: a, observedBits: b, next: null };
          if (null === lg) {
            if (null === kg)
              throw Error(u(308));
            lg = b;
            kg.dependencies = { expirationTime: 0, firstContext: b, responders: null };
          } else
            lg = lg.next = b;
        }
        return a._currentValue;
      }
      var tg = false;
      function ug(a) {
        a.updateQueue = { baseState: a.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
      }
      function vg(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, baseQueue: a.baseQueue, shared: a.shared, effects: a.effects });
      }
      function wg(a, b) {
        a = { expirationTime: a, suspenseConfig: b, tag: 0, payload: null, callback: null, next: null };
        return a.next = a;
      }
      function xg(a, b) {
        a = a.updateQueue;
        if (null !== a) {
          a = a.shared;
          var c = a.pending;
          null === c ? b.next = b : (b.next = c.next, c.next = b);
          a.pending = b;
        }
      }
      function yg(a, b) {
        var c = a.alternate;
        null !== c && vg(c, a);
        a = a.updateQueue;
        c = a.baseQueue;
        null === c ? (a.baseQueue = b.next = b, b.next = b) : (b.next = c.next, c.next = b);
      }
      function zg(a, b, c, d) {
        var e = a.updateQueue;
        tg = false;
        var f = e.baseQueue, g = e.shared.pending;
        if (null !== g) {
          if (null !== f) {
            var h = f.next;
            f.next = g.next;
            g.next = h;
          }
          f = g;
          e.shared.pending = null;
          h = a.alternate;
          null !== h && (h = h.updateQueue, null !== h && (h.baseQueue = g));
        }
        if (null !== f) {
          h = f.next;
          var k = e.baseState, l = 0, m = null, p = null, x2 = null;
          if (null !== h) {
            var z = h;
            do {
              g = z.expirationTime;
              if (g < d) {
                var ca = { expirationTime: z.expirationTime, suspenseConfig: z.suspenseConfig, tag: z.tag, payload: z.payload, callback: z.callback, next: null };
                null === x2 ? (p = x2 = ca, m = k) : x2 = x2.next = ca;
                g > l && (l = g);
              } else {
                null !== x2 && (x2 = x2.next = { expirationTime: 1073741823, suspenseConfig: z.suspenseConfig, tag: z.tag, payload: z.payload, callback: z.callback, next: null });
                Ag(g, z.suspenseConfig);
                a: {
                  var D = a, t = z;
                  g = b;
                  ca = c;
                  switch (t.tag) {
                    case 1:
                      D = t.payload;
                      if ("function" === typeof D) {
                        k = D.call(ca, k, g);
                        break a;
                      }
                      k = D;
                      break a;
                    case 3:
                      D.effectTag = D.effectTag & -4097 | 64;
                    case 0:
                      D = t.payload;
                      g = "function" === typeof D ? D.call(ca, k, g) : D;
                      if (null === g || void 0 === g)
                        break a;
                      k = n({}, k, g);
                      break a;
                    case 2:
                      tg = true;
                  }
                }
                null !== z.callback && (a.effectTag |= 32, g = e.effects, null === g ? e.effects = [z] : g.push(z));
              }
              z = z.next;
              if (null === z || z === h)
                if (g = e.shared.pending, null === g)
                  break;
                else
                  z = f.next = g.next, g.next = h, e.baseQueue = f = g, e.shared.pending = null;
            } while (1);
          }
          null === x2 ? m = k : x2.next = p;
          e.baseState = m;
          e.baseQueue = x2;
          Bg(l);
          a.expirationTime = l;
          a.memoizedState = k;
        }
      }
      function Cg(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a)
          for (b = 0; b < a.length; b++) {
            var d = a[b], e = d.callback;
            if (null !== e) {
              d.callback = null;
              d = e;
              e = c;
              if ("function" !== typeof d)
                throw Error(u(191, d));
              d.call(e);
            }
          }
      }
      var Dg = Wa.ReactCurrentBatchConfig;
      var Eg = new aa.Component().refs;
      function Fg(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : n({}, b, c);
        a.memoizedState = c;
        0 === a.expirationTime && (a.updateQueue.baseState = c);
      }
      var Jg = { isMounted: function(a) {
        return (a = a._reactInternalFiber) ? dc(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternalFiber;
        var d = Gg(), e = Dg.suspense;
        d = Hg(d, a, e);
        e = wg(d, e);
        e.payload = b;
        void 0 !== c && null !== c && (e.callback = c);
        xg(a, e);
        Ig(a, d);
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternalFiber;
        var d = Gg(), e = Dg.suspense;
        d = Hg(d, a, e);
        e = wg(d, e);
        e.tag = 1;
        e.payload = b;
        void 0 !== c && null !== c && (e.callback = c);
        xg(a, e);
        Ig(a, d);
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternalFiber;
        var c = Gg(), d = Dg.suspense;
        c = Hg(c, a, d);
        d = wg(c, d);
        d.tag = 2;
        void 0 !== b && null !== b && (d.callback = b);
        xg(a, d);
        Ig(a, c);
      } };
      function Kg(a, b, c, d, e, f, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !bf(c, d) || !bf(e, f) : true;
      }
      function Lg(a, b, c) {
        var d = false, e = Af;
        var f = b.contextType;
        "object" === typeof f && null !== f ? f = sg(f) : (e = L(b) ? Bf : J.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Cf(a, e) : Af);
        b = new b(c, f);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = Jg;
        a.stateNode = b;
        b._reactInternalFiber = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
        return b;
      }
      function Mg(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Jg.enqueueReplaceState(b, b.state, null);
      }
      function Ng(a, b, c, d) {
        var e = a.stateNode;
        e.props = c;
        e.state = a.memoizedState;
        e.refs = Eg;
        ug(a);
        var f = b.contextType;
        "object" === typeof f && null !== f ? e.context = sg(f) : (f = L(b) ? Bf : J.current, e.context = Cf(a, f));
        zg(a, c, e, d);
        e.state = a.memoizedState;
        f = b.getDerivedStateFromProps;
        "function" === typeof f && (Fg(a, b, f, c), e.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Jg.enqueueReplaceState(e, e.state, null), zg(a, c, e, d), e.state = a.memoizedState);
        "function" === typeof e.componentDidMount && (a.effectTag |= 4);
      }
      var Og = Array.isArray;
      function Pg(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag)
                throw Error(u(309));
              var d = c.stateNode;
            }
            if (!d)
              throw Error(u(147, a));
            var e = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e)
              return b.ref;
            b = function(a2) {
              var b2 = d.refs;
              b2 === Eg && (b2 = d.refs = {});
              null === a2 ? delete b2[e] : b2[e] = a2;
            };
            b._stringRef = e;
            return b;
          }
          if ("string" !== typeof a)
            throw Error(u(284));
          if (!c._owner)
            throw Error(u(290, a));
        }
        return a;
      }
      function Qg(a, b) {
        if ("textarea" !== a.type)
          throw Error(u(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, ""));
      }
      function Rg(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.lastEffect;
            null !== d2 ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
            c2.nextEffect = null;
            c2.effectTag = 8;
          }
        }
        function c(c2, d2) {
          if (!a)
            return null;
          for (; null !== d2; )
            b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
            null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e(a2, b2) {
          a2 = Sg(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f(b2, c2, d2) {
          b2.index = d2;
          if (!a)
            return c2;
          d2 = b2.alternate;
          if (null !== d2)
            return d2 = d2.index, d2 < c2 ? (b2.effectTag = 2, c2) : d2;
          b2.effectTag = 2;
          return c2;
        }
        function g(b2) {
          a && null === b2.alternate && (b2.effectTag = 2);
          return b2;
        }
        function h(a2, b2, c2, d2) {
          if (null === b2 || 6 !== b2.tag)
            return b2 = Tg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k(a2, b2, c2, d2) {
          if (null !== b2 && b2.elementType === c2.type)
            return d2 = e(b2, c2.props), d2.ref = Pg(a2, b2, c2), d2.return = a2, d2;
          d2 = Ug(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Pg(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l(a2, b2, c2, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
            return b2 = Vg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function m(a2, b2, c2, d2, f2) {
          if (null === b2 || 7 !== b2.tag)
            return b2 = Wg(c2, a2.mode, d2, f2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function p(a2, b2, c2) {
          if ("string" === typeof b2 || "number" === typeof b2)
            return b2 = Tg("" + b2, a2.mode, c2), b2.return = a2, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case Za:
                return c2 = Ug(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Pg(a2, null, b2), c2.return = a2, c2;
              case $a:
                return b2 = Vg(b2, a2.mode, c2), b2.return = a2, b2;
            }
            if (Og(b2) || nb(b2))
              return b2 = Wg(b2, a2.mode, c2, null), b2.return = a2, b2;
            Qg(a2, b2);
          }
          return null;
        }
        function x2(a2, b2, c2, d2) {
          var e2 = null !== b2 ? b2.key : null;
          if ("string" === typeof c2 || "number" === typeof c2)
            return null !== e2 ? null : h(a2, b2, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case Za:
                return c2.key === e2 ? c2.type === ab ? m(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
              case $a:
                return c2.key === e2 ? l(a2, b2, c2, d2) : null;
            }
            if (Og(c2) || nb(c2))
              return null !== e2 ? null : m(a2, b2, c2, d2, null);
            Qg(a2, c2);
          }
          return null;
        }
        function z(a2, b2, c2, d2, e2) {
          if ("string" === typeof d2 || "number" === typeof d2)
            return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case Za:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, d2.type === ab ? m(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
              case $a:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
            }
            if (Og(d2) || nb(d2))
              return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
            Qg(b2, d2);
          }
          return null;
        }
        function ca(e2, g2, h2, k2) {
          for (var l2 = null, t = null, m2 = g2, y = g2 = 0, A = null; null !== m2 && y < h2.length; y++) {
            m2.index > y ? (A = m2, m2 = null) : A = m2.sibling;
            var q = x2(e2, m2, h2[y], k2);
            if (null === q) {
              null === m2 && (m2 = A);
              break;
            }
            a && m2 && null === q.alternate && b(e2, m2);
            g2 = f(q, g2, y);
            null === t ? l2 = q : t.sibling = q;
            t = q;
            m2 = A;
          }
          if (y === h2.length)
            return c(e2, m2), l2;
          if (null === m2) {
            for (; y < h2.length; y++)
              m2 = p(e2, h2[y], k2), null !== m2 && (g2 = f(m2, g2, y), null === t ? l2 = m2 : t.sibling = m2, t = m2);
            return l2;
          }
          for (m2 = d(e2, m2); y < h2.length; y++)
            A = z(m2, e2, y, h2[y], k2), null !== A && (a && null !== A.alternate && m2.delete(null === A.key ? y : A.key), g2 = f(A, g2, y), null === t ? l2 = A : t.sibling = A, t = A);
          a && m2.forEach(function(a2) {
            return b(e2, a2);
          });
          return l2;
        }
        function D(e2, g2, h2, l2) {
          var k2 = nb(h2);
          if ("function" !== typeof k2)
            throw Error(u(150));
          h2 = k2.call(h2);
          if (null == h2)
            throw Error(u(151));
          for (var m2 = k2 = null, t = g2, y = g2 = 0, A = null, q = h2.next(); null !== t && !q.done; y++, q = h2.next()) {
            t.index > y ? (A = t, t = null) : A = t.sibling;
            var D2 = x2(e2, t, q.value, l2);
            if (null === D2) {
              null === t && (t = A);
              break;
            }
            a && t && null === D2.alternate && b(e2, t);
            g2 = f(D2, g2, y);
            null === m2 ? k2 = D2 : m2.sibling = D2;
            m2 = D2;
            t = A;
          }
          if (q.done)
            return c(e2, t), k2;
          if (null === t) {
            for (; !q.done; y++, q = h2.next())
              q = p(e2, q.value, l2), null !== q && (g2 = f(q, g2, y), null === m2 ? k2 = q : m2.sibling = q, m2 = q);
            return k2;
          }
          for (t = d(e2, t); !q.done; y++, q = h2.next())
            q = z(t, e2, y, q.value, l2), null !== q && (a && null !== q.alternate && t.delete(null === q.key ? y : q.key), g2 = f(q, g2, y), null === m2 ? k2 = q : m2.sibling = q, m2 = q);
          a && t.forEach(function(a2) {
            return b(e2, a2);
          });
          return k2;
        }
        return function(a2, d2, f2, h2) {
          var k2 = "object" === typeof f2 && null !== f2 && f2.type === ab && null === f2.key;
          k2 && (f2 = f2.props.children);
          var l2 = "object" === typeof f2 && null !== f2;
          if (l2)
            switch (f2.$$typeof) {
              case Za:
                a: {
                  l2 = f2.key;
                  for (k2 = d2; null !== k2; ) {
                    if (k2.key === l2) {
                      switch (k2.tag) {
                        case 7:
                          if (f2.type === ab) {
                            c(a2, k2.sibling);
                            d2 = e(k2, f2.props.children);
                            d2.return = a2;
                            a2 = d2;
                            break a;
                          }
                          break;
                        default:
                          if (k2.elementType === f2.type) {
                            c(
                              a2,
                              k2.sibling
                            );
                            d2 = e(k2, f2.props);
                            d2.ref = Pg(a2, k2, f2);
                            d2.return = a2;
                            a2 = d2;
                            break a;
                          }
                      }
                      c(a2, k2);
                      break;
                    } else
                      b(a2, k2);
                    k2 = k2.sibling;
                  }
                  f2.type === ab ? (d2 = Wg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Ug(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Pg(a2, d2, f2), h2.return = a2, a2 = h2);
                }
                return g(a2);
              case $a:
                a: {
                  for (k2 = f2.key; null !== d2; ) {
                    if (d2.key === k2)
                      if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                        c(a2, d2.sibling);
                        d2 = e(d2, f2.children || []);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      } else {
                        c(a2, d2);
                        break;
                      }
                    else
                      b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Vg(f2, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
            }
          if ("string" === typeof f2 || "number" === typeof f2)
            return f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Tg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
          if (Og(f2))
            return ca(a2, d2, f2, h2);
          if (nb(f2))
            return D(a2, d2, f2, h2);
          l2 && Qg(a2, f2);
          if ("undefined" === typeof f2 && !k2)
            switch (a2.tag) {
              case 1:
              case 0:
                throw a2 = a2.type, Error(u(152, a2.displayName || a2.name || "Component"));
            }
          return c(a2, d2);
        };
      }
      var Xg = Rg(true);
      var Yg = Rg(false);
      var Zg = {};
      var $g = { current: Zg };
      var ah = { current: Zg };
      var bh = { current: Zg };
      function ch(a) {
        if (a === Zg)
          throw Error(u(174));
        return a;
      }
      function dh(a, b) {
        I(bh, b);
        I(ah, a);
        I($g, Zg);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : Ob(null, "");
            break;
          default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = Ob(b, a);
        }
        H($g);
        I($g, b);
      }
      function eh() {
        H($g);
        H(ah);
        H(bh);
      }
      function fh(a) {
        ch(bh.current);
        var b = ch($g.current);
        var c = Ob(b, a.type);
        b !== c && (I(ah, a), I($g, c));
      }
      function gh(a) {
        ah.current === a && (H($g), H(ah));
      }
      var M = { current: 0 };
      function hh(a) {
        for (var b = a; null !== b; ) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || c.data === Bd || c.data === Cd))
              return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.effectTag & 64))
              return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a)
            break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a)
              return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      function ih(a, b) {
        return { responder: a, props: b };
      }
      var jh = Wa.ReactCurrentDispatcher;
      var kh = Wa.ReactCurrentBatchConfig;
      var lh = 0;
      var N = null;
      var O = null;
      var P = null;
      var mh = false;
      function Q() {
        throw Error(u(321));
      }
      function nh(a, b) {
        if (null === b)
          return false;
        for (var c = 0; c < b.length && c < a.length; c++)
          if (!$e(a[c], b[c]))
            return false;
        return true;
      }
      function oh(a, b, c, d, e, f) {
        lh = f;
        N = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.expirationTime = 0;
        jh.current = null === a || null === a.memoizedState ? ph : qh;
        a = c(d, e);
        if (b.expirationTime === lh) {
          f = 0;
          do {
            b.expirationTime = 0;
            if (!(25 > f))
              throw Error(u(301));
            f += 1;
            P = O = null;
            b.updateQueue = null;
            jh.current = rh;
            a = c(d, e);
          } while (b.expirationTime === lh);
        }
        jh.current = sh;
        b = null !== O && null !== O.next;
        lh = 0;
        P = O = N = null;
        mh = false;
        if (b)
          throw Error(u(300));
        return a;
      }
      function th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === P ? N.memoizedState = P = a : P = P.next = a;
        return P;
      }
      function uh() {
        if (null === O) {
          var a = N.alternate;
          a = null !== a ? a.memoizedState : null;
        } else
          a = O.next;
        var b = null === P ? N.memoizedState : P.next;
        if (null !== b)
          P = b, O = a;
        else {
          if (null === a)
            throw Error(u(310));
          O = a;
          a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
          null === P ? N.memoizedState = P = a : P = P.next = a;
        }
        return P;
      }
      function vh(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function wh(a) {
        var b = uh(), c = b.queue;
        if (null === c)
          throw Error(u(311));
        c.lastRenderedReducer = a;
        var d = O, e = d.baseQueue, f = c.pending;
        if (null !== f) {
          if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
          }
          d.baseQueue = e = f;
          c.pending = null;
        }
        if (null !== e) {
          e = e.next;
          d = d.baseState;
          var h = g = f = null, k = e;
          do {
            var l = k.expirationTime;
            if (l < lh) {
              var m = { expirationTime: k.expirationTime, suspenseConfig: k.suspenseConfig, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null };
              null === h ? (g = h = m, f = d) : h = h.next = m;
              l > N.expirationTime && (N.expirationTime = l, Bg(l));
            } else
              null !== h && (h = h.next = { expirationTime: 1073741823, suspenseConfig: k.suspenseConfig, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), Ag(l, k.suspenseConfig), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
            k = k.next;
          } while (null !== k && k !== e);
          null === h ? f = d : h.next = g;
          $e(d, b.memoizedState) || (rg = true);
          b.memoizedState = d;
          b.baseState = f;
          b.baseQueue = h;
          c.lastRenderedState = d;
        }
        return [b.memoizedState, c.dispatch];
      }
      function xh(a) {
        var b = uh(), c = b.queue;
        if (null === c)
          throw Error(u(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e = c.pending, f = b.memoizedState;
        if (null !== e) {
          c.pending = null;
          var g = e = e.next;
          do
            f = a(f, g.action), g = g.next;
          while (g !== e);
          $e(f, b.memoizedState) || (rg = true);
          b.memoizedState = f;
          null === b.baseQueue && (b.baseState = f);
          c.lastRenderedState = f;
        }
        return [f, d];
      }
      function yh(a) {
        var b = th();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: vh, lastRenderedState: a };
        a = a.dispatch = zh.bind(null, N, a);
        return [b.memoizedState, a];
      }
      function Ah(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = N.updateQueue;
        null === b ? (b = { lastEffect: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function Bh() {
        return uh().memoizedState;
      }
      function Ch(a, b, c, d) {
        var e = th();
        N.effectTag |= a;
        e.memoizedState = Ah(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function Dh(a, b, c, d) {
        var e = uh();
        d = void 0 === d ? null : d;
        var f = void 0;
        if (null !== O) {
          var g = O.memoizedState;
          f = g.destroy;
          if (null !== d && nh(d, g.deps)) {
            Ah(b, c, f, d);
            return;
          }
        }
        N.effectTag |= a;
        e.memoizedState = Ah(1 | b, c, f, d);
      }
      function Eh(a, b) {
        return Ch(516, 4, a, b);
      }
      function Fh(a, b) {
        return Dh(516, 4, a, b);
      }
      function Gh(a, b) {
        return Dh(4, 2, a, b);
      }
      function Hh(a, b) {
        if ("function" === typeof b)
          return a = a(), b(a), function() {
            b(null);
          };
        if (null !== b && void 0 !== b)
          return a = a(), b.current = a, function() {
            b.current = null;
          };
      }
      function Ih(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return Dh(4, 2, Hh.bind(null, b, a), c);
      }
      function Jh() {
      }
      function Kh(a, b) {
        th().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }
      function Lh(a, b) {
        var c = uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && nh(b, d[1]))
          return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function Mh(a, b) {
        var c = uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && nh(b, d[1]))
          return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function Nh(a, b, c) {
        var d = ag();
        cg(98 > d ? 98 : d, function() {
          a(true);
        });
        cg(97 < d ? 97 : d, function() {
          var d2 = kh.suspense;
          kh.suspense = void 0 === b ? null : b;
          try {
            a(false), c();
          } finally {
            kh.suspense = d2;
          }
        });
      }
      function zh(a, b, c) {
        var d = Gg(), e = Dg.suspense;
        d = Hg(d, a, e);
        e = { expirationTime: d, suspenseConfig: e, action: c, eagerReducer: null, eagerState: null, next: null };
        var f = b.pending;
        null === f ? e.next = e : (e.next = f.next, f.next = e);
        b.pending = e;
        f = a.alternate;
        if (a === N || null !== f && f === N)
          mh = true, e.expirationTime = lh, N.expirationTime = lh;
        else {
          if (0 === a.expirationTime && (null === f || 0 === f.expirationTime) && (f = b.lastRenderedReducer, null !== f))
            try {
              var g = b.lastRenderedState, h = f(g, c);
              e.eagerReducer = f;
              e.eagerState = h;
              if ($e(h, g))
                return;
            } catch (k) {
            } finally {
            }
          Ig(
            a,
            d
          );
        }
      }
      var sh = { readContext: sg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useResponder: Q, useDeferredValue: Q, useTransition: Q };
      var ph = { readContext: sg, useCallback: Kh, useContext: sg, useEffect: Eh, useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return Ch(4, 2, Hh.bind(null, b, a), c);
      }, useLayoutEffect: function(a, b) {
        return Ch(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [
          a,
          b
        ];
        return a;
      }, useReducer: function(a, b, c) {
        var d = th();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        a = a.dispatch = zh.bind(null, N, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = th();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: yh, useDebugValue: Jh, useResponder: ih, useDeferredValue: function(a, b) {
        var c = yh(a), d = c[0], e = c[1];
        Eh(function() {
          var c2 = kh.suspense;
          kh.suspense = void 0 === b ? null : b;
          try {
            e(a);
          } finally {
            kh.suspense = c2;
          }
        }, [a, b]);
        return d;
      }, useTransition: function(a) {
        var b = yh(false), c = b[0];
        b = b[1];
        return [Kh(Nh.bind(null, b, a), [b, a]), c];
      } };
      var qh = { readContext: sg, useCallback: Lh, useContext: sg, useEffect: Fh, useImperativeHandle: Ih, useLayoutEffect: Gh, useMemo: Mh, useReducer: wh, useRef: Bh, useState: function() {
        return wh(vh);
      }, useDebugValue: Jh, useResponder: ih, useDeferredValue: function(a, b) {
        var c = wh(vh), d = c[0], e = c[1];
        Fh(function() {
          var c2 = kh.suspense;
          kh.suspense = void 0 === b ? null : b;
          try {
            e(a);
          } finally {
            kh.suspense = c2;
          }
        }, [a, b]);
        return d;
      }, useTransition: function(a) {
        var b = wh(vh), c = b[0];
        b = b[1];
        return [Lh(Nh.bind(null, b, a), [b, a]), c];
      } };
      var rh = { readContext: sg, useCallback: Lh, useContext: sg, useEffect: Fh, useImperativeHandle: Ih, useLayoutEffect: Gh, useMemo: Mh, useReducer: xh, useRef: Bh, useState: function() {
        return xh(vh);
      }, useDebugValue: Jh, useResponder: ih, useDeferredValue: function(a, b) {
        var c = xh(vh), d = c[0], e = c[1];
        Fh(function() {
          var c2 = kh.suspense;
          kh.suspense = void 0 === b ? null : b;
          try {
            e(a);
          } finally {
            kh.suspense = c2;
          }
        }, [a, b]);
        return d;
      }, useTransition: function(a) {
        var b = xh(vh), c = b[0];
        b = b[1];
        return [Lh(Nh.bind(
          null,
          b,
          a
        ), [b, a]), c];
      } };
      var Oh = null;
      var Ph = null;
      var Qh = false;
      function Rh(a, b) {
        var c = Sh(5, null, null, 0);
        c.elementType = "DELETED";
        c.type = "DELETED";
        c.stateNode = b;
        c.return = a;
        c.effectTag = 8;
        null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
      }
      function Th(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, true) : false;
          case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, true) : false;
          case 13:
            return false;
          default:
            return false;
        }
      }
      function Uh(a) {
        if (Qh) {
          var b = Ph;
          if (b) {
            var c = b;
            if (!Th(a, b)) {
              b = Jd(c.nextSibling);
              if (!b || !Th(a, b)) {
                a.effectTag = a.effectTag & -1025 | 2;
                Qh = false;
                Oh = a;
                return;
              }
              Rh(Oh, c);
            }
            Oh = a;
            Ph = Jd(b.firstChild);
          } else
            a.effectTag = a.effectTag & -1025 | 2, Qh = false, Oh = a;
        }
      }
      function Vh(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
          a = a.return;
        Oh = a;
      }
      function Wh(a) {
        if (a !== Oh)
          return false;
        if (!Qh)
          return Vh(a), Qh = true, false;
        var b = a.type;
        if (5 !== a.tag || "head" !== b && "body" !== b && !Gd(b, a.memoizedProps))
          for (b = Ph; b; )
            Rh(a, b), b = Jd(b.nextSibling);
        Vh(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a)
            throw Error(u(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if (c === Ad) {
                  if (0 === b) {
                    Ph = Jd(a.nextSibling);
                    break a;
                  }
                  b--;
                } else
                  c !== zd && c !== Cd && c !== Bd || b++;
              }
              a = a.nextSibling;
            }
            Ph = null;
          }
        } else
          Ph = Oh ? Jd(a.stateNode.nextSibling) : null;
        return true;
      }
      function Xh() {
        Ph = Oh = null;
        Qh = false;
      }
      var Yh = Wa.ReactCurrentOwner;
      var rg = false;
      function R(a, b, c, d) {
        b.child = null === a ? Yg(b, null, c, d) : Xg(b, a.child, c, d);
      }
      function Zh(a, b, c, d, e) {
        c = c.render;
        var f = b.ref;
        qg(b, e);
        d = oh(a, b, c, d, f, e);
        if (null !== a && !rg)
          return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
        b.effectTag |= 1;
        R(a, b, d, e);
        return b.child;
      }
      function ai(a, b, c, d, e, f) {
        if (null === a) {
          var g = c.type;
          if ("function" === typeof g && !bi(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps)
            return b.tag = 15, b.type = g, ci(a, b, g, d, e, f);
          a = Ug(c.type, null, d, null, b.mode, f);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        g = a.child;
        if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : bf, c(e, d) && a.ref === b.ref))
          return $h(a, b, f);
        b.effectTag |= 1;
        a = Sg(g, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function ci(a, b, c, d, e, f) {
        return null !== a && bf(a.memoizedProps, d) && a.ref === b.ref && (rg = false, e < f) ? (b.expirationTime = a.expirationTime, $h(a, b, f)) : di(a, b, c, d, f);
      }
      function ei(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c)
          b.effectTag |= 128;
      }
      function di(a, b, c, d, e) {
        var f = L(c) ? Bf : J.current;
        f = Cf(b, f);
        qg(b, e);
        c = oh(a, b, c, d, f, e);
        if (null !== a && !rg)
          return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
        b.effectTag |= 1;
        R(a, b, c, e);
        return b.child;
      }
      function fi(a, b, c, d, e) {
        if (L(c)) {
          var f = true;
          Gf(b);
        } else
          f = false;
        qg(b, e);
        if (null === b.stateNode)
          null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Lg(b, c, d), Ng(b, c, d, e), d = true;
        else if (null === a) {
          var g = b.stateNode, h = b.memoizedProps;
          g.props = h;
          var k = g.context, l = c.contextType;
          "object" === typeof l && null !== l ? l = sg(l) : (l = L(c) ? Bf : J.current, l = Cf(b, l));
          var m = c.getDerivedStateFromProps, p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          p || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Mg(b, g, d, l);
          tg = false;
          var x2 = b.memoizedState;
          g.state = x2;
          zg(b, d, g, e);
          k = b.memoizedState;
          h !== d || x2 !== k || K.current || tg ? ("function" === typeof m && (Fg(b, c, m, d), k = b.memoizedState), (h = tg || Kg(b, c, h, d, x2, k, l)) ? (p || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = false);
        } else
          g = b.stateNode, vg(a, b), h = b.memoizedProps, g.props = b.type === b.elementType ? h : ig(b.type, h), k = g.context, l = c.contextType, "object" === typeof l && null !== l ? l = sg(l) : (l = L(c) ? Bf : J.current, l = Cf(b, l)), m = c.getDerivedStateFromProps, (p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Mg(b, g, d, l), tg = false, k = b.memoizedState, g.state = k, zg(b, d, g, e), x2 = b.memoizedState, h !== d || k !== x2 || K.current || tg ? ("function" === typeof m && (Fg(b, c, m, d), x2 = b.memoizedState), (m = tg || Kg(b, c, h, d, k, x2, l)) ? (p || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(
            d,
            x2,
            l
          ), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x2, l)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x2), g.props = d, g.state = x2, g.context = l, d = m) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = false);
        return gi(a, b, c, d, f, e);
      }
      function gi(a, b, c, d, e, f) {
        ei(a, b);
        var g = 0 !== (b.effectTag & 64);
        if (!d && !g)
          return e && Hf(b, c, false), $h(a, b, f);
        d = b.stateNode;
        Yh.current = b;
        var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.effectTag |= 1;
        null !== a && g ? (b.child = Xg(b, a.child, null, f), b.child = Xg(b, null, h, f)) : R(a, b, h, f);
        b.memoizedState = d.state;
        e && Hf(b, c, true);
        return b.child;
      }
      function hi(a) {
        var b = a.stateNode;
        b.pendingContext ? Ef(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Ef(a, b.context, false);
        dh(a, b.containerInfo);
      }
      var ii = { dehydrated: null, retryTime: 0 };
      function ji(a, b, c) {
        var d = b.mode, e = b.pendingProps, f = M.current, g = false, h;
        (h = 0 !== (b.effectTag & 64)) || (h = 0 !== (f & 2) && (null === a || null !== a.memoizedState));
        h ? (g = true, b.effectTag &= -65) : null !== a && null === a.memoizedState || void 0 === e.fallback || true === e.unstable_avoidThisFallback || (f |= 1);
        I(M, f & 1);
        if (null === a) {
          void 0 !== e.fallback && Uh(b);
          if (g) {
            g = e.fallback;
            e = Wg(null, d, 0, null);
            e.return = b;
            if (0 === (b.mode & 2))
              for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a; )
                a.return = e, a = a.sibling;
            c = Wg(g, d, c, null);
            c.return = b;
            e.sibling = c;
            b.memoizedState = ii;
            b.child = e;
            return c;
          }
          d = e.children;
          b.memoizedState = null;
          return b.child = Yg(b, null, d, c);
        }
        if (null !== a.memoizedState) {
          a = a.child;
          d = a.sibling;
          if (g) {
            e = e.fallback;
            c = Sg(a, a.pendingProps);
            c.return = b;
            if (0 === (b.mode & 2) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== a.child))
              for (c.child = g; null !== g; )
                g.return = c, g = g.sibling;
            d = Sg(d, e);
            d.return = b;
            c.sibling = d;
            c.childExpirationTime = 0;
            b.memoizedState = ii;
            b.child = c;
            return d;
          }
          c = Xg(b, a.child, e.children, c);
          b.memoizedState = null;
          return b.child = c;
        }
        a = a.child;
        if (g) {
          g = e.fallback;
          e = Wg(null, d, 0, null);
          e.return = b;
          e.child = a;
          null !== a && (a.return = e);
          if (0 === (b.mode & 2))
            for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a; )
              a.return = e, a = a.sibling;
          c = Wg(g, d, c, null);
          c.return = b;
          e.sibling = c;
          c.effectTag |= 2;
          e.childExpirationTime = 0;
          b.memoizedState = ii;
          b.child = e;
          return c;
        }
        b.memoizedState = null;
        return b.child = Xg(b, a, e.children, c);
      }
      function ki(a, b) {
        a.expirationTime < b && (a.expirationTime = b);
        var c = a.alternate;
        null !== c && c.expirationTime < b && (c.expirationTime = b);
        pg(a.return, b);
      }
      function li(a, b, c, d, e, f) {
        var g = a.memoizedState;
        null === g ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailExpiration: 0, tailMode: e, lastEffect: f } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f);
      }
      function mi(a, b, c) {
        var d = b.pendingProps, e = d.revealOrder, f = d.tail;
        R(a, b, d.children, c);
        d = M.current;
        if (0 !== (d & 2))
          d = d & 1 | 2, b.effectTag |= 64;
        else {
          if (null !== a && 0 !== (a.effectTag & 64))
            a:
              for (a = b.child; null !== a; ) {
                if (13 === a.tag)
                  null !== a.memoizedState && ki(a, c);
                else if (19 === a.tag)
                  ki(a, c);
                else if (null !== a.child) {
                  a.child.return = a;
                  a = a.child;
                  continue;
                }
                if (a === b)
                  break a;
                for (; null === a.sibling; ) {
                  if (null === a.return || a.return === b)
                    break a;
                  a = a.return;
                }
                a.sibling.return = a.return;
                a = a.sibling;
              }
          d &= 1;
        }
        I(M, d);
        if (0 === (b.mode & 2))
          b.memoizedState = null;
        else
          switch (e) {
            case "forwards":
              c = b.child;
              for (e = null; null !== c; )
                a = c.alternate, null !== a && null === hh(a) && (e = c), c = c.sibling;
              c = e;
              null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
              li(b, false, e, c, f, b.lastEffect);
              break;
            case "backwards":
              c = null;
              e = b.child;
              for (b.child = null; null !== e; ) {
                a = e.alternate;
                if (null !== a && null === hh(a)) {
                  b.child = e;
                  break;
                }
                a = e.sibling;
                e.sibling = c;
                c = e;
                e = a;
              }
              li(b, true, c, null, f, b.lastEffect);
              break;
            case "together":
              li(b, false, null, null, void 0, b.lastEffect);
              break;
            default:
              b.memoizedState = null;
          }
        return b.child;
      }
      function $h(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        var d = b.expirationTime;
        0 !== d && Bg(d);
        if (b.childExpirationTime < c)
          return null;
        if (null !== a && b.child !== a.child)
          throw Error(u(153));
        if (null !== b.child) {
          a = b.child;
          c = Sg(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling; )
            a = a.sibling, c = c.sibling = Sg(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      var ni;
      var oi;
      var pi;
      var qi;
      ni = function(a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag)
            a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b)
            break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b)
              return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      oi = function() {
      };
      pi = function(a, b, c, d, e) {
        var f = a.memoizedProps;
        if (f !== d) {
          var g = b.stateNode;
          ch($g.current);
          a = null;
          switch (c) {
            case "input":
              f = zb(g, f);
              d = zb(g, d);
              a = [];
              break;
            case "option":
              f = Gb(g, f);
              d = Gb(g, d);
              a = [];
              break;
            case "select":
              f = n({}, f, { value: void 0 });
              d = n({}, d, { value: void 0 });
              a = [];
              break;
            case "textarea":
              f = Ib(g, f);
              d = Ib(g, d);
              a = [];
              break;
            default:
              "function" !== typeof f.onClick && "function" === typeof d.onClick && (g.onclick = sd);
          }
          od(c, d);
          var h, k;
          c = null;
          for (h in f)
            if (!d.hasOwnProperty(h) && f.hasOwnProperty(h) && null != f[h])
              if ("style" === h)
                for (k in g = f[h], g)
                  g.hasOwnProperty(k) && (c || (c = {}), c[k] = "");
              else
                "dangerouslySetInnerHTML" !== h && "children" !== h && "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (va.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null));
          for (h in d) {
            var l = d[h];
            g = null != f ? f[h] : void 0;
            if (d.hasOwnProperty(h) && l !== g && (null != l || null != g))
              if ("style" === h)
                if (g) {
                  for (k in g)
                    !g.hasOwnProperty(k) || l && l.hasOwnProperty(k) || (c || (c = {}), c[k] = "");
                  for (k in l)
                    l.hasOwnProperty(k) && g[k] !== l[k] && (c || (c = {}), c[k] = l[k]);
                } else
                  c || (a || (a = []), a.push(h, c)), c = l;
              else
                "dangerouslySetInnerHTML" === h ? (l = l ? l.__html : void 0, g = g ? g.__html : void 0, null != l && g !== l && (a = a || []).push(h, l)) : "children" === h ? g === l || "string" !== typeof l && "number" !== typeof l || (a = a || []).push(h, "" + l) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && (va.hasOwnProperty(h) ? (null != l && rd(e, h), a || g === l || (a = [])) : (a = a || []).push(h, l));
          }
          c && (a = a || []).push("style", c);
          e = a;
          if (b.updateQueue = e)
            b.effectTag |= 4;
        }
      };
      qi = function(a, b, c, d) {
        c !== d && (b.effectTag |= 4);
      };
      function ri(a, b) {
        switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; )
              null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; )
              null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function si(a, b, c) {
        var d = b.pendingProps;
        switch (b.tag) {
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
            return null;
          case 1:
            return L(b.type) && Df(), null;
          case 3:
            return eh(), H(K), H(J), c = b.stateNode, c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), null !== a && null !== a.child || !Wh(b) || (b.effectTag |= 4), oi(b), null;
          case 5:
            gh(b);
            c = ch(bh.current);
            var e = b.type;
            if (null !== a && null != b.stateNode)
              pi(a, b, e, d, c), a.ref !== b.ref && (b.effectTag |= 128);
            else {
              if (!d) {
                if (null === b.stateNode)
                  throw Error(u(166));
                return null;
              }
              a = ch($g.current);
              if (Wh(b)) {
                d = b.stateNode;
                e = b.type;
                var f = b.memoizedProps;
                d[Md] = b;
                d[Nd] = f;
                switch (e) {
                  case "iframe":
                  case "object":
                  case "embed":
                    F("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (a = 0; a < ac.length; a++)
                      F(ac[a], d);
                    break;
                  case "source":
                    F("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    F("error", d);
                    F("load", d);
                    break;
                  case "form":
                    F("reset", d);
                    F("submit", d);
                    break;
                  case "details":
                    F("toggle", d);
                    break;
                  case "input":
                    Ab(d, f);
                    F("invalid", d);
                    rd(c, "onChange");
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f.multiple };
                    F("invalid", d);
                    rd(c, "onChange");
                    break;
                  case "textarea":
                    Jb(d, f), F("invalid", d), rd(c, "onChange");
                }
                od(e, f);
                a = null;
                for (var g in f)
                  if (f.hasOwnProperty(g)) {
                    var h = f[g];
                    "children" === g ? "string" === typeof h ? d.textContent !== h && (a = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (a = ["children", "" + h]) : va.hasOwnProperty(g) && null != h && rd(c, g);
                  }
                switch (e) {
                  case "input":
                    xb(d);
                    Eb(d, f, true);
                    break;
                  case "textarea":
                    xb(d);
                    Lb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f.onClick && (d.onclick = sd);
                }
                c = a;
                b.updateQueue = c;
                null !== c && (b.effectTag |= 4);
              } else {
                g = 9 === c.nodeType ? c : c.ownerDocument;
                a === qd && (a = Nb(e));
                a === qd ? "script" === e ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(e, { is: d.is }) : (a = g.createElement(e), "select" === e && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, e);
                a[Md] = b;
                a[Nd] = d;
                ni(a, b, false, false);
                b.stateNode = a;
                g = pd(e, d);
                switch (e) {
                  case "iframe":
                  case "object":
                  case "embed":
                    F(
                      "load",
                      a
                    );
                    h = d;
                    break;
                  case "video":
                  case "audio":
                    for (h = 0; h < ac.length; h++)
                      F(ac[h], a);
                    h = d;
                    break;
                  case "source":
                    F("error", a);
                    h = d;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    F("error", a);
                    F("load", a);
                    h = d;
                    break;
                  case "form":
                    F("reset", a);
                    F("submit", a);
                    h = d;
                    break;
                  case "details":
                    F("toggle", a);
                    h = d;
                    break;
                  case "input":
                    Ab(a, d);
                    h = zb(a, d);
                    F("invalid", a);
                    rd(c, "onChange");
                    break;
                  case "option":
                    h = Gb(a, d);
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d.multiple };
                    h = n({}, d, { value: void 0 });
                    F("invalid", a);
                    rd(c, "onChange");
                    break;
                  case "textarea":
                    Jb(
                      a,
                      d
                    );
                    h = Ib(a, d);
                    F("invalid", a);
                    rd(c, "onChange");
                    break;
                  default:
                    h = d;
                }
                od(e, h);
                var k = h;
                for (f in k)
                  if (k.hasOwnProperty(f)) {
                    var l = k[f];
                    "style" === f ? md(a, l) : "dangerouslySetInnerHTML" === f ? (l = l ? l.__html : void 0, null != l && Qb(a, l)) : "children" === f ? "string" === typeof l ? ("textarea" !== e || "" !== l) && Rb(a, l) : "number" === typeof l && Rb(a, "" + l) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (va.hasOwnProperty(f) ? null != l && rd(c, f) : null != l && Xa(a, f, l, g));
                  }
                switch (e) {
                  case "input":
                    xb(a);
                    Eb(a, d, false);
                    break;
                  case "textarea":
                    xb(a);
                    Lb(a);
                    break;
                  case "option":
                    null != d.value && a.setAttribute("value", "" + rb(d.value));
                    break;
                  case "select":
                    a.multiple = !!d.multiple;
                    c = d.value;
                    null != c ? Hb(a, !!d.multiple, c, false) : null != d.defaultValue && Hb(a, !!d.multiple, d.defaultValue, true);
                    break;
                  default:
                    "function" === typeof h.onClick && (a.onclick = sd);
                }
                Fd(e, d) && (b.effectTag |= 4);
              }
              null !== b.ref && (b.effectTag |= 128);
            }
            return null;
          case 6:
            if (a && null != b.stateNode)
              qi(a, b, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode)
                throw Error(u(166));
              c = ch(bh.current);
              ch($g.current);
              Wh(b) ? (c = b.stateNode, d = b.memoizedProps, c[Md] = b, c.nodeValue !== d && (b.effectTag |= 4)) : (c = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), c[Md] = b, b.stateNode = c);
            }
            return null;
          case 13:
            H(M);
            d = b.memoizedState;
            if (0 !== (b.effectTag & 64))
              return b.expirationTime = c, b;
            c = null !== d;
            d = false;
            null === a ? void 0 !== b.memoizedProps.fallback && Wh(b) : (e = a.memoizedState, d = null !== e, c || null === e || (e = a.child.sibling, null !== e && (f = b.firstEffect, null !== f ? (b.firstEffect = e, e.nextEffect = f) : (b.firstEffect = b.lastEffect = e, e.nextEffect = null), e.effectTag = 8)));
            if (c && !d && 0 !== (b.mode & 2))
              if (null === a && true !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (M.current & 1))
                S === ti && (S = ui);
              else {
                if (S === ti || S === ui)
                  S = vi;
                0 !== wi && null !== T && (xi(T, U), yi(T, wi));
              }
            if (c || d)
              b.effectTag |= 4;
            return null;
          case 4:
            return eh(), oi(b), null;
          case 10:
            return og(b), null;
          case 17:
            return L(b.type) && Df(), null;
          case 19:
            H(M);
            d = b.memoizedState;
            if (null === d)
              return null;
            e = 0 !== (b.effectTag & 64);
            f = d.rendering;
            if (null === f)
              if (e)
                ri(d, false);
              else {
                if (S !== ti || null !== a && 0 !== (a.effectTag & 64))
                  for (f = b.child; null !== f; ) {
                    a = hh(f);
                    if (null !== a) {
                      b.effectTag |= 64;
                      ri(d, false);
                      e = a.updateQueue;
                      null !== e && (b.updateQueue = e, b.effectTag |= 4);
                      null === d.lastEffect && (b.firstEffect = null);
                      b.lastEffect = d.lastEffect;
                      for (d = b.child; null !== d; )
                        e = d, f = c, e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, a = e.alternate, null === a ? (e.childExpirationTime = 0, e.expirationTime = f, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null) : (e.childExpirationTime = a.childExpirationTime, e.expirationTime = a.expirationTime, e.child = a.child, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, f = a.dependencies, e.dependencies = null === f ? null : { expirationTime: f.expirationTime, firstContext: f.firstContext, responders: f.responders }), d = d.sibling;
                      I(M, M.current & 1 | 2);
                      return b.child;
                    }
                    f = f.sibling;
                  }
              }
            else {
              if (!e)
                if (a = hh(f), null !== a) {
                  if (b.effectTag |= 64, e = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.effectTag |= 4), ri(d, true), null === d.tail && "hidden" === d.tailMode && !f.alternate)
                    return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
                } else
                  2 * $f() - d.renderingStartTime > d.tailExpiration && 1 < c && (b.effectTag |= 64, e = true, ri(d, false), b.expirationTime = b.childExpirationTime = c - 1);
              d.isBackwards ? (f.sibling = b.child, b.child = f) : (c = d.last, null !== c ? c.sibling = f : b.child = f, d.last = f);
            }
            return null !== d.tail ? (0 === d.tailExpiration && (d.tailExpiration = $f() + 500), c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = $f(), c.sibling = null, b = M.current, I(M, e ? b & 1 | 2 : b & 1), c) : null;
        }
        throw Error(u(
          156,
          b.tag
        ));
      }
      function zi(a) {
        switch (a.tag) {
          case 1:
            L(a.type) && Df();
            var b = a.effectTag;
            return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
          case 3:
            eh();
            H(K);
            H(J);
            b = a.effectTag;
            if (0 !== (b & 64))
              throw Error(u(285));
            a.effectTag = b & -4097 | 64;
            return a;
          case 5:
            return gh(a), null;
          case 13:
            return H(M), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
          case 19:
            return H(M), null;
          case 4:
            return eh(), null;
          case 10:
            return og(a), null;
          default:
            return null;
        }
      }
      function Ai(a, b) {
        return { value: a, source: b, stack: qb(b) };
      }
      var Bi = "function" === typeof WeakSet ? WeakSet : Set;
      function Ci(a, b) {
        var c = b.source, d = b.stack;
        null === d && null !== c && (d = qb(c));
        null !== c && pb(c.type);
        b = b.value;
        null !== a && 1 === a.tag && pb(a.type);
        try {
          console.error(b);
        } catch (e) {
          setTimeout(function() {
            throw e;
          });
        }
      }
      function Di(a, b) {
        try {
          b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
        } catch (c) {
          Ei(a, c);
        }
      }
      function Fi(a) {
        var b = a.ref;
        if (null !== b)
          if ("function" === typeof b)
            try {
              b(null);
            } catch (c) {
              Ei(a, c);
            }
          else
            b.current = null;
      }
      function Gi(a, b) {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (b.effectTag & 256 && null !== a) {
              var c = a.memoizedProps, d = a.memoizedState;
              a = b.stateNode;
              b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : ig(b.type, c), d);
              a.__reactInternalSnapshotBeforeUpdate = b;
            }
            return;
          case 3:
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(u(163));
      }
      function Hi(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.destroy;
              c.destroy = void 0;
              void 0 !== d && d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Ii(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Ji(a, b, c) {
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            Ii(3, c);
            return;
          case 1:
            a = c.stateNode;
            if (c.effectTag & 4)
              if (null === b)
                a.componentDidMount();
              else {
                var d = c.elementType === c.type ? b.memoizedProps : ig(c.type, b.memoizedProps);
                a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
              }
            b = c.updateQueue;
            null !== b && Cg(c, b, a);
            return;
          case 3:
            b = c.updateQueue;
            if (null !== b) {
              a = null;
              if (null !== c.child)
                switch (c.child.tag) {
                  case 5:
                    a = c.child.stateNode;
                    break;
                  case 1:
                    a = c.child.stateNode;
                }
              Cg(c, b, a);
            }
            return;
          case 5:
            a = c.stateNode;
            null === b && c.effectTag & 4 && Fd(c.type, c.memoizedProps) && a.focus();
            return;
          case 6:
            return;
          case 4:
            return;
          case 12:
            return;
          case 13:
            null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Vc(c))));
            return;
          case 19:
          case 17:
          case 20:
          case 21:
            return;
        }
        throw Error(u(163));
      }
      function Ki(a, b, c) {
        "function" === typeof Li && Li(b);
        switch (b.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            a = b.updateQueue;
            if (null !== a && (a = a.lastEffect, null !== a)) {
              var d = a.next;
              cg(97 < c ? 97 : c, function() {
                var a2 = d;
                do {
                  var c2 = a2.destroy;
                  if (void 0 !== c2) {
                    var g = b;
                    try {
                      c2();
                    } catch (h) {
                      Ei(g, h);
                    }
                  }
                  a2 = a2.next;
                } while (a2 !== d);
              });
            }
            break;
          case 1:
            Fi(b);
            c = b.stateNode;
            "function" === typeof c.componentWillUnmount && Di(b, c);
            break;
          case 5:
            Fi(b);
            break;
          case 4:
            Mi(a, b, c);
        }
      }
      function Ni(a) {
        var b = a.alternate;
        a.return = null;
        a.child = null;
        a.memoizedState = null;
        a.updateQueue = null;
        a.dependencies = null;
        a.alternate = null;
        a.firstEffect = null;
        a.lastEffect = null;
        a.pendingProps = null;
        a.memoizedProps = null;
        a.stateNode = null;
        null !== b && Ni(b);
      }
      function Oi(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Pi(a) {
        a: {
          for (var b = a.return; null !== b; ) {
            if (Oi(b)) {
              var c = b;
              break a;
            }
            b = b.return;
          }
          throw Error(u(160));
        }
        b = c.stateNode;
        switch (c.tag) {
          case 5:
            var d = false;
            break;
          case 3:
            b = b.containerInfo;
            d = true;
            break;
          case 4:
            b = b.containerInfo;
            d = true;
            break;
          default:
            throw Error(u(161));
        }
        c.effectTag & 16 && (Rb(b, ""), c.effectTag &= -17);
        a:
          b:
            for (c = a; ; ) {
              for (; null === c.sibling; ) {
                if (null === c.return || Oi(c.return)) {
                  c = null;
                  break a;
                }
                c = c.return;
              }
              c.sibling.return = c.return;
              for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag; ) {
                if (c.effectTag & 2)
                  continue b;
                if (null === c.child || 4 === c.tag)
                  continue b;
                else
                  c.child.return = c, c = c.child;
              }
              if (!(c.effectTag & 2)) {
                c = c.stateNode;
                break a;
              }
            }
        d ? Qi(a, c, b) : Ri(a, c, b);
      }
      function Qi(a, b, c) {
        var d = a.tag, e = 5 === d || 6 === d;
        if (e)
          a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = sd));
        else if (4 !== d && (a = a.child, null !== a))
          for (Qi(a, b, c), a = a.sibling; null !== a; )
            Qi(a, b, c), a = a.sibling;
      }
      function Ri(a, b, c) {
        var d = a.tag, e = 5 === d || 6 === d;
        if (e)
          a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a))
          for (Ri(a, b, c), a = a.sibling; null !== a; )
            Ri(a, b, c), a = a.sibling;
      }
      function Mi(a, b, c) {
        for (var d = b, e = false, f, g; ; ) {
          if (!e) {
            e = d.return;
            a:
              for (; ; ) {
                if (null === e)
                  throw Error(u(160));
                f = e.stateNode;
                switch (e.tag) {
                  case 5:
                    g = false;
                    break a;
                  case 3:
                    f = f.containerInfo;
                    g = true;
                    break a;
                  case 4:
                    f = f.containerInfo;
                    g = true;
                    break a;
                }
                e = e.return;
              }
            e = true;
          }
          if (5 === d.tag || 6 === d.tag) {
            a:
              for (var h = a, k = d, l = c, m = k; ; )
                if (Ki(h, m, l), null !== m.child && 4 !== m.tag)
                  m.child.return = m, m = m.child;
                else {
                  if (m === k)
                    break a;
                  for (; null === m.sibling; ) {
                    if (null === m.return || m.return === k)
                      break a;
                    m = m.return;
                  }
                  m.sibling.return = m.return;
                  m = m.sibling;
                }
            g ? (h = f, k = d.stateNode, 8 === h.nodeType ? h.parentNode.removeChild(k) : h.removeChild(k)) : f.removeChild(d.stateNode);
          } else if (4 === d.tag) {
            if (null !== d.child) {
              f = d.stateNode.containerInfo;
              g = true;
              d.child.return = d;
              d = d.child;
              continue;
            }
          } else if (Ki(a, d, c), null !== d.child) {
            d.child.return = d;
            d = d.child;
            continue;
          }
          if (d === b)
            break;
          for (; null === d.sibling; ) {
            if (null === d.return || d.return === b)
              return;
            d = d.return;
            4 === d.tag && (e = false);
          }
          d.sibling.return = d.return;
          d = d.sibling;
        }
      }
      function Si(a, b) {
        switch (b.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            Hi(3, b);
            return;
          case 1:
            return;
          case 5:
            var c = b.stateNode;
            if (null != c) {
              var d = b.memoizedProps, e = null !== a ? a.memoizedProps : d;
              a = b.type;
              var f = b.updateQueue;
              b.updateQueue = null;
              if (null !== f) {
                c[Nd] = d;
                "input" === a && "radio" === d.type && null != d.name && Bb(c, d);
                pd(a, e);
                b = pd(a, d);
                for (e = 0; e < f.length; e += 2) {
                  var g = f[e], h = f[e + 1];
                  "style" === g ? md(c, h) : "dangerouslySetInnerHTML" === g ? Qb(c, h) : "children" === g ? Rb(c, h) : Xa(c, g, h, b);
                }
                switch (a) {
                  case "input":
                    Cb(c, d);
                    break;
                  case "textarea":
                    Kb(c, d);
                    break;
                  case "select":
                    b = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, a = d.value, null != a ? Hb(c, !!d.multiple, a, false) : b !== !!d.multiple && (null != d.defaultValue ? Hb(c, !!d.multiple, d.defaultValue, true) : Hb(c, !!d.multiple, d.multiple ? [] : "", false));
                }
              }
            }
            return;
          case 6:
            if (null === b.stateNode)
              throw Error(u(162));
            b.stateNode.nodeValue = b.memoizedProps;
            return;
          case 3:
            b = b.stateNode;
            b.hydrate && (b.hydrate = false, Vc(b.containerInfo));
            return;
          case 12:
            return;
          case 13:
            c = b;
            null === b.memoizedState ? d = false : (d = true, c = b.child, Ti = $f());
            if (null !== c)
              a:
                for (a = c; ; ) {
                  if (5 === a.tag)
                    f = a.stateNode, d ? (f = f.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (f = a.stateNode, e = a.memoizedProps.style, e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null, f.style.display = ld("display", e));
                  else if (6 === a.tag)
                    a.stateNode.nodeValue = d ? "" : a.memoizedProps;
                  else if (13 === a.tag && null !== a.memoizedState && null === a.memoizedState.dehydrated) {
                    f = a.child.sibling;
                    f.return = a;
                    a = f;
                    continue;
                  } else if (null !== a.child) {
                    a.child.return = a;
                    a = a.child;
                    continue;
                  }
                  if (a === c)
                    break;
                  for (; null === a.sibling; ) {
                    if (null === a.return || a.return === c)
                      break a;
                    a = a.return;
                  }
                  a.sibling.return = a.return;
                  a = a.sibling;
                }
            Ui(b);
            return;
          case 19:
            Ui(b);
            return;
          case 17:
            return;
        }
        throw Error(u(163));
      }
      function Ui(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Bi());
          b.forEach(function(b2) {
            var d = Vi.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      var Wi = "function" === typeof WeakMap ? WeakMap : Map;
      function Xi(a, b, c) {
        c = wg(c, null);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Yi || (Yi = true, Zi = d);
          Ci(a, b);
        };
        return c;
      }
      function $i(a, b, c) {
        c = wg(c, null);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b.value;
          c.payload = function() {
            Ci(a, b);
            return d(e);
          };
        }
        var f = a.stateNode;
        null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
          "function" !== typeof d && (null === aj ? aj = /* @__PURE__ */ new Set([this]) : aj.add(this), Ci(a, b));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      var bj = Math.ceil;
      var cj = Wa.ReactCurrentDispatcher;
      var dj = Wa.ReactCurrentOwner;
      var V = 0;
      var ej = 8;
      var fj = 16;
      var gj = 32;
      var ti = 0;
      var hj = 1;
      var ij = 2;
      var ui = 3;
      var vi = 4;
      var jj = 5;
      var W = V;
      var T = null;
      var X = null;
      var U = 0;
      var S = ti;
      var kj = null;
      var lj = 1073741823;
      var mj = 1073741823;
      var nj = null;
      var wi = 0;
      var oj = false;
      var Ti = 0;
      var pj = 500;
      var Y = null;
      var Yi = false;
      var Zi = null;
      var aj = null;
      var qj = false;
      var rj = null;
      var sj = 90;
      var tj = null;
      var uj = 0;
      var vj = null;
      var wj = 0;
      function Gg() {
        return (W & (fj | gj)) !== V ? 1073741821 - ($f() / 10 | 0) : 0 !== wj ? wj : wj = 1073741821 - ($f() / 10 | 0);
      }
      function Hg(a, b, c) {
        b = b.mode;
        if (0 === (b & 2))
          return 1073741823;
        var d = ag();
        if (0 === (b & 4))
          return 99 === d ? 1073741823 : 1073741822;
        if ((W & fj) !== V)
          return U;
        if (null !== c)
          a = hg(a, c.timeoutMs | 0 || 5e3, 250);
        else
          switch (d) {
            case 99:
              a = 1073741823;
              break;
            case 98:
              a = hg(a, 150, 100);
              break;
            case 97:
            case 96:
              a = hg(a, 5e3, 250);
              break;
            case 95:
              a = 2;
              break;
            default:
              throw Error(u(326));
          }
        null !== T && a === U && --a;
        return a;
      }
      function Ig(a, b) {
        if (50 < uj)
          throw uj = 0, vj = null, Error(u(185));
        a = xj(a, b);
        if (null !== a) {
          var c = ag();
          1073741823 === b ? (W & ej) !== V && (W & (fj | gj)) === V ? yj(a) : (Z(a), W === V && gg()) : Z(a);
          (W & 4) === V || 98 !== c && 99 !== c || (null === tj ? tj = /* @__PURE__ */ new Map([[a, b]]) : (c = tj.get(a), (void 0 === c || c > b) && tj.set(a, b)));
        }
      }
      function xj(a, b) {
        a.expirationTime < b && (a.expirationTime = b);
        var c = a.alternate;
        null !== c && c.expirationTime < b && (c.expirationTime = b);
        var d = a.return, e = null;
        if (null === d && 3 === a.tag)
          e = a.stateNode;
        else
          for (; null !== d; ) {
            c = d.alternate;
            d.childExpirationTime < b && (d.childExpirationTime = b);
            null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
            if (null === d.return && 3 === d.tag) {
              e = d.stateNode;
              break;
            }
            d = d.return;
          }
        null !== e && (T === e && (Bg(b), S === vi && xi(e, U)), yi(e, b));
        return e;
      }
      function zj(a) {
        var b = a.lastExpiredTime;
        if (0 !== b)
          return b;
        b = a.firstPendingTime;
        if (!Aj(a, b))
          return b;
        var c = a.lastPingedTime;
        a = a.nextKnownPendingLevel;
        a = c > a ? c : a;
        return 2 >= a && b !== a ? 0 : a;
      }
      function Z(a) {
        if (0 !== a.lastExpiredTime)
          a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = eg(yj.bind(null, a));
        else {
          var b = zj(a), c = a.callbackNode;
          if (0 === b)
            null !== c && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);
          else {
            var d = Gg();
            1073741823 === b ? d = 99 : 1 === b || 2 === b ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);
            if (null !== c) {
              var e = a.callbackPriority;
              if (a.callbackExpirationTime === b && e >= d)
                return;
              c !== Tf && Kf(c);
            }
            a.callbackExpirationTime = b;
            a.callbackPriority = d;
            b = 1073741823 === b ? eg(yj.bind(null, a)) : dg(d, Bj.bind(null, a), { timeout: 10 * (1073741821 - b) - $f() });
            a.callbackNode = b;
          }
        }
      }
      function Bj(a, b) {
        wj = 0;
        if (b)
          return b = Gg(), Cj(a, b), Z(a), null;
        var c = zj(a);
        if (0 !== c) {
          b = a.callbackNode;
          if ((W & (fj | gj)) !== V)
            throw Error(u(327));
          Dj();
          a === T && c === U || Ej(a, c);
          if (null !== X) {
            var d = W;
            W |= fj;
            var e = Fj();
            do
              try {
                Gj();
                break;
              } catch (h) {
                Hj(a, h);
              }
            while (1);
            ng();
            W = d;
            cj.current = e;
            if (S === hj)
              throw b = kj, Ej(a, c), xi(a, c), Z(a), b;
            if (null === X)
              switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, d = S, T = null, d) {
                case ti:
                case hj:
                  throw Error(u(345));
                case ij:
                  Cj(a, 2 < c ? 2 : c);
                  break;
                case ui:
                  xi(a, c);
                  d = a.lastSuspendedTime;
                  c === d && (a.nextKnownPendingLevel = Ij(e));
                  if (1073741823 === lj && (e = Ti + pj - $f(), 10 < e)) {
                    if (oj) {
                      var f = a.lastPingedTime;
                      if (0 === f || f >= c) {
                        a.lastPingedTime = c;
                        Ej(a, c);
                        break;
                      }
                    }
                    f = zj(a);
                    if (0 !== f && f !== c)
                      break;
                    if (0 !== d && d !== c) {
                      a.lastPingedTime = d;
                      break;
                    }
                    a.timeoutHandle = Hd(Jj.bind(null, a), e);
                    break;
                  }
                  Jj(a);
                  break;
                case vi:
                  xi(a, c);
                  d = a.lastSuspendedTime;
                  c === d && (a.nextKnownPendingLevel = Ij(e));
                  if (oj && (e = a.lastPingedTime, 0 === e || e >= c)) {
                    a.lastPingedTime = c;
                    Ej(a, c);
                    break;
                  }
                  e = zj(a);
                  if (0 !== e && e !== c)
                    break;
                  if (0 !== d && d !== c) {
                    a.lastPingedTime = d;
                    break;
                  }
                  1073741823 !== mj ? d = 10 * (1073741821 - mj) - $f() : 1073741823 === lj ? d = 0 : (d = 10 * (1073741821 - lj) - 5e3, e = $f(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * bj(d / 1960)) - d, c < d && (d = c));
                  if (10 < d) {
                    a.timeoutHandle = Hd(Jj.bind(null, a), d);
                    break;
                  }
                  Jj(a);
                  break;
                case jj:
                  if (1073741823 !== lj && null !== nj) {
                    f = lj;
                    var g = nj;
                    d = g.busyMinDurationMs | 0;
                    0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = $f() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5e3)), d = f <= e ? 0 : e + d - f);
                    if (10 < d) {
                      xi(a, c);
                      a.timeoutHandle = Hd(Jj.bind(null, a), d);
                      break;
                    }
                  }
                  Jj(a);
                  break;
                default:
                  throw Error(u(329));
              }
            Z(a);
            if (a.callbackNode === b)
              return Bj.bind(null, a);
          }
        }
        return null;
      }
      function yj(a) {
        var b = a.lastExpiredTime;
        b = 0 !== b ? b : 1073741823;
        if ((W & (fj | gj)) !== V)
          throw Error(u(327));
        Dj();
        a === T && b === U || Ej(a, b);
        if (null !== X) {
          var c = W;
          W |= fj;
          var d = Fj();
          do
            try {
              Kj();
              break;
            } catch (e) {
              Hj(a, e);
            }
          while (1);
          ng();
          W = c;
          cj.current = d;
          if (S === hj)
            throw c = kj, Ej(a, b), xi(a, b), Z(a), c;
          if (null !== X)
            throw Error(u(261));
          a.finishedWork = a.current.alternate;
          a.finishedExpirationTime = b;
          T = null;
          Jj(a);
          Z(a);
        }
        return null;
      }
      function Lj() {
        if (null !== tj) {
          var a = tj;
          tj = null;
          a.forEach(function(a2, c) {
            Cj(c, a2);
            Z(c);
          });
          gg();
        }
      }
      function Mj(a, b) {
        var c = W;
        W |= 1;
        try {
          return a(b);
        } finally {
          W = c, W === V && gg();
        }
      }
      function Nj(a, b) {
        var c = W;
        W &= -2;
        W |= ej;
        try {
          return a(b);
        } finally {
          W = c, W === V && gg();
        }
      }
      function Ej(a, b) {
        a.finishedWork = null;
        a.finishedExpirationTime = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Id(c));
        if (null !== X)
          for (c = X.return; null !== c; ) {
            var d = c;
            switch (d.tag) {
              case 1:
                d = d.type.childContextTypes;
                null !== d && void 0 !== d && Df();
                break;
              case 3:
                eh();
                H(K);
                H(J);
                break;
              case 5:
                gh(d);
                break;
              case 4:
                eh();
                break;
              case 13:
                H(M);
                break;
              case 19:
                H(M);
                break;
              case 10:
                og(d);
            }
            c = c.return;
          }
        T = a;
        X = Sg(a.current, null);
        U = b;
        S = ti;
        kj = null;
        mj = lj = 1073741823;
        nj = null;
        wi = 0;
        oj = false;
      }
      function Hj(a, b) {
        do {
          try {
            ng();
            jh.current = sh;
            if (mh)
              for (var c = N.memoizedState; null !== c; ) {
                var d = c.queue;
                null !== d && (d.pending = null);
                c = c.next;
              }
            lh = 0;
            P = O = N = null;
            mh = false;
            if (null === X || null === X.return)
              return S = hj, kj = b, X = null;
            a: {
              var e = a, f = X.return, g = X, h = b;
              b = U;
              g.effectTag |= 2048;
              g.firstEffect = g.lastEffect = null;
              if (null !== h && "object" === typeof h && "function" === typeof h.then) {
                var k = h;
                if (0 === (g.mode & 2)) {
                  var l = g.alternate;
                  l ? (g.updateQueue = l.updateQueue, g.memoizedState = l.memoizedState, g.expirationTime = l.expirationTime) : (g.updateQueue = null, g.memoizedState = null);
                }
                var m = 0 !== (M.current & 1), p = f;
                do {
                  var x2;
                  if (x2 = 13 === p.tag) {
                    var z = p.memoizedState;
                    if (null !== z)
                      x2 = null !== z.dehydrated ? true : false;
                    else {
                      var ca = p.memoizedProps;
                      x2 = void 0 === ca.fallback ? false : true !== ca.unstable_avoidThisFallback ? true : m ? false : true;
                    }
                  }
                  if (x2) {
                    var D = p.updateQueue;
                    if (null === D) {
                      var t = /* @__PURE__ */ new Set();
                      t.add(k);
                      p.updateQueue = t;
                    } else
                      D.add(k);
                    if (0 === (p.mode & 2)) {
                      p.effectTag |= 64;
                      g.effectTag &= -2981;
                      if (1 === g.tag)
                        if (null === g.alternate)
                          g.tag = 17;
                        else {
                          var y = wg(1073741823, null);
                          y.tag = 2;
                          xg(g, y);
                        }
                      g.expirationTime = 1073741823;
                      break a;
                    }
                    h = void 0;
                    g = b;
                    var A = e.pingCache;
                    null === A ? (A = e.pingCache = new Wi(), h = /* @__PURE__ */ new Set(), A.set(k, h)) : (h = A.get(k), void 0 === h && (h = /* @__PURE__ */ new Set(), A.set(k, h)));
                    if (!h.has(g)) {
                      h.add(g);
                      var q = Oj.bind(null, e, k, g);
                      k.then(q, q);
                    }
                    p.effectTag |= 4096;
                    p.expirationTime = b;
                    break a;
                  }
                  p = p.return;
                } while (null !== p);
                h = Error((pb(g.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + qb(g));
              }
              S !== jj && (S = ij);
              h = Ai(h, g);
              p = f;
              do {
                switch (p.tag) {
                  case 3:
                    k = h;
                    p.effectTag |= 4096;
                    p.expirationTime = b;
                    var B = Xi(p, k, b);
                    yg(p, B);
                    break a;
                  case 1:
                    k = h;
                    var w = p.type, ub = p.stateNode;
                    if (0 === (p.effectTag & 64) && ("function" === typeof w.getDerivedStateFromError || null !== ub && "function" === typeof ub.componentDidCatch && (null === aj || !aj.has(ub)))) {
                      p.effectTag |= 4096;
                      p.expirationTime = b;
                      var vb = $i(p, k, b);
                      yg(p, vb);
                      break a;
                    }
                }
                p = p.return;
              } while (null !== p);
            }
            X = Pj(X);
          } catch (Xc) {
            b = Xc;
            continue;
          }
          break;
        } while (1);
      }
      function Fj() {
        var a = cj.current;
        cj.current = sh;
        return null === a ? sh : a;
      }
      function Ag(a, b) {
        a < lj && 2 < a && (lj = a);
        null !== b && a < mj && 2 < a && (mj = a, nj = b);
      }
      function Bg(a) {
        a > wi && (wi = a);
      }
      function Kj() {
        for (; null !== X; )
          X = Qj(X);
      }
      function Gj() {
        for (; null !== X && !Uf(); )
          X = Qj(X);
      }
      function Qj(a) {
        var b = Rj(a.alternate, a, U);
        a.memoizedProps = a.pendingProps;
        null === b && (b = Pj(a));
        dj.current = null;
        return b;
      }
      function Pj(a) {
        X = a;
        do {
          var b = X.alternate;
          a = X.return;
          if (0 === (X.effectTag & 2048)) {
            b = si(b, X, U);
            if (1 === U || 1 !== X.childExpirationTime) {
              for (var c = 0, d = X.child; null !== d; ) {
                var e = d.expirationTime, f = d.childExpirationTime;
                e > c && (c = e);
                f > c && (c = f);
                d = d.sibling;
              }
              X.childExpirationTime = c;
            }
            if (null !== b)
              return b;
            null !== a && 0 === (a.effectTag & 2048) && (null === a.firstEffect && (a.firstEffect = X.firstEffect), null !== X.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = X.firstEffect), a.lastEffect = X.lastEffect), 1 < X.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = X : a.firstEffect = X, a.lastEffect = X));
          } else {
            b = zi(X);
            if (null !== b)
              return b.effectTag &= 2047, b;
            null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
          }
          b = X.sibling;
          if (null !== b)
            return b;
          X = a;
        } while (null !== X);
        S === ti && (S = jj);
        return null;
      }
      function Ij(a) {
        var b = a.expirationTime;
        a = a.childExpirationTime;
        return b > a ? b : a;
      }
      function Jj(a) {
        var b = ag();
        cg(99, Sj.bind(null, a, b));
        return null;
      }
      function Sj(a, b) {
        do
          Dj();
        while (null !== rj);
        if ((W & (fj | gj)) !== V)
          throw Error(u(327));
        var c = a.finishedWork, d = a.finishedExpirationTime;
        if (null === c)
          return null;
        a.finishedWork = null;
        a.finishedExpirationTime = 0;
        if (c === a.current)
          throw Error(u(177));
        a.callbackNode = null;
        a.callbackExpirationTime = 0;
        a.callbackPriority = 90;
        a.nextKnownPendingLevel = 0;
        var e = Ij(c);
        a.firstPendingTime = e;
        d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
        d <= a.lastPingedTime && (a.lastPingedTime = 0);
        d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
        a === T && (X = T = null, U = 0);
        1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;
        if (null !== e) {
          var f = W;
          W |= gj;
          dj.current = null;
          Dd = fd;
          var g = xd();
          if (yd(g)) {
            if ("selectionStart" in g)
              var h = { start: g.selectionStart, end: g.selectionEnd };
            else
              a: {
                h = (h = g.ownerDocument) && h.defaultView || window;
                var k = h.getSelection && h.getSelection();
                if (k && 0 !== k.rangeCount) {
                  h = k.anchorNode;
                  var l = k.anchorOffset, m = k.focusNode;
                  k = k.focusOffset;
                  try {
                    h.nodeType, m.nodeType;
                  } catch (wb) {
                    h = null;
                    break a;
                  }
                  var p = 0, x2 = -1, z = -1, ca = 0, D = 0, t = g, y = null;
                  b:
                    for (; ; ) {
                      for (var A; ; ) {
                        t !== h || 0 !== l && 3 !== t.nodeType || (x2 = p + l);
                        t !== m || 0 !== k && 3 !== t.nodeType || (z = p + k);
                        3 === t.nodeType && (p += t.nodeValue.length);
                        if (null === (A = t.firstChild))
                          break;
                        y = t;
                        t = A;
                      }
                      for (; ; ) {
                        if (t === g)
                          break b;
                        y === h && ++ca === l && (x2 = p);
                        y === m && ++D === k && (z = p);
                        if (null !== (A = t.nextSibling))
                          break;
                        t = y;
                        y = t.parentNode;
                      }
                      t = A;
                    }
                  h = -1 === x2 || -1 === z ? null : { start: x2, end: z };
                } else
                  h = null;
              }
            h = h || { start: 0, end: 0 };
          } else
            h = null;
          Ed = { activeElementDetached: null, focusedElem: g, selectionRange: h };
          fd = false;
          Y = e;
          do
            try {
              Tj();
            } catch (wb) {
              if (null === Y)
                throw Error(u(330));
              Ei(Y, wb);
              Y = Y.nextEffect;
            }
          while (null !== Y);
          Y = e;
          do
            try {
              for (g = a, h = b; null !== Y; ) {
                var q = Y.effectTag;
                q & 16 && Rb(Y.stateNode, "");
                if (q & 128) {
                  var B = Y.alternate;
                  if (null !== B) {
                    var w = B.ref;
                    null !== w && ("function" === typeof w ? w(null) : w.current = null);
                  }
                }
                switch (q & 1038) {
                  case 2:
                    Pi(Y);
                    Y.effectTag &= -3;
                    break;
                  case 6:
                    Pi(Y);
                    Y.effectTag &= -3;
                    Si(Y.alternate, Y);
                    break;
                  case 1024:
                    Y.effectTag &= -1025;
                    break;
                  case 1028:
                    Y.effectTag &= -1025;
                    Si(Y.alternate, Y);
                    break;
                  case 4:
                    Si(Y.alternate, Y);
                    break;
                  case 8:
                    l = Y, Mi(g, l, h), Ni(l);
                }
                Y = Y.nextEffect;
              }
            } catch (wb) {
              if (null === Y)
                throw Error(u(330));
              Ei(Y, wb);
              Y = Y.nextEffect;
            }
          while (null !== Y);
          w = Ed;
          B = xd();
          q = w.focusedElem;
          h = w.selectionRange;
          if (B !== q && q && q.ownerDocument && wd(q.ownerDocument.documentElement, q)) {
            null !== h && yd(q) && (B = h.start, w = h.end, void 0 === w && (w = B), "selectionStart" in q ? (q.selectionStart = B, q.selectionEnd = Math.min(w, q.value.length)) : (w = (B = q.ownerDocument || document) && B.defaultView || window, w.getSelection && (w = w.getSelection(), l = q.textContent.length, g = Math.min(h.start, l), h = void 0 === h.end ? g : Math.min(h.end, l), !w.extend && g > h && (l = h, h = g, g = l), l = vd(q, g), m = vd(q, h), l && m && (1 !== w.rangeCount || w.anchorNode !== l.node || w.anchorOffset !== l.offset || w.focusNode !== m.node || w.focusOffset !== m.offset) && (B = B.createRange(), B.setStart(l.node, l.offset), w.removeAllRanges(), g > h ? (w.addRange(B), w.extend(m.node, m.offset)) : (B.setEnd(m.node, m.offset), w.addRange(B))))));
            B = [];
            for (w = q; w = w.parentNode; )
              1 === w.nodeType && B.push({
                element: w,
                left: w.scrollLeft,
                top: w.scrollTop
              });
            "function" === typeof q.focus && q.focus();
            for (q = 0; q < B.length; q++)
              w = B[q], w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
          }
          fd = !!Dd;
          Ed = Dd = null;
          a.current = c;
          Y = e;
          do
            try {
              for (q = a; null !== Y; ) {
                var ub = Y.effectTag;
                ub & 36 && Ji(q, Y.alternate, Y);
                if (ub & 128) {
                  B = void 0;
                  var vb = Y.ref;
                  if (null !== vb) {
                    var Xc = Y.stateNode;
                    switch (Y.tag) {
                      case 5:
                        B = Xc;
                        break;
                      default:
                        B = Xc;
                    }
                    "function" === typeof vb ? vb(B) : vb.current = B;
                  }
                }
                Y = Y.nextEffect;
              }
            } catch (wb) {
              if (null === Y)
                throw Error(u(330));
              Ei(Y, wb);
              Y = Y.nextEffect;
            }
          while (null !== Y);
          Y = null;
          Vf();
          W = f;
        } else
          a.current = c;
        if (qj)
          qj = false, rj = a, sj = b;
        else
          for (Y = e; null !== Y; )
            b = Y.nextEffect, Y.nextEffect = null, Y = b;
        b = a.firstPendingTime;
        0 === b && (aj = null);
        1073741823 === b ? a === vj ? uj++ : (uj = 0, vj = a) : uj = 0;
        "function" === typeof Uj && Uj(c.stateNode, d);
        Z(a);
        if (Yi)
          throw Yi = false, a = Zi, Zi = null, a;
        if ((W & ej) !== V)
          return null;
        gg();
        return null;
      }
      function Tj() {
        for (; null !== Y; ) {
          var a = Y.effectTag;
          0 !== (a & 256) && Gi(Y.alternate, Y);
          0 === (a & 512) || qj || (qj = true, dg(97, function() {
            Dj();
            return null;
          }));
          Y = Y.nextEffect;
        }
      }
      function Dj() {
        if (90 !== sj) {
          var a = 97 < sj ? 97 : sj;
          sj = 90;
          return cg(a, Vj);
        }
      }
      function Vj() {
        if (null === rj)
          return false;
        var a = rj;
        rj = null;
        if ((W & (fj | gj)) !== V)
          throw Error(u(331));
        var b = W;
        W |= gj;
        for (a = a.current.firstEffect; null !== a; ) {
          try {
            var c = a;
            if (0 !== (c.effectTag & 512))
              switch (c.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                  Hi(5, c), Ii(5, c);
              }
          } catch (d) {
            if (null === a)
              throw Error(u(330));
            Ei(a, d);
          }
          c = a.nextEffect;
          a.nextEffect = null;
          a = c;
        }
        W = b;
        gg();
        return true;
      }
      function Wj(a, b, c) {
        b = Ai(c, b);
        b = Xi(a, b, 1073741823);
        xg(a, b);
        a = xj(a, 1073741823);
        null !== a && Z(a);
      }
      function Ei(a, b) {
        if (3 === a.tag)
          Wj(a, a, b);
        else
          for (var c = a.return; null !== c; ) {
            if (3 === c.tag) {
              Wj(c, a, b);
              break;
            } else if (1 === c.tag) {
              var d = c.stateNode;
              if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === aj || !aj.has(d))) {
                a = Ai(b, a);
                a = $i(c, a, 1073741823);
                xg(c, a);
                c = xj(c, 1073741823);
                null !== c && Z(c);
                break;
              }
            }
            c = c.return;
          }
      }
      function Oj(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        T === a && U === c ? S === vi || S === ui && 1073741823 === lj && $f() - Ti < pj ? Ej(a, U) : oj = true : Aj(a, c) && (b = a.lastPingedTime, 0 !== b && b < c || (a.lastPingedTime = c, Z(a)));
      }
      function Vi(a, b) {
        var c = a.stateNode;
        null !== c && c.delete(b);
        b = 0;
        0 === b && (b = Gg(), b = Hg(b, a, null));
        a = xj(a, b);
        null !== a && Z(a);
      }
      var Rj;
      Rj = function(a, b, c) {
        var d = b.expirationTime;
        if (null !== a) {
          var e = b.pendingProps;
          if (a.memoizedProps !== e || K.current)
            rg = true;
          else {
            if (d < c) {
              rg = false;
              switch (b.tag) {
                case 3:
                  hi(b);
                  Xh();
                  break;
                case 5:
                  fh(b);
                  if (b.mode & 4 && 1 !== c && e.hidden)
                    return b.expirationTime = b.childExpirationTime = 1, null;
                  break;
                case 1:
                  L(b.type) && Gf(b);
                  break;
                case 4:
                  dh(b, b.stateNode.containerInfo);
                  break;
                case 10:
                  d = b.memoizedProps.value;
                  e = b.type._context;
                  I(jg, e._currentValue);
                  e._currentValue = d;
                  break;
                case 13:
                  if (null !== b.memoizedState) {
                    d = b.child.childExpirationTime;
                    if (0 !== d && d >= c)
                      return ji(a, b, c);
                    I(M, M.current & 1);
                    b = $h(a, b, c);
                    return null !== b ? b.sibling : null;
                  }
                  I(M, M.current & 1);
                  break;
                case 19:
                  d = b.childExpirationTime >= c;
                  if (0 !== (a.effectTag & 64)) {
                    if (d)
                      return mi(a, b, c);
                    b.effectTag |= 64;
                  }
                  e = b.memoizedState;
                  null !== e && (e.rendering = null, e.tail = null);
                  I(M, M.current);
                  if (!d)
                    return null;
              }
              return $h(a, b, c);
            }
            rg = false;
          }
        } else
          rg = false;
        b.expirationTime = 0;
        switch (b.tag) {
          case 2:
            d = b.type;
            null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
            a = b.pendingProps;
            e = Cf(b, J.current);
            qg(b, c);
            e = oh(
              null,
              b,
              d,
              a,
              e,
              c
            );
            b.effectTag |= 1;
            if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
              b.tag = 1;
              b.memoizedState = null;
              b.updateQueue = null;
              if (L(d)) {
                var f = true;
                Gf(b);
              } else
                f = false;
              b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
              ug(b);
              var g = d.getDerivedStateFromProps;
              "function" === typeof g && Fg(b, d, g, a);
              e.updater = Jg;
              b.stateNode = e;
              e._reactInternalFiber = b;
              Ng(b, d, a, c);
              b = gi(null, b, d, true, f, c);
            } else
              b.tag = 0, R(null, b, e, c), b = b.child;
            return b;
          case 16:
            a: {
              e = b.elementType;
              null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
              a = b.pendingProps;
              ob(e);
              if (1 !== e._status)
                throw e._result;
              e = e._result;
              b.type = e;
              f = b.tag = Xj(e);
              a = ig(e, a);
              switch (f) {
                case 0:
                  b = di(null, b, e, a, c);
                  break a;
                case 1:
                  b = fi(null, b, e, a, c);
                  break a;
                case 11:
                  b = Zh(null, b, e, a, c);
                  break a;
                case 14:
                  b = ai(null, b, e, ig(e.type, a), d, c);
                  break a;
              }
              throw Error(u(306, e, ""));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), di(a, b, d, e, c);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), fi(a, b, d, e, c);
          case 3:
            hi(b);
            d = b.updateQueue;
            if (null === a || null === d)
              throw Error(u(282));
            d = b.pendingProps;
            e = b.memoizedState;
            e = null !== e ? e.element : null;
            vg(a, b);
            zg(b, d, null, c);
            d = b.memoizedState.element;
            if (d === e)
              Xh(), b = $h(a, b, c);
            else {
              if (e = b.stateNode.hydrate)
                Ph = Jd(b.stateNode.containerInfo.firstChild), Oh = b, e = Qh = true;
              if (e)
                for (c = Yg(b, null, d, c), b.child = c; c; )
                  c.effectTag = c.effectTag & -3 | 1024, c = c.sibling;
              else
                R(a, b, d, c), Xh();
              b = b.child;
            }
            return b;
          case 5:
            return fh(b), null === a && Uh(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Gd(d, e) ? g = null : null !== f && Gd(d, f) && (b.effectTag |= 16), ei(a, b), b.mode & 4 && 1 !== c && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (R(a, b, g, c), b = b.child), b;
          case 6:
            return null === a && Uh(b), null;
          case 13:
            return ji(a, b, c);
          case 4:
            return dh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Xg(b, null, d, c) : R(a, b, d, c), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), Zh(a, b, d, e, c);
          case 7:
            return R(a, b, b.pendingProps, c), b.child;
          case 8:
            return R(
              a,
              b,
              b.pendingProps.children,
              c
            ), b.child;
          case 12:
            return R(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              g = b.memoizedProps;
              f = e.value;
              var h = b.type._context;
              I(jg, h._currentValue);
              h._currentValue = f;
              if (null !== g)
                if (h = g.value, f = $e(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
                  if (g.children === e.children && !K.current) {
                    b = $h(a, b, c);
                    break a;
                  }
                } else
                  for (h = b.child, null !== h && (h.return = b); null !== h; ) {
                    var k = h.dependencies;
                    if (null !== k) {
                      g = h.child;
                      for (var l = k.firstContext; null !== l; ) {
                        if (l.context === d && 0 !== (l.observedBits & f)) {
                          1 === h.tag && (l = wg(c, null), l.tag = 2, xg(h, l));
                          h.expirationTime < c && (h.expirationTime = c);
                          l = h.alternate;
                          null !== l && l.expirationTime < c && (l.expirationTime = c);
                          pg(h.return, c);
                          k.expirationTime < c && (k.expirationTime = c);
                          break;
                        }
                        l = l.next;
                      }
                    } else
                      g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;
                    if (null !== g)
                      g.return = h;
                    else
                      for (g = h; null !== g; ) {
                        if (g === b) {
                          g = null;
                          break;
                        }
                        h = g.sibling;
                        if (null !== h) {
                          h.return = g.return;
                          g = h;
                          break;
                        }
                        g = g.return;
                      }
                    h = g;
                  }
              R(a, b, e.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, f = b.pendingProps, d = f.children, qg(b, c), e = sg(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, R(a, b, d, c), b.child;
          case 14:
            return e = b.type, f = ig(e, b.pendingProps), f = ig(e.type, f), ai(a, b, e, f, d, c);
          case 15:
            return ci(a, b, b.type, b.pendingProps, d, c);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, L(d) ? (a = true, Gf(b)) : a = false, qg(b, c), Lg(b, d, e), Ng(b, d, e, c), gi(
              null,
              b,
              d,
              true,
              a,
              c
            );
          case 19:
            return mi(a, b, c);
        }
        throw Error(u(156, b.tag));
      };
      var Uj = null;
      var Li = null;
      function Yj(a) {
        if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
          return false;
        var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (b.isDisabled || !b.supportsFiber)
          return true;
        try {
          var c = b.inject(a);
          Uj = function(a2) {
            try {
              b.onCommitFiberRoot(c, a2, void 0, 64 === (a2.current.effectTag & 64));
            } catch (e) {
            }
          };
          Li = function(a2) {
            try {
              b.onCommitFiberUnmount(c, a2);
            } catch (e) {
            }
          };
        } catch (d) {
        }
        return true;
      }
      function Zj(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.effectTag = 0;
        this.lastEffect = this.firstEffect = this.nextEffect = null;
        this.childExpirationTime = this.expirationTime = 0;
        this.alternate = null;
      }
      function Sh(a, b, c, d) {
        return new Zj(a, b, c, d);
      }
      function bi(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Xj(a) {
        if ("function" === typeof a)
          return bi(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === gb)
            return 11;
          if (a === jb)
            return 14;
        }
        return 2;
      }
      function Sg(a, b) {
        var c = a.alternate;
        null === c ? (c = Sh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
        c.childExpirationTime = a.childExpirationTime;
        c.expirationTime = a.expirationTime;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : {
          expirationTime: b.expirationTime,
          firstContext: b.firstContext,
          responders: b.responders
        };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Ug(a, b, c, d, e, f) {
        var g = 2;
        d = a;
        if ("function" === typeof a)
          bi(a) && (g = 1);
        else if ("string" === typeof a)
          g = 5;
        else
          a:
            switch (a) {
              case ab:
                return Wg(c.children, e, f, b);
              case fb:
                g = 8;
                e |= 7;
                break;
              case bb:
                g = 8;
                e |= 1;
                break;
              case cb:
                return a = Sh(12, c, b, e | 8), a.elementType = cb, a.type = cb, a.expirationTime = f, a;
              case hb:
                return a = Sh(13, c, b, e), a.type = hb, a.elementType = hb, a.expirationTime = f, a;
              case ib:
                return a = Sh(19, c, b, e), a.elementType = ib, a.expirationTime = f, a;
              default:
                if ("object" === typeof a && null !== a)
                  switch (a.$$typeof) {
                    case db:
                      g = 10;
                      break a;
                    case eb:
                      g = 9;
                      break a;
                    case gb:
                      g = 11;
                      break a;
                    case jb:
                      g = 14;
                      break a;
                    case kb:
                      g = 16;
                      d = null;
                      break a;
                    case lb:
                      g = 22;
                      break a;
                  }
                throw Error(u(130, null == a ? a : typeof a, ""));
            }
        b = Sh(g, c, b, e);
        b.elementType = a;
        b.type = d;
        b.expirationTime = f;
        return b;
      }
      function Wg(a, b, c, d) {
        a = Sh(7, a, d, b);
        a.expirationTime = c;
        return a;
      }
      function Tg(a, b, c) {
        a = Sh(6, a, null, b);
        a.expirationTime = c;
        return a;
      }
      function Vg(a, b, c) {
        b = Sh(4, null !== a.children ? a.children : [], a.key, b);
        b.expirationTime = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function ak(a, b, c) {
        this.tag = b;
        this.current = null;
        this.containerInfo = a;
        this.pingCache = this.pendingChildren = null;
        this.finishedExpirationTime = 0;
        this.finishedWork = null;
        this.timeoutHandle = -1;
        this.pendingContext = this.context = null;
        this.hydrate = c;
        this.callbackNode = null;
        this.callbackPriority = 90;
        this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
      }
      function Aj(a, b) {
        var c = a.firstSuspendedTime;
        a = a.lastSuspendedTime;
        return 0 !== c && c >= b && a <= b;
      }
      function xi(a, b) {
        var c = a.firstSuspendedTime, d = a.lastSuspendedTime;
        c < b && (a.firstSuspendedTime = b);
        if (d > b || 0 === c)
          a.lastSuspendedTime = b;
        b <= a.lastPingedTime && (a.lastPingedTime = 0);
        b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
      }
      function yi(a, b) {
        b > a.firstPendingTime && (a.firstPendingTime = b);
        var c = a.firstSuspendedTime;
        0 !== c && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
      }
      function Cj(a, b) {
        var c = a.lastExpiredTime;
        if (0 === c || c > b)
          a.lastExpiredTime = b;
      }
      function bk(a, b, c, d) {
        var e = b.current, f = Gg(), g = Dg.suspense;
        f = Hg(f, e, g);
        a:
          if (c) {
            c = c._reactInternalFiber;
            b: {
              if (dc(c) !== c || 1 !== c.tag)
                throw Error(u(170));
              var h = c;
              do {
                switch (h.tag) {
                  case 3:
                    h = h.stateNode.context;
                    break b;
                  case 1:
                    if (L(h.type)) {
                      h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                      break b;
                    }
                }
                h = h.return;
              } while (null !== h);
              throw Error(u(171));
            }
            if (1 === c.tag) {
              var k = c.type;
              if (L(k)) {
                c = Ff(c, k, h);
                break a;
              }
            }
            c = h;
          } else
            c = Af;
        null === b.context ? b.context = c : b.pendingContext = c;
        b = wg(f, g);
        b.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        xg(e, b);
        Ig(e, f);
        return f;
      }
      function ck(a) {
        a = a.current;
        if (!a.child)
          return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function dk(a, b) {
        a = a.memoizedState;
        null !== a && null !== a.dehydrated && a.retryTime < b && (a.retryTime = b);
      }
      function ek(a, b) {
        dk(a, b);
        (a = a.alternate) && dk(a, b);
      }
      function fk(a, b, c) {
        c = null != c && true === c.hydrate;
        var d = new ak(a, b, c), e = Sh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
        d.current = e;
        e.stateNode = d;
        ug(e);
        a[Od] = d.current;
        c && 0 !== b && Jc(a, 9 === a.nodeType ? a : a.ownerDocument);
        this._internalRoot = d;
      }
      fk.prototype.render = function(a) {
        bk(a, this._internalRoot, null, null);
      };
      fk.prototype.unmount = function() {
        var a = this._internalRoot, b = a.containerInfo;
        bk(null, a, null, function() {
          b[Od] = null;
        });
      };
      function gk(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function hk(a, b) {
        b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
        if (!b)
          for (var c; c = a.lastChild; )
            a.removeChild(c);
        return new fk(a, 0, b ? { hydrate: true } : void 0);
      }
      function ik(a, b, c, d, e) {
        var f = c._reactRootContainer;
        if (f) {
          var g = f._internalRoot;
          if ("function" === typeof e) {
            var h = e;
            e = function() {
              var a2 = ck(g);
              h.call(a2);
            };
          }
          bk(b, g, a, e);
        } else {
          f = c._reactRootContainer = hk(c, d);
          g = f._internalRoot;
          if ("function" === typeof e) {
            var k = e;
            e = function() {
              var a2 = ck(g);
              k.call(a2);
            };
          }
          Nj(function() {
            bk(b, g, a, e);
          });
        }
        return ck(g);
      }
      function jk(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: $a, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      wc = function(a) {
        if (13 === a.tag) {
          var b = hg(Gg(), 150, 100);
          Ig(a, b);
          ek(a, b);
        }
      };
      xc = function(a) {
        13 === a.tag && (Ig(a, 3), ek(a, 3));
      };
      yc = function(a) {
        if (13 === a.tag) {
          var b = Gg();
          b = Hg(b, a, null);
          Ig(a, b);
          ek(a, b);
        }
      };
      za = function(a, b, c) {
        switch (b) {
          case "input":
            Cb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
              for (c = a; c.parentNode; )
                c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e = Qd(d);
                  if (!e)
                    throw Error(u(90));
                  yb(d);
                  Cb(d, e);
                }
              }
            }
            break;
          case "textarea":
            Kb(a, c);
            break;
          case "select":
            b = c.value, null != b && Hb(a, !!c.multiple, b, false);
        }
      };
      Fa = Mj;
      Ga = function(a, b, c, d, e) {
        var f = W;
        W |= 4;
        try {
          return cg(98, a.bind(null, b, c, d, e));
        } finally {
          W = f, W === V && gg();
        }
      };
      Ha = function() {
        (W & (1 | fj | gj)) === V && (Lj(), Dj());
      };
      Ia = function(a, b) {
        var c = W;
        W |= 2;
        try {
          return a(b);
        } finally {
          W = c, W === V && gg();
        }
      };
      function kk(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!gk(b))
          throw Error(u(200));
        return jk(a, b, null, c);
      }
      var lk = { Events: [Nc, Pd, Qd, xa, ta, Xd, function(a) {
        jc(a, Wd);
      }, Da, Ea, id, mc, Dj, { current: false }] };
      (function(a) {
        var b = a.findFiberByHostInstance;
        return Yj(n({}, a, { overrideHookState: null, overrideProps: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Wa.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
          a2 = hc(a2);
          return null === a2 ? null : a2.stateNode;
        }, findFiberByHostInstance: function(a2) {
          return b ? b(a2) : null;
        }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null }));
      })({
        findFiberByHostInstance: tc,
        bundleType: 0,
        version: "16.13.1",
        rendererPackageName: "react-dom"
      });
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lk;
      exports.createPortal = kk;
      exports.findDOMNode = function(a) {
        if (null == a)
          return null;
        if (1 === a.nodeType)
          return a;
        var b = a._reactInternalFiber;
        if (void 0 === b) {
          if ("function" === typeof a.render)
            throw Error(u(188));
          throw Error(u(268, Object.keys(a)));
        }
        a = hc(b);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a, b) {
        if ((W & (fj | gj)) !== V)
          throw Error(u(187));
        var c = W;
        W |= 1;
        try {
          return cg(99, a.bind(null, b));
        } finally {
          W = c, gg();
        }
      };
      exports.hydrate = function(a, b, c) {
        if (!gk(b))
          throw Error(u(200));
        return ik(null, a, b, true, c);
      };
      exports.render = function(a, b, c) {
        if (!gk(b))
          throw Error(u(200));
        return ik(null, a, b, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!gk(a))
          throw Error(u(40));
        return a._reactRootContainer ? (Nj(function() {
          ik(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[Od] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Mj;
      exports.unstable_createPortal = function(a, b) {
        return kk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
      };
      exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!gk(c))
          throw Error(u(200));
        if (null == a || void 0 === a._reactInternalFiber)
          throw Error(u(38));
        return ik(a, b, c, false, d);
      };
      exports.version = "16.13.1";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/@babel/runtime/helpers/inheritsLoose.js
  var require_inheritsLoose = __commonJS({
    "node_modules/@babel/runtime/helpers/inheritsLoose.js"(exports, module) {
      function _inheritsLoose2(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }
      module.exports = _inheritsLoose2;
    }
  });

  // node_modules/deepmerge/dist/cjs.js
  var require_cjs = __commonJS({
    "node_modules/deepmerge/dist/cjs.js"(exports, module) {
      "use strict";
      var isMergeableObject2 = function isMergeableObject3(value) {
        return isNonNullObject(value) && !isSpecial(value);
      };
      function isNonNullObject(value) {
        return !!value && typeof value === "object";
      }
      function isSpecial(value) {
        var stringValue = Object.prototype.toString.call(value);
        return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
      }
      var canUseSymbol2 = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = canUseSymbol2 ? Symbol.for("react.element") : 60103;
      function isReactElement(value) {
        return value.$$typeof === REACT_ELEMENT_TYPE;
      }
      function emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
      }
      function cloneUnlessOtherwiseSpecified(value, options) {
        return options.clone !== false && options.isMergeableObject(value) ? deepmerge2(emptyTarget(value), value, options) : value;
      }
      function defaultArrayMerge(target, source, options) {
        return target.concat(source).map(function(element) {
          return cloneUnlessOtherwiseSpecified(element, options);
        });
      }
      function getMergeFunction(key, options) {
        if (!options.customMerge) {
          return deepmerge2;
        }
        var customMerge = options.customMerge(key);
        return typeof customMerge === "function" ? customMerge : deepmerge2;
      }
      function getEnumerableOwnPropertySymbols(target) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
          return target.propertyIsEnumerable(symbol);
        }) : [];
      }
      function getKeys(target) {
        return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
      }
      function propertyIsOnObject(object, property) {
        try {
          return property in object;
        } catch (_) {
          return false;
        }
      }
      function propertyIsUnsafe(target, key) {
        return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
      }
      function mergeObject(target, source, options) {
        var destination = {};
        if (options.isMergeableObject(target)) {
          getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
          });
        }
        getKeys(source).forEach(function(key) {
          if (propertyIsUnsafe(target, key)) {
            return;
          }
          if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
          } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
          }
        });
        return destination;
      }
      function deepmerge2(target, source, options) {
        options = options || {};
        options.arrayMerge = options.arrayMerge || defaultArrayMerge;
        options.isMergeableObject = options.isMergeableObject || isMergeableObject2;
        options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
        var sourceIsArray = Array.isArray(source);
        var targetIsArray = Array.isArray(target);
        var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
        if (!sourceAndTargetTypesMatch) {
          return cloneUnlessOtherwiseSpecified(source, options);
        } else if (sourceIsArray) {
          return options.arrayMerge(target, source, options);
        } else {
          return mergeObject(target, source, options);
        }
      }
      deepmerge2.all = function deepmergeAll(array, options) {
        if (!Array.isArray(array)) {
          throw new Error("first argument should be an array");
        }
        return array.reduce(function(prev, next) {
          return deepmerge2(prev, next, options);
        }, {});
      };
      var deepmerge_1 = deepmerge2;
      module.exports = deepmerge_1;
    }
  });

  // node_modules/@babel/runtime/helpers/defineProperty.js
  var require_defineProperty = __commonJS({
    "node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
      function _defineProperty3(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      module.exports = _defineProperty3;
    }
  });

  // <stdin>
  var React3 = __toESM(require_react());
  var import_react_dom = __toESM(require_react_dom());

  // node_modules/@stripe/stripe-js/dist/stripe.esm.js
  var V3_URL = "https://js.stripe.com/v3";
  var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
  var EXISTING_SCRIPT_MESSAGE = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
  var findScript = function findScript2() {
    var scripts = document.querySelectorAll('script[src^="'.concat(V3_URL, '"]'));
    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i];
      if (!V3_URL_REGEX.test(script.src)) {
        continue;
      }
      return script;
    }
    return null;
  };
  var injectScript = function injectScript2(params) {
    var queryString = params && !params.advancedFraudSignals ? "?advancedFraudSignals=false" : "";
    var script = document.createElement("script");
    script.src = "".concat(V3_URL).concat(queryString);
    var headOrBody = document.head || document.body;
    if (!headOrBody) {
      throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
    }
    headOrBody.appendChild(script);
    return script;
  };
  var registerWrapper = function registerWrapper2(stripe, startTime) {
    if (!stripe || !stripe._registerWrapper) {
      return;
    }
    stripe._registerWrapper({
      name: "stripe-js",
      version: "1.9.0",
      startTime
    });
  };
  var stripePromise = null;
  var loadScript = function loadScript2(params) {
    if (stripePromise !== null) {
      return stripePromise;
    }
    stripePromise = new Promise(function(resolve, reject) {
      if (typeof window === "undefined") {
        resolve(null);
        return;
      }
      if (window.Stripe && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      }
      if (window.Stripe) {
        resolve(window.Stripe);
        return;
      }
      try {
        var script = findScript();
        if (script && params) {
          console.warn(EXISTING_SCRIPT_MESSAGE);
        } else if (!script) {
          script = injectScript(params);
        }
        script.addEventListener("load", function() {
          if (window.Stripe) {
            resolve(window.Stripe);
          } else {
            reject(new Error("Stripe.js not available"));
          }
        });
        script.addEventListener("error", function() {
          reject(new Error("Failed to load Stripe.js"));
        });
      } catch (error) {
        reject(error);
        return;
      }
    });
    return stripePromise;
  };
  var initStripe = function initStripe2(maybeStripe, args, startTime) {
    if (maybeStripe === null) {
      return null;
    }
    var stripe = maybeStripe.apply(void 0, args);
    registerWrapper(stripe, startTime);
    return stripe;
  };
  var stripePromise$1 = Promise.resolve().then(function() {
    return loadScript(null);
  });
  var loadCalled = false;
  stripePromise$1["catch"](function(err) {
    if (!loadCalled) {
      console.warn(err);
    }
  });
  var loadStripe = function loadStripe2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    loadCalled = true;
    var startTime = Date.now();
    return stripePromise$1.then(function(maybeStripe) {
      return initStripe(maybeStripe, args, startTime);
    });
  };

  // node_modules/@emotion/core/dist/core.browser.esm.js
  var import_inheritsLoose = __toESM(require_inheritsLoose());
  var import_react = __toESM(require_react());

  // node_modules/@emotion/sheet/dist/sheet.browser.esm.js
  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    }
    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  }
  function createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== void 0) {
      tag.setAttribute("nonce", options.nonce);
    }
    tag.appendChild(document.createTextNode(""));
    return tag;
  }
  var StyleSheet = /* @__PURE__ */ function() {
    function StyleSheet2(options) {
      this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce;
      this.key = options.key;
      this.container = options.container;
      this.before = null;
    }
    var _proto = StyleSheet2.prototype;
    _proto.insert = function insert(rule) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
        var _tag = createStyleElement(this);
        var before;
        if (this.tags.length === 0) {
          before = this.before;
        } else {
          before = this.tags[this.tags.length - 1].nextSibling;
        }
        this.container.insertBefore(_tag, before);
        this.tags.push(_tag);
      }
      var tag = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);
        try {
          var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64;
          sheet.insertRule(
            rule,
            // we need to insert @import rules before anything else
            // otherwise there will be an error
            // technically this means that the @import rules will
            // _usually_(not always since there could be multiple style tags)
            // be the first ones in prod and generally later in dev
            // this shouldn't really matter in the real world though
            // @import is generally only used for font faces from google fonts and etc.
            // so while this could be technically correct then it would be slower and larger
            // for a tiny bit of correctness that won't matter in the real world
            isImportRule ? 0 : sheet.cssRules.length
          );
        } catch (e) {
          if (false) {
            console.warn('There was a problem inserting the following rule: "' + rule + '"', e);
          }
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }
      this.ctr++;
    };
    _proto.flush = function flush() {
      this.tags.forEach(function(tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };
    return StyleSheet2;
  }();

  // node_modules/@emotion/stylis/dist/stylis.browser.esm.js
  function stylis_min(W) {
    function M(d, c, e, h, a) {
      for (var m = 0, b = 0, v = 0, n = 0, q, g, x2 = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B2 = e.length, J = B2 - 1, y, f = "", p = "", F2 = "", G2 = "", C; l < B2; ) {
        g = e.charCodeAt(l);
        l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B2++, J++);
        if (0 === b + n + v + m) {
          if (l === J && (0 < r && (f = f.replace(N, "")), 0 < f.trim().length)) {
            switch (g) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break;
              default:
                f += e.charAt(l);
            }
            g = 59;
          }
          switch (g) {
            case 123:
              f = f.trim();
              q = f.charCodeAt(0);
              k = 1;
              for (t = ++l; l < B2; ) {
                switch (g = e.charCodeAt(l)) {
                  case 123:
                    k++;
                    break;
                  case 125:
                    k--;
                    break;
                  case 47:
                    switch (g = e.charCodeAt(l + 1)) {
                      case 42:
                      case 47:
                        a: {
                          for (u = l + 1; u < J; ++u) {
                            switch (e.charCodeAt(u)) {
                              case 47:
                                if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                  l = u + 1;
                                  break a;
                                }
                                break;
                              case 10:
                                if (47 === g) {
                                  l = u + 1;
                                  break a;
                                }
                            }
                          }
                          l = u;
                        }
                    }
                    break;
                  case 91:
                    g++;
                  case 40:
                    g++;
                  case 34:
                  case 39:
                    for (; l++ < J && e.charCodeAt(l) !== g; ) {
                    }
                }
                if (0 === k)
                  break;
                l++;
              }
              k = e.substring(t, l);
              0 === q && (q = (f = f.replace(ca, "").trim()).charCodeAt(0));
              switch (q) {
                case 64:
                  0 < r && (f = f.replace(N, ""));
                  g = f.charCodeAt(1);
                  switch (g) {
                    case 100:
                    case 109:
                    case 115:
                    case 45:
                      r = c;
                      break;
                    default:
                      r = O;
                  }
                  k = M(c, r, k, g, a + 1);
                  t = k.length;
                  0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(""), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ""));
                  if (0 < t)
                    switch (g) {
                      case 115:
                        f = f.replace(da, ea);
                      case 100:
                      case 109:
                      case 45:
                        k = f + "{" + k + "}";
                        break;
                      case 107:
                        f = f.replace(fa, "$1 $2");
                        k = f + "{" + k + "}";
                        k = 1 === w || 2 === w && L("@" + k, 3) ? "@-webkit-" + k + "@" + k : "@" + k;
                        break;
                      default:
                        k = f + k, 112 === h && (k = (p += k, ""));
                    }
                  else
                    k = "";
                  break;
                default:
                  k = M(c, X(c, f, I), k, h, a + 1);
              }
              F2 += k;
              k = I = r = u = q = 0;
              f = "";
              g = e.charCodeAt(++l);
              break;
            case 125:
            case 59:
              f = (0 < r ? f.replace(N, "") : f).trim();
              if (1 < (t = f.length))
                switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(" ", ":")).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = "\0\0"), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
                  case 0:
                    break;
                  case 64:
                    if (105 === g || 99 === g) {
                      G2 += f + e.charAt(l);
                      break;
                    }
                  default:
                    58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
                }
              I = r = u = q = 0;
              f = "";
              g = e.charCodeAt(++l);
          }
        }
        switch (g) {
          case 13:
          case 10:
            47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += "\0");
            0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
            z = 1;
            D++;
            break;
          case 59:
          case 125:
            if (0 === b + n + v + m) {
              z++;
              break;
            }
          default:
            z++;
            y = e.charAt(l);
            switch (g) {
              case 9:
              case 32:
                if (0 === n + m + b)
                  switch (x2) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      y = "";
                      break;
                    default:
                      32 !== g && (y = " ");
                  }
                break;
              case 0:
                y = "\\0";
                break;
              case 12:
                y = "\\f";
                break;
              case 11:
                y = "\\v";
                break;
              case 38:
                0 === n + b + m && (r = I = 1, y = "\f" + y);
                break;
              case 108:
                if (0 === n + b + m + E && 0 < u)
                  switch (l - u) {
                    case 2:
                      112 === x2 && 58 === e.charCodeAt(l - 3) && (E = x2);
                    case 8:
                      111 === K && (E = K);
                  }
                break;
              case 58:
                0 === n + b + m && (u = l);
                break;
              case 44:
                0 === b + v + n + m && (r = 1, y += "\r");
                break;
              case 34:
              case 39:
                0 === b && (n = n === g ? 0 : 0 === n ? g : n);
                break;
              case 91:
                0 === n + b + v && m++;
                break;
              case 93:
                0 === n + b + v && m--;
                break;
              case 41:
                0 === n + b + m && v--;
                break;
              case 40:
                if (0 === n + b + m) {
                  if (0 === q)
                    switch (2 * x2 + 3 * K) {
                      case 533:
                        break;
                      default:
                        q = 1;
                    }
                  v++;
                }
                break;
              case 64:
                0 === b + v + n + m + u + k && (k = 1);
                break;
              case 42:
              case 47:
                if (!(0 < n + m + v))
                  switch (b) {
                    case 0:
                      switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                        case 235:
                          b = 47;
                          break;
                        case 220:
                          t = l, b = 42;
                      }
                      break;
                    case 42:
                      47 === g && 42 === x2 && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = "", b = 0);
                  }
            }
            0 === b && (f += y);
        }
        K = x2;
        x2 = g;
        l++;
      }
      t = p.length;
      if (0 < t) {
        r = c;
        if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length))
          return G2 + p + F2;
        p = r.join(",") + "{" + p + "}";
        if (0 !== w * E) {
          2 !== w || L(p, 2) || (E = 0);
          switch (E) {
            case 111:
              p = p.replace(ha, ":-moz-$1") + p;
              break;
            case 112:
              p = p.replace(Q, "::-webkit-input-$1") + p.replace(Q, "::-moz-$1") + p.replace(Q, ":-ms-input-$1") + p;
          }
          E = 0;
        }
      }
      return G2 + p + F2;
    }
    function X(d, c, e) {
      var h = c.trim().split(ia);
      c = h;
      var a = h.length, m = d.length;
      switch (m) {
        case 0:
        case 1:
          var b = 0;
          for (d = 0 === m ? "" : d[0] + " "; b < a; ++b) {
            c[b] = Z(d, c[b], e).trim();
          }
          break;
        default:
          var v = b = 0;
          for (c = []; b < a; ++b) {
            for (var n = 0; n < m; ++n) {
              c[v++] = Z(d[n] + " ", h[b], e).trim();
            }
          }
      }
      return c;
    }
    function Z(d, c, e) {
      var h = c.charCodeAt(0);
      33 > h && (h = (c = c.trim()).charCodeAt(0));
      switch (h) {
        case 38:
          return c.replace(F, "$1" + d.trim());
        case 58:
          return d.trim() + c.replace(F, "$1" + d.trim());
        default:
          if (0 < 1 * e && 0 < c.indexOf("\f"))
            return c.replace(F, (58 === d.charCodeAt(0) ? "" : "$1") + d.trim());
      }
      return d + c;
    }
    function P(d, c, e, h) {
      var a = d + ";", m = 2 * c + 3 * e + 4 * h;
      if (944 === m) {
        d = a.indexOf(":", 9) + 1;
        var b = a.substring(d, a.length - 1).trim();
        b = a.substring(0, d).trim() + b + ";";
        return 1 === w || 2 === w && L(b, 1) ? "-webkit-" + b + b : b;
      }
      if (0 === w || 2 === w && !L(a, 1))
        return a;
      switch (m) {
        case 1015:
          return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
        case 951:
          return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
        case 963:
          return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
        case 1009:
          if (100 !== a.charCodeAt(4))
            break;
        case 969:
        case 942:
          return "-webkit-" + a + a;
        case 978:
          return "-webkit-" + a + "-moz-" + a + a;
        case 1019:
        case 983:
          return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
        case 883:
          if (45 === a.charCodeAt(8))
            return "-webkit-" + a + a;
          if (0 < a.indexOf("image-set(", 11))
            return a.replace(ja, "$1-webkit-$2") + a;
          break;
        case 932:
          if (45 === a.charCodeAt(4))
            switch (a.charCodeAt(5)) {
              case 103:
                return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
              case 115:
                return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
              case 98:
                return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
            }
          return "-webkit-" + a + "-ms-" + a + a;
        case 964:
          return "-webkit-" + a + "-ms-flex-" + a + a;
        case 1023:
          if (99 !== a.charCodeAt(8))
            break;
          b = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
          return "-webkit-box-pack" + b + "-webkit-" + a + "-ms-flex-pack" + b + a;
        case 1005:
          return ka.test(a) ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a : a;
        case 1e3:
          b = a.substring(13).trim();
          c = b.indexOf("-") + 1;
          switch (b.charCodeAt(0) + b.charCodeAt(c)) {
            case 226:
              b = a.replace(G, "tb");
              break;
            case 232:
              b = a.replace(G, "tb-rl");
              break;
            case 220:
              b = a.replace(G, "lr");
              break;
            default:
              return a;
          }
          return "-webkit-" + a + "-ms-" + b + a;
        case 1017:
          if (-1 === a.indexOf("sticky", 9))
            break;
        case 975:
          c = (a = d).length - 10;
          b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(":", 7) + 1).trim();
          switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
            case 203:
              if (111 > b.charCodeAt(8))
                break;
            case 115:
              a = a.replace(b, "-webkit-" + b) + ";" + a;
              break;
            case 207:
            case 102:
              a = a.replace(b, "-webkit-" + (102 < m ? "inline-" : "") + "box") + ";" + a.replace(b, "-webkit-" + b) + ";" + a.replace(b, "-ms-" + b + "box") + ";" + a;
          }
          return a + ";";
        case 938:
          if (45 === a.charCodeAt(5))
            switch (a.charCodeAt(6)) {
              case 105:
                return b = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + b + "-ms-flex-" + b + a;
              case 115:
                return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;
              default:
                return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba, "") + a;
            }
          break;
        case 973:
        case 989:
          if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4))
            break;
        case 931:
        case 953:
          if (true === la.test(d))
            return 115 === (b = d.substring(d.indexOf(":") + 1)).charCodeAt(0) ? P(d.replace("stretch", "fill-available"), c, e, h).replace(":fill-available", ":stretch") : a.replace(b, "-webkit-" + b) + a.replace(b, "-moz-" + b.replace("fill-", "")) + a;
          break;
        case 962:
          if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10))
            return a.substring(0, a.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a;
      }
      return a;
    }
    function L(d, c) {
      var e = d.indexOf(1 === c ? ":" : "{"), h = d.substring(0, 3 !== c ? e : 10);
      e = d.substring(e + 1, d.length - 1);
      return R(2 !== c ? h : h.replace(na, "$1"), e, c);
    }
    function ea(d, c) {
      var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
      return e !== c + ";" ? e.replace(oa, " or ($1)").substring(4) : "(" + c + ")";
    }
    function H(d, c, e, h, a, m, b, v, n, q) {
      for (var g = 0, x2 = c, w2; g < A; ++g) {
        switch (w2 = S[g].call(B, d, x2, e, h, a, m, b, v, n, q)) {
          case void 0:
          case false:
          case true:
          case null:
            break;
          default:
            x2 = w2;
        }
      }
      if (x2 !== c)
        return x2;
    }
    function T(d) {
      switch (d) {
        case void 0:
        case null:
          A = S.length = 0;
          break;
        default:
          if ("function" === typeof d)
            S[A++] = d;
          else if ("object" === typeof d)
            for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            }
          else
            Y = !!d | 0;
      }
      return T;
    }
    function U(d) {
      d = d.prefix;
      void 0 !== d && (R = null, d ? "function" !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
      return U;
    }
    function B(d, c) {
      var e = d;
      33 > e.charCodeAt(0) && (e = e.trim());
      V = e;
      e = [V];
      if (0 < A) {
        var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
        void 0 !== h && "string" === typeof h && (c = h);
      }
      var a = M(O, e, c, 0, 0);
      0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
      V = "";
      E = 0;
      z = D = 1;
      return a;
    }
    var ca = /^\0+/g, N = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q = /::(place)/g, ha = /:(read-only)/g, G = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z = 1, D = 1, E = 0, w = 1, O = [], S = [], A = 0, R = null, Y = 0, V = "";
    B.use = T;
    B.set = U;
    void 0 !== W && U(W);
    return B;
  }
  var stylis_browser_esm_default = stylis_min;

  // node_modules/@emotion/cache/dist/cache.browser.esm.js
  var delimiter = "/*|*/";
  var needle = delimiter + "}";
  function toSheet(block) {
    if (block) {
      Sheet.current.insert(block + "}");
    }
  }
  var Sheet = {
    current: null
  };
  var ruleSheet = function ruleSheet2(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      case 1: {
        switch (content.charCodeAt(0)) {
          case 64: {
            Sheet.current.insert(content + ";");
            return "";
          }
          case 108: {
            if (content.charCodeAt(2) === 98) {
              return "";
            }
          }
        }
        break;
      }
      case 2: {
        if (ns === 0)
          return content + delimiter;
        break;
      }
      case 3: {
        switch (ns) {
          case 102:
          case 112: {
            Sheet.current.insert(selectors[0] + content);
            return "";
          }
          default: {
            return content + (at === 0 ? delimiter : "");
          }
        }
      }
      case -2: {
        content.split(needle).forEach(toSheet);
      }
    }
  };
  var createCache = function createCache2(options) {
    if (options === void 0)
      options = {};
    var key = options.key || "css";
    var stylisOptions;
    if (options.prefix !== void 0) {
      stylisOptions = {
        prefix: options.prefix
      };
    }
    var stylis = new stylis_browser_esm_default(stylisOptions);
    if (false) {
      if (/[^a-z-]/.test(key)) {
        throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
      }
    }
    var inserted = {};
    var container;
    {
      container = options.container || document.head;
      var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
      Array.prototype.forEach.call(nodes, function(node) {
        var attrib = node.getAttribute("data-emotion-" + key);
        attrib.split(" ").forEach(function(id) {
          inserted[id] = true;
        });
        if (node.parentNode !== container) {
          container.appendChild(node);
        }
      });
    }
    var _insert;
    {
      stylis.use(options.stylisPlugins)(ruleSheet);
      _insert = function insert(selector, serialized, sheet, shouldCache) {
        var name = serialized.name;
        Sheet.current = sheet;
        if (false) {
          var map = serialized.map;
          Sheet.current = {
            insert: function insert2(rule) {
              sheet.insert(rule + map);
            }
          };
        }
        stylis(selector, serialized.styles);
        if (shouldCache) {
          cache.inserted[name] = true;
        }
      };
    }
    if (false) {
      var commentStart = /\/\*/g;
      var commentEnd = /\*\//g;
      stylis.use(function(context, content) {
        switch (context) {
          case -1: {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;
              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }
              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }
            commentStart.lastIndex = 0;
            break;
          }
        }
      });
      stylis.use(function(context, content, selectors) {
        switch (context) {
          case -1: {
            var flag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);
            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function(unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);
                if (unsafePseudoClass && !ignore) {
                  console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
                }
              });
            }
            break;
          }
        }
      });
    }
    var cache = {
      key,
      sheet: new StyleSheet({
        key,
        container,
        nonce: options.nonce,
        speedy: options.speedy
      }),
      nonce: options.nonce,
      inserted,
      registered: {},
      insert: _insert
    };
    return cache;
  };
  var cache_browser_esm_default = createCache;

  // node_modules/@emotion/utils/dist/utils.browser.esm.js
  var isBrowser = true;
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = "";
    classNames.split(" ").forEach(function(className) {
      if (registered[className] !== void 0) {
        registeredStyles.push(registered[className]);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (
      // we only need to add the styles to the registered cache if the
      // class name could be used further down
      // the tree but if it's a string tag, we know it won't
      // so we don't have to add it to registered cache.
      // this improves memory usage since we can avoid storing the whole style string
      (isStringTag === false || // we need to always store it if we're in compat mode and
      // in node since emotion-server relies on whether a style is in
      // the registered cache to know whether a style is global or not
      // also, note that this check will be dead code eliminated in the browser
      isBrowser === false && cache.compat !== void 0) && cache.registered[className] === void 0
    ) {
      cache.registered[className] = serialized.styles;
    }
    if (cache.inserted[serialized.name] === void 0) {
      var current = serialized;
      do {
        var maybeStyles = cache.insert("." + className, current, cache.sheet, true);
        current = current.next;
      } while (current !== void 0);
    }
  };

  // node_modules/@emotion/hash/dist/hash.browser.esm.js
  function murmur2(str) {
    var h = 0;
    var k, i = 0, len = str.length;
    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
      k = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
      k ^= /* k >>> r: */
      k >>> 24;
      h = /* Math.imul(k, m): */
      (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 255) << 16;
      case 2:
        h ^= (str.charCodeAt(i + 1) & 255) << 8;
      case 1:
        h ^= str.charCodeAt(i) & 255;
        h = /* Math.imul(h, m): */
        (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    h ^= h >>> 13;
    h = /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }
  var hash_browser_esm_default = murmur2;

  // node_modules/@emotion/unitless/dist/unitless.browser.esm.js
  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  var unitless_browser_esm_default = unitlessKeys;

  // node_modules/@emotion/memoize/dist/memoize.browser.esm.js
  function memoize(fn) {
    var cache = {};
    return function(arg) {
      if (cache[arg] === void 0)
        cache[arg] = fn(arg);
      return cache[arg];
    };
  }
  var memoize_browser_esm_default = memoize;

  // node_modules/@emotion/serialize/dist/serialize.browser.esm.js
  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  var isCustomProperty = function isCustomProperty2(property) {
    return property.charCodeAt(1) === 45;
  };
  var isProcessableValue = function isProcessableValue2(value) {
    return value != null && typeof value !== "boolean";
  };
  var processStyleName = memoize_browser_esm_default(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
  });
  var processStyleValue = function processStyleValue2(key, value) {
    switch (key) {
      case "animation":
      case "animationName": {
        if (typeof value === "string") {
          return value.replace(animationRegex, function(match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
    }
    if (unitless_browser_esm_default[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
      return value + "px";
    }
    return value;
  };
  if (false) {
    contentValuePattern = /(attr|calc|counters?|url)\(/;
    contentValues = ["normal", "none", "counter", "open-quote", "close-quote", "no-open-quote", "no-close-quote", "initial", "inherit", "unset"];
    oldProcessStyleValue = processStyleValue;
    msPattern = /^-ms-/;
    hyphenPattern = /-(.)/g;
    hyphenatedCache = {};
    processStyleValue = function processStyleValue3(key, value) {
      if (key === "content") {
        if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
          console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
        }
      }
      var processed = oldProcessStyleValue(key, value);
      if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
        hyphenatedCache[key] = true;
        console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
          return _char.toUpperCase();
        }) + "?");
      }
      return processed;
    };
  }
  var contentValuePattern;
  var contentValues;
  var oldProcessStyleValue;
  var msPattern;
  var hyphenPattern;
  var hyphenatedCache;
  function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return "";
    }
    if (interpolation.__emotion_styles !== void 0) {
      if (false) {
        throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.");
      }
      return interpolation;
    }
    switch (typeof interpolation) {
      case "boolean": {
        return "";
      }
      case "object": {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== void 0) {
          var next = interpolation.next;
          if (next !== void 0) {
            while (next !== void 0) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }
          var styles = interpolation.styles + ";";
          if (false) {
            styles += interpolation.map;
          }
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
      case "function": {
        if (mergedProps !== void 0) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {
          console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
        }
        break;
      }
      case "string":
        if (false) {
          var matched = [];
          var replaced = interpolation.replace(animationRegex, function(match, p1, p2) {
            var fakeVarName = "animation" + matched.length;
            matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
            return "${" + fakeVarName + "}";
          });
          if (matched.length) {
            console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
          }
        }
        break;
    }
    if (registered == null) {
      return interpolation;
    }
    var cached = registered[interpolation];
    if (false) {
      console.error("Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion");
      shouldWarnAboutInterpolatingClassNameFromCss = false;
    }
    return cached !== void 0 && !couldBeSelectorInterpolation ? cached : interpolation;
  }
  function createStringFromObject(mergedProps, registered, obj) {
    var string = "";
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i], false);
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];
        if (typeof value !== "object") {
          if (registered != null && registered[value] !== void 0) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === "NO_COMPONENT_SELECTOR" && false) {
            throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.");
          }
          if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value, false);
            switch (_key) {
              case "animation":
              case "animationName": {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
              default: {
                if (false) {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }
                string += _key + "{" + interpolated + "}";
              }
            }
          }
        }
      }
    }
    return string;
  }
  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
  if (false) {
    sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
  }
  var cursor;
  var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
      return args[0];
    }
    var stringMode = true;
    var styles = "";
    cursor = void 0;
    var strings = args[0];
    if (strings == null || strings.raw === void 0) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings, false);
    } else {
      if (false) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += strings[0];
    }
    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);
      if (stringMode) {
        if (false) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles += strings[i];
      }
    }
    var sourceMap;
    if (false) {
      styles = styles.replace(sourceMapPattern, function(match2) {
        sourceMap = match2;
        return "";
      });
    }
    labelPattern.lastIndex = 0;
    var identifierName = "";
    var match;
    while ((match = labelPattern.exec(styles)) !== null) {
      identifierName += "-" + // $FlowFixMe we know it's not null
      match[1];
    }
    var name = hash_browser_esm_default(styles) + identifierName;
    if (false) {
      return {
        name,
        styles,
        map: sourceMap,
        next: cursor,
        toString: function toString() {
          return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
        }
      };
    }
    return {
      name,
      styles,
      next: cursor
    };
  };

  // node_modules/@emotion/css/dist/css.browser.esm.js
  function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return serializeStyles(args);
  }
  var css_browser_esm_default = css;

  // node_modules/@emotion/core/dist/core.browser.esm.js
  var EmotionCacheContext = (0, import_react.createContext)(
    // we're doing this to avoid preconstruct's dead code elimination in this one case
    // because this module is primarily intended for the browser and node
    // but it's also required in react native and similar environments sometimes
    // and we could have a special build just for that
    // but this is much easier and the native packages
    // might use a different theme context in the future anyway
    typeof HTMLElement !== "undefined" ? cache_browser_esm_default() : null
  );
  var ThemeContext = (0, import_react.createContext)({});
  var CacheProvider = EmotionCacheContext.Provider;
  var withEmotionCache = function withEmotionCache2(func) {
    var render3 = function render4(props2, ref) {
      return (0, import_react.createElement)(EmotionCacheContext.Consumer, null, function(cache) {
        return func(props2, cache, ref);
      });
    };
    return (0, import_react.forwardRef)(render3);
  };
  var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var render = function render2(cache, props2, theme, ref) {
    var cssProp = theme === null ? props2.css : props2.css(theme);
    if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
      cssProp = cache.registered[cssProp];
    }
    var type = props2[typePropName];
    var registeredStyles = [cssProp];
    var className = "";
    if (typeof props2.className === "string") {
      className = getRegisteredStyles(cache.registered, registeredStyles, props2.className);
    } else if (props2.className != null) {
      className = props2.className + " ";
    }
    var serialized = serializeStyles(registeredStyles);
    if (false) {
      var labelFromStack = props2[labelPropName];
      if (labelFromStack) {
        serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]);
      }
    }
    var rules = insertStyles(cache, serialized, typeof type === "string");
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for (var key in props2) {
      if (hasOwnProperty.call(props2, key) && key !== "css" && key !== typePropName && true) {
        newProps[key] = props2[key];
      }
    }
    newProps.ref = ref;
    newProps.className = className;
    var ele = (0, import_react.createElement)(type, newProps);
    return ele;
  };
  var Emotion = /* @__PURE__ */ withEmotionCache(function(props2, cache, ref) {
    if (typeof props2.css === "function") {
      return (0, import_react.createElement)(ThemeContext.Consumer, null, function(theme) {
        return render(cache, props2, theme, ref);
      });
    }
    return render(cache, props2, null, ref);
  });
  if (false) {
    Emotion.displayName = "EmotionCssPropInternal";
  }
  var jsx = function jsx2(type, props2) {
    var args = arguments;
    if (props2 == null || !hasOwnProperty.call(props2, "css")) {
      return import_react.createElement.apply(void 0, args);
    }
    if (false) {
      throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props2.css + "`");
    }
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = Emotion;
    var newProps = {};
    for (var key in props2) {
      if (hasOwnProperty.call(props2, key)) {
        newProps[key] = props2[key];
      }
    }
    newProps[typePropName] = type;
    if (false) {
      var error = new Error();
      if (error.stack) {
        var match = error.stack.match(/at (?:Object\.|Module\.|)jsx.*\n\s+at (?:Object\.|)([A-Z][A-Za-z$]+) /);
        if (!match) {
          match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
        }
        if (match) {
          newProps[labelPropName] = sanitizeIdentifier(match[1]);
        }
      }
    }
    createElementArgArray[1] = newProps;
    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }
    return import_react.createElement.apply(null, createElementArgArray);
  };
  var keyframes = function keyframes2() {
    var insertable = css_browser_esm_default.apply(void 0, arguments);
    var name = "animation-" + insertable.name;
    return {
      name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };
  var classnames = function classnames2(args) {
    var len = args.length;
    var i = 0;
    var cls = "";
    for (; i < len; i++) {
      var arg = args[i];
      if (arg == null)
        continue;
      var toAdd = void 0;
      switch (typeof arg) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(arg)) {
            toAdd = classnames2(arg);
          } else {
            toAdd = "";
            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += " ");
                toAdd += k;
              }
            }
          }
          break;
        }
        default: {
          toAdd = arg;
        }
      }
      if (toAdd) {
        cls && (cls += " ");
        cls += toAdd;
      }
    }
    return cls;
  };
  function merge(registered, css5, className) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
      return className;
    }
    return rawClassName + css5(registeredStyles);
  }
  var ClassNames = withEmotionCache(function(props2, context) {
    return (0, import_react.createElement)(ThemeContext.Consumer, null, function(theme) {
      var hasRendered = false;
      var css5 = function css6() {
        if (hasRendered && false) {
          throw new Error("css can only be used during render");
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var serialized = serializeStyles(args, context.registered);
        {
          insertStyles(context, serialized, false);
        }
        return context.key + "-" + serialized.name;
      };
      var cx = function cx2() {
        if (hasRendered && false) {
          throw new Error("cx can only be used during render");
        }
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return merge(context.registered, css5, classnames(args));
      };
      var content = {
        css: css5,
        cx,
        theme
      };
      var ele = props2.children(content);
      hasRendered = true;
      return ele;
    });
  });

  // node_modules/@theme-ui/css/dist/index.esm.js
  var get = function(obj, key, def, p, undef) {
    key = key && key.split ? key.split(".") : [key];
    for (p = 0; p < key.length; p++) {
      obj = obj ? obj[key[p]] : undef;
    }
    return obj === undef ? def : obj;
  };
  var defaultBreakpoints = [40, 52, 64].map(function(n) {
    return n + "em";
  });
  var defaultTheme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
  };
  var aliases = {
    bg: "backgroundColor",
    m: "margin",
    mt: "marginTop",
    mr: "marginRight",
    mb: "marginBottom",
    ml: "marginLeft",
    mx: "marginX",
    my: "marginY",
    p: "padding",
    pt: "paddingTop",
    pr: "paddingRight",
    pb: "paddingBottom",
    pl: "paddingLeft",
    px: "paddingX",
    py: "paddingY"
  };
  var multiples = {
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    size: ["width", "height"]
  };
  var scales = {
    color: "colors",
    backgroundColor: "colors",
    borderColor: "colors",
    margin: "space",
    marginTop: "space",
    marginRight: "space",
    marginBottom: "space",
    marginLeft: "space",
    marginX: "space",
    marginY: "space",
    padding: "space",
    paddingTop: "space",
    paddingRight: "space",
    paddingBottom: "space",
    paddingLeft: "space",
    paddingX: "space",
    paddingY: "space",
    top: "space",
    right: "space",
    bottom: "space",
    left: "space",
    gridGap: "space",
    gridColumnGap: "space",
    gridRowGap: "space",
    gap: "space",
    columnGap: "space",
    rowGap: "space",
    fontFamily: "fonts",
    fontSize: "fontSizes",
    fontWeight: "fontWeights",
    lineHeight: "lineHeights",
    letterSpacing: "letterSpacings",
    border: "borders",
    borderTop: "borders",
    borderRight: "borders",
    borderBottom: "borders",
    borderLeft: "borders",
    borderWidth: "borderWidths",
    borderStyle: "borderStyles",
    borderRadius: "radii",
    borderTopRightRadius: "radii",
    borderTopLeftRadius: "radii",
    borderBottomRightRadius: "radii",
    borderBottomLeftRadius: "radii",
    borderTopWidth: "borderWidths",
    borderTopColor: "colors",
    borderTopStyle: "borderStyles",
    borderBottomWidth: "borderWidths",
    borderBottomColor: "colors",
    borderBottomStyle: "borderStyles",
    borderLeftWidth: "borderWidths",
    borderLeftColor: "colors",
    borderLeftStyle: "borderStyles",
    borderRightWidth: "borderWidths",
    borderRightColor: "colors",
    borderRightStyle: "borderStyles",
    outlineColor: "colors",
    boxShadow: "shadows",
    textShadow: "shadows",
    zIndex: "zIndices",
    width: "sizes",
    minWidth: "sizes",
    maxWidth: "sizes",
    height: "sizes",
    minHeight: "sizes",
    maxHeight: "sizes",
    flexBasis: "sizes",
    size: "sizes",
    // svg
    fill: "colors",
    stroke: "colors"
  };
  var positiveOrNegative = function(scale, value) {
    if (typeof value !== "number" || value >= 0) {
      return get(scale, value, value);
    }
    var absolute = Math.abs(value);
    var n = get(scale, absolute, absolute);
    if (typeof n === "string") {
      return "-" + n;
    }
    return n * -1;
  };
  var transforms = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce(function(acc, curr) {
    var obj;
    return Object.assign(
      {},
      acc,
      (obj = {}, obj[curr] = positiveOrNegative, obj)
    );
  }, {});
  var responsive = function(styles) {
    return function(theme) {
      var next = {};
      var breakpoints = get(theme, "breakpoints", defaultBreakpoints);
      var mediaQueries = [null].concat(breakpoints.map(function(n) {
        return "@media screen and (min-width: " + n + ")";
      }));
      for (var key in styles) {
        var value = typeof styles[key] === "function" ? styles[key](theme) : styles[key];
        if (value == null) {
          continue;
        }
        if (!Array.isArray(value)) {
          next[key] = value;
          continue;
        }
        for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
          var media = mediaQueries[i];
          if (!media) {
            next[key] = value[i];
            continue;
          }
          next[media] = next[media] || {};
          if (value[i] == null) {
            continue;
          }
          next[media][key] = value[i];
        }
      }
      return next;
    };
  };
  var css2 = function(args) {
    return function(props2) {
      if (props2 === void 0)
        props2 = {};
      var theme = Object.assign(
        {},
        defaultTheme,
        props2.theme || props2
      );
      var result = {};
      var obj = typeof args === "function" ? args(theme) : args;
      var styles = responsive(obj)(theme);
      for (var key in styles) {
        var x2 = styles[key];
        var val = typeof x2 === "function" ? x2(theme) : x2;
        if (key === "variant") {
          var variant4 = css2(get(theme, val))(theme);
          result = Object.assign(
            {},
            result,
            variant4
          );
          continue;
        }
        if (val && typeof val === "object") {
          result[key] = css2(val)(theme);
          continue;
        }
        var prop = get(aliases, key, key);
        var scaleName = get(scales, prop);
        var scale = get(theme, scaleName, get(theme, prop, {}));
        var transform = get(transforms, prop, get);
        var value = transform(scale, val, val);
        if (multiples[prop]) {
          var dirs = multiples[prop];
          for (var i = 0; i < dirs.length; i++) {
            result[dirs[i]] = value;
          }
        } else {
          result[prop] = value;
        }
      }
      return result;
    };
  };

  // node_modules/@theme-ui/core/dist/index.esm.js
  var import_react2 = __toESM(require_react());
  var import_deepmerge = __toESM(require_cjs());

  // node_modules/@emotion/core/package.json
  var version = "10.0.35";

  // node_modules/@theme-ui/core/dist/index.esm.js
  var getCSS = function(props2) {
    if (!props2.sx && !props2.css) {
      return void 0;
    }
    return function(theme) {
      var styles = css2(props2.sx)(theme);
      var raw = typeof props2.css === "function" ? props2.css(theme) : props2.css;
      return [styles, raw];
    };
  };
  var parseProps = function(props2) {
    if (!props2) {
      return null;
    }
    var next = {};
    for (var key in props2) {
      if (key === "sx") {
        continue;
      }
      next[key] = props2[key];
    }
    var css$$1 = getCSS(props2);
    if (css$$1) {
      next.css = css$$1;
    }
    return next;
  };
  var jsx$1 = function(type, props2) {
    var children = [], len = arguments.length - 2;
    while (len-- > 0)
      children[len] = arguments[len + 2];
    return jsx.apply(void 0, [type, parseProps(props2)].concat(children));
  };
  var Context = import_react2.default.createContext({
    __EMOTION_VERSION__: version,
    theme: null
  });
  var canUseSymbol = typeof Symbol === "function" && Symbol.for;
  var REACT_ELEMENT = canUseSymbol ? Symbol.for("react.element") : 60103;
  var FORWARD_REF = canUseSymbol ? Symbol.for("react.forward_ref") : 60103;
  var isMergeableObject = function(n) {
    return !!n && typeof n === "object" && n.$$typeof !== REACT_ELEMENT && n.$$typeof !== FORWARD_REF;
  };
  var arrayMerge = function(destinationArray, sourceArray, options) {
    return sourceArray;
  };
  var merge2 = function(a, b) {
    return (0, import_deepmerge.default)(a, b, {
      isMergeableObject,
      arrayMerge
    });
  };
  merge2.all = function() {
    var args = [], len = arguments.length;
    while (len--)
      args[len] = arguments[len];
    return import_deepmerge.default.all(args, {
      isMergeableObject,
      arrayMerge
    });
  };

  // node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js
  var import_defineProperty = __toESM(require_defineProperty());
  var import_react3 = __toESM(require_react());

  // node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  var index = memoize_browser_esm_default(
    function(prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    }
    /* Z+1 */
  );
  var is_prop_valid_browser_esm_default = index;

  // node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js
  var testOmitPropsOnStringTag = is_prop_valid_browser_esm_default;
  var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
    return key !== "theme" && key !== "innerRef";
  };
  var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
    return typeof tag === "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  };
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(source, true).forEach(function(key) {
          (0, import_defineProperty.default)(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var createStyled = function createStyled2(tag, options) {
    if (false) {
      if (tag === void 0) {
        throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");
      }
    }
    var identifierName;
    var shouldForwardProp2;
    var targetClassName;
    if (options !== void 0) {
      identifierName = options.label;
      targetClassName = options.target;
      shouldForwardProp2 = tag.__emotion_forwardProp && options.shouldForwardProp ? function(propName) {
        return tag.__emotion_forwardProp(propName) && // $FlowFixMe
        options.shouldForwardProp(propName);
      } : options.shouldForwardProp;
    }
    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    if (typeof shouldForwardProp2 !== "function" && isReal) {
      shouldForwardProp2 = tag.__emotion_forwardProp;
    }
    var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp("as");
    return function() {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
      if (identifierName !== void 0) {
        styles.push("label:" + identifierName + ";");
      }
      if (args[0] == null || args[0].raw === void 0) {
        styles.push.apply(styles, args);
      } else {
        if (false) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles.push(args[0][0]);
        var len = args.length;
        var i = 1;
        for (; i < len; i++) {
          if (false) {
            console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
          }
          styles.push(args[i], args[0][i]);
        }
      }
      var Styled = withEmotionCache(function(props2, context, ref) {
        return (0, import_react3.createElement)(ThemeContext.Consumer, null, function(theme) {
          var finalTag = shouldUseAs && props2.as || baseTag;
          var className = "";
          var classInterpolations = [];
          var mergedProps = props2;
          if (props2.theme == null) {
            mergedProps = {};
            for (var key in props2) {
              mergedProps[key] = props2[key];
            }
            mergedProps.theme = theme;
          }
          if (typeof props2.className === "string") {
            className = getRegisteredStyles(context.registered, classInterpolations, props2.className);
          } else if (props2.className != null) {
            className = props2.className + " ";
          }
          var serialized = serializeStyles(styles.concat(classInterpolations), context.registered, mergedProps);
          var rules = insertStyles(context, serialized, typeof finalTag === "string");
          className += context.key + "-" + serialized.name;
          if (targetClassName !== void 0) {
            className += " " + targetClassName;
          }
          var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
          var newProps = {};
          for (var _key in props2) {
            if (shouldUseAs && _key === "as")
              continue;
            if (
              // $FlowFixMe
              finalShouldForwardProp(_key)
            ) {
              newProps[_key] = props2[_key];
            }
          }
          newProps.className = className;
          newProps.ref = ref || props2.innerRef;
          if (false) {
            console.error("`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead" + (identifierName === void 0 ? "" : " in the usage of `" + identifierName + "`"));
          }
          var ele = (0, import_react3.createElement)(finalTag, newProps);
          return ele;
        });
      });
      Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
      Styled.defaultProps = tag.defaultProps;
      Styled.__emotion_real = Styled;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_styles = styles;
      Styled.__emotion_forwardProp = shouldForwardProp2;
      Object.defineProperty(Styled, "toString", {
        value: function value() {
          if (targetClassName === void 0 && false) {
            return "NO_COMPONENT_SELECTOR";
          }
          return "." + targetClassName;
        }
      });
      Styled.withComponent = function(nextTag, nextOptions) {
        return createStyled2(nextTag, nextOptions !== void 0 ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
      };
      return Styled;
    };
  };
  var styled_base_browser_esm_default = createStyled;

  // node_modules/@emotion/styled/dist/styled.browser.esm.js
  var tags = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    // SVG
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
  ];
  var newStyled = styled_base_browser_esm_default.bind();
  tags.forEach(function(tagName) {
    newStyled[tagName] = newStyled(tagName);
  });
  var styled_browser_esm_default = newStyled;

  // node_modules/@styled-system/core/dist/index.esm.js
  var import_object_assign = __toESM(require_object_assign());
  var merge3 = function merge4(a, b) {
    var result = (0, import_object_assign.default)({}, a, b);
    for (var key in a) {
      var _assign;
      if (!a[key] || typeof b[key] !== "object")
        continue;
      (0, import_object_assign.default)(result, (_assign = {}, _assign[key] = (0, import_object_assign.default)(a[key], b[key]), _assign));
    }
    return result;
  };
  var sort = function sort2(obj) {
    var next = {};
    Object.keys(obj).sort(function(a, b) {
      return a.localeCompare(b, void 0, {
        numeric: true,
        sensitivity: "base"
      });
    }).forEach(function(key) {
      next[key] = obj[key];
    });
    return next;
  };
  var defaults = {
    breakpoints: [40, 52, 64].map(function(n) {
      return n + "em";
    })
  };
  var createMediaQuery = function createMediaQuery2(n) {
    return "@media screen and (min-width: " + n + ")";
  };
  var getValue = function getValue2(n, scale) {
    return get2(scale, n, n);
  };
  var get2 = function get3(obj, key, def, p, undef) {
    key = key && key.split ? key.split(".") : [key];
    for (p = 0; p < key.length; p++) {
      obj = obj ? obj[key[p]] : undef;
    }
    return obj === undef ? def : obj;
  };
  var createParser = function createParser2(config9) {
    var cache = {};
    var parse = function parse2(props2) {
      var styles = {};
      var shouldSort = false;
      var isCacheDisabled = props2.theme && props2.theme.disableStyledSystemCache;
      for (var key in props2) {
        if (!config9[key])
          continue;
        var sx2 = config9[key];
        var raw = props2[key];
        var scale = get2(props2.theme, sx2.scale, sx2.defaults);
        if (typeof raw === "object") {
          cache.breakpoints = !isCacheDisabled && cache.breakpoints || get2(props2.theme, "breakpoints", defaults.breakpoints);
          if (Array.isArray(raw)) {
            cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
            styles = merge3(styles, parseResponsiveStyle(cache.media, sx2, scale, raw, props2));
            continue;
          }
          if (raw !== null) {
            styles = merge3(styles, parseResponsiveObject(cache.breakpoints, sx2, scale, raw, props2));
            shouldSort = true;
          }
          continue;
        }
        (0, import_object_assign.default)(styles, sx2(raw, scale, props2));
      }
      if (shouldSort) {
        styles = sort(styles);
      }
      return styles;
    };
    parse.config = config9;
    parse.propNames = Object.keys(config9);
    parse.cache = cache;
    var keys = Object.keys(config9).filter(function(k) {
      return k !== "config";
    });
    if (keys.length > 1) {
      keys.forEach(function(key) {
        var _createParser;
        parse[key] = createParser2((_createParser = {}, _createParser[key] = config9[key], _createParser));
      });
    }
    return parse;
  };
  var parseResponsiveStyle = function parseResponsiveStyle2(mediaQueries, sx2, scale, raw, _props) {
    var styles = {};
    raw.slice(0, mediaQueries.length).forEach(function(value, i) {
      var media = mediaQueries[i];
      var style = sx2(value, scale, _props);
      if (!media) {
        (0, import_object_assign.default)(styles, style);
      } else {
        var _assign2;
        (0, import_object_assign.default)(styles, (_assign2 = {}, _assign2[media] = (0, import_object_assign.default)({}, styles[media], style), _assign2));
      }
    });
    return styles;
  };
  var parseResponsiveObject = function parseResponsiveObject2(breakpoints, sx2, scale, raw, _props) {
    var styles = {};
    for (var key in raw) {
      var breakpoint = breakpoints[key];
      var value = raw[key];
      var style = sx2(value, scale, _props);
      if (!breakpoint) {
        (0, import_object_assign.default)(styles, style);
      } else {
        var _assign3;
        var media = createMediaQuery(breakpoint);
        (0, import_object_assign.default)(styles, (_assign3 = {}, _assign3[media] = (0, import_object_assign.default)({}, styles[media], style), _assign3));
      }
    }
    return styles;
  };
  var createStyleFunction = function createStyleFunction2(_ref) {
    var properties = _ref.properties, property = _ref.property, scale = _ref.scale, _ref$transform = _ref.transform, transform = _ref$transform === void 0 ? getValue : _ref$transform, defaultScale = _ref.defaultScale;
    properties = properties || [property];
    var sx2 = function sx3(value, scale2, _props) {
      var result = {};
      var n = transform(value, scale2, _props);
      if (n === null)
        return;
      properties.forEach(function(prop) {
        result[prop] = n;
      });
      return result;
    };
    sx2.scale = scale;
    sx2.defaults = defaultScale;
    return sx2;
  };
  var system = function system2(args) {
    if (args === void 0) {
      args = {};
    }
    var config9 = {};
    Object.keys(args).forEach(function(key) {
      var conf = args[key];
      if (conf === true) {
        config9[key] = createStyleFunction({
          property: key,
          scale: key
        });
        return;
      }
      if (typeof conf === "function") {
        config9[key] = conf;
        return;
      }
      config9[key] = createStyleFunction(conf);
    });
    var parser = createParser(config9);
    return parser;
  };
  var compose = function compose2() {
    var config9 = {};
    for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
      parsers[_key] = arguments[_key];
    }
    parsers.forEach(function(parser2) {
      if (!parser2 || !parser2.config)
        return;
      (0, import_object_assign.default)(config9, parser2.config);
    });
    var parser = createParser(config9);
    return parser;
  };

  // node_modules/@styled-system/layout/dist/index.esm.js
  var isNumber = function isNumber2(n) {
    return typeof n === "number" && !isNaN(n);
  };
  var getWidth = function getWidth2(n, scale) {
    return get2(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + "%");
  };
  var config = {
    width: {
      property: "width",
      scale: "sizes",
      transform: getWidth
    },
    height: {
      property: "height",
      scale: "sizes"
    },
    minWidth: {
      property: "minWidth",
      scale: "sizes"
    },
    minHeight: {
      property: "minHeight",
      scale: "sizes"
    },
    maxWidth: {
      property: "maxWidth",
      scale: "sizes"
    },
    maxHeight: {
      property: "maxHeight",
      scale: "sizes"
    },
    size: {
      properties: ["width", "height"],
      scale: "sizes"
    },
    overflow: true,
    overflowX: true,
    overflowY: true,
    display: true,
    verticalAlign: true
  };
  var layout = system(config);
  var index_esm_default = layout;

  // node_modules/@styled-system/color/dist/index.esm.js
  var config2 = {
    color: {
      property: "color",
      scale: "colors"
    },
    backgroundColor: {
      property: "backgroundColor",
      scale: "colors"
    },
    opacity: true
  };
  config2.bg = config2.backgroundColor;
  var color = system(config2);
  var index_esm_default2 = color;

  // node_modules/@styled-system/typography/dist/index.esm.js
  var defaults2 = {
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
  };
  var config3 = {
    fontFamily: {
      property: "fontFamily",
      scale: "fonts"
    },
    fontSize: {
      property: "fontSize",
      scale: "fontSizes",
      defaultScale: defaults2.fontSizes
    },
    fontWeight: {
      property: "fontWeight",
      scale: "fontWeights"
    },
    lineHeight: {
      property: "lineHeight",
      scale: "lineHeights"
    },
    letterSpacing: {
      property: "letterSpacing",
      scale: "letterSpacings"
    },
    textAlign: true,
    fontStyle: true
  };
  var typography = system(config3);
  var index_esm_default3 = typography;

  // node_modules/@styled-system/flexbox/dist/index.esm.js
  var config4 = {
    alignItems: true,
    alignContent: true,
    justifyItems: true,
    justifyContent: true,
    flexWrap: true,
    flexDirection: true,
    // item
    flex: true,
    flexGrow: true,
    flexShrink: true,
    flexBasis: true,
    justifySelf: true,
    alignSelf: true,
    order: true
  };
  var flexbox = system(config4);
  var index_esm_default4 = flexbox;

  // node_modules/@styled-system/grid/dist/index.esm.js
  var defaults3 = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
  };
  var config5 = {
    gridGap: {
      property: "gridGap",
      scale: "space",
      defaultScale: defaults3.space
    },
    gridColumnGap: {
      property: "gridColumnGap",
      scale: "space",
      defaultScale: defaults3.space
    },
    gridRowGap: {
      property: "gridRowGap",
      scale: "space",
      defaultScale: defaults3.space
    },
    gridColumn: true,
    gridRow: true,
    gridAutoFlow: true,
    gridAutoColumns: true,
    gridAutoRows: true,
    gridTemplateColumns: true,
    gridTemplateRows: true,
    gridTemplateAreas: true,
    gridArea: true
  };
  var grid = system(config5);
  var index_esm_default5 = grid;

  // node_modules/@styled-system/border/dist/index.esm.js
  var config6 = {
    border: {
      property: "border",
      scale: "borders"
    },
    borderWidth: {
      property: "borderWidth",
      scale: "borderWidths"
    },
    borderStyle: {
      property: "borderStyle",
      scale: "borderStyles"
    },
    borderColor: {
      property: "borderColor",
      scale: "colors"
    },
    borderRadius: {
      property: "borderRadius",
      scale: "radii"
    },
    borderTop: {
      property: "borderTop",
      scale: "borders"
    },
    borderTopLeftRadius: {
      property: "borderTopLeftRadius",
      scale: "radii"
    },
    borderTopRightRadius: {
      property: "borderTopRightRadius",
      scale: "radii"
    },
    borderRight: {
      property: "borderRight",
      scale: "borders"
    },
    borderBottom: {
      property: "borderBottom",
      scale: "borders"
    },
    borderBottomLeftRadius: {
      property: "borderBottomLeftRadius",
      scale: "radii"
    },
    borderBottomRightRadius: {
      property: "borderBottomRightRadius",
      scale: "radii"
    },
    borderLeft: {
      property: "borderLeft",
      scale: "borders"
    },
    borderX: {
      properties: ["borderLeft", "borderRight"],
      scale: "borders"
    },
    borderY: {
      properties: ["borderTop", "borderBottom"],
      scale: "borders"
    }
  };
  config6.borderTopWidth = {
    property: "borderTopWidth",
    scale: "borderWidths"
  };
  config6.borderTopColor = {
    property: "borderTopColor",
    scale: "colors"
  };
  config6.borderTopStyle = {
    property: "borderTopStyle",
    scale: "borderStyles"
  };
  config6.borderTopLeftRadius = {
    property: "borderTopLeftRadius",
    scale: "radii"
  };
  config6.borderTopRightRadius = {
    property: "borderTopRightRadius",
    scale: "radii"
  };
  config6.borderBottomWidth = {
    property: "borderBottomWidth",
    scale: "borderWidths"
  };
  config6.borderBottomColor = {
    property: "borderBottomColor",
    scale: "colors"
  };
  config6.borderBottomStyle = {
    property: "borderBottomStyle",
    scale: "borderStyles"
  };
  config6.borderBottomLeftRadius = {
    property: "borderBottomLeftRadius",
    scale: "radii"
  };
  config6.borderBottomRightRadius = {
    property: "borderBottomRightRadius",
    scale: "radii"
  };
  config6.borderLeftWidth = {
    property: "borderLeftWidth",
    scale: "borderWidths"
  };
  config6.borderLeftColor = {
    property: "borderLeftColor",
    scale: "colors"
  };
  config6.borderLeftStyle = {
    property: "borderLeftStyle",
    scale: "borderStyles"
  };
  config6.borderRightWidth = {
    property: "borderRightWidth",
    scale: "borderWidths"
  };
  config6.borderRightColor = {
    property: "borderRightColor",
    scale: "colors"
  };
  config6.borderRightStyle = {
    property: "borderRightStyle",
    scale: "borderStyles"
  };
  var border = system(config6);
  var index_esm_default6 = border;

  // node_modules/@styled-system/background/dist/index.esm.js
  var config7 = {
    background: true,
    backgroundImage: true,
    backgroundSize: true,
    backgroundPosition: true,
    backgroundRepeat: true
  };
  config7.bgImage = config7.backgroundImage;
  config7.bgSize = config7.backgroundSize;
  config7.bgPosition = config7.backgroundPosition;
  config7.bgRepeat = config7.backgroundRepeat;
  var background = system(config7);
  var index_esm_default7 = background;

  // node_modules/@styled-system/position/dist/index.esm.js
  var defaults4 = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
  };
  var config8 = {
    position: true,
    zIndex: {
      property: "zIndex",
      scale: "zIndices"
    },
    top: {
      property: "top",
      scale: "space",
      defaultScale: defaults4.space
    },
    right: {
      property: "right",
      scale: "space",
      defaultScale: defaults4.space
    },
    bottom: {
      property: "bottom",
      scale: "space",
      defaultScale: defaults4.space
    },
    left: {
      property: "left",
      scale: "space",
      defaultScale: defaults4.space
    }
  };
  var position = system(config8);
  var index_esm_default8 = position;

  // node_modules/@styled-system/space/dist/index.esm.js
  var defaults5 = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
  };
  var isNumber3 = function isNumber4(n) {
    return typeof n === "number" && !isNaN(n);
  };
  var getMargin = function getMargin2(n, scale) {
    if (!isNumber3(n)) {
      return get2(scale, n, n);
    }
    var isNegative = n < 0;
    var absolute = Math.abs(n);
    var value = get2(scale, absolute, absolute);
    if (!isNumber3(value)) {
      return isNegative ? "-" + value : value;
    }
    return value * (isNegative ? -1 : 1);
  };
  var configs = {};
  configs.margin = {
    margin: {
      property: "margin",
      scale: "space",
      transform: getMargin,
      defaultScale: defaults5.space
    },
    marginTop: {
      property: "marginTop",
      scale: "space",
      transform: getMargin,
      defaultScale: defaults5.space
    },
    marginRight: {
      property: "marginRight",
      scale: "space",
      transform: getMargin,
      defaultScale: defaults5.space
    },
    marginBottom: {
      property: "marginBottom",
      scale: "space",
      transform: getMargin,
      defaultScale: defaults5.space
    },
    marginLeft: {
      property: "marginLeft",
      scale: "space",
      transform: getMargin,
      defaultScale: defaults5.space
    },
    marginX: {
      properties: ["marginLeft", "marginRight"],
      scale: "space",
      transform: getMargin,
      defaultScale: defaults5.space
    },
    marginY: {
      properties: ["marginTop", "marginBottom"],
      scale: "space",
      transform: getMargin,
      defaultScale: defaults5.space
    }
  };
  configs.margin.m = configs.margin.margin;
  configs.margin.mt = configs.margin.marginTop;
  configs.margin.mr = configs.margin.marginRight;
  configs.margin.mb = configs.margin.marginBottom;
  configs.margin.ml = configs.margin.marginLeft;
  configs.margin.mx = configs.margin.marginX;
  configs.margin.my = configs.margin.marginY;
  configs.padding = {
    padding: {
      property: "padding",
      scale: "space",
      defaultScale: defaults5.space
    },
    paddingTop: {
      property: "paddingTop",
      scale: "space",
      defaultScale: defaults5.space
    },
    paddingRight: {
      property: "paddingRight",
      scale: "space",
      defaultScale: defaults5.space
    },
    paddingBottom: {
      property: "paddingBottom",
      scale: "space",
      defaultScale: defaults5.space
    },
    paddingLeft: {
      property: "paddingLeft",
      scale: "space",
      defaultScale: defaults5.space
    },
    paddingX: {
      properties: ["paddingLeft", "paddingRight"],
      scale: "space",
      defaultScale: defaults5.space
    },
    paddingY: {
      properties: ["paddingTop", "paddingBottom"],
      scale: "space",
      defaultScale: defaults5.space
    }
  };
  configs.padding.p = configs.padding.padding;
  configs.padding.pt = configs.padding.paddingTop;
  configs.padding.pr = configs.padding.paddingRight;
  configs.padding.pb = configs.padding.paddingBottom;
  configs.padding.pl = configs.padding.paddingLeft;
  configs.padding.px = configs.padding.paddingX;
  configs.padding.py = configs.padding.paddingY;
  var margin = system(configs.margin);
  var padding = system(configs.padding);
  var space = compose(margin, padding);
  var index_esm_default9 = space;

  // node_modules/@styled-system/shadow/dist/index.esm.js
  var shadow = system({
    boxShadow: {
      property: "boxShadow",
      scale: "shadows"
    },
    textShadow: {
      property: "textShadow",
      scale: "shadows"
    }
  });

  // node_modules/@styled-system/css/dist/index.esm.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var get4 = function get5(obj, key, def, p, undef) {
    key = key && key.split ? key.split(".") : [key];
    for (p = 0; p < key.length; p++) {
      obj = obj ? obj[key[p]] : undef;
    }
    return obj === undef ? def : obj;
  };
  var defaultBreakpoints2 = [40, 52, 64].map(function(n) {
    return n + "em";
  });
  var defaultTheme2 = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
  };
  var aliases2 = {
    bg: "backgroundColor",
    m: "margin",
    mt: "marginTop",
    mr: "marginRight",
    mb: "marginBottom",
    ml: "marginLeft",
    mx: "marginX",
    my: "marginY",
    p: "padding",
    pt: "paddingTop",
    pr: "paddingRight",
    pb: "paddingBottom",
    pl: "paddingLeft",
    px: "paddingX",
    py: "paddingY"
  };
  var multiples2 = {
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    size: ["width", "height"]
  };
  var scales2 = {
    color: "colors",
    backgroundColor: "colors",
    borderColor: "colors",
    margin: "space",
    marginTop: "space",
    marginRight: "space",
    marginBottom: "space",
    marginLeft: "space",
    marginX: "space",
    marginY: "space",
    padding: "space",
    paddingTop: "space",
    paddingRight: "space",
    paddingBottom: "space",
    paddingLeft: "space",
    paddingX: "space",
    paddingY: "space",
    top: "space",
    right: "space",
    bottom: "space",
    left: "space",
    gridGap: "space",
    gridColumnGap: "space",
    gridRowGap: "space",
    gap: "space",
    columnGap: "space",
    rowGap: "space",
    fontFamily: "fonts",
    fontSize: "fontSizes",
    fontWeight: "fontWeights",
    lineHeight: "lineHeights",
    letterSpacing: "letterSpacings",
    border: "borders",
    borderTop: "borders",
    borderRight: "borders",
    borderBottom: "borders",
    borderLeft: "borders",
    borderWidth: "borderWidths",
    borderStyle: "borderStyles",
    borderRadius: "radii",
    borderTopRightRadius: "radii",
    borderTopLeftRadius: "radii",
    borderBottomRightRadius: "radii",
    borderBottomLeftRadius: "radii",
    borderTopWidth: "borderWidths",
    borderTopColor: "colors",
    borderTopStyle: "borderStyles",
    borderBottomWidth: "borderWidths",
    borderBottomColor: "colors",
    borderBottomStyle: "borderStyles",
    borderLeftWidth: "borderWidths",
    borderLeftColor: "colors",
    borderLeftStyle: "borderStyles",
    borderRightWidth: "borderWidths",
    borderRightColor: "colors",
    borderRightStyle: "borderStyles",
    outlineColor: "colors",
    boxShadow: "shadows",
    textShadow: "shadows",
    zIndex: "zIndices",
    width: "sizes",
    minWidth: "sizes",
    maxWidth: "sizes",
    height: "sizes",
    minHeight: "sizes",
    maxHeight: "sizes",
    flexBasis: "sizes",
    size: "sizes",
    // svg
    fill: "colors",
    stroke: "colors"
  };
  var positiveOrNegative2 = function positiveOrNegative3(scale, value) {
    if (typeof value !== "number" || value >= 0) {
      return get4(scale, value, value);
    }
    var absolute = Math.abs(value);
    var n = get4(scale, absolute, absolute);
    if (typeof n === "string")
      return "-" + n;
    return n * -1;
  };
  var transforms2 = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce(function(acc, curr) {
    var _extends2;
    return _extends({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative2, _extends2));
  }, {});
  var responsive2 = function responsive3(styles) {
    return function(theme) {
      var next = {};
      var breakpoints = get4(theme, "breakpoints", defaultBreakpoints2);
      var mediaQueries = [null].concat(breakpoints.map(function(n) {
        return "@media screen and (min-width: " + n + ")";
      }));
      for (var key in styles) {
        var value = typeof styles[key] === "function" ? styles[key](theme) : styles[key];
        if (value == null)
          continue;
        if (!Array.isArray(value)) {
          next[key] = value;
          continue;
        }
        for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
          var media = mediaQueries[i];
          if (!media) {
            next[key] = value[i];
            continue;
          }
          next[media] = next[media] || {};
          if (value[i] == null)
            continue;
          next[media][key] = value[i];
        }
      }
      return next;
    };
  };
  var css3 = function css4(args) {
    return function(props2) {
      if (props2 === void 0) {
        props2 = {};
      }
      var theme = _extends({}, defaultTheme2, {}, props2.theme || props2);
      var result = {};
      var obj = typeof args === "function" ? args(theme) : args;
      var styles = responsive2(obj)(theme);
      for (var key in styles) {
        var x2 = styles[key];
        var val = typeof x2 === "function" ? x2(theme) : x2;
        if (key === "variant") {
          var variant4 = css4(get4(theme, val))(theme);
          result = _extends({}, result, {}, variant4);
          continue;
        }
        if (val && typeof val === "object") {
          result[key] = css4(val)(theme);
          continue;
        }
        var prop = get4(aliases2, key, key);
        var scaleName = get4(scales2, prop);
        var scale = get4(theme, scaleName, get4(theme, prop, {}));
        var transform = get4(transforms2, prop, get4);
        var value = transform(scale, val, val);
        if (multiples2[prop]) {
          var dirs = multiples2[prop];
          for (var i = 0; i < dirs.length; i++) {
            result[dirs[i]] = value;
          }
        } else {
          result[prop] = value;
        }
      }
      return result;
    };
  };
  var index_esm_default10 = css3;

  // node_modules/@styled-system/variant/dist/index.esm.js
  var variant = function variant2(_ref) {
    var _config;
    var scale = _ref.scale, _ref$prop = _ref.prop, prop = _ref$prop === void 0 ? "variant" : _ref$prop, _ref$variants = _ref.variants, variants = _ref$variants === void 0 ? {} : _ref$variants, key = _ref.key;
    var sx2;
    if (Object.keys(variants).length) {
      sx2 = function sx3(value, scale2, props2) {
        return index_esm_default10(get2(scale2, value, null))(props2.theme);
      };
    } else {
      sx2 = function sx3(value, scale2) {
        return get2(scale2, value, null);
      };
    }
    sx2.scale = scale || key;
    sx2.defaults = variants;
    var config9 = (_config = {}, _config[prop] = sx2, _config);
    var parser = createParser(config9);
    return parser;
  };
  var buttonStyle = variant({
    key: "buttons"
  });
  var textStyle = variant({
    key: "textStyles",
    prop: "textStyle"
  });
  var colorStyle = variant({
    key: "colorStyles",
    prop: "colors"
  });

  // node_modules/styled-system/dist/index.esm.js
  var width = index_esm_default.width;
  var height = index_esm_default.height;
  var minWidth = index_esm_default.minWidth;
  var minHeight = index_esm_default.minHeight;
  var maxWidth = index_esm_default.maxWidth;
  var maxHeight = index_esm_default.maxHeight;
  var size = index_esm_default.size;
  var verticalAlign = index_esm_default.verticalAlign;
  var display = index_esm_default.display;
  var overflow = index_esm_default.overflow;
  var overflowX = index_esm_default.overflowX;
  var overflowY = index_esm_default.overflowY;
  var opacity = index_esm_default2.opacity;
  var fontSize = index_esm_default3.fontSize;
  var fontFamily = index_esm_default3.fontFamily;
  var fontWeight = index_esm_default3.fontWeight;
  var lineHeight = index_esm_default3.lineHeight;
  var textAlign = index_esm_default3.textAlign;
  var fontStyle = index_esm_default3.fontStyle;
  var letterSpacing = index_esm_default3.letterSpacing;
  var alignItems = index_esm_default4.alignItems;
  var alignContent = index_esm_default4.alignContent;
  var justifyItems = index_esm_default4.justifyItems;
  var justifyContent = index_esm_default4.justifyContent;
  var flexWrap = index_esm_default4.flexWrap;
  var flexDirection = index_esm_default4.flexDirection;
  var flex = index_esm_default4.flex;
  var flexGrow = index_esm_default4.flexGrow;
  var flexShrink = index_esm_default4.flexShrink;
  var flexBasis = index_esm_default4.flexBasis;
  var justifySelf = index_esm_default4.justifySelf;
  var alignSelf = index_esm_default4.alignSelf;
  var order = index_esm_default4.order;
  var gridGap = index_esm_default5.gridGap;
  var gridColumnGap = index_esm_default5.gridColumnGap;
  var gridRowGap = index_esm_default5.gridRowGap;
  var gridColumn = index_esm_default5.gridColumn;
  var gridRow = index_esm_default5.gridRow;
  var gridAutoFlow = index_esm_default5.gridAutoFlow;
  var gridAutoColumns = index_esm_default5.gridAutoColumns;
  var gridAutoRows = index_esm_default5.gridAutoRows;
  var gridTemplateColumns = index_esm_default5.gridTemplateColumns;
  var gridTemplateRows = index_esm_default5.gridTemplateRows;
  var gridTemplateAreas = index_esm_default5.gridTemplateAreas;
  var gridArea = index_esm_default5.gridArea;
  var borderWidth = index_esm_default6.borderWidth;
  var borderStyle = index_esm_default6.borderStyle;
  var borderColor = index_esm_default6.borderColor;
  var borderTop = index_esm_default6.borderTop;
  var borderRight = index_esm_default6.borderRight;
  var borderBottom = index_esm_default6.borderBottom;
  var borderLeft = index_esm_default6.borderLeft;
  var borderRadius = index_esm_default6.borderRadius;
  var backgroundImage = index_esm_default7.backgroundImage;
  var backgroundSize = index_esm_default7.backgroundSize;
  var backgroundPosition = index_esm_default7.backgroundPosition;
  var backgroundRepeat = index_esm_default7.backgroundRepeat;
  var zIndex = index_esm_default8.zIndex;
  var top = index_esm_default8.top;
  var right = index_esm_default8.right;
  var bottom = index_esm_default8.bottom;
  var left = index_esm_default8.left;

  // node_modules/@styled-system/should-forward-prop/dist/index.esm.js
  var all = compose(space, typography, color, layout, flexbox, border, background, position, grid, shadow, buttonStyle, textStyle, colorStyle);
  var props = all.propNames;
  var createShouldForwardProp = function createShouldForwardProp2(props2) {
    var regex = new RegExp("^(" + props2.join("|") + ")$");
    return memoize_browser_esm_default(function(prop) {
      return is_prop_valid_browser_esm_default(prop) && !regex.test(prop);
    });
  };
  var index_esm_default12 = createShouldForwardProp(props);

  // node_modules/@theme-ui/components/dist/index.esm.js
  var import_react4 = __toESM(require_react());
  var shouldForwardProp = createShouldForwardProp(index_esm_default9.propNames.concat(index_esm_default2.propNames));
  var sx = function(props2) {
    return css2(props2.sx)(props2.theme);
  };
  var base = function(props2) {
    return css2(props2.__css)(props2.theme);
  };
  var variant3 = function(ref) {
    var theme = ref.theme;
    var variant4 = ref.variant;
    var __themeKey = ref.__themeKey;
    if (__themeKey === void 0)
      __themeKey = "variants";
    return css2(get(theme, __themeKey + "." + variant4, get(theme, variant4)));
  };
  var Box = styled_browser_esm_default("div", {
    shouldForwardProp
  })({
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0
  }, base, variant3, index_esm_default9, index_esm_default2, sx, function(props2) {
    return props2.css;
  });
  var Flex = styled_browser_esm_default(Box)({
    display: "flex"
  });
  function objectWithoutProperties(obj, exclude) {
    var target = {};
    for (var k in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
        target[k] = obj[k];
    return target;
  }
  var px = function(n) {
    return typeof n === "number" ? n + "px" : n;
  };
  var widthToColumns = function(width2) {
    return Array.isArray(width2) ? width2.map(widthToColumns) : !!width2 && "repeat(auto-fit, minmax(" + px(width2) + ", 1fr))";
  };
  var countToColumns = function(n) {
    return Array.isArray(n) ? n.map(countToColumns) : !!n && (typeof n === "number" ? "repeat(" + n + ", 1fr)" : n);
  };
  var Grid = import_react4.default.forwardRef(function(ref$1, ref) {
    var width2 = ref$1.width;
    var columns = ref$1.columns;
    var gap = ref$1.gap;
    if (gap === void 0)
      gap = 3;
    var rest = objectWithoutProperties(ref$1, ["width", "columns", "gap"]);
    var props2 = rest;
    var gridTemplateColumns2 = !!width2 ? widthToColumns(width2) : countToColumns(columns);
    return import_react4.default.createElement(Box, Object.assign({}, { ref }, props2, { __themeKey: "grids", __css: {
      display: "grid",
      gridGap: gap,
      gridTemplateColumns: gridTemplateColumns2
    } }));
  });
  var Button = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref, as: "button", variant: "primary" }, props2, { __themeKey: "buttons", __css: {
      appearance: "none",
      display: "inline-block",
      textAlign: "center",
      lineHeight: "inherit",
      textDecoration: "none",
      fontSize: "inherit",
      px: 3,
      py: 2,
      color: "white",
      bg: "primary",
      border: 0,
      borderRadius: 4
    } }));
  });
  var Link = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref, as: "a", variant: "styles.a" }, props2, { __themeKey: "links" }));
  });
  var Text = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref }, props2, { __themeKey: "text" }));
  });
  var Heading = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref, as: "h2", variant: "heading" }, props2, { __themeKey: "text", __css: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading"
    } }));
  });
  var Image = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref, as: "img" }, props2, { __themeKey: "images", __css: Object.assign(
      {},
      {
        maxWidth: "100%",
        height: "auto"
      },
      props2.__css
    ) }));
  });
  var Card = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref, variant: "primary" }, props2, { __themeKey: "cards" }));
  });
  var Label = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref, as: "label", variant: "label" }, props2, { __themeKey: "forms", __css: {
      width: "100%",
      display: "flex"
    } }));
  });
  var Input = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref, as: "input", variant: "input" }, props2, { __themeKey: "forms", __css: {
      display: "block",
      width: "100%",
      p: 2,
      appearance: "none",
      fontSize: "inherit",
      lineHeight: "inherit",
      border: "1px solid",
      borderRadius: 4,
      color: "inherit",
      bg: "transparent"
    } }));
  });
  function objectWithoutProperties$1(obj, exclude) {
    var target = {};
    for (var k in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
        target[k] = obj[k];
    return target;
  }
  var SVG = function(ref) {
    var size2 = ref.size;
    if (size2 === void 0)
      size2 = 24;
    var rest = objectWithoutProperties$1(ref, ["size"]);
    var props2 = rest;
    return import_react4.default.createElement(Box, Object.assign({}, { as: "svg", xmlns: "http://www.w3.org/2000/svg", width: size2 + "", height: size2 + "", viewBox: "0 0 24 24", fill: "currentcolor" }, props2));
  };
  var getProps = function(test) {
    return function(props2) {
      var next = {};
      for (var key in props2) {
        if (test(key || "")) {
          next[key] = props2[key];
        }
      }
      return next;
    };
  };
  var MRE = /^m[trblxy]?$/;
  var getMargin3 = getProps(function(k) {
    return MRE.test(k);
  });
  var omitMargin = getProps(function(k) {
    return !MRE.test(k);
  });
  var DownArrow = function(props2) {
    return import_react4.default.createElement(
      SVG,
      props2,
      import_react4.default.createElement("path", { d: "M7 10l5 5 5-5z" })
    );
  };
  var Select = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(
      Box,
      Object.assign({}, getMargin3(props2), { sx: {
        display: "flex"
      } }),
      import_react4.default.createElement(Box, Object.assign({}, { ref, as: "select", variant: "select" }, omitMargin(props2), { __themeKey: "forms", __css: {
        display: "block",
        width: "100%",
        p: 2,
        appearance: "none",
        fontSize: "inherit",
        lineHeight: "inherit",
        border: "1px solid",
        borderRadius: 4,
        color: "inherit",
        bg: "transparent"
      } })),
      import_react4.default.createElement(DownArrow, { sx: {
        ml: -28,
        alignSelf: "center",
        pointerEvents: "none"
      } })
    );
  });
  var Textarea = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref, as: "textarea", variant: "textarea" }, props2, { __themeKey: "forms", __css: {
      display: "block",
      width: "100%",
      p: 2,
      appearance: "none",
      fontSize: "inherit",
      lineHeight: "inherit",
      border: "1px solid",
      borderRadius: 4,
      color: "inherit",
      bg: "transparent"
    } }));
  });
  function objectWithoutProperties$2(obj, exclude) {
    var target = {};
    for (var k in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
        target[k] = obj[k];
    return target;
  }
  var RadioChecked = function(props2) {
    return import_react4.default.createElement(
      SVG,
      props2,
      import_react4.default.createElement("path", { d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
    );
  };
  var RadioUnchecked = function(props2) {
    return import_react4.default.createElement(
      SVG,
      props2,
      import_react4.default.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
    );
  };
  var RadioIcon = function(props2) {
    return import_react4.default.createElement(
      import_react4.default.Fragment,
      null,
      import_react4.default.createElement(RadioChecked, Object.assign({}, props2, { __css: {
        display: "none",
        "input:checked ~ &": {
          display: "block"
        }
      } })),
      import_react4.default.createElement(RadioUnchecked, Object.assign({}, props2, { __css: {
        display: "block",
        "input:checked ~ &": {
          display: "none"
        }
      } }))
    );
  };
  var Radio = import_react4.default.forwardRef(function(ref$1, ref) {
    var className = ref$1.className;
    var sx2 = ref$1.sx;
    var variant4 = ref$1.variant;
    if (variant4 === void 0)
      variant4 = "radio";
    var rest = objectWithoutProperties$2(ref$1, ["className", "sx", "variant"]);
    var props2 = rest;
    return import_react4.default.createElement(
      Box,
      null,
      import_react4.default.createElement(Box, Object.assign({}, { ref, as: "input", type: "radio" }, props2, { sx: {
        position: "absolute",
        opacity: 0,
        zIndex: -1,
        width: 1,
        height: 1,
        overflow: "hidden"
      } })),
      import_react4.default.createElement(Box, { as: RadioIcon, "aria-hidden": "true", __themeKey: "forms", variant: variant4, className, sx: sx2, __css: {
        // todo: system props??
        mr: 2,
        borderRadius: 9999,
        color: "gray",
        "input:checked ~ &": {
          color: "primary"
        },
        "input:focus ~ &": {
          bg: "highlight"
        }
      } })
    );
  });
  function objectWithoutProperties$3(obj, exclude) {
    var target = {};
    for (var k in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
        target[k] = obj[k];
    return target;
  }
  var CheckboxChecked = function(props2) {
    return import_react4.default.createElement(
      SVG,
      props2,
      import_react4.default.createElement("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
    );
  };
  var CheckboxUnchecked = function(props2) {
    return import_react4.default.createElement(
      SVG,
      props2,
      import_react4.default.createElement("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" })
    );
  };
  var CheckboxIcon = function(props2) {
    return import_react4.default.createElement(
      import_react4.default.Fragment,
      null,
      import_react4.default.createElement(CheckboxChecked, Object.assign({}, props2, { __css: {
        display: "none",
        "input:checked ~ &": {
          display: "block"
        }
      } })),
      import_react4.default.createElement(CheckboxUnchecked, Object.assign({}, props2, { __css: {
        display: "block",
        "input:checked ~ &": {
          display: "none"
        }
      } }))
    );
  };
  var Checkbox = import_react4.default.forwardRef(function(ref$1, ref) {
    var className = ref$1.className;
    var sx2 = ref$1.sx;
    var variant4 = ref$1.variant;
    if (variant4 === void 0)
      variant4 = "checkbox";
    var rest = objectWithoutProperties$3(ref$1, ["className", "sx", "variant"]);
    var props2 = rest;
    return import_react4.default.createElement(
      Box,
      null,
      import_react4.default.createElement(Box, Object.assign({}, { ref, as: "input", type: "checkbox" }, props2, { sx: {
        position: "absolute",
        opacity: 0,
        zIndex: -1,
        width: 1,
        height: 1,
        overflow: "hidden"
      } })),
      import_react4.default.createElement(Box, { as: CheckboxIcon, "aria-hidden": "true", __themeKey: "forms", variant: variant4, className, sx: sx2, __css: {
        mr: 2,
        borderRadius: 4,
        color: "gray",
        "input:checked ~ &": {
          color: "primary"
        },
        "input:focus ~ &": {
          color: "primary",
          bg: "highlight"
        }
      } })
    );
  });
  var thumb = {
    appearance: "none",
    width: 16,
    height: 16,
    bg: "currentcolor",
    border: 0,
    borderRadius: 9999,
    variant: "forms.slider.thumb"
  };
  var Slider = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref, as: "input", type: "range", variant: "slider" }, props2, { __themeKey: "forms", __css: {
      display: "block",
      width: "100%",
      height: 4,
      my: 2,
      cursor: "pointer",
      appearance: "none",
      borderRadius: 9999,
      color: "inherit",
      bg: "gray",
      ":focus": {
        outline: "none",
        color: "primary"
      },
      "&::-webkit-slider-thumb": thumb,
      "&::-moz-range-thumb": thumb,
      "&::-ms-thumb": thumb
    } }));
  });
  function objectWithoutProperties$4(obj, exclude) {
    var target = {};
    for (var k in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
        target[k] = obj[k];
    return target;
  }
  var Field = import_react4.default.forwardRef(function(ref$1, ref) {
    var Control = ref$1.as;
    if (Control === void 0)
      Control = Input;
    var label = ref$1.label;
    var name = ref$1.name;
    var rest = objectWithoutProperties$4(ref$1, ["as", "label", "name"]);
    var props2 = rest;
    return import_react4.default.createElement(
      Box,
      getMargin3(props2),
      import_react4.default.createElement(Label, { htmlFor: name }, label),
      import_react4.default.createElement(Control, Object.assign({}, { ref, id: name, name }, omitMargin(props2)))
    );
  });
  var Progress = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref, as: "progress", variant: "styles.progress" }, props2, { __css: {
      display: "block",
      width: "100%",
      height: "4px",
      margin: 0,
      padding: 0,
      overflow: "hidden",
      appearance: "none",
      color: "primary",
      bg: "gray",
      borderRadius: 9999,
      border: "none",
      "&::-webkit-progress-bar": {
        bg: "transparent"
      },
      "&::-webkit-progress-value": {
        bg: "currentcolor"
      },
      "&::-moz-progress-bar": {
        bg: "currentcolor"
      }
    } }));
  });
  function objectWithoutProperties$5(obj, exclude) {
    var target = {};
    for (var k in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
        target[k] = obj[k];
    return target;
  }
  var Donut = import_react4.default.forwardRef(function(ref$1, ref) {
    var size2 = ref$1.size;
    if (size2 === void 0)
      size2 = 128;
    var strokeWidth = ref$1.strokeWidth;
    if (strokeWidth === void 0)
      strokeWidth = 2;
    var value = ref$1.value;
    if (value === void 0)
      value = 0;
    var min = ref$1.min;
    if (min === void 0)
      min = 0;
    var max = ref$1.max;
    if (max === void 0)
      max = 1;
    var title = ref$1.title;
    var rest = objectWithoutProperties$5(ref$1, ["size", "strokeWidth", "value", "min", "max", "title"]);
    var props2 = rest;
    var r = 16 - strokeWidth;
    var C = 2 * r * Math.PI;
    var offset = C - (value - min) / (max - min) * C;
    return import_react4.default.createElement(
      Box,
      Object.assign({}, { ref, as: "svg", viewBox: "0 0 32 32", width: size2, height: size2, strokeWidth, fill: "none", stroke: "currentcolor", role: "img", "aria-valuenow": value, "aria-valuemin": min, "aria-valuemax": max }, props2, { __css: {
        color: "primary"
      } }),
      title && import_react4.default.createElement("title", null, title),
      import_react4.default.createElement("circle", { cx: 16, cy: 16, r, opacity: 1 / 8 }),
      import_react4.default.createElement("circle", { cx: 16, cy: 16, r, strokeDasharray: C, strokeDashoffset: offset, transform: "rotate(-90 16 16)" })
    );
  });
  function objectWithoutProperties$6(obj, exclude) {
    var target = {};
    for (var k in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
        target[k] = obj[k];
    return target;
  }
  var spin = keyframes({
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
  });
  var Spinner = import_react4.default.forwardRef(function(ref$1, ref) {
    var size2 = ref$1.size;
    if (size2 === void 0)
      size2 = 48;
    var strokeWidth = ref$1.strokeWidth;
    if (strokeWidth === void 0)
      strokeWidth = 4;
    var title = ref$1.title;
    if (title === void 0)
      title = "Loading...";
    var duration = ref$1.duration;
    if (duration === void 0)
      duration = 500;
    var rest = objectWithoutProperties$6(ref$1, ["size", "strokeWidth", "max", "title", "duration"]);
    var props2 = rest;
    var r = 16 - strokeWidth;
    var C = 2 * r * Math.PI;
    var offset = C - 1 / 4 * C;
    return import_react4.default.createElement(
      Box,
      Object.assign({}, { ref, as: "svg", viewBox: "0 0 32 32", width: size2, height: size2, strokeWidth, fill: "none", stroke: "currentcolor", role: "img" }, props2, { __css: {
        color: "primary",
        overflow: "visible"
      } }),
      import_react4.default.createElement("title", null, title),
      import_react4.default.createElement("circle", { cx: 16, cy: 16, r, opacity: 1 / 8 }),
      import_react4.default.createElement(Box, { as: "circle", cx: 16, cy: 16, r, strokeDasharray: C, strokeDashoffset: offset, __css: {
        transformOrigin: "50% 50%",
        animationName: spin.toString(),
        animationTimingFunction: "linear",
        animationDuration: duration + "ms",
        animationIterationCount: "infinite"
      } })
    );
  });
  function objectWithoutProperties$7(obj, exclude) {
    var target = {};
    for (var k in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
        target[k] = obj[k];
    return target;
  }
  var Avatar = import_react4.default.forwardRef(function(ref$1, ref) {
    var size2 = ref$1.size;
    if (size2 === void 0)
      size2 = 48;
    var rest = objectWithoutProperties$7(ref$1, ["size"]);
    var props2 = rest;
    return import_react4.default.createElement(Image, Object.assign({}, { ref, width: size2, height: size2, variant: "avatar" }, props2, { __css: {
      borderRadius: 9999
    } }));
  });
  var Badge = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref }, props2, { __themeKey: "badges", __css: {
      display: "inline-block",
      verticalAlign: "baseline",
      fontSize: 0,
      fontWeight: "bold",
      whiteSpace: "nowrap",
      px: 1,
      borderRadius: 2,
      color: "white",
      bg: "primary"
    } }));
  });
  function objectWithoutProperties$8(obj, exclude) {
    var target = {};
    for (var k in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
        target[k] = obj[k];
    return target;
  }
  var IconButton = import_react4.default.forwardRef(function(ref$1, ref) {
    var size2 = ref$1.size;
    if (size2 === void 0)
      size2 = 32;
    var rest = objectWithoutProperties$8(ref$1, ["size"]);
    var props2 = rest;
    return import_react4.default.createElement(Box, Object.assign({}, { ref, as: "button", variant: "icon" }, props2, { __themeKey: "buttons", __css: {
      appearance: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 1,
      width: size2,
      height: size2,
      color: "inherit",
      bg: "transparent",
      border: "none",
      borderRadius: 4
    } }));
  });
  function objectWithoutProperties$9(obj, exclude) {
    var target = {};
    for (var k in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
        target[k] = obj[k];
    return target;
  }
  var x = import_react4.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "currentcolor", viewBox: "0 0 24 24" },
    import_react4.default.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
  );
  var Close = import_react4.default.forwardRef(function(ref$1, ref) {
    var rest = objectWithoutProperties$9(ref$1, ["size"]);
    var props2 = rest;
    return import_react4.default.createElement(IconButton, Object.assign({}, { ref, title: "Close", "aria-label": "Close", variant: "close" }, props2, { children: x }));
  });
  var Alert = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref }, props2, { __themeKey: "alerts", __css: {
      display: "flex",
      alignItems: "center",
      px: 3,
      py: 2,
      fontWeight: "bold",
      color: "white",
      bg: "primary",
      borderRadius: 4
    } }));
  });
  var Divider = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref, as: "hr", variant: "styles.hr" }, props2, { __css: {
      color: "gray",
      m: 0,
      my: 2,
      border: 0,
      borderBottom: "1px solid"
    } }));
  });
  function objectWithoutProperties$a(obj, exclude) {
    var target = {};
    for (var k in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
        target[k] = obj[k];
    return target;
  }
  var Embed = import_react4.default.forwardRef(function(ref$1, ref) {
    var ratio = ref$1.ratio;
    if (ratio === void 0)
      ratio = 16 / 9;
    var src = ref$1.src;
    var frameBorder = ref$1.frameBorder;
    if (frameBorder === void 0)
      frameBorder = 0;
    var allowFullScreen = ref$1.allowFullScreen;
    if (allowFullScreen === void 0)
      allowFullScreen = true;
    var width2 = ref$1.width;
    if (width2 === void 0)
      width2 = 560;
    var height2 = ref$1.height;
    if (height2 === void 0)
      height2 = 315;
    var allow = ref$1.allow;
    var rest = objectWithoutProperties$a(ref$1, ["ratio", "src", "frameBorder", "allowFullScreen", "width", "height", "allow"]);
    var props2 = rest;
    return import_react4.default.createElement(
      Box,
      Object.assign({}, props2, { __css: {
        width: "100%",
        height: 0,
        paddingBottom: 100 / ratio + "%",
        position: "relative",
        overflow: "hidden"
      } }),
      import_react4.default.createElement(Box, { ref, as: "iframe", src, width: width2, height: height2, frameBorder, allowFullScreen, allow, __css: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        bottom: 0,
        left: 0,
        border: 0
      } })
    );
  });
  function objectWithoutProperties$b(obj, exclude) {
    var target = {};
    for (var k in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
        target[k] = obj[k];
    return target;
  }
  var AspectRatio = import_react4.default.forwardRef(function(ref$1, ref) {
    var ratio = ref$1.ratio;
    if (ratio === void 0)
      ratio = 4 / 3;
    var children = ref$1.children;
    var rest = objectWithoutProperties$b(ref$1, ["ratio", "children"]);
    var props2 = rest;
    return import_react4.default.createElement(
      Box,
      { ref, sx: {
        position: "relative",
        overflow: "hidden"
      } },
      import_react4.default.createElement(Box, { sx: {
        width: "100%",
        height: 0,
        paddingBottom: 100 / ratio + "%"
      } }),
      import_react4.default.createElement(
        Box,
        Object.assign({}, props2, { __css: {
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        } }),
        children
      )
    );
  });
  function objectWithoutProperties$c(obj, exclude) {
    var target = {};
    for (var k in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
        target[k] = obj[k];
    return target;
  }
  var AspectImage = import_react4.default.forwardRef(function(ref$1, ref) {
    var ratio = ref$1.ratio;
    var rest = objectWithoutProperties$c(ref$1, ["ratio"]);
    var props2 = rest;
    return import_react4.default.createElement(
      AspectRatio,
      { ratio },
      import_react4.default.createElement(Image, Object.assign({}, { ref }, props2, { __css: {
        objectFit: "cover"
      } }))
    );
  });
  var Container = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref, variant: "container" }, props2, { __themeKey: "layout", __css: {
      width: "100%",
      maxWidth: "container",
      mx: "auto"
    } }));
  });
  var NavLink = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Link, Object.assign({}, { ref, variant: "nav" }, props2, { __css: {
      color: "inherit",
      textDecoration: "none",
      fontWeight: "bold",
      display: "inline-block",
      "&:hover, &:focus, &.active": {
        color: "primary"
      }
    } }));
  });
  var Message = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(Box, Object.assign({}, { ref }, props2, { __themeKey: "messages", __css: {
      padding: 3,
      paddingLeft: function(t) {
        return t.space[3] - t.space[1];
      },
      borderLeftWidth: function(t) {
        return t.space[1];
      },
      borderLeftStyle: "solid",
      borderLeftColor: "primary",
      borderRadius: 4,
      bg: "highlight"
    } }));
  });
  var MenuIcon = function(ref) {
    var size2 = ref.size;
    if (size2 === void 0)
      size2 = 24;
    return import_react4.default.createElement(
      Box,
      { as: "svg", xmlns: "http://www.w3.org/2000/svg", width: size2, height: size2, fill: "currentcolor", viewBox: "0 0 24 24", sx: {
        display: "block",
        margin: 0
      } },
      import_react4.default.createElement("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })
    );
  };
  var MenuButton = import_react4.default.forwardRef(function(props2, ref) {
    return import_react4.default.createElement(
      IconButton,
      Object.assign({}, { ref, title: "Menu", "aria-label": "Toggle Menu", variant: "menu" }, props2),
      import_react4.default.createElement(MenuIcon, null)
    );
  });

  // node_modules/use-shopping-cart/dist/index.es.js
  var import_react5 = __toESM(require_react());
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys2(Object(source), true).forEach(function(key) {
          _defineProperty2(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys2(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function unwrapExports(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }
  var common = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function fromStorage(value) {
      return value !== null ? JSON.parse(value) : null;
    }
    function readItem(storage, key) {
      try {
        var storedValue = storage.getItem(key);
        return fromStorage(storedValue);
      } catch (e) {
        return null;
      }
    }
    function toStorage(value) {
      return JSON.stringify(value);
    }
    function writeItem(storage, key, value) {
      try {
        if (value !== null) {
          storage.setItem(key, toStorage(value));
        } else {
          storage.removeItem(key);
        }
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    }
    function useInitialState(storage, key, defaultState) {
      var defaultStateRef = import_react5.default.useRef(defaultState);
      return import_react5.default.useMemo(function() {
        var _a;
        return (_a = readItem(storage, key)) !== null && _a !== void 0 ? _a : defaultStateRef.current;
      }, [key, storage]);
    }
    exports.useInitialState = useInitialState;
    function useStorageWriter(storage, key, state2) {
      var _a = import_react5.default.useState(void 0), writeError = _a[0], setWriteError = _a[1];
      import_react5.default.useEffect(function() {
        writeItem(storage, key, state2).catch(function(error) {
          if (!error || !error.message || error.message !== (writeError === null || writeError === void 0 ? void 0 : writeError.message)) {
            setWriteError(error);
          }
        });
        if (writeError) {
          return function() {
            setWriteError(void 0);
          };
        }
      }, [state2, key, writeError, storage]);
      return writeError;
    }
    exports.useStorageWriter = useStorageWriter;
    function useStorageListener(storage, key, defaultState, onChange) {
      var defaultStateRef = import_react5.default.useRef(defaultState);
      var onChangeRef = import_react5.default.useRef(onChange);
      var firstRun = import_react5.default.useRef(true);
      import_react5.default.useEffect(function() {
        var _a;
        if (firstRun.current) {
          firstRun.current = false;
          return;
        }
        onChangeRef.current((_a = readItem(storage, key)) !== null && _a !== void 0 ? _a : defaultStateRef.current);
      }, [key, storage]);
      import_react5.default.useEffect(function() {
        function onStorageChange(event) {
          var _a;
          if (event.key === key) {
            onChangeRef.current((_a = fromStorage(event.newValue)) !== null && _a !== void 0 ? _a : defaultStateRef.current);
          }
        }
        if (typeof window !== "undefined") {
          window.addEventListener("storage", onStorageChange);
          return function() {
            window.removeEventListener("storage", onStorageChange);
          };
        }
      }, [key]);
    }
    exports.useStorageListener = useStorageListener;
  });
  unwrapExports(common);
  var common_1 = common.useInitialState;
  var common_2 = common.useStorageWriter;
  var common_3 = common.useStorageListener;
  var state = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function useStorageState(storage, key, defaultState) {
      if (defaultState === void 0) {
        defaultState = null;
      }
      var _a = import_react5.default.useState(common.useInitialState(storage, key, defaultState)), state2 = _a[0], setState = _a[1];
      common.useStorageListener(storage, key, defaultState, setState);
      var writeError = common.useStorageWriter(storage, key, state2);
      return [state2, setState, writeError];
    }
    exports.default = useStorageState;
  });
  unwrapExports(state);
  var reducer = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FORCE_STATE_ACTION = "__FORCE_STATE_INTERNAL_API__";
    function isForceStateAction(action) {
      return typeof action === "object" && action !== null && "type" in action && action.type === FORCE_STATE_ACTION;
    }
    function addForceStateActionToReducer(reducer2) {
      return function(state2, action) {
        if (isForceStateAction(action))
          return action.payload;
        return reducer2(state2, action);
      };
    }
    function useStorageReducer(storage, key, reducer2, defaultInitialArg, defaultInit) {
      if (defaultInit === void 0) {
        defaultInit = function(x2) {
          return x2;
        };
      }
      var defaultState = defaultInit(defaultInitialArg);
      var _a = import_react5.default.useReducer(addForceStateActionToReducer(reducer2), common.useInitialState(storage, key, defaultState)), state2 = _a[0], dispatch = _a[1];
      common.useStorageListener(storage, key, defaultState, function(newValue) {
        dispatch({
          type: FORCE_STATE_ACTION,
          payload: newValue
        });
      });
      var writeError = common.useStorageWriter(storage, key, state2);
      return [state2, dispatch, writeError];
    }
    exports.default = useStorageReducer;
  });
  unwrapExports(reducer);
  var dist = createCommonjsModule(function(module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useStorageState = state.default;
    exports.useStorageReducer = reducer.default;
  });
  unwrapExports(dist);
  var dist_1 = dist.useStorageState;
  var dist_2 = dist.useStorageReducer;
  var isClient = typeof window === "object";
  var formatCurrencyString = (_ref) => {
    var {
      value,
      currency,
      language = isClient ? navigator.language : "en-US"
    } = _ref;
    value = parseInt(value);
    var numberFormat = new Intl.NumberFormat(language, {
      style: "currency",
      currency,
      currencyDisplay: "symbol"
    });
    var parts = numberFormat.formatToParts(value);
    var zeroDecimalCurrency = true;
    for (var part of parts) {
      if (part.type === "decimal") {
        zeroDecimalCurrency = false;
        break;
      }
    }
    value = zeroDecimalCurrency ? value : value / 100;
    return numberFormat.format(value.toFixed(2));
  };
  function useLocalStorageReducer(key, reducer2, initialState) {
    var dummyStorage = {
      getItem() {
        return null;
      },
      setItem() {
      },
      removeItem() {
      }
    };
    return dist_2(isClient ? window.localStorage : dummyStorage, key, reducer2, initialState);
  }
  var getCheckoutData = {
    stripe(cart) {
      var _cart$allowedCountrie;
      var lineItems = [];
      for (var sku in cart.cartDetails) {
        lineItems.push({
          price: sku,
          quantity: cart.cartDetails[sku].quantity
        });
      }
      var options = {
        mode: "payment",
        lineItems,
        successUrl: cart.successUrl,
        cancelUrl: cart.cancelUrl,
        billingAddressCollection: cart.billingAddressCollection ? "required" : "auto",
        submitType: "auto"
      };
      if ((_cart$allowedCountrie = cart.allowedCountries) === null || _cart$allowedCountrie === void 0 ? void 0 : _cart$allowedCountrie.length) {
        options.shippingAddressCollection = {
          allowedCountries: cart.allowedCountries
        };
      }
      return options;
    }
  };
  function checkoutHandler(cart, checkoutOptions) {
    var serviceProperty = "";
    if (cart.stripe)
      serviceProperty = "stripe";
    var needsCheckoutData = cart.mode === "client-only";
    return /* @__PURE__ */ function() {
      var _ref2 = _asyncToGenerator(function* (parameters) {
        if (!serviceProperty) {
          throw new Error("No compatible API has been defined, your options are: Stripe");
        }
        if (!checkoutOptions.modes.includes(cart.mode)) {
          throw new Error("Invalid checkout mode '".concat(cart.mode, "' was chosen. The valid modes are ").concat(new Intl.ListFormat().format(checkoutOptions.modes), "."));
        }
        var options = {
          sessionId: parameters === null || parameters === void 0 ? void 0 : parameters.sessionId
        };
        if (needsCheckoutData)
          options = getCheckoutData.stripe(cart);
        var {
          error
        } = yield checkoutOptions[serviceProperty](yield cart[serviceProperty], options, parameters);
        if (error)
          return error;
      });
      return function(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
  }
  var cartInitialState = {
    lastClicked: "",
    shouldDisplayCart: false,
    stripe: null
  };
  function cartReducer(cart, action) {
    switch (action.type) {
      case "store-last-clicked":
        return _objectSpread2(_objectSpread2({}, cart), {}, {
          lastClicked: action.sku
        });
      case "cart-click":
        return _objectSpread2(_objectSpread2({}, cart), {}, {
          shouldDisplayCart: !cart.shouldDisplayCart
        });
      case "cart-hover":
        return _objectSpread2(_objectSpread2({}, cart), {}, {
          shouldDisplayCart: true
        });
      case "close-cart":
        return _objectSpread2(_objectSpread2({}, cart), {}, {
          shouldDisplayCart: false
        });
      case "stripe-changed":
        return _objectSpread2(_objectSpread2({}, cart), {}, {
          stripe: action.stripe
        });
      default:
        return cart;
    }
  }
  var cartValuesInitialState = {
    cartDetails: {},
    totalPrice: 0,
    cartCount: 0
  };
  function Entry(productData2, quantity, currency, language) {
    return _objectSpread2(_objectSpread2({}, productData2), {}, {
      quantity,
      get value() {
        return this.price * this.quantity;
      },
      get formattedValue() {
        return formatCurrencyString({
          value: this.value,
          currency,
          language
        });
      }
    });
  }
  function cartValuesReducer(state2, action) {
    function createEntry(product, count) {
      var entry = Entry(product, count, action.currency, action.language);
      return {
        cartDetails: _objectSpread2(_objectSpread2({}, state2.cartDetails), {}, {
          [product.sku]: entry
        }),
        totalPrice: state2.totalPrice + product.price * count,
        cartCount: state2.cartCount + count
      };
    }
    function updateEntry(sku, count) {
      var cartDetails = _objectSpread2({}, state2.cartDetails);
      var entry = cartDetails[sku];
      if (entry.quantity + count <= 0)
        return removeEntry(sku);
      cartDetails[sku] = Entry(entry, entry.quantity + count, action.currency, action.language);
      return {
        cartDetails,
        totalPrice: state2.totalPrice + entry.price * count,
        cartCount: state2.cartCount + count
      };
    }
    function removeEntry(sku) {
      var cartDetails = _objectSpread2({}, state2.cartDetails);
      var totalPrice = state2.totalPrice - cartDetails[sku].value;
      var cartCount = state2.cartCount - cartDetails[sku].quantity;
      delete cartDetails[sku];
      return {
        cartDetails,
        totalPrice,
        cartCount
      };
    }
    function updateQuantity(sku, quantity) {
      var entry = state2.cartDetails[sku];
      return updateEntry(sku, quantity - entry.quantity);
    }
    switch (action.type) {
      case "add-item-to-cart":
        if (action.count <= 0)
          break;
        if (action.product.sku in state2.cartDetails)
          return updateEntry(action.product.sku, action.count);
        return createEntry(action.product, action.count);
      case "increment-item":
        if (action.count <= 0)
          break;
        if (action.sku in state2.cartDetails)
          return updateEntry(action.sku, action.count);
        break;
      case "decrement-item":
        if (action.count <= 0)
          break;
        if (action.sku in state2.cartDetails)
          return updateEntry(action.sku, -action.count);
        break;
      case "set-item-quantity":
        if (action.count < 0)
          break;
        if (action.sku in state2.cartDetails)
          return updateQuantity(action.sku, action.quantity);
        break;
      case "remove-item-from-cart":
        if (action.sku in state2.cartDetails)
          return removeEntry(action.sku);
        break;
      case "clear-cart":
        return cartValuesInitialState;
      default:
        return state2;
    }
    console.warn("Invalid action arguments", action);
    return state2;
  }
  var CartContext = (0, import_react5.createContext)([_objectSpread2({
    lastClicked: "",
    shouldDisplayCart: false
  }, cartValuesInitialState), () => {
  }]);
  var CartProvider = (_ref) => {
    var {
      children,
      mode,
      stripe,
      successUrl,
      cancelUrl,
      currency,
      language = isClient ? navigator.language : "en-US",
      billingAddressCollection = false,
      allowedCountries = null
    } = _ref;
    var [cart, cartDispatch] = (0, import_react5.useReducer)(cartReducer, cartInitialState);
    (0, import_react5.useEffect)(() => {
      cartDispatch({
        type: "stripe-changed",
        stripe
      });
    }, [stripe]);
    var [cartValues, cartValuesDispatch] = useLocalStorageReducer("cart-values", cartValuesReducer, cartValuesInitialState);
    var contextValue = (0, import_react5.useMemo)(() => [_objectSpread2(_objectSpread2(_objectSpread2({}, cart), cartValues), {}, {
      mode,
      successUrl,
      cancelUrl,
      currency,
      language,
      billingAddressCollection,
      allowedCountries
    }), (action) => {
      cartDispatch(action);
      cartValuesDispatch(_objectSpread2(_objectSpread2({}, action), {}, {
        currency,
        language
      }));
    }], [cart, cartDispatch, cartValues, cartValuesDispatch, mode, successUrl, cancelUrl, currency, language, billingAddressCollection, allowedCountries]);
    return /* @__PURE__ */ import_react5.default.createElement(CartContext.Provider, {
      value: contextValue
    }, children);
  };
  var useShoppingCart = () => {
    var [cart, dispatch] = (0, import_react5.useContext)(CartContext);
    var {
      lastClicked,
      shouldDisplayCart,
      cartCount,
      cartDetails,
      totalPrice,
      currency,
      language
    } = cart;
    var addItem = function addItem2(product) {
      var count = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      return dispatch({
        type: "add-item-to-cart",
        product,
        count
      });
    };
    var removeItem = (sku) => dispatch({
      type: "remove-item-from-cart",
      sku
    });
    var setItemQuantity = (sku, quantity) => dispatch({
      type: "set-item-quantity",
      sku,
      quantity
    });
    var incrementItem = function incrementItem2(sku) {
      var count = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      return dispatch({
        type: "increment-item",
        sku,
        count
      });
    };
    var decrementItem = function decrementItem2(sku) {
      var count = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      return dispatch({
        type: "decrement-item",
        sku,
        count
      });
    };
    var clearCart = () => dispatch({
      type: "clear-cart"
    });
    var storeLastClicked = (sku) => dispatch({
      type: "store-last-clicked",
      sku
    });
    var handleCartClick = () => dispatch({
      type: "cart-click"
    });
    var handleCartHover = () => dispatch({
      type: "cart-hover"
    });
    var handleCloseCart = () => dispatch({
      type: "close-cart"
    });
    var redirectToCheckout = checkoutHandler(cart, {
      modes: ["client-only", "checkout-session"],
      stripe(stripe, options) {
        return stripe.redirectToCheckout(options);
      }
    });
    var checkoutSingleItem = checkoutHandler(cart, {
      modes: ["client-only"],
      stripe(stripe, options, _ref2) {
        var {
          sku,
          quantity = 1
        } = _ref2;
        options.lineItems = [{
          price: sku,
          quantity
        }];
        return stripe.redirectToCheckout(options);
      }
    });
    return {
      cartDetails,
      cartCount,
      totalPrice,
      get formattedTotalPrice() {
        return formatCurrencyString({
          value: totalPrice,
          currency,
          language
        });
      },
      addItem,
      removeItem,
      setItemQuantity,
      incrementItem,
      decrementItem,
      clearCart,
      lastClicked,
      storeLastClicked,
      shouldDisplayCart,
      handleCartClick,
      handleCartHover,
      handleCloseCart,
      redirectToCheckout,
      checkoutSingleItem
    };
  };

  // ns-hugo:/mnt/data/git/shop/assets/components/product.jsx
  var Product = (product) => {
    const { addItem } = useShoppingCart();
    const { name, price, image, currency } = product;
    return /* @__PURE__ */ jsx$1(
      Flex,
      {
        sx: {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }
      },
      /* @__PURE__ */ jsx$1(Image, { src: image }),
      /* @__PURE__ */ jsx$1(Box, null, /* @__PURE__ */ jsx$1("p", null, name), /* @__PURE__ */ jsx$1("p", null, formatCurrencyString({ value: price, currency }))),
      /* @__PURE__ */ jsx$1(Button, { onClick: () => addItem(product), backgroundColor: "black" }, "Add To Cart")
    );
  };
  var product_default = Product;

  // ns-hugo:/mnt/data/git/shop/assets/components/products.jsx
  var Products = ({ products }) => {
    return /* @__PURE__ */ jsx$1(Grid, { columns: 2 }, products.map((product) => /* @__PURE__ */ jsx$1(product_default, { key: product.sku, ...product })));
  };
  var products_default = Products;

  // ns-hugo:/mnt/data/git/shop/assets/components/cart-display.jsx
  var CartDisplay = () => {
    const {
      cartDetails,
      cartCount,
      formattedTotalPrice,
      redirectToCheckout,
      clearCart,
      setItemQuantity
    } = useShoppingCart();
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("transform to lineitems:", cartDetails);
      const lineItems = [];
      for (const sku in cartDetails)
        lineItems.push({ price: sku, quantity: cartDetails[sku].quantity });
      const options = {
        mode: "payment",
        lineItems,
        successUrl: `${"https://shop.thadhughes.xyz"}/stripe/success`,
        cancelUrl: `${"https://shop.thadhughes.xyz"}/stripe/cancel`,
        billingAddressCollection: false ? "required" : "auto",
        submitType: "auto"
      };
      console.log("redirecting to Stripe for payment", options);
      redirectToCheckout(options);
    };
    if (Object.keys(cartDetails).length === 0) {
      return /* @__PURE__ */ jsx$1(Box, { sx: { textAlign: "center" } }, /* @__PURE__ */ jsx$1("h2", null, "Shopping Cart Display Panel"), /* @__PURE__ */ jsx$1("h3", null, "No items in cart"));
    } else {
      return /* @__PURE__ */ jsx$1(
        Flex,
        {
          sx: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }
        },
        /* @__PURE__ */ jsx$1("h2", null, "Shopping Cart Display Panel"),
        Object.keys(cartDetails).map((item) => {
          const cartItem = cartDetails[item];
          const { name, sku, quantity } = cartItem;
          return /* @__PURE__ */ jsx$1(
            Flex,
            {
              key: cartItem.sku,
              sx: {
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%"
              }
            },
            /* @__PURE__ */ jsx$1(Flex, { sx: { flexDirection: "column", alignItems: "center" } }, /* @__PURE__ */ jsx$1(Image, { sx: { width: 100 }, src: cartItem.image }), /* @__PURE__ */ jsx$1("p", null, name)),
            /* @__PURE__ */ jsx$1(
              Input,
              {
                type: "number",
                max: 99,
                sx: { width: 60 },
                defaultValue: quantity,
                onChange: (e) => {
                  const { value } = e.target;
                  setItemQuantity(sku, value);
                }
              }
            )
          );
        }),
        /* @__PURE__ */ jsx$1("h3", null, "Total Items in Cart: ", cartCount),
        /* @__PURE__ */ jsx$1("h3", null, "Total Price: ", formattedTotalPrice),
        /* @__PURE__ */ jsx$1("h4", null, "The cart's total value must exceed .3 GBP (or equivalent) or nothing will happen!"),
        /* @__PURE__ */ jsx$1(Button, { sx: { backgroundColor: "black" }, onClick: handleSubmit }, "Checkout"),
        /* @__PURE__ */ jsx$1(Button, { sx: { backgroundColor: "black" }, onClick: () => clearCart() }, "Clear Cart Items")
      );
    }
  };
  var cart_display_default = CartDisplay;

  // ns-hugo:/mnt/data/git/shop/assets/App.jsx
  var countryisofromcurrencyiso = ["USD".slice(0, -1)];
  var stripePromise2 = loadStripe("pk_test_51PITkXK8ZtNpNqFpYRMxQ1GztvJspk1DzRC8LOVvN36DhGvnfupEo5j8W1wA12P6bKBF7OzPHWugmiURxoVF4GAt00yQbBcLMc");
  var App = () => {
    return /* @__PURE__ */ jsx$1(
      CartProvider,
      {
        mode: "client-only",
        stripe: stripePromise2,
        allowedCountries: countryisofromcurrencyiso,
        billingAddressCollection: false,
        successUrl: "https://shop.thadhughes.xyz/stripe/success",
        cancelUrl: "https://shop.thadhughes.xyz/stripe/cancel",
        currency: "USD"
      },
      /* @__PURE__ */ jsx$1(Flex, { sx: { justifyContent: "space-evenly" } }, /* @__PURE__ */ jsx$1(products_default, { products: productData }), /* @__PURE__ */ jsx$1(cart_display_default, null))
    );
  };
  var App_default = App;

  // <stdin>
  import_react_dom.default.render(
    React3.createElement(App_default, null),
    document.getElementById("react")
  );
})();
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react/cjs/react.production.min.js:
  (** @license React v16.13.1
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (** @license React v0.19.1
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (** @license React v16.13.1
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
