"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=f(function(H,p){
function b(r,e,t,v,a,u,n,i,E,O){var s,o,c,q,d;if(q=r-e,r<=0||q<=0)return NaN;for(s=u,o=O,c=0,d=0;d<r;d++)c+=(v[s]-t)*(i[o]-n),s+=a,o+=E;return c/q}p.exports=b
});var j=f(function(I,k){
var x=require('@stdlib/strided-base-stride2offset/dist'),g=m();function h(r,e,t,v,a,u,n,i){return g(r,e,t,v,a,x(r,a),u,n,i,x(r,i))}k.exports=h
});var _=f(function(J,R){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=j(),z=m();w(l,"ndarray",z);R.exports=l
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=_(),y,C=B(A(__dirname,"./native.js"));D(C)?y=F:y=C;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
