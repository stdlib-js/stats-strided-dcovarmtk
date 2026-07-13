"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var m=f(function(H,p){
function b(r,e,a,v,i,u,n,t,E,O){var s,o,c,q,d;if(q=r-e,r<=0||q<=0)return NaN;for(s=u,o=O,c=0,d=0;d<r;d++)c+=(v[s]-a)*(t[o]-n),s+=i,o+=E;return c/q}p.exports=b
});var j=f(function(I,k){
var x=require('@stdlib/strided-base-stride2offset/dist'),g=m();function h(r,e,a,v,i,u,n,t){return g(r,e,a,v,i,x(r,i),u,n,t,x(r,t))}k.exports=h
});var _=f(function(J,R){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=j(),z=m();w(l,"ndarray",z);R.exports=l
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=_(),y,C=B(A(__dirname,"./native.js"));D(C)?y=F:y=C;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
