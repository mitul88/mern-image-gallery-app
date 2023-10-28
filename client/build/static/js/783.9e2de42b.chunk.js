"use strict";(self.webpackChunkimage_gallery_client=self.webpackChunkimage_gallery_client||[]).push([[783],{2867:function(e,t,a){a(2791);var r=a(7692),n=a(1087),s=a(184);t.Z=function(e){var t=e.image;return(0,s.jsx)(n.rU,{to:"/image/".concat(t._id,"/").concat(t.slug),children:(0,s.jsxs)("div",{className:"rounded-md h-[300px] max-w-[300px] mx-auto bg-white flex flex-col shadow shadow-md",style:{fontFamily:"Quicksand"},children:[(0,s.jsx)("img",{className:"h-[200px] rounded-t-md object-fill saturate-100 brightness-100",src:t.url,alt:t.title}),(0,s.jsxs)("div",{className:"h-[100px] px-2",children:[(0,s.jsx)("div",{className:"flex flex-row justify-between items-center my-2",children:(0,s.jsx)("h4",{className:"text-xl tracking-widest font-bold text-gray-500  pointer-events-none",children:t.title.length>14?t.title.slice(0,14)+"...":t.title})}),(0,s.jsxs)("div",{className:"flex flex-row justify-between items-center w-full pointer-events-none",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)("div",{className:"rounded-md bg-gray-100 p-2 text-sm font-bold text-gray-500 flex flex-row items-center mr-2",children:[(0,s.jsx)(r.UZT,{className:"mr-2"})," ",t.likesCount]}),(0,s.jsxs)("div",{className:"rounded-md bg-gray-100 p-2 text-sm font-bold text-gray-500 flex flex-row items-center",children:[(0,s.jsx)(r.FSy,{className:"mr-2"})," ",t.commentsCount]})]}),(0,s.jsxs)("p",{className:"text-sm text-gray-400",children:["@",t.posted_by[0].name]})]})]})]})})}},8783:function(e,t,a){a.r(t),a.d(t,{default:function(){return v},loader:function(){return w}});var r=a(4165),n=a(5861),s=a(2791),i=a(1087),l=a(184),c=function(){return(0,l.jsx)("div",{className:"hidden md:block h-[220px] bg-sky-800 bg-fixed bg-gradient-to-r from-sky-800 via-sky-900 to-sky-950 text-white",children:(0,l.jsx)("div",{className:"container mx-auto h-full",children:(0,l.jsxs)("div",{className:"w-full md:w-1/2 h-full mx-auto flex flex-col items-center justify-center",children:[(0,l.jsx)("h3",{className:"text-2xl lg:text-3xl text-center my-5",children:"Showcase your photgraphy skills to the world and share your thoughts with other photographers"}),(0,l.jsx)(i.rU,{to:"1/profile/upload",className:"bg-orange-600 shadow shadow-sky-950 shadow-lg ease-in duration-150 hover:shadow-none text-white text-lg rounded-md px-5 tracking-wider font-semibold text-sm py-2 flex flex-row items-center",style:{fontFamily:"Quicksand"},children:"Upload"})]})})})},o=a(1413),d=a(2867),u=a(7689),x=function(e){var t=e.categoryData,a=(0,u.s0)(),r=function(e){var t=e.target.value,r=e.target.innerText;t&&r||a("/"),a("?category=".concat(r.toLowerCase(),"&id=").concat(t))};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{style:{fontFamily:"Quicksand"},className:"hidden md:block w-96 min-w-[700px] lg:min-w-[800px] md:flex flex-row justify-between mx-auto my-0 md:my-5 shadow shadow-md border border-gray-200 rounded-lg bg-white",children:[(0,l.jsx)("span",{className:"bg-sky-900 text-white rounded-l-lg py-3 px-5 font-bold text-xs md:text-sm lg:text-md lg:tracking-wider",children:"Categories"}),(0,l.jsx)(i.rU,{to:"/",className:"font-bold lg:tracking-wider text-orange-500 text-xs md:text-sm lg:text-md py-3 px-5",children:"All"}),t.map((function(e){return(0,l.jsx)(i.rU,{to:"?category=".concat(e.name,"&id=").concat(e._id),className:"font-bold lg:tracking-wider text-xs md:text-sm lg:text-md text-orange-500 py-3 px-5",children:e.name.toUpperCase()},e._id)}))]}),(0,l.jsxs)("div",{className:"block md:hidden",children:[(0,l.jsx)("label",{htmlFor:"category",className:"text-white bg-sky-900 px-5 py-2 rounded-l-md ml-5",children:"Filter Category:"}),(0,l.jsxs)("select",{name:"category",id:"category",className:"mr-5 mt-5 bg-white text-gray-600 px-5 py-2 w-60 sm:w-96 rounded-r-md",children:[(0,l.jsx)("option",{onClick:r,value:"",children:"All"}),t.map((function(e){return(0,l.jsx)("option",{value:e._id,className:"bg-white text-gray-600",onClick:r,children:e.name.toUpperCase()},e._id)}))]})]})]})},m=a(7858),h=a(9645),g=a(3877),f=function(e){var t,a=e.categoryData,i=(0,u.TH)(),c=new URLSearchParams(i.search).get("id"),f=(0,m.N)({queryKey:["images",{category:c}],queryFn:function(e){var t=e.pageParam,a=void 0===t?1:t,r=e.queryKey;return(0,h._6)((0,o.Z)({pageParam:a},r[1]))},getNextPageParam:function(e,t){return e.data.hasNextPage?e.data.nextPage:void 0}}),p=f.data,y=f.hasNextPage,v=f.fetchNextPage,w=f.isFetchingNextPage;return(0,s.useEffect)((function(){var e=!1,t=function(){var t=(0,n.Z)((0,r.Z)().mark((function t(a){var n,s,i,l;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.target.scrollingElement,s=n.scrollHeight,i=n.scrollTop,l=n.clientHeight,e||!(s-i<=1.2*l)){t.next=7;break}if(e=!0,!y){t.next=6;break}return t.next=6,v();case 6:e=!1;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}),[]),w&&g.Z,p&&(t=(0,l.jsxs)(l.Fragment,{children:[p.pages.map((function(e){return e.data.docs.map((function(e){return(0,l.jsx)(d.Z,{image:e},e._id)}))})),w&&(0,l.jsx)(g.Z,{})]})),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{categoryData:a}),(0,l.jsx)("div",{className:"min-h-full grid sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-[0px] lg:px-[150px]",children:t})]})},p="loading_loader__4vRxc",y=function(){return(0,l.jsx)("span",{className:p,children:"Loading"})},v=function(){var e=(0,u.f_)();return(0,l.jsxs)("div",{className:"min-h-full bg-neutral-300  bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-400",children:[(0,l.jsx)(c,{}),(0,l.jsx)("main",{className:"container mx-auto min-h-full",children:(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(y,{}),children:(0,l.jsx)(f,{categoryData:e.data})})})]})},w=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t){var a,n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.request,n=new URL(a.url).searchParams,n.get("category"),e.next=5,fetch("http://localhost:4000/api/category");case 5:return s=e.sent,e.abrupt("return",s.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},3877:function(e,t,a){a(2791);var r=a(184);t.Z=function(){return(0,r.jsxs)("div",{className:"rounded-md h-[300px] w-[300px] mx-auto bg-white flex flex-col shadow shadow-md animate-pulse",children:[(0,r.jsx)("div",{className:"h-[200px] mx-5 mt-5 rounded-t-md object-fill bg-gray-200"}),(0,r.jsxs)("div",{className:"h-[100px] mx-5",children:[(0,r.jsx)("div",{className:"flex flex-row justify-between items-center my-2 ",children:(0,r.jsx)("h4",{className:"bg-gray-200 p-2 pointer-events-none w-full h-[20px]"})}),(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center w-full pointer-events-none",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"rounded-md bg-gray-100 p-3 mr-2"}),(0,r.jsx)("div",{className:"rounded-md bg-gray-100 p-3 "})]}),(0,r.jsx)("p",{className:"text-sm bg-gray-200 p-2 w-[60px]"})]})]})]})}},7858:function(e,t,a){a.d(t,{N:function(){return y}});var r=a(3734),n=a(4925),s=a(1413),i=a(5671),l=a(3144),c=a(1752),o=a(1120),d=a(136),u=a(7277),x=a(1135),m=a(2806),h=["pageParam"],g=["pageParam"],f=function(e){(0,d.Z)(a,e);var t=(0,u.Z)(a);function a(e,r){return(0,i.Z)(this,a),t.call(this,e,r)}return(0,l.Z)(a,[{key:"bindMethods",value:function(){(0,c.Z)((0,o.Z)(a.prototype),"bindMethods",this).call(this),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}},{key:"setOptions",value:function(e,t){(0,c.Z)((0,o.Z)(a.prototype),"setOptions",this).call(this,(0,s.Z)((0,s.Z)({},e),{},{behavior:(0,m.Gm)()}),t)}},{key:"getOptimisticResult",value:function(e){return e.behavior=(0,m.Gm)(),(0,c.Z)((0,o.Z)(a.prototype),"getOptimisticResult",this).call(this,e)}},{key:"fetchNextPage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pageParam,a=(0,n.Z)(e,h);return this.fetch((0,s.Z)((0,s.Z)({},a),{},{meta:{fetchMore:{direction:"forward",pageParam:t}}}))}},{key:"fetchPreviousPage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pageParam,a=(0,n.Z)(e,g);return this.fetch((0,s.Z)((0,s.Z)({},a),{},{meta:{fetchMore:{direction:"backward",pageParam:t}}}))}},{key:"createResult",value:function(e,t){var r,n,i,l,d,u,x=e.state,h=(0,c.Z)((0,o.Z)(a.prototype),"createResult",this).call(this,e,t),g=h.isFetching,f=h.isRefetching,p=g&&"forward"===(null==(r=x.fetchMeta)||null==(n=r.fetchMore)?void 0:n.direction),y=g&&"backward"===(null==(i=x.fetchMeta)||null==(l=i.fetchMore)?void 0:l.direction);return(0,s.Z)((0,s.Z)({},h),{},{fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,m.Qy)(t,null==(d=x.data)?void 0:d.pages),hasPreviousPage:(0,m.ZF)(t,null==(u=x.data)?void 0:u.pages),isFetchingNextPage:p,isFetchingPreviousPage:y,isRefetching:f&&!p&&!y})}}]),a}(x.z),p=a(8560);function y(e,t,a){var n=(0,r._v)(e,t,a);return(0,p.r)(n,f)}}}]);
//# sourceMappingURL=783.9e2de42b.chunk.js.map