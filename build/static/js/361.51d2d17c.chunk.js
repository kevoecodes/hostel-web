"use strict";(self.webpackChunkioms_web=self.webpackChunkioms_web||[]).push([[361],{75697:function(e,n,t){t.d(n,{An:function(){return f},CI:function(){return a},Rn:function(){return h},Tj:function(){return l},Vo:function(){return p},gg:function(){return d},oB:function(){return m},un:function(){return Z}});var r=t(61805),i=t(66212),o=t(22098),s=t(54427),u=t(77841),c=t(46417),a=function(e){return e?(0,c.jsx)(i.Z,{color:"success",label:"Taken"}):(0,c.jsx)(i.Z,{color:"primary",label:"Open"})},l=function(e){return e===r.yd.PENDING?(0,c.jsx)(i.Z,{color:"secondary",label:"Pending"}):e===r.yd.ACCEPTED?(0,c.jsx)(i.Z,{color:"success",label:"Accepted"}):e===r.yd.REJECTED?(0,c.jsx)(i.Z,{color:"error",label:"Rejected"}):void 0},d=function(e){return new Date(e).toLocaleString()},f=function(e){return 1===e?"Admin":2===e?"User":void 0},h=function(e){(0,o.nD)().then((function(n){console.log(n),e(n)})).catch((function(e){console.log(e)}))},m=function(e){return e.toLocaleString("en-US",{style:"currency",currency:"TZS"})},p=function(e){e.response?401===e.response.status?(u.Z.error("Unauthorized request, please login again"),null!==s.VK&&(0,s.VK)("/login",{replace:!0}),localStorage.clear()):400===e.response.status||500===e.response.status||e.response&&429===e.response.status||console.log("Error occurred, status: "+e.response.status):u.Z.error("No network available, Please connect to a Network")};function Z(e){var n=e.slice(0,3),t=e.slice(3);return 9===t.length?{countryCode:n,phoneNumber:t}:{countryCode:"255",phoneNumber:"1".repeat(9)}}},77841:function(e,n,t){var r=t(15671),i=t(43144),o=t(54427),s=function(){function e(){(0,r.Z)(this,e)}return(0,i.Z)(e,[{key:"success",value:function(e){o.sp&&o.sp.enqueueSnackbar(e,{variant:"success"})}},{key:"error",value:function(e){o.sp&&o.sp.enqueueSnackbar(e,{variant:"error"})}},{key:"warning",value:function(e){o.sp&&o.sp.enqueueSnackbar(e,{variant:"warning"})}}]),e}();n.Z=new s},61361:function(e,n,t){t.r(n);var r=t(70885),i=t(47313),o=t(77841),s=t(58467),u=t(37401),c=t(22098),a=t(57829),l=t(97402),d=t(46417);n.default=function(){var e=(0,i.useState)(!1),n=(0,r.Z)(e,2),t=n[0],f=n[1],h=(0,i.useState)(!0),m=(0,r.Z)(h,2),p=m[0],Z=m[1],g=(0,i.useState)(null),v=(0,r.Z)(g,2),x=v[0],b=v[1],k=(0,s.UO)(),j=(0,s.s0)();return(0,i.useEffect)((function(){(0,c.vU)(k.role_id).then((function(e){console.log(e),b({title:e.title,permissions:e.permissions}),Z(!1)})).catch((function(e){console.log(e),o.Z.error("Failed to load role details"),j("/roles",{replace:!0})}))}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(l.Z,{title:"Adding role",content:!1,border:!1,boxShadow:!0,children:(0,d.jsx)(a.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:!p&&(0,d.jsx)(u.Z,{onSubmitForm:function(e){return function(e){f(!0),(0,c.bu)(k.role_id,e).then((function(e){console.log(e),o.Z.success("Role details edited successfully"),j("/roles",{replace:!0})})).catch((function(e){console.log(e),f(!1),o.Z.error("Failed to edit role details")}))}(e)},loading:t,intialPermissions:x.permissions,title:x.title})})})})}},37401:function(e,n,t){t.d(n,{Z:function(){return P}});var r=t(74165),i=t(15861),o=t(1413),s=t(70885),u=t(9019),c=t(42832),a=t(23306),l=t(37843),d=t(15480),f=t(19536),h=t(7410),m=t(28089),p=t(47313),Z=t(57829),g=t(46330),v=t(83929),x=t(46417);function b(e){var n=e.permissions,t=void 0===n?[]:n,r=e.title,i=e.onChangePermissionHandler,s=(0,x.jsx)(Z.Z,{sx:{display:"flex",flexDirection:"column",ml:3},children:t.map((function(e,n){return(0,x.jsx)(v.Z,{label:e.label,control:(0,x.jsx)(g.Z,{checked:e.checked,onChange:function(e){return t=e,r=n,console.log(t,r),void i((function(e){return e.map((function(e,n){return n===r?(0,o.Z)((0,o.Z)({},e),{},{checked:!e.checked}):e}))}));var t,r}})},n)}))});return(0,x.jsxs)("div",{children:[(0,x.jsx)(v.Z,{label:r,control:(0,x.jsx)(g.Z,{checked:t.every((function(e){return!0===e.checked})),indeterminate:t.some((function(e){return!0===e.checked})),onChange:function(e){var n=e.target.checked;i((function(e){return e.map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{checked:n})}))}))}})}),s]})}var k=t(69490),j=t(51406),C=t(77841),S=t(99743),P=function(e){var n=e.intialPermissions,t=void 0===n?[]:n,Z=e.onSubmitForm,g=e.loading,v=e.title,P=void 0===v?"":v;console.log(t,t.includes("1"));var y=(0,p.useState)(S.k.userCRUD_permissions().map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{checked:t.includes(e.value)})}))),w=(0,s.Z)(y,2),D=w[0],R=w[1],E=(0,p.useState)(S.k.blCRUD_permissions().map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{checked:t.includes(e.value)})}))),U=(0,s.Z)(E,2),T=U[0],A=U[1],_=(0,p.useState)(S.k.bl_chargesCRUD_permissions().map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{checked:t.includes(e.value)})}))),N=(0,s.Z)(_,2),V=N[0],q=N[1],F=(0,p.useState)(S.k.vouchersCRUD_permissions().map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{checked:t.includes(e.value)})}))),H=(0,s.Z)(F,2),I=H[0],O=H[1],B=(0,p.useState)(S.k.floatRequestCRUD_permissions().map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{checked:t.includes(e.value)})}))),J=(0,s.Z)(B,2),z=J[0],W=J[1];return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(h.J9,{initialValues:{title:P,permissions:[],submit:null},validationSchema:m.Ry().shape({title:m.Z_().max(255).required("Title is required")}),onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.setErrors,t.setStatus,t.setSubmitting,0!=(i=D.concat(T,V,I,z).filter((function(e){return!0===e.checked})).map((function(e){return e.value}))).length){e.next=5;break}return C.Z.warning("Atleast one permission must be chosen"),e.abrupt("return");case 5:n.permissions=i,Z(n);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,t=e.handleBlur,r=e.handleChange,i=e.handleSubmit,o=(e.isSubmitting,e.touched),s=e.values;return(0,x.jsxs)("form",{noValidate:!0,onSubmit:i,children:[(0,x.jsx)(u.ZP,{container:!0,spacing:3,mb:3,children:(0,x.jsx)(u.ZP,{item:!0,xs:6,children:(0,x.jsxs)(c.Z,{spacing:1,children:[(0,x.jsx)(a.Z,{htmlFor:"bootstrap",children:"Role Title"}),(0,x.jsx)(l.Z,{id:"email-login",type:"text",value:s.title,name:"title",onBlur:t,onChange:r,placeholder:"eg. Admin",fullWidth:!0,error:Boolean(o.title&&n.title)}),o.title&&n.title&&(0,x.jsx)(d.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.title})]})})}),(0,x.jsx)(f.Z,{light:!0,variant:"fullWidth",mb:3,children:"Permissions Manager"}),(0,x.jsxs)(u.ZP,{container:!0,spacing:3,mb:3,p:3,children:[(0,x.jsx)(u.ZP,{item:!0,xs:3,children:(0,x.jsx)(b,{title:"Users CRUD",permissions:D,onChangePermissionHandler:R})}),(0,x.jsx)(u.ZP,{item:!0,xs:3,children:(0,x.jsx)(b,{title:"Bls CRUD",permissions:T,onChangePermissionHandler:A})}),(0,x.jsx)(u.ZP,{item:!0,xs:3,children:(0,x.jsx)(b,{title:"Bl Charges CRUD",permissions:V,onChangePermissionHandler:q})}),(0,x.jsx)(u.ZP,{item:!0,xs:3,children:(0,x.jsx)(b,{title:"Vouchers CRUD",permissions:I,onChangePermissionHandler:O})}),(0,x.jsx)(u.ZP,{item:!0,xs:3,children:(0,x.jsx)(b,{title:"Float Request CRUD",permissions:z,onChangePermissionHandler:W})})]}),(0,x.jsx)(u.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",mg:3,children:(0,x.jsx)(u.ZP,{item:!0,xs:6,children:(0,x.jsx)(k.Z,{children:(0,x.jsx)(j.Z,{disableElevation:!0,loading:g,disabled:g,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Submit"})})})})]})}})})}},22098:function(e,n,t){t.d(n,{LK:function(){return j},kA:function(){return g},bu:function(){return v},Um:function(){return p},Bf:function(){return k},Ar:function(){return b},vU:function(){return x},nD:function(){return Z},gi:function(){return m},rW:function(){return f},Qb:function(){return l},OP:function(){return h},yi:function(){return C},vy:function(){return d}});var r=t(56573),i="http://161.35.210.153:8500/",o=t(75697);function s(e,n){return new Promise((function(t,s){r.Z.post(i+e,n).then((function(e){e.headers,t(e.data)})).catch((function(e){(0,o.Vo)(e),s(e)}))}))}function u(e){return new Promise((function(n,t){r.Z.get(i+e,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){n(e.data)})).catch((function(e){(0,o.Vo)(e),t(e)}))}))}function c(e,n){return new Promise((function(t,s){r.Z.post(i+e,n,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){t(e.data)})).catch((function(e){(0,o.Vo)(e),s(e)}))}))}function a(e,n){return new Promise((function(t,s){r.Z.put(i+e,n,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){t(e.data)})).catch((function(e){(0,o.Vo)(e),s(e)}))}))}function l(e,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r={};return""!==t&&(r.mfaCode=t),s("api/auth/login-user",{email:e,password:n},!1)}function d(e,n,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i={};return""!==r&&(i.mfaCode=r),c("api/auth/reset-password/"+t,{password:e,confirm_password:n},!1)}function f(){return u("api/v1/users-list/")}function h(e){return c("api/v1/register-user",e)}function m(e){return u("api/v1/user/"+e)}function p(e,n){return a("api/v1/user/"+e,n)}function Z(){return u("api/v1/roles")}function g(e){return c("api/v1/roles",e)}function v(e,n){return a("api/v1/role/"+e,n)}function x(e){return u("api/v1/role/"+e)}function b(){return u("api/v1/hostels-list/")}function k(){return u("api/v1/booked-hostels-list/")}function j(e){return a("api/v1/accept-hostel-book/"+e,{})}function C(e){return a("api/v1/reject-hostel-book/"+e,{})}},61805:function(e,n,t){t.d(n,{J:function(){return i},yd:function(){return r}});var r={PENDING:0,ACCEPTED:1,REJECTED:2},i={TODAY:"today",THIS_WEEK:"this_week",MONTHLY:"monthly"}}}]);