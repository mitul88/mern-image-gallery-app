/*! For license information please see 956.1c56e358.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkimage_gallery_client=self.webpackChunkimage_gallery_client||[]).push([[956],{5956:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var o=n(7689),r=n(9439),a=n(2791),i=n(1087),s=n(456),d=n(7692),c=n(8820),l=n(184),u=function(){var e,t,n,u=(0,o.V4)("root"),f=(0,a.useState)(!1),m=(0,r.Z)(f,2),h=m[0],x=m[1],g=function(){x(!h)};return u&&"EXPIRED"!==u&&(n=(0,s.Z)(u)),(0,l.jsxs)("header",{className:"relative w-full h-auto py-5 md:py-auto md:h-[80px] bg-sky-950 text-white flex ".concat("flex-row"," gap-5 md:gap-0 md:flex-row justify-between items-center px-[80px]"),children:[(0,l.jsxs)(i.rU,{to:"/",className:"text-2xl font-bold",children:["Image ",(0,l.jsx)("span",{className:"text-green-500",children:"Gallery!"})]}),!u&&(0,l.jsxs)(i.rU,{to:"auth?mode=login",className:"p-3 border-none rounded-full text-md tracking-wide md:flex flex-row justify-end items-center md:px-5 md:py-1 md:rounded-lg bg-sky-900 md:shadow-lg md:shadow-gray-900 border border-sky-900 ease-in duration-150 hover:bg-sky-900/75 hover:shadow-none md:tracking-widest md:text-lg",children:[(0,l.jsx)(d.K0K,{className:"md:mr-2"})," ",(0,l.jsx)("span",{className:"hidden md:block",children:"Sign in"})]}),u&&(h?(0,l.jsx)("button",{onClick:g,className:"p-3 border-none rounded-full text-md tracking-wide flex flex-row justify-end items-center md:hidden bg-sky-900 border border-sky-900",children:(0,l.jsx)(c.oHP,{})}):(0,l.jsx)("button",{onClick:g,className:"p-3 border-none rounded-full text-md tracking-wide flex flex-row justify-end items-center md:hidden bg-sky-900 border border-sky-900",children:(0,l.jsx)(d.ib2,{})})),(0,l.jsxs)("nav",{className:"hidden ".concat(u?"md:flex":"md:hidden"," flex-col gap-3 md:gap-0 md:flex-row flex justify-").concat(u?"between":"end"," items-center min-w-[300px]"),style:{fontFamily:"Quicksand"},children:[u&&(0,l.jsx)(i.rU,{to:"/",className:"font-bold tracking-widest",children:"Home"}),u&&(0,l.jsx)(i.rU,{to:"".concat(null===(e=n)||void 0===e?void 0:e._id,"/profile"),className:"font-bold tracking-widest",children:"Profile"}),u?(0,l.jsx)(i.l0,{action:"/logout",method:"post",children:(0,l.jsxs)("button",{to:"/logout",className:"flex flex-row items-center px-5 py-1 rounded-lg bg-red-600 md:shadow-md md:shadow-red-950  ease-in duration-150 hover:bg-red-700 hover:shadow-none  tracking-wide text-md",children:[(0,l.jsx)(d.t7h,{className:"mr-2"}),"Logout"]})}):(0,l.jsxs)(i.rU,{to:"auth?mode=login",className:"hidden md:flex flex-row justify-end items-center md:px-5 md:py-1 md:rounded-lg bg-sky-900 md:shadow-lg md:shadow-gray-900 border border-sky-900 ease-in duration-150 hover:bg-sky-900/75 hover:shadow-none md:tracking-widest md:text-lg",children:[(0,l.jsx)(d.K0K,{className:"md:mr-2"}),"Signin"]})]}),h&&(0,l.jsxs)("nav",{className:"absolute top-20 right-0 bg-sky-950 z-50 py-20 ".concat(u?"flex":"hidden"," flex-col gap-10 md:gap-0 md:flex-row flex justify-").concat(u?"between":"end"," items-center min-w-[300px]"),style:{fontFamily:"Quicksand"},children:[u&&(0,l.jsx)(i.rU,{to:"/",onClick:g,className:"font-bold tracking-widest",children:"Home"}),u&&(0,l.jsx)(i.rU,{to:"".concat(null===(t=n)||void 0===t?void 0:t._id,"/profile"),onClick:g,className:"font-bold tracking-widest",children:"Profile"}),u?(0,l.jsx)(i.l0,{action:"/logout",method:"post",children:(0,l.jsxs)("button",{to:"/logout",className:"flex flex-row items-center px-5 py-1 rounded-lg bg-red-600 md:shadow-md md:shadow-red-950  ease-in duration-150 hover:bg-red-700 hover:shadow-none  tracking-wide text-md",children:[(0,l.jsx)(d.t7h,{className:"mr-2"}),"Logout"]})}):(0,l.jsxs)(i.rU,{to:"auth?mode=login",className:"hidden md:flex flex-row justify-end items-center md:px-5 md:py-1 md:rounded-lg bg-sky-900 md:shadow-lg md:shadow-gray-900 border border-sky-900 ease-in duration-150 hover:bg-sky-900/75 hover:shadow-none md:tracking-widest md:text-lg",children:[(0,l.jsx)(d.K0K,{className:"md:mr-2"}),"Signin"]})]})]})},f=function(){return(0,l.jsx)("div",{className:"h-[60px] w-full bg-sky-950 p-5 text-center text-white",children:"Copyright@2023"})},m=n(3734),h=n(9538),x=n(7413),g=n(6403);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var v=function(){};function b(e,t){return Math.random()*(t-e+1)+e}function w(e,t){return Math.floor(b(e,t))}var y=(0,a.forwardRef)((function(e,t){var n=e.progress,o=e.height,r=void 0===o?2:o,i=e.className,s=void 0===i?"":i,d=e.color,c=void 0===d?"red":d,l=e.background,u=void 0===l?"transparent":l,f=e.onLoaderFinished,m=e.transitionTime,h=void 0===m?300:m,x=e.loaderSpeed,g=void 0===x?500:x,y=e.waitingTime,j=void 0===y?1e3:y,k=e.shadow,N=void 0===k||k,S=e.containerStyle,E=void 0===S?{}:S,C=e.style,R=void 0===C?{}:C,U=e.shadowStyle,I=void 0===U?{}:U,K=e.containerClassName,P=void 0===K?"":K,_=(0,a.useRef)(!1),F=(0,a.useState)(0),L=F[0],O=F[1],H=(0,a.useRef)({active:!1,refreshRate:1e3}),M=(0,a.useState)(!1),T=M[0],Y=M[1],Q=(0,a.useState)({active:!1,value:20}),V=Q[0],Z=Q[1],z={position:"fixed",top:0,left:0,height:r,background:u,zIndex:99999999999,width:"100%"},D={boxShadow:"0 0 10px "+c+", 0 0 10px "+c,width:"5%",opacity:1,position:"absolute",height:"100%",transition:"all "+g+"ms ease",transform:"rotate(3deg) translate(0px, -4px)",left:"-10rem"},$=(0,a.useState)({height:"100%",background:c,transition:"all "+g+"ms ease",width:"0%"}),G=$[0],X=$[1],q=(0,a.useState)(D),A=q[0],B=q[1];(0,a.useEffect)((function(){return _.current=!0,function(){_.current=!1}}),[]),(0,a.useImperativeHandle)(t,(function(){return{continuousStart:function(e,t){if(void 0===t&&(t=1e3),!V.active)if(T)console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");else{var n=e||w(10,20);H.current={active:!0,refreshRate:t},O(n),te(n)}},staticStart:function(e){if(!H.current.active)if(T)console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");else{var t=e||w(30,50);Z({active:!0,value:t}),O(t),te(t)}},complete:function(){T?console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"):(O(100),te(100))}}})),(0,a.useEffect)((function(){X(p({},G,{background:c})),B(p({},A,{boxShadow:"0 0 10px "+c+", 0 0 5px "+c}))}),[c]),(0,a.useEffect)((function(){if(t){if(t&&void 0!==n)return void console.warn('react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.');te(L),Y(!1)}else n&&te(n),Y(!0)}),[n]);var J,W,ee,te=function e(t){t>=100?(X(p({},G,{width:"100%"})),N&&B(p({},A,{left:t-10+"%"})),setTimeout((function(){_.current&&(X(p({},G,{opacity:0,width:"100%",transition:"all "+h+"ms ease-out",color:c})),setTimeout((function(){_.current&&(H.current.active&&(H.current=p({},H.current,{active:!1}),O(0),e(0)),V.active&&(Z(p({},V,{active:!1})),O(0),e(0)),f&&f(),O(0),e(0))}),h))}),j)):(X((function(e){return p({},e,{width:t+"%",opacity:1,transition:t>0?"all "+g+"ms ease":""})})),N&&B(p({},A,{left:t-5.5+"%",transition:t>0?"all "+g+"ms ease":""})))};return J=function(){var e=b(Math.min(10,(100-L)/5),Math.min(20,(100-L)/3));L+e<95&&(O(L+e),te(L+e))},W=H.current.active?H.current.refreshRate:null,ee=(0,a.useRef)(v),(0,a.useEffect)((function(){ee.current=J})),(0,a.useEffect)((function(){}),[void 0]),(0,a.useEffect)((function(){if(null!==W&&!1!==W){var e=setInterval((function(){return ee.current()}),W);return function(){return clearInterval(e)}}}),[W]),(0,a.createElement)("div",{className:P,style:p({},z,E)},(0,a.createElement)("div",{className:s,style:p({},G,R)},N?(0,a.createElement)("div",{style:p({},A,I)}):null))})),j=function(){var e,t=function(e,t,n){var o=(0,m.I6)(e,t,n),i=(0,r.Z)(o,2),s=i[0],d=i[1],c=void 0===d?{}:d,l=(0,g.NL)({context:c.context}),u=l.getQueryCache();return(0,x.$)(a.useCallback((function(e){return u.subscribe(h.V.batchCalls(e))}),[u]),(function(){return l.isFetching(s)}),(function(){return l.isFetching(s)}))}();return 0===t?e=0:t>0&&(e=100),(0,l.jsxs)("div",{className:"min-h-screen",children:[(0,l.jsx)(u,{}),(0,l.jsx)(y,{color:"#f11946",progress:e}),(0,l.jsx)("main",{className:"h-full",children:(0,l.jsx)(o.j3,{})}),(0,l.jsx)(f,{})]})}},1561:function(e,t,n){var o=n(2791);var r="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=o.useState,i=o.useEffect,s=o.useLayoutEffect,d=o.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch(o){return!0}}var l="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),o=a({inst:{value:n,getSnapshot:t}}),r=o[0].inst,l=o[1];return s((function(){r.value=n,r.getSnapshot=t,c(r)&&l({inst:r})}),[e,n,t]),i((function(){return c(r)&&l({inst:r}),e((function(){c(r)&&l({inst:r})}))}),[e]),d(n),n};t.useSyncExternalStore=void 0!==o.useSyncExternalStore?o.useSyncExternalStore:l},7248:function(e,t,n){e.exports=n(1561)},7413:function(e,t,n){n.d(t,{$:function(){return o}});var o=n(7248).useSyncExternalStore}}]);
//# sourceMappingURL=956.1c56e358.chunk.js.map