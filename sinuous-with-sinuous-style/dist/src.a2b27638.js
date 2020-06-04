// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/sinuous-style/src/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = void 0;

const isFunction = item => typeof item === "function";

exports.isFunction = isFunction;
},{}],"node_modules/sinuous-style/src/scopeStyles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scopeStyles = scopeStyles;

var _utils = require("./utils");

// Token types
const RULE_BLOCK = 1;
const COMMA = 2;
const AT_RULE = 3;
const WHITESPACE = 4;
const LIMITER = 5;
const FUNCTION = 6;
const SELECTOR = 7;
const END = 8;
/**
 * Tokenizes an array of style strings from a <style /> element.
 * Style elements can contain observables (or other values),
 * making the array of the following form:
 *
 * ['div { background: ', observableFn, '; }']
 *
 * Note: only obserables within a rule-block are expected.
 * Observables or other values in the place of selectors
 * or other css entities will lead to unexpected behavior.
 *
 * @param {Array} styles - An array of strings potentially interspersed with observables and other values
 * @return {Array} An array of tokens: RULE_BLOCK | COMMA | AT_RULE | WHITESPACE | LIMITER | FUNCTION | SELECTOR
 */

function tokenize(styles) {
  styles = styles.flatMap(section => typeof section === "string" ? section.split("") : section);
  let tokens = [];
  let bracketStack = 0;
  let chars = [];
  let type;

  function pushToken() {
    tokens.push({
      token: chars.join(""),
      type
    });
    type = undefined;
    chars = [];
  }

  let char;
  let charsLength;

  for (let i = 0; i < styles.length; i++) {
    char = styles[i];
    charsLength = chars.length;

    if ((0, _utils.isFunction)(char)) {
      if (charsLength) {
        pushToken();
      }

      tokens.push({
        token: char,
        type: FUNCTION
      });
    } else if (bracketStack) {
      if (!charsLength) {
        type = RULE_BLOCK;
      }

      chars.push(char);

      if (char === "{") {
        bracketStack++;
      } else if (char === "}") {
        bracketStack--;

        if (!bracketStack) {
          pushToken();
        }
      }
    } else {
      if (char === "{") {
        if (charsLength) {
          pushToken();
        }

        bracketStack++;
        type = RULE_BLOCK;
        chars.push(char);
      } else if (char === ",") {
        if (charsLength && type !== AT_RULE) {
          pushToken();
        }

        type = COMMA;
        chars.push(char);
        pushToken();
      } else if (">+~".includes(char) && type !== SELECTOR) {
        if (charsLength && type !== AT_RULE) {
          pushToken();
          tokens.push({
            token: char,
            type: LIMITER
          });
        } else {
          chars.push(char);
        }
      } else if (" \n\t\r".includes(char)) {
        if (charsLength && ![WHITESPACE, AT_RULE].includes(type)) {
          pushToken();
        }

        type = WHITESPACE;
        chars.push(char);
      } else if (char === "@") {
        if (charsLength) {
          pushToken();
        }

        type = AT_RULE;
        chars.push(char);
      } else {
        if (!charsLength) {
          type = SELECTOR;
          chars.push(char);
        } else if ([SELECTOR, AT_RULE].includes(type)) {
          chars.push(char);
        } else {
          pushToken();
          type = SELECTOR;
          chars.push(char);
        }
      }
    }
  }

  if (chars.length) {
    pushToken();
  }

  return tokens;
}
/**
 * Adds the `scopeName` after tags but before ids, other classNames,
 * pseudoSelectors, and attribute selectors. For example:
 *
 * `div.some-class` becomes `div.<scopeName>.some-class`
 *
 * @param {String} selector - A css selector
 * @param {String} scopeName - The className used to scope the `selector`
 * @return {String}
 */


function insertScopeName(selector, scopeName) {
  let i = 0;

  while (!"#.:[".includes(selector[i]) && i !== selector.length) {
    i++;
  }

  let first = selector.slice(0, i);
  let second = selector.slice(i);
  return first + "." + scopeName + second;
}
/**
 * @param {Array} styleTokens - The result of `tokenize(styles)`
 * @param {String} scopeName - The className used to scope the `Selector` tokens
 * @return {Array} An array of the form of `styles` passed to `tokenize`,
 * but with all the selectors scoped to `scopeName`
 */


function scopeSelectors(styleTokens, scopeName) {
  styleTokens.push({
    type: END
  });
  let styles = styleTokens.reduce((acc, token) => {
    let current = acc[0];
    let sections = acc[1];

    if (token.type === SELECTOR) {
      current.push(insertScopeName(token.token, scopeName));
    } else if (token.type === FUNCTION) {
      sections.push(current.join(""));
      sections.push(token.token);
      current = [];
    } else if (token.type === END) {
      sections.push(current.join(""));
      return sections;
    } else {
      current.push(token.token);
    }

    return [current, sections];
  }, [[], // current section
  [] // sections thus far
  ]);
  return styles;
}
/**
 * Scopes `styles` from a <style /> element.
 * Style elements can contain observables (or other values),
 * making the `styles` array of the following form:
 *
 * ['div.classes { background: ', observableFn, '; }']
 *
 * It returns an array of the following form:
 *
 * ['div.scopeName.classes { background: ', observableFn, '; }']
 *
 * Note: only obserables within a rule-block are expected.
 * Observables or other values in the place of selectors
 * or other css entities will lead to unexpected behavior.
 *
 * @param {Array} styles - An array of style strings and inclusions (observables and other values)
 * @param {Array} scopeName - A string representing a className to inject into the styles
 * @return {Array} A `styles` array but with css selectors now scoped to the `scopeName`
 */


function scopeStyles(styles, scopeName) {
  return scopeSelectors(tokenize(styles), scopeName);
}
},{"./utils":"node_modules/sinuous-style/src/utils.js"}],"node_modules/sinuous/module/observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computed = exports.S = f;
exports.cleanup = l;
exports.isListening = u;
exports.observable = exports.o = i;
exports.on = v;
exports.root = o;
exports.sample = c;
exports.subscribe = d;
exports.transaction = e;
exports.unsubscribe = S;
const n = [];
let t, r;

function u() {
  return !!t;
}

function o(n) {
  const r = t,
        u = () => {};

  t = u, w(u);
  const o = n(() => {
    a(u), t = void 0;
  });
  return t = r, o;
}

function c(n) {
  const r = t;
  t = void 0;
  const u = n();
  return t = r, u;
}

function e(t) {
  let u = r;
  r = [];
  const o = t();
  let c = r;
  return r = u, c.forEach(t => {
    if (t.t !== n) {
      const r = t.t;
      t.t = n, t(r);
    }
  }), o;
}

