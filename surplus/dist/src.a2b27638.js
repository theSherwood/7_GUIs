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
})({"node_modules/surplus/es/insert.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insert = insert;

var _index = require("./index");

var DOCUMENT_FRAGMENT_NODE = 11,
    TEXT_NODE = 3;

function insert(range, value) {
  var parent = range.start.parentNode,
      test = range.start,
      good = null,
      t = typeof value; //if (parent === null) {
  //    throw new Error("Surplus.insert() can only be used on a node that has a parent node. \n"
  //        + "Node ``" + range.start + "'' is currently unattached to a parent.");
  //}
  //if (range.end.parentNode !== parent) {
  //    throw new Error("Surplus.insert() requires that the inserted nodes remain sibilings \n"
  //        + "of the original node.  The DOM has been modified such that this is \n"
  //        + "no longer the case.");
  //}

  if (t === 'string' || t === 'number') {
    value = value.toString();

    if (test.nodeType === TEXT_NODE) {
      test.data = value;
      good = test;
    } else {
      value = document.createTextNode(value);
      parent.replaceChild(value, test);
      if (range.end === test) range.end = value;
      range.start = good = value;
    }
  } else if (value instanceof Node) {
    if (test !== value) {
      parent.replaceChild(value, test);
      if (range.end === test) range.end = value;
      range.start = value;
    }

    good = value;
  } else if (Array.isArray(value)) {
    insertArray(value);
  } else if (value instanceof Function) {
    (0, _index.S)(function () {
      insert(range, value());
    });
    good = range.end;
  } else if (value !== null && value !== undefined && value !== true && value !== false) {
    value = value.toString();

    if (test.nodeType === TEXT_NODE) {
      test.data = value;
      good = test;
    } else {
      value = document.createTextNode(value);
      parent.replaceChild(value, test);
      if (range.end === test) range.end = value;
      range.start = good = value;
    }
  }

  if (good === null) {
    if (range.start === parent.firstChild && range.end === parent.lastChild && range.start !== range.end) {
      // fast delete entire contents
      parent.textContent = "";
      value = document.createTextNode("");
      parent.appendChild(value);
      good = range.start = range.end = value;
    } else if (test.nodeType === TEXT_NODE) {
      test.data = "";
      good = test;
    } else {
      value = document.createTextNode("");
      parent.replaceChild(value, test);
      if (range.end === test) range.end = value;
      range.start = good = value;
    }
  } // remove anything left after the good cursor from the insert range


  while (good !== range.end) {
    test = range.end;
    range.end = test.previousSibling;
    parent.removeChild(test);
  }

  return range;

  function insertArray(array) {
    for (var i = 0, len = array.length; i < len; i++) {
      var value = array[i];

      if (good === range.end) {
        if (value instanceof Node) {
          good = range.end = good.nextSibling ? parent.insertBefore(value, good.nextSibling) : parent.appendChild(value);
        } else if (value instanceof Array) {
          insertArray(value);
        } else if (value !== null && value !== undefined && value !== false && value !== true) {
          value = document.createTextNode(value.toString());
          good = range.end = good.nextSibling ? parent.insertBefore(value, good.nextSibling) : parent.appendChild(value);
        }
      } else {
        if (value instanceof Node) {
          if (test !== value) {
            if (good === null) {
              if (range.end === value) range.end = value.previousSibling;
              parent.replaceChild(value, test);
              range.start = value;
              if (range.end === test) range.end = value;
              test = value.nextSibling;
            } else {
              if (test.nextSibling === value && test !== value.nextSibling && test !== range.end) {
                parent.removeChild(test);
                test = value.nextSibling;
              } else {
                if (range.end === value) range.end = value.previousSibling;
                parent.insertBefore(value, test);
              }
            }
          } else {
            test = test.nextSibling;
          }

          good = value;
        } else if (value instanceof Array) {
          insertArray(value);
        } else if (value !== null && value !== undefined && value !== true && value !== false) {
          value = value.toString();

          if (test.nodeType === TEXT_NODE) {
            test.data = value;
            if (good === null) range.start = test;
            good = test, test = good.nextSibling;
          } else {
            value = document.createTextNode(value);
            parent.insertBefore(value, test);
            if (good === null) range.start = value;
            good = value;
          }
        }
      }
    }
  }
}
},{"./index":"node_modules/surplus/es/index.js"}],"node_modules/surplus/es/content.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.content = content;

var _index = require("./index");

function content(parent, value, current) {
  var t = typeof value;

  if (current === value) {// nothing to do
  } else if (t === 'string') {
    // if a Text node already exists, it's faster to set its .data than set the parent.textContent
    if (current !== "" && typeof current === 'string') {
      current = parent.firstChild.data = value;
    } else {
      current = parent.textContent = value;
    }
  } else if (t === 'number') {
    value = value.toString();

    if (current !== "" && typeof current === 'string') {
      current = parent.firstChild.data = value;
    } else {
      current = parent.textContent = value;
    }
  } else if (value == null || t === 'boolean') {
    // null, undefined, true or false
    clear(parent);
    current = "";
  } else if (t === 'function') {
    (0, _index.S)(function () {
      current = content(parent, value(), current);
    });
  } else if (value instanceof Node) {
    if (Array.isArray(current)) {
      if (current.length === 0) {
        parent.appendChild(value);
      } else if (current.length === 1) {
        parent.replaceChild(value, current[0]);
      } else {
        clear(parent);
        parent.appendChild(value);
      }
    } else if (current === "") {
      parent.appendChild(value);
    } else {
      parent.replaceChild(value, parent.firstChild);
    }

    current = value;
  } else if (Array.isArray(value)) {
    var array = normalizeIncomingArray([], value);

    if (array.length === 0) {
      clear(parent);
    } else {
      if (Array.isArray(current)) {
        if (current.length === 0) {
          appendNodes(parent, array, 0, array.length);
        } else {
          reconcileArrays(parent, current, array);
        }
      } else if (current === "") {
        appendNodes(parent, array, 0, array.length);
      } else {
        reconcileArrays(parent, [parent.firstChild], array);
      }
    }

    current = array;
  } else {
    throw new Error("content must be Node, stringable, or array of same");
  }

  return current;
}

