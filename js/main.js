!function(o){var n={};function c(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=o,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=0)}([function(e,t){var o=document.querySelector(".todo__input"),n=document.querySelector(".todo__form"),r=document.querySelector(".todo__list"),d=document.querySelector(".todo"),a=document.querySelector(".todo__warning"),i=[],l=1;n.addEventListener("submit",function(e){e.preventDefault(),o.value&&(i.push({id:l,task:o.value,done:!1}),r.textContent="",l++,u(),o.value="",1==r.childNodes.length&&d.removeChild(a)),o.focus()}),r.addEventListener("click",function(e){var t=e.target.dataset.key,o=e.target.parentElement,n=document.querySelector(".todo__checkbox--".concat(t));if(e.target.classList.contains("todo__remove--".concat(t))&&(i.splice(t-1,1),r.textContent="",u(),0==r.childNodes.length&&d.appendChild(a),l--),e.target.classList.contains("todo__checkbox--".concat(t))){o.classList.toggle("todo__item--done");for(var c=0;c<i.length;c++)i[c].id==t&&(n.checked?i[c].done=!0:i[c].done=!1)}});var u=function(){l=1;for(var e=0;e<i.length;e++){var t=document.createElement("li"),o=document.createElement("input"),n=document.createElement("p"),c=document.createElement("button");i[e].id=l,n.textContent=i[e].task,t.classList.add("todo__item"),o.classList.add("todo__checkbox"),o.classList.add("todo__checkbox--".concat(l)),o.setAttribute("type","checkbox"),1==i[e].done&&(t.classList.toggle("todo__item--done"),o.checked="checked"),o.dataset.key=l,n.classList.add("todo__task"),c.classList.add("todo__remove"),c.classList.add("todo__remove--".concat(l)),c.dataset.key=l,t.appendChild(o),t.appendChild(n),t.appendChild(c),r.appendChild(t),l++}}}]);