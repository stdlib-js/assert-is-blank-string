// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,a=n.__defineSetter__,l=n.__lookupGetter__,i=n.__lookupSetter__;var c=e,f=function(t,r,e){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(l.call(t,r)||i.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=c):t[r]=e.value),p="get"in e,y="set"in e,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),y&&a&&a.call(t,r,e.set),t},p=r()?c:f;var y=function(t,r,e){p(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})};var b=function(t){return"string"==typeof t};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var v=function(){return _&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,g=s;var m=function(t){return g.call(t)},d=Object.prototype.hasOwnProperty;var j=function(t,r){return null!=t&&d.call(t,r)},S="function"==typeof Symbol?Symbol.toStringTag:"",w=j,O=S,h=s;var F=m,P=function(t){var r,e,n;if(null==t)return h.call(t);e=t[O],r=w(t,O);try{t[O]=void 0}catch(r){return h.call(t)}return n=h.call(t),r?t[O]=e:delete t[O],n},A=v()?P:F,E=String.prototype.valueOf;var T=A,k=function(t){try{return E.call(t),!0}catch(t){return!1}},x=v();var C=function(t){return"object"==typeof t&&(t instanceof String||(x?k(t):"[object String]"===T(t)))},G=b,V=C;var B=y,D=function(t){return G(t)||V(t)},$=b,q=C;B(D,"isPrimitive",$),B(D,"isObject",q);var z=/^[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/;function H(t){return!!$(t)&&z.test(t)}export{H as default};
//# sourceMappingURL=mod.js.map
