(this["webpackJsonpmarkmap-cotai-teaching-material"]=this["webpackJsonpmarkmap-cotai-teaching-material"]||[]).push([[0],{197:function(e,t,n){},213:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(1),r=n(67),i=n.n(r),s=(n(197),n(2)),u=n.n(s),o=n(4),d=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],i=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.map((function(e){return fetch(e.fileSource).then((function(e){return e.text()}))})),e.t0=r,e.next=4,Promise.all(t);case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),n},j=[{id:0,name:"NLU",fileSource:n.p+"static/media/nlu.e4ed9f70.md"},{id:1,name:"Speech",fileSource:n.p+"static/media/speech.f9f9b1df.md"},{id:2,name:"Convai",fileSource:n.p+"static/media/convai.31d6cfe0.md"}],l=n(68),b=n(69),m=n(0);var h=function(e){var t=e.markDown,n=e.option;window.innerWidth<=480&&(n=null);var c=Object(a.useRef)(null);return Object(a.useEffect)((function(){c.current.innerHTML="";var e=(new l.Transformer).transform(t).root;b.a.create("#mindmap",n,e)}),[t,n]),Object(m.jsx)("svg",{ref:c,id:"mindmap",children:" "})},f=function(e){var t=e.checked,n=e.onChange;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"sidebar",children:[Object(m.jsx)("header",{children:"MODEL"}),Object(m.jsx)("ul",{className:"submenu",children:j.map((function(e){return Object(m.jsx)(O,{label:e.name,value:e.id,checked:t,setter:n},e.id)}))})]})]})},O=function(e){var t=e.label,n=e.value,c=e.checked,a=e.setter;return Object(m.jsx)("li",{children:Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{id:"check",type:"radio",value:"value",checked:c===n,onChange:function(){return a(n)}}),Object(m.jsx)("span",{className:c===n?"checked value":"value",children:t})]})})},p=n(25),x=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{type:"checkbox",id:"check"}),Object(m.jsxs)("label",{htmlFor:"check",children:[Object(m.jsx)(p.a,{className:"bx-arrow-back",id:"back"}),Object(m.jsx)(p.b,{className:"bx-menu",id:"btn"})]})]})};function v(){var e=Object(a.useState)(0),t=Object(c.a)(e,2),n=t[0],r=t[1],i=d();return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{checked:n,onChange:r}),Object(m.jsx)(h,{markDown:i[n],option:{autoFit:!0}})]})}i.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[213,1,2]]]);
//# sourceMappingURL=main.d0154994.chunk.js.map