function i(u) {
  function o(c) {
    if (0 === arguments.length) return t && !o.__o.has(t) && (o.__o.add(t), t.u.push(o)), u;
    if (r) return o.t === n && r.push(o), o.t = c, c;
    u = c;
    const e = t;
    return t = void 0, o.o = new Set(o.__o), o.o.forEach(n => n.i = !1), o.o.forEach(n => {
      n.i || n();
    }), t = e, u;
  }

  return o.$o = !0, o.__o = new Set(), o.t = n, o;
}

function f(n, r) {
  function u() {
    const o = t;
    t && t.__c.push(u);
    const c = u.__c;
    return a(u), u.i = !0, t = u, r = n(r), c.forEach(n => {
      -1 === u.__c.indexOf(n) && (n.i = !0);
    }), function n(t) {
      return t.reduce((t, r) => t.concat(r, n(r.__c)), []);
    }(u.__c).forEach(s), t = o, r;
  }

  function o() {
    return u.i ? u.u.forEach(n => n()) : r = u(), r;
  }

  return n.s = u, w(u), u(), o.$o = !0, o;
}

function s(n) {
  n.i && n.u.forEach(t => {
    t.o && t.o.delete(n);
  });
}

function l(n) {
  return t && t.l.push(n), n;
}

function d(n) {
  return f(n), () => a(n.s);
}

function v(n, t, r, u) {
  return n = [].concat(n), f(r => {
    n.forEach(n => n());
    let o = r;
    return u || (o = c(() => t(r))), u = !1, o;
  }, r);
}

function S(n) {
  a(n.s);
}

function a(n) {
  n.__c.forEach(a), n.u.forEach(t => {
    t.__o.delete(n), t.o && t.o.delete(n);
  }), n.l.forEach(n => n()), w(n);
}

function w(n) {
  n.u = [], n.__c = [], n.l = [];
}
},{}],"node_modules/sinuous/module/htm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

const t = (n, e, o, f) => {
  let i = {};

  for (let s = 1; s < e.length; s++) {
    const r = e[s],
          u = "number" == typeof r ? o[r] : r,
          l = e[++s];
    if (1 === l) f[0] = u;else if (3 === l) f[1] = Object.assign(f[1] || {}, u);else if (5 === l) (f[1] = f[1] || {})[e[++s]] = u;else if (6 === l) {
      let t = e[++s],
          n = (f[1] = f[1] || {})[t],
          o = i[t];
      o || "function" != typeof u && "function" != typeof n || (o = n && [n] || [], f[1][t] = function () {
        let t = "";

        for (var n = 0; n < o.length; n++) t += "function" == typeof o[n] ? o[n].call(this) : o[n];

        return t;
      }), o ? o.push(u) : f[1][t] += u + "";
    } else if (l) {
      const e = () => n.apply(null, t(n, u, o, ["", null]));

      f.push("function" == typeof f[0] ? e : e());
    } else f.push(u);
  }

  return f;
},
      n = function (t) {
  let n,
      e,
      o = 1,
      f = "",
      i = "",
      s = [0];

  const r = t => {
    1 === o && (t || (f = f.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? s.push(t || f, 0) : 3 === o && (t || f) ? (s.push(t || f, 1), o = 2) : 2 === o && "..." === f && t ? s.push(t, 3) : 2 === o && f && !t ? s.push(!0, 5, f) : o >= 5 && ((f || !t && 5 === o) && (s.push(f, o, e), o = 6), t && (s.push(t, o, e), o = 6)), f = "";
  };

  for (let u = 0; u < t.length; u++) {
    u && (1 === o && r(), r(u));

    for (let l = 0; l < t[u].length; l++) n = t[u][l], 1 === o ? "<" === n ? (r(), s = [s], o = 3) : f += n : 4 === o ? "--" === f && ">" === n ? (o = 1, f = "") : f = n + f[0] : i ? n === i ? i = "" : f += n : '"' === n || "'" === n ? i = n : ">" === n ? (r(), o = 1) : o && ("=" === n ? (o = 5, e = f, f = "") : "/" === n && (o < 5 || ">" === t[u][l + 1]) ? (r(), 3 === o && (s = s[0]), o = s, (s = s[0]).push(o, 2), o = 0) : " " === n || "\t" === n || "\n" === n || "\r" === n ? (r(), o = 2) : f += n), 3 === o && "!--" === f && (o = 4, s = s[0]);
  }

  return r(), s;
},
      e = new Map(),
      o = function (o) {
  let f = e.get(this);
  return f || (f = new Map(), e.set(this, f)), f = t(this, f.get(o) || (f.set(o, f = n(o)), f), arguments, []), f.length > 1 ? f : f[0];
},
      f = function () {
  const t = o.apply(this, arguments);
  if (t) return Array.isArray(t) ? this(t) : "object" == typeof t ? t : this([t]);
};

function _default() {
  const t = f.bind(this);
  return (this.wrap || t).apply(t, arguments);
}
},{}],"node_modules/sinuous/module/sinuous.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.context = a;
exports.h = p;
exports.hs = m;
exports.html = y;
exports.svg = b;
Object.defineProperty(exports, "o", {
  enumerable: true,
  get: function () {
    return _observable.o;
  }
});
Object.defineProperty(exports, "observable", {
  enumerable: true,
  get: function () {
    return _observable.observable;
  }
});
exports.api = void 0;

var _observable = require("./observable.js");

