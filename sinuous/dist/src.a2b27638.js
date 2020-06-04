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
})({"node_modules/sinuous/module/observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computed = exports.S = f;
exports.cleanup = d;
exports.isListening = u;
exports.observable = exports.o = e;
exports.root = r;
exports.sample = c;
exports.subscribe = v;
exports.transaction = i;
exports.unsubscribe = S;
const n = [];
let t, o;

function u() {
  return !!t;
}

function r(n) {
  const o = t,
        u = () => {};

  t = u, l(u);
  const r = n(() => {
    a(u), t = void 0;
  });
  return t = o, r;
}

function c(n) {
  const o = t;
  t = void 0;
  const u = n();
  return t = o, u;
}

function i(t) {
  o = [];
  const u = t();
  let r = o;
  return o = void 0, r.forEach(t => {
    if (t.t !== n) {
      const o = t.t;
      t.t = n, t(o);
    }
  }), u;
}

function e(u) {
  function r(c) {
    if (0 === arguments.length) return t && !r.o.has(t) && (r.o.add(t), t.u.push(r)), u;
    if (o) return r.t === n && o.push(r), r.t = c, c;
    u = c;
    const i = t;
    return t = void 0, r.i = new Set(r.o), r.i.forEach(n => n.s = !1), r.i.forEach(n => {
      n.s || n();
    }), t = i, u;
  }

  return r.$o = !0, r.o = new Set(), r.t = n, r;
}

function f(n, o) {
  function u() {
    const r = t;
    t && t.__c.push(u);
    const c = u.__c;
    return a(u), u.s = !0, t = u, o = n(o), c.forEach(n => {
      -1 === u.__c.indexOf(n) && (n.s = !0);
    }), function n(t) {
      return t.reduce((t, o) => t.concat(o, n(o.__c)), []);
    }(u.__c).forEach(s), t = r, o;
  }

  function r() {
    return u.s ? u.u.forEach(n => n()) : o = u(), o;
  }

  return n.v = u, l(u), u(), r.$o = !0, r;
}

function s(n) {
  n.s && n.u.forEach(t => {
    t.i && t.i.delete(n);
  });
}

function d(n) {
  return t && t.S.push(n), n;
}

function v(n) {
  return f(n), () => a(n.v);
}

function S(n) {
  a(n.v);
}

function a(n) {
  n.__c.forEach(a), n.u.forEach(t => {
    t.o.delete(n), t.i && t.i.delete(n);
  }), n.S.forEach(n => n()), l(n);
}

function l(n) {
  n.u = [], n.__c = [], n.S = [];
}
},{}],"node_modules/sinuous/module/htm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

const t = (e, n, f, o) => {
  let r = {};

  for (let l = 1; l < n.length; l++) {
    const u = n[l],
          i = "number" == typeof u ? f[u] : u,
          s = n[++l];
    if (1 === s) o[0] = i;else if (3 === s) o[1] = Object.assign(o[1] || {}, i);else if (5 === s) (o[1] = o[1] || {})[n[++l]] = i;else if (6 === s) {
      let t = n[++l],
          e = (o[1] = o[1] || {})[t],
          f = r[t];
      f || "function" != typeof i && "function" != typeof e || (f = e && [e] || [], o[1][t] = function () {
        let t = "";

        for (var e = 0; e < f.length; e++) t += "function" == typeof f[e] ? f[e]() : f[e];

        return t;
      }), f ? f.push(i) : o[1][t] += i + "";
    } else s ? o.push(e.apply(null, t(e, i, f, ["", null]))) : o.push(i);
  }

  return o;
},
      e = function (t) {
  let e,
      n,
      f = 1,
      o = "",
      r = "",
      l = [0];

  const u = t => {
    1 === f && (t || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(t || o, 0) : 3 === f && (t || o) ? (l.push(t || o, 1), f = 2) : 2 === f && "..." === o && t ? l.push(t, 3) : 2 === f && o && !t ? l.push(!0, 5, o) : f >= 5 && ((o || !t && 5 === f) && (l.push(o, f, n), f = 6), t && (l.push(t, f, n), f = 6)), o = "";
  };

  for (let i = 0; i < t.length; i++) {
    i && (1 === f && u(), u(i));

    for (let s = 0; s < t[i].length; s++) e = t[i][s], 1 === f ? "<" === e ? (u(), l = [l], f = 3) : o += e : 4 === f ? "--" === o && ">" === e ? (f = 1, o = "") : o = e + o[0] : r ? e === r ? r = "" : o += e : '"' === e || "'" === e ? r = e : ">" === e ? (u(), f = 1) : f && ("=" === e ? (f = 5, n = o, o = "") : "/" === e && (f < 5 || ">" === t[i][s + 1]) ? (u(), 3 === f && (l = l[0]), f = l, (l = l[0]).push(f, 2), f = 0) : " " === e || "\t" === e || "\n" === e || "\r" === e ? (u(), f = 2) : o += e), 3 === f && "!--" === o && (f = 4, l = l[0]);
  }

  return u(), l;
},
      n = "function" == typeof Map,
      f = n ? new Map() : {},
      o = n ? t => {
  let n = f.get(t);
  return n || f.set(t, n = e(t)), n;
} : t => {
  let n = "";

  for (let e = 0; e < t.length; e++) n += t[e].length + "-" + t[e];

  return f[n] || (f[n] = e(t));
};

function _default(e) {
  const n = t(this, o(e), arguments, []),
        f = n.length > 1 ? n : n[0];
  if (f) return Array.isArray(f) ? this(f) : "object" == typeof f ? f : this([f]);
}
},{}],"node_modules/sinuous/module/sinuous.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.context = l;
exports.html = p;
exports.svg = m;
exports.observable = exports.o = exports.hs = exports.h = exports.api = void 0;

