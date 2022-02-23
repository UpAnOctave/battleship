(()=>{"use strict";var t={917:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=i},426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,":root {\n  --cell-size: 50px;\n}\n\nh1{\n  width: fit-content;\n  margin: auto;\n}\n\n#game-container {\n  display: flex;\n  width: fit-content;\n  margin: auto;\n}\n\n.board-frame {\n  margin: 50px;\n  width: fit-content;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.board-grid {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  border: solid grey 1px;\n}\n\n.ship {\n  background-color: rgb(216, 216, 216);\n  border-color: black;\n}\n\n.hit {\n  background-color: rgb(255, 145, 145);\n  border-color: red;\n}\n\n.miss {\n  background-color: rgb(145, 145, 255);\n  border-color: blue;\n}\n",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var h=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var f=a(p,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),d=0;d<o.length;d++){var l=n(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),s=n(565),c=n.n(s),d=n(216),l=n.n(d),u=n(589),h=n.n(u),p=n(917),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var m=n(426),g={};g.styleTagTransform=h(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;class v{constructor(t){this.size=t,this.damage=[],this.damage.length=t,this.damage.fill(!1)}hit(t){this.damage[t]=!0}isSunk(){return!!this.damage.every((function(t){return t}))}}const b=function(t=null){let e=[];for(let n=0;n<10;n++){e.push([]);for(let r=0;r<10;r++)e[n].push(t)}return e};class y{constructor(){this.layout=b("water"),this.record=b(),this.ships=[]}placeShip(t,e,n,r){try{!function(t,e,n,r,a){if("horizontal"===a){if(e>10-n)throw"Ship overflows the gameboard.";for(let a=0;a<e;a++)if("water"!==t[n+a][r])throw"Ship overlaps with other ship."}else if("vertical"===a){if(e>10-r)throw"Ship overflows the gameboard.";for(let a=0;a<e;a++)if("water"!==t[n][r+a])throw"Ship overlaps with other ship."}}(this.layout,r,t,e,n)}catch(t){return t}this.ships.push(new v(r));const a=this.ships.length-1;if("horizontal"===n)for(let n=0;n<r;n++)this.layout[t+n][e]={id:a,part:n};else if("vertical"===n)for(let n=0;n<r;n++)this.layout[t][e+n]={id:a,part:n}}receiveAttack(t,e){try{!function(t,e,n){if("hit"===n.record[t][e]||"miss"===n.record[t][e])throw"Repeated attack."}(t,e,this)}catch(t){return t}const n=this.layout[t][e];"water"===n?this.record[t][e]="miss":(this.ships[n.id].hit(n.part),this.record[t][e]="hit")}areAllShipsSunk(){return this.ships.every((function(t){return t.isSunk()}))}wasAlreadyShot(t,e){return"miss"===this.record[t][e]||"hit"===this.record[t][e]}}class w{constructor(){this.gameboard=new y}attack(t){let e=Math.round(9*Math.random()),n=Math.round(9*Math.random());for(;"Repeated attack."===t.gameboard.receiveAttack(e,n);)e=Math.round(9*Math.random()),n=Math.round(9*Math.random())}}const k=(()=>{const t=document.querySelector("main"),e={playButton:document.querySelector("#play-button")},n=function(){for(;t.firstChild;)t.removeChild(t.lastChild)};return{home:e,playerScreen:(()=>{const e=document.createElement("button");return e.id="one-player-button",e.textContent="ONE PLAYER",{onePlayerButton:e,load:function(){n(),t.appendChild(e)}}})(),game:(()=>{const e=function(){const t=document.createElement("div");t.classList.add("board-frame");const e=[];for(let t=0;t<10;t++){e.push([]);for(let n=0;n<10;n++)e[t].push(document.createElement("div")),e[t][n].classList.add("board-grid"),e[t][n].dataset.x=t,e[t][n].dataset.y=n}for(let n=0;n<10;n++)for(let r=0;r<10;r++)t.appendChild(e[r][n]);return{frame:t,grid:e}},r=e(),a=e();return{load:function(){n();const e=document.createElement("div");e.id="game-container",e.append(r.frame,a.frame),t.appendChild(e)},updateLayout:function(t){for(let e=0;e<10;e++)for(let n=0;n<10;n++){const a=t[e][n],o=r.grid[e][n];"hit"===a?o.classList.add("hit"):"miss"===a?o.classList.add("miss"):"water"!==a&&null!==a&&o.classList.add("ship")}},updateRecord:function(t){for(let e=0;e<10;e++)for(let n=0;n<10;n++){const r=t[e][n],o=a.grid[e][n];"hit"===r?o.classList.add("hit"):"miss"===r&&o.classList.add("miss")}},addRecordListener:function(t){a.grid.forEach((e=>{e.forEach((e=>{e.addEventListener("click",t)}))}))}}})()}})();k.home.playButton.addEventListener("click",k.playerScreen.load),k.playerScreen.onePlayerButton.addEventListener("click",(function(){k.game.load();const t=new w,e=new w;t.gameboard.placeShip(1,1,"horizontal",3),e.gameboard.placeShip(0,0,"vertical",4),k.game.updateLayout(t.gameboard.layout),k.game.addRecordListener((function(n){const r=n.target.dataset.x,a=n.target.dataset.y;"Repeated attack."!==e.gameboard.receiveAttack(r,a)&&(k.game.updateRecord(e.gameboard.record),e.attack(t),k.game.updateLayout(t.gameboard.record))}))}))})()})();