var _htm = _interopRequireDefault(require("./htm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const i = {},
      u = [];
exports.api = i;
let s = 0;

function l(n, e, t) {
  let o;
  return "string" == typeof e ? e = document.createTextNode(e) : e instanceof Node || (e = i.h(u, e)), 11 === e.nodeType && (o = e.firstChild) && o !== e.lastChild && (o.t = e.lastChild.t = ++s), n.insertBefore(e, t), void 0 === o ? e : o;
}

function c(n) {
  return this.o[n.type](n);
}

function a(n, e) {
  for (let e in n) i[e] = n[e];

  return function () {
    const n = Array.from(arguments);
    let t;

    function o(f) {
      if (null == f) ;else if ("string" == typeof f) t ? l(t, f) : t = e ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f);else if (Array.isArray(f)) t || (t = document.createDocumentFragment()), f.forEach(o);else if (f instanceof Node) t ? l(t, f) : t = f;else if ("object" == typeof f) i.property(t, f, null, e);else if ("function" == typeof f) {
        if (t) {
          const n = l(t, "");
          i.insert(t, f, n);
        } else t = f.apply(null, n.splice(1));
      } else l(t, "" + f);
    }

    return n.forEach(o), t;
  };
}

function p() {
  return i.h.apply(i.h, arguments);
}

function m() {
  return i.hs.apply(i.hs, arguments);
}

function y() {
  return _htm.default.apply(p, arguments);
}

function b() {
  return _htm.default.apply(m, arguments);
}

i.insert = function (n, e, t, o, f) {
  return n = t && t.parentNode || n, f = f || o instanceof Node && o, e === o || (o && "string" != typeof o || !("string" == typeof e || "number" == typeof e && (e += "")) ? "function" == typeof e ? i.subscribe(function () {
    o = i.insert(n, e.call({
      el: n,
      endMark: t
    }), t, o, f);
  }) : (function (n, e, t, o) {
    if (t) {
      if (e) {
        if (!o) {
          const e = (o = t.previousSibling || n.lastChild).t;
          if (e) for (o = o.previousSibling; o && o.t !== e;) o = o.previousSibling;
        }

        let e;

        for (; o && o !== t;) e = o.nextSibling, n === o.parentNode && (n.removeChild(o), o.t = 0), o = e;
      }
    } else n.textContent = "";
  }(n, o, t, f), o = null, e && !0 !== e && (o = l(n, e, t))) : (null != o && n.firstChild ? t ? (t.previousSibling || n.lastChild).data = e : n.firstChild.data = e : t ? l(n, e, t) : n.textContent = e, o = e)), o;
}, i.property = function (n, e, t, o, f) {
  if (null != e) if (!t || "attrs" === t && (o = !0)) for (t in e) i.property(n, e[t], t, o, f);else "o" !== t[0] || "n" !== t[1] || e.$o ? "function" == typeof e ? i.subscribe(function () {
    i.property(n, e.call({
      el: n,
      name: t
    }), t, o, f);
  }) : f ? n.style.setProperty(t, e) : o || "data-" === t.slice(0, 5) || "aria-" === t.slice(0, 5) ? n.setAttribute(t, e) : "style" === t ? "string" == typeof e ? n.style.cssText = e : i.property(n, e, null, o, !0) : ("class" === t && (t += "Name"), n[t] = e) : function (n, e, t) {
    e = e.slice(2).toLowerCase(), t ? n.addEventListener(e, c) : n.removeEventListener(e, c), (n.o || (n.o = {}))[e] = t;
  }(n, t, e);
}, i.add = l, i.h = a({
  subscribe: _observable.subscribe,
  cleanup: _observable.cleanup,
  root: _observable.root,
  sample: _observable.sample
}), i.hs = a({
  subscribe: _observable.subscribe,
  cleanup: _observable.cleanup,
  root: _observable.root,
  sample: _observable.sample
}, !0);
},{"./observable.js":"node_modules/sinuous/module/observable.js","./htm.js":"node_modules/sinuous/module/htm.js"}],"node_modules/sinuous-style/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svg = exports.html = void 0;

var _scopeStyles = require("./scopeStyles");

var _sinuous = require("sinuous");

var _observable = require("sinuous/observable");

var _utils = require("./utils");

let scopeName;
let scopeNameCounts = {};
let styleElementIds = new Set([]);

const pipe = (f, g) => (...args) => g(...f(...args));

let originalH = _sinuous.api.h; // Wrap the native apis

_sinuous.api.h = pipe(scopeElementClasses, _sinuous.api.h);
_sinuous.api.hs = pipe( // Assume there will be no style elements nested inside svg
injectScopeName, _sinuous.api.hs);
let head = document.querySelector("head");

function addStyleElement(styleElement) {
  head.append(styleElement);
}

function removeStyleByClassName(className) {
  for (let element of head.querySelectorAll("." + className)) {
    if (element.nodeName === "STYLE") {
      /*
        Remove the style element id from the styleElementIds so that if another
        corresponding component is added, the style element will again
        be appended to the dom.
      */
      styleElementIds.delete(element.id); // Remove the style element from the dom.

      element.remove();
    }
  }
}
/* 
    If an appropriate style element, scope all selectors and inject the style element
    directly onto the body of the page. Otherwise, inject the scopeName. Return the
    `args` to be passed into `api.h`.
  */


function scopeElementClasses(...args) {
  if (args[0] === "style" && args[1] && (args[1].local || args[1].global)) {
    let props = args[1];
    let local = props.local;
    let className = props.class;
    props.class = scopeName + " " + (props.class || "");
    let modifiedScopeName = (local ? scopeName + "-local" : scopeName + "-global") + (className ? "-" + className : "");

    if (styleElementIds.has(modifiedScopeName) || head.querySelector("#" + modifiedScopeName)) {
      return [];
    }

    styleElementIds.add(modifiedScopeName);
    /* 
      Create a style element and append it to the document head rather than
      passing it through to be created by api.h in the normal fashion.
    */

    props.id = modifiedScopeName;
    let rest = local ? (0, _scopeStyles.scopeStyles)(args.slice(2), scopeName) : args.slice(2);
    let styleElement = (0, _observable.root)(() => originalH(args[0], props, ...rest));
    addStyleElement(styleElement);
    return [];
  } else {
    return injectScopeName(...args);
  }
}
/*
  Wraps the callback in a newScopeName.
*/


function wrapInScope(newScopeName, callback) {
  // Keep a reference to the outer scope.
  let outerScopeName = scopeName; // Create new scope.

  scopeName = newScopeName;
  let result = callback(); // Reset the scope to the outer scope.

  scopeName = outerScopeName;
  return result;
}
/* 
  Inject the scopeName into every element as an additional className.
  Ensure that passed children are scoped lexically rather than dynamically.
  Return the `args` to be passed into `api.h` or `api.hs`.  
*/


function injectScopeName(...args) {
  /*
    If the node is a component wrap its children in the scope
    of where they apppear in the markup, not the scope of this
    component. The `$s` annotation on this component contains
    that `scopeName`.
     This makes the scope lexical rather than dynamic.
  */
  if ((0, _utils.isFunction)(args[0])) {
    let staticScopeName = args[0].$s;

    for (let i = 2; i < args.length; i++) {
      if ((0, _utils.isFunction)(args[i])) {
        let temp = args[i];

        args[i] = () => wrapInScope(staticScopeName, temp);
      }
    }
  }

  let props = args[1] || {};
  let baseClass = props.class || "";
  /*
    Set the current value of `scopeName` to a variable so that the changing 
    `scopeName` variable (in the case that the `baseClass` is a function) 
    is not captured by the closure.
  */

  let staticScopeName = scopeName || "";
  props.class = (0, _utils.isFunction)(baseClass) ? () => baseClass() + " " + staticScopeName : baseClass + " " + staticScopeName;
  args[1] = props;
  return args;
}
/*
  Wraps Sinuous `html` or `svg`. The wrapped functions handle scoping.

  The usage of that wrapped function is as follows:
    1. html('new-scope-name')`...` - sets a new scope ('new-scope-name')
    2. html()`...` - propagates the outer scope (useful in the case of conditionals)
    3. html`...` - blocks the outer scope
*/