var NOMATCH = -1,
    NOINSERT = -2;
var RECONCILE_ARRAY_BATCH = 0;
var RECONCILE_ARRAY_BITS = 16,
    RECONCILE_ARRAY_INC = 1 << RECONCILE_ARRAY_BITS,
    RECONCILE_ARRAY_MASK = RECONCILE_ARRAY_INC - 1; // reconcile the content of parent from ns to us
// see ivi's excellent writeup of diffing arrays in a vdom library: 
// https://github.com/ivijs/ivi/blob/2c81ead934b9128e092cc2a5ef2d3cabc73cb5dd/packages/ivi/src/vdom/implementation.ts#L1187
// this code isn't identical, since we're diffing real dom nodes to nodes-or-strings, 
// but the core methodology of trimming ends and reversals, matching nodes, then using
// the longest increasing subsequence to minimize DOM ops is inspired by ivi.

function reconcileArrays(parent, ns, us) {
  var ulen = us.length,
      // n = nodes, u = updates
  // ranges defined by min and max indices
  nmin = 0,
      nmax = ns.length - 1,
      umin = 0,
      umax = ulen - 1,
      // start nodes of ranges
  n = ns[nmin],
      u = us[umin],
      // end nodes of ranges
  nx = ns[nmax],
      ux = us[umax],
      // node, if any, just after ux, used for doing .insertBefore() to put nodes at end
  ul = nx.nextSibling,
      i,
      j,
      k,
      loop = true; // scan over common prefixes, suffixes, and simple reversals

  fixes: while (loop) {
    loop = false; // common prefix, u === n

    while (equable(u, n, umin, us)) {
      umin++;
      nmin++;
      if (umin > umax || nmin > nmax) break fixes;
      u = us[umin];
      n = ns[nmin];
    } // common suffix, ux === nx


    while (equable(ux, nx, umax, us)) {
      ul = nx;
      umax--;
      nmax--;
      if (umin > umax || nmin > nmax) break fixes;
      ux = us[umax];
      nx = ns[nmax];
    } // reversal u === nx, have to swap node forward


    while (equable(u, nx, umin, us)) {
      loop = true;
      parent.insertBefore(nx, n);
      umin++;
      nmax--;
      if (umin > umax || nmin > nmax) break fixes;
      u = us[umin];
      nx = ns[nmax];
    } // reversal ux === n, have to swap node back


    while (equable(ux, n, umax, us)) {
      loop = true;
      if (ul === null) parent.appendChild(n);else parent.insertBefore(n, ul);
      ul = n;
      umax--;
      nmin++;
      if (umin > umax || nmin > nmax) break fixes;
      ux = us[umax];
      n = ns[nmin];
    }
  } // if that covered all updates, just need to remove any remaining nodes and we're done


  if (umin > umax) {
    // remove any remaining nodes
    while (nmin <= nmax) {
      parent.removeChild(ns[nmax]);
      nmax--;
    }

    return;
  } // if that covered all current nodes, just need to insert any remaining updates and we're done


  if (nmin > nmax) {
    // insert any remaining nodes
    while (umin <= umax) {
      insertOrAppend(parent, us[umin], ul, umin, us);
      umin++;
    }

    return;
  } // simple cases don't apply, have to actually match up nodes and figure out minimum DOM ops
  // loop through nodes and mark them with a special property indicating their order
  // we'll then go through the updates and look for those properties
  // in case any of the updates have order properties left over from earlier runs, we 
  // use the low bits of the order prop to record a batch identifier.
  // I'd much rather use a Map than a special property, but Maps of objects are really
  // slow currently, like only 100k get/set ops / second
  // for Text nodes, all that matters is their order, as they're easily, interchangeable
  // so we record their positions in ntext[]


  var ntext = []; // update global batch identifer

  RECONCILE_ARRAY_BATCH = (RECONCILE_ARRAY_BATCH + 1) % RECONCILE_ARRAY_INC;

  for (i = nmin, j = (nmin << RECONCILE_ARRAY_BITS) + RECONCILE_ARRAY_BATCH; i <= nmax; i++, j += RECONCILE_ARRAY_INC) {
    n = ns[i]; // add or update special order property

    if (n.__surplus_order === undefined) {
      Object.defineProperty(n, '__surplus_order', {
        value: j,
        writable: true
      });
    } else {
      n.__surplus_order = j;
    }

    if (n instanceof Text) {
      ntext.push(i);
    }
  } // now loop through us, looking for the order property, otherwise recording NOMATCH


  var src = new Array(umax - umin + 1),
      utext = [],
      preserved = 0;

  for (i = umin; i <= umax; i++) {
    u = us[i];

    if (typeof u === 'string') {
      utext.push(i);
      src[i - umin] = NOMATCH;
    } else if ((j = u.__surplus_order) !== undefined && (j & RECONCILE_ARRAY_MASK) === RECONCILE_ARRAY_BATCH) {
      j >>= RECONCILE_ARRAY_BITS;
      src[i - umin] = j;
      ns[j] = null;
      preserved++;
    } else {
      src[i - umin] = NOMATCH;
    }
  }

  if (preserved === 0 && nmin === 0 && nmax === ns.length - 1) {
    // no nodes preserved, use fast clear and append
    clear(parent);

    while (umin <= umax) {
      insertOrAppend(parent, us[umin], null, umin, us);
      umin++;
    }

    return;
  } // find longest common sequence between ns and us, represented as the indices 
  // of the longest increasing subsequence in src


  var lcs = longestPositiveIncreasingSubsequence(src); // we know we can preserve their order, so march them as NOINSERT

  for (i = 0; i < lcs.length; i++) {
    src[lcs[i]] = NOINSERT;
  }
  /*
            0   1   2   3   4   5   6   7
  ns    = [ n,  n,  t,  n,  n,  n,  t,  n ]
                |          /   /       /
                |        /   /       /
                +------/---/-------/----+
                     /   /       /      |
  us    = [ n,  s,  n,  n,  s,  n,  s,  n ]
  src   = [-1, -1,  4,  5, -1,  7, -1,  1 ]
  lis   = [         2,  3,      5]
                    j
  utext = [     1,          4,      6 ]
                i
  ntext = [         2,              6 ]
                    k
  */
  // replace strings in us with Text nodes, reusing Text nodes from ns when we can do so without moving them


  var utexti = 0,
      lcsj = 0,
      ntextk = 0;

  for (i = 0, j = 0, k = 0; i < utext.length; i++) {
    utexti = utext[i]; // need to answer qeustion "if utext[i] falls between two lcs nodes, is there an ntext between them which we can reuse?"
    // first, find j such that lcs[j] is the first lcs node *after* utext[i]

    while (j < lcs.length && (lcsj = lcs[j]) < utexti - umin) j++; // now, find k such that ntext[k] is the first ntext *after* lcs[j-1] (or after start, if j === 0)


    while (k < ntext.length && (ntextk = ntext[k], j !== 0) && ntextk < src[lcs[j - 1]]) k++; // if ntext[k] < lcs[j], then we know ntext[k] falls between lcs[j-1] (or start) and lcs[j] (or end)
    // that means we can re-use it without moving it


    if (k < ntext.length && (j === lcs.length || ntextk < src[lcsj])) {
      n = ns[ntextk];
      u = us[utexti];
      if (n.data !== u) n.data = u;
      ns[ntextk] = null;
      us[utexti] = n;
      src[utexti] = NOINSERT;
      k++;
    } else {
      // if we didn't find one to re-use, make a new Text node
      us[utexti] = document.createTextNode(us[utexti]);
    }
  } // remove stale nodes in ns


  while (nmin <= nmax) {
    n = ns[nmin];

    if (n !== null) {
      parent.removeChild(n);
    }

    nmin++;
  } // insert new nodes


  while (umin <= umax) {
    ux = us[umax];

    if (src[umax - umin] !== NOINSERT) {
      if (ul === null) parent.appendChild(ux);else parent.insertBefore(ux, ul);
    }

    ul = ux;
    umax--;
  }
} // two nodes are "equable" if they are identical (===) or if we can make them the same, i.e. they're 
// Text nodes, which we can reuse with the new text