var n = _interopRequireWildcard(require("./observable.js"));

var _htm = _interopRequireDefault(require("./htm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const o = {},
      f = [];
exports.api = o;
let i = 0;

function s(n, t, e) {
  let s;
  return "string" == typeof t ? t = document.createTextNode(t) : t instanceof Node || (t = o.h(f, t)), 11 === t.nodeType && (s = t.firstChild) && s !== t.lastChild && (s.t = t.lastChild.t = ++i), n.insertBefore(t, e || null), void 0 === s ? t : s;
}

function r(n) {
  return this.o[n.type](n);
}

function l(n, t) {
  for (let t in n) o[t] = n[t];

  function e() {
    const n = f.slice.call(arguments);
    let e;

    function i(f) {
      if (null == f) ;else if ("string" == typeof f) e ? s(e, f) : e = t ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f);else if (Array.isArray(f)) e || (e = document.createDocumentFragment()), f.forEach(i);else if (f instanceof Node) e ? s(e, f) : e = f;else if ("object" == typeof f) o.property(null, f, e, t);else if ("function" == typeof f) {
        if (e) {
          const n = s(e, "");
          o.insert(e, f, n);
        } else e = f.apply(null, n.splice(1));
      } else s(e, "" + f);
    }

    return n.forEach(i), e;
  }

  return o.h = e, e;
}

o.insert = function (n, t, e, f, i) {
  return n = e && e.parentNode || n, t === f || (f && "string" != typeof f || !("string" == typeof t || "number" == typeof t && (t += "")) ? "function" == typeof t ? o.subscribe(function () {
    f = o.insert(n, t.call({
      el: n
    }), e, f);
  }) : (function (n, t, e, o) {
    if (e) {
      if (t) {
        if (!o) {
          const t = (o = e.previousSibling || n.lastChild).t;
          if (t) for (o = o.previousSibling; o && o.t !== t;) o = o.previousSibling;
        }

        let t;

        for (; o && o !== e;) t = o.nextSibling, n.removeChild(o), o.t = 0, o = t;
      }
    } else n.textContent = "";
  }(n, f, e, i), f = null, t && !0 !== t && (f = s(n, t, e))) : (null != f && n.firstChild ? e ? (e.previousSibling || n.lastChild).data = t : n.firstChild.data = t : e ? s(n, t, e) : n.textContent = t, f = t)), f;
}, o.property = function (n, t, e, f, i) {
  if (null != t) if (!n || "attrs" === n && (f = !0)) for (n in t) o.property(n, t[n], e, f, i);else "o" !== n[0] || "n" !== n[1] || t.$o ? "function" == typeof t ? o.subscribe(function () {
    o.property(n, t.call({
      el: e,
      name: n
    }), e, f, i);
  }) : i ? e.style.setProperty(n, t) : f || "data-" === n.slice(0, 5) || "aria-" === n.slice(0, 5) ? e.setAttribute(n, t) : "style" === n ? "string" == typeof t ? e.style.cssText = t : o.property(null, t, e, f, !0) : ("class" === n && (n += "Name"), e[n] = t) : function (n, t, e) {
    t = t.slice(2).toLowerCase();
    const f = o.cleanup(() => n.removeEventListener(t, r));
    e ? n.addEventListener(t, r) : f(), (n.o || (n.o = {}))[t] = e;
  }(e, n, t);
}, o.add = s;
const u = l(n),
      c = l(n, !0),
      a = n.o;
exports.observable = exports.o = a;
exports.hs = c;
exports.h = u;

function p() {
  return _htm.default.apply(u, arguments);
}

function m() {
  return _htm.default.apply(c, arguments);
}
},{"./observable.js":"node_modules/sinuous/module/observable.js","./htm.js":"node_modules/sinuous/module/htm.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/app.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/card.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.card = void 0;

var _sinuous = require("sinuous");

require("./card.css");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <section className=", ">\n      <h2>", "</h2>\n      ", "\n    </section>\n  "]);

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

  return (0, _sinuous.html)(_templateObject(), "card " + title.replace(" ", "-"), title, children);
};

