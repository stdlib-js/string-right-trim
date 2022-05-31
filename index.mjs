// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var e=r.isPrimitive,i=s,n=t,m=/[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;var d=function(r){if(!e(r))throw new TypeError(n("0hZ3N",r));return i(r,m,"")};export{d as default};
//# sourceMappingURL=index.mjs.map