function equable(u, n, i, us) {
  if (u === n) {
    return true;
  } else if (typeof u === 'string' && n instanceof Text) {
    if (n.data !== u) n.data = u;
    us[i] = n;
    return true;
  } else {
    return false;
  }
}

function appendNodes(parent, array, i, end) {
  var node;

  for (; i < end; i++) {
    node = array[i];

    if (node instanceof Node) {
      parent.appendChild(node);
    } else {
      node = array[i] = document.createTextNode(node);
      parent.appendChild(node);
    }
  }
}

function insertOrAppend(parent, node, marker, i, us) {
  if (typeof node === 'string') {
    node = us[i] = document.createTextNode(node);
  }

  if (marker === null) parent.appendChild(node);else parent.insertBefore(node, marker);
}

function normalizeIncomingArray(normalized, array) {
  for (var i = 0, len = array.length; i < len; i++) {
    var item = array[i];

    if (item instanceof Node) {
      normalized.push(item);
    } else if (item == null || item === true || item === false) {// matches null, undefined, true or false
      // skip
    } else if (Array.isArray(item)) {
      normalizeIncomingArray(normalized, item);
    } else if (typeof item === 'string') {
      normalized.push(item);
    } else {
      normalized.push(item.toString());
    }
  }

  return normalized;
}

function clear(node) {
  node.textContent = "";
} // return an array of the indices of ns that comprise the longest increasing subsequence within ns


function longestPositiveIncreasingSubsequence(ns) {
  var seq = [],
      is = [],
      l = -1,
      pre = new Array(ns.length);

  for (var i = 0, len = ns.length; i < len; i++) {
    var n = ns[i];
    if (n < 0) continue;
    var j = findGreatestIndexLEQ(seq, n);
    if (j !== -1) pre[i] = is[j];

    if (j === l) {
      l++;
      seq[l] = n;
      is[l] = i;
    } else if (n < seq[j + 1]) {
      seq[j + 1] = n;
      is[j + 1] = i;
    }
  }

  for (i = is[l]; l >= 0; i = pre[i], l--) {
    seq[l] = i;
  }

  return seq;
}

function findGreatestIndexLEQ(seq, n) {
  // invariant: lo is guaranteed to be index of a value <= n, hi to be >
  // therefore, they actually start out of range: (-1, last + 1)
  var lo = -1,
      hi = seq.length; // fast path for simple increasing sequences

  if (hi > 0 && seq[hi - 1] <= n) return hi - 1;

  while (hi - lo > 1) {
    var mid = Math.floor((lo + hi) / 2);

    if (seq[mid] > n) {
      hi = mid;
    } else {
      lo = mid;
    }
  }

  return lo;
}
},{"./index":"node_modules/surplus/es/index.js"}],"node_modules/surplus/es/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
exports.createSvgElement = createSvgElement;
exports.createComment = createComment;
exports.createTextNode = createTextNode;
exports.setAttribute = setAttribute;
exports.setAttributeNS = setAttributeNS;
var svgNS = "http://www.w3.org/2000/svg";

