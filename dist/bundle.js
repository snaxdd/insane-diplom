!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2)},function(e,t,n){"use strict";var r,o,i,u;r=document.querySelector(".header-contacts__arrow"),o=document.querySelector(".header-contacts__phone-number-accord"),i=o.querySelector(".header-contacts__phone-number"),u=!1,r.addEventListener("click",(function(){u?(o.style.top="0%",i.style.opacity="0",u=!1):(o.style.top="100%",i.style.opacity="100",u=!0)}))},function(e,t,n){"use strict";var r,o,i,u;r=document.querySelector(".menu__icon"),o=document.querySelector(".popup.popup-menu"),i=o.querySelector(".popup-dialog-menu"),u=window.innerWidth,window.addEventListener("resize",(function(){return u=window.innerWidth})),r.addEventListener("click",(function(){o.style.visibility="visible",i.style.transform="translate3d(0, 0, 0)"})),o.addEventListener("click",(function(e){"close close-menu"===e.target.className&&(o.style.visibility="hidden",i.style.transform=u>576?"translate3d(100%, 0, 0)":"translate3d(0, -100%, 0)")}))}]);