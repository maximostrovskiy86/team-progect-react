(this["webpackJsonpteam-progect-react"]=this["webpackJsonpteam-progect-react"]||[]).push([[5],{108:function(e,a,t){e.exports={calculator:"DailyCaloriesForm_calculator__3oGJw",title:"DailyCaloriesForm_title__1A_5o",formContainer:"DailyCaloriesForm_formContainer__jePJv",formInput:"DailyCaloriesForm_formInput__16qcl",field:"DailyCaloriesForm_field__Tznlc",fieldError:"DailyCaloriesForm_fieldError__3bUDh",radio:"DailyCaloriesForm_radio__26DJz",formRadio:"DailyCaloriesForm_formRadio__3rfRO",button:"DailyCaloriesForm_button__1WKnu",sideBar__active:"DailyCaloriesForm_sideBar__active__1HZQ1",formWrapper:"DailyCaloriesForm_formWrapper__3ziEe",radioWrapper:"DailyCaloriesForm_radioWrapper__20B8N",global:"DailyCaloriesForm_global__2JmBt",container__active:"DailyCaloriesForm_container__active__25zaS",form:"DailyCaloriesForm_form__3qbro"}},109:function(e,a,t){"use strict";var s=t(0),r=t(110),i=t.n(r),l=t(15),c=t.n(l),o=t(1);a.a=function(e){var a=e.data,t=e.percentsOfDailyRate,r=e.dailyRate,l=e.kcalConsumed,d=e.kcalLeft;e.notAllowedProducts;return Object(s.useEffect)((function(){c.a.get("https://slimmom-backend.goit.global").then((function(e){return e.json()})).then((function(e){return console.log(e)}))}),[]),Object(o.jsxs)("div",{className:i.a.sideBarContainer,children:[Object(o.jsxs)("div",{className:i.a.characteristicBox,children:[Object(o.jsxs)("p",{className:i.a.sideBarTitle,children:["\u0421\u0432\u043e\u0434\u043a\u0430 \u0437\u0430 ",a]}),Object(o.jsxs)("ul",{className:i.a.sideBarList,children:[Object(o.jsx)("li",{className:i.a.sideBarItem,children:Object(o.jsxs)("p",{className:i.a.sideBarItem_text,children:["\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c",Object(o.jsxs)("span",{className:i.a.sideBarItem_span,children:[d,"000 \u043a\u043a\u0430\u043b"]})]})}),Object(o.jsx)("li",{className:i.a.sideBarItem,children:Object(o.jsxs)("p",{className:i.a.sideBarItem_text,children:["\u0423\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u043e",Object(o.jsxs)("span",{className:i.a.sideBarItem_span,children:[l,"000 \u043a\u043a\u0430\u043b"]})]})}),Object(o.jsx)("li",{className:i.a.sideBarItem,children:Object(o.jsxs)("p",{className:i.a.sideBarItem_text,children:["\u0414\u043d\u0435\u0432\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430",Object(o.jsxs)("span",{className:i.a.sideBarItem_span,children:[r,"000 \u043a\u043a\u0430\u043b"]})]})}),Object(o.jsx)("li",{className:i.a.sideBarItem,children:Object(o.jsxs)("p",{className:i.a.sideBarItem_text,children:["n% \u043e\u0442 \u043d\u043e\u0440\u043c\u044b",Object(o.jsxs)("span",{className:i.a.sideBarItem_span,children:[t,"000 \u043a\u043a\u0430\u043b"]})]})})]})]}),Object(o.jsx)("div",{className:i.a.notAllowedProductsBox,children:Object(o.jsx)("p",{className:i.a.notAllowedProductsTitle,children:"\u041d\u0435\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b"})})]})}},110:function(e,a,t){e.exports={sideBarContainer:"RightSideBar_sideBarContainer__37FUp",characteristicBox:"RightSideBar_characteristicBox__BSdWu",sideBarTitle:"RightSideBar_sideBarTitle__32LG8",sideBarList:"RightSideBar_sideBarList__20sWt",sideBarItem:"RightSideBar_sideBarItem__3r4GA",sideBarItem_text:"RightSideBar_sideBarItem_text__35MAV",notAllowedProductsTitle:"RightSideBar_notAllowedProductsTitle___7XWM",notAllowedProductsBox:"RightSideBar_notAllowedProductsBox__2sLXr"}},111:function(e,a,t){"use strict";t(0);var s=t(137),r=t(138),i=r.b().shape({height:r.a().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430").typeError("\u0424\u043e\u0440\u043c\u0430 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442, \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435").negative("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0442 2 \u0434\u043e 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").min(100,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0440\u043e\u0441\u0442 \u043e\u0442 100\u0441\u043c").max(250,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0440\u043e\u0441\u0442 \u0434\u043e 250\u0441\u043c").integer(),age:r.a().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430").typeError("\u0424\u043e\u0440\u043c\u0430 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442, \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435").min(18,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u043e\u0442 18 \u043b\u0435\u0442").max(99,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u0434\u043e 100 \u043b\u0435\u0442").integer(),weight:r.a().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430").typeError("\u0424\u043e\u0440\u043c\u0430 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442, \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435").min(20,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0432\u0435\u0441 \u043e\u0442 20 \u043a\u0433").max(500,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0432\u0435\u0441 \u0434\u043e 500 \u043a\u0433").integer(),desiredWeight:r.a().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430").typeError("\u0424\u043e\u0440\u043c\u0430 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442, \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435").min(20,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0436\u0435\u043b\u0430\u0435\u043c\u044b\u0439 \u0432\u0435\u0441 \u043e\u0442 20 \u043a\u0433").max(500,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0432\u0435\u0441 \u0434\u043e 500 \u043a\u0433").integer()}),l=t(108),c=t.n(l),o=t(15),d=t.n(o),n=t(5),m=t(6),j=t(1);a.a=function(e){var a=e.toggle,t=e.setValue,r=Object(n.c)(m.b.getIsLoggedIn),l=Object(n.c)(m.b.getUserId);Object(n.b)();console.log(l);var o=function(e){var a={};return Object.keys(e).map((function(t){return a[t]=Number(e[t])})),a};return Object(j.jsx)("div",{className:c.a.calculator,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:c.a.title,children:"\u041f\u0440\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0441\u0432\u043e\u044e \u0441\u0443\u0442\u043e\u0447\u043d\u0443\u044e \u043d\u043e\u0440\u043c\u0443 \u043a\u0430\u043b\u043e\u0440\u0438\u0439 \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441"}),Object(j.jsx)("div",{className:c.a.inputWrapper,children:Object(j.jsx)(s.c,{initialValues:{height:"",age:"",bloodType:"1",weight:"",desiredWeight:""},validationSchema:i,onSubmit:function(e){r?d.a.post("https://slimmom-backend.goit.global/daily-rate/"+l,o(e)).then((function(e){console.log(e.data),console.log("LOG c ID"),t(e.data)})):d.a.post("https://slimmom-backend.goit.global/daily-rate",o(e)).then((function(e){console.log(e.data),console.log("LOG------------------------"),t(e.data),a()}))},render:function(e){var a=e.errors,t=e.touched,r=e.values;return Object(j.jsxs)(s.b,{className:c.a.formContainer,children:[Object(j.jsxs)("div",{className:c.a.formWrapper,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"height",className:c.a.formInput,children:"\u0420\u043e\u0441\u0442*"}),Object(j.jsx)(s.a,{value:r.height,name:"height",type:"text",className:c.a.field}),a.height&&t.height&&Object(j.jsx)("div",{className:c.a.fieldError,children:a.height}),Object(j.jsx)("label",{htmlFor:"age",className:c.a.formInput,children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442*"}),Object(j.jsx)(s.a,{value:r.age,name:"age",type:"text",className:c.a.field}),a.age&&t.age&&Object(j.jsx)("div",{className:c.a.fieldError,children:a.age}),Object(j.jsx)("label",{htmlFor:"weight",className:c.a.formInput,children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0432\u0435\u0441*"}),Object(j.jsx)(s.a,{name:"weight",type:"text",className:c.a.field}),a.weight&&t.weight&&Object(j.jsx)("div",{className:c.a.fieldError,children:a.weight})]}),Object(j.jsxs)("div",{className:c.a.radioWrapper,children:[Object(j.jsx)("label",{htmlFor:"desiredWeight",className:c.a.formInput,children:"\u0416\u0435\u043b\u0430\u0435\u043c\u044b\u0439 \u0432\u0435\u0441*"}),Object(j.jsx)(s.a,{name:"desiredWeight",type:"text",className:c.a.field}),a.desiredWeight&&t.desiredWeight&&Object(j.jsx)("div",{className:c.a.fieldError,children:a.desiredWeight}),Object(j.jsx)("div",{id:"my-radio-group",className:c.a.formInput,children:"\u0413\u0440\u0443\u043f\u043f\u0430 \u043a\u0440\u043e\u0432\u0438*"}),Object(j.jsxs)("div",{role:"group","aria-labelledby":"my-radio-group",className:c.a.radio,children:[Object(j.jsxs)("label",{className:c.a.formRadio,children:[Object(j.jsx)(s.a,{type:"radio",name:"bloodType",value:"1",className:c.a.customRadio}),Object(j.jsx)("span",{}),Object(j.jsx)("small",{children:"1"})]}),Object(j.jsxs)("label",{className:c.a.formRadio,children:[Object(j.jsx)(s.a,{type:"radio",name:"bloodType",value:"2",className:c.a.customRadio}),Object(j.jsx)("span",{}),Object(j.jsx)("small",{children:"2"})]}),Object(j.jsxs)("label",{className:c.a.formRadio,children:[Object(j.jsx)(s.a,{type:"radio",name:"bloodType",value:"3",className:c.a.customRadio}),Object(j.jsx)("span",{}),Object(j.jsx)("small",{children:"3"})]}),Object(j.jsxs)("label",{className:c.a.formRadio,children:[Object(j.jsx)(s.a,{type:"radio",name:"bloodType",value:"4",className:c.a.customRadio}),Object(j.jsx)("span",{}),Object(j.jsx)("small",{children:"4"})]})]})]})]}),Object(j.jsx)("button",{type:"submit",className:c.a.button,children:"\u041f\u043e\u0445\u0443\u0434\u0435\u0442\u044c"})]})}})})]})})}},249:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return l}));var s=t(111),r=t(109),i=t(1);function l(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{}),Object(i.jsx)(s.a,{})]})}}}]);
//# sourceMappingURL=5.c7bb4fa7.chunk.js.map