function wrapApiFunction(fn) {
  return (...args) => {
    if (Array.isArray(args[0])) {
      // html`...` - block outer scope
      return wrapInScope("", () => fn(...args));
    } else {
      // html(scopeName)`...` - set a new scope
      // html()`...` - propagate outer scope
      return (...templateArgs) => {
        return wrapInScope(args.length ? args[0] : scopeName, () => {
          /*
            Annotate each child function with `$s` so that any
            child components that render passed children can give
            their children this `scopeName` rather than the `scopeName`
            of that component.
             This makes the scope lexical rather than dynamic.
          */
          for (let item of templateArgs) {
            if ((0, _utils.isFunction)(item)) {
              item.$s = scopeName;
            }
          } // Track how many elements using this particular scopeName
          // are present on the dom.


          let staticScopeName = scopeName;

          if (!scopeNameCounts[staticScopeName]) {
            scopeNameCounts[staticScopeName] = 1;
          } else scopeNameCounts[staticScopeName]++; // Remove the corresponding style elements when the
          // number of elements using this scopeName goes to 0.


          (0, _observable.cleanup)(() => {
            if (--scopeNameCounts[staticScopeName] < 1) {
              delete scopeNameCounts[staticScopeName];
              removeStyleByClassName(staticScopeName);
            }
          });
          return fn(...templateArgs);
        });
      };
    }
  };
} // To be used in place of Sinuous `html` and `svg`


const html = wrapApiFunction(_sinuous.html);
exports.html = html;
const svg = wrapApiFunction(_sinuous.svg);
exports.svg = svg;
},{"./scopeStyles":"node_modules/sinuous-style/src/scopeStyles.js","sinuous":"node_modules/sinuous/module/sinuous.js","sinuous/observable":"node_modules/sinuous/module/observable.js","./utils":"node_modules/sinuous-style/src/utils.js"}],"src/components/card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.card = void 0;

var _sinuousStyle = require("sinuous-style");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <section>\n      <h2>", "</h2>\n      ", "\n    </section>\n\n    <style local>\n      section {\n        background: #f3f3f3;\n        padding: 20px;\n        border-radius: 10px;\n        margin-top: 20px;\n        margin-bottom: 20px;\n        text-align: center;\n      }\n\n      h2 {\n        margin-top: 0px;\n        text-align: center;\n      }\n    </style>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var card = function card(_ref) {
  var title = _ref.title;

  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }

  return (0, _sinuousStyle.html)("card")(_templateObject(), title, children);
};

exports.card = card;
},{"sinuous-style":"node_modules/sinuous-style/src/index.js"}],"src/tasks/counter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.counter = void 0;

var _sinuousStyle = require("sinuous-style");

var _sinuous = require("sinuous");

var _card = require("../components/card");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " title=\"Counter\">\n      ", "\n      <button onclick=", ">+</button>\n    <//>\n\n    <style local>\n      button {\n        margin-left: 15px;\n      }\n    </style>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var counter = function counter() {
  var count = (0, _sinuous.o)(0);
  return (0, _sinuousStyle.html)("counter")(_templateObject(), _card.card, count, function () {
    return count(count() + 1);
  });
};

exports.counter = counter;
},{"sinuous-style":"node_modules/sinuous-style/src/index.js","sinuous":"node_modules/sinuous/module/sinuous.js","../components/card":"src/components/card.js"}],"src/tasks/temperatureConverter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.temperatureConverter = void 0;

var _sinuousStyle = require("sinuous-style");

var _sinuous = require("sinuous");

var _card = require("../components/card");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " title=\"Temperature Converter\">\n      <span>\n        <input value=", " oninput=", " />\n        Celsius\n      </span>\n      =\n      <span>\n        <input value=", " oninput=", " />\n        Fahrenheit\n      </span>\n    <//>\n\n    <style local>\n      span {\n        display: inline-block;\n        padding-left: 10px;\n        padding-right: 10px;\n      }\n    </style>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function trunc(n) {
  return Number(n.toFixed(2));
}

function remove0(n) {
  if (/^0\d+$/.test(n)) return n.slice(1);
  if (/^-0\d+$/.test(n)) return "-" + n.slice(2);
  return n;
}

function getC(f) {
  return trunc(5 / 9 * (f - 32)) || -17.78; // 0 F
}

function getF(c) {
  return trunc(9 / 5 * c + 32) || 32; // 0 C
}

var r = /^-?\d*.?\d*$/;

function isValid(temp) {
  if (/^-?\d*$/.test(temp)) return true;
  if (/^-?\d+[.]?\d*$/.test(temp)) return true;
  return false;
}

var temperatureConverter = function temperatureConverter() {
  var c = (0, _sinuous.o)(0);
  var f = (0, _sinuous.o)(32);

  var updateFromC = function updateFromC(e) {
    return update(e, c, f, getF);
  };

  var updateFromF = function updateFromF(e) {
    return update(e, f, c, getC);
  };

  var update = function update(e, from, to, get) {
    var value = e.target.value; //|| "0";

    if (!isValid(value)) return;
    value = remove0(value);
    from(value);
    to(get(value));
  };

  return (0, _sinuousStyle.html)("temperature-converter")(_templateObject(), _card.card, c, updateFromC, f, updateFromF);
};

exports.temperatureConverter = temperatureConverter;
},{"sinuous-style":"node_modules/sinuous-style/src/index.js","sinuous":"node_modules/sinuous/module/sinuous.js","../components/card":"src/components/card.js"}],"src/tasks/flightBooker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flightBooker = void 0;

var _sinuousStyle = require("sinuous-style");

var _observable = require("sinuous/observable");

var _card = require("../components/card");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " title=\"Flight Booker\">\n      <div>\n        <select value=", " onchange=", ">\n          <option value=\"{1}\">", "</option>\n          <option value=\"{2}\">", "</option>\n        </select>\n        <input\n          value=", "\n          class=", "\n          oninput=", "\n        />\n        <input\n          value=", "\n          class=", "\n          oninput=", "\n          disabled=", "\n        />\n        <button onclick=", " disabled=", ">\n          Book\n        </button>\n      </div>\n    <//>\n\n    <style local>\n      div {\n        max-width: 400px;\n        margin: auto;\n      }\n\n      div > * {\n        width: 100%;\n        display: block;\n      }\n\n      :disabled {\n        background: #eee;\n      }\n\n      .error {\n        background: #dd9999;\n      }\n    </style>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var flightMap = {
  1: "one-way flight",
  2: "return flight"
};

function tryAsDate(dateString) {
  var dateArr = dateString.split(".").reverse();

  if (dateArr[1].length !== 2 || dateArr[2].length !== 2) {
    return false;
  }

  var date = new Date(dateArr.join("-"));
  return date.valueOf() || false;
}

