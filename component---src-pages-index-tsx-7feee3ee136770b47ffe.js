(self.webpackChunkmunchkin_site=self.webpackChunkmunchkin_site||[]).push([[691],{4393:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return et}});var n=o(9756),r=o(2122),i=o(7294),a=o(5505),l=o(4434),s=o(8057),c=o(7619),u=o(4973),d=o(5540);function p(e){return(0,u.Z)("MuiContainer",e)}(0,d.Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var m=o(2020),h=o(5893);const f=(0,c.ZP)("div",{},{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,r.Z)({},t.root,t[`maxWidth${(0,m.Z)(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters)}})((({theme:e,styleProps:t})=>(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,styleProps:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,o)=>{const n=e.breakpoints.values[o];return 0!==n&&(t[e.breakpoints.up(o)]={maxWidth:`${n}${e.breakpoints.unit}`}),t}),{})),(({theme:e,styleProps:t})=>(0,r.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})));var v=i.forwardRef((function(e,t){const o=(0,s.Z)({props:e,name:"MuiContainer"}),{className:i,component:c="div",disableGutters:u=!1,fixed:d=!1,maxWidth:v="lg"}=o,b=(0,n.Z)(o,["className","component","disableGutters","fixed","maxWidth"]),g=(0,r.Z)({},o,{component:c,disableGutters:u,fixed:d,maxWidth:v}),x=(e=>{const{classes:t,fixed:o,disableGutters:n,maxWidth:r}=e,i={root:["root",r&&`maxWidth${(0,m.Z)(String(r))}`,o&&"fixed",n&&"disableGutters"]};return(0,l.Z)(i,p,t)})(g);return(0,h.jsx)(f,(0,r.Z)({as:c,styleProps:g,className:(0,a.Z)(x.root,i),ref:t},b))})),b=o(6095);function g(e){return(0,u.Z)("MuiPaper",e)}(0,d.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const x=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},y=(0,c.ZP)("div",{},{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,r.Z)({},t.root,t[o.variant],!o.square&&t.rounded,"elevation"===o.variant&&t[`elevation${o.elevation}`])}})((({theme:e,styleProps:t})=>(0,r.Z)({backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${e.palette.divider}`},"elevation"===t.variant&&(0,r.Z)({boxShadow:e.shadows[t.elevation]},"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,b.Fq)("#fff",x(t.elevation))}, ${(0,b.Fq)("#fff",x(t.elevation))})`}))));var Z=i.forwardRef((function(e,t){const o=(0,s.Z)({props:e,name:"MuiPaper"}),{className:i,component:c="div",elevation:u=1,square:d=!1,variant:p="elevation"}=o,m=(0,n.Z)(o,["className","component","elevation","square","variant"]),f=(0,r.Z)({},o,{component:c,elevation:u,square:d,variant:p}),v=(e=>{const{square:t,elevation:o,variant:n,classes:r}=e,i={root:["root",n,!t&&"rounded","elevation"===n&&`elevation${o}`]};return(0,l.Z)(i,g,r)})(f);return(0,h.jsx)(y,(0,r.Z)({as:c,styleProps:f,className:(0,a.Z)(v.root,i),ref:t},m))}));function S(e){return(0,u.Z)("MuiAppBar",e)}(0,d.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const k=(0,c.ZP)(Z,{},{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,r.Z)({},t.root,t[`position${(0,m.Z)(o.position)}`],t[`color${(0,m.Z)(o.color)}`])}})((({theme:e,styleProps:t})=>{const o="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,r.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},"default"===t.color&&{backgroundColor:o,color:e.palette.getContrastText(o)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"transparent"===t.color&&{backgroundColor:"transparent",color:"inherit"})}));var R=i.forwardRef((function(e,t){const o=(0,s.Z)({props:e,name:"MuiAppBar"}),{className:i,color:c="primary",position:u="fixed"}=o,d=(0,n.Z)(o,["className","color","position"]),p=(0,r.Z)({},o,{color:c,position:u}),f=(e=>{const{color:t,position:o,classes:n}=e,r={root:["root",`color${(0,m.Z)(t)}`,`position${(0,m.Z)(o)}`]};return(0,l.Z)(r,S,n)})(p);return(0,h.jsx)(k,(0,r.Z)({square:!0,component:"header",styleProps:p,elevation:4,className:(0,a.Z)(f.root,i,"fixed"===u&&"mui-fixed"),ref:t},d))}));function z(e){return(0,u.Z)("MuiToolbar",e)}(0,d.Z)("MuiToolbar",["root","gutters","regular","dense"]);const P=(0,c.ZP)("div",{},{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,r.Z)({},t.root,!o.disableGutters&&t.gutters,t[o.variant])}})((({theme:e,styleProps:t})=>(0,r.Z)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===t.variant&&{minHeight:48})),(({theme:e,styleProps:t})=>"regular"===t.variant&&e.mixins.toolbar));var M=i.forwardRef((function(e,t){const o=(0,s.Z)({props:e,name:"MuiToolbar"}),{className:i,component:c="div",disableGutters:u=!1,variant:d="regular"}=o,p=(0,n.Z)(o,["className","component","disableGutters","variant"]),m=(0,r.Z)({},o,{component:c,disableGutters:u,variant:d}),f=(e=>{const{classes:t,disableGutters:o,variant:n}=e,r={root:["root",!o&&"gutters",n]};return(0,l.Z)(r,z,t)})(m);return(0,h.jsx)(P,(0,r.Z)({as:c,className:(0,a.Z)(f.root,i),ref:t,styleProps:m},p))})),w=o(5336);let T;const C=(0,c.ZP)("div",{},{muiName:"MuiBox",skipVariantsResolver:!0})(T||(T=(e=>e)``));var $=i.forwardRef((function(e,t){const o=(0,w.Z)(e),{className:i,component:l="div"}=o,s=(0,n.Z)(o,["className","component"]);return(0,h.jsx)(C,(0,r.Z)({as:l,ref:t,className:(0,a.Z)(i,"MuiBox-root")},s))}));function E(e,t){"function"==typeof e?e(t):e&&(e.current=t)}var N=function(e,t){return i.useMemo((()=>null==e&&null==t?null:o=>{E(e,o),E(t,o)}),[e,t])};var I="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;var L=function(e){const t=i.useRef(e);return I((()=>{t.current=e})),i.useCallback(((...e)=>(0,t.current)(...e)),[])};let F=!0,B=!1,V=null;const D={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function W(e){e.metaKey||e.altKey||e.ctrlKey||(F=!0)}function j(){F=!1}function A(){"hidden"===this.visibilityState&&B&&(F=!0)}function q(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(o){}return F||function(e){const{type:t,tagName:o}=e;return!("INPUT"!==o||!D[t]||e.readOnly)||"TEXTAREA"===o&&!e.readOnly||!!e.isContentEditable}(t)}var G=function(){const e=i.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",W,!0),t.addEventListener("mousedown",j,!0),t.addEventListener("pointerdown",j,!0),t.addEventListener("touchstart",j,!0),t.addEventListener("visibilitychange",A,!0))}),[]),t=i.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!q(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(B=!0,window.clearTimeout(V),V=window.setTimeout((()=>{B=!1}),100),t.current=!1,!0)},ref:e}},O=(o(5697),o(3349)),X=o(3552),H=i.createContext(null);function K(e,t){var o=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){o[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),o}function U(e,t,o){return null!=o[t]?o[t]:e.props[t]}function Y(e,t,o){var n=K(e.children),r=function(e,t){function o(o){return o in t?t[o]:e[o]}e=e||{},t=t||{};var n,r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var l={};for(var s in t){if(r[s])for(n=0;n<r[s].length;n++){var c=r[s][n];l[r[s][n]]=o(c)}l[s]=o(s)}for(n=0;n<i.length;n++)l[i[n]]=o(i[n]);return l}(t,n);return Object.keys(r).forEach((function(a){var l=r[a];if((0,i.isValidElement)(l)){var s=a in t,c=a in n,u=t[a],d=(0,i.isValidElement)(u)&&!u.props.in;!c||s&&!d?c||!s||d?c&&s&&(0,i.isValidElement)(u)&&(r[a]=(0,i.cloneElement)(l,{onExited:o.bind(null,l),in:u.props.in,exit:U(l,"exit",e),enter:U(l,"enter",e)})):r[a]=(0,i.cloneElement)(l,{in:!1}):r[a]=(0,i.cloneElement)(l,{onExited:o.bind(null,l),in:!0,exit:U(l,"exit",e),enter:U(l,"enter",e)})}})),r}var _=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},J=function(e){function t(t,o){var n,r=(n=e.call(this,t,o)||this).handleExited.bind((0,O.Z)(n));return n.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},n}(0,X.Z)(t,e);var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var o,n,r=t.children,a=t.handleExited;return{children:t.firstRender?(o=e,n=a,K(o.children,(function(e){return(0,i.cloneElement)(e,{onExited:n.bind(null,e),in:!0,appear:U(e,"appear",o),enter:U(e,"enter",o),exit:U(e,"exit",o)})}))):Y(e,r,a),firstRender:!1}},o.handleExited=function(e,t){var o=K(this.props.children);e.key in o||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var o=(0,r.Z)({},t.children);return delete o[e.key],{children:o}})))},o.render=function(){var e=this.props,t=e.component,o=e.childFactory,r=(0,n.Z)(e,["component","childFactory"]),a=this.state.contextValue,l=_(this.state.children).map(o);return delete r.appear,delete r.enter,delete r.exit,null===t?i.createElement(H.Provider,{value:a},l):i.createElement(H.Provider,{value:a},i.createElement(t,r,l))},t}(i.Component);J.defaultProps={component:"div",childFactory:function(e){return e}};var Q=J,ee=o(3431),te=I;var oe=function(e){const{className:t,classes:o,pulsate:n=!1,rippleX:r,rippleY:l,rippleSize:s,in:c,onExited:u=(()=>{}),timeout:d}=e,[p,m]=i.useState(!1),f=(0,a.Z)(t,o.ripple,o.rippleVisible,n&&o.ripplePulsate),v={width:s,height:s,top:-s/2+l,left:-s/2+r},b=(0,a.Z)(o.child,p&&o.childLeaving,n&&o.childPulsate),g=L(u);return te((()=>{if(!c){m(!0);const e=setTimeout(g,d);return()=>{clearTimeout(e)}}}),[g,c,d]),(0,h.jsx)("span",{className:f,style:v,children:(0,h.jsx)("span",{className:b})})};var ne=(0,d.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);let re,ie,ae,le,se=e=>e;const ce=(0,ee.F4)(re||(re=se`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ue=(0,ee.F4)(ie||(ie=se`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),de=(0,ee.F4)(ae||(ae=se`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),pe=(0,c.ZP)("span",{},{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),me=(0,c.ZP)(oe,{},{name:"MuiTouchRipple",slot:"Ripple"})(le||(le=se`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    left: 0;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),ne.rippleVisible,ce,550,(({theme:e})=>e.transitions.easing.easeInOut),ne.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),ne.child,ne.childLeaving,ue,550,(({theme:e})=>e.transitions.easing.easeInOut),ne.childPulsate,de,(({theme:e})=>e.transitions.easing.easeInOut));var he=i.forwardRef((function(e,t){const o=(0,s.Z)({props:e,name:"MuiTouchRipple"}),{center:l=!1,classes:c={},className:u}=o,d=(0,n.Z)(o,["center","classes","className"]),[p,m]=i.useState([]),f=i.useRef(0),v=i.useRef(null);i.useEffect((()=>{v.current&&(v.current(),v.current=null)}),[p]);const b=i.useRef(!1),g=i.useRef(null),x=i.useRef(null),y=i.useRef(null);i.useEffect((()=>()=>{clearTimeout(g.current)}),[]);const Z=i.useCallback((e=>{const{pulsate:t,rippleX:o,rippleY:n,rippleSize:r,cb:i}=e;m((e=>[...e,(0,h.jsx)(me,{classes:{ripple:(0,a.Z)(c.ripple,ne.ripple),rippleVisible:(0,a.Z)(c.rippleVisible,ne.rippleVisible),ripplePulsate:(0,a.Z)(c.ripplePulsate,ne.ripplePulsate),child:(0,a.Z)(c.child,ne.child),childLeaving:(0,a.Z)(c.childLeaving,ne.childLeaving),childPulsate:(0,a.Z)(c.childPulsate,ne.childPulsate)},timeout:550,pulsate:t,rippleX:o,rippleY:n,rippleSize:r},f.current)])),f.current+=1,v.current=i}),[c]),S=i.useCallback(((e={},t={},o)=>{const{pulsate:n=!1,center:r=l||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===e.type&&b.current)return void(b.current=!1);"touchstart"===e.type&&(b.current=!0);const a=i?null:y.current,s=a?a.getBoundingClientRect():{width:0,height:0,left:0,top:0};let c,u,d;if(r||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)c=Math.round(s.width/2),u=Math.round(s.height/2);else{const{clientX:t,clientY:o}=e.touches?e.touches[0]:e;c=Math.round(t-s.left),u=Math.round(o-s.top)}if(r)d=Math.sqrt((2*s.width**2+s.height**2)/3),d%2==0&&(d+=1);else{const e=2*Math.max(Math.abs((a?a.clientWidth:0)-c),c)+2,t=2*Math.max(Math.abs((a?a.clientHeight:0)-u),u)+2;d=Math.sqrt(e**2+t**2)}e.touches?null===x.current&&(x.current=()=>{Z({pulsate:n,rippleX:c,rippleY:u,rippleSize:d,cb:o})},g.current=setTimeout((()=>{x.current&&(x.current(),x.current=null)}),80)):Z({pulsate:n,rippleX:c,rippleY:u,rippleSize:d,cb:o})}),[l,Z]),k=i.useCallback((()=>{S({},{pulsate:!0})}),[S]),R=i.useCallback(((e,t)=>{if(clearTimeout(g.current),"touchend"===e.type&&x.current)return x.current(),x.current=null,void(g.current=setTimeout((()=>{R(e,t)})));x.current=null,m((e=>e.length>0?e.slice(1):e)),v.current=t}),[]);return i.useImperativeHandle(t,(()=>({pulsate:k,start:S,stop:R})),[k,S,R]),(0,h.jsx)(pe,(0,r.Z)({className:(0,a.Z)(c.root,ne.root,u),ref:y},d,{children:(0,h.jsx)(Q,{component:null,exit:!0,children:p})}))}));function fe(e){return(0,u.Z)("MuiButtonBase",e)}var ve=(0,d.Z)("MuiButtonBase",["root","disabled","focusVisible"]);const be=(0,c.ZP)("button",{},{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ve.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});var ge=i.forwardRef((function(e,t){const o=(0,s.Z)({props:e,name:"MuiButtonBase"}),{action:c,centerRipple:u=!1,children:d,className:p,component:m="button",disabled:f=!1,disableRipple:v=!1,disableTouchRipple:b=!1,focusRipple:g=!1,LinkComponent:x="a",onBlur:y,onClick:Z,onContextMenu:S,onDragLeave:k,onFocus:R,onFocusVisible:z,onKeyDown:P,onKeyUp:M,onMouseDown:w,onMouseLeave:T,onMouseUp:C,onTouchEnd:$,onTouchMove:E,onTouchStart:I,tabIndex:F=0,TouchRippleProps:B,type:V}=o,D=(0,n.Z)(o,["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","type"]),W=i.useRef(null),j=i.useRef(null),{isFocusVisibleRef:A,onFocus:q,onBlur:O,ref:X}=G(),[H,K]=i.useState(!1);function U(e,t,o=b){return L((n=>{t&&t(n);return!o&&j.current&&j.current[e](n),!0}))}f&&H&&K(!1),i.useEffect((()=>{A.current=H}),[H,A]),i.useImperativeHandle(c,(()=>({focusVisible:()=>{K(!0),W.current.focus()}})),[]),i.useEffect((()=>{H&&g&&!v&&j.current.pulsate()}),[v,g,H]);const Y=U("start",w),_=U("stop",S),J=U("stop",k),Q=U("stop",C),ee=U("stop",(e=>{H&&e.preventDefault(),T&&T(e)})),te=U("start",I),oe=U("stop",$),ne=U("stop",E),re=U("stop",(e=>{O(e),!1===A.current&&K(!1),y&&y(e)}),!1),ie=L((e=>{W.current||(W.current=e.currentTarget),q(e),!0===A.current&&(K(!0),z&&z(e)),R&&R(e)})),ae=()=>{const e=W.current;return m&&"button"!==m&&!("A"===e.tagName&&e.href)},le=i.useRef(!1),se=L((e=>{g&&!le.current&&H&&j.current&&" "===e.key&&(le.current=!0,j.current.stop(e,(()=>{j.current.start(e)}))),e.target===e.currentTarget&&ae()&&" "===e.key&&e.preventDefault(),P&&P(e),e.target===e.currentTarget&&ae()&&"Enter"===e.key&&!f&&(e.preventDefault(),Z&&Z(e))})),ce=L((e=>{g&&" "===e.key&&j.current&&H&&!e.defaultPrevented&&(le.current=!1,j.current.stop(e,(()=>{j.current.pulsate(e)}))),M&&M(e),Z&&e.target===e.currentTarget&&ae()&&" "===e.key&&!e.defaultPrevented&&Z(e)}));let ue=m;"button"===ue&&D.href&&(ue=x);const de={};"button"===ue?(de.type=void 0===V?"button":V,de.disabled=f):("a"===ue&&D.href||(de.role="button"),de["aria-disabled"]=f);const pe=N(X,W),me=N(t,pe),[ve,ge]=i.useState(!1);i.useEffect((()=>{ge(!0)}),[]);const xe=ve&&!v&&!f;const ye=(0,r.Z)({},o,{centerRipple:u,component:m,disabled:f,disableRipple:v,disableTouchRipple:b,focusRipple:g,tabIndex:F,focusVisible:H}),Ze=(e=>{const{disabled:t,focusVisible:o,focusVisibleClassName:n,classes:r}=e,i={root:["root",t&&"disabled",o&&"focusVisible"]},a=(0,l.Z)(i,fe,r);return o&&n&&(a.root+=` ${n}`),a})(ye);return(0,h.jsxs)(be,(0,r.Z)({as:ue,className:(0,a.Z)(Ze.root,p),styleProps:ye,onBlur:re,onClick:Z,onContextMenu:_,onFocus:ie,onKeyDown:se,onKeyUp:ce,onMouseDown:Y,onMouseLeave:ee,onMouseUp:Q,onDragLeave:J,onTouchEnd:oe,onTouchMove:ne,onTouchStart:te,ref:me,tabIndex:f?-1:F,type:V},de,D,{children:[d,xe?(0,h.jsx)(he,(0,r.Z)({ref:j,center:u},B)):null]}))}));function xe(e){return(0,u.Z)("MuiButton",e)}var ye=(0,d.Z)("MuiButton",["root","label","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const Ze=e=>(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Se=(0,c.ZP)(ge,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e},{name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,r.Z)({},t.root,t[o.variant],t[`${o.variant}${(0,m.Z)(o.color)}`],t[`size${(0,m.Z)(o.size)}`],t[`${o.variant}Size${(0,m.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth)}})((({theme:e,styleProps:t})=>(0,r.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:(0,b.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:(0,b.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${e.palette[t.color].main}`,backgroundColor:(0,b.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}}),"&:active":(0,r.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[8]}),[`&.${ye.focusVisible}`]:(0,r.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[6]}),[`&.${ye.disabled}`]:(0,r.Z)({color:e.palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===t.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main,border:`1px solid ${(0,b.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})),(({styleProps:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${ye.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${ye.disabled}`]:{boxShadow:"none"}})),ke=(0,c.ZP)("span",{},{name:"MuiButton",slot:"Label",overridesResolver:(e,t)=>t.label})({width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"}),Re=(0,c.ZP)("span",{},{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,r.Z)({},t.startIcon,t[`iconSize${(0,m.Z)(o.size)}`])}})((({styleProps:e})=>(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},Ze(e)))),ze=(0,c.ZP)("span",{},{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,r.Z)({},t.endIcon,t[`iconSize${(0,m.Z)(o.size)}`])}})((({styleProps:e})=>(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},Ze(e))));var Pe=i.forwardRef((function(e,t){const o=(0,s.Z)({props:e,name:"MuiButton"}),{children:i,color:c="primary",component:u="button",disabled:d=!1,disableElevation:p=!1,disableFocusRipple:f=!1,endIcon:v,focusVisibleClassName:b,fullWidth:g=!1,size:x="medium",startIcon:y,type:Z,variant:S="text"}=o,k=(0,n.Z)(o,["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),R=(0,r.Z)({},o,{color:c,component:u,disabled:d,disableElevation:p,disableFocusRipple:f,fullWidth:g,size:x,type:Z,variant:S}),z=(e=>{const{color:t,disableElevation:o,fullWidth:n,size:i,variant:a,classes:s}=e,c={root:["root",a,`${a}${(0,m.Z)(t)}`,`size${(0,m.Z)(i)}`,`${a}Size${(0,m.Z)(i)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,m.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,m.Z)(i)}`]},u=(0,l.Z)(c,xe,s);return(0,r.Z)({},s,u)})(R),P=y&&(0,h.jsx)(Re,{className:z.startIcon,styleProps:R,children:y}),M=v&&(0,h.jsx)(ze,{className:z.endIcon,styleProps:R,children:v});return(0,h.jsx)(Se,(0,r.Z)({styleProps:R,component:u,disabled:d,focusRipple:!f,focusVisibleClassName:(0,a.Z)(z.focusVisible,b),ref:t,type:Z},k,{classes:z,children:(0,h.jsxs)(ke,{className:z.label,styleProps:R,children:[P,i,M]})}))}));function Me(e){return(0,u.Z)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const we=(0,c.ZP)("svg",{},{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,r.Z)({},t.root,"inherit"!==o.color&&t[`color${(0,m.Z)(o.color)}`],t[`fontSize${(0,m.Z)(o.fontSize)}`])}})((({theme:e,styleProps:t})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter}),fontSize:{inherit:"inherit",small:e.typography.pxToRem(20),medium:e.typography.pxToRem(24),large:e.typography.pxToRem(35)}[t.fontSize],color:{primary:e.palette.primary.main,secondary:e.palette.secondary.main,action:e.palette.action.active,error:e.palette.error.main,disabled:e.palette.action.disabled,inherit:void 0}[t.color]}))),Te=i.forwardRef((function(e,t){const o=(0,s.Z)({props:e,name:"MuiSvgIcon"}),{children:i,className:c,color:u="inherit",component:d="svg",fontSize:p="medium",htmlColor:f,titleAccess:v,viewBox:b="0 0 24 24"}=o,g=(0,n.Z)(o,["children","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]),x=(0,r.Z)({},o,{color:u,component:d,fontSize:p,viewBox:b}),y=(e=>{const{color:t,fontSize:o,classes:n}=e,r={root:["root","inherit"!==t&&`color${(0,m.Z)(t)}`,`fontSize${(0,m.Z)(o)}`]};return(0,l.Z)(r,Me,n)})(x);return(0,h.jsxs)(we,(0,r.Z)({as:d,className:(0,a.Z)(y.root,c),styleProps:x,focusable:"false",viewBox:b,color:f,"aria-hidden":!v||void 0,role:v?"img":void 0,ref:t},g,{children:[i,v?(0,h.jsx)("title",{children:v}):null]}))}));Te.muiName="SvgIcon";var Ce=Te,$e=o(2785);function Ee(e){return(0,u.Z)("MuiLink",e)}var Ne=(0,d.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);const Ie=(0,c.ZP)($e.Z,{},{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,r.Z)({},t.root,t[`underline${(0,m.Z)(o.underline)}`],"button"===o.component&&t.button)}})((({styleProps:e})=>(0,r.Z)({},"none"===e.underline&&{textDecoration:"none"},"hover"===e.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===e.underline&&{textDecoration:"underline"},"button"===e.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ne.focusVisible}`]:{outline:"auto"}})));var Le=i.forwardRef((function(e,t){const o=(0,s.Z)({props:e,name:"MuiLink"}),{className:c,color:u="primary",component:d="a",onBlur:p,onFocus:f,TypographyClasses:v,underline:b="hover",variant:g="inherit"}=o,x=(0,n.Z)(o,["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),{isFocusVisibleRef:y,onBlur:Z,onFocus:S,ref:k}=G(),[R,z]=i.useState(!1),P=N(t,k),M=(0,r.Z)({},o,{color:u,component:d,focusVisible:R,underline:b,variant:g}),w=(e=>{const{classes:t,component:o,focusVisible:n,underline:r}=e,i={root:["root",`underline${(0,m.Z)(r)}`,"button"===o&&"button",n&&"focusVisible"]};return(0,l.Z)(i,Ee,t)})(M);return(0,h.jsx)(Ie,(0,r.Z)({className:(0,a.Z)(w.root,c),classes:v,color:u,component:d,onBlur:e=>{Z(e),!1===y.current&&z(!1),p&&p(e)},onFocus:e=>{S(e),!0===y.current&&z(!0),f&&f(e)},ref:P,styleProps:M,variant:g},x))})),Fe=o(4941),Be=o(474),Ve=o(5444),De=(o(6752),o(3346),o(6410));o(9499);var We,je,Ae=o(5414),qe=o(2927),Ge=o(5333),Oe=o(5861);function Xe(){var e=i.useContext(Ge._y);return(0,Oe.lq)(e),e}!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(We||(We={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(je||(je={}));function He(e){var t=function(t){var o=Xe(),n=t.value,r=t.children,i=(0,qe._T)(t,["value","children"]),a="string"==typeof n?new Date(n||0):n;return r("formatDate"===e?o.formatDateToParts(a,i):o.formatTimeToParts(a,i))};return t.displayName=je[e],t}function Ke(e){var t=function(t){var o=Xe(),n=t.value,r=t.children,a=(0,qe._T)(t,["value","children"]),l=o[e](n,a);if("function"==typeof r)return r(l);var s=o.textComponent||i.Fragment;return i.createElement(s,null,l)};return t.displayName=We[e],t}Ke("formatDate"),Ke("formatTime"),Ke("formatNumber"),Ke("formatList"),Ke("formatDisplayName"),He("formatDate"),He("formatTime");var Ue=o(8319);const Ye="Home",_e={description:{id:"home.description",defaultValue:"Simple but powerful Munchkin level counter"},privacy:{id:"home.privacy",defaultValue:"Privacy Policy"},title:{id:"home.title",defaultValue:"Munchkin Level Counter"},try:{id:"home.try",defaultValue:"Try"}},Je=(0,Fe.Z)((e=>({"@global":{"@font-face":{fontFamily:"Munchkin",src:"url(/fonts/munchkin.woff2) format('woff2'), url(/fonts/munchkin.woff) format('woff')",fontWeight:"normal",fontStyle:"normal"}},title:{fontFamily:`"Munchkin", ${e.typography.fontFamily}`}})),{name:Ye}),Qe=()=>{const{formatMessage:e}=Xe(),t=Je(),{defaultLang:o,locale:n,localizedPath:r}=(0,De.q)(),i=e(_e.title);return(0,Ue.BX)(Ue.HY,{children:[(0,Ue.tZ)(Ae.q,{children:(0,Ue.tZ)("title",{children:i})}),(0,Ue.BX)(v,{children:[(0,Ue.tZ)(R,{color:"transparent",elevation:0,position:"static",children:(0,Ue.BX)(M,{component:$,justifyContent:"flex-end",children:[(0,Ue.tZ)(Pe,{color:"inherit",component:Ve.Link,disabled:"en"===n,size:"small",to:r({defaultLang:o,locale:"en",path:"/"}),children:"EN"}),(0,Ue.tZ)(Pe,{color:"inherit",component:Ve.Link,disabled:"ru"===n,size:"small",to:r({defaultLang:o,locale:"ru",path:"/"}),children:"RU"})]})}),(0,Ue.tZ)($e.Z,{align:"center",className:t.title,gutterBottom:!0,variant:"h1",children:e(_e.title)}),(0,Ue.tZ)($e.Z,{align:"center",gutterBottom:!0,children:i}),(0,Ue.tZ)($,{mt:4,textAlign:"center",children:(0,Ue.tZ)(Pe,{color:"primary",href:"https://web.allmunchkins.com",variant:"contained",children:e(_e.try)})}),(0,Ue.BX)($,{display:"flex",justifyContent:"center",marginTop:2,children:[(0,Ue.tZ)($,{display:"inline-flex",flexDirection:"column",margin:2,width:200,children:(0,Ue.tZ)(Pe,{color:"inherit",href:"https://play.google.com/store/apps/details?id=com.izorg.munchkin",rel:"noopener noreferrer",size:"large",startIcon:(0,Ue.tZ)(Ce,{children:(0,Ue.tZ)("path",{d:Be.fcS})}),target:"_blank",variant:"outlined",children:"Play Store"})}),(0,Ue.tZ)($,{display:"inline-flex",flexDirection:"column",margin:2,width:200,children:(0,Ue.tZ)(Pe,{color:"inherit",href:"https://itunes.apple.com/us/app/level-counter-for-munchkin/id1448937097?mt=8",rel:"noopener noreferrer",size:"large",startIcon:(0,Ue.tZ)(Ce,{style:{marginTop:-4},children:(0,Ue.tZ)("path",{d:Be.G5Z})}),target:"_blank",variant:"outlined",children:"App Store"})})]}),(0,Ue.tZ)($,{marginTop:4,textAlign:"center",children:(0,Ue.tZ)(Le,{component:Ve.Link,to:"/privacy",underline:"always",children:e(_e.privacy)})})]})]})};Qe.displayName=Ye;var et=Qe}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7feee3ee136770b47ffe.js.map