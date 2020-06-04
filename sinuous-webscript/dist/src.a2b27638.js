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

function s(n, t, e) {
  const o = function (n) {
    const {
      childNodes: t
    } = n;
    if (t && 11 === n.nodeType) return t.length < 2 ? t[0] : {
      t: s(n, "", t[0])
    };
  }(t = function (n) {
    return "string" == typeof n ? document.createTextNode(n) : n instanceof Node ? n : i.h(u, n);
  }(t)) || t;

  return n.insertBefore(t, e && e.parentNode && e), o;
}

function c(n, t, e) {
  for (; t && t !== e;) {
    const e = t.nextSibling;
    n === t.parentNode && n.removeChild(t), t = e;
  }
}

function l(n) {
  return this.o[n.type](n);
}

function a(n, t) {
  for (let t in n) i[t] = n[t];

  return function () {
    const n = Array.from(arguments);
    let e;

    function o(r) {
      if (null == r) ;else if ("string" == typeof r) e ? s(e, r) : e = t ? document.createElementNS("http://www.w3.org/2000/svg", r) : document.createElement(r);else if (Array.isArray(r)) e || (e = document.createDocumentFragment()), r.forEach(o);else if (r instanceof Node) e ? s(e, r) : e = r;else if ("object" == typeof r) i.property(e, r, null, t);else if ("function" == typeof r) {
        if (e) {
          const n = s(e, "");
          i.insert(e, r, n);
        } else e = r.apply(null, n.splice(1));
      } else s(e, "" + r);
    }

    return n.forEach(o), e;
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

i.insert = function (n, t, e, o, r) {
  return n = e && e.parentNode || n, r = r || o instanceof Node && o, t === o || (o && "string" != typeof o || !("string" == typeof t || "number" == typeof t && (t += "")) ? "function" == typeof t ? i.subscribe(function () {
    o = i.insert(n, t.call({
      el: n,
      endMark: e
    }), e, o, r);
  }) : (e ? o && (r || (r = o.t && o.t.nextSibling || e.previousSibling), c(n, r, e)) : n.textContent = "", o = null, t && !0 !== t && (o = s(n, t, e))) : (null != o && n.firstChild ? e ? (e.previousSibling || n.lastChild).data = t : n.firstChild.data = t : e ? s(n, t, e) : n.textContent = t, o = t)), o;
}, i.property = function (n, t, e, o, r) {
  if (null != t) if (!e || "attrs" === e && (o = !0)) for (e in t) i.property(n, t[e], e, o, r);else "o" !== e[0] || "n" !== e[1] || t.$o ? "function" == typeof t ? i.subscribe(function () {
    i.property(n, t.call({
      el: n,
      name: e
    }), e, o, r);
  }) : r ? n.style.setProperty(e, t) : o || "data-" === e.slice(0, 5) || "aria-" === e.slice(0, 5) ? n.setAttribute(e, t) : "style" === e ? "string" == typeof t ? n.style.cssText = t : i.property(n, t, null, o, !0) : ("class" === e && (e += "Name"), n[e] = t) : function (n, t, e) {
    t = t.slice(2).toLowerCase(), e ? n.addEventListener(t, l) : n.removeEventListener(t, l), (n.o || (n.o = {}))[t] = e;
  }(n, e, t);
}, i.add = s, i.rm = c, i.h = a({
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
},{"./observable.js":"node_modules/sinuous/module/observable.js","./htm.js":"node_modules/sinuous/module/htm.js"}],"node_modules/webscript/dist/webscript.js":[function(require,module,exports) {
function r(){return(r=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}function e(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function n(r,n){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=function(r,n){if(r){if("string"==typeof r)return e(r,void 0);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(r,void 0):void 0}}(r))||n&&r&&"number"==typeof r.length){t&&(r=t);var o=0;return function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=r[Symbol.iterator]()).next.bind(t)}function t(r){for(var e,t=r[0],o=r.slice(1),i=[],a=n(t.entries());!(e=a()).done;){var u=e.value,l=u[0],p=u[1];""!==p&&i.push(p);var c=o[l];void 0!==c&&i.push(c)}return i}var o=new RegExp("·","g");function i(e,n){function i(){var e,n=[].slice.call(arguments),o=n,i=o[0],a=this.__element_info__,l=a.props,p=a.prop;return void 0===i?(delete(l=r({},l))[p],u({props:l,prop:null})):(Array.isArray(i)&&Object.isFrozen(i)?i=t(n).join(""):n.length>1&&(i=n),u({props:l=r({},l,((e={})[p]=i,e)),prop:null}))}function a(e){return u({props:e=r({},this.__element_info__.props,e),prop:null})}function u(r){var u=new Proxy(function(){},{apply:function(r,o,i){var a=u.__element_info__.props;if("function"==typeof a.exec){var l=a.exec;delete a.exec;var p=l(u,i);return a.exec=l,p}var c,f=i[0];Array.isArray(f)&&Object.isFrozen(f)&&(i=t(i)),Array.isArray(a.children)&&((c=a.children).push.apply(c,i),i=a.children,delete a.children);for(var s=0;s<i.length;s++){var v=i[s];"function"==typeof v&&v.__element_info__&&(i[s]=v())}return e.apply(void 0,[n,a].concat(i))},get:function(r,e){var n=r[e];return void 0!==n?n:"props"===e?a:"string"==typeof e?(-1!==e.indexOf("·")&&(e=e.replace(o,"-")),e.endsWith("Value")&&e.length>5?r.__element_info__.props[e.slice(0,-5)]:(r.__element_info__.prop=e,i)):void 0}});return u.__element_info__=r,u}return u({props:{},prop:null})}module.exports=function(r,e){if(void 0===e&&(e=[]),"function"!=typeof r)throw Error("elementConstructor argument must be present and it must be a function.");if(e.length>0){for(var t,o=[],a=n(e);!(t=a()).done;)o.push(i(r,t.value));return o}return new Proxy(function(){},{get:function(e,n){var t=e[n];return void 0!==t?t:(e[n]=i(r,n),e[n])}})};


},{}],"src/elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frag = exports.circle = exports.svg = exports.td = exports.tr = exports.tbody = exports.thead = exports.table = exports.p = exports.option = exports.select = exports.input = exports.div = exports.h2 = exports.section = exports.span = exports.progress = exports.button = exports.a = exports.main = void 0;

var _sinuous = require("sinuous");

var _webscript = _interopRequireDefault(require("webscript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _builders = (0, _webscript.default)(_sinuous.api.h),
    main = _builders.main,
    a = _builders.a,
    button = _builders.button,
    progress = _builders.progress,
    span = _builders.span,
    section = _builders.section,
    h2 = _builders.h2,
    div = _builders.div,
    input = _builders.input,
    select = _builders.select,
    option = _builders.option,
    p = _builders.p,
    table = _builders.table,
    thead = _builders.thead,
    tbody = _builders.tbody,
    tr = _builders.tr,
    td = _builders.td;

exports.td = td;
exports.tr = tr;
exports.tbody = tbody;
exports.thead = thead;
exports.table = table;
exports.p = p;
exports.option = option;
exports.select = select;
exports.input = input;
exports.div = div;
exports.h2 = h2;
exports.section = section;
exports.span = span;
exports.progress = progress;
exports.button = button;
exports.a = a;
exports.main = main;

var _builders2 = (0, _webscript.default)(_sinuous.api.hs),
    svg = _builders2.svg,
    circle = _builders2.circle;

exports.circle = circle;
exports.svg = svg;

var frag = function frag() {
  var fragment = new DocumentFragment();

  for (var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++) {
    elements[_key] = arguments[_key];
  }

  elements.forEach(function (element) {
    fragment.append(element);
  });
  return fragment;
};

exports.frag = frag;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","webscript":"node_modules/webscript/dist/webscript.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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

var _elements = require("../elements");

require("./card.css");

var card = function card(_ref) {
  var title = _ref.title;

  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }

  return _elements.section.class("card " + title.replace(" ", "-"))((0, _elements.h2)(title), children);
};

exports.card = card;
},{"../elements":"src/elements.js","./card.css":"src/components/card.css"}],"src/tasks/counter.css":[function(require,module,exports) {
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

var _elements = require("../elements");

var _card = require("../components/card");

require("./counter.css");

var counter = function counter() {
  var count = (0, _sinuous.o)(0);
  return (0, _card.card)({
    title: "Counter"
  }, count, _elements.button.onclick(function () {
    return count(count() + 1);
  })("+"));
};

exports.counter = counter;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","../elements":"src/elements.js","../components/card":"src/components/card.js","./counter.css":"src/tasks/counter.css"}],"src/tasks/temperatureConverter.css":[function(require,module,exports) {
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

var _elements = require("../elements");

var _card = require("../components/card");

require("./temperatureConverter.css");

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

  return (0, _card.card)({
    title: "Temperature Converter"
  }, (0, _elements.span)(_elements.input.value(c).oninput(updateFromC), "Celsius"), "=", (0, _elements.span)(_elements.input.value(f).oninput(updateFromF), "Fahrenheit"));
};

exports.temperatureConverter = temperatureConverter;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","../elements":"src/elements.js","../components/card":"src/components/card.js","./temperatureConverter.css":"src/tasks/temperatureConverter.css"}],"src/tasks/flightBooker.css":[function(require,module,exports) {
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

var _elements = require("../elements");

var _card = require("../components/card");

require("./flightBooker.css");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["2"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["1"]);

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

  return (0, _card.card)({
    title: "Flight Booker"
  }, (0, _elements.div)(_elements.select.value(flightType).onchange(function (e) {
    return flightType(e.target.value);
  })(_elements.option.value(_templateObject())(flightMap[1]), _elements.option.value(_templateObject2())(flightMap[2])), _elements.input.value(startDate).class(startDateClass).oninput(function (e) {
    return startDate(e.target.value);
  }), _elements.input.value(returnDate).class(returnDateClass).oninput(function (e) {
    return returnDate(e.target.value);
  }).disabled(isOneWay), _elements.button.onclick(book).disabled(isBookButtonDisabled)("Book")));
};

exports.flightBooker = flightBooker;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../elements":"src/elements.js","../components/card":"src/components/card.js","./flightBooker.css":"src/tasks/flightBooker.css"}],"src/tasks/timer.css":[function(require,module,exports) {
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

var _elements = require("../elements");

require("./timer.css");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["range"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["duration"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["wrapper"]);

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
  var p = (0, _observable.S)(function () {
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
  return (0, _card.card)({
    title: "Timer"
  }, _elements.div.class(_templateObject())("Elapsed Time:", _elements.progress.value(p), _elements.div.class(_templateObject2())(durationFormatted), "Duration:", _elements.input.type(_templateObject3()).min(0).max(MAX).value(duration).oninput(function (e) {
    return duration(e.target.value);
  }), _elements.button.onclick(startTimer)("Reset Timer")));
};

exports.timer = timer;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../components/card":"src/components/card.js","../elements":"src/elements.js","./timer.css":"src/tasks/timer.css"}],"src/tasks/crud.css":[function(require,module,exports) {
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

var _elements = require("../elements");

var _card = require("../components/card");

require("./crud.css");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["buttons"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["4"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["wrapper"]);

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

  return (0, _card.card)({
    title: "CRUD"
  }, _elements.div.class(_templateObject())("Filter prefix:", _elements.input.value(prefix).oninput(function (e) {
    return prefix(e.target.value);
  }), _elements.select.value(selected).oninput(function (e) {
    return selected(e.target.value);
  }).size(_templateObject2())(function () {
    return filteredEntries().map(function (entry) {
      return _elements.option.value(entry[2])(entry[1] + ", " + entry[0]);
    });
  }), (0, _elements.div)("Name:", _elements.input.value(name).oninput(function (e) {
    return name(e.target.value);
  }), "Surname:", _elements.input.value(surname).oninput(function (e) {
    return surname(e.target.value);
  })), _elements.div.class(_templateObject3())(_elements.button.onclick(createHandler)("Create"), _elements.button.onclick(updateHandler)("Update"), _elements.button.onclick(deleteHandler)("Delete"))));
};

exports.crud = crud;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../elements":"src/elements.js","../components/card":"src/components/card.js","./crud.css":"src/tasks/crud.css"}],"src/tasks/circleDrawer.css":[function(require,module,exports) {
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

var _elements = require("../elements");

var _card = require("../components/card");

require("./circleDrawer.css");

function _templateObject9() {
  var data = _taggedTemplateLiteral(["canvas"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["buttons"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["wrapper"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["white"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["black"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["range"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["Adjust radius of circle at (", ",\n        ", ")"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["resizer"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["overlay"]);

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
      var resizingIndex = (0, _observable.sample)(present).findIndex(function (c) {
        return c.x === resizing().x && c.y === resizing().y;
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
    var c = e.target;
    resizing({
      x: c.cx.baseVal.value,
      y: c.cy.baseVal.value,
      r: c.r.baseVal.value
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
    return (0, _elements.frag)(_elements.div.class(_templateObject()).onclick(endResize)(), _elements.div.class(_templateObject2())((0, _elements.p)(_templateObject3(), function () {
      return resizing().x;
    }, function () {
      return resizing().y;
    }), (0, _elements.p)(radius), _elements.input.type(_templateObject4()).min(0).max(100).value(radius).oninput(function (e) {
      return radius(e.target.value);
    })));
  };

  var circleSVG = function circleSVG(_ref) {
    var c = _ref.c,
        handleRightClick = _ref.handleRightClick;
    return _elements.circle.cx(c.x).cy(c.y).r(c.r).fill(_templateObject6()).stroke(_templateObject5()).onclick(function (e) {
      e.preventDefault();
      e.stopPropagation();
    }).oncontextmenu(handleRightClick);
  };

  var view = (0, _card.card)({
    title: "Circle Drawer"
  }, _elements.div.class(_templateObject7())(_elements.div.class(_templateObject8())(_elements.button.disabled(function () {
    return !step();
  }).onclick(undo)("Undo"), _elements.button.disabled(function () {
    return step() === snapshots().length - 1;
  }).onclick(redo)("Redo")), _elements.div.class(_templateObject9())(_elements.svg.onclick(addCircle)(function () {
    return present().map(function (c) {
      return circleSVG({
        c: c,
        handleRightClick: handleRightClick
      });
    });
  })), function () {
    return resizing() && overlay();
  }));
  return view;
};

exports.circleDrawer = circleDrawer;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../elements":"src/elements.js","../components/card":"src/components/card.js","./circleDrawer.css":"src/tasks/circleDrawer.css"}],"src/tasks/cells/sampleData.js":[function(require,module,exports) {
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

var _elements = require("../../elements");

require("./cells.css");

function _templateObject4() {
  var data = _taggedTemplateLiteral(["row-key"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["column-key"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["row-key"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["wrapper"]);

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

      var _input = tBody.querySelector("#input-" + selector);

      _input.focus();
    }
  }

  function clear() {
    data({});
  }

  var view = (0, _card.card)({
    title: "Cells"
  }, _elements.div.class(_templateObject())((0, _elements.table)((0, _elements.thead)((0, _elements.tr)(_elements.td.class(_templateObject2()), function () {
    return columns.map(function (column) {
      return _elements.td.class(_templateObject3())(column);
    });
  })), (0, _elements.tbody)(function () {
    return rows.map(function (i) {
      return _elements.tr.id("row-" + i)(_elements.td.class(_templateObject4())(i), columns.map(function (j) {
        return _elements.td.id(j + i)(_elements.input.id("input-" + j + i).onfocus(function (e) {
          return handleFocus(e, j + i);
        }).onblur(handleBlur).onkeydown(function (e) {
          return handleKeydown(e, j, i);
        }).oninput(function (e) {
          return handleInput(e, j + i);
        }).value(function () {
          return j + i in data() ? focused() === j + i ? data()[j + i]() : p.parse(data()[j + i]()) : "";
        }));
      }));
    });
  }))), _elements.button.onclick(clear)("Clear"));
  tBody = view.querySelector("tbody"); // Assign ref to domNode

  return view;
};

exports.cells = cells;
},{"sinuous":"node_modules/sinuous/module/sinuous.js","sinuous/observable":"node_modules/sinuous/module/observable.js","../../components/card":"src/components/card.js","./sampleData.js":"src/tasks/cells/sampleData.js","./parse.js":"src/tasks/cells/parse.js","../../elements":"src/elements.js","./cells.css":"src/tasks/cells/cells.css"}],"src/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _elements = require("./elements");

require("./app.css");

var _counter = require("./tasks/counter");

var _temperatureConverter = require("./tasks/temperatureConverter");

var _flightBooker = require("./tasks/flightBooker");

var _timer = require("./tasks/timer");

var _crud = require("./tasks/crud");

var _circleDrawer = require("./tasks/circleDrawer");

var _cells = require("./tasks/cells/cells");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["../../index.html"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["App"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var app = function app() {
  return _elements.main.class(_templateObject())(_elements.a.href(_templateObject2())("Home"), (0, _counter.counter)(), (0, _temperatureConverter.temperatureConverter)(), (0, _flightBooker.flightBooker)(), (0, _timer.timer)(), (0, _crud.crud)(), (0, _circleDrawer.circleDrawer)(), (0, _cells.cells)());
};

exports.app = app;
},{"./elements":"src/elements.js","./app.css":"src/app.css","./tasks/counter":"src/tasks/counter.js","./tasks/temperatureConverter":"src/tasks/temperatureConverter.js","./tasks/flightBooker":"src/tasks/flightBooker.js","./tasks/timer":"src/tasks/timer.js","./tasks/crud":"src/tasks/crud.js","./tasks/circleDrawer":"src/tasks/circleDrawer.js","./tasks/cells/cells":"src/tasks/cells/cells.js"}],"src/index.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56127" + '/');

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