function formatAsString(date) {
  return date.toISOString().slice(0, 10).split("-").reverse().join(".");
}

var flightBooker = function flightBooker() {
  var flightType = (0, _observable.o)(1);
  var startDate = (0, _observable.o)(formatAsString(new Date()));
  var returnDate = (0, _observable.o)(formatAsString(new Date()));
  var error1 = (0, _observable.S)(function () {
    return !tryAsDate(startDate());
  });
  var error2 = (0, _observable.S)(function () {
    return !tryAsDate(returnDate());
  });
  var error3 = (0, _observable.S)(function () {
    return tryAsDate(returnDate()) < tryAsDate(startDate());
  });
  var isBookButtonDisabled = (0, _observable.S)(function () {
    return error1() || error2() || error3();
  });
  var isOneWay = (0, _observable.S)(function () {
    return flightType() === 1;
  });
  var startDateClass = (0, _observable.S)(function () {
    return error1() ? "error" : "";
  });
  var returnDateClass = (0, _observable.S)(function () {
    return error2() ? "error" : "";
  });

  function book() {
    var timeStrings = {
      1: " for " + startDate(),
      2: " from " + startDate() + " to " + returnDate()
    };
    alert("You have booked a " + flightMap[flightType()] + timeStrings[flightType()]);
  }

  return (0, _sinuousStyle.html)("flight-booker")(_templateObject(), _card.card, flightType, function (e) {
    return flightType(e.target.value);
  }, flightMap[1], flightMap[2], startDate, startDateClass, function (e) {
    return startDate(e.target.value);
  }, returnDate, returnDateClass, function (e) {
    return returnDate(e.target.value);
  }, isOneWay, book, isBookButtonDisabled);
};

exports.flightBooker = flightBooker;
},{"sinuous-style":"node_modules/sinuous-style/src/index.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../components/card":"src/components/card.js"}],"src/tasks/timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timer = void 0;

var _sinuousStyle = require("sinuous-style");

var _observable = require("sinuous/observable");

var _card = require("../components/card");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " title=\"Timer\">\n      <div class=\"wrapper\">\n        Elapsed Time:\n        <progress value=", " />\n        <div class=\"duration\">", "s</div>\n        Duration:\n        <input\n          type=\"range\"\n          min=", "\n          max=", "\n          value=", "\n          oninput=", "\n        />\n        <button onclick=", ">Reset Timer</button>\n      </div>\n    <//>\n\n    <style local>\n      .wrapper {\n        max-width: 400px;\n        text-align: left;\n        margin: auto;\n        display: grid;\n        grid-template-columns: auto auto;\n        grid-template-rows: auto;\n        grid-gap: 10px 10px;\n        grid-auto-flow: row;\n      }\n\n      input {\n        padding: 0;\n        justify-self: stretch;\n        align-self: center;\n      }\n\n      button {\n        grid-column: 1/3;\n        grid-row: auto;\n      }\n\n      .duration {\n        grid-column: 2;\n      }\n    </style>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var timer = function timer() {
  var MAX = 30000;
  var duration = (0, _observable.o)(5000);
  var durationFormatted = (0, _observable.S)(function () {
    return (duration() / 1000).toFixed(1);
  });
  var start = (0, _observable.o)();
  var time = (0, _observable.o)();
  var progress = (0, _observable.S)(function () {
    return (time() - start()) / duration();
  });
  var interval;

  function createInterval() {
    return setInterval(function () {
      time(new Date().valueOf());
    }, 10);
  }

  function startTimer() {
    clearInterval(interval);
    start(new Date().valueOf());
    time(start());
    interval = createInterval();
  }

  startTimer();
  return (0, _sinuousStyle.html)("timer")(_templateObject(), _card.card, progress, durationFormatted, 0, MAX, duration, function (e) {
    return duration(e.target.value);
  }, startTimer);
};

exports.timer = timer;
},{"sinuous-style":"node_modules/sinuous-style/src/index.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../components/card":"src/components/card.js"}],"src/tasks/crud.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crud = void 0;

var _sinuousStyle = require("sinuous-style");

var _observable = require("sinuous/observable");

var _card = require("../components/card");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n                <option value=", ">", ", ", "</option>\n              "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " title=\"CRUD\">\n      <div class=\"wrapper\">\n        Filter prefix:\n        <input value=", " oninput=", " />\n        <select\n          value=", "\n          oninput=", "\n          size=\"4\"\n        >\n          ", "\n        </select>\n        <div>\n          Name:\n          <input value=", " oninput=", " />\n          Surname:\n          <input value=", " oninput=", " />\n        </div>\n        <div class=\"buttons\">\n          <button onclick=", ">Create</button>\n          <button onclick=", ">Update</button>\n          <button onclick=", ">Delete</button>\n        </div>\n      </div>\n    <//>\n\n    <style local>   \n      .wrapper {\n        max-width: 400px;\n        text-align: left;\n        margin: auto;\n        display: grid;\n        grid-template-columns: 150px auto;\n        grid-template-rows: auto;\n        grid-gap: 10px 10px;\n        grid-auto-flow: row;\n      }\n\n      .buttons {\n        grid-column: 1/3;\n        display: flex;\n        justify-content: space-evenly;\n      }\n\n      button {\n        flex: 1 1 0%;\n      }\n\n      input {\n        width: 100%;\n      }\n    </style>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var crud = function crud() {
  var prefix = (0, _observable.o)("");
  var entries = (0, _observable.o)([(0, _observable.o)(["Paul", "Atreides"]), (0, _observable.o)(["Gurney", "Halleck"]), (0, _observable.o)(["Duncan", "Idaho"])]);
  var filteredEntries = (0, _observable.S)(function () {
    return (// get filtered entries in which entry[1] startsWith prefix
      // get array of [entry[0], entry[1], index]
      entries().map(function (entry, i) {
        return [entry()[0], entry()[1], i];
      }).filter(function (entry) {
        return entry[1].toLowerCase().startsWith(prefix().toLowerCase());
      })
    );
  });
  var name = (0, _observable.o)("");
  var surname = (0, _observable.o)("");
  var selected = (0, _observable.o)(-1);
  (0, _observable.subscribe)(function () {
    prefix();
    selected(-1);
  });

  function createHandler() {
    entries(entries().concat((0, _observable.o)([name(), surname()])));
  }

  function updateHandler() {
    // if selected > -1 then update entries[selected]
    selected() > -1 && entries()[selected()]([name(), surname()]);
  }

  function deleteHandler() {
    // if selected > -1 then delete entries[selected]
    selected() > -1 && entries(entries().filter(function (entry, i) {
      return i != selected();
    }));
  }

  return (0, _sinuousStyle.html)("crud")(_templateObject(), _card.card, prefix, function (e) {
    return prefix(e.target.value);
  }, selected, function (e) {
    return selected(e.target.value);
  }, function () {
    return filteredEntries().map(function (entry) {
      return (0, _sinuousStyle.html)(_templateObject2(), entry[2], entry[1], entry[0]);
    });
  }, name, function (e) {
    return name(e.target.value);
  }, surname, function (e) {
    return surname(e.target.value);
  }, createHandler, updateHandler, deleteHandler);
};