exports.card = card;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","./card.css":"src/components/card.css"}],"src/tasks/counter.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/tasks/counter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.counter = void 0;

var _sinuous = require("sinuous");

var _card = require("../components/card");

require("./counter.css");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " title=\"Counter\">\n      ", "\n      <button onclick=", ">+</button>\n    <//>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var counter = function counter() {
  var count = (0, _sinuous.o)(0);
  return (0, _sinuous.html)(_templateObject(), _card.card, count, function () {
    return count(count() + 1);
  });
};

exports.counter = counter;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","../components/card":"src/components/card.js","./counter.css":"src/tasks/counter.css"}],"src/components/Card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.card = void 0;

var _sinuous = require("sinuous");

require("./card.css");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <section className=", ">\n      <h2>", "</h2>\n      ", "\n    </section>\n  "]);

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

  return (0, _sinuous.html)(_templateObject(), "card " + title.replace(" ", "-"), title, children);
};

exports.card = card;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","./card.css":"src/components/card.css"}],"src/tasks/temperatureConverter.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/tasks/temperatureConverter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.temperatureConverter = void 0;

var _sinuous = require("sinuous");

var _Card = require("../components/Card");

require("./temperatureConverter.css");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " title=\"Temperature Converter\">\n      <span>\n        <input value=", " oninput=", " />\n        Celsius\n      </span>\n      =\n      <span>\n        <input value=", " oninput=", " />\n        Fahrenheit\n      </span>\n    <//>\n  "]);

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

  return (0, _sinuous.html)(_templateObject(), _Card.card, c, updateFromC, f, updateFromF);
};

exports.temperatureConverter = temperatureConverter;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","../components/Card":"src/components/Card.js","./temperatureConverter.css":"src/tasks/temperatureConverter.css"}],"src/tasks/flightBooker.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/tasks/flightBooker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flightBooker = void 0;

var _sinuous = require("sinuous");

var _observable = require("sinuous/observable");

var _card = require("../components/card");

require("./flightBooker.css");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " title=\"Flight Booker\">\n      <div>\n        <select value=", " onchange=", ">\n          <option value=\"{1}\">", "</option>\n          <option value=\"{2}\">", "</option>\n        </select>\n        <input\n          value=", "\n          class=", "\n          oninput=", "\n        />\n        <input\n          value=", "\n          class=", "\n          oninput=", "\n          disabled=", "\n        />\n        <button onclick=", " disabled=", ">\n          Book\n        </button>\n      </div>\n    <//>\n  "]);

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
  var flightType = (0, _sinuous.o)(1);
  var startDate = (0, _sinuous.o)(formatAsString(new Date()));
  var returnDate = (0, _sinuous.o)(formatAsString(new Date()));
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

  return (0, _sinuous.html)(_templateObject(), _card.card, flightType, function (e) {
    return flightType(e.target.value);
  }, flightMap[1], flightMap[2], startDate, startDateClass, function (e) {
    return startDate(e.target.value);
  }, returnDate, returnDateClass, function (e) {
    return returnDate(e.target.value);
  }, isOneWay, book, isBookButtonDisabled);
};

exports.flightBooker = flightBooker;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../components/card":"src/components/card.js","./flightBooker.css":"src/tasks/flightBooker.css"}],"src/tasks/timer.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/tasks/timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timer = void 0;

var _sinuous = require("sinuous");

var _observable = require("sinuous/observable");

var _card = require("../components/card");

