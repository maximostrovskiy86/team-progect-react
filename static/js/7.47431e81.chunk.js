(this["webpackJsonpteam-progect-react"]=this["webpackJsonpteam-progect-react"]||[]).push([[7],{249:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return s}));var n=r(83),a=r(0),c=r(3),i=r(5),u=r(1);function o(){var t=Object(a.useState)(""),e=Object(n.a)(t,2),r=e[0],o=e[1],s=Object(a.useState)(""),l=Object(n.a)(s,2),b=l[0],j=l[1],f=Object(a.useState)(""),m=Object(n.a)(f,2),d=m[0],p=m[1],h=Object(c.b)(),O=function(t){var e=t.target,r=e.name,n=e.value;switch(r){case"username":return o(n);case"email":return j(n);case"password":return p(n);default:return}};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Registration form"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h(i.a.register({username:r,email:b,password:d})),o(""),j(""),p("")},autoComplete:"off",children:[Object(u.jsxs)("label",{children:["Name",Object(u.jsx)("input",{type:"text",name:"username",value:r,onChange:O})]}),Object(u.jsxs)("label",{children:["Email",Object(u.jsx)("input",{type:"email",name:"email",value:b,onChange:O})]}),Object(u.jsxs)("label",{children:["Password",Object(u.jsx)("input",{type:"password",name:"password",value:d,onChange:O})]}),Object(u.jsx)("button",{type:"submit",children:"Sign up"})]})]})}function s(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:" RegistrationPage"}),Object(u.jsx)(o,{})]})}},83:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(84);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,c=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(o){a=!0,c=o}finally{try{n||null==u.return||u.return()}finally{if(a)throw c}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},84:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(86);function a(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},86:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=7.47431e81.chunk.js.map