function createElement(tag, className, parent) {
  var el = document.createElement(tag);
  if (className) el.className = className;
  if (parent) parent.appendChild(el);
  return el;
}

function createSvgElement(tag, className, parent) {
  var el = document.createElementNS(svgNS, tag);
  if (className) el.setAttribute("class", className);
  if (parent) parent.appendChild(el);
  return el;
}

function createComment(text, parent) {
  var comment = document.createComment(text);
  parent.appendChild(comment);
  return comment;
}

function createTextNode(text, parent) {
  var node = document.createTextNode(text);
  parent.appendChild(node);
  return node;
}

function setAttribute(node, name, value) {
  if (value === false || value === null || value === undefined) node.removeAttribute(name);else node.setAttribute(name, value);
}

function setAttributeNS(node, namespace, name, value) {
  if (value === false || value === null || value === undefined) node.removeAttributeNS(namespace, name);else node.setAttributeNS(namespace, name, value);
}
},{}],"node_modules/surplus/es/fieldData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFieldData = void 0;
var // pre-seed the caches with a few special cases, so we don't need to check for them in the common cases
htmlFieldCache = {
  // special props
  style: ['style', null, 3
  /* Assign */
  ],
  ref: ['ref', null, 2
  /* Ignore */
  ],
  fn: ['fn', null, 2
  /* Ignore */
  ],
  // attr compat
  class: ['className', null, 0
  /* Property */
  ],
  for: ['htmlFor', null, 0
  /* Property */
  ],
  "accept-charset": ['acceptCharset', null, 0
  /* Property */
  ],
  "http-equiv": ['httpEquiv', null, 0
  /* Property */
  ],
  // a few React oddities, mostly disagreeing about casing
  onDoubleClick: ['ondblclick', null, 0
  /* Property */
  ],
  spellCheck: ['spellcheck', null, 0
  /* Property */
  ],
  allowFullScreen: ['allowFullscreen', null, 0
  /* Property */
  ],
  autoCapitalize: ['autocapitalize', null, 0
  /* Property */
  ],
  autoFocus: ['autofocus', null, 0
  /* Property */
  ],
  autoPlay: ['autoplay', null, 0
  /* Property */
  ],
  // other
  // role is part of the ARIA spec but not caught by the aria- attr filter
  role: ['role', null, 1
  /* Attribute */
  ]
},
    svgFieldCache = {
  // special props
  style: ['style', null, 3
  /* Assign */
  ],
  ref: ['ref', null, 2
  /* Ignore */
  ],
  fn: ['fn', null, 2
  /* Ignore */
  ],
  // property compat
  className: ['class', null, 1
  /* Attribute */
  ],
  htmlFor: ['for', null, 1
  /* Attribute */
  ],
  tabIndex: ['tabindex', null, 1
  /* Attribute */
  ],
  // React compat
  onDoubleClick: ['ondblclick', null, 0
  /* Property */
  ],
  // attributes with eccentric casing - some SVG attrs are snake-cased, some camelCased
  allowReorder: ['allowReorder', null, 1
  /* Attribute */
  ],
  attributeName: ['attributeName', null, 1
  /* Attribute */
  ],
  attributeType: ['attributeType', null, 1
  /* Attribute */
  ],
  autoReverse: ['autoReverse', null, 1
  /* Attribute */
  ],
  baseFrequency: ['baseFrequency', null, 1
  /* Attribute */
  ],
  calcMode: ['calcMode', null, 1
  /* Attribute */
  ],
  clipPathUnits: ['clipPathUnits', null, 1
  /* Attribute */
  ],
  contentScriptType: ['contentScriptType', null, 1
  /* Attribute */
  ],
  contentStyleType: ['contentStyleType', null, 1
  /* Attribute */
  ],
  diffuseConstant: ['diffuseConstant', null, 1
  /* Attribute */
  ],
  edgeMode: ['edgeMode', null, 1
  /* Attribute */
  ],
  externalResourcesRequired: ['externalResourcesRequired', null, 1
  /* Attribute */
  ],
  filterRes: ['filterRes', null, 1
  /* Attribute */
  ],
  filterUnits: ['filterUnits', null, 1
  /* Attribute */
  ],
  gradientTransform: ['gradientTransform', null, 1
  /* Attribute */
  ],
  gradientUnits: ['gradientUnits', null, 1
  /* Attribute */
  ],
  kernelMatrix: ['kernelMatrix', null, 1
  /* Attribute */
  ],
  kernelUnitLength: ['kernelUnitLength', null, 1
  /* Attribute */
  ],
  keyPoints: ['keyPoints', null, 1
  /* Attribute */
  ],
  keySplines: ['keySplines', null, 1
  /* Attribute */
  ],
  keyTimes: ['keyTimes', null, 1
  /* Attribute */
  ],
  lengthAdjust: ['lengthAdjust', null, 1
  /* Attribute */
  ],
  limitingConeAngle: ['limitingConeAngle', null, 1
  /* Attribute */
  ],
  markerHeight: ['markerHeight', null, 1
  /* Attribute */
  ],
  markerUnits: ['markerUnits', null, 1
  /* Attribute */
  ],
  maskContentUnits: ['maskContentUnits', null, 1
  /* Attribute */
  ],
  maskUnits: ['maskUnits', null, 1
  /* Attribute */
  ],
  numOctaves: ['numOctaves', null, 1
  /* Attribute */
  ],
  pathLength: ['pathLength', null, 1
  /* Attribute */
  ],
  patternContentUnits: ['patternContentUnits', null, 1
  /* Attribute */
  ],
  patternTransform: ['patternTransform', null, 1
  /* Attribute */
  ],
  patternUnits: ['patternUnits', null, 1
  /* Attribute */
  ],
  pointsAtX: ['pointsAtX', null, 1
  /* Attribute */
  ],
  pointsAtY: ['pointsAtY', null, 1
  /* Attribute */
  ],
  pointsAtZ: ['pointsAtZ', null, 1
  /* Attribute */
  ],
  preserveAlpha: ['preserveAlpha', null, 1
  /* Attribute */
  ],
  preserveAspectRatio: ['preserveAspectRatio', null, 1
  /* Attribute */
  ],
  primitiveUnits: ['primitiveUnits', null, 1
  /* Attribute */
  ],
  refX: ['refX', null, 1
  /* Attribute */
  ],
  refY: ['refY', null, 1
  /* Attribute */
  ],
  repeatCount: ['repeatCount', null, 1
  /* Attribute */
  ],
  repeatDur: ['repeatDur', null, 1
  /* Attribute */
  ],
  requiredExtensions: ['requiredExtensions', null, 1
  /* Attribute */
  ],
  requiredFeatures: ['requiredFeatures', null, 1
  /* Attribute */
  ],
  specularConstant: ['specularConstant', null, 1
  /* Attribute */
  ],
  specularExponent: ['specularExponent', null, 1
  /* Attribute */
  ],
  spreadMethod: ['spreadMethod', null, 1
  /* Attribute */
  ],
  startOffset: ['startOffset', null, 1
  /* Attribute */
  ],
  stdDeviation: ['stdDeviation', null, 1
  /* Attribute */
  ],
  stitchTiles: ['stitchTiles', null, 1
  /* Attribute */
  ],
  surfaceScale: ['surfaceScale', null, 1
  /* Attribute */
  ],
  systemLanguage: ['systemLanguage', null, 1
  /* Attribute */
  ],
  tableValues: ['tableValues', null, 1
  /* Attribute */
  ],
  targetX: ['targetX', null, 1
  /* Attribute */
  ],
  targetY: ['targetY', null, 1
  /* Attribute */
  ],
  textLength: ['textLength', null, 1
  /* Attribute */
  ],
  viewBox: ['viewBox', null, 1
  /* Attribute */
  ],
  viewTarget: ['viewTarget', null, 1
  /* Attribute */
  ],
  xChannelSelector: ['xChannelSelector', null, 1
  /* Attribute */
  ],
  yChannelSelector: ['yChannelSelector', null, 1
  /* Attribute */
  ],
  zoomAndPan: ['zoomAndPan', null, 1
  /* Attribute */
  ]
};

