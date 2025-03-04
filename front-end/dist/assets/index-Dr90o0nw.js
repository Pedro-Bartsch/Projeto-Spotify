(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && s(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function s(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = u(c);
    fetch(c.href, d);
  }
})();
function vE(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
function uf(o) {
  if (o.__esModule) return o;
  var l = o.default;
  if (typeof l == "function") {
    var u = function s() {
      return this instanceof s
        ? Reflect.construct(l, arguments, this.constructor)
        : l.apply(this, arguments);
    };
    u.prototype = l.prototype;
  } else u = {};
  return (
    Object.defineProperty(u, "__esModule", { value: !0 }),
    Object.keys(o).forEach(function (s) {
      var c = Object.getOwnPropertyDescriptor(o, s);
      Object.defineProperty(
        u,
        s,
        c.get
          ? c
          : {
              enumerable: !0,
              get: function () {
                return o[s];
              },
            }
      );
    }),
    u
  );
}
var jh = { exports: {} },
  Pc = {},
  Hh = { exports: {} },
  Vu = { exports: {} };
Vu.exports;
var WS;
function uA() {
  return (
    WS ||
      ((WS = 1),
      (function (o, l) {
        /**
         * @license React
         * react.development.js
         *
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ (function () {
          function u(p, O) {
            Object.defineProperty(d.prototype, p, {
              get: function () {
                console.warn(
                  "%s(...) is deprecated in plain JavaScript React classes. %s",
                  O[0],
                  O[1]
                );
              },
            });
          }
          function s(p) {
            return p === null || typeof p != "object"
              ? null
              : ((p = (So && p[So]) || p["@@iterator"]),
                typeof p == "function" ? p : null);
          }
          function c(p, O) {
            p =
              ((p = p.constructor) && (p.displayName || p.name)) ||
              "ReactClass";
            var G = p + "." + O;
            ea[G] ||
              (console.error(
                "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
                O,
                p
              ),
              (ea[G] = !0));
          }
          function d(p, O, G) {
            (this.props = p),
              (this.context = O),
              (this.refs = ce),
              (this.updater = G || A);
          }
          function h() {}
          function y(p, O, G) {
            (this.props = p),
              (this.context = O),
              (this.refs = ce),
              (this.updater = G || A);
          }
          function v(p) {
            return "" + p;
          }
          function S(p) {
            try {
              v(p);
              var O = !1;
            } catch {
              O = !0;
            }
            if (O) {
              O = console;
              var G = O.error,
                ee =
                  (typeof Symbol == "function" &&
                    Symbol.toStringTag &&
                    p[Symbol.toStringTag]) ||
                  p.constructor.name ||
                  "Object";
              return (
                G.call(
                  O,
                  "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
                  ee
                ),
                v(p)
              );
            }
          }
          function R(p) {
            if (p == null) return null;
            if (typeof p == "function")
              return p.$$typeof === Ae ? null : p.displayName || p.name || null;
            if (typeof p == "string") return p;
            switch (p) {
              case Ue:
                return "Fragment";
              case Ne:
                return "Portal";
              case _e:
                return "Profiler";
              case Ve:
                return "StrictMode";
              case Ht:
                return "Suspense";
              case jn:
                return "SuspenseList";
            }
            if (typeof p == "object")
              switch (
                (typeof p.tag == "number" &&
                  console.error(
                    "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
                  ),
                p.$$typeof)
              ) {
                case Q:
                  return (p.displayName || "Context") + ".Provider";
                case ot:
                  return (p._context.displayName || "Context") + ".Consumer";
                case St:
                  var O = p.render;
                  return (
                    (p = p.displayName),
                    p ||
                      ((p = O.displayName || O.name || ""),
                      (p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef")),
                    p
                  );
                case Ya:
                  return (
                    (O = p.displayName || null),
                    O !== null ? O : R(p.type) || "Memo"
                  );
                case We:
                  (O = p._payload), (p = p._init);
                  try {
                    return R(p(O));
                  } catch {}
              }
            return null;
          }
          function T(p) {
            return (
              typeof p == "string" ||
              typeof p == "function" ||
              p === Ue ||
              p === _e ||
              p === Ve ||
              p === Ht ||
              p === jn ||
              p === Jr ||
              (typeof p == "object" &&
                p !== null &&
                (p.$$typeof === We ||
                  p.$$typeof === Ya ||
                  p.$$typeof === Q ||
                  p.$$typeof === ot ||
                  p.$$typeof === St ||
                  p.$$typeof === Ut ||
                  p.getModuleId !== void 0))
            );
          }
          function E() {}
          function N() {
            if (It === 0) {
              (ta = console.log),
                (on = console.info),
                (Tn = console.warn),
                (mn = console.error),
                (ci = console.group),
                (fi = console.groupCollapsed),
                (di = console.groupEnd);
              var p = {
                configurable: !0,
                enumerable: !0,
                value: E,
                writable: !0,
              };
              Object.defineProperties(console, {
                info: p,
                log: p,
                warn: p,
                error: p,
                group: p,
                groupCollapsed: p,
                groupEnd: p,
              });
            }
            It++;
          }
          function D() {
            if ((It--, It === 0)) {
              var p = { configurable: !0, enumerable: !0, writable: !0 };
              Object.defineProperties(console, {
                log: ie({}, p, { value: ta }),
                info: ie({}, p, { value: on }),
                warn: ie({}, p, { value: Tn }),
                error: ie({}, p, { value: mn }),
                group: ie({}, p, { value: ci }),
                groupCollapsed: ie({}, p, { value: fi }),
                groupEnd: ie({}, p, { value: di }),
              });
            }
            0 > It &&
              console.error(
                "disabledDepth fell below zero. This is a bug in React. Please file an issue."
              );
          }
          function j(p) {
            if (el === void 0)
              try {
                throw Error();
              } catch (G) {
                var O = G.stack.trim().match(/\n( *(at )?)/);
                (el = (O && O[1]) || ""),
                  (mi =
                    -1 <
                    G.stack.indexOf(`
    at`)
                      ? " (<anonymous>)"
                      : -1 < G.stack.indexOf("@")
                      ? "@unknown:0:0"
                      : "");
              }
            return (
              `
` +
              el +
              p +
              mi
            );
          }
          function M(p, O) {
            if (!p || tl) return "";
            var G = hi.get(p);
            if (G !== void 0) return G;
            (tl = !0),
              (G = Error.prepareStackTrace),
              (Error.prepareStackTrace = void 0);
            var ee = null;
            (ee = Ee.H), (Ee.H = null), N();
            try {
              var se = {
                DetermineComponentFrameRoot: function () {
                  try {
                    if (O) {
                      var Rn = function () {
                        throw Error();
                      };
                      if (
                        (Object.defineProperty(Rn.prototype, "props", {
                          set: function () {
                            throw Error();
                          },
                        }),
                        typeof Reflect == "object" && Reflect.construct)
                      ) {
                        try {
                          Reflect.construct(Rn, []);
                        } catch (kn) {
                          var na = kn;
                        }
                        Reflect.construct(p, [], Rn);
                      } else {
                        try {
                          Rn.call();
                        } catch (kn) {
                          na = kn;
                        }
                        p.call(Rn.prototype);
                      }
                    } else {
                      try {
                        throw Error();
                      } catch (kn) {
                        na = kn;
                      }
                      (Rn = p()) &&
                        typeof Rn.catch == "function" &&
                        Rn.catch(function () {});
                    }
                  } catch (kn) {
                    if (kn && na && typeof kn.stack == "string")
                      return [kn.stack, na.stack];
                  }
                  return [null, null];
                },
              };
              se.DetermineComponentFrameRoot.displayName =
                "DetermineComponentFrameRoot";
              var ge = Object.getOwnPropertyDescriptor(
                se.DetermineComponentFrameRoot,
                "name"
              );
              ge &&
                ge.configurable &&
                Object.defineProperty(se.DetermineComponentFrameRoot, "name", {
                  value: "DetermineComponentFrameRoot",
                });
              var re = se.DetermineComponentFrameRoot(),
                Je = re[0],
                Fe = re[1];
              if (Je && Fe) {
                var ft = Je.split(`
`),
                  kt = Fe.split(`
`);
                for (
                  re = ge = 0;
                  ge < ft.length &&
                  !ft[ge].includes("DetermineComponentFrameRoot");

                )
                  ge++;
                for (
                  ;
                  re < kt.length &&
                  !kt[re].includes("DetermineComponentFrameRoot");

                )
                  re++;
                if (ge === ft.length || re === kt.length)
                  for (
                    ge = ft.length - 1, re = kt.length - 1;
                    1 <= ge && 0 <= re && ft[ge] !== kt[re];

                  )
                    re--;
                for (; 1 <= ge && 0 <= re; ge--, re--)
                  if (ft[ge] !== kt[re]) {
                    if (ge !== 1 || re !== 1)
                      do
                        if ((ge--, re--, 0 > re || ft[ge] !== kt[re])) {
                          var ya =
                            `
` + ft[ge].replace(" at new ", " at ");
                          return (
                            p.displayName &&
                              ya.includes("<anonymous>") &&
                              (ya = ya.replace("<anonymous>", p.displayName)),
                            typeof p == "function" && hi.set(p, ya),
                            ya
                          );
                        }
                      while (1 <= ge && 0 <= re);
                    break;
                  }
              }
            } finally {
              (tl = !1), (Ee.H = ee), D(), (Error.prepareStackTrace = G);
            }
            return (
              (ft = (ft = p ? p.displayName || p.name : "") ? j(ft) : ""),
              typeof p == "function" && hi.set(p, ft),
              ft
            );
          }
          function z(p) {
            if (p == null) return "";
            if (typeof p == "function") {
              var O = p.prototype;
              return M(p, !(!O || !O.isReactComponent));
            }
            if (typeof p == "string") return j(p);
            switch (p) {
              case Ht:
                return j("Suspense");
              case jn:
                return j("SuspenseList");
            }
            if (typeof p == "object")
              switch (p.$$typeof) {
                case St:
                  return (p = M(p.render, !1)), p;
                case Ya:
                  return z(p.type);
                case We:
                  (O = p._payload), (p = p._init);
                  try {
                    return z(p(O));
                  } catch {}
              }
            return "";
          }
          function H() {
            var p = Ee.A;
            return p === null ? null : p.getOwner();
          }
          function ae(p) {
            if (Yt.call(p, "key")) {
              var O = Object.getOwnPropertyDescriptor(p, "key").get;
              if (O && O.isReactWarning) return !1;
            }
            return p.key !== void 0;
          }
          function X(p, O) {
            function G() {
              ma ||
                ((ma = !0),
                console.error(
                  "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
                  O
                ));
            }
            (G.isReactWarning = !0),
              Object.defineProperty(p, "key", { get: G, configurable: !0 });
          }
          function ye() {
            var p = R(this.type);
            return (
              Eo[p] ||
                ((Eo[p] = !0),
                console.error(
                  "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
                )),
              (p = this.props.ref),
              p !== void 0 ? p : null
            );
          }
          function Te(p, O, G, ee, se, ge) {
            return (
              (G = ge.ref),
              (p = { $$typeof: Re, type: p, key: O, props: ge, _owner: se }),
              (G !== void 0 ? G : null) !== null
                ? Object.defineProperty(p, "ref", { enumerable: !1, get: ye })
                : Object.defineProperty(p, "ref", {
                    enumerable: !1,
                    value: null,
                  }),
              (p._store = {}),
              Object.defineProperty(p._store, "validated", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(p, "_debugInfo", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: null,
              }),
              Object.freeze && (Object.freeze(p.props), Object.freeze(p)),
              p
            );
          }
          function I(p, O) {
            return (
              (O = Te(p.type, O, void 0, void 0, p._owner, p.props)),
              (O._store.validated = p._store.validated),
              O
            );
          }
          function de(p, O) {
            if (typeof p == "object" && p && p.$$typeof !== pi) {
              if (Ke(p))
                for (var G = 0; G < p.length; G++) {
                  var ee = p[G];
                  ue(ee) && Oe(ee, O);
                }
              else if (ue(p)) p._store && (p._store.validated = 1);
              else if (
                ((G = s(p)),
                typeof G == "function" &&
                  G !== p.entries &&
                  ((G = G.call(p)), G !== p))
              )
                for (; !(p = G.next()).done; ) ue(p.value) && Oe(p.value, O);
            }
          }
          function ue(p) {
            return typeof p == "object" && p !== null && p.$$typeof === Re;
          }
          function Oe(p, O) {
            if (
              p._store &&
              !p._store.validated &&
              p.key == null &&
              ((p._store.validated = 1), (O = $e(O)), !qa[O])
            ) {
              qa[O] = !0;
              var G = "";
              p &&
                p._owner != null &&
                p._owner !== H() &&
                ((G = null),
                typeof p._owner.tag == "number"
                  ? (G = R(p._owner.type))
                  : typeof p._owner.name == "string" && (G = p._owner.name),
                (G = " It was passed a child from " + G + "."));
              var ee = Ee.getCurrentStack;
              (Ee.getCurrentStack = function () {
                var se = z(p.type);
                return ee && (se += ee() || ""), se;
              }),
                console.error(
                  'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
                  O,
                  G
                ),
                (Ee.getCurrentStack = ee);
            }
          }
          function $e(p) {
            var O = "",
              G = H();
            return (
              G &&
                (G = R(G.type)) &&
                (O =
                  `

Check the render method of \`` +
                  G +
                  "`."),
              O ||
                ((p = R(p)) &&
                  (O =
                    `

Check the top-level render call using <` +
                    p +
                    ">.")),
              O
            );
          }
          function xe(p) {
            var O = { "=": "=0", ":": "=2" };
            return (
              "$" +
              p.replace(/[=:]/g, function (G) {
                return O[G];
              })
            );
          }
          function De(p, O) {
            return typeof p == "object" && p !== null && p.key != null
              ? (S(p.key), xe("" + p.key))
              : O.toString(36);
          }
          function J() {}
          function et(p) {
            switch (p.status) {
              case "fulfilled":
                return p.value;
              case "rejected":
                throw p.reason;
              default:
                switch (
                  (typeof p.status == "string"
                    ? p.then(J, J)
                    : ((p.status = "pending"),
                      p.then(
                        function (O) {
                          p.status === "pending" &&
                            ((p.status = "fulfilled"), (p.value = O));
                        },
                        function (O) {
                          p.status === "pending" &&
                            ((p.status = "rejected"), (p.reason = O));
                        }
                      )),
                  p.status)
                ) {
                  case "fulfilled":
                    return p.value;
                  case "rejected":
                    throw p.reason;
                }
            }
            throw p;
          }
          function Z(p, O, G, ee, se) {
            var ge = typeof p;
            (ge === "undefined" || ge === "boolean") && (p = null);
            var re = !1;
            if (p === null) re = !0;
            else
              switch (ge) {
                case "bigint":
                case "string":
                case "number":
                  re = !0;
                  break;
                case "object":
                  switch (p.$$typeof) {
                    case Re:
                    case Ne:
                      re = !0;
                      break;
                    case We:
                      return (re = p._init), Z(re(p._payload), O, G, ee, se);
                  }
              }
            if (re) {
              (re = p), (se = se(re));
              var Je = ee === "" ? "." + De(re, 0) : ee;
              return (
                Ke(se)
                  ? ((G = ""),
                    Je != null && (G = Je.replace(pa, "$&/") + "/"),
                    Z(se, O, G, "", function (ft) {
                      return ft;
                    }))
                  : se != null &&
                    (ue(se) &&
                      (se.key != null &&
                        ((re && re.key === se.key) || S(se.key)),
                      (G = I(
                        se,
                        G +
                          (se.key == null || (re && re.key === se.key)
                            ? ""
                            : ("" + se.key).replace(pa, "$&/") + "/") +
                          Je
                      )),
                      ee !== "" &&
                        re != null &&
                        ue(re) &&
                        re.key == null &&
                        re._store &&
                        !re._store.validated &&
                        (G._store.validated = 2),
                      (se = G)),
                    O.push(se)),
                1
              );
            }
            if (((re = 0), (Je = ee === "" ? "." : ee + ":"), Ke(p)))
              for (var Fe = 0; Fe < p.length; Fe++)
                (ee = p[Fe]),
                  (ge = Je + De(ee, Fe)),
                  (re += Z(ee, O, G, ge, se));
            else if (((Fe = s(p)), typeof Fe == "function"))
              for (
                Fe === p.entries &&
                  (wt ||
                    console.warn(
                      "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
                    ),
                  (wt = !0)),
                  p = Fe.call(p),
                  Fe = 0;
                !(ee = p.next()).done;

              )
                (ee = ee.value),
                  (ge = Je + De(ee, Fe++)),
                  (re += Z(ee, O, G, ge, se));
            else if (ge === "object") {
              if (typeof p.then == "function") return Z(et(p), O, G, ee, se);
              throw (
                ((O = String(p)),
                Error(
                  "Objects are not valid as a React child (found: " +
                    (O === "[object Object]"
                      ? "object with keys {" + Object.keys(p).join(", ") + "}"
                      : O) +
                    "). If you meant to render a collection of children, use an array instead."
                ))
              );
            }
            return re;
          }
          function pe(p, O, G) {
            if (p == null) return p;
            var ee = [],
              se = 0;
            return (
              Z(p, ee, "", "", function (ge) {
                return O.call(G, ge, se++);
              }),
              ee
            );
          }
          function Ce(p) {
            if (p._status === -1) {
              var O = p._result;
              (O = O()),
                O.then(
                  function (G) {
                    (p._status === 0 || p._status === -1) &&
                      ((p._status = 1), (p._result = G));
                  },
                  function (G) {
                    (p._status === 0 || p._status === -1) &&
                      ((p._status = 2), (p._result = G));
                  }
                ),
                p._status === -1 && ((p._status = 0), (p._result = O));
            }
            if (p._status === 1)
              return (
                (O = p._result),
                O === void 0 &&
                  console.error(
                    `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
                    O
                  ),
                "default" in O ||
                  console.error(
                    `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
                    O
                  ),
                O.default
              );
            throw p._result;
          }
          function Se() {
            var p = Ee.H;
            return (
              p === null &&
                console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),
              p
            );
          }
          function q() {}
          function F(p) {
            if (To === null)
              try {
                var O = ("require" + Math.random()).slice(0, 7);
                To = (o && o[O]).call(o, "timers").setImmediate;
              } catch {
                To = function (ee) {
                  $a === !1 &&
                    (($a = !0),
                    typeof MessageChannel > "u" &&
                      console.error(
                        "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                      ));
                  var se = new MessageChannel();
                  (se.port1.onmessage = ee), se.port2.postMessage(void 0);
                };
              }
            return To(p);
          }
          function oe(p) {
            return 1 < p.length && typeof AggregateError == "function"
              ? new AggregateError(p)
              : p[0];
          }
          function be(p, O) {
            O !== or - 1 &&
              console.error(
                "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
              ),
              (or = O);
          }
          function me(p, O, G) {
            var ee = Ee.actQueue;
            if (ee !== null)
              if (ee.length !== 0)
                try {
                  we(ee),
                    F(function () {
                      return me(p, O, G);
                    });
                  return;
                } catch (se) {
                  Ee.thrownErrors.push(se);
                }
              else Ee.actQueue = null;
            0 < Ee.thrownErrors.length
              ? ((ee = oe(Ee.thrownErrors)),
                (Ee.thrownErrors.length = 0),
                G(ee))
              : O(p);
          }
          function we(p) {
            if (!Ro) {
              Ro = !0;
              var O = 0;
              try {
                for (; O < p.length; O++) {
                  var G = p[O];
                  do {
                    Ee.didUsePromise = !1;
                    var ee = G(!1);
                    if (ee !== null) {
                      if (Ee.didUsePromise) {
                        (p[O] = G), p.splice(0, O);
                        return;
                      }
                      G = ee;
                    } else break;
                  } while (!0);
                }
                p.length = 0;
              } catch (se) {
                p.splice(0, O + 1), Ee.thrownErrors.push(se);
              } finally {
                Ro = !1;
              }
            }
          }
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
              "function" &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
          var Re = Symbol.for("react.transitional.element"),
            Ne = Symbol.for("react.portal"),
            Ue = Symbol.for("react.fragment"),
            Ve = Symbol.for("react.strict_mode"),
            _e = Symbol.for("react.profiler"),
            ot = Symbol.for("react.consumer"),
            Q = Symbol.for("react.context"),
            St = Symbol.for("react.forward_ref"),
            Ht = Symbol.for("react.suspense"),
            jn = Symbol.for("react.suspense_list"),
            Ya = Symbol.for("react.memo"),
            We = Symbol.for("react.lazy"),
            Jr = Symbol.for("react.offscreen"),
            So = Symbol.iterator,
            ea = {},
            A = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function (p) {
                c(p, "forceUpdate");
              },
              enqueueReplaceState: function (p) {
                c(p, "replaceState");
              },
              enqueueSetState: function (p) {
                c(p, "setState");
              },
            },
            ie = Object.assign,
            ce = {};
          Object.freeze(ce),
            (d.prototype.isReactComponent = {}),
            (d.prototype.setState = function (p, O) {
              if (typeof p != "object" && typeof p != "function" && p != null)
                throw Error(
                  "takes an object of state variables to update or a function which returns an object of state variables."
                );
              this.updater.enqueueSetState(this, p, O, "setState");
            }),
            (d.prototype.forceUpdate = function (p) {
              this.updater.enqueueForceUpdate(this, p, "forceUpdate");
            });
          var je = {
              isMounted: [
                "isMounted",
                "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
              ],
              replaceState: [
                "replaceState",
                "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
              ],
            },
            xt;
          for (xt in je) je.hasOwnProperty(xt) && u(xt, je[xt]);
          (h.prototype = d.prototype),
            (je = y.prototype = new h()),
            (je.constructor = y),
            ie(je, d.prototype),
            (je.isPureReactComponent = !0);
          var Ke = Array.isArray,
            Ae = Symbol.for("react.client.reference"),
            Ee = {
              H: null,
              A: null,
              T: null,
              S: null,
              actQueue: null,
              isBatchingLegacy: !1,
              didScheduleLegacyUpdate: !1,
              didUsePromise: !1,
              thrownErrors: [],
              getCurrentStack: null,
            },
            Yt = Object.prototype.hasOwnProperty,
            Ut = Symbol.for("react.client.reference"),
            It = 0,
            ta,
            on,
            Tn,
            mn,
            ci,
            fi,
            di;
          E.__reactDisabledLog = !0;
          var el,
            mi,
            tl = !1,
            hi = new (typeof WeakMap == "function" ? WeakMap : Map)(),
            pi = Symbol.for("react.client.reference"),
            ma,
            ha,
            Eo = {},
            qa = {},
            wt = !1,
            pa = /\/+/g,
            Pa =
              typeof reportError == "function"
                ? reportError
                : function (p) {
                    if (
                      typeof window == "object" &&
                      typeof window.ErrorEvent == "function"
                    ) {
                      var O = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message:
                          typeof p == "object" &&
                          p !== null &&
                          typeof p.message == "string"
                            ? String(p.message)
                            : String(p),
                        error: p,
                      });
                      if (!window.dispatchEvent(O)) return;
                    } else if (
                      typeof process == "object" &&
                      typeof process.emit == "function"
                    ) {
                      process.emit("uncaughtException", p);
                      return;
                    }
                    console.error(p);
                  },
            $a = !1,
            To = null,
            or = 0,
            Ga = !1,
            Ro = !1,
            Hn =
              typeof queueMicrotask == "function"
                ? function (p) {
                    queueMicrotask(function () {
                      return queueMicrotask(p);
                    });
                  }
                : F;
          (l.Children = {
            map: pe,
            forEach: function (p, O, G) {
              pe(
                p,
                function () {
                  O.apply(this, arguments);
                },
                G
              );
            },
            count: function (p) {
              var O = 0;
              return (
                pe(p, function () {
                  O++;
                }),
                O
              );
            },
            toArray: function (p) {
              return (
                pe(p, function (O) {
                  return O;
                }) || []
              );
            },
            only: function (p) {
              if (!ue(p))
                throw Error(
                  "React.Children.only expected to receive a single React element child."
                );
              return p;
            },
          }),
            (l.Component = d),
            (l.Fragment = Ue),
            (l.Profiler = _e),
            (l.PureComponent = y),
            (l.StrictMode = Ve),
            (l.Suspense = Ht),
            (l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
              Ee),
            (l.act = function (p) {
              var O = Ee.actQueue,
                G = or;
              or++;
              var ee = (Ee.actQueue = O !== null ? O : []),
                se = !1;
              try {
                var ge = p();
              } catch (Fe) {
                Ee.thrownErrors.push(Fe);
              }
              if (0 < Ee.thrownErrors.length)
                throw (
                  (be(O, G),
                  (p = oe(Ee.thrownErrors)),
                  (Ee.thrownErrors.length = 0),
                  p)
                );
              if (
                ge !== null &&
                typeof ge == "object" &&
                typeof ge.then == "function"
              ) {
                var re = ge;
                return (
                  Hn(function () {
                    se ||
                      Ga ||
                      ((Ga = !0),
                      console.error(
                        "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
                      ));
                  }),
                  {
                    then: function (Fe, ft) {
                      (se = !0),
                        re.then(
                          function (kt) {
                            if ((be(O, G), G === 0)) {
                              try {
                                we(ee),
                                  F(function () {
                                    return me(kt, Fe, ft);
                                  });
                              } catch (Rn) {
                                Ee.thrownErrors.push(Rn);
                              }
                              if (0 < Ee.thrownErrors.length) {
                                var ya = oe(Ee.thrownErrors);
                                (Ee.thrownErrors.length = 0), ft(ya);
                              }
                            } else Fe(kt);
                          },
                          function (kt) {
                            be(O, G),
                              0 < Ee.thrownErrors.length &&
                                ((kt = oe(Ee.thrownErrors)),
                                (Ee.thrownErrors.length = 0)),
                              ft(kt);
                          }
                        );
                    },
                  }
                );
              }
              var Je = ge;
              if (
                (be(O, G),
                G === 0 &&
                  (we(ee),
                  ee.length !== 0 &&
                    Hn(function () {
                      se ||
                        Ga ||
                        ((Ga = !0),
                        console.error(
                          "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
                        ));
                    }),
                  (Ee.actQueue = null)),
                0 < Ee.thrownErrors.length)
              )
                throw (
                  ((p = oe(Ee.thrownErrors)), (Ee.thrownErrors.length = 0), p)
                );
              return {
                then: function (Fe, ft) {
                  (se = !0),
                    G === 0
                      ? ((Ee.actQueue = ee),
                        F(function () {
                          return me(Je, Fe, ft);
                        }))
                      : Fe(Je);
                },
              };
            }),
            (l.cache = function (p) {
              return function () {
                return p.apply(null, arguments);
              };
            }),
            (l.cloneElement = function (p, O, G) {
              if (p == null)
                throw Error(
                  "The argument must be a React element, but you passed " +
                    p +
                    "."
                );
              var ee = ie({}, p.props),
                se = p.key,
                ge = p._owner;
              if (O != null) {
                var re;
                e: {
                  if (
                    Yt.call(O, "ref") &&
                    (re = Object.getOwnPropertyDescriptor(O, "ref").get) &&
                    re.isReactWarning
                  ) {
                    re = !1;
                    break e;
                  }
                  re = O.ref !== void 0;
                }
                re && (ge = H()), ae(O) && (S(O.key), (se = "" + O.key));
                for (Je in O)
                  !Yt.call(O, Je) ||
                    Je === "key" ||
                    Je === "__self" ||
                    Je === "__source" ||
                    (Je === "ref" && O.ref === void 0) ||
                    (ee[Je] = O[Je]);
              }
              var Je = arguments.length - 2;
              if (Je === 1) ee.children = G;
              else if (1 < Je) {
                re = Array(Je);
                for (var Fe = 0; Fe < Je; Fe++) re[Fe] = arguments[Fe + 2];
                ee.children = re;
              }
              for (
                ee = Te(p.type, se, void 0, void 0, ge, ee), se = 2;
                se < arguments.length;
                se++
              )
                de(arguments[se], ee.type);
              return ee;
            }),
            (l.createContext = function (p) {
              return (
                (p = {
                  $$typeof: Q,
                  _currentValue: p,
                  _currentValue2: p,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                }),
                (p.Provider = p),
                (p.Consumer = { $$typeof: ot, _context: p }),
                (p._currentRenderer = null),
                (p._currentRenderer2 = null),
                p
              );
            }),
            (l.createElement = function (p, O, G) {
              if (T(p))
                for (var ee = 2; ee < arguments.length; ee++)
                  de(arguments[ee], p);
              else {
                if (
                  ((ee = ""),
                  (p === void 0 ||
                    (typeof p == "object" &&
                      p !== null &&
                      Object.keys(p).length === 0)) &&
                    (ee +=
                      " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),
                  p === null)
                )
                  var se = "null";
                else
                  Ke(p)
                    ? (se = "array")
                    : p !== void 0 && p.$$typeof === Re
                    ? ((se = "<" + (R(p.type) || "Unknown") + " />"),
                      (ee =
                        " Did you accidentally export a JSX literal instead of a component?"))
                    : (se = typeof p);
                console.error(
                  "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                  se,
                  ee
                );
              }
              var ge;
              if (((ee = {}), (se = null), O != null))
                for (ge in (ha ||
                  !("__self" in O) ||
                  "key" in O ||
                  ((ha = !0),
                  console.warn(
                    "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
                  )),
                ae(O) && (S(O.key), (se = "" + O.key)),
                O))
                  Yt.call(O, ge) &&
                    ge !== "key" &&
                    ge !== "__self" &&
                    ge !== "__source" &&
                    (ee[ge] = O[ge]);
              var re = arguments.length - 2;
              if (re === 1) ee.children = G;
              else if (1 < re) {
                for (var Je = Array(re), Fe = 0; Fe < re; Fe++)
                  Je[Fe] = arguments[Fe + 2];
                Object.freeze && Object.freeze(Je), (ee.children = Je);
              }
              if (p && p.defaultProps)
                for (ge in ((re = p.defaultProps), re))
                  ee[ge] === void 0 && (ee[ge] = re[ge]);
              return (
                se &&
                  X(
                    ee,
                    typeof p == "function"
                      ? p.displayName || p.name || "Unknown"
                      : p
                  ),
                Te(p, se, void 0, void 0, H(), ee)
              );
            }),
            (l.createRef = function () {
              var p = { current: null };
              return Object.seal(p), p;
            }),
            (l.forwardRef = function (p) {
              p != null && p.$$typeof === Ya
                ? console.error(
                    "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
                  )
                : typeof p != "function"
                ? console.error(
                    "forwardRef requires a render function but was given %s.",
                    p === null ? "null" : typeof p
                  )
                : p.length !== 0 &&
                  p.length !== 2 &&
                  console.error(
                    "forwardRef render functions accept exactly two parameters: props and ref. %s",
                    p.length === 1
                      ? "Did you forget to use the ref parameter?"
                      : "Any additional parameter will be undefined."
                  ),
                p != null &&
                  p.defaultProps != null &&
                  console.error(
                    "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
                  );
              var O = { $$typeof: St, render: p },
                G;
              return (
                Object.defineProperty(O, "displayName", {
                  enumerable: !1,
                  configurable: !0,
                  get: function () {
                    return G;
                  },
                  set: function (ee) {
                    (G = ee),
                      p.name ||
                        p.displayName ||
                        (Object.defineProperty(p, "name", { value: ee }),
                        (p.displayName = ee));
                  },
                }),
                O
              );
            }),
            (l.isValidElement = ue),
            (l.lazy = function (p) {
              return {
                $$typeof: We,
                _payload: { _status: -1, _result: p },
                _init: Ce,
              };
            }),
            (l.memo = function (p, O) {
              T(p) ||
                console.error(
                  "memo: The first argument must be a component. Instead received: %s",
                  p === null ? "null" : typeof p
                ),
                (O = {
                  $$typeof: Ya,
                  type: p,
                  compare: O === void 0 ? null : O,
                });
              var G;
              return (
                Object.defineProperty(O, "displayName", {
                  enumerable: !1,
                  configurable: !0,
                  get: function () {
                    return G;
                  },
                  set: function (ee) {
                    (G = ee),
                      p.name ||
                        p.displayName ||
                        (Object.defineProperty(p, "name", { value: ee }),
                        (p.displayName = ee));
                  },
                }),
                O
              );
            }),
            (l.startTransition = function (p) {
              var O = Ee.T,
                G = {};
              (Ee.T = G), (G._updatedFibers = new Set());
              try {
                var ee = p(),
                  se = Ee.S;
                se !== null && se(G, ee),
                  typeof ee == "object" &&
                    ee !== null &&
                    typeof ee.then == "function" &&
                    ee.then(q, Pa);
              } catch (ge) {
                Pa(ge);
              } finally {
                O === null &&
                  G._updatedFibers &&
                  ((p = G._updatedFibers.size),
                  G._updatedFibers.clear(),
                  10 < p &&
                    console.warn(
                      "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
                    )),
                  (Ee.T = O);
              }
            }),
            (l.unstable_useCacheRefresh = function () {
              return Se().useCacheRefresh();
            }),
            (l.use = function (p) {
              return Se().use(p);
            }),
            (l.useActionState = function (p, O, G) {
              return Se().useActionState(p, O, G);
            }),
            (l.useCallback = function (p, O) {
              return Se().useCallback(p, O);
            }),
            (l.useContext = function (p) {
              var O = Se();
              return (
                p.$$typeof === ot &&
                  console.error(
                    "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
                  ),
                O.useContext(p)
              );
            }),
            (l.useDebugValue = function (p, O) {
              return Se().useDebugValue(p, O);
            }),
            (l.useDeferredValue = function (p, O) {
              return Se().useDeferredValue(p, O);
            }),
            (l.useEffect = function (p, O) {
              return Se().useEffect(p, O);
            }),
            (l.useId = function () {
              return Se().useId();
            }),
            (l.useImperativeHandle = function (p, O, G) {
              return Se().useImperativeHandle(p, O, G);
            }),
            (l.useInsertionEffect = function (p, O) {
              return Se().useInsertionEffect(p, O);
            }),
            (l.useLayoutEffect = function (p, O) {
              return Se().useLayoutEffect(p, O);
            }),
            (l.useMemo = function (p, O) {
              return Se().useMemo(p, O);
            }),
            (l.useOptimistic = function (p, O) {
              return Se().useOptimistic(p, O);
            }),
            (l.useReducer = function (p, O, G) {
              return Se().useReducer(p, O, G);
            }),
            (l.useRef = function (p) {
              return Se().useRef(p);
            }),
            (l.useState = function (p) {
              return Se().useState(p);
            }),
            (l.useSyncExternalStore = function (p, O, G) {
              return Se().useSyncExternalStore(p, O, G);
            }),
            (l.useTransition = function () {
              return Se().useTransition();
            }),
            (l.version = "19.0.0"),
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                Error()
              );
        })();
      })(Vu, Vu.exports)),
    Vu.exports
  );
}
var KS;
function sf() {
  return KS || ((KS = 1), (Hh.exports = uA())), Hh.exports;
}
var JS;
function sA() {
  if (JS) return Pc;
  JS = 1;
  /**
   * @license React
   * react-jsx-dev-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ return (
    (function () {
      function o(A) {
        if (A == null) return null;
        if (typeof A == "function")
          return A.$$typeof === Ce ? null : A.displayName || A.name || null;
        if (typeof A == "string") return A;
        switch (A) {
          case Te:
            return "Fragment";
          case ye:
            return "Portal";
          case de:
            return "Profiler";
          case I:
            return "StrictMode";
          case xe:
            return "Suspense";
          case De:
            return "SuspenseList";
        }
        if (typeof A == "object")
          switch (
            (typeof A.tag == "number" &&
              console.error(
                "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
              ),
            A.$$typeof)
          ) {
            case Oe:
              return (A.displayName || "Context") + ".Provider";
            case ue:
              return (A._context.displayName || "Context") + ".Consumer";
            case $e:
              var ie = A.render;
              return (
                (A = A.displayName),
                A ||
                  ((A = ie.displayName || ie.name || ""),
                  (A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")),
                A
              );
            case J:
              return (
                (ie = A.displayName || null),
                ie !== null ? ie : o(A.type) || "Memo"
              );
            case et:
              (ie = A._payload), (A = A._init);
              try {
                return o(A(ie));
              } catch {}
          }
        return null;
      }
      function l(A) {
        return "" + A;
      }
      function u(A) {
        try {
          l(A);
          var ie = !1;
        } catch {
          ie = !0;
        }
        if (ie) {
          ie = console;
          var ce = ie.error,
            je =
              (typeof Symbol == "function" &&
                Symbol.toStringTag &&
                A[Symbol.toStringTag]) ||
              A.constructor.name ||
              "Object";
          return (
            ce.call(
              ie,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              je
            ),
            l(A)
          );
        }
      }
      function s() {}
      function c() {
        if (me === 0) {
          (we = console.log),
            (Re = console.info),
            (Ne = console.warn),
            (Ue = console.error),
            (Ve = console.group),
            (_e = console.groupCollapsed),
            (ot = console.groupEnd);
          var A = { configurable: !0, enumerable: !0, value: s, writable: !0 };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A,
          });
        }
        me++;
      }
      function d() {
        if ((me--, me === 0)) {
          var A = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: F({}, A, { value: we }),
            info: F({}, A, { value: Re }),
            warn: F({}, A, { value: Ne }),
            error: F({}, A, { value: Ue }),
            group: F({}, A, { value: Ve }),
            groupCollapsed: F({}, A, { value: _e }),
            groupEnd: F({}, A, { value: ot }),
          });
        }
        0 > me &&
          console.error(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue."
          );
      }
      function h(A) {
        if (Q === void 0)
          try {
            throw Error();
          } catch (ce) {
            var ie = ce.stack.trim().match(/\n( *(at )?)/);
            (Q = (ie && ie[1]) || ""),
              (St =
                -1 <
                ce.stack.indexOf(`
    at`)
                  ? " (<anonymous>)"
                  : -1 < ce.stack.indexOf("@")
                  ? "@unknown:0:0"
                  : "");
          }
        return (
          `
` +
          Q +
          A +
          St
        );
      }
      function y(A, ie) {
        if (!A || Ht) return "";
        var ce = jn.get(A);
        if (ce !== void 0) return ce;
        (Ht = !0),
          (ce = Error.prepareStackTrace),
          (Error.prepareStackTrace = void 0);
        var je = null;
        (je = Se.H), (Se.H = null), c();
        try {
          var xt = {
            DetermineComponentFrameRoot: function () {
              try {
                if (ie) {
                  var on = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(on.prototype, "props", {
                      set: function () {
                        throw Error();
                      },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(on, []);
                    } catch (mn) {
                      var Tn = mn;
                    }
                    Reflect.construct(A, [], on);
                  } else {
                    try {
                      on.call();
                    } catch (mn) {
                      Tn = mn;
                    }
                    A.call(on.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (mn) {
                    Tn = mn;
                  }
                  (on = A()) &&
                    typeof on.catch == "function" &&
                    on.catch(function () {});
                }
              } catch (mn) {
                if (mn && Tn && typeof mn.stack == "string")
                  return [mn.stack, Tn.stack];
              }
              return [null, null];
            },
          };
          xt.DetermineComponentFrameRoot.displayName =
            "DetermineComponentFrameRoot";
          var Ke = Object.getOwnPropertyDescriptor(
            xt.DetermineComponentFrameRoot,
            "name"
          );
          Ke &&
            Ke.configurable &&
            Object.defineProperty(xt.DetermineComponentFrameRoot, "name", {
              value: "DetermineComponentFrameRoot",
            });
          var Ae = xt.DetermineComponentFrameRoot(),
            Ee = Ae[0],
            Yt = Ae[1];
          if (Ee && Yt) {
            var Ut = Ee.split(`
`),
              It = Yt.split(`
`);
            for (
              Ae = Ke = 0;
              Ke < Ut.length && !Ut[Ke].includes("DetermineComponentFrameRoot");

            )
              Ke++;
            for (
              ;
              Ae < It.length && !It[Ae].includes("DetermineComponentFrameRoot");

            )
              Ae++;
            if (Ke === Ut.length || Ae === It.length)
              for (
                Ke = Ut.length - 1, Ae = It.length - 1;
                1 <= Ke && 0 <= Ae && Ut[Ke] !== It[Ae];

              )
                Ae--;
            for (; 1 <= Ke && 0 <= Ae; Ke--, Ae--)
              if (Ut[Ke] !== It[Ae]) {
                if (Ke !== 1 || Ae !== 1)
                  do
                    if ((Ke--, Ae--, 0 > Ae || Ut[Ke] !== It[Ae])) {
                      var ta =
                        `
` + Ut[Ke].replace(" at new ", " at ");
                      return (
                        A.displayName &&
                          ta.includes("<anonymous>") &&
                          (ta = ta.replace("<anonymous>", A.displayName)),
                        typeof A == "function" && jn.set(A, ta),
                        ta
                      );
                    }
                  while (1 <= Ke && 0 <= Ae);
                break;
              }
          }
        } finally {
          (Ht = !1), (Se.H = je), d(), (Error.prepareStackTrace = ce);
        }
        return (
          (Ut = (Ut = A ? A.displayName || A.name : "") ? h(Ut) : ""),
          typeof A == "function" && jn.set(A, Ut),
          Ut
        );
      }
      function v(A) {
        if (A == null) return "";
        if (typeof A == "function") {
          var ie = A.prototype;
          return y(A, !(!ie || !ie.isReactComponent));
        }
        if (typeof A == "string") return h(A);
        switch (A) {
          case xe:
            return h("Suspense");
          case De:
            return h("SuspenseList");
        }
        if (typeof A == "object")
          switch (A.$$typeof) {
            case $e:
              return (A = y(A.render, !1)), A;
            case J:
              return v(A.type);
            case et:
              (ie = A._payload), (A = A._init);
              try {
                return v(A(ie));
              } catch {}
          }
        return "";
      }
      function S() {
        var A = Se.A;
        return A === null ? null : A.getOwner();
      }
      function R(A) {
        if (q.call(A, "key")) {
          var ie = Object.getOwnPropertyDescriptor(A, "key").get;
          if (ie && ie.isReactWarning) return !1;
        }
        return A.key !== void 0;
      }
      function T(A, ie) {
        function ce() {
          We ||
            ((We = !0),
            console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              ie
            ));
        }
        (ce.isReactWarning = !0),
          Object.defineProperty(A, "key", { get: ce, configurable: !0 });
      }
      function E() {
        var A = o(this.type);
        return (
          Jr[A] ||
            ((Jr[A] = !0),
            console.error(
              "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
            )),
          (A = this.props.ref),
          A !== void 0 ? A : null
        );
      }
      function N(A, ie, ce, je, xt, Ke) {
        return (
          (ce = Ke.ref),
          (A = { $$typeof: X, type: A, key: ie, props: Ke, _owner: xt }),
          (ce !== void 0 ? ce : null) !== null
            ? Object.defineProperty(A, "ref", { enumerable: !1, get: E })
            : Object.defineProperty(A, "ref", { enumerable: !1, value: null }),
          (A._store = {}),
          Object.defineProperty(A._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(A, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null,
          }),
          Object.freeze && (Object.freeze(A.props), Object.freeze(A)),
          A
        );
      }
      function D(A, ie, ce, je, xt, Ke) {
        if (
          typeof A == "string" ||
          typeof A == "function" ||
          A === Te ||
          A === de ||
          A === I ||
          A === xe ||
          A === De ||
          A === Z ||
          (typeof A == "object" &&
            A !== null &&
            (A.$$typeof === et ||
              A.$$typeof === J ||
              A.$$typeof === Oe ||
              A.$$typeof === ue ||
              A.$$typeof === $e ||
              A.$$typeof === oe ||
              A.getModuleId !== void 0))
        ) {
          var Ae = ie.children;
          if (Ae !== void 0)
            if (je)
              if (be(Ae)) {
                for (je = 0; je < Ae.length; je++) j(Ae[je], A);
                Object.freeze && Object.freeze(Ae);
              } else
                console.error(
                  "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                );
            else j(Ae, A);
        } else
          (Ae = ""),
            (A === void 0 ||
              (typeof A == "object" &&
                A !== null &&
                Object.keys(A).length === 0)) &&
              (Ae +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),
            A === null
              ? (je = "null")
              : be(A)
              ? (je = "array")
              : A !== void 0 && A.$$typeof === X
              ? ((je = "<" + (o(A.type) || "Unknown") + " />"),
                (Ae =
                  " Did you accidentally export a JSX literal instead of a component?"))
              : (je = typeof A),
            console.error(
              "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
              je,
              Ae
            );
        if (q.call(ie, "key")) {
          Ae = o(A);
          var Ee = Object.keys(ie).filter(function (Ut) {
            return Ut !== "key";
          });
          (je =
            0 < Ee.length
              ? "{key: someKey, " + Ee.join(": ..., ") + ": ...}"
              : "{key: someKey}"),
            So[Ae + je] ||
              ((Ee =
                0 < Ee.length ? "{" + Ee.join(": ..., ") + ": ...}" : "{}"),
              console.error(
                `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
                je,
                Ae,
                Ee,
                Ae
              ),
              (So[Ae + je] = !0));
        }
        if (
          ((Ae = null),
          ce !== void 0 && (u(ce), (Ae = "" + ce)),
          R(ie) && (u(ie.key), (Ae = "" + ie.key)),
          "key" in ie)
        ) {
          ce = {};
          for (var Yt in ie) Yt !== "key" && (ce[Yt] = ie[Yt]);
        } else ce = ie;
        return (
          Ae &&
            T(
              ce,
              typeof A == "function" ? A.displayName || A.name || "Unknown" : A
            ),
          N(A, Ae, Ke, xt, S(), ce)
        );
      }
      function j(A, ie) {
        if (typeof A == "object" && A && A.$$typeof !== Ya) {
          if (be(A))
            for (var ce = 0; ce < A.length; ce++) {
              var je = A[ce];
              M(je) && z(je, ie);
            }
          else if (M(A)) A._store && (A._store.validated = 1);
          else if (
            (A === null || typeof A != "object"
              ? (ce = null)
              : ((ce = (pe && A[pe]) || A["@@iterator"]),
                (ce = typeof ce == "function" ? ce : null)),
            typeof ce == "function" &&
              ce !== A.entries &&
              ((ce = ce.call(A)), ce !== A))
          )
            for (; !(A = ce.next()).done; ) M(A.value) && z(A.value, ie);
        }
      }
      function M(A) {
        return typeof A == "object" && A !== null && A.$$typeof === X;
      }
      function z(A, ie) {
        if (
          A._store &&
          !A._store.validated &&
          A.key == null &&
          ((A._store.validated = 1), (ie = H(ie)), !ea[ie])
        ) {
          ea[ie] = !0;
          var ce = "";
          A &&
            A._owner != null &&
            A._owner !== S() &&
            ((ce = null),
            typeof A._owner.tag == "number"
              ? (ce = o(A._owner.type))
              : typeof A._owner.name == "string" && (ce = A._owner.name),
            (ce = " It was passed a child from " + ce + "."));
          var je = Se.getCurrentStack;
          (Se.getCurrentStack = function () {
            var xt = v(A.type);
            return je && (xt += je() || ""), xt;
          }),
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              ie,
              ce
            ),
            (Se.getCurrentStack = je);
        }
      }
      function H(A) {
        var ie = "",
          ce = S();
        return (
          ce &&
            (ce = o(ce.type)) &&
            (ie =
              `

Check the render method of \`` +
              ce +
              "`."),
          ie ||
            ((A = o(A)) &&
              (ie =
                `

Check the top-level render call using <` +
                A +
                ">.")),
          ie
        );
      }
      var ae = sf(),
        X = Symbol.for("react.transitional.element"),
        ye = Symbol.for("react.portal"),
        Te = Symbol.for("react.fragment"),
        I = Symbol.for("react.strict_mode"),
        de = Symbol.for("react.profiler"),
        ue = Symbol.for("react.consumer"),
        Oe = Symbol.for("react.context"),
        $e = Symbol.for("react.forward_ref"),
        xe = Symbol.for("react.suspense"),
        De = Symbol.for("react.suspense_list"),
        J = Symbol.for("react.memo"),
        et = Symbol.for("react.lazy"),
        Z = Symbol.for("react.offscreen"),
        pe = Symbol.iterator,
        Ce = Symbol.for("react.client.reference"),
        Se = ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        q = Object.prototype.hasOwnProperty,
        F = Object.assign,
        oe = Symbol.for("react.client.reference"),
        be = Array.isArray,
        me = 0,
        we,
        Re,
        Ne,
        Ue,
        Ve,
        _e,
        ot;
      s.__reactDisabledLog = !0;
      var Q,
        St,
        Ht = !1,
        jn = new (typeof WeakMap == "function" ? WeakMap : Map)(),
        Ya = Symbol.for("react.client.reference"),
        We,
        Jr = {},
        So = {},
        ea = {};
      (Pc.Fragment = Te),
        (Pc.jsxDEV = function (A, ie, ce, je, xt, Ke) {
          return D(A, ie, ce, je, xt, Ke);
        });
    })(),
    Pc
  );
}
var e1;
function cA() {
  return e1 || ((e1 = 1), (jh.exports = sA())), jh.exports;
}
var te = cA(),
  P = sf();
const bE = vE(P);
var kh = { exports: {} },
  Hu = {},
  Lh = { exports: {} },
  Bh = {},
  t1;
function fA() {
  return (
    t1 ||
      ((t1 = 1),
      (function (o) {
        /**
         * @license React
         * scheduler.development.js
         *
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ (function () {
          function l() {
            if (ue) {
              var Z = o.unstable_now();
              xe = Z;
              var pe = !0;
              try {
                e: {
                  (X = !1), ye && ((ye = !1), I(Oe), (Oe = -1)), (ae = !0);
                  var Ce = H;
                  try {
                    t: {
                      for (
                        h(Z), z = s(D);
                        z !== null && !(z.expirationTime > Z && v());

                      ) {
                        var Se = z.callback;
                        if (typeof Se == "function") {
                          (z.callback = null), (H = z.priorityLevel);
                          var q = Se(z.expirationTime <= Z);
                          if (
                            ((Z = o.unstable_now()), typeof q == "function")
                          ) {
                            (z.callback = q), h(Z), (pe = !0);
                            break t;
                          }
                          z === s(D) && c(D), h(Z);
                        } else c(D);
                        z = s(D);
                      }
                      if (z !== null) pe = !0;
                      else {
                        var F = s(j);
                        F !== null && R(y, F.startTime - Z), (pe = !1);
                      }
                    }
                    break e;
                  } finally {
                    (z = null), (H = Ce), (ae = !1);
                  }
                  pe = void 0;
                }
              } finally {
                pe ? De() : (ue = !1);
              }
            }
          }
          function u(Z, pe) {
            var Ce = Z.length;
            Z.push(pe);
            e: for (; 0 < Ce; ) {
              var Se = (Ce - 1) >>> 1,
                q = Z[Se];
              if (0 < d(q, pe)) (Z[Se] = pe), (Z[Ce] = q), (Ce = Se);
              else break e;
            }
          }
          function s(Z) {
            return Z.length === 0 ? null : Z[0];
          }
          function c(Z) {
            if (Z.length === 0) return null;
            var pe = Z[0],
              Ce = Z.pop();
            if (Ce !== pe) {
              Z[0] = Ce;
              e: for (var Se = 0, q = Z.length, F = q >>> 1; Se < F; ) {
                var oe = 2 * (Se + 1) - 1,
                  be = Z[oe],
                  me = oe + 1,
                  we = Z[me];
                if (0 > d(be, Ce))
                  me < q && 0 > d(we, be)
                    ? ((Z[Se] = we), (Z[me] = Ce), (Se = me))
                    : ((Z[Se] = be), (Z[oe] = Ce), (Se = oe));
                else if (me < q && 0 > d(we, Ce))
                  (Z[Se] = we), (Z[me] = Ce), (Se = me);
                else break e;
              }
            }
            return pe;
          }
          function d(Z, pe) {
            var Ce = Z.sortIndex - pe.sortIndex;
            return Ce !== 0 ? Ce : Z.id - pe.id;
          }
          function h(Z) {
            for (var pe = s(j); pe !== null; ) {
              if (pe.callback === null) c(j);
              else if (pe.startTime <= Z)
                c(j), (pe.sortIndex = pe.expirationTime), u(D, pe);
              else break;
              pe = s(j);
            }
          }
          function y(Z) {
            if (((ye = !1), h(Z), !X))
              if (s(D) !== null) (X = !0), S();
              else {
                var pe = s(j);
                pe !== null && R(y, pe.startTime - Z);
              }
          }
          function v() {
            return !(o.unstable_now() - xe < $e);
          }
          function S() {
            ue || ((ue = !0), De());
          }
          function R(Z, pe) {
            Oe = Te(function () {
              Z(o.unstable_now());
            }, pe);
          }
          if (
            (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
                "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
                Error()
              ),
            (o.unstable_now = void 0),
            typeof performance == "object" &&
              typeof performance.now == "function")
          ) {
            var T = performance;
            o.unstable_now = function () {
              return T.now();
            };
          } else {
            var E = Date,
              N = E.now();
            o.unstable_now = function () {
              return E.now() - N;
            };
          }
          var D = [],
            j = [],
            M = 1,
            z = null,
            H = 3,
            ae = !1,
            X = !1,
            ye = !1,
            Te = typeof setTimeout == "function" ? setTimeout : null,
            I = typeof clearTimeout == "function" ? clearTimeout : null,
            de = typeof setImmediate < "u" ? setImmediate : null,
            ue = !1,
            Oe = -1,
            $e = 5,
            xe = -1;
          if (typeof de == "function")
            var De = function () {
              de(l);
            };
          else if (typeof MessageChannel < "u") {
            var J = new MessageChannel(),
              et = J.port2;
            (J.port1.onmessage = l),
              (De = function () {
                et.postMessage(null);
              });
          } else
            De = function () {
              Te(l, 0);
            };
          (o.unstable_IdlePriority = 5),
            (o.unstable_ImmediatePriority = 1),
            (o.unstable_LowPriority = 4),
            (o.unstable_NormalPriority = 3),
            (o.unstable_Profiling = null),
            (o.unstable_UserBlockingPriority = 2),
            (o.unstable_cancelCallback = function (Z) {
              Z.callback = null;
            }),
            (o.unstable_continueExecution = function () {
              X || ae || ((X = !0), S());
            }),
            (o.unstable_forceFrameRate = function (Z) {
              0 > Z || 125 < Z
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : ($e = 0 < Z ? Math.floor(1e3 / Z) : 5);
            }),
            (o.unstable_getCurrentPriorityLevel = function () {
              return H;
            }),
            (o.unstable_getFirstCallbackNode = function () {
              return s(D);
            }),
            (o.unstable_next = function (Z) {
              switch (H) {
                case 1:
                case 2:
                case 3:
                  var pe = 3;
                  break;
                default:
                  pe = H;
              }
              var Ce = H;
              H = pe;
              try {
                return Z();
              } finally {
                H = Ce;
              }
            }),
            (o.unstable_pauseExecution = function () {}),
            (o.unstable_requestPaint = function () {}),
            (o.unstable_runWithPriority = function (Z, pe) {
              switch (Z) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  Z = 3;
              }
              var Ce = H;
              H = Z;
              try {
                return pe();
              } finally {
                H = Ce;
              }
            }),
            (o.unstable_scheduleCallback = function (Z, pe, Ce) {
              var Se = o.unstable_now();
              switch (
                (typeof Ce == "object" && Ce !== null
                  ? ((Ce = Ce.delay),
                    (Ce = typeof Ce == "number" && 0 < Ce ? Se + Ce : Se))
                  : (Ce = Se),
                Z)
              ) {
                case 1:
                  var q = -1;
                  break;
                case 2:
                  q = 250;
                  break;
                case 5:
                  q = 1073741823;
                  break;
                case 4:
                  q = 1e4;
                  break;
                default:
                  q = 5e3;
              }
              return (
                (q = Ce + q),
                (Z = {
                  id: M++,
                  callback: pe,
                  priorityLevel: Z,
                  startTime: Ce,
                  expirationTime: q,
                  sortIndex: -1,
                }),
                Ce > Se
                  ? ((Z.sortIndex = Ce),
                    u(j, Z),
                    s(D) === null &&
                      Z === s(j) &&
                      (ye ? (I(Oe), (Oe = -1)) : (ye = !0), R(y, Ce - Se)))
                  : ((Z.sortIndex = q), u(D, Z), X || ae || ((X = !0), S())),
                Z
              );
            }),
            (o.unstable_shouldYield = v),
            (o.unstable_wrapCallback = function (Z) {
              var pe = H;
              return function () {
                var Ce = H;
                H = pe;
                try {
                  return Z.apply(this, arguments);
                } finally {
                  H = Ce;
                }
              };
            }),
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                Error()
              );
        })();
      })(Bh)),
    Bh
  );
}
var n1;
function dA() {
  return n1 || ((n1 = 1), (Lh.exports = fA())), Lh.exports;
}
var Vh = { exports: {} },
  tn = {},
  a1;
function mA() {
  if (a1) return tn;
  a1 = 1;
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ return (
    (function () {
      function o() {}
      function l(T) {
        return "" + T;
      }
      function u(T, E, N) {
        var D =
          3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        try {
          l(D);
          var j = !1;
        } catch {
          j = !0;
        }
        return (
          j &&
            (console.error(
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              (typeof Symbol == "function" &&
                Symbol.toStringTag &&
                D[Symbol.toStringTag]) ||
                D.constructor.name ||
                "Object"
            ),
            l(D)),
          {
            $$typeof: S,
            key: D == null ? null : "" + D,
            children: T,
            containerInfo: E,
            implementation: N,
          }
        );
      }
      function s(T, E) {
        if (T === "font") return "";
        if (typeof E == "string") return E === "use-credentials" ? E : "";
      }
      function c(T) {
        return T === null
          ? "`null`"
          : T === void 0
          ? "`undefined`"
          : T === ""
          ? "an empty string"
          : 'something with type "' + typeof T + '"';
      }
      function d(T) {
        return T === null
          ? "`null`"
          : T === void 0
          ? "`undefined`"
          : T === ""
          ? "an empty string"
          : typeof T == "string"
          ? JSON.stringify(T)
          : typeof T == "number"
          ? "`" + T + "`"
          : 'something with type "' + typeof T + '"';
      }
      function h() {
        var T = R.H;
        return (
          T === null &&
            console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),
          T
        );
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
          "function" &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var y = sf(),
        v = {
          d: {
            f: o,
            r: function () {
              throw Error(
                "Invalid form element. requestFormReset must be passed a form that was rendered by React."
              );
            },
            D: o,
            C: o,
            L: o,
            m: o,
            X: o,
            S: o,
            M: o,
          },
          p: 0,
          findDOMNode: null,
        },
        S = Symbol.for("react.portal"),
        R = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      (typeof Map == "function" &&
        Map.prototype != null &&
        typeof Map.prototype.forEach == "function" &&
        typeof Set == "function" &&
        Set.prototype != null &&
        typeof Set.prototype.clear == "function" &&
        typeof Set.prototype.forEach == "function") ||
        console.error(
          "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
        ),
        (tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v),
        (tn.createPortal = function (T, E) {
          var N =
            2 < arguments.length && arguments[2] !== void 0
              ? arguments[2]
              : null;
          if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
            throw Error("Target container is not a DOM element.");
          return u(T, E, null, N);
        }),
        (tn.flushSync = function (T) {
          var E = R.T,
            N = v.p;
          try {
            if (((R.T = null), (v.p = 2), T)) return T();
          } finally {
            (R.T = E),
              (v.p = N),
              v.d.f() &&
                console.error(
                  "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
                );
          }
        }),
        (tn.preconnect = function (T, E) {
          typeof T == "string" && T
            ? E != null && typeof E != "object"
              ? console.error(
                  "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
                  d(E)
                )
              : E != null &&
                typeof E.crossOrigin != "string" &&
                console.error(
                  "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
                  c(E.crossOrigin)
                )
            : console.error(
                "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
                c(T)
              ),
            typeof T == "string" &&
              (E
                ? ((E = E.crossOrigin),
                  (E =
                    typeof E == "string"
                      ? E === "use-credentials"
                        ? E
                        : ""
                      : void 0))
                : (E = null),
              v.d.C(T, E));
        }),
        (tn.prefetchDNS = function (T) {
          if (typeof T != "string" || !T)
            console.error(
              "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
              c(T)
            );
          else if (1 < arguments.length) {
            var E = arguments[1];
            typeof E == "object" && E.hasOwnProperty("crossOrigin")
              ? console.error(
                  "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
                  d(E)
                )
              : console.error(
                  "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
                  d(E)
                );
          }
          typeof T == "string" && v.d.D(T);
        }),
        (tn.preinit = function (T, E) {
          if (
            (typeof T == "string" && T
              ? E == null || typeof E != "object"
                ? console.error(
                    "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
                    d(E)
                  )
                : E.as !== "style" &&
                  E.as !== "script" &&
                  console.error(
                    'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
                    d(E.as)
                  )
              : console.error(
                  "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
                  c(T)
                ),
            typeof T == "string" && E && typeof E.as == "string")
          ) {
            var N = E.as,
              D = s(N, E.crossOrigin),
              j = typeof E.integrity == "string" ? E.integrity : void 0,
              M = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
            N === "style"
              ? v.d.S(
                  T,
                  typeof E.precedence == "string" ? E.precedence : void 0,
                  { crossOrigin: D, integrity: j, fetchPriority: M }
                )
              : N === "script" &&
                v.d.X(T, {
                  crossOrigin: D,
                  integrity: j,
                  fetchPriority: M,
                  nonce: typeof E.nonce == "string" ? E.nonce : void 0,
                });
          }
        }),
        (tn.preinitModule = function (T, E) {
          var N = "";
          if (
            ((typeof T == "string" && T) ||
              (N += " The `href` argument encountered was " + c(T) + "."),
            E !== void 0 && typeof E != "object"
              ? (N += " The `options` argument encountered was " + c(E) + ".")
              : E &&
                "as" in E &&
                E.as !== "script" &&
                (N += " The `as` option encountered was " + d(E.as) + "."),
            N)
          )
            console.error(
              "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
              N
            );
          else
            switch (((N = E && typeof E.as == "string" ? E.as : "script"), N)) {
              case "script":
                break;
              default:
                (N = d(N)),
                  console.error(
                    'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
                    N,
                    T
                  );
            }
          typeof T == "string" &&
            (typeof E == "object" && E !== null
              ? (E.as == null || E.as === "script") &&
                ((N = s(E.as, E.crossOrigin)),
                v.d.M(T, {
                  crossOrigin: N,
                  integrity:
                    typeof E.integrity == "string" ? E.integrity : void 0,
                  nonce: typeof E.nonce == "string" ? E.nonce : void 0,
                }))
              : E == null && v.d.M(T));
        }),
        (tn.preload = function (T, E) {
          var N = "";
          if (
            ((typeof T == "string" && T) ||
              (N += " The `href` argument encountered was " + c(T) + "."),
            E == null || typeof E != "object"
              ? (N += " The `options` argument encountered was " + c(E) + ".")
              : (typeof E.as == "string" && E.as) ||
                (N += " The `as` option encountered was " + c(E.as) + "."),
            N &&
              console.error(
                'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
                N
              ),
            typeof T == "string" &&
              typeof E == "object" &&
              E !== null &&
              typeof E.as == "string")
          ) {
            N = E.as;
            var D = s(N, E.crossOrigin);
            v.d.L(T, N, {
              crossOrigin: D,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
              type: typeof E.type == "string" ? E.type : void 0,
              fetchPriority:
                typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
              referrerPolicy:
                typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
              imageSrcSet:
                typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
              imageSizes:
                typeof E.imageSizes == "string" ? E.imageSizes : void 0,
              media: typeof E.media == "string" ? E.media : void 0,
            });
          }
        }),
        (tn.preloadModule = function (T, E) {
          var N = "";
          (typeof T == "string" && T) ||
            (N += " The `href` argument encountered was " + c(T) + "."),
            E !== void 0 && typeof E != "object"
              ? (N += " The `options` argument encountered was " + c(E) + ".")
              : E &&
                "as" in E &&
                typeof E.as != "string" &&
                (N += " The `as` option encountered was " + c(E.as) + "."),
            N &&
              console.error(
                'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
                N
              ),
            typeof T == "string" &&
              (E
                ? ((N = s(E.as, E.crossOrigin)),
                  v.d.m(T, {
                    as:
                      typeof E.as == "string" && E.as !== "script"
                        ? E.as
                        : void 0,
                    crossOrigin: N,
                    integrity:
                      typeof E.integrity == "string" ? E.integrity : void 0,
                  }))
                : v.d.m(T));
        }),
        (tn.requestFormReset = function (T) {
          v.d.r(T);
        }),
        (tn.unstable_batchedUpdates = function (T, E) {
          return T(E);
        }),
        (tn.useFormState = function (T, E, N) {
          return h().useFormState(T, E, N);
        }),
        (tn.useFormStatus = function () {
          return h().useHostTransitionStatus();
        }),
        (tn.version = "19.0.0"),
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
            "function" &&
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })(),
    tn
  );
}
var o1;
function hA() {
  return o1 || ((o1 = 1), (Vh.exports = mA())), Vh.exports;
}
var r1;
function pA() {
  if (r1) return Hu;
  r1 = 1;
  /**
   * @license React
   * react-dom-client.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ return (
    (function () {
      function o(e, t) {
        for (e = e.memoizedState; e !== null && 0 < t; ) (e = e.next), t--;
        return e;
      }
      function l(e, t, n, a) {
        if (n >= t.length) return a;
        var r = t[n],
          i = Gt(e) ? e.slice() : qe({}, e);
        return (i[r] = l(e[r], t, n + 1, a)), i;
      }
      function u(e, t, n) {
        if (t.length !== n.length)
          console.warn("copyWithRename() expects paths of the same length");
        else {
          for (var a = 0; a < n.length - 1; a++)
            if (t[a] !== n[a]) {
              console.warn(
                "copyWithRename() expects paths to be the same except for the deepest key"
              );
              return;
            }
          return s(e, t, n, 0);
        }
      }
      function s(e, t, n, a) {
        var r = t[a],
          i = Gt(e) ? e.slice() : qe({}, e);
        return (
          a + 1 === t.length
            ? ((i[n[a]] = i[r]), Gt(i) ? i.splice(r, 1) : delete i[r])
            : (i[r] = s(e[r], t, n, a + 1)),
          i
        );
      }
      function c(e, t, n) {
        var a = t[n],
          r = Gt(e) ? e.slice() : qe({}, e);
        return n + 1 === t.length
          ? (Gt(r) ? r.splice(a, 1) : delete r[a], r)
          : ((r[a] = c(e[a], t, n + 1)), r);
      }
      function d() {
        return !1;
      }
      function h() {
        return null;
      }
      function y(e, t, n, a) {
        return new MR(e, t, n, a);
      }
      function v() {
        console.error(
          "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
        );
      }
      function S() {
        console.error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
        );
      }
      function R() {}
      function T() {}
      function E(e) {
        var t = [];
        return (
          e.forEach(function (n) {
            t.push(n);
          }),
          t.sort().join(", ")
        );
      }
      function N(e, t) {
        e.context === Lo && (hb(t, e, null, null), dl());
      }
      function D(e, t) {
        if ($n !== null) {
          var n = t.staleFamilies;
          (t = t.updatedFamilies), Er(), _f(e.current, t, n), dl();
        }
      }
      function j(e) {
        $n = e;
      }
      function M(e) {
        return !(
          !e ||
          (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        );
      }
      function z(e) {
        return e === null || typeof e != "object"
          ? null
          : ((e = (wb && e[wb]) || e["@@iterator"]),
            typeof e == "function" ? e : null);
      }
      function H(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === Nx ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case bl:
            return "Fragment";
          case vl:
            return "Portal";
          case vm:
            return "Profiler";
          case Is:
            return "StrictMode";
          case Sm:
            return "Suspense";
          case Em:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (
            (typeof e.tag == "number" &&
              console.error(
                "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
              ),
            e.$$typeof)
          ) {
            case Ra:
              return (e.displayName || "Context") + ".Provider";
            case bm:
              return (e._context.displayName || "Context") + ".Consumer";
            case Fi:
              var t = e.render;
              return (
                (e = e.displayName),
                e ||
                  ((e = t.displayName || t.name || ""),
                  (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                e
              );
            case Zs:
              return (
                (t = e.displayName || null),
                t !== null ? t : H(e.type) || "Memo"
              );
            case On:
              (t = e._payload), (e = e._init);
              try {
                return H(e(t));
              } catch {}
          }
        return null;
      }
      function ae(e) {
        return typeof e.tag == "number"
          ? X(e)
          : typeof e.name == "string"
          ? e.name
          : null;
      }
      function X(e) {
        var t = e.type;
        switch (e.tag) {
          case 24:
            return "Cache";
          case 9:
            return (t._context.displayName || "Context") + ".Consumer";
          case 10:
            return (t.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return (
              (e = t.render),
              (e = e.displayName || e.name || ""),
              t.displayName ||
                (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
          case 7:
            return "Fragment";
          case 26:
          case 27:
          case 5:
            return t;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return H(t);
          case 8:
            return t === Is ? "StrictMode" : "Mode";
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
          case 14:
          case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
            break;
          case 29:
            if (((t = e._debugInfo), t != null)) {
              for (var n = t.length - 1; 0 <= n; n--)
                if (typeof t[n].name == "string") return t[n].name;
            }
            if (e.return !== null) return X(e.return);
        }
        return null;
      }
      function ye() {}
      function Te() {
        if (Ii === 0) {
          (Ab = console.log),
            (Cb = console.info),
            (Ob = console.warn),
            (Db = console.error),
            (Nb = console.group),
            (Mb = console.groupCollapsed),
            (Ub = console.groupEnd);
          var e = { configurable: !0, enumerable: !0, value: ye, writable: !0 };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e,
          });
        }
        Ii++;
      }
      function I() {
        if ((Ii--, Ii === 0)) {
          var e = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: qe({}, e, { value: Ab }),
            info: qe({}, e, { value: Cb }),
            warn: qe({}, e, { value: Ob }),
            error: qe({}, e, { value: Db }),
            group: qe({}, e, { value: Nb }),
            groupCollapsed: qe({}, e, { value: Mb }),
            groupEnd: qe({}, e, { value: Ub }),
          });
        }
        0 > Ii &&
          console.error(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue."
          );
      }
      function de(e) {
        if (Tm === void 0)
          try {
            throw Error();
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            (Tm = (t && t[1]) || ""),
              (_b =
                -1 <
                n.stack.indexOf(`
    at`)
                  ? " (<anonymous>)"
                  : -1 < n.stack.indexOf("@")
                  ? "@unknown:0:0"
                  : "");
          }
        return (
          `
` +
          Tm +
          e +
          _b
        );
      }
      function ue(e, t) {
        if (!e || Rm) return "";
        var n = xm.get(e);
        if (n !== void 0) return n;
        (Rm = !0),
          (n = Error.prepareStackTrace),
          (Error.prepareStackTrace = void 0);
        var a = null;
        (a = L.H), (L.H = null), Te();
        try {
          var r = {
            DetermineComponentFrameRoot: function () {
              try {
                if (t) {
                  var _ = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(_.prototype, "props", {
                      set: function () {
                        throw Error();
                      },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(_, []);
                    } catch (he) {
                      var $ = he;
                    }
                    Reflect.construct(e, [], _);
                  } else {
                    try {
                      _.call();
                    } catch (he) {
                      $ = he;
                    }
                    e.call(_.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (he) {
                    $ = he;
                  }
                  (_ = e()) &&
                    typeof _.catch == "function" &&
                    _.catch(function () {});
                }
              } catch (he) {
                if (he && $ && typeof he.stack == "string")
                  return [he.stack, $.stack];
              }
              return [null, null];
            },
          };
          r.DetermineComponentFrameRoot.displayName =
            "DetermineComponentFrameRoot";
          var i = Object.getOwnPropertyDescriptor(
            r.DetermineComponentFrameRoot,
            "name"
          );
          i &&
            i.configurable &&
            Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
              value: "DetermineComponentFrameRoot",
            });
          var f = r.DetermineComponentFrameRoot(),
            m = f[0],
            g = f[1];
          if (m && g) {
            var b = m.split(`
`),
              U = g.split(`
`);
            for (
              f = i = 0;
              i < b.length && !b[i].includes("DetermineComponentFrameRoot");

            )
              i++;
            for (
              ;
              f < U.length && !U[f].includes("DetermineComponentFrameRoot");

            )
              f++;
            if (i === b.length || f === U.length)
              for (
                i = b.length - 1, f = U.length - 1;
                1 <= i && 0 <= f && b[i] !== U[f];

              )
                f--;
            for (; 1 <= i && 0 <= f; i--, f--)
              if (b[i] !== U[f]) {
                if (i !== 1 || f !== 1)
                  do
                    if ((i--, f--, 0 > f || b[i] !== U[f])) {
                      var Y =
                        `
` + b[i].replace(" at new ", " at ");
                      return (
                        e.displayName &&
                          Y.includes("<anonymous>") &&
                          (Y = Y.replace("<anonymous>", e.displayName)),
                        typeof e == "function" && xm.set(e, Y),
                        Y
                      );
                    }
                  while (1 <= i && 0 <= f);
                break;
              }
          }
        } finally {
          (Rm = !1), (L.H = a), I(), (Error.prepareStackTrace = n);
        }
        return (
          (b = (b = e ? e.displayName || e.name : "") ? de(b) : ""),
          typeof e == "function" && xm.set(e, b),
          b
        );
      }
      function Oe(e) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return de(e.type);
          case 16:
            return de("Lazy");
          case 13:
            return de("Suspense");
          case 19:
            return de("SuspenseList");
          case 0:
          case 15:
            return (e = ue(e.type, !1)), e;
          case 11:
            return (e = ue(e.type.render, !1)), e;
          case 1:
            return (e = ue(e.type, !0)), e;
          default:
            return "";
        }
      }
      function $e(e) {
        try {
          var t = "";
          do {
            t += Oe(e);
            var n = e._debugInfo;
            if (n)
              for (var a = n.length - 1; 0 <= a; a--) {
                var r = n[a];
                if (typeof r.name == "string") {
                  var i = t,
                    f = r.env,
                    m = de(r.name + (f ? " [" + f + "]" : ""));
                  t = i + m;
                }
              }
            e = e.return;
          } while (e);
          return t;
        } catch (g) {
          return (
            `
Error generating stack: ` +
            g.message +
            `
` +
            g.stack
          );
        }
      }
      function xe() {
        if (Wt === null) return null;
        var e = Wt._debugOwner;
        return e != null ? ae(e) : null;
      }
      function De() {
        return Wt === null ? "" : $e(Wt);
      }
      function J(e, t, n, a, r, i, f) {
        var m = Wt;
        (L.getCurrentStack = e === null ? null : De), (qn = !1), (Wt = e);
        try {
          return t(n, a, r, i, f);
        } finally {
          Wt = m;
        }
        throw Error(
          "runWithFiberInDEV should never be called in production. This is a bug in React."
        );
      }
      function et(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
          while (e);
        }
        return t.tag === 3 ? n : null;
      }
      function Z(e) {
        if (e.tag === 13) {
          var t = e.memoizedState;
          if (
            (t === null &&
              ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
          )
            return t.dehydrated;
        }
        return null;
      }
      function pe(e) {
        if (et(e) !== e)
          throw Error("Unable to find node on an unmounted component.");
      }
      function Ce(e) {
        var t = e.alternate;
        if (!t) {
          if (((t = et(e)), t === null))
            throw Error("Unable to find node on an unmounted component.");
          return t !== e ? null : e;
        }
        for (var n = e, a = t; ; ) {
          var r = n.return;
          if (r === null) break;
          var i = r.alternate;
          if (i === null) {
            if (((a = r.return), a !== null)) {
              n = a;
              continue;
            }
            break;
          }
          if (r.child === i.child) {
            for (i = r.child; i; ) {
              if (i === n) return pe(r), e;
              if (i === a) return pe(r), t;
              i = i.sibling;
            }
            throw Error("Unable to find node on an unmounted component.");
          }
          if (n.return !== a.return) (n = r), (a = i);
          else {
            for (var f = !1, m = r.child; m; ) {
              if (m === n) {
                (f = !0), (n = r), (a = i);
                break;
              }
              if (m === a) {
                (f = !0), (a = r), (n = i);
                break;
              }
              m = m.sibling;
            }
            if (!f) {
              for (m = i.child; m; ) {
                if (m === n) {
                  (f = !0), (n = i), (a = r);
                  break;
                }
                if (m === a) {
                  (f = !0), (a = i), (n = r);
                  break;
                }
                m = m.sibling;
              }
              if (!f)
                throw Error(
                  "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
                );
            }
          }
          if (n.alternate !== a)
            throw Error(
              "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
            );
        }
        if (n.tag !== 3)
          throw Error("Unable to find node on an unmounted component.");
        return n.stateNode.current === n ? e : t;
      }
      function Se(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
          if (((t = Se(e)), t !== null)) return t;
          e = e.sibling;
        }
        return null;
      }
      function q(e) {
        return { current: e };
      }
      function F(e, t) {
        0 > eo
          ? console.error("Unexpected pop.")
          : (t !== Am[eo] && console.error("Unexpected Fiber popped."),
            (e.current = wm[eo]),
            (wm[eo] = null),
            (Am[eo] = null),
            eo--);
      }
      function oe(e, t, n) {
        eo++, (wm[eo] = e.current), (Am[eo] = n), (e.current = t);
      }
      function be(e) {
        return (
          e === null &&
            console.error(
              "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
            ),
          e
        );
      }
      function me(e, t) {
        oe(jo, t, e), oe(Zi, e, e), oe(zo, null, e);
        var n = t.nodeType;
        switch (n) {
          case 9:
          case 11:
            (n = n === 9 ? "#document" : "#fragment"),
              (t =
                (t = t.documentElement) && (t = t.namespaceURI) ? Wv(t) : mo);
            break;
          default:
            if (
              ((t = n === 8 ? t.parentNode : t),
              (n = t.tagName),
              (t = t.namespaceURI))
            )
              (t = Wv(t)), (t = Kv(t, n));
            else
              switch (n) {
                case "svg":
                  t = Kl;
                  break;
                case "math":
                  t = Hc;
                  break;
                default:
                  t = mo;
              }
        }
        (n = n.toLowerCase()),
          (n = cy(null, n)),
          (n = { context: t, ancestorInfo: n }),
          F(zo, e),
          oe(zo, n, e);
      }
      function we(e) {
        F(zo, e), F(Zi, e), F(jo, e);
      }
      function Re() {
        return be(zo.current);
      }
      function Ne(e) {
        e.memoizedState !== null && oe(Ws, e, e);
        var t = be(zo.current),
          n = e.type,
          a = Kv(t.context, n);
        (n = cy(t.ancestorInfo, n)),
          (a = { context: a, ancestorInfo: n }),
          t !== a && (oe(Zi, e, e), oe(zo, a, e));
      }
      function Ue(e) {
        Zi.current === e && (F(zo, e), F(Zi, e)),
          Ws.current === e && (F(Ws, e), (_u._currentValue = Gr));
      }
      function Ve(e) {
        return (
          (typeof Symbol == "function" &&
            Symbol.toStringTag &&
            e[Symbol.toStringTag]) ||
          e.constructor.name ||
          "Object"
        );
      }
      function _e(e) {
        try {
          return ot(e), !1;
        } catch {
          return !0;
        }
      }
      function ot(e) {
        return "" + e;
      }
      function Q(e, t) {
        if (_e(e))
          return (
            console.error(
              "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
              t,
              Ve(e)
            ),
            ot(e)
          );
      }
      function St(e, t) {
        if (_e(e))
          return (
            console.error(
              "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
              t,
              Ve(e)
            ),
            ot(e)
          );
      }
      function Ht(e) {
        if (_e(e))
          return (
            console.error(
              "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
              Ve(e)
            ),
            ot(e)
          );
      }
      function jn(e) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled) return !0;
        if (!t.supportsFiber)
          return (
            console.error(
              "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
            ),
            !0
          );
        try {
          (El = t.inject(e)), (Kt = t);
        } catch (n) {
          console.error("React instrumentation encountered an error: %s.", n);
        }
        return !!t.checkDCE;
      }
      function Ya(e, t) {
        if (Kt && typeof Kt.onCommitFiberRoot == "function")
          try {
            var n = (e.current.flags & 128) === 128;
            switch (t) {
              case Aa:
                var a = Om;
                break;
              case Ca:
                a = Dm;
                break;
              case no:
                a = Sl;
                break;
              case ec:
                a = Nm;
                break;
              default:
                a = Sl;
            }
            Kt.onCommitFiberRoot(El, e, a, n);
          } catch (r) {
            wa ||
              ((wa = !0),
              console.error(
                "React instrumentation encountered an error: %s",
                r
              ));
          }
      }
      function We(e) {
        if (
          (typeof kx == "function" && Lx(e),
          Kt && typeof Kt.setStrictMode == "function")
        )
          try {
            Kt.setStrictMode(El, e);
          } catch (t) {
            wa ||
              ((wa = !0),
              console.error(
                "React instrumentation encountered an error: %s",
                t
              ));
          }
      }
      function Jr(e) {
        le = e;
      }
      function So() {
        le !== null &&
          typeof le.markCommitStopped == "function" &&
          le.markCommitStopped();
      }
      function ea(e) {
        le !== null &&
          typeof le.markComponentRenderStarted == "function" &&
          le.markComponentRenderStarted(e);
      }
      function A() {
        le !== null &&
          typeof le.markComponentRenderStopped == "function" &&
          le.markComponentRenderStopped();
      }
      function ie(e) {
        le !== null &&
          typeof le.markRenderStarted == "function" &&
          le.markRenderStarted(e);
      }
      function ce() {
        le !== null &&
          typeof le.markRenderStopped == "function" &&
          le.markRenderStopped();
      }
      function je(e, t) {
        le !== null &&
          typeof le.markStateUpdateScheduled == "function" &&
          le.markStateUpdateScheduled(e, t);
      }
      function xt(e) {
        return (e >>>= 0), e === 0 ? 32 : (31 - ((Bx(e) / Vx) | 0)) | 0;
      }
      function Ke(e) {
        if (e & 1) return "SyncHydrationLane";
        if (e & 2) return "Sync";
        if (e & 4) return "InputContinuousHydration";
        if (e & 8) return "InputContinuous";
        if (e & 16) return "DefaultHydration";
        if (e & 32) return "Default";
        if (e & 64) return "TransitionHydration";
        if (e & 4194176) return "Transition";
        if (e & 62914560) return "Retry";
        if (e & 67108864) return "SelectiveHydration";
        if (e & 134217728) return "IdleHydration";
        if (e & 268435456) return "Idle";
        if (e & 536870912) return "Offscreen";
        if (e & 1073741824) return "Deferred";
      }
      function Ae(e) {
        var t = e & 42;
        if (t !== 0) return t;
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
            return 64;
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
            return e & 4194176;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return e & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return (
              console.error(
                "Should have found matching lanes. This is a bug in React."
              ),
              e
            );
        }
      }
      function Ee(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var a = 0,
          r = e.suspendedLanes,
          i = e.pingedLanes,
          f = e.warmLanes;
        e = e.finishedLanes !== 0;
        var m = n & 134217727;
        return (
          m !== 0
            ? ((n = m & ~r),
              n !== 0
                ? (a = Ae(n))
                : ((i &= m),
                  i !== 0
                    ? (a = Ae(i))
                    : e || ((f = m & ~f), f !== 0 && (a = Ae(f)))))
            : ((m = n & ~r),
              m !== 0
                ? (a = Ae(m))
                : i !== 0
                ? (a = Ae(i))
                : e || ((f = n & ~f), f !== 0 && (a = Ae(f)))),
          a === 0
            ? 0
            : t !== 0 &&
              t !== a &&
              !(t & r) &&
              ((r = a & -a),
              (f = t & -t),
              r >= f || (r === 32 && (f & 4194176) !== 0))
            ? t
            : a
        );
      }
      function Yt(e, t) {
        return (
          (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
        );
      }
      function Ut(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
          case 8:
            return t + 250;
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
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return (
              console.error(
                "Should have found matching lanes. This is a bug in React."
              ),
              -1
            );
        }
      }
      function It() {
        var e = Ks;
        return (Ks <<= 1), !(Ks & 4194176) && (Ks = 128), e;
      }
      function ta() {
        var e = Js;
        return (Js <<= 1), !(Js & 62914560) && (Js = 4194304), e;
      }
      function on(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function Tn(e, t) {
        (e.pendingLanes |= t),
          t !== 268435456 &&
            ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
      }
      function mn(e, t, n, a, r, i) {
        var f = e.pendingLanes;
        (e.pendingLanes = n),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.warmLanes = 0),
          (e.expiredLanes &= n),
          (e.entangledLanes &= n),
          (e.errorRecoveryDisabledLanes &= n),
          (e.shellSuspendCounter = 0);
        var m = e.entanglements,
          g = e.expirationTimes,
          b = e.hiddenUpdates;
        for (n = f & ~n; 0 < n; ) {
          var U = 31 - rn(n),
            Y = 1 << U;
          (m[U] = 0), (g[U] = -1);
          var _ = b[U];
          if (_ !== null)
            for (b[U] = null, U = 0; U < _.length; U++) {
              var $ = _[U];
              $ !== null && ($.lane &= -536870913);
            }
          n &= ~Y;
        }
        a !== 0 && ci(e, a, 0),
          i !== 0 &&
            r === 0 &&
            e.tag !== 0 &&
            (e.suspendedLanes |= i & ~(f & ~t));
      }
      function ci(e, t, n) {
        (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
        var a = 31 - rn(t);
        (e.entangledLanes |= t),
          (e.entanglements[a] =
            e.entanglements[a] | 1073741824 | (n & 4194218));
      }
      function fi(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
          var a = 31 - rn(n),
            r = 1 << a;
          (r & t) | (e[a] & t) && (e[a] |= t), (n &= ~r);
        }
      }
      function di(e, t, n) {
        if (ra)
          for (e = e.pendingUpdatersLaneMap; 0 < n; ) {
            var a = 31 - rn(n),
              r = 1 << a;
            e[a].add(t), (n &= ~r);
          }
      }
      function el(e, t) {
        if (ra)
          for (
            var n = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters;
            0 < t;

          ) {
            var r = 31 - rn(t);
            (e = 1 << r),
              (r = n[r]),
              0 < r.size &&
                (r.forEach(function (i) {
                  var f = i.alternate;
                  (f !== null && a.has(f)) || a.add(i);
                }),
                r.clear()),
              (t &= ~e);
          }
      }
      function mi(e) {
        return (
          (e &= -e), Aa < e ? (Ca < e ? (e & 134217727 ? no : ec) : Ca) : Aa
        );
      }
      function tl() {
        var e = dt.p;
        return e !== 0
          ? e
          : ((e = window.event), e === void 0 ? no : vb(e.type));
      }
      function hi(e, t) {
        var n = dt.p;
        try {
          return (dt.p = e), t();
        } finally {
          dt.p = n;
        }
      }
      function pi(e) {
        delete e[Jt], delete e[gn], delete e[Mm], delete e[Yx], delete e[qx];
      }
      function ma(e) {
        var t = e[Jt];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Tr] || n[Jt])) {
            if (
              ((n = t.alternate),
              t.child !== null || (n !== null && n.child !== null))
            )
              for (e = ab(e); e !== null; ) {
                if ((n = e[Jt])) return n;
                e = ab(e);
              }
            return t;
          }
          (e = n), (n = e.parentNode);
        }
        return null;
      }
      function ha(e) {
        if ((e = e[Jt] || e[Tr])) {
          var t = e.tag;
          if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
            return e;
        }
        return null;
      }
      function Eo(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error("getNodeFromInstance: Invalid argument.");
      }
      function qa(e) {
        var t = e[zb];
        return (
          t ||
            (t = e[zb] =
              { hoistableStyles: new Map(), hoistableScripts: new Map() }),
          t
        );
      }
      function wt(e) {
        e[Wi] = !0;
      }
      function pa(e, t) {
        Pa(e, t), Pa(e + "Capture", t);
      }
      function Pa(e, t) {
        Rr[e] &&
          console.error(
            "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
            e
          ),
          (Rr[e] = t);
        var n = e.toLowerCase();
        for (
          Um[n] = e, e === "onDoubleClick" && (Um.ondblclick = e), e = 0;
          e < t.length;
          e++
        )
          jb.add(t[e]);
      }
      function $a(e, t) {
        Px[t.type] ||
          t.onChange ||
          t.onInput ||
          t.readOnly ||
          t.disabled ||
          t.value == null ||
          console.error(
            e === "select"
              ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`."
              : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
          ),
          t.onChange ||
            t.readOnly ||
            t.disabled ||
            t.checked == null ||
            console.error(
              "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
            );
      }
      function To(e) {
        return to.call(kb, e)
          ? !0
          : to.call(Hb, e)
          ? !1
          : $x.test(e)
          ? (kb[e] = !0)
          : ((Hb[e] = !0),
            console.error("Invalid attribute name: `%s`", e),
            !1);
      }
      function or(e, t, n) {
        if (To(t)) {
          if (!e.hasAttribute(t)) {
            switch (typeof n) {
              case "symbol":
              case "object":
                return n;
              case "function":
                return n;
              case "boolean":
                if (n === !1) return n;
            }
            return n === void 0 ? void 0 : null;
          }
          return (
            (e = e.getAttribute(t)),
            e === "" && n === !0 ? !0 : (Q(n, t), e === "" + n ? n : e)
          );
        }
      }
      function Ga(e, t, n) {
        if (To(t))
          if (n === null) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
                e.removeAttribute(t);
                return;
              case "boolean":
                var a = t.toLowerCase().slice(0, 5);
                if (a !== "data-" && a !== "aria-") {
                  e.removeAttribute(t);
                  return;
                }
            }
            Q(n, t), e.setAttribute(t, "" + n);
          }
      }
      function Ro(e, t, n) {
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
              e.removeAttribute(t);
              return;
          }
          Q(n, t), e.setAttribute(t, "" + n);
        }
      }
      function Hn(e, t, n, a) {
        if (a === null) e.removeAttribute(n);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
              e.removeAttribute(n);
              return;
          }
          Q(a, n), e.setAttributeNS(t, n, "" + a);
        }
      }
      function p(e) {
        switch (typeof e) {
          case "bigint":
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return e;
          case "object":
            return Ht(e), e;
          default:
            return "";
        }
      }
      function O(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          e.toLowerCase() === "input" &&
          (t === "checkbox" || t === "radio")
        );
      }
      function G(e) {
        var t = O(e) ? "checked" : "value",
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        Ht(e[t]);
        var a = "" + e[t];
        if (
          !e.hasOwnProperty(t) &&
          typeof n < "u" &&
          typeof n.get == "function" &&
          typeof n.set == "function"
        ) {
          var r = n.get,
            i = n.set;
          return (
            Object.defineProperty(e, t, {
              configurable: !0,
              get: function () {
                return r.call(this);
              },
              set: function (f) {
                Ht(f), (a = "" + f), i.call(this, f);
              },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
              getValue: function () {
                return a;
              },
              setValue: function (f) {
                Ht(f), (a = "" + f);
              },
              stopTracking: function () {
                (e._valueTracker = null), delete e[t];
              },
            }
          );
        }
      }
      function ee(e) {
        e._valueTracker || (e._valueTracker = G(e));
      }
      function se(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          a = "";
        return (
          e && (a = O(e) ? (e.checked ? "true" : "false") : e.value),
          (e = a),
          e !== n ? (t.setValue(e), !0) : !1
        );
      }
      function ge(e) {
        if (
          ((e = e || (typeof document < "u" ? document : void 0)),
          typeof e > "u")
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch {
          return e.body;
        }
      }
      function re(e) {
        return e.replace(Gx, function (t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        });
      }
      function Je(e, t) {
        t.checked === void 0 ||
          t.defaultChecked === void 0 ||
          Bb ||
          (console.error(
            "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            xe() || "A component",
            t.type
          ),
          (Bb = !0)),
          t.value === void 0 ||
            t.defaultValue === void 0 ||
            Lb ||
            (console.error(
              "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
              xe() || "A component",
              t.type
            ),
            (Lb = !0));
      }
      function Fe(e, t, n, a, r, i, f, m) {
        (e.name = ""),
          f != null &&
          typeof f != "function" &&
          typeof f != "symbol" &&
          typeof f != "boolean"
            ? (Q(f, "type"), (e.type = f))
            : e.removeAttribute("type"),
          t != null
            ? f === "number"
              ? ((t === 0 && e.value === "") || e.value != t) &&
                (e.value = "" + p(t))
              : e.value !== "" + p(t) && (e.value = "" + p(t))
            : (f !== "submit" && f !== "reset") || e.removeAttribute("value"),
          t != null
            ? kt(e, f, p(t))
            : n != null
            ? kt(e, f, p(n))
            : a != null && e.removeAttribute("value"),
          r == null && i != null && (e.defaultChecked = !!i),
          r != null &&
            (e.checked = r && typeof r != "function" && typeof r != "symbol"),
          m != null &&
          typeof m != "function" &&
          typeof m != "symbol" &&
          typeof m != "boolean"
            ? (Q(m, "name"), (e.name = "" + p(m)))
            : e.removeAttribute("name");
      }
      function ft(e, t, n, a, r, i, f, m) {
        if (
          (i != null &&
            typeof i != "function" &&
            typeof i != "symbol" &&
            typeof i != "boolean" &&
            (Q(i, "type"), (e.type = i)),
          t != null || n != null)
        ) {
          if (!((i !== "submit" && i !== "reset") || t != null)) return;
          (n = n != null ? "" + p(n) : ""),
            (t = t != null ? "" + p(t) : n),
            m || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        (a = a ?? r),
          (a = typeof a != "function" && typeof a != "symbol" && !!a),
          (e.checked = m ? e.checked : !!a),
          (e.defaultChecked = !!a),
          f != null &&
            typeof f != "function" &&
            typeof f != "symbol" &&
            typeof f != "boolean" &&
            (Q(f, "name"), (e.name = f));
      }
      function kt(e, t, n) {
        (t === "number" && ge(e.ownerDocument) === e) ||
          e.defaultValue === "" + n ||
          (e.defaultValue = "" + n);
      }
      function ya(e, t) {
        t.value == null &&
          (typeof t.children == "object" && t.children !== null
            ? gm.Children.forEach(t.children, function (n) {
                n == null ||
                  typeof n == "string" ||
                  typeof n == "number" ||
                  typeof n == "bigint" ||
                  Yb ||
                  ((Yb = !0),
                  console.error(
                    "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
                  ));
              })
            : t.dangerouslySetInnerHTML == null ||
              qb ||
              ((qb = !0),
              console.error(
                "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
              ))),
          t.selected == null ||
            Vb ||
            (console.error(
              "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
            ),
            (Vb = !0));
      }
      function Rn() {
        var e = xe();
        return e
          ? `

Check the render method of \`` +
              e +
              "`."
          : "";
      }
      function na(e, t, n, a) {
        if (((e = e.options), t)) {
          t = {};
          for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
          for (n = 0; n < e.length; n++)
            (r = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== r && (e[n].selected = r),
              r && a && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + p(n), t = null, r = 0; r < e.length; r++) {
            if (e[r].value === n) {
              (e[r].selected = !0), a && (e[r].defaultSelected = !0);
              return;
            }
            t !== null || e[r].disabled || (t = e[r]);
          }
          t !== null && (t.selected = !0);
        }
      }
      function kn(e, t) {
        for (e = 0; e < $b.length; e++) {
          var n = $b[e];
          if (t[n] != null) {
            var a = Gt(t[n]);
            t.multiple && !a
              ? console.error(
                  "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
                  n,
                  Rn()
                )
              : !t.multiple &&
                a &&
                console.error(
                  "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
                  n,
                  Rn()
                );
          }
        }
        t.value === void 0 ||
          t.defaultValue === void 0 ||
          Pb ||
          (console.error(
            "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
          ),
          (Pb = !0));
      }
      function ay(e, t) {
        t.value === void 0 ||
          t.defaultValue === void 0 ||
          Gb ||
          (console.error(
            "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
            xe() || "A component"
          ),
          (Gb = !0)),
          t.children != null &&
            t.value == null &&
            console.error(
              "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
            );
      }
      function oy(e, t, n) {
        if (
          t != null &&
          ((t = "" + p(t)), t !== e.value && (e.value = t), n == null)
        ) {
          e.defaultValue !== t && (e.defaultValue = t);
          return;
        }
        e.defaultValue = n != null ? "" + p(n) : "";
      }
      function ry(e, t, n, a) {
        if (t == null) {
          if (a != null) {
            if (n != null)
              throw Error(
                "If you supply `defaultValue` on a <textarea>, do not pass children."
              );
            if (Gt(a)) {
              if (1 < a.length)
                throw Error("<textarea> can only have at most one child.");
              a = a[0];
            }
            n = a;
          }
          n == null && (n = ""), (t = n);
        }
        (n = p(t)),
          (e.defaultValue = n),
          (a = e.textContent),
          a === n && a !== "" && a !== null && (e.value = a);
      }
      function ly(e, t) {
        return e.serverProps === void 0 &&
          e.serverTail.length === 0 &&
          e.children.length === 1 &&
          3 < e.distanceFromLeaf &&
          e.distanceFromLeaf > 15 - t
          ? ly(e.children[0], t)
          : e;
      }
      function xn(e) {
        return "  " + "  ".repeat(e);
      }
      function nl(e) {
        return "+ " + "  ".repeat(e);
      }
      function rr(e) {
        return "- " + "  ".repeat(e);
      }
      function iy(e) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return e.type;
          case 16:
            return "Lazy";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 0:
          case 15:
            return (e = e.type), e.displayName || e.name || null;
          case 11:
            return (e = e.type.render), e.displayName || e.name || null;
          case 1:
            return (e = e.type), e.displayName || e.name || null;
          default:
            return null;
        }
      }
      function yi(e, t) {
        return Xb.test(e)
          ? ((e = JSON.stringify(e)),
            e.length > t - 2
              ? 8 > t
                ? '{"..."}'
                : "{" + e.slice(0, t - 7) + '..."}'
              : "{" + e + "}")
          : e.length > t
          ? 5 > t
            ? '{"..."}'
            : e.slice(0, t - 3) + "..."
          : e;
      }
      function ts(e, t, n) {
        var a = 120 - 2 * n;
        if (t === null)
          return (
            nl(n) +
            yi(e, a) +
            `
`
          );
        if (typeof t == "string") {
          for (
            var r = 0;
            r < t.length && r < e.length && t.charCodeAt(r) === e.charCodeAt(r);
            r++
          );
          return (
            r > a - 8 &&
              10 < r &&
              ((e = "..." + e.slice(r - 8)), (t = "..." + t.slice(r - 8))),
            nl(n) +
              yi(e, a) +
              `
` +
              rr(n) +
              yi(t, a) +
              `
`
          );
        }
        return (
          xn(n) +
          yi(e, a) +
          `
`
        );
      }
      function Rf(e) {
        return Object.prototype.toString
          .call(e)
          .replace(/^\[object (.*)\]$/, function (t, n) {
            return n;
          });
      }
      function gi(e, t) {
        switch (typeof e) {
          case "string":
            return (
              (e = JSON.stringify(e)),
              e.length > t ? (5 > t ? '"..."' : e.slice(0, t - 4) + '..."') : e
            );
          case "object":
            if (e === null) return "null";
            if (Gt(e)) return "[...]";
            if (e.$$typeof === _o)
              return (t = H(e.type)) ? "<" + t + ">" : "<...>";
            var n = Rf(e);
            if (n === "Object") {
              (n = ""), (t -= 2);
              for (var a in e)
                if (e.hasOwnProperty(a)) {
                  var r = JSON.stringify(a);
                  if (
                    (r !== '"' + a + '"' && (a = r),
                    (t -= a.length - 2),
                    (r = gi(e[a], 15 > t ? t : 15)),
                    (t -= r.length),
                    0 > t)
                  ) {
                    n += n === "" ? "..." : ", ...";
                    break;
                  }
                  n += (n === "" ? "" : ",") + a + ":" + r;
                }
              return "{" + n + "}";
            }
            return n;
          case "function":
            return (t = e.displayName || e.name) ? "function " + t : "function";
          default:
            return String(e);
        }
      }
      function al(e, t) {
        return typeof e != "string" || Xb.test(e)
          ? "{" + gi(e, t - 2) + "}"
          : e.length > t - 2
          ? 5 > t
            ? '"..."'
            : '"' + e.slice(0, t - 5) + '..."'
          : '"' + e + '"';
      }
      function xf(e, t, n) {
        var a = 120 - n.length - e.length,
          r = [],
          i;
        for (i in t)
          if (t.hasOwnProperty(i) && i !== "children") {
            var f = al(t[i], 120 - n.length - i.length - 1);
            (a -= i.length + f.length + 2), r.push(i + "=" + f);
          }
        return r.length === 0
          ? n +
              "<" +
              e +
              `>
`
          : 0 < a
          ? n +
            "<" +
            e +
            " " +
            r.join(" ") +
            `>
`
          : n +
            "<" +
            e +
            `
` +
            n +
            "  " +
            r.join(
              `
` +
                n +
                "  "
            ) +
            `
` +
            n +
            `>
`;
      }
      function QT(e, t, n) {
        var a = "",
          r = qe({}, t),
          i;
        for (i in e)
          if (e.hasOwnProperty(i)) {
            delete r[i];
            var f = 120 - 2 * n - i.length - 2,
              m = gi(e[i], f);
            t.hasOwnProperty(i)
              ? ((f = gi(t[i], f)),
                (a +=
                  nl(n) +
                  i +
                  ": " +
                  m +
                  `
`),
                (a +=
                  rr(n) +
                  i +
                  ": " +
                  f +
                  `
`))
              : (a +=
                  nl(n) +
                  i +
                  ": " +
                  m +
                  `
`);
          }
        for (var g in r)
          r.hasOwnProperty(g) &&
            ((e = gi(r[g], 120 - 2 * n - g.length - 2)),
            (a +=
              rr(n) +
              g +
              ": " +
              e +
              `
`));
        return a;
      }
      function FT(e, t, n, a) {
        var r = "",
          i = new Map();
        for (b in n) n.hasOwnProperty(b) && i.set(b.toLowerCase(), b);
        if (i.size === 1 && i.has("children")) r += xf(e, t, xn(a));
        else {
          for (var f in t)
            if (t.hasOwnProperty(f) && f !== "children") {
              var m = 120 - 2 * (a + 1) - f.length - 1,
                g = i.get(f.toLowerCase());
              if (g !== void 0) {
                i.delete(f.toLowerCase());
                var b = t[f];
                g = n[g];
                var U = al(b, m);
                (m = al(g, m)),
                  typeof b == "object" &&
                  b !== null &&
                  typeof g == "object" &&
                  g !== null &&
                  Rf(b) === "Object" &&
                  Rf(g) === "Object" &&
                  (2 < Object.keys(b).length ||
                    2 < Object.keys(g).length ||
                    -1 < U.indexOf("...") ||
                    -1 < m.indexOf("..."))
                    ? (r +=
                        xn(a + 1) +
                        f +
                        `={{
` +
                        QT(b, g, a + 2) +
                        xn(a + 1) +
                        `}}
`)
                    : ((r +=
                        nl(a + 1) +
                        f +
                        "=" +
                        U +
                        `
`),
                      (r +=
                        rr(a + 1) +
                        f +
                        "=" +
                        m +
                        `
`));
              } else
                r +=
                  xn(a + 1) +
                  f +
                  "=" +
                  al(t[f], m) +
                  `
`;
            }
          i.forEach(function (Y) {
            if (Y !== "children") {
              var _ = 120 - 2 * (a + 1) - Y.length - 1;
              r +=
                rr(a + 1) +
                Y +
                "=" +
                al(n[Y], _) +
                `
`;
            }
          }),
            (r =
              r === ""
                ? xn(a) +
                  "<" +
                  e +
                  `>
`
                : xn(a) +
                  "<" +
                  e +
                  `
` +
                  r +
                  xn(a) +
                  `>
`);
        }
        return (
          (e = n.children),
          (t = t.children),
          typeof e == "string" || typeof e == "number" || typeof e == "bigint"
            ? ((i = ""),
              (typeof t == "string" ||
                typeof t == "number" ||
                typeof t == "bigint") &&
                (i = "" + t),
              (r += ts(i, "" + e, a + 1)))
            : (typeof t == "string" ||
                typeof t == "number" ||
                typeof t == "bigint") &&
              (r =
                e == null
                  ? r + ts("" + t, null, a + 1)
                  : r + ts("" + t, void 0, a + 1)),
          r
        );
      }
      function uy(e, t) {
        var n = iy(e);
        if (n === null) {
          for (n = "", e = e.child; e; ) (n += uy(e, t)), (e = e.sibling);
          return n;
        }
        return (
          xn(t) +
          "<" +
          n +
          `>
`
        );
      }
      function wf(e, t) {
        var n = ly(e, t);
        if (n !== e && (e.children.length !== 1 || e.children[0] !== n))
          return (
            xn(t) +
            `...
` +
            wf(n, t + 1)
          );
        n = "";
        var a = e.fiber._debugInfo;
        if (a)
          for (var r = 0; r < a.length; r++) {
            var i = a[r].name;
            typeof i == "string" &&
              ((n +=
                xn(t) +
                "<" +
                i +
                `>
`),
              t++);
          }
        if (((a = ""), (r = e.fiber.pendingProps), e.fiber.tag === 6))
          (a = ts(r, e.serverProps, t)), t++;
        else if (((i = iy(e.fiber)), i !== null))
          if (e.serverProps === void 0) {
            a = t;
            var f = 120 - 2 * a - i.length - 2,
              m = "";
            for (b in r)
              if (r.hasOwnProperty(b) && b !== "children") {
                var g = al(r[b], 15);
                if (((f -= b.length + g.length + 2), 0 > f)) {
                  m += " ...";
                  break;
                }
                m += " " + b + "=" + g;
              }
            (a =
              xn(a) +
              "<" +
              i +
              m +
              `>
`),
              t++;
          } else
            e.serverProps === null
              ? ((a = xf(i, r, nl(t))), t++)
              : typeof e.serverProps == "string"
              ? console.error(
                  "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
                )
              : ((a = FT(i, r, e.serverProps, t)), t++);
        var b = "";
        for (r = e.fiber.child, i = 0; r && i < e.children.length; )
          (f = e.children[i]),
            f.fiber === r ? ((b += wf(f, t)), i++) : (b += uy(r, t)),
            (r = r.sibling);
        for (
          r &&
            0 < e.children.length &&
            (b +=
              xn(t) +
              `...
`),
            r = e.serverTail,
            e.serverProps === null && t--,
            e = 0;
          e < r.length;
          e++
        )
          (i = r[e]),
            (b =
              typeof i == "string"
                ? b +
                  (rr(t) +
                    yi(i, 120 - 2 * t) +
                    `
`)
                : b + xf(i.type, i.props, rr(t)));
        return n + a + b;
      }
      function Af(e) {
        try {
          return (
            `

` + wf(e, 0)
          );
        } catch {
          return "";
        }
      }
      function sy(e, t, n) {
        for (var a = t, r = null, i = 0; a; )
          a === e && (i = 0),
            (r = {
              fiber: a,
              children: r !== null ? [r] : [],
              serverProps: a === t ? n : a === e ? null : void 0,
              serverTail: [],
              distanceFromLeaf: i,
            }),
            i++,
            (a = a.return);
        return r !== null ? Af(r).replaceAll(/^[+-]/gm, ">") : "";
      }
      function cy(e, t) {
        e = qe({}, e || Fb);
        var n = { tag: t };
        return (
          Qb.indexOf(t) !== -1 &&
            ((e.aTagInScope = null),
            (e.buttonTagInScope = null),
            (e.nobrTagInScope = null)),
          Qx.indexOf(t) !== -1 && (e.pTagInButtonScope = null),
          Xx.indexOf(t) !== -1 &&
            t !== "address" &&
            t !== "div" &&
            t !== "p" &&
            ((e.listItemTagAutoclosing = null),
            (e.dlItemTagAutoclosing = null)),
          (e.current = n),
          t === "form" && (e.formTag = n),
          t === "a" && (e.aTagInScope = n),
          t === "button" && (e.buttonTagInScope = n),
          t === "nobr" && (e.nobrTagInScope = n),
          t === "p" && (e.pTagInButtonScope = n),
          t === "li" && (e.listItemTagAutoclosing = n),
          (t === "dd" || t === "dt") && (e.dlItemTagAutoclosing = n),
          t === "#document" || t === "html"
            ? (e.containerTagInScope = null)
            : e.containerTagInScope || (e.containerTagInScope = n),
          e
        );
      }
      function fy(e, t) {
        switch (t) {
          case "select":
            return (
              e === "hr" || e === "option" || e === "optgroup" || e === "#text"
            );
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return (
              e === "th" ||
              e === "td" ||
              e === "style" ||
              e === "script" ||
              e === "template"
            );
          case "tbody":
          case "thead":
          case "tfoot":
            return (
              e === "tr" || e === "style" || e === "script" || e === "template"
            );
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return (
              e === "caption" ||
              e === "colgroup" ||
              e === "tbody" ||
              e === "tfoot" ||
              e === "thead" ||
              e === "style" ||
              e === "script" ||
              e === "template"
            );
          case "head":
            return (
              e === "base" ||
              e === "basefont" ||
              e === "bgsound" ||
              e === "link" ||
              e === "meta" ||
              e === "title" ||
              e === "noscript" ||
              e === "noframes" ||
              e === "style" ||
              e === "script" ||
              e === "template"
            );
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return (
              t !== "h1" &&
              t !== "h2" &&
              t !== "h3" &&
              t !== "h4" &&
              t !== "h5" &&
              t !== "h6"
            );
          case "rp":
          case "rt":
            return Fx.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }
      function IT(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }
      function dy(e, t) {
        for (; e; ) {
          switch (e.tag) {
            case 5:
            case 26:
            case 27:
              if (e.type === t) return e;
          }
          e = e.return;
        }
        return null;
      }
      function Cf(e, t) {
        t = t || Fb;
        var n = t.current;
        if (
          ((t = (n = fy(e, n && n.tag) ? null : n) ? null : IT(e, t)),
          (t = n || t),
          !t)
        )
          return !0;
        t = t.tag;
        var a = String(!!n) + "|" + e + "|" + t;
        if (tc[a]) return !1;
        tc[a] = !0;
        var r = (a = Wt) ? dy(a.return, t) : null;
        return (
          (a = a !== null && r !== null ? sy(r, a, null) : ""),
          (r = "<" + e + ">"),
          n
            ? ((n = ""),
              t === "table" &&
                e === "tr" &&
                (n +=
                  " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),
              console.error(
                `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
                r,
                t,
                n,
                a
              ))
            : console.error(
                `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
                r,
                t,
                a
              ),
          !1
        );
      }
      function ns(e, t) {
        if (fy("#text", t)) return !0;
        var n = "#text|" + t;
        if (tc[n]) return !1;
        tc[n] = !0;
        var a = (n = Wt) ? dy(n, t) : null;
        return (
          (n =
            n !== null && a !== null
              ? sy(a, n, n.tag !== 6 ? { children: null } : null)
              : ""),
          /\S/.test(e)
            ? console.error(
                `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
                t,
                n
              )
            : console.error(
                `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
                t,
                n
              ),
          !1
        );
      }
      function vi(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
          }
        }
        e.textContent = t;
      }
      function ZT(e) {
        return e.replace(Wx, function (t, n) {
          return n.toUpperCase();
        });
      }
      function my(e, t, n) {
        var a = t.indexOf("--") === 0;
        a ||
          (-1 < t.indexOf("-")
            ? (Rl.hasOwnProperty(t) && Rl[t]) ||
              ((Rl[t] = !0),
              console.error(
                "Unsupported style property %s. Did you mean %s?",
                t,
                ZT(t.replace(Zx, "ms-"))
              ))
            : Ix.test(t)
            ? (Rl.hasOwnProperty(t) && Rl[t]) ||
              ((Rl[t] = !0),
              console.error(
                "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                t,
                t.charAt(0).toUpperCase() + t.slice(1)
              ))
            : !Wb.test(n) ||
              (zm.hasOwnProperty(n) && zm[n]) ||
              ((zm[n] = !0),
              console.error(
                `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                t,
                n.replace(Wb, "")
              )),
          typeof n == "number" &&
            (isNaN(n)
              ? Kb ||
                ((Kb = !0),
                console.error(
                  "`NaN` is an invalid value for the `%s` css style property.",
                  t
                ))
              : isFinite(n) ||
                Jb ||
                ((Jb = !0),
                console.error(
                  "`Infinity` is an invalid value for the `%s` css style property.",
                  t
                )))),
          n == null || typeof n == "boolean" || n === ""
            ? a
              ? e.setProperty(t, "")
              : t === "float"
              ? (e.cssFloat = "")
              : (e[t] = "")
            : a
            ? e.setProperty(t, n)
            : typeof n != "number" || n === 0 || e0.has(t)
            ? t === "float"
              ? (e.cssFloat = n)
              : (St(n, t), (e[t] = ("" + n).trim()))
            : (e[t] = n + "px");
      }
      function hy(e, t, n) {
        if (t != null && typeof t != "object")
          throw Error(
            "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
          );
        if ((t && Object.freeze(t), (e = e.style), n != null)) {
          if (t) {
            var a = {};
            if (n) {
              for (var r in n)
                if (n.hasOwnProperty(r) && !t.hasOwnProperty(r))
                  for (var i = _m[r] || [r], f = 0; f < i.length; f++)
                    a[i[f]] = r;
            }
            for (var m in t)
              if (t.hasOwnProperty(m) && (!n || n[m] !== t[m]))
                for (r = _m[m] || [m], i = 0; i < r.length; i++) a[r[i]] = m;
            m = {};
            for (var g in t)
              for (r = _m[g] || [g], i = 0; i < r.length; i++) m[r[i]] = g;
            g = {};
            for (var b in a)
              if (
                ((r = a[b]),
                (i = m[b]) && r !== i && ((f = r + "," + i), !g[f]))
              ) {
                (g[f] = !0), (f = console);
                var U = t[r];
                f.error.call(
                  f,
                  "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                  U == null || typeof U == "boolean" || U === ""
                    ? "Removing"
                    : "Updating",
                  r,
                  i
                );
              }
          }
          for (var Y in n)
            !n.hasOwnProperty(Y) ||
              (t != null && t.hasOwnProperty(Y)) ||
              (Y.indexOf("--") === 0
                ? e.setProperty(Y, "")
                : Y === "float"
                ? (e.cssFloat = "")
                : (e[Y] = ""));
          for (var _ in t)
            (b = t[_]), t.hasOwnProperty(_) && n[_] !== b && my(e, _, b);
        } else for (a in t) t.hasOwnProperty(a) && my(e, a, t[a]);
      }
      function bi(e) {
        if (e.indexOf("-") === -1) return !1;
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
            return !0;
        }
      }
      function py(e) {
        return Kx.get(e) || e;
      }
      function WT(e, t) {
        if (to.call(xl, t) && xl[t]) return !0;
        if (ew.test(t)) {
          if (
            ((e = "aria-" + t.slice(4).toLowerCase()),
            (e = t0.hasOwnProperty(e) ? e : null),
            e == null)
          )
            return (
              console.error(
                "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
                t
              ),
              (xl[t] = !0)
            );
          if (t !== e)
            return (
              console.error(
                "Invalid ARIA attribute `%s`. Did you mean `%s`?",
                t,
                e
              ),
              (xl[t] = !0)
            );
        }
        if (Jx.test(t)) {
          if (
            ((e = t.toLowerCase()),
            (e = t0.hasOwnProperty(e) ? e : null),
            e == null)
          )
            return (xl[t] = !0), !1;
          t !== e &&
            (console.error(
              "Unknown ARIA attribute `%s`. Did you mean `%s`?",
              t,
              e
            ),
            (xl[t] = !0));
        }
        return !0;
      }
      function KT(e, t) {
        var n = [],
          a;
        for (a in t) WT(e, a) || n.push(a);
        (t = n
          .map(function (r) {
            return "`" + r + "`";
          })
          .join(", ")),
          n.length === 1
            ? console.error(
                "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
                t,
                e
              )
            : 1 < n.length &&
              console.error(
                "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
                t,
                e
              );
      }
      function JT(e, t, n, a) {
        if (to.call(ln, t) && ln[t]) return !0;
        var r = t.toLowerCase();
        if (r === "onfocusin" || r === "onfocusout")
          return (
            console.error(
              "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
            ),
            (ln[t] = !0)
          );
        if (
          typeof n == "function" &&
          ((e === "form" && t === "action") ||
            (e === "input" && t === "formAction") ||
            (e === "button" && t === "formAction"))
        )
          return !0;
        if (a != null) {
          if (
            ((e = a.possibleRegistrationNames),
            a.registrationNameDependencies.hasOwnProperty(t))
          )
            return !0;
          if (((a = e.hasOwnProperty(r) ? e[r] : null), a != null))
            return (
              console.error(
                "Invalid event handler property `%s`. Did you mean `%s`?",
                t,
                a
              ),
              (ln[t] = !0)
            );
          if (a0.test(t))
            return (
              console.error(
                "Unknown event handler property `%s`. It will be ignored.",
                t
              ),
              (ln[t] = !0)
            );
        } else if (a0.test(t))
          return (
            tw.test(t) &&
              console.error(
                "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
                t
              ),
            (ln[t] = !0)
          );
        if (nw.test(t) || aw.test(t)) return !0;
        if (r === "innerhtml")
          return (
            console.error(
              "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
            ),
            (ln[t] = !0)
          );
        if (r === "aria")
          return (
            console.error(
              "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
            ),
            (ln[t] = !0)
          );
        if (r === "is" && n !== null && n !== void 0 && typeof n != "string")
          return (
            console.error(
              "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
              typeof n
            ),
            (ln[t] = !0)
          );
        if (typeof n == "number" && isNaN(n))
          return (
            console.error(
              "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
              t
            ),
            (ln[t] = !0)
          );
        if (ac.hasOwnProperty(r)) {
          if (((r = ac[r]), r !== t))
            return (
              console.error(
                "Invalid DOM property `%s`. Did you mean `%s`?",
                t,
                r
              ),
              (ln[t] = !0)
            );
        } else if (t !== r)
          return (
            console.error(
              "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
              t,
              r
            ),
            (ln[t] = !0)
          );
        switch (t) {
          case "dangerouslySetInnerHTML":
          case "children":
          case "style":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "ref":
            return !0;
          case "innerText":
          case "textContent":
            return !0;
        }
        switch (typeof n) {
          case "boolean":
            switch (t) {
              case "autoFocus":
              case "checked":
              case "multiple":
              case "muted":
              case "selected":
              case "contentEditable":
              case "spellCheck":
              case "draggable":
              case "value":
              case "autoReverse":
              case "externalResourcesRequired":
              case "focusable":
              case "preserveAlpha":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "capture":
              case "download":
              case "inert":
                return !0;
              default:
                return (
                  (r = t.toLowerCase().slice(0, 5)),
                  r === "data-" || r === "aria-"
                    ? !0
                    : (n
                        ? console.error(
                            'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                            n,
                            t,
                            t,
                            n,
                            t
                          )
                        : console.error(
                            'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                            n,
                            t,
                            t,
                            n,
                            t,
                            t,
                            t
                          ),
                      (ln[t] = !0))
                );
            }
          case "function":
          case "symbol":
            return (ln[t] = !0), !1;
          case "string":
            if (n === "false" || n === "true") {
              switch (t) {
                case "checked":
                case "selected":
                case "multiple":
                case "muted":
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                case "inert":
                  break;
                default:
                  return !0;
              }
              console.error(
                "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
                n,
                t,
                n === "false"
                  ? "The browser will interpret it as a truthy value."
                  : 'Although this works, it will not work as expected if you pass the string "false".',
                t,
                n
              ),
                (ln[t] = !0);
            }
        }
        return !0;
      }
      function eR(e, t, n) {
        var a = [],
          r;
        for (r in t) JT(e, r, t[r], n) || a.push(r);
        (t = a
          .map(function (i) {
            return "`" + i + "`";
          })
          .join(", ")),
          a.length === 1
            ? console.error(
                "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
                t,
                e
              )
            : 1 < a.length &&
              console.error(
                "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
                t,
                e
              );
      }
      function Si(e) {
        return ow.test("" + e)
          ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
          : e;
      }
      function Of(e) {
        return (
          (e = e.target || e.srcElement || window),
          e.correspondingUseElement && (e = e.correspondingUseElement),
          e.nodeType === 3 ? e.parentNode : e
        );
      }
      function yy(e) {
        var t = ha(e);
        if (t && (e = t.stateNode)) {
          var n = e[gn] || null;
          e: switch (((e = t.stateNode), t.type)) {
            case "input":
              if (
                (Fe(
                  e,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                ),
                (t = n.name),
                n.type === "radio" && t != null)
              ) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  Q(t, "name"),
                    n = n.querySelectorAll(
                      'input[name="' + re("" + t) + '"][type="radio"]'
                    ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var a = n[t];
                  if (a !== e && a.form === e.form) {
                    var r = a[gn] || null;
                    if (!r)
                      throw Error(
                        "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                      );
                    Fe(
                      a,
                      r.value,
                      r.defaultValue,
                      r.defaultValue,
                      r.checked,
                      r.defaultChecked,
                      r.type,
                      r.name
                    );
                  }
                }
                for (t = 0; t < n.length; t++)
                  (a = n[t]), a.form === e.form && se(a);
              }
              break e;
            case "textarea":
              oy(e, n.value, n.defaultValue);
              break e;
            case "select":
              (t = n.value), t != null && na(e, !!n.multiple, t, !1);
          }
        }
      }
      function gy(e, t, n) {
        if (jm) return e(t, n);
        jm = !0;
        try {
          var a = e(t);
          return a;
        } finally {
          if (
            ((jm = !1),
            (wl !== null || Al !== null) &&
              (dl(), wl && ((t = wl), (e = Al), (Al = wl = null), yy(t), e)))
          )
            for (t = 0; t < e.length; t++) yy(e[t]);
        }
      }
      function Ei(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var a = n[gn] || null;
        if (a === null) return null;
        n = a[t];
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
            (a = !a.disabled) ||
              ((e = e.type),
              (a = !(
                e === "button" ||
                e === "input" ||
                e === "select" ||
                e === "textarea"
              ))),
              (e = !a);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && typeof n != "function")
          throw Error(
            "Expected `" +
              t +
              "` listener to be a function, instead got a value of `" +
              typeof n +
              "` type."
          );
        return n;
      }
      function vy() {
        if (oc) return oc;
        var e,
          t = km,
          n = t.length,
          a,
          r = "value" in ko ? ko.value : ko.textContent,
          i = r.length;
        for (e = 0; e < n && t[e] === r[e]; e++);
        var f = n - e;
        for (a = 1; a <= f && t[n - a] === r[i - a]; a++);
        return (oc = r.slice(e, 1 < a ? 1 - a : void 0));
      }
      function as(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
          e === 10 && (e = 13),
          32 <= e || e === 13 ? e : 0
        );
      }
      function os() {
        return !0;
      }
      function by() {
        return !1;
      }
      function hn(e) {
        function t(n, a, r, i, f) {
          (this._reactName = n),
            (this._targetInst = r),
            (this.type = a),
            (this.nativeEvent = i),
            (this.target = f),
            (this.currentTarget = null);
          for (var m in e)
            e.hasOwnProperty(m) && ((n = e[m]), (this[m] = n ? n(i) : i[m]));
          return (
            (this.isDefaultPrevented = (
              i.defaultPrevented != null
                ? i.defaultPrevented
                : i.returnValue === !1
            )
              ? os
              : by),
            (this.isPropagationStopped = by),
            this
          );
        }
        return (
          qe(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var n = this.nativeEvent;
              n &&
                (n.preventDefault
                  ? n.preventDefault()
                  : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                (this.isDefaultPrevented = os));
            },
            stopPropagation: function () {
              var n = this.nativeEvent;
              n &&
                (n.stopPropagation
                  ? n.stopPropagation()
                  : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                (this.isPropagationStopped = os));
            },
            persist: function () {},
            isPersistent: os,
          }),
          t
        );
      }
      function tR(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : (e = gw[e])
          ? !!t[e]
          : !1;
      }
      function Df() {
        return tR;
      }
      function Sy(e, t) {
        switch (e) {
          case "keyup":
            return Dw.indexOf(t.keyCode) !== -1;
          case "keydown":
            return t.keyCode !== i0;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function Ey(e) {
        return (
          (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
        );
      }
      function nR(e, t) {
        switch (e) {
          case "compositionend":
            return Ey(t);
          case "keypress":
            return t.which !== s0 ? null : ((f0 = !0), c0);
          case "textInput":
            return (e = t.data), e === c0 && f0 ? null : e;
          default:
            return null;
        }
      }
      function aR(e, t) {
        if (Cl)
          return e === "compositionend" || (!Ym && Sy(e, t))
            ? ((e = vy()), (oc = km = ko = null), (Cl = !1), e)
            : null;
        switch (e) {
          case "paste":
            return null;
          case "keypress":
            if (
              !(t.ctrlKey || t.altKey || t.metaKey) ||
              (t.ctrlKey && t.altKey)
            ) {
              if (t.char && 1 < t.char.length) return t.char;
              if (t.which) return String.fromCharCode(t.which);
            }
            return null;
          case "compositionend":
            return u0 && t.locale !== "ko" ? null : t.data;
          default:
            return null;
        }
      }
      function Ty(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Mw[e.type] : t === "textarea";
      }
      function oR(e) {
        if (!Oa) return !1;
        e = "on" + e;
        var t = e in document;
        return (
          t ||
            ((t = document.createElement("div")),
            t.setAttribute(e, "return;"),
            (t = typeof t[e] == "function")),
          t
        );
      }
      function Ry(e, t, n, a) {
        wl ? (Al ? Al.push(a) : (Al = [a])) : (wl = a),
          (t = Ls(t, "onChange")),
          0 < t.length &&
            ((n = new rc("onChange", "change", null, n, a)),
            e.push({ event: n, listeners: t }));
      }
      function rR(e) {
        Yv(e, 0);
      }
      function rs(e) {
        var t = Eo(e);
        if (se(t)) return e;
      }
      function xy(e, t) {
        if (e === "change") return t;
      }
      function wy() {
        au && (au.detachEvent("onpropertychange", Ay), (ou = au = null));
      }
      function Ay(e) {
        if (e.propertyName === "value" && rs(ou)) {
          var t = [];
          Ry(t, ou, e, Of(e)), gy(rR, t);
        }
      }
      function lR(e, t, n) {
        e === "focusin"
          ? (wy(), (au = t), (ou = n), au.attachEvent("onpropertychange", Ay))
          : e === "focusout" && wy();
      }
      function iR(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
          return rs(ou);
      }
      function uR(e, t) {
        if (e === "click") return rs(t);
      }
      function sR(e, t) {
        if (e === "input" || e === "change") return rs(t);
      }
      function cR(e, t) {
        return (
          (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
        );
      }
      function Ti(e, t) {
        if (un(e, t)) return !0;
        if (
          typeof e != "object" ||
          e === null ||
          typeof t != "object" ||
          t === null
        )
          return !1;
        var n = Object.keys(e),
          a = Object.keys(t);
        if (n.length !== a.length) return !1;
        for (a = 0; a < n.length; a++) {
          var r = n[a];
          if (!to.call(t, r) || !un(e[r], t[r])) return !1;
        }
        return !0;
      }
      function Cy(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function Oy(e, t) {
        var n = Cy(e);
        e = 0;
        for (var a; n; ) {
          if (n.nodeType === 3) {
            if (((a = e + n.textContent.length), e <= t && a >= t))
              return { node: n, offset: t - e };
            e = a;
          }
          e: {
            for (; n; ) {
              if (n.nextSibling) {
                n = n.nextSibling;
                break e;
              }
              n = n.parentNode;
            }
            n = void 0;
          }
          n = Cy(n);
        }
      }
      function Dy(e, t) {
        return e && t
          ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? Dy(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
          : !1;
      }
      function Ny(e) {
        e =
          e != null &&
          e.ownerDocument != null &&
          e.ownerDocument.defaultView != null
            ? e.ownerDocument.defaultView
            : window;
        for (var t = ge(e.document); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = typeof t.contentWindow.location.href == "string";
          } catch {
            n = !1;
          }
          if (n) e = t.contentWindow;
          else break;
          t = ge(e.document);
        }
        return t;
      }
      function Nf(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          ((t === "input" &&
            (e.type === "text" ||
              e.type === "search" ||
              e.type === "tel" ||
              e.type === "url" ||
              e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
        );
      }
      function fR(e, t) {
        var n = Ny(t);
        t = e.focusedElem;
        var a = e.selectionRange;
        if (
          n !== t &&
          t &&
          t.ownerDocument &&
          Dy(t.ownerDocument.documentElement, t)
        ) {
          if (a !== null && Nf(t)) {
            if (
              ((e = a.start),
              (n = a.end),
              n === void 0 && (n = e),
              "selectionStart" in t)
            )
              (t.selectionStart = e),
                (t.selectionEnd = Math.min(n, t.value.length));
            else if (
              ((n =
                ((e = t.ownerDocument || document) && e.defaultView) || window),
              n.getSelection)
            ) {
              n = n.getSelection();
              var r = t.textContent.length,
                i = Math.min(a.start, r);
              (a = a.end === void 0 ? i : Math.min(a.end, r)),
                !n.extend && i > a && ((r = a), (a = i), (i = r)),
                (r = Oy(t, i));
              var f = Oy(t, a);
              r &&
                f &&
                (n.rangeCount !== 1 ||
                  n.anchorNode !== r.node ||
                  n.anchorOffset !== r.offset ||
                  n.focusNode !== f.node ||
                  n.focusOffset !== f.offset) &&
                ((e = e.createRange()),
                e.setStart(r.node, r.offset),
                n.removeAllRanges(),
                i > a
                  ? (n.addRange(e), n.extend(f.node, f.offset))
                  : (e.setEnd(f.node, f.offset), n.addRange(e)));
            }
          }
          for (e = [], n = t; (n = n.parentNode); )
            n.nodeType === 1 &&
              e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
          for (
            typeof t.focus == "function" && t.focus(), t = 0;
            t < e.length;
            t++
          )
            (n = e[t]),
              (n.element.scrollLeft = n.left),
              (n.element.scrollTop = n.top);
        }
      }
      function My(e, t, n) {
        var a =
          n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Pm ||
          Ol == null ||
          Ol !== ge(a) ||
          ((a = Ol),
          "selectionStart" in a && Nf(a)
            ? (a = { start: a.selectionStart, end: a.selectionEnd })
            : ((a = (
                (a.ownerDocument && a.ownerDocument.defaultView) ||
                window
              ).getSelection()),
              (a = {
                anchorNode: a.anchorNode,
                anchorOffset: a.anchorOffset,
                focusNode: a.focusNode,
                focusOffset: a.focusOffset,
              })),
          (ru && Ti(ru, a)) ||
            ((ru = a),
            (a = Ls(qm, "onSelect")),
            0 < a.length &&
              ((t = new rc("onSelect", "select", null, t, n)),
              e.push({ event: t, listeners: a }),
              (t.target = Ol))));
      }
      function lr(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      function ir(e) {
        if ($m[e]) return $m[e];
        if (!Dl[e]) return e;
        var t = Dl[e],
          n;
        for (n in t) if (t.hasOwnProperty(n) && n in m0) return ($m[e] = t[n]);
        return e;
      }
      function aa(e, t) {
        v0.set(e, t), pa(t, [e]);
      }
      function ls() {
        for (var e = Nl, t = (Gm = Nl = 0); t < e; ) {
          var n = Pn[t];
          Pn[t++] = null;
          var a = Pn[t];
          Pn[t++] = null;
          var r = Pn[t];
          Pn[t++] = null;
          var i = Pn[t];
          if (((Pn[t++] = null), a !== null && r !== null)) {
            var f = a.pending;
            f === null ? (r.next = r) : ((r.next = f.next), (f.next = r)),
              (a.pending = r);
          }
          i !== 0 && Uy(n, r, i);
        }
      }
      function is(e, t, n, a) {
        (Pn[Nl++] = e),
          (Pn[Nl++] = t),
          (Pn[Nl++] = n),
          (Pn[Nl++] = a),
          (Gm |= a),
          (e.lanes |= a),
          (e = e.alternate),
          e !== null && (e.lanes |= a);
      }
      function Mf(e, t, n, a) {
        return is(e, t, n, a), us(e);
      }
      function Zt(e, t) {
        return is(e, null, null, t), us(e);
      }
      function Uy(e, t, n) {
        e.lanes |= n;
        var a = e.alternate;
        a !== null && (a.lanes |= n);
        for (var r = !1, i = e.return; i !== null; )
          (i.childLanes |= n),
            (a = i.alternate),
            a !== null && (a.childLanes |= n),
            i.tag === 22 &&
              ((e = i.stateNode), e === null || e._visibility & ic || (r = !0)),
            (e = i),
            (i = i.return);
        r &&
          t !== null &&
          e.tag === 3 &&
          ((i = e.stateNode),
          (r = 31 - rn(n)),
          (i = i.hiddenUpdates),
          (e = i[r]),
          e === null ? (i[r] = [t]) : e.push(t),
          (t.lane = n | 536870912));
      }
      function us(e) {
        if (Ou > Fw)
          throw (
            ((Br = Ou = 0),
            (Du = Sh = null),
            Error(
              "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
            ))
          );
        Br > Iw &&
          ((Br = 0),
          (Du = null),
          console.error(
            "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
          )),
          e.alternate === null && e.flags & 4098 && _v(e);
        for (var t = e, n = t.return; n !== null; )
          t.alternate === null && t.flags & 4098 && _v(e),
            (t = n),
            (n = t.return);
        return t.tag === 3 ? t.stateNode : null;
      }
      function ur(e) {
        if ($n === null) return e;
        var t = $n(e);
        return t === void 0 ? e : t.current;
      }
      function Uf(e) {
        if ($n === null) return e;
        var t = $n(e);
        return t === void 0
          ? e != null &&
            typeof e.render == "function" &&
            ((t = ur(e.render)), e.render !== t)
            ? ((t = { $$typeof: Fi, render: t }),
              e.displayName !== void 0 && (t.displayName = e.displayName),
              t)
            : e
          : t.current;
      }
      function _y(e, t) {
        if ($n === null) return !1;
        var n = e.elementType;
        t = t.type;
        var a = !1,
          r = typeof t == "object" && t !== null ? t.$$typeof : null;
        switch (e.tag) {
          case 1:
            typeof t == "function" && (a = !0);
            break;
          case 0:
            (typeof t == "function" || r === On) && (a = !0);
            break;
          case 11:
            (r === Fi || r === On) && (a = !0);
            break;
          case 14:
          case 15:
            (r === Zs || r === On) && (a = !0);
            break;
          default:
            return !1;
        }
        return !!(a && ((e = $n(n)), e !== void 0 && e === $n(t)));
      }
      function zy(e) {
        $n !== null &&
          typeof WeakSet == "function" &&
          (Ml === null && (Ml = new WeakSet()), Ml.add(e));
      }
      function _f(e, t, n) {
        var a = e.alternate,
          r = e.child,
          i = e.sibling,
          f = e.tag,
          m = e.type,
          g = null;
        switch (f) {
          case 0:
          case 15:
          case 1:
            g = m;
            break;
          case 11:
            g = m.render;
        }
        if ($n === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var b = !1;
        (m = !1),
          g !== null &&
            ((g = $n(g)),
            g !== void 0 &&
              (n.has(g)
                ? (m = !0)
                : t.has(g) && (f === 1 ? (m = !0) : (b = !0)))),
          Ml !== null && (Ml.has(e) || (a !== null && Ml.has(a))) && (m = !0),
          m && (e._debugNeedsRemount = !0),
          (m || b) && ((a = Zt(e, 2)), a !== null && vt(a, e, 2)),
          r === null || m || _f(r, t, n),
          i !== null && _f(i, t, n);
      }
      function Xa() {
        var e = Ar;
        return (Ar = 0), e;
      }
      function ss(e) {
        var t = Ar;
        return (Ar = e), t;
      }
      function Ri(e) {
        var t = Ar;
        return (Ar += e), t;
      }
      function zf(e) {
        (vn = Ul()), 0 > e.actualStartTime && (e.actualStartTime = vn);
      }
      function jf(e) {
        if (0 <= vn) {
          var t = Ul() - vn;
          (e.actualDuration += t), (e.selfBaseDuration = t), (vn = -1);
        }
      }
      function jy(e) {
        if (0 <= vn) {
          var t = Ul() - vn;
          (e.actualDuration += t), (vn = -1);
        }
      }
      function ga() {
        if (0 <= vn) {
          var e = Ul() - vn;
          (vn = -1), (Ar += e);
        }
      }
      function va() {
        vn = Ul();
      }
      function cs(e) {
        for (var t = e.child; t; )
          (e.actualDuration += t.actualDuration), (t = t.sibling);
      }
      function wn(e, t) {
        if (typeof e == "object" && e !== null) {
          var n = Qm.get(e);
          return n !== void 0
            ? n
            : ((t = { value: e, source: t, stack: $e(t) }), Qm.set(e, t), t);
        }
        return { value: e, source: t, stack: $e(t) };
      }
      function sr(e, t) {
        cr(), (_l[zl++] = mc), (_l[zl++] = dc), (dc = e), (mc = t);
      }
      function Hy(e, t, n) {
        cr(), (Gn[Xn++] = ao), (Gn[Xn++] = oo), (Gn[Xn++] = Or), (Or = e);
        var a = ao;
        e = oo;
        var r = 32 - rn(a) - 1;
        (a &= ~(1 << r)), (n += 1);
        var i = 32 - rn(t) + r;
        if (30 < i) {
          var f = r - (r % 5);
          (i = (a & ((1 << f) - 1)).toString(32)),
            (a >>= f),
            (r -= f),
            (ao = (1 << (32 - rn(t) + r)) | (n << r) | a),
            (oo = i + e);
        } else (ao = (1 << i) | (n << r) | a), (oo = e);
      }
      function Hf(e) {
        cr(), e.return !== null && (sr(e, 1), Hy(e, 1, 0));
      }
      function kf(e) {
        for (; e === dc; )
          (dc = _l[--zl]), (_l[zl] = null), (mc = _l[--zl]), (_l[zl] = null);
        for (; e === Or; )
          (Or = Gn[--Xn]),
            (Gn[Xn] = null),
            (oo = Gn[--Xn]),
            (Gn[Xn] = null),
            (ao = Gn[--Xn]),
            (Gn[Xn] = null);
      }
      function cr() {
        Ze ||
          console.error(
            "Expected to be hydrating. This is a bug in React. Please file an issue."
          );
      }
      function fr(e, t) {
        if (e.return === null) {
          if (Qn === null)
            Qn = {
              fiber: e,
              children: [],
              serverProps: void 0,
              serverTail: [],
              distanceFromLeaf: t,
            };
          else {
            if (Qn.fiber !== e)
              throw Error(
                "Saw multiple hydration diff roots in a pass. This is a bug in React."
              );
            Qn.distanceFromLeaf > t && (Qn.distanceFromLeaf = t);
          }
          return Qn;
        }
        var n = fr(e.return, t + 1).children;
        return 0 < n.length && n[n.length - 1].fiber === e
          ? ((n = n[n.length - 1]),
            n.distanceFromLeaf > t && (n.distanceFromLeaf = t),
            n)
          : ((t = {
              fiber: e,
              children: [],
              serverProps: void 0,
              serverTail: [],
              distanceFromLeaf: t,
            }),
            n.push(t),
            t);
      }
      function Lf(e, t) {
        ro ||
          ((e = fr(e, 0)),
          (e.serverProps = null),
          t !== null && ((t = eb(t)), e.serverTail.push(t)));
      }
      function dr(e) {
        var t = "",
          n = Qn;
        throw (
          (n !== null && ((Qn = null), (t = Af(n))),
          Ai(
            wn(
              Error(
                `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
              ),
              e
            )
          ),
          Fm)
        );
      }
      function ky(e) {
        var t = e.stateNode,
          n = e.type,
          a = e.memoizedProps;
        switch (((t[Jt] = e), (t[gn] = a), nm(n, a), n)) {
          case "dialog":
            Ie("cancel", t), Ie("close", t);
            break;
          case "iframe":
          case "object":
          case "embed":
            Ie("load", t);
            break;
          case "video":
          case "audio":
            for (n = 0; n < Nu.length; n++) Ie(Nu[n], t);
            break;
          case "source":
            Ie("error", t);
            break;
          case "img":
          case "image":
          case "link":
            Ie("error", t), Ie("load", t);
            break;
          case "details":
            Ie("toggle", t);
            break;
          case "input":
            $a("input", a),
              Ie("invalid", t),
              Je(t, a),
              ft(
                t,
                a.value,
                a.defaultValue,
                a.checked,
                a.defaultChecked,
                a.type,
                a.name,
                !0
              ),
              ee(t);
            break;
          case "option":
            ya(t, a);
            break;
          case "select":
            $a("select", a), Ie("invalid", t), kn(t, a);
            break;
          case "textarea":
            $a("textarea", a),
              Ie("invalid", t),
              ay(t, a),
              ry(t, a.value, a.defaultValue, a.children),
              ee(t);
        }
        (n = a.children),
          (typeof n != "string" &&
            typeof n != "number" &&
            typeof n != "bigint") ||
          t.textContent === "" + n ||
          a.suppressHydrationWarning === !0 ||
          Gv(t.textContent, n)
            ? (a.popover != null && (Ie("beforetoggle", t), Ie("toggle", t)),
              a.onScroll != null && Ie("scroll", t),
              a.onScrollEnd != null && Ie("scrollend", t),
              a.onClick != null && (t.onclick = Bs),
              (t = !0))
            : (t = !1),
          t || dr(e);
      }
      function Ly(e) {
        for (sn = e.return; sn; )
          switch (sn.tag) {
            case 3:
            case 27:
              Da = !0;
              return;
            case 5:
            case 13:
              Da = !1;
              return;
            default:
              sn = sn.return;
          }
      }
      function xi(e) {
        if (e !== sn) return !1;
        if (!Ze) return Ly(e), (Ze = !0), !1;
        var t = !1,
          n;
        if (
          ((n = e.tag !== 3 && e.tag !== 27) &&
            ((n = e.tag === 5) &&
              ((n = e.type),
              (n =
                !(n !== "form" && n !== "button") ||
                lm(e.type, e.memoizedProps))),
            (n = !n)),
          n && (t = !0),
          t && Qt)
        ) {
          for (t = Qt; t; ) {
            n = fr(e, 0);
            var a = eb(t);
            n.serverTail.push(a),
              (t = a.type === "Suspense" ? nb(t) : Yn(t.nextSibling));
          }
          dr(e);
        }
        if ((Ly(e), e.tag === 13)) {
          if (
            ((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)
          )
            throw Error(
              "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
            );
          Qt = nb(e);
        } else Qt = sn ? Yn(e.stateNode.nextSibling) : null;
        return !0;
      }
      function wi() {
        (Qt = sn = null), (ro = Ze = !1);
      }
      function Ai(e) {
        ua === null ? (ua = [e]) : ua.push(e);
      }
      function By() {
        var e = Qn;
        e !== null &&
          ((Qn = null),
          (e = Af(e)),
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            e
          ));
      }
      function Vy() {
        return { didWarnAboutUncachedPromise: !1, thenables: [] };
      }
      function Yy(e) {
        return (e = e.status), e === "fulfilled" || e === "rejected";
      }
      function fs() {}
      function qy(e, t, n) {
        L.actQueue !== null && (L.didUsePromise = !0);
        var a = e.thenables;
        switch (
          ((n = a[n]),
          n === void 0
            ? a.push(t)
            : n !== t &&
              (e.didWarnAboutUncachedPromise ||
                ((e.didWarnAboutUncachedPromise = !0),
                console.error(
                  "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
                )),
              t.then(fs, fs),
              (t = n)),
          t.status)
        ) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), $y(e), e);
          default:
            if (typeof t.status == "string") t.then(fs, fs);
            else {
              if (((e = ut), e !== null && 100 < e.shellSuspendCounter))
                throw Error(
                  "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
                );
              (e = t),
                (e.status = "pending"),
                e.then(
                  function (r) {
                    if (t.status === "pending") {
                      var i = t;
                      (i.status = "fulfilled"), (i.value = r);
                    }
                  },
                  function (r) {
                    if (t.status === "pending") {
                      var i = t;
                      (i.status = "rejected"), (i.reason = r);
                    }
                  }
                );
            }
            switch (t.status) {
              case "fulfilled":
                return t.value;
              case "rejected":
                throw ((e = t.reason), $y(e), e);
            }
            throw ((mu = t), (pc = !0), hc);
        }
      }
      function Py() {
        if (mu === null)
          throw Error(
            "Expected a suspended thenable. This is a bug in React. Please file an issue."
          );
        var e = mu;
        return (mu = null), (pc = !1), e;
      }
      function $y(e) {
        if (e === hc)
          throw Error(
            "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
          );
      }
      function qt(e) {
        var t = Ye;
        return e != null && (Ye = t === null ? e : t.concat(e)), t;
      }
      function ds(e, t, n) {
        for (var a = Object.keys(e.props), r = 0; r < a.length; r++) {
          var i = a[r];
          if (i !== "children" && i !== "key") {
            t === null &&
              ((t = js(e, n.mode, 0)), (t._debugInfo = Ye), (t.return = n)),
              J(
                t,
                function (f) {
                  console.error(
                    "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                    f
                  );
                },
                i
              );
            break;
          }
        }
      }
      function ms(e) {
        var t = hu;
        return (hu += 1), jl === null && (jl = Vy()), qy(jl, e, t);
      }
      function Ci(e, t) {
        (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
      }
      function hs(e, t) {
        throw t.$$typeof === Cx
          ? Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`)
          : ((e = Object.prototype.toString.call(t)),
            Error(
              "Objects are not valid as a React child (found: " +
                (e === "[object Object]"
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e) +
                "). If you meant to render a collection of children, use an array instead."
            ));
      }
      function ps(e, t) {
        var n = X(e) || "Component";
        k0[n] ||
          ((k0[n] = !0),
          (t = t.displayName || t.name || "Component"),
          e.tag === 3
            ? console.error(
                `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
                t,
                t,
                t
              )
            : console.error(
                `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
                t,
                t,
                n,
                t,
                n
              ));
      }
      function ys(e, t) {
        var n = X(e) || "Component";
        L0[n] ||
          ((L0[n] = !0),
          (t = String(t)),
          e.tag === 3
            ? console.error(
                `Symbols are not valid as a React child.
  root.render(%s)`,
                t
              )
            : console.error(
                `Symbols are not valid as a React child.
  <%s>%s</%s>`,
                n,
                t,
                n
              ));
      }
      function Gy(e) {
        function t(w, x) {
          if (e) {
            var C = w.deletions;
            C === null ? ((w.deletions = [x]), (w.flags |= 16)) : C.push(x);
          }
        }
        function n(w, x) {
          if (!e) return null;
          for (; x !== null; ) t(w, x), (x = x.sibling);
          return null;
        }
        function a(w) {
          for (var x = new Map(); w !== null; )
            w.key !== null ? x.set(w.key, w) : x.set(w.index, w),
              (w = w.sibling);
          return x;
        }
        function r(w, x) {
          return (w = Mo(w, x)), (w.index = 0), (w.sibling = null), w;
        }
        function i(w, x, C) {
          return (
            (w.index = C),
            e
              ? ((C = w.alternate),
                C !== null
                  ? ((C = C.index), C < x ? ((w.flags |= 33554434), x) : C)
                  : ((w.flags |= 33554434), x))
              : ((w.flags |= 1048576), x)
          );
        }
        function f(w) {
          return e && w.alternate === null && (w.flags |= 33554434), w;
        }
        function m(w, x, C, V) {
          return x === null || x.tag !== 6
            ? ((x = qd(C, w.mode, V)),
              (x.return = w),
              (x._debugOwner = w),
              (x._debugInfo = Ye),
              x)
            : ((x = r(x, C)), (x.return = w), (x._debugInfo = Ye), x);
        }
        function g(w, x, C, V) {
          var ne = C.type;
          return ne === bl
            ? ((x = U(w, x, C.props.children, V, C.key)), ds(C, x, w), x)
            : x !== null &&
              (x.elementType === ne ||
                _y(x, C) ||
                (typeof ne == "object" &&
                  ne !== null &&
                  ne.$$typeof === On &&
                  Bo(ne) === x.type))
            ? ((x = r(x, C.props)),
              Ci(x, C),
              (x.return = w),
              (x._debugOwner = C._owner),
              (x._debugInfo = Ye),
              x)
            : ((x = js(C, w.mode, V)),
              Ci(x, C),
              (x.return = w),
              (x._debugInfo = Ye),
              x);
        }
        function b(w, x, C, V) {
          return x === null ||
            x.tag !== 4 ||
            x.stateNode.containerInfo !== C.containerInfo ||
            x.stateNode.implementation !== C.implementation
            ? ((x = Pd(C, w.mode, V)), (x.return = w), (x._debugInfo = Ye), x)
            : ((x = r(x, C.children || [])),
              (x.return = w),
              (x._debugInfo = Ye),
              x);
        }
        function U(w, x, C, V, ne) {
          return x === null || x.tag !== 7
            ? ((x = Sr(C, w.mode, V, ne)),
              (x.return = w),
              (x._debugOwner = w),
              (x._debugInfo = Ye),
              x)
            : ((x = r(x, C)), (x.return = w), (x._debugInfo = Ye), x);
        }
        function Y(w, x, C) {
          if (
            (typeof x == "string" && x !== "") ||
            typeof x == "number" ||
            typeof x == "bigint"
          )
            return (
              (x = qd("" + x, w.mode, C)),
              (x.return = w),
              (x._debugOwner = w),
              (x._debugInfo = Ye),
              x
            );
          if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
              case _o:
                return (
                  (C = js(x, w.mode, C)),
                  Ci(C, x),
                  (C.return = w),
                  (w = qt(x._debugInfo)),
                  (C._debugInfo = Ye),
                  (Ye = w),
                  C
                );
              case vl:
                return (
                  (x = Pd(x, w.mode, C)), (x.return = w), (x._debugInfo = Ye), x
                );
              case On:
                var V = qt(x._debugInfo);
                return (x = Bo(x)), (w = Y(w, x, C)), (Ye = V), w;
            }
            if (Gt(x) || z(x))
              return (
                (C = Sr(x, w.mode, C, null)),
                (C.return = w),
                (C._debugOwner = w),
                (w = qt(x._debugInfo)),
                (C._debugInfo = Ye),
                (Ye = w),
                C
              );
            if (typeof x.then == "function")
              return (V = qt(x._debugInfo)), (w = Y(w, ms(x), C)), (Ye = V), w;
            if (x.$$typeof === Ra) return Y(w, Ms(w, x), C);
            hs(w, x);
          }
          return (
            typeof x == "function" && ps(w, x),
            typeof x == "symbol" && ys(w, x),
            null
          );
        }
        function _(w, x, C, V) {
          var ne = x !== null ? x.key : null;
          if (
            (typeof C == "string" && C !== "") ||
            typeof C == "number" ||
            typeof C == "bigint"
          )
            return ne !== null ? null : m(w, x, "" + C, V);
          if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
              case _o:
                return C.key === ne
                  ? ((ne = qt(C._debugInfo)), (w = g(w, x, C, V)), (Ye = ne), w)
                  : null;
              case vl:
                return C.key === ne ? b(w, x, C, V) : null;
              case On:
                return (
                  (ne = qt(C._debugInfo)),
                  (C = Bo(C)),
                  (w = _(w, x, C, V)),
                  (Ye = ne),
                  w
                );
            }
            if (Gt(C) || z(C))
              return ne !== null
                ? null
                : ((ne = qt(C._debugInfo)),
                  (w = U(w, x, C, V, null)),
                  (Ye = ne),
                  w);
            if (typeof C.then == "function")
              return (
                (ne = qt(C._debugInfo)), (w = _(w, x, ms(C), V)), (Ye = ne), w
              );
            if (C.$$typeof === Ra) return _(w, x, Ms(w, C), V);
            hs(w, C);
          }
          return (
            typeof C == "function" && ps(w, C),
            typeof C == "symbol" && ys(w, C),
            null
          );
        }
        function $(w, x, C, V, ne) {
          if (
            (typeof V == "string" && V !== "") ||
            typeof V == "number" ||
            typeof V == "bigint"
          )
            return (w = w.get(C) || null), m(x, w, "" + V, ne);
          if (typeof V == "object" && V !== null) {
            switch (V.$$typeof) {
              case _o:
                return (
                  (C = w.get(V.key === null ? C : V.key) || null),
                  (w = qt(V._debugInfo)),
                  (x = g(x, C, V, ne)),
                  (Ye = w),
                  x
                );
              case vl:
                return (
                  (w = w.get(V.key === null ? C : V.key) || null),
                  b(x, w, V, ne)
                );
              case On:
                var ze = qt(V._debugInfo);
                return (V = Bo(V)), (x = $(w, x, C, V, ne)), (Ye = ze), x;
            }
            if (Gt(V) || z(V))
              return (
                (C = w.get(C) || null),
                (w = qt(V._debugInfo)),
                (x = U(x, C, V, ne, null)),
                (Ye = w),
                x
              );
            if (typeof V.then == "function")
              return (
                (ze = qt(V._debugInfo)),
                (x = $(w, x, C, ms(V), ne)),
                (Ye = ze),
                x
              );
            if (V.$$typeof === Ra) return $(w, x, C, Ms(x, V), ne);
            hs(x, V);
          }
          return (
            typeof V == "function" && ps(x, V),
            typeof V == "symbol" && ys(x, V),
            null
          );
        }
        function he(w, x, C, V) {
          if (typeof C != "object" || C === null) return V;
          switch (C.$$typeof) {
            case _o:
            case vl:
              T(w, x, C);
              var ne = C.key;
              if (typeof ne != "string") break;
              if (V === null) {
                (V = new Set()), V.add(ne);
                break;
              }
              if (!V.has(ne)) {
                V.add(ne);
                break;
              }
              J(x, function () {
                console.error(
                  "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                  ne
                );
              });
              break;
            case On:
              (C = Bo(C)), he(w, x, C, V);
          }
          return V;
        }
        function ke(w, x, C, V) {
          for (
            var ne = null,
              ze = null,
              fe = null,
              He = x,
              Le = (x = 0),
              ht = null;
            He !== null && Le < C.length;
            Le++
          ) {
            He.index > Le ? ((ht = He), (He = null)) : (ht = He.sibling);
            var Ot = _(w, He, C[Le], V);
            if (Ot === null) {
              He === null && (He = ht);
              break;
            }
            (ne = he(w, Ot, C[Le], ne)),
              e && He && Ot.alternate === null && t(w, He),
              (x = i(Ot, x, Le)),
              fe === null ? (ze = Ot) : (fe.sibling = Ot),
              (fe = Ot),
              (He = ht);
          }
          if (Le === C.length) return n(w, He), Ze && sr(w, Le), ze;
          if (He === null) {
            for (; Le < C.length; Le++)
              (He = Y(w, C[Le], V)),
                He !== null &&
                  ((ne = he(w, He, C[Le], ne)),
                  (x = i(He, x, Le)),
                  fe === null ? (ze = He) : (fe.sibling = He),
                  (fe = He));
            return Ze && sr(w, Le), ze;
          }
          for (He = a(He); Le < C.length; Le++)
            (ht = $(He, w, Le, C[Le], V)),
              ht !== null &&
                ((ne = he(w, ht, C[Le], ne)),
                e &&
                  ht.alternate !== null &&
                  He.delete(ht.key === null ? Le : ht.key),
                (x = i(ht, x, Le)),
                fe === null ? (ze = ht) : (fe.sibling = ht),
                (fe = ht));
          return (
            e &&
              He.forEach(function (po) {
                return t(w, po);
              }),
            Ze && sr(w, Le),
            ze
          );
        }
        function Ct(w, x, C, V) {
          if (C == null)
            throw Error("An iterable object provided no iterator.");
          for (
            var ne = null,
              ze = null,
              fe = x,
              He = (x = 0),
              Le = null,
              ht = null,
              Ot = C.next();
            fe !== null && !Ot.done;
            He++, Ot = C.next()
          ) {
            fe.index > He ? ((Le = fe), (fe = null)) : (Le = fe.sibling);
            var po = _(w, fe, Ot.value, V);
            if (po === null) {
              fe === null && (fe = Le);
              break;
            }
            (ht = he(w, po, Ot.value, ht)),
              e && fe && po.alternate === null && t(w, fe),
              (x = i(po, x, He)),
              ze === null ? (ne = po) : (ze.sibling = po),
              (ze = po),
              (fe = Le);
          }
          if (Ot.done) return n(w, fe), Ze && sr(w, He), ne;
          if (fe === null) {
            for (; !Ot.done; He++, Ot = C.next())
              (fe = Y(w, Ot.value, V)),
                fe !== null &&
                  ((ht = he(w, fe, Ot.value, ht)),
                  (x = i(fe, x, He)),
                  ze === null ? (ne = fe) : (ze.sibling = fe),
                  (ze = fe));
            return Ze && sr(w, He), ne;
          }
          for (fe = a(fe); !Ot.done; He++, Ot = C.next())
            (Le = $(fe, w, He, Ot.value, V)),
              Le !== null &&
                ((ht = he(w, Le, Ot.value, ht)),
                e &&
                  Le.alternate !== null &&
                  fe.delete(Le.key === null ? He : Le.key),
                (x = i(Le, x, He)),
                ze === null ? (ne = Le) : (ze.sibling = Le),
                (ze = Le));
          return (
            e &&
              fe.forEach(function (iA) {
                return t(w, iA);
              }),
            Ze && sr(w, He),
            ne
          );
        }
        function tt(w, x, C, V) {
          if (
            (typeof C == "object" &&
              C !== null &&
              C.type === bl &&
              C.key === null &&
              (ds(C, null, w), (C = C.props.children)),
            typeof C == "object" && C !== null)
          ) {
            switch (C.$$typeof) {
              case _o:
                var ne = qt(C._debugInfo);
                e: {
                  for (var ze = C.key; x !== null; ) {
                    if (x.key === ze) {
                      if (((ze = C.type), ze === bl)) {
                        if (x.tag === 7) {
                          n(w, x.sibling),
                            (V = r(x, C.props.children)),
                            (V.return = w),
                            (V._debugOwner = C._owner),
                            (V._debugInfo = Ye),
                            ds(C, V, w),
                            (w = V);
                          break e;
                        }
                      } else if (
                        x.elementType === ze ||
                        _y(x, C) ||
                        (typeof ze == "object" &&
                          ze !== null &&
                          ze.$$typeof === On &&
                          Bo(ze) === x.type)
                      ) {
                        n(w, x.sibling),
                          (V = r(x, C.props)),
                          Ci(V, C),
                          (V.return = w),
                          (V._debugOwner = C._owner),
                          (V._debugInfo = Ye),
                          (w = V);
                        break e;
                      }
                      n(w, x);
                      break;
                    } else t(w, x);
                    x = x.sibling;
                  }
                  C.type === bl
                    ? ((V = Sr(C.props.children, w.mode, V, C.key)),
                      (V.return = w),
                      (V._debugOwner = w),
                      (V._debugInfo = Ye),
                      ds(C, V, w),
                      (w = V))
                    : ((V = js(C, w.mode, V)),
                      Ci(V, C),
                      (V.return = w),
                      (V._debugInfo = Ye),
                      (w = V));
                }
                return (w = f(w)), (Ye = ne), w;
              case vl:
                e: {
                  for (ne = C, C = ne.key; x !== null; ) {
                    if (x.key === C)
                      if (
                        x.tag === 4 &&
                        x.stateNode.containerInfo === ne.containerInfo &&
                        x.stateNode.implementation === ne.implementation
                      ) {
                        n(w, x.sibling),
                          (V = r(x, ne.children || [])),
                          (V.return = w),
                          (w = V);
                        break e;
                      } else {
                        n(w, x);
                        break;
                      }
                    else t(w, x);
                    x = x.sibling;
                  }
                  (V = Pd(ne, w.mode, V)), (V.return = w), (w = V);
                }
                return f(w);
              case On:
                return (
                  (ne = qt(C._debugInfo)),
                  (C = Bo(C)),
                  (w = tt(w, x, C, V)),
                  (Ye = ne),
                  w
                );
            }
            if (Gt(C))
              return (
                (ne = qt(C._debugInfo)), (w = ke(w, x, C, V)), (Ye = ne), w
              );
            if (z(C)) {
              if (
                ((ne = qt(C._debugInfo)), (ze = z(C)), typeof ze != "function")
              )
                throw Error(
                  "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
                );
              var fe = ze.call(C);
              return (
                fe === C
                  ? (w.tag !== 0 ||
                      Object.prototype.toString.call(w.type) !==
                        "[object GeneratorFunction]" ||
                      Object.prototype.toString.call(fe) !==
                        "[object Generator]") &&
                    (j0 ||
                      console.error(
                        "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
                      ),
                    (j0 = !0))
                  : C.entries !== ze ||
                    Km ||
                    (console.error(
                      "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
                    ),
                    (Km = !0)),
                (w = Ct(w, x, fe, V)),
                (Ye = ne),
                w
              );
            }
            if (typeof C.then == "function")
              return (
                (ne = qt(C._debugInfo)), (w = tt(w, x, ms(C), V)), (Ye = ne), w
              );
            if (C.$$typeof === Ra) return tt(w, x, Ms(w, C), V);
            hs(w, C);
          }
          return (typeof C == "string" && C !== "") ||
            typeof C == "number" ||
            typeof C == "bigint"
            ? ((ne = "" + C),
              x !== null && x.tag === 6
                ? (n(w, x.sibling), (V = r(x, ne)), (V.return = w), (w = V))
                : (n(w, x),
                  (V = qd(ne, w.mode, V)),
                  (V.return = w),
                  (V._debugOwner = w),
                  (V._debugInfo = Ye),
                  (w = V)),
              f(w))
            : (typeof C == "function" && ps(w, C),
              typeof C == "symbol" && ys(w, C),
              n(w, x));
        }
        return function (w, x, C, V) {
          var ne = Ye;
          Ye = null;
          try {
            hu = 0;
            var ze = tt(w, x, C, V);
            return (jl = null), ze;
          } catch (ht) {
            if (ht === hc) throw ht;
            var fe = y(29, ht, null, w.mode);
            (fe.lanes = V), (fe.return = w);
            var He = (fe._debugInfo = Ye);
            if (((fe._debugOwner = w._debugOwner), He != null)) {
              for (var Le = He.length - 1; 0 <= Le; Le--)
                if (typeof He[Le].stack == "string") {
                  fe._debugOwner = He[Le];
                  break;
                }
            }
            return fe;
          } finally {
            Ye = ne;
          }
        };
      }
      function Xy(e, t) {
        var n = Ua;
        oe(yc, n, e), oe(Hl, t, e), (Ua = n | t.baseLanes);
      }
      function Bf(e) {
        oe(yc, Ua, e), oe(Hl, Hl.current, e);
      }
      function Vf(e) {
        (Ua = yc.current), F(Hl, e), F(yc, e);
      }
      function xo(e) {
        var t = e.alternate;
        oe(_t, _t.current & kl, e),
          oe(Fn, e, e),
          Na === null &&
            (t === null || Hl.current !== null || t.memoizedState !== null) &&
            (Na = e);
      }
      function Qy(e) {
        if (e.tag === 22) {
          if ((oe(_t, _t.current, e), oe(Fn, e, e), Na === null)) {
            var t = e.alternate;
            t !== null && t.memoizedState !== null && (Na = e);
          }
        } else wo(e);
      }
      function wo(e) {
        oe(_t, _t.current, e), oe(Fn, Fn.current, e);
      }
      function Qa(e) {
        F(Fn, e), Na === e && (Na = null), F(_t, e);
      }
      function gs(e) {
        for (var t = e; t !== null; ) {
          if (t.tag === 13) {
            var n = t.memoizedState;
            if (
              n !== null &&
              ((n = n.dehydrated), n === null || n.data === qr || n.data === Pr)
            )
              return t;
          } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
          } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      function Yf() {
        return { controller: new Vw(), data: new Map(), refCount: 0 };
      }
      function mr(e) {
        e.controller.signal.aborted &&
          console.warn(
            "A cache instance was retained after it was already freed. This likely indicates a bug in React."
          ),
          e.refCount++;
      }
      function Oi(e) {
        e.refCount--,
          0 > e.refCount &&
            console.warn(
              "A cache instance was released after it was already freed. This likely indicates a bug in React."
            ),
          e.refCount === 0 &&
            Yw(qw, function () {
              e.controller.abort();
            });
      }
      function dR(e, t) {
        if (yu === null) {
          var n = (yu = []);
          (Jm = 0),
            (Nr = Kd()),
            (Ll = {
              status: "pending",
              value: void 0,
              then: function (a) {
                n.push(a);
              },
            });
        }
        return Jm++, t.then(Fy, Fy), t;
      }
      function Fy() {
        if (--Jm === 0 && yu !== null) {
          Ll !== null && (Ll.status = "fulfilled");
          var e = yu;
          (yu = null), (Nr = 0), (Ll = null);
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
      }
      function mR(e, t) {
        var n = [],
          a = {
            status: "pending",
            value: null,
            reason: null,
            then: function (r) {
              n.push(r);
            },
          };
        return (
          e.then(
            function () {
              (a.status = "fulfilled"), (a.value = t);
              for (var r = 0; r < n.length; r++) (0, n[r])(t);
            },
            function (r) {
              for (
                a.status = "rejected", a.reason = r, r = 0;
                r < n.length;
                r++
              )
                (0, n[r])(void 0);
            }
          ),
          a
        );
      }
      function qf() {
        var e = Mr.current;
        return e !== null ? e : ut.pooledCache;
      }
      function vs(e, t) {
        t === null ? oe(Mr, Mr.current, e) : oe(Mr, t.pool, e);
      }
      function Iy() {
        var e = qf();
        return e === null ? null : { parent: jt._currentValue, pool: e };
      }
      function Ge() {
        var e = k;
        Wn === null ? (Wn = [e]) : Wn.push(e);
      }
      function W() {
        var e = k;
        if (Wn !== null && (io++, Wn[io] !== e)) {
          var t = X(Me);
          if (!Y0.has(t) && (Y0.add(t), Wn !== null)) {
            for (var n = "", a = 0; a <= io; a++) {
              var r = Wn[a],
                i = a === io ? e : r;
              for (r = a + 1 + ". " + r; 30 > r.length; ) r += " ";
              (r +=
                i +
                `
`),
                (n += r);
            }
            console.error(
              `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
              t,
              n
            );
          }
        }
      }
      function ol(e) {
        e == null ||
          Gt(e) ||
          console.error(
            "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
            k,
            typeof e
          );
      }
      function bs() {
        var e = X(Me);
        P0.has(e) ||
          (P0.add(e),
          console.error(
            "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
            e
          ));
      }
      function At() {
        throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      }
      function Pf(e, t) {
        if (vu) return !1;
        if (t === null)
          return (
            console.error(
              "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
              k
            ),
            !1
          );
        e.length !== t.length &&
          console.error(
            `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
            k,
            "[" + t.join(", ") + "]",
            "[" + e.join(", ") + "]"
          );
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!un(e[n], t[n])) return !1;
        return !0;
      }
      function $f(e, t, n, a, r, i) {
        (Vo = i),
          (Me = t),
          (Wn = e !== null ? e._debugHookTypes : null),
          (io = -1),
          (vu = e !== null && e.type !== t.type),
          (Object.prototype.toString.call(n) === "[object AsyncFunction]" ||
            Object.prototype.toString.call(n) ===
              "[object AsyncGeneratorFunction]") &&
            ((i = X(Me)),
            eh.has(i) ||
              (eh.add(i),
              console.error(
                "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              ))),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (L.H =
            e !== null && e.memoizedState !== null
              ? qo
              : Wn !== null
              ? _r
              : Yo),
          (Ur = i = (t.mode & en) !== ct);
        var f = Zm(n, a, r);
        if (((Ur = !1), Vl && (f = Gf(t, n, a, r)), i)) {
          We(!0);
          try {
            f = Gf(t, n, a, r);
          } finally {
            We(!1);
          }
        }
        return Zy(e, t), f;
      }
      function Zy(e, t) {
        (t._debugHookTypes = Wn),
          t.dependencies === null
            ? lo !== null &&
              (t.dependencies = {
                lanes: 0,
                firstContext: null,
                _debugThenableState: lo,
              })
            : (t.dependencies._debugThenableState = lo),
          (L.H = Ma);
        var n = it !== null && it.next !== null;
        if (
          ((Vo = 0),
          (Wn = k = Nt = it = Me = null),
          (io = -1),
          e !== null &&
            (e.flags & 31457280) !== (t.flags & 31457280) &&
            console.error(
              "Internal React error: Expected static flag was missing. Please notify the React team."
            ),
          (gc = !1),
          (gu = 0),
          (lo = null),
          n)
        )
          throw Error(
            "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
          );
        e === null ||
          Bt ||
          ((e = e.dependencies), e !== null && Ns(e) && (Bt = !0)),
          pc ? ((pc = !1), (e = !0)) : (e = !1),
          e &&
            ((t = X(t) || "Unknown"),
            q0.has(t) ||
              eh.has(t) ||
              (q0.add(t),
              console.error(
                "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
              )));
      }
      function Gf(e, t, n, a) {
        Me = e;
        var r = 0;
        do {
          if ((Vl && (lo = null), (gu = 0), (Vl = !1), r >= $w))
            throw Error(
              "Too many re-renders. React limits the number of renders to prevent an infinite loop."
            );
          if (((r += 1), (vu = !1), (Nt = it = null), e.updateQueue != null)) {
            var i = e.updateQueue;
            (i.lastEffect = null),
              (i.events = null),
              (i.stores = null),
              i.memoCache != null && (i.memoCache.index = 0);
          }
          (io = -1), (L.H = zr), (i = Zm(t, n, a));
        } while (Vl);
        return i;
      }
      function hR() {
        var e = L.H,
          t = e.useState()[0];
        return (
          (t = typeof t.then == "function" ? Di(t) : t),
          (e = e.useState()[0]),
          (it !== null ? it.memoizedState : null) !== e && (Me.flags |= 1024),
          t
        );
      }
      function Xf() {
        var e = vc !== 0;
        return (vc = 0), e;
      }
      function Qf(e, t, n) {
        (t.updateQueue = e.updateQueue),
          (t.flags =
            (t.mode & la) !== ct ? t.flags & -201328645 : t.flags & -2053),
          (e.lanes &= ~n);
      }
      function Ff(e) {
        if (gc) {
          for (e = e.memoizedState; e !== null; ) {
            var t = e.queue;
            t !== null && (t.pending = null), (e = e.next);
          }
          gc = !1;
        }
        (Vo = 0),
          (Wn = Nt = it = Me = null),
          (io = -1),
          (k = null),
          (Vl = !1),
          (gu = vc = 0),
          (lo = null);
      }
      function pn() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          Nt === null ? (Me.memoizedState = Nt = e) : (Nt = Nt.next = e), Nt
        );
      }
      function at() {
        if (it === null) {
          var e = Me.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = it.next;
        var t = Nt === null ? Me.memoizedState : Nt.next;
        if (t !== null) (Nt = t), (it = e);
        else {
          if (e === null)
            throw Me.alternate === null
              ? Error(
                  "Update hook called on initial render. This is likely a bug in React. Please file an issue."
                )
              : Error("Rendered more hooks than during the previous render.");
          (it = e),
            (e = {
              memoizedState: it.memoizedState,
              baseState: it.baseState,
              baseQueue: it.baseQueue,
              queue: it.queue,
              next: null,
            }),
            Nt === null ? (Me.memoizedState = Nt = e) : (Nt = Nt.next = e);
        }
        return Nt;
      }
      function Di(e) {
        var t = gu;
        return (
          (gu += 1),
          lo === null && (lo = Vy()),
          (e = qy(lo, e, t)),
          (t = Me),
          (Nt === null ? t.memoizedState : Nt.next) === null &&
            ((t = t.alternate),
            (L.H = t !== null && t.memoizedState !== null ? qo : Yo)),
          e
        );
      }
      function Ao(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function") return Di(e);
          if (e.$$typeof === Ra) return yt(e);
        }
        throw Error("An unsupported type was passed to use(): " + String(e));
      }
      function hr(e) {
        var t = null,
          n = Me.updateQueue;
        if ((n !== null && (t = n.memoCache), t == null)) {
          var a = Me.alternate;
          a !== null &&
            ((a = a.updateQueue),
            a !== null &&
              ((a = a.memoCache),
              a != null &&
                (t = {
                  data: a.data.map(function (r) {
                    return r.slice();
                  }),
                  index: 0,
                })));
        }
        if (
          (t == null && (t = { data: [], index: 0 }),
          n === null && ((n = th()), (Me.updateQueue = n)),
          (n.memoCache = t),
          (n = t.data[t.index]),
          n === void 0 || vu)
        )
          for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = Dx;
        else
          n.length !== e &&
            console.error(
              "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
              n.length,
              e
            );
        return t.index++, n;
      }
      function oa(e, t) {
        return typeof t == "function" ? t(e) : t;
      }
      function If(e, t, n) {
        var a = pn();
        if (n !== void 0) {
          var r = n(t);
          if (Ur) {
            We(!0);
            try {
              n(t);
            } finally {
              We(!1);
            }
          }
        } else r = t;
        return (
          (a.memoizedState = a.baseState = r),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: r,
          }),
          (a.queue = e),
          (e = e.dispatch = vR.bind(null, Me, e)),
          [a.memoizedState, e]
        );
      }
      function rl(e) {
        var t = at();
        return Zf(t, it, e);
      }
      function Zf(e, t, n) {
        var a = e.queue;
        if (a === null)
          throw Error(
            "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
          );
        a.lastRenderedReducer = n;
        var r = e.baseQueue,
          i = a.pending;
        if (i !== null) {
          if (r !== null) {
            var f = r.next;
            (r.next = i.next), (i.next = f);
          }
          t.baseQueue !== r &&
            console.error(
              "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
            ),
            (t.baseQueue = r = i),
            (a.pending = null);
        }
        if (((i = e.baseState), r === null)) e.memoizedState = i;
        else {
          t = r.next;
          var m = (f = null),
            g = null,
            b = t,
            U = !1;
          do {
            var Y = b.lane & -536870913;
            if (Y !== b.lane ? (Xe & Y) === Y : (Vo & Y) === Y) {
              var _ = b.revertLane;
              if (_ === 0)
                g !== null &&
                  (g = g.next =
                    {
                      lane: 0,
                      revertLane: 0,
                      action: b.action,
                      hasEagerState: b.hasEagerState,
                      eagerState: b.eagerState,
                      next: null,
                    }),
                  Y === Nr && (U = !0);
              else if ((Vo & _) === _) {
                (b = b.next), _ === Nr && (U = !0);
                continue;
              } else
                (Y = {
                  lane: 0,
                  revertLane: b.revertLane,
                  action: b.action,
                  hasEagerState: b.hasEagerState,
                  eagerState: b.eagerState,
                  next: null,
                }),
                  g === null ? ((m = g = Y), (f = i)) : (g = g.next = Y),
                  (Me.lanes |= _),
                  (Go |= _);
              (Y = b.action),
                Ur && n(i, Y),
                (i = b.hasEagerState ? b.eagerState : n(i, Y));
            } else
              (_ = {
                lane: Y,
                revertLane: b.revertLane,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null,
              }),
                g === null ? ((m = g = _), (f = i)) : (g = g.next = _),
                (Me.lanes |= Y),
                (Go |= Y);
            b = b.next;
          } while (b !== null && b !== t);
          if (
            (g === null ? (f = i) : (g.next = m),
            !un(i, e.memoizedState) && ((Bt = !0), U && ((n = Ll), n !== null)))
          )
            throw n;
          (e.memoizedState = i),
            (e.baseState = f),
            (e.baseQueue = g),
            (a.lastRenderedState = i);
        }
        return r === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
      }
      function Ni(e) {
        var t = at(),
          n = t.queue;
        if (n === null)
          throw Error(
            "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
          );
        n.lastRenderedReducer = e;
        var a = n.dispatch,
          r = n.pending,
          i = t.memoizedState;
        if (r !== null) {
          n.pending = null;
          var f = (r = r.next);
          do (i = e(i, f.action)), (f = f.next);
          while (f !== r);
          un(i, t.memoizedState) || (Bt = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
        }
        return [i, a];
      }
      function Wf(e, t, n) {
        var a = Me,
          r = pn();
        if (Ze) {
          if (n === void 0)
            throw Error(
              "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
            );
          var i = n();
          Bl ||
            i === n() ||
            (console.error(
              "The result of getServerSnapshot should be cached to avoid an infinite loop"
            ),
            (Bl = !0));
        } else {
          if (
            ((i = t()),
            Bl ||
              ((n = t()),
              un(i, n) ||
                (console.error(
                  "The result of getSnapshot should be cached to avoid an infinite loop"
                ),
                (Bl = !0))),
            ut === null)
          )
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          Xe & 60 || Wy(a, t, i);
        }
        return (
          (r.memoizedState = i),
          (n = { value: i, getSnapshot: t }),
          (r.queue = n),
          Rs(Jy.bind(null, a, n, e), [e]),
          (a.flags |= 2048),
          il(Zn | zt, Ky.bind(null, a, n, i, t), { destroy: void 0 }, null),
          i
        );
      }
      function Ss(e, t, n) {
        var a = Me,
          r = at(),
          i = Ze;
        if (i) {
          if (n === void 0)
            throw Error(
              "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
            );
          n = n();
        } else if (((n = t()), !Bl)) {
          var f = t();
          un(n, f) ||
            (console.error(
              "The result of getSnapshot should be cached to avoid an infinite loop"
            ),
            (Bl = !0));
        }
        (f = !un((it || r).memoizedState, n)) &&
          ((r.memoizedState = n), (Bt = !0)),
          (r = r.queue);
        var m = Jy.bind(null, a, r, e);
        if (
          (yn(2048, zt, m, [e]),
          r.getSnapshot !== t ||
            f ||
            (Nt !== null && Nt.memoizedState.tag & Zn))
        ) {
          if (
            ((a.flags |= 2048),
            il(Zn | zt, Ky.bind(null, a, r, n, t), { destroy: void 0 }, null),
            ut === null)
          )
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          i || Vo & 60 || Wy(a, t, n);
        }
        return n;
      }
      function Wy(e, t, n) {
        (e.flags |= 16384),
          (e = { getSnapshot: t, value: n }),
          (t = Me.updateQueue),
          t === null
            ? ((t = th()), (Me.updateQueue = t), (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
      }
      function Ky(e, t, n, a) {
        (t.value = n), (t.getSnapshot = a), eg(t) && tg(e);
      }
      function Jy(e, t, n) {
        return n(function () {
          eg(t) && tg(e);
        });
      }
      function eg(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !un(e, n);
        } catch {
          return !0;
        }
      }
      function tg(e) {
        var t = Zt(e, 2);
        t !== null && vt(t, e, 2);
      }
      function Kf(e) {
        var t = pn();
        if (typeof e == "function") {
          var n = e;
          if (((e = n()), Ur)) {
            We(!0);
            try {
              n();
            } finally {
              We(!1);
            }
          }
        }
        return (
          (t.memoizedState = t.baseState = e),
          (t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: oa,
            lastRenderedState: e,
          }),
          t
        );
      }
      function Jf(e) {
        e = Kf(e);
        var t = e.queue,
          n = Sg.bind(null, Me, t);
        return (t.dispatch = n), [e.memoizedState, n];
      }
      function ed(e) {
        var t = pn();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = md.bind(null, Me, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      }
      function ng(e, t) {
        var n = at();
        return ag(n, it, e, t);
      }
      function ag(e, t, n, a) {
        return (e.baseState = n), Zf(e, it, typeof a == "function" ? a : oa);
      }
      function og(e, t) {
        var n = at();
        return it !== null
          ? ag(n, it, e, t)
          : ((n.baseState = e), [e, n.queue.dispatch]);
      }
      function pR(e, t, n, a, r) {
        if (Cs(e)) throw Error("Cannot update form state while rendering.");
        if (((e = t.action), e !== null)) {
          var i = {
            payload: r,
            action: e,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function (f) {
              i.listeners.push(f);
            },
          };
          L.T !== null ? n(!0) : (i.isTransition = !1),
            a(i),
            (n = t.pending),
            n === null
              ? ((i.next = t.pending = i), rg(t, i))
              : ((i.next = n.next), (t.pending = n.next = i));
        }
      }
      function rg(e, t) {
        var n = t.action,
          a = t.payload,
          r = e.state;
        if (t.isTransition) {
          var i = L.T,
            f = {};
          (L.T = f), (L.T._updatedFibers = new Set());
          try {
            var m = n(r, a),
              g = L.S;
            g !== null && g(f, m), lg(e, t, m);
          } catch (b) {
            td(e, t, b);
          } finally {
            (L.T = i),
              i === null &&
                f._updatedFibers &&
                ((e = f._updatedFibers.size),
                f._updatedFibers.clear(),
                10 < e &&
                  console.warn(
                    "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
                  ));
          }
        } else
          try {
            (f = n(r, a)), lg(e, t, f);
          } catch (b) {
            td(e, t, b);
          }
      }
      function lg(e, t, n) {
        n !== null && typeof n == "object" && typeof n.then == "function"
          ? (n.then(
              function (a) {
                ig(e, t, a);
              },
              function (a) {
                return td(e, t, a);
              }
            ),
            t.isTransition ||
              console.error(
                "An async function was passed to useActionState, but it was dispatched outside of an action context. This is likely not what you intended. Either pass the dispatch function to an `action` prop, or dispatch manually inside `startTransition`"
              ))
          : ig(e, t, n);
      }
      function ig(e, t, n) {
        (t.status = "fulfilled"),
          (t.value = n),
          ug(t),
          (e.state = n),
          (t = e.pending),
          t !== null &&
            ((n = t.next),
            n === t
              ? (e.pending = null)
              : ((n = n.next), (t.next = n), rg(e, n)));
      }
      function td(e, t, n) {
        var a = e.pending;
        if (((e.pending = null), a !== null)) {
          a = a.next;
          do (t.status = "rejected"), (t.reason = n), ug(t), (t = t.next);
          while (t !== a);
        }
        e.action = null;
      }
      function ug(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
      function sg(e, t) {
        return t;
      }
      function ll(e, t) {
        if (Ze) {
          var n = ut.formState;
          if (n !== null) {
            e: {
              var a = Me;
              if (Ze) {
                if (Qt) {
                  t: {
                    for (var r = Qt, i = Da; r.nodeType !== 8; ) {
                      if (!i) {
                        r = null;
                        break t;
                      }
                      if (((r = Yn(r.nextSibling)), r === null)) {
                        r = null;
                        break t;
                      }
                    }
                    (i = r.data), (r = i === Oh || i === DS ? r : null);
                  }
                  if (r) {
                    (Qt = Yn(r.nextSibling)), (a = r.data === Oh);
                    break e;
                  }
                }
                dr(a);
              }
              a = !1;
            }
            a && (t = n[0]);
          }
        }
        return (
          (n = pn()),
          (n.memoizedState = n.baseState = t),
          (a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: sg,
            lastRenderedState: t,
          }),
          (n.queue = a),
          (n = Sg.bind(null, Me, a)),
          (a.dispatch = n),
          (a = Kf(!1)),
          (i = md.bind(null, Me, !1, a.queue)),
          (a = pn()),
          (r = { state: t, dispatch: null, action: e, pending: null }),
          (a.queue = r),
          (n = pR.bind(null, Me, r, i, n)),
          (r.dispatch = n),
          (a.memoizedState = e),
          [t, n, !1]
        );
      }
      function Es(e) {
        var t = at();
        return cg(t, it, e);
      }
      function cg(e, t, n) {
        (t = Zf(e, t, sg)[0]),
          (e = rl(oa)[0]),
          (t =
            typeof t == "object" && t !== null && typeof t.then == "function"
              ? Di(t)
              : t);
        var a = at(),
          r = a.queue,
          i = r.dispatch;
        return (
          n !== a.memoizedState &&
            ((Me.flags |= 2048),
            il(Zn | zt, yR.bind(null, r, n), { destroy: void 0 }, null)),
          [t, i, e]
        );
      }
      function yR(e, t) {
        e.action = t;
      }
      function Ts(e) {
        var t = at(),
          n = it;
        if (n !== null) return cg(t, n, e);
        at(), (t = t.memoizedState), (n = at());
        var a = n.queue.dispatch;
        return (n.memoizedState = e), [t, a, !1];
      }
      function il(e, t, n, a) {
        return (
          (e = { tag: e, create: t, inst: n, deps: a, next: null }),
          (t = Me.updateQueue),
          t === null && ((t = th()), (Me.updateQueue = t)),
          (n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
          e
        );
      }
      function nd(e) {
        var t = pn();
        return (e = { current: e }), (t.memoizedState = e);
      }
      function pr(e, t, n, a) {
        var r = pn();
        (Me.flags |= e),
          (r.memoizedState = il(
            Zn | t,
            n,
            { destroy: void 0 },
            a === void 0 ? null : a
          ));
      }
      function yn(e, t, n, a) {
        var r = at();
        a = a === void 0 ? null : a;
        var i = r.memoizedState.inst;
        it !== null && a !== null && Pf(a, it.memoizedState.deps)
          ? (r.memoizedState = il(t, n, i, a))
          : ((Me.flags |= e), (r.memoizedState = il(Zn | t, n, i, a)));
      }
      function Rs(e, t) {
        (Me.mode & la) !== ct && (Me.mode & S0) === ct
          ? pr(142608384, zt, e, t)
          : pr(8390656, zt, e, t);
      }
      function ad(e, t) {
        var n = 4194308;
        return (Me.mode & la) !== ct && (n |= 67108864), pr(n, Ft, e, t);
      }
      function fg(e, t) {
        if (typeof t == "function") {
          e = e();
          var n = t(e);
          return function () {
            typeof n == "function" ? n() : t(null);
          };
        }
        if (t != null)
          return (
            t.hasOwnProperty("current") ||
              console.error(
                "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
                "an object with keys {" + Object.keys(t).join(", ") + "}"
              ),
            (e = e()),
            (t.current = e),
            function () {
              t.current = null;
            }
          );
      }
      function od(e, t, n) {
        typeof t != "function" &&
          console.error(
            "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
            t !== null ? typeof t : "null"
          ),
          (n = n != null ? n.concat([e]) : null);
        var a = 4194308;
        (Me.mode & la) !== ct && (a |= 67108864),
          pr(a, Ft, fg.bind(null, t, e), n);
      }
      function xs(e, t, n) {
        typeof t != "function" &&
          console.error(
            "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
            t !== null ? typeof t : "null"
          ),
          (n = n != null ? n.concat([e]) : null),
          yn(4, Ft, fg.bind(null, t, e), n);
      }
      function rd(e, t) {
        return (pn().memoizedState = [e, t === void 0 ? null : t]), e;
      }
      function ws(e, t) {
        var n = at();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        return t !== null && Pf(t, a[1])
          ? a[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function ld(e, t) {
        var n = pn();
        t = t === void 0 ? null : t;
        var a = e();
        if (Ur) {
          We(!0);
          try {
            e();
          } finally {
            We(!1);
          }
        }
        return (n.memoizedState = [a, t]), a;
      }
      function As(e, t) {
        var n = at();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        if (t !== null && Pf(t, a[1])) return a[0];
        if (((a = e()), Ur)) {
          We(!0);
          try {
            e();
          } finally {
            We(!1);
          }
        }
        return (n.memoizedState = [a, t]), a;
      }
      function id(e, t) {
        var n = pn();
        return ud(n, e, t);
      }
      function dg(e, t) {
        var n = at();
        return hg(n, it.memoizedState, e, t);
      }
      function mg(e, t) {
        var n = at();
        return it === null ? ud(n, e, t) : hg(n, it.memoizedState, e, t);
      }
      function ud(e, t, n) {
        return n === void 0 || Vo & 1073741824
          ? (e.memoizedState = t)
          : ((e.memoizedState = n), (e = vv()), (Me.lanes |= e), (Go |= e), n);
      }
      function hg(e, t, n, a) {
        return un(n, t)
          ? n
          : Hl.current !== null
          ? ((e = ud(e, n, a)), un(e, t) || (Bt = !0), e)
          : Vo & 42
          ? ((e = vv()), (Me.lanes |= e), (Go |= e), t)
          : ((Bt = !0), (e.memoizedState = n));
      }
      function pg(e, t, n, a, r) {
        var i = dt.p;
        dt.p = i !== 0 && i < Ca ? i : Ca;
        var f = L.T,
          m = {};
        (L.T = m), md(e, !1, t, n), (m._updatedFibers = new Set());
        try {
          var g = r(),
            b = L.S;
          if (
            (b !== null && b(m, g),
            g !== null && typeof g == "object" && typeof g.then == "function")
          ) {
            var U = mR(g, a);
            Mi(e, t, U, Cn(e));
          } else Mi(e, t, a, Cn(e));
        } catch (Y) {
          Mi(
            e,
            t,
            { then: function () {}, status: "rejected", reason: Y },
            Cn(e)
          );
        } finally {
          (dt.p = i),
            (L.T = f),
            f === null &&
              m._updatedFibers &&
              ((e = m._updatedFibers.size),
              m._updatedFibers.clear(),
              10 < e &&
                console.warn(
                  "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
                ));
        }
      }
      function sd(e, t, n, a) {
        if (e.tag !== 5)
          throw Error(
            "Expected the form instance to be a HostComponent. This is a bug in React."
          );
        var r = yg(e).queue;
        pg(
          e,
          r,
          t,
          Gr,
          n === null
            ? R
            : function () {
                return gg(e), n(a);
              }
        );
      }
      function yg(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
          memoizedState: Gr,
          baseState: Gr,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: oa,
            lastRenderedState: Gr,
          },
          next: null,
        };
        var n = {};
        return (
          (t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: oa,
              lastRenderedState: n,
            },
            next: null,
          }),
          (e.memoizedState = t),
          (e = e.alternate),
          e !== null && (e.memoizedState = t),
          t
        );
      }
      function gg(e) {
        L.T === null &&
          console.error(
            "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
          );
        var t = yg(e).next.queue;
        Mi(e, t, {}, Cn(e));
      }
      function cd() {
        var e = Kf(!1);
        return (
          (e = pg.bind(null, Me, e.queue, !0, !1)),
          (pn().memoizedState = e),
          [!1, e]
        );
      }
      function vg() {
        var e = rl(oa)[0],
          t = at().memoizedState;
        return [typeof e == "boolean" ? e : Di(e), t];
      }
      function bg() {
        var e = Ni(oa)[0],
          t = at().memoizedState;
        return [typeof e == "boolean" ? e : Di(e), t];
      }
      function yr() {
        return yt(_u);
      }
      function fd() {
        var e = pn(),
          t = ut.identifierPrefix;
        if (Ze) {
          var n = oo,
            a = ao;
          (n = (a & ~(1 << (32 - rn(a) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = vc++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Pw++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      }
      function dd() {
        return (pn().memoizedState = gR.bind(null, Me));
      }
      function gR(e, t) {
        for (var n = e.return; n !== null; ) {
          switch (n.tag) {
            case 24:
            case 3:
              var a = Cn(n);
              e = Oo(a);
              var r = Do(n, e, a);
              r !== null && (vt(r, n, a), zi(r, n, a)),
                (n = Yf()),
                t != null &&
                  r !== null &&
                  console.error(
                    "The seed argument is not enabled outside experimental channels."
                  ),
                (e.payload = { cache: n });
              return;
          }
          n = n.return;
        }
      }
      function vR(e, t, n, a) {
        typeof a == "function" &&
          console.error(
            "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
          ),
          (a = Cn(e)),
          (n = {
            lane: a,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
          Cs(e)
            ? Eg(t, n)
            : ((n = Mf(e, t, n, a)), n !== null && (vt(n, e, a), Tg(n, t, a))),
          je(e, a);
      }
      function Sg(e, t, n, a) {
        typeof a == "function" &&
          console.error(
            "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
          ),
          (a = Cn(e)),
          Mi(e, t, n, a),
          je(e, a);
      }
      function Mi(e, t, n, a) {
        var r = {
          lane: a,
          revertLane: 0,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
        if (Cs(e)) Eg(t, r);
        else {
          var i = e.alternate;
          if (
            e.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = t.lastRenderedReducer), i !== null)
          ) {
            var f = L.H;
            L.H = fn;
            try {
              var m = t.lastRenderedState,
                g = i(m, n);
              if (((r.hasEagerState = !0), (r.eagerState = g), un(g, m)))
                return is(e, t, r, 0), ut === null && ls(), !1;
            } catch {
            } finally {
              L.H = f;
            }
          }
          if (((n = Mf(e, t, r, a)), n !== null))
            return vt(n, e, a), Tg(n, t, a), !0;
        }
        return !1;
      }
      function md(e, t, n, a) {
        if (
          (L.T === null &&
            Nr === 0 &&
            console.error(
              "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
            ),
          (a = {
            lane: 2,
            revertLane: Kd(),
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
          Cs(e))
        ) {
          if (t) throw Error("Cannot update optimistic state while rendering.");
          console.error("Cannot call startTransition while rendering.");
        } else (t = Mf(e, n, a, 2)), t !== null && vt(t, e, 2);
        je(e, 2);
      }
      function Cs(e) {
        var t = e.alternate;
        return e === Me || (t !== null && t === Me);
      }
      function Eg(e, t) {
        Vl = gc = !0;
        var n = e.pending;
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
          (e.pending = t);
      }
      function Tg(e, t, n) {
        if (n & 4194176) {
          var a = t.lanes;
          (a &= e.pendingLanes), (n |= a), (t.lanes = n), fi(e, n);
        }
      }
      function hd(e) {
        if (e !== null && typeof e != "function") {
          var t = String(e);
          eS.has(t) ||
            (eS.add(t),
            console.error(
              "Expected the last optional `callback` argument to be a function. Instead received: %s.",
              e
            ));
        }
      }
      function pd(e, t, n, a) {
        var r = e.memoizedState,
          i = n(a, r);
        if (e.mode & en) {
          We(!0);
          try {
            i = n(a, r);
          } finally {
            We(!1);
          }
        }
        i === void 0 &&
          ((t = H(t) || "Component"),
          Z0.has(t) ||
            (Z0.add(t),
            console.error(
              "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
              t
            ))),
          (r = i == null ? r : qe({}, r, i)),
          (e.memoizedState = r),
          e.lanes === 0 && (e.updateQueue.baseState = r);
      }
      function Rg(e, t, n, a, r, i, f) {
        var m = e.stateNode;
        if (typeof m.shouldComponentUpdate == "function") {
          if (((n = m.shouldComponentUpdate(a, i, f)), e.mode & en)) {
            We(!0);
            try {
              n = m.shouldComponentUpdate(a, i, f);
            } finally {
              We(!1);
            }
          }
          return (
            n === void 0 &&
              console.error(
                "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
                H(t) || "Component"
              ),
            n
          );
        }
        return t.prototype && t.prototype.isPureReactComponent
          ? !Ti(n, a) || !Ti(r, i)
          : !0;
      }
      function xg(e, t, n, a) {
        var r = t.state;
        typeof t.componentWillReceiveProps == "function" &&
          t.componentWillReceiveProps(n, a),
          typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, a),
          t.state !== r &&
            ((e = X(e) || "Component"),
            G0.has(e) ||
              (G0.add(e),
              console.error(
                "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                e
              )),
            nh.enqueueReplaceState(t, t.state, null));
      }
      function gr(e, t) {
        var n = t;
        if ("ref" in t) {
          n = {};
          for (var a in t) a !== "ref" && (n[a] = t[a]);
        }
        if ((e = e.defaultProps)) {
          n === t && (n = qe({}, n));
          for (var r in e) n[r] === void 0 && (n[r] = e[r]);
        }
        return n;
      }
      function wg(e, t) {
        bc(e),
          (e = Yl
            ? "An error occurred in the <" + Yl + "> component."
            : "An error occurred in one of your React components.");
        var n = L.getCurrentStack,
          a = t.componentStack != null ? t.componentStack : "";
        L.getCurrentStack = function () {
          return a;
        };
        try {
          console.warn(
            `%s

%s
`,
            e,
            `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
          );
        } finally {
          L.getCurrentStack = n;
        }
      }
      function Ag(e, t) {
        var n = Yl
            ? "The above error occurred in the <" + Yl + "> component."
            : "The above error occurred in one of your React components.",
          a =
            "React will try to recreate this component tree from scratch using the error boundary you provided, " +
            ((ah || "Anonymous") + "."),
          r = L.getCurrentStack,
          i = t.componentStack != null ? t.componentStack : "";
        L.getCurrentStack = function () {
          return i;
        };
        try {
          typeof e == "object" &&
          e !== null &&
          typeof e.environmentName == "string"
            ? vx(
                "error",
                [
                  `%o

%s

%s
`,
                  e,
                  n,
                  a,
                ],
                e.environmentName
              )()
            : console.error(
                `%o

%s

%s
`,
                e,
                n,
                a
              );
        } finally {
          L.getCurrentStack = r;
        }
      }
      function Cg(e) {
        bc(e);
      }
      function Os(e, t) {
        try {
          (Yl = t.source ? X(t.source) : null), (ah = null);
          var n = t.value;
          if (L.actQueue !== null) L.thrownErrors.push(n);
          else {
            var a = e.onUncaughtError;
            a(n, { componentStack: t.stack });
          }
        } catch (r) {
          setTimeout(function () {
            throw r;
          });
        }
      }
      function Og(e, t, n) {
        try {
          (Yl = n.source ? X(n.source) : null), (ah = X(t));
          var a = e.onCaughtError;
          a(n.value, {
            componentStack: n.stack,
            errorBoundary: t.tag === 1 ? t.stateNode : null,
          });
        } catch (r) {
          setTimeout(function () {
            throw r;
          });
        }
      }
      function yd(e, t, n) {
        return (
          (n = Oo(n)),
          (n.tag = uh),
          (n.payload = { element: null }),
          (n.callback = function () {
            J(t.source, Os, e, t);
          }),
          n
        );
      }
      function gd(e) {
        return (e = Oo(e)), (e.tag = uh), e;
      }
      function vd(e, t, n, a) {
        var r = n.type.getDerivedStateFromError;
        if (typeof r == "function") {
          var i = a.value;
          (e.payload = function () {
            return r(i);
          }),
            (e.callback = function () {
              zy(n), J(a.source, Og, t, n, a);
            });
        }
        var f = n.stateNode;
        f !== null &&
          typeof f.componentDidCatch == "function" &&
          (e.callback = function () {
            zy(n),
              J(a.source, Og, t, n, a),
              typeof r != "function" &&
                (Qo === null ? (Qo = new Set([this])) : Qo.add(this)),
              kw(this, a),
              typeof r == "function" ||
                (!(n.lanes & 2) &&
                  console.error(
                    "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
                    X(n) || "Unknown"
                  ));
          });
      }
      function bR(e, t, n, a, r) {
        if (
          ((n.flags |= 32768),
          ra && Yi(e, r),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          if (
            ((t = n.alternate),
            t !== null && _i(t, n, r, !0),
            Ze && (ro = !0),
            (n = Fn.current),
            n !== null)
          ) {
            switch (n.tag) {
              case 13:
                return (
                  Na === null
                    ? Xd()
                    : n.alternate === null && Tt === co && (Tt = dh),
                  (n.flags &= -257),
                  (n.flags |= 65536),
                  (n.lanes = r),
                  a === Im
                    ? (n.flags |= 16384)
                    : ((t = n.updateQueue),
                      t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                      Id(e, a, r)),
                  !1
                );
              case 22:
                return (
                  (n.flags |= 65536),
                  a === Im
                    ? (n.flags |= 16384)
                    : ((t = n.updateQueue),
                      t === null
                        ? ((t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([a]),
                          }),
                          (n.updateQueue = t))
                        : ((n = t.retryQueue),
                          n === null
                            ? (t.retryQueue = new Set([a]))
                            : n.add(a)),
                      Id(e, a, r)),
                  !1
                );
            }
            throw Error(
              "Unexpected Suspense handler tag (" +
                n.tag +
                "). This is a bug in React."
            );
          }
          return Id(e, a, r), Xd(), !1;
        }
        if (Ze)
          return (
            (ro = !0),
            (t = Fn.current),
            t !== null
              ? (!(t.flags & 65536) && (t.flags |= 256),
                (t.flags |= 65536),
                (t.lanes = r),
                a !== Fm &&
                  Ai(
                    wn(
                      Error(
                        "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
                        { cause: a }
                      ),
                      n
                    )
                  ))
              : (a !== Fm &&
                  Ai(
                    wn(
                      Error(
                        "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
                        { cause: a }
                      ),
                      n
                    )
                  ),
                (e = e.current.alternate),
                (e.flags |= 65536),
                (r &= -r),
                (e.lanes |= r),
                (a = wn(a, n)),
                (r = yd(e.stateNode, a, r)),
                Us(e, r),
                Tt !== jr && (Tt = Ql)),
            !1
          );
        var i = wn(
          Error(
            "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
            { cause: a }
          ),
          n
        );
        if (
          (wu === null ? (wu = [i]) : wu.push(i),
          Tt !== jr && (Tt = Ql),
          t === null)
        )
          return !0;
        (a = wn(a, n)), (n = t);
        do {
          switch (n.tag) {
            case 3:
              return (
                (n.flags |= 65536),
                (e = r & -r),
                (n.lanes |= e),
                (e = yd(n.stateNode, a, e)),
                Us(n, e),
                !1
              );
            case 1:
              if (
                ((t = n.type),
                (i = n.stateNode),
                (n.flags & 128) === 0 &&
                  (typeof t.getDerivedStateFromError == "function" ||
                    (i !== null &&
                      typeof i.componentDidCatch == "function" &&
                      (Qo === null || !Qo.has(i)))))
              )
                return (
                  (n.flags |= 65536),
                  (r &= -r),
                  (n.lanes |= r),
                  (r = gd(r)),
                  vd(r, e, n, a),
                  Us(n, r),
                  !1
                );
          }
          n = n.return;
        } while (n !== null);
        return !1;
      }
      function Pt(e, t, n, a) {
        t.child = e === null ? B0(t, null, n, a) : Dr(t, e.child, n, a);
      }
      function Dg(e, t, n, a, r) {
        n = n.render;
        var i = t.ref;
        if ("ref" in a) {
          var f = {};
          for (var m in a) m !== "ref" && (f[m] = a[m]);
        } else f = a;
        return (
          vr(t),
          ea(t),
          (a = $f(e, t, n, f, i, r)),
          (m = Xf()),
          A(),
          e !== null && !Bt
            ? (Qf(e, t, r), Fa(e, t, r))
            : (Ze && m && Hf(t), (t.flags |= 1), Pt(e, t, a, r), t.child)
        );
      }
      function Ng(e, t, n, a, r) {
        if (e === null) {
          var i = n.type;
          return typeof i == "function" &&
            !Vd(i) &&
            i.defaultProps === void 0 &&
            n.compare === null
            ? ((n = ur(i)),
              (t.tag = 15),
              (t.type = n),
              Sd(t, i),
              Mg(e, t, n, a, r))
            : ((e = Yd(n.type, null, a, t, t.mode, r)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
        }
        if (((i = e.child), !Cd(e, r))) {
          var f = i.memoizedProps;
          if (
            ((n = n.compare),
            (n = n !== null ? n : Ti),
            n(f, a) && e.ref === t.ref)
          )
            return Fa(e, t, r);
        }
        return (
          (t.flags |= 1),
          (e = Mo(i, a)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e)
        );
      }
      function Mg(e, t, n, a, r) {
        if (e !== null) {
          var i = e.memoizedProps;
          if (Ti(i, a) && e.ref === t.ref && t.type === e.type)
            if (((Bt = !1), (t.pendingProps = a = i), Cd(e, r)))
              e.flags & 131072 && (Bt = !0);
            else return (t.lanes = e.lanes), Fa(e, t, r);
        }
        return bd(e, t, n, a, r);
      }
      function Ug(e, t, n) {
        var a = t.pendingProps,
          r = a.children,
          i = (t.stateNode._pendingVisibility & lu) !== 0,
          f = e !== null ? e.memoizedState : null;
        if ((Ui(e, t), a.mode === "hidden" || i)) {
          if (t.flags & 128) {
            if (((a = f !== null ? f.baseLanes | n : n), e !== null)) {
              for (r = t.child = e.child, i = 0; r !== null; )
                (i = i | r.lanes | r.childLanes), (r = r.sibling);
              t.childLanes = i & ~a;
            } else (t.childLanes = 0), (t.child = null);
            return _g(e, t, a, n);
          }
          if (n & 536870912)
            (t.memoizedState = { baseLanes: 0, cachePool: null }),
              e !== null && vs(t, f !== null ? f.cachePool : null),
              f !== null ? Xy(t, f) : Bf(t),
              Qy(t);
          else
            return (
              (t.lanes = t.childLanes = 536870912),
              _g(e, t, f !== null ? f.baseLanes | n : n, n)
            );
        } else
          f !== null
            ? (vs(t, f.cachePool), Xy(t, f), wo(t), (t.memoizedState = null))
            : (e !== null && vs(t, null), Bf(t), wo(t));
        return Pt(e, t, r, n), t.child;
      }
      function _g(e, t, n, a) {
        var r = qf();
        return (
          (r = r === null ? null : { parent: jt._currentValue, pool: r }),
          (t.memoizedState = { baseLanes: n, cachePool: r }),
          e !== null && vs(t, null),
          Bf(t),
          Qy(t),
          e !== null && _i(e, t, a, !0),
          null
        );
      }
      function Ui(e, t) {
        var n = t.ref;
        if (n === null) e !== null && e.ref !== null && (t.flags |= 2097664);
        else {
          if (typeof n != "function" && typeof n != "object")
            throw Error(
              "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
            );
          (e === null || e.ref !== n) && (t.flags |= 2097664);
        }
      }
      function bd(e, t, n, a, r) {
        if (n.prototype && typeof n.prototype.render == "function") {
          var i = H(n) || "Unknown";
          nS[i] ||
            (console.error(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
              i,
              i
            ),
            (nS[i] = !0));
        }
        return (
          t.mode & en && ia.recordLegacyContextWarning(t, null),
          e === null &&
            (Sd(t, t.type),
            n.contextTypes &&
              ((i = H(n) || "Unknown"),
              oS[i] ||
                ((oS[i] = !0),
                console.error(
                  "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
                  i
                )))),
          vr(t),
          ea(t),
          (n = $f(e, t, n, a, void 0, r)),
          (a = Xf()),
          A(),
          e !== null && !Bt
            ? (Qf(e, t, r), Fa(e, t, r))
            : (Ze && a && Hf(t), (t.flags |= 1), Pt(e, t, n, r), t.child)
        );
      }
      function zg(e, t, n, a, r, i) {
        return (
          vr(t),
          ea(t),
          (io = -1),
          (vu = e !== null && e.type !== t.type),
          (t.updateQueue = null),
          (n = Gf(t, a, n, r)),
          Zy(e, t),
          (a = Xf()),
          A(),
          e !== null && !Bt
            ? (Qf(e, t, i), Fa(e, t, i))
            : (Ze && a && Hf(t), (t.flags |= 1), Pt(e, t, n, i), t.child)
        );
      }
      function jg(e, t, n, a, r) {
        switch (h(t)) {
          case !1:
            var i = t.stateNode,
              f = new t.type(t.memoizedProps, i.context).state;
            i.updater.enqueueSetState(i, f, null);
            break;
          case !0:
            (t.flags |= 128),
              (t.flags |= 65536),
              (i = Error("Simulated error coming from DevTools"));
            var m = r & -r;
            if (((t.lanes |= m), (f = ut), f === null))
              throw Error(
                "Expected a work-in-progress root. This is a bug in React. Please file an issue."
              );
            (m = gd(m)), vd(m, f, t, wn(i, t)), Us(t, m);
        }
        if ((vr(t), t.stateNode === null)) {
          if (
            ((f = Lo),
            (i = n.contextType),
            "contextType" in n &&
              i !== null &&
              (i === void 0 || i.$$typeof !== Ra) &&
              !J0.has(n) &&
              (J0.add(n),
              (m =
                i === void 0
                  ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file."
                  : typeof i != "object"
                  ? " However, it is set to a " + typeof i + "."
                  : i.$$typeof === bm
                  ? " Did you accidentally pass the Context.Consumer instead?"
                  : " However, it is set to an object with keys {" +
                    Object.keys(i).join(", ") +
                    "}."),
              console.error(
                "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
                H(n) || "Component",
                m
              )),
            typeof i == "object" && i !== null && (f = yt(i)),
            (i = new n(a, f)),
            t.mode & en)
          ) {
            We(!0);
            try {
              i = new n(a, f);
            } finally {
              We(!1);
            }
          }
          if (
            ((f = t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            (i.updater = nh),
            (t.stateNode = i),
            (i._reactInternals = t),
            (i._reactInternalInstance = $0),
            typeof n.getDerivedStateFromProps == "function" &&
              f === null &&
              ((f = H(n) || "Component"),
              X0.has(f) ||
                (X0.add(f),
                console.error(
                  "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
                  f,
                  i.state === null ? "null" : "undefined",
                  f
                ))),
            typeof n.getDerivedStateFromProps == "function" ||
              typeof i.getSnapshotBeforeUpdate == "function")
          ) {
            var g = (m = f = null);
            if (
              (typeof i.componentWillMount == "function" &&
              i.componentWillMount.__suppressDeprecationWarning !== !0
                ? (f = "componentWillMount")
                : typeof i.UNSAFE_componentWillMount == "function" &&
                  (f = "UNSAFE_componentWillMount"),
              typeof i.componentWillReceiveProps == "function" &&
              i.componentWillReceiveProps.__suppressDeprecationWarning !== !0
                ? (m = "componentWillReceiveProps")
                : typeof i.UNSAFE_componentWillReceiveProps == "function" &&
                  (m = "UNSAFE_componentWillReceiveProps"),
              typeof i.componentWillUpdate == "function" &&
              i.componentWillUpdate.__suppressDeprecationWarning !== !0
                ? (g = "componentWillUpdate")
                : typeof i.UNSAFE_componentWillUpdate == "function" &&
                  (g = "UNSAFE_componentWillUpdate"),
              f !== null || m !== null || g !== null)
            ) {
              i = H(n) || "Component";
              var b =
                typeof n.getDerivedStateFromProps == "function"
                  ? "getDerivedStateFromProps()"
                  : "getSnapshotBeforeUpdate()";
              F0.has(i) ||
                (F0.add(i),
                console.error(
                  `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
                  i,
                  b,
                  f !== null
                    ? `
  ` + f
                    : "",
                  m !== null
                    ? `
  ` + m
                    : "",
                  g !== null
                    ? `
  ` + g
                    : ""
                ));
            }
          }
          (i = t.stateNode),
            (f = H(n) || "Component"),
            i.render ||
              (n.prototype && typeof n.prototype.render == "function"
                ? console.error(
                    "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
                    f
                  )
                : console.error(
                    "No `render` method found on the %s instance: you may have forgotten to define `render`.",
                    f
                  )),
            !i.getInitialState ||
              i.getInitialState.isReactClassApproved ||
              i.state ||
              console.error(
                "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
                f
              ),
            i.getDefaultProps &&
              !i.getDefaultProps.isReactClassApproved &&
              console.error(
                "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
                f
              ),
            i.contextType &&
              console.error(
                "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
                f
              ),
            n.childContextTypes &&
              !K0.has(n) &&
              (K0.add(n),
              console.error(
                "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
                f
              )),
            n.contextTypes &&
              !W0.has(n) &&
              (W0.add(n),
              console.error(
                "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
                f
              )),
            typeof i.componentShouldUpdate == "function" &&
              console.error(
                "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
                f
              ),
            n.prototype &&
              n.prototype.isPureReactComponent &&
              typeof i.shouldComponentUpdate < "u" &&
              console.error(
                "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
                H(n) || "A pure component"
              ),
            typeof i.componentDidUnmount == "function" &&
              console.error(
                "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
                f
              ),
            typeof i.componentDidReceiveProps == "function" &&
              console.error(
                "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
                f
              ),
            typeof i.componentWillRecieveProps == "function" &&
              console.error(
                "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
                f
              ),
            typeof i.UNSAFE_componentWillRecieveProps == "function" &&
              console.error(
                "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
                f
              ),
            (m = i.props !== a),
            i.props !== void 0 &&
              m &&
              console.error(
                "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
                f
              ),
            i.defaultProps &&
              console.error(
                "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
                f,
                f
              ),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              typeof i.componentDidUpdate == "function" ||
              Q0.has(n) ||
              (Q0.add(n),
              console.error(
                "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
                H(n)
              )),
            typeof i.getDerivedStateFromProps == "function" &&
              console.error(
                "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                f
              ),
            typeof i.getDerivedStateFromError == "function" &&
              console.error(
                "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                f
              ),
            typeof n.getSnapshotBeforeUpdate == "function" &&
              console.error(
                "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
                f
              ),
            (m = i.state) &&
              (typeof m != "object" || Gt(m)) &&
              console.error("%s.state: must be set to an object or null", f),
            typeof i.getChildContext == "function" &&
              typeof n.childContextTypes != "object" &&
              console.error(
                "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
                f
              ),
            (i = t.stateNode),
            (i.props = a),
            (i.state = t.memoizedState),
            (i.refs = {}),
            Md(t),
            (f = n.contextType),
            (i.context = typeof f == "object" && f !== null ? yt(f) : Lo),
            i.state === a &&
              ((f = H(n) || "Component"),
              I0.has(f) ||
                (I0.add(f),
                console.error(
                  "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
                  f
                ))),
            t.mode & en && ia.recordLegacyContextWarning(t, i),
            ia.recordUnsafeLifecycleWarnings(t, i),
            (i.state = t.memoizedState),
            (f = n.getDerivedStateFromProps),
            typeof f == "function" &&
              (pd(t, n, f, a), (i.state = t.memoizedState)),
            typeof n.getDerivedStateFromProps == "function" ||
              typeof i.getSnapshotBeforeUpdate == "function" ||
              (typeof i.UNSAFE_componentWillMount != "function" &&
                typeof i.componentWillMount != "function") ||
              ((f = i.state),
              typeof i.componentWillMount == "function" &&
                i.componentWillMount(),
              typeof i.UNSAFE_componentWillMount == "function" &&
                i.UNSAFE_componentWillMount(),
              f !== i.state &&
                (console.error(
                  "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
                  X(t) || "Component"
                ),
                nh.enqueueReplaceState(i, i.state, null)),
              Hi(t, a, i, r),
              ji(),
              (i.state = t.memoizedState)),
            typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (t.mode & la) !== ct && (t.flags |= 67108864),
            (i = !0);
        } else if (e === null) {
          i = t.stateNode;
          var U = t.memoizedProps;
          (m = gr(n, U)), (i.props = m);
          var Y = i.context;
          (g = n.contextType),
            (f = Lo),
            typeof g == "object" && g !== null && (f = yt(g)),
            (b = n.getDerivedStateFromProps),
            (g =
              typeof b == "function" ||
              typeof i.getSnapshotBeforeUpdate == "function"),
            (U = t.pendingProps !== U),
            g ||
              (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
              ((U || Y !== f) && xg(t, i, a, f)),
            ($o = !1);
          var _ = t.memoizedState;
          (i.state = _),
            Hi(t, a, i, r),
            ji(),
            (Y = t.memoizedState),
            U || _ !== Y || $o
              ? (typeof b == "function" &&
                  (pd(t, n, b, a), (Y = t.memoizedState)),
                (m = $o || Rg(t, n, m, a, _, Y, f))
                  ? (g ||
                      (typeof i.UNSAFE_componentWillMount != "function" &&
                        typeof i.componentWillMount != "function") ||
                      (typeof i.componentWillMount == "function" &&
                        i.componentWillMount(),
                      typeof i.UNSAFE_componentWillMount == "function" &&
                        i.UNSAFE_componentWillMount()),
                    typeof i.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                    (t.mode & la) !== ct && (t.flags |= 67108864))
                  : (typeof i.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                    (t.mode & la) !== ct && (t.flags |= 67108864),
                    (t.memoizedProps = a),
                    (t.memoizedState = Y)),
                (i.props = a),
                (i.state = Y),
                (i.context = f),
                (i = m))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.mode & la) !== ct && (t.flags |= 67108864),
                (i = !1));
        } else {
          (i = t.stateNode),
            Ud(e, t),
            (f = t.memoizedProps),
            (g = gr(n, f)),
            (i.props = g),
            (b = t.pendingProps),
            (_ = i.context),
            (Y = n.contextType),
            (m = Lo),
            typeof Y == "object" && Y !== null && (m = yt(Y)),
            (U = n.getDerivedStateFromProps),
            (Y =
              typeof U == "function" ||
              typeof i.getSnapshotBeforeUpdate == "function") ||
              (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                typeof i.componentWillReceiveProps != "function") ||
              ((f !== b || _ !== m) && xg(t, i, a, m)),
            ($o = !1),
            (_ = t.memoizedState),
            (i.state = _),
            Hi(t, a, i, r),
            ji();
          var $ = t.memoizedState;
          f !== b ||
          _ !== $ ||
          $o ||
          (e !== null && e.dependencies !== null && Ns(e.dependencies))
            ? (typeof U == "function" &&
                (pd(t, n, U, a), ($ = t.memoizedState)),
              (g =
                $o ||
                Rg(t, n, g, a, _, $, m) ||
                (e !== null && e.dependencies !== null && Ns(e.dependencies)))
                ? (Y ||
                    (typeof i.UNSAFE_componentWillUpdate != "function" &&
                      typeof i.componentWillUpdate != "function") ||
                    (typeof i.componentWillUpdate == "function" &&
                      i.componentWillUpdate(a, $, m),
                    typeof i.UNSAFE_componentWillUpdate == "function" &&
                      i.UNSAFE_componentWillUpdate(a, $, m)),
                  typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                  typeof i.getSnapshotBeforeUpdate == "function" &&
                    (t.flags |= 1024))
                : (typeof i.componentDidUpdate != "function" ||
                    (f === e.memoizedProps && _ === e.memoizedState) ||
                    (t.flags |= 4),
                  typeof i.getSnapshotBeforeUpdate != "function" ||
                    (f === e.memoizedProps && _ === e.memoizedState) ||
                    (t.flags |= 1024),
                  (t.memoizedProps = a),
                  (t.memoizedState = $)),
              (i.props = a),
              (i.state = $),
              (i.context = m),
              (i = g))
            : (typeof i.componentDidUpdate != "function" ||
                (f === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 1024),
              (i = !1));
        }
        if (((m = i), Ui(e, t), (f = (t.flags & 128) !== 0), m || f)) {
          if (
            ((m = t.stateNode),
            (L.getCurrentStack = t === null ? null : De),
            (qn = !1),
            (Wt = t),
            f && typeof n.getDerivedStateFromError != "function")
          )
            (n = null), (vn = -1);
          else {
            if ((ea(t), (n = w0(m)), t.mode & en)) {
              We(!0);
              try {
                w0(m);
              } finally {
                We(!1);
              }
            }
            A();
          }
          (t.flags |= 1),
            e !== null && f
              ? ((t.child = Dr(t, e.child, null, r)),
                (t.child = Dr(t, null, n, r)))
              : Pt(e, t, n, r),
            (t.memoizedState = m.state),
            (e = t.child);
        } else e = Fa(e, t, r);
        return (
          (r = t.stateNode),
          i &&
            r.props !== a &&
            (ql ||
              console.error(
                "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
                X(t) || "a component"
              ),
            (ql = !0)),
          e
        );
      }
      function Hg(e, t, n, a) {
        return wi(), (t.flags |= 256), Pt(e, t, n, a), t.child;
      }
      function Sd(e, t) {
        t &&
          t.childContextTypes &&
          console.error(
            `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
            t.displayName || t.name || "Component"
          ),
          typeof t.getDerivedStateFromProps == "function" &&
            ((e = H(t) || "Unknown"),
            rS[e] ||
              (console.error(
                "%s: Function components do not support getDerivedStateFromProps.",
                e
              ),
              (rS[e] = !0))),
          typeof t.contextType == "object" &&
            t.contextType !== null &&
            ((t = H(t) || "Unknown"),
            aS[t] ||
              (console.error(
                "%s: Function components do not support contextType.",
                t
              ),
              (aS[t] = !0)));
      }
      function Ed(e) {
        return { baseLanes: e, cachePool: Iy() };
      }
      function Td(e, t, n) {
        return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= Un), e;
      }
      function kg(e, t, n) {
        var a,
          r = t.pendingProps;
        d(t) && (t.flags |= 128);
        var i = !1,
          f = (t.flags & 128) !== 0;
        if (
          ((a = f) ||
            (a =
              e !== null && e.memoizedState === null
                ? !1
                : (_t.current & pu) !== 0),
          a && ((i = !0), (t.flags &= -129)),
          (a = (t.flags & 32) !== 0),
          (t.flags &= -33),
          e === null)
        ) {
          if (Ze) {
            if ((i ? xo(t) : wo(t), Ze)) {
              var m = Qt,
                g;
              if (!(g = !m)) {
                e: {
                  var b = m;
                  for (g = Da; b.nodeType !== 8; ) {
                    if (!g) {
                      g = null;
                      break e;
                    }
                    if (((b = Yn(b.nextSibling)), b === null)) {
                      g = null;
                      break e;
                    }
                  }
                  g = b;
                }
                g !== null
                  ? (cr(),
                    (t.memoizedState = {
                      dehydrated: g,
                      treeContext:
                        Or !== null ? { id: ao, overflow: oo } : null,
                      retryLane: 536870912,
                    }),
                    (b = y(18, null, null, ct)),
                    (b.stateNode = g),
                    (b.return = t),
                    (t.child = b),
                    (sn = t),
                    (Qt = null),
                    (g = !0))
                  : (g = !1),
                  (g = !g);
              }
              g && (Lf(t, m), dr(t));
            }
            if (
              ((m = t.memoizedState),
              m !== null && ((m = m.dehydrated), m !== null))
            )
              return (
                m.data === Pr ? (t.lanes = 16) : (t.lanes = 536870912), null
              );
            Qa(t);
          }
          return (
            (m = r.children),
            (r = r.fallback),
            i
              ? (wo(t),
                (i = t.mode),
                (m = xd({ mode: "hidden", children: m }, i)),
                (r = Sr(r, i, n, null)),
                (m.return = t),
                (r.return = t),
                (m.sibling = r),
                (t.child = m),
                (i = t.child),
                (i.memoizedState = Ed(n)),
                (i.childLanes = Td(e, a, n)),
                (t.memoizedState = rh),
                r)
              : (xo(t), Rd(t, m))
          );
        }
        var U = e.memoizedState;
        if (U !== null && ((m = U.dehydrated), m !== null)) {
          if (f)
            t.flags & 256
              ? (xo(t), (t.flags &= -257), (t = wd(e, t, n)))
              : t.memoizedState !== null
              ? (wo(t), (t.child = e.child), (t.flags |= 128), (t = null))
              : (wo(t),
                (i = r.fallback),
                (m = t.mode),
                (r = xd({ mode: "visible", children: r.children }, m)),
                (i = Sr(i, m, n, null)),
                (i.flags |= 2),
                (r.return = t),
                (i.return = t),
                (r.sibling = i),
                (t.child = r),
                Dr(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = Ed(n)),
                (r.childLanes = Td(e, a, n)),
                (t.memoizedState = rh),
                (t = i));
          else if (
            (xo(t),
            Ze &&
              console.error(
                "We should not be hydrating here. This is a bug in React. Please file a bug."
              ),
            m.data === Pr)
          ) {
            if (((a = m.nextSibling && m.nextSibling.dataset), a)) {
              g = a.dgst;
              var Y = a.msg;
              b = a.stck;
              var _ = a.cstck;
            }
            (m = Y),
              (a = g),
              (r = b),
              (g = i = _),
              (i = Error(
                m ||
                  "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."
              )),
              (i.stack = r || ""),
              (i.digest = a),
              (a = g === void 0 ? null : g),
              (r = { value: i, source: null, stack: a }),
              typeof a == "string" && Qm.set(i, r),
              Ai(r),
              (t = wd(e, t, n));
          } else if (
            (Bt || _i(e, t, n, !1), (a = (n & e.childLanes) !== 0), Bt || a)
          ) {
            if (((a = ut), a !== null)) {
              if (((r = n & -n), r & 42)) r = 1;
              else
                switch (r) {
                  case 2:
                    r = 1;
                    break;
                  case 8:
                    r = 4;
                    break;
                  case 32:
                    r = 16;
                    break;
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
                    r = 64;
                    break;
                  case 268435456:
                    r = 134217728;
                    break;
                  default:
                    r = 0;
                }
              if (
                ((r = r & (a.suspendedLanes | n) ? 0 : r),
                r !== 0 && r !== U.retryLane)
              )
                throw ((U.retryLane = r), Zt(e, r), vt(a, e, r), tS);
            }
            m.data === qr || Xd(), (t = wd(e, t, n));
          } else
            m.data === qr
              ? ((t.flags |= 128),
                (t.child = e.child),
                (t = qR.bind(null, e)),
                (m._reactRetry = t),
                (t = null))
              : ((e = U.treeContext),
                (Qt = Yn(m.nextSibling)),
                (sn = t),
                (Ze = !0),
                (ua = null),
                (ro = !1),
                (Qn = null),
                (Da = !1),
                e !== null &&
                  (cr(),
                  (Gn[Xn++] = ao),
                  (Gn[Xn++] = oo),
                  (Gn[Xn++] = Or),
                  (ao = e.id),
                  (oo = e.overflow),
                  (Or = t)),
                (t = Rd(t, r.children)),
                (t.flags |= 4096));
          return t;
        }
        return i
          ? (wo(t),
            (i = r.fallback),
            (m = t.mode),
            (g = e.child),
            (b = g.sibling),
            (r = Mo(g, { mode: "hidden", children: r.children })),
            (r.subtreeFlags = g.subtreeFlags & 31457280),
            b !== null
              ? (i = Mo(b, i))
              : ((i = Sr(i, m, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (m = e.child.memoizedState),
            m === null
              ? (m = Ed(n))
              : ((g = m.cachePool),
                g !== null
                  ? ((b = jt._currentValue),
                    (g = g.parent !== b ? { parent: b, pool: b } : g))
                  : (g = Iy()),
                (m = { baseLanes: m.baseLanes | n, cachePool: g })),
            (i.memoizedState = m),
            (i.childLanes = Td(e, a, n)),
            (t.memoizedState = rh),
            r)
          : (xo(t),
            (n = e.child),
            (e = n.sibling),
            (n = Mo(n, { mode: "visible", children: r.children })),
            (n.return = t),
            (n.sibling = null),
            e !== null &&
              ((a = t.deletions),
              a === null ? ((t.deletions = [e]), (t.flags |= 16)) : a.push(e)),
            (t.child = n),
            (t.memoizedState = null),
            n);
      }
      function Rd(e, t) {
        return (
          (t = xd({ mode: "visible", children: t }, e.mode)),
          (t.return = e),
          (e.child = t)
        );
      }
      function xd(e, t) {
        return hv(e, t, 0, null);
      }
      function wd(e, t, n) {
        return (
          Dr(t, e.child, null, n),
          (e = Rd(t, t.pendingProps.children)),
          (e.flags |= 2),
          (t.memoizedState = null),
          e
        );
      }
      function Lg(e, t, n) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t), Dd(e.return, t, n);
      }
      function Bg(e, t) {
        var n = Gt(e);
        return (
          (e = !n && typeof z(e) == "function"),
          n || e
            ? ((n = n ? "array" : "iterable"),
              console.error(
                "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
                n,
                t,
                n
              ),
              !1)
            : !0
        );
      }
      function Ad(e, t, n, a, r) {
        var i = e.memoizedState;
        i === null
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: a,
              tail: n,
              tailMode: r,
            })
          : ((i.isBackwards = t),
            (i.rendering = null),
            (i.renderingStartTime = 0),
            (i.last = a),
            (i.tail = n),
            (i.tailMode = r));
      }
      function Vg(e, t, n) {
        var a = t.pendingProps,
          r = a.revealOrder,
          i = a.tail;
        if (
          ((a = a.children),
          r !== void 0 &&
            r !== "forwards" &&
            r !== "backwards" &&
            r !== "together" &&
            !lS[r])
        )
          if (((lS[r] = !0), typeof r == "string"))
            switch (r.toLowerCase()) {
              case "together":
              case "forwards":
              case "backwards":
                console.error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                  r,
                  r.toLowerCase()
                );
                break;
              case "forward":
              case "backward":
                console.error(
                  '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                  r,
                  r.toLowerCase()
                );
                break;
              default:
                console.error(
                  '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                  r
                );
            }
          else
            console.error(
              '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
              r
            );
        i === void 0 ||
          oh[i] ||
          (i !== "collapsed" && i !== "hidden"
            ? ((oh[i] = !0),
              console.error(
                '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
                i
              ))
            : r !== "forwards" &&
              r !== "backwards" &&
              ((oh[i] = !0),
              console.error(
                '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
                i
              )));
        e: if (
          (r === "forwards" || r === "backwards") &&
          a !== void 0 &&
          a !== null &&
          a !== !1
        )
          if (Gt(a)) {
            for (var f = 0; f < a.length; f++) if (!Bg(a[f], f)) break e;
          } else if (((f = z(a)), typeof f == "function")) {
            if ((f = f.call(a)))
              for (var m = f.next(), g = 0; !m.done; m = f.next()) {
                if (!Bg(m.value, g)) break e;
                g++;
              }
          } else
            console.error(
              'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
              r
            );
        if ((Pt(e, t, a, n), (a = _t.current), a & pu))
          (a = (a & kl) | pu), (t.flags |= 128);
        else {
          if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
              if (e.tag === 13) e.memoizedState !== null && Lg(e, n, t);
              else if (e.tag === 19) Lg(e, n, t);
              else if (e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          a &= kl;
        }
        switch ((oe(_t, a, t), r)) {
          case "forwards":
            for (n = t.child, r = null; n !== null; )
              (e = n.alternate),
                e !== null && gs(e) === null && (r = n),
                (n = n.sibling);
            (n = r),
              n === null
                ? ((r = t.child), (t.child = null))
                : ((r = n.sibling), (n.sibling = null)),
              Ad(t, !1, r, n, i);
            break;
          case "backwards":
            for (n = null, r = t.child, t.child = null; r !== null; ) {
              if (((e = r.alternate), e !== null && gs(e) === null)) {
                t.child = r;
                break;
              }
              (e = r.sibling), (r.sibling = n), (n = r), (r = e);
            }
            Ad(t, !0, n, null, i);
            break;
          case "together":
            Ad(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
        return t.child;
      }
      function Fa(e, t, n) {
        if (
          (e !== null && (t.dependencies = e.dependencies),
          (vn = -1),
          (Go |= t.lanes),
          !(n & t.childLanes))
        )
          if (e !== null) {
            if ((_i(e, t, n, !1), (n & t.childLanes) === 0)) return null;
          } else return null;
        if (e !== null && t.child !== e.child)
          throw Error("Resuming work not yet implemented.");
        if (t.child !== null) {
          for (
            e = t.child, n = Mo(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

          )
            (e = e.sibling),
              (n = n.sibling = Mo(e, e.pendingProps)),
              (n.return = t);
          n.sibling = null;
        }
        return t.child;
      }
      function Cd(e, t) {
        return e.lanes & t
          ? !0
          : ((e = e.dependencies), !!(e !== null && Ns(e)));
      }
      function SR(e, t, n) {
        switch (t.tag) {
          case 3:
            me(t, t.stateNode.containerInfo),
              Co(t, jt, e.memoizedState.cache),
              wi();
            break;
          case 27:
          case 5:
            Ne(t);
            break;
          case 4:
            me(t, t.stateNode.containerInfo);
            break;
          case 10:
            Co(t, t.type, t.memoizedProps.value);
            break;
          case 12:
            n & t.childLanes && (t.flags |= 4), (t.flags |= 2048);
            var a = t.stateNode;
            (a.effectDuration = -0), (a.passiveEffectDuration = -0);
            break;
          case 13:
            if (((a = t.memoizedState), a !== null))
              return a.dehydrated !== null
                ? (xo(t), (t.flags |= 128), null)
                : n & t.child.childLanes
                ? kg(e, t, n)
                : (xo(t), (e = Fa(e, t, n)), e !== null ? e.sibling : null);
            xo(t);
            break;
          case 19:
            var r = (e.flags & 128) !== 0;
            if (
              ((a = (n & t.childLanes) !== 0),
              a || (_i(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
              r)
            ) {
              if (a) return Vg(e, t, n);
              t.flags |= 128;
            }
            if (
              ((r = t.memoizedState),
              r !== null &&
                ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
              oe(_t, _t.current, t),
              a)
            )
              break;
            return null;
          case 22:
          case 23:
            return (t.lanes = 0), Ug(e, t, n);
          case 24:
            Co(t, jt, e.memoizedState.cache);
        }
        return Fa(e, t, n);
      }
      function Od(e, t, n) {
        if (t._debugNeedsRemount && e !== null) {
          n = Yd(
            t.type,
            t.key,
            t.pendingProps,
            t._debugOwner || null,
            t.mode,
            t.lanes
          );
          var a = t.return;
          if (a === null) throw Error("Cannot swap the root fiber.");
          if (
            ((e.alternate = null),
            (t.alternate = null),
            (n.index = t.index),
            (n.sibling = t.sibling),
            (n.return = t.return),
            (n.ref = t.ref),
            (n._debugInfo = t._debugInfo),
            t === a.child)
          )
            a.child = n;
          else {
            var r = a.child;
            if (r === null) throw Error("Expected parent to have a child.");
            for (; r.sibling !== t; )
              if (((r = r.sibling), r === null))
                throw Error("Expected to find the previous sibling.");
            r.sibling = n;
          }
          return (
            (t = a.deletions),
            t === null ? ((a.deletions = [e]), (a.flags |= 16)) : t.push(e),
            (n.flags |= 2),
            n
          );
        }
        if (e !== null)
          if (e.memoizedProps !== t.pendingProps || t.type !== e.type) Bt = !0;
          else {
            if (!Cd(e, n) && !(t.flags & 128)) return (Bt = !1), SR(e, t, n);
            Bt = !!(e.flags & 131072);
          }
        else
          (Bt = !1),
            (a = Ze) && (cr(), (a = (t.flags & 1048576) !== 0)),
            a && ((a = t.index), cr(), Hy(t, mc, a));
        switch (((t.lanes = 0), t.tag)) {
          case 16:
            e: if (
              ((a = t.pendingProps),
              (e = Bo(t.elementType)),
              (t.type = e),
              typeof e == "function")
            )
              Vd(e)
                ? ((a = gr(e, a)),
                  (t.tag = 1),
                  (t.type = e = ur(e)),
                  (t = jg(null, t, e, a, n)))
                : ((t.tag = 0),
                  Sd(t, e),
                  (t.type = e = ur(e)),
                  (t = bd(null, t, e, a, n)));
            else {
              if (e != null) {
                if (((r = e.$$typeof), r === Fi)) {
                  (t.tag = 11),
                    (t.type = e = Uf(e)),
                    (t = Dg(null, t, e, a, n));
                  break e;
                } else if (r === Zs) {
                  (t.tag = 14), (t = Ng(null, t, e, a, n));
                  break e;
                }
              }
              throw (
                ((t = ""),
                e !== null &&
                  typeof e == "object" &&
                  e.$$typeof === On &&
                  (t =
                    " Did you wrap a component in React.lazy() more than once?"),
                (e = H(e) || e),
                Error(
                  "Element type is invalid. Received a promise that resolves to: " +
                    e +
                    ". Lazy element type must resolve to a class or function." +
                    t
                ))
              );
            }
            return t;
          case 0:
            return bd(e, t, t.type, t.pendingProps, n);
          case 1:
            return (a = t.type), (r = gr(a, t.pendingProps)), jg(e, t, a, r, n);
          case 3:
            e: {
              if ((me(t, t.stateNode.containerInfo), e === null))
                throw Error(
                  "Should have a current fiber. This is a bug in React."
                );
              var i = t.pendingProps;
              (r = t.memoizedState),
                (a = r.element),
                Ud(e, t),
                Hi(t, i, null, n);
              var f = t.memoizedState;
              if (
                ((i = f.cache),
                Co(t, jt, i),
                i !== r.cache && Nd(t, [jt], n, !0),
                ji(),
                (i = f.element),
                r.isDehydrated)
              )
                if (
                  ((r = { element: i, isDehydrated: !1, cache: f.cache }),
                  (t.updateQueue.baseState = r),
                  (t.memoizedState = r),
                  t.flags & 256)
                ) {
                  t = Hg(e, t, i, n);
                  break e;
                } else if (i !== a) {
                  (a = wn(
                    Error(
                      "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                    ),
                    t
                  )),
                    Ai(a),
                    (t = Hg(e, t, i, n));
                  break e;
                } else
                  for (
                    Qt = Yn(t.stateNode.containerInfo.firstChild),
                      sn = t,
                      Ze = !0,
                      ua = null,
                      ro = !1,
                      Qn = null,
                      Da = !0,
                      e = B0(t, null, i, n),
                      t.child = e;
                    e;

                  )
                    (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
              else {
                if ((wi(), i === a)) {
                  t = Fa(e, t, n);
                  break e;
                }
                Pt(e, t, i, n);
              }
              t = t.child;
            }
            return t;
          case 26:
            return (
              Ui(e, t),
              e === null
                ? (e = lb(t.type, null, t.pendingProps, null))
                  ? (t.memoizedState = e)
                  : Ze ||
                    ((e = t.type),
                    (n = t.pendingProps),
                    (a = be(jo.current)),
                    (a = Ys(a).createElement(e)),
                    (a[Jt] = t),
                    (a[gn] = n),
                    $t(a, e, n),
                    wt(a),
                    (t.stateNode = a))
                : (t.memoizedState = lb(
                    t.type,
                    e.memoizedProps,
                    t.pendingProps,
                    e.memoizedState
                  )),
              null
            );
          case 27:
            return (
              Ne(t),
              e === null &&
                Ze &&
                ((r = be(jo.current)),
                (a = Re()),
                (r = t.stateNode = ob(t.type, t.pendingProps, r, a, !1)),
                ro ||
                  ((a = Zv(r, t.type, t.pendingProps, a)),
                  a !== null && (fr(t, 0).serverProps = a)),
                (sn = t),
                (Da = !0),
                (Qt = Yn(r.firstChild))),
              (a = t.pendingProps.children),
              e !== null || Ze ? Pt(e, t, a, n) : (t.child = Dr(t, null, a, n)),
              Ui(e, t),
              t.child
            );
          case 5:
            return (
              e === null &&
                Ze &&
                ((i = Re()),
                (a = Cf(t.type, i.ancestorInfo)),
                (r = Qt),
                (f = !r) ||
                  ((f = ix(r, t.type, t.pendingProps, Da)),
                  f !== null
                    ? ((t.stateNode = f),
                      ro ||
                        ((i = Zv(f, t.type, t.pendingProps, i)),
                        i !== null && (fr(t, 0).serverProps = i)),
                      (sn = t),
                      (Qt = Yn(f.firstChild)),
                      (Da = !1),
                      (i = !0))
                    : (i = !1),
                  (f = !i)),
                f && (a && Lf(t, r), dr(t))),
              Ne(t),
              (r = t.type),
              (i = t.pendingProps),
              (f = e !== null ? e.memoizedProps : null),
              (a = i.children),
              lm(r, i) ? (a = null) : f !== null && lm(r, f) && (t.flags |= 32),
              t.memoizedState !== null &&
                ((r = $f(e, t, hR, null, null, n)), (_u._currentValue = r)),
              Ui(e, t),
              Pt(e, t, a, n),
              t.child
            );
          case 6:
            return (
              e === null &&
                Ze &&
                ((e = t.pendingProps),
                (n = Re().ancestorInfo.current),
                (e = n != null ? ns(e, n.tag) : !0),
                (n = Qt),
                (a = !n) ||
                  ((a = ux(n, t.pendingProps, Da)),
                  a !== null
                    ? ((t.stateNode = a), (sn = t), (Qt = null), (a = !0))
                    : (a = !1),
                  (a = !a)),
                a && (e && Lf(t, n), dr(t))),
              null
            );
          case 13:
            return kg(e, t, n);
          case 4:
            return (
              me(t, t.stateNode.containerInfo),
              (a = t.pendingProps),
              e === null ? (t.child = Dr(t, null, a, n)) : Pt(e, t, a, n),
              t.child
            );
          case 11:
            return Dg(e, t, t.type, t.pendingProps, n);
          case 7:
            return Pt(e, t, t.pendingProps, n), t.child;
          case 8:
            return Pt(e, t, t.pendingProps.children, n), t.child;
          case 12:
            return (
              (t.flags |= 4),
              (t.flags |= 2048),
              (a = t.stateNode),
              (a.effectDuration = -0),
              (a.passiveEffectDuration = -0),
              Pt(e, t, t.pendingProps.children, n),
              t.child
            );
          case 10:
            return (
              (a = t.type),
              (r = t.pendingProps),
              (i = r.value),
              "value" in r ||
                iS ||
                ((iS = !0),
                console.error(
                  "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
                )),
              Co(t, a, i),
              Pt(e, t, r.children, n),
              t.child
            );
          case 9:
            return (
              (r = t.type._context),
              (a = t.pendingProps.children),
              typeof a != "function" &&
                console.error(
                  "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
                ),
              vr(t),
              (r = yt(r)),
              ea(t),
              (a = Zm(a, r, void 0)),
              A(),
              (t.flags |= 1),
              Pt(e, t, a, n),
              t.child
            );
          case 14:
            return Ng(e, t, t.type, t.pendingProps, n);
          case 15:
            return Mg(e, t, t.type, t.pendingProps, n);
          case 19:
            return Vg(e, t, n);
          case 22:
            return Ug(e, t, n);
          case 24:
            return (
              vr(t),
              (a = yt(jt)),
              e === null
                ? ((r = qf()),
                  r === null &&
                    ((r = ut),
                    (i = Yf()),
                    (r.pooledCache = i),
                    mr(i),
                    i !== null && (r.pooledCacheLanes |= n),
                    (r = i)),
                  (t.memoizedState = { parent: a, cache: r }),
                  Md(t),
                  Co(t, jt, r))
                : (e.lanes & n && (Ud(e, t), Hi(t, null, null, n), ji()),
                  (r = e.memoizedState),
                  (i = t.memoizedState),
                  r.parent !== a
                    ? ((r = { parent: a, cache: a }),
                      (t.memoizedState = r),
                      t.lanes === 0 &&
                        (t.memoizedState = t.updateQueue.baseState = r),
                      Co(t, jt, a))
                    : ((a = i.cache),
                      Co(t, jt, a),
                      a !== r.cache && Nd(t, [jt], n, !0))),
              Pt(e, t, t.pendingProps.children, n),
              t.child
            );
          case 29:
            throw t.pendingProps;
        }
        throw Error(
          "Unknown unit of work tag (" +
            t.tag +
            "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function Ds() {
        (Pl = Sc = null), ($l = !1);
      }
      function Co(e, t, n) {
        oe(lh, t._currentValue, e),
          (t._currentValue = n),
          oe(ih, t._currentRenderer, e),
          t._currentRenderer !== void 0 &&
            t._currentRenderer !== null &&
            t._currentRenderer !== uS &&
            console.error(
              "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
            ),
          (t._currentRenderer = uS);
      }
      function Ia(e, t) {
        e._currentValue = lh.current;
        var n = ih.current;
        F(ih, t), (e._currentRenderer = n), F(lh, t);
      }
      function Dd(e, t, n) {
        for (; e !== null; ) {
          var a = e.alternate;
          if (
            ((e.childLanes & t) !== t
              ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
              : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            e === n)
          )
            break;
          e = e.return;
        }
        e !== n &&
          console.error(
            "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      function Nd(e, t, n, a) {
        var r = e.child;
        for (r !== null && (r.return = e); r !== null; ) {
          var i = r.dependencies;
          if (i !== null) {
            var f = r.child;
            i = i.firstContext;
            e: for (; i !== null; ) {
              var m = i;
              i = r;
              for (var g = 0; g < t.length; g++)
                if (m.context === t[g]) {
                  (i.lanes |= n),
                    (m = i.alternate),
                    m !== null && (m.lanes |= n),
                    Dd(i.return, n, e),
                    a || (f = null);
                  break e;
                }
              i = m.next;
            }
          } else if (r.tag === 18) {
            if (((f = r.return), f === null))
              throw Error(
                "We just came from a parent so we must have had a parent. This is a bug in React."
              );
            (f.lanes |= n),
              (i = f.alternate),
              i !== null && (i.lanes |= n),
              Dd(f, n, e),
              (f = null);
          } else f = r.child;
          if (f !== null) f.return = r;
          else
            for (f = r; f !== null; ) {
              if (f === e) {
                f = null;
                break;
              }
              if (((r = f.sibling), r !== null)) {
                (r.return = f.return), (f = r);
                break;
              }
              f = f.return;
            }
          r = f;
        }
      }
      function _i(e, t, n, a) {
        e = null;
        for (var r = t, i = !1; r !== null; ) {
          if (!i) {
            if (r.flags & 524288) i = !0;
            else if (r.flags & 262144) break;
          }
          if (r.tag === 10) {
            var f = r.alternate;
            if (f === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            if (((f = f.memoizedProps), f !== null)) {
              var m = r.type;
              un(r.pendingProps.value, f.value) ||
                (e !== null ? e.push(m) : (e = [m]));
            }
          } else if (r === Ws.current) {
            if (((f = r.alternate), f === null))
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            f.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
              (e !== null ? e.push(_u) : (e = [_u]));
          }
          r = r.return;
        }
        e !== null && Nd(t, e, n, a), (t.flags |= 262144);
      }
      function Ns(e) {
        for (e = e.firstContext; e !== null; ) {
          if (!un(e.context._currentValue, e.memoizedValue)) return !0;
          e = e.next;
        }
        return !1;
      }
      function vr(e) {
        (Sc = e),
          (Pl = null),
          (e = e.dependencies),
          e !== null && (e.firstContext = null);
      }
      function yt(e) {
        return (
          $l &&
            console.error(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            ),
          Yg(Sc, e)
        );
      }
      function Ms(e, t) {
        return Sc === null && vr(e), Yg(e, t);
      }
      function Yg(e, t) {
        var n = t._currentValue;
        if (((t = { context: t, memoizedValue: n, next: null }), Pl === null)) {
          if (e === null)
            throw Error(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            );
          (Pl = t),
            (e.dependencies = {
              lanes: 0,
              firstContext: t,
              _debugThenableState: null,
            }),
            (e.flags |= 524288);
        } else Pl = Pl.next = t;
        return n;
      }
      function Md(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null,
        };
      }
      function Ud(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              callbacks: null,
            });
      }
      function Oo(e) {
        return { lane: e, tag: sS, payload: null, callback: null, next: null };
      }
      function Do(e, t, n) {
        var a = e.updateQueue;
        if (a === null) return null;
        if (((a = a.shared), sh === a && !dS)) {
          var r = X(e);
          console.error(
            `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
            r
          ),
            (dS = !0);
        }
        return (mt & dn) !== Nn
          ? ((r = a.pending),
            r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
            (a.pending = t),
            (t = us(e)),
            Uy(e, null, n),
            t)
          : (is(e, a, t, n), us(e));
      }
      function zi(e, t, n) {
        if (
          ((t = t.updateQueue),
          t !== null && ((t = t.shared), (n & 4194176) !== 0))
        ) {
          var a = t.lanes;
          (a &= e.pendingLanes), (n |= a), (t.lanes = n), fi(e, n);
        }
      }
      function Us(e, t) {
        var n = e.updateQueue,
          a = e.alternate;
        if (a !== null && ((a = a.updateQueue), n === a)) {
          var r = null,
            i = null;
          if (((n = n.firstBaseUpdate), n !== null)) {
            do {
              var f = {
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: null,
                next: null,
              };
              i === null ? (r = i = f) : (i = i.next = f), (n = n.next);
            } while (n !== null);
            i === null ? (r = i = t) : (i = i.next = t);
          } else r = i = t;
          (n = {
            baseState: a.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: i,
            shared: a.shared,
            callbacks: a.callbacks,
          }),
            (e.updateQueue = n);
          return;
        }
        (e = n.lastBaseUpdate),
          e === null ? (n.firstBaseUpdate = t) : (e.next = t),
          (n.lastBaseUpdate = t);
      }
      function ji() {
        if (ch) {
          var e = Ll;
          if (e !== null) throw e;
        }
      }
      function Hi(e, t, n, a) {
        ch = !1;
        var r = e.updateQueue;
        ($o = !1), (sh = r.shared);
        var i = r.firstBaseUpdate,
          f = r.lastBaseUpdate,
          m = r.shared.pending;
        if (m !== null) {
          r.shared.pending = null;
          var g = m,
            b = g.next;
          (g.next = null), f === null ? (i = b) : (f.next = b), (f = g);
          var U = e.alternate;
          U !== null &&
            ((U = U.updateQueue),
            (m = U.lastBaseUpdate),
            m !== f &&
              (m === null ? (U.firstBaseUpdate = b) : (m.next = b),
              (U.lastBaseUpdate = g)));
        }
        if (i !== null) {
          var Y = r.baseState;
          (f = 0), (U = b = g = null), (m = i);
          do {
            var _ = m.lane & -536870913,
              $ = _ !== m.lane;
            if ($ ? (Xe & _) === _ : (a & _) === _) {
              _ !== 0 && _ === Nr && (ch = !0),
                U !== null &&
                  (U = U.next =
                    {
                      lane: 0,
                      tag: m.tag,
                      payload: m.payload,
                      callback: null,
                      next: null,
                    });
              e: {
                _ = e;
                var he = m,
                  ke = t,
                  Ct = n;
                switch (he.tag) {
                  case cS:
                    if (((he = he.payload), typeof he == "function")) {
                      $l = !0;
                      var tt = he.call(Ct, Y, ke);
                      if (_.mode & en) {
                        We(!0);
                        try {
                          he.call(Ct, Y, ke);
                        } finally {
                          We(!1);
                        }
                      }
                      ($l = !1), (Y = tt);
                      break e;
                    }
                    Y = he;
                    break e;
                  case uh:
                    _.flags = (_.flags & -65537) | 128;
                  case sS:
                    if (((tt = he.payload), typeof tt == "function")) {
                      if ((($l = !0), (he = tt.call(Ct, Y, ke)), _.mode & en)) {
                        We(!0);
                        try {
                          tt.call(Ct, Y, ke);
                        } finally {
                          We(!1);
                        }
                      }
                      $l = !1;
                    } else he = tt;
                    if (he == null) break e;
                    Y = qe({}, Y, he);
                    break e;
                  case fS:
                    $o = !0;
                }
              }
              (_ = m.callback),
                _ !== null &&
                  ((e.flags |= 64),
                  $ && (e.flags |= 8192),
                  ($ = r.callbacks),
                  $ === null ? (r.callbacks = [_]) : $.push(_));
            } else
              ($ = {
                lane: _,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null,
              }),
                U === null ? ((b = U = $), (g = Y)) : (U = U.next = $),
                (f |= _);
            if (((m = m.next), m === null)) {
              if (((m = r.shared.pending), m === null)) break;
              ($ = m),
                (m = $.next),
                ($.next = null),
                (r.lastBaseUpdate = $),
                (r.shared.pending = null);
            }
          } while (!0);
          U === null && (g = Y),
            (r.baseState = g),
            (r.firstBaseUpdate = b),
            (r.lastBaseUpdate = U),
            i === null && (r.shared.lanes = 0),
            (Go |= f),
            (e.lanes = f),
            (e.memoizedState = Y);
        }
        sh = null;
      }
      function qg(e, t) {
        if (typeof e != "function")
          throw Error(
            "Invalid argument passed as callback. Expected a function. Instead received: " +
              e
          );
        e.call(t);
      }
      function ER(e, t) {
        var n = e.shared.hiddenCallbacks;
        if (n !== null)
          for (e.shared.hiddenCallbacks = null, e = 0; e < n.length; e++)
            qg(n[e], t);
      }
      function Pg(e, t) {
        var n = e.callbacks;
        if (n !== null)
          for (e.callbacks = null, e = 0; e < n.length; e++) qg(n[e], t);
      }
      function ba(e) {
        return (e.mode & Xt) !== ct;
      }
      function $g(e, t) {
        ba(e) ? (va(), ki(t, e), ga()) : ki(t, e);
      }
      function _d(e, t, n) {
        ba(e) ? (va(), ul(n, e, t), ga()) : ul(n, e, t);
      }
      function ki(e, t) {
        try {
          var n = t.updateQueue,
            a = n !== null ? n.lastEffect : null;
          if (a !== null) {
            var r = a.next;
            n = r;
            do {
              if (
                (n.tag & e) === e &&
                ((e & zt) !== In
                  ? le !== null &&
                    typeof le.markComponentPassiveEffectMountStarted ==
                      "function" &&
                    le.markComponentPassiveEffectMountStarted(t)
                  : (e & Ft) !== In &&
                    le !== null &&
                    typeof le.markComponentLayoutEffectMountStarted ==
                      "function" &&
                    le.markComponentLayoutEffectMountStarted(t),
                (a = void 0),
                (e & cn) !== In && (Zl = !0),
                (a = J(t, Lw, n)),
                (e & cn) !== In && (Zl = !1),
                (e & zt) !== In
                  ? le !== null &&
                    typeof le.markComponentPassiveEffectMountStopped ==
                      "function" &&
                    le.markComponentPassiveEffectMountStopped()
                  : (e & Ft) !== In &&
                    le !== null &&
                    typeof le.markComponentLayoutEffectMountStopped ==
                      "function" &&
                    le.markComponentLayoutEffectMountStopped(),
                a !== void 0 && typeof a != "function")
              ) {
                var i = void 0;
                i =
                  n.tag & Ft
                    ? "useLayoutEffect"
                    : n.tag & cn
                    ? "useInsertionEffect"
                    : "useEffect";
                var f = void 0;
                (f =
                  a === null
                    ? " You returned null. If your effect does not require clean up, return undefined (or nothing)."
                    : typeof a.then == "function"
                    ? `

It looks like you wrote ` +
                      i +
                      `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` +
                      i +
                      `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`
                    : " You returned: " + a),
                  J(
                    t,
                    function (m, g) {
                      console.error(
                        "%s must not return anything besides a function, which is used for clean-up.%s",
                        m,
                        g
                      );
                    },
                    i,
                    f
                  );
              }
              n = n.next;
            } while (n !== r);
          }
        } catch (m) {
          rt(t, t.return, m);
        }
      }
      function ul(e, t, n) {
        try {
          var a = t.updateQueue,
            r = a !== null ? a.lastEffect : null;
          if (r !== null) {
            var i = r.next;
            a = i;
            do {
              if ((a.tag & e) === e) {
                var f = a.inst,
                  m = f.destroy;
                m !== void 0 &&
                  ((f.destroy = void 0),
                  (e & zt) !== In
                    ? le !== null &&
                      typeof le.markComponentPassiveEffectUnmountStarted ==
                        "function" &&
                      le.markComponentPassiveEffectUnmountStarted(t)
                    : (e & Ft) !== In &&
                      le !== null &&
                      typeof le.markComponentLayoutEffectUnmountStarted ==
                        "function" &&
                      le.markComponentLayoutEffectUnmountStarted(t),
                  (e & cn) !== In && (Zl = !0),
                  J(t, Bw, t, n, m),
                  (e & cn) !== In && (Zl = !1),
                  (e & zt) !== In
                    ? le !== null &&
                      typeof le.markComponentPassiveEffectUnmountStopped ==
                        "function" &&
                      le.markComponentPassiveEffectUnmountStopped()
                    : (e & Ft) !== In &&
                      le !== null &&
                      typeof le.markComponentLayoutEffectUnmountStopped ==
                        "function" &&
                      le.markComponentLayoutEffectUnmountStopped());
              }
              a = a.next;
            } while (a !== i);
          }
        } catch (g) {
          rt(t, t.return, g);
        }
      }
      function Gg(e, t) {
        ba(e) ? (va(), ki(t, e), ga()) : ki(t, e);
      }
      function zd(e, t, n) {
        ba(e) ? (va(), ul(n, e, t), ga()) : ul(n, e, t);
      }
      function Xg(e) {
        var t = e.updateQueue;
        if (t !== null) {
          var n = e.stateNode;
          e.type.defaultProps ||
            "ref" in e.memoizedProps ||
            ql ||
            (n.props !== e.memoizedProps &&
              console.error(
                "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                X(e) || "instance"
              ),
            n.state !== e.memoizedState &&
              console.error(
                "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                X(e) || "instance"
              ));
          try {
            J(e, Pg, t, n);
          } catch (a) {
            rt(e, e.return, a);
          }
        }
      }
      function TR(e, t, n) {
        return e.getSnapshotBeforeUpdate(t, n);
      }
      function RR(e, t) {
        var n = t.memoizedProps,
          a = t.memoizedState;
        (t = e.stateNode),
          e.type.defaultProps ||
            "ref" in e.memoizedProps ||
            ql ||
            (t.props !== e.memoizedProps &&
              console.error(
                "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                X(e) || "instance"
              ),
            t.state !== e.memoizedState &&
              console.error(
                "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                X(e) || "instance"
              ));
        try {
          var r = gr(e.type, n, e.elementType === e.type),
            i = J(e, TR, t, r, a);
          (n = mS),
            i !== void 0 ||
              n.has(e.type) ||
              (n.add(e.type),
              J(e, function () {
                console.error(
                  "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
                  X(e)
                );
              })),
            (t.__reactInternalSnapshotBeforeUpdate = i);
        } catch (f) {
          rt(e, e.return, f);
        }
      }
      function Qg(e, t, n) {
        (n.props = gr(e.type, e.memoizedProps)),
          (n.state = e.memoizedState),
          ba(e) ? (va(), J(e, M0, e, t, n), ga()) : J(e, M0, e, t, n);
      }
      function xR(e) {
        var t = e.ref;
        if (t !== null) {
          var n = e.stateNode;
          if (typeof t == "function")
            if (ba(e))
              try {
                va(), (e.refCleanup = t(n));
              } finally {
                ga();
              }
            else e.refCleanup = t(n);
          else
            typeof t == "string"
              ? console.error("String refs are no longer supported.")
              : t.hasOwnProperty("current") ||
                console.error(
                  "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
                  X(e)
                ),
              (t.current = n);
        }
      }
      function br(e, t) {
        try {
          J(e, xR, e);
        } catch (n) {
          rt(e, t, n);
        }
      }
      function An(e, t) {
        var n = e.ref,
          a = e.refCleanup;
        if (n !== null)
          if (typeof a == "function")
            try {
              if (ba(e))
                try {
                  va(), J(e, a);
                } finally {
                  ga(e);
                }
              else J(e, a);
            } catch (r) {
              rt(e, t, r);
            } finally {
              (e.refCleanup = null),
                (e = e.alternate),
                e != null && (e.refCleanup = null);
            }
          else if (typeof n == "function")
            try {
              if (ba(e))
                try {
                  va(), J(e, n, null);
                } finally {
                  ga(e);
                }
              else J(e, n, null);
            } catch (r) {
              rt(e, t, r);
            }
          else n.current = null;
      }
      function Fg(e, t, n, a) {
        var r = e.memoizedProps,
          i = r.id,
          f = r.onCommit;
        (r = r.onRender),
          (t = t === null ? "mount" : "update"),
          sc && (t = "nested-update"),
          typeof r == "function" &&
            r(i, t, e.actualDuration, e.treeBaseDuration, e.actualStartTime, n),
          typeof f == "function" && f(e.memoizedProps.id, t, a, n);
      }
      function wR(e, t, n, a) {
        var r = e.memoizedProps;
        (e = r.id),
          (r = r.onPostCommit),
          (t = t === null ? "mount" : "update"),
          sc && (t = "nested-update"),
          typeof r == "function" && r(e, t, a, n);
      }
      function Ig(e) {
        var t = e.type,
          n = e.memoizedProps,
          a = e.stateNode;
        try {
          J(e, KR, a, t, n, e);
        } catch (r) {
          rt(e, e.return, r);
        }
      }
      function Zg(e, t, n) {
        try {
          J(e, JR, e.stateNode, e.type, n, t, e);
        } catch (a) {
          rt(e, e.return, a);
        }
      }
      function Wg(e) {
        return (
          e.tag === 5 ||
          e.tag === 3 ||
          e.tag === 26 ||
          e.tag === 27 ||
          e.tag === 4
        );
      }
      function jd(e) {
        e: for (;;) {
          for (; e.sibling === null; ) {
            if (e.return === null || Wg(e.return)) return null;
            e = e.return;
          }
          for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

          ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function Hd(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6)
          (e = e.stateNode),
            t
              ? n.nodeType === 8
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (n.nodeType === 8
                  ? ((t = n.parentNode), t.insertBefore(e, n))
                  : ((t = n), t.appendChild(e)),
                (n = n._reactRootContainer),
                n != null || t.onclick !== null || (t.onclick = Bs));
        else if (a !== 4 && a !== 27 && ((e = e.child), e !== null))
          for (Hd(e, t, n), e = e.sibling; e !== null; )
            Hd(e, t, n), (e = e.sibling);
      }
      function _s(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6)
          (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (a !== 4 && a !== 27 && ((e = e.child), e !== null))
          for (_s(e, t, n), e = e.sibling; e !== null; )
            _s(e, t, n), (e = e.sibling);
      }
      function AR(e) {
        if (e.tag !== 27) {
          e: {
            for (var t = e.return; t !== null; ) {
              if (Wg(t)) {
                var n = t;
                break e;
              }
              t = t.return;
            }
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          }
          switch (n.tag) {
            case 27:
              (t = n.stateNode), (n = jd(e)), _s(e, n, t);
              break;
            case 5:
              (t = n.stateNode),
                n.flags & 32 && (Jv(t), (n.flags &= -33)),
                (n = jd(e)),
                _s(e, n, t);
              break;
            case 3:
            case 4:
              (t = n.stateNode.containerInfo), (n = jd(e)), Hd(e, n, t);
              break;
            default:
              throw Error(
                "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
              );
          }
        }
      }
      function CR(e, t) {
        if (((e = e.containerInfo), (Dh = Vc), (e = Ny(e)), Nf(e))) {
          if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
          else
            e: {
              n = ((n = e.ownerDocument) && n.defaultView) || window;
              var a = n.getSelection && n.getSelection();
              if (a && a.rangeCount !== 0) {
                n = a.anchorNode;
                var r = a.anchorOffset,
                  i = a.focusNode;
                a = a.focusOffset;
                try {
                  n.nodeType, i.nodeType;
                } catch {
                  n = null;
                  break e;
                }
                var f = 0,
                  m = -1,
                  g = -1,
                  b = 0,
                  U = 0,
                  Y = e,
                  _ = null;
                t: for (;;) {
                  for (
                    var $;
                    Y !== n || (r !== 0 && Y.nodeType !== 3) || (m = f + r),
                      Y !== i || (a !== 0 && Y.nodeType !== 3) || (g = f + a),
                      Y.nodeType === 3 && (f += Y.nodeValue.length),
                      ($ = Y.firstChild) !== null;

                  )
                    (_ = Y), (Y = $);
                  for (;;) {
                    if (Y === e) break t;
                    if (
                      (_ === n && ++b === r && (m = f),
                      _ === i && ++U === a && (g = f),
                      ($ = Y.nextSibling) !== null)
                    )
                      break;
                    (Y = _), (_ = Y.parentNode);
                  }
                  Y = $;
                }
                n = m === -1 || g === -1 ? null : { start: m, end: g };
              } else n = null;
            }
          n = n || { start: 0, end: 0 };
        } else n = null;
        for (
          Nh = { focusedElem: e, selectionRange: n }, Vc = !1, Vt = t;
          Vt !== null;

        )
          if (
            ((t = Vt),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
          )
            (e.return = t), (Vt = e);
          else
            for (; Vt !== null; ) {
              switch (((e = t = Vt), (n = e.alternate), (r = e.flags), e.tag)) {
                case 0:
                  break;
                case 11:
                case 15:
                  break;
                case 1:
                  r & 1024 && n !== null && RR(e, n);
                  break;
                case 3:
                  if (r & 1024) {
                    if (
                      ((e = e.stateNode.containerInfo),
                      (n = e.nodeType),
                      n === 9)
                    )
                      um(e);
                    else if (n === 1)
                      switch (e.nodeName) {
                        case "HEAD":
                        case "HTML":
                        case "BODY":
                          um(e);
                          break;
                        default:
                          e.textContent = "";
                      }
                  }
                  break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  if (r & 1024)
                    throw Error(
                      "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                    );
              }
              if (((e = t.sibling), e !== null)) {
                (e.return = t.return), (Vt = e);
                break;
              }
              Vt = t.return;
            }
        return (t = pS), (pS = !1), t;
      }
      function Kg(e, t, n) {
        var a = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Sa(e, n), a & 4 && $g(n, Ft | Zn);
            break;
          case 1:
            if ((Sa(e, n), a & 4))
              if (((e = n.stateNode), t === null))
                n.type.defaultProps ||
                  "ref" in n.memoizedProps ||
                  ql ||
                  (e.props !== n.memoizedProps &&
                    console.error(
                      "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                      X(n) || "instance"
                    ),
                  e.state !== n.memoizedState &&
                    console.error(
                      "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                      X(n) || "instance"
                    )),
                  ba(n) ? (va(), J(n, Wm, n, e), ga()) : J(n, Wm, n, e);
              else {
                var r = gr(n.type, t.memoizedProps);
                (t = t.memoizedState),
                  n.type.defaultProps ||
                    "ref" in n.memoizedProps ||
                    ql ||
                    (e.props !== n.memoizedProps &&
                      console.error(
                        "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                        X(n) || "instance"
                      ),
                    e.state !== n.memoizedState &&
                      console.error(
                        "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                        X(n) || "instance"
                      )),
                  ba(n)
                    ? (va(),
                      J(
                        n,
                        O0,
                        n,
                        e,
                        r,
                        t,
                        e.__reactInternalSnapshotBeforeUpdate
                      ),
                      ga())
                    : J(
                        n,
                        O0,
                        n,
                        e,
                        r,
                        t,
                        e.__reactInternalSnapshotBeforeUpdate
                      );
              }
            a & 64 && Xg(n), a & 512 && br(n, n.return);
            break;
          case 3:
            if (
              ((t = Xa()),
              Sa(e, n),
              a & 64 && ((a = n.updateQueue), a !== null))
            ) {
              if (((r = null), n.child !== null))
                switch (n.child.tag) {
                  case 27:
                  case 5:
                    r = n.child.stateNode;
                    break;
                  case 1:
                    r = n.child.stateNode;
                }
              try {
                J(n, Pg, a, r);
              } catch (m) {
                rt(n, n.return, m);
              }
            }
            e.effectDuration += ss(t);
            break;
          case 26:
            Sa(e, n), a & 512 && br(n, n.return);
            break;
          case 27:
          case 5:
            Sa(e, n), t === null && a & 4 && Ig(n), a & 512 && br(n, n.return);
            break;
          case 12:
            if (a & 4) {
              (a = Xa()),
                Sa(e, n),
                (e = n.stateNode),
                (e.effectDuration += Ri(a));
              try {
                J(n, Fg, n, t, uc, e.effectDuration);
              } catch (m) {
                rt(n, n.return, m);
              }
            } else Sa(e, n);
            break;
          case 13:
            Sa(e, n), a & 4 && tv(e, n);
            break;
          case 22:
            if (((r = n.memoizedState !== null || uo), !r)) {
              t = (t !== null && t.memoizedState !== null) || Et;
              var i = uo,
                f = Et;
              (uo = r),
                (Et = t) && !f
                  ? Wa(e, n, (n.subtreeFlags & 8772) !== 0)
                  : Sa(e, n),
                (uo = i),
                (Et = f);
            }
            a & 512 &&
              (n.memoizedProps.mode === "manual"
                ? br(n, n.return)
                : An(n, n.return));
            break;
          default:
            Sa(e, n);
        }
      }
      function Jg(e) {
        var t = e.alternate;
        t !== null && ((e.alternate = null), Jg(t)),
          (e.child = null),
          (e.deletions = null),
          (e.sibling = null),
          e.tag === 5 && ((t = e.stateNode), t !== null && pi(t)),
          (e.stateNode = null),
          (e._debugOwner = null),
          (e.return = null),
          (e.dependencies = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.stateNode = null),
          (e.updateQueue = null);
      }
      function Za(e, t, n) {
        for (n = n.child; n !== null; ) ev(e, t, n), (n = n.sibling);
      }
      function ev(e, t, n) {
        if (Kt && typeof Kt.onCommitFiberUnmount == "function")
          try {
            Kt.onCommitFiberUnmount(El, n);
          } catch (i) {
            wa ||
              ((wa = !0),
              console.error(
                "React instrumentation encountered an error: %s",
                i
              ));
          }
        switch (n.tag) {
          case 26:
            Et || An(n, t),
              Za(e, t, n),
              n.memoizedState
                ? n.memoizedState.count--
                : n.stateNode &&
                  ((n = n.stateNode), n.parentNode.removeChild(n));
            break;
          case 27:
            Et || An(n, t);
            var a = Mt,
              r = Dn;
            for (
              Mt = n.stateNode, Za(e, t, n), n = n.stateNode, e = n.attributes;
              e.length;

            )
              n.removeAttributeNode(e[0]);
            pi(n), (Mt = a), (Dn = r);
            break;
          case 5:
            Et || An(n, t);
          case 6:
            if (
              ((a = Mt),
              (r = Dn),
              (Mt = null),
              Za(e, t, n),
              (Mt = a),
              (Dn = r),
              Mt !== null)
            )
              if (Dn)
                try {
                  J(n, nx, Mt, n.stateNode);
                } catch (i) {
                  rt(n, t, i);
                }
              else
                try {
                  J(n, tx, Mt, n.stateNode);
                } catch (i) {
                  rt(n, t, i);
                }
            break;
          case 18:
            Mt !== null &&
              (Dn
                ? ((e = Mt),
                  (n = n.stateNode),
                  e.nodeType === 8
                    ? im(e.parentNode, n)
                    : e.nodeType === 1 && im(e, n),
                  Qi(e))
                : im(Mt, n.stateNode));
            break;
          case 4:
            (a = Mt),
              (r = Dn),
              (Mt = n.stateNode.containerInfo),
              (Dn = !0),
              Za(e, t, n),
              (Mt = a),
              (Dn = r);
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            Et || ul(cn, n, t), Et || _d(n, t, Ft), Za(e, t, n);
            break;
          case 1:
            Et ||
              (An(n, t),
              (a = n.stateNode),
              typeof a.componentWillUnmount == "function" && Qg(n, t, a)),
              Za(e, t, n);
            break;
          case 21:
            Za(e, t, n);
            break;
          case 22:
            Et || An(n, t),
              (Et = (a = Et) || n.memoizedState !== null),
              Za(e, t, n),
              (Et = a);
            break;
          default:
            Za(e, t, n);
        }
      }
      function tv(e, t) {
        if (
          t.memoizedState === null &&
          ((e = t.alternate),
          e !== null &&
            ((e = e.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)))
        )
          try {
            J(t, cx, e);
          } catch (n) {
            rt(t, t.return, n);
          }
      }
      function OR(e) {
        switch (e.tag) {
          case 13:
          case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new hS()), t;
          case 22:
            return (
              (e = e.stateNode),
              (t = e._retryCache),
              t === null && (t = e._retryCache = new hS()),
              t
            );
          default:
            throw Error(
              "Unexpected Suspense handler tag (" +
                e.tag +
                "). This is a bug in React."
            );
        }
      }
      function kd(e, t) {
        var n = OR(e);
        t.forEach(function (a) {
          var r = PR.bind(null, e, a);
          if (!n.has(a)) {
            if ((n.add(a), ra))
              if (Gl !== null && Xl !== null) Yi(Xl, Gl);
              else
                throw Error(
                  "Expected finished root and lanes to be set. This is a bug in React."
                );
            a.then(r, r);
          }
        });
      }
      function DR(e, t, n) {
        (Gl = n), (Xl = e), nv(t, e), (Xl = Gl = null);
      }
      function Ln(e, t) {
        var n = t.deletions;
        if (n !== null)
          for (var a = 0; a < n.length; a++) {
            var r = e,
              i = t,
              f = n[a],
              m = i;
            e: for (; m !== null; ) {
              switch (m.tag) {
                case 27:
                case 5:
                  (Mt = m.stateNode), (Dn = !1);
                  break e;
                case 3:
                  (Mt = m.stateNode.containerInfo), (Dn = !0);
                  break e;
                case 4:
                  (Mt = m.stateNode.containerInfo), (Dn = !0);
                  break e;
              }
              m = m.return;
            }
            if (Mt === null)
              throw Error(
                "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
              );
            ev(r, i, f),
              (Mt = null),
              (Dn = !1),
              (r = f),
              (i = r.alternate),
              i !== null && (i.return = null),
              (r.return = null);
          }
        if (t.subtreeFlags & 13878)
          for (t = t.child; t !== null; ) nv(t, e), (t = t.sibling);
      }
      function nv(e, t) {
        var n = e.alternate,
          a = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Ln(t, e),
              Bn(e),
              a & 4 &&
                (ul(cn | Zn, e, e.return),
                ki(cn | Zn, e),
                _d(e, e.return, Ft | Zn));
            break;
          case 1:
            Ln(t, e),
              Bn(e),
              a & 512 && (Et || n === null || An(n, n.return)),
              a & 64 &&
                uo &&
                ((e = e.updateQueue),
                e !== null &&
                  ((a = e.callbacks),
                  a !== null &&
                    ((n = e.shared.hiddenCallbacks),
                    (e.shared.hiddenCallbacks =
                      n === null ? a : n.concat(a)))));
            break;
          case 26:
            var r = sa;
            if (
              (Ln(t, e),
              Bn(e),
              a & 512 && (Et || n === null || An(n, n.return)),
              a & 4)
            )
              if (
                ((t = n !== null ? n.memoizedState : null),
                (a = e.memoizedState),
                n === null)
              )
                if (a === null)
                  if (e.stateNode === null) {
                    e: {
                      (a = e.type),
                        (n = e.memoizedProps),
                        (t = r.ownerDocument || r);
                      t: switch (a) {
                        case "title":
                          (r = t.getElementsByTagName("title")[0]),
                            (!r ||
                              r[Wi] ||
                              r[Jt] ||
                              r.namespaceURI === Tl ||
                              r.hasAttribute("itemprop")) &&
                              ((r = t.createElement(a)),
                              t.head.insertBefore(
                                r,
                                t.querySelector("head > title")
                              )),
                            $t(r, a, n),
                            (r[Jt] = e),
                            wt(r),
                            (a = r);
                          break e;
                        case "link":
                          var i = sb("link", "href", t).get(a + (n.href || ""));
                          if (i) {
                            for (var f = 0; f < i.length; f++)
                              if (
                                ((r = i[f]),
                                r.getAttribute("href") ===
                                  (n.href == null ? null : n.href) &&
                                  r.getAttribute("rel") ===
                                    (n.rel == null ? null : n.rel) &&
                                  r.getAttribute("title") ===
                                    (n.title == null ? null : n.title) &&
                                  r.getAttribute("crossorigin") ===
                                    (n.crossOrigin == null
                                      ? null
                                      : n.crossOrigin))
                              ) {
                                i.splice(f, 1);
                                break t;
                              }
                          }
                          (r = t.createElement(a)),
                            $t(r, a, n),
                            t.head.appendChild(r);
                          break;
                        case "meta":
                          if (
                            (i = sb("meta", "content", t).get(
                              a + (n.content || "")
                            ))
                          ) {
                            for (f = 0; f < i.length; f++)
                              if (
                                ((r = i[f]),
                                Q(n.content, "content"),
                                r.getAttribute("content") ===
                                  (n.content == null ? null : "" + n.content) &&
                                  r.getAttribute("name") ===
                                    (n.name == null ? null : n.name) &&
                                  r.getAttribute("property") ===
                                    (n.property == null ? null : n.property) &&
                                  r.getAttribute("http-equiv") ===
                                    (n.httpEquiv == null
                                      ? null
                                      : n.httpEquiv) &&
                                  r.getAttribute("charset") ===
                                    (n.charSet == null ? null : n.charSet))
                              ) {
                                i.splice(f, 1);
                                break t;
                              }
                          }
                          (r = t.createElement(a)),
                            $t(r, a, n),
                            t.head.appendChild(r);
                          break;
                        default:
                          throw Error(
                            'getNodesForType encountered a type it did not expect: "' +
                              a +
                              '". This is a bug in React.'
                          );
                      }
                      (r[Jt] = e), wt(r), (a = r);
                    }
                    e.stateNode = a;
                  } else cb(r, e.type, e.stateNode);
                else e.stateNode = ub(r, a, e.memoizedProps);
              else
                t !== a
                  ? (t === null
                      ? n.stateNode !== null &&
                        ((n = n.stateNode), n.parentNode.removeChild(n))
                      : t.count--,
                    a === null
                      ? cb(r, e.type, e.stateNode)
                      : ub(r, a, e.memoizedProps))
                  : a === null &&
                    e.stateNode !== null &&
                    Zg(e, e.memoizedProps, n.memoizedProps);
            break;
          case 27:
            if (a & 4 && e.alternate === null) {
              (r = e.stateNode), (i = e.memoizedProps);
              try {
                for (f = r.firstChild; f; ) {
                  var m = f.nextSibling,
                    g = f.nodeName;
                  f[Wi] ||
                    g === "HEAD" ||
                    g === "BODY" ||
                    g === "SCRIPT" ||
                    g === "STYLE" ||
                    (g === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
                    r.removeChild(f),
                    (f = m);
                }
                J(e, fx, e.type, i, r, e);
              } catch (U) {
                rt(e, e.return, U);
              }
            }
          case 5:
            if (
              (Ln(t, e),
              Bn(e),
              a & 512 && (Et || n === null || An(n, n.return)),
              e.flags & 32)
            ) {
              t = e.stateNode;
              try {
                J(e, Jv, t);
              } catch (U) {
                rt(e, e.return, U);
              }
            }
            a & 4 &&
              e.stateNode != null &&
              ((t = e.memoizedProps),
              Zg(e, t, n !== null ? n.memoizedProps : t)),
              a & 1024 &&
                ((fh = !0),
                e.type !== "form" &&
                  console.error(
                    "Unexpected host component type. Expected a form. This is a bug in React."
                  ));
            break;
          case 6:
            if ((Ln(t, e), Bn(e), a & 4)) {
              if (e.stateNode === null)
                throw Error(
                  "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
                );
              (a = e.memoizedProps),
                (n = n !== null ? n.memoizedProps : a),
                (t = e.stateNode);
              try {
                J(e, ex, t, n, a);
              } catch (U) {
                rt(e, e.return, U);
              }
            }
            break;
          case 3:
            if (
              ((r = Xa()),
              (kc = null),
              (i = sa),
              (sa = qs(t.containerInfo)),
              Ln(t, e),
              (sa = i),
              Bn(e),
              a & 4 && n !== null && n.memoizedState.isDehydrated)
            )
              try {
                J(e, sx, t.containerInfo);
              } catch (U) {
                rt(e, e.return, U);
              }
            fh && ((fh = !1), av(e)), (t.effectDuration += ss(r));
            break;
          case 4:
            (a = sa),
              (sa = qs(e.stateNode.containerInfo)),
              Ln(t, e),
              Bn(e),
              (sa = a);
            break;
          case 12:
            (a = Xa()), Ln(t, e), Bn(e), (e.stateNode.effectDuration += Ri(a));
            break;
          case 13:
            Ln(t, e),
              Bn(e),
              e.child.flags & 8192 &&
                (e.memoizedState !== null) !=
                  (n !== null && n.memoizedState !== null) &&
                (gh = xa()),
              a & 4 &&
                ((a = e.updateQueue),
                a !== null && ((e.updateQueue = null), kd(e, a)));
            break;
          case 22:
            a & 512 && (Et || n === null || An(n, n.return)),
              (f = e.memoizedState !== null),
              (m = n !== null && n.memoizedState !== null),
              (g = uo);
            var b = Et;
            if (
              ((uo = g || f),
              (Et = b || m),
              Ln(t, e),
              (Et = b),
              (uo = g),
              Bn(e),
              (t = e.stateNode),
              (t._current = e),
              (t._visibility &= -3),
              (t._visibility |= t._pendingVisibility & lu),
              a & 8192 &&
                ((t._visibility = f ? t._visibility & -2 : t._visibility | ic),
                f && ((t = uo || Et), n === null || m || t || sl(e)),
                e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
            )
              e: for (n = null, t = e; ; ) {
                if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
                  if (n === null) {
                    m = n = t;
                    try {
                      (r = m.stateNode),
                        f
                          ? J(m, ax, r)
                          : J(m, rx, m.stateNode, m.memoizedProps);
                    } catch (U) {
                      rt(m, m.return, U);
                    }
                  }
                } else if (t.tag === 6) {
                  if (n === null) {
                    m = t;
                    try {
                      (i = m.stateNode),
                        f ? J(m, ox, i) : J(m, lx, i, m.memoizedProps);
                    } catch (U) {
                      rt(m, m.return, U);
                    }
                  }
                } else if (
                  ((t.tag !== 22 && t.tag !== 23) ||
                    t.memoizedState === null ||
                    t === e) &&
                  t.child !== null
                ) {
                  (t.child.return = t), (t = t.child);
                  continue;
                }
                if (t === e) break e;
                for (; t.sibling === null; ) {
                  if (t.return === null || t.return === e) break e;
                  n === t && (n = null), (t = t.return);
                }
                n === t && (n = null),
                  (t.sibling.return = t.return),
                  (t = t.sibling);
              }
            a & 4 &&
              ((a = e.updateQueue),
              a !== null &&
                ((n = a.retryQueue),
                n !== null && ((a.retryQueue = null), kd(e, n))));
            break;
          case 19:
            Ln(t, e),
              Bn(e),
              a & 4 &&
                ((a = e.updateQueue),
                a !== null && ((e.updateQueue = null), kd(e, a)));
            break;
          case 21:
            break;
          default:
            Ln(t, e), Bn(e);
        }
      }
      function Bn(e) {
        var t = e.flags;
        if (t & 2) {
          try {
            J(e, AR, e);
          } catch (n) {
            rt(e, e.return, n);
          }
          e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
      }
      function av(e) {
        if (e.subtreeFlags & 1024)
          for (e = e.child; e !== null; ) {
            var t = e;
            av(t),
              t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
              (e = e.sibling);
          }
      }
      function NR(e, t, n) {
        (Gl = n), (Xl = t), Kg(t, e.alternate, e), (Xl = Gl = null);
      }
      function Sa(e, t) {
        if (t.subtreeFlags & 8772)
          for (t = t.child; t !== null; )
            Kg(e, t.alternate, t), (t = t.sibling);
      }
      function ov(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            _d(e, e.return, Ft), sl(e);
            break;
          case 1:
            An(e, e.return);
            var t = e.stateNode;
            typeof t.componentWillUnmount == "function" && Qg(e, e.return, t),
              sl(e);
            break;
          case 26:
          case 27:
          case 5:
            An(e, e.return), sl(e);
            break;
          case 22:
            An(e, e.return), e.memoizedState === null && sl(e);
            break;
          default:
            sl(e);
        }
      }
      function sl(e) {
        for (e = e.child; e !== null; ) ov(e), (e = e.sibling);
      }
      function rv(e, t, n, a) {
        var r = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Wa(e, n, a), $g(n, Ft);
            break;
          case 1:
            if (
              (Wa(e, n, a),
              (t = n.stateNode),
              typeof t.componentDidMount == "function" && J(n, Wm, n, t),
              (t = n.updateQueue),
              t !== null)
            ) {
              e = n.stateNode;
              try {
                J(n, ER, t, e);
              } catch (i) {
                rt(n, n.return, i);
              }
            }
            a && r & 64 && Xg(n), br(n, n.return);
            break;
          case 26:
          case 27:
          case 5:
            Wa(e, n, a), a && t === null && r & 4 && Ig(n), br(n, n.return);
            break;
          case 12:
            if (a && r & 4) {
              (r = Xa()),
                Wa(e, n, a),
                (a = n.stateNode),
                (a.effectDuration += Ri(r));
              try {
                J(n, Fg, n, t, uc, a.effectDuration);
              } catch (i) {
                rt(n, n.return, i);
              }
            } else Wa(e, n, a);
            break;
          case 13:
            Wa(e, n, a), a && r & 4 && tv(e, n);
            break;
          case 22:
            n.memoizedState === null && Wa(e, n, a), br(n, n.return);
            break;
          default:
            Wa(e, n, a);
        }
      }
      function Wa(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
          rv(e, t.alternate, t, n), (t = t.sibling);
      }
      function Ld(e, t) {
        var n = null;
        e !== null &&
          e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (n = e.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== n && (e != null && mr(e), n != null && Oi(n));
      }
      function Bd(e, t) {
        (e = null),
          t.alternate !== null && (e = t.alternate.memoizedState.cache),
          (t = t.memoizedState.cache),
          t !== e && (mr(t), e != null && Oi(e));
      }
      function No(e, t, n, a) {
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; ) lv(e, t, n, a), (t = t.sibling);
      }
      function lv(e, t, n, a) {
        var r = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            No(e, t, n, a), r & 2048 && Gg(t, zt | Zn);
            break;
          case 3:
            var i = Xa();
            No(e, t, n, a),
              r & 2048 &&
                ((n = null),
                t.alternate !== null && (n = t.alternate.memoizedState.cache),
                (t = t.memoizedState.cache),
                t !== n && (mr(t), n != null && Oi(n))),
              (e.passiveEffectDuration += ss(i));
            break;
          case 12:
            if (r & 2048) {
              (i = Xa()),
                No(e, t, n, a),
                (e = t.stateNode),
                (e.passiveEffectDuration += Ri(i));
              try {
                J(t, wR, t, t.alternate, uc, e.passiveEffectDuration);
              } catch (f) {
                rt(t, t.return, f);
              }
            } else No(e, t, n, a);
            break;
          case 23:
            break;
          case 22:
            (i = t.stateNode),
              t.memoizedState !== null
                ? i._visibility & wr
                  ? No(e, t, n, a)
                  : Li(e, t)
                : i._visibility & wr
                ? No(e, t, n, a)
                : ((i._visibility |= wr),
                  cl(e, t, n, a, (t.subtreeFlags & 10256) !== 0)),
              r & 2048 && Ld(t.alternate, t);
            break;
          case 24:
            No(e, t, n, a), r & 2048 && Bd(t.alternate, t);
            break;
          default:
            No(e, t, n, a);
        }
      }
      function cl(e, t, n, a, r) {
        for (r = r && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
          iv(e, t, n, a, r), (t = t.sibling);
      }
      function iv(e, t, n, a, r) {
        var i = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            cl(e, t, n, a, r), Gg(t, zt);
            break;
          case 23:
            break;
          case 22:
            var f = t.stateNode;
            t.memoizedState !== null
              ? f._visibility & wr
                ? cl(e, t, n, a, r)
                : Li(e, t)
              : ((f._visibility |= wr), cl(e, t, n, a, r)),
              r && i & 2048 && Ld(t.alternate, t);
            break;
          case 24:
            cl(e, t, n, a, r), r && i & 2048 && Bd(t.alternate, t);
            break;
          default:
            cl(e, t, n, a, r);
        }
      }
      function Li(e, t) {
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null; ) {
            var n = e,
              a = t,
              r = a.flags;
            switch (a.tag) {
              case 22:
                Li(n, a), r & 2048 && Ld(a.alternate, a);
                break;
              case 24:
                Li(n, a), r & 2048 && Bd(a.alternate, a);
                break;
              default:
                Li(n, a);
            }
            t = t.sibling;
          }
      }
      function fl(e) {
        if (e.subtreeFlags & bu)
          for (e = e.child; e !== null; ) uv(e), (e = e.sibling);
      }
      function uv(e) {
        switch (e.tag) {
          case 26:
            fl(e),
              e.flags & bu &&
                e.memoizedState !== null &&
                px(sa, e.memoizedState, e.memoizedProps);
            break;
          case 5:
            fl(e);
            break;
          case 3:
          case 4:
            var t = sa;
            (sa = qs(e.stateNode.containerInfo)), fl(e), (sa = t);
            break;
          case 22:
            e.memoizedState === null &&
              ((t = e.alternate),
              t !== null && t.memoizedState !== null
                ? ((t = bu), (bu = 16777216), fl(e), (bu = t))
                : fl(e));
            break;
          default:
            fl(e);
        }
      }
      function sv(e) {
        var t = e.alternate;
        if (t !== null && ((e = t.child), e !== null)) {
          t.child = null;
          do (t = e.sibling), (e.sibling = null), (e = t);
          while (e !== null);
        }
      }
      function Bi(e) {
        var t = e.deletions;
        if (e.flags & 16) {
          if (t !== null)
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (Vt = a), dv(a, e);
            }
          sv(e);
        }
        if (e.subtreeFlags & 10256)
          for (e = e.child; e !== null; ) cv(e), (e = e.sibling);
      }
      function cv(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Bi(e), e.flags & 2048 && zd(e, e.return, zt | Zn);
            break;
          case 3:
            var t = Xa();
            Bi(e), (e.stateNode.passiveEffectDuration += ss(t));
            break;
          case 12:
            (t = Xa()), Bi(e), (e.stateNode.passiveEffectDuration += Ri(t));
            break;
          case 22:
            (t = e.stateNode),
              e.memoizedState !== null &&
              t._visibility & wr &&
              (e.return === null || e.return.tag !== 13)
                ? ((t._visibility &= -5), zs(e))
                : Bi(e);
            break;
          default:
            Bi(e);
        }
      }
      function zs(e) {
        var t = e.deletions;
        if (e.flags & 16) {
          if (t !== null)
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (Vt = a), dv(a, e);
            }
          sv(e);
        }
        for (e = e.child; e !== null; ) fv(e), (e = e.sibling);
      }
      function fv(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            zd(e, e.return, zt), zs(e);
            break;
          case 22:
            var t = e.stateNode;
            t._visibility & wr && ((t._visibility &= -5), zs(e));
            break;
          default:
            zs(e);
        }
      }
      function dv(e, t) {
        for (; Vt !== null; ) {
          var n = Vt,
            a = n;
          switch (a.tag) {
            case 0:
            case 11:
            case 15:
              zd(a, t, zt);
              break;
            case 23:
            case 22:
              a.memoizedState !== null &&
                a.memoizedState.cachePool !== null &&
                ((a = a.memoizedState.cachePool.pool), a != null && mr(a));
              break;
            case 24:
              Oi(a.memoizedState.cache);
          }
          if (((a = n.child), a !== null)) (a.return = n), (Vt = a);
          else
            e: for (n = e; Vt !== null; ) {
              a = Vt;
              var r = a.sibling,
                i = a.return;
              if ((Jg(a), a === n)) {
                Vt = null;
                break e;
              }
              if (r !== null) {
                (r.return = i), (Vt = r);
                break e;
              }
              Vt = i;
            }
        }
      }
      function MR(e, t, n, a) {
        (this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.refCleanup = this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = a),
          (this.subtreeFlags = this.flags = 0),
          (this.deletions = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null),
          (this.actualDuration = -0),
          (this.actualStartTime = -1.1),
          (this.treeBaseDuration = this.selfBaseDuration = -0),
          (this._debugOwner = this._debugInfo = null),
          (this._debugNeedsRemount = !1),
          (this._debugHookTypes = null),
          yS ||
            typeof Object.preventExtensions != "function" ||
            Object.preventExtensions(this);
      }
      function Vd(e) {
        return (e = e.prototype), !(!e || !e.isReactComponent);
      }
      function Mo(e, t) {
        var n = e.alternate;
        switch (
          (n === null
            ? ((n = y(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n._debugOwner = e._debugOwner),
              (n._debugHookTypes = e._debugHookTypes),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null),
              (n.actualDuration = -0),
              (n.actualStartTime = -1.1)),
          (n.flags = e.flags & 31457280),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            t === null
              ? null
              : {
                  lanes: t.lanes,
                  firstContext: t.firstContext,
                  _debugThenableState: t._debugThenableState,
                }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          (n.refCleanup = e.refCleanup),
          (n.selfBaseDuration = e.selfBaseDuration),
          (n.treeBaseDuration = e.treeBaseDuration),
          (n._debugInfo = e._debugInfo),
          (n._debugNeedsRemount = e._debugNeedsRemount),
          n.tag)
        ) {
          case 0:
          case 15:
            n.type = ur(e.type);
            break;
          case 1:
            n.type = ur(e.type);
            break;
          case 11:
            n.type = Uf(e.type);
        }
        return n;
      }
      function mv(e, t) {
        e.flags &= 31457282;
        var n = e.alternate;
        return (
          n === null
            ? ((e.childLanes = 0),
              (e.lanes = t),
              (e.child = null),
              (e.subtreeFlags = 0),
              (e.memoizedProps = null),
              (e.memoizedState = null),
              (e.updateQueue = null),
              (e.dependencies = null),
              (e.stateNode = null),
              (e.selfBaseDuration = 0),
              (e.treeBaseDuration = 0))
            : ((e.childLanes = n.childLanes),
              (e.lanes = n.lanes),
              (e.child = n.child),
              (e.subtreeFlags = 0),
              (e.deletions = null),
              (e.memoizedProps = n.memoizedProps),
              (e.memoizedState = n.memoizedState),
              (e.updateQueue = n.updateQueue),
              (e.type = n.type),
              (t = n.dependencies),
              (e.dependencies =
                t === null
                  ? null
                  : {
                      lanes: t.lanes,
                      firstContext: t.firstContext,
                      _debugThenableState: t._debugThenableState,
                    }),
              (e.selfBaseDuration = n.selfBaseDuration),
              (e.treeBaseDuration = n.treeBaseDuration)),
          e
        );
      }
      function Yd(e, t, n, a, r, i) {
        var f = 0,
          m = e;
        if (typeof e == "function") Vd(e) && (f = 1), (m = ur(m));
        else if (typeof e == "string")
          (f = Re()),
            (f = mx(e, n, f)
              ? 26
              : e === "html" || e === "head" || e === "body"
              ? 27
              : 5);
        else
          e: switch (e) {
            case bl:
              return Sr(n.children, r, i, t);
            case Is:
              (f = 8), (r |= en), (r |= la);
              break;
            case vm:
              return (
                (e = n),
                (a = r),
                typeof e.id != "string" &&
                  console.error(
                    'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
                    typeof e.id
                  ),
                (t = y(12, e, t, a | Xt)),
                (t.elementType = vm),
                (t.lanes = i),
                (t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
                t
              );
            case Sm:
              return (
                (t = y(13, n, t, r)), (t.elementType = Sm), (t.lanes = i), t
              );
            case Em:
              return (
                (t = y(19, n, t, r)), (t.elementType = Em), (t.lanes = i), t
              );
            case xb:
              return hv(n, r, i, t);
            default:
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Ox:
                  case Ra:
                    f = 10;
                    break e;
                  case bm:
                    f = 9;
                    break e;
                  case Fi:
                    (f = 11), (m = Uf(m));
                    break e;
                  case Zs:
                    f = 14;
                    break e;
                  case On:
                    (f = 16), (m = null);
                    break e;
                }
              (m = ""),
                (e === void 0 ||
                  (typeof e == "object" &&
                    e !== null &&
                    Object.keys(e).length === 0)) &&
                  (m +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),
                e === null
                  ? (n = "null")
                  : Gt(e)
                  ? (n = "array")
                  : e !== void 0 && e.$$typeof === _o
                  ? ((n = "<" + (H(e.type) || "Unknown") + " />"),
                    (m =
                      " Did you accidentally export a JSX literal instead of a component?"))
                  : (n = typeof e),
                (f = a ? ae(a) : null) &&
                  (m +=
                    `

Check the render method of \`` +
                    f +
                    "`."),
                (f = 29),
                (n = Error(
                  "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " +
                    (n + "." + m)
                )),
                (m = null);
          }
        return (
          (t = y(f, n, t, r)),
          (t.elementType = e),
          (t.type = m),
          (t.lanes = i),
          (t._debugOwner = a),
          t
        );
      }
      function js(e, t, n) {
        return (
          (t = Yd(e.type, e.key, e.props, e._owner, t, n)),
          (t._debugOwner = e._owner),
          t
        );
      }
      function Sr(e, t, n, a) {
        return (e = y(7, e, a, t)), (e.lanes = n), e;
      }
      function hv(e, t, n, a) {
        (e = y(22, e, a, t)), (e.elementType = xb), (e.lanes = n);
        var r = {
          _visibility: ic,
          _pendingVisibility: ic,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function () {
            var i = r,
              f = i._current;
            if (f === null)
              throw Error(
                "Calling Offscreen.detach before instance handle has been set."
              );
            if (!(i._pendingVisibility & lu)) {
              var m = Zt(f, 2);
              m !== null && ((i._pendingVisibility |= lu), vt(m, f, 2));
            }
          },
          attach: function () {
            var i = r,
              f = i._current;
            if (f === null)
              throw Error(
                "Calling Offscreen.detach before instance handle has been set."
              );
            if (i._pendingVisibility & lu) {
              var m = Zt(f, 2);
              m !== null && ((i._pendingVisibility &= -3), vt(m, f, 2));
            }
          },
        };
        return (e.stateNode = r), e;
      }
      function qd(e, t, n) {
        return (e = y(6, e, null, t)), (e.lanes = n), e;
      }
      function Pd(e, t, n) {
        return (
          (t = y(4, e.children !== null ? e.children : [], e.key, t)),
          (t.lanes = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Ka(e) {
        e.flags |= 4;
      }
      function pv(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & Kn) !== $r)
          e.flags &= -16777217;
        else if (((e.flags |= 16777216), !fb(t))) {
          if (
            ((t = Fn.current),
            t !== null &&
              ((Xe & 4194176) === Xe
                ? Na !== null
                : ((Xe & 62914560) !== Xe && !(Xe & 536870912)) || t !== Na))
          )
            throw ((mu = Im), T0);
          e.flags |= 8192;
        }
      }
      function Hs(e, t) {
        t !== null && (e.flags |= 4),
          e.flags & 16384 &&
            ((t = e.tag !== 22 ? ta() : 536870912), (e.lanes |= t), (kr |= t));
      }
      function Vi(e, t) {
        if (!Ze)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; t !== null; )
                t.alternate !== null && (n = t), (t = t.sibling);
              n === null ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var a = null; n !== null; )
                n.alternate !== null && (a = n), (n = n.sibling);
              a === null
                ? t || e.tail === null
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (a.sibling = null);
          }
      }
      function gt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
          n = 0,
          a = 0;
        if (t)
          if ((e.mode & Xt) !== ct) {
            for (var r = e.selfBaseDuration, i = e.child; i !== null; )
              (n |= i.lanes | i.childLanes),
                (a |= i.subtreeFlags & 31457280),
                (a |= i.flags & 31457280),
                (r += i.treeBaseDuration),
                (i = i.sibling);
            e.treeBaseDuration = r;
          } else
            for (r = e.child; r !== null; )
              (n |= r.lanes | r.childLanes),
                (a |= r.subtreeFlags & 31457280),
                (a |= r.flags & 31457280),
                (r.return = e),
                (r = r.sibling);
        else if ((e.mode & Xt) !== ct) {
          (r = e.actualDuration), (i = e.selfBaseDuration);
          for (var f = e.child; f !== null; )
            (n |= f.lanes | f.childLanes),
              (a |= f.subtreeFlags),
              (a |= f.flags),
              (r += f.actualDuration),
              (i += f.treeBaseDuration),
              (f = f.sibling);
          (e.actualDuration = r), (e.treeBaseDuration = i);
        } else
          for (r = e.child; r !== null; )
            (n |= r.lanes | r.childLanes),
              (a |= r.subtreeFlags),
              (a |= r.flags),
              (r.return = e),
              (r = r.sibling);
        return (e.subtreeFlags |= a), (e.childLanes = n), t;
      }
      function UR(e, t, n) {
        var a = t.pendingProps;
        switch ((kf(t), t.tag)) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return gt(t), null;
          case 1:
            return gt(t), null;
          case 3:
            return (
              (a = t.stateNode),
              (n = null),
              e !== null && (n = e.memoizedState.cache),
              t.memoizedState.cache !== n && (t.flags |= 2048),
              Ia(jt, t),
              we(t),
              a.pendingContext &&
                ((a.context = a.pendingContext), (a.pendingContext = null)),
              (e === null || e.child === null) &&
                (xi(t)
                  ? (By(), Ka(t))
                  : e === null ||
                    (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                    ((t.flags |= 1024), ua !== null && ($d(ua), (ua = null)))),
              gt(t),
              null
            );
          case 26:
            return (
              (n = t.memoizedState),
              e === null
                ? (Ka(t),
                  n !== null
                    ? (gt(t), pv(t, n))
                    : (gt(t), (t.flags &= -16777217)))
                : n
                ? n !== e.memoizedState
                  ? (Ka(t), gt(t), pv(t, n))
                  : (gt(t), (t.flags &= -16777217))
                : (e.memoizedProps !== a && Ka(t),
                  gt(t),
                  (t.flags &= -16777217)),
              null
            );
          case 27:
            Ue(t), (n = be(jo.current));
            var r = t.type;
            if (e !== null && t.stateNode != null)
              e.memoizedProps !== a && Ka(t);
            else {
              if (!a) {
                if (t.stateNode === null)
                  throw Error(
                    "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                  );
                return gt(t), null;
              }
              (e = Re()),
                xi(t)
                  ? ky(t)
                  : ((e = ob(r, a, n, e, !0)), (t.stateNode = e), Ka(t));
            }
            return gt(t), null;
          case 5:
            if ((Ue(t), (n = t.type), e !== null && t.stateNode != null))
              e.memoizedProps !== a && Ka(t);
            else {
              if (!a) {
                if (t.stateNode === null)
                  throw Error(
                    "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                  );
                return gt(t), null;
              }
              if (((r = Re()), xi(t))) ky(t);
              else {
                switch (
                  ((e = be(jo.current)),
                  Cf(n, r.ancestorInfo),
                  (r = r.context),
                  (e = Ys(e)),
                  r)
                ) {
                  case Kl:
                    e = e.createElementNS(Tl, n);
                    break;
                  case Hc:
                    e = e.createElementNS(nc, n);
                    break;
                  default:
                    switch (n) {
                      case "svg":
                        e = e.createElementNS(Tl, n);
                        break;
                      case "math":
                        e = e.createElementNS(nc, n);
                        break;
                      case "script":
                        (e = e.createElement("div")),
                          (e.innerHTML = "<script></script>"),
                          (e = e.removeChild(e.firstChild));
                        break;
                      case "select":
                        (e =
                          typeof a.is == "string"
                            ? e.createElement("select", { is: a.is })
                            : e.createElement("select")),
                          a.multiple
                            ? (e.multiple = !0)
                            : a.size && (e.size = a.size);
                        break;
                      default:
                        (e =
                          typeof a.is == "string"
                            ? e.createElement(n, { is: a.is })
                            : e.createElement(n)),
                          n.indexOf("-") === -1 &&
                            (n !== n.toLowerCase() &&
                              console.error(
                                "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                                n
                              ),
                            Object.prototype.toString.call(e) !==
                              "[object HTMLUnknownElement]" ||
                              to.call(NS, n) ||
                              ((NS[n] = !0),
                              console.error(
                                "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                                n
                              )));
                    }
                }
                (e[Jt] = t), (e[gn] = a);
                e: for (r = t.child; r !== null; ) {
                  if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
                  else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                    (r.child.return = r), (r = r.child);
                    continue;
                  }
                  if (r === t) break e;
                  for (; r.sibling === null; ) {
                    if (r.return === null || r.return === t) break e;
                    r = r.return;
                  }
                  (r.sibling.return = r.return), (r = r.sibling);
                }
                t.stateNode = e;
                e: switch (($t(e, n, a), n)) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    e = !!a.autoFocus;
                    break e;
                  case "img":
                    e = !0;
                    break e;
                  default:
                    e = !1;
                }
                e && Ka(t);
              }
            }
            return gt(t), (t.flags &= -16777217), null;
          case 6:
            if (e && t.stateNode != null) e.memoizedProps !== a && Ka(t);
            else {
              if (typeof a != "string" && t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              if (((e = be(jo.current)), (n = Re()), xi(t))) {
                (e = t.stateNode), (a = t.memoizedProps), (r = !ro), (n = null);
                var i = sn;
                if (i !== null)
                  switch (i.tag) {
                    case 3:
                      r &&
                        ((r = tb(e, a, n)),
                        r !== null && (fr(t, 0).serverProps = r));
                      break;
                    case 27:
                    case 5:
                      (n = i.memoizedProps),
                        r &&
                          ((r = tb(e, a, n)),
                          r !== null && (fr(t, 0).serverProps = r));
                  }
                (e[Jt] = t),
                  (e = !!(
                    e.nodeValue === a ||
                    (n !== null && n.suppressHydrationWarning === !0) ||
                    Gv(e.nodeValue, a)
                  )),
                  e || dr(t);
              } else
                (n = n.ancestorInfo.current),
                  n != null && ns(a, n.tag),
                  (e = Ys(e).createTextNode(a)),
                  (e[Jt] = t),
                  (t.stateNode = e);
            }
            return gt(t), null;
          case 13:
            if (
              ((a = t.memoizedState),
              e === null ||
                (e.memoizedState !== null &&
                  e.memoizedState.dehydrated !== null))
            ) {
              if (((r = xi(t)), a !== null && a.dehydrated !== null)) {
                if (e === null) {
                  if (!r)
                    throw Error(
                      "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                    );
                  if (
                    ((r = t.memoizedState),
                    (r = r !== null ? r.dehydrated : null),
                    !r)
                  )
                    throw Error(
                      "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                    );
                  (r[Jt] = t),
                    gt(t),
                    (t.mode & Xt) !== ct &&
                      a !== null &&
                      ((r = t.child),
                      r !== null && (t.treeBaseDuration -= r.treeBaseDuration));
                } else
                  By(),
                    wi(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    (t.flags |= 4),
                    gt(t),
                    (t.mode & Xt) !== ct &&
                      a !== null &&
                      ((r = t.child),
                      r !== null && (t.treeBaseDuration -= r.treeBaseDuration));
                r = !1;
              } else ua !== null && ($d(ua), (ua = null)), (r = !0);
              if (!r) return t.flags & 256 ? (Qa(t), t) : (Qa(t), null);
            }
            return (
              Qa(t),
              t.flags & 128
                ? ((t.lanes = n), (t.mode & Xt) !== ct && cs(t), t)
                : ((a = a !== null),
                  (e = e !== null && e.memoizedState !== null),
                  a &&
                    ((n = t.child),
                    (r = null),
                    n.alternate !== null &&
                      n.alternate.memoizedState !== null &&
                      n.alternate.memoizedState.cachePool !== null &&
                      (r = n.alternate.memoizedState.cachePool.pool),
                    (i = null),
                    n.memoizedState !== null &&
                      n.memoizedState.cachePool !== null &&
                      (i = n.memoizedState.cachePool.pool),
                    i !== r && (n.flags |= 2048)),
                  a !== e && a && (t.child.flags |= 8192),
                  Hs(t, t.updateQueue),
                  gt(t),
                  (t.mode & Xt) !== ct &&
                    a &&
                    ((e = t.child),
                    e !== null && (t.treeBaseDuration -= e.treeBaseDuration)),
                  null)
            );
          case 4:
            return (
              we(t), e === null && em(t.stateNode.containerInfo), gt(t), null
            );
          case 10:
            return Ia(t.type, t), gt(t), null;
          case 19:
            if ((F(_t, t), (r = t.memoizedState), r === null))
              return gt(t), null;
            if (((a = (t.flags & 128) !== 0), (i = r.rendering), i === null))
              if (a) Vi(r, !1);
              else {
                if (Tt !== co || (e !== null && e.flags & 128))
                  for (e = t.child; e !== null; ) {
                    if (((i = gs(e)), i !== null)) {
                      for (
                        t.flags |= 128,
                          Vi(r, !1),
                          e = i.updateQueue,
                          t.updateQueue = e,
                          Hs(t, e),
                          t.subtreeFlags = 0,
                          e = n,
                          a = t.child;
                        a !== null;

                      )
                        mv(a, e), (a = a.sibling);
                      return oe(_t, (_t.current & kl) | pu, t), t.child;
                    }
                    e = e.sibling;
                  }
                r.tail !== null &&
                  xa() > Rc &&
                  ((t.flags |= 128), (a = !0), Vi(r, !1), (t.lanes = 4194304));
              }
            else {
              if (!a)
                if (((e = gs(i)), e !== null)) {
                  if (
                    ((t.flags |= 128),
                    (a = !0),
                    (e = e.updateQueue),
                    (t.updateQueue = e),
                    Hs(t, e),
                    Vi(r, !0),
                    r.tail === null &&
                      r.tailMode === "hidden" &&
                      !i.alternate &&
                      !Ze)
                  )
                    return gt(t), null;
                } else
                  2 * xa() - r.renderingStartTime > Rc &&
                    n !== 536870912 &&
                    ((t.flags |= 128),
                    (a = !0),
                    Vi(r, !1),
                    (t.lanes = 4194304));
              r.isBackwards
                ? ((i.sibling = t.child), (t.child = i))
                : ((e = r.last),
                  e !== null ? (e.sibling = i) : (t.child = i),
                  (r.last = i));
            }
            return r.tail !== null
              ? ((e = r.tail),
                (r.rendering = e),
                (r.tail = e.sibling),
                (r.renderingStartTime = xa()),
                (e.sibling = null),
                (n = _t.current),
                (n = a ? (n & kl) | pu : n & kl),
                oe(_t, n, t),
                e)
              : (gt(t), null);
          case 22:
          case 23:
            return (
              Qa(t),
              Vf(t),
              (a = t.memoizedState !== null),
              e !== null
                ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
                : a && (t.flags |= 8192),
              a
                ? n & 536870912 &&
                  !(t.flags & 128) &&
                  (gt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                : gt(t),
              (a = t.updateQueue),
              a !== null && Hs(t, a.retryQueue),
              (a = null),
              e !== null &&
                e.memoizedState !== null &&
                e.memoizedState.cachePool !== null &&
                (a = e.memoizedState.cachePool.pool),
              (n = null),
              t.memoizedState !== null &&
                t.memoizedState.cachePool !== null &&
                (n = t.memoizedState.cachePool.pool),
              n !== a && (t.flags |= 2048),
              e !== null && F(Mr, t),
              null
            );
          case 24:
            return (
              (a = null),
              e !== null && (a = e.memoizedState.cache),
              t.memoizedState.cache !== a && (t.flags |= 2048),
              Ia(jt, t),
              gt(t),
              null
            );
          case 25:
            return null;
        }
        throw Error(
          "Unknown unit of work tag (" +
            t.tag +
            "). This error is likely caused by a bug in React. Please file an issue."
        );
      }
      function _R(e, t) {
        switch ((kf(t), t.tag)) {
          case 1:
            return (
              (e = t.flags),
              e & 65536
                ? ((t.flags = (e & -65537) | 128),
                  (t.mode & Xt) !== ct && cs(t),
                  t)
                : null
            );
          case 3:
            return (
              Ia(jt, t),
              we(t),
              (e = t.flags),
              e & 65536 && !(e & 128)
                ? ((t.flags = (e & -65537) | 128), t)
                : null
            );
          case 26:
          case 27:
          case 5:
            return Ue(t), null;
          case 13:
            if (
              (Qa(t),
              (e = t.memoizedState),
              e !== null && e.dehydrated !== null)
            ) {
              if (t.alternate === null)
                throw Error(
                  "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
                );
              wi();
            }
            return (
              (e = t.flags),
              e & 65536
                ? ((t.flags = (e & -65537) | 128),
                  (t.mode & Xt) !== ct && cs(t),
                  t)
                : null
            );
          case 19:
            return F(_t, t), null;
          case 4:
            return we(t), null;
          case 10:
            return Ia(t.type, t), null;
          case 22:
          case 23:
            return (
              Qa(t),
              Vf(t),
              e !== null && F(Mr, t),
              (e = t.flags),
              e & 65536
                ? ((t.flags = (e & -65537) | 128),
                  (t.mode & Xt) !== ct && cs(t),
                  t)
                : null
            );
          case 24:
            return Ia(jt, t), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function yv(e, t) {
        switch ((kf(t), t.tag)) {
          case 3:
            Ia(jt, t), we(t);
            break;
          case 26:
          case 27:
          case 5:
            Ue(t);
            break;
          case 4:
            we(t);
            break;
          case 13:
            Qa(t);
            break;
          case 19:
            F(_t, t);
            break;
          case 10:
            Ia(t.type, t);
            break;
          case 22:
          case 23:
            Qa(t), Vf(t), e !== null && F(Mr, t);
            break;
          case 24:
            Ia(jt, t);
        }
      }
      function zR() {
        Xw.forEach(function (e) {
          return e();
        });
      }
      function gv() {
        var e =
          typeof IS_REACT_ACT_ENVIRONMENT < "u"
            ? IS_REACT_ACT_ENVIRONMENT
            : void 0;
        return (
          e ||
            L.actQueue === null ||
            console.error(
              "The current testing environment is not configured to support act(...)"
            ),
          e
        );
      }
      function Cn(e) {
        if ((mt & dn) !== Nn && Xe !== 0) return Xe & -Xe;
        var t = L.T;
        return t !== null
          ? (t._updatedFibers || (t._updatedFibers = new Set()),
            t._updatedFibers.add(e),
            (e = Nr),
            e !== 0 ? e : Kd())
          : tl();
      }
      function vv() {
        Un === 0 && (Un = !(Xe & 536870912) || Ze ? It() : 536870912);
        var e = Fn.current;
        return e !== null && (e.flags |= 32), Un;
      }
      function vt(e, t, n) {
        if (
          (Zl && console.error("useInsertionEffect must not schedule updates."),
          Eh && (wc = !0),
          ((e === ut && st === Hr) || e.cancelPendingCommit !== null) &&
            (ml(e, 0), Ja(e, Xe, Un, !1)),
          Tn(e, n),
          mt & dn && e === ut)
        ) {
          if (qn)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                (e = (Pe && X(Pe)) || "Unknown"),
                  xS.has(e) ||
                    (xS.add(e),
                    (t = X(t) || "Unknown"),
                    console.error(
                      "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                      t,
                      e,
                      e
                    ));
                break;
              case 1:
                RS ||
                  (console.error(
                    "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
                  ),
                  (RS = !0));
            }
        } else
          ra && di(e, t, n),
            GR(t),
            e === ut &&
              ((mt & dn) === Nn && (Xo |= n), Tt === jr && Ja(e, Xe, Un, !1)),
            Ea(e);
      }
      function bv(e, t, n) {
        if ((mt & (dn | so)) !== Nn)
          throw Error("Should not already be working.");
        var a =
            (!n && (t & 60) === 0 && (t & e.expiredLanes) === 0) || Yt(e, t),
          r = a ? HR(e, t) : Qd(e, t, !0),
          i = a;
        do {
          if (r === co) {
            Il && !a && Ja(e, t, 0, !1);
            break;
          } else if (r === Ec) Ja(e, t, 0, !fo);
          else {
            if (((n = e.current.alternate), i && !jR(n))) {
              (r = Qd(e, t, !1)), (i = !1);
              continue;
            }
            if (r === Ql) {
              if (((i = t), e.errorRecoveryDisabledLanes & i)) var f = 0;
              else
                (f = e.pendingLanes & -536870913),
                  (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
              if (f !== 0) {
                t = f;
                e: {
                  r = e;
                  var m = f;
                  f = wu;
                  var g = r.current.memoizedState.isDehydrated;
                  if (
                    (g && (ml(r, m).flags |= 256), (m = Qd(r, m, !1)), m !== Ql)
                  ) {
                    if (ph && !g) {
                      (r.errorRecoveryDisabledLanes |= i), (Xo |= i), (r = jr);
                      break e;
                    }
                    (r = ca), (ca = f), r !== null && $d(r);
                  }
                  r = m;
                }
                if (((i = !1), r !== Ql)) continue;
              }
            }
            if (r === Eu) {
              ml(e, 0), Ja(e, t, 0, !0);
              break;
            }
            e: {
              switch (((a = e), r)) {
                case co:
                case Eu:
                  throw Error("Root did not complete. This is a bug in React.");
                case jr:
                  if ((t & 4194176) === t) {
                    Ja(a, t, Un, !fo);
                    break e;
                  }
                  break;
                case Ql:
                  ca = null;
                  break;
                case dh:
                case vS:
                  break;
                default:
                  throw Error("Unknown root exit status.");
              }
              if (
                ((a.finishedWork = n),
                (a.finishedLanes = t),
                L.actQueue !== null)
              )
                Fd(a, ca, Au, Tc, Un, Xo, kr, TS, Xm, 0);
              else {
                if ((t & 62914560) === t && ((r = gh + SS - xa()), 10 < r)) {
                  if ((Ja(a, t, Un, !fo), Ee(a, 0) !== 0)) break e;
                  a.timeoutHandle = MS(
                    Sv.bind(
                      null,
                      a,
                      n,
                      ca,
                      Au,
                      Tc,
                      t,
                      Un,
                      Xo,
                      kr,
                      fo,
                      Ww,
                      Xm,
                      0
                    ),
                    r
                  );
                  break e;
                }
                Sv(a, n, ca, Au, Tc, t, Un, Xo, kr, fo, TS, Xm, 0);
              }
            }
          }
          break;
        } while (!0);
        Ea(e);
      }
      function $d(e) {
        ca === null ? (ca = e) : ca.push.apply(ca, e);
      }
      function Sv(e, t, n, a, r, i, f, m, g, b, U, Y, _) {
        var $ = t.subtreeFlags;
        if (
          ($ & 8192 || ($ & 16785408) === 16785408) &&
          ((Uu = { stylesheets: null, count: 0, unsuspend: hx }),
          uv(t),
          (t = yx()),
          t !== null)
        ) {
          (e.cancelPendingCommit = t(
            Fd.bind(null, e, n, a, r, f, m, g, Zw, Y, _)
          )),
            Ja(e, i, f, !b);
          return;
        }
        Fd(e, n, a, r, f, m, g, U, Y, _);
      }
      function jR(e) {
        for (var t = e; ; ) {
          var n = t.tag;
          if (
            (n === 0 || n === 11 || n === 15) &&
            t.flags & 16384 &&
            ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
          )
            for (var a = 0; a < n.length; a++) {
              var r = n[a],
                i = r.getSnapshot;
              r = r.value;
              try {
                if (!un(i(), r)) return !1;
              } catch {
                return !1;
              }
            }
          if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
          else {
            if (t === e) break;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) return !0;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return !0;
      }
      function Ja(e, t, n, a) {
        (t &= ~yh),
          (t &= ~Xo),
          (e.suspendedLanes |= t),
          (e.pingedLanes &= ~t),
          a && (e.warmLanes |= t),
          (a = e.expirationTimes);
        for (var r = t; 0 < r; ) {
          var i = 31 - rn(r),
            f = 1 << i;
          (a[i] = -1), (r &= ~f);
        }
        n !== 0 && ci(e, n, t);
      }
      function dl() {
        return (mt & (dn | so)) === Nn ? (qi(0), !1) : !0;
      }
      function Gd() {
        if (Pe !== null) {
          if (st === Sn) var e = Pe.return;
          else (e = Pe), Ds(), Ff(e), (jl = null), (hu = 0), (e = Pe);
          for (; e !== null; ) yv(e.alternate, e), (e = e.return);
          Pe = null;
        }
      }
      function ml(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        n !== Uh && ((e.timeoutHandle = Uh), oA(n)),
          (n = e.cancelPendingCommit),
          n !== null && ((e.cancelPendingCommit = null), n()),
          Gd(),
          (ut = e),
          (Pe = n = Mo(e.current, null)),
          (Xe = t),
          (st = Sn),
          (Mn = null),
          (fo = !1),
          (Il = Yt(e, t)),
          (ph = !1),
          (Tt = co),
          (kr = Un = yh = Xo = Go = 0),
          (ca = wu = null),
          (Tc = !1),
          t & 8 && (t |= t & 32);
        var a = e.entangledLanes;
        if (a !== 0)
          for (e = e.entanglements, a &= t; 0 < a; ) {
            var r = 31 - rn(a),
              i = 1 << r;
            (t |= e[r]), (a &= ~i);
          }
        return (Ua = t), ls(), ia.discardPendingWarnings(), n;
      }
      function Ev(e, t) {
        (Me = null),
          (L.H = Ma),
          (L.getCurrentStack = null),
          (qn = !1),
          (Wt = null),
          t === hc
            ? ((t = Py()), (st = Ru))
            : t === T0
            ? ((t = Py()), (st = bS))
            : (st =
                t === tS
                  ? hh
                  : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? Fl
                  : Tu),
          (Mn = t);
        var n = Pe;
        if (n === null) (Tt = Eu), Os(e, wn(t, e.current));
        else
          switch ((n.mode & Xt && jf(n), A(), st)) {
            case Tu:
              le !== null &&
                typeof le.markComponentErrored == "function" &&
                le.markComponentErrored(n, t, Xe);
              break;
            case Hr:
            case Ru:
            case Fl:
            case xu:
              le !== null &&
                typeof le.markComponentSuspended == "function" &&
                le.markComponentSuspended(n, t, Xe);
          }
      }
      function Tv() {
        var e = L.H;
        return (L.H = Ma), e === null ? Ma : e;
      }
      function Rv() {
        var e = L.A;
        return (L.A = Gw), e;
      }
      function Xd() {
        (Tt = jr),
          fo || ((Xe & 4194176) !== Xe && Fn.current !== null) || (Il = !0),
          (!(Go & 134217727) && !(Xo & 134217727)) ||
            ut === null ||
            Ja(ut, Xe, Un, !1);
      }
      function Qd(e, t, n) {
        var a = mt;
        mt |= dn;
        var r = Tv(),
          i = Rv();
        if (ut !== e || Xe !== t) {
          if (ra) {
            var f = e.memoizedUpdaters;
            0 < f.size && (Yi(e, Xe), f.clear()), el(e, t);
          }
          (Au = null), ml(e, t);
        }
        ie(t), (t = !1), (f = Tt);
        e: do
          try {
            if (st !== Sn && Pe !== null) {
              var m = Pe,
                g = Mn;
              switch (st) {
                case hh:
                  Gd(), (f = Ec);
                  break e;
                case Ru:
                case Hr:
                case Fl:
                  Fn.current === null && (t = !0);
                  var b = st;
                  if (((st = Sn), (Mn = null), hl(e, m, g, b), n && Il)) {
                    f = co;
                    break e;
                  }
                  break;
                default:
                  (b = st), (st = Sn), (Mn = null), hl(e, m, g, b);
              }
            }
            xv(), (f = Tt);
            break;
          } catch (U) {
            Ev(e, U);
          }
        while (!0);
        return (
          t && e.shellSuspendCounter++,
          Ds(),
          (mt = a),
          (L.H = r),
          (L.A = i),
          ce(),
          Pe === null && ((ut = null), (Xe = 0), ls()),
          f
        );
      }
      function xv() {
        for (; Pe !== null; ) wv(Pe);
      }
      function HR(e, t) {
        var n = mt;
        mt |= dn;
        var a = Tv(),
          r = Rv();
        if (ut !== e || Xe !== t) {
          if (ra) {
            var i = e.memoizedUpdaters;
            0 < i.size && (Yi(e, Xe), i.clear()), el(e, t);
          }
          (Au = null), (Rc = xa() + ES), ml(e, t);
        } else Il = Yt(e, t);
        ie(t);
        e: do
          try {
            if (st !== Sn && Pe !== null)
              t: switch (((t = Pe), (i = Mn), st)) {
                case Tu:
                  (st = Sn), (Mn = null), hl(e, t, i, Tu);
                  break;
                case Hr:
                  if (Yy(i)) {
                    (st = Sn), (Mn = null), Av(t);
                    break;
                  }
                  (t = function () {
                    st === Hr && ut === e && (st = xu), Ea(e);
                  }),
                    i.then(t, t);
                  break e;
                case Ru:
                  st = xu;
                  break e;
                case bS:
                  st = mh;
                  break e;
                case xu:
                  Yy(i)
                    ? ((st = Sn), (Mn = null), Av(t))
                    : ((st = Sn), (Mn = null), hl(e, t, i, xu));
                  break;
                case mh:
                  var f = null;
                  switch (Pe.tag) {
                    case 26:
                      f = Pe.memoizedState;
                    case 5:
                    case 27:
                      var m = Pe;
                      if (!f || fb(f)) {
                        (st = Sn), (Mn = null);
                        var g = m.sibling;
                        if (g !== null) Pe = g;
                        else {
                          var b = m.return;
                          b !== null ? ((Pe = b), ks(b)) : (Pe = null);
                        }
                        break t;
                      }
                      break;
                    default:
                      console.error(
                        "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                      );
                  }
                  (st = Sn), (Mn = null), hl(e, t, i, mh);
                  break;
                case Fl:
                  (st = Sn), (Mn = null), hl(e, t, i, Fl);
                  break;
                case hh:
                  Gd(), (Tt = Ec);
                  break e;
                default:
                  throw Error(
                    "Unexpected SuspendedReason. This is a bug in React."
                  );
              }
            L.actQueue !== null ? xv() : kR();
            break;
          } catch (U) {
            Ev(e, U);
          }
        while (!0);
        return (
          Ds(),
          (L.H = a),
          (L.A = r),
          (mt = n),
          Pe !== null
            ? (le !== null &&
                typeof le.markRenderYielded == "function" &&
                le.markRenderYielded(),
              co)
            : (ce(), (ut = null), (Xe = 0), ls(), Tt)
        );
      }
      function kR() {
        for (; Pe !== null && !_x(); ) wv(Pe);
      }
      function wv(e) {
        var t = e.alternate;
        (e.mode & Xt) !== ct
          ? (zf(e), (t = J(e, Od, t, e, Ua)), jf(e))
          : (t = J(e, Od, t, e, Ua)),
          (e.memoizedProps = e.pendingProps),
          t === null ? ks(e) : (Pe = t);
      }
      function Av(e) {
        var t = J(e, LR, e);
        (e.memoizedProps = e.pendingProps), t === null ? ks(e) : (Pe = t);
      }
      function LR(e) {
        var t = e.alternate,
          n = (e.mode & Xt) !== ct;
        switch ((n && zf(e), e.tag)) {
          case 15:
          case 0:
            t = zg(t, e, e.pendingProps, e.type, void 0, Xe);
            break;
          case 11:
            t = zg(t, e, e.pendingProps, e.type.render, e.ref, Xe);
            break;
          case 5:
            Ff(e);
          default:
            yv(t, e), (e = Pe = mv(e, Ua)), (t = Od(t, e, Ua));
        }
        return n && jf(e), t;
      }
      function hl(e, t, n, a) {
        Ds(), Ff(t), (jl = null), (hu = 0);
        var r = t.return;
        try {
          if (bR(e, r, t, n, Xe)) {
            (Tt = Eu), Os(e, wn(n, e.current)), (Pe = null);
            return;
          }
        } catch (i) {
          if (r !== null) throw ((Pe = r), i);
          (Tt = Eu), Os(e, wn(n, e.current)), (Pe = null);
          return;
        }
        t.flags & 32768
          ? (Ze || a === Tu
              ? (e = !0)
              : Il || Xe & 536870912
              ? (e = !1)
              : ((fo = e = !0),
                (a === Hr || a === Ru || a === Fl) &&
                  ((a = Fn.current),
                  a !== null && a.tag === 13 && (a.flags |= 16384))),
            Cv(t, e))
          : ks(t);
      }
      function ks(e) {
        var t = e;
        do {
          if (t.flags & 32768) {
            Cv(t, fo);
            return;
          }
          var n = t.alternate;
          if (
            ((e = t.return),
            zf(t),
            (n = J(t, UR, n, t, Ua)),
            (t.mode & Xt) !== ct && jy(t),
            n !== null)
          ) {
            Pe = n;
            return;
          }
          if (((t = t.sibling), t !== null)) {
            Pe = t;
            return;
          }
          Pe = t = e;
        } while (t !== null);
        Tt === co && (Tt = vS);
      }
      function Cv(e, t) {
        do {
          var n = _R(e.alternate, e);
          if (n !== null) {
            (n.flags &= 32767), (Pe = n);
            return;
          }
          if ((e.mode & Xt) !== ct) {
            jy(e), (n = e.actualDuration);
            for (var a = e.child; a !== null; )
              (n += a.actualDuration), (a = a.sibling);
            e.actualDuration = n;
          }
          if (
            ((n = e.return),
            n !== null &&
              ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
            !t && ((e = e.sibling), e !== null))
          ) {
            Pe = e;
            return;
          }
          Pe = e = n;
        } while (e !== null);
        (Tt = Ec), (Pe = null);
      }
      function Fd(e, t, n, a, r, i, f, m, g, b) {
        var U = L.T,
          Y = dt.p;
        try {
          (dt.p = Aa), (L.T = null), BR(e, t, n, a, Y, r, i, f, m, g, b);
        } finally {
          (L.T = U), (dt.p = Y);
        }
      }
      function BR(e, t, n, a, r, i, f, m) {
        do Er();
        while (Lr !== null);
        if (
          (ia.flushLegacyContextWarning(),
          ia.flushPendingUnsafeLifecycleWarnings(),
          (mt & (dn | so)) !== Nn)
        )
          throw Error("Should not already be working.");
        var g = e.finishedWork;
        if (
          ((a = e.finishedLanes),
          le !== null &&
            typeof le.markCommitStarted == "function" &&
            le.markCommitStarted(a),
          g === null)
        )
          return So(), null;
        if (
          (a === 0 &&
            console.error(
              "root.finishedLanes should not be empty during a commit. This is a bug in React."
            ),
          (e.finishedWork = null),
          (e.finishedLanes = 0),
          g === e.current)
        )
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        (e.callbackNode = null),
          (e.callbackPriority = 0),
          (e.cancelPendingCommit = null);
        var b = g.lanes | g.childLanes;
        if (
          ((b |= Gm),
          mn(e, a, b, i, f, m),
          e === ut && ((Pe = ut = null), (Xe = 0)),
          (!(g.subtreeFlags & 10256) && !(g.flags & 10256)) ||
            xc ||
            ((xc = !0),
            (vh = b),
            (bh = n),
            $R(Sl, function () {
              return Er(), null;
            })),
          (uc = Ul()),
          (n = (g.flags & 15990) !== 0),
          g.subtreeFlags & 15990 || n
            ? ((n = L.T),
              (L.T = null),
              (i = dt.p),
              (dt.p = Aa),
              (f = mt),
              (mt |= so),
              CR(e, g),
              DR(e, g, a),
              fR(Nh, e.containerInfo),
              (Vc = !!Dh),
              (Nh = Dh = null),
              (e.current = g),
              le !== null &&
                typeof le.markLayoutEffectsStarted == "function" &&
                le.markLayoutEffectsStarted(a),
              NR(g, e, a),
              le !== null &&
                typeof le.markLayoutEffectsStopped == "function" &&
                le.markLayoutEffectsStopped(),
              zx(),
              (mt = f),
              (dt.p = i),
              (L.T = n))
            : (e.current = g),
          (n = xc)
            ? ((xc = !1), (Lr = e), (Cu = a))
            : (Ov(e, b), (Br = 0), (Du = null)),
          (b = e.pendingLanes),
          b === 0 && (Qo = null),
          n || Uv(e),
          Ya(g.stateNode, r),
          ra && e.memoizedUpdaters.clear(),
          zR(),
          Ea(e),
          t !== null)
        )
          for (r = e.onRecoverableError, g = 0; g < t.length; g++)
            (b = t[g]), (n = VR(b.stack)), J(b.source, r, b.value, n);
        return (
          Cu & 3 && Er(),
          (b = e.pendingLanes),
          a & 4194218 && b & 42
            ? ((cc = !0), e === Sh ? Ou++ : ((Ou = 0), (Sh = e)))
            : (Ou = 0),
          qi(0),
          So(),
          null
        );
      }
      function VR(e) {
        return (
          (e = { componentStack: e }),
          Object.defineProperty(e, "digest", {
            get: function () {
              console.error(
                'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
              );
            },
          }),
          e
        );
      }
      function Ov(e, t) {
        (e.pooledCacheLanes &= t) === 0 &&
          ((t = e.pooledCache), t != null && ((e.pooledCache = null), Oi(t)));
      }
      function Er() {
        if (Lr !== null) {
          var e = Lr,
            t = vh;
          vh = 0;
          var n = mi(Cu),
            a = no > n ? no : n;
          n = L.T;
          var r = dt.p;
          try {
            if (((dt.p = a), (L.T = null), Lr === null)) var i = !1;
            else {
              (a = bh), (bh = null);
              var f = Lr,
                m = Cu;
              if (((Lr = null), (Cu = 0), (mt & (dn | so)) !== Nn))
                throw Error(
                  "Cannot flush passive effects while already rendering."
                );
              (Eh = !0),
                (wc = !1),
                le !== null &&
                  typeof le.markPassiveEffectsStarted == "function" &&
                  le.markPassiveEffectsStarted(m);
              var g = mt;
              if (
                ((mt |= so),
                cv(f.current),
                lv(f, f.current, m, a),
                le !== null &&
                  typeof le.markPassiveEffectsStopped == "function" &&
                  le.markPassiveEffectsStopped(),
                Uv(f),
                (mt = g),
                qi(0, !1),
                wc ? (f === Du ? Br++ : ((Br = 0), (Du = f))) : (Br = 0),
                (wc = Eh = !1),
                Kt && typeof Kt.onPostCommitFiberRoot == "function")
              )
                try {
                  Kt.onPostCommitFiberRoot(El, f);
                } catch (U) {
                  wa ||
                    ((wa = !0),
                    console.error(
                      "React instrumentation encountered an error: %s",
                      U
                    ));
                }
              var b = f.current.stateNode;
              (b.effectDuration = 0), (b.passiveEffectDuration = 0), (i = !0);
            }
            return i;
          } finally {
            (dt.p = r), (L.T = n), Ov(e, t);
          }
        }
        return !1;
      }
      function Dv(e, t, n) {
        (t = wn(n, t)),
          (t = yd(e.stateNode, t, 2)),
          (e = Do(e, t, 2)),
          e !== null && (Tn(e, 2), Ea(e));
      }
      function rt(e, t, n) {
        if (((Zl = !1), e.tag === 3)) Dv(e, e, n);
        else {
          for (; t !== null; ) {
            if (t.tag === 3) {
              Dv(t, e, n);
              return;
            }
            if (t.tag === 1) {
              var a = t.stateNode;
              if (
                typeof t.type.getDerivedStateFromError == "function" ||
                (typeof a.componentDidCatch == "function" &&
                  (Qo === null || !Qo.has(a)))
              ) {
                (e = wn(n, e)),
                  (n = gd(2)),
                  (a = Do(t, n, 2)),
                  a !== null && (vd(n, a, t, e), Tn(a, 2), Ea(a));
                return;
              }
            }
            t = t.return;
          }
          console.error(
            `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
            n
          );
        }
      }
      function Id(e, t, n) {
        var a = e.pingCache;
        if (a === null) {
          a = e.pingCache = new Qw();
          var r = new Set();
          a.set(t, r);
        } else (r = a.get(t)), r === void 0 && ((r = new Set()), a.set(t, r));
        r.has(n) ||
          ((ph = !0),
          r.add(n),
          (a = YR.bind(null, e, t, n)),
          ra && Yi(e, n),
          t.then(a, a));
      }
      function YR(e, t, n) {
        var a = e.pingCache;
        a !== null && a.delete(t),
          (e.pingedLanes |= e.suspendedLanes & n),
          (e.warmLanes &= ~n),
          gv() &&
            L.actQueue === null &&
            console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),
          ut === e &&
            (Xe & n) === n &&
            (Tt === jr ||
            (Tt === dh && (Xe & 62914560) === Xe && xa() - gh < SS)
              ? (mt & dn) === Nn && ml(e, 0)
              : (yh |= n),
            kr === Xe && (kr = 0)),
          Ea(e);
      }
      function Nv(e, t) {
        t === 0 && (t = ta()), (e = Zt(e, t)), e !== null && (Tn(e, t), Ea(e));
      }
      function qR(e) {
        var t = e.memoizedState,
          n = 0;
        t !== null && (n = t.retryLane), Nv(e, n);
      }
      function PR(e, t) {
        var n = 0;
        switch (e.tag) {
          case 13:
            var a = e.stateNode,
              r = e.memoizedState;
            r !== null && (n = r.retryLane);
            break;
          case 19:
            a = e.stateNode;
            break;
          case 22:
            a = e.stateNode._retryCache;
            break;
          default:
            throw Error(
              "Pinged unknown suspense boundary type. This is probably a bug in React."
            );
        }
        a !== null && a.delete(t), Nv(e, n);
      }
      function Zd(e, t, n) {
        if (t.subtreeFlags & 33562624)
          for (t = t.child; t !== null; ) {
            var a = e,
              r = t,
              i = r.type === Is;
            (i = n || i),
              r.tag !== 22
                ? r.flags & 33554432
                  ? i && J(r, Mv, a, r, (r.mode & S0) === ct)
                  : Zd(a, r, i)
                : r.memoizedState === null &&
                  (i && r.flags & 8192
                    ? J(r, Mv, a, r)
                    : r.subtreeFlags & 33554432 && J(r, Zd, a, r, i)),
              (t = t.sibling);
          }
      }
      function Mv(e, t) {
        var n =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
        We(!0);
        try {
          ov(t),
            n && fv(t),
            rv(e, t.alternate, t, !1),
            n && iv(e, t, 0, null, !1);
        } finally {
          We(!1);
        }
      }
      function Uv(e) {
        var t = !0;
        e.current.mode & (en | la) || (t = !1), Zd(e, e.current, t);
      }
      function _v(e) {
        if ((mt & dn) === Nn) {
          var t = e.tag;
          if (
            t === 3 ||
            t === 1 ||
            t === 0 ||
            t === 11 ||
            t === 14 ||
            t === 15
          ) {
            if (((t = X(e) || "ReactComponent"), Ac !== null)) {
              if (Ac.has(t)) return;
              Ac.add(t);
            } else Ac = new Set([t]);
            J(e, function () {
              console.error(
                "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
              );
            });
          }
        }
      }
      function Yi(e, t) {
        ra &&
          e.memoizedUpdaters.forEach(function (n) {
            di(e, n, t);
          });
      }
      function $R(e, t) {
        var n = L.actQueue;
        return n !== null ? (n.push(t), Kw) : Cm(e, t);
      }
      function GR(e) {
        gv() &&
          L.actQueue === null &&
          J(e, function () {
            console.error(
              `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
              X(e)
            );
          });
      }
      function Ea(e) {
        e !== Wl &&
          e.next === null &&
          (Wl === null ? (Cc = Wl = e) : (Wl = Wl.next = e)),
          (Oc = !0),
          L.actQueue !== null
            ? Rh || ((Rh = !0), Lv(zv))
            : Th || ((Th = !0), Lv(zv));
      }
      function qi(e, t) {
        if (!xh && Oc) {
          xh = !0;
          do
            for (var n = !1, a = Cc; a !== null; ) {
              if (e !== 0) {
                var r = a.pendingLanes;
                if (r === 0) var i = 0;
                else {
                  var f = a.suspendedLanes,
                    m = a.pingedLanes;
                  (i = (1 << (31 - rn(42 | e) + 1)) - 1),
                    (i &= r & ~(f & ~m)),
                    (i = i & 201326677 ? (i & 201326677) | 1 : i ? i | 2 : 0);
                }
                i !== 0 && ((n = !0), kv(a, i));
              } else
                (i = Xe),
                  (i = Ee(a, a === ut ? i : 0)),
                  !(i & 3) || Yt(a, i) || ((n = !0), kv(a, i));
              a = a.next;
            }
          while (n);
          xh = !1;
        }
      }
      function zv() {
        Oc = Rh = Th = !1;
        var e = 0;
        Vr !== 0 && (ZR() && (e = Vr), (Vr = 0));
        for (var t = xa(), n = null, a = Cc; a !== null; ) {
          var r = a.next,
            i = jv(a, t);
          i === 0
            ? ((a.next = null),
              n === null ? (Cc = r) : (n.next = r),
              r === null && (Wl = n))
            : ((n = a), (e !== 0 || i & 3) && (Oc = !0)),
            (a = r);
        }
        qi(e);
      }
      function jv(e, t) {
        for (
          var n = e.suspendedLanes,
            a = e.pingedLanes,
            r = e.expirationTimes,
            i = e.pendingLanes & -62914561;
          0 < i;

        ) {
          var f = 31 - rn(i),
            m = 1 << f,
            g = r[f];
          g === -1
            ? (!(m & n) || m & a) && (r[f] = Ut(m, t))
            : g <= t && (e.expiredLanes |= m),
            (i &= ~m);
        }
        if (
          ((t = ut),
          (n = Xe),
          (n = Ee(e, e === t ? n : 0)),
          (a = e.callbackNode),
          n === 0 || (e === t && st === Hr) || e.cancelPendingCommit !== null)
        )
          return (
            a !== null && Wd(a),
            (e.callbackNode = null),
            (e.callbackPriority = 0)
          );
        if (!(n & 3) || Yt(e, n)) {
          if (
            ((t = n & -n),
            t !== e.callbackPriority || (L.actQueue !== null && a !== wh))
          )
            Wd(a);
          else return t;
          switch (mi(n)) {
            case Aa:
            case Ca:
              n = Dm;
              break;
            case no:
              n = Sl;
              break;
            case ec:
              n = Nm;
              break;
            default:
              n = Sl;
          }
          return (
            (a = Hv.bind(null, e)),
            L.actQueue !== null
              ? (L.actQueue.push(a), (n = wh))
              : (n = Cm(n, a)),
            (e.callbackPriority = t),
            (e.callbackNode = n),
            t
          );
        }
        return (
          a !== null && Wd(a),
          (e.callbackPriority = 2),
          (e.callbackNode = null),
          2
        );
      }
      function Hv(e, t) {
        cc = sc = !1;
        var n = e.callbackNode;
        if (Er() && e.callbackNode !== n) return null;
        var a = Xe;
        return (
          (a = Ee(e, e === ut ? a : 0)),
          a === 0
            ? null
            : (bv(e, a, t),
              jv(e, xa()),
              e.callbackNode != null && e.callbackNode === n
                ? Hv.bind(null, e)
                : null)
        );
      }
      function kv(e, t) {
        if (Er()) return null;
        (sc = cc), (cc = !1), bv(e, t, !0);
      }
      function Wd(e) {
        e !== wh && e !== null && Ux(e);
      }
      function Lv(e) {
        L.actQueue !== null &&
          L.actQueue.push(function () {
            return e(), null;
          }),
          rA(function () {
            (mt & (dn | so)) !== Nn ? Cm(Om, e) : e();
          });
      }
      function Kd() {
        return Vr === 0 && (Vr = It()), Vr;
      }
      function Bv(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean"
          ? null
          : typeof e == "function"
          ? e
          : (Q(e, "action"), Si("" + e));
      }
      function Vv(e, t) {
        var n = t.ownerDocument.createElement("input");
        return (
          (n.name = t.name),
          (n.value = t.value),
          e.id && n.setAttribute("form", e.id),
          t.parentNode.insertBefore(n, t),
          (e = new FormData(e)),
          n.parentNode.removeChild(n),
          e
        );
      }
      function XR(e, t, n, a, r) {
        if (t === "submit" && n && n.stateNode === r) {
          var i = Bv((r[gn] || null).action),
            f = a.submitter;
          f &&
            ((t = (t = f[gn] || null)
              ? Bv(t.formAction)
              : f.getAttribute("formAction")),
            t !== null && ((i = t), (f = null)));
          var m = new rc("action", "action", null, a, r);
          e.push({
            event: m,
            listeners: [
              {
                instance: null,
                listener: function () {
                  if (a.defaultPrevented) {
                    if (Vr !== 0) {
                      var g = f ? Vv(r, f) : new FormData(r),
                        b = {
                          pending: !0,
                          data: g,
                          method: r.method,
                          action: i,
                        };
                      Object.freeze(b), sd(n, b, null, g);
                    }
                  } else
                    typeof i == "function" &&
                      (m.preventDefault(),
                      (g = f ? Vv(r, f) : new FormData(r)),
                      (b = {
                        pending: !0,
                        data: g,
                        method: r.method,
                        action: i,
                      }),
                      Object.freeze(b),
                      sd(n, b, i, g));
                },
                currentTarget: r,
              },
            ],
          });
        }
      }
      function Yv(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          e: {
            var r = void 0,
              i = a.event;
            if (((a = a.listeners), t))
              for (var f = a.length - 1; 0 <= f; f--) {
                var m = a[f],
                  g = m.instance,
                  b = m.currentTarget;
                if (((m = m.listener), g !== r && i.isPropagationStopped()))
                  break e;
                (r = i), (r.currentTarget = b);
                try {
                  m(r);
                } catch (U) {
                  bc(U);
                }
                (r.currentTarget = null), (r = g);
              }
            else
              for (f = 0; f < a.length; f++) {
                if (
                  ((m = a[f]),
                  (g = m.instance),
                  (b = m.currentTarget),
                  (m = m.listener),
                  g !== r && i.isPropagationStopped())
                )
                  break e;
                (r = i), (r.currentTarget = b);
                try {
                  m(r);
                } catch (U) {
                  bc(U);
                }
                (r.currentTarget = null), (r = g);
              }
          }
        }
      }
      function Ie(e, t) {
        Ah.has(e) ||
          console.error(
            'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
            e
          );
        var n = t[Mm];
        n === void 0 && (n = t[Mm] = new Set());
        var a = e + "__bubble";
        n.has(a) || (qv(t, e, 2, !1), n.add(a));
      }
      function Jd(e, t, n) {
        Ah.has(e) &&
          !t &&
          console.error(
            'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
            e
          );
        var a = 0;
        t && (a |= 4), qv(n, e, a, t);
      }
      function em(e) {
        if (!e[Dc]) {
          (e[Dc] = !0),
            jb.forEach(function (n) {
              n !== "selectionchange" &&
                (Ah.has(n) || Jd(n, !1, e), Jd(n, !0, e));
            });
          var t = e.nodeType === 9 ? e : e.ownerDocument;
          t === null || t[Dc] || ((t[Dc] = !0), Jd("selectionchange", !1, t));
        }
      }
      function qv(e, t, n, a) {
        switch (vb(t)) {
          case Aa:
            var r = Tx;
            break;
          case Ca:
            r = Rx;
            break;
          default:
            r = mm;
        }
        (n = r.bind(null, t, n, e)),
          (r = void 0),
          !Hm ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (r = !0),
          a
            ? r !== void 0
              ? e.addEventListener(t, n, { capture: !0, passive: r })
              : e.addEventListener(t, n, !0)
            : r !== void 0
            ? e.addEventListener(t, n, { passive: r })
            : e.addEventListener(t, n, !1);
      }
      function tm(e, t, n, a, r) {
        var i = a;
        if (!(t & 1) && !(t & 2) && a !== null)
          e: for (;;) {
            if (a === null) return;
            var f = a.tag;
            if (f === 3 || f === 4) {
              var m = a.stateNode.containerInfo;
              if (m === r || (m.nodeType === 8 && m.parentNode === r)) break;
              if (f === 4)
                for (f = a.return; f !== null; ) {
                  var g = f.tag;
                  if (
                    (g === 3 || g === 4) &&
                    ((g = f.stateNode.containerInfo),
                    g === r || (g.nodeType === 8 && g.parentNode === r))
                  )
                    return;
                  f = f.return;
                }
              for (; m !== null; ) {
                if (((f = ma(m)), f === null)) return;
                if (((g = f.tag), g === 5 || g === 6 || g === 26 || g === 27)) {
                  a = i = f;
                  continue e;
                }
                m = m.parentNode;
              }
            }
            a = a.return;
          }
        gy(function () {
          var b = i,
            U = Of(n),
            Y = [];
          e: {
            var _ = v0.get(e);
            if (_ !== void 0) {
              var $ = rc,
                he = e;
              switch (e) {
                case "keypress":
                  if (as(n) === 0) break e;
                case "keydown":
                case "keyup":
                  $ = bw;
                  break;
                case "focusin":
                  (he = "focus"), ($ = Vm);
                  break;
                case "focusout":
                  (he = "blur"), ($ = Vm);
                  break;
                case "beforeblur":
                case "afterblur":
                  $ = Vm;
                  break;
                case "click":
                  if (n.button === 2) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  $ = o0;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  $ = iw;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  $ = Tw;
                  break;
                case h0:
                case p0:
                case y0:
                  $ = cw;
                  break;
                case g0:
                  $ = xw;
                  break;
                case "scroll":
                case "scrollend":
                  $ = rw;
                  break;
                case "wheel":
                  $ = Aw;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  $ = dw;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  $ = l0;
                  break;
                case "toggle":
                case "beforetoggle":
                  $ = Ow;
              }
              var ke = (t & 4) !== 0,
                Ct = !ke && (e === "scroll" || e === "scrollend"),
                tt = ke ? (_ !== null ? _ + "Capture" : null) : _;
              ke = [];
              for (var w = b, x; w !== null; ) {
                var C = w;
                if (
                  ((x = C.stateNode),
                  (C = C.tag),
                  (C !== 5 && C !== 26 && C !== 27) ||
                    x === null ||
                    tt === null ||
                    ((C = Ei(w, tt)), C != null && ke.push(Pi(w, C, x))),
                  Ct)
                )
                  break;
                w = w.return;
              }
              0 < ke.length &&
                ((_ = new $(_, he, null, n, U)),
                Y.push({ event: _, listeners: ke }));
            }
          }
          if (!(t & 7)) {
            e: {
              if (
                ((_ = e === "mouseover" || e === "pointerover"),
                ($ = e === "mouseout" || e === "pointerout"),
                _ &&
                  n !== Ki &&
                  (he = n.relatedTarget || n.fromElement) &&
                  (ma(he) || he[Tr]))
              )
                break e;
              if (
                ($ || _) &&
                ((_ =
                  U.window === U
                    ? U
                    : (_ = U.ownerDocument)
                    ? _.defaultView || _.parentWindow
                    : window),
                $
                  ? ((he = n.relatedTarget || n.toElement),
                    ($ = b),
                    (he = he ? ma(he) : null),
                    he !== null &&
                      ((Ct = et(he)),
                      (ke = he.tag),
                      he !== Ct || (ke !== 5 && ke !== 27 && ke !== 6)) &&
                      (he = null))
                  : (($ = null), (he = b)),
                $ !== he)
              ) {
                if (
                  ((ke = o0),
                  (C = "onMouseLeave"),
                  (tt = "onMouseEnter"),
                  (w = "mouse"),
                  (e === "pointerout" || e === "pointerover") &&
                    ((ke = l0),
                    (C = "onPointerLeave"),
                    (tt = "onPointerEnter"),
                    (w = "pointer")),
                  (Ct = $ == null ? _ : Eo($)),
                  (x = he == null ? _ : Eo(he)),
                  (_ = new ke(C, w + "leave", $, n, U)),
                  (_.target = Ct),
                  (_.relatedTarget = x),
                  (C = null),
                  ma(U) === b &&
                    ((ke = new ke(tt, w + "enter", he, n, U)),
                    (ke.target = x),
                    (ke.relatedTarget = Ct),
                    (C = ke)),
                  (Ct = C),
                  $ && he)
                )
                  t: {
                    for (ke = $, tt = he, w = 0, x = ke; x; x = pl(x)) w++;
                    for (x = 0, C = tt; C; C = pl(C)) x++;
                    for (; 0 < w - x; ) (ke = pl(ke)), w--;
                    for (; 0 < x - w; ) (tt = pl(tt)), x--;
                    for (; w--; ) {
                      if (ke === tt || (tt !== null && ke === tt.alternate))
                        break t;
                      (ke = pl(ke)), (tt = pl(tt));
                    }
                    ke = null;
                  }
                else ke = null;
                $ !== null && Pv(Y, _, $, ke, !1),
                  he !== null && Ct !== null && Pv(Y, Ct, he, ke, !0);
              }
            }
            e: {
              if (
                ((_ = b ? Eo(b) : window),
                ($ = _.nodeName && _.nodeName.toLowerCase()),
                $ === "select" || ($ === "input" && _.type === "file"))
              )
                var V = xy;
              else if (Ty(_))
                if (d0) V = sR;
                else {
                  V = iR;
                  var ne = lR;
                }
              else
                ($ = _.nodeName),
                  !$ ||
                  $.toLowerCase() !== "input" ||
                  (_.type !== "checkbox" && _.type !== "radio")
                    ? b && bi(b.elementType) && (V = xy)
                    : (V = uR);
              if (V && (V = V(e, b))) {
                Ry(Y, V, n, U);
                break e;
              }
              ne && ne(e, _, b),
                e === "focusout" &&
                  b &&
                  _.type === "number" &&
                  b.memoizedProps.value != null &&
                  kt(_, "number", _.value);
            }
            switch (((ne = b ? Eo(b) : window), e)) {
              case "focusin":
                (Ty(ne) || ne.contentEditable === "true") &&
                  ((Ol = ne), (qm = b), (ru = null));
                break;
              case "focusout":
                ru = qm = Ol = null;
                break;
              case "mousedown":
                Pm = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (Pm = !1), My(Y, n, U);
                break;
              case "selectionchange":
                if (Uw) break;
              case "keydown":
              case "keyup":
                My(Y, n, U);
            }
            var ze;
            if (Ym)
              e: {
                switch (e) {
                  case "compositionstart":
                    var fe = "onCompositionStart";
                    break e;
                  case "compositionend":
                    fe = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    fe = "onCompositionUpdate";
                    break e;
                }
                fe = void 0;
              }
            else
              Cl
                ? Sy(e, n) && (fe = "onCompositionEnd")
                : e === "keydown" &&
                  n.keyCode === i0 &&
                  (fe = "onCompositionStart");
            fe &&
              (u0 &&
                n.locale !== "ko" &&
                (Cl || fe !== "onCompositionStart"
                  ? fe === "onCompositionEnd" && Cl && (ze = vy())
                  : ((ko = U),
                    (km = "value" in ko ? ko.value : ko.textContent),
                    (Cl = !0))),
              (ne = Ls(b, fe)),
              0 < ne.length &&
                ((fe = new r0(fe, e, null, n, U)),
                Y.push({ event: fe, listeners: ne }),
                ze
                  ? (fe.data = ze)
                  : ((ze = Ey(n)), ze !== null && (fe.data = ze)))),
              (ze = Nw ? nR(e, n) : aR(e, n)) &&
                ((fe = Ls(b, "onBeforeInput")),
                0 < fe.length &&
                  ((ne = new hw("onBeforeInput", "beforeinput", null, n, U)),
                  Y.push({ event: ne, listeners: fe }),
                  (ne.data = ze))),
              XR(Y, e, b, n, U);
          }
          Yv(Y, t);
        });
      }
      function Pi(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Ls(e, t) {
        for (var n = t + "Capture", a = []; e !== null; ) {
          var r = e,
            i = r.stateNode;
          (r = r.tag),
            (r !== 5 && r !== 26 && r !== 27) ||
              i === null ||
              ((r = Ei(e, n)),
              r != null && a.unshift(Pi(e, r, i)),
              (r = Ei(e, t)),
              r != null && a.push(Pi(e, r, i))),
            (e = e.return);
        }
        return a;
      }
      function pl(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null;
      }
      function Pv(e, t, n, a, r) {
        for (var i = t._reactName, f = []; n !== null && n !== a; ) {
          var m = n,
            g = m.alternate,
            b = m.stateNode;
          if (((m = m.tag), g !== null && g === a)) break;
          (m !== 5 && m !== 26 && m !== 27) ||
            b === null ||
            ((g = b),
            r
              ? ((b = Ei(n, i)), b != null && f.unshift(Pi(n, b, g)))
              : r || ((b = Ei(n, i)), b != null && f.push(Pi(n, b, g)))),
            (n = n.return);
        }
        f.length !== 0 && e.push({ event: t, listeners: f });
      }
      function nm(e, t) {
        KT(e, t),
          (e !== "input" && e !== "textarea" && e !== "select") ||
            t == null ||
            t.value !== null ||
            n0 ||
            ((n0 = !0),
            e === "select" && t.multiple
              ? console.error(
                  "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
                  e
                )
              : console.error(
                  "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
                  e
                ));
        var n = {
          registrationNameDependencies: Rr,
          possibleRegistrationNames: Um,
        };
        bi(e) || typeof t.is == "string" || eR(e, t, n),
          t.contentEditable &&
            !t.suppressContentEditableWarning &&
            t.children != null &&
            console.error(
              "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
            );
      }
      function Lt(e, t, n, a) {
        t !== n && ((n = Uo(n)), Uo(t) !== n && (a[e] = t));
      }
      function QR(e, t, n) {
        t.forEach(function (a) {
          n[Xv(a)] = a === "style" ? om(e) : e.getAttribute(a);
        });
      }
      function Ta(e, t) {
        t === !1
          ? console.error(
              "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
              e,
              e,
              e
            )
          : console.error(
              "Expected `%s` listener to be a function, instead got a value of `%s` type.",
              e,
              typeof t
            );
      }
      function $v(e, t) {
        return (
          (e =
            e.namespaceURI === nc || e.namespaceURI === Tl
              ? e.ownerDocument.createElementNS(e.namespaceURI, e.tagName)
              : e.ownerDocument.createElement(e.tagName)),
          (e.innerHTML = t),
          e.innerHTML
        );
      }
      function Uo(e) {
        return (
          _e(e) &&
            (console.error(
              "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
              Ve(e)
            ),
            ot(e)),
          (typeof e == "string" ? e : "" + e)
            .replace(
              Jw,
              `
`
            )
            .replace(eA, "")
        );
      }
      function Gv(e, t) {
        return (t = Uo(t)), Uo(e) === t;
      }
      function Bs() {}
      function lt(e, t, n, a, r, i) {
        switch (n) {
          case "children":
            typeof a == "string"
              ? (ns(a, t),
                t === "body" || (t === "textarea" && a === "") || vi(e, a))
              : (typeof a == "number" || typeof a == "bigint") &&
                (ns("" + a, t), t !== "body" && vi(e, "" + a));
            break;
          case "className":
            Ro(e, "class", a);
            break;
          case "tabIndex":
            Ro(e, "tabindex", a);
            break;
          case "dir":
          case "role":
          case "viewBox":
          case "width":
          case "height":
            Ro(e, n, a);
            break;
          case "style":
            hy(e, a, i);
            break;
          case "data":
            if (t !== "object") {
              Ro(e, "data", a);
              break;
            }
          case "src":
          case "href":
            if (a === "" && (t !== "a" || n !== "href")) {
              console.error(
                n === "src"
                  ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.'
                  : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                n,
                n
              ),
                e.removeAttribute(n);
              break;
            }
            if (
              a == null ||
              typeof a == "function" ||
              typeof a == "symbol" ||
              typeof a == "boolean"
            ) {
              e.removeAttribute(n);
              break;
            }
            Q(a, n), (a = Si("" + a)), e.setAttribute(n, a);
            break;
          case "action":
          case "formAction":
            if (
              (a != null &&
                (t === "form"
                  ? n === "formAction"
                    ? console.error(
                        "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
                      )
                    : typeof a == "function" &&
                      ((r.encType == null && r.method == null) ||
                        Uc ||
                        ((Uc = !0),
                        console.error(
                          "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
                        )),
                      r.target == null ||
                        Mc ||
                        ((Mc = !0),
                        console.error(
                          "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
                        )))
                  : t === "input" || t === "button"
                  ? n === "action"
                    ? console.error(
                        "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
                      )
                    : t !== "input" ||
                      r.type === "submit" ||
                      r.type === "image" ||
                      Nc
                    ? t !== "button" ||
                      r.type == null ||
                      r.type === "submit" ||
                      Nc
                      ? typeof a == "function" &&
                        (r.name == null ||
                          CS ||
                          ((CS = !0),
                          console.error(
                            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
                          )),
                        (r.formEncType == null && r.formMethod == null) ||
                          Uc ||
                          ((Uc = !0),
                          console.error(
                            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
                          )),
                        r.formTarget == null ||
                          Mc ||
                          ((Mc = !0),
                          console.error(
                            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
                          )))
                      : ((Nc = !0),
                        console.error(
                          'A button can only specify a formAction along with type="submit" or no type.'
                        ))
                    : ((Nc = !0),
                      console.error(
                        'An input can only specify a formAction along with type="submit" or type="image".'
                      ))
                  : console.error(
                      n === "action"
                        ? "You can only pass the action prop to <form>."
                        : "You can only pass the formAction prop to <input> or <button>."
                    )),
              typeof a == "function")
            ) {
              e.setAttribute(
                n,
                "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
              );
              break;
            } else
              typeof i == "function" &&
                (n === "formAction"
                  ? (t !== "input" && lt(e, t, "name", r.name, r, null),
                    lt(e, t, "formEncType", r.formEncType, r, null),
                    lt(e, t, "formMethod", r.formMethod, r, null),
                    lt(e, t, "formTarget", r.formTarget, r, null))
                  : (lt(e, t, "encType", r.encType, r, null),
                    lt(e, t, "method", r.method, r, null),
                    lt(e, t, "target", r.target, r, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
              e.removeAttribute(n);
              break;
            }
            Q(a, n), (a = Si("" + a)), e.setAttribute(n, a);
            break;
          case "onClick":
            a != null && (typeof a != "function" && Ta(n, a), (e.onclick = Bs));
            break;
          case "onScroll":
            a != null && (typeof a != "function" && Ta(n, a), Ie("scroll", e));
            break;
          case "onScrollEnd":
            a != null &&
              (typeof a != "function" && Ta(n, a), Ie("scrollend", e));
            break;
          case "dangerouslySetInnerHTML":
            if (a != null) {
              if (typeof a != "object" || !("__html" in a))
                throw Error(
                  "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
                );
              if (((n = a.__html), n != null)) {
                if (r.children != null)
                  throw Error(
                    "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                  );
                e.innerHTML = n;
              }
            }
            break;
          case "multiple":
            e.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
          case "muted":
            e.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "ref":
            break;
          case "autoFocus":
            break;
          case "xlinkHref":
            if (
              a == null ||
              typeof a == "function" ||
              typeof a == "boolean" ||
              typeof a == "symbol"
            ) {
              e.removeAttribute("xlink:href");
              break;
            }
            Q(a, n), (n = Si("" + a)), e.setAttributeNS(Yr, "xlink:href", n);
            break;
          case "contentEditable":
          case "spellCheck":
          case "draggable":
          case "value":
          case "autoReverse":
          case "externalResourcesRequired":
          case "focusable":
          case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol"
              ? (Q(a, n), e.setAttribute(n, "" + a))
              : e.removeAttribute(n);
            break;
          case "inert":
            a !== "" ||
              _c[n] ||
              ((_c[n] = !0),
              console.error(
                "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                n
              ));
          case "allowFullScreen":
          case "async":
          case "autoPlay":
          case "controls":
          case "default":
          case "defer":
          case "disabled":
          case "disablePictureInPicture":
          case "disableRemotePlayback":
          case "formNoValidate":
          case "hidden":
          case "loop":
          case "noModule":
          case "noValidate":
          case "open":
          case "playsInline":
          case "readOnly":
          case "required":
          case "reversed":
          case "scoped":
          case "seamless":
          case "itemScope":
            a && typeof a != "function" && typeof a != "symbol"
              ? e.setAttribute(n, "")
              : e.removeAttribute(n);
            break;
          case "capture":
          case "download":
            a === !0
              ? e.setAttribute(n, "")
              : a !== !1 &&
                a != null &&
                typeof a != "function" &&
                typeof a != "symbol"
              ? (Q(a, n), e.setAttribute(n, a))
              : e.removeAttribute(n);
            break;
          case "cols":
          case "rows":
          case "size":
          case "span":
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol" &&
            !isNaN(a) &&
            1 <= a
              ? (Q(a, n), e.setAttribute(n, a))
              : e.removeAttribute(n);
            break;
          case "rowSpan":
          case "start":
            a == null ||
            typeof a == "function" ||
            typeof a == "symbol" ||
            isNaN(a)
              ? e.removeAttribute(n)
              : (Q(a, n), e.setAttribute(n, a));
            break;
          case "popover":
            Ie("beforetoggle", e), Ie("toggle", e), Ga(e, "popover", a);
            break;
          case "xlinkActuate":
            Hn(e, Yr, "xlink:actuate", a);
            break;
          case "xlinkArcrole":
            Hn(e, Yr, "xlink:arcrole", a);
            break;
          case "xlinkRole":
            Hn(e, Yr, "xlink:role", a);
            break;
          case "xlinkShow":
            Hn(e, Yr, "xlink:show", a);
            break;
          case "xlinkTitle":
            Hn(e, Yr, "xlink:title", a);
            break;
          case "xlinkType":
            Hn(e, Yr, "xlink:type", a);
            break;
          case "xmlBase":
            Hn(e, Ch, "xml:base", a);
            break;
          case "xmlLang":
            Hn(e, Ch, "xml:lang", a);
            break;
          case "xmlSpace":
            Hn(e, Ch, "xml:space", a);
            break;
          case "is":
            i != null &&
              console.error(
                'Cannot update the "is" prop after it has been initialized.'
              ),
              Ga(e, "is", a);
            break;
          case "innerText":
          case "textContent":
            break;
          case "popoverTarget":
            OS ||
              a == null ||
              typeof a != "object" ||
              ((OS = !0),
              console.error(
                "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
                a
              ));
          default:
            !(2 < n.length) ||
            (n[0] !== "o" && n[0] !== "O") ||
            (n[1] !== "n" && n[1] !== "N")
              ? ((n = py(n)), Ga(e, n, a))
              : Rr.hasOwnProperty(n) &&
                a != null &&
                typeof a != "function" &&
                Ta(n, a);
        }
      }
      function am(e, t, n, a, r, i) {
        switch (n) {
          case "style":
            hy(e, a, i);
            break;
          case "dangerouslySetInnerHTML":
            if (a != null) {
              if (typeof a != "object" || !("__html" in a))
                throw Error(
                  "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
                );
              if (((n = a.__html), n != null)) {
                if (r.children != null)
                  throw Error(
                    "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                  );
                e.innerHTML = n;
              }
            }
            break;
          case "children":
            typeof a == "string"
              ? vi(e, a)
              : (typeof a == "number" || typeof a == "bigint") && vi(e, "" + a);
            break;
          case "onScroll":
            a != null && (typeof a != "function" && Ta(n, a), Ie("scroll", e));
            break;
          case "onScrollEnd":
            a != null &&
              (typeof a != "function" && Ta(n, a), Ie("scrollend", e));
            break;
          case "onClick":
            a != null && (typeof a != "function" && Ta(n, a), (e.onclick = Bs));
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
          case "innerHTML":
          case "ref":
            break;
          case "innerText":
          case "textContent":
            break;
          default:
            if (Rr.hasOwnProperty(n))
              a != null && typeof a != "function" && Ta(n, a);
            else
              e: {
                if (
                  n[0] === "o" &&
                  n[1] === "n" &&
                  ((r = n.endsWith("Capture")),
                  (t = n.slice(2, r ? n.length - 7 : void 0)),
                  (i = e[gn] || null),
                  (i = i != null ? i[n] : null),
                  typeof i == "function" && e.removeEventListener(t, i, r),
                  typeof a == "function")
                ) {
                  typeof i != "function" &&
                    i !== null &&
                    (n in e
                      ? (e[n] = null)
                      : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, a, r);
                  break e;
                }
                n in e
                  ? (e[n] = a)
                  : a === !0
                  ? e.setAttribute(n, "")
                  : Ga(e, n, a);
              }
        }
      }
      function $t(e, t, n) {
        switch ((nm(t, n), t)) {
          case "div":
          case "span":
          case "svg":
          case "path":
          case "a":
          case "g":
          case "p":
          case "li":
            break;
          case "img":
            Ie("error", e), Ie("load", e);
            var a = !1,
              r = !1,
              i;
            for (i in n)
              if (n.hasOwnProperty(i)) {
                var f = n[i];
                if (f != null)
                  switch (i) {
                    case "src":
                      a = !0;
                      break;
                    case "srcSet":
                      r = !0;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(
                        t +
                          " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    default:
                      lt(e, t, i, f, n, null);
                  }
              }
            r && lt(e, t, "srcSet", n.srcSet, n, null),
              a && lt(e, t, "src", n.src, n, null);
            return;
          case "input":
            $a("input", n), Ie("invalid", e);
            var m = (i = f = r = null),
              g = null,
              b = null;
            for (a in n)
              if (n.hasOwnProperty(a)) {
                var U = n[a];
                if (U != null)
                  switch (a) {
                    case "name":
                      r = U;
                      break;
                    case "type":
                      f = U;
                      break;
                    case "checked":
                      g = U;
                      break;
                    case "defaultChecked":
                      b = U;
                      break;
                    case "value":
                      i = U;
                      break;
                    case "defaultValue":
                      m = U;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (U != null)
                        throw Error(
                          t +
                            " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                        );
                      break;
                    default:
                      lt(e, t, a, U, n, null);
                  }
              }
            Je(e, n), ft(e, i, m, g, b, f, r, !1), ee(e);
            return;
          case "select":
            $a("select", n), Ie("invalid", e), (a = f = i = null);
            for (r in n)
              if (n.hasOwnProperty(r) && ((m = n[r]), m != null))
                switch (r) {
                  case "value":
                    i = m;
                    break;
                  case "defaultValue":
                    f = m;
                    break;
                  case "multiple":
                    a = m;
                  default:
                    lt(e, t, r, m, n, null);
                }
            kn(e, n),
              (t = i),
              (n = f),
              (e.multiple = !!a),
              t != null ? na(e, !!a, t, !1) : n != null && na(e, !!a, n, !0);
            return;
          case "textarea":
            $a("textarea", n), Ie("invalid", e), (i = r = a = null);
            for (f in n)
              if (n.hasOwnProperty(f) && ((m = n[f]), m != null))
                switch (f) {
                  case "value":
                    a = m;
                    break;
                  case "defaultValue":
                    r = m;
                    break;
                  case "children":
                    i = m;
                    break;
                  case "dangerouslySetInnerHTML":
                    if (m != null)
                      throw Error(
                        "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                      );
                    break;
                  default:
                    lt(e, t, f, m, n, null);
                }
            ay(e, n), ry(e, a, r, i), ee(e);
            return;
          case "option":
            ya(e, n);
            for (g in n)
              if (n.hasOwnProperty(g) && ((a = n[g]), a != null))
                switch (g) {
                  case "selected":
                    e.selected =
                      a && typeof a != "function" && typeof a != "symbol";
                    break;
                  default:
                    lt(e, t, g, a, n, null);
                }
            return;
          case "dialog":
            Ie("cancel", e), Ie("close", e);
            break;
          case "iframe":
          case "object":
            Ie("load", e);
            break;
          case "video":
          case "audio":
            for (a = 0; a < Nu.length; a++) Ie(Nu[a], e);
            break;
          case "image":
            Ie("error", e), Ie("load", e);
            break;
          case "details":
            Ie("toggle", e);
            break;
          case "embed":
          case "source":
          case "link":
            Ie("error", e), Ie("load", e);
          case "area":
          case "base":
          case "br":
          case "col":
          case "hr":
          case "keygen":
          case "meta":
          case "param":
          case "track":
          case "wbr":
          case "menuitem":
            for (b in n)
              if (n.hasOwnProperty(b) && ((a = n[b]), a != null))
                switch (b) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t +
                        " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    lt(e, t, b, a, n, null);
                }
            return;
          default:
            if (bi(t)) {
              for (U in n)
                n.hasOwnProperty(U) &&
                  ((a = n[U]), a !== void 0 && am(e, t, U, a, n, void 0));
              return;
            }
        }
        for (m in n)
          n.hasOwnProperty(m) &&
            ((a = n[m]), a != null && lt(e, t, m, a, n, null));
      }
      function FR(e, t, n, a) {
        switch ((nm(t, a), t)) {
          case "div":
          case "span":
          case "svg":
          case "path":
          case "a":
          case "g":
          case "p":
          case "li":
            break;
          case "input":
            var r = null,
              i = null,
              f = null,
              m = null,
              g = null,
              b = null,
              U = null;
            for ($ in n) {
              var Y = n[$];
              if (n.hasOwnProperty($) && Y != null)
                switch ($) {
                  case "checked":
                    break;
                  case "value":
                    break;
                  case "defaultValue":
                    g = Y;
                  default:
                    a.hasOwnProperty($) || lt(e, t, $, null, a, Y);
                }
            }
            for (var _ in a) {
              var $ = a[_];
              if (((Y = n[_]), a.hasOwnProperty(_) && ($ != null || Y != null)))
                switch (_) {
                  case "type":
                    i = $;
                    break;
                  case "name":
                    r = $;
                    break;
                  case "checked":
                    b = $;
                    break;
                  case "defaultChecked":
                    U = $;
                    break;
                  case "value":
                    f = $;
                    break;
                  case "defaultValue":
                    m = $;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if ($ != null)
                      throw Error(
                        t +
                          " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    $ !== Y && lt(e, t, _, $, a, Y);
                }
            }
            (t =
              n.type === "checkbox" || n.type === "radio"
                ? n.checked != null
                : n.value != null),
              (a =
                a.type === "checkbox" || a.type === "radio"
                  ? a.checked != null
                  : a.value != null),
              t ||
                !a ||
                AS ||
                (console.error(
                  "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
                ),
                (AS = !0)),
              !t ||
                a ||
                wS ||
                (console.error(
                  "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
                ),
                (wS = !0)),
              Fe(e, f, m, g, b, U, i, r);
            return;
          case "select":
            $ = f = m = _ = null;
            for (i in n)
              if (((g = n[i]), n.hasOwnProperty(i) && g != null))
                switch (i) {
                  case "value":
                    break;
                  case "multiple":
                    $ = g;
                  default:
                    a.hasOwnProperty(i) || lt(e, t, i, null, a, g);
                }
            for (r in a)
              if (
                ((i = a[r]),
                (g = n[r]),
                a.hasOwnProperty(r) && (i != null || g != null))
              )
                switch (r) {
                  case "value":
                    _ = i;
                    break;
                  case "defaultValue":
                    m = i;
                    break;
                  case "multiple":
                    f = i;
                  default:
                    i !== g && lt(e, t, r, i, a, g);
                }
            (a = m),
              (t = f),
              (n = $),
              _ != null
                ? na(e, !!t, _, !1)
                : !!n != !!t &&
                  (a != null ? na(e, !!t, a, !0) : na(e, !!t, t ? [] : "", !1));
            return;
          case "textarea":
            $ = _ = null;
            for (m in n)
              if (
                ((r = n[m]),
                n.hasOwnProperty(m) && r != null && !a.hasOwnProperty(m))
              )
                switch (m) {
                  case "value":
                    break;
                  case "children":
                    break;
                  default:
                    lt(e, t, m, null, a, r);
                }
            for (f in a)
              if (
                ((r = a[f]),
                (i = n[f]),
                a.hasOwnProperty(f) && (r != null || i != null))
              )
                switch (f) {
                  case "value":
                    _ = r;
                    break;
                  case "defaultValue":
                    $ = r;
                    break;
                  case "children":
                    break;
                  case "dangerouslySetInnerHTML":
                    if (r != null)
                      throw Error(
                        "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                      );
                    break;
                  default:
                    r !== i && lt(e, t, f, r, a, i);
                }
            oy(e, _, $);
            return;
          case "option":
            for (var he in n)
              if (
                ((_ = n[he]),
                n.hasOwnProperty(he) && _ != null && !a.hasOwnProperty(he))
              )
                switch (he) {
                  case "selected":
                    e.selected = !1;
                    break;
                  default:
                    lt(e, t, he, null, a, _);
                }
            for (g in a)
              if (
                ((_ = a[g]),
                ($ = n[g]),
                a.hasOwnProperty(g) && _ !== $ && (_ != null || $ != null))
              )
                switch (g) {
                  case "selected":
                    e.selected =
                      _ && typeof _ != "function" && typeof _ != "symbol";
                    break;
                  default:
                    lt(e, t, g, _, a, $);
                }
            return;
          case "img":
          case "link":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "keygen":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
          case "menuitem":
            for (var ke in n)
              (_ = n[ke]),
                n.hasOwnProperty(ke) &&
                  _ != null &&
                  !a.hasOwnProperty(ke) &&
                  lt(e, t, ke, null, a, _);
            for (b in a)
              if (
                ((_ = a[b]),
                ($ = n[b]),
                a.hasOwnProperty(b) && _ !== $ && (_ != null || $ != null))
              )
                switch (b) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (_ != null)
                      throw Error(
                        t +
                          " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    lt(e, t, b, _, a, $);
                }
            return;
          default:
            if (bi(t)) {
              for (var Ct in n)
                (_ = n[Ct]),
                  n.hasOwnProperty(Ct) &&
                    _ !== void 0 &&
                    !a.hasOwnProperty(Ct) &&
                    am(e, t, Ct, void 0, a, _);
              for (U in a)
                (_ = a[U]),
                  ($ = n[U]),
                  !a.hasOwnProperty(U) ||
                    _ === $ ||
                    (_ === void 0 && $ === void 0) ||
                    am(e, t, U, _, a, $);
              return;
            }
        }
        for (var tt in n)
          (_ = n[tt]),
            n.hasOwnProperty(tt) &&
              _ != null &&
              !a.hasOwnProperty(tt) &&
              lt(e, t, tt, null, a, _);
        for (Y in a)
          (_ = a[Y]),
            ($ = n[Y]),
            !a.hasOwnProperty(Y) ||
              _ === $ ||
              (_ == null && $ == null) ||
              lt(e, t, Y, _, a, $);
      }
      function Xv(e) {
        switch (e) {
          case "class":
            return "className";
          case "for":
            return "htmlFor";
          default:
            return e;
        }
      }
      function om(e) {
        var t = {};
        e = e.style;
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          t[a] = e.getPropertyValue(a);
        }
        return t;
      }
      function Qv(e, t, n) {
        if (t != null && typeof t != "object")
          console.error(
            "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
          );
        else {
          var a,
            r = (a = ""),
            i;
          for (i in t)
            if (t.hasOwnProperty(i)) {
              var f = t[i];
              f != null &&
                typeof f != "boolean" &&
                f !== "" &&
                (i.indexOf("--") === 0
                  ? (St(f, i), (a += r + i + ":" + ("" + f).trim()))
                  : typeof f != "number" || f === 0 || e0.has(i)
                  ? (St(f, i),
                    (a +=
                      r +
                      i.replace(Ib, "-$1").toLowerCase().replace(Zb, "-ms-") +
                      ":" +
                      ("" + f).trim()))
                  : (a +=
                      r +
                      i.replace(Ib, "-$1").toLowerCase().replace(Zb, "-ms-") +
                      ":" +
                      f +
                      "px"),
                (r = ";"));
            }
          (a = a || null),
            (t = e.getAttribute("style")),
            t !== a && ((a = Uo(a)), Uo(t) !== a && (n.style = om(e)));
        }
      }
      function Vn(e, t, n, a, r, i) {
        if ((r.delete(n), (e = e.getAttribute(n)), e === null))
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
              return;
          }
        else if (a != null)
          switch (typeof a) {
            case "function":
            case "symbol":
            case "boolean":
              break;
            default:
              if ((Q(a, t), e === "" + a)) return;
          }
        Lt(t, e, a, i);
      }
      function Fv(e, t, n, a, r, i) {
        if ((r.delete(n), (e = e.getAttribute(n)), e === null)) {
          switch (typeof a) {
            case "function":
            case "symbol":
              return;
          }
          if (!a) return;
        } else
          switch (typeof a) {
            case "function":
            case "symbol":
              break;
            default:
              if (a) return;
          }
        Lt(t, e, a, i);
      }
      function rm(e, t, n, a, r, i) {
        if ((r.delete(n), (e = e.getAttribute(n)), e === null))
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              return;
          }
        else if (a != null)
          switch (typeof a) {
            case "function":
            case "symbol":
              break;
            default:
              if ((Q(a, n), e === "" + a)) return;
          }
        Lt(t, e, a, i);
      }
      function Iv(e, t, n, a, r, i) {
        if ((r.delete(n), (e = e.getAttribute(n)), e === null))
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
              return;
            default:
              if (isNaN(a)) return;
          }
        else if (a != null)
          switch (typeof a) {
            case "function":
            case "symbol":
            case "boolean":
              break;
            default:
              if (!isNaN(a) && (Q(a, t), e === "" + a)) return;
          }
        Lt(t, e, a, i);
      }
      function Vs(e, t, n, a, r, i) {
        if ((r.delete(n), (e = e.getAttribute(n)), e === null))
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
              return;
          }
        else if (a != null)
          switch (typeof a) {
            case "function":
            case "symbol":
            case "boolean":
              break;
            default:
              if ((Q(a, t), (n = Si("" + a)), e === n)) return;
          }
        Lt(t, e, a, i);
      }
      function Zv(e, t, n, a) {
        for (
          var r = {}, i = new Set(), f = e.attributes, m = 0;
          m < f.length;
          m++
        )
          switch (f[m].name.toLowerCase()) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              i.add(f[m].name);
          }
        if (bi(t)) {
          for (var g in n)
            if (n.hasOwnProperty(g)) {
              var b = n[g];
              if (b != null) {
                if (Rr.hasOwnProperty(g)) typeof b != "function" && Ta(g, b);
                else if (n.suppressHydrationWarning !== !0)
                  switch (g) {
                    case "children":
                      (typeof b != "string" && typeof b != "number") ||
                        Lt("children", e.textContent, b, r);
                      continue;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "defaultValue":
                    case "defaultChecked":
                    case "innerHTML":
                    case "ref":
                      continue;
                    case "dangerouslySetInnerHTML":
                      (f = e.innerHTML),
                        (b = b ? b.__html : void 0),
                        b != null && ((b = $v(e, b)), Lt(g, f, b, r));
                      continue;
                    case "style":
                      i.delete(g), Qv(e, b, r);
                      continue;
                    case "offsetParent":
                    case "offsetTop":
                    case "offsetLeft":
                    case "offsetWidth":
                    case "offsetHeight":
                    case "isContentEditable":
                    case "outerText":
                    case "outerHTML":
                      i.delete(g.toLowerCase()),
                        console.error(
                          "Assignment to read-only property will result in a no-op: `%s`",
                          g
                        );
                      continue;
                    case "className":
                      i.delete("class"),
                        (f = or(e, "class", b)),
                        Lt("className", f, b, r);
                      continue;
                    default:
                      a.context === mo && t !== "svg" && t !== "math"
                        ? i.delete(g.toLowerCase())
                        : i.delete(g),
                        (f = or(e, g, b)),
                        Lt(g, f, b, r);
                  }
              }
            }
        } else
          for (b in n)
            if (n.hasOwnProperty(b) && ((g = n[b]), g != null)) {
              if (Rr.hasOwnProperty(b)) typeof g != "function" && Ta(b, g);
              else if (n.suppressHydrationWarning !== !0)
                switch (b) {
                  case "children":
                    (typeof g != "string" && typeof g != "number") ||
                      Lt("children", e.textContent, g, r);
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "value":
                  case "checked":
                  case "selected":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    (f = e.innerHTML),
                      (g = g ? g.__html : void 0),
                      g != null &&
                        ((g = $v(e, g)), f !== g && (r[b] = { __html: f }));
                    continue;
                  case "className":
                    Vn(e, b, "class", g, i, r);
                    continue;
                  case "tabIndex":
                    Vn(e, b, "tabindex", g, i, r);
                    continue;
                  case "style":
                    i.delete(b), Qv(e, g, r);
                    continue;
                  case "multiple":
                    i.delete(b), Lt(b, e.multiple, g, r);
                    continue;
                  case "muted":
                    i.delete(b), Lt(b, e.muted, g, r);
                    continue;
                  case "autoFocus":
                    i.delete("autofocus"), Lt(b, e.autofocus, g, r);
                    continue;
                  case "data":
                    if (t !== "object") {
                      i.delete(b), (f = e.getAttribute("data")), Lt(b, f, g, r);
                      continue;
                    }
                  case "src":
                  case "href":
                    if (
                      !(
                        g !== "" ||
                        (t === "a" && b === "href") ||
                        (t === "object" && b === "data")
                      )
                    ) {
                      console.error(
                        b === "src"
                          ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.'
                          : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                        b,
                        b
                      ),
                        Vs(e, b, b, null, i, r);
                      continue;
                    }
                    Vs(e, b, b, g, i, r);
                    continue;
                  case "action":
                  case "formAction":
                    if (((f = e.getAttribute(b)), typeof g == "function")) {
                      i.delete(b.toLowerCase()),
                        b === "formAction"
                          ? (i.delete("name"),
                            i.delete("formenctype"),
                            i.delete("formmethod"),
                            i.delete("formtarget"))
                          : (i.delete("enctype"),
                            i.delete("method"),
                            i.delete("target"));
                      continue;
                    } else if (f === tA) {
                      i.delete(b.toLowerCase()), Lt(b, "function", g, r);
                      continue;
                    }
                    Vs(e, b, b.toLowerCase(), g, i, r);
                    continue;
                  case "xlinkHref":
                    Vs(e, b, "xlink:href", g, i, r);
                    continue;
                  case "contentEditable":
                    rm(e, b, "contenteditable", g, i, r);
                    continue;
                  case "spellCheck":
                    rm(e, b, "spellcheck", g, i, r);
                    continue;
                  case "draggable":
                  case "autoReverse":
                  case "externalResourcesRequired":
                  case "focusable":
                  case "preserveAlpha":
                    rm(e, b, b, g, i, r);
                    continue;
                  case "allowFullScreen":
                  case "async":
                  case "autoPlay":
                  case "controls":
                  case "default":
                  case "defer":
                  case "disabled":
                  case "disablePictureInPicture":
                  case "disableRemotePlayback":
                  case "formNoValidate":
                  case "hidden":
                  case "loop":
                  case "noModule":
                  case "noValidate":
                  case "open":
                  case "playsInline":
                  case "readOnly":
                  case "required":
                  case "reversed":
                  case "scoped":
                  case "seamless":
                  case "itemScope":
                    Fv(e, b, b.toLowerCase(), g, i, r);
                    continue;
                  case "capture":
                  case "download":
                    e: {
                      m = e;
                      var U = (f = b),
                        Y = r;
                      if ((i.delete(U), (m = m.getAttribute(U)), m === null))
                        switch (typeof g) {
                          case "undefined":
                          case "function":
                          case "symbol":
                            break e;
                          default:
                            if (g === !1) break e;
                        }
                      else if (g != null)
                        switch (typeof g) {
                          case "function":
                          case "symbol":
                            break;
                          case "boolean":
                            if (g === !0 && m === "") break e;
                            break;
                          default:
                            if ((Q(g, f), m === "" + g)) break e;
                        }
                      Lt(f, m, g, Y);
                    }
                    continue;
                  case "cols":
                  case "rows":
                  case "size":
                  case "span":
                    e: {
                      if (
                        ((m = e),
                        (U = f = b),
                        (Y = r),
                        i.delete(U),
                        (m = m.getAttribute(U)),
                        m === null)
                      )
                        switch (typeof g) {
                          case "undefined":
                          case "function":
                          case "symbol":
                          case "boolean":
                            break e;
                          default:
                            if (isNaN(g) || 1 > g) break e;
                        }
                      else if (g != null)
                        switch (typeof g) {
                          case "function":
                          case "symbol":
                          case "boolean":
                            break;
                          default:
                            if (!(isNaN(g) || 1 > g) && (Q(g, f), m === "" + g))
                              break e;
                        }
                      Lt(f, m, g, Y);
                    }
                    continue;
                  case "rowSpan":
                    Iv(e, b, "rowspan", g, i, r);
                    continue;
                  case "start":
                    Iv(e, b, b, g, i, r);
                    continue;
                  case "xHeight":
                    Vn(e, b, "x-height", g, i, r);
                    continue;
                  case "xlinkActuate":
                    Vn(e, b, "xlink:actuate", g, i, r);
                    continue;
                  case "xlinkArcrole":
                    Vn(e, b, "xlink:arcrole", g, i, r);
                    continue;
                  case "xlinkRole":
                    Vn(e, b, "xlink:role", g, i, r);
                    continue;
                  case "xlinkShow":
                    Vn(e, b, "xlink:show", g, i, r);
                    continue;
                  case "xlinkTitle":
                    Vn(e, b, "xlink:title", g, i, r);
                    continue;
                  case "xlinkType":
                    Vn(e, b, "xlink:type", g, i, r);
                    continue;
                  case "xmlBase":
                    Vn(e, b, "xml:base", g, i, r);
                    continue;
                  case "xmlLang":
                    Vn(e, b, "xml:lang", g, i, r);
                    continue;
                  case "xmlSpace":
                    Vn(e, b, "xml:space", g, i, r);
                    continue;
                  case "inert":
                    g !== "" ||
                      _c[b] ||
                      ((_c[b] = !0),
                      console.error(
                        "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                        b
                      )),
                      Fv(e, b, b, g, i, r);
                    continue;
                  default:
                    if (
                      !(2 < b.length) ||
                      (b[0] !== "o" && b[0] !== "O") ||
                      (b[1] !== "n" && b[1] !== "N")
                    ) {
                      (m = py(b)),
                        (f = !1),
                        a.context === mo && t !== "svg" && t !== "math"
                          ? i.delete(m.toLowerCase())
                          : ((U = b.toLowerCase()),
                            (U = (ac.hasOwnProperty(U) && ac[U]) || null),
                            U !== null && U !== b && ((f = !0), i.delete(U)),
                            i.delete(m));
                      e: if (((U = e), (Y = m), (m = g), To(Y)))
                        if (U.hasAttribute(Y))
                          (U = U.getAttribute(Y)),
                            Q(m, Y),
                            (m = U === "" + m ? m : U);
                        else {
                          switch (typeof m) {
                            case "function":
                            case "symbol":
                              break e;
                            case "boolean":
                              if (
                                ((U = Y.toLowerCase().slice(0, 5)),
                                U !== "data-" && U !== "aria-")
                              )
                                break e;
                          }
                          m = m === void 0 ? void 0 : null;
                        }
                      else m = void 0;
                      f || Lt(b, m, g, r);
                    }
                }
            }
        return (
          0 < i.size && n.suppressHydrationWarning !== !0 && QR(e, i, r),
          Object.keys(r).length === 0 ? null : r
        );
      }
      function IR(e, t) {
        switch (e.length) {
          case 0:
            return "";
          case 1:
            return e[0];
          case 2:
            return e[0] + " " + t + " " + e[1];
          default:
            return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
        }
      }
      function Ys(e) {
        return e.nodeType === 9 ? e : e.ownerDocument;
      }
      function Wv(e) {
        switch (e) {
          case Tl:
            return Kl;
          case nc:
            return Hc;
          default:
            return mo;
        }
      }
      function Kv(e, t) {
        if (e === mo)
          switch (t) {
            case "svg":
              return Kl;
            case "math":
              return Hc;
            default:
              return mo;
          }
        return e === Kl && t === "foreignObject" ? mo : e;
      }
      function lm(e, t) {
        return (
          e === "textarea" ||
          e === "noscript" ||
          typeof t.children == "string" ||
          typeof t.children == "number" ||
          typeof t.children == "bigint" ||
          (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
        );
      }
      function ZR() {
        var e = window.event;
        return e && e.type === "popstate"
          ? e === Mh
            ? !1
            : ((Mh = e), !0)
          : ((Mh = null), !1);
      }
      function WR(e) {
        setTimeout(function () {
          throw e;
        });
      }
      function KR(e, t, n) {
        switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            n.autoFocus && e.focus();
            break;
          case "img":
            n.src ? (e.src = n.src) : n.srcSet && (e.srcset = n.srcSet);
        }
      }
      function JR(e, t, n, a) {
        FR(e, t, n, a), (e[gn] = a);
      }
      function Jv(e) {
        vi(e, "");
      }
      function ex(e, t, n) {
        e.nodeValue = n;
      }
      function tx(e, t) {
        e.removeChild(t);
      }
      function nx(e, t) {
        e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t);
      }
      function im(e, t) {
        var n = t,
          a = 0;
        do {
          var r = n.nextSibling;
          if ((e.removeChild(n), r && r.nodeType === 8))
            if (((n = r.data), n === jc)) {
              if (a === 0) {
                e.removeChild(r), Qi(t);
                return;
              }
              a--;
            } else (n !== zc && n !== qr && n !== Pr) || a++;
          n = r;
        } while (n);
        Qi(t);
      }
      function ax(e) {
        (e = e.style),
          typeof e.setProperty == "function"
            ? e.setProperty("display", "none", "important")
            : (e.display = "none");
      }
      function ox(e) {
        e.nodeValue = "";
      }
      function rx(e, t) {
        (t = t[aA]),
          (t = t != null && t.hasOwnProperty("display") ? t.display : null),
          (e.style.display =
            t == null || typeof t == "boolean" ? "" : ("" + t).trim());
      }
      function lx(e, t) {
        e.nodeValue = t;
      }
      function um(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
          var n = t;
          switch (((t = t.nextSibling), n.nodeName)) {
            case "HTML":
            case "HEAD":
            case "BODY":
              um(n), pi(n);
              continue;
            case "SCRIPT":
            case "STYLE":
              continue;
            case "LINK":
              if (n.rel.toLowerCase() === "stylesheet") continue;
          }
          e.removeChild(n);
        }
      }
      function ix(e, t, n, a) {
        for (; e.nodeType === 1; ) {
          var r = n;
          if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
            if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
          } else if (a) {
            if (!e[Wi])
              switch (t) {
                case "meta":
                  if (!e.hasAttribute("itemprop")) break;
                  return e;
                case "link":
                  if (
                    ((i = e.getAttribute("rel")),
                    i === "stylesheet" && e.hasAttribute("data-precedence"))
                  )
                    break;
                  if (
                    i !== r.rel ||
                    e.getAttribute("href") !==
                      (r.href == null ? null : r.href) ||
                    e.getAttribute("crossorigin") !==
                      (r.crossOrigin == null ? null : r.crossOrigin) ||
                    e.getAttribute("title") !==
                      (r.title == null ? null : r.title)
                  )
                    break;
                  return e;
                case "style":
                  if (e.hasAttribute("data-precedence")) break;
                  return e;
                case "script":
                  if (
                    ((i = e.getAttribute("src")),
                    (i !== (r.src == null ? null : r.src) ||
                      e.getAttribute("type") !==
                        (r.type == null ? null : r.type) ||
                      e.getAttribute("crossorigin") !==
                        (r.crossOrigin == null ? null : r.crossOrigin)) &&
                      i &&
                      e.hasAttribute("async") &&
                      !e.hasAttribute("itemprop"))
                  )
                    break;
                  return e;
                default:
                  return e;
              }
          } else if (t === "input" && e.type === "hidden") {
            Q(r.name, "name");
            var i = r.name == null ? null : "" + r.name;
            if (r.type === "hidden" && e.getAttribute("name") === i) return e;
          } else return e;
          if (((e = Yn(e.nextSibling)), e === null)) break;
        }
        return null;
      }
      function ux(e, t, n) {
        if (t === "") return null;
        for (; e.nodeType !== 3; )
          if (
            ((e.nodeType !== 1 ||
              e.nodeName !== "INPUT" ||
              e.type !== "hidden") &&
              !n) ||
            ((e = Yn(e.nextSibling)), e === null)
          )
            return null;
        return e;
      }
      function Yn(e) {
        for (; e != null; e = e.nextSibling) {
          var t = e.nodeType;
          if (t === 1 || t === 3) break;
          if (t === 8) {
            if (
              ((t = e.data),
              t === zc || t === Pr || t === qr || t === Oh || t === DS)
            )
              break;
            if (t === jc) return null;
          }
        }
        return e;
      }
      function eb(e) {
        if (e.nodeType === 1) {
          for (
            var t = e.nodeName.toLowerCase(), n = {}, a = e.attributes, r = 0;
            r < a.length;
            r++
          ) {
            var i = a[r];
            n[Xv(i.name)] = i.name.toLowerCase() === "style" ? om(e) : i.value;
          }
          return { type: t, props: n };
        }
        return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
      }
      function tb(e, t, n) {
        return n === null || n[nA] !== !0
          ? (e.nodeValue === t
              ? (e = null)
              : ((t = Uo(t)), (e = Uo(e.nodeValue) === t ? null : e.nodeValue)),
            e)
          : null;
      }
      function nb(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === jc) {
              if (t === 0) return Yn(e.nextSibling);
              t--;
            } else (n !== zc && n !== Pr && n !== qr) || t++;
          }
          e = e.nextSibling;
        }
        return null;
      }
      function ab(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === zc || n === Pr || n === qr) {
              if (t === 0) return e;
              t--;
            } else n === jc && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      function sx(e) {
        Qi(e);
      }
      function cx(e) {
        Qi(e);
      }
      function ob(e, t, n, a, r) {
        switch ((r && Cf(e, a.ancestorInfo), (t = Ys(n)), e)) {
          case "html":
            if (((e = t.documentElement), !e))
              throw Error(
                "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
              );
            return e;
          case "head":
            if (((e = t.head), !e))
              throw Error(
                "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
              );
            return e;
          case "body":
            if (((e = t.body), !e))
              throw Error(
                "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
              );
            return e;
          default:
            throw Error(
              "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
            );
        }
      }
      function fx(e, t, n, a) {
        if (ha(n)) {
          var r = n.tagName.toLowerCase();
          console.error(
            "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
            r,
            r,
            r
          );
        }
        switch (e) {
          case "html":
          case "head":
          case "body":
            break;
          default:
            console.error(
              "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
            );
        }
        for (r = n.attributes; r.length; ) n.removeAttributeNode(r[0]);
        $t(n, e, t), (n[Jt] = a), (n[gn] = t);
      }
      function qs(e) {
        return typeof e.getRootNode == "function"
          ? e.getRootNode()
          : e.ownerDocument;
      }
      function rb(e, t, n) {
        var a = Jl;
        if (a && typeof t == "string" && t) {
          var r = re(t);
          (r = 'link[rel="' + e + '"][href="' + r + '"]'),
            typeof n == "string" && (r += '[crossorigin="' + n + '"]'),
            jS.has(r) ||
              (jS.add(r),
              (e = { rel: e, crossOrigin: n, href: t }),
              a.querySelector(r) === null &&
                ((t = a.createElement("link")),
                $t(t, "link", e),
                wt(t),
                a.head.appendChild(t)));
        }
      }
      function lb(e, t, n, a) {
        var r = (r = jo.current) ? qs(r) : null;
        if (!r)
          throw Error(
            '"resourceRoot" was expected to exist. This is a bug in React.'
          );
        switch (e) {
          case "meta":
          case "title":
            return null;
          case "style":
            return typeof n.precedence == "string" && typeof n.href == "string"
              ? ((n = yl(n.href)),
                (t = qa(r).hoistableStyles),
                (a = t.get(n)),
                a ||
                  ((a = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  t.set(n, a)),
                a)
              : { type: "void", instance: null, count: 0, state: null };
          case "link":
            if (
              n.rel === "stylesheet" &&
              typeof n.href == "string" &&
              typeof n.precedence == "string"
            ) {
              e = yl(n.href);
              var i = qa(r).hoistableStyles,
                f = i.get(e);
              if (
                !f &&
                ((r = r.ownerDocument || r),
                (f = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: { loading: $r, preload: null },
                }),
                i.set(e, f),
                (i = r.querySelector($i(e))) &&
                  !i._p &&
                  ((f.instance = i), (f.state.loading = Mu | Kn)),
                !Jn.has(e))
              ) {
                var m = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                };
                Jn.set(e, m), i || dx(r, e, m, f.state);
              }
              if (t && a === null)
                throw (
                  ((n =
                    `

  - ` +
                    Ps(t) +
                    `
  + ` +
                    Ps(n)),
                  Error(
                    "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." +
                      n
                  ))
                );
              return f;
            }
            if (t && a !== null)
              throw (
                ((n =
                  `

  - ` +
                  Ps(t) +
                  `
  + ` +
                  Ps(n)),
                Error(
                  "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." +
                    n
                ))
              );
            return null;
          case "script":
            return (
              (t = n.async),
              (n = n.src),
              typeof n == "string" &&
              t &&
              typeof t != "function" &&
              typeof t != "symbol"
                ? ((n = gl(n)),
                  (t = qa(r).hoistableScripts),
                  (a = t.get(n)),
                  a ||
                    ((a = {
                      type: "script",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    t.set(n, a)),
                  a)
                : { type: "void", instance: null, count: 0, state: null }
            );
          default:
            throw Error(
              'getResource encountered a type it did not expect: "' +
                e +
                '". this is a bug in React.'
            );
        }
      }
      function Ps(e) {
        var t = 0,
          n = "<link";
        return (
          typeof e.rel == "string"
            ? (t++, (n += ' rel="' + e.rel + '"'))
            : to.call(e, "rel") &&
              (t++,
              (n +=
                ' rel="' +
                (e.rel === null ? "null" : "invalid type " + typeof e.rel) +
                '"')),
          typeof e.href == "string"
            ? (t++, (n += ' href="' + e.href + '"'))
            : to.call(e, "href") &&
              (t++,
              (n +=
                ' href="' +
                (e.href === null ? "null" : "invalid type " + typeof e.href) +
                '"')),
          typeof e.precedence == "string"
            ? (t++, (n += ' precedence="' + e.precedence + '"'))
            : to.call(e, "precedence") &&
              (t++,
              (n +=
                " precedence={" +
                (e.precedence === null
                  ? "null"
                  : "invalid type " + typeof e.precedence) +
                "}")),
          Object.getOwnPropertyNames(e).length > t && (n += " ..."),
          n + " />"
        );
      }
      function yl(e) {
        return 'href="' + re(e) + '"';
      }
      function $i(e) {
        return 'link[rel="stylesheet"][' + e + "]";
      }
      function ib(e) {
        return qe({}, e, { "data-precedence": e.precedence, precedence: null });
      }
      function dx(e, t, n, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]")
          ? (a.loading = Mu)
          : ((t = e.createElement("link")),
            (a.preload = t),
            t.addEventListener("load", function () {
              return (a.loading |= Mu);
            }),
            t.addEventListener("error", function () {
              return (a.loading |= _S);
            }),
            $t(t, "link", n),
            wt(t),
            e.head.appendChild(t));
      }
      function gl(e) {
        return '[src="' + re(e) + '"]';
      }
      function Gi(e) {
        return "script[async]" + e;
      }
      function ub(e, t, n) {
        if ((t.count++, t.instance === null))
          switch (t.type) {
            case "style":
              var a = e.querySelector('style[data-href~="' + re(n.href) + '"]');
              if (a) return (t.instance = a), wt(a), a;
              var r = qe({}, n, {
                "data-href": n.href,
                "data-precedence": n.precedence,
                href: null,
                precedence: null,
              });
              return (
                (a = (e.ownerDocument || e).createElement("style")),
                wt(a),
                $t(a, "style", r),
                $s(a, n.precedence, e),
                (t.instance = a)
              );
            case "stylesheet":
              r = yl(n.href);
              var i = e.querySelector($i(r));
              if (i) return (t.state.loading |= Kn), (t.instance = i), wt(i), i;
              (a = ib(n)),
                (r = Jn.get(r)) && sm(a, r),
                (i = (e.ownerDocument || e).createElement("link")),
                wt(i);
              var f = i;
              return (
                (f._p = new Promise(function (m, g) {
                  (f.onload = m), (f.onerror = g);
                })),
                $t(i, "link", a),
                (t.state.loading |= Kn),
                $s(i, n.precedence, e),
                (t.instance = i)
              );
            case "script":
              return (
                (i = gl(n.src)),
                (r = e.querySelector(Gi(i)))
                  ? ((t.instance = r), wt(r), r)
                  : ((a = n),
                    (r = Jn.get(i)) && ((a = qe({}, n)), cm(a, r)),
                    (e = e.ownerDocument || e),
                    (r = e.createElement("script")),
                    wt(r),
                    $t(r, "link", a),
                    e.head.appendChild(r),
                    (t.instance = r))
              );
            case "void":
              return null;
            default:
              throw Error(
                'acquireResource encountered a resource type it did not expect: "' +
                  t.type +
                  '". this is a bug in React.'
              );
          }
        else
          t.type === "stylesheet" &&
            (t.state.loading & Kn) === $r &&
            ((a = t.instance), (t.state.loading |= Kn), $s(a, n.precedence, e));
        return t.instance;
      }
      function $s(e, t, n) {
        for (
          var a = n.querySelectorAll(
              'link[rel="stylesheet"][data-precedence],style[data-precedence]'
            ),
            r = a.length ? a[a.length - 1] : null,
            i = r,
            f = 0;
          f < a.length;
          f++
        ) {
          var m = a[f];
          if (m.dataset.precedence === t) i = m;
          else if (i !== r) break;
        }
        i
          ? i.parentNode.insertBefore(e, i.nextSibling)
          : ((t = n.nodeType === 9 ? n.head : n),
            t.insertBefore(e, t.firstChild));
      }
      function sm(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
          e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
          e.title == null && (e.title = t.title);
      }
      function cm(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
          e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
          e.integrity == null && (e.integrity = t.integrity);
      }
      function sb(e, t, n) {
        if (kc === null) {
          var a = new Map(),
            r = (kc = new Map());
          r.set(n, a);
        } else (r = kc), (a = r.get(n)), a || ((a = new Map()), r.set(n, a));
        if (a.has(e)) return a;
        for (
          a.set(e, null), n = n.getElementsByTagName(e), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r];
          if (
            !(
              i[Wi] ||
              i[Jt] ||
              (e === "link" && i.getAttribute("rel") === "stylesheet")
            ) &&
            i.namespaceURI !== Tl
          ) {
            var f = i.getAttribute(t) || "";
            f = e + f;
            var m = a.get(f);
            m ? m.push(i) : a.set(f, [i]);
          }
        }
        return a;
      }
      function cb(e, t, n) {
        (e = e.ownerDocument || e),
          e.head.insertBefore(
            n,
            t === "title" ? e.querySelector("head > title") : null
          );
      }
      function mx(e, t, n) {
        var a = !n.ancestorInfo.containerTagInScope;
        if (n.context === Kl || t.itemProp != null)
          return (
            !a ||
              t.itemProp == null ||
              (e !== "meta" &&
                e !== "title" &&
                e !== "style" &&
                e !== "link" &&
                e !== "script") ||
              console.error(
                "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
                e,
                e
              ),
            !1
          );
        switch (e) {
          case "meta":
          case "title":
            return !0;
          case "style":
            if (
              typeof t.precedence != "string" ||
              typeof t.href != "string" ||
              t.href === ""
            ) {
              a &&
                console.error(
                  'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflic with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`, or move the <style> to the <style> tag.'
                );
              break;
            }
            return !0;
          case "link":
            if (
              typeof t.rel != "string" ||
              typeof t.href != "string" ||
              t.href === "" ||
              t.onLoad ||
              t.onError
            ) {
              if (t.rel === "stylesheet" && typeof t.precedence == "string") {
                e = t.href;
                var r = t.onError,
                  i = t.disabled;
                (n = []),
                  t.onLoad && n.push("`onLoad`"),
                  r && n.push("`onError`"),
                  i != null && n.push("`disabled`"),
                  (r = IR(n, "and")),
                  (r += n.length === 1 ? " prop" : " props"),
                  (i = n.length === 1 ? "an " + r : "the " + r),
                  n.length &&
                    console.error(
                      'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                      e,
                      i,
                      r
                    );
              }
              a &&
                (typeof t.rel != "string" ||
                typeof t.href != "string" ||
                t.href === ""
                  ? console.error(
                      "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
                    )
                  : (t.onError || t.onLoad) &&
                    console.error(
                      "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
                    ));
              break;
            }
            switch (t.rel) {
              case "stylesheet":
                return (
                  (e = t.precedence),
                  (t = t.disabled),
                  typeof e != "string" &&
                    a &&
                    console.error(
                      'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
                    ),
                  typeof e == "string" && t == null
                );
              default:
                return !0;
            }
          case "script":
            if (
              ((e =
                t.async &&
                typeof t.async != "function" &&
                typeof t.async != "symbol"),
              !e || t.onLoad || t.onError || !t.src || typeof t.src != "string")
            ) {
              a &&
                (e
                  ? t.onLoad || t.onError
                    ? console.error(
                        "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
                      )
                    : console.error(
                        "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
                      )
                  : console.error(
                      'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
                    ));
              break;
            }
            return !0;
          case "noscript":
          case "template":
            a &&
              console.error(
                "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
                e
              );
        }
        return !1;
      }
      function fb(e) {
        return !(e.type === "stylesheet" && (e.state.loading & zS) === $r);
      }
      function hx() {}
      function px(e, t, n) {
        if (Uu === null)
          throw Error(
            "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
          );
        var a = Uu;
        if (
          t.type === "stylesheet" &&
          (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
          (t.state.loading & Kn) === $r
        ) {
          if (t.instance === null) {
            var r = yl(n.href),
              i = e.querySelector($i(r));
            if (i) {
              (e = i._p),
                e !== null &&
                  typeof e == "object" &&
                  typeof e.then == "function" &&
                  (a.count++, (a = Gs.bind(a)), e.then(a, a)),
                (t.state.loading |= Kn),
                (t.instance = i),
                wt(i);
              return;
            }
            (i = e.ownerDocument || e),
              (n = ib(n)),
              (r = Jn.get(r)) && sm(n, r),
              (i = i.createElement("link")),
              wt(i);
            var f = i;
            (f._p = new Promise(function (m, g) {
              (f.onload = m), (f.onerror = g);
            })),
              $t(i, "link", n),
              (t.instance = i);
          }
          a.stylesheets === null && (a.stylesheets = new Map()),
            a.stylesheets.set(t, e),
            (e = t.state.preload) &&
              (t.state.loading & zS) === $r &&
              (a.count++,
              (t = Gs.bind(a)),
              e.addEventListener("load", t),
              e.addEventListener("error", t));
        }
      }
      function yx() {
        if (Uu === null)
          throw Error(
            "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
          );
        var e = Uu;
        return (
          e.stylesheets && e.count === 0 && fm(e, e.stylesheets),
          0 < e.count
            ? function (t) {
                var n = setTimeout(function () {
                  if ((e.stylesheets && fm(e, e.stylesheets), e.unsuspend)) {
                    var a = e.unsuspend;
                    (e.unsuspend = null), a();
                  }
                }, 6e4);
                return (
                  (e.unsuspend = t),
                  function () {
                    (e.unsuspend = null), clearTimeout(n);
                  }
                );
              }
            : null
        );
      }
      function Gs() {
        if ((this.count--, this.count === 0)) {
          if (this.stylesheets) fm(this, this.stylesheets);
          else if (this.unsuspend) {
            var e = this.unsuspend;
            (this.unsuspend = null), e();
          }
        }
      }
      function fm(e, t) {
        (e.stylesheets = null),
          e.unsuspend !== null &&
            (e.count++,
            (Lc = new Map()),
            t.forEach(gx, e),
            (Lc = null),
            Gs.call(e));
      }
      function gx(e, t) {
        if (!(t.state.loading & Kn)) {
          var n = Lc.get(e);
          if (n) var a = n.get(_h);
          else {
            (n = new Map()), Lc.set(e, n);
            for (
              var r = e.querySelectorAll(
                  "link[data-precedence],style[data-precedence]"
                ),
                i = 0;
              i < r.length;
              i++
            ) {
              var f = r[i];
              (f.nodeName === "LINK" ||
                f.getAttribute("media") !== "not all") &&
                (n.set(f.dataset.precedence, f), (a = f));
            }
            a && n.set(_h, a);
          }
          (r = t.instance),
            (f = r.getAttribute("data-precedence")),
            (i = n.get(f) || a),
            i === a && n.set(_h, r),
            n.set(f, r),
            this.count++,
            (a = Gs.bind(this)),
            r.addEventListener("load", a),
            r.addEventListener("error", a),
            i
              ? i.parentNode.insertBefore(r, i.nextSibling)
              : ((e = e.nodeType === 9 ? e.head : e),
                e.insertBefore(r, e.firstChild)),
            (t.state.loading |= Kn);
        }
      }
      function vx(e, t, n) {
        var a = 0;
        switch (e) {
          case "dir":
          case "dirxml":
          case "groupEnd":
          case "table":
            return BS.apply(console[e], [console].concat(t));
          case "assert":
            a = 1;
        }
        return (
          (t = t.slice(0)),
          typeof t[a] == "string"
            ? t.splice(a, 1, HS + t[a], kS, Bc + n + Bc, LS)
            : t.splice(a, 0, HS, kS, Bc + n + Bc, LS),
          t.unshift(console),
          BS.apply(console[e], t)
        );
      }
      function bx(e, t, n, a, r, i, f, m) {
        for (
          this.tag = 1,
            this.containerInfo = e,
            this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null,
            this.timeoutHandle = Uh,
            this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null,
            this.callbackPriority = 0,
            this.expirationTimes = on(-1),
            this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.finishedLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0,
            this.entanglements = on(0),
            this.hiddenUpdates = on(null),
            this.identifierPrefix = a,
            this.onUncaughtError = r,
            this.onCaughtError = i,
            this.onRecoverableError = f,
            this.pooledCache = null,
            this.pooledCacheLanes = 0,
            this.formState = m,
            this.incompleteTransitions = new Map(),
            this.passiveEffectDuration = this.effectDuration = -0,
            this.memoizedUpdaters = new Set(),
            e = this.pendingUpdatersLaneMap = [],
            t = 0;
          31 > t;
          t++
        )
          e.push(new Set());
        this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
      }
      function db(e, t, n, a, r, i, f, m, g, b, U, Y) {
        return (
          (e = new bx(e, t, n, f, m, g, b, Y)),
          (t = Hw),
          i === !0 && (t |= en | la),
          ra && (t |= Xt),
          (i = y(3, null, null, t)),
          (e.current = i),
          (i.stateNode = e),
          (t = Yf()),
          mr(t),
          (e.pooledCache = t),
          mr(t),
          (i.memoizedState = { element: a, isDehydrated: n, cache: t }),
          Md(i),
          e
        );
      }
      function mb(e) {
        return e ? ((e = Lo), e) : Lo;
      }
      function hb(e, t, n, a) {
        return t.tag === 0 && Er(), pb(t.current, 2, e, t, n, a), 2;
      }
      function pb(e, t, n, a, r, i) {
        if (Kt && typeof Kt.onScheduleFiberRoot == "function")
          try {
            Kt.onScheduleFiberRoot(El, a, n);
          } catch (f) {
            wa ||
              ((wa = !0),
              console.error(
                "React instrumentation encountered an error: %s",
                f
              ));
          }
        le !== null &&
          typeof le.markRenderScheduled == "function" &&
          le.markRenderScheduled(t),
          (r = mb(r)),
          a.context === null ? (a.context = r) : (a.pendingContext = r),
          qn &&
            Wt !== null &&
            !VS &&
            ((VS = !0),
            console.error(
              `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
              X(Wt) || "Unknown"
            )),
          (a = Oo(t)),
          (a.payload = { element: n }),
          (i = i === void 0 ? null : i),
          i !== null &&
            (typeof i != "function" &&
              console.error(
                "Expected the last optional `callback` argument to be a function. Instead received: %s.",
                i
              ),
            (a.callback = i)),
          (n = Do(e, a, t)),
          n !== null && (vt(n, e, t), zi(n, e, t));
      }
      function yb(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
          var n = e.retryLane;
          e.retryLane = n !== 0 && n < t ? n : t;
        }
      }
      function dm(e, t) {
        yb(e, t), (e = e.alternate) && yb(e, t);
      }
      function gb(e) {
        if (e.tag === 13) {
          var t = Zt(e, 67108864);
          t !== null && vt(t, e, 67108864), dm(e, 67108864);
        }
      }
      function Sx() {
        return Wt;
      }
      function Ex() {
        for (var e = new Map(), t = 1, n = 0; 31 > n; n++) {
          var a = Ke(t);
          e.set(t, a), (t *= 2);
        }
        return e;
      }
      function Tx(e, t, n, a) {
        var r = L.T;
        L.T = null;
        var i = dt.p;
        try {
          (dt.p = Aa), mm(e, t, n, a);
        } finally {
          (dt.p = i), (L.T = r);
        }
      }
      function Rx(e, t, n, a) {
        var r = L.T;
        L.T = null;
        var i = dt.p;
        try {
          (dt.p = Ca), mm(e, t, n, a);
        } finally {
          (dt.p = i), (L.T = r);
        }
      }
      function mm(e, t, n, a) {
        if (Vc) {
          var r = hm(a);
          if (r === null) tm(e, t, a, Yc, n), bb(e, a);
          else if (xx(r, e, t, n, a)) a.stopPropagation();
          else if ((bb(e, a), t & 4 && -1 < lA.indexOf(e))) {
            for (; r !== null; ) {
              var i = ha(r);
              if (i !== null)
                switch (i.tag) {
                  case 3:
                    if (
                      ((i = i.stateNode), i.current.memoizedState.isDehydrated)
                    ) {
                      var f = Ae(i.pendingLanes);
                      if (f !== 0) {
                        var m = i;
                        for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                          var g = 1 << (31 - rn(f));
                          (m.entanglements[1] |= g), (f &= ~g);
                        }
                        Ea(i),
                          (mt & (dn | so)) === Nn && ((Rc = xa() + ES), qi(0));
                      }
                    }
                    break;
                  case 13:
                    (m = Zt(i, 2)), m !== null && vt(m, i, 2), dl(), dm(i, 2);
                }
              if (((i = hm(a)), i === null && tm(e, t, a, Yc, n), i === r))
                break;
              r = i;
            }
            r !== null && a.stopPropagation();
          } else tm(e, t, a, null, n);
        }
      }
      function hm(e) {
        return (e = Of(e)), pm(e);
      }
      function pm(e) {
        if (((Yc = null), (e = ma(e)), e !== null)) {
          var t = et(e);
          if (t === null) e = null;
          else {
            var n = t.tag;
            if (n === 13) {
              if (((e = Z(t)), e !== null)) return e;
              e = null;
            } else if (n === 3) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          }
        }
        return (Yc = e), null;
      }
      function vb(e) {
        switch (e) {
          case "beforetoggle":
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
          case "toggle":
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
            return Aa;
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
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return Ca;
          case "message":
            switch (jx()) {
              case Om:
                return Aa;
              case Dm:
                return Ca;
              case Sl:
              case Hx:
                return no;
              case Nm:
                return ec;
              default:
                return no;
            }
          default:
            return no;
        }
      }
      function bb(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            Fo = null;
            break;
          case "dragenter":
          case "dragleave":
            Io = null;
            break;
          case "mouseover":
          case "mouseout":
            Zo = null;
            break;
          case "pointerover":
          case "pointerout":
            zu.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            ju.delete(t.pointerId);
        }
      }
      function Xi(e, t, n, a, r, i) {
        return e === null || e.nativeEvent !== i
          ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: a,
              nativeEvent: i,
              targetContainers: [r],
            }),
            t !== null && ((t = ha(t)), t !== null && gb(t)),
            e)
          : ((e.eventSystemFlags |= a),
            (t = e.targetContainers),
            r !== null && t.indexOf(r) === -1 && t.push(r),
            e);
      }
      function xx(e, t, n, a, r) {
        switch (t) {
          case "focusin":
            return (Fo = Xi(Fo, e, t, n, a, r)), !0;
          case "dragenter":
            return (Io = Xi(Io, e, t, n, a, r)), !0;
          case "mouseover":
            return (Zo = Xi(Zo, e, t, n, a, r)), !0;
          case "pointerover":
            var i = r.pointerId;
            return zu.set(i, Xi(zu.get(i) || null, e, t, n, a, r)), !0;
          case "gotpointercapture":
            return (
              (i = r.pointerId),
              ju.set(i, Xi(ju.get(i) || null, e, t, n, a, r)),
              !0
            );
        }
        return !1;
      }
      function Sb(e) {
        var t = ma(e.target);
        if (t !== null) {
          var n = et(t);
          if (n !== null) {
            if (((t = n.tag), t === 13)) {
              if (((t = Z(n)), t !== null)) {
                (e.blockedOn = t),
                  hi(e.priority, function () {
                    if (n.tag === 13) {
                      var a = Cn(n),
                        r = Zt(n, a);
                      r !== null && vt(r, n, a), dm(n, a);
                    }
                  });
                return;
              }
            } else if (
              t === 3 &&
              n.stateNode.current.memoizedState.isDehydrated
            ) {
              e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
              return;
            }
          }
        }
        e.blockedOn = null;
      }
      function Xs(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = hm(e.nativeEvent);
          if (n === null) {
            n = e.nativeEvent;
            var a = new n.constructor(n.type, n),
              r = a;
            Ki !== null &&
              console.error(
                "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
              ),
              (Ki = r),
              n.target.dispatchEvent(a),
              Ki === null &&
                console.error(
                  "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
                ),
              (Ki = null);
          } else return (t = ha(n)), t !== null && gb(t), (e.blockedOn = n), !1;
          t.shift();
        }
        return !0;
      }
      function Eb(e, t, n) {
        Xs(e) && n.delete(t);
      }
      function wx() {
        (zh = !1),
          Fo !== null && Xs(Fo) && (Fo = null),
          Io !== null && Xs(Io) && (Io = null),
          Zo !== null && Xs(Zo) && (Zo = null),
          zu.forEach(Eb),
          ju.forEach(Eb);
      }
      function Qs(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          zh ||
            ((zh = !0),
            Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, wx)));
      }
      function Tb(e) {
        qc !== e &&
          ((qc = e),
          Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, function () {
            qc === e && (qc = null);
            for (var t = 0; t < e.length; t += 3) {
              var n = e[t],
                a = e[t + 1],
                r = e[t + 2];
              if (typeof a != "function") {
                if (pm(a || n) === null) continue;
                break;
              }
              var i = ha(n);
              i !== null &&
                (e.splice(t, 3),
                (t -= 3),
                (n = { pending: !0, data: r, method: n.method, action: a }),
                Object.freeze(n),
                sd(i, n, a, r));
            }
          }));
      }
      function Qi(e) {
        function t(g) {
          return Qs(g, e);
        }
        Fo !== null && Qs(Fo, e),
          Io !== null && Qs(Io, e),
          Zo !== null && Qs(Zo, e),
          zu.forEach(t),
          ju.forEach(t);
        for (var n = 0; n < Wo.length; n++) {
          var a = Wo[n];
          a.blockedOn === e && (a.blockedOn = null);
        }
        for (; 0 < Wo.length && ((n = Wo[0]), n.blockedOn === null); )
          Sb(n), n.blockedOn === null && Wo.shift();
        if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
          for (a = 0; a < n.length; a += 3) {
            var r = n[a],
              i = n[a + 1],
              f = r[gn] || null;
            if (typeof i == "function") f || Tb(n);
            else if (f) {
              var m = null;
              if (i && i.hasAttribute("formAction")) {
                if (((r = i), (f = i[gn] || null))) m = f.formAction;
                else if (pm(r) !== null) continue;
              } else m = f.action;
              typeof m == "function"
                ? (n[a + 1] = m)
                : (n.splice(a, 3), (a -= 3)),
                Tb(n);
            }
          }
      }
      function ym(e) {
        this._internalRoot = e;
      }
      function Fs(e) {
        this._internalRoot = e;
      }
      function Rb(e) {
        e[Tr] &&
          (e._reactRootContainer
            ? console.error(
                "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
              )
            : console.error(
                "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
              ));
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
          "function" &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var Dt = dA(),
        gm = sf(),
        Ax = hA(),
        Cx = Symbol.for("react.element"),
        _o = Symbol.for("react.transitional.element"),
        vl = Symbol.for("react.portal"),
        bl = Symbol.for("react.fragment"),
        Is = Symbol.for("react.strict_mode"),
        vm = Symbol.for("react.profiler"),
        Ox = Symbol.for("react.provider"),
        bm = Symbol.for("react.consumer"),
        Ra = Symbol.for("react.context"),
        Fi = Symbol.for("react.forward_ref"),
        Sm = Symbol.for("react.suspense"),
        Em = Symbol.for("react.suspense_list"),
        Zs = Symbol.for("react.memo"),
        On = Symbol.for("react.lazy"),
        xb = Symbol.for("react.offscreen"),
        Dx = Symbol.for("react.memo_cache_sentinel"),
        wb = Symbol.iterator,
        Nx = Symbol.for("react.client.reference"),
        L = gm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        qe = Object.assign,
        Ii = 0,
        Ab,
        Cb,
        Ob,
        Db,
        Nb,
        Mb,
        Ub;
      ye.__reactDisabledLog = !0;
      var Tm,
        _b,
        Rm = !1,
        xm = new (typeof WeakMap == "function" ? WeakMap : Map)(),
        Wt = null,
        qn = !1,
        Gt = Array.isArray,
        dt = Ax.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Mx = Object.freeze({
          pending: !1,
          data: null,
          method: null,
          action: null,
        }),
        wm = [],
        Am = [],
        eo = -1,
        zo = q(null),
        Zi = q(null),
        jo = q(null),
        Ws = q(null),
        to = Object.prototype.hasOwnProperty,
        Cm = Dt.unstable_scheduleCallback,
        Ux = Dt.unstable_cancelCallback,
        _x = Dt.unstable_shouldYield,
        zx = Dt.unstable_requestPaint,
        xa = Dt.unstable_now,
        jx = Dt.unstable_getCurrentPriorityLevel,
        Om = Dt.unstable_ImmediatePriority,
        Dm = Dt.unstable_UserBlockingPriority,
        Sl = Dt.unstable_NormalPriority,
        Hx = Dt.unstable_LowPriority,
        Nm = Dt.unstable_IdlePriority,
        kx = Dt.log,
        Lx = Dt.unstable_setDisableYieldValue,
        El = null,
        Kt = null,
        le = null,
        wa = !1,
        ra = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u",
        rn = Math.clz32 ? Math.clz32 : xt,
        Bx = Math.log,
        Vx = Math.LN2,
        Ks = 128,
        Js = 4194304,
        Aa = 2,
        Ca = 8,
        no = 32,
        ec = 268435456,
        Ho = Math.random().toString(36).slice(2),
        Jt = "__reactFiber$" + Ho,
        gn = "__reactProps$" + Ho,
        Tr = "__reactContainer$" + Ho,
        Mm = "__reactEvents$" + Ho,
        Yx = "__reactListeners$" + Ho,
        qx = "__reactHandles$" + Ho,
        zb = "__reactResources$" + Ho,
        Wi = "__reactMarker$" + Ho,
        jb = new Set(),
        Rr = {},
        Um = {},
        Oa = !(
          typeof window > "u" ||
          typeof window.document > "u" ||
          typeof window.document.createElement > "u"
        ),
        Px = {
          button: !0,
          checkbox: !0,
          image: !0,
          hidden: !0,
          radio: !0,
          reset: !0,
          submit: !0,
        },
        $x = RegExp(
          "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
        ),
        Hb = {},
        kb = {},
        Gx = /[\n"\\]/g,
        Lb = !1,
        Bb = !1,
        Vb = !1,
        Yb = !1,
        qb = !1,
        Pb = !1,
        $b = ["value", "defaultValue"],
        Gb = !1,
        Xb = /["'&<>\n\t]|^\s|\s$/,
        Xx =
          "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
            " "
          ),
        Qb =
          "applet caption html table td th marquee object template foreignObject desc title".split(
            " "
          ),
        Qx = Qb.concat(["button"]),
        Fx = "dd dt li option optgroup p rp rt".split(" "),
        Fb = {
          current: null,
          formTag: null,
          aTagInScope: null,
          buttonTagInScope: null,
          nobrTagInScope: null,
          pTagInButtonScope: null,
          listItemTagAutoclosing: null,
          dlItemTagAutoclosing: null,
          containerTagInScope: null,
        },
        tc = {},
        nc = "http://www.w3.org/1998/Math/MathML",
        Tl = "http://www.w3.org/2000/svg",
        _m = {
          animation:
            "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
              " "
            ),
          background:
            "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
              " "
            ),
          backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
          border:
            "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
              " "
            ),
          borderBlockEnd: [
            "borderBlockEndColor",
            "borderBlockEndStyle",
            "borderBlockEndWidth",
          ],
          borderBlockStart: [
            "borderBlockStartColor",
            "borderBlockStartStyle",
            "borderBlockStartWidth",
          ],
          borderBottom: [
            "borderBottomColor",
            "borderBottomStyle",
            "borderBottomWidth",
          ],
          borderColor: [
            "borderBottomColor",
            "borderLeftColor",
            "borderRightColor",
            "borderTopColor",
          ],
          borderImage: [
            "borderImageOutset",
            "borderImageRepeat",
            "borderImageSlice",
            "borderImageSource",
            "borderImageWidth",
          ],
          borderInlineEnd: [
            "borderInlineEndColor",
            "borderInlineEndStyle",
            "borderInlineEndWidth",
          ],
          borderInlineStart: [
            "borderInlineStartColor",
            "borderInlineStartStyle",
            "borderInlineStartWidth",
          ],
          borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
          borderRadius: [
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
            "borderTopLeftRadius",
            "borderTopRightRadius",
          ],
          borderRight: [
            "borderRightColor",
            "borderRightStyle",
            "borderRightWidth",
          ],
          borderStyle: [
            "borderBottomStyle",
            "borderLeftStyle",
            "borderRightStyle",
            "borderTopStyle",
          ],
          borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
          borderWidth: [
            "borderBottomWidth",
            "borderLeftWidth",
            "borderRightWidth",
            "borderTopWidth",
          ],
          columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
          columns: ["columnCount", "columnWidth"],
          flex: ["flexBasis", "flexGrow", "flexShrink"],
          flexFlow: ["flexDirection", "flexWrap"],
          font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
            " "
          ),
          fontVariant:
            "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
              " "
            ),
          gap: ["columnGap", "rowGap"],
          grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
            " "
          ),
          gridArea: [
            "gridColumnEnd",
            "gridColumnStart",
            "gridRowEnd",
            "gridRowStart",
          ],
          gridColumn: ["gridColumnEnd", "gridColumnStart"],
          gridColumnGap: ["columnGap"],
          gridGap: ["columnGap", "rowGap"],
          gridRow: ["gridRowEnd", "gridRowStart"],
          gridRowGap: ["rowGap"],
          gridTemplate: [
            "gridTemplateAreas",
            "gridTemplateColumns",
            "gridTemplateRows",
          ],
          listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
          margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
          marker: ["markerEnd", "markerMid", "markerStart"],
          mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
            " "
          ),
          maskPosition: ["maskPositionX", "maskPositionY"],
          outline: ["outlineColor", "outlineStyle", "outlineWidth"],
          overflow: ["overflowX", "overflowY"],
          padding: [
            "paddingBottom",
            "paddingLeft",
            "paddingRight",
            "paddingTop",
          ],
          placeContent: ["alignContent", "justifyContent"],
          placeItems: ["alignItems", "justifyItems"],
          placeSelf: ["alignSelf", "justifySelf"],
          textDecoration: [
            "textDecorationColor",
            "textDecorationLine",
            "textDecorationStyle",
          ],
          textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
          transition: [
            "transitionDelay",
            "transitionDuration",
            "transitionProperty",
            "transitionTimingFunction",
          ],
          wordWrap: ["overflowWrap"],
        },
        Ib = /([A-Z])/g,
        Zb = /^ms-/,
        Ix = /^(?:webkit|moz|o)[A-Z]/,
        Zx = /^-ms-/,
        Wx = /-(.)/g,
        Wb = /;\s*$/,
        Rl = {},
        zm = {},
        Kb = !1,
        Jb = !1,
        e0 = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
          )
        ),
        Kx = new Map([
          ["acceptCharset", "accept-charset"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
          ["crossOrigin", "crossorigin"],
          ["accentHeight", "accent-height"],
          ["alignmentBaseline", "alignment-baseline"],
          ["arabicForm", "arabic-form"],
          ["baselineShift", "baseline-shift"],
          ["capHeight", "cap-height"],
          ["clipPath", "clip-path"],
          ["clipRule", "clip-rule"],
          ["colorInterpolation", "color-interpolation"],
          ["colorInterpolationFilters", "color-interpolation-filters"],
          ["colorProfile", "color-profile"],
          ["colorRendering", "color-rendering"],
          ["dominantBaseline", "dominant-baseline"],
          ["enableBackground", "enable-background"],
          ["fillOpacity", "fill-opacity"],
          ["fillRule", "fill-rule"],
          ["floodColor", "flood-color"],
          ["floodOpacity", "flood-opacity"],
          ["fontFamily", "font-family"],
          ["fontSize", "font-size"],
          ["fontSizeAdjust", "font-size-adjust"],
          ["fontStretch", "font-stretch"],
          ["fontStyle", "font-style"],
          ["fontVariant", "font-variant"],
          ["fontWeight", "font-weight"],
          ["glyphName", "glyph-name"],
          ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
          ["glyphOrientationVertical", "glyph-orientation-vertical"],
          ["horizAdvX", "horiz-adv-x"],
          ["horizOriginX", "horiz-origin-x"],
          ["imageRendering", "image-rendering"],
          ["letterSpacing", "letter-spacing"],
          ["lightingColor", "lighting-color"],
          ["markerEnd", "marker-end"],
          ["markerMid", "marker-mid"],
          ["markerStart", "marker-start"],
          ["overlinePosition", "overline-position"],
          ["overlineThickness", "overline-thickness"],
          ["paintOrder", "paint-order"],
          ["panose-1", "panose-1"],
          ["pointerEvents", "pointer-events"],
          ["renderingIntent", "rendering-intent"],
          ["shapeRendering", "shape-rendering"],
          ["stopColor", "stop-color"],
          ["stopOpacity", "stop-opacity"],
          ["strikethroughPosition", "strikethrough-position"],
          ["strikethroughThickness", "strikethrough-thickness"],
          ["strokeDasharray", "stroke-dasharray"],
          ["strokeDashoffset", "stroke-dashoffset"],
          ["strokeLinecap", "stroke-linecap"],
          ["strokeLinejoin", "stroke-linejoin"],
          ["strokeMiterlimit", "stroke-miterlimit"],
          ["strokeOpacity", "stroke-opacity"],
          ["strokeWidth", "stroke-width"],
          ["textAnchor", "text-anchor"],
          ["textDecoration", "text-decoration"],
          ["textRendering", "text-rendering"],
          ["transformOrigin", "transform-origin"],
          ["underlinePosition", "underline-position"],
          ["underlineThickness", "underline-thickness"],
          ["unicodeBidi", "unicode-bidi"],
          ["unicodeRange", "unicode-range"],
          ["unitsPerEm", "units-per-em"],
          ["vAlphabetic", "v-alphabetic"],
          ["vHanging", "v-hanging"],
          ["vIdeographic", "v-ideographic"],
          ["vMathematical", "v-mathematical"],
          ["vectorEffect", "vector-effect"],
          ["vertAdvY", "vert-adv-y"],
          ["vertOriginX", "vert-origin-x"],
          ["vertOriginY", "vert-origin-y"],
          ["wordSpacing", "word-spacing"],
          ["writingMode", "writing-mode"],
          ["xmlnsXlink", "xmlns:xlink"],
          ["xHeight", "x-height"],
        ]),
        ac = {
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          fetchpriority: "fetchPriority",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          imagesizes: "imageSizes",
          imagesrcset: "imageSrcSet",
          inert: "inert",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          popover: "popover",
          popovertarget: "popoverTarget",
          popovertargetaction: "popoverTargetAction",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          transformorigin: "transformOrigin",
          "transform-origin": "transformOrigin",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan",
        },
        t0 = {
          "aria-current": 0,
          "aria-description": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          "aria-hidden": 0,
          "aria-invalid": 0,
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0,
        },
        xl = {},
        Jx = RegExp(
          "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
        ),
        ew = RegExp(
          "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
        ),
        n0 = !1,
        ln = {},
        a0 = /^on./,
        tw = /^on[^A-Z]/,
        nw = RegExp(
          "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
        ),
        aw = RegExp(
          "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
        ),
        ow =
          /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,
        Ki = null,
        wl = null,
        Al = null,
        jm = !1,
        Hm = !1;
      if (Oa)
        try {
          var Ji = {};
          Object.defineProperty(Ji, "passive", {
            get: function () {
              Hm = !0;
            },
          }),
            window.addEventListener("test", Ji, Ji),
            window.removeEventListener("test", Ji, Ji);
        } catch {
          Hm = !1;
        }
      var ko = null,
        km = null,
        oc = null,
        xr = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        rc = hn(xr),
        eu = qe({}, xr, { view: 0, detail: 0 }),
        rw = hn(eu),
        Lm,
        Bm,
        tu,
        lc = qe({}, eu, {
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
          getModifierState: Df,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return e.relatedTarget === void 0
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== tu &&
                  (tu && e.type === "mousemove"
                    ? ((Lm = e.screenX - tu.screenX),
                      (Bm = e.screenY - tu.screenY))
                    : (Bm = Lm = 0),
                  (tu = e)),
                Lm);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : Bm;
          },
        }),
        o0 = hn(lc),
        lw = qe({}, lc, { dataTransfer: 0 }),
        iw = hn(lw),
        uw = qe({}, eu, { relatedTarget: 0 }),
        Vm = hn(uw),
        sw = qe({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        cw = hn(sw),
        fw = qe({}, xr, {
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
        dw = hn(fw),
        mw = qe({}, xr, { data: 0 }),
        r0 = hn(mw),
        hw = r0,
        pw = {
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
          MozPrintableKey: "Unidentified",
        },
        yw = {
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
          224: "Meta",
        },
        gw = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        },
        vw = qe({}, eu, {
          key: function (e) {
            if (e.key) {
              var t = pw[e.key] || e.key;
              if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
              ? ((e = as(e)), e === 13 ? "Enter" : String.fromCharCode(e))
              : e.type === "keydown" || e.type === "keyup"
              ? yw[e.keyCode] || "Unidentified"
              : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Df,
          charCode: function (e) {
            return e.type === "keypress" ? as(e) : 0;
          },
          keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === "keypress"
              ? as(e)
              : e.type === "keydown" || e.type === "keyup"
              ? e.keyCode
              : 0;
          },
        }),
        bw = hn(vw),
        Sw = qe({}, lc, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
        l0 = hn(Sw),
        Ew = qe({}, eu, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Df,
        }),
        Tw = hn(Ew),
        Rw = qe({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        xw = hn(Rw),
        ww = qe({}, lc, {
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
        Aw = hn(ww),
        Cw = qe({}, xr, { newState: 0, oldState: 0 }),
        Ow = hn(Cw),
        Dw = [9, 13, 27, 32],
        i0 = 229,
        Ym = Oa && "CompositionEvent" in window,
        nu = null;
      Oa && "documentMode" in document && (nu = document.documentMode);
      var Nw = Oa && "TextEvent" in window && !nu,
        u0 = Oa && (!Ym || (nu && 8 < nu && 11 >= nu)),
        s0 = 32,
        c0 = String.fromCharCode(s0),
        f0 = !1,
        Cl = !1,
        Mw = {
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
          week: !0,
        },
        au = null,
        ou = null,
        d0 = !1;
      Oa &&
        (d0 =
          oR("input") && (!document.documentMode || 9 < document.documentMode));
      var un = typeof Object.is == "function" ? Object.is : cR,
        Uw = Oa && "documentMode" in document && 11 >= document.documentMode,
        Ol = null,
        qm = null,
        ru = null,
        Pm = !1,
        Dl = {
          animationend: lr("Animation", "AnimationEnd"),
          animationiteration: lr("Animation", "AnimationIteration"),
          animationstart: lr("Animation", "AnimationStart"),
          transitionrun: lr("Transition", "TransitionRun"),
          transitionstart: lr("Transition", "TransitionStart"),
          transitioncancel: lr("Transition", "TransitionCancel"),
          transitionend: lr("Transition", "TransitionEnd"),
        },
        $m = {},
        m0 = {};
      Oa &&
        ((m0 = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete Dl.animationend.animation,
          delete Dl.animationiteration.animation,
          delete Dl.animationstart.animation),
        "TransitionEvent" in window || delete Dl.transitionend.transition);
      var h0 = ir("animationend"),
        p0 = ir("animationiteration"),
        y0 = ir("animationstart"),
        _w = ir("transitionrun"),
        zw = ir("transitionstart"),
        jw = ir("transitioncancel"),
        g0 = ir("transitionend"),
        v0 = new Map(),
        b0 =
          "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
            " "
          ),
        ic = 1,
        lu = 2,
        wr = 4,
        Pn = [],
        Nl = 0,
        Gm = 0,
        Lo = {};
      Object.freeze(Lo);
      var $n = null,
        Ml = null,
        ct = 0,
        Hw = 1,
        Xt = 2,
        en = 8,
        la = 16,
        S0 = 64,
        Ul = Dt.unstable_now,
        Xm = -0,
        uc = -0,
        vn = -1.1,
        Ar = -0,
        sc = !1,
        cc = !1,
        ia = {
          recordUnsafeLifecycleWarnings: function () {},
          flushPendingUnsafeLifecycleWarnings: function () {},
          recordLegacyContextWarning: function () {},
          flushLegacyContextWarning: function () {},
          discardPendingWarnings: function () {},
        },
        iu = [],
        uu = [],
        su = [],
        cu = [],
        fu = [],
        du = [],
        Cr = new Set();
      (ia.recordUnsafeLifecycleWarnings = function (e, t) {
        Cr.has(e.type) ||
          (typeof t.componentWillMount == "function" &&
            t.componentWillMount.__suppressDeprecationWarning !== !0 &&
            iu.push(e),
          e.mode & en &&
            typeof t.UNSAFE_componentWillMount == "function" &&
            uu.push(e),
          typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 &&
            su.push(e),
          e.mode & en &&
            typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            cu.push(e),
          typeof t.componentWillUpdate == "function" &&
            t.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
            fu.push(e),
          e.mode & en &&
            typeof t.UNSAFE_componentWillUpdate == "function" &&
            du.push(e));
      }),
        (ia.flushPendingUnsafeLifecycleWarnings = function () {
          var e = new Set();
          0 < iu.length &&
            (iu.forEach(function (m) {
              e.add(X(m) || "Component"), Cr.add(m.type);
            }),
            (iu = []));
          var t = new Set();
          0 < uu.length &&
            (uu.forEach(function (m) {
              t.add(X(m) || "Component"), Cr.add(m.type);
            }),
            (uu = []));
          var n = new Set();
          0 < su.length &&
            (su.forEach(function (m) {
              n.add(X(m) || "Component"), Cr.add(m.type);
            }),
            (su = []));
          var a = new Set();
          0 < cu.length &&
            (cu.forEach(function (m) {
              a.add(X(m) || "Component"), Cr.add(m.type);
            }),
            (cu = []));
          var r = new Set();
          0 < fu.length &&
            (fu.forEach(function (m) {
              r.add(X(m) || "Component"), Cr.add(m.type);
            }),
            (fu = []));
          var i = new Set();
          if (
            (0 < du.length &&
              (du.forEach(function (m) {
                i.add(X(m) || "Component"), Cr.add(m.type);
              }),
              (du = [])),
            0 < t.size)
          ) {
            var f = E(t);
            console.error(
              `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
              f
            );
          }
          0 < a.size &&
            ((f = E(a)),
            console.error(
              `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
              f
            )),
            0 < i.size &&
              ((f = E(i)),
              console.error(
                `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
                f
              )),
            0 < e.size &&
              ((f = E(e)),
              console.warn(
                `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                f
              )),
            0 < n.size &&
              ((f = E(n)),
              console.warn(
                `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                f
              )),
            0 < r.size &&
              ((f = E(r)),
              console.warn(
                `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
                f
              ));
        });
      var fc = new Map(),
        E0 = new Set();
      (ia.recordLegacyContextWarning = function (e, t) {
        for (var n = null, a = e; a !== null; )
          a.mode & en && (n = a), (a = a.return);
        n === null
          ? console.error(
              "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
            )
          : !E0.has(e.type) &&
            ((a = fc.get(n)),
            e.type.contextTypes != null ||
              e.type.childContextTypes != null ||
              (t !== null && typeof t.getChildContext == "function")) &&
            (a === void 0 && ((a = []), fc.set(n, a)), a.push(e));
      }),
        (ia.flushLegacyContextWarning = function () {
          fc.forEach(function (e) {
            if (e.length !== 0) {
              var t = e[0],
                n = new Set();
              e.forEach(function (r) {
                n.add(X(r) || "Component"), E0.add(r.type);
              });
              var a = E(n);
              J(t, function () {
                console.error(
                  `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
                  a
                );
              });
            }
          });
        }),
        (ia.discardPendingWarnings = function () {
          (iu = []),
            (uu = []),
            (su = []),
            (cu = []),
            (fu = []),
            (du = []),
            (fc = new Map());
        });
      var Qm = new WeakMap(),
        _l = [],
        zl = 0,
        dc = null,
        mc = 0,
        Gn = [],
        Xn = 0,
        Or = null,
        ao = 1,
        oo = "",
        sn = null,
        Qt = null,
        Ze = !1,
        ro = !1,
        Qn = null,
        ua = null,
        Da = !1,
        Fm = Error(
          "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
        ),
        hc = Error(
          "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
        ),
        T0 = Error(
          "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
        ),
        Im = {
          then: function () {
            console.error(
              'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
            );
          },
        },
        mu = null,
        pc = !1,
        R0 = {
          "react-stack-bottom-frame": function (e, t, n) {
            var a = qn;
            qn = !0;
            try {
              return e(t, n);
            } finally {
              qn = a;
            }
          },
        },
        Zm = R0["react-stack-bottom-frame"].bind(R0),
        x0 = {
          "react-stack-bottom-frame": function (e) {
            var t = qn;
            qn = !0;
            try {
              return e.render();
            } finally {
              qn = t;
            }
          },
        },
        w0 = x0["react-stack-bottom-frame"].bind(x0),
        A0 = {
          "react-stack-bottom-frame": function (e, t) {
            try {
              t.componentDidMount();
            } catch (n) {
              rt(e, e.return, n);
            }
          },
        },
        Wm = A0["react-stack-bottom-frame"].bind(A0),
        C0 = {
          "react-stack-bottom-frame": function (e, t, n, a, r) {
            try {
              t.componentDidUpdate(n, a, r);
            } catch (i) {
              rt(e, e.return, i);
            }
          },
        },
        O0 = C0["react-stack-bottom-frame"].bind(C0),
        D0 = {
          "react-stack-bottom-frame": function (e, t) {
            var n = t.stack;
            e.componentDidCatch(t.value, {
              componentStack: n !== null ? n : "",
            });
          },
        },
        kw = D0["react-stack-bottom-frame"].bind(D0),
        N0 = {
          "react-stack-bottom-frame": function (e, t, n) {
            try {
              n.componentWillUnmount();
            } catch (a) {
              rt(e, t, a);
            }
          },
        },
        M0 = N0["react-stack-bottom-frame"].bind(N0),
        U0 = {
          "react-stack-bottom-frame": function (e) {
            var t = e.create;
            return (e = e.inst), (t = t()), (e.destroy = t);
          },
        },
        Lw = U0["react-stack-bottom-frame"].bind(U0),
        _0 = {
          "react-stack-bottom-frame": function (e, t, n) {
            try {
              n();
            } catch (a) {
              rt(e, t, a);
            }
          },
        },
        Bw = _0["react-stack-bottom-frame"].bind(_0),
        z0 = {
          "react-stack-bottom-frame": function (e) {
            var t = e._init;
            return t(e._payload);
          },
        },
        Bo = z0["react-stack-bottom-frame"].bind(z0),
        jl = null,
        hu = 0,
        Ye = null,
        Km,
        j0 = (Km = !1),
        H0 = {},
        k0 = {},
        L0 = {};
      T = function (e, t, n) {
        if (
          n !== null &&
          typeof n == "object" &&
          n._store &&
          ((!n._store.validated && n.key == null) || n._store.validated === 2)
        ) {
          if (typeof n._store != "object")
            throw Error(
              "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
            );
          n._store.validated = 1;
          var a = X(e),
            r = a || "null";
          if (!H0[r]) {
            (H0[r] = !0), (n = n._owner), (e = e._debugOwner);
            var i = "";
            e &&
              typeof e.tag == "number" &&
              (r = X(e)) &&
              (i =
                `

Check the render method of \`` +
                r +
                "`."),
              i ||
                (a &&
                  (i =
                    `

Check the top-level render call using <` +
                    a +
                    ">."));
            var f = "";
            n != null &&
              e !== n &&
              ((a = null),
              typeof n.tag == "number"
                ? (a = X(n))
                : typeof n.name == "string" && (a = n.name),
              a && (f = " It was passed a child from " + a + ".")),
              J(t, function () {
                console.error(
                  'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
                  i,
                  f
                );
              });
          }
        }
      };
      var Dr = Gy(!0),
        B0 = Gy(!1),
        Hl = q(null),
        yc = q(0),
        Fn = q(null),
        Na = null,
        kl = 1,
        pu = 2,
        _t = q(0),
        In = 0,
        Zn = 1,
        cn = 2,
        Ft = 4,
        zt = 8,
        Vw =
          typeof AbortController < "u"
            ? AbortController
            : function () {
                var e = [],
                  t = (this.signal = {
                    aborted: !1,
                    addEventListener: function (n, a) {
                      e.push(a);
                    },
                  });
                this.abort = function () {
                  (t.aborted = !0),
                    e.forEach(function (n) {
                      return n();
                    });
                };
              },
        Yw = Dt.unstable_scheduleCallback,
        qw = Dt.unstable_NormalPriority,
        jt = {
          $$typeof: Ra,
          Consumer: null,
          Provider: null,
          _currentValue: null,
          _currentValue2: null,
          _threadCount: 0,
          _currentRenderer: null,
          _currentRenderer2: null,
        },
        yu = null,
        Jm = 0,
        Nr = 0,
        Ll = null,
        V0 = L.S;
      L.S = function (e, t) {
        typeof t == "object" &&
          t !== null &&
          typeof t.then == "function" &&
          dR(e, t),
          V0 !== null && V0(e, t);
      };
      var Mr = q(null),
        Bl,
        Y0 = new Set(),
        q0 = new Set(),
        eh = new Set(),
        P0 = new Set(),
        Vo = 0,
        Me = null,
        it = null,
        Nt = null,
        gc = !1,
        Vl = !1,
        Ur = !1,
        vc = 0,
        gu = 0,
        lo = null,
        Pw = 0,
        $w = 25,
        k = null,
        Wn = null,
        io = -1,
        vu = !1,
        th = function () {
          return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null,
          };
        },
        Ma = {
          readContext: yt,
          use: Ao,
          useCallback: At,
          useContext: At,
          useEffect: At,
          useImperativeHandle: At,
          useLayoutEffect: At,
          useInsertionEffect: At,
          useMemo: At,
          useReducer: At,
          useRef: At,
          useState: At,
          useDebugValue: At,
          useDeferredValue: At,
          useTransition: At,
          useSyncExternalStore: At,
          useId: At,
        };
      (Ma.useCacheRefresh = At),
        (Ma.useMemoCache = At),
        (Ma.useHostTransitionStatus = At),
        (Ma.useFormState = At),
        (Ma.useActionState = At),
        (Ma.useOptimistic = At);
      var Yo = null,
        _r = null,
        qo = null,
        zr = null,
        bn = null,
        fn = null,
        Po = null;
      (Yo = {
        readContext: function (e) {
          return yt(e);
        },
        use: Ao,
        useCallback: function (e, t) {
          return (k = "useCallback"), Ge(), ol(t), rd(e, t);
        },
        useContext: function (e) {
          return (k = "useContext"), Ge(), yt(e);
        },
        useEffect: function (e, t) {
          return (k = "useEffect"), Ge(), ol(t), Rs(e, t);
        },
        useImperativeHandle: function (e, t, n) {
          return (k = "useImperativeHandle"), Ge(), ol(n), od(e, t, n);
        },
        useInsertionEffect: function (e, t) {
          (k = "useInsertionEffect"), Ge(), ol(t), pr(4, cn, e, t);
        },
        useLayoutEffect: function (e, t) {
          return (k = "useLayoutEffect"), Ge(), ol(t), ad(e, t);
        },
        useMemo: function (e, t) {
          (k = "useMemo"), Ge(), ol(t);
          var n = L.H;
          L.H = bn;
          try {
            return ld(e, t);
          } finally {
            L.H = n;
          }
        },
        useReducer: function (e, t, n) {
          (k = "useReducer"), Ge();
          var a = L.H;
          L.H = bn;
          try {
            return If(e, t, n);
          } finally {
            L.H = a;
          }
        },
        useRef: function (e) {
          return (k = "useRef"), Ge(), nd(e);
        },
        useState: function (e) {
          (k = "useState"), Ge();
          var t = L.H;
          L.H = bn;
          try {
            return Jf(e);
          } finally {
            L.H = t;
          }
        },
        useDebugValue: function () {
          (k = "useDebugValue"), Ge();
        },
        useDeferredValue: function (e, t) {
          return (k = "useDeferredValue"), Ge(), id(e, t);
        },
        useTransition: function () {
          return (k = "useTransition"), Ge(), cd();
        },
        useSyncExternalStore: function (e, t, n) {
          return (k = "useSyncExternalStore"), Ge(), Wf(e, t, n);
        },
        useId: function () {
          return (k = "useId"), Ge(), fd();
        },
        useCacheRefresh: function () {
          return (k = "useCacheRefresh"), Ge(), dd();
        },
      }),
        (Yo.useMemoCache = hr),
        (Yo.useHostTransitionStatus = yr),
        (Yo.useFormState = function (e, t) {
          return (k = "useFormState"), Ge(), bs(), ll(e, t);
        }),
        (Yo.useActionState = function (e, t) {
          return (k = "useActionState"), Ge(), ll(e, t);
        }),
        (Yo.useOptimistic = function (e) {
          return (k = "useOptimistic"), Ge(), ed(e);
        }),
        (_r = {
          readContext: function (e) {
            return yt(e);
          },
          use: Ao,
          useCallback: function (e, t) {
            return (k = "useCallback"), W(), rd(e, t);
          },
          useContext: function (e) {
            return (k = "useContext"), W(), yt(e);
          },
          useEffect: function (e, t) {
            return (k = "useEffect"), W(), Rs(e, t);
          },
          useImperativeHandle: function (e, t, n) {
            return (k = "useImperativeHandle"), W(), od(e, t, n);
          },
          useInsertionEffect: function (e, t) {
            (k = "useInsertionEffect"), W(), pr(4, cn, e, t);
          },
          useLayoutEffect: function (e, t) {
            return (k = "useLayoutEffect"), W(), ad(e, t);
          },
          useMemo: function (e, t) {
            (k = "useMemo"), W();
            var n = L.H;
            L.H = bn;
            try {
              return ld(e, t);
            } finally {
              L.H = n;
            }
          },
          useReducer: function (e, t, n) {
            (k = "useReducer"), W();
            var a = L.H;
            L.H = bn;
            try {
              return If(e, t, n);
            } finally {
              L.H = a;
            }
          },
          useRef: function (e) {
            return (k = "useRef"), W(), nd(e);
          },
          useState: function (e) {
            (k = "useState"), W();
            var t = L.H;
            L.H = bn;
            try {
              return Jf(e);
            } finally {
              L.H = t;
            }
          },
          useDebugValue: function () {
            (k = "useDebugValue"), W();
          },
          useDeferredValue: function (e, t) {
            return (k = "useDeferredValue"), W(), id(e, t);
          },
          useTransition: function () {
            return (k = "useTransition"), W(), cd();
          },
          useSyncExternalStore: function (e, t, n) {
            return (k = "useSyncExternalStore"), W(), Wf(e, t, n);
          },
          useId: function () {
            return (k = "useId"), W(), fd();
          },
          useCacheRefresh: function () {
            return (k = "useCacheRefresh"), W(), dd();
          },
        }),
        (_r.useMemoCache = hr),
        (_r.useHostTransitionStatus = yr),
        (_r.useFormState = function (e, t) {
          return (k = "useFormState"), W(), bs(), ll(e, t);
        }),
        (_r.useActionState = function (e, t) {
          return (k = "useActionState"), W(), ll(e, t);
        }),
        (_r.useOptimistic = function (e) {
          return (k = "useOptimistic"), W(), ed(e);
        }),
        (qo = {
          readContext: function (e) {
            return yt(e);
          },
          use: Ao,
          useCallback: function (e, t) {
            return (k = "useCallback"), W(), ws(e, t);
          },
          useContext: function (e) {
            return (k = "useContext"), W(), yt(e);
          },
          useEffect: function (e, t) {
            (k = "useEffect"), W(), yn(2048, zt, e, t);
          },
          useImperativeHandle: function (e, t, n) {
            return (k = "useImperativeHandle"), W(), xs(e, t, n);
          },
          useInsertionEffect: function (e, t) {
            return (k = "useInsertionEffect"), W(), yn(4, cn, e, t);
          },
          useLayoutEffect: function (e, t) {
            return (k = "useLayoutEffect"), W(), yn(4, Ft, e, t);
          },
          useMemo: function (e, t) {
            (k = "useMemo"), W();
            var n = L.H;
            L.H = fn;
            try {
              return As(e, t);
            } finally {
              L.H = n;
            }
          },
          useReducer: function (e, t, n) {
            (k = "useReducer"), W();
            var a = L.H;
            L.H = fn;
            try {
              return rl(e, t, n);
            } finally {
              L.H = a;
            }
          },
          useRef: function () {
            return (k = "useRef"), W(), at().memoizedState;
          },
          useState: function () {
            (k = "useState"), W();
            var e = L.H;
            L.H = fn;
            try {
              return rl(oa);
            } finally {
              L.H = e;
            }
          },
          useDebugValue: function () {
            (k = "useDebugValue"), W();
          },
          useDeferredValue: function (e, t) {
            return (k = "useDeferredValue"), W(), dg(e, t);
          },
          useTransition: function () {
            return (k = "useTransition"), W(), vg();
          },
          useSyncExternalStore: function (e, t, n) {
            return (k = "useSyncExternalStore"), W(), Ss(e, t, n);
          },
          useId: function () {
            return (k = "useId"), W(), at().memoizedState;
          },
          useCacheRefresh: function () {
            return (k = "useCacheRefresh"), W(), at().memoizedState;
          },
        }),
        (qo.useMemoCache = hr),
        (qo.useHostTransitionStatus = yr),
        (qo.useFormState = function (e) {
          return (k = "useFormState"), W(), bs(), Es(e);
        }),
        (qo.useActionState = function (e) {
          return (k = "useActionState"), W(), Es(e);
        }),
        (qo.useOptimistic = function (e, t) {
          return (k = "useOptimistic"), W(), ng(e, t);
        }),
        (zr = {
          readContext: function (e) {
            return yt(e);
          },
          use: Ao,
          useCallback: function (e, t) {
            return (k = "useCallback"), W(), ws(e, t);
          },
          useContext: function (e) {
            return (k = "useContext"), W(), yt(e);
          },
          useEffect: function (e, t) {
            (k = "useEffect"), W(), yn(2048, zt, e, t);
          },
          useImperativeHandle: function (e, t, n) {
            return (k = "useImperativeHandle"), W(), xs(e, t, n);
          },
          useInsertionEffect: function (e, t) {
            return (k = "useInsertionEffect"), W(), yn(4, cn, e, t);
          },
          useLayoutEffect: function (e, t) {
            return (k = "useLayoutEffect"), W(), yn(4, Ft, e, t);
          },
          useMemo: function (e, t) {
            (k = "useMemo"), W();
            var n = L.H;
            L.H = Po;
            try {
              return As(e, t);
            } finally {
              L.H = n;
            }
          },
          useReducer: function (e, t, n) {
            (k = "useReducer"), W();
            var a = L.H;
            L.H = Po;
            try {
              return Ni(e, t, n);
            } finally {
              L.H = a;
            }
          },
          useRef: function () {
            return (k = "useRef"), W(), at().memoizedState;
          },
          useState: function () {
            (k = "useState"), W();
            var e = L.H;
            L.H = Po;
            try {
              return Ni(oa);
            } finally {
              L.H = e;
            }
          },
          useDebugValue: function () {
            (k = "useDebugValue"), W();
          },
          useDeferredValue: function (e, t) {
            return (k = "useDeferredValue"), W(), mg(e, t);
          },
          useTransition: function () {
            return (k = "useTransition"), W(), bg();
          },
          useSyncExternalStore: function (e, t, n) {
            return (k = "useSyncExternalStore"), W(), Ss(e, t, n);
          },
          useId: function () {
            return (k = "useId"), W(), at().memoizedState;
          },
          useCacheRefresh: function () {
            return (k = "useCacheRefresh"), W(), at().memoizedState;
          },
        }),
        (zr.useMemoCache = hr),
        (zr.useHostTransitionStatus = yr),
        (zr.useFormState = function (e) {
          return (k = "useFormState"), W(), bs(), Ts(e);
        }),
        (zr.useActionState = function (e) {
          return (k = "useActionState"), W(), Ts(e);
        }),
        (zr.useOptimistic = function (e, t) {
          return (k = "useOptimistic"), W(), og(e, t);
        }),
        (bn = {
          readContext: function (e) {
            return S(), yt(e);
          },
          use: function (e) {
            return v(), Ao(e);
          },
          useCallback: function (e, t) {
            return (k = "useCallback"), v(), Ge(), rd(e, t);
          },
          useContext: function (e) {
            return (k = "useContext"), v(), Ge(), yt(e);
          },
          useEffect: function (e, t) {
            return (k = "useEffect"), v(), Ge(), Rs(e, t);
          },
          useImperativeHandle: function (e, t, n) {
            return (k = "useImperativeHandle"), v(), Ge(), od(e, t, n);
          },
          useInsertionEffect: function (e, t) {
            (k = "useInsertionEffect"), v(), Ge(), pr(4, cn, e, t);
          },
          useLayoutEffect: function (e, t) {
            return (k = "useLayoutEffect"), v(), Ge(), ad(e, t);
          },
          useMemo: function (e, t) {
            (k = "useMemo"), v(), Ge();
            var n = L.H;
            L.H = bn;
            try {
              return ld(e, t);
            } finally {
              L.H = n;
            }
          },
          useReducer: function (e, t, n) {
            (k = "useReducer"), v(), Ge();
            var a = L.H;
            L.H = bn;
            try {
              return If(e, t, n);
            } finally {
              L.H = a;
            }
          },
          useRef: function (e) {
            return (k = "useRef"), v(), Ge(), nd(e);
          },
          useState: function (e) {
            (k = "useState"), v(), Ge();
            var t = L.H;
            L.H = bn;
            try {
              return Jf(e);
            } finally {
              L.H = t;
            }
          },
          useDebugValue: function () {
            (k = "useDebugValue"), v(), Ge();
          },
          useDeferredValue: function (e, t) {
            return (k = "useDeferredValue"), v(), Ge(), id(e, t);
          },
          useTransition: function () {
            return (k = "useTransition"), v(), Ge(), cd();
          },
          useSyncExternalStore: function (e, t, n) {
            return (k = "useSyncExternalStore"), v(), Ge(), Wf(e, t, n);
          },
          useId: function () {
            return (k = "useId"), v(), Ge(), fd();
          },
          useCacheRefresh: function () {
            return (k = "useCacheRefresh"), Ge(), dd();
          },
          useMemoCache: function (e) {
            return v(), hr(e);
          },
        }),
        (bn.useHostTransitionStatus = yr),
        (bn.useFormState = function (e, t) {
          return (k = "useFormState"), v(), Ge(), ll(e, t);
        }),
        (bn.useActionState = function (e, t) {
          return (k = "useActionState"), v(), Ge(), ll(e, t);
        }),
        (bn.useOptimistic = function (e) {
          return (k = "useOptimistic"), v(), Ge(), ed(e);
        }),
        (fn = {
          readContext: function (e) {
            return S(), yt(e);
          },
          use: function (e) {
            return v(), Ao(e);
          },
          useCallback: function (e, t) {
            return (k = "useCallback"), v(), W(), ws(e, t);
          },
          useContext: function (e) {
            return (k = "useContext"), v(), W(), yt(e);
          },
          useEffect: function (e, t) {
            (k = "useEffect"), v(), W(), yn(2048, zt, e, t);
          },
          useImperativeHandle: function (e, t, n) {
            return (k = "useImperativeHandle"), v(), W(), xs(e, t, n);
          },
          useInsertionEffect: function (e, t) {
            return (k = "useInsertionEffect"), v(), W(), yn(4, cn, e, t);
          },
          useLayoutEffect: function (e, t) {
            return (k = "useLayoutEffect"), v(), W(), yn(4, Ft, e, t);
          },
          useMemo: function (e, t) {
            (k = "useMemo"), v(), W();
            var n = L.H;
            L.H = fn;
            try {
              return As(e, t);
            } finally {
              L.H = n;
            }
          },
          useReducer: function (e, t, n) {
            (k = "useReducer"), v(), W();
            var a = L.H;
            L.H = fn;
            try {
              return rl(e, t, n);
            } finally {
              L.H = a;
            }
          },
          useRef: function () {
            return (k = "useRef"), v(), W(), at().memoizedState;
          },
          useState: function () {
            (k = "useState"), v(), W();
            var e = L.H;
            L.H = fn;
            try {
              return rl(oa);
            } finally {
              L.H = e;
            }
          },
          useDebugValue: function () {
            (k = "useDebugValue"), v(), W();
          },
          useDeferredValue: function (e, t) {
            return (k = "useDeferredValue"), v(), W(), dg(e, t);
          },
          useTransition: function () {
            return (k = "useTransition"), v(), W(), vg();
          },
          useSyncExternalStore: function (e, t, n) {
            return (k = "useSyncExternalStore"), v(), W(), Ss(e, t, n);
          },
          useId: function () {
            return (k = "useId"), v(), W(), at().memoizedState;
          },
          useCacheRefresh: function () {
            return (k = "useCacheRefresh"), W(), at().memoizedState;
          },
          useMemoCache: function (e) {
            return v(), hr(e);
          },
        }),
        (fn.useHostTransitionStatus = yr),
        (fn.useFormState = function (e) {
          return (k = "useFormState"), v(), W(), Es(e);
        }),
        (fn.useActionState = function (e) {
          return (k = "useActionState"), v(), W(), Es(e);
        }),
        (fn.useOptimistic = function (e, t) {
          return (k = "useOptimistic"), v(), W(), ng(e, t);
        }),
        (Po = {
          readContext: function (e) {
            return S(), yt(e);
          },
          use: function (e) {
            return v(), Ao(e);
          },
          useCallback: function (e, t) {
            return (k = "useCallback"), v(), W(), ws(e, t);
          },
          useContext: function (e) {
            return (k = "useContext"), v(), W(), yt(e);
          },
          useEffect: function (e, t) {
            (k = "useEffect"), v(), W(), yn(2048, zt, e, t);
          },
          useImperativeHandle: function (e, t, n) {
            return (k = "useImperativeHandle"), v(), W(), xs(e, t, n);
          },
          useInsertionEffect: function (e, t) {
            return (k = "useInsertionEffect"), v(), W(), yn(4, cn, e, t);
          },
          useLayoutEffect: function (e, t) {
            return (k = "useLayoutEffect"), v(), W(), yn(4, Ft, e, t);
          },
          useMemo: function (e, t) {
            (k = "useMemo"), v(), W();
            var n = L.H;
            L.H = fn;
            try {
              return As(e, t);
            } finally {
              L.H = n;
            }
          },
          useReducer: function (e, t, n) {
            (k = "useReducer"), v(), W();
            var a = L.H;
            L.H = fn;
            try {
              return Ni(e, t, n);
            } finally {
              L.H = a;
            }
          },
          useRef: function () {
            return (k = "useRef"), v(), W(), at().memoizedState;
          },
          useState: function () {
            (k = "useState"), v(), W();
            var e = L.H;
            L.H = fn;
            try {
              return Ni(oa);
            } finally {
              L.H = e;
            }
          },
          useDebugValue: function () {
            (k = "useDebugValue"), v(), W();
          },
          useDeferredValue: function (e, t) {
            return (k = "useDeferredValue"), v(), W(), mg(e, t);
          },
          useTransition: function () {
            return (k = "useTransition"), v(), W(), bg();
          },
          useSyncExternalStore: function (e, t, n) {
            return (k = "useSyncExternalStore"), v(), W(), Ss(e, t, n);
          },
          useId: function () {
            return (k = "useId"), v(), W(), at().memoizedState;
          },
          useCacheRefresh: function () {
            return (k = "useCacheRefresh"), W(), at().memoizedState;
          },
          useMemoCache: function (e) {
            return v(), hr(e);
          },
        }),
        (Po.useHostTransitionStatus = yr),
        (Po.useFormState = function (e) {
          return (k = "useFormState"), v(), W(), Ts(e);
        }),
        (Po.useActionState = function (e) {
          return (k = "useActionState"), v(), W(), Ts(e);
        }),
        (Po.useOptimistic = function (e, t) {
          return (k = "useOptimistic"), v(), W(), og(e, t);
        });
      var $0 = {},
        G0 = new Set(),
        X0 = new Set(),
        Q0 = new Set(),
        F0 = new Set(),
        I0 = new Set(),
        Z0 = new Set(),
        W0 = new Set(),
        K0 = new Set(),
        J0 = new Set(),
        eS = new Set();
      Object.freeze($0);
      var nh = {
          isMounted: function (e) {
            var t = Wt;
            if (t !== null && qn && t.tag === 1) {
              var n = t.stateNode;
              n._warnedAboutRefsInRender ||
                console.error(
                  "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
                  X(t) || "A component"
                ),
                (n._warnedAboutRefsInRender = !0);
            }
            return (e = e._reactInternals) ? et(e) === e : !1;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var a = Cn(e),
              r = Oo(a);
            (r.payload = t),
              n != null && (hd(n), (r.callback = n)),
              (t = Do(e, r, a)),
              t !== null && (vt(t, e, a), zi(t, e, a)),
              je(e, a);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var a = Cn(e),
              r = Oo(a);
            (r.tag = cS),
              (r.payload = t),
              n != null && (hd(n), (r.callback = n)),
              (t = Do(e, r, a)),
              t !== null && (vt(t, e, a), zi(t, e, a)),
              je(e, a);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Cn(e),
              a = Oo(n);
            (a.tag = fS),
              t != null && (hd(t), (a.callback = t)),
              (t = Do(e, a, n)),
              t !== null && (vt(t, e, n), zi(t, e, n)),
              le !== null &&
                typeof le.markForceUpdateScheduled == "function" &&
                le.markForceUpdateScheduled(e, n);
          },
        },
        bc =
          typeof reportError == "function"
            ? reportError
            : function (e) {
                if (
                  typeof window == "object" &&
                  typeof window.ErrorEvent == "function"
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      typeof e == "object" &&
                      e !== null &&
                      typeof e.message == "string"
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  typeof process == "object" &&
                  typeof process.emit == "function"
                ) {
                  process.emit("uncaughtException", e);
                  return;
                }
                console.error(e);
              },
        Yl = null,
        ah = null,
        tS = Error(
          "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
        ),
        Bt = !1,
        nS = {},
        aS = {},
        oS = {},
        rS = {},
        ql = !1,
        lS = {},
        oh = {},
        rh = { dehydrated: null, treeContext: null, retryLane: 0 },
        iS = !1,
        lh = q(null),
        ih = q(null),
        uS = {},
        Sc = null,
        Pl = null,
        $l = !1,
        sS = 0,
        cS = 1,
        fS = 2,
        uh = 3,
        $o = !1,
        dS = !1,
        sh = null,
        ch = !1,
        mS = null;
      mS = new Set();
      var uo = !1,
        Et = !1,
        fh = !1,
        hS = typeof WeakSet == "function" ? WeakSet : Set,
        Vt = null,
        Gl = null,
        Xl = null,
        pS = !1,
        Mt = null,
        Dn = !1,
        sa = null,
        bu = 8192,
        yS = !1;
      try {
        var gS = Object.preventExtensions({});
      } catch {
        yS = !0;
      }
      var Gw = {
        getCacheForType: function (e) {
          var t = yt(jt),
            n = t.data.get(e);
          return n === void 0 && ((n = e()), t.data.set(e, n)), n;
        },
        getOwner: function () {
          return Wt;
        },
      };
      if (typeof Symbol == "function" && Symbol.for) {
        var Su = Symbol.for;
        Su("selector.component"),
          Su("selector.has_pseudo_class"),
          Su("selector.role"),
          Su("selector.test_id"),
          Su("selector.text");
      }
      var Xw = [],
        Qw = typeof WeakMap == "function" ? WeakMap : Map,
        Nn = 0,
        dn = 2,
        so = 4,
        co = 0,
        Eu = 1,
        Ql = 2,
        dh = 3,
        jr = 4,
        vS = 5,
        Ec = 6,
        mt = Nn,
        ut = null,
        Pe = null,
        Xe = 0,
        Sn = 0,
        Tu = 1,
        Hr = 2,
        Ru = 3,
        bS = 4,
        mh = 5,
        Fl = 6,
        xu = 7,
        hh = 8,
        st = Sn,
        Mn = null,
        fo = !1,
        Il = !1,
        ph = !1,
        Ua = 0,
        Tt = co,
        Go = 0,
        Xo = 0,
        yh = 0,
        Un = 0,
        kr = 0,
        wu = null,
        ca = null,
        Tc = !1,
        gh = 0,
        SS = 300,
        Rc = 1 / 0,
        ES = 500,
        Au = null,
        Qo = null,
        xc = !1,
        Lr = null,
        Cu = 0,
        vh = 0,
        bh = null,
        Fw = 50,
        Ou = 0,
        Sh = null,
        Eh = !1,
        wc = !1,
        Iw = 50,
        Br = 0,
        Du = null,
        Zl = !1,
        TS = 0,
        Zw = 1,
        Ww = 2,
        Ac = null,
        RS = !1,
        xS = new Set(),
        Kw = {},
        Cc = null,
        Wl = null,
        Th = !1,
        Rh = !1,
        Oc = !1,
        xh = !1,
        Vr = 0,
        wh = {};
      (function () {
        for (var e = 0; e < b0.length; e++) {
          var t = b0[e],
            n = t.toLowerCase();
          (t = t[0].toUpperCase() + t.slice(1)), aa(n, "on" + t);
        }
        aa(h0, "onAnimationEnd"),
          aa(p0, "onAnimationIteration"),
          aa(y0, "onAnimationStart"),
          aa("dblclick", "onDoubleClick"),
          aa("focusin", "onFocus"),
          aa("focusout", "onBlur"),
          aa(_w, "onTransitionRun"),
          aa(zw, "onTransitionStart"),
          aa(jw, "onTransitionCancel"),
          aa(g0, "onTransitionEnd");
      })(),
        Pa("onMouseEnter", ["mouseout", "mouseover"]),
        Pa("onMouseLeave", ["mouseout", "mouseover"]),
        Pa("onPointerEnter", ["pointerout", "pointerover"]),
        Pa("onPointerLeave", ["pointerout", "pointerover"]),
        pa(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " "
          )
        ),
        pa(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        ),
        pa("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste",
        ]),
        pa(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" ")
        ),
        pa(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(
            " "
          )
        ),
        pa(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(
            " "
          )
        );
      var Nu =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
        Ah = new Set(
          "beforetoggle cancel close invalid load scroll scrollend toggle"
            .split(" ")
            .concat(Nu)
        ),
        Dc = "_reactListening" + Math.random().toString(36).slice(2),
        wS = !1,
        AS = !1,
        Nc = !1,
        CS = !1,
        Mc = !1,
        Uc = !1,
        OS = !1,
        _c = {},
        Jw = /\r\n?/g,
        eA = /\u0000|\uFFFD/g,
        Yr = "http://www.w3.org/1999/xlink",
        Ch = "http://www.w3.org/XML/1998/namespace",
        tA = "javascript:throw new Error('React form unexpectedly submitted.')",
        nA = "suppressHydrationWarning",
        zc = "$",
        jc = "/$",
        qr = "$?",
        Pr = "$!",
        Oh = "F!",
        DS = "F",
        aA = "style",
        mo = 0,
        Kl = 1,
        Hc = 2,
        Dh = null,
        Nh = null,
        NS = { dialog: !0, webview: !0 },
        Mh = null,
        MS = typeof setTimeout == "function" ? setTimeout : void 0,
        oA = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Uh = -1,
        US = typeof Promise == "function" ? Promise : void 0,
        rA =
          typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof US < "u"
            ? function (e) {
                return US.resolve(null).then(e).catch(WR);
              }
            : MS,
        $r = 0,
        Mu = 1,
        _S = 2,
        zS = 3,
        Kn = 4,
        Jn = new Map(),
        jS = new Set(),
        ho = dt.d;
      dt.d = {
        f: function () {
          var e = ho.f(),
            t = dl();
          return e || t;
        },
        r: function (e) {
          var t = ha(e);
          t !== null && t.tag === 5 && t.type === "form" ? gg(t) : ho.r(e);
        },
        D: function (e) {
          ho.D(e), rb("dns-prefetch", e, null);
        },
        C: function (e, t) {
          ho.C(e, t), rb("preconnect", e, t);
        },
        L: function (e, t, n) {
          ho.L(e, t, n);
          var a = Jl;
          if (a && e && t) {
            var r = 'link[rel="preload"][as="' + re(t) + '"]';
            t === "image" && n && n.imageSrcSet
              ? ((r += '[imagesrcset="' + re(n.imageSrcSet) + '"]'),
                typeof n.imageSizes == "string" &&
                  (r += '[imagesizes="' + re(n.imageSizes) + '"]'))
              : (r += '[href="' + re(e) + '"]');
            var i = r;
            switch (t) {
              case "style":
                i = yl(e);
                break;
              case "script":
                i = gl(e);
            }
            Jn.has(i) ||
              ((e = qe(
                {
                  rel: "preload",
                  href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                  as: t,
                },
                n
              )),
              Jn.set(i, e),
              a.querySelector(r) !== null ||
                (t === "style" && a.querySelector($i(i))) ||
                (t === "script" && a.querySelector(Gi(i))) ||
                ((t = a.createElement("link")),
                $t(t, "link", e),
                wt(t),
                a.head.appendChild(t)));
          }
        },
        m: function (e, t) {
          ho.m(e, t);
          var n = Jl;
          if (n && e) {
            var a = t && typeof t.as == "string" ? t.as : "script",
              r =
                'link[rel="modulepreload"][as="' +
                re(a) +
                '"][href="' +
                re(e) +
                '"]',
              i = r;
            switch (a) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                i = gl(e);
            }
            if (
              !Jn.has(i) &&
              ((e = qe({ rel: "modulepreload", href: e }, t)),
              Jn.set(i, e),
              n.querySelector(r) === null)
            ) {
              switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  if (n.querySelector(Gi(i))) return;
              }
              (a = n.createElement("link")),
                $t(a, "link", e),
                wt(a),
                n.head.appendChild(a);
            }
          }
        },
        X: function (e, t) {
          ho.X(e, t);
          var n = Jl;
          if (n && e) {
            var a = qa(n).hoistableScripts,
              r = gl(e),
              i = a.get(r);
            i ||
              ((i = n.querySelector(Gi(r))),
              i ||
                ((e = qe({ src: e, async: !0 }, t)),
                (t = Jn.get(r)) && cm(e, t),
                (i = n.createElement("script")),
                wt(i),
                $t(i, "link", e),
                n.head.appendChild(i)),
              (i = { type: "script", instance: i, count: 1, state: null }),
              a.set(r, i));
          }
        },
        S: function (e, t, n) {
          ho.S(e, t, n);
          var a = Jl;
          if (a && e) {
            var r = qa(a).hoistableStyles,
              i = yl(e);
            t = t || "default";
            var f = r.get(i);
            if (!f) {
              var m = { loading: $r, preload: null };
              if ((f = a.querySelector($i(i)))) m.loading = Mu | Kn;
              else {
                (e = qe(
                  { rel: "stylesheet", href: e, "data-precedence": t },
                  n
                )),
                  (n = Jn.get(i)) && sm(e, n);
                var g = (f = a.createElement("link"));
                wt(g),
                  $t(g, "link", e),
                  (g._p = new Promise(function (b, U) {
                    (g.onload = b), (g.onerror = U);
                  })),
                  g.addEventListener("load", function () {
                    m.loading |= Mu;
                  }),
                  g.addEventListener("error", function () {
                    m.loading |= _S;
                  }),
                  (m.loading |= Kn),
                  $s(f, t, a);
              }
              (f = { type: "stylesheet", instance: f, count: 1, state: m }),
                r.set(i, f);
            }
          }
        },
        M: function (e, t) {
          ho.M(e, t);
          var n = Jl;
          if (n && e) {
            var a = qa(n).hoistableScripts,
              r = gl(e),
              i = a.get(r);
            i ||
              ((i = n.querySelector(Gi(r))),
              i ||
                ((e = qe({ src: e, async: !0, type: "module" }, t)),
                (t = Jn.get(r)) && cm(e, t),
                (i = n.createElement("script")),
                wt(i),
                $t(i, "link", e),
                n.head.appendChild(i)),
              (i = { type: "script", instance: i, count: 1, state: null }),
              a.set(r, i));
          }
        },
      };
      var Jl = typeof document > "u" ? null : document,
        kc = null,
        Uu = null,
        _h = null,
        Lc = null,
        Gr = Mx,
        _u = {
          $$typeof: Ra,
          Provider: null,
          Consumer: null,
          _currentValue: Gr,
          _currentValue2: Gr,
          _threadCount: 0,
        },
        HS = "%c%s%c ",
        kS =
          "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
        LS = "",
        Bc = " ",
        BS = Function.prototype.bind,
        VS = !1,
        YS = null,
        qS = null,
        PS = null,
        $S = null,
        GS = null,
        XS = null,
        QS = null,
        FS = null,
        IS = null;
      (YS = function (e, t, n, a) {
        (t = o(e, t)),
          t !== null &&
            ((n = l(t.memoizedState, n, 0, a)),
            (t.memoizedState = n),
            (t.baseState = n),
            (e.memoizedProps = qe({}, e.memoizedProps)),
            (n = Zt(e, 2)),
            n !== null && vt(n, e, 2));
      }),
        (qS = function (e, t, n) {
          (t = o(e, t)),
            t !== null &&
              ((n = c(t.memoizedState, n, 0)),
              (t.memoizedState = n),
              (t.baseState = n),
              (e.memoizedProps = qe({}, e.memoizedProps)),
              (n = Zt(e, 2)),
              n !== null && vt(n, e, 2));
        }),
        (PS = function (e, t, n, a) {
          (t = o(e, t)),
            t !== null &&
              ((n = u(t.memoizedState, n, a)),
              (t.memoizedState = n),
              (t.baseState = n),
              (e.memoizedProps = qe({}, e.memoizedProps)),
              (n = Zt(e, 2)),
              n !== null && vt(n, e, 2));
        }),
        ($S = function (e, t, n) {
          (e.pendingProps = l(e.memoizedProps, t, 0, n)),
            e.alternate && (e.alternate.pendingProps = e.pendingProps),
            (t = Zt(e, 2)),
            t !== null && vt(t, e, 2);
        }),
        (GS = function (e, t) {
          (e.pendingProps = c(e.memoizedProps, t, 0)),
            e.alternate && (e.alternate.pendingProps = e.pendingProps),
            (t = Zt(e, 2)),
            t !== null && vt(t, e, 2);
        }),
        (XS = function (e, t, n) {
          (e.pendingProps = u(e.memoizedProps, t, n)),
            e.alternate && (e.alternate.pendingProps = e.pendingProps),
            (t = Zt(e, 2)),
            t !== null && vt(t, e, 2);
        }),
        (QS = function (e) {
          var t = Zt(e, 2);
          t !== null && vt(t, e, 2);
        }),
        (FS = function (e) {
          h = e;
        }),
        (IS = function (e) {
          d = e;
        });
      var Vc = !0,
        Yc = null,
        zh = !1,
        Fo = null,
        Io = null,
        Zo = null,
        zu = new Map(),
        ju = new Map(),
        Wo = [],
        lA =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
            " "
          ),
        qc = null;
      if (
        ((Fs.prototype.render = ym.prototype.render =
          function (e, t) {
            var n = this._internalRoot;
            if (n === null) throw Error("Cannot update an unmounted root.");
            typeof t == "function"
              ? console.error(
                  "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
                )
              : M(t)
              ? console.error(
                  "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
                )
              : typeof t < "u" &&
                console.error(
                  "You passed a second argument to root.render(...) but it only accepts one argument."
                ),
              (t = n.current);
            var a = Cn(t);
            pb(t, a, e, n, null, null);
          }),
        (Fs.prototype.unmount = ym.prototype.unmount =
          function (e) {
            if (
              (typeof e == "function" &&
                console.error(
                  "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
                ),
              (e = this._internalRoot),
              e !== null)
            ) {
              this._internalRoot = null;
              var t = e.containerInfo;
              (mt & (dn | so)) !== Nn &&
                console.error(
                  "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
                ),
                hb(null, e, null, null),
                dl(),
                (t[Tr] = null);
            }
          }),
        (Fs.prototype.unstable_scheduleHydration = function (e) {
          if (e) {
            var t = tl();
            e = { blockedOn: null, target: e, priority: t };
            for (
              var n = 0;
              n < Wo.length && t !== 0 && t < Wo[n].priority;
              n++
            );
            Wo.splice(n, 0, e), n === 0 && Sb(e);
          }
        }),
        (function () {
          var e = gm.version;
          if (e !== "19.0.0")
            throw Error(
              `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` +
                (e +
                  `
  - react-dom:  19.0.0
Learn more: https://react.dev/warnings/version-mismatch`)
            );
        })(),
        (typeof Map == "function" &&
          Map.prototype != null &&
          typeof Map.prototype.forEach == "function" &&
          typeof Set == "function" &&
          Set.prototype != null &&
          typeof Set.prototype.clear == "function" &&
          typeof Set.prototype.forEach == "function") ||
          console.error(
            "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
          ),
        (dt.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (t === void 0)
            throw typeof e.render == "function"
              ? Error("Unable to find node on an unmounted component.")
              : ((e = Object.keys(e).join(",")),
                Error(
                  "Argument appears to not be a ReactComponent. Keys: " + e
                ));
          return (
            (e = Ce(t)),
            (e = e !== null ? Se(e) : null),
            (e = e === null ? null : e.stateNode),
            e
          );
        }),
        !(function () {
          var e = {
            bundleType: 1,
            version: "19.0.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: L,
            findFiberByHostInstance: ma,
            reconcilerVersion: "19.0.0",
          };
          return (
            (e.overrideHookState = YS),
            (e.overrideHookStateDeletePath = qS),
            (e.overrideHookStateRenamePath = PS),
            (e.overrideProps = $S),
            (e.overridePropsDeletePath = GS),
            (e.overridePropsRenamePath = XS),
            (e.scheduleUpdate = QS),
            (e.setErrorHandler = FS),
            (e.setSuspenseHandler = IS),
            (e.scheduleRefresh = D),
            (e.scheduleRoot = N),
            (e.setRefreshHandler = j),
            (e.getCurrentFiber = Sx),
            (e.getLaneLabelMap = Ex),
            (e.injectProfilingHooks = Jr),
            jn(e)
          );
        })() &&
          Oa &&
          window.top === window.self &&
          ((-1 < navigator.userAgent.indexOf("Chrome") &&
            navigator.userAgent.indexOf("Edge") === -1) ||
            -1 < navigator.userAgent.indexOf("Firefox")))
      ) {
        var ZS = window.location.protocol;
        /^(https?|file):$/.test(ZS) &&
          console.info(
            "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" +
              (ZS === "file:"
                ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`
                : ""),
            "font-weight:bold"
          );
      }
      (Hu.createRoot = function (e, t) {
        if (!M(e)) throw Error("Target container is not a DOM element.");
        Rb(e);
        var n = !1,
          a = "",
          r = wg,
          i = Ag,
          f = Cg,
          m = null;
        return (
          t != null &&
            (t.hydrate
              ? console.warn(
                  "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
                )
              : typeof t == "object" &&
                t !== null &&
                t.$$typeof === _o &&
                console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
            t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
            t.onUncaughtError !== void 0 && (r = t.onUncaughtError),
            t.onCaughtError !== void 0 && (i = t.onCaughtError),
            t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
            t.unstable_transitionCallbacks !== void 0 &&
              (m = t.unstable_transitionCallbacks)),
          (t = db(e, 1, !1, null, null, n, a, r, i, f, m, null)),
          (e[Tr] = t.current),
          em(e.nodeType === 8 ? e.parentNode : e),
          new ym(t)
        );
      }),
        (Hu.hydrateRoot = function (e, t, n) {
          if (!M(e)) throw Error("Target container is not a DOM element.");
          Rb(e),
            t === void 0 &&
              console.error(
                "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
              );
          var a = !1,
            r = "",
            i = wg,
            f = Ag,
            m = Cg,
            g = null,
            b = null;
          return (
            n != null &&
              (n.unstable_strictMode === !0 && (a = !0),
              n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
              n.onUncaughtError !== void 0 && (i = n.onUncaughtError),
              n.onCaughtError !== void 0 && (f = n.onCaughtError),
              n.onRecoverableError !== void 0 && (m = n.onRecoverableError),
              n.unstable_transitionCallbacks !== void 0 &&
                (g = n.unstable_transitionCallbacks),
              n.formState !== void 0 && (b = n.formState)),
            (t = db(e, 1, !0, t, n ?? null, a, r, i, f, m, g, b)),
            (t.context = mb(null)),
            (n = t.current),
            (a = Cn(n)),
            (r = Oo(a)),
            (r.callback = null),
            Do(n, r, a),
            (t.current.lanes = a),
            Tn(t, a),
            Ea(t),
            (e[Tr] = t.current),
            em(e),
            new Fs(t)
          );
        }),
        (Hu.version = "19.0.0"),
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
            "function" &&
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })(),
    Hu
  );
}
var l1;
function yA() {
  return l1 || ((l1 = 1), (kh.exports = pA())), kh.exports;
}
var gA = yA();
const vA =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEMElEQVR4AWIgFsjdSeKRu51kKXcL0Hs5QNeuRGG4ts1Uz7Zt287Js+238GzbtnVt26pt2+23e9O7ck8zdXvW+lczmT3b+89Uv0/bpn8F5vK8WiDP8o7ne7UM/XCRdRmvH8qiUGxgYKq29YZybcsNnaBHgU5kypD9nzM6DkeO2nBSpsMbJZdoW/UlKO1QG1Wig7OL0HFRUpbhNVLjkUTxBoYbRNlYgI56dL2alGmED8s4wgngNw53iYJxQhc6f0rKcMQNbpyaIfirHJoQ4ATZtc+E1EnSjmC3Wsm4ZOIVLdvwHBh9un6poubjCmzUYetC59RH0bGLbYSbQR5eLwP/mLP+PrV8izPvsP4U/ALmcH4zshXDmRhkF3A+whq9YT3I82bePQ5OQTAVLgjWcgyvhIIbXZ0zl5h7k4eWZfghE43s/pJJHHoJzEdPjWpEkbt+u/EsRwDCU6xRs3nu2AnMCNTSHUei+0Ui3jZgqsgoDelP+hGCvSwOtAh5mM75sJ/M+hhwOYfu4O+jlOAp3j/O+j7WN2DoTIkeo1Fa1o0eVkdS8m5xRT4F2WfQXW2xU8KZQyX99znTK5sZHPgQ/I/32dKcoEvRVN2gFVQgu0FGDZ13mw5575iyktvceP+e5Vwn6ztdpLGG0bmdphNlIJ8zufwtEKOgyYa0us1vws8YOZsR903KMLxZf2GVY+9TcWCuwmiNfIAQegZcSURShr1ACilNYi+Nd/uR/pN4pwvdgllkoczqkDhuTtDvrBud+mCGlGC13VeNzbuSskf2EcEhf3FKympOQcsQzLhM5UA7m9cl5d7kSbSJyBwPbgCPovQFonwZPCOGwOUYPRy56KTsG90tzoSg43LkFkpG1A6oS1DI3nQUpPPc2FdXdX/UIrcR+a9x6GqMxyfmGH2ckZShJ7C/VOHADHHgy2HzOCkF9WIQ1Ml6QHQQmjkNMq4JOBPHu0V2OnH2EynBvYpbTpcZ1TfIPAmuAafCeEdy7TqEv0fQgKfy7jrwLHL/SdYsDnXKebBKmM8mc8KGd1ArFDEyNgJb2du1v6Zx6Q5XvmLeNGaQ1Bf6DUpkHZ2tu5rM54ljuwsHyC1K+miI0S4hgEP4DNO5EI6NQCnKbgTXCJ2Cn8A8sAqsA6vN9ffgCZSdQlZCxRkcCReS6dOhnoC/kffr/xjpqjSBzmF+ZptQuiIpXX9Ias9EeMv8K2TbsXntzjchxmW8Lh3oWovx7zBUpYh+Hk6GO19ILpIOn4QLSS22zlNdyV6dhCvZizSwp+qfkHBptglzgLJwBwgblM/l6ixOTMC1/HsCjBnuPyaSiVfGpSdgTEn7kJHb9kS6foE5He2jMNwuX0RpOCKn5qP8QTARQrco+1eIRcULFt4oEZIRAjNHbXx+KPPHmUOF4YBcx2eC5WAZmAE+EW6HUw4xGW5Yv17BYLpO80pWbgAAAABJRU5ErkJggg==";
var ku = {},
  i1;
function bA() {
  if (i1) return ku;
  (i1 = 1),
    Object.defineProperty(ku, "__esModule", { value: !0 }),
    (ku.parse = h),
    (ku.serialize = S);
  const o = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    l = /^[\u0021-\u003A\u003C-\u007E]*$/,
    u =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    s = /^[\u0020-\u003A\u003D-\u007E]*$/,
    c = Object.prototype.toString,
    d = (() => {
      const E = function () {};
      return (E.prototype = Object.create(null)), E;
    })();
  function h(E, N) {
    const D = new d(),
      j = E.length;
    if (j < 2) return D;
    const M = N?.decode || R;
    let z = 0;
    do {
      const H = E.indexOf("=", z);
      if (H === -1) break;
      const ae = E.indexOf(";", z),
        X = ae === -1 ? j : ae;
      if (H > X) {
        z = E.lastIndexOf(";", H - 1) + 1;
        continue;
      }
      const ye = y(E, z, H),
        Te = v(E, H, ye),
        I = E.slice(ye, Te);
      if (D[I] === void 0) {
        let de = y(E, H + 1, X),
          ue = v(E, X, de);
        const Oe = M(E.slice(de, ue));
        D[I] = Oe;
      }
      z = X + 1;
    } while (z < j);
    return D;
  }
  function y(E, N, D) {
    do {
      const j = E.charCodeAt(N);
      if (j !== 32 && j !== 9) return N;
    } while (++N < D);
    return D;
  }
  function v(E, N, D) {
    for (; N > D; ) {
      const j = E.charCodeAt(--N);
      if (j !== 32 && j !== 9) return N + 1;
    }
    return D;
  }
  function S(E, N, D) {
    const j = D?.encode || encodeURIComponent;
    if (!o.test(E)) throw new TypeError(`argument name is invalid: ${E}`);
    const M = j(N);
    if (!l.test(M)) throw new TypeError(`argument val is invalid: ${N}`);
    let z = E + "=" + M;
    if (!D) return z;
    if (D.maxAge !== void 0) {
      if (!Number.isInteger(D.maxAge))
        throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);
      z += "; Max-Age=" + D.maxAge;
    }
    if (D.domain) {
      if (!u.test(D.domain))
        throw new TypeError(`option domain is invalid: ${D.domain}`);
      z += "; Domain=" + D.domain;
    }
    if (D.path) {
      if (!s.test(D.path))
        throw new TypeError(`option path is invalid: ${D.path}`);
      z += "; Path=" + D.path;
    }
    if (D.expires) {
      if (!T(D.expires) || !Number.isFinite(D.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${D.expires}`);
      z += "; Expires=" + D.expires.toUTCString();
    }
    if (
      (D.httpOnly && (z += "; HttpOnly"),
      D.secure && (z += "; Secure"),
      D.partitioned && (z += "; Partitioned"),
      D.priority)
    )
      switch (
        typeof D.priority == "string" ? D.priority.toLowerCase() : void 0
      ) {
        case "low":
          z += "; Priority=Low";
          break;
        case "medium":
          z += "; Priority=Medium";
          break;
        case "high":
          z += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${D.priority}`);
      }
    if (D.sameSite)
      switch (
        typeof D.sameSite == "string" ? D.sameSite.toLowerCase() : D.sameSite
      ) {
        case !0:
        case "strict":
          z += "; SameSite=Strict";
          break;
        case "lax":
          z += "; SameSite=Lax";
          break;
        case "none":
          z += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${D.sameSite}`);
      }
    return z;
  }
  function R(E) {
    if (E.indexOf("%") === -1) return E;
    try {
      return decodeURIComponent(E);
    } catch {
      return E;
    }
  }
  function T(E) {
    return c.call(E) === "[object Date]";
  }
  return ku;
}
bA();
/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var u1 = "popstate";
function SA(o = {}) {
  function l(s, c) {
    let { pathname: d, search: h, hash: y } = s.location;
    return up(
      "",
      { pathname: d, search: h, hash: y },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || "default"
    );
  }
  function u(s, c) {
    return typeof c == "string" ? c : $u(c);
  }
  return TA(l, u, null, o);
}
function bt(o, l) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(l);
}
function La(o, l) {
  if (!o) {
    typeof console < "u" && console.warn(l);
    try {
      throw new Error(l);
    } catch {}
  }
}
function EA() {
  return Math.random().toString(36).substring(2, 10);
}
function s1(o, l) {
  return { usr: o.state, key: o.key, idx: l };
}
function up(o, l, u = null, s) {
  return {
    pathname: typeof o == "string" ? o : o.pathname,
    search: "",
    hash: "",
    ...(typeof l == "string" ? ri(l) : l),
    state: u,
    key: (l && l.key) || s || EA(),
  };
}
function $u({ pathname: o = "/", search: l = "", hash: u = "" }) {
  return (
    l && l !== "?" && (o += l.charAt(0) === "?" ? l : "?" + l),
    u && u !== "#" && (o += u.charAt(0) === "#" ? u : "#" + u),
    o
  );
}
function ri(o) {
  let l = {};
  if (o) {
    let u = o.indexOf("#");
    u >= 0 && ((l.hash = o.substring(u)), (o = o.substring(0, u)));
    let s = o.indexOf("?");
    s >= 0 && ((l.search = o.substring(s)), (o = o.substring(0, s))),
      o && (l.pathname = o);
  }
  return l;
}
function TA(o, l, u, s = {}) {
  let { window: c = document.defaultView, v5Compat: d = !1 } = s,
    h = c.history,
    y = "POP",
    v = null,
    S = R();
  S == null && ((S = 0), h.replaceState({ ...h.state, idx: S }, ""));
  function R() {
    return (h.state || { idx: null }).idx;
  }
  function T() {
    y = "POP";
    let M = R(),
      z = M == null ? null : M - S;
    (S = M), v && v({ action: y, location: j.location, delta: z });
  }
  function E(M, z) {
    y = "PUSH";
    let H = up(j.location, M, z);
    S = R() + 1;
    let ae = s1(H, S),
      X = j.createHref(H);
    try {
      h.pushState(ae, "", X);
    } catch (ye) {
      if (ye instanceof DOMException && ye.name === "DataCloneError") throw ye;
      c.location.assign(X);
    }
    d && v && v({ action: y, location: j.location, delta: 1 });
  }
  function N(M, z) {
    y = "REPLACE";
    let H = up(j.location, M, z);
    S = R();
    let ae = s1(H, S),
      X = j.createHref(H);
    h.replaceState(ae, "", X),
      d && v && v({ action: y, location: j.location, delta: 0 });
  }
  function D(M) {
    let z = c.location.origin !== "null" ? c.location.origin : c.location.href,
      H = typeof M == "string" ? M : $u(M);
    return (
      (H = H.replace(/ $/, "%20")),
      bt(
        z,
        `No window.location.(origin|href) available to create URL for href: ${H}`
      ),
      new URL(H, z)
    );
  }
  let j = {
    get action() {
      return y;
    },
    get location() {
      return o(c, h);
    },
    listen(M) {
      if (v) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(u1, T),
        (v = M),
        () => {
          c.removeEventListener(u1, T), (v = null);
        }
      );
    },
    createHref(M) {
      return l(c, M);
    },
    createURL: D,
    encodeLocation(M) {
      let z = D(M);
      return { pathname: z.pathname, search: z.search, hash: z.hash };
    },
    push: E,
    replace: N,
    go(M) {
      return h.go(M);
    },
  };
  return j;
}
function SE(o, l, u = "/") {
  return RA(o, l, u, !1);
}
function RA(o, l, u, s) {
  let c = typeof l == "string" ? ri(l) : l,
    d = Jo(c.pathname || "/", u);
  if (d == null) return null;
  let h = EE(o);
  xA(h);
  let y = null;
  for (let v = 0; y == null && v < h.length; ++v) {
    let S = jA(d);
    y = _A(h[v], S, s);
  }
  return y;
}
function EE(o, l = [], u = [], s = "") {
  let c = (d, h, y) => {
    let v = {
      relativePath: y === void 0 ? d.path || "" : y,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: h,
      route: d,
    };
    v.relativePath.startsWith("/") &&
      (bt(
        v.relativePath.startsWith(s),
        `Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (v.relativePath = v.relativePath.slice(s.length)));
    let S = yo([s, v.relativePath]),
      R = u.concat(v);
    d.children &&
      d.children.length > 0 &&
      (bt(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${S}".`
      ),
      EE(d.children, l, R, S)),
      !(d.path == null && !d.index) &&
        l.push({ path: S, score: MA(S, d.index), routesMeta: R });
  };
  return (
    o.forEach((d, h) => {
      if (d.path === "" || !d.path?.includes("?")) c(d, h);
      else for (let y of TE(d.path)) c(d, h, y);
    }),
    l
  );
}
function TE(o) {
  let l = o.split("/");
  if (l.length === 0) return [];
  let [u, ...s] = l,
    c = u.endsWith("?"),
    d = u.replace(/\?$/, "");
  if (s.length === 0) return c ? [d, ""] : [d];
  let h = TE(s.join("/")),
    y = [];
  return (
    y.push(...h.map((v) => (v === "" ? d : [d, v].join("/")))),
    c && y.push(...h),
    y.map((v) => (o.startsWith("/") && v === "" ? "/" : v))
  );
}
function xA(o) {
  o.sort((l, u) =>
    l.score !== u.score
      ? u.score - l.score
      : UA(
          l.routesMeta.map((s) => s.childrenIndex),
          u.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
var wA = /^:[\w-]+$/,
  AA = 3,
  CA = 2,
  OA = 1,
  DA = 10,
  NA = -2,
  c1 = (o) => o === "*";
function MA(o, l) {
  let u = o.split("/"),
    s = u.length;
  return (
    u.some(c1) && (s += NA),
    l && (s += CA),
    u
      .filter((c) => !c1(c))
      .reduce((c, d) => c + (wA.test(d) ? AA : d === "" ? OA : DA), s)
  );
}
function UA(o, l) {
  return o.length === l.length && o.slice(0, -1).every((s, c) => s === l[c])
    ? o[o.length - 1] - l[l.length - 1]
    : 0;
}
function _A(o, l, u = !1) {
  let { routesMeta: s } = o,
    c = {},
    d = "/",
    h = [];
  for (let y = 0; y < s.length; ++y) {
    let v = s[y],
      S = y === s.length - 1,
      R = d === "/" ? l : l.slice(d.length) || "/",
      T = ef(
        { path: v.relativePath, caseSensitive: v.caseSensitive, end: S },
        R
      ),
      E = v.route;
    if (
      (!T &&
        S &&
        u &&
        !s[s.length - 1].route.index &&
        (T = ef(
          { path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 },
          R
        )),
      !T)
    )
      return null;
    Object.assign(c, T.params),
      h.push({
        params: c,
        pathname: yo([d, T.pathname]),
        pathnameBase: BA(yo([d, T.pathnameBase])),
        route: E,
      }),
      T.pathnameBase !== "/" && (d = yo([d, T.pathnameBase]));
  }
  return h;
}
function ef(o, l) {
  typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
  let [u, s] = zA(o.path, o.caseSensitive, o.end),
    c = l.match(u);
  if (!c) return null;
  let d = c[0],
    h = d.replace(/(.)\/+$/, "$1"),
    y = c.slice(1);
  return {
    params: s.reduce((S, { paramName: R, isOptional: T }, E) => {
      if (R === "*") {
        let D = y[E] || "";
        h = d.slice(0, d.length - D.length).replace(/(.)\/+$/, "$1");
      }
      const N = y[E];
      return (
        T && !N ? (S[R] = void 0) : (S[R] = (N || "").replace(/%2F/g, "/")), S
      );
    }, {}),
    pathname: d,
    pathnameBase: h,
    pattern: o,
  };
}
function zA(o, l = !1, u = !0) {
  La(
    o === "*" || !o.endsWith("*") || o.endsWith("/*"),
    `Route path "${o}" will be treated as if it were "${o.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let s = [],
    c =
      "^" +
      o
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, y, v) => (
            s.push({ paramName: y, isOptional: v != null }),
            v ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    o.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (c += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : u
      ? (c += "\\/*$")
      : o !== "" && o !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, l ? void 0 : "i"), s]
  );
}
function jA(o) {
  try {
    return o
      .split("/")
      .map((l) => decodeURIComponent(l).replace(/\//g, "%2F"))
      .join("/");
  } catch (l) {
    return (
      La(
        !1,
        `The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`
      ),
      o
    );
  }
}
function Jo(o, l) {
  if (l === "/") return o;
  if (!o.toLowerCase().startsWith(l.toLowerCase())) return null;
  let u = l.endsWith("/") ? l.length - 1 : l.length,
    s = o.charAt(u);
  return s && s !== "/" ? null : o.slice(u) || "/";
}
function HA(o, l = "/") {
  let {
    pathname: u,
    search: s = "",
    hash: c = "",
  } = typeof o == "string" ? ri(o) : o;
  return {
    pathname: u ? (u.startsWith("/") ? u : kA(u, l)) : l,
    search: VA(s),
    hash: YA(c),
  };
}
function kA(o, l) {
  let u = l.replace(/\/+$/, "").split("/");
  return (
    o.split("/").forEach((c) => {
      c === ".." ? u.length > 1 && u.pop() : c !== "." && u.push(c);
    }),
    u.length > 1 ? u.join("/") : "/"
  );
}
function Yh(o, l, u, s) {
  return `Cannot include a '${o}' character in a manually specified \`to.${l}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function LA(o) {
  return o.filter(
    (l, u) => u === 0 || (l.route.path && l.route.path.length > 0)
  );
}
function RE(o) {
  let l = LA(o);
  return l.map((u, s) => (s === l.length - 1 ? u.pathname : u.pathnameBase));
}
function xE(o, l, u, s = !1) {
  let c;
  typeof o == "string"
    ? (c = ri(o))
    : ((c = { ...o }),
      bt(
        !c.pathname || !c.pathname.includes("?"),
        Yh("?", "pathname", "search", c)
      ),
      bt(
        !c.pathname || !c.pathname.includes("#"),
        Yh("#", "pathname", "hash", c)
      ),
      bt(!c.search || !c.search.includes("#"), Yh("#", "search", "hash", c)));
  let d = o === "" || c.pathname === "",
    h = d ? "/" : c.pathname,
    y;
  if (h == null) y = u;
  else {
    let T = l.length - 1;
    if (!s && h.startsWith("..")) {
      let E = h.split("/");
      for (; E[0] === ".."; ) E.shift(), (T -= 1);
      c.pathname = E.join("/");
    }
    y = T >= 0 ? l[T] : "/";
  }
  let v = HA(c, y),
    S = h && h !== "/" && h.endsWith("/"),
    R = (d || h === ".") && u.endsWith("/");
  return !v.pathname.endsWith("/") && (S || R) && (v.pathname += "/"), v;
}
var yo = (o) => o.join("/").replace(/\/\/+/g, "/"),
  BA = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"),
  VA = (o) => (!o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o),
  YA = (o) => (!o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o);
function qA(o) {
  return (
    o != null &&
    typeof o.status == "number" &&
    typeof o.statusText == "string" &&
    typeof o.internal == "boolean" &&
    "data" in o
  );
}
var wE = ["POST", "PUT", "PATCH", "DELETE"];
new Set(wE);
var PA = ["GET", ...wE];
new Set(PA);
var li = P.createContext(null);
li.displayName = "DataRouter";
var cf = P.createContext(null);
cf.displayName = "DataRouterState";
var AE = P.createContext({ isTransitioning: !1 });
AE.displayName = "ViewTransition";
var $A = P.createContext(new Map());
$A.displayName = "Fetchers";
var GA = P.createContext(null);
GA.displayName = "Await";
var Ba = P.createContext(null);
Ba.displayName = "Navigation";
var Fu = P.createContext(null);
Fu.displayName = "Location";
var Va = P.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Va.displayName = "Route";
var jp = P.createContext(null);
jp.displayName = "RouteError";
function XA(o, { relative: l } = {}) {
  bt(
    Iu(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: u, navigator: s } = P.useContext(Ba),
    { hash: c, pathname: d, search: h } = Zu(o, { relative: l }),
    y = d;
  return (
    u !== "/" && (y = d === "/" ? u : yo([u, d])),
    s.createHref({ pathname: y, search: h, hash: c })
  );
}
function Iu() {
  return P.useContext(Fu) != null;
}
function ar() {
  return (
    bt(
      Iu(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    P.useContext(Fu).location
  );
}
var CE =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function OE(o) {
  P.useContext(Ba).static || P.useLayoutEffect(o);
}
function QA() {
  let { isDataRoute: o } = P.useContext(Va);
  return o ? lC() : FA();
}
function FA() {
  bt(
    Iu(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let o = P.useContext(li),
    { basename: l, navigator: u } = P.useContext(Ba),
    { matches: s } = P.useContext(Va),
    { pathname: c } = ar(),
    d = JSON.stringify(RE(s)),
    h = P.useRef(!1);
  return (
    OE(() => {
      h.current = !0;
    }),
    P.useCallback(
      (v, S = {}) => {
        if ((La(h.current, CE), !h.current)) return;
        if (typeof v == "number") {
          u.go(v);
          return;
        }
        let R = xE(v, JSON.parse(d), c, S.relative === "path");
        o == null &&
          l !== "/" &&
          (R.pathname = R.pathname === "/" ? l : yo([l, R.pathname])),
          (S.replace ? u.replace : u.push)(R, S.state, S);
      },
      [l, u, d, c, o]
    )
  );
}
P.createContext(null);
function DE() {
  let { matches: o } = P.useContext(Va),
    l = o[o.length - 1];
  return l ? l.params : {};
}
function Zu(o, { relative: l } = {}) {
  let { matches: u } = P.useContext(Va),
    { pathname: s } = ar(),
    c = JSON.stringify(RE(u));
  return P.useMemo(() => xE(o, JSON.parse(c), s, l === "path"), [o, c, s, l]);
}
function IA(o, l) {
  return NE(o, l);
}
function NE(o, l, u, s) {
  bt(
    Iu(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c, static: d } = P.useContext(Ba),
    { matches: h } = P.useContext(Va),
    y = h[h.length - 1],
    v = y ? y.params : {},
    S = y ? y.pathname : "/",
    R = y ? y.pathnameBase : "/",
    T = y && y.route;
  {
    let H = (T && T.path) || "";
    ME(
      S,
      !T || H.endsWith("*") || H.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${S}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${
        H === "/" ? "*" : `${H}/*`
      }">.`
    );
  }
  let E = ar(),
    N;
  if (l) {
    let H = typeof l == "string" ? ri(l) : l;
    bt(
      R === "/" || H.pathname?.startsWith(R),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${R}" but pathname "${H.pathname}" was given in the \`location\` prop.`
    ),
      (N = H);
  } else N = E;
  let D = N.pathname || "/",
    j = D;
  if (R !== "/") {
    let H = R.replace(/^\//, "").split("/");
    j = "/" + D.replace(/^\//, "").split("/").slice(H.length).join("/");
  }
  let M =
    !d && u && u.matches && u.matches.length > 0
      ? u.matches
      : SE(o, { pathname: j });
  La(
    T || M != null,
    `No routes matched location "${N.pathname}${N.search}${N.hash}" `
  ),
    La(
      M == null ||
        M[M.length - 1].route.element !== void 0 ||
        M[M.length - 1].route.Component !== void 0 ||
        M[M.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let z = eC(
    M &&
      M.map((H) =>
        Object.assign({}, H, {
          params: Object.assign({}, v, H.params),
          pathname: yo([
            R,
            c.encodeLocation
              ? c.encodeLocation(H.pathname).pathname
              : H.pathname,
          ]),
          pathnameBase:
            H.pathnameBase === "/"
              ? R
              : yo([
                  R,
                  c.encodeLocation
                    ? c.encodeLocation(H.pathnameBase).pathname
                    : H.pathnameBase,
                ]),
        })
      ),
    h,
    u,
    s
  );
  return l && z
    ? P.createElement(
        Fu.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...N,
            },
            navigationType: "POP",
          },
        },
        z
      )
    : z;
}
function ZA() {
  let o = rC(),
    l = qA(o)
      ? `${o.status} ${o.statusText}`
      : o instanceof Error
      ? o.message
      : JSON.stringify(o),
    u = o instanceof Error ? o.stack : null,
    s = "rgba(200,200,200, 0.5)",
    c = { padding: "0.5rem", backgroundColor: s },
    d = { padding: "2px 4px", backgroundColor: s },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", o),
    (h = P.createElement(
      P.Fragment,
      null,
      P.createElement("p", null, "💿 Hey developer 👋"),
      P.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        P.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        P.createElement("code", { style: d }, "errorElement"),
        " prop on your route."
      )
    )),
    P.createElement(
      P.Fragment,
      null,
      P.createElement("h2", null, "Unexpected Application Error!"),
      P.createElement("h3", { style: { fontStyle: "italic" } }, l),
      u ? P.createElement("pre", { style: c }, u) : null,
      h
    )
  );
}
var WA = P.createElement(ZA, null),
  KA = class extends P.Component {
    constructor(o) {
      super(o),
        (this.state = {
          location: o.location,
          revalidation: o.revalidation,
          error: o.error,
        });
    }
    static getDerivedStateFromError(o) {
      return { error: o };
    }
    static getDerivedStateFromProps(o, l) {
      return l.location !== o.location ||
        (l.revalidation !== "idle" && o.revalidation === "idle")
        ? { error: o.error, location: o.location, revalidation: o.revalidation }
        : {
            error: o.error !== void 0 ? o.error : l.error,
            location: l.location,
            revalidation: o.revalidation || l.revalidation,
          };
    }
    componentDidCatch(o, l) {
      console.error(
        "React Router caught the following error during render",
        o,
        l
      );
    }
    render() {
      return this.state.error !== void 0
        ? P.createElement(
            Va.Provider,
            { value: this.props.routeContext },
            P.createElement(jp.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function JA({ routeContext: o, match: l, children: u }) {
  let s = P.useContext(li);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (l.route.errorElement || l.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = l.route.id),
    P.createElement(Va.Provider, { value: o }, u)
  );
}
function eC(o, l = [], u = null, s = null) {
  if (o == null) {
    if (!u) return null;
    if (u.errors) o = u.matches;
    else if (l.length === 0 && !u.initialized && u.matches.length > 0)
      o = u.matches;
    else return null;
  }
  let c = o,
    d = u?.errors;
  if (d != null) {
    let v = c.findIndex((S) => S.route.id && d?.[S.route.id] !== void 0);
    bt(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        d
      ).join(",")}`
    ),
      (c = c.slice(0, Math.min(c.length, v + 1)));
  }
  let h = !1,
    y = -1;
  if (u)
    for (let v = 0; v < c.length; v++) {
      let S = c[v];
      if (
        ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (y = v),
        S.route.id)
      ) {
        let { loaderData: R, errors: T } = u,
          E =
            S.route.loader &&
            !R.hasOwnProperty(S.route.id) &&
            (!T || T[S.route.id] === void 0);
        if (S.route.lazy || E) {
          (h = !0), y >= 0 ? (c = c.slice(0, y + 1)) : (c = [c[0]]);
          break;
        }
      }
    }
  return c.reduceRight((v, S, R) => {
    let T,
      E = !1,
      N = null,
      D = null;
    u &&
      ((T = d && S.route.id ? d[S.route.id] : void 0),
      (N = S.route.errorElement || WA),
      h &&
        (y < 0 && R === 0
          ? (ME(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (E = !0),
            (D = null))
          : y === R &&
            ((E = !0), (D = S.route.hydrateFallbackElement || null))));
    let j = l.concat(c.slice(0, R + 1)),
      M = () => {
        let z;
        return (
          T
            ? (z = N)
            : E
            ? (z = D)
            : S.route.Component
            ? (z = P.createElement(S.route.Component, null))
            : S.route.element
            ? (z = S.route.element)
            : (z = v),
          P.createElement(JA, {
            match: S,
            routeContext: { outlet: v, matches: j, isDataRoute: u != null },
            children: z,
          })
        );
      };
    return u && (S.route.ErrorBoundary || S.route.errorElement || R === 0)
      ? P.createElement(KA, {
          location: u.location,
          revalidation: u.revalidation,
          component: N,
          error: T,
          children: M(),
          routeContext: { outlet: null, matches: j, isDataRoute: !0 },
        })
      : M();
  }, null);
}
function Hp(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function tC(o) {
  let l = P.useContext(li);
  return bt(l, Hp(o)), l;
}
function nC(o) {
  let l = P.useContext(cf);
  return bt(l, Hp(o)), l;
}
function aC(o) {
  let l = P.useContext(Va);
  return bt(l, Hp(o)), l;
}
function kp(o) {
  let l = aC(o),
    u = l.matches[l.matches.length - 1];
  return (
    bt(
      u.route.id,
      `${o} can only be used on routes that contain a unique "id"`
    ),
    u.route.id
  );
}
function oC() {
  return kp("useRouteId");
}
function rC() {
  let o = P.useContext(jp),
    l = nC("useRouteError"),
    u = kp("useRouteError");
  return o !== void 0 ? o : l.errors?.[u];
}
function lC() {
  let { router: o } = tC("useNavigate"),
    l = kp("useNavigate"),
    u = P.useRef(!1);
  return (
    OE(() => {
      u.current = !0;
    }),
    P.useCallback(
      async (c, d = {}) => {
        La(u.current, CE),
          u.current &&
            (typeof c == "number"
              ? o.navigate(c)
              : await o.navigate(c, { fromRouteId: l, ...d }));
      },
      [o, l]
    )
  );
}
var f1 = {};
function ME(o, l, u) {
  !l && !f1[o] && ((f1[o] = !0), La(!1, u));
}
P.memo(iC);
function iC({ routes: o, future: l, state: u }) {
  return NE(o, void 0, u, l);
}
function ei(o) {
  bt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function uC({
  basename: o = "/",
  children: l = null,
  location: u,
  navigationType: s = "POP",
  navigator: c,
  static: d = !1,
}) {
  bt(
    !Iu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = o.replace(/^\/*/, "/"),
    y = P.useMemo(
      () => ({ basename: h, navigator: c, static: d, future: {} }),
      [h, c, d]
    );
  typeof u == "string" && (u = ri(u));
  let {
      pathname: v = "/",
      search: S = "",
      hash: R = "",
      state: T = null,
      key: E = "default",
    } = u,
    N = P.useMemo(() => {
      let D = Jo(v, h);
      return D == null
        ? null
        : {
            location: { pathname: D, search: S, hash: R, state: T, key: E },
            navigationType: s,
          };
    }, [h, v, S, R, T, E, s]);
  return (
    La(
      N != null,
      `<Router basename="${h}"> is not able to match the URL "${v}${S}${R}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    N == null
      ? null
      : P.createElement(
          Ba.Provider,
          { value: y },
          P.createElement(Fu.Provider, { children: l, value: N })
        )
  );
}
function sC({ children: o, location: l }) {
  return IA(sp(o), l);
}
function sp(o, l = []) {
  let u = [];
  return (
    P.Children.forEach(o, (s, c) => {
      if (!P.isValidElement(s)) return;
      let d = [...l, c];
      if (s.type === P.Fragment) {
        u.push.apply(u, sp(s.props.children, d));
        return;
      }
      bt(
        s.type === ei,
        `[${
          typeof s.type == "string" ? s.type : s.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        bt(
          !s.props.index || !s.props.children,
          "An index route cannot have child routes."
        );
      let h = {
        id: s.props.id || d.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      s.props.children && (h.children = sp(s.props.children, d)), u.push(h);
    }),
    u
  );
}
var Qc = "get",
  Fc = "application/x-www-form-urlencoded";
function ff(o) {
  return o != null && typeof o.tagName == "string";
}
function cC(o) {
  return ff(o) && o.tagName.toLowerCase() === "button";
}
function fC(o) {
  return ff(o) && o.tagName.toLowerCase() === "form";
}
function dC(o) {
  return ff(o) && o.tagName.toLowerCase() === "input";
}
function mC(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function hC(o, l) {
  return o.button === 0 && (!l || l === "_self") && !mC(o);
}
var $c = null;
function pC() {
  if ($c === null)
    try {
      new FormData(document.createElement("form"), 0), ($c = !1);
    } catch {
      $c = !0;
    }
  return $c;
}
var yC = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function qh(o) {
  return o != null && !yC.has(o)
    ? (La(
        !1,
        `"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fc}"`
      ),
      null)
    : o;
}
function gC(o, l) {
  let u, s, c, d, h;
  if (fC(o)) {
    let y = o.getAttribute("action");
    (s = y ? Jo(y, l) : null),
      (u = o.getAttribute("method") || Qc),
      (c = qh(o.getAttribute("enctype")) || Fc),
      (d = new FormData(o));
  } else if (cC(o) || (dC(o) && (o.type === "submit" || o.type === "image"))) {
    let y = o.form;
    if (y == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let v = o.getAttribute("formaction") || y.getAttribute("action");
    if (
      ((s = v ? Jo(v, l) : null),
      (u = o.getAttribute("formmethod") || y.getAttribute("method") || Qc),
      (c =
        qh(o.getAttribute("formenctype")) ||
        qh(y.getAttribute("enctype")) ||
        Fc),
      (d = new FormData(y, o)),
      !pC())
    ) {
      let { name: S, type: R, value: T } = o;
      if (R === "image") {
        let E = S ? `${S}.` : "";
        d.append(`${E}x`, "0"), d.append(`${E}y`, "0");
      } else S && d.append(S, T);
    }
  } else {
    if (ff(o))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (u = Qc), (s = null), (c = Fc), (h = o);
  }
  return (
    d && c === "text/plain" && ((h = d), (d = void 0)),
    { action: s, method: u.toLowerCase(), encType: c, formData: d, body: h }
  );
}
function Lp(o, l) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(l);
}
async function vC(o, l) {
  if (o.id in l) return l[o.id];
  try {
    let u = await import(o.module);
    return (l[o.id] = u), u;
  } catch (u) {
    return (
      console.error(
        `Error loading route module \`${o.module}\`, reloading page...`
      ),
      console.error(u),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function bC(o) {
  return o == null
    ? !1
    : o.href == null
    ? o.rel === "preload" &&
      typeof o.imageSrcSet == "string" &&
      typeof o.imageSizes == "string"
    : typeof o.rel == "string" && typeof o.href == "string";
}
async function SC(o, l, u) {
  let s = await Promise.all(
    o.map(async (c) => {
      let d = l.routes[c.route.id];
      if (d) {
        let h = await vC(d, u);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return xC(
    s
      .flat(1)
      .filter(bC)
      .filter((c) => c.rel === "stylesheet" || c.rel === "preload")
      .map((c) =>
        c.rel === "stylesheet"
          ? { ...c, rel: "prefetch", as: "style" }
          : { ...c, rel: "prefetch" }
      )
  );
}
function d1(o, l, u, s, c, d) {
  let h = (v, S) => (u[S] ? v.route.id !== u[S].route.id : !0),
    y = (v, S) =>
      u[S].pathname !== v.pathname ||
      (u[S].route.path?.endsWith("*") && u[S].params["*"] !== v.params["*"]);
  return d === "assets"
    ? l.filter((v, S) => h(v, S) || y(v, S))
    : d === "data"
    ? l.filter((v, S) => {
        let R = s.routes[v.route.id];
        if (!R || !R.hasLoader) return !1;
        if (h(v, S) || y(v, S)) return !0;
        if (v.route.shouldRevalidate) {
          let T = v.route.shouldRevalidate({
            currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
            currentParams: u[0]?.params || {},
            nextUrl: new URL(o, window.origin),
            nextParams: v.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof T == "boolean") return T;
        }
        return !0;
      })
    : [];
}
function EC(o, l) {
  return TC(
    o
      .map((u) => {
        let s = l.routes[u.route.id];
        if (!s) return [];
        let c = [s.module];
        return s.imports && (c = c.concat(s.imports)), c;
      })
      .flat(1)
  );
}
function TC(o) {
  return [...new Set(o)];
}
function RC(o) {
  let l = {},
    u = Object.keys(o).sort();
  for (let s of u) l[s] = o[s];
  return l;
}
function xC(o, l) {
  let u = new Set();
  return (
    new Set(l),
    o.reduce((s, c) => {
      let d = JSON.stringify(RC(c));
      return u.has(d) || (u.add(d), s.push({ key: d, link: c })), s;
    }, [])
  );
}
function wC(o) {
  let l =
    typeof o == "string"
      ? new URL(
          o,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : o;
  return (
    l.pathname === "/"
      ? (l.pathname = "_root.data")
      : (l.pathname = `${l.pathname.replace(/\/$/, "")}.data`),
    l
  );
}
function AC() {
  let o = P.useContext(li);
  return (
    Lp(
      o,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    o
  );
}
function CC() {
  let o = P.useContext(cf);
  return (
    Lp(
      o,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    o
  );
}
var Bp = P.createContext(void 0);
Bp.displayName = "FrameworkContext";
function UE() {
  let o = P.useContext(Bp);
  return (
    Lp(o, "You must render this element inside a <HydratedRouter> element"), o
  );
}
function OC(o, l) {
  let u = P.useContext(Bp),
    [s, c] = P.useState(!1),
    [d, h] = P.useState(!1),
    {
      onFocus: y,
      onBlur: v,
      onMouseEnter: S,
      onMouseLeave: R,
      onTouchStart: T,
    } = l,
    E = P.useRef(null);
  P.useEffect(() => {
    if ((o === "render" && h(!0), o === "viewport")) {
      let j = (z) => {
          z.forEach((H) => {
            h(H.isIntersecting);
          });
        },
        M = new IntersectionObserver(j, { threshold: 0.5 });
      return (
        E.current && M.observe(E.current),
        () => {
          M.disconnect();
        }
      );
    }
  }, [o]),
    P.useEffect(() => {
      if (s) {
        let j = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(j);
        };
      }
    }, [s]);
  let N = () => {
      c(!0);
    },
    D = () => {
      c(!1), h(!1);
    };
  return u
    ? o !== "intent"
      ? [d, E, {}]
      : [
          d,
          E,
          {
            onFocus: Lu(y, N),
            onBlur: Lu(v, D),
            onMouseEnter: Lu(S, N),
            onMouseLeave: Lu(R, D),
            onTouchStart: Lu(T, N),
          },
        ]
    : [!1, E, {}];
}
function Lu(o, l) {
  return (u) => {
    o && o(u), u.defaultPrevented || l(u);
  };
}
function DC({ page: o, ...l }) {
  let { router: u } = AC(),
    s = P.useMemo(() => SE(u.routes, o, u.basename), [u.routes, o, u.basename]);
  return s ? P.createElement(MC, { page: o, matches: s, ...l }) : null;
}
function NC(o) {
  let { manifest: l, routeModules: u } = UE(),
    [s, c] = P.useState([]);
  return (
    P.useEffect(() => {
      let d = !1;
      return (
        SC(o, l, u).then((h) => {
          d || c(h);
        }),
        () => {
          d = !0;
        }
      );
    }, [o, l, u]),
    s
  );
}
function MC({ page: o, matches: l, ...u }) {
  let s = ar(),
    { manifest: c, routeModules: d } = UE(),
    { loaderData: h, matches: y } = CC(),
    v = P.useMemo(() => d1(o, l, y, c, s, "data"), [o, l, y, c, s]),
    S = P.useMemo(() => d1(o, l, y, c, s, "assets"), [o, l, y, c, s]),
    R = P.useMemo(() => {
      if (o === s.pathname + s.search + s.hash) return [];
      let N = new Set(),
        D = !1;
      if (
        (l.forEach((M) => {
          let z = c.routes[M.route.id];
          !z ||
            !z.hasLoader ||
            ((!v.some((H) => H.route.id === M.route.id) &&
              M.route.id in h &&
              d[M.route.id]?.shouldRevalidate) ||
            z.hasClientLoader
              ? (D = !0)
              : N.add(M.route.id));
        }),
        N.size === 0)
      )
        return [];
      let j = wC(o);
      return (
        D &&
          N.size > 0 &&
          j.searchParams.set(
            "_routes",
            l
              .filter((M) => N.has(M.route.id))
              .map((M) => M.route.id)
              .join(",")
          ),
        [j.pathname + j.search]
      );
    }, [h, s, c, v, l, o, d]),
    T = P.useMemo(() => EC(S, c), [S, c]),
    E = NC(S);
  return P.createElement(
    P.Fragment,
    null,
    R.map((N) =>
      P.createElement("link", {
        key: N,
        rel: "prefetch",
        as: "fetch",
        href: N,
        ...u,
      })
    ),
    T.map((N) =>
      P.createElement("link", { key: N, rel: "modulepreload", href: N, ...u })
    ),
    E.map(({ key: N, link: D }) => P.createElement("link", { key: N, ...D }))
  );
}
function UC(...o) {
  return (l) => {
    o.forEach((u) => {
      typeof u == "function" ? u(l) : u != null && (u.current = l);
    });
  };
}
var _E =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  _E && (window.__reactRouterVersion = "7.1.5");
} catch {}
function _C({ basename: o, children: l, window: u }) {
  let s = P.useRef();
  s.current == null && (s.current = SA({ window: u, v5Compat: !0 }));
  let c = s.current,
    [d, h] = P.useState({ action: c.action, location: c.location }),
    y = P.useCallback(
      (v) => {
        P.startTransition(() => h(v));
      },
      [h]
    );
  return (
    P.useLayoutEffect(() => c.listen(y), [c, y]),
    P.createElement(uC, {
      basename: o,
      children: l,
      location: d.location,
      navigationType: d.action,
      navigator: c,
    })
  );
}
var zE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  fa = P.forwardRef(function (
    {
      onClick: l,
      discover: u = "render",
      prefetch: s = "none",
      relative: c,
      reloadDocument: d,
      replace: h,
      state: y,
      target: v,
      to: S,
      preventScrollReset: R,
      viewTransition: T,
      ...E
    },
    N
  ) {
    let { basename: D } = P.useContext(Ba),
      j = typeof S == "string" && zE.test(S),
      M,
      z = !1;
    if (typeof S == "string" && j && ((M = S), _E))
      try {
        let ue = new URL(window.location.href),
          Oe = S.startsWith("//") ? new URL(ue.protocol + S) : new URL(S),
          $e = Jo(Oe.pathname, D);
        Oe.origin === ue.origin && $e != null
          ? (S = $e + Oe.search + Oe.hash)
          : (z = !0);
      } catch {
        La(
          !1,
          `<Link to="${S}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let H = XA(S, { relative: c }),
      [ae, X, ye] = OC(s, E),
      Te = kC(S, {
        replace: h,
        state: y,
        target: v,
        preventScrollReset: R,
        relative: c,
        viewTransition: T,
      });
    function I(ue) {
      l && l(ue), ue.defaultPrevented || Te(ue);
    }
    let de = P.createElement("a", {
      ...E,
      ...ye,
      href: M || H,
      onClick: z || d ? l : I,
      ref: UC(N, X),
      target: v,
      "data-discover": !j && u === "render" ? "true" : void 0,
    });
    return ae && !j
      ? P.createElement(P.Fragment, null, de, P.createElement(DC, { page: H }))
      : de;
  });
fa.displayName = "Link";
var zC = P.forwardRef(function (
  {
    "aria-current": l = "page",
    caseSensitive: u = !1,
    className: s = "",
    end: c = !1,
    style: d,
    to: h,
    viewTransition: y,
    children: v,
    ...S
  },
  R
) {
  let T = Zu(h, { relative: S.relative }),
    E = ar(),
    N = P.useContext(cf),
    { navigator: D, basename: j } = P.useContext(Ba),
    M = N != null && qC(T) && y === !0,
    z = D.encodeLocation ? D.encodeLocation(T).pathname : T.pathname,
    H = E.pathname,
    ae =
      N && N.navigation && N.navigation.location
        ? N.navigation.location.pathname
        : null;
  u ||
    ((H = H.toLowerCase()),
    (ae = ae ? ae.toLowerCase() : null),
    (z = z.toLowerCase())),
    ae && j && (ae = Jo(ae, j) || ae);
  const X = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
  let ye = H === z || (!c && H.startsWith(z) && H.charAt(X) === "/"),
    Te =
      ae != null &&
      (ae === z || (!c && ae.startsWith(z) && ae.charAt(z.length) === "/")),
    I = { isActive: ye, isPending: Te, isTransitioning: M },
    de = ye ? l : void 0,
    ue;
  typeof s == "function"
    ? (ue = s(I))
    : (ue = [
        s,
        ye ? "active" : null,
        Te ? "pending" : null,
        M ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Oe = typeof d == "function" ? d(I) : d;
  return P.createElement(
    fa,
    {
      ...S,
      "aria-current": de,
      className: ue,
      ref: R,
      style: Oe,
      to: h,
      viewTransition: y,
    },
    typeof v == "function" ? v(I) : v
  );
});
zC.displayName = "NavLink";
var jC = P.forwardRef(
  (
    {
      discover: o = "render",
      fetcherKey: l,
      navigate: u,
      reloadDocument: s,
      replace: c,
      state: d,
      method: h = Qc,
      action: y,
      onSubmit: v,
      relative: S,
      preventScrollReset: R,
      viewTransition: T,
      ...E
    },
    N
  ) => {
    let D = VC(),
      j = YC(y, { relative: S }),
      M = h.toLowerCase() === "get" ? "get" : "post",
      z = typeof y == "string" && zE.test(y),
      H = (ae) => {
        if ((v && v(ae), ae.defaultPrevented)) return;
        ae.preventDefault();
        let X = ae.nativeEvent.submitter,
          ye = X?.getAttribute("formmethod") || h;
        D(X || ae.currentTarget, {
          fetcherKey: l,
          method: ye,
          navigate: u,
          replace: c,
          state: d,
          relative: S,
          preventScrollReset: R,
          viewTransition: T,
        });
      };
    return P.createElement("form", {
      ref: N,
      method: M,
      action: j,
      onSubmit: s ? v : H,
      ...E,
      "data-discover": !z && o === "render" ? "true" : void 0,
    });
  }
);
jC.displayName = "Form";
function HC(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function jE(o) {
  let l = P.useContext(li);
  return bt(l, HC(o)), l;
}
function kC(
  o,
  {
    target: l,
    replace: u,
    state: s,
    preventScrollReset: c,
    relative: d,
    viewTransition: h,
  } = {}
) {
  let y = QA(),
    v = ar(),
    S = Zu(o, { relative: d });
  return P.useCallback(
    (R) => {
      if (hC(R, l)) {
        R.preventDefault();
        let T = u !== void 0 ? u : $u(v) === $u(S);
        y(o, {
          replace: T,
          state: s,
          preventScrollReset: c,
          relative: d,
          viewTransition: h,
        });
      }
    },
    [v, y, S, u, s, l, o, c, d, h]
  );
}
var LC = 0,
  BC = () => `__${String(++LC)}__`;
function VC() {
  let { router: o } = jE("useSubmit"),
    { basename: l } = P.useContext(Ba),
    u = oC();
  return P.useCallback(
    async (s, c = {}) => {
      let { action: d, method: h, encType: y, formData: v, body: S } = gC(s, l);
      if (c.navigate === !1) {
        let R = c.fetcherKey || BC();
        await o.fetch(R, u, c.action || d, {
          preventScrollReset: c.preventScrollReset,
          formData: v,
          body: S,
          formMethod: c.method || h,
          formEncType: c.encType || y,
          flushSync: c.flushSync,
        });
      } else
        await o.navigate(c.action || d, {
          preventScrollReset: c.preventScrollReset,
          formData: v,
          body: S,
          formMethod: c.method || h,
          formEncType: c.encType || y,
          replace: c.replace,
          state: c.state,
          fromRouteId: u,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [o, l, u]
  );
}
function YC(o, { relative: l } = {}) {
  let { basename: u } = P.useContext(Ba),
    s = P.useContext(Va);
  bt(s, "useFormAction must be used inside a RouteContext");
  let [c] = s.matches.slice(-1),
    d = { ...Zu(o || ".", { relative: l }) },
    h = ar();
  if (o == null) {
    d.search = h.search;
    let y = new URLSearchParams(d.search),
      v = y.getAll("index");
    if (v.some((R) => R === "")) {
      y.delete("index"),
        v.filter((T) => T).forEach((T) => y.append("index", T));
      let R = y.toString();
      d.search = R ? `?${R}` : "";
    }
  }
  return (
    (!o || o === ".") &&
      c.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    u !== "/" && (d.pathname = d.pathname === "/" ? u : yo([u, d.pathname])),
    $u(d)
  );
}
function qC(o, l = {}) {
  let u = P.useContext(AE);
  bt(
    u != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = jE("useViewTransitionState"),
    c = Zu(o, { relative: l.relative });
  if (!u.isTransitioning) return !1;
  let d = Jo(u.currentLocation.pathname, s) || u.currentLocation.pathname,
    h = Jo(u.nextLocation.pathname, s) || u.nextLocation.pathname;
  return ef(c.pathname, h) != null || ef(c.pathname, d) != null;
}
new TextEncoder();
const PC = () =>
  te.jsxDEV(
    "div",
    {
      className: "header",
      children: [
        te.jsxDEV(
          fa,
          {
            to: "/",
            children: te.jsxDEV(
              "img",
              { src: vA, alt: "Logo do Spotify" },
              void 0,
              !1,
              {
                fileName:
                  "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Header.jsx",
                lineNumber: 9,
                columnNumber: 9,
              },
              void 0
            ),
          },
          void 0,
          !1,
          {
            fileName:
              "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Header.jsx",
            lineNumber: 8,
            columnNumber: 7,
          },
          void 0
        ),
        te.jsxDEV(
          fa,
          {
            to: "/",
            className: "header__link",
            children: te.jsxDEV(
              "h1",
              { children: "Spotify" },
              void 0,
              !1,
              {
                fileName:
                  "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Header.jsx",
                lineNumber: 13,
                columnNumber: 9,
              },
              void 0
            ),
          },
          void 0,
          !1,
          {
            fileName:
              "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Header.jsx",
            lineNumber: 12,
            columnNumber: 7,
          },
          void 0
        ),
      ],
    },
    void 0,
    !0,
    {
      fileName:
        "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Header.jsx",
      lineNumber: 7,
      columnNumber: 5,
    },
    void 0
  );
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ function $C(o, l, u) {
  return (
    (l = XC(l)) in o
      ? Object.defineProperty(o, l, {
          value: u,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (o[l] = u),
    o
  );
}
function m1(o, l) {
  var u = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(o);
    l &&
      (s = s.filter(function (c) {
        return Object.getOwnPropertyDescriptor(o, c).enumerable;
      })),
      u.push.apply(u, s);
  }
  return u;
}
function K(o) {
  for (var l = 1; l < arguments.length; l++) {
    var u = arguments[l] != null ? arguments[l] : {};
    l % 2
      ? m1(Object(u), !0).forEach(function (s) {
          $C(o, s, u[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u))
      : m1(Object(u)).forEach(function (s) {
          Object.defineProperty(o, s, Object.getOwnPropertyDescriptor(u, s));
        });
  }
  return o;
}
function GC(o, l) {
  if (typeof o != "object" || !o) return o;
  var u = o[Symbol.toPrimitive];
  if (u !== void 0) {
    var s = u.call(o, l);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (l === "string" ? String : Number)(o);
}
function XC(o) {
  var l = GC(o, "string");
  return typeof l == "symbol" ? l : l + "";
}
const h1 = () => {};
let Vp = {},
  HE = {},
  kE = null,
  LE = { mark: h1, measure: h1 };
try {
  typeof window < "u" && (Vp = window),
    typeof document < "u" && (HE = document),
    typeof MutationObserver < "u" && (kE = MutationObserver),
    typeof performance < "u" && (LE = performance);
} catch {}
const { userAgent: p1 = "" } = Vp.navigator || {},
  er = Vp,
  pt = HE,
  y1 = kE,
  Gc = LE;
er.document;
const bo =
    !!pt.documentElement &&
    !!pt.head &&
    typeof pt.addEventListener == "function" &&
    typeof pt.createElement == "function",
  BE = ~p1.indexOf("MSIE") || ~p1.indexOf("Trident/");
var QC = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
  FC =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  VE = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fab: "brands",
      "fa-brands": "brands",
    },
    duotone: {
      fa: "solid",
      fad: "solid",
      "fa-solid": "solid",
      "fa-duotone": "solid",
      fadr: "regular",
      "fa-regular": "regular",
      fadl: "light",
      "fa-light": "light",
      fadt: "thin",
      "fa-thin": "thin",
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid",
      fasdr: "regular",
      "fa-regular": "regular",
      fasdl: "light",
      "fa-light": "light",
      fasdt: "thin",
      "fa-thin": "thin",
    },
  },
  IC = { GROUP: "duotone-group", PRIMARY: "primary", SECONDARY: "secondary" },
  YE = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"],
  an = "classic",
  df = "duotone",
  ZC = "sharp",
  WC = "sharp-duotone",
  qE = [an, df, ZC, WC],
  KC = {
    classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    duotone: { 900: "fad", 400: "fadr", 300: "fadl", 100: "fadt" },
    sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
    "sharp-duotone": { 900: "fasds", 400: "fasdr", 300: "fasdl", 100: "fasdt" },
  },
  JC = {
    "Font Awesome 6 Free": { 900: "fas", 400: "far" },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    },
    "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 6 Duotone": {
      900: "fad",
      400: "fadr",
      normal: "fadr",
      300: "fadl",
      100: "fadt",
    },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast",
    },
    "Font Awesome 6 Sharp Duotone": {
      900: "fasds",
      400: "fasdr",
      normal: "fasdr",
      300: "fasdl",
      100: "fasdt",
    },
  },
  eO = new Map([
    [
      "classic",
      {
        defaultShortPrefixId: "fas",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin", "brands"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp",
      {
        defaultShortPrefixId: "fass",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "duotone",
      {
        defaultShortPrefixId: "fad",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp-duotone",
      {
        defaultShortPrefixId: "fasds",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
  ]),
  tO = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      brands: "fab",
    },
    duotone: { solid: "fad", regular: "fadr", light: "fadl", thin: "fadt" },
    sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" },
    "sharp-duotone": {
      solid: "fasds",
      regular: "fasdr",
      light: "fasdl",
      thin: "fasdt",
    },
  },
  nO = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  g1 = {
    kit: { fak: "kit", "fa-kit": "kit" },
    "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
  },
  aO = ["kit"],
  oO = { kit: { "fa-kit": "fak" } },
  rO = ["fak", "fakd"],
  lO = { kit: { fak: "fa-kit" } },
  v1 = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } },
  Xc = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  iO = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"],
  uO = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  sO = {
    "Font Awesome Kit": { 400: "fak", normal: "fak" },
    "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
  },
  cO = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    },
    duotone: { "fa-regular": "fadr", "fa-light": "fadl", "fa-thin": "fadt" },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    },
    "sharp-duotone": {
      "fa-solid": "fasds",
      "fa-regular": "fasdr",
      "fa-light": "fasdl",
      "fa-thin": "fasdt",
    },
  },
  fO = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  },
  cp = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    },
    duotone: { fadr: "fa-regular", fadl: "fa-light", fadt: "fa-thin" },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    },
    "sharp-duotone": {
      fasds: "fa-solid",
      fasdr: "fa-regular",
      fasdl: "fa-light",
      fasdt: "fa-thin",
    },
  },
  dO = [
    "fa-solid",
    "fa-regular",
    "fa-light",
    "fa-thin",
    "fa-duotone",
    "fa-brands",
  ],
  fp = [
    "fa",
    "fas",
    "far",
    "fal",
    "fat",
    "fad",
    "fadr",
    "fadl",
    "fadt",
    "fab",
    "fass",
    "fasr",
    "fasl",
    "fast",
    "fasds",
    "fasdr",
    "fasdl",
    "fasdt",
    ...iO,
    ...dO,
  ],
  mO = ["solid", "regular", "light", "thin", "duotone", "brands"],
  PE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  hO = PE.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  pO = [
    ...Object.keys(fO),
    ...mO,
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "beat",
    "border",
    "fade",
    "beat-fade",
    "bounce",
    "flip-both",
    "flip-horizontal",
    "flip-vertical",
    "flip",
    "fw",
    "inverse",
    "layers-counter",
    "layers-text",
    "layers",
    "li",
    "pull-left",
    "pull-right",
    "pulse",
    "rotate-180",
    "rotate-270",
    "rotate-90",
    "rotate-by",
    "shake",
    "spin-pulse",
    "spin-reverse",
    "spin",
    "stack-1x",
    "stack-2x",
    "stack",
    "ul",
    Xc.GROUP,
    Xc.SWAP_OPACITY,
    Xc.PRIMARY,
    Xc.SECONDARY,
  ]
    .concat(PE.map((o) => "".concat(o, "x")))
    .concat(hO.map((o) => "w-".concat(o))),
  yO = {
    "Font Awesome 5 Free": { 900: "fas", 400: "far" },
    "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" },
    "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 5 Duotone": { 900: "fad" },
  };
const go = "___FONT_AWESOME___",
  dp = 16,
  $E = "fa",
  GE = "svg-inline--fa",
  Zr = "data-fa-i2svg",
  mp = "data-fa-pseudo-element",
  gO = "data-fa-pseudo-element-pending",
  Yp = "data-prefix",
  qp = "data-icon",
  b1 = "fontawesome-i2svg",
  vO = "async",
  bO = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  XE = (() => {
    try {
      return !1;
    } catch {
      return !1;
    }
  })();
function Wu(o) {
  return new Proxy(o, {
    get(l, u) {
      return u in l ? l[u] : l[an];
    },
  });
}
const QE = K({}, VE);
QE[an] = K(
  K(K(K({}, { "fa-duotone": "duotone" }), VE[an]), g1.kit),
  g1["kit-duotone"]
);
const SO = Wu(QE),
  hp = K({}, tO);
hp[an] = K(K(K(K({}, { duotone: "fad" }), hp[an]), v1.kit), v1["kit-duotone"]);
const S1 = Wu(hp),
  pp = K({}, cp);
pp[an] = K(K({}, pp[an]), lO.kit);
const Pp = Wu(pp),
  yp = K({}, cO);
yp[an] = K(K({}, yp[an]), oO.kit);
Wu(yp);
const EO = QC,
  FE = "fa-layers-text",
  TO = FC,
  RO = K({}, KC);
Wu(RO);
const xO = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  Ph = IC,
  wO = [...aO, ...pO],
  qu = er.FontAwesomeConfig || {};
function AO(o) {
  var l = pt.querySelector("script[" + o + "]");
  if (l) return l.getAttribute(o);
}
function CO(o) {
  return o === "" ? !0 : o === "false" ? !1 : o === "true" ? !0 : o;
}
pt &&
  typeof pt.querySelector == "function" &&
  [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ].forEach((l) => {
    let [u, s] = l;
    const c = CO(AO(u));
    c != null && (qu[s] = c);
  });
const IE = {
  styleDefault: "solid",
  familyDefault: an,
  cssPrefix: $E,
  replacementClass: GE,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
qu.familyPrefix && (qu.cssPrefix = qu.familyPrefix);
const oi = K(K({}, IE), qu);
oi.autoReplaceSvg || (oi.observeMutations = !1);
const ve = {};
Object.keys(IE).forEach((o) => {
  Object.defineProperty(ve, o, {
    enumerable: !0,
    set: function (l) {
      (oi[o] = l), Pu.forEach((u) => u(ve));
    },
    get: function () {
      return oi[o];
    },
  });
});
Object.defineProperty(ve, "familyPrefix", {
  enumerable: !0,
  set: function (o) {
    (oi.cssPrefix = o), Pu.forEach((l) => l(ve));
  },
  get: function () {
    return oi.cssPrefix;
  },
});
er.FontAwesomeConfig = ve;
const Pu = [];
function OO(o) {
  return (
    Pu.push(o),
    () => {
      Pu.splice(Pu.indexOf(o), 1);
    }
  );
}
const Ko = dp,
  Ha = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function DO(o) {
  if (!o || !bo) return;
  const l = pt.createElement("style");
  l.setAttribute("type", "text/css"), (l.innerHTML = o);
  const u = pt.head.childNodes;
  let s = null;
  for (let c = u.length - 1; c > -1; c--) {
    const d = u[c],
      h = (d.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(h) > -1 && (s = d);
  }
  return pt.head.insertBefore(l, s), o;
}
const NO = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Gu() {
  let o = 12,
    l = "";
  for (; o-- > 0; ) l += NO[(Math.random() * 62) | 0];
  return l;
}
function ii(o) {
  const l = [];
  for (let u = (o || []).length >>> 0; u--; ) l[u] = o[u];
  return l;
}
function $p(o) {
  return o.classList
    ? ii(o.classList)
    : (o.getAttribute("class") || "").split(" ").filter((l) => l);
}
function ZE(o) {
  return ""
    .concat(o)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function MO(o) {
  return Object.keys(o || {})
    .reduce((l, u) => l + "".concat(u, '="').concat(ZE(o[u]), '" '), "")
    .trim();
}
function mf(o) {
  return Object.keys(o || {}).reduce(
    (l, u) => l + "".concat(u, ": ").concat(o[u].trim(), ";"),
    ""
  );
}
function Gp(o) {
  return (
    o.size !== Ha.size ||
    o.x !== Ha.x ||
    o.y !== Ha.y ||
    o.rotate !== Ha.rotate ||
    o.flipX ||
    o.flipY
  );
}
function UO(o) {
  let { transform: l, containerWidth: u, iconWidth: s } = o;
  const c = { transform: "translate(".concat(u / 2, " 256)") },
    d = "translate(".concat(l.x * 32, ", ").concat(l.y * 32, ") "),
    h = "scale("
      .concat((l.size / 16) * (l.flipX ? -1 : 1), ", ")
      .concat((l.size / 16) * (l.flipY ? -1 : 1), ") "),
    y = "rotate(".concat(l.rotate, " 0 0)"),
    v = { transform: "".concat(d, " ").concat(h, " ").concat(y) },
    S = { transform: "translate(".concat((s / 2) * -1, " -256)") };
  return { outer: c, inner: v, path: S };
}
function _O(o) {
  let {
      transform: l,
      width: u = dp,
      height: s = dp,
      startCentered: c = !1,
    } = o,
    d = "";
  return (
    c && BE
      ? (d += "translate("
          .concat(l.x / Ko - u / 2, "em, ")
          .concat(l.y / Ko - s / 2, "em) "))
      : c
      ? (d += "translate(calc(-50% + "
          .concat(l.x / Ko, "em), calc(-50% + ")
          .concat(l.y / Ko, "em)) "))
      : (d += "translate(".concat(l.x / Ko, "em, ").concat(l.y / Ko, "em) ")),
    (d += "scale("
      .concat((l.size / Ko) * (l.flipX ? -1 : 1), ", ")
      .concat((l.size / Ko) * (l.flipY ? -1 : 1), ") ")),
    (d += "rotate(".concat(l.rotate, "deg) ")),
    d
  );
}
var zO = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function WE() {
  const o = $E,
    l = GE,
    u = ve.cssPrefix,
    s = ve.replacementClass;
  let c = zO;
  if (u !== o || s !== l) {
    const d = new RegExp("\\.".concat(o, "\\-"), "g"),
      h = new RegExp("\\--".concat(o, "\\-"), "g"),
      y = new RegExp("\\.".concat(l), "g");
    c = c
      .replace(d, ".".concat(u, "-"))
      .replace(h, "--".concat(u, "-"))
      .replace(y, ".".concat(s));
  }
  return c;
}
let E1 = !1;
function $h() {
  ve.autoAddCss && !E1 && (DO(WE()), (E1 = !0));
}
var jO = {
  mixout() {
    return { dom: { css: WE, insertCss: $h } };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        $h();
      },
      beforeI2svg() {
        $h();
      },
    };
  },
};
const vo = er || {};
vo[go] || (vo[go] = {});
vo[go].styles || (vo[go].styles = {});
vo[go].hooks || (vo[go].hooks = {});
vo[go].shims || (vo[go].shims = []);
var ka = vo[go];
const KE = [],
  JE = function () {
    pt.removeEventListener("DOMContentLoaded", JE),
      (tf = 1),
      KE.map((o) => o());
  };
let tf = !1;
bo &&
  ((tf = (pt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    pt.readyState
  )),
  tf || pt.addEventListener("DOMContentLoaded", JE));
function HO(o) {
  bo && (tf ? setTimeout(o, 0) : KE.push(o));
}
function Ku(o) {
  const { tag: l, attributes: u = {}, children: s = [] } = o;
  return typeof o == "string"
    ? ZE(o)
    : "<"
        .concat(l, " ")
        .concat(MO(u), ">")
        .concat(s.map(Ku).join(""), "</")
        .concat(l, ">");
}
function T1(o, l, u) {
  if (o && o[l] && o[l][u]) return { prefix: l, iconName: u, icon: o[l][u] };
}
var Gh = function (l, u, s, c) {
  var d = Object.keys(l),
    h = d.length,
    y = u,
    v,
    S,
    R;
  for (s === void 0 ? ((v = 1), (R = l[d[0]])) : ((v = 0), (R = s)); v < h; v++)
    (S = d[v]), (R = y(R, l[S], S, l));
  return R;
};
function kO(o) {
  const l = [];
  let u = 0;
  const s = o.length;
  for (; u < s; ) {
    const c = o.charCodeAt(u++);
    if (c >= 55296 && c <= 56319 && u < s) {
      const d = o.charCodeAt(u++);
      (d & 64512) == 56320
        ? l.push(((c & 1023) << 10) + (d & 1023) + 65536)
        : (l.push(c), u--);
    } else l.push(c);
  }
  return l;
}
function gp(o) {
  const l = kO(o);
  return l.length === 1 ? l[0].toString(16) : null;
}
function LO(o, l) {
  const u = o.length;
  let s = o.charCodeAt(l),
    c;
  return s >= 55296 &&
    s <= 56319 &&
    u > l + 1 &&
    ((c = o.charCodeAt(l + 1)), c >= 56320 && c <= 57343)
    ? (s - 55296) * 1024 + c - 56320 + 65536
    : s;
}
function R1(o) {
  return Object.keys(o).reduce((l, u) => {
    const s = o[u];
    return !!s.icon ? (l[s.iconName] = s.icon) : (l[u] = s), l;
  }, {});
}
function vp(o, l) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { skipHooks: s = !1 } = u,
    c = R1(l);
  typeof ka.hooks.addPack == "function" && !s
    ? ka.hooks.addPack(o, R1(l))
    : (ka.styles[o] = K(K({}, ka.styles[o] || {}), c)),
    o === "fas" && vp("fa", l);
}
const { styles: Xu, shims: BO } = ka,
  eT = Object.keys(Pp),
  VO = eT.reduce((o, l) => ((o[l] = Object.keys(Pp[l])), o), {});
let Xp = null,
  tT = {},
  nT = {},
  aT = {},
  oT = {},
  rT = {};
function YO(o) {
  return ~wO.indexOf(o);
}
function qO(o, l) {
  const u = l.split("-"),
    s = u[0],
    c = u.slice(1).join("-");
  return s === o && c !== "" && !YO(c) ? c : null;
}
const lT = () => {
  const o = (s) => Gh(Xu, (c, d, h) => ((c[h] = Gh(d, s, {})), c), {});
  (tT = o(
    (s, c, d) => (
      c[3] && (s[c[3]] = d),
      c[2] &&
        c[2]
          .filter((y) => typeof y == "number")
          .forEach((y) => {
            s[y.toString(16)] = d;
          }),
      s
    )
  )),
    (nT = o(
      (s, c, d) => (
        (s[d] = d),
        c[2] &&
          c[2]
            .filter((y) => typeof y == "string")
            .forEach((y) => {
              s[y] = d;
            }),
        s
      )
    )),
    (rT = o((s, c, d) => {
      const h = c[2];
      return (
        (s[d] = d),
        h.forEach((y) => {
          s[y] = d;
        }),
        s
      );
    }));
  const l = "far" in Xu || ve.autoFetchSvg,
    u = Gh(
      BO,
      (s, c) => {
        const d = c[0];
        let h = c[1];
        const y = c[2];
        return (
          h === "far" && !l && (h = "fas"),
          typeof d == "string" && (s.names[d] = { prefix: h, iconName: y }),
          typeof d == "number" &&
            (s.unicodes[d.toString(16)] = { prefix: h, iconName: y }),
          s
        );
      },
      { names: {}, unicodes: {} }
    );
  (aT = u.names),
    (oT = u.unicodes),
    (Xp = hf(ve.styleDefault, { family: ve.familyDefault }));
};
OO((o) => {
  Xp = hf(o.styleDefault, { family: ve.familyDefault });
});
lT();
function Qp(o, l) {
  return (tT[o] || {})[l];
}
function PO(o, l) {
  return (nT[o] || {})[l];
}
function Xr(o, l) {
  return (rT[o] || {})[l];
}
function iT(o) {
  return aT[o] || { prefix: null, iconName: null };
}
function $O(o) {
  const l = oT[o],
    u = Qp("fas", o);
  return (
    l ||
    (u ? { prefix: "fas", iconName: u } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function tr() {
  return Xp;
}
const uT = () => ({ prefix: null, iconName: null, rest: [] });
function GO(o) {
  let l = an;
  const u = eT.reduce(
    (s, c) => ((s[c] = "".concat(ve.cssPrefix, "-").concat(c)), s),
    {}
  );
  return (
    qE.forEach((s) => {
      (o.includes(u[s]) || o.some((c) => VO[s].includes(c))) && (l = s);
    }),
    l
  );
}
function hf(o) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { family: u = an } = l,
    s = SO[u][o];
  if (u === df && !o) return "fad";
  const c = S1[u][o] || S1[u][s],
    d = o in ka.styles ? o : null;
  return c || d || null;
}
function XO(o) {
  let l = [],
    u = null;
  return (
    o.forEach((s) => {
      const c = qO(ve.cssPrefix, s);
      c ? (u = c) : s && l.push(s);
    }),
    { iconName: u, rest: l }
  );
}
function x1(o) {
  return o.sort().filter((l, u, s) => s.indexOf(l) === u);
}
function pf(o) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { skipLookups: u = !1 } = l;
  let s = null;
  const c = fp.concat(uO),
    d = x1(o.filter((T) => c.includes(T))),
    h = x1(o.filter((T) => !fp.includes(T))),
    y = d.filter((T) => ((s = T), !YE.includes(T))),
    [v = null] = y,
    S = GO(d),
    R = K(K({}, XO(h)), {}, { prefix: hf(v, { family: S }) });
  return K(
    K(
      K({}, R),
      ZO({
        values: o,
        family: S,
        styles: Xu,
        config: ve,
        canonical: R,
        givenPrefix: s,
      })
    ),
    QO(u, s, R)
  );
}
function QO(o, l, u) {
  let { prefix: s, iconName: c } = u;
  if (o || !s || !c) return { prefix: s, iconName: c };
  const d = l === "fa" ? iT(c) : {},
    h = Xr(s, c);
  return (
    (c = d.iconName || h || c),
    (s = d.prefix || s),
    s === "far" && !Xu.far && Xu.fas && !ve.autoFetchSvg && (s = "fas"),
    { prefix: s, iconName: c }
  );
}
const FO = qE.filter((o) => o !== an || o !== df),
  IO = Object.keys(cp)
    .filter((o) => o !== an)
    .map((o) => Object.keys(cp[o]))
    .flat();
function ZO(o) {
  const {
      values: l,
      family: u,
      canonical: s,
      givenPrefix: c = "",
      styles: d = {},
      config: h = {},
    } = o,
    y = u === df,
    v = l.includes("fa-duotone") || l.includes("fad"),
    S = h.familyDefault === "duotone",
    R = s.prefix === "fad" || s.prefix === "fa-duotone";
  if (
    (!y && (v || S || R) && (s.prefix = "fad"),
    (l.includes("fa-brands") || l.includes("fab")) && (s.prefix = "fab"),
    !s.prefix &&
      FO.includes(u) &&
      (Object.keys(d).find((E) => IO.includes(E)) || h.autoFetchSvg))
  ) {
    const E = eO.get(u).defaultShortPrefixId;
    (s.prefix = E), (s.iconName = Xr(s.prefix, s.iconName) || s.iconName);
  }
  return (s.prefix === "fa" || c === "fa") && (s.prefix = tr() || "fas"), s;
}
class WO {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var l = arguments.length, u = new Array(l), s = 0; s < l; s++)
      u[s] = arguments[s];
    const c = u.reduce(this._pullDefinitions, {});
    Object.keys(c).forEach((d) => {
      (this.definitions[d] = K(K({}, this.definitions[d] || {}), c[d])),
        vp(d, c[d]);
      const h = Pp[an][d];
      h && vp(h, c[d]), lT();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(l, u) {
    const s = u.prefix && u.iconName && u.icon ? { 0: u } : u;
    return (
      Object.keys(s).map((c) => {
        const { prefix: d, iconName: h, icon: y } = s[c],
          v = y[2];
        l[d] || (l[d] = {}),
          v.length > 0 &&
            v.forEach((S) => {
              typeof S == "string" && (l[d][S] = y);
            }),
          (l[d][h] = y);
      }),
      l
    );
  }
}
let w1 = [],
  ti = {};
const ai = {},
  KO = Object.keys(ai);
function JO(o, l) {
  let { mixoutsTo: u } = l;
  return (
    (w1 = o),
    (ti = {}),
    Object.keys(ai).forEach((s) => {
      KO.indexOf(s) === -1 && delete ai[s];
    }),
    w1.forEach((s) => {
      const c = s.mixout ? s.mixout() : {};
      if (
        (Object.keys(c).forEach((d) => {
          typeof c[d] == "function" && (u[d] = c[d]),
            typeof c[d] == "object" &&
              Object.keys(c[d]).forEach((h) => {
                u[d] || (u[d] = {}), (u[d][h] = c[d][h]);
              });
        }),
        s.hooks)
      ) {
        const d = s.hooks();
        Object.keys(d).forEach((h) => {
          ti[h] || (ti[h] = []), ti[h].push(d[h]);
        });
      }
      s.provides && s.provides(ai);
    }),
    u
  );
}
function bp(o, l) {
  for (
    var u = arguments.length, s = new Array(u > 2 ? u - 2 : 0), c = 2;
    c < u;
    c++
  )
    s[c - 2] = arguments[c];
  return (
    (ti[o] || []).forEach((h) => {
      l = h.apply(null, [l, ...s]);
    }),
    l
  );
}
function Wr(o) {
  for (
    var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), s = 1;
    s < l;
    s++
  )
    u[s - 1] = arguments[s];
  (ti[o] || []).forEach((d) => {
    d.apply(null, u);
  });
}
function nr() {
  const o = arguments[0],
    l = Array.prototype.slice.call(arguments, 1);
  return ai[o] ? ai[o].apply(null, l) : void 0;
}
function Sp(o) {
  o.prefix === "fa" && (o.prefix = "fas");
  let { iconName: l } = o;
  const u = o.prefix || tr();
  if (l)
    return (l = Xr(u, l) || l), T1(sT.definitions, u, l) || T1(ka.styles, u, l);
}
const sT = new WO(),
  eD = () => {
    (ve.autoReplaceSvg = !1), (ve.observeMutations = !1), Wr("noAuto");
  },
  tD = {
    i2svg: function () {
      let o =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return bo
        ? (Wr("beforeI2svg", o), nr("pseudoElements2svg", o), nr("i2svg", o))
        : Promise.reject(new Error("Operation requires a DOM of some kind."));
    },
    watch: function () {
      let o =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: l } = o;
      ve.autoReplaceSvg === !1 && (ve.autoReplaceSvg = !0),
        (ve.observeMutations = !0),
        HO(() => {
          aD({ autoReplaceSvgRoot: l }), Wr("watch", o);
        });
    },
  },
  nD = {
    icon: (o) => {
      if (o === null) return null;
      if (typeof o == "object" && o.prefix && o.iconName)
        return {
          prefix: o.prefix,
          iconName: Xr(o.prefix, o.iconName) || o.iconName,
        };
      if (Array.isArray(o) && o.length === 2) {
        const l = o[1].indexOf("fa-") === 0 ? o[1].slice(3) : o[1],
          u = hf(o[0]);
        return { prefix: u, iconName: Xr(u, l) || l };
      }
      if (
        typeof o == "string" &&
        (o.indexOf("".concat(ve.cssPrefix, "-")) > -1 || o.match(EO))
      ) {
        const l = pf(o.split(" "), { skipLookups: !0 });
        return {
          prefix: l.prefix || tr(),
          iconName: Xr(l.prefix, l.iconName) || l.iconName,
        };
      }
      if (typeof o == "string") {
        const l = tr();
        return { prefix: l, iconName: Xr(l, o) || o };
      }
    },
  },
  zn = {
    noAuto: eD,
    config: ve,
    dom: tD,
    parse: nD,
    library: sT,
    findIconDefinition: Sp,
    toHtml: Ku,
  },
  aD = function () {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: l = pt } = o;
    (Object.keys(ka.styles).length > 0 || ve.autoFetchSvg) &&
      bo &&
      ve.autoReplaceSvg &&
      zn.dom.i2svg({ node: l });
  };
function yf(o, l) {
  return (
    Object.defineProperty(o, "abstract", { get: l }),
    Object.defineProperty(o, "html", {
      get: function () {
        return o.abstract.map((u) => Ku(u));
      },
    }),
    Object.defineProperty(o, "node", {
      get: function () {
        if (!bo) return;
        const u = pt.createElement("div");
        return (u.innerHTML = o.html), u.children;
      },
    }),
    o
  );
}
function oD(o) {
  let {
    children: l,
    main: u,
    mask: s,
    attributes: c,
    styles: d,
    transform: h,
  } = o;
  if (Gp(h) && u.found && !s.found) {
    const { width: y, height: v } = u,
      S = { x: y / v / 2, y: 0.5 };
    c.style = mf(
      K(
        K({}, d),
        {},
        {
          "transform-origin": ""
            .concat(S.x + h.x / 16, "em ")
            .concat(S.y + h.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: c, children: l }];
}
function rD(o) {
  let { prefix: l, iconName: u, children: s, attributes: c, symbol: d } = o;
  const h =
    d === !0 ? "".concat(l, "-").concat(ve.cssPrefix, "-").concat(u) : d;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: K(K({}, c), {}, { id: h }), children: s },
      ],
    },
  ];
}
function Fp(o) {
  const {
      icons: { main: l, mask: u },
      prefix: s,
      iconName: c,
      transform: d,
      symbol: h,
      title: y,
      maskId: v,
      titleId: S,
      extra: R,
      watchable: T = !1,
    } = o,
    { width: E, height: N } = u.found ? u : l,
    D = rO.includes(s),
    j = [ve.replacementClass, c ? "".concat(ve.cssPrefix, "-").concat(c) : ""]
      .filter((ye) => R.classes.indexOf(ye) === -1)
      .filter((ye) => ye !== "" || !!ye)
      .concat(R.classes)
      .join(" ");
  let M = {
    children: [],
    attributes: K(
      K({}, R.attributes),
      {},
      {
        "data-prefix": s,
        "data-icon": c,
        class: j,
        role: R.attributes.role || "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(E, " ").concat(N),
      }
    ),
  };
  const z =
    D && !~R.classes.indexOf("fa-fw")
      ? { width: "".concat((E / N) * 16 * 0.0625, "em") }
      : {};
  T && (M.attributes[Zr] = ""),
    y &&
      (M.children.push({
        tag: "title",
        attributes: {
          id: M.attributes["aria-labelledby"] || "title-".concat(S || Gu()),
        },
        children: [y],
      }),
      delete M.attributes.title);
  const H = K(
      K({}, M),
      {},
      {
        prefix: s,
        iconName: c,
        main: l,
        mask: u,
        maskId: v,
        transform: d,
        symbol: h,
        styles: K(K({}, z), R.styles),
      }
    ),
    { children: ae, attributes: X } =
      u.found && l.found
        ? nr("generateAbstractMask", H) || { children: [], attributes: {} }
        : nr("generateAbstractIcon", H) || { children: [], attributes: {} };
  return (H.children = ae), (H.attributes = X), h ? rD(H) : oD(H);
}
function A1(o) {
  const {
      content: l,
      width: u,
      height: s,
      transform: c,
      title: d,
      extra: h,
      watchable: y = !1,
    } = o,
    v = K(
      K(K({}, h.attributes), d ? { title: d } : {}),
      {},
      { class: h.classes.join(" ") }
    );
  y && (v[Zr] = "");
  const S = K({}, h.styles);
  Gp(c) &&
    ((S.transform = _O({
      transform: c,
      startCentered: !0,
      width: u,
      height: s,
    })),
    (S["-webkit-transform"] = S.transform));
  const R = mf(S);
  R.length > 0 && (v.style = R);
  const T = [];
  return (
    T.push({ tag: "span", attributes: v, children: [l] }),
    d &&
      T.push({ tag: "span", attributes: { class: "sr-only" }, children: [d] }),
    T
  );
}
function lD(o) {
  const { content: l, title: u, extra: s } = o,
    c = K(
      K(K({}, s.attributes), u ? { title: u } : {}),
      {},
      { class: s.classes.join(" ") }
    ),
    d = mf(s.styles);
  d.length > 0 && (c.style = d);
  const h = [];
  return (
    h.push({ tag: "span", attributes: c, children: [l] }),
    u &&
      h.push({ tag: "span", attributes: { class: "sr-only" }, children: [u] }),
    h
  );
}
const { styles: Xh } = ka;
function Ep(o) {
  const l = o[0],
    u = o[1],
    [s] = o.slice(4);
  let c = null;
  return (
    Array.isArray(s)
      ? (c = {
          tag: "g",
          attributes: { class: "".concat(ve.cssPrefix, "-").concat(Ph.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(ve.cssPrefix, "-").concat(Ph.SECONDARY),
                fill: "currentColor",
                d: s[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(ve.cssPrefix, "-").concat(Ph.PRIMARY),
                fill: "currentColor",
                d: s[1],
              },
            },
          ],
        })
      : (c = { tag: "path", attributes: { fill: "currentColor", d: s } }),
    { found: !0, width: l, height: u, icon: c }
  );
}
const iD = { found: !1, width: 512, height: 512 };
function uD(o, l) {
  !XE &&
    !ve.showMissingIcons &&
    o &&
    console.error(
      'Icon with name "'.concat(o, '" and prefix "').concat(l, '" is missing.')
    );
}
function Tp(o, l) {
  let u = l;
  return (
    l === "fa" && ve.styleDefault !== null && (l = tr()),
    new Promise((s, c) => {
      if (u === "fa") {
        const d = iT(o) || {};
        (o = d.iconName || o), (l = d.prefix || l);
      }
      if (o && l && Xh[l] && Xh[l][o]) {
        const d = Xh[l][o];
        return s(Ep(d));
      }
      uD(o, l),
        s(
          K(
            K({}, iD),
            {},
            {
              icon:
                ve.showMissingIcons && o ? nr("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
const C1 = () => {},
  Rp =
    ve.measurePerformance && Gc && Gc.mark && Gc.measure
      ? Gc
      : { mark: C1, measure: C1 },
  Yu = 'FA "6.7.2"',
  sD = (o) => (Rp.mark("".concat(Yu, " ").concat(o, " begins")), () => cT(o)),
  cT = (o) => {
    Rp.mark("".concat(Yu, " ").concat(o, " ends")),
      Rp.measure(
        "".concat(Yu, " ").concat(o),
        "".concat(Yu, " ").concat(o, " begins"),
        "".concat(Yu, " ").concat(o, " ends")
      );
  };
var Ip = { begin: sD, end: cT };
const Ic = () => {};
function O1(o) {
  return typeof (o.getAttribute ? o.getAttribute(Zr) : null) == "string";
}
function cD(o) {
  const l = o.getAttribute ? o.getAttribute(Yp) : null,
    u = o.getAttribute ? o.getAttribute(qp) : null;
  return l && u;
}
function fD(o) {
  return (
    o &&
    o.classList &&
    o.classList.contains &&
    o.classList.contains(ve.replacementClass)
  );
}
function dD() {
  return ve.autoReplaceSvg === !0
    ? Zc.replace
    : Zc[ve.autoReplaceSvg] || Zc.replace;
}
function mD(o) {
  return pt.createElementNS("http://www.w3.org/2000/svg", o);
}
function hD(o) {
  return pt.createElement(o);
}
function fT(o) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { ceFn: u = o.tag === "svg" ? mD : hD } = l;
  if (typeof o == "string") return pt.createTextNode(o);
  const s = u(o.tag);
  return (
    Object.keys(o.attributes || []).forEach(function (d) {
      s.setAttribute(d, o.attributes[d]);
    }),
    (o.children || []).forEach(function (d) {
      s.appendChild(fT(d, { ceFn: u }));
    }),
    s
  );
}
function pD(o) {
  let l = " ".concat(o.outerHTML, " ");
  return (l = "".concat(l, "Font Awesome fontawesome.com ")), l;
}
const Zc = {
  replace: function (o) {
    const l = o[0];
    if (l.parentNode)
      if (
        (o[1].forEach((u) => {
          l.parentNode.insertBefore(fT(u), l);
        }),
        l.getAttribute(Zr) === null && ve.keepOriginalSource)
      ) {
        let u = pt.createComment(pD(l));
        l.parentNode.replaceChild(u, l);
      } else l.remove();
  },
  nest: function (o) {
    const l = o[0],
      u = o[1];
    if (~$p(l).indexOf(ve.replacementClass)) return Zc.replace(o);
    const s = new RegExp("".concat(ve.cssPrefix, "-.*"));
    if ((delete u[0].attributes.id, u[0].attributes.class)) {
      const d = u[0].attributes.class
        .split(" ")
        .reduce(
          (h, y) => (
            y === ve.replacementClass || y.match(s)
              ? h.toSvg.push(y)
              : h.toNode.push(y),
            h
          ),
          { toNode: [], toSvg: [] }
        );
      (u[0].attributes.class = d.toSvg.join(" ")),
        d.toNode.length === 0
          ? l.removeAttribute("class")
          : l.setAttribute("class", d.toNode.join(" "));
    }
    const c = u.map((d) => Ku(d)).join(`
`);
    l.setAttribute(Zr, ""), (l.innerHTML = c);
  },
};
function D1(o) {
  o();
}
function dT(o, l) {
  const u = typeof l == "function" ? l : Ic;
  if (o.length === 0) u();
  else {
    let s = D1;
    ve.mutateApproach === vO && (s = er.requestAnimationFrame || D1),
      s(() => {
        const c = dD(),
          d = Ip.begin("mutate");
        o.map(c), d(), u();
      });
  }
}
let Zp = !1;
function mT() {
  Zp = !0;
}
function xp() {
  Zp = !1;
}
let nf = null;
function N1(o) {
  if (!y1 || !ve.observeMutations) return;
  const {
    treeCallback: l = Ic,
    nodeCallback: u = Ic,
    pseudoElementsCallback: s = Ic,
    observeMutationsRoot: c = pt,
  } = o;
  (nf = new y1((d) => {
    if (Zp) return;
    const h = tr();
    ii(d).forEach((y) => {
      if (
        (y.type === "childList" &&
          y.addedNodes.length > 0 &&
          !O1(y.addedNodes[0]) &&
          (ve.searchPseudoElements && s(y.target), l(y.target)),
        y.type === "attributes" &&
          y.target.parentNode &&
          ve.searchPseudoElements &&
          s(y.target.parentNode),
        y.type === "attributes" && O1(y.target) && ~xO.indexOf(y.attributeName))
      )
        if (y.attributeName === "class" && cD(y.target)) {
          const { prefix: v, iconName: S } = pf($p(y.target));
          y.target.setAttribute(Yp, v || h), S && y.target.setAttribute(qp, S);
        } else fD(y.target) && u(y.target);
    });
  })),
    bo &&
      nf.observe(c, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0,
      });
}
function yD() {
  nf && nf.disconnect();
}
function gD(o) {
  const l = o.getAttribute("style");
  let u = [];
  return (
    l &&
      (u = l.split(";").reduce((s, c) => {
        const d = c.split(":"),
          h = d[0],
          y = d.slice(1);
        return h && y.length > 0 && (s[h] = y.join(":").trim()), s;
      }, {})),
    u
  );
}
function vD(o) {
  const l = o.getAttribute("data-prefix"),
    u = o.getAttribute("data-icon"),
    s = o.innerText !== void 0 ? o.innerText.trim() : "";
  let c = pf($p(o));
  return (
    c.prefix || (c.prefix = tr()),
    l && u && ((c.prefix = l), (c.iconName = u)),
    (c.iconName && c.prefix) ||
      (c.prefix &&
        s.length > 0 &&
        (c.iconName =
          PO(c.prefix, o.innerText) || Qp(c.prefix, gp(o.innerText))),
      !c.iconName &&
        ve.autoFetchSvg &&
        o.firstChild &&
        o.firstChild.nodeType === Node.TEXT_NODE &&
        (c.iconName = o.firstChild.data)),
    c
  );
}
function bD(o) {
  const l = ii(o.attributes).reduce(
      (c, d) => (
        c.name !== "class" && c.name !== "style" && (c[d.name] = d.value), c
      ),
      {}
    ),
    u = o.getAttribute("title"),
    s = o.getAttribute("data-fa-title-id");
  return (
    ve.autoA11y &&
      (u
        ? (l["aria-labelledby"] = ""
            .concat(ve.replacementClass, "-title-")
            .concat(s || Gu()))
        : ((l["aria-hidden"] = "true"), (l.focusable = "false"))),
    l
  );
}
function SD() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Ha,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function M1(o) {
  let l =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { styleParser: !0 };
  const { iconName: u, prefix: s, rest: c } = vD(o),
    d = bD(o),
    h = bp("parseNodeAttributes", {}, o);
  let y = l.styleParser ? gD(o) : [];
  return K(
    {
      iconName: u,
      title: o.getAttribute("title"),
      titleId: o.getAttribute("data-fa-title-id"),
      prefix: s,
      transform: Ha,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: c, styles: y, attributes: d },
    },
    h
  );
}
const { styles: ED } = ka;
function hT(o) {
  const l = ve.autoReplaceSvg === "nest" ? M1(o, { styleParser: !1 }) : M1(o);
  return ~l.extra.classes.indexOf(FE)
    ? nr("generateLayersText", o, l)
    : nr("generateSvgReplacementMutation", o, l);
}
function TD() {
  return [...nO, ...fp];
}
function U1(o) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!bo) return Promise.resolve();
  const u = pt.documentElement.classList,
    s = (R) => u.add("".concat(b1, "-").concat(R)),
    c = (R) => u.remove("".concat(b1, "-").concat(R)),
    d = ve.autoFetchSvg ? TD() : YE.concat(Object.keys(ED));
  d.includes("fa") || d.push("fa");
  const h = [".".concat(FE, ":not([").concat(Zr, "])")]
    .concat(d.map((R) => ".".concat(R, ":not([").concat(Zr, "])")))
    .join(", ");
  if (h.length === 0) return Promise.resolve();
  let y = [];
  try {
    y = ii(o.querySelectorAll(h));
  } catch {}
  if (y.length > 0) s("pending"), c("complete");
  else return Promise.resolve();
  const v = Ip.begin("onTree"),
    S = y.reduce((R, T) => {
      try {
        const E = hT(T);
        E && R.push(E);
      } catch (E) {
        XE || (E.name === "MissingIcon" && console.error(E));
      }
      return R;
    }, []);
  return new Promise((R, T) => {
    Promise.all(S)
      .then((E) => {
        dT(E, () => {
          s("active"),
            s("complete"),
            c("pending"),
            typeof l == "function" && l(),
            v(),
            R();
        });
      })
      .catch((E) => {
        v(), T(E);
      });
  });
}
function RD(o) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  hT(o).then((u) => {
    u && dT([u], l);
  });
}
function xD(o) {
  return function (l) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = (l || {}).icon ? l : Sp(l || {});
    let { mask: c } = u;
    return (
      c && (c = (c || {}).icon ? c : Sp(c || {})),
      o(s, K(K({}, u), {}, { mask: c }))
    );
  };
}
const wD = function (o) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: u = Ha,
    symbol: s = !1,
    mask: c = null,
    maskId: d = null,
    title: h = null,
    titleId: y = null,
    classes: v = [],
    attributes: S = {},
    styles: R = {},
  } = l;
  if (!o) return;
  const { prefix: T, iconName: E, icon: N } = o;
  return yf(
    K({ type: "icon" }, o),
    () => (
      Wr("beforeDOMElementCreation", { iconDefinition: o, params: l }),
      ve.autoA11y &&
        (h
          ? (S["aria-labelledby"] = ""
              .concat(ve.replacementClass, "-title-")
              .concat(y || Gu()))
          : ((S["aria-hidden"] = "true"), (S.focusable = "false"))),
      Fp({
        icons: {
          main: Ep(N),
          mask: c
            ? Ep(c.icon)
            : { found: !1, width: null, height: null, icon: {} },
        },
        prefix: T,
        iconName: E,
        transform: K(K({}, Ha), u),
        symbol: s,
        title: h,
        maskId: d,
        titleId: y,
        extra: { attributes: S, styles: R, classes: v },
      })
    )
  );
};
var AD = {
    mixout() {
      return { icon: xD(wD) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(o) {
          return (o.treeCallback = U1), (o.nodeCallback = RD), o;
        },
      };
    },
    provides(o) {
      (o.i2svg = function (l) {
        const { node: u = pt, callback: s = () => {} } = l;
        return U1(u, s);
      }),
        (o.generateSvgReplacementMutation = function (l, u) {
          const {
            iconName: s,
            title: c,
            titleId: d,
            prefix: h,
            transform: y,
            symbol: v,
            mask: S,
            maskId: R,
            extra: T,
          } = u;
          return new Promise((E, N) => {
            Promise.all([
              Tp(s, h),
              S.iconName
                ? Tp(S.iconName, S.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then((D) => {
                let [j, M] = D;
                E([
                  l,
                  Fp({
                    icons: { main: j, mask: M },
                    prefix: h,
                    iconName: s,
                    transform: y,
                    symbol: v,
                    maskId: R,
                    title: c,
                    titleId: d,
                    extra: T,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(N);
          });
        }),
        (o.generateAbstractIcon = function (l) {
          let {
            children: u,
            attributes: s,
            main: c,
            transform: d,
            styles: h,
          } = l;
          const y = mf(h);
          y.length > 0 && (s.style = y);
          let v;
          return (
            Gp(d) &&
              (v = nr("generateAbstractTransformGrouping", {
                main: c,
                transform: d,
                containerWidth: c.width,
                iconWidth: c.width,
              })),
            u.push(v || c.icon),
            { children: u, attributes: s }
          );
        });
    },
  },
  CD = {
    mixout() {
      return {
        layer(o) {
          let l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: u = [] } = l;
          return yf({ type: "layer" }, () => {
            Wr("beforeDOMElementCreation", { assembler: o, params: l });
            let s = [];
            return (
              o((c) => {
                Array.isArray(c)
                  ? c.map((d) => {
                      s = s.concat(d.abstract);
                    })
                  : (s = s.concat(c.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(ve.cssPrefix, "-layers"), ...u].join(" "),
                  },
                  children: s,
                },
              ]
            );
          });
        },
      };
    },
  },
  OD = {
    mixout() {
      return {
        counter(o) {
          let l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title: u = null,
            classes: s = [],
            attributes: c = {},
            styles: d = {},
          } = l;
          return yf(
            { type: "counter", content: o },
            () => (
              Wr("beforeDOMElementCreation", { content: o, params: l }),
              lD({
                content: o.toString(),
                title: u,
                extra: {
                  attributes: c,
                  styles: d,
                  classes: ["".concat(ve.cssPrefix, "-layers-counter"), ...s],
                },
              })
            )
          );
        },
      };
    },
  },
  DD = {
    mixout() {
      return {
        text(o) {
          let l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform: u = Ha,
            title: s = null,
            classes: c = [],
            attributes: d = {},
            styles: h = {},
          } = l;
          return yf(
            { type: "text", content: o },
            () => (
              Wr("beforeDOMElementCreation", { content: o, params: l }),
              A1({
                content: o,
                transform: K(K({}, Ha), u),
                title: s,
                extra: {
                  attributes: d,
                  styles: h,
                  classes: ["".concat(ve.cssPrefix, "-layers-text"), ...c],
                },
              })
            )
          );
        },
      };
    },
    provides(o) {
      o.generateLayersText = function (l, u) {
        const { title: s, transform: c, extra: d } = u;
        let h = null,
          y = null;
        if (BE) {
          const v = parseInt(getComputedStyle(l).fontSize, 10),
            S = l.getBoundingClientRect();
          (h = S.width / v), (y = S.height / v);
        }
        return (
          ve.autoA11y && !s && (d.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            l,
            A1({
              content: l.innerHTML,
              width: h,
              height: y,
              transform: c,
              title: s,
              extra: d,
              watchable: !0,
            }),
          ])
        );
      };
    },
  };
const ND = new RegExp('"', "ug"),
  _1 = [1105920, 1112319],
  z1 = K(
    K(K(K({}, { FontAwesome: { normal: "fas", 400: "fas" } }), JC), yO),
    sO
  ),
  wp = Object.keys(z1).reduce((o, l) => ((o[l.toLowerCase()] = z1[l]), o), {}),
  MD = Object.keys(wp).reduce((o, l) => {
    const u = wp[l];
    return (o[l] = u[900] || [...Object.entries(u)][0][1]), o;
  }, {});
function UD(o) {
  const l = o.replace(ND, ""),
    u = LO(l, 0),
    s = u >= _1[0] && u <= _1[1],
    c = l.length === 2 ? l[0] === l[1] : !1;
  return { value: gp(c ? l[0] : l), isSecondary: s || c };
}
function _D(o, l) {
  const u = o.replace(/^['"]|['"]$/g, "").toLowerCase(),
    s = parseInt(l),
    c = isNaN(s) ? "normal" : s;
  return (wp[u] || {})[c] || MD[u];
}
function j1(o, l) {
  const u = "".concat(gO).concat(l.replace(":", "-"));
  return new Promise((s, c) => {
    if (o.getAttribute(u) !== null) return s();
    const h = ii(o.children).filter((E) => E.getAttribute(mp) === l)[0],
      y = er.getComputedStyle(o, l),
      v = y.getPropertyValue("font-family"),
      S = v.match(TO),
      R = y.getPropertyValue("font-weight"),
      T = y.getPropertyValue("content");
    if (h && !S) return o.removeChild(h), s();
    if (S && T !== "none" && T !== "") {
      const E = y.getPropertyValue("content");
      let N = _D(v, R);
      const { value: D, isSecondary: j } = UD(E),
        M = S[0].startsWith("FontAwesome");
      let z = Qp(N, D),
        H = z;
      if (M) {
        const ae = $O(D);
        ae.iconName && ae.prefix && ((z = ae.iconName), (N = ae.prefix));
      }
      if (
        z &&
        !j &&
        (!h || h.getAttribute(Yp) !== N || h.getAttribute(qp) !== H)
      ) {
        o.setAttribute(u, H), h && o.removeChild(h);
        const ae = SD(),
          { extra: X } = ae;
        (X.attributes[mp] = l),
          Tp(z, N)
            .then((ye) => {
              const Te = Fp(
                  K(
                    K({}, ae),
                    {},
                    {
                      icons: { main: ye, mask: uT() },
                      prefix: N,
                      iconName: H,
                      extra: X,
                      watchable: !0,
                    }
                  )
                ),
                I = pt.createElementNS("http://www.w3.org/2000/svg", "svg");
              l === "::before"
                ? o.insertBefore(I, o.firstChild)
                : o.appendChild(I),
                (I.outerHTML = Te.map((de) => Ku(de)).join(`
`)),
                o.removeAttribute(u),
                s();
            })
            .catch(c);
      } else s();
    } else s();
  });
}
function zD(o) {
  return Promise.all([j1(o, "::before"), j1(o, "::after")]);
}
function jD(o) {
  return (
    o.parentNode !== document.head &&
    !~bO.indexOf(o.tagName.toUpperCase()) &&
    !o.getAttribute(mp) &&
    (!o.parentNode || o.parentNode.tagName !== "svg")
  );
}
function H1(o) {
  if (bo)
    return new Promise((l, u) => {
      const s = ii(o.querySelectorAll("*")).filter(jD).map(zD),
        c = Ip.begin("searchPseudoElements");
      mT(),
        Promise.all(s)
          .then(() => {
            c(), xp(), l();
          })
          .catch(() => {
            c(), xp(), u();
          });
    });
}
var HD = {
  hooks() {
    return {
      mutationObserverCallbacks(o) {
        return (o.pseudoElementsCallback = H1), o;
      },
    };
  },
  provides(o) {
    o.pseudoElements2svg = function (l) {
      const { node: u = pt } = l;
      ve.searchPseudoElements && H1(u);
    };
  },
};
let k1 = !1;
var kD = {
  mixout() {
    return {
      dom: {
        unwatch() {
          mT(), (k1 = !0);
        },
      },
    };
  },
  hooks() {
    return {
      bootstrap() {
        N1(bp("mutationObserverCallbacks", {}));
      },
      noAuto() {
        yD();
      },
      watch(o) {
        const { observeMutationsRoot: l } = o;
        k1
          ? xp()
          : N1(bp("mutationObserverCallbacks", { observeMutationsRoot: l }));
      },
    };
  },
};
const L1 = (o) => {
  let l = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return o
    .toLowerCase()
    .split(" ")
    .reduce((u, s) => {
      const c = s.toLowerCase().split("-"),
        d = c[0];
      let h = c.slice(1).join("-");
      if (d && h === "h") return (u.flipX = !0), u;
      if (d && h === "v") return (u.flipY = !0), u;
      if (((h = parseFloat(h)), isNaN(h))) return u;
      switch (d) {
        case "grow":
          u.size = u.size + h;
          break;
        case "shrink":
          u.size = u.size - h;
          break;
        case "left":
          u.x = u.x - h;
          break;
        case "right":
          u.x = u.x + h;
          break;
        case "up":
          u.y = u.y - h;
          break;
        case "down":
          u.y = u.y + h;
          break;
        case "rotate":
          u.rotate = u.rotate + h;
          break;
      }
      return u;
    }, l);
};
var LD = {
  mixout() {
    return { parse: { transform: (o) => L1(o) } };
  },
  hooks() {
    return {
      parseNodeAttributes(o, l) {
        const u = l.getAttribute("data-fa-transform");
        return u && (o.transform = L1(u)), o;
      },
    };
  },
  provides(o) {
    o.generateAbstractTransformGrouping = function (l) {
      let { main: u, transform: s, containerWidth: c, iconWidth: d } = l;
      const h = { transform: "translate(".concat(c / 2, " 256)") },
        y = "translate(".concat(s.x * 32, ", ").concat(s.y * 32, ") "),
        v = "scale("
          .concat((s.size / 16) * (s.flipX ? -1 : 1), ", ")
          .concat((s.size / 16) * (s.flipY ? -1 : 1), ") "),
        S = "rotate(".concat(s.rotate, " 0 0)"),
        R = { transform: "".concat(y, " ").concat(v, " ").concat(S) },
        T = { transform: "translate(".concat((d / 2) * -1, " -256)") },
        E = { outer: h, inner: R, path: T };
      return {
        tag: "g",
        attributes: K({}, E.outer),
        children: [
          {
            tag: "g",
            attributes: K({}, E.inner),
            children: [
              {
                tag: u.icon.tag,
                children: u.icon.children,
                attributes: K(K({}, u.icon.attributes), E.path),
              },
            ],
          },
        ],
      };
    };
  },
};
const Qh = { x: 0, y: 0, width: "100%", height: "100%" };
function B1(o) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    o.attributes && (o.attributes.fill || l) && (o.attributes.fill = "black"), o
  );
}
function BD(o) {
  return o.tag === "g" ? o.children : [o];
}
var VD = {
    hooks() {
      return {
        parseNodeAttributes(o, l) {
          const u = l.getAttribute("data-fa-mask"),
            s = u ? pf(u.split(" ").map((c) => c.trim())) : uT();
          return (
            s.prefix || (s.prefix = tr()),
            (o.mask = s),
            (o.maskId = l.getAttribute("data-fa-mask-id")),
            o
          );
        },
      };
    },
    provides(o) {
      o.generateAbstractMask = function (l) {
        let {
          children: u,
          attributes: s,
          main: c,
          mask: d,
          maskId: h,
          transform: y,
        } = l;
        const { width: v, icon: S } = c,
          { width: R, icon: T } = d,
          E = UO({ transform: y, containerWidth: R, iconWidth: v }),
          N = { tag: "rect", attributes: K(K({}, Qh), {}, { fill: "white" }) },
          D = S.children ? { children: S.children.map(B1) } : {},
          j = {
            tag: "g",
            attributes: K({}, E.inner),
            children: [
              B1(
                K({ tag: S.tag, attributes: K(K({}, S.attributes), E.path) }, D)
              ),
            ],
          },
          M = { tag: "g", attributes: K({}, E.outer), children: [j] },
          z = "mask-".concat(h || Gu()),
          H = "clip-".concat(h || Gu()),
          ae = {
            tag: "mask",
            attributes: K(
              K({}, Qh),
              {},
              {
                id: z,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [N, M],
          },
          X = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: H }, children: BD(T) },
              ae,
            ],
          };
        return (
          u.push(X, {
            tag: "rect",
            attributes: K(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(H, ")"),
                mask: "url(#".concat(z, ")"),
              },
              Qh
            ),
          }),
          { children: u, attributes: s }
        );
      };
    },
  },
  YD = {
    provides(o) {
      let l = !1;
      er.matchMedia &&
        (l = er.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (o.missingIconAbstract = function () {
          const u = [],
            s = { fill: "currentColor" },
            c = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          u.push({
            tag: "path",
            attributes: K(
              K({}, s),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          const d = K(K({}, c), {}, { attributeName: "opacity" }),
            h = {
              tag: "circle",
              attributes: K(K({}, s), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            l ||
              h.children.push(
                {
                  tag: "animate",
                  attributes: K(
                    K({}, c),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: K(K({}, d), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            u.push(h),
            u.push({
              tag: "path",
              attributes: K(
                K({}, s),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: l
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: K(K({}, d), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            l ||
              u.push({
                tag: "path",
                attributes: K(
                  K({}, s),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: K(K({}, d), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: u }
          );
        });
    },
  },
  qD = {
    hooks() {
      return {
        parseNodeAttributes(o, l) {
          const u = l.getAttribute("data-fa-symbol"),
            s = u === null ? !1 : u === "" ? !0 : u;
          return (o.symbol = s), o;
        },
      };
    },
  },
  PD = [jO, AD, CD, OD, DD, HD, kD, LD, VD, YD, qD];
JO(PD, { mixoutsTo: zn });
zn.noAuto;
zn.config;
zn.library;
zn.dom;
const Ap = zn.parse;
zn.findIconDefinition;
zn.toHtml;
const $D = zn.icon;
zn.layer;
zn.text;
zn.counter;
var Fh = { exports: {} },
  Ih = { exports: {} },
  nt = {},
  V1;
function GD() {
  if (V1) return nt;
  V1 = 1;
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ return (
    (function () {
      var o = typeof Symbol == "function" && Symbol.for,
        l = o ? Symbol.for("react.element") : 60103,
        u = o ? Symbol.for("react.portal") : 60106,
        s = o ? Symbol.for("react.fragment") : 60107,
        c = o ? Symbol.for("react.strict_mode") : 60108,
        d = o ? Symbol.for("react.profiler") : 60114,
        h = o ? Symbol.for("react.provider") : 60109,
        y = o ? Symbol.for("react.context") : 60110,
        v = o ? Symbol.for("react.async_mode") : 60111,
        S = o ? Symbol.for("react.concurrent_mode") : 60111,
        R = o ? Symbol.for("react.forward_ref") : 60112,
        T = o ? Symbol.for("react.suspense") : 60113,
        E = o ? Symbol.for("react.suspense_list") : 60120,
        N = o ? Symbol.for("react.memo") : 60115,
        D = o ? Symbol.for("react.lazy") : 60116,
        j = o ? Symbol.for("react.block") : 60121,
        M = o ? Symbol.for("react.fundamental") : 60117,
        z = o ? Symbol.for("react.responder") : 60118,
        H = o ? Symbol.for("react.scope") : 60119;
      function ae(Q) {
        return (
          typeof Q == "string" ||
          typeof Q == "function" ||
          Q === s ||
          Q === S ||
          Q === d ||
          Q === c ||
          Q === T ||
          Q === E ||
          (typeof Q == "object" &&
            Q !== null &&
            (Q.$$typeof === D ||
              Q.$$typeof === N ||
              Q.$$typeof === h ||
              Q.$$typeof === y ||
              Q.$$typeof === R ||
              Q.$$typeof === M ||
              Q.$$typeof === z ||
              Q.$$typeof === H ||
              Q.$$typeof === j))
        );
      }
      function X(Q) {
        if (typeof Q == "object" && Q !== null) {
          var St = Q.$$typeof;
          switch (St) {
            case l:
              var Ht = Q.type;
              switch (Ht) {
                case v:
                case S:
                case s:
                case d:
                case c:
                case T:
                  return Ht;
                default:
                  var jn = Ht && Ht.$$typeof;
                  switch (jn) {
                    case y:
                    case R:
                    case D:
                    case N:
                    case h:
                      return jn;
                    default:
                      return St;
                  }
              }
            case u:
              return St;
          }
        }
      }
      var ye = v,
        Te = S,
        I = y,
        de = h,
        ue = l,
        Oe = R,
        $e = s,
        xe = D,
        De = N,
        J = u,
        et = d,
        Z = c,
        pe = T,
        Ce = !1;
      function Se(Q) {
        return (
          Ce ||
            ((Ce = !0),
            console.warn(
              "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
            )),
          q(Q) || X(Q) === v
        );
      }
      function q(Q) {
        return X(Q) === S;
      }
      function F(Q) {
        return X(Q) === y;
      }
      function oe(Q) {
        return X(Q) === h;
      }
      function be(Q) {
        return typeof Q == "object" && Q !== null && Q.$$typeof === l;
      }
      function me(Q) {
        return X(Q) === R;
      }
      function we(Q) {
        return X(Q) === s;
      }
      function Re(Q) {
        return X(Q) === D;
      }
      function Ne(Q) {
        return X(Q) === N;
      }
      function Ue(Q) {
        return X(Q) === u;
      }
      function Ve(Q) {
        return X(Q) === d;
      }
      function _e(Q) {
        return X(Q) === c;
      }
      function ot(Q) {
        return X(Q) === T;
      }
      (nt.AsyncMode = ye),
        (nt.ConcurrentMode = Te),
        (nt.ContextConsumer = I),
        (nt.ContextProvider = de),
        (nt.Element = ue),
        (nt.ForwardRef = Oe),
        (nt.Fragment = $e),
        (nt.Lazy = xe),
        (nt.Memo = De),
        (nt.Portal = J),
        (nt.Profiler = et),
        (nt.StrictMode = Z),
        (nt.Suspense = pe),
        (nt.isAsyncMode = Se),
        (nt.isConcurrentMode = q),
        (nt.isContextConsumer = F),
        (nt.isContextProvider = oe),
        (nt.isElement = be),
        (nt.isForwardRef = me),
        (nt.isFragment = we),
        (nt.isLazy = Re),
        (nt.isMemo = Ne),
        (nt.isPortal = Ue),
        (nt.isProfiler = Ve),
        (nt.isStrictMode = _e),
        (nt.isSuspense = ot),
        (nt.isValidElementType = ae),
        (nt.typeOf = X);
    })(),
    nt
  );
}
var Y1;
function pT() {
  return Y1 || ((Y1 = 1), (Ih.exports = GD())), Ih.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Zh, q1;
function XD() {
  if (q1) return Zh;
  q1 = 1;
  var o = Object.getOwnPropertySymbols,
    l = Object.prototype.hasOwnProperty,
    u = Object.prototype.propertyIsEnumerable;
  function s(d) {
    if (d == null)
      throw new TypeError(
        "Object.assign cannot be called with null or undefined"
      );
    return Object(d);
  }
  function c() {
    try {
      if (!Object.assign) return !1;
      var d = new String("abc");
      if (((d[5] = "de"), Object.getOwnPropertyNames(d)[0] === "5")) return !1;
      for (var h = {}, y = 0; y < 10; y++) h["_" + String.fromCharCode(y)] = y;
      var v = Object.getOwnPropertyNames(h).map(function (R) {
        return h[R];
      });
      if (v.join("") !== "0123456789") return !1;
      var S = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (R) {
          S[R] = R;
        }),
        Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst"
      );
    } catch {
      return !1;
    }
  }
  return (
    (Zh = c()
      ? Object.assign
      : function (d, h) {
          for (var y, v = s(d), S, R = 1; R < arguments.length; R++) {
            y = Object(arguments[R]);
            for (var T in y) l.call(y, T) && (v[T] = y[T]);
            if (o) {
              S = o(y);
              for (var E = 0; E < S.length; E++)
                u.call(y, S[E]) && (v[S[E]] = y[S[E]]);
            }
          }
          return v;
        }),
    Zh
  );
}
var Wh, P1;
function yT() {
  if (P1) return Wh;
  P1 = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (Wh = o), Wh;
}
var Kh, $1;
function gT() {
  return (
    $1 ||
      (($1 = 1), (Kh = Function.call.bind(Object.prototype.hasOwnProperty))),
    Kh
  );
}
var Jh, G1;
function QD() {
  if (G1) return Jh;
  G1 = 1;
  var o = function () {};
  {
    var l = yT(),
      u = {},
      s = gT();
    o = function (d) {
      var h = "Warning: " + d;
      typeof console < "u" && console.error(h);
      try {
        throw new Error(h);
      } catch {}
    };
  }
  function c(d, h, y, v, S) {
    for (var R in d)
      if (s(d, R)) {
        var T;
        try {
          if (typeof d[R] != "function") {
            var E = Error(
              (v || "React class") +
                ": " +
                y +
                " type `" +
                R +
                "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                typeof d[R] +
                "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
            );
            throw ((E.name = "Invariant Violation"), E);
          }
          T = d[R](h, R, v, y, null, l);
        } catch (D) {
          T = D;
        }
        if (
          (T &&
            !(T instanceof Error) &&
            o(
              (v || "React class") +
                ": type specification of " +
                y +
                " `" +
                R +
                "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                typeof T +
                ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
            ),
          T instanceof Error && !(T.message in u))
        ) {
          u[T.message] = !0;
          var N = S ? S() : "";
          o("Failed " + y + " type: " + T.message + (N ?? ""));
        }
      }
  }
  return (
    (c.resetWarningCache = function () {
      u = {};
    }),
    (Jh = c),
    Jh
  );
}
var ep, X1;
function FD() {
  if (X1) return ep;
  X1 = 1;
  var o = pT(),
    l = XD(),
    u = yT(),
    s = gT(),
    c = QD(),
    d = function () {};
  d = function (y) {
    var v = "Warning: " + y;
    typeof console < "u" && console.error(v);
    try {
      throw new Error(v);
    } catch {}
  };
  function h() {
    return null;
  }
  return (
    (ep = function (y, v) {
      var S = typeof Symbol == "function" && Symbol.iterator,
        R = "@@iterator";
      function T(q) {
        var F = q && ((S && q[S]) || q[R]);
        if (typeof F == "function") return F;
      }
      var E = "<<anonymous>>",
        N = {
          array: z("array"),
          bigint: z("bigint"),
          bool: z("boolean"),
          func: z("function"),
          number: z("number"),
          object: z("object"),
          string: z("string"),
          symbol: z("symbol"),
          any: H(),
          arrayOf: ae,
          element: X(),
          elementType: ye(),
          instanceOf: Te,
          node: Oe(),
          objectOf: de,
          oneOf: I,
          oneOfType: ue,
          shape: xe,
          exact: De,
        };
      function D(q, F) {
        return q === F ? q !== 0 || 1 / q === 1 / F : q !== q && F !== F;
      }
      function j(q, F) {
        (this.message = q),
          (this.data = F && typeof F == "object" ? F : {}),
          (this.stack = "");
      }
      j.prototype = Error.prototype;
      function M(q) {
        var F = {},
          oe = 0;
        function be(we, Re, Ne, Ue, Ve, _e, ot) {
          if (((Ue = Ue || E), (_e = _e || Ne), ot !== u)) {
            if (v) {
              var Q = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((Q.name = "Invariant Violation"), Q);
            } else if (typeof console < "u") {
              var St = Ue + ":" + Ne;
              !F[St] &&
                oe < 3 &&
                (d(
                  "You are manually calling a React.PropTypes validation function for the `" +
                    _e +
                    "` prop on `" +
                    Ue +
                    "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                ),
                (F[St] = !0),
                oe++);
            }
          }
          return Re[Ne] == null
            ? we
              ? Re[Ne] === null
                ? new j(
                    "The " +
                      Ve +
                      " `" +
                      _e +
                      "` is marked as required " +
                      ("in `" + Ue + "`, but its value is `null`.")
                  )
                : new j(
                    "The " +
                      Ve +
                      " `" +
                      _e +
                      "` is marked as required in " +
                      ("`" + Ue + "`, but its value is `undefined`.")
                  )
              : null
            : q(Re, Ne, Ue, Ve, _e);
        }
        var me = be.bind(null, !1);
        return (me.isRequired = be.bind(null, !0)), me;
      }
      function z(q) {
        function F(oe, be, me, we, Re, Ne) {
          var Ue = oe[be],
            Ve = Z(Ue);
          if (Ve !== q) {
            var _e = pe(Ue);
            return new j(
              "Invalid " +
                we +
                " `" +
                Re +
                "` of type " +
                ("`" + _e + "` supplied to `" + me + "`, expected ") +
                ("`" + q + "`."),
              { expectedType: q }
            );
          }
          return null;
        }
        return M(F);
      }
      function H() {
        return M(h);
      }
      function ae(q) {
        function F(oe, be, me, we, Re) {
          if (typeof q != "function")
            return new j(
              "Property `" +
                Re +
                "` of component `" +
                me +
                "` has invalid PropType notation inside arrayOf."
            );
          var Ne = oe[be];
          if (!Array.isArray(Ne)) {
            var Ue = Z(Ne);
            return new j(
              "Invalid " +
                we +
                " `" +
                Re +
                "` of type " +
                ("`" + Ue + "` supplied to `" + me + "`, expected an array.")
            );
          }
          for (var Ve = 0; Ve < Ne.length; Ve++) {
            var _e = q(Ne, Ve, me, we, Re + "[" + Ve + "]", u);
            if (_e instanceof Error) return _e;
          }
          return null;
        }
        return M(F);
      }
      function X() {
        function q(F, oe, be, me, we) {
          var Re = F[oe];
          if (!y(Re)) {
            var Ne = Z(Re);
            return new j(
              "Invalid " +
                me +
                " `" +
                we +
                "` of type " +
                ("`" +
                  Ne +
                  "` supplied to `" +
                  be +
                  "`, expected a single ReactElement.")
            );
          }
          return null;
        }
        return M(q);
      }
      function ye() {
        function q(F, oe, be, me, we) {
          var Re = F[oe];
          if (!o.isValidElementType(Re)) {
            var Ne = Z(Re);
            return new j(
              "Invalid " +
                me +
                " `" +
                we +
                "` of type " +
                ("`" +
                  Ne +
                  "` supplied to `" +
                  be +
                  "`, expected a single ReactElement type.")
            );
          }
          return null;
        }
        return M(q);
      }
      function Te(q) {
        function F(oe, be, me, we, Re) {
          if (!(oe[be] instanceof q)) {
            var Ne = q.name || E,
              Ue = Se(oe[be]);
            return new j(
              "Invalid " +
                we +
                " `" +
                Re +
                "` of type " +
                ("`" + Ue + "` supplied to `" + me + "`, expected ") +
                ("instance of `" + Ne + "`.")
            );
          }
          return null;
        }
        return M(F);
      }
      function I(q) {
        if (!Array.isArray(q))
          return (
            arguments.length > 1
              ? d(
                  "Invalid arguments supplied to oneOf, expected an array, got " +
                    arguments.length +
                    " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                )
              : d("Invalid argument supplied to oneOf, expected an array."),
            h
          );
        function F(oe, be, me, we, Re) {
          for (var Ne = oe[be], Ue = 0; Ue < q.length; Ue++)
            if (D(Ne, q[Ue])) return null;
          var Ve = JSON.stringify(q, function (ot, Q) {
            var St = pe(Q);
            return St === "symbol" ? String(Q) : Q;
          });
          return new j(
            "Invalid " +
              we +
              " `" +
              Re +
              "` of value `" +
              String(Ne) +
              "` " +
              ("supplied to `" + me + "`, expected one of " + Ve + ".")
          );
        }
        return M(F);
      }
      function de(q) {
        function F(oe, be, me, we, Re) {
          if (typeof q != "function")
            return new j(
              "Property `" +
                Re +
                "` of component `" +
                me +
                "` has invalid PropType notation inside objectOf."
            );
          var Ne = oe[be],
            Ue = Z(Ne);
          if (Ue !== "object")
            return new j(
              "Invalid " +
                we +
                " `" +
                Re +
                "` of type " +
                ("`" + Ue + "` supplied to `" + me + "`, expected an object.")
            );
          for (var Ve in Ne)
            if (s(Ne, Ve)) {
              var _e = q(Ne, Ve, me, we, Re + "." + Ve, u);
              if (_e instanceof Error) return _e;
            }
          return null;
        }
        return M(F);
      }
      function ue(q) {
        if (!Array.isArray(q))
          return (
            d(
              "Invalid argument supplied to oneOfType, expected an instance of array."
            ),
            h
          );
        for (var F = 0; F < q.length; F++) {
          var oe = q[F];
          if (typeof oe != "function")
            return (
              d(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                  Ce(oe) +
                  " at index " +
                  F +
                  "."
              ),
              h
            );
        }
        function be(me, we, Re, Ne, Ue) {
          for (var Ve = [], _e = 0; _e < q.length; _e++) {
            var ot = q[_e],
              Q = ot(me, we, Re, Ne, Ue, u);
            if (Q == null) return null;
            Q.data && s(Q.data, "expectedType") && Ve.push(Q.data.expectedType);
          }
          var St =
            Ve.length > 0
              ? ", expected one of type [" + Ve.join(", ") + "]"
              : "";
          return new j(
            "Invalid " +
              Ne +
              " `" +
              Ue +
              "` supplied to " +
              ("`" + Re + "`" + St + ".")
          );
        }
        return M(be);
      }
      function Oe() {
        function q(F, oe, be, me, we) {
          return J(F[oe])
            ? null
            : new j(
                "Invalid " +
                  me +
                  " `" +
                  we +
                  "` supplied to " +
                  ("`" + be + "`, expected a ReactNode.")
              );
        }
        return M(q);
      }
      function $e(q, F, oe, be, me) {
        return new j(
          (q || "React class") +
            ": " +
            F +
            " type `" +
            oe +
            "." +
            be +
            "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
            me +
            "`."
        );
      }
      function xe(q) {
        function F(oe, be, me, we, Re) {
          var Ne = oe[be],
            Ue = Z(Ne);
          if (Ue !== "object")
            return new j(
              "Invalid " +
                we +
                " `" +
                Re +
                "` of type `" +
                Ue +
                "` " +
                ("supplied to `" + me + "`, expected `object`.")
            );
          for (var Ve in q) {
            var _e = q[Ve];
            if (typeof _e != "function") return $e(me, we, Re, Ve, pe(_e));
            var ot = _e(Ne, Ve, me, we, Re + "." + Ve, u);
            if (ot) return ot;
          }
          return null;
        }
        return M(F);
      }
      function De(q) {
        function F(oe, be, me, we, Re) {
          var Ne = oe[be],
            Ue = Z(Ne);
          if (Ue !== "object")
            return new j(
              "Invalid " +
                we +
                " `" +
                Re +
                "` of type `" +
                Ue +
                "` " +
                ("supplied to `" + me + "`, expected `object`.")
            );
          var Ve = l({}, oe[be], q);
          for (var _e in Ve) {
            var ot = q[_e];
            if (s(q, _e) && typeof ot != "function")
              return $e(me, we, Re, _e, pe(ot));
            if (!ot)
              return new j(
                "Invalid " +
                  we +
                  " `" +
                  Re +
                  "` key `" +
                  _e +
                  "` supplied to `" +
                  me +
                  "`.\nBad object: " +
                  JSON.stringify(oe[be], null, "  ") +
                  `
Valid keys: ` +
                  JSON.stringify(Object.keys(q), null, "  ")
              );
            var Q = ot(Ne, _e, me, we, Re + "." + _e, u);
            if (Q) return Q;
          }
          return null;
        }
        return M(F);
      }
      function J(q) {
        switch (typeof q) {
          case "number":
          case "string":
          case "undefined":
            return !0;
          case "boolean":
            return !q;
          case "object":
            if (Array.isArray(q)) return q.every(J);
            if (q === null || y(q)) return !0;
            var F = T(q);
            if (F) {
              var oe = F.call(q),
                be;
              if (F !== q.entries) {
                for (; !(be = oe.next()).done; ) if (!J(be.value)) return !1;
              } else
                for (; !(be = oe.next()).done; ) {
                  var me = be.value;
                  if (me && !J(me[1])) return !1;
                }
            } else return !1;
            return !0;
          default:
            return !1;
        }
      }
      function et(q, F) {
        return q === "symbol"
          ? !0
          : F
          ? F["@@toStringTag"] === "Symbol" ||
            (typeof Symbol == "function" && F instanceof Symbol)
          : !1;
      }
      function Z(q) {
        var F = typeof q;
        return Array.isArray(q)
          ? "array"
          : q instanceof RegExp
          ? "object"
          : et(F, q)
          ? "symbol"
          : F;
      }
      function pe(q) {
        if (typeof q > "u" || q === null) return "" + q;
        var F = Z(q);
        if (F === "object") {
          if (q instanceof Date) return "date";
          if (q instanceof RegExp) return "regexp";
        }
        return F;
      }
      function Ce(q) {
        var F = pe(q);
        switch (F) {
          case "array":
          case "object":
            return "an " + F;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + F;
          default:
            return F;
        }
      }
      function Se(q) {
        return !q.constructor || !q.constructor.name ? E : q.constructor.name;
      }
      return (
        (N.checkPropTypes = c),
        (N.resetWarningCache = c.resetWarningCache),
        (N.PropTypes = N),
        N
      );
    }),
    ep
  );
}
var Q1;
function ID() {
  if (Q1) return Fh.exports;
  Q1 = 1;
  {
    var o = pT(),
      l = !0;
    Fh.exports = FD()(o.isElement, l);
  }
  return Fh.exports;
}
var ZD = ID();
const Qe = vE(ZD);
function F1(o, l) {
  var u = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(o);
    l &&
      (s = s.filter(function (c) {
        return Object.getOwnPropertyDescriptor(o, c).enumerable;
      })),
      u.push.apply(u, s);
  }
  return u;
}
function ja(o) {
  for (var l = 1; l < arguments.length; l++) {
    var u = arguments[l] != null ? arguments[l] : {};
    l % 2
      ? F1(Object(u), !0).forEach(function (s) {
          ni(o, s, u[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u))
      : F1(Object(u)).forEach(function (s) {
          Object.defineProperty(o, s, Object.getOwnPropertyDescriptor(u, s));
        });
  }
  return o;
}
function af(o) {
  "@babel/helpers - typeof";
  return (
    (af =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (l) {
            return typeof l;
          }
        : function (l) {
            return l &&
              typeof Symbol == "function" &&
              l.constructor === Symbol &&
              l !== Symbol.prototype
              ? "symbol"
              : typeof l;
          }),
    af(o)
  );
}
function ni(o, l, u) {
  return (
    l in o
      ? Object.defineProperty(o, l, {
          value: u,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (o[l] = u),
    o
  );
}
function WD(o, l) {
  if (o == null) return {};
  var u = {},
    s = Object.keys(o),
    c,
    d;
  for (d = 0; d < s.length; d++)
    (c = s[d]), !(l.indexOf(c) >= 0) && (u[c] = o[c]);
  return u;
}
function KD(o, l) {
  if (o == null) return {};
  var u = WD(o, l),
    s,
    c;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(o);
    for (c = 0; c < d.length; c++)
      (s = d[c]),
        !(l.indexOf(s) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(o, s) &&
          (u[s] = o[s]);
  }
  return u;
}
function Cp(o) {
  return JD(o) || eN(o) || tN(o) || nN();
}
function JD(o) {
  if (Array.isArray(o)) return Op(o);
}
function eN(o) {
  if (
    (typeof Symbol < "u" && o[Symbol.iterator] != null) ||
    o["@@iterator"] != null
  )
    return Array.from(o);
}
function tN(o, l) {
  if (o) {
    if (typeof o == "string") return Op(o, l);
    var u = Object.prototype.toString.call(o).slice(8, -1);
    if (
      (u === "Object" && o.constructor && (u = o.constructor.name),
      u === "Map" || u === "Set")
    )
      return Array.from(o);
    if (u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
      return Op(o, l);
  }
}
function Op(o, l) {
  (l == null || l > o.length) && (l = o.length);
  for (var u = 0, s = new Array(l); u < l; u++) s[u] = o[u];
  return s;
}
function nN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aN(o) {
  var l,
    u = o.beat,
    s = o.fade,
    c = o.beatFade,
    d = o.bounce,
    h = o.shake,
    y = o.flash,
    v = o.spin,
    S = o.spinPulse,
    R = o.spinReverse,
    T = o.pulse,
    E = o.fixedWidth,
    N = o.inverse,
    D = o.border,
    j = o.listItem,
    M = o.flip,
    z = o.size,
    H = o.rotation,
    ae = o.pull,
    X =
      ((l = {
        "fa-beat": u,
        "fa-fade": s,
        "fa-beat-fade": c,
        "fa-bounce": d,
        "fa-shake": h,
        "fa-flash": y,
        "fa-spin": v,
        "fa-spin-reverse": R,
        "fa-spin-pulse": S,
        "fa-pulse": T,
        "fa-fw": E,
        "fa-inverse": N,
        "fa-border": D,
        "fa-li": j,
        "fa-flip": M === !0,
        "fa-flip-horizontal": M === "horizontal" || M === "both",
        "fa-flip-vertical": M === "vertical" || M === "both",
      }),
      ni(l, "fa-".concat(z), typeof z < "u" && z !== null),
      ni(l, "fa-rotate-".concat(H), typeof H < "u" && H !== null && H !== 0),
      ni(l, "fa-pull-".concat(ae), typeof ae < "u" && ae !== null),
      ni(l, "fa-swap-opacity", o.swapOpacity),
      l);
  return Object.keys(X)
    .map(function (ye) {
      return X[ye] ? ye : null;
    })
    .filter(function (ye) {
      return ye;
    });
}
function oN(o) {
  return (o = o - 0), o === o;
}
function vT(o) {
  return oN(o)
    ? o
    : ((o = o.replace(/[\-_\s]+(.)?/g, function (l, u) {
        return u ? u.toUpperCase() : "";
      })),
      o.substr(0, 1).toLowerCase() + o.substr(1));
}
var rN = ["style"];
function lN(o) {
  return o.charAt(0).toUpperCase() + o.slice(1);
}
function iN(o) {
  return o
    .split(";")
    .map(function (l) {
      return l.trim();
    })
    .filter(function (l) {
      return l;
    })
    .reduce(function (l, u) {
      var s = u.indexOf(":"),
        c = vT(u.slice(0, s)),
        d = u.slice(s + 1).trim();
      return c.startsWith("webkit") ? (l[lN(c)] = d) : (l[c] = d), l;
    }, {});
}
function bT(o, l) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof l == "string") return l;
  var s = (l.children || []).map(function (v) {
      return bT(o, v);
    }),
    c = Object.keys(l.attributes || {}).reduce(
      function (v, S) {
        var R = l.attributes[S];
        switch (S) {
          case "class":
            (v.attrs.className = R), delete l.attributes.class;
            break;
          case "style":
            v.attrs.style = iN(R);
            break;
          default:
            S.indexOf("aria-") === 0 || S.indexOf("data-") === 0
              ? (v.attrs[S.toLowerCase()] = R)
              : (v.attrs[vT(S)] = R);
        }
        return v;
      },
      { attrs: {} }
    ),
    d = u.style,
    h = d === void 0 ? {} : d,
    y = KD(u, rN);
  return (
    (c.attrs.style = ja(ja({}, c.attrs.style), h)),
    o.apply(void 0, [l.tag, ja(ja({}, c.attrs), y)].concat(Cp(s)))
  );
}
var ST = !1;
try {
  ST = !1;
} catch {}
function uN() {
  if (!ST && console && typeof console.error == "function") {
    var o;
    (o = console).error.apply(o, arguments);
  }
}
function I1(o) {
  if (o && af(o) === "object" && o.prefix && o.iconName && o.icon) return o;
  if (Ap.icon) return Ap.icon(o);
  if (o === null) return null;
  if (o && af(o) === "object" && o.prefix && o.iconName) return o;
  if (Array.isArray(o) && o.length === 2)
    return { prefix: o[0], iconName: o[1] };
  if (typeof o == "string") return { prefix: "fas", iconName: o };
}
function tp(o, l) {
  return (Array.isArray(l) && l.length > 0) || (!Array.isArray(l) && l)
    ? ni({}, o, l)
    : {};
}
var Z1 = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  Fr = bE.forwardRef(function (o, l) {
    var u = ja(ja({}, Z1), o),
      s = u.icon,
      c = u.mask,
      d = u.symbol,
      h = u.className,
      y = u.title,
      v = u.titleId,
      S = u.maskId,
      R = I1(s),
      T = tp("classes", [].concat(Cp(aN(u)), Cp((h || "").split(" ")))),
      E = tp(
        "transform",
        typeof u.transform == "string" ? Ap.transform(u.transform) : u.transform
      ),
      N = tp("mask", I1(c)),
      D = $D(
        R,
        ja(
          ja(ja(ja({}, T), E), N),
          {},
          { symbol: d, title: y, titleId: v, maskId: S }
        )
      );
    if (!D) return uN("Could not find icon", R), null;
    var j = D.abstract,
      M = { ref: l };
    return (
      Object.keys(u).forEach(function (z) {
        Z1.hasOwnProperty(z) || (M[z] = u[z]);
      }),
      sN(j[0], M)
    );
  });
Fr.displayName = "FontAwesomeIcon";
Fr.propTypes = {
  beat: Qe.bool,
  border: Qe.bool,
  beatFade: Qe.bool,
  bounce: Qe.bool,
  className: Qe.string,
  fade: Qe.bool,
  flash: Qe.bool,
  mask: Qe.oneOfType([Qe.object, Qe.array, Qe.string]),
  maskId: Qe.string,
  fixedWidth: Qe.bool,
  inverse: Qe.bool,
  flip: Qe.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: Qe.oneOfType([Qe.object, Qe.array, Qe.string]),
  listItem: Qe.bool,
  pull: Qe.oneOf(["right", "left"]),
  pulse: Qe.bool,
  rotation: Qe.oneOf([0, 90, 180, 270]),
  shake: Qe.bool,
  size: Qe.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: Qe.bool,
  spinPulse: Qe.bool,
  spinReverse: Qe.bool,
  symbol: Qe.oneOfType([Qe.bool, Qe.string]),
  title: Qe.string,
  titleId: Qe.string,
  transform: Qe.oneOfType([Qe.string, Qe.object]),
  swapOpacity: Qe.bool,
};
var sN = bT.bind(null, bE.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ const cN = {
    prefix: "fas",
    iconName: "forward-step",
    icon: [
      320,
      512,
      ["step-forward"],
      "f051",
      "M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z",
    ],
  },
  Wp = {
    prefix: "fas",
    iconName: "circle-play",
    icon: [
      512,
      512,
      [61469, "play-circle"],
      "f144",
      "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z",
    ],
  },
  fN = {
    prefix: "fas",
    iconName: "circle-pause",
    icon: [
      512,
      512,
      [62092, "pause-circle"],
      "f28b",
      "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32z",
    ],
  },
  dN = {
    prefix: "fas",
    iconName: "backward-step",
    icon: [
      320,
      512,
      ["step-backward"],
      "f048",
      "M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 11.5 9.6 192 160z",
    ],
  },
  mN = ({ _id: o, name: l, image: u, banner: s, artist: c, idPath: d }) =>
    te.jsxDEV(
      fa,
      {
        to: `${d}/${o}`,
        className: "single-item",
        children: [
          te.jsxDEV(
            "div",
            {
              className: "single-item__div-image-button",
              children: [
                te.jsxDEV(
                  "div",
                  {
                    className: "single-item__div-image",
                    children: te.jsxDEV(
                      "img",
                      {
                        className: "single-item__image",
                        src: u,
                        alt: `Imagem do Artista ${l}`,
                      },
                      void 0,
                      !1,
                      {
                        fileName:
                          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SingleItem.jsx",
                        lineNumber: 11,
                        columnNumber: 11,
                      },
                      void 0
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SingleItem.jsx",
                    lineNumber: 10,
                    columnNumber: 9,
                  },
                  void 0
                ),
                te.jsxDEV(
                  Fr,
                  { className: "single-item__icon ", icon: Wp },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SingleItem.jsx",
                    lineNumber: 18,
                    columnNumber: 9,
                  },
                  void 0
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SingleItem.jsx",
              lineNumber: 9,
              columnNumber: 7,
            },
            void 0
          ),
          te.jsxDEV(
            "div",
            {
              className: "single-item__texts",
              children: [
                te.jsxDEV(
                  "div",
                  {
                    className: "single-item__2lines",
                    children: te.jsxDEV(
                      "p",
                      { className: "single-item__title", children: l },
                      void 0,
                      !1,
                      {
                        fileName:
                          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SingleItem.jsx",
                        lineNumber: 23,
                        columnNumber: 11,
                      },
                      void 0
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SingleItem.jsx",
                    lineNumber: 22,
                    columnNumber: 9,
                  },
                  void 0
                ),
                te.jsxDEV(
                  "p",
                  { className: "single-item__type", children: c ?? "Artista" },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SingleItem.jsx",
                    lineNumber: 26,
                    columnNumber: 9,
                  },
                  void 0
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SingleItem.jsx",
              lineNumber: 21,
              columnNumber: 7,
            },
            void 0
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SingleItem.jsx",
        lineNumber: 8,
        columnNumber: 5,
      },
      void 0
    ),
  W1 = ({ title: o, items: l, itemsArray: u, path: s, idPath: c }) => {
    const { pathname: d } = ar(),
      h = d === "/",
      y = h ? l : 1 / 0;
    return te.jsxDEV(
      "div",
      {
        className: "item-list",
        children: [
          te.jsxDEV(
            "div",
            {
              className: "item-list__header",
              children: [
                te.jsxDEV(
                  "h2",
                  { children: [o, " populares"] },
                  void 0,
                  !0,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/ItemList.jsx",
                    lineNumber: 16,
                    columnNumber: 9,
                  },
                  void 0
                ),
                h
                  ? te.jsxDEV(
                      fa,
                      {
                        to: s,
                        className: "item-list__link",
                        children: "Mostrar tudo",
                      },
                      void 0,
                      !1,
                      {
                        fileName:
                          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/ItemList.jsx",
                        lineNumber: 19,
                        columnNumber: 11,
                      },
                      void 0
                    )
                  : te.jsxDEV(
                      te.Fragment,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/ItemList.jsx",
                        lineNumber: 23,
                        columnNumber: 11,
                      },
                      void 0
                    ),
              ],
            },
            void 0,
            !0,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/ItemList.jsx",
              lineNumber: 15,
              columnNumber: 7,
            },
            void 0
          ),
          te.jsxDEV(
            "div",
            {
              className: "item-list__container",
              children: u
                .filter((v, S) => S < y)
                .map((v, S) =>
                  P.createElement(mN, { ...v, idPath: c, key: `${o}-${S}` })
                ),
            },
            void 0,
            !1,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/ItemList.jsx",
              lineNumber: 27,
              columnNumber: 7,
            },
            void 0
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/ItemList.jsx",
        lineNumber: 14,
        columnNumber: 5,
      },
      void 0
    );
  };
var K1 = {},
  _a = { exports: {} };
const hN = new Proxy(
    {},
    {
      get(o, l) {
        throw new Error(
          `Module "" has been externalized for browser compatibility. Cannot access ".${l}" in client code.  See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`
        );
      },
    }
  ),
  pN = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: hN },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  yN = uf(pN),
  gN = new Proxy(
    {},
    {
      get(o, l) {
        throw new Error(
          `Module "path" has been externalized for browser compatibility. Cannot access "path.${l}" in client code.  See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`
        );
      },
    }
  ),
  vN = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: gN },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  bN = uf(vN),
  SN = new Proxy(
    {},
    {
      get(o, l) {
        throw new Error(
          `Module "os" has been externalized for browser compatibility. Cannot access "os.${l}" in client code.  See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`
        );
      },
    }
  ),
  EN = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: SN },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  TN = uf(EN),
  RN = new Proxy(
    {},
    {
      get(o, l) {
        throw new Error(
          `Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${l}" in client code.  See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`
        );
      },
    }
  ),
  xN = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: RN },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  wN = uf(xN),
  AN = "16.4.7",
  CN = { version: AN };
var J1;
function ON() {
  if (J1) return _a.exports;
  J1 = 1;
  var o = {};
  const l = yN,
    u = bN,
    s = TN,
    c = wN,
    h = CN.version,
    y =
      /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
  function v(I) {
    const de = {};
    let ue = I.toString();
    ue = ue.replace(
      /\r\n?/gm,
      `
`
    );
    let Oe;
    for (; (Oe = y.exec(ue)) != null; ) {
      const $e = Oe[1];
      let xe = Oe[2] || "";
      xe = xe.trim();
      const De = xe[0];
      (xe = xe.replace(/^(['"`])([\s\S]*)\1$/gm, "$2")),
        De === '"' &&
          ((xe = xe.replace(
            /\\n/g,
            `
`
          )),
          (xe = xe.replace(/\\r/g, "\r"))),
        (de[$e] = xe);
    }
    return de;
  }
  function S(I) {
    const de = j(I),
      ue = Te.config({ path: de });
    if (!ue.parsed) {
      const De = new Error(
        `MISSING_DATA: Cannot parse ${de} for an unknown reason`
      );
      throw ((De.code = "MISSING_DATA"), De);
    }
    const Oe = N(I).split(","),
      $e = Oe.length;
    let xe;
    for (let De = 0; De < $e; De++)
      try {
        const J = Oe[De].trim(),
          et = D(ue, J);
        xe = Te.decrypt(et.ciphertext, et.key);
        break;
      } catch (J) {
        if (De + 1 >= $e) throw J;
      }
    return Te.parse(xe);
  }
  function R(I) {
    console.log(`[@${h}][INFO] ${I}`);
  }
  function T(I) {
    console.log();
  }
  function E(I) {
    console.log(`[DEBUG] ${I}`);
  }
  function N(I) {
    return I && I.DOTENV_KEY && I.DOTENV_KEY.length > 0
      ? I.DOTENV_KEY
      : o.DOTENV_KEY && o.DOTENV_KEY.length > 0
      ? o.DOTENV_KEY
      : "";
  }
  function D(I, de) {
    let ue;
    try {
      ue = new URL(de);
    } catch (J) {
      if (J.code === "ERR_INVALID_URL") {
        const et = new Error(
          "INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development"
        );
        throw ((et.code = "INVALID_DOTENV_KEY"), et);
      }
      throw J;
    }
    const Oe = ue.password;
    if (!Oe) {
      const J = new Error("INVALID_DOTENV_KEY: Missing key part");
      throw ((J.code = "INVALID_DOTENV_KEY"), J);
    }
    const $e = ue.searchParams.get("environment");
    if (!$e) {
      const J = new Error("INVALID_DOTENV_KEY: Missing environment part");
      throw ((J.code = "INVALID_DOTENV_KEY"), J);
    }
    const xe = `DOTENV_VAULT_${$e.toUpperCase()}`,
      De = I.parsed[xe];
    if (!De) {
      const J = new Error(
        `NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${xe} in your .env.vault file.`
      );
      throw ((J.code = "NOT_FOUND_DOTENV_ENVIRONMENT"), J);
    }
    return { ciphertext: De, key: Oe };
  }
  function j(I) {
    let de = null;
    if (I && I.path && I.path.length > 0)
      if (Array.isArray(I.path))
        for (const ue of I.path)
          l.existsSync(ue) && (de = ue.endsWith(".vault") ? ue : `${ue}.vault`);
      else de = I.path.endsWith(".vault") ? I.path : `${I.path}.vault`;
    else de = u.resolve(process.cwd(), ".env.vault");
    return l.existsSync(de) ? de : null;
  }
  function M(I) {
    return I[0] === "~" ? u.join(s.homedir(), I.slice(1)) : I;
  }
  function z(I) {
    R("Loading env from encrypted .env.vault");
    const de = Te._parseVault(I);
    let ue = o;
    return (
      I && I.processEnv != null && (ue = I.processEnv),
      Te.populate(ue, de, I),
      { parsed: de }
    );
  }
  function H(I) {
    const de = u.resolve(process.cwd(), ".env");
    let ue = "utf8";
    const Oe = !!(I && I.debug);
    I && I.encoding
      ? (ue = I.encoding)
      : Oe && E("No encoding is specified. UTF-8 is used by default");
    let $e = [de];
    if (I && I.path)
      if (!Array.isArray(I.path)) $e = [M(I.path)];
      else {
        $e = [];
        for (const et of I.path) $e.push(M(et));
      }
    let xe;
    const De = {};
    for (const et of $e)
      try {
        const Z = Te.parse(l.readFileSync(et, { encoding: ue }));
        Te.populate(De, Z, I);
      } catch (Z) {
        Oe && E(`Failed to load ${et} ${Z.message}`), (xe = Z);
      }
    let J = o;
    return (
      I && I.processEnv != null && (J = I.processEnv),
      Te.populate(J, De, I),
      xe ? { parsed: De, error: xe } : { parsed: De }
    );
  }
  function ae(I) {
    if (N(I).length === 0) return Te.configDotenv(I);
    const de = j(I);
    return de
      ? Te._configVault(I)
      : (T(
          `You set DOTENV_KEY but you are missing a .env.vault file at ${de}. Did you forget to build it?`
        ),
        Te.configDotenv(I));
  }
  function X(I, de) {
    const ue = Buffer.from(de.slice(-64), "hex");
    let Oe = Buffer.from(I, "base64");
    const $e = Oe.subarray(0, 12),
      xe = Oe.subarray(-16);
    Oe = Oe.subarray(12, -16);
    try {
      const De = c.createDecipheriv("aes-256-gcm", ue, $e);
      return De.setAuthTag(xe), `${De.update(Oe)}${De.final()}`;
    } catch (De) {
      const J = De instanceof RangeError,
        et = De.message === "Invalid key length",
        Z = De.message === "Unsupported state or unable to authenticate data";
      if (J || et) {
        const pe = new Error(
          "INVALID_DOTENV_KEY: It must be 64 characters long (or more)"
        );
        throw ((pe.code = "INVALID_DOTENV_KEY"), pe);
      } else if (Z) {
        const pe = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
        throw ((pe.code = "DECRYPTION_FAILED"), pe);
      } else throw De;
    }
  }
  function ye(I, de, ue = {}) {
    const Oe = !!(ue && ue.debug),
      $e = !!(ue && ue.override);
    if (typeof de != "object") {
      const xe = new Error(
        "OBJECT_REQUIRED: Please check the processEnv argument being passed to populate"
      );
      throw ((xe.code = "OBJECT_REQUIRED"), xe);
    }
    for (const xe of Object.keys(de))
      Object.prototype.hasOwnProperty.call(I, xe)
        ? ($e === !0 && (I[xe] = de[xe]),
          Oe &&
            E(
              $e === !0
                ? `"${xe}" is already defined and WAS overwritten`
                : `"${xe}" is already defined and was NOT overwritten`
            ))
        : (I[xe] = de[xe]);
  }
  const Te = {
    configDotenv: H,
    _configVault: z,
    _parseVault: S,
    config: ae,
    decrypt: X,
    parse: v,
    populate: ye,
  };
  return (
    (_a.exports.configDotenv = Te.configDotenv),
    (_a.exports._configVault = Te._configVault),
    (_a.exports._parseVault = Te._parseVault),
    (_a.exports.config = Te.config),
    (_a.exports.decrypt = Te.decrypt),
    (_a.exports.parse = Te.parse),
    (_a.exports.populate = Te.populate),
    (_a.exports = Te),
    _a.exports
  );
}
var np, eE;
function DN() {
  if (eE) return np;
  eE = 1;
  var o = {};
  const l = {};
  return (
    o.DOTENV_CONFIG_ENCODING != null && (l.encoding = o.DOTENV_CONFIG_ENCODING),
    o.DOTENV_CONFIG_PATH != null && (l.path = o.DOTENV_CONFIG_PATH),
    o.DOTENV_CONFIG_DEBUG != null && (l.debug = o.DOTENV_CONFIG_DEBUG),
    o.DOTENV_CONFIG_OVERRIDE != null && (l.override = o.DOTENV_CONFIG_OVERRIDE),
    o.DOTENV_CONFIG_DOTENV_KEY != null &&
      (l.DOTENV_KEY = o.DOTENV_CONFIG_DOTENV_KEY),
    (np = l),
    np
  );
}
var ap, tE;
function NN() {
  if (tE) return ap;
  tE = 1;
  const o = /^dotenv_config_(encoding|path|debug|override|DOTENV_KEY)=(.+)$/;
  return (
    (ap = function (u) {
      return u.reduce(function (s, c) {
        const d = c.match(o);
        return d && (s[d[1]] = d[2]), s;
      }, {});
    }),
    ap
  );
}
var nE;
function MN() {
  return (
    nE ||
      ((nE = 1),
      (function () {
        ON().config(Object.assign({}, DN(), NN()(process.argv)));
      })()),
    K1
  );
}
MN();
function ET(o, l) {
  return function () {
    return o.apply(l, arguments);
  };
}
const { toString: UN } = Object.prototype,
  { getPrototypeOf: Kp } = Object,
  gf = ((o) => (l) => {
    const u = UN.call(l);
    return o[u] || (o[u] = u.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  da = (o) => ((o = o.toLowerCase()), (l) => gf(l) === o),
  vf = (o) => (l) => typeof l === o,
  { isArray: ui } = Array,
  Qu = vf("undefined");
function _N(o) {
  return (
    o !== null &&
    !Qu(o) &&
    o.constructor !== null &&
    !Qu(o.constructor) &&
    _n(o.constructor.isBuffer) &&
    o.constructor.isBuffer(o)
  );
}
const TT = da("ArrayBuffer");
function zN(o) {
  let l;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (l = ArrayBuffer.isView(o))
      : (l = o && o.buffer && TT(o.buffer)),
    l
  );
}
const jN = vf("string"),
  _n = vf("function"),
  RT = vf("number"),
  bf = (o) => o !== null && typeof o == "object",
  HN = (o) => o === !0 || o === !1,
  Wc = (o) => {
    if (gf(o) !== "object") return !1;
    const l = Kp(o);
    return (
      (l === null ||
        l === Object.prototype ||
        Object.getPrototypeOf(l) === null) &&
      !(Symbol.toStringTag in o) &&
      !(Symbol.iterator in o)
    );
  },
  kN = da("Date"),
  LN = da("File"),
  BN = da("Blob"),
  VN = da("FileList"),
  YN = (o) => bf(o) && _n(o.pipe),
  qN = (o) => {
    let l;
    return (
      o &&
      ((typeof FormData == "function" && o instanceof FormData) ||
        (_n(o.append) &&
          ((l = gf(o)) === "formdata" ||
            (l === "object" &&
              _n(o.toString) &&
              o.toString() === "[object FormData]"))))
    );
  },
  PN = da("URLSearchParams"),
  [$N, GN, XN, QN] = ["ReadableStream", "Request", "Response", "Headers"].map(
    da
  ),
  FN = (o) =>
    o.trim ? o.trim() : o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ju(o, l, { allOwnKeys: u = !1 } = {}) {
  if (o === null || typeof o > "u") return;
  let s, c;
  if ((typeof o != "object" && (o = [o]), ui(o)))
    for (s = 0, c = o.length; s < c; s++) l.call(null, o[s], s, o);
  else {
    const d = u ? Object.getOwnPropertyNames(o) : Object.keys(o),
      h = d.length;
    let y;
    for (s = 0; s < h; s++) (y = d[s]), l.call(null, o[y], y, o);
  }
}
function xT(o, l) {
  l = l.toLowerCase();
  const u = Object.keys(o);
  let s = u.length,
    c;
  for (; s-- > 0; ) if (((c = u[s]), l === c.toLowerCase())) return c;
  return null;
}
const Qr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  wT = (o) => !Qu(o) && o !== Qr;
function Dp() {
  const { caseless: o } = (wT(this) && this) || {},
    l = {},
    u = (s, c) => {
      const d = (o && xT(l, c)) || c;
      Wc(l[d]) && Wc(s)
        ? (l[d] = Dp(l[d], s))
        : Wc(s)
        ? (l[d] = Dp({}, s))
        : ui(s)
        ? (l[d] = s.slice())
        : (l[d] = s);
    };
  for (let s = 0, c = arguments.length; s < c; s++)
    arguments[s] && Ju(arguments[s], u);
  return l;
}
const IN = (o, l, u, { allOwnKeys: s } = {}) => (
    Ju(
      l,
      (c, d) => {
        u && _n(c) ? (o[d] = ET(c, u)) : (o[d] = c);
      },
      { allOwnKeys: s }
    ),
    o
  ),
  ZN = (o) => (o.charCodeAt(0) === 65279 && (o = o.slice(1)), o),
  WN = (o, l, u, s) => {
    (o.prototype = Object.create(l.prototype, s)),
      (o.prototype.constructor = o),
      Object.defineProperty(o, "super", { value: l.prototype }),
      u && Object.assign(o.prototype, u);
  },
  KN = (o, l, u, s) => {
    let c, d, h;
    const y = {};
    if (((l = l || {}), o == null)) return l;
    do {
      for (c = Object.getOwnPropertyNames(o), d = c.length; d-- > 0; )
        (h = c[d]), (!s || s(h, o, l)) && !y[h] && ((l[h] = o[h]), (y[h] = !0));
      o = u !== !1 && Kp(o);
    } while (o && (!u || u(o, l)) && o !== Object.prototype);
    return l;
  },
  JN = (o, l, u) => {
    (o = String(o)),
      (u === void 0 || u > o.length) && (u = o.length),
      (u -= l.length);
    const s = o.indexOf(l, u);
    return s !== -1 && s === u;
  },
  eM = (o) => {
    if (!o) return null;
    if (ui(o)) return o;
    let l = o.length;
    if (!RT(l)) return null;
    const u = new Array(l);
    for (; l-- > 0; ) u[l] = o[l];
    return u;
  },
  tM = (
    (o) => (l) =>
      o && l instanceof o
  )(typeof Uint8Array < "u" && Kp(Uint8Array)),
  nM = (o, l) => {
    const s = (o && o[Symbol.iterator]).call(o);
    let c;
    for (; (c = s.next()) && !c.done; ) {
      const d = c.value;
      l.call(o, d[0], d[1]);
    }
  },
  aM = (o, l) => {
    let u;
    const s = [];
    for (; (u = o.exec(l)) !== null; ) s.push(u);
    return s;
  },
  oM = da("HTMLFormElement"),
  rM = (o) =>
    o.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (u, s, c) {
      return s.toUpperCase() + c;
    }),
  aE = (
    ({ hasOwnProperty: o }) =>
    (l, u) =>
      o.call(l, u)
  )(Object.prototype),
  lM = da("RegExp"),
  AT = (o, l) => {
    const u = Object.getOwnPropertyDescriptors(o),
      s = {};
    Ju(u, (c, d) => {
      let h;
      (h = l(c, d, o)) !== !1 && (s[d] = h || c);
    }),
      Object.defineProperties(o, s);
  },
  iM = (o) => {
    AT(o, (l, u) => {
      if (_n(o) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
        return !1;
      const s = o[u];
      if (_n(s)) {
        if (((l.enumerable = !1), "writable" in l)) {
          l.writable = !1;
          return;
        }
        l.set ||
          (l.set = () => {
            throw Error("Can not rewrite read-only method '" + u + "'");
          });
      }
    });
  },
  uM = (o, l) => {
    const u = {},
      s = (c) => {
        c.forEach((d) => {
          u[d] = !0;
        });
      };
    return ui(o) ? s(o) : s(String(o).split(l)), u;
  },
  sM = () => {},
  cM = (o, l) => (o != null && Number.isFinite((o = +o)) ? o : l),
  op = "abcdefghijklmnopqrstuvwxyz",
  oE = "0123456789",
  CT = { DIGIT: oE, ALPHA: op, ALPHA_DIGIT: op + op.toUpperCase() + oE },
  fM = (o = 16, l = CT.ALPHA_DIGIT) => {
    let u = "";
    const { length: s } = l;
    for (; o--; ) u += l[(Math.random() * s) | 0];
    return u;
  };
function dM(o) {
  return !!(
    o &&
    _n(o.append) &&
    o[Symbol.toStringTag] === "FormData" &&
    o[Symbol.iterator]
  );
}
const mM = (o) => {
    const l = new Array(10),
      u = (s, c) => {
        if (bf(s)) {
          if (l.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            l[c] = s;
            const d = ui(s) ? [] : {};
            return (
              Ju(s, (h, y) => {
                const v = u(h, c + 1);
                !Qu(v) && (d[y] = v);
              }),
              (l[c] = void 0),
              d
            );
          }
        }
        return s;
      };
    return u(o, 0);
  },
  hM = da("AsyncFunction"),
  pM = (o) => o && (bf(o) || _n(o)) && _n(o.then) && _n(o.catch),
  OT = ((o, l) =>
    o
      ? setImmediate
      : l
      ? ((u, s) => (
          Qr.addEventListener(
            "message",
            ({ source: c, data: d }) => {
              c === Qr && d === u && s.length && s.shift()();
            },
            !1
          ),
          (c) => {
            s.push(c), Qr.postMessage(u, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (u) => setTimeout(u))(
    typeof setImmediate == "function",
    _n(Qr.postMessage)
  ),
  yM =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Qr)
      : (typeof process < "u" && process.nextTick) || OT,
  B = {
    isArray: ui,
    isArrayBuffer: TT,
    isBuffer: _N,
    isFormData: qN,
    isArrayBufferView: zN,
    isString: jN,
    isNumber: RT,
    isBoolean: HN,
    isObject: bf,
    isPlainObject: Wc,
    isReadableStream: $N,
    isRequest: GN,
    isResponse: XN,
    isHeaders: QN,
    isUndefined: Qu,
    isDate: kN,
    isFile: LN,
    isBlob: BN,
    isRegExp: lM,
    isFunction: _n,
    isStream: YN,
    isURLSearchParams: PN,
    isTypedArray: tM,
    isFileList: VN,
    forEach: Ju,
    merge: Dp,
    extend: IN,
    trim: FN,
    stripBOM: ZN,
    inherits: WN,
    toFlatObject: KN,
    kindOf: gf,
    kindOfTest: da,
    endsWith: JN,
    toArray: eM,
    forEachEntry: nM,
    matchAll: aM,
    isHTMLForm: oM,
    hasOwnProperty: aE,
    hasOwnProp: aE,
    reduceDescriptors: AT,
    freezeMethods: iM,
    toObjectSet: uM,
    toCamelCase: rM,
    noop: sM,
    toFiniteNumber: cM,
    findKey: xT,
    global: Qr,
    isContextDefined: wT,
    ALPHABET: CT,
    generateString: fM,
    isSpecCompliantForm: dM,
    toJSONObject: mM,
    isAsyncFn: hM,
    isThenable: pM,
    setImmediate: OT,
    asap: yM,
  };
function Be(o, l, u, s, c) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = o),
    (this.name = "AxiosError"),
    l && (this.code = l),
    u && (this.config = u),
    s && (this.request = s),
    c && ((this.response = c), (this.status = c.status ? c.status : null));
}
B.inherits(Be, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: B.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const DT = Be.prototype,
  NT = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((o) => {
  NT[o] = { value: o };
});
Object.defineProperties(Be, NT);
Object.defineProperty(DT, "isAxiosError", { value: !0 });
Be.from = (o, l, u, s, c, d) => {
  const h = Object.create(DT);
  return (
    B.toFlatObject(
      o,
      h,
      function (v) {
        return v !== Error.prototype;
      },
      (y) => y !== "isAxiosError"
    ),
    Be.call(h, o.message, l, u, s, c),
    (h.cause = o),
    (h.name = o.name),
    d && Object.assign(h, d),
    h
  );
};
const gM = null;
function Np(o) {
  return B.isPlainObject(o) || B.isArray(o);
}
function MT(o) {
  return B.endsWith(o, "[]") ? o.slice(0, -2) : o;
}
function rE(o, l, u) {
  return o
    ? o
        .concat(l)
        .map(function (c, d) {
          return (c = MT(c)), !u && d ? "[" + c + "]" : c;
        })
        .join(u ? "." : "")
    : l;
}
function vM(o) {
  return B.isArray(o) && !o.some(Np);
}
const bM = B.toFlatObject(B, {}, null, function (l) {
  return /^is[A-Z]/.test(l);
});
function Sf(o, l, u) {
  if (!B.isObject(o)) throw new TypeError("target must be an object");
  (l = l || new FormData()),
    (u = B.toFlatObject(
      u,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (j, M) {
        return !B.isUndefined(M[j]);
      }
    ));
  const s = u.metaTokens,
    c = u.visitor || R,
    d = u.dots,
    h = u.indexes,
    v = (u.Blob || (typeof Blob < "u" && Blob)) && B.isSpecCompliantForm(l);
  if (!B.isFunction(c)) throw new TypeError("visitor must be a function");
  function S(D) {
    if (D === null) return "";
    if (B.isDate(D)) return D.toISOString();
    if (!v && B.isBlob(D))
      throw new Be("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(D) || B.isTypedArray(D)
      ? v && typeof Blob == "function"
        ? new Blob([D])
        : Buffer.from(D)
      : D;
  }
  function R(D, j, M) {
    let z = D;
    if (D && !M && typeof D == "object") {
      if (B.endsWith(j, "{}"))
        (j = s ? j : j.slice(0, -2)), (D = JSON.stringify(D));
      else if (
        (B.isArray(D) && vM(D)) ||
        ((B.isFileList(D) || B.endsWith(j, "[]")) && (z = B.toArray(D)))
      )
        return (
          (j = MT(j)),
          z.forEach(function (ae, X) {
            !(B.isUndefined(ae) || ae === null) &&
              l.append(
                h === !0 ? rE([j], X, d) : h === null ? j : j + "[]",
                S(ae)
              );
          }),
          !1
        );
    }
    return Np(D) ? !0 : (l.append(rE(M, j, d), S(D)), !1);
  }
  const T = [],
    E = Object.assign(bM, {
      defaultVisitor: R,
      convertValue: S,
      isVisitable: Np,
    });
  function N(D, j) {
    if (!B.isUndefined(D)) {
      if (T.indexOf(D) !== -1)
        throw Error("Circular reference detected in " + j.join("."));
      T.push(D),
        B.forEach(D, function (z, H) {
          (!(B.isUndefined(z) || z === null) &&
            c.call(l, z, B.isString(H) ? H.trim() : H, j, E)) === !0 &&
            N(z, j ? j.concat(H) : [H]);
        }),
        T.pop();
    }
  }
  if (!B.isObject(o)) throw new TypeError("data must be an object");
  return N(o), l;
}
function lE(o) {
  const l = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(o).replace(/[!'()~]|%20|%00/g, function (s) {
    return l[s];
  });
}
function Jp(o, l) {
  (this._pairs = []), o && Sf(o, this, l);
}
const UT = Jp.prototype;
UT.append = function (l, u) {
  this._pairs.push([l, u]);
};
UT.toString = function (l) {
  const u = l
    ? function (s) {
        return l.call(this, s, lE);
      }
    : lE;
  return this._pairs
    .map(function (c) {
      return u(c[0]) + "=" + u(c[1]);
    }, "")
    .join("&");
};
function SM(o) {
  return encodeURIComponent(o)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function _T(o, l, u) {
  if (!l) return o;
  const s = (u && u.encode) || SM;
  B.isFunction(u) && (u = { serialize: u });
  const c = u && u.serialize;
  let d;
  if (
    (c
      ? (d = c(l, u))
      : (d = B.isURLSearchParams(l) ? l.toString() : new Jp(l, u).toString(s)),
    d)
  ) {
    const h = o.indexOf("#");
    h !== -1 && (o = o.slice(0, h)),
      (o += (o.indexOf("?") === -1 ? "?" : "&") + d);
  }
  return o;
}
class iE {
  constructor() {
    this.handlers = [];
  }
  use(l, u, s) {
    return (
      this.handlers.push({
        fulfilled: l,
        rejected: u,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(l) {
    this.handlers[l] && (this.handlers[l] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(l) {
    B.forEach(this.handlers, function (s) {
      s !== null && l(s);
    });
  }
}
const zT = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  EM = typeof URLSearchParams < "u" ? URLSearchParams : Jp,
  TM = typeof FormData < "u" ? FormData : null,
  RM = typeof Blob < "u" ? Blob : null,
  xM = {
    isBrowser: !0,
    classes: { URLSearchParams: EM, FormData: TM, Blob: RM },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  ey = typeof window < "u" && typeof document < "u",
  Mp = (typeof navigator == "object" && navigator) || void 0,
  wM =
    ey &&
    (!Mp || ["ReactNative", "NativeScript", "NS"].indexOf(Mp.product) < 0),
  AM =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  CM = (ey && window.location.href) || "http://localhost",
  OM = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ey,
        hasStandardBrowserEnv: wM,
        hasStandardBrowserWebWorkerEnv: AM,
        navigator: Mp,
        origin: CM,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  nn = { ...OM, ...xM };
function DM(o, l) {
  return Sf(
    o,
    new nn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (u, s, c, d) {
          return nn.isNode && B.isBuffer(u)
            ? (this.append(s, u.toString("base64")), !1)
            : d.defaultVisitor.apply(this, arguments);
        },
      },
      l
    )
  );
}
function NM(o) {
  return B.matchAll(/\w+|\[(\w*)]/g, o).map((l) =>
    l[0] === "[]" ? "" : l[1] || l[0]
  );
}
function MM(o) {
  const l = {},
    u = Object.keys(o);
  let s;
  const c = u.length;
  let d;
  for (s = 0; s < c; s++) (d = u[s]), (l[d] = o[d]);
  return l;
}
function jT(o) {
  function l(u, s, c, d) {
    let h = u[d++];
    if (h === "__proto__") return !0;
    const y = Number.isFinite(+h),
      v = d >= u.length;
    return (
      (h = !h && B.isArray(c) ? c.length : h),
      v
        ? (B.hasOwnProp(c, h) ? (c[h] = [c[h], s]) : (c[h] = s), !y)
        : ((!c[h] || !B.isObject(c[h])) && (c[h] = []),
          l(u, s, c[h], d) && B.isArray(c[h]) && (c[h] = MM(c[h])),
          !y)
    );
  }
  if (B.isFormData(o) && B.isFunction(o.entries)) {
    const u = {};
    return (
      B.forEachEntry(o, (s, c) => {
        l(NM(s), c, u, 0);
      }),
      u
    );
  }
  return null;
}
function UM(o, l, u) {
  if (B.isString(o))
    try {
      return (l || JSON.parse)(o), B.trim(o);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (u || JSON.stringify)(o);
}
const es = {
  transitional: zT,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (l, u) {
      const s = u.getContentType() || "",
        c = s.indexOf("application/json") > -1,
        d = B.isObject(l);
      if ((d && B.isHTMLForm(l) && (l = new FormData(l)), B.isFormData(l)))
        return c ? JSON.stringify(jT(l)) : l;
      if (
        B.isArrayBuffer(l) ||
        B.isBuffer(l) ||
        B.isStream(l) ||
        B.isFile(l) ||
        B.isBlob(l) ||
        B.isReadableStream(l)
      )
        return l;
      if (B.isArrayBufferView(l)) return l.buffer;
      if (B.isURLSearchParams(l))
        return (
          u.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          l.toString()
        );
      let y;
      if (d) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return DM(l, this.formSerializer).toString();
        if ((y = B.isFileList(l)) || s.indexOf("multipart/form-data") > -1) {
          const v = this.env && this.env.FormData;
          return Sf(
            y ? { "files[]": l } : l,
            v && new v(),
            this.formSerializer
          );
        }
      }
      return d || c ? (u.setContentType("application/json", !1), UM(l)) : l;
    },
  ],
  transformResponse: [
    function (l) {
      const u = this.transitional || es.transitional,
        s = u && u.forcedJSONParsing,
        c = this.responseType === "json";
      if (B.isResponse(l) || B.isReadableStream(l)) return l;
      if (l && B.isString(l) && ((s && !this.responseType) || c)) {
        const h = !(u && u.silentJSONParsing) && c;
        try {
          return JSON.parse(l);
        } catch (y) {
          if (h)
            throw y.name === "SyntaxError"
              ? Be.from(y, Be.ERR_BAD_RESPONSE, this, null, this.response)
              : y;
        }
      }
      return l;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: nn.classes.FormData, Blob: nn.classes.Blob },
  validateStatus: function (l) {
    return l >= 200 && l < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
B.forEach(["delete", "get", "head", "post", "put", "patch"], (o) => {
  es.headers[o] = {};
});
const _M = B.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  zM = (o) => {
    const l = {};
    let u, s, c;
    return (
      o &&
        o
          .split(
            `
`
          )
          .forEach(function (h) {
            (c = h.indexOf(":")),
              (u = h.substring(0, c).trim().toLowerCase()),
              (s = h.substring(c + 1).trim()),
              !(!u || (l[u] && _M[u])) &&
                (u === "set-cookie"
                  ? l[u]
                    ? l[u].push(s)
                    : (l[u] = [s])
                  : (l[u] = l[u] ? l[u] + ", " + s : s));
          }),
      l
    );
  },
  uE = Symbol("internals");
function Bu(o) {
  return o && String(o).trim().toLowerCase();
}
function Kc(o) {
  return o === !1 || o == null ? o : B.isArray(o) ? o.map(Kc) : String(o);
}
function jM(o) {
  const l = Object.create(null),
    u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = u.exec(o)); ) l[s[1]] = s[2];
  return l;
}
const HM = (o) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(o.trim());
function rp(o, l, u, s, c) {
  if (B.isFunction(s)) return s.call(this, l, u);
  if ((c && (l = u), !!B.isString(l))) {
    if (B.isString(s)) return l.indexOf(s) !== -1;
    if (B.isRegExp(s)) return s.test(l);
  }
}
function kM(o) {
  return o
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (l, u, s) => u.toUpperCase() + s);
}
function LM(o, l) {
  const u = B.toCamelCase(" " + l);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(o, s + u, {
      value: function (c, d, h) {
        return this[s].call(this, l, c, d, h);
      },
      configurable: !0,
    });
  });
}
let En = class {
  constructor(l) {
    l && this.set(l);
  }
  set(l, u, s) {
    const c = this;
    function d(y, v, S) {
      const R = Bu(v);
      if (!R) throw new Error("header name must be a non-empty string");
      const T = B.findKey(c, R);
      (!T || c[T] === void 0 || S === !0 || (S === void 0 && c[T] !== !1)) &&
        (c[T || v] = Kc(y));
    }
    const h = (y, v) => B.forEach(y, (S, R) => d(S, R, v));
    if (B.isPlainObject(l) || l instanceof this.constructor) h(l, u);
    else if (B.isString(l) && (l = l.trim()) && !HM(l)) h(zM(l), u);
    else if (B.isHeaders(l)) for (const [y, v] of l.entries()) d(v, y, s);
    else l != null && d(u, l, s);
    return this;
  }
  get(l, u) {
    if (((l = Bu(l)), l)) {
      const s = B.findKey(this, l);
      if (s) {
        const c = this[s];
        if (!u) return c;
        if (u === !0) return jM(c);
        if (B.isFunction(u)) return u.call(this, c, s);
        if (B.isRegExp(u)) return u.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(l, u) {
    if (((l = Bu(l)), l)) {
      const s = B.findKey(this, l);
      return !!(s && this[s] !== void 0 && (!u || rp(this, this[s], s, u)));
    }
    return !1;
  }
  delete(l, u) {
    const s = this;
    let c = !1;
    function d(h) {
      if (((h = Bu(h)), h)) {
        const y = B.findKey(s, h);
        y && (!u || rp(s, s[y], y, u)) && (delete s[y], (c = !0));
      }
    }
    return B.isArray(l) ? l.forEach(d) : d(l), c;
  }
  clear(l) {
    const u = Object.keys(this);
    let s = u.length,
      c = !1;
    for (; s--; ) {
      const d = u[s];
      (!l || rp(this, this[d], d, l, !0)) && (delete this[d], (c = !0));
    }
    return c;
  }
  normalize(l) {
    const u = this,
      s = {};
    return (
      B.forEach(this, (c, d) => {
        const h = B.findKey(s, d);
        if (h) {
          (u[h] = Kc(c)), delete u[d];
          return;
        }
        const y = l ? kM(d) : String(d).trim();
        y !== d && delete u[d], (u[y] = Kc(c)), (s[y] = !0);
      }),
      this
    );
  }
  concat(...l) {
    return this.constructor.concat(this, ...l);
  }
  toJSON(l) {
    const u = Object.create(null);
    return (
      B.forEach(this, (s, c) => {
        s != null && s !== !1 && (u[c] = l && B.isArray(s) ? s.join(", ") : s);
      }),
      u
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([l, u]) => l + ": " + u).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(l) {
    return l instanceof this ? l : new this(l);
  }
  static concat(l, ...u) {
    const s = new this(l);
    return u.forEach((c) => s.set(c)), s;
  }
  static accessor(l) {
    const s = (this[uE] = this[uE] = { accessors: {} }).accessors,
      c = this.prototype;
    function d(h) {
      const y = Bu(h);
      s[y] || (LM(c, h), (s[y] = !0));
    }
    return B.isArray(l) ? l.forEach(d) : d(l), this;
  }
};
En.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
B.reduceDescriptors(En.prototype, ({ value: o }, l) => {
  let u = l[0].toUpperCase() + l.slice(1);
  return {
    get: () => o,
    set(s) {
      this[u] = s;
    },
  };
});
B.freezeMethods(En);
function lp(o, l) {
  const u = this || es,
    s = l || u,
    c = En.from(s.headers);
  let d = s.data;
  return (
    B.forEach(o, function (y) {
      d = y.call(u, d, c.normalize(), l ? l.status : void 0);
    }),
    c.normalize(),
    d
  );
}
function HT(o) {
  return !!(o && o.__CANCEL__);
}
function si(o, l, u) {
  Be.call(this, o ?? "canceled", Be.ERR_CANCELED, l, u),
    (this.name = "CanceledError");
}
B.inherits(si, Be, { __CANCEL__: !0 });
function kT(o, l, u) {
  const s = u.config.validateStatus;
  !u.status || !s || s(u.status)
    ? o(u)
    : l(
        new Be(
          "Request failed with status code " + u.status,
          [Be.ERR_BAD_REQUEST, Be.ERR_BAD_RESPONSE][
            Math.floor(u.status / 100) - 4
          ],
          u.config,
          u.request,
          u
        )
      );
}
function BM(o) {
  const l = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
  return (l && l[1]) || "";
}
function VM(o, l) {
  o = o || 10;
  const u = new Array(o),
    s = new Array(o);
  let c = 0,
    d = 0,
    h;
  return (
    (l = l !== void 0 ? l : 1e3),
    function (v) {
      const S = Date.now(),
        R = s[d];
      h || (h = S), (u[c] = v), (s[c] = S);
      let T = d,
        E = 0;
      for (; T !== c; ) (E += u[T++]), (T = T % o);
      if (((c = (c + 1) % o), c === d && (d = (d + 1) % o), S - h < l)) return;
      const N = R && S - R;
      return N ? Math.round((E * 1e3) / N) : void 0;
    }
  );
}
function YM(o, l) {
  let u = 0,
    s = 1e3 / l,
    c,
    d;
  const h = (S, R = Date.now()) => {
    (u = R), (c = null), d && (clearTimeout(d), (d = null)), o.apply(null, S);
  };
  return [
    (...S) => {
      const R = Date.now(),
        T = R - u;
      T >= s
        ? h(S, R)
        : ((c = S),
          d ||
            (d = setTimeout(() => {
              (d = null), h(c);
            }, s - T)));
    },
    () => c && h(c),
  ];
}
const of = (o, l, u = 3) => {
    let s = 0;
    const c = VM(50, 250);
    return YM((d) => {
      const h = d.loaded,
        y = d.lengthComputable ? d.total : void 0,
        v = h - s,
        S = c(v),
        R = h <= y;
      s = h;
      const T = {
        loaded: h,
        total: y,
        progress: y ? h / y : void 0,
        bytes: v,
        rate: S || void 0,
        estimated: S && y && R ? (y - h) / S : void 0,
        event: d,
        lengthComputable: y != null,
        [l ? "download" : "upload"]: !0,
      };
      o(T);
    }, u);
  },
  sE = (o, l) => {
    const u = o != null;
    return [(s) => l[0]({ lengthComputable: u, total: o, loaded: s }), l[1]];
  },
  cE =
    (o) =>
    (...l) =>
      B.asap(() => o(...l)),
  qM = nn.hasStandardBrowserEnv
    ? ((o, l) => (u) => (
        (u = new URL(u, nn.origin)),
        o.protocol === u.protocol &&
          o.host === u.host &&
          (l || o.port === u.port)
      ))(
        new URL(nn.origin),
        nn.navigator && /(msie|trident)/i.test(nn.navigator.userAgent)
      )
    : () => !0,
  PM = nn.hasStandardBrowserEnv
    ? {
        write(o, l, u, s, c, d) {
          const h = [o + "=" + encodeURIComponent(l)];
          B.isNumber(u) && h.push("expires=" + new Date(u).toGMTString()),
            B.isString(s) && h.push("path=" + s),
            B.isString(c) && h.push("domain=" + c),
            d === !0 && h.push("secure"),
            (document.cookie = h.join("; "));
        },
        read(o) {
          const l = document.cookie.match(
            new RegExp("(^|;\\s*)(" + o + ")=([^;]*)")
          );
          return l ? decodeURIComponent(l[3]) : null;
        },
        remove(o) {
          this.write(o, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function $M(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}
function GM(o, l) {
  return l ? o.replace(/\/?\/$/, "") + "/" + l.replace(/^\/+/, "") : o;
}
function LT(o, l) {
  return o && !$M(l) ? GM(o, l) : l;
}
const fE = (o) => (o instanceof En ? { ...o } : o);
function Kr(o, l) {
  l = l || {};
  const u = {};
  function s(S, R, T, E) {
    return B.isPlainObject(S) && B.isPlainObject(R)
      ? B.merge.call({ caseless: E }, S, R)
      : B.isPlainObject(R)
      ? B.merge({}, R)
      : B.isArray(R)
      ? R.slice()
      : R;
  }
  function c(S, R, T, E) {
    if (B.isUndefined(R)) {
      if (!B.isUndefined(S)) return s(void 0, S, T, E);
    } else return s(S, R, T, E);
  }
  function d(S, R) {
    if (!B.isUndefined(R)) return s(void 0, R);
  }
  function h(S, R) {
    if (B.isUndefined(R)) {
      if (!B.isUndefined(S)) return s(void 0, S);
    } else return s(void 0, R);
  }
  function y(S, R, T) {
    if (T in l) return s(S, R);
    if (T in o) return s(void 0, S);
  }
  const v = {
    url: d,
    method: d,
    data: d,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: y,
    headers: (S, R, T) => c(fE(S), fE(R), T, !0),
  };
  return (
    B.forEach(Object.keys(Object.assign({}, o, l)), function (R) {
      const T = v[R] || c,
        E = T(o[R], l[R], R);
      (B.isUndefined(E) && T !== y) || (u[R] = E);
    }),
    u
  );
}
const BT = (o) => {
    const l = Kr({}, o);
    let {
      data: u,
      withXSRFToken: s,
      xsrfHeaderName: c,
      xsrfCookieName: d,
      headers: h,
      auth: y,
    } = l;
    (l.headers = h = En.from(h)),
      (l.url = _T(LT(l.baseURL, l.url), o.params, o.paramsSerializer)),
      y &&
        h.set(
          "Authorization",
          "Basic " +
            btoa(
              (y.username || "") +
                ":" +
                (y.password ? unescape(encodeURIComponent(y.password)) : "")
            )
        );
    let v;
    if (B.isFormData(u)) {
      if (nn.hasStandardBrowserEnv || nn.hasStandardBrowserWebWorkerEnv)
        h.setContentType(void 0);
      else if ((v = h.getContentType()) !== !1) {
        const [S, ...R] = v
          ? v
              .split(";")
              .map((T) => T.trim())
              .filter(Boolean)
          : [];
        h.setContentType([S || "multipart/form-data", ...R].join("; "));
      }
    }
    if (
      nn.hasStandardBrowserEnv &&
      (s && B.isFunction(s) && (s = s(l)), s || (s !== !1 && qM(l.url)))
    ) {
      const S = c && d && PM.read(d);
      S && h.set(c, S);
    }
    return l;
  },
  XM = typeof XMLHttpRequest < "u",
  QM =
    XM &&
    function (o) {
      return new Promise(function (u, s) {
        const c = BT(o);
        let d = c.data;
        const h = En.from(c.headers).normalize();
        let { responseType: y, onUploadProgress: v, onDownloadProgress: S } = c,
          R,
          T,
          E,
          N,
          D;
        function j() {
          N && N(),
            D && D(),
            c.cancelToken && c.cancelToken.unsubscribe(R),
            c.signal && c.signal.removeEventListener("abort", R);
        }
        let M = new XMLHttpRequest();
        M.open(c.method.toUpperCase(), c.url, !0), (M.timeout = c.timeout);
        function z() {
          if (!M) return;
          const ae = En.from(
              "getAllResponseHeaders" in M && M.getAllResponseHeaders()
            ),
            ye = {
              data:
                !y || y === "text" || y === "json"
                  ? M.responseText
                  : M.response,
              status: M.status,
              statusText: M.statusText,
              headers: ae,
              config: o,
              request: M,
            };
          kT(
            function (I) {
              u(I), j();
            },
            function (I) {
              s(I), j();
            },
            ye
          ),
            (M = null);
        }
        "onloadend" in M
          ? (M.onloadend = z)
          : (M.onreadystatechange = function () {
              !M ||
                M.readyState !== 4 ||
                (M.status === 0 &&
                  !(M.responseURL && M.responseURL.indexOf("file:") === 0)) ||
                setTimeout(z);
            }),
          (M.onabort = function () {
            M &&
              (s(new Be("Request aborted", Be.ECONNABORTED, o, M)), (M = null));
          }),
          (M.onerror = function () {
            s(new Be("Network Error", Be.ERR_NETWORK, o, M)), (M = null);
          }),
          (M.ontimeout = function () {
            let X = c.timeout
              ? "timeout of " + c.timeout + "ms exceeded"
              : "timeout exceeded";
            const ye = c.transitional || zT;
            c.timeoutErrorMessage && (X = c.timeoutErrorMessage),
              s(
                new Be(
                  X,
                  ye.clarifyTimeoutError ? Be.ETIMEDOUT : Be.ECONNABORTED,
                  o,
                  M
                )
              ),
              (M = null);
          }),
          d === void 0 && h.setContentType(null),
          "setRequestHeader" in M &&
            B.forEach(h.toJSON(), function (X, ye) {
              M.setRequestHeader(ye, X);
            }),
          B.isUndefined(c.withCredentials) ||
            (M.withCredentials = !!c.withCredentials),
          y && y !== "json" && (M.responseType = c.responseType),
          S && (([E, D] = of(S, !0)), M.addEventListener("progress", E)),
          v &&
            M.upload &&
            (([T, N] = of(v)),
            M.upload.addEventListener("progress", T),
            M.upload.addEventListener("loadend", N)),
          (c.cancelToken || c.signal) &&
            ((R = (ae) => {
              M &&
                (s(!ae || ae.type ? new si(null, o, M) : ae),
                M.abort(),
                (M = null));
            }),
            c.cancelToken && c.cancelToken.subscribe(R),
            c.signal &&
              (c.signal.aborted ? R() : c.signal.addEventListener("abort", R)));
        const H = BM(c.url);
        if (H && nn.protocols.indexOf(H) === -1) {
          s(new Be("Unsupported protocol " + H + ":", Be.ERR_BAD_REQUEST, o));
          return;
        }
        M.send(d || null);
      });
    },
  FM = (o, l) => {
    const { length: u } = (o = o ? o.filter(Boolean) : []);
    if (l || u) {
      let s = new AbortController(),
        c;
      const d = function (S) {
        if (!c) {
          (c = !0), y();
          const R = S instanceof Error ? S : this.reason;
          s.abort(
            R instanceof Be ? R : new si(R instanceof Error ? R.message : R)
          );
        }
      };
      let h =
        l &&
        setTimeout(() => {
          (h = null), d(new Be(`timeout ${l} of ms exceeded`, Be.ETIMEDOUT));
        }, l);
      const y = () => {
        o &&
          (h && clearTimeout(h),
          (h = null),
          o.forEach((S) => {
            S.unsubscribe
              ? S.unsubscribe(d)
              : S.removeEventListener("abort", d);
          }),
          (o = null));
      };
      o.forEach((S) => S.addEventListener("abort", d));
      const { signal: v } = s;
      return (v.unsubscribe = () => B.asap(y)), v;
    }
  },
  IM = function* (o, l) {
    let u = o.byteLength;
    if (u < l) {
      yield o;
      return;
    }
    let s = 0,
      c;
    for (; s < u; ) (c = s + l), yield o.slice(s, c), (s = c);
  },
  ZM = async function* (o, l) {
    for await (const u of WM(o)) yield* IM(u, l);
  },
  WM = async function* (o) {
    if (o[Symbol.asyncIterator]) {
      yield* o;
      return;
    }
    const l = o.getReader();
    try {
      for (;;) {
        const { done: u, value: s } = await l.read();
        if (u) break;
        yield s;
      }
    } finally {
      await l.cancel();
    }
  },
  dE = (o, l, u, s) => {
    const c = ZM(o, l);
    let d = 0,
      h,
      y = (v) => {
        h || ((h = !0), s && s(v));
      };
    return new ReadableStream(
      {
        async pull(v) {
          try {
            const { done: S, value: R } = await c.next();
            if (S) {
              y(), v.close();
              return;
            }
            let T = R.byteLength;
            if (u) {
              let E = (d += T);
              u(E);
            }
            v.enqueue(new Uint8Array(R));
          } catch (S) {
            throw (y(S), S);
          }
        },
        cancel(v) {
          return y(v), c.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ef =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  VT = Ef && typeof ReadableStream == "function",
  KM =
    Ef &&
    (typeof TextEncoder == "function"
      ? (
          (o) => (l) =>
            o.encode(l)
        )(new TextEncoder())
      : async (o) => new Uint8Array(await new Response(o).arrayBuffer())),
  YT = (o, ...l) => {
    try {
      return !!o(...l);
    } catch {
      return !1;
    }
  },
  JM =
    VT &&
    YT(() => {
      let o = !1;
      const l = new Request(nn.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (o = !0), "half";
        },
      }).headers.has("Content-Type");
      return o && !l;
    }),
  mE = 64 * 1024,
  Up = VT && YT(() => B.isReadableStream(new Response("").body)),
  rf = { stream: Up && ((o) => o.body) };
Ef &&
  ((o) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((l) => {
      !rf[l] &&
        (rf[l] = B.isFunction(o[l])
          ? (u) => u[l]()
          : (u, s) => {
              throw new Be(
                `Response type '${l}' is not supported`,
                Be.ERR_NOT_SUPPORT,
                s
              );
            });
    });
  })(new Response());
const eU = async (o) => {
    if (o == null) return 0;
    if (B.isBlob(o)) return o.size;
    if (B.isSpecCompliantForm(o))
      return (
        await new Request(nn.origin, { method: "POST", body: o }).arrayBuffer()
      ).byteLength;
    if (B.isArrayBufferView(o) || B.isArrayBuffer(o)) return o.byteLength;
    if ((B.isURLSearchParams(o) && (o = o + ""), B.isString(o)))
      return (await KM(o)).byteLength;
  },
  tU = async (o, l) => {
    const u = B.toFiniteNumber(o.getContentLength());
    return u ?? eU(l);
  },
  nU =
    Ef &&
    (async (o) => {
      let {
        url: l,
        method: u,
        data: s,
        signal: c,
        cancelToken: d,
        timeout: h,
        onDownloadProgress: y,
        onUploadProgress: v,
        responseType: S,
        headers: R,
        withCredentials: T = "same-origin",
        fetchOptions: E,
      } = BT(o);
      S = S ? (S + "").toLowerCase() : "text";
      let N = FM([c, d && d.toAbortSignal()], h),
        D;
      const j =
        N &&
        N.unsubscribe &&
        (() => {
          N.unsubscribe();
        });
      let M;
      try {
        if (
          v &&
          JM &&
          u !== "get" &&
          u !== "head" &&
          (M = await tU(R, s)) !== 0
        ) {
          let ye = new Request(l, { method: "POST", body: s, duplex: "half" }),
            Te;
          if (
            (B.isFormData(s) &&
              (Te = ye.headers.get("content-type")) &&
              R.setContentType(Te),
            ye.body)
          ) {
            const [I, de] = sE(M, of(cE(v)));
            s = dE(ye.body, mE, I, de);
          }
        }
        B.isString(T) || (T = T ? "include" : "omit");
        const z = "credentials" in Request.prototype;
        D = new Request(l, {
          ...E,
          signal: N,
          method: u.toUpperCase(),
          headers: R.normalize().toJSON(),
          body: s,
          duplex: "half",
          credentials: z ? T : void 0,
        });
        let H = await fetch(D);
        const ae = Up && (S === "stream" || S === "response");
        if (Up && (y || (ae && j))) {
          const ye = {};
          ["status", "statusText", "headers"].forEach((ue) => {
            ye[ue] = H[ue];
          });
          const Te = B.toFiniteNumber(H.headers.get("content-length")),
            [I, de] = (y && sE(Te, of(cE(y), !0))) || [];
          H = new Response(
            dE(H.body, mE, I, () => {
              de && de(), j && j();
            }),
            ye
          );
        }
        S = S || "text";
        let X = await rf[B.findKey(rf, S) || "text"](H, o);
        return (
          !ae && j && j(),
          await new Promise((ye, Te) => {
            kT(ye, Te, {
              data: X,
              headers: En.from(H.headers),
              status: H.status,
              statusText: H.statusText,
              config: o,
              request: D,
            });
          })
        );
      } catch (z) {
        throw (
          (j && j(),
          z && z.name === "TypeError" && /fetch/i.test(z.message)
            ? Object.assign(new Be("Network Error", Be.ERR_NETWORK, o, D), {
                cause: z.cause || z,
              })
            : Be.from(z, z && z.code, o, D))
        );
      }
    }),
  _p = { http: gM, xhr: QM, fetch: nU };
B.forEach(_p, (o, l) => {
  if (o) {
    try {
      Object.defineProperty(o, "name", { value: l });
    } catch {}
    Object.defineProperty(o, "adapterName", { value: l });
  }
});
const hE = (o) => `- ${o}`,
  aU = (o) => B.isFunction(o) || o === null || o === !1,
  qT = {
    getAdapter: (o) => {
      o = B.isArray(o) ? o : [o];
      const { length: l } = o;
      let u, s;
      const c = {};
      for (let d = 0; d < l; d++) {
        u = o[d];
        let h;
        if (
          ((s = u),
          !aU(u) && ((s = _p[(h = String(u)).toLowerCase()]), s === void 0))
        )
          throw new Be(`Unknown adapter '${h}'`);
        if (s) break;
        c[h || "#" + d] = s;
      }
      if (!s) {
        const d = Object.entries(c).map(
          ([y, v]) =>
            `adapter ${y} ` +
            (v === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let h = l
          ? d.length > 1
            ? `since :
` +
              d.map(hE).join(`
`)
            : " " + hE(d[0])
          : "as no adapter specified";
        throw new Be(
          "There is no suitable adapter to dispatch the request " + h,
          "ERR_NOT_SUPPORT"
        );
      }
      return s;
    },
    adapters: _p,
  };
function ip(o) {
  if (
    (o.cancelToken && o.cancelToken.throwIfRequested(),
    o.signal && o.signal.aborted)
  )
    throw new si(null, o);
}
function pE(o) {
  return (
    ip(o),
    (o.headers = En.from(o.headers)),
    (o.data = lp.call(o, o.transformRequest)),
    ["post", "put", "patch"].indexOf(o.method) !== -1 &&
      o.headers.setContentType("application/x-www-form-urlencoded", !1),
    qT
      .getAdapter(o.adapter || es.adapter)(o)
      .then(
        function (s) {
          return (
            ip(o),
            (s.data = lp.call(o, o.transformResponse, s)),
            (s.headers = En.from(s.headers)),
            s
          );
        },
        function (s) {
          return (
            HT(s) ||
              (ip(o),
              s &&
                s.response &&
                ((s.response.data = lp.call(
                  o,
                  o.transformResponse,
                  s.response
                )),
                (s.response.headers = En.from(s.response.headers)))),
            Promise.reject(s)
          );
        }
      )
  );
}
const PT = "1.7.9",
  Tf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (o, l) => {
    Tf[o] = function (s) {
      return typeof s === o || "a" + (l < 1 ? "n " : " ") + o;
    };
  }
);
const yE = {};
Tf.transitional = function (l, u, s) {
  function c(d, h) {
    return (
      "[Axios v" +
      PT +
      "] Transitional option '" +
      d +
      "'" +
      h +
      (s ? ". " + s : "")
    );
  }
  return (d, h, y) => {
    if (l === !1)
      throw new Be(
        c(h, " has been removed" + (u ? " in " + u : "")),
        Be.ERR_DEPRECATED
      );
    return (
      u &&
        !yE[h] &&
        ((yE[h] = !0),
        console.warn(
          c(
            h,
            " has been deprecated since v" +
              u +
              " and will be removed in the near future"
          )
        )),
      l ? l(d, h, y) : !0
    );
  };
};
Tf.spelling = function (l) {
  return (u, s) => (console.warn(`${s} is likely a misspelling of ${l}`), !0);
};
function oU(o, l, u) {
  if (typeof o != "object")
    throw new Be("options must be an object", Be.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(o);
  let c = s.length;
  for (; c-- > 0; ) {
    const d = s[c],
      h = l[d];
    if (h) {
      const y = o[d],
        v = y === void 0 || h(y, d, o);
      if (v !== !0)
        throw new Be("option " + d + " must be " + v, Be.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (u !== !0) throw new Be("Unknown option " + d, Be.ERR_BAD_OPTION);
  }
}
const Jc = { assertOptions: oU, validators: Tf },
  za = Jc.validators;
let Ir = class {
  constructor(l) {
    (this.defaults = l),
      (this.interceptors = { request: new iE(), response: new iE() });
  }
  async request(l, u) {
    try {
      return await this._request(l, u);
    } catch (s) {
      if (s instanceof Error) {
        let c = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(c)
          : (c = new Error());
        const d = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? d &&
              !String(s.stack).endsWith(d.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + d)
            : (s.stack = d);
        } catch {}
      }
      throw s;
    }
  }
  _request(l, u) {
    typeof l == "string" ? ((u = u || {}), (u.url = l)) : (u = l || {}),
      (u = Kr(this.defaults, u));
    const { transitional: s, paramsSerializer: c, headers: d } = u;
    s !== void 0 &&
      Jc.assertOptions(
        s,
        {
          silentJSONParsing: za.transitional(za.boolean),
          forcedJSONParsing: za.transitional(za.boolean),
          clarifyTimeoutError: za.transitional(za.boolean),
        },
        !1
      ),
      c != null &&
        (B.isFunction(c)
          ? (u.paramsSerializer = { serialize: c })
          : Jc.assertOptions(
              c,
              { encode: za.function, serialize: za.function },
              !0
            )),
      Jc.assertOptions(
        u,
        {
          baseUrl: za.spelling("baseURL"),
          withXsrfToken: za.spelling("withXSRFToken"),
        },
        !0
      ),
      (u.method = (u.method || this.defaults.method || "get").toLowerCase());
    let h = d && B.merge(d.common, d[u.method]);
    d &&
      B.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (D) => {
          delete d[D];
        }
      ),
      (u.headers = En.concat(h, d));
    const y = [];
    let v = !0;
    this.interceptors.request.forEach(function (j) {
      (typeof j.runWhen == "function" && j.runWhen(u) === !1) ||
        ((v = v && j.synchronous), y.unshift(j.fulfilled, j.rejected));
    });
    const S = [];
    this.interceptors.response.forEach(function (j) {
      S.push(j.fulfilled, j.rejected);
    });
    let R,
      T = 0,
      E;
    if (!v) {
      const D = [pE.bind(this), void 0];
      for (
        D.unshift.apply(D, y),
          D.push.apply(D, S),
          E = D.length,
          R = Promise.resolve(u);
        T < E;

      )
        R = R.then(D[T++], D[T++]);
      return R;
    }
    E = y.length;
    let N = u;
    for (T = 0; T < E; ) {
      const D = y[T++],
        j = y[T++];
      try {
        N = D(N);
      } catch (M) {
        j.call(this, M);
        break;
      }
    }
    try {
      R = pE.call(this, N);
    } catch (D) {
      return Promise.reject(D);
    }
    for (T = 0, E = S.length; T < E; ) R = R.then(S[T++], S[T++]);
    return R;
  }
  getUri(l) {
    l = Kr(this.defaults, l);
    const u = LT(l.baseURL, l.url);
    return _T(u, l.params, l.paramsSerializer);
  }
};
B.forEach(["delete", "get", "head", "options"], function (l) {
  Ir.prototype[l] = function (u, s) {
    return this.request(
      Kr(s || {}, { method: l, url: u, data: (s || {}).data })
    );
  };
});
B.forEach(["post", "put", "patch"], function (l) {
  function u(s) {
    return function (d, h, y) {
      return this.request(
        Kr(y || {}, {
          method: l,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: d,
          data: h,
        })
      );
    };
  }
  (Ir.prototype[l] = u()), (Ir.prototype[l + "Form"] = u(!0));
});
let rU = class $T {
  constructor(l) {
    if (typeof l != "function")
      throw new TypeError("executor must be a function.");
    let u;
    this.promise = new Promise(function (d) {
      u = d;
    });
    const s = this;
    this.promise.then((c) => {
      if (!s._listeners) return;
      let d = s._listeners.length;
      for (; d-- > 0; ) s._listeners[d](c);
      s._listeners = null;
    }),
      (this.promise.then = (c) => {
        let d;
        const h = new Promise((y) => {
          s.subscribe(y), (d = y);
        }).then(c);
        return (
          (h.cancel = function () {
            s.unsubscribe(d);
          }),
          h
        );
      }),
      l(function (d, h, y) {
        s.reason || ((s.reason = new si(d, h, y)), u(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(l) {
    if (this.reason) {
      l(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(l) : (this._listeners = [l]);
  }
  unsubscribe(l) {
    if (!this._listeners) return;
    const u = this._listeners.indexOf(l);
    u !== -1 && this._listeners.splice(u, 1);
  }
  toAbortSignal() {
    const l = new AbortController(),
      u = (s) => {
        l.abort(s);
      };
    return (
      this.subscribe(u),
      (l.signal.unsubscribe = () => this.unsubscribe(u)),
      l.signal
    );
  }
  static source() {
    let l;
    return {
      token: new $T(function (c) {
        l = c;
      }),
      cancel: l,
    };
  }
};
function lU(o) {
  return function (u) {
    return o.apply(null, u);
  };
}
function iU(o) {
  return B.isObject(o) && o.isAxiosError === !0;
}
const zp = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(zp).forEach(([o, l]) => {
  zp[l] = o;
});
function GT(o) {
  const l = new Ir(o),
    u = ET(Ir.prototype.request, l);
  return (
    B.extend(u, Ir.prototype, l, { allOwnKeys: !0 }),
    B.extend(u, l, null, { allOwnKeys: !0 }),
    (u.create = function (c) {
      return GT(Kr(o, c));
    }),
    u
  );
}
const Rt = GT(es);
Rt.Axios = Ir;
Rt.CanceledError = si;
Rt.CancelToken = rU;
Rt.isCancel = HT;
Rt.VERSION = PT;
Rt.toFormData = Sf;
Rt.AxiosError = Be;
Rt.Cancel = Rt.CanceledError;
Rt.all = function (l) {
  return Promise.all(l);
};
Rt.spread = lU;
Rt.isAxiosError = iU;
Rt.mergeConfig = Kr;
Rt.AxiosHeaders = En;
Rt.formToJSON = (o) => jT(B.isHTMLForm(o) ? new FormData(o) : o);
Rt.getAdapter = qT.getAdapter;
Rt.HttpStatusCode = zp;
Rt.default = Rt;
const {
    Axios: TU,
    AxiosError: RU,
    CanceledError: xU,
    isCancel: wU,
    CancelToken: AU,
    VERSION: CU,
    all: OU,
    Cancel: DU,
    isAxiosError: NU,
    spread: MU,
    toFormData: UU,
    AxiosHeaders: _U,
    HttpStatusCode: zU,
    formToJSON: jU,
    getAdapter: HU,
    mergeConfig: kU,
  } = Rt,
  XT = "https://projeto-spotify-ohpr.onrender.com/api",
  uU = await Rt.get(`${XT}/artists`),
  sU = await Rt.get(`${XT}/songs`),
  ty = uU.data,
  lf = sU.data,
  ny = ({ type: o }) =>
    te.jsxDEV(
      "div",
      {
        className: "main",
        children: [
          o === "artists" || o === void 0
            ? te.jsxDEV(
                W1,
                {
                  title: "Artistas",
                  items: 10,
                  itemsArray: ty,
                  path: "/artists",
                  idPath: "/artist",
                },
                void 0,
                !1,
                {
                  fileName:
                    "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Main.jsx",
                  lineNumber: 11,
                  columnNumber: 9,
                },
                void 0
              )
            : te.jsxDEV(
                te.Fragment,
                {},
                void 0,
                !1,
                {
                  fileName:
                    "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Main.jsx",
                  lineNumber: 19,
                  columnNumber: 9,
                },
                void 0
              ),
          o === "songs" || o === void 0
            ? te.jsxDEV(
                W1,
                {
                  title: "Músicas",
                  items: 20,
                  itemsArray: lf,
                  path: "/songs",
                  idPath: "/song",
                },
                void 0,
                !1,
                {
                  fileName:
                    "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Main.jsx",
                  lineNumber: 24,
                  columnNumber: 9,
                },
                void 0
              )
            : te.jsxDEV(
                te.Fragment,
                {},
                void 0,
                !1,
                {
                  fileName:
                    "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Main.jsx",
                  lineNumber: 32,
                  columnNumber: 9,
                },
                void 0
              ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Main.jsx",
        lineNumber: 8,
        columnNumber: 5,
      },
      void 0
    ),
  cU = () =>
    te.jsxDEV(
      ny,
      {},
      void 0,
      !1,
      {
        fileName:
          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Home.jsx",
        lineNumber: 5,
        columnNumber: 10,
      },
      void 0
    ),
  fU = () =>
    te.jsxDEV(
      ny,
      { type: "artists" },
      void 0,
      !1,
      {
        fileName:
          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Artists.jsx",
        lineNumber: 5,
        columnNumber: 10,
      },
      void 0
    ),
  dU = ({
    image: o,
    name: l,
    duration: u,
    artist: s,
    audio: c,
    _id: d,
    index: h,
  }) =>
    te.jsxDEV(
      fa,
      {
        to: `/song/${d}`,
        className: "song-item",
        children: [
          te.jsxDEV(
            "div",
            {
              className: "song-item__number-album",
              children: [
                te.jsxDEV(
                  "p",
                  { children: h + 1 },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SongItem.jsx",
                    lineNumber: 8,
                    columnNumber: 9,
                  },
                  void 0
                ),
                te.jsxDEV(
                  "div",
                  {
                    className: "song-item__album",
                    children: [
                      te.jsxDEV(
                        "img",
                        {
                          src: o,
                          alt: `Imagem da Música ${l}`,
                          className: "song-item__image",
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SongItem.jsx",
                          lineNumber: 11,
                          columnNumber: 11,
                        },
                        void 0
                      ),
                      te.jsxDEV(
                        "p",
                        { className: "song-item__name", children: l },
                        void 0,
                        !1,
                        {
                          fileName:
                            "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SongItem.jsx",
                          lineNumber: 17,
                          columnNumber: 11,
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SongItem.jsx",
                    lineNumber: 10,
                    columnNumber: 9,
                  },
                  void 0
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SongItem.jsx",
              lineNumber: 7,
              columnNumber: 7,
            },
            void 0
          ),
          te.jsxDEV(
            "p",
            { children: u },
            void 0,
            !1,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SongItem.jsx",
              lineNumber: 21,
              columnNumber: 7,
            },
            void 0
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SongItem.jsx",
        lineNumber: 6,
        columnNumber: 5,
      },
      void 0
    ),
  mU = ({ songsArray: o }) => {
    const [l, u] = P.useState(5);
    return te.jsxDEV(
      "div",
      {
        className: "song-list",
        children: [
          o
            .filter((s, c) => c < l)
            .map((s, c) => P.createElement(dU, { ...s, index: c, key: c })),
          te.jsxDEV(
            "p",
            {
              className: "song-list__see-more",
              onClick: () => {
                u(l + 5);
              },
              children: "Ver mais",
            },
            void 0,
            !1,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SongList.jsx",
              lineNumber: 23,
              columnNumber: 7,
            },
            void 0
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/SongList.jsx",
        lineNumber: 16,
        columnNumber: 5,
      },
      void 0
    );
  },
  hU = () => {
    const { id: o } = DE(),
      { name: l, banner: u } = ty.filter((h) => h._id === o)[0],
      s = lf.filter((h) => h.artist === l),
      c = Math.floor(Math.random() * (s.length - 1)),
      d = s[c]._id;
    return te.jsxDEV(
      "div",
      {
        className: "artist",
        children: [
          te.jsxDEV(
            "div",
            {
              className: "artist__header",
              style: {
                backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${u})`,
              },
              children: te.jsxDEV(
                "h2",
                { className: "artist__title", children: l },
                void 0,
                !1,
                {
                  fileName:
                    "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Artist.jsx",
                  lineNumber: 40,
                  columnNumber: 9,
                },
                void 0
              ),
            },
            void 0,
            !1,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Artist.jsx",
              lineNumber: 34,
              columnNumber: 7,
            },
            void 0
          ),
          te.jsxDEV(
            "div",
            {
              className: "artist__body",
              children: [
                te.jsxDEV(
                  "h2",
                  { children: "Populares" },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Artist.jsx",
                    lineNumber: 44,
                    columnNumber: 9,
                  },
                  void 0
                ),
                te.jsxDEV(
                  mU,
                  { songsArray: s },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Artist.jsx",
                    lineNumber: 46,
                    columnNumber: 9,
                  },
                  void 0
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Artist.jsx",
              lineNumber: 43,
              columnNumber: 7,
            },
            void 0
          ),
          te.jsxDEV(
            fa,
            {
              to: `/song/${d}`,
              children: te.jsxDEV(
                Fr,
                {
                  className: "single-item__icon single-item__icon--artist",
                  icon: Wp,
                },
                void 0,
                !1,
                {
                  fileName:
                    "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Artist.jsx",
                  lineNumber: 50,
                  columnNumber: 9,
                },
                void 0
              ),
            },
            void 0,
            !1,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Artist.jsx",
              lineNumber: 49,
              columnNumber: 7,
            },
            void 0
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Artist.jsx",
        lineNumber: 33,
        columnNumber: 5,
      },
      void 0
    );
  },
  pU = () =>
    te.jsxDEV(
      ny,
      { type: "songs" },
      void 0,
      !1,
      {
        fileName:
          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Songs.jsx",
        lineNumber: 5,
        columnNumber: 10,
      },
      void 0
    ),
  gE = (o) => {
    const l = Math.floor(o / 60)
        .toString()
        .padStart(2, "0"),
      u = Math.floor(o - l * 60)
        .toString()
        .padStart(2, "0");
    return `${l}:${u}`;
  },
  yU = (o) => {
    const l = o.split(":"),
      u = Number(l[0]);
    return Number(l[1]) + u * 60;
  },
  gU = ({
    duration: o,
    randomIdFromArtist: l,
    randomId2FromArtist: u,
    audio: s,
  }) => {
    const c = P.useRef(),
      d = P.useRef(),
      [h, y] = P.useState(!1),
      [v, S] = P.useState(gE(0)),
      R = yU(o),
      T = () => {
        h ? c.current.pause() : c.current.play(), y(!h);
      };
    return (
      P.useEffect(() => {
        const E = setInterval(() => {
          h && S(gE(c.current.currentTime)),
            d.current.style.setProperty(
              "--_progress",
              (c.current.currentTime / R) * 100 + "%"
            );
        }, 1e3);
        return () => clearInterval(E);
      }, [h]),
      te.jsxDEV(
        "div",
        {
          className: "player",
          children: [
            te.jsxDEV(
              "div",
              {
                className: "player__controllers",
                children: [
                  te.jsxDEV(
                    fa,
                    {
                      to: `/song/${l}`,
                      children: te.jsxDEV(
                        Fr,
                        { className: "player__icon", icon: dN },
                        void 0,
                        !1,
                        {
                          fileName:
                            "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Player.jsx",
                          lineNumber: 76,
                          columnNumber: 11,
                        },
                        void 0
                      ),
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Player.jsx",
                      lineNumber: 75,
                      columnNumber: 9,
                    },
                    void 0
                  ),
                  te.jsxDEV(
                    Fr,
                    {
                      className: "player__icon player__icon--play",
                      icon: h ? fN : Wp,
                      onClick: () => T(),
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Player.jsx",
                      lineNumber: 79,
                      columnNumber: 9,
                    },
                    void 0
                  ),
                  te.jsxDEV(
                    fa,
                    {
                      to: `/song/${u}`,
                      children: te.jsxDEV(
                        Fr,
                        { className: "player__icon", icon: cN },
                        void 0,
                        !1,
                        {
                          fileName:
                            "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Player.jsx",
                          lineNumber: 86,
                          columnNumber: 11,
                        },
                        void 0
                      ),
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Player.jsx",
                      lineNumber: 85,
                      columnNumber: 9,
                    },
                    void 0
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName:
                  "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Player.jsx",
                lineNumber: 74,
                columnNumber: 7,
              },
              void 0
            ),
            te.jsxDEV(
              "div",
              {
                className: "player__progress",
                children: [
                  te.jsxDEV(
                    "p",
                    { children: v },
                    void 0,
                    !1,
                    {
                      fileName:
                        "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Player.jsx",
                      lineNumber: 91,
                      columnNumber: 9,
                    },
                    void 0
                  ),
                  te.jsxDEV(
                    "div",
                    {
                      className: "player__bar",
                      children: te.jsxDEV(
                        "div",
                        { ref: d, className: "player__bar-progress" },
                        void 0,
                        !1,
                        {
                          fileName:
                            "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Player.jsx",
                          lineNumber: 94,
                          columnNumber: 11,
                        },
                        void 0
                      ),
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Player.jsx",
                      lineNumber: 93,
                      columnNumber: 9,
                    },
                    void 0
                  ),
                  te.jsxDEV(
                    "p",
                    { children: o },
                    void 0,
                    !1,
                    {
                      fileName:
                        "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Player.jsx",
                      lineNumber: 97,
                      columnNumber: 9,
                    },
                    void 0
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName:
                  "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Player.jsx",
                lineNumber: 90,
                columnNumber: 7,
              },
              void 0
            ),
            te.jsxDEV(
              "audio",
              { ref: c, src: s },
              void 0,
              !1,
              {
                fileName:
                  "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Player.jsx",
                lineNumber: 100,
                columnNumber: 7,
              },
              void 0
            ),
          ],
        },
        void 0,
        !0,
        {
          fileName:
            "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/components/Player.jsx",
          lineNumber: 73,
          columnNumber: 5,
        },
        void 0
      )
    );
  },
  vU = () => {
    const { id: o } = DE(),
      {
        image: l,
        name: u,
        duration: s,
        artist: c,
        audio: d,
      } = lf.filter((E) => E._id === o)[0],
      h = ty.filter((E) => E.name === c)[0],
      y = lf.filter((E) => E.artist === c),
      v = Math.floor(Math.random() * (y.length - 1)),
      S = Math.floor(Math.random() * (y.length - 1)),
      R = y[v]._id,
      T = y[S]._id;
    return te.jsxDEV(
      "div",
      {
        className: "song",
        children: [
          te.jsxDEV(
            "div",
            {
              className: "song__container",
              children: te.jsxDEV(
                "div",
                {
                  className: "song__image-container",
                  children: te.jsxDEV(
                    "img",
                    { src: l, alt: `Imagem da música ${u}` },
                    void 0,
                    !1,
                    {
                      fileName:
                        "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Song.jsx",
                      lineNumber: 41,
                      columnNumber: 11,
                    },
                    void 0
                  ),
                },
                void 0,
                !1,
                {
                  fileName:
                    "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Song.jsx",
                  lineNumber: 40,
                  columnNumber: 9,
                },
                void 0
              ),
            },
            void 0,
            !1,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Song.jsx",
              lineNumber: 39,
              columnNumber: 7,
            },
            void 0
          ),
          te.jsxDEV(
            "div",
            {
              className: "song__bar",
              children: [
                te.jsxDEV(
                  fa,
                  {
                    to: `/artist/${h._id}`,
                    className: "song__artist-image",
                    children: te.jsxDEV(
                      "img",
                      {
                        width: 75,
                        height: 75,
                        src: h.image,
                        alt: `Imagem do Artista ${c}`,
                      },
                      void 0,
                      !1,
                      {
                        fileName:
                          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Song.jsx",
                        lineNumber: 47,
                        columnNumber: 11,
                      },
                      void 0
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Song.jsx",
                    lineNumber: 46,
                    columnNumber: 9,
                  },
                  void 0
                ),
                te.jsxDEV(
                  gU,
                  {
                    duration: s,
                    randomIdFromArtist: R,
                    randomId2FromArtist: T,
                    audio: d,
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Song.jsx",
                    lineNumber: 55,
                    columnNumber: 9,
                  },
                  void 0
                ),
                te.jsxDEV(
                  "div",
                  {
                    children: [
                      te.jsxDEV(
                        "p",
                        { className: "song__name", children: u },
                        void 0,
                        !1,
                        {
                          fileName:
                            "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Song.jsx",
                          lineNumber: 63,
                          columnNumber: 11,
                        },
                        void 0
                      ),
                      te.jsxDEV(
                        "p",
                        { children: c },
                        void 0,
                        !1,
                        {
                          fileName:
                            "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Song.jsx",
                          lineNumber: 64,
                          columnNumber: 11,
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Song.jsx",
                    lineNumber: 62,
                    columnNumber: 9,
                  },
                  void 0
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Song.jsx",
              lineNumber: 45,
              columnNumber: 7,
            },
            void 0
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/pages/Song.jsx",
        lineNumber: 38,
        columnNumber: 5,
      },
      void 0
    );
  },
  bU = () =>
    te.jsxDEV(
      _C,
      {
        children: [
          te.jsxDEV(
            PC,
            {},
            void 0,
            !1,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/App.jsx",
              lineNumber: 13,
              columnNumber: 7,
            },
            void 0
          ),
          te.jsxDEV(
            sC,
            {
              children: [
                te.jsxDEV(
                  ei,
                  {
                    path: "/",
                    element: te.jsxDEV(
                      cU,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/App.jsx",
                        lineNumber: 16,
                        columnNumber: 34,
                      },
                      void 0
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/App.jsx",
                    lineNumber: 16,
                    columnNumber: 9,
                  },
                  void 0
                ),
                te.jsxDEV(
                  ei,
                  {
                    path: "/artists",
                    element: te.jsxDEV(
                      fU,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/App.jsx",
                        lineNumber: 17,
                        columnNumber: 41,
                      },
                      void 0
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/App.jsx",
                    lineNumber: 17,
                    columnNumber: 9,
                  },
                  void 0
                ),
                te.jsxDEV(
                  ei,
                  {
                    path: "/artist/:id",
                    element: te.jsxDEV(
                      hU,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/App.jsx",
                        lineNumber: 18,
                        columnNumber: 44,
                      },
                      void 0
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/App.jsx",
                    lineNumber: 18,
                    columnNumber: 9,
                  },
                  void 0
                ),
                te.jsxDEV(
                  ei,
                  {
                    path: "/songs",
                    element: te.jsxDEV(
                      pU,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/App.jsx",
                        lineNumber: 19,
                        columnNumber: 39,
                      },
                      void 0
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/App.jsx",
                    lineNumber: 19,
                    columnNumber: 9,
                  },
                  void 0
                ),
                te.jsxDEV(
                  ei,
                  {
                    path: "/song/:id",
                    element: te.jsxDEV(
                      vU,
                      {},
                      void 0,
                      !1,
                      {
                        fileName:
                          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/App.jsx",
                        lineNumber: 20,
                        columnNumber: 42,
                      },
                      void 0
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName:
                      "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/App.jsx",
                    lineNumber: 20,
                    columnNumber: 9,
                  },
                  void 0
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName:
                "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/App.jsx",
              lineNumber: 15,
              columnNumber: 7,
            },
            void 0
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/App.jsx",
        lineNumber: 12,
        columnNumber: 5,
      },
      void 0
    );
gA.createRoot(document.getElementById("root")).render(
  te.jsxDEV(
    P.StrictMode,
    {
      children: te.jsxDEV(
        bU,
        {},
        void 0,
        !1,
        {
          fileName:
            "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/main.jsx",
          lineNumber: 8,
          columnNumber: 5,
        },
        void 0
      ),
    },
    void 0,
    !1,
    {
      fileName:
        "C:/Users/USER/Documents/Pasta de codigos/Deploy/front-end/src/main.jsx",
      lineNumber: 7,
      columnNumber: 3,
    },
    void 0
  )
);
