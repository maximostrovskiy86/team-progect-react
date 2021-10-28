(this["webpackJsonpteam-progect-react"]=this["webpackJsonpteam-progect-react"]||[]).push([[1],{16:function(e,t,r){},20:function(e,t,r){},29:function(e,t,r){},42:function(e,t,r){},48:function(e,t,r){},5:function(e,t,r){"use strict";r.d(t,"b",(function(){return O})),r.d(t,"c",(function(){return m})),r.d(t,"a",(function(){return g}));var a=r(4),n=r(13),c=r(14),s=r.n(c),u=r(19),i=r(12),l=r.n(i);l.a.defaults.baseURL="https://slimmom-backend.goit.global";var o,d=function(e){l.a.defaults.headers.common.Authorization="Bearer ".concat(e)},j=function(){l.a.defaults.headers.common.Authorization=""},b=Object(n.b)("auth/register",function(){var e=Object(u.a)(s.a.mark((function e(t,r){var a,n,c,u,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,n=t.email,c=t.password,u=r.rejectWithValue,e.prev=2,e.next=5,l.a.post("/auth/register",{username:a,email:n,password:c});case 5:return e.next=7,l.a.post("/auth/login",{email:n,password:c});case 7:return i=e.sent,o=i.data,d(o.accessToken),e.abrupt("return",o);case 13:return e.prev=13,e.t0=e.catch(2),e.abrupt("return",u(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,r){return e.apply(this,arguments)}}()),h=Object(n.b)("auth/login",function(){var e=Object(u.a)(s.a.mark((function e(t,r){var a,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.rejectWithValue,e.prev=1,e.next=4,l.a.post("/auth/login",t);case 4:return n=e.sent,c=n.data,d(c.accessToken),e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",a(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}()),f=Object(n.b)("auth/logout",function(){var e=Object(u.a)(s.a.mark((function e(t,r){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.rejectWithValue,e.prev=1,e.next=4,l.a.post("/auth/logout",t);case 4:j(),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",a(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()),p=Object(n.b)("auth/refresh",function(){var e=Object(u.a)(s.a.mark((function e(t,r){var a,n,c,u,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.rejectWithValue,n=r.getState,c=n(),null!==(u=c.auth.accessToken)){e.next=5;break}return e.abrupt("return",a());case 5:return d(u),e.prev=6,e.next=9,l.a.post("/auth/refresh");case 9:return i=e.sent,o=i.data,e.abrupt("return",o);case 14:return e.prev=14,e.t0=e.catch(6),e.abrupt("return",a(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,r){return e.apply(this,arguments)}}()),g={register:b,logOut:f,logIn:h,refreshUser:p},O=Object(n.c)({name:"auth",initialState:{user:{username:null,email:null,id:null},accessToken:null,refreshToken:null,sid:null,isLoggedIn:!1,todaySummary:null,userData:null,isRefreshingUser:!1,error:null},extraReducers:(o={},Object(a.a)(o,g.register.pending,(function(e){e.error=null})),Object(a.a)(o,g.register.fulfilled,(function(e,t){e.user.username=t.payload.user.username,e.user.email=t.payload.user.email,e.user.id=t.payload.user.id,e.accessToken=t.payload.accessToken,e.refreshToken=t.payload.refreshToken,e.sid=t.payload.sid,e.todaySummary=t.payload.todaySummary,e.userData=t.payload.user.userData,e.isLoggedIn=!0})),Object(a.a)(o,g.register.rejected,(function(e,t){e.error=t.payload})),Object(a.a)(o,g.logIn.pending,(function(e){e.error=null})),Object(a.a)(o,g.logIn.fulfilled,(function(e,t){e.user.username=t.payload.user.username,e.user.email=t.payload.user.email,e.user.id=t.payload.user.id,e.accessToken=t.payload.accessToken,e.refreshToken=t.payload.refreshToken,e.sid=t.payload.sid,e.todaySummary=t.payload.todaySummary,e.userData=t.payload.user.userData,e.isLoggedIn=!0})),Object(a.a)(o,g.logIn.rejected,(function(e,t){e.error=t.payload})),Object(a.a)(o,g.logOut.pending,(function(e){e.error=null})),Object(a.a)(o,g.logOut.fulfilled,(function(e){e.user.username=null,e.user.email=null,e.user.id=null,e.accessToken=null,e.refreshToken=null,e.sid=null,e.todaySummary=null,e.userData=null,e.isLoggedIn=!1})),Object(a.a)(o,g.logOut.rejected,(function(e,t){e.user.username=null,e.user.email=null,e.user.id=null,e.accessToken=null,e.refreshToken=null,e.sid=null,e.todaySummary=null,e.userData=null,e.isLoggedIn=!1,e.error=t.payload})),Object(a.a)(o,g.refreshUser.pending,(function(e){e.isRefreshingUser=!0})),Object(a.a)(o,g.refreshUser.fulfilled,(function(e,t){e.accessToken=t.payload.accessToken,e.refreshToken=t.payload.refreshToken,e.sid=t.payload.sid,e.isLoggedIn=!0,e.isRefreshingUser=!1})),Object(a.a)(o,g.refreshUser.rejected,(function(e){e.isRefreshingUser=!1})),o)}).reducer,m={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserName:function(e){return e.auth.user.username},getIsRefreshingUser:function(e){return e.auth.isRefreshingUser}}},79:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(21),s=r.n(c),u=(r(48),r(10)),i=r(3),l=r(39),o=r(13),d=r(15),j=r(40),b=r.n(j),h=r(5),f={key:"auth",storage:b.a},p=Object(o.a)({reducer:{auth:Object(d.g)(f,h.b)},middleware:function(e){return e({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})},devTools:!1}),g=Object(d.h)(p),O=r(11),m=r(24),v=r(2),x=r(1),y=["children","restricted","redirectTo"];function k(e){var t=e.children,r=e.restricted,a=void 0!==r&&r,n=e.redirectTo,c=void 0===n?"/":n,s=Object(m.a)(e,y),u=Object(i.c)(h.c.getIsLoggedIn)&&a;return Object(x.jsx)(v.b,Object(O.a)(Object(O.a)({},s),{},{children:u?Object(x.jsx)(v.a,{to:c}):t}))}var T=["children","redirectTo"];function I(e){var t=e.children,r=e.redirectTo,a=void 0===r?"/":r,n=Object(m.a)(e,T),c=Object(i.c)(h.c.getIsLoggedIn);return Object(x.jsx)(v.b,Object(O.a)(Object(O.a)({},n),{},{children:c?t:Object(x.jsx)(v.a,{to:a})}))}var N=r(20),w=r.n(N),L=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.b,{className:w.a.nav,activeClassName:w.a.activeNav,to:"/login",exact:!0,children:"\u0412\u0445\u043e\u0434"}),Object(x.jsx)(u.b,{className:w.a.nav,activeClassName:w.a.activeNav,to:"/register",exact:!0,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})},U=r(16),S=r.n(U),R=function(){var e=Object(i.c)(h.c.getIsLoggedIn);return Object(x.jsxs)("nav",{children:[Object(x.jsx)(u.b,{className:S.a.nav,activeClassName:S.a.activeNav,to:"/",exact:!0,children:"Home"}),e&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u.b,{className:S.a.nav,activeClassName:S.a.activeNav,to:"/diary",exact:!0,children:"\u0414\u043d\u0435\u0432\u043d\u0438\u043a"}),Object(x.jsx)(u.b,{className:S.a.nav,activeClassName:S.a.activeNav,to:"/calculator",exact:!0,children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"})]})]})},z=r(29),C=r.n(z),D=function(){var e=Object(i.b)();return Object(x.jsx)("div",{className:C.a.userWrapper,children:Object(x.jsx)("button",{className:C.a.logBtn,type:"button",onClick:function(){e(h.a.logOut())},children:"logout"})})},W=r(42),V=r.n(W);function A(){var e=Object(i.c)(h.c.getIsLoggedIn);return Object(x.jsxs)("header",{className:V.a.headerWrapper,children:[Object(x.jsx)(R,{})," ",e?Object(x.jsx)(D,{}):Object(x.jsx)(L,{})]})}var B=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(8),r.e(4)]).then(r.bind(null,97))})),F=Object(a.lazy)((function(){return r.e(7).then(r.bind(null,98))})),E=Object(a.lazy)((function(){return r.e(6).then(r.bind(null,99))})),J=Object(a.lazy)((function(){return r.e(9).then(r.bind(null,95))})),P=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,96))}));function H(){var e=Object(i.b)(),t=Object(i.c)(h.c.getIsRefreshingUser);return Object(a.useEffect)((function(){}),[e]),!t&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(A,{}),Object(x.jsx)(v.d,{children:Object(x.jsxs)(a.Suspense,{fallback:Object(x.jsx)("div",{children:"loader"}),children:[Object(x.jsx)(k,{exact:!0,path:"/",children:Object(x.jsx)(B,{})}),Object(x.jsx)(k,{path:"/register",restricted:!0,children:Object(x.jsx)(F,{})}),Object(x.jsx)(k,{path:"/login",restricted:!0,redirectTo:"/diary",children:Object(x.jsx)(E,{})}),Object(x.jsx)(I,{path:"/diary",restricted:!0,redirectTo:"/login",children:Object(x.jsx)(J,{})}),Object(x.jsx)(I,{path:"/calculator",restricted:!0,redirectTo:"/login",children:Object(x.jsx)(P,{})}),Object(x.jsx)(v.a,{to:"/"})]})})]})}s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(i.a,{store:p,children:Object(x.jsx)(l.a,{loading:Object(x.jsx)("h2",{children:"...loading"}),persistor:g,children:Object(x.jsx)(u.a,{children:Object(x.jsx)(H,{})})})})}),document.getElementById("root"))}},[[79,2,3]]]);
//# sourceMappingURL=main.a484c3ac.chunk.js.map