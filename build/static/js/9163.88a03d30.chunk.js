"use strict";(self.webpackChunkioms_web=self.webpackChunkioms_web||[]).push([[9163],{99163:function(e,n,s){s.r(n);var t=s(29439),l=s(58467),i=s(22778),o=s(47313),r=s(75697),a=s(36594),u=s(77841),c=s(40621),d=s(57829),f=s(46417);n.default=function(){var e=(0,o.useState)([]),n=(0,t.Z)(e,2),s=n[0],m=n[1],h=(0,o.useState)(null),Z=(0,t.Z)(h,2),_=Z[0],p=Z[1],x=(0,o.useState)(!1),b=(0,t.Z)(x,2),g=b[0],S=(b[1],(0,o.useState)(!0)),w=(0,t.Z)(S,2),j=w[0],k=w[1],F=(0,l.UO)(),U=(0,l.s0)();return(0,o.useEffect)((function(){(0,r.Rn)(m),(0,a.gi)(F.user_id).then((function(e){p({first_name:e.first_name,last_name:e.last_name,cellphone:e.cellphone,email:e.email,role:null!==e.role?e.role.id:""}),k(!1)})).catch((function(e){console.log(e),u.Z.error("Failed to load user details"),U("/users",{replace:!0})}))}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(c.Z,{title:"Editing a User",content:!1,border:!1,boxShadow:!0,children:(0,f.jsx)(d.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:!j&&(0,f.jsx)(i.Z,{initialValues:_,role_options:s,onSubmitForm:function(e){return function(e){(0,a.Um)(F.user_id,e).then((function(e){console.log(e),u.Z.success("User details edited successfully"),U("/users",{replace:!0})})).catch((function(e){console.log(e),u.Z.error("Failed to edit user details")}))}(e)},initial_role:_.role,loading:g})})})})}}}]);