var attributeOnlyRx = /-/,
    deepAttrRx = /^style-/,
    isAttrOnlyField = function (field) {
  return attributeOnlyRx.test(field) && !deepAttrRx.test(field);
},
    propOnlyRx = /^(on|style)/,
    isPropOnlyField = function (field) {
  return propOnlyRx.test(field);
},
    propPartRx = /[a-z][A-Z]/g,
    getAttrName = function (field) {
  return field.replace(propPartRx, function (m) {
    return m[0] + '-' + m[1];
  }).toLowerCase();
},
    jsxEventPropRx = /^on[A-Z]/,
    attrPartRx = /\-(?:[a-z]|$)/g,
    getPropName = function (field) {
  var prop = field.replace(attrPartRx, function (m) {
    return m.length === 1 ? '' : m[1].toUpperCase();
  });
  return jsxEventPropRx.test(prop) ? prop.toLowerCase() : prop;
},
    deepPropRx = /^(style)([A-Z])/,
    buildPropData = function (prop) {
  var m = deepPropRx.exec(prop);
  return m ? [m[2].toLowerCase() + prop.substr(m[0].length), m[1], 0
  /* Property */
  ] : [prop, null, 0
  /* Property */
  ];
},
    attrNamespaces = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
},
    attrNamespaceRx = new RegExp("^(" + Object.keys(attrNamespaces).join('|') + ")-(.*)"),
    buildAttrData = function (attr) {
  var m = attrNamespaceRx.exec(attr);
  return m ? [m[2], attrNamespaces[m[1]], 1
  /* Attribute */
  ] : [attr, null, 1
  /* Attribute */
  ];
};

var getFieldData = function (field, svg) {
  var cache = svg ? svgFieldCache : htmlFieldCache,
      cached = cache[field];
  if (cached) return cached;
  var attr = svg && !isPropOnlyField(field) || !svg && isAttrOnlyField(field),
      name = attr ? getAttrName(field) : getPropName(field);
  if (name !== field && (cached = cache[name])) return cached;
  var data = attr ? buildAttrData(name) : buildPropData(name);
  return cache[field] = data;
};

exports.getFieldData = getFieldData;
},{}],"node_modules/surplus/es/spread.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assign = assign;
exports.spread = spread;

var _dom = require("./dom");

var _fieldData = require("./fieldData");

var _index = require("./index");

function assign(a, b) {
  var props = Object.keys(b);

  for (var i = 0, len = props.length; i < len; i++) {
    var name = props[i];
    a[name] = b[name];
  }
}

function spread(node, obj, svg) {
  var props = Object.keys(obj);

  for (var i = 0, len = props.length; i < len; i++) {
    var name = props[i];
    setField(node, name, obj[name], svg);
  }
}

