!function(e){function t(s){if(n[s])return n[s].exports;var a=n[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=64)}({25:function(e,t,n){Vue.component("teamspeak-channel",n(57));var s=new Vue({el:"#app",data:{channels:[]}});socket.on("channels",function(e){s.channels=e})},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["channel"]}},57:function(e,t,n){var s=n(58)(n(30),n(59),null,null);e.exports=s.exports},58:function(e,t){e.exports=function(e,t,n,s){var a,i=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,i=e.default);var c="function"==typeof i?i.options:i;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),n&&(c._scopeId=n),s){var r=Object.create(c.computed||null);Object.keys(s).forEach(function(e){var t=s[e];r[e]=function(){return t}}),c.computed=r}return{esModule:a,exports:i,options:c}}},59:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("span",{staticClass:"level-item"},[e.channel.channel.spacer?e._e():n("img",{attrs:{src:"/img/channel.svg"}})]),e._v(" "),n("span",{staticClass:"level-item",domProps:{textContent:e._s(e.channel.channel.name)}})]),e._v(" "),e._m(0)]),e._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"item"},[n("div",{staticClass:"list"},e._l(e.channel.clients,function(t){return n("div",{staticClass:"item"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("span",{staticClass:"level-item"},[t.away?n("img",{attrs:{src:"/img/away.svg"}}):t.soundMuted||t.soundDisabled?n("img",{attrs:{src:"/img/sound-off.svg"}}):t.micMuted||t.micDisabled?n("img",{attrs:{src:"/img/mic-off.svg"}}):n("img",{attrs:{src:"/img/person.svg"}})]),e._v(" "),n("span",{staticClass:"level-item"},[e._v("\n                                "+e._s(t.name)+"\n                            ")])]),e._v(" "),n("div",{staticClass:"level-right"},[n("span",{staticClass:"level-item"},[t.talkPower<e.channel.channel.neededTalkPower&&t.isTalker?n("img",{attrs:{src:"/img/mic.svg"}}):e._e(),e._v(" "),t.talkPower<e.channel.channel.neededTalkPower&&!t.isTalker?n("img",{attrs:{src:"/img/mic-off.svg"}}):e._e()])])])])}))]),e._v(" "),e._l(e.channel.subChannels,function(e){return n("teamspeak-channel",{key:e.name,attrs:{channel:e}})})],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"level-right"},[n("span",{staticClass:"level-item"})])}]}},64:function(e,t,n){e.exports=n(25)}});