(this["webpackJsonpteam-progect-react"]=this["webpackJsonpteam-progect-react"]||[]).push([[8],{142:function(e,a,t){e.exports={calculator:"DailyCaloriesForm_calculator__3oGJw",title:"DailyCaloriesForm_title__1A_5o",formContainer:"DailyCaloriesForm_formContainer__jePJv",formInput:"DailyCaloriesForm_formInput__16qcl",field:"DailyCaloriesForm_field__Tznlc",fieldError:"DailyCaloriesForm_fieldError__3bUDh",radio:"DailyCaloriesForm_radio__26DJz",formRadio:"DailyCaloriesForm_formRadio__3rfRO",button:"DailyCaloriesForm_button__1WKnu",sideBar__active:"DailyCaloriesForm_sideBar__active__1HZQ1",formWrapper:"DailyCaloriesForm_formWrapper__3ziEe",radioWrapper:"DailyCaloriesForm_radioWrapper__20B8N",global:"DailyCaloriesForm_global__2JmBt",container__active:"DailyCaloriesForm_container__active__25zaS",form:"DailyCaloriesForm_form__3qbro"}},149:function(e,a,t){"use strict";t(0);var r=t(150),s=t.n(r),i=t(6),l=t(18),c=t(9),o=t(120),d=t.n(o),n=t(1);a.a=function(e){var a=e.date,t=d()(a).format("YYYY-MM-DD"),r=Object(i.c)(c.b.getNotAllowedProducts),o=(Object(i.c)(l.b.getDailyRate),Object(i.c)(l.b.getDailyKcalLeft),Object(i.c)((function(e){return l.b.getDailyRateByDay(e,t)})));console.log(o);var m=function(e){return o?o.daySummary[e]:0};return Object(n.jsxs)("div",{className:s.a.sideBarContainer,children:[Object(n.jsxs)("div",{className:s.a.characteristicBox,children:[Object(n.jsxs)("p",{className:s.a.sideBarTitle,children:["\u0421\u0432\u043e\u0434\u043a\u0430 \u0437\u0430 ",d()(a).format("DD.MM.YYYY")]}),Object(n.jsxs)("ul",{className:s.a.sideBarList,children:[Object(n.jsx)("li",{className:s.a.sideBarItem,children:Object(n.jsxs)("p",{className:s.a.sideBarItem_text,children:["\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c",Object(n.jsxs)("span",{className:s.a.sideBarItem_span,children:[m("kcalLeft"),"\u043a\u043a\u0430\u043b"]})]})}),Object(n.jsx)("li",{className:s.a.sideBarItem,children:Object(n.jsxs)("p",{className:s.a.sideBarItem_text,children:["\u0423\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u043e",Object(n.jsxs)("span",{className:s.a.sideBarItem_span,children:[m("kcalConsumed")," \u043a\u043a\u0430\u043b"]})]})}),Object(n.jsx)("li",{className:s.a.sideBarItem,children:Object(n.jsxs)("p",{className:s.a.sideBarItem_text,children:["\u0414\u043d\u0435\u0432\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430",Object(n.jsxs)("span",{className:s.a.sideBarItem_span,children:[m("dailyRate")," \u043a\u043a\u0430\u043b"]})]})}),Object(n.jsx)("li",{className:s.a.sideBarItem,children:Object(n.jsxs)("p",{className:s.a.sideBarItem_text,children:["n% \u043e\u0442 \u043d\u043e\u0440\u043c\u044b",Object(n.jsxs)("span",{className:s.a.sideBarItem_span,children:[m("percentsOfDailyRate")," \u043a\u043a\u0430\u043b"]})]})})]})]}),Object(n.jsxs)("div",{className:s.a.notAllowedProductsBox,children:[Object(n.jsx)("p",{className:s.a.notAllowedProductsTitle,children:"\u041d\u0435\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b"}),Object(n.jsx)("p",{className:s.a.notAllowedProductsItems,children:r.slice(0,5).join(", ")})]})]})}},150:function(e,a,t){e.exports={sideBarContainer:"RightSideBar_sideBarContainer__37FUp",characteristicBox:"RightSideBar_characteristicBox__BSdWu",sideBarTitle:"RightSideBar_sideBarTitle__32LG8",sideBarList:"RightSideBar_sideBarList__20sWt",sideBarItem:"RightSideBar_sideBarItem__3r4GA",sideBarItem_text:"RightSideBar_sideBarItem_text__35MAV",notAllowedProductsTitle:"RightSideBar_notAllowedProductsTitle___7XWM",notAllowedProductsItems:"RightSideBar_notAllowedProductsItems__1AnCv",notAllowedProductsBox:"RightSideBar_notAllowedProductsBox__2sLXr"}},151:function(e,a,t){"use strict";t(0);var r=t(187),s=t(188),i=s.b().shape({height:s.a().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430").typeError("\u0424\u043e\u0440\u043c\u0430 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442, \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435").negative("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0442 2 \u0434\u043e 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").min(100,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0440\u043e\u0441\u0442 \u043e\u0442 100\u0441\u043c").max(250,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0440\u043e\u0441\u0442 \u0434\u043e 250\u0441\u043c").integer(),age:s.a().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430").typeError("\u0424\u043e\u0440\u043c\u0430 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442, \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435").min(18,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u043e\u0442 18 \u043b\u0435\u0442").max(99,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u0434\u043e 100 \u043b\u0435\u0442").integer(),weight:s.a().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430").typeError("\u0424\u043e\u0440\u043c\u0430 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442, \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435").min(20,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0432\u0435\u0441 \u043e\u0442 20 \u043a\u0433").max(500,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0432\u0435\u0441 \u0434\u043e 500 \u043a\u0433").integer(),desiredWeight:s.a().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430").typeError("\u0424\u043e\u0440\u043c\u0430 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442, \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435").min(20,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0436\u0435\u043b\u0430\u0435\u043c\u044b\u0439 \u0432\u0435\u0441 \u043e\u0442 20 \u043a\u0433").max(500,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0432\u0435\u0441 \u0434\u043e 500 \u043a\u0433").integer()}),l=t(142),c=t.n(l),o=t(7),d=t.n(o),n=t(6),m=t(9),j=t(18),b=t(1);a.a=function(e){var a=e.toggle,t=e.setValue,s=Object(n.c)(m.b.getIsLoggedIn),l=Object(n.c)(m.b.getUserId),o=Object(n.b)();console.log(l);var h=function(e){var a={};return Object.keys(e).map((function(t){return a[t]=Number(e[t])})),a};return Object(b.jsxs)("div",{className:c.a.calculator,children:[Object(b.jsx)("h1",{className:c.a.title,children:"\u041f\u0440\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0441\u0432\u043e\u044e \u0441\u0443\u0442\u043e\u0447\u043d\u0443\u044e \u043d\u043e\u0440\u043c\u0443 \u043a\u0430\u043b\u043e\u0440\u0438\u0439 \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441"}),Object(b.jsx)("div",{className:c.a.inputWrapper,children:Object(b.jsx)(r.c,{initialValues:{weight:"",height:"",age:"",desiredWeight:"",bloodType:""},validationSchema:i,onSubmit:function(e){s?o(j.a.rateDailyUser(h(e))):d.a.post("https://slimmom-backend.goit.global/daily-rate",h(e)).then((function(e){console.log(e.data),console.log("LOG------------------------"),t(e.data),a()}))},render:function(e){var a=e.errors,t=e.touched,s=e.values;return Object(b.jsxs)(r.b,{className:c.a.formContainer,children:[Object(b.jsxs)("div",{className:c.a.formWrapper,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"height",className:c.a.formInput,children:"\u0420\u043e\u0441\u0442*"}),Object(b.jsx)(r.a,{value:s.height,name:"height",type:"text",className:c.a.field}),a.height&&t.height&&Object(b.jsx)("div",{className:c.a.fieldError,children:a.height}),Object(b.jsx)("label",{htmlFor:"age",className:c.a.formInput,children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442*"}),Object(b.jsx)(r.a,{value:s.age,name:"age",type:"text",className:c.a.field}),a.age&&t.age&&Object(b.jsx)("div",{className:c.a.fieldError,children:a.age}),Object(b.jsx)("label",{htmlFor:"weight",className:c.a.formInput,children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0432\u0435\u0441*"}),Object(b.jsx)(r.a,{name:"weight",type:"text",className:c.a.field}),a.weight&&t.weight&&Object(b.jsx)("div",{className:c.a.fieldError,children:a.weight})]}),Object(b.jsxs)("div",{className:c.a.radioWrapper,children:[Object(b.jsx)("label",{htmlFor:"desiredWeight",className:c.a.formInput,children:"\u0416\u0435\u043b\u0430\u0435\u043c\u044b\u0439 \u0432\u0435\u0441*"}),Object(b.jsx)(r.a,{name:"desiredWeight",type:"text",className:c.a.field}),a.desiredWeight&&t.desiredWeight&&Object(b.jsx)("div",{className:c.a.fieldError,children:a.desiredWeight}),Object(b.jsx)("div",{id:"my-radio-group",className:c.a.formInput,children:"\u0413\u0440\u0443\u043f\u043f\u0430 \u043a\u0440\u043e\u0432\u0438*"}),Object(b.jsxs)("div",{role:"group","aria-labelledby":"my-radio-group",className:c.a.radio,children:[Object(b.jsxs)("label",{className:c.a.formRadio,children:[Object(b.jsx)(r.a,{type:"radio",name:"bloodType",value:"1",className:c.a.customRadio}),Object(b.jsx)("span",{}),Object(b.jsx)("small",{children:"1"})]}),Object(b.jsxs)("label",{className:c.a.formRadio,children:[Object(b.jsx)(r.a,{type:"radio",name:"bloodType",value:"2",className:c.a.customRadio}),Object(b.jsx)("span",{}),Object(b.jsx)("small",{children:"2"})]}),Object(b.jsxs)("label",{className:c.a.formRadio,children:[Object(b.jsx)(r.a,{type:"radio",name:"bloodType",value:"3",className:c.a.customRadio}),Object(b.jsx)("span",{}),Object(b.jsx)("small",{children:"3"})]}),Object(b.jsxs)("label",{className:c.a.formRadio,children:[Object(b.jsx)(r.a,{type:"radio",name:"bloodType",value:"4",className:c.a.customRadio}),Object(b.jsx)("span",{}),Object(b.jsx)("small",{children:"4"})]})]})]})]}),Object(b.jsx)("button",{type:"submit",className:c.a.button,children:"\u041f\u043e\u0445\u0443\u0434\u0435\u0442\u044c"})]})}})})]})}},356:function(e,a,t){e.exports={calcPageWrapper:"CalculatorPage_calcPageWrapper__Jj1Cl",calcPageContainer:"CalculatorPage_calcPageContainer__b0HTh",RightSideBarContainer:"CalculatorPage_RightSideBarContainer__3dk8p"}},364:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return o}));var r=t(356),s=t.n(r),i=t(151),l=t(149),c=(t(39),t(1));function o(){return Object(c.jsxs)("div",{className:s.a.calcPageWrapper,children:[Object(c.jsx)("div",{className:s.a.calcPageContainer,children:Object(c.jsx)(i.a,{})}),Object(c.jsx)("div",{className:s.a.RightSideBarContainer,children:Object(c.jsx)(l.a,{})})]})}}}]);
//# sourceMappingURL=8.54a84e11.chunk.js.map