function setField(node, field, value, svg) {
  var _a = (0, _fieldData.getFieldData)(field, svg),
      name = _a[0],
      namespace = _a[1],
      flags = _a[2],
      type = flags & 3
  /* Type */
  ;

  if (type === 0
  /* Property */
  ) {
      if (namespace) node = node[namespace];
      node[name] = value;
    } else if (type === 1
  /* Attribute */
  ) {
      if (namespace) (0, _index.setAttributeNS)(node, namespace, name, value);else (0, _dom.setAttribute)(node, name, value);
    } else if (type === 3
  /* Assign */
  ) {
      if (value && typeof value === 'object') assign(node.style, value);
    }
}
},{"./dom":"node_modules/surplus/es/dom.js","./fieldData":"node_modules/surplus/es/fieldData.js","./index":"node_modules/surplus/es/index.js"}],"node_modules/s-js/dist/es/S.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Public interface
var S = function S(fn, value) {
  var node = new ComputationNode(fn, value);
  return function computation() {
    return node.current();
  };
}; // compatibility with commonjs systems that expect default export to be at require('s.js').default rather than just require('s-js')


Object.defineProperty(S, 'default', {
  value: S
});
var _default = S;
exports.default = _default;

S.root = function root(fn) {
  var owner = Owner,
      root = fn.length === 0 ? UNOWNED : new ComputationNode(null, null),
      result = undefined,
      disposer = fn.length === 0 ? null : function _dispose() {
    if (RunningClock !== null) {
      RootClock.disposes.add(root);
    } else {
      dispose(root);
    }
  };
  Owner = root;

  if (RunningClock === null) {
    result = topLevelRoot(fn, disposer, owner);
  } else {
    result = disposer === null ? fn() : fn(disposer);
    Owner = owner;
  }

  return result;
};

function topLevelRoot(fn, disposer, owner) {
  try {
    return disposer === null ? fn() : fn(disposer);
  } finally {
    Owner = owner;
  }
}

S.on = function on(ev, fn, seed, onchanges) {
  if (Array.isArray(ev)) ev = callAll(ev);
  onchanges = !!onchanges;
  return S(on, seed);

  function on(value) {
    var running = RunningNode;
    ev();
    if (onchanges) onchanges = false;else {
      RunningNode = null;
      value = fn(value);
      RunningNode = running;
    }
    return value;
  }
};

function callAll(ss) {
  return function all() {
    for (var i = 0; i < ss.length; i++) ss[i]();
  };
}

S.effect = function effect(fn, value) {
  new ComputationNode(fn, value);
};

S.data = function data(value) {
  var node = new DataNode(value);
  return function data(value) {
    if (arguments.length === 0) {
      return node.current();
    } else {
      return node.next(value);
    }
  };
};

S.value = function value(current, eq) {
  var data = S.data(current),
      age = -1;
  return function value(update) {
    if (arguments.length === 0) {
      return data();
    } else {
      var same = eq ? eq(current, update) : current === update;

      if (!same) {
        var time = RootClock.time;
        if (age === time) throw new Error("conflicting values: " + update + " is not the same as " + current);
        age = time;
        current = update;
        data(update);
      }

      return update;
    }
  };
};

S.freeze = function freeze(fn) {
  var result = undefined;

  if (RunningClock !== null) {
    result = fn();
  } else {
    RunningClock = RootClock;
    RunningClock.changes.reset();

    try {
      result = fn();
      event();
    } finally {
      RunningClock = null;
    }
  }

  return result;
};

S.sample = function sample(fn) {
  var result,
      running = RunningNode;

  if (running !== null) {
    RunningNode = null;
    result = fn();
    RunningNode = running;
  } else {
    result = fn();
  }

  return result;
};

S.cleanup = function cleanup(fn) {
  if (Owner !== null) {
    if (Owner.cleanups === null) Owner.cleanups = [fn];else Owner.cleanups.push(fn);
  } else {
    console.warn("cleanups created without a root or parent will never be run");
  }
}; // experimental : exposing node constructors and some state


S.makeDataNode = function makeDataNode(value) {
  return new DataNode(value);
};

S.makeComputationNode = function makeComputationNode(fn, seed) {
  return new ComputationNode(fn, seed);
};

S.isFrozen = function isFrozen() {
  return RunningClock !== null;
};

S.isListening = function isListening() {
  return RunningNode !== null;
}; // Internal implementation
/// Graph classes and operations


var Clock =
/** @class */
function () {
  function Clock() {
    this.time = 0;
    this.changes = new Queue(); // batched changes to data nodes

    this.updates = new Queue(); // computations to update

    this.disposes = new Queue(); // disposals to run after current batch of updates finishes
  }

  return Clock;
}();

var RootClockProxy = {
  time: function () {
    return RootClock.time;
  }
};

var DataNode =
/** @class */
function () {
  function DataNode(value) {
    this.value = value;
    this.pending = NOTPENDING;
    this.log = null;
  }

  DataNode.prototype.current = function () {
    if (RunningNode !== null) {
      logDataRead(this, RunningNode);
    }

    return this.value;
  };

  DataNode.prototype.next = function (value) {
    if (RunningClock !== null) {
      if (this.pending !== NOTPENDING) {
        // value has already been set once, check for conflicts
        if (value !== this.pending) {
          throw new Error("conflicting changes: " + value + " !== " + this.pending);
        }
      } else {
        // add to list of changes
        this.pending = value;
        RootClock.changes.add(this);
      }
    } else {
      // not batching, respond to change now
      if (this.log !== null) {
        this.pending = value;
        RootClock.changes.add(this);
        event();
      } else {
        this.value = value;
      }
    }

    return value;
  };

  DataNode.prototype.clock = function () {
    return RootClockProxy;
  };

  return DataNode;
}();

