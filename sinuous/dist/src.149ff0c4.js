parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NGJS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.computed=exports.S=i,exports.cleanup=_,exports.isListening=e,exports.observable=exports.o=s,exports.on=p,exports.root=r,exports.sample=c,exports.subscribe=a,exports.transaction=u,exports.unsubscribe=h;const t=[];let o,n;function e(){return!!o}function r(t){const n=o,e=()=>{};o=e,x(e);const r=t(()=>{l(e),o=void 0});return o=n,r}function c(t){const n=o;o=void 0;const e=t();return o=n,e}function u(o){let e=n;n=[];const r=o();let c=n;return n=e,c.forEach(o=>{if(o.t!==t){const n=o.t;o.t=t,o(n)}}),r}function s(e){function r(c){if(0===arguments.length)return o&&!r.__o.has(o)&&(r.__o.add(o),o.u.push(r)),e;if(n)return r.t===t&&n.push(r),r.t=c,c;e=c;const u=o;return o=void 0,r.o=new Set(r.__o),r.o.forEach(t=>t.i=!1),r.o.forEach(t=>{t.i||t()}),o=u,e}return r.$o=!0,r.__o=new Set,r.t=t,r}function i(t,n){function e(){const r=o;o&&o.__c.push(e);const c=e.__c;return l(e),e.i=!0,o=e,n=t(n),c.forEach(t=>{-1===e.__c.indexOf(t)&&(t.i=!0)}),function t(o){return o.reduce((o,n)=>o.concat(n,t(n.__c)),[])}(e.__c).forEach(f),o=r,n}function r(){return e.i?e.u.forEach(t=>t()):n=e(),n}return t.s=e,x(e),e(),r.$o=!0,r}function f(t){t.i&&t.u.forEach(o=>{o.o&&o.o.delete(t)})}function _(t){return o&&o.l.push(t),t}function a(t){return i(t),()=>l(t.s)}function p(t,o,n,e){return t=[].concat(t),i(n=>{t.forEach(t=>t());let r=n;return e||(r=c(()=>o(n))),e=!1,r},n)}function h(t){l(t.s)}function l(t){t.__c.forEach(l),t.u.forEach(o=>{o.__o.delete(t),o.o&&o.o.delete(t)}),t.l.forEach(t=>t()),x(t)}function x(t){t.u=[],t.__c=[],t.l=[]}
},{}],"ZVC1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;const t=(e,n,s,u)=>{let l={};for(let o=1;o<n.length;o++){const r=n[o],i="number"==typeof r?s[r]:r,p=n[++o];if(1===p)u[0]=i;else if(3===p)u[1]=Object.assign(u[1]||{},i);else if(5===p)(u[1]=u[1]||{})[n[++o]]=i;else if(6===p){let t=n[++o],e=(u[1]=u[1]||{})[t],s=l[t];s||"function"!=typeof i&&"function"!=typeof e||(s=e&&[e]||[],u[1][t]=function(){let t="";for(var e=0;e<s.length;e++)t+="function"==typeof s[e]?s[e].call(this):s[e];return t}),s?s.push(i):u[1][t]+=i+""}else if(p){const n=()=>e.apply(null,t(e,i,s,["",null]));u.push("function"==typeof u[0]?n:n())}else u.push(i)}return u},e=function(t){let e,n,s=1,u="",l="",o=[0];const r=t=>{1===s&&(t||(u=u.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?o.push(t||u,0):3===s&&(t||u)?(o.push(t||u,1),s=2):2===s&&"..."===u&&t?o.push(t,3):2===s&&u&&!t?o.push(!0,5,u):s>=5&&((u||!t&&5===s)&&(o.push(u,s,n),s=6),t&&(o.push(t,s,n),s=6)),u=""};for(let i=0;i<t.length;i++){i&&(1===s&&r(),r(i));for(let p=0;p<t[i].length;p++)e=t[i][p],1===s?"<"===e?(r(),o=[o],s=3):u+=e:4===s?"--"===u&&">"===e?(s=1,u=""):u=e+u[0]:l?e===l?l="":u+=e:'"'===e||"'"===e?l=e:">"===e?(r(),s=1):s&&("="===e?(s=5,n=u,u=""):"/"===e&&(s<5||">"===t[i][p+1])?(r(),3===s&&(o=o[0]),s=o,(o=o[0]).push(s,2),s=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(r(),s=2):u+=e),3===s&&"!--"===u&&(s=4,o=o[0])}return r(),o},n=new Map,s=function(s){let u=n.get(this);return u||(u=new Map,n.set(this,u)),(u=t(this,u.get(s)||(u.set(s,u=e(s)),u),arguments,[])).length>1?u:u[0]},u=function(){const t=s.apply(this,arguments);if(t)return Array.isArray(t)?this(t):"object"==typeof t?t:this([t])};function l(){const t=u.bind(this);return(this.wrap||t).apply(t,arguments)}
},{}],"ffru":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.context=u,exports.h=f,exports.hs=p,exports.html=c,exports.svg=a,Object.defineProperty(exports,"o",{enumerable:!0,get:function(){return e.o}}),Object.defineProperty(exports,"observable",{enumerable:!0,get:function(){return e.observable}}),exports.api=void 0;var e=require("./observable.js"),t=n(require("./htm.js"));function n(e){return e&&e.__esModule?e:{default:e}}const r={},o=[];exports.api=r;let i=0;function s(e,t,n){let s;return"string"==typeof t?t=document.createTextNode(t):t instanceof Node||(t=r.h(o,t)),11===t.nodeType&&(s=t.firstChild)&&s!==t.lastChild&&(s.t=t.lastChild.t=++i),e.insertBefore(t,n),void 0===s?t:s}function l(e){return this.o[e.type](e)}function u(e,t){for(let n in e)r[n]=e[n];return function(){const e=Array.from(arguments);let n;return e.forEach(function o(i){if(null==i);else if("string"==typeof i)n?s(n,i):n=t?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i);else if(Array.isArray(i))n||(n=document.createDocumentFragment()),i.forEach(o);else if(i instanceof Node)n?s(n,i):n=i;else if("object"==typeof i)r.property(n,i,null,t);else if("function"==typeof i)if(n){const e=s(n,"");r.insert(n,i,e)}else n=i.apply(null,e.splice(1));else s(n,""+i)}),n}}function f(){return r.h.apply(r.h,arguments)}function p(){return r.hs.apply(r.hs,arguments)}function c(){return t.default.apply(f,arguments)}function a(){return t.default.apply(p,arguments)}r.insert=function(e,t,n,o,i){return e=n&&n.parentNode||e,i=i||o instanceof Node&&o,t===o||(o&&"string"!=typeof o||!("string"==typeof t||"number"==typeof t&&(t+=""))?"function"==typeof t?r.subscribe(function(){o=r.insert(e,t.call({el:e,endMark:n}),n,o,i)}):(function(e,t,n,r){if(n){if(t){if(!r){const t=(r=n.previousSibling||e.lastChild).t;if(t)for(r=r.previousSibling;r&&r.t!==t;)r=r.previousSibling}let t;for(;r&&r!==n;)t=r.nextSibling,e===r.parentNode&&(e.removeChild(r),r.t=0),r=t}}else e.textContent=""}(e,o,n,i),o=null,t&&!0!==t&&(o=s(e,t,n))):(null!=o&&e.firstChild?n?(n.previousSibling||e.lastChild).data=t:e.firstChild.data=t:n?s(e,t,n):e.textContent=t,o=t)),o},r.property=function(e,t,n,o,i){if(null!=t)if(!n||"attrs"===n&&(o=!0))for(n in t)r.property(e,t[n],n,o,i);else"o"!==n[0]||"n"!==n[1]||t.$o?"function"==typeof t?r.subscribe(function(){r.property(e,t.call({el:e,name:n}),n,o,i)}):i?e.style.setProperty(n,t):o||"data-"===n.slice(0,5)||"aria-"===n.slice(0,5)?e.setAttribute(n,t):"style"===n?"string"==typeof t?e.style.cssText=t:r.property(e,t,null,o,!0):("class"===n&&(n+="Name"),e[n]=t):function(e,t,n){t=t.slice(2).toLowerCase(),n?e.addEventListener(t,l):e.removeEventListener(t,l),(e.o||(e.o={}))[t]=n}(e,n,t)},r.add=s,r.h=u({subscribe:e.subscribe,cleanup:e.cleanup,root:e.root,sample:e.sample}),r.hs=u({subscribe:e.subscribe,cleanup:e.cleanup,root:e.root,sample:e.sample},!0);
},{"./observable.js":"NGJS","./htm.js":"ZVC1"}],"WjnD":[function(require,module,exports) {

},{}],"fLG9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.card=void 0;var e=require("sinuous");function r(){var e=t(["\n    <section class=",">\n      <h2>","</h2>\n      ","\n    </section>\n  "]);return r=function(){return e},e}function t(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}require("./card.css");var n=function(t){for(var n=t.title,c=arguments.length,i=new Array(c>1?c-1:0),s=1;s<c;s++)i[s-1]=arguments[s];return(0,e.html)(r(),"card "+n.replace(" ","-"),n,i)};exports.card=n;
},{"sinuous":"ffru","./card.css":"WjnD"}],"APss":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.counter=void 0;var e=require("sinuous"),r=require("../components/card");function t(){var e=n(["\n    <",' title="Counter">\n      ',"\n      <button onclick=",">+</button>\n    <//>\n  "]);return t=function(){return e},e}function n(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}require("./counter.css");var u=function(){var n=(0,e.o)(0);return(0,e.html)(t(),r.card,n,function(){return n(n()+1)})};exports.counter=u;
},{"sinuous":"ffru","../components/card":"fLG9","./counter.css":"WjnD"}],"NkWV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.temperatureConverter=void 0;var e=require("sinuous"),n=require("../components/card");function r(){var e=t(["\n    <",' title="Temperature Converter">\n      <span>\n        <input value='," oninput="," />\n        Celsius\n      </span>\n      =\n      <span>\n        <input value="," oninput="," />\n        Fahrenheit\n      </span>\n    <//>\n  "]);return r=function(){return e},e}function t(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function u(e){return Number(e.toFixed(2))}function i(e){return/^0\d+$/.test(e)?e.slice(1):/^-0\d+$/.test(e)?"-"+e.slice(2):e}function o(e){return u(5/9*(e-32))||-17.78}function s(e){return u(1.8*e+32)||32}require("./temperatureConverter.css");var a=/^-?\d*.?\d*$/;function c(e){return!!/^-?\d*$/.test(e)||!!/^-?\d+[.]?\d*$/.test(e)}var p=function(){var t=(0,e.o)(0),u=(0,e.o)(32),a=function(e,n,r,t){var u=e.target.value;c(u)&&(n(u=i(u)),r(t(u)))};return(0,e.html)(r(),n.card,t,function(e){return a(e,t,u,s)},u,function(e){return a(e,u,t,o)})};exports.temperatureConverter=p;
},{"sinuous":"ffru","../components/card":"fLG9","./temperatureConverter.css":"WjnD"}],"WSGK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.flightBooker=void 0;var n=require("sinuous"),e=require("sinuous/observable"),t=require("../components/card");function r(){var n=o(["\n    <",' title="Flight Booker">\n      <div>\n        <select value='," onchange=",'>\n          <option value="{1}">','</option>\n          <option value="{2}">',"</option>\n        </select>\n        <input\n          value=","\n          class=","\n          oninput=","\n        />\n        <input\n          value=","\n          class=","\n          oninput=","\n          disabled=","\n        />\n        <button onclick="," disabled=",">\n          Book\n        </button>\n      </div>\n    <//>\n  "]);return r=function(){return n},n}function o(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}require("./flightBooker.css");var u={1:"one-way flight",2:"return flight"};function i(n){var e=n.split(".").reverse();return 2===e[1].length&&2===e[2].length&&(new Date(e.join("-")).valueOf()||!1)}function a(n){return n.toISOString().slice(0,10).split("-").reverse().join(".")}var c=function(){var o=(0,n.o)(1),c=(0,n.o)(a(new Date)),l=(0,n.o)(a(new Date)),f=(0,e.S)(function(){return!i(c())}),s=(0,e.S)(function(){return!i(l())}),v=(0,e.S)(function(){return i(l())<i(c())}),p=(0,e.S)(function(){return f()||s()||v()}),d=(0,e.S)(function(){return 1===o()}),g=(0,e.S)(function(){return f()?"error":""}),b=(0,e.S)(function(){return s()?"error":""});return(0,n.html)(r(),t.card,o,function(n){return o(n.target.value)},u[1],u[2],c,g,function(n){return c(n.target.value)},l,b,function(n){return l(n.target.value)},d,function(){var n={1:" for "+c(),2:" from "+c()+" to "+l()};alert("You have booked a "+u[o()]+n[o()])},p)};exports.flightBooker=c;
},{"sinuous":"ffru","sinuous/observable":"NGJS","../components/card":"fLG9","./flightBooker.css":"WjnD"}],"ytB1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.timer=void 0;var e=require("sinuous"),n=require("sinuous/observable"),r=require("../components/card");function t(){var e=i(["\n    <",' title="Timer">\n      <div class="wrapper">\n        Elapsed Time:\n        <progress value=',' />\n        <div class="duration">','s</div>\n        Duration:\n        <input\n          type="range"\n          min=',"\n          max=","\n          value=","\n          oninput=","\n        />\n        <button onclick=",">Reset Timer</button>\n      </div>\n    <//>\n  "]);return t=function(){return e},e}function i(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}require("./timer.css");var u=function(){var i,u=(0,e.o)(5e3),o=(0,n.S)(function(){return(u()/1e3).toFixed(1)}),a=(0,e.o)(),s=(0,e.o)(),c=(0,n.S)(function(){return(s()-a())/u()});function l(){clearInterval(i),a((new Date).valueOf()),s(a()),i=setInterval(function(){s((new Date).valueOf())},10)}return l(),(0,e.html)(t(),r.card,c,o,0,3e4,u,function(e){return u(e.target.value)},l)};exports.timer=u;
},{"sinuous":"ffru","sinuous/observable":"NGJS","../components/card":"fLG9","./timer.css":"WjnD"}],"L42g":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.crud=void 0;var n=require("sinuous"),t=require("sinuous/observable"),e=require("../components/card");function r(){var n=o(["\n                <option value=",">",", ","</option>\n              "]);return r=function(){return n},n}function u(){var n=o(["\n    <",' title="CRUD">\n      <div class="wrapper">\n        Filter prefix:\n        <input value='," oninput="," />\n        <select\n          value=","\n          oninput=",'\n          size="4"\n        >\n          ',"\n        </select>\n        <div>\n          Name:\n          <input value="," oninput="," />\n          Surname:\n          <input value="," oninput=",' />\n        </div>\n        <div class="buttons">\n          <button onclick=',">Create</button>\n          <button onclick=",">Update</button>\n          <button onclick=",">Delete</button>\n        </div>\n      </div>\n    <//>\n  "]);return u=function(){return n},n}function o(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}require("./crud.css");var i=function(){var o=(0,n.o)(""),i=(0,n.o)([(0,n.o)(["Paul","Atreides"]),(0,n.o)(["Gurney","Halleck"]),(0,n.o)(["Duncan","Idaho"])]),c=(0,t.S)(function(){return i().map(function(n,t){return[n()[0],n()[1],t]}).filter(function(n){return n[1].toLowerCase().startsWith(o().toLowerCase())})}),a=(0,n.o)(""),l=(0,n.o)(""),s=(0,n.o)(-1);return(0,t.subscribe)(function(){o(),s(-1)}),(0,n.html)(u(),e.card,o,function(n){return o(n.target.value)},s,function(n){return s(n.target.value)},function(){return c().map(function(t){return(0,n.html)(r(),t[2],t[1],t[0])})},a,function(n){return a(n.target.value)},l,function(n){return l(n.target.value)},function(){i(i().concat((0,n.o)([a(),l()])))},function(){s()>-1&&i()[s()]([a(),l()])},function(){s()>-1&&i(i().filter(function(n,t){return t!=s()}))})};exports.crud=i;
},{"sinuous":"ffru","sinuous/observable":"NGJS","../components/card":"fLG9","./crud.css":"WjnD"}],"M49Z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.circleDrawer=void 0;var n=require("sinuous"),e=require("sinuous/observable"),r=require("../components/card");function t(){var n=a(["\n                      <","\n                        circle=","\n                        handleRightClick=","\n                      />\n                    "]);return t=function(){return n},n}function c(){var n=a(["\n            <svg onclick=",">\n              ","\n            </svg>\n          "]);return c=function(){return n},n}function i(){var n=a(["\n    <",' title="Circle Drawer">\n      <div class="wrapper">\n        <div class="buttons">\n          <button disabled='," onclick=",">Undo</button>\n          <button\n            disabled=","\n            onclick=",'\n          >\n            Redo\n          </button>\n        </div>\n        <div class="canvas">\n          ',"\n        </div>\n        ","\n      </div>\n    <//>\n  "]);return i=function(){return n},n}function u(){var n=a(["\n      <circle\n        cx=","\n        cy=","\n        r=",'\n        fill="white"\n        stroke="black"\n        onclick=',"\n        oncontextmenu=","\n      />\n    "]);return u=function(){return n},n}function o(){var n=a(['\n    <div class="overlay" onclick=','></div>\n    <div class="resizer">\n      <p>\n        Adjust radius of circle at (',",\n        ",")\n      </p>\n      <p>",'</p>\n      <input\n        type="range"\n        min=',"\n        max=","\n        value=","\n        oninput=","\n      />\n    </div>\n  "]);return o=function(){return n},n}function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function l(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,t)}return r}function s(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach(function(e){f(n,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))})}return n}function f(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}require("./circleDrawer.css");var v=function(){var a=30,l=(0,n.o)(0),f=(0,n.o)([(0,n.o)([])]),v=(0,n.o)(a),p=(0,n.o)(!1),b=(0,n.o)([]);function d(n){n.preventDefault(),n.stopPropagation();var e=n.target;p({x:e.cx.baseVal.value,y:e.cy.baseVal.value,r:e.r.baseVal.value}),v(p().r)}function y(e){var r=e.layerX,t=e.layerY,c=b().slice();c.push({x:r,y:t,r:a}),O((0,n.o)(c))}function O(n){var e=f().slice(0,l()+1);e.push(n),f(e),l(l()+1)}function g(){v()!==p().r&&(p(!1),v(a),O((0,n.o)(b().slice()))),p(!1)}(0,e.subscribe)(function(){return b(f()[l()]())}),(0,e.subscribe)(function(){if(p()){var n=(0,e.sample)(b).findIndex(function(n){return n.x===p().x&&n.y===p().y}),r=(0,e.sample)(b).slice();r[n]=s({},(0,e.sample)(b)[n],{r:Number(v())}),b(r)}});var h=function(){return(0,n.html)(o(),g,function(){return p().x},function(){return p().y},v,0,100,v,function(n){return v(n.target.value)})},m=function(e){var r=e.circle,t=e.handleRightClick;return(0,n.svg)(u(),r.x,r.y,r.r,function(n){n.preventDefault(),n.stopPropagation()},t)};return(0,n.html)(i(),r.card,function(){return!l()},function(){l(Math.max(l()-1,0))},function(){return l()===f().length-1},function(){l(Math.min(l()+1,f().length-1))},function(){return(0,n.svg)(c(),y,function(){return b().map(function(e){return(0,n.html)(t(),m,e,d)})})},function(){return p()&&h})};exports.circleDrawer=v;
},{"sinuous":"ffru","sinuous/observable":"NGJS","../components/card":"fLG9","./circleDrawer.css":"WjnD"}],"m0hA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sampleData=void 0;var A={A0:"Data",A1:"20",A2:"15",A3:"text",B1:"79",B2:"3.9",A5:"Formula",B5:"Output",A6:'"=sum(D1:D5)"',B6:"=sum(D1:D5)",A7:'"=sub(A1:B2)"',B7:"=sub(A1:B2)",A8:'"=mul(D1:D5)"',B8:"=mul(D1:D5)",A9:'"=div(A1:B2)"',B9:"=div(A1:B2)",A10:'"=mod(A1:B2)"',B10:"=mod(A1:B2)",C0:"Formula",D0:"Output",C1:'"=sum(A1,A2)"',D1:"=sum(A1,A2)",C2:'"=sub(D1,A1)"',D2:"=sub(D1,A1)",C3:'"=mul(D2,A2)"',D3:"=mul(D2,A2)",C4:'"=div(D3,A1)"',D4:"=div(D3,A1)",C5:'"=mod(A1,A2)"',D5:"=mod(A1,A2)",C7:'"=sum(A1,A3)"',D7:"=sum(A1,A3)",C8:'"=sum(A1,A4)"',D8:"=sum(A1,A4)",C9:'"=sumA1,A4)"',D9:"=sumA1,A4)",C10:'"=sm(A1,A4)"',D10:"=sm(A1,A4)",C11:'"=sum(A1,307)"',D11:"=sum(A1,307)",C12:'"=sum(159,4)"',D12:"=sum(159,4)",C14:'"=A1"',D14:"=A1",C15:'"=A3"',D15:"=A3"};exports.sampleData=A;
},{}],"LDrY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Parser=void 0;var e=require("sinuous/observable");function r(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}var i=function(){function t(n,i,s){var a=this;r(this,t),this.cells={},this.store=n,this.columns=i,this.rows=s,this.operations={sum:function(e,r){return e+r},sub:function(e,r){return e-r},mul:function(e,r){return e*r},div:function(e,r){return e/r},mod:function(e,r){return e%r},exp:function(e,r){return Math.pow(e,r)}},(0,e.subscribe)(function(){return a.cells=a.store()})}return n(t,[{key:"cartesianProduct",value:function(e,r){var t=[];return e.forEach(function(e){r.forEach(function(r){t.push(e+r)})}),t}},{key:"findArrRange",value:function(e,r,t){var n=e.indexOf(r),i=e.indexOf(t);return-1==n||-1==i||n>i?[]:e.slice(n,i+1)}},{key:"getRange",value:function(e,r){e=this.splitOperand(e),r=this.splitOperand(r);var t=this.findArrRange(this.columns,e[0],r[0]),n=this.findArrRange(this.rows,e[1],r[1]);return this.cartesianProduct(t,n)}},{key:"splitOperand",value:function(e){return[e.match(/[a-zA-Z]+/)[0],Number(e.match(/\d+/)[0])]}},{key:"rangeOperation",value:function(e,r,t){var n=this;return this.isWellFormed(r)&&this.isWellFormed(t)?this.getRange(r,t).map(function(e){return Number(n.parse(n.cells[e]()))}).reduce(this.operations[e]):this.originalString}},{key:"singleOperation",value:function(e,r,t){var n=this.parseOperand(r),i=this.parseOperand(t);return null===n||null===i?this.originalString:this.operations[e](n,i).toString()}},{key:"isWellFormed",value:function(e){return/[a-zA-Z]+\d+/.test(e)}},{key:"parseOperand",value:function(e){return isNaN(Number(e))?e in this.cells?Number(this.parse(this.cells[e]())):this.isWellFormed(e)?0:null:Number(e)}},{key:"parseOperation",value:function(e,r){return r.startsWith("(")&&r.endsWith(")")?((r=r.slice(1,r.length-1)).includes(",")?(t="single",n=r.split(",")):r.includes(":")&&(t="range",n=r.split(":")),2!==n.length?this.originalString:"single"===t?this.singleOperation(e,n[0],n[1]):"range"===t?this.rangeOperation(e,n[0],n[1]):this.originalString):this.originalString;var t,n}},{key:"parse",value:function(e){if(this.originalString=e,"string"!=typeof e)return"";if(!e.startsWith("="))return e;var r=e.slice(1);return r.slice(0,3).toLowerCase()in this.operations?this.parseOperation(r.slice(0,3).toLowerCase(),r.slice(3).toUpperCase()):this.cells[r]||e}}]),t}();exports.Parser=i;
},{"sinuous/observable":"NGJS"}],"jeSB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cells=void 0;var n=require("sinuous"),r=require("sinuous/observable"),t=require("../../components/card"),e=require("./sampleData.js"),u=require("./parse.js");function o(){var n=v(["\n                          <td id="," onclick=",">\n                            <"," j="," i="," />\n                          </td>\n                        "]);return o=function(){return n},n}function i(){var n=v(["\n                  <tr id=",'>\n                    <td class="row-key">',"</td>\n                    ","\n                  </tr>\n                "]);return i=function(){return n},n}function a(){var n=v([' <td class="column-key">',"</td> "]);return a=function(){return n},n}function c(){var n=v(["\n    <",' title="Cells">\n      <div class="wrapper">\n        <table>\n          <thead>\n            <tr>\n              <td class="row-key"></td>\n              ',"\n            </tr>\n          </thead>\n          <tbody>\n            ","\n          </tbody>\n        </table>\n      </div>\n      <button onclick=",">Clear</button>\n    <//>\n  "]);return c=function(){return n},n}function l(){var n=v(["\n            <div>","</div>\n          "]);return l=function(){return n},n}function f(){var n=v(["\n            <input\n              id=","\n              autofocus\n              value=","\n              onfocus=","\n              onblur=","\n              onkeydown=","\n              oninput=","\n            />\n          "]);return f=function(){return n},n}function s(){var n=v([" ",""]);return s=function(){return n},n}function v(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}function p(n){return y(n)||m(n)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function y(n){if(Array.isArray(n)){for(var r=0,t=new Array(n.length);r<n.length;r++)t[r]=n[r];return t}}require("./cells.css");var b="ABCDEFGHIJKLMNOPQRSTUVWXYZ";function h(n){return p(Array(n).keys())}function w(n){return h(n).map(k)}function j(n){for(var r=[];n>25;){var t=n%26;r.push(t),n=Math.floor(n/26)-1}return r.push(n),r.reverse()}function k(n){return j(n).map(function(n){return b[n]}).join("")}function A(n,r,t){var e=n.indexOf(r);return-1===e?null:"before"===t?void 0===n[e-1]?null:n[e-1]:"after"===t&&n[e+1]||null}var O=function(v){var p=v&&v.shape||[100,100];Object.keys(e.sampleData).forEach(function(r){e.sampleData[r]=(0,n.o)(e.sampleData[r])});var d,m=(0,n.o)(e.sampleData),y=h(p[1]),b=w(p[0]),j=new u.Parser(m,b,y),k=(0,n.o)(void 0);function O(t){if(k()!==t){!function(t){var e=(0,r.sample)(m);e[t]||(e[t]=(0,n.o)(""),m(e))}(t),k(t);var e=d.querySelector("#input-"+t);e&&(e.focus(),e.setSelectionRange(0,9999))}}var q=function(t){var e=t.j,u=t.i,o=e+u,i=(0,n.o)(!1);return(0,r.subscribe)(function(){k()!==o||(0,r.sample)(i)?k()!==o&&(0,r.sample)(i)&&i(!1):i(!0)}),(0,n.html)(s(),function(){return i()?(0,n.html)(f(),"input-"+o,function(){return o in m()?m()[o]():""},function(){return O(o)},function(){return function(n){k()===n&&k(void 0)}(o)},function(n){return function(n,r,t){var e;if("ArrowUp"===n.key){var u=A(y,t,"before");e=null!==u?r+u:null}if("ArrowDown"===n.key||"Enter"===n.key){var o=A(y,t,"after");e=null!==o?r+o:null}if("ArrowLeft"===n.key&&n.altKey){var i=A(b,r,"before");e=null!==i?i+t:null}if("ArrowRight"===n.key&&n.altKey){var a=A(b,r,"after");e=null!==a?a+t:null}e&&(n.preventDefault(),O(e))}(n,e,u)},function(n){return function(n,t){(0,r.sample)(m)[t](n.target.value)}(n,o)}):(0,n.html)(l(),function(){return o in m()?j.parse(m()[o]()):""})})},D=(0,n.html)(c(),t.card,function(){return b.map(function(r){return(0,n.html)(a(),r)})},function(){return y.map(function(r){return(0,n.html)(i(),"row-"+r,r,function(){return b.map(function(t){return(0,n.html)(o(),t+r,function(){return O(t+r)},q,t,r)})})})},function(){m({})});return d=D.querySelector("tbody"),D};exports.cells=O;
},{"sinuous":"ffru","sinuous/observable":"NGJS","../../components/card":"fLG9","./sampleData.js":"m0hA","./parse.js":"LDrY","./cells.css":"WjnD"}],"vZyd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.app=void 0;var e=require("sinuous");require("./app.css");var r=require("./tasks/counter"),t=require("./tasks/temperatureConverter"),n=require("./tasks/flightBooker"),s=require("./tasks/timer"),i=require("./tasks/crud"),u=require("./tasks/circleDrawer"),a=require("./tasks/cells/cells");function c(){var e=o(['\n    <main className="App">\n      <a href="../../index.html">Home</a>\n\n      <'," />\n      <"," />\n      <"," />\n      <"," />\n      <"," />\n      <"," />\n      <"," />\n    </main>\n  "]);return c=function(){return e},e}function o(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var l=function(){return(0,e.html)(c(),r.counter,t.temperatureConverter,n.flightBooker,s.timer,i.crud,u.circleDrawer,a.cells)};exports.app=l;
},{"sinuous":"ffru","./app.css":"WjnD","./tasks/counter":"APss","./tasks/temperatureConverter":"NkWV","./tasks/flightBooker":"WSGK","./tasks/timer":"ytB1","./tasks/crud":"L42g","./tasks/circleDrawer":"M49Z","./tasks/cells/cells":"jeSB"}],"H99C":[function(require,module,exports) {
"use strict";var e=require("./app");document.querySelector("#root").append((0,e.app)());
},{"./app":"vZyd"}]},{},["H99C"], null)
//# sourceMappingURL=src.149ff0c4.js.map