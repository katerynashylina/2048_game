parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=t(r))){var n=0,e=function(){};return{s:e,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,c=!1;return{s:function(){o=r[Symbol.iterator]()},n:function(){var r=o.next();return i=r.done,r},e:function(r){c=!0,a=r},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw a}}}}function t(r,t){if(r){if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}var e=document.querySelectorAll(".field-cell"),o=document.querySelector(".game-score"),a=document.querySelector("button"),i=document.querySelector(".message-start"),c=document.querySelector(".message-lose"),f=document.querySelector(".message-win"),s=4,u=4,l=0,v=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function d(r){return Math.floor(Math.random()*r)}function m(){return(1.01*Math.random()).toFixed(2)}function y(r){for(var t=[],n=0;n<s;n++)for(var e=0;e<u;e++)0===r[n][e]&&t.push([n,e]);if(0!==t.length){var o=t[d(t.length)];m()<.9?r[o[0]][o[1]]=2:r[o[0]][o[1]]=4}}function h(t){var n,o=!1,i=0,f=r(e);try{for(f.s();!(n=f.n()).done;){var v=n.value,d=Math.floor(i/s),m=i%u,y=t[d][m];i++,v.classList="field-cell",0===y?v.innerHTML="":(v.innerHTML=y,v.classList.add("field-cell--".concat(y))),2048===y&&(o=!0)}}catch(h){f.e(h)}finally{f.f()}o&&w(),L(l),b(t)&&(a.classList.contains("restart")&&(a.classList.replace("restart","start"),a.innerText="Start"),c.classList.remove("hidden"))}function L(r){o.innerHTML="".concat(r)}function g(r){for(var t=0;t<s;t++)for(var n=0;n<u;n++)if(0===r[t][n])return!0;return!1}function b(r){if(g(r))return!1;for(var t=0;t<s;t++)for(var n=0;n<u-1;n++)if(r[t][n]===r[t][n+1])return!1;for(var e=0;e<s-1;e++)for(var o=0;o<u;o++)if(r[e][o]===r[e+1][o])return!1;return!0}function w(){f.classList.remove("hidden")}function S(){v=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],l=0,c.classList.toggle("hidden",!0),f.classList.toggle("hidden",!0),a.classList.contains("start")&&(a.classList.remove("start"),a.classList.add("restart"),a.innerText="Restart",i.classList.add("hidden")),y(v),y(v),h(v)}function p(r,t,n,e,o){for(var a=t,i=n,c=t+e,f=n+o;c>=0&&c<4&&f>=0&&f<4&&!r[c][f];)r[c][f]=r[a][i],r[a][i]=0,a=c,i=f,c+=e,f+=o}function A(r){for(var t=0;t<s;t++)for(var n=0;n<u;n++)r[t][n]&&p(r,t,n,-1,0)}function M(r){for(var t=0;t<s-1;t++)for(var n=0;n<u;n++)r[t][n]&&r[t][n]===r[t+1][n]&&(r[t][n]=2*r[t][n],l+=r[t][n],r[t+1][n]=0)}function k(r){for(var t=s-1;t>=0;t--)for(var n=0;n<u;n++)r[t][n]&&p(r,t,n,1,0)}function q(r){for(var t=s-1;t>0;t--)for(var n=0;n<u;n++)r[t][n]&&r[t][n]===r[t-1][n]&&(r[t][n]=2*r[t][n],l+=r[t][n],r[t-1][n]=0)}function T(r){for(var t=0;t<s;t++)for(var n=u-1;n>=0;n--)r[t][n]&&p(r,t,n,0,1);return r}function x(r){for(var t=0;t<s;t++)for(var n=u-1;n>0;n--)r[t][n]&&r[t][n]===r[t][n-1]&&(r[t][n]=2*r[t][n],l+=r[t][n],r[t][n-1]=0)}function j(r){for(var t=0;t<s;t++)for(var n=0;n<u;n++)r[t][n]&&p(r,t,n,0,-1)}function E(r){for(var t=0;t<s;t++)for(var n=0;n<u;n++)r[t][n]&&r[t][n]===r[t][n-1]&&(r[t][n]=2*r[t][n],l+=r[t][n],r[t][n-1]=0)}function H(r){if(a.classList.contains("restart")){var t=v.map(function(r){return r.slice()});switch(r.key){case"ArrowUp":A(v),M(v),A(v);break;case"ArrowDown":k(v),q(v),k(v);break;case"ArrowRight":T(v),x(v),T(v);break;case"ArrowLeft":j(v),E(v),j(v)}I(v,t)&&y(v),h(v)}}function I(r,t){for(var n=0;n<s;n++)for(var e=0;e<u;e++)if(r[n][e]!==t[n][e])return!0;return!1}a.addEventListener("click",S),document.body.addEventListener("keydown",H);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.93d9e383.js.map