require("./timer.css");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " title=\"Timer\">\n      <div class=\"wrapper\">\n        Elapsed Time:\n        <progress value=", " />\n        <div class=\"duration\">", "s</div>\n        Duration:\n        <input\n          type=\"range\"\n          min=", "\n          max=", "\n          value=", "\n          oninput=", "\n        />\n        <button onclick=", ">Reset Timer</button>\n      </div>\n    <//>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var timer = function timer() {
  var MAX = 30000;
  var duration = (0, _sinuous.o)(5000);
  var durationFormatted = (0, _observable.S)(function () {
    return (duration() / 1000).toFixed(1);
  });
  var start = (0, _sinuous.o)();
  var time = (0, _sinuous.o)();
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
  return (0, _sinuous.html)(_templateObject(), _card.card, progress, durationFormatted, 0, MAX, duration, function (e) {
    return duration(e.target.value);
  }, startTimer);
};

exports.timer = timer;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../components/card":"src/components/card.js","./timer.css":"src/tasks/timer.css"}],"src/tasks/crud.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/tasks/crud.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crud = void 0;

var _sinuous = require("sinuous");

var _observable = require("sinuous/observable");

var _card = require("../components/card");

require("./crud.css");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n                <option value=", ">", ", ", "</option>\n              "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " title=\"CRUD\">\n      <div class=\"wrapper\">\n        Filter prefix:\n        <input value=", " oninput=", " />\n        <select\n          value=", "\n          oninput=", "\n          size=\"4\"\n        >\n          ", "\n        </select>\n        <div>\n          Name:\n          <input value=", " oninput=", " />\n          Surname:\n          <input value=", " oninput=", " />\n        </div>\n        <div class=\"buttons\">\n          <button onclick=", ">Create</button>\n          <button onclick=", ">Update</button>\n          <button onclick=", ">Delete</button>\n        </div>\n      </div>\n    <//>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var crud = function crud() {
  var prefix = (0, _sinuous.o)("");
  var entries = (0, _sinuous.o)([(0, _sinuous.o)(["Paul", "Atreides"]), (0, _sinuous.o)(["Gurney", "Halleck"]), (0, _sinuous.o)(["Duncan", "Idaho"])]);
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
  var name = (0, _sinuous.o)("");
  var surname = (0, _sinuous.o)("");
  var selected = (0, _sinuous.o)(-1);
  (0, _observable.subscribe)(function () {
    prefix();
    selected(-1);
  });

  function createHandler() {
    entries(entries().concat((0, _sinuous.o)([name(), surname()])));
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

  return (0, _sinuous.html)(_templateObject(), _card.card, prefix, function (e) {
    return prefix(e.target.value);
  }, selected, function (e) {
    return selected(e.target.value);
  }, function () {
    return filteredEntries().map(function (entry) {
      return (0, _sinuous.html)(_templateObject2(), entry[2], entry[1], entry[0]);
    });
  }, name, function (e) {
    return name(e.target.value);
  }, surname, function (e) {
    return surname(e.target.value);
  }, createHandler, updateHandler, deleteHandler);
};

exports.crud = crud;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../components/card":"src/components/card.js","./crud.css":"src/tasks/crud.css"}],"src/tasks/circleDrawer.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/tasks/circleDrawer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.circleDrawer = void 0;

var _sinuous = require("sinuous");

var _observable = require("sinuous/observable");

var _card = require("../components/card");

require("./circleDrawer.css");

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
  var data = _taggedTemplateLiteral(["\n    <", " title=\"Circle Drawer\">\n      <div class=\"wrapper\">\n        <div class=\"buttons\">\n          <button disabled=", " onclick=", ">Undo</button>\n          <button\n            disabled=", "\n            onclick=", "\n          >\n            Redo\n          </button>\n        </div>\n        <div class=\"canvas\">\n          ", "\n        </div>\n        ", "\n      </div>\n    <//>\n  "]);

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
  var step = (0, _sinuous.o)(0);
  var snapshots = (0, _sinuous.o)([(0, _sinuous.o)([])]);
  var radius = (0, _sinuous.o)(BASE_RADIUS);
  var resizing = (0, _sinuous.o)(false);
  var present = (0, _sinuous.o)([]);
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
    addSnapshot((0, _sinuous.o)(newSnapshot));
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
      addSnapshot((0, _sinuous.o)(present().slice()));
    }

    resizing(false);
  }

  var overlay = function overlay() {
    return (0, _sinuous.html)(_templateObject(), endResize, function () {
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
    return (0, _sinuous.svg)(_templateObject2(), circle.x, circle.y, circle.r, function (e) {
      e.preventDefault();
      e.stopPropagation();
    }, handleRightClick);
  };

  var view = (0, _sinuous.html)(_templateObject3(), _card.card, function () {
    return !step();
  }, undo, function () {
    return step() === snapshots().length - 1;
  }, redo, function () {
    return (0, _sinuous.svg)(_templateObject4(), addCircle, function () {
      return present().map(function (cir) {
        return (0, _sinuous.html)(_templateObject5(), circleSVG, cir, handleRightClick);
      });
    });
  }, function () {
    return resizing() && overlay;
  });
  return view;
};

exports.circleDrawer = circleDrawer;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../components/card":"src/components/card.js","./circleDrawer.css":"src/tasks/circleDrawer.css"}],"src/tasks/cells/sampleData.js":[function(require,module,exports) {
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

var Parser =
/*#__PURE__*/
function () {
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
},{"sinuous/observable":"node_modules/sinuous/module/observable.js"}],"src/tasks/cells/cells.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/tasks/cells/cells.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cells = void 0;

