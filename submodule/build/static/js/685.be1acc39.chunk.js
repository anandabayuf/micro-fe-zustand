"use strict";(self.webpackChunksubmoudule=self.webpackChunksubmoudule||[]).push([[685],{1685:function(e,n,t){t.r(n);var r,c,o=t(8416),u=t.n(o),i=t(1250),a=t(2083),s=t(1413),l=t(184),d=u().lazy((function(){return Promise.all([t.e(412),t.e(403)]).then(t.bind(t,9403))})),f=[{path:"/",element:(0,l.jsx)(d,{})},{path:"*",element:(0,l.jsx)(d,{})}],p=function(){return(0,l.jsx)(u().Suspense,{fallback:"Loading...",children:(0,l.jsx)(a.Routes,{children:f.map((function(e){return(0,o.createElement)(a.Route,(0,s.Z)((0,s.Z)({},e),{},{key:e.path}))}))})})},h=function(){return(0,l.jsx)(a.BrowserRouter,{children:(0,l.jsx)(p,{})})},v=function(e){e&&e instanceof Function&&t.e(165).then(t.t.bind(t,3165,23)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,u=n.getTTFB;t(e),r(e),c(e),o(e),u(e)}))},y=t(1593),b=t(9250),k=t(2860),m=t(4942),g=t(9991),T=t(5395),S=t(3076),w=t(9071),P=(0,w.createApi)({reducerPath:"publicKeySlice",baseQuery:(0,w.fetchBaseQuery)({baseUrl:S.z9}),endpoints:function(e){return{getPublicKey:e.query({query:function(){return"/public/publickey"}})}}}),A=(P.useGetPublicKeyQuery,P),x=(r={auth:g.ZP},(0,m.Z)(r,T.Z.reducerPath,T.Z.reducer),(0,m.Z)(r,A.reducerPath,A.reducer),r),Z=(0,k.combineReducers)(x),j=t(8690),K=t.n(j),L=t(1734),I=t(5263),C=[function(e){return function(e){return function(n){e(n)}}}],N=[T.Z.middleware,A.middleware],Q=(0,b.configureStore)({reducer:function(e,n){return"auth/removeAccessToken"===n.type?Z(void 0,n):Z(e,n)},middleware:(c=(new b.MiddlewareArray).concat(L.Z,K())).concat.apply(c,N.concat(C)),devTools:!0});(0,I.setupListeners)(Q.dispatch);var B=Q;i.createRoot(document.getElementById("root")).render((0,l.jsx)(u().StrictMode,{children:(0,l.jsx)(y.Provider,{store:B,children:(0,l.jsx)(h,{})})})),v()},4017:function(e,n,t){t.d(n,{i:function(){return c},D:function(){return o}});var r=function(e){return e.ALL="all",e.CMS="cms",e.PENDINGTASK="PENDINGTASK",e}({}),c="container",o=[r.ALL,r.CMS,r.PENDINGTASK]},5217:function(e,n,t){t.d(n,{e:function(){return r}});var r=function(e){for(var n=document.cookie.split(";"),t=0;t<n.length;t++){var r=n[t].split("=");if(console.log(r),r[0].trim()===e)return r[1]}}},9991:function(e,n,t){t.d(n,{ZP:function(){return k},yL:function(){return y},M8:function(){return v},BG:function(){return b}});var r=t(1593).useSelector,c=t(9367),o=t(5266),u=t.n(o);t(5103);function i(e){return u().decode(e)}var a=t(9250),s=t(8210),l=t.n(s),d=t(8634),f={accessToken:(0,d.e)("accessToken"),publicKey:(0,d.e)("publicKey"),userInfo:i((0,d.e)("accessToken"))},p=(0,a.createSlice)({name:"auth",initialState:f,reducers:{setAccessToken:function(e,n){return(0,d.d)("accessToken",n.payload),l()(e,(function(e){e.accessToken=n.payload,e.userInfo=i(n.payload)}))},setPublicKey:function(e,n){return(0,d.d)("publicKey",n.payload),l()(e,(function(e){e.publicKey=n.payload}))},removeAccessToken:function(e){return(0,c.Qd)("accessToken"),l()(e,(function(e){e.accessToken=null,e.userInfo=null}))}}}),h=p.actions,v=h.setAccessToken,y=h.removeAccessToken,b=(h.setPublicKey,function(){return r((function(e){return e.auth}))}),k=p.reducer},3076:function(e,n,t){t.d(n,{CT:function(){return r},z9:function(){return c}});var r="http://34.101.158.242:8006",c="http://34.101.71.39:9037"},5395:function(e,n,t){var r=t(4165),c=t(5861),o=t(9991),u=t(9367),i=t(9071),a=t(3076),s=t(4017),l=t(5217),d=t(8634),f=(0,i.fetchBaseQuery)({baseUrl:a.CT,prepareHeaders:function(e,n){var t=n.getState();if("login"!==n.endpoint){var r=t.auth.accessToken||(0,l.e)("accessToken");e.set("Authorization","Bearer ".concat(r))}return e}}),p=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n,t,c){var i,a,s,l,p,h,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(n,t,c);case 2:if(l=e.sent,null===(i=l.error)||void 0===i||!i.data){e.next=8;break}if(!1!==(null===(p=l.error)||void 0===p||null===(h=p.data)||void 0===h?void 0:h.business)){e.next=6;break}return e.abrupt("return",l);case 6:"jwtverification.exception.001"===l.error.data.message&&(t.dispatch((0,o.yL)()),(0,u.Qd)("accessToken"));case 8:return(v=null===(a=l.meta)||void 0===a||null===(s=a.response)||void 0===s?void 0:s.headers.get("access_token"))&&(t.dispatch((0,o.M8)(v)),(0,d.d)("accessToken",v)),e.abrupt("return",l);case 11:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),h=(0,i.createApi)({baseQuery:p,tagTypes:s.D,endpoints:function(){return{}}});n.Z=h},8634:function(e,n,t){t.d(n,{d:function(){return o},e:function(){return c}});var r="http://192.168.56.99",c=function(e){for(var n=document.cookie.split(";"),t=0;t<n.length;t++){var r=n[t].split("=");if(r[0]===e)return r[1]}},o=function(e,n){var t=r.split("http://")[1];document.cookie="".concat(e,"=").concat(n,";domain=").concat(t)}},9367:function(e,n,t){t.d(n,{Qd:function(){return c}});var r=t(4017),c=function(e){try{var n=window.localStorage.getItem(r.i),t=JSON.parse(n);localStorage&&"object"===typeof t&&("string"===typeof e&&delete t[e],e instanceof Array&&e.forEach((function(e){return delete t[e]})),window.localStorage.setItem(r.i,JSON.stringify(t)))}catch(c){console.error("Error when remove local storage object item function is triggered - LocalStorageUtils. ".concat(c))}}}}]);
//# sourceMappingURL=685.be1acc39.chunk.js.map