exports.crud = crud;
},{"sinuous-style":"node_modules/sinuous-style/src/index.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../components/card":"src/components/card.js"}],"src/tasks/circleDrawer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.circleDrawer = void 0;

var _sinuousStyle = require("sinuous-style");

var _observable = require("sinuous/observable");

var _card = require("../components/card");

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                      <", "\n                        circle=", "\n                        handleRightClick=", "\n                      />\n                    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            <svg onclick=", ">\n              ", "\n            </svg>\n          "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    <", " title=\"Circle Drawer\">\n      <div class=\"wrapper\">\n        <div class=\"buttons\">\n          <button disabled=", " onclick=", ">Undo</button>\n          <button\n            disabled=", "\n            onclick=", "\n          >\n            Redo\n          </button>\n        </div>\n        <div class=\"canvas\">\n          ", "\n        </div>\n        ", "\n      </div>\n    <//>\n\n    <style local>\n      .wrapper {\n        max-width: 400px;\n        text-align: left;\n        margin: auto;\n        position: relative;\n      }\n\n      .canvas {\n        width: 100%;\n        height: 400px;\n        position: relative;\n      }\n\n      .overlay {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background: transparent;\n      }\n\n      .resizer {\n        background: rgba(200, 200, 200, 0.5);\n        position: absolute;\n        top: 50%;\n        left: 20px;\n        right: 20px;\n        transform: translateY(-50%);\n        text-align: center;\n      }\n\n      .buttons {\n        margin: auto;\n        width: max-content;\n      }\n\n      svg {\n        background: white;\n        width: 100%;\n        height: 100%;\n      }\n\n      circle:hover {\n        fill: #eee;\n      }\n    </style>\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <circle\n        cx=", "\n        cy=", "\n        r=", "\n        fill=\"white\"\n        stroke=\"black\"\n        onclick=", "\n        oncontextmenu=", "\n      />\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <div class=\"overlay\" onclick=", "></div>\n    <div class=\"resizer\">\n      <p>\n        Adjust radius of circle at (", ",\n        ", ")\n      </p>\n      <p>", "</p>\n      <input\n        type=\"range\"\n        min=", "\n        max=", "\n        value=", "\n        oninput=", "\n      />\n    </div>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var circleDrawer = function circleDrawer() {
  var BASE_RADIUS = 30;
  var step = (0, _observable.o)(0);
  var snapshots = (0, _observable.o)([(0, _observable.o)([])]);
  var radius = (0, _observable.o)(BASE_RADIUS);
  var resizing = (0, _observable.o)(false);
  var present = (0, _observable.o)([]);
  (0, _observable.subscribe)(function () {
    return present(snapshots()[step()]());
  });
  (0, _observable.subscribe)(function () {
    if (resizing()) {
      var resizingIndex = (0, _observable.sample)(present).findIndex(function (circle) {
        return circle.x === resizing().x && circle.y === resizing().y;
      });
      var newPresent = (0, _observable.sample)(present).slice();
      newPresent[resizingIndex] = _objectSpread({}, (0, _observable.sample)(present)[resizingIndex], {
        r: Number(radius())
      });
      present(newPresent);
    }
  });

  function handleRightClick(e) {
    e.preventDefault();
    e.stopPropagation();
    var circle = e.target;
    resizing({
      x: circle.cx.baseVal.value,
      y: circle.cy.baseVal.value,
      r: circle.r.baseVal.value
    });
    radius(resizing().r);
  }

  function addCircle(e) {
    var x = e.layerX;
    var y = e.layerY;
    var newSnapshot = present().slice();
    newSnapshot.push({
      x: x,
      y: y,
      r: BASE_RADIUS
    });
    addSnapshot((0, _observable.o)(newSnapshot));
  }

  function addSnapshot(newSnapshot) {
    var newSnapshots = snapshots().slice(0, step() + 1);
    newSnapshots.push(newSnapshot);
    snapshots(newSnapshots);
    step(step() + 1);
  }

  function undo() {
    step(Math.max(step() - 1, 0));
  }

  function redo() {
    step(Math.min(step() + 1, snapshots().length - 1));
  }

  function endResize() {
    if (radius() !== resizing().r) {
      resizing(false);
      radius(BASE_RADIUS);
      addSnapshot((0, _observable.o)(present().slice()));
    }

    resizing(false);
  }

  var overlay = function overlay() {
    return (0, _sinuousStyle.html)('circle-drawer')(_templateObject(), endResize, function () {
      return resizing().x;
    }, function () {
      return resizing().y;
    }, radius, 0, 100, radius, function (e) {
      return radius(e.target.value);
    });
  };

  var circleSVG = function circleSVG(_ref) {
    var circle = _ref.circle,
        handleRightClick = _ref.handleRightClick;
    return (0, _sinuousStyle.svg)()(_templateObject2(), circle.x, circle.y, circle.r, function (e) {
      e.preventDefault();
      e.stopPropagation();
    }, handleRightClick);
  };

  var view = (0, _sinuousStyle.html)('circle-drawer')(_templateObject3(), _card.card, function () {
    return !step();
  }, undo, function () {
    return step() === snapshots().length - 1;
  }, redo, function () {
    return (0, _sinuousStyle.svg)()(_templateObject4(), addCircle, function () {
      return present().map(function (cir) {
        return (0, _sinuousStyle.html)()(_templateObject5(), circleSVG, cir, handleRightClick);
      });
    });
  }, function () {
    return resizing() && overlay;
  });
  return view;
};

