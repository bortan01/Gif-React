(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n(7),i=n.n(a),s=n(2),u=n(9),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),console.log("submit"),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(c.jsx)("input",{type:"text",value:i,onChange:function(t){!function(t){console.log(t.target.value),o(t.target.value)}(t)}})})},j=n(10),d=n(6),l=n.n(d),b=n(8),f=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,c,r,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=R4qK3NSI73RXvjZSdZ8hCDYXSfEq0xSj"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){var e;return{id:t.id,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url,title:t.title}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){t.id;var e=t.title,n=t.url;return Object(c.jsxs)("div",{className:"card animate__fadeOut",children:[Object(c.jsx)("img",{src:n,alt:e}),Object(c.jsx)("p",{children:e})]})},O=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){f(t).then((function(t){a({data:t,loading:!1})}))}),[t]),c}(e),a=n.data,i=n.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:e}),i&&Object(c.jsx)("p",{children:"Loading"}),Object(c.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(c.jsx)(p,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(r.useState)(["one punch"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"GifExpertApp"}),Object(c.jsx)(o,{setCategories:a}),Object(c.jsx)("hr",{}),Object(c.jsx)("ol",{children:n.map((function(t){return Object(c.jsx)(O,{category:t},t)}))})]})};n(17);i.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.dbe09d32.chunk.js.map