var ComputationNode =
/** @class */
function () {
  function ComputationNode(fn, value) {
    this.state = CURRENT;
    this.source1 = null;
    this.source1slot = 0;
    this.sources = null;
    this.sourceslots = null;
    this.log = null;
    this.owned = null;
    this.cleanups = null;
    this.fn = fn;
    this.value = value;
    this.age = RootClock.time;
    if (fn === null) return;
    var owner = Owner,
        running = RunningNode;
    if (owner === null) console.warn("computations created without a root or parent will never be disposed");
    Owner = RunningNode = this;

    if (RunningClock === null) {
      toplevelComputation(this);
    } else {
      this.value = this.fn(this.value);
    }

    if (owner && owner !== UNOWNED) {
      if (owner.owned === null) owner.owned = [this];else owner.owned.push(this);
    }

    Owner = owner;
    RunningNode = running;
  }

  ComputationNode.prototype.current = function () {
    if (RunningNode !== null) {
      if (this.age === RootClock.time) {
        if (this.state === RUNNING) throw new Error("circular dependency");else updateNode(this); // checks for state === STALE internally, so don't need to check here
      }

      logComputationRead(this, RunningNode);
    }

    return this.value;
  };

  ComputationNode.prototype.clock = function () {
    return RootClockProxy;
  };

  return ComputationNode;
}();

var Log =
/** @class */
function () {
  function Log() {
    this.node1 = null;
    this.node1slot = 0;
    this.nodes = null;
    this.nodeslots = null;
  }

  return Log;
}();

var Queue =
/** @class */
function () {
  function Queue() {
    this.items = [];
    this.count = 0;
  }

  Queue.prototype.reset = function () {
    this.count = 0;
  };

  Queue.prototype.add = function (item) {
    this.items[this.count++] = item;
  };

  Queue.prototype.run = function (fn) {
    var items = this.items;

    for (var i = 0; i < this.count; i++) {
      fn(items[i]);
      items[i] = null;
    }

    this.count = 0;
  };

  return Queue;
}(); // Constants


var NOTPENDING = {},
    CURRENT = 0,
    STALE = 1,
    RUNNING = 2; // "Globals" used to keep track of current system state

var RootClock = new Clock(),
    RunningClock = null,
    // currently running clock 
RunningNode = null,
    // currently running computation
Owner = null,
    // owner for new computations
UNOWNED = new ComputationNode(null, null); // Functions

function logRead(from, to) {
  var fromslot,
      toslot = to.source1 === null ? -1 : to.sources === null ? 0 : to.sources.length;

  if (from.node1 === null) {
    from.node1 = to;
    from.node1slot = toslot;
    fromslot = -1;
  } else if (from.nodes === null) {
    from.nodes = [to];
    from.nodeslots = [toslot];
    fromslot = 0;
  } else {
    fromslot = from.nodes.length;
    from.nodes.push(to);
    from.nodeslots.push(toslot);
  }

  if (to.source1 === null) {
    to.source1 = from;
    to.source1slot = fromslot;
  } else if (to.sources === null) {
    to.sources = [from];
    to.sourceslots = [fromslot];
  } else {
    to.sources.push(from);
    to.sourceslots.push(fromslot);
  }
}

function logDataRead(data, to) {
  if (data.log === null) data.log = new Log();
  logRead(data.log, to);
}

function logComputationRead(node, to) {
  if (node.log === null) node.log = new Log();
  logRead(node.log, to);
}

function event() {
  // b/c we might be under a top level S.root(), have to preserve current root
  var owner = Owner;
  RootClock.updates.reset();
  RootClock.time++;

  try {
    run(RootClock);
  } finally {
    RunningClock = RunningNode = null;
    Owner = owner;
  }
}

function toplevelComputation(node) {
  RunningClock = RootClock;
  RootClock.changes.reset();
  RootClock.updates.reset();

  try {
    node.value = node.fn(node.value);

    if (RootClock.changes.count > 0 || RootClock.updates.count > 0) {
      RootClock.time++;
      run(RootClock);
    }
  } finally {
    RunningClock = Owner = RunningNode = null;
  }
}

function run(clock) {
  var running = RunningClock,
      count = 0;
  RunningClock = clock;
  clock.disposes.reset(); // for each batch ...

  while (clock.changes.count !== 0 || clock.updates.count !== 0 || clock.disposes.count !== 0) {
    if (count > 0) // don't tick on first run, or else we expire already scheduled updates
      clock.time++;
    clock.changes.run(applyDataChange);
    clock.updates.run(updateNode);
    clock.disposes.run(dispose); // if there are still changes after excessive batches, assume runaway            

    if (count++ > 1e5) {
      throw new Error("Runaway clock detected");
    }
  }

  RunningClock = running;
}

function applyDataChange(data) {
  data.value = data.pending;
  data.pending = NOTPENDING;
  if (data.log) markComputationsStale(data.log);
}

function markComputationsStale(log) {
  var node1 = log.node1,
      nodes = log.nodes; // mark all downstream nodes stale which haven't been already

  if (node1 !== null) markNodeStale(node1);

  if (nodes !== null) {
    for (var i = 0, len = nodes.length; i < len; i++) {
      markNodeStale(nodes[i]);
    }
  }
}

function markNodeStale(node) {
  var time = RootClock.time;

  if (node.age < time) {
    node.age = time;
    node.state = STALE;
    RootClock.updates.add(node);
    if (node.owned !== null) markOwnedNodesForDisposal(node.owned);
    if (node.log !== null) markComputationsStale(node.log);
  }
}

function markOwnedNodesForDisposal(owned) {
  for (var i = 0; i < owned.length; i++) {
    var child = owned[i];
    child.age = RootClock.time;
    child.state = CURRENT;
    if (child.owned !== null) markOwnedNodesForDisposal(child.owned);
  }
}

function updateNode(node) {
  if (node.state === STALE) {
    var owner = Owner,
        running = RunningNode;
    Owner = RunningNode = node;
    node.state = RUNNING;
    cleanup(node, false);
    node.value = node.fn(node.value);
    node.state = CURRENT;
    Owner = owner;
    RunningNode = running;
  }
}