exports.circleDrawer = circleDrawer;
},{"sinuous-style":"node_modules/sinuous-style/src/index.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../components/card":"src/components/card.js"}],"src/tasks/cells/sampleData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sampleData = void 0;
var sampleData = {
  A0: 'Data',
  A1: '20',
  A2: '15',
  A3: 'text',
  B1: '79',
  B2: '3.9',
  A5: 'Formula',
  B5: 'Output',
  A6: '"=sum(D1:D5)"',
  B6: '=sum(D1:D5)',
  A7: '"=sub(A1:B2)"',
  B7: '=sub(A1:B2)',
  A8: '"=mul(D1:D5)"',
  B8: '=mul(D1:D5)',
  A9: '"=div(A1:B2)"',
  B9: '=div(A1:B2)',
  A10: '"=mod(A1:B2)"',
  B10: '=mod(A1:B2)',
  C0: 'Formula',
  D0: 'Output',
  C1: '"=sum(A1,A2)"',
  D1: '=sum(A1,A2)',
  C2: '"=sub(D1,A1)"',
  D2: '=sub(D1,A1)',
  C3: '"=mul(D2,A2)"',
  D3: '=mul(D2,A2)',
  C4: '"=div(D3,A1)"',
  D4: '=div(D3,A1)',
  C5: '"=mod(A1,A2)"',
  D5: '=mod(A1,A2)',
  C7: '"=sum(A1,A3)"',
  D7: '=sum(A1,A3)',
  C8: '"=sum(A1,A4)"',
  D8: '=sum(A1,A4)',
  C9: '"=sumA1,A4)"',
  D9: '=sumA1,A4)',
  C10: '"=sm(A1,A4)"',
  D10: '=sm(A1,A4)',
  C11: '"=sum(A1,307)"',
  D11: '=sum(A1,307)',
  C12: '"=sum(159,4)"',
  D12: '=sum(159,4)',
  C14: '"=A1"',
  D14: '=A1',
  C15: '"=A3"',
  D15: '=A3'
};
exports.sampleData = sampleData;
},{}],"src/tasks/cells/parse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parser = void 0;

var _observable = require("sinuous/observable");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parser = /*#__PURE__*/function () {
  function Parser(store, columns, rows) {
    var _this = this;

    _classCallCheck(this, Parser);

    this.cells = {};
    this.store = store;
    this.columns = columns;
    this.rows = rows;
    this.operations = {
      sum: function sum(a, b) {
        return a + b;
      },
      sub: function sub(a, b) {
        return a - b;
      },
      mul: function mul(a, b) {
        return a * b;
      },
      div: function div(a, b) {
        return a / b;
      },
      mod: function mod(a, b) {
        return a % b;
      },
      exp: function exp(a, b) {
        return Math.pow(a, b);
      }
    };
    (0, _observable.subscribe)(function () {
      return _this.cells = _this.store();
    });
  }

  _createClass(Parser, [{
    key: "cartesianProduct",
    value: function cartesianProduct(letters, numbers) {
      var result = [];
      letters.forEach(function (letter) {
        numbers.forEach(function (number) {
          result.push(letter + number);
        });
      });
      return result;
    }
  }, {
    key: "findArrRange",
    value: function findArrRange(arr, start, end) {
      var startI = arr.indexOf(start);
      var endI = arr.indexOf(end);
      if (startI == -1 || endI == -1 || startI > endI) return [];
      return arr.slice(startI, endI + 1);
    }
  }, {
    key: "getRange",
    value: function getRange(rangeStart, rangeEnd) {
      rangeStart = this.splitOperand(rangeStart);
      rangeEnd = this.splitOperand(rangeEnd);
      var letters = this.findArrRange(this.columns, rangeStart[0], rangeEnd[0]);
      var numbers = this.findArrRange(this.rows, rangeStart[1], rangeEnd[1]);
      return this.cartesianProduct(letters, numbers);
    }
  }, {
    key: "splitOperand",
    value: function splitOperand(operand) {
      return [operand.match(/[a-zA-Z]+/)[0], Number(operand.match(/\d+/)[0])];
    }
  }, {
    key: "rangeOperation",
    value: function rangeOperation(op, rangeStart, rangeEnd) {
      var _this2 = this;

      if (!(this.isWellFormed(rangeStart) && this.isWellFormed(rangeEnd))) return this.originalString;
      var range = this.getRange(rangeStart, rangeEnd);
      return range.map(function (address) {
        return Number(_this2.parse(_this2.cells[address]()));
      }).reduce(this.operations[op]);
    }
  }, {
    key: "singleOperation",
    value: function singleOperation(op, operand1, operand2) {
      var first = this.parseOperand(operand1);
      var second = this.parseOperand(operand2);
      if (first === null || second === null) return this.originalString;
      return this.operations[op](first, second).toString();
    }
  }, {
    key: "isWellFormed",
    value: function isWellFormed(operand) {
      return /[a-zA-Z]+\d+/.test(operand);
    }
  }, {
    key: "parseOperand",
    value: function parseOperand(operand) {
      if (!isNaN(Number(operand))) return Number(operand);
      if (operand in this.cells) return Number(this.parse(this.cells[operand]()));
      if (this.isWellFormed(operand)) return 0;
      return null;
    }
  }, {
    key: "parseOperation",
    value: function parseOperation(op, formula) {
      if (!(formula.startsWith('(') && formula.endsWith(')'))) return this.originalString;
      formula = formula.slice(1, formula.length - 1);
      var operationType;
      var formulaArr;

      if (formula.includes(',')) {
        operationType = 'single';
        formulaArr = formula.split(',');
      } else if (formula.includes(':')) {
        operationType = 'range';
        formulaArr = formula.split(':');
      }

      if (formulaArr.length !== 2) return this.originalString;
      if (operationType === 'single') return this.singleOperation(op, formulaArr[0], formulaArr[1]);
      if (operationType === 'range') return this.rangeOperation(op, formulaArr[0], formulaArr[1]);
      return this.originalString;
    }
  }, {
    key: "parse",
    value: function parse(str) {
      this.originalString = str;
      if (typeof str !== 'string') return '';
      if (!str.startsWith('=')) return str;
      var formula = str.slice(1);

      if (formula.slice(0, 3).toLowerCase() in this.operations) {
        return this.parseOperation(formula.slice(0, 3).toLowerCase(), formula.slice(3).toUpperCase());
      } else {
        return this.cells[formula] || str;
      }
    }
  }]);

  return Parser;
}();

exports.Parser = Parser;
},{"sinuous/observable":"node_modules/sinuous/module/observable.js"}],"src/tasks/cells/cells.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cells = void 0;

var _sinuousStyle = require("sinuous-style");

var _observable = require("sinuous/observable");

var _card = require("../../components/card");

var _sampleData = require("./sampleData.js");

