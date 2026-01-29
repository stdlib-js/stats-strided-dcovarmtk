// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(r,e,t,n,s,d,i,a,o,f){var m,l,u,p,j;if(p=r-e,r<=0||p<=0)return NaN;for(m=d,l=f,u=0,j=0;j<r;j++)u+=(n[m]-t)*(a[l]-i),m+=s,l+=o;return u/p}function n(r,n,s,d,i,a,o,f){return t(r,n,s,d,i,e(r,i),a,o,f,e(r,f))}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