var _sinuous = require("sinuous");

var _observable = require("sinuous/observable");

var _card = require("../../components/card");

var _sampleData = require("./sampleData.js");

var _parse = require("./parse.js");

require("./cells.css");

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
  var data = _taggedTemplateLiteral(["\n                      <td class=\"column-key\">", "</td>\n                    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <", " title=\"Cells\">\n      <div class=\"wrapper\">\n        <table>\n          <thead>\n            <tr>\n              <td class=\"row-key\"></td>\n              ", "\n            </tr>\n          </thead>\n          <tbody>\n            ", "\n          </tbody>\n        </table>\n      </div>\n      <button onclick=", ">Clear</button>\n    <//>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
    _sampleData.sampleData[key] = (0, _sinuous.o)(_sampleData.sampleData[key]);
  });
  var data = (0, _sinuous.o)(_sampleData.sampleData);
  var rows = range(shape[1]);
  var columns = letterRange(shape[0]);
  var p = new _parse.Parser(data, columns, rows);
  var focused = (0, _sinuous.o)(undefined);
  var tBody; // Used as a ref

  function createNewCell(key) {
    var dataRef = (0, _observable.sample)(data);

    if (!dataRef[key]) {
      dataRef[key] = (0, _sinuous.o)("");
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

  var view = (0, _sinuous.html)(_templateObject(), _card.card, function () {
    return columns.map(function (column) {
      return (0, _sinuous.html)(_templateObject2(), column);
    });
  }, function () {
    return rows.map(function (i) {
      return (0, _sinuous.html)(_templateObject3(), "row-" + i, i, function () {
        return columns.map(function (j) {
          return (0, _sinuous.html)(_templateObject4(), j + i, "input-" + j + i, function () {
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
},{"sinuous":"node_modules/sinuous/module/sinuous.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../../components/card":"src/components/card.js","./sampleData.js":"src/tasks/cells/sampleData.js","./parse.js":"src/tasks/cells/parse.js","./cells.css":"src/tasks/cells/cells.css"}],"src/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _sinuous = require("sinuous");

require("./app.css");

var _counter = require("./tasks/counter");

var _temperatureConverter = require("./tasks/temperatureConverter");

var _flightBooker = require("./tasks/flightBooker");

var _timer = require("./tasks/timer");

var _crud = require("./tasks/crud");

var _circleDrawer = require("./tasks/circleDrawer");

var _cells = require("./tasks/cells/cells");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <main className=\"App\">\n      <a href=\"../../index.html\">Home</a>\n\n      <", " />\n      <", " />\n      <", " />\n      <", " />\n      <", " />\n      <", " />\n      <", " />\n    </main>\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var app = function app() {
  return (0, _sinuous.html)(_templateObject(), _counter.counter, _temperatureConverter.temperatureConverter, _flightBooker.flightBooker, _timer.timer, _crud.crud, _circleDrawer.circleDrawer, _cells.cells);
};

exports.app = app;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","./app.css":"src/app.css","./tasks/counter":"src/tasks/counter.js","./tasks/temperatureConverter":"src/tasks/temperatureConverter.js","./tasks/flightBooker":"src/tasks/flightBooker.js","./tasks/timer":"src/tasks/timer.js","./tasks/crud":"src/tasks/crud.js","./tasks/circleDrawer":"src/tasks/circleDrawer.js","./tasks/cells/cells":"src/tasks/cells/cells.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _app = require("./app");

document.querySelector('#root').append((0, _app.app)());
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57821" + '/');

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
//# sourceMappingURL=/sinuous/dist/src.a2b27638.js.map