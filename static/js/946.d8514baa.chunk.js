"use strict";(self.webpackChunknova_poshta_work_with_api=self.webpackChunknova_poshta_work_with_api||[]).push([[946],{4122:function(t,e,n){n.d(e,{C:function(){return i},T:function(){return r}});var a=n(9434),r=function(){return(0,a.I0)()},i=a.v9},4946:function(t,e,n){n.r(e),n.d(e,{default:function(){return F}});var a=n(2791),r=n(4122),i=function(t){return t.departmentsState.citiesData.data},o=function(t){return t.departmentsState.departmentsData.data},c=function(t){return t.departmentsState.departmentsData.info},s=function(t){return t.departmentsState.loading},u=function(t){return t.departmentsState.page},l=function(t){return t.departmentsState.departmentRef},d=function(t){return t.departmentsState.departmentsSelectValue},f=function(t){return t.departmentsState.city},p=n(5757),m=n(9439),h=n(8077),x=n(8639),v=n(1413),g=n(3457),j=n(4554),Z=(0,g.Z)(j.Z)({display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"2rem"}),C={container:function(t){return(0,v.Z)((0,v.Z)({},t),{},{width:"100%",maxWidth:"600px"})}},y=n(5511),b=n(3329),S=function(){var t=(0,a.useState)(""),e=(0,m.Z)(t,2),n=e[0],o=e[1],c=(0,r.C)(f),u=(0,r.C)(s),l=(0,r.T)();(0,a.useEffect)((function(){l((0,p.f)())}),[l]);var d=(0,r.C)(i),v=n&&d.filter((function(t){return t.Description.toLowerCase().startsWith(n.toLowerCase())})).map((function(t){var e=t.Description;return{value:e,label:e}}));return u?(0,b.jsx)(y.aN,{}):(0,b.jsx)(Z,{children:(0,b.jsx)(x.ZP,{isSearchable:!0,styles:C,onInputChange:function(t){o(t)},onChange:function(t){return function(t){t&&(l((0,h.nc)(t.value)),l((0,h.ac)("")),l((0,h.YA)(1)),l((0,h.lI)({value:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0457 \u0441\u0442\u043e\u0440i\u043d\u043a\u0438",label:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0457 \u0441\u0442\u043e\u0440i\u043d\u043a\u0438"})))}(t)},name:"cities",required:!0,placeholder:"\u041f\u043e\u0447\u043di\u0442\u044c \u0432\u0432\u043e\u0434\u0438\u0442\u0438 \u043cic\u0442\u043e..",noOptionsMessage:function(){return"\u041d\u0435\u043c\u0430\u0454 \u0442\u0430\u043a\u043e\u0433\u043e \u043c\u0456\u0441\u0442\u0430"},options:v||[{value:c,label:c}],maxMenuHeight:200})})},w=n(3433),D=(0,g.Z)(j.Z)({display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"2rem"}),I={container:function(t){return(0,v.Z)((0,v.Z)({},t),{},{width:"100%",maxWidth:"600px"})}},_=function(){var t=(0,r.T)(),e=(0,r.C)(o),n=(0,r.C)(d),a=e.length>0&&[{value:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0457 \u0441\u0442\u043e\u0440i\u043d\u043a\u0438",label:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0457 \u0441\u0442\u043e\u0440i\u043d\u043a\u0438"}].concat((0,w.Z)(e.map((function(t){var e=t.Description;return{value:e,label:e,Ref:t.Ref}}))));return(0,b.jsx)(D,{children:(0,b.jsx)(x.ZP,{onChange:function(e){var n;(n=e)&&(t((0,h.ac)(n.Ref)),t((0,h.lI)({value:n.value,label:n.value,Ref:n.Ref})))},styles:I,name:"departments",required:!0,isDisabled:e.length<1,value:n,noOptionsMessage:function(){return"\u041d\u0435 \u043e\u0431\u0440\u0430\u043d\u043e \u043ci\u0441\u0442\u043e"},options:a||[{value:"",label:""}],maxMenuHeight:200})})},B=n(6314),R=n(7246),T=n(5193),k=(0,g.Z)(j.Z)({display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"2rem"}),M=function(){var t=(0,r.T)(),e=(0,T.Z)("(min-width:768px)")?"large":"small",n=(0,r.C)(c).totalCount,a=(0,r.C)(u);return(0,b.jsx)(k,{children:(0,b.jsx)(B.Z,{spacing:2,children:(0,b.jsx)(R.Z,{size:e,onChange:function(e,n){return function(e){t((0,h.YA)(e)),t((0,h.ac)("")),t((0,h.lI)({value:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0457 \u0441\u0442\u043e\u0440i\u043d\u043a\u0438",label:"\u0412\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0457 \u0441\u0442\u043e\u0440i\u043d\u043a\u0438"}))}(n)},count:Math.ceil(n/12),page:a,shape:"rounded"})})})},P=n(1889),W=n(7621),z=n(9504),O=n(890),q=n(6382),A=function(t){var e=t.departmentsData,n=(0,r.C)(s),a={Monday:"\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a",Tuesday:"\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a",Wednesday:"\u0421\u0435\u0440\u0435\u0434\u0430",Thursday:"\u0427\u0435\u0442\u0432\u0435\u0440",Friday:"\u041f'\u044f\u0442\u043d\u0438\u0446\u044f",Saturday:"\u0421\u0443\u0431\u043e\u0442\u0430",Sunday:"\u041d\u0435\u0434\u0456\u043b\u044f"};return n?(0,b.jsx)(y.aN,{}):(0,b.jsx)(P.ZP,{container:!0,spacing:2,children:e.map((function(t){var e=t.Description,n=t.CityDescription,r=t.Schedule,i=t.Phone;return(0,b.jsx)(P.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,b.jsx)(W.Z,{sx:{height:"100%"},children:(0,b.jsxs)(z.Z,{children:[(0,b.jsx)(O.Z,{variant:"h6",component:"p",gutterBottom:!0,children:"".concat(e,", ").concat(n)}),i&&(0,b.jsx)(O.Z,{sx:{fontSize:16},component:"p",gutterBottom:!0,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: +".concat(i)}),(0,b.jsx)(O.Z,{sx:{fontSize:18,color:"#1976d2"},component:"p",gutterBottom:!0,children:"\u0413\u0440\u0430\u0444i\u043a \u0440\u043e\u0431\u043e\u0442\u0438:"}),Object.entries(r).map((function(t){var e=(0,m.Z)(t,2),n=e[0],r=e[1];return(0,b.jsx)(O.Z,{component:"p",gutterBottom:!0,variant:"body2",children:"".concat(a[n],": ").concat(r)},(0,q.x0)())}))]})})},(0,q.x0)())}))})},E=n(9164),F=function(){var t=(0,r.T)(),e=(0,r.C)(o),n=(0,r.C)(u),i=(0,r.C)(l),c=(0,r.C)(f);(0,a.useEffect)((function(){c&&t((0,p.P)({city:c,page:n}))}),[t,c,n]);var s=e.filter((function(t){return t.Ref===i})),d=i?s:e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y.h4,{}),(0,b.jsxs)("section",{children:[(0,b.jsx)(O.Z,{"aria-label":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0435\u043a\u0446ii\u0421\u043f\u0438\u0441\u043e\u043a \u0432i\u0434\u0434i\u043b\u0435\u043d\u044c",variant:"h1",component:"h2",sx:{display:"none"},children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0432i\u0434\u0434i\u043b\u0435\u043d\u044c"}),(0,b.jsxs)(E.Z,{sx:{pt:"3rem",pb:"3rem"},children:[(0,b.jsx)(S,{}),(0,b.jsx)(_,{}),e.length>0&&(0,b.jsx)(M,{}),c&&(0,b.jsx)(A,{departmentsData:d})]})]})]})}}}]);
//# sourceMappingURL=946.d8514baa.chunk.js.map