function cleanup(node, final) {
  var source1 = node.source1,
      sources = node.sources,
      sourceslots = node.sourceslots,
      cleanups = node.cleanups,
      owned = node.owned,
      i,
      len;

  if (cleanups !== null) {
    for (i = 0; i < cleanups.length; i++) {
      cleanups[i](final);
    }

    node.cleanups = null;
  }

  if (owned !== null) {
    for (i = 0; i < owned.length; i++) {
      dispose(owned[i]);
    }

    node.owned = null;
  }

  if (source1 !== null) {
    cleanupSource(source1, node.source1slot);
    node.source1 = null;
  }

  if (sources !== null) {
    for (i = 0, len = sources.length; i < len; i++) {
      cleanupSource(sources.pop(), sourceslots.pop());
    }
  }
}

function cleanupSource(source, slot) {
  var nodes = source.nodes,
      nodeslots = source.nodeslots,
      last,
      lastslot;

  if (slot === -1) {
    source.node1 = null;
  } else {
    last = nodes.pop();
    lastslot = nodeslots.pop();

    if (slot !== nodes.length) {
      nodes[slot] = last;
      nodeslots[slot] = lastslot;

      if (lastslot === -1) {
        last.source1slot = slot;
      } else {
        last.sourceslots[lastslot] = slot;
      }
    }
  }
}

function dispose(node) {
  node.fn = null;
  node.log = null;
  cleanup(node, true);
}
},{}],"node_modules/surplus/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  insert: true,
  content: true,
  spread: true,
  assign: true,
  S: true
};
Object.defineProperty(exports, "insert", {
  enumerable: true,
  get: function () {
    return _insert.insert;
  }
});
Object.defineProperty(exports, "content", {
  enumerable: true,
  get: function () {
    return _content.content;
  }
});
Object.defineProperty(exports, "spread", {
  enumerable: true,
  get: function () {
    return _spread.spread;
  }
});
Object.defineProperty(exports, "assign", {
  enumerable: true,
  get: function () {
    return _spread.assign;
  }
});
Object.defineProperty(exports, "S", {
  enumerable: true,
  get: function () {
    return _sJs.default;
  }
});

var _insert = require("./insert");

var _content = require("./content");

var _dom = require("./dom");

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dom[key];
    }
  });
});

var _spread = require("./spread");

var _sJs = _interopRequireDefault(require("s-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./insert":"node_modules/surplus/es/insert.js","./content":"node_modules/surplus/es/content.js","./dom":"node_modules/surplus/es/dom.js","./spread":"node_modules/surplus/es/spread.js","s-js":"node_modules/s-js/dist/es/S.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/components/Card.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/Card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Surplus = _interopRequireWildcard(require("surplus"));

require("./Card.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Card = function Card(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return function () {
    var __, __h21, __insert2;

    __ = Surplus.createElement("section", null, null);
    __h21 = Surplus.createElement("h2", null, __);
    Surplus.content(__h21, title, "");
    __insert2 = Surplus.createTextNode('', __);
    Surplus.S.effect(function (__range) {
      return Surplus.insert(__range, children);
    }, {
      start: __insert2,
      end: __insert2
    });
    Surplus.S.effect(function () {
      __.className = "card " + title.replace(" ", "-");
    });
    return __;
  }();
};

var _default = Card;
exports.default = _default;
},{"surplus":"node_modules/surplus/es/index.js","./Card.css":"src/components/Card.css"}],"src/tasks/Counter.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/tasks/Counter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Surplus = _interopRequireWildcard(require("surplus"));

var _sJs = _interopRequireDefault(require("s-js"));

var _Card = _interopRequireDefault(require("../components/Card"));

require("./Counter.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Counter = function Counter() {
  var count = _sJs.default.data(10);

  return (0, _Card.default)({
    "title": "Counter",
    "children": [count(), function () {
      var __;

      __ = Surplus.createElement("button", null, null);
      Surplus.S.effect(function () {
        __.onclick = function () {
          console.log(_sJs.default.sample(count));
          count(count() + 1);
        };

        __.textContent = "+";
      });
      return __;
    }()]
  });
};

var _default = Counter;
exports.default = _default;
},{"surplus":"node_modules/surplus/es/index.js","s-js":"node_modules/s-js/dist/es/S.js","../components/Card":"src/components/Card.js","./Counter.css":"src/tasks/Counter.css"}],"src/App.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Surplus = _interopRequireWildcard(require("surplus"));

var _sJs = _interopRequireDefault(require("s-js"));

var _Counter = _interopRequireDefault(require("./tasks/Counter"));

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

console.log(_sJs.default);

var App = function App() {
  // let count = S.data(10);
  // return (
  //   <div>
  //     {count()}
  //     <button onClick={() => count(count() + 1)}>+</button>
  //   </div>
  // );
  return function () {
    var __, __a1, __insert2;

    __ = Surplus.createElement("main", "App", null);
    __a1 = Surplus.createElement("a", null, __);
    __a1.href = "../../index.html";
    __a1.textContent = "Home";
    __insert2 = Surplus.createTextNode('', __);
    Surplus.S.effect(function (__range) {
      return Surplus.insert(__range, (0, _Counter.default)({}));
    }, {
      start: __insert2,
      end: __insert2
    });
    return __;
  }();
};

var _default = App;
exports.default = _default;
},{"surplus":"node_modules/surplus/es/index.js","s-js":"node_modules/s-js/dist/es/S.js","./tasks/Counter":"src/tasks/Counter.js","./App.css":"src/App.css"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _App = _interopRequireDefault(require("./App"));

var _sJs = _interopRequireDefault(require("s-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sJs.default.root(function () {
  document.querySelector("#root").append((0, _App.default)());
});
},{"./App":"src/App.js","s-js":"node_modules/s-js/dist/es/S.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60398" + '/');

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
//# sourceMappingURL=/src.a2b27638.js.map