"use strict";(self.webpackChunkioms_web=self.webpackChunkioms_web||[]).push([[3510],{3797:function(e,t,n){n(47313),n(40621);var s=n(95795),r=n(55585),i=n(69099),o=n(58467),l=n(46417);t.Z=function(e){var t=e.children,n=e.permission,a=e.unauthorized_page,c=void 0!==a&&a,d=e.withOtherDeps,u=void 0===d?function(){return!0}:d,h=(0,o.s0)();return(0,l.jsx)(l.Fragment,{children:s.Z.has_permission(n)&&u()?t:c?(0,l.jsx)(r.ZP,{status:"403",title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:(0,l.jsx)(i.Z,{onClick:function(){h("/",{replace:!0})},type:"primary",children:"Back Home"})}):(0,l.jsx)(l.Fragment,{children:" "})})}},54214:function(e,t,n){n.d(t,{_i:function(){return D},XN:function(){return S},fL:function(){return I}});var s=n(74165),r=n(15861),i=n(29439),o=n(66149),l=n(33604),a=n(96467),c=n(63366),d=n(87462),u=n(47313),h=n(83061),x=n(21921),g=n(17592),j=n(77342),f=n(61113),m=n(77430),p=n(32298);function _(e){return(0,p.Z)("MuiDialogContentText",e)}(0,m.Z)("MuiDialogContentText",["root"]);var b=n(46417),Z=["children","className"],y=(0,g.ZP)(f.Z,{shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),v=u.forwardRef((function(e,t){var n=(0,j.Z)({props:e,name:"MuiDialogContentText"}),s=n.className,r=(0,c.Z)(n,Z),i=function(e){var t=e.classes,n=(0,x.Z)({root:["root"]},_,t);return(0,d.Z)({},t,n)}(r);return(0,b.jsx)(y,(0,d.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:r,className:(0,h.Z)(i.root,s)},n,{classes:i}))})),E=n(83929),C=n(46330),P=n(4117),A=n(69099),R=n(61805),S={BL_CHARGE:{title:"BL Charge"},VOUCHER:{title:"Voucher"}},F=function(e){var t=e.action;return(0,b.jsxs)(b.Fragment,{children:["You are about to ",(0,b.jsx)("span",{style:{fontWeight:"bolder"},children:t})," "]})},D={VERIFY:{value:R.SU.VERIFIED,prompt_text:(0,b.jsx)(F,{action:"VERIFY"})},APPROVE:{value:R.SU.APPROVED,prompt_text:(0,b.jsx)(F,{action:"APPROVE"})},PAYMENTS:{value:R.SU.PAID,prompt_text:(0,b.jsx)(F,{action:"MAKE PAYMENTS"})},REJECT:{value:R.SU.REJECTED,prompt_text:(0,b.jsx)(F,{action:"REJECT"})}},I=function(e){var t=e.open,n=e.setOpen,c=e.unique_identifier,d=e.request_type,h=e.action,x=e.onConfirm,g=(0,u.useState)(!1),j=(0,i.Z)(g,2),m=j[0],p=j[1],_=(0,u.useState)(!1),Z=(0,i.Z)(_,2),y=Z[0],R=Z[1],S=function(){n(!1),p(!1)},F=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.next=3,x();case 3:t=e.sent,console.log("Success returned ",t),t&&S();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(o.Z,{fullWidth:!0,maxWidth:"xs",open:t,onClose:S,children:[(0,b.jsx)(l.Z,{children:"Are you sure"}),(0,b.jsx)(a.Z,{children:(0,b.jsxs)(v,{children:[(0,b.jsxs)("div",{children:[h.prompt_text," ",d.title," ",(0,b.jsx)("span",{style:{fontWeight:"bolder"},children:c}),", tick the box below if you are sure of this action"]}),(0,b.jsx)(E.Z,{control:(0,b.jsx)(C.Z,{checked:m,onChange:function(e){return p(e.target.checked)},name:"checked",color:"primary",size:"small"}),label:(0,b.jsx)(f.Z,{variant:"h6",children:"I am sure"})})]})}),(0,b.jsxs)(P.Z,{children:[(0,b.jsx)(A.Z,{color:"secondary",onClick:S,children:"Close"}),(0,b.jsx)(A.Z,{disabled:!m||y,onClick:F,children:"Yes"})]})]})})}},3510:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var s=n(29439),r=n(40621),i=n(9019),o=n(57829),l=n(75697),a=n(98466),c=n(69099),d=n(19536),u=n(42832),h=n(73319),x=n(61805),g=n(55585),j=n(81190),f=n(46417),m=function(e){var t=e.bl_charge;return console.log("Logger",t.status>=x.SU.VERIFIED&&null!==t.verified_by),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(j.Z,{progressDot:!0,current:t.status,direction:"vertical",items:[{title:"Requested",description:(0,f.jsxs)(f.Fragment,{children:["Requested by"," ",(0,f.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",t.created_by.first_name," ",t.created_by.last_name]})," ","at ",(0,f.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",(0,l.gg)(t.created_at)," "]})]})},{title:"Verified",description:(0,f.jsx)(f.Fragment,{children:t.status>=x.SU.VERIFIED&&null!==t.verified_by?(0,f.jsxs)(f.Fragment,{children:[" ","Verified by"," ",(0,f.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",t.verified_by.first_name," ",t.verified_by.last_name]})," ","at ",(0,f.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",(0,l.gg)(t.verified_at)," "]})," "]}):"Not verified"})},{title:"Approved",description:(0,f.jsx)(f.Fragment,{children:t.status>=x.SU.APPROVED&&null!==t.approved_by?(0,f.jsxs)(f.Fragment,{children:[" ","Approved by"," ",(0,f.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",t.approved_by.first_name," ",t.approved_by.last_name]})," ","at ",(0,f.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",(0,l.gg)(t.approved_at)," "]})]}):"Not Aprroved"})},{title:"Paid",description:(0,f.jsx)(f.Fragment,{children:t.status===x.SU.PAID&&null!==t.paid_by?(0,f.jsxs)(f.Fragment,{children:[" ","Payments done by"," ",(0,f.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",t.paid_by.first_name," ",t.paid_by.last_name]})," ","at ",(0,f.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",(0,l.gg)(t.paid_at)," "]})]}):"No payments done"})}]})})},p=n(4869),_=n(99743),b=n(3797),Z=n(54214),y=function(e){var t=e.bl_charge,n=e.editBlChargeStatus,s=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(b.Z,{permission:_._.BL_CHARGE_REJECT,children:(0,f.jsx)(c.Z,{variant:"outlined",color:"error",onClick:function(){return n(Z._i.REJECT)},children:"Reject"})})})};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(i.ZP,{container:!0,spacing:4,mb:3,mt:1,children:[(0,f.jsxs)(i.ZP,{item:!0,xs:7,children:[(0,f.jsx)(d.Z,{children:"Bill Of loading details"}),(0,f.jsxs)(i.ZP,{container:!0,spacing:4,mb:3,mt:1,children:[(0,f.jsx)(i.ZP,{item:!0,xs:6,children:(0,f.jsx)(h.k,{title:"Consignee Name",value:t.bill_of_loading.consignee_name})}),(0,f.jsx)(i.ZP,{item:!0,xs:6,children:(0,f.jsx)(h.k,{title:"Consignee Cellphone",value:t.bill_of_loading.consignee_cellphone})}),(0,f.jsx)(i.ZP,{item:!0,xs:6,children:(0,f.jsx)(h.k,{title:"Consignee Address",value:t.bill_of_loading.consignee_address})}),(0,f.jsx)(i.ZP,{item:!0,xs:6,children:(0,f.jsx)(h.k,{title:"Created At",value:(0,l.gg)(t.created_at)})})]})]}),(0,f.jsxs)(i.ZP,{item:!0,xs:5,children:[(0,f.jsx)(d.Z,{children:"Bl Charge History"}),t.status===x.SU.REJECTED?(0,f.jsx)(g.ZP,{status:"error",title:"Rejected",subTitle:(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(f.Fragment,{children:["Rejected by"," ",(0,f.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",t.rejected_by.first_name," ",t.rejected_by.last_name]})," ","at ",(0,f.jsxs)("span",{style:{fontWeight:"bold"},children:[" ",(0,l.gg)(t.rejected_at)," "]})]})})}):(0,f.jsx)(m,{bl_charge:t})]})]}),(0,f.jsx)(p.Z,{amount:t.amount}),(0,f.jsx)(i.ZP,{container:!0,spacing:4,mb:3,mt:1,alignItems:"center",justifyContent:"flex-end",children:(0,f.jsxs)(u.Z,{spacing:2,direction:"row",children:[(0,f.jsxs)(b.Z,{permission:_._.BL_CHARGE_VERIFY,withOtherDeps:function(){return t.status===x.SU.PENDING},children:[(0,f.jsx)(s,{}),(0,f.jsx)(c.Z,{variant:"outlined",color:"info",onClick:function(){return n(Z._i.VERIFY)},children:"Verify"})]}),(0,f.jsxs)(b.Z,{permission:_._.BL_CHARGE_APPROVE,withOtherDeps:function(){return t.status===x.SU.VERIFIED},children:[(0,f.jsx)(s,{}),(0,f.jsx)(c.Z,{variant:"outlined",color:"success",onClick:function(){return n(Z._i.APPROVE)},children:"Approve"})]}),(0,f.jsxs)(b.Z,{permission:_._.BL_CHARGE_PAY,withOtherDeps:function(){return t.status===x.SU.APPROVED},children:[(0,f.jsx)(s,{}),(0,f.jsx)(c.Z,{variant:"outlined",color:"primary",onClick:function(){return n(Z._i.PAYMENTS)},children:"Paid"})]})]})})]})},v=n(47313),E=n(8105),C=n(36594),P=n(29814),A=n(71415),R=function(e){var t=e.bl_charge,n=(0,v.useState)(!0),r=(0,s.Z)(n,2),o=r[0],l=r[1],a=(0,v.useState)([]),c=(0,s.Z)(a,2),d=c[0],u=c[1];return(0,v.useEffect)((function(){(0,C.xr)(t.id).then((function(e){console.log(e),u(e),l(!1)})).catch((function(e){console.log(e)}))}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(P.Ae,{isLoading:o,children:0===d.length?(0,f.jsx)(E.Z,{description:"No attachments"}):(0,f.jsx)(i.ZP,{container:!0,mb:3,mt:1,alignItems:"center",justifyContent:"flex-start",children:(0,f.jsx)(A.Z,{attachments:d})})})})},S=n(58467),F=n(77841),D=n(2135),I=[{label:(0,f.jsx)("div",{style:{padding:4},children:"Details"}),value:x.sy.DETAILS},{label:(0,f.jsx)("div",{style:{padding:4},children:"Attachments"}),value:x.sy.ATTACHMENTS}],T=function(){var e=(0,v.useState)(!0),t=(0,s.Z)(e,2),n=t[0],c=t[1],d=(0,v.useState)(null),u=(0,s.Z)(d,2),h=u[0],g=u[1],j=(0,v.useState)(x.sy.DETAILS),m=(0,s.Z)(j,2),p=m[0],_=m[1],b=(0,v.useState)(!1),E=(0,s.Z)(b,2),A=E[0],T=E[1],k=(0,v.useState)(null),V=(0,s.Z)(k,2),L=V[0],N=V[1],w=(0,S.s0)(),B=(0,S.UO)(),O=function(){(0,C.Gn)(B.charge_id).then((function(e){console.log(e),g(e),c(!1)})).catch((function(e){console.log(e),F.Z.error("Failed to load Bill of Loading charge details"),w("/bl-charges",{replace:!0})}))};return(0,v.useEffect)((function(){O()}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(P.tv,{isLoading:n,children:null!==h&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r.Z,{title:(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(i.ZP,{container:!0,spacing:3,alignItems:"center",children:[(0,f.jsxs)(i.ZP,{item:!0,xs:3,children:["Charge Number: #",h.charge_number]}),(0,f.jsxs)(i.ZP,{item:!0,xs:3,children:["Bl Number:"," ",(0,f.jsxs)(D.rU,{color:"blue",to:"/bls/view/"+h.bill_of_loading.id,children:["#",h.bill_of_loading.bl_number]})]}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:6,lg:6,sx:{ml:"auto"},children:(0,f.jsx)(i.ZP,{container:!0,alignItems:"center",justifyContent:"flex-end",pr:2,children:(0,l.AB)(h.status)})})]})}),content:!1,border:!1,boxShadow:!0,children:(0,f.jsxs)(o.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:[(0,f.jsx)(i.ZP,{container:!0,spacing:4,mb:3,mt:1,alignItems:"center",justifyContent:"center",children:(0,f.jsx)(a.Z,{style:{width:"60%"},block:!0,options:I,onChange:function(e){_(e)}})}),p===x.sy.DETAILS&&(0,f.jsx)(y,{bl_charge:h,editBlChargeStatus:function(e){return N(e),void T(!0)}}),p===x.sy.ATTACHMENTS&&(0,f.jsx)(R,{bl_charge:h})]})}),null!==L&&A?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(Z.fL,{open:A,setOpen:T,request_type:Z.XN.BL_CHARGE,unique_identifier:h.charge_number,action:L,onConfirm:function(){var e={status:L.value};return(0,C.HL)(B.charge_id,e).then((function(e){return console.log(e),F.Z.success("BL charge status updated successfully"),O(),!0})).catch((function(e){return F.Z.error("Failed to updated BL charge status"),console.log(e),!1}))}})}):(0,f.jsx)(f.Fragment,{})]})})})}}}]);