var _parse = require("./parse.js");

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                          <td id=", ">\n                            <input\n                              id=", "\n                              value=", "\n                              onfocus=", "\n                              onblur=", "\n                              onkeydown=", "\n                              oninput=", "\n                            />\n                          </td>\n                        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                  <tr id=", ">\n                    <td class=\"row-key\">", "</td>\n                    ", "\n                  </tr>\n                "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([" <td class=\"column-key\">", "</td> "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " title=\"Cells\">\n      <div class=\"wrapper\">\n        <table>\n          <thead>\n            <tr>\n              <td class=\"row-key\"></td>\n              ", "\n            </tr>\n          </thead>\n          <tbody>\n            ", "\n          </tbody>\n        </table>\n      </div>\n      <button onclick=", ">Clear</button>\n    <//>\n\n    <style local>\n      .wrapper {\n        margin: auto;\n        overflow: scroll;\n        max-width: 600px;\n        max-height: 600px;\n        border: solid 1px #ddd;\n      }\n\n      table {\n        table-layout: fixed;\n        border-collapse: collapse;\n        border: solid 1px #ddd;\n        background: white;\n      }\n\n      td {\n        height: 30px;\n        border: solid 1px #ddd;\n        overflow: hidden;\n      }\n\n      input {\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        text-align: right;\n        border: none;\n        outline: none;\n      }\n\n      input:focus {\n        text-align: left;\n      }\n\n      .row-key {\n        width: min-content;\n        padding-left: 15px;\n        padding-right: 15px;\n      }\n\n      .column-key {\n        min-width: 120px;\n      }\n    </style>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function range(n) {
  return _toConsumableArray(Array(n).keys());
}

function letterRange(n) {
  return range(n).map(getNumberAsLetters);
}

function getBase26(n) {
  var result = [];

  while (n > 25) {
    var remainder = n % 26;
    result.push(remainder);
    n = Math.floor(n / 26) - 1;
  }

  result.push(n);
  return result.reverse();
}

function getNumberAsLetters(n) {
  var arr = getBase26(n);
  return arr.map(function (num) {
    return LETTERS[num];
  }).join("");
}

function findAdjacent(arr, value, direction) {
  var index = arr.indexOf(value);
  if (index === -1) return null;
  if (direction === "before") return arr[index - 1] === undefined ? null : arr[index - 1];
  if (direction === "after") return arr[index + 1] || null;
  return null;
}

var cells = function cells(props) {
  var shape = props && props.shape || [100, 100];
  Object.keys(_sampleData.sampleData).forEach(function (key) {
    // Make each entry an observable
    _sampleData.sampleData[key] = (0, _observable.o)(_sampleData.sampleData[key]);
  });
  var data = (0, _observable.o)(_sampleData.sampleData);
  var rows = range(shape[1]);
  var columns = letterRange(shape[0]);
  var p = new _parse.Parser(data, columns, rows);
  var focused = (0, _observable.o)(undefined);
  var tBody; // Used as a ref

  function createNewCell(key) {
    var dataRef = (0, _observable.sample)(data);

    if (!dataRef[key]) {
      dataRef[key] = (0, _observable.o)("");
      data(dataRef);
    }
  }

  function handleFocus(e, key) {
    createNewCell(key);
    focused(key);
    setTimeout(function () {
      // The timeout allows the selection to occur after
      // the parsing switch inside a cell
      e.target.setSelectionRange(0, 9999);
    }, 10);
  }

  function handleBlur() {
    focused(undefined);
  }

  function handleInput(e, key) {
    (0, _observable.sample)(data)[key](e.target.value);
  }

  function handleKeydown(e, column, row) {
    // Navigate across the spreadsheet with arrow keys (and alt/option key)
    var selector;

    if (e.key === "ArrowUp") {
      var newRow = findAdjacent(rows, row, "before");
      selector = newRow !== null ? column + newRow : null;
    }

    if (e.key === "ArrowDown" || e.key === "Enter") {
      var _newRow = findAdjacent(rows, row, "after");

      selector = _newRow !== null ? column + _newRow : null;
    }

    if (e.key === "ArrowLeft" && e.altKey) {
      var newColumn = findAdjacent(columns, column, "before");
      selector = newColumn !== null ? newColumn + row : null;
    }

    if (e.key === "ArrowRight" && e.altKey) {
      var _newColumn = findAdjacent(columns, column, "after");

      selector = _newColumn !== null ? _newColumn + row : null;
    }

    if (selector) {
      e.preventDefault();
      var input = tBody.querySelector("#input-" + selector);
      input.focus();
    }
  }

  function clear() {
    data({});
  }

  var view = (0, _sinuousStyle.html)('cells')(_templateObject(), _card.card, function () {
    return columns.map(function (column) {
      return (0, _sinuousStyle.html)()(_templateObject2(), column);
    });
  }, function () {
    return rows.map(function (i) {
      return (0, _sinuousStyle.html)()(_templateObject3(), "row-" + i, i, function () {
        return columns.map(function (j) {
          return (0, _sinuousStyle.html)()(_templateObject4(), j + i, "input-" + j + i, function () {
            return j + i in data() ? focused() === j + i ? data()[j + i]() : p.parse(data()[j + i]()) : "";
          }, function (e) {
            return handleFocus(e, j + i);
          }, handleBlur, function (e) {
            return handleKeydown(e, j, i);
          }, function (e) {
            return handleInput(e, j + i);
          });
        });
      });
    });
  }, clear);
  tBody = view.querySelector("tbody"); // Assign ref to domNode

  return view;
};

exports.cells = cells;
},{"sinuous-style":"node_modules/sinuous-style/src/index.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../../components/card":"src/components/card.js","./sampleData.js":"src/tasks/cells/sampleData.js","./parse.js":"src/tasks/cells/parse.js"}],"src/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _sinuousStyle = require("sinuous-style");

var _counter = require("./tasks/counter");

var _temperatureConverter = require("./tasks/temperatureConverter");

var _flightBooker = require("./tasks/flightBooker");

var _timer = require("./tasks/timer");

var _crud = require("./tasks/crud");

var _circleDrawer = require("./tasks/circleDrawer");

var _cells = require("./tasks/cells/cells");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <main>\n      <a href=\"../../index.html\">Home</a>\n\n      <", " />\n      <", " />\n      <", " />\n      <", " />\n      <", " />\n      <", " />\n      <", " />\n    </main>\n\n    <style local>\n      main {\n        max-width: 800px;\n        margin: auto;\n      }\n    </style>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var app = function app() {
  return (0, _sinuousStyle.html)("app")(_templateObject(), _counter.counter, _temperatureConverter.temperatureConverter, _flightBooker.flightBooker, _timer.timer, _crud.crud, _circleDrawer.circleDrawer, _cells.cells);
};

exports.app = app;
},{"sinuous-style":"node_modules/sinuous-style/src/index.js","./tasks/counter":"src/tasks/counter.js","./tasks/temperatureConverter":"src/tasks/temperatureConverter.js","./tasks/flightBooker":"src/tasks/flightBooker.js","./tasks/timer":"src/tasks/timer.js","./tasks/crud":"src/tasks/crud.js","./tasks/circleDrawer":"src/tasks/circleDrawer.js","./tasks/cells/cells":"src/tasks/cells/cells.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _app = require("./app");

document.querySelector("#root").append((0, _app.app)());
},{"./app":"src/app.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56136" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=src.a2b27638.js.map