(this.webpackJsonpbiathlon=this.webpackJsonpbiathlon||[]).push([[0],{15:function(e,t,n){e.exports={Austria:"TableBodyItem_Austria__Te7VC",Ukraine:"TableBodyItem_Ukraine__2Aew1 TableBodyItem_Austria__Te7VC",Norway:"TableBodyItem_Norway__3aWUF TableBodyItem_Austria__Te7VC",Belarus:"TableBodyItem_Belarus__2IuE4 TableBodyItem_Austria__Te7VC",Slovenia:"TableBodyItem_Slovenia__18tDH TableBodyItem_Austria__Te7VC",Russia:"TableBodyItem_Russia__tJWii TableBodyItem_Austria__Te7VC",Germany:"TableBodyItem_Germany__2ec8s TableBodyItem_Austria__Te7VC",Sweden:"TableBodyItem_Sweden__O8LAC TableBodyItem_Austria__Te7VC"}},16:function(e,t,n){e.exports={table:"ResaultsTable_table__1-GFZ"}},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=n(4),u=n(2),s=n(5),b=Object(u.b)("CREATE_RACE_RESULT"),l=Object(u.c)([],Object(s.a)({},b,(function(e,t){return t.payload}))),d=Object(u.b)("SET_FILTER"),j=Object(u.c)("",Object(s.a)({},d,(function(e,t){return t.payload}))),_=Object(u.a)({reducer:{races:l,filter:j}}),m=function(e){return e.filter},O=n(9),y=n.n(O),T=n(1);function f(e){var t,n=e.title,a=Object(i.b)(),r=Object(i.c)(m);"lie"!==n&&"stand"!==n&&"general"!==n||(t="".concat(n," %")),"speed"===n&&(t="".concat(n," s."));return Object(T.jsx)("th",{children:Object(T.jsx)("button",{className:n===r?"".concat(y.a.button," ").concat(y.a.active):y.a.button,type:"button",onClick:function(){r!==n&&a(d(n))},children:t||n})})}var p=n(15),x=n.n(p);function h(e){var t=e.race,n=e.index,a=t.country,r=t.name,c=t.lie,o=t.stand,i=t.general,u=t.speed;return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:n+1}),Object(T.jsx)("td",{className:x.a[a]}),Object(T.jsx)("td",{children:r}),Object(T.jsx)("td",{children:c}),Object(T.jsx)("td",{children:o}),Object(T.jsx)("td",{children:i}),Object(T.jsx)("td",{children:u})]})}var A=n(17),E=n(6),v=n(8),I=Object(v.a)((function(e){return e.races.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{general:+parseFloat((e.lie+e.stand)/2).toFixed(2)})}))}),m,(function(e,t){var n=Object(A.a)(e);return"name"===t?n.sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0})):"country"===t?n.sort((function(e,t){var n=e.country.toUpperCase(),a=t.country.toUpperCase();return n<a?-1:n>a?1:0})):"speed"===t?n.sort((function(e,n){return e[t]-n[t]})):n.sort((function(e,n){return n[t]-e[t]}))})),B=n(16),S=n.n(B);function C(){var e=Object(i.c)(I),t=function(e){var t;return e&&e.length&&(t=Object.keys(e[0])),t}(e);return e&&e.length&&Object(T.jsxs)("table",{className:S.a.table,children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"#"}),t.map((function(e){return Object(T.jsx)(f,{title:e},e)}))]})}),Object(T.jsx)("tbody",{children:e.map((function(e,t){return Object(T.jsx)(h,{race:e,index:t},e.name)}))})]})}var F=[{country:"Austria",name:"EDER Simon"},{country:"Ukraine",name:"TISHCHENKO Artem"},{country:"Norway",name:"LAEGREID Sturla Holm"},{country:"Belarus",name:"LABASTAU Mikita"},{country:"Slovenia",name:"FAK Jakov"},{country:"Austria",name:"KOMATZ David"},{country:"Russia",name:"ELISEEV Matvey"},{country:"Norway",name:"BJOENTEGAARD Erlend"},{country:"Germany",name:"PEIFFER Arnd"},{country:"Sweden",name:"SAMUELSSON Sebastian"}];function R(e,t){return Math.random()*(t-e)+e}var U=function(){return F.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{lie:+parseFloat(R(85,95)).toFixed(2),stand:+parseFloat(R(80,95)).toFixed(2),general:null,speed:+parseFloat(R(25,30)).toFixed(2)})}))};function w(){var e=Object(i.b)();return Object(a.useEffect)((function(){e(d("general")),e((function(e){var t=U();e(b(t))}))}),[e]),Object(T.jsx)(C,{})}o.a.render(Object(T.jsx)(i.a,{store:_,children:Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(w,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={button:"TableHeadItem_button__1bE-v",active:"TableHeadItem_active__2fEjH"}}},[[29,1,2]]]);
//# sourceMappingURL=main.39db4a8c.chunk.js.map