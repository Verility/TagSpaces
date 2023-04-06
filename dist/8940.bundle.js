"use strict";(self.webpackChunktagspaces=self.webpackChunktagspaces||[]).push([[8940],{86002:(e,o,t)=>{var r=t(64836);o.Z=void 0;var a=r(t(64938)),s=t(85893),n=(0,a.default)((0,s.jsx)("path",{d:"M21 11h-1.5v-.5h-2v3h2V13H21v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zM8 10v5H6.5v-1.5h-2V15H3v-5c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm-1.5.5h-2V12h2v-1.5zm7 1.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-4V9h4c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM11 10.5v.75h2v-.75h-2zm2 2.25h-2v.75h2v-.75z"}),"Abc");o.Z=n},23508:(e,o,t)=>{var r=t(64836);o.Z=void 0;var a=r(t(64938)),s=t(85893),n=(0,a.default)((0,s.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");o.Z=n},52186:(e,o,t)=>{t.d(o,{Z:()=>s});var r=t(54235),a=t(85893);const s=(0,r.Z)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},58883:(e,o,t)=>{t.d(o,{Z:()=>s});var r=t(54235),a=t(85893);const s=(0,r.Z)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},86252:(e,o,t)=>{t.d(o,{Z:()=>R});var r=t(63366),a=t(87462),s=t(67294),n=(t(59864),t(86010)),i=t(94780),d=t(81719),c=t(78884),l=t(68354),u=t(3896),p=t(42248),m=t(42293),b=t(1588),f=t(34867);function h(e){return(0,f.Z)("MuiAccordion",e)}const v=(0,b.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);var x=t(85893);const g=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],Z=(0,d.ZP)(u.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${v.region}`]:o.region},o.root,!t.square&&o.rounded,!t.disableGutters&&o.gutters]}})((({theme:e})=>{const o={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],o),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],o)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${v.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${v.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),(({theme:e,ownerState:o})=>(0,a.Z)({},!o.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!o.disableGutters&&{[`&.${v.expanded}`]:{margin:"16px 0"}}))),R=s.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiAccordion"}),{children:d,className:u,defaultExpanded:b=!1,disabled:f=!1,disableGutters:v=!1,expanded:R,onChange:y,square:M=!1,TransitionComponent:C=l.Z,TransitionProps:A}=t,w=(0,r.Z)(t,g),[G,N]=(0,m.Z)({controlled:R,default:b,name:"Accordion",state:"expanded"}),S=s.useCallback((e=>{N(!G),y&&y(e,!G)}),[G,y,N]),[k,...z]=s.Children.toArray(d),V=s.useMemo((()=>({expanded:G,disabled:f,disableGutters:v,toggle:S})),[G,f,v,S]),j=(0,a.Z)({},t,{square:M,disabled:f,disableGutters:v,expanded:G}),$=(e=>{const{classes:o,square:t,expanded:r,disabled:a,disableGutters:s}=e,n={root:["root",!t&&"rounded",r&&"expanded",a&&"disabled",!s&&"gutters"],region:["region"]};return(0,i.Z)(n,h,o)})(j);return(0,x.jsxs)(Z,(0,a.Z)({className:(0,n.default)($.root,u),ref:o,ownerState:j,square:M},w,{children:[(0,x.jsx)(p.Z.Provider,{value:V,children:k}),(0,x.jsx)(C,(0,a.Z)({in:G,timeout:"auto"},A,{children:(0,x.jsx)("div",{"aria-labelledby":k.props.id,id:k.props["aria-controls"],role:"region",className:$.region,children:z})}))]}))}))},42248:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t(67294).createContext({})},30231:(e,o,t)=>{t.d(o,{Z:()=>h});var r=t(87462),a=t(63366),s=t(67294),n=t(86010),i=t(94780),d=t(81719),c=t(78884),l=t(1588),u=t(34867);function p(e){return(0,u.Z)("MuiAccordionDetails",e)}(0,l.Z)("MuiAccordionDetails",["root"]);var m=t(85893);const b=["className"],f=(0,d.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,o)=>o.root})((({theme:e})=>({padding:e.spacing(1,2,2)}))),h=s.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiAccordionDetails"}),{className:s}=t,d=(0,a.Z)(t,b),l=t,u=(e=>{const{classes:o}=e;return(0,i.Z)({root:["root"]},p,o)})(l);return(0,m.jsx)(f,(0,r.Z)({className:(0,n.default)(u.root,s),ref:o,ownerState:l},d))}))},50808:(e,o,t)=>{t.d(o,{Z:()=>R});var r=t(63366),a=t(87462),s=t(67294),n=t(86010),i=t(94780),d=t(81719),c=t(78884),l=t(45355),u=t(42248),p=t(1588),m=t(34867);function b(e){return(0,m.Z)("MuiAccordionSummary",e)}const f=(0,p.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var h=t(85893);const v=["children","className","expandIcon","focusVisibleClassName","onClick"],x=(0,d.ZP)(l.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,o)=>o.root})((({theme:e,ownerState:o})=>{const t={duration:e.transitions.duration.shortest};return(0,a.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${f.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${f.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${f.disabled})`]:{cursor:"pointer"}},!o.disableGutters&&{[`&.${f.expanded}`]:{minHeight:64}})})),g=(0,d.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,o)=>o.content})((({theme:e,ownerState:o})=>(0,a.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!o.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${f.expanded}`]:{margin:"20px 0"}}))),Z=(0,d.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,o)=>o.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${f.expanded}`]:{transform:"rotate(180deg)"}}))),R=s.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiAccordionSummary"}),{children:d,className:l,expandIcon:p,focusVisibleClassName:m,onClick:f}=t,R=(0,r.Z)(t,v),{disabled:y=!1,disableGutters:M,expanded:C,toggle:A}=s.useContext(u.Z),w=(0,a.Z)({},t,{expanded:C,disabled:y,disableGutters:M}),G=(e=>{const{classes:o,expanded:t,disabled:r,disableGutters:a}=e,s={root:["root",t&&"expanded",r&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]};return(0,i.Z)(s,b,o)})(w);return(0,h.jsxs)(x,(0,a.Z)({focusRipple:!1,disableRipple:!0,disabled:y,component:"div","aria-expanded":C,className:(0,n.default)(G.root,l),focusVisibleClassName:(0,n.default)(G.focusVisible,m),onClick:e=>{A&&A(e),f&&f(e)},ref:o,ownerState:w},R,{children:[(0,h.jsx)(g,{className:G.content,ownerState:w,children:d}),p&&(0,h.jsx)(Z,{className:G.expandIconWrapper,ownerState:w,children:p})]}))}))}}]);
//# sourceMappingURL=8940.bundle.js.map