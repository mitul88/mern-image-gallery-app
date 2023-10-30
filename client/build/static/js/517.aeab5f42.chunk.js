"use strict";(self.webpackChunkimage_gallery_client=self.webpackChunkimage_gallery_client||[]).push([[517],{2867:function(e,t,n){n(2791);var r=n(7692),s=n(1087),a=n(184);t.Z=function(e){var t=e.image;return(0,a.jsx)(s.rU,{to:"/image/".concat(t._id,"/").concat(t.slug),children:(0,a.jsxs)("div",{className:"rounded-md h-[300px] max-w-[300px] mx-auto bg-white flex flex-col shadow shadow-md",style:{fontFamily:"Quicksand"},children:[(0,a.jsx)("img",{className:"h-[200px] rounded-t-md object-fill saturate-100 brightness-100",src:t.url,alt:t.title}),(0,a.jsxs)("div",{className:"h-[100px] px-2",children:[(0,a.jsx)("div",{className:"flex flex-row justify-between items-center my-2",children:(0,a.jsx)("h4",{className:"text-xl tracking-widest font-bold text-gray-500  pointer-events-none",children:t.title.length>14?t.title.slice(0,14)+"...":t.title})}),(0,a.jsxs)("div",{className:"flex flex-row justify-between items-center w-full pointer-events-none",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsxs)("div",{className:"rounded-md bg-gray-100 p-2 text-sm font-bold text-gray-500 flex flex-row items-center mr-2",children:[(0,a.jsx)(r.UZT,{className:"mr-2"})," ",t.likesCount]}),(0,a.jsxs)("div",{className:"rounded-md bg-gray-100 p-2 text-sm font-bold text-gray-500 flex flex-row items-center",children:[(0,a.jsx)(r.FSy,{className:"mr-2"})," ",t.commentsCount]})]}),(0,a.jsxs)("p",{className:"text-sm text-gray-400",children:["@",t.posted_by[0].name]})]})]})]})})}},2874:function(e,t,n){var r=n(184);t.Z=function(e){var t=e.onFileSelect;return(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"border border-gray-200 w-full rounded-md mb-3",type:"file",onChange:function(e){t(e.target.files[0])}})})}},6131:function(e,t,n){var r=n(9439),s=n(2791),a=n(2874),i=n(184);t.Z=function(e){var t=e.categoryData,n=e.submitFn,l=e.isUploadLoading,o=e.isUploadError,c=e.uploadError,d=e.method,u=e.imageData,m=(0,s.useState)(u?u.image.title:""),x=(0,r.Z)(m,2),f=x[0],h=x[1],g=(0,s.useState)(u?u.image.desc:""),p=(0,r.Z)(g,2),y=p[0],b=p[1],v=(0,s.useState)(u?u.image.category._id:""),j=(0,r.Z)(v,2),N=j[0],w=j[1],C=(0,s.useState)(null),k=(0,r.Z)(C,2),_=k[0],F=k[1],E=(0,s.useState)(!1),S=(0,r.Z)(E,2),Z=S[0],D=S[1];return(0,i.jsxs)("div",{className:"m-5 p-5 w-96 shadow-md shadow-gray-200",style:{fontFamily:"Quicksand"},children:[(0,i.jsxs)("h2",{className:"text-xl font-bold text-center",children:["create"===d?"Upload":"Edit"," your image"]}),l&&(0,i.jsx)("p",{className:"bg-green-200 mb-3 rounded text-center px-5",children:(0,i.jsx)("span",{className:"animate-pulsetacking-wider font-bold text-green-600 mb-3",children:"Photo Uploading ...."})}),o&&(0,i.jsx)("p",{className:"text-red-400 text-sm bg-red-100 px-3 py-1 rounded mb-3",children:null===c||void 0===c?void 0:c.info.message}),Z&&(0,i.jsx)("p",{className:"text-red-400 text-sm bg-red-100 px-3 py-1 rounded mb-3",children:"Fill up all fields"}),(0,i.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==f&&""!==N&&""!==y){var t=new FormData;t.append("title",f),t.append("desc",y),t.append("category",N),"create"===d&&t.append("image",_),n(t)}else D(!0)},children:[(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("label",{htmlFor:"image-title",children:"Title"}),(0,i.jsx)("input",{className:"border border-gray-300 rounded-md px-3 py-1 w-full mb-3",type:"text",id:"image-title",value:f,onChange:function(e){return h(e.target.value)}})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("label",{htmlFor:"image-category",children:"Select Category"}),(0,i.jsxs)("select",{value:N,onChange:function(e){return w(e.target.value)},className:"border border-gray-300 rounded-md px-3 py-2 w-full mb-3 bg-white",name:"category",id:"image-category",children:[(0,i.jsx)("option",{value:"",children:"Select Category"}),t.map((function(e){return(0,i.jsx)("option",{value:e._id,children:e.name},e._id)}))]})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("label",{htmlFor:"image-desc",children:"Description"}),(0,i.jsx)("textarea",{className:"border border-gray-300 rounded-md px-3 py-1 w-full mb-3",type:"text",id:"image-desc",value:y,onChange:function(e){return b(e.target.value)}})]}),"create"===d&&(0,i.jsx)(a.Z,{onFileSelect:function(e){return F(e)}}),(0,i.jsx)("button",{type:"submit",className:"bg-orange-500 text-white rounded-md px-3 py-1",children:"create"===d?"Add Photo":"Edit Photo"})]})]})}},5517:function(e,t,n){n.r(t),n.d(t,{default:function(){return C},loader:function(){return k}});var r=n(9439),s=n(2791),a=n(7692),i=n(7689),l=n(1087),o={errorBlock:"errorBlock_errorBlock__5SGs+",errorBlockIcon:"errorBlock_errorBlockIcon__vKHEU"},c=n(184),d=function(e){var t=e.title,n=e.message;return(0,c.jsxs)("div",{className:o.errorBlock,children:[(0,c.jsx)("div",{className:o.errorBlockIcon,children:"!"}),(0,c.jsxs)("div",{className:o.errorBlockText,children:[(0,c.jsx)("h2",{children:t}),(0,c.jsx)("p",{children:n})]})]})},u=function(e){var t=e.submitComment,n=e.toggleCommentForm,a=e.isCommentPending,l=(0,i.UO)(),o=(0,s.useState)(""),d=(0,r.Z)(o,2),u=d[0],m=d[1];return(0,c.jsxs)(c.Fragment,{children:[a&&(0,c.jsxs)("div",{className:"rounded-full bg-gray-100 p-3 mb-2 max-w-[250px]",children:[(0,c.jsx)("h4",{className:"text-sm font-bold ml-5 text-gray-300",children:"Posting Comment ...."}),(0,c.jsx)("p",{className:"text-sm text-gray-200 ml-5",children:u})]}),!a&&(0,c.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==u){var n=new FormData;n.append("user_comment",u),n.append("image_id",l.imageId),t(n)}},className:"p-3 rounded-md border border-gray-300",children:[(0,c.jsxs)("div",{className:"mb-2 w-full flex justify-center",children:[(0,c.jsx)("textarea",{type:"text",name:"user_comment",className:"rounded-md border border-gray-200 px-3 py-1 mx-auto w-full",onChange:function(e){return m(e.target.value)}}),(0,c.jsx)("input",{type:"text",className:"hidden",defaultValue:l.imageId,name:"image_id"})]}),(0,c.jsxs)("div",{className:"w-full flex flex-row justify-around",children:[(0,c.jsx)("button",{className:"px-3 py-1 bg-gray-100 text-gray-400 text-xs rounded-md",type:"submit",children:"Comment"}),(0,c.jsx)("button",{className:"px-3 py-1 bg-gray-100 text-gray-400 text-xs rounded-md",onClick:n,children:"Cancel"})]})]})]})},m=n(456),x=function(e){var t,n,r=e.commentData,s=e.submitComment,a=e.editComment,o=e.deleteComment,x=e.showCommentForm,f=e.toggleCommentForm,h=e.showEditForm,g=e.toggleEditForm,p=e.isCommentPending,y=e.isPostCommentError,b=(0,i.V4)("root");b&&"EXPIRED"!==b&&(n=(0,m.Z)(b));var v=function(e){e.preventDefault();var t=document.forms.deleteCommentForm,n=new FormData(t);o(n)},j=function(e){e.preventDefault();var t=document.forms.editCommentForm,n=new FormData(t);a(n)};return(0,c.jsxs)("div",{className:"w-full max-h-[400px] overflow-x-hidden overflow-y-auto",children:[y&&(0,c.jsx)(d,{title:"Failed to post comment",message:(null===(t=y.info)||void 0===t?void 0:t.message)||"Please try again later"}),x&&(0,c.jsx)("div",{className:"mr-5 mb-2",children:(0,c.jsx)(u,{submitComment:s,toggleCommentForm:f,isCommentPending:p})}),r.map((function(e){var t,r;return(0,c.jsxs)("div",{className:"rounded-full bg-gray-100 p-3 mb-2 max-w-[250px]",children:[(0,c.jsx)(l.rU,{to:"/".concat(e.commented_by._id,"/profile"),children:(0,c.jsx)("h4",{className:"text-sm font-bold ml-5 text-blue-400 hover:text-blue-800",children:e.commented_by.name})}),(null===(t=n)||void 0===t?void 0:t._id)===e.commented_by._id&&h?(0,c.jsxs)("form",{onSubmit:j,id:"editCommentForm",children:[(0,c.jsx)("textarea",{type:"text",name:"user_comment",defaultValue:e.user_comment,className:"w-[180px] px-2 mx-5 mt-2 bg-transparent text-gray-600 border border-gray-400 rounded-md"}),(0,c.jsx)("input",{type:"text",className:"hidden",defaultValue:e._id,name:"comment_id"}),(0,c.jsxs)("div",{className:"flex justify-evenly w-full",children:[(0,c.jsx)("button",{type:"submit",className:"text-xs p-0 text-blue-400",children:"Edit Comment"}),(0,c.jsx)("button",{onClick:g,className:"text-xs p-0 text-blue-400",children:"Cancel"})]})]}):(0,c.jsx)("p",{className:"text-sm text-gray-400 ml-5",children:e.user_comment}),null!==(r=n)&&void 0!==r&&r._id&&n._id===e.commented_by._id?(0,c.jsxs)("div",{className:"w-1/2 flex justify-around text-xs ml-5 mt-2",children:[(0,c.jsx)("button",{onClick:g,className:"text-blue-400",children:h?null:"Edit"}),!h&&(0,c.jsxs)("form",{onSubmit:v,id:"deleteCommentForm",className:"flex flex-row justify-center items-center ",children:[(0,c.jsx)("input",{type:"text",className:"hidden",value:e._id,name:"comment_id",readOnly:!0}),(0,c.jsx)("button",{type:"submit",className:"text-blue-400",children:"Delete"})]})]}):null]},e._id)}))]})},f=n(1413),h=n(2867),g=n(5439),p=n(9645),y=n(3877),b=function(e){var t,n=e.category,r=(0,g.a)({queryKey:["img-suggestions",{category:n._id,limit:5}],queryFn:function(e){var t=e.signal,n=e.queryKey;return(0,p._6)((0,f.Z)({signal:t},n[1]))}}),s=r.data,a=r.isLoading;r.isError,r.error;return a&&(t=(0,c.jsx)(y.Z,{})),s&&(t=s.data.docs.map((function(e){return(0,c.jsx)(h.Z,{image:e},e._id)}))),(0,c.jsx)("div",{className:"h-min grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5",children:t})},v=n(3418),j=function(e){var t=e.children,n=e.show;return(0,c.jsx)("div",{className:"".concat(n?"block":"hidden"," absolute top-[60px] right-3 p-3 border border-gray-200 bg-white text-lg min-w-[120px] flex flex-col gap-3"),style:{fontFamily:"Quicksand"},children:t})},N=n(5893),w=n(6131),C=function(){var e,t=(0,i.V4)("root"),n=(0,i.UO)("imageId"),o=(0,i.s0)(),d=(0,i.TH)().pathname,u=(0,s.useState)(!1),f=(0,r.Z)(u,2),h=f[0],y=f[1],C=(0,s.useState)(!1),k=(0,r.Z)(C,2),_=k[0],F=k[1],E=(0,s.useState)(!1),S=(0,r.Z)(E,2),Z=S[0],D=S[1],R=(0,s.useState)(!1),I=(0,r.Z)(R,2),O=I[0],q=I[1],M=(0,s.useState)(!1),U=(0,r.Z)(M,2),P=U[0],L=U[1];t&&"EXPIRED"!==t&&(e=(0,m.Z)(t)),(0,s.useEffect)((function(){window.scrollTo(0,0)}),[d]);var T=(0,g.a)({queryKey:["categories"],queryFn:function(){return(0,p.pE)()}}),K=T.data,V=(T.isError,T.error,(0,g.a)({queryKey:["image-details",n.imageId],queryFn:function(e){var t=e.signal;return(0,p.ot)({signal:t,id:n.imageId})}})),B=V.data,Q=(V.isError,V.error,(0,g.a)({queryKey:["comments",n.imageId],queryFn:function(e){var t=e.signal;return(0,p.tH)({signal:t,id:n.imageId})}})),X=Q.data,Y=(Q.isError,Q.error,(0,g.a)({queryKey:["likes",t],queryFn:function(e){var t=e.signal,r=e.queryKey;return(0,p.Yq)({signal:t,id:n.imageId,token:r[1]})}}).data),A=Y.current_user_likes,H=(0,v.D)({mutationFn:p.w,onSuccess:function(){p.Eh.invalidateQueries({queryKey:["comments"]}),y(!1),D(!1)}}),W=H.mutate,z=H.isLoading,G=H.isError,$=(H.error,(0,v.D)({mutationFn:p.mT,onSuccess:function(){p.Eh.invalidateQueries({queryKey:["likes"]})}}).mutate),J=(0,v.D)({mutationFn:p.Xb,onSuccess:function(){p.Eh.invalidateQueries({queryKey:["image-details"]}),L(!1)}}),ee=J.mutate,te=(J.isLoading,J.isError,J.error,(0,v.D)({mutationFn:p.ao,onSuccess:function(){p.Eh.invalidateQueries({queryKey:["images"]}),q(!1),o("/")}})),ne=te.mutate,re=te.isLoading,se=te.isError,ae=te.error,ie=function(){t||o("/auth?mode=login"),y(!h)};return(0,c.jsxs)("section",{className:"bg-slate-200 md:min-h-screen md:py-2 px-5",children:[(0,c.jsxs)("div",{className:"container mx-auto md:mt-3 h-[600px] flex flex-col lg:flex-row md:gap-5",children:[(0,c.jsx)("div",{className:"w-full lg:w-3/4 h-full sm:rounded-md",children:(0,c.jsx)("img",{className:"h-full object-cover w-fit mx-auto sm:rounded-md",src:B.image.url,alt:""})}),(0,c.jsxs)("div",{className:"w-full lg:w-1/4 bg-white h-full rounded-md",children:[(0,c.jsxs)("div",{className:"w-full relative",children:[(0,c.jsx)("button",{className:"absolute rounded-full bg-gray-100 w-[40px] h-[40px] top-3 left-3 p-2 text-gray-400 flex flex-col justify-center items-center",onClick:function(){o(-1)},children:(0,c.jsx)(a.YiX,{})}),t&&(0,c.jsx)("button",{className:"absolute rounded-full bg-gray-100 w-[40px] h-[40px] top-3 right-3 p-2 text-gray-400 flex flex-col justify-center items-center",onClick:function(){F(!_)},children:(0,c.jsx)(a.T41,{})}),(0,c.jsxs)(j,{show:_,children:[e&&e._id===B.image.uploaded_by._id?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{onClick:function(){F(!1),L(!0)},className:"hover:bg-gray-100 py-1 px-2 rounded-sm ease-in duration-150",children:"Edit"}),(0,c.jsx)("button",{onClick:function(){F(!1),q(!0)},className:"hover:bg-gray-100 py-1 px-2 rounded-sm ease-in duration-150",children:"Delete"})]}):null,(0,c.jsx)("button",{className:"hover:bg-gray-100 py-1 px-2 rounded-sm ease-in duration-150",children:"Report"})]})]}),(0,c.jsx)("h2",{className:"text-3xl text-center mt-5 px-5",children:B.image.title}),(0,c.jsx)("h4",{className:"text-sm text-center text-blue-600 italic mb-5",children:(0,c.jsxs)(l.rU,{to:"/".concat(B.image.uploaded_by._id,"/profile"),children:["@ ",B.image.uploaded_by.name]})}),(0,c.jsx)("p",{className:"text-sm text-center tracking-widest px-5",children:B.image.desc}),(0,c.jsxs)("div",{className:"w-full flex flex-row justify-between items-center p-5",children:[(0,c.jsxs)("div",{className:"flex flex-row justify-center items-center pointer-events-none",children:[(0,c.jsx)("span",{className:"p-2 rounded-full bg-orange-600 text-white mr-2",children:(0,c.jsx)(a.UZT,{})}),(0,c.jsx)("span",{className:"text-gray-400",children:Y.likeCount})]}),(0,c.jsxs)("div",{className:"flex flex-row justify-center items-center pointer-events-none",children:[(0,c.jsx)("span",{className:"text-gray-400",children:X.length}),(0,c.jsx)("span",{className:"p-2 rounded-full bg-orange-600 text-white ml-2",children:(0,c.jsx)(a.FSy,{})})]})]}),t&&(0,c.jsxs)("div",{className:"w-full flex flex-row justify-between px-10 items-center border-t border-b border-gray-200",children:[(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=new FormData;n.append("image_id",e.target.image_id.value),$({formData:n,token:t,method:A?"DELETE":"POST"})},className:"flex flex-row justify-center items-center ",children:[(0,c.jsx)("input",{type:"text",className:"hidden",value:n.imageId,name:"image_id",readOnly:!0}),(0,c.jsxs)("button",{type:"submit",className:"flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100",children:[(0,c.jsx)(a.UZT,{className:"mr-2 mt-1"})," ",A?"Liked":"Like"]})]}),(0,c.jsx)("div",{className:"flex flex-row justify-center items-center",children:(0,c.jsxs)(l.rU,{className:"flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100",onClick:ie,children:[(0,c.jsx)(a.FSy,{className:"mr-5 mt-1"})," Comment"]})})]}),(0,c.jsx)("div",{className:"pl-5 pt-5",children:(0,c.jsx)(x,{commentData:X,submitComment:function(e){W({formData:e,token:t,method:"POST"})},deleteComment:function(e){W({formData:e,token:t,method:"DELETE"})},editComment:function(e){W({formData:e,token:t,method:"PUT"})},toggleCommentForm:ie,showCommentForm:h,toggleEditForm:function(){t||o("/auth?mode=login"),D(!Z)},showEditForm:Z,isCommentPending:z,isPostCommentError:G})})]})]}),(0,c.jsx)("h2",{className:"container mx-auto font-bold text-3xl text-center md:text-left mt-[100px] md:mt-5 mb-5 pointer-events-none",children:"More photos like this"}),(0,c.jsx)("div",{className:"container mx-auto lg:mb-5",children:(0,c.jsx)(b,{category:B.image.category})}),(0,c.jsx)(N.Z,{isVisible:O,onClose:function(){return q(!1)},children:(0,c.jsxs)("div",{className:"w-[200px] p-5",children:[re&&(0,c.jsx)("div",{className:"px-3 py-1 rounded bg-gray-200",children:(0,c.jsx)("span",{className:"animate-pulse text-red-600 font-bold tracking-wide",children:"Image deleting..."})}),se&&(0,c.jsx)("div",{className:"px-3 py-1 rounded bg-red-200",children:(0,c.jsx)("span",{className:"text-red-600 font-bold tracking-wide",children:ae.info.message})}),(0,c.jsx)("h3",{className:"text-2xl text-center text-gray-600 font-semibold",children:"Are You Sure ?"}),(0,c.jsxs)("div",{className:"mx-auto flex justify-center my-2",children:[(0,c.jsx)("button",{onClick:function(){var e=n.imageId;ne({imageId:e,token:t})},className:"px-2 bg-red-600 text-white rounded",children:"Yes"}),(0,c.jsx)("button",{onClick:function(){return q(!1)},className:"px-2 bg-green-600 text-white rounded ml-2",children:"No"})]})]})}),(0,c.jsx)(N.Z,{isVisible:P,onClose:function(){return L(!1)},children:(0,c.jsx)(w.Z,{categoryData:K,submitFn:function(e){var r=n.imageId;ee({formData:e,imageId:r,token:t})},method:"edit",imageData:B})})]})},k=function(e){var t=e.params;return p.Eh.fetchQuery({queryKey:["image-details",t.imageId],queryFn:function(e){var n=e.signal;return(0,p.ot)({signal:n,id:t.imageId})}})}},3877:function(e,t,n){n(2791);var r=n(184);t.Z=function(){return(0,r.jsxs)("div",{className:"rounded-md h-[300px] w-[300px] mx-auto bg-white flex flex-col shadow shadow-md animate-pulse",children:[(0,r.jsx)("div",{className:"h-[200px] mx-5 mt-5 rounded-t-md object-fill bg-gray-200"}),(0,r.jsxs)("div",{className:"h-[100px] mx-5",children:[(0,r.jsx)("div",{className:"flex flex-row justify-between items-center my-2 ",children:(0,r.jsx)("h4",{className:"bg-gray-200 p-2 pointer-events-none w-full h-[20px]"})}),(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center w-full pointer-events-none",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"rounded-md bg-gray-100 p-3 mr-2"}),(0,r.jsx)("div",{className:"rounded-md bg-gray-100 p-3 "})]}),(0,r.jsx)("p",{className:"text-sm bg-gray-200 p-2 w-[60px]"})]})]})]})}},5893:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.isVisible,n=e.onClose,s=e.children;if(!t)return null;return(0,r.jsx)("div",{onClick:function(e){"modalWrapper"===e.target.id&&n()},id:"modalWrapper",className:"fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center",children:(0,r.jsxs)("div",{className:"max-w-[800px] flex flex-col",children:[(0,r.jsx)("button",{onClick:n,className:"text-white text-xl place-self-end",children:"X"}),(0,r.jsx)("div",{className:"bg-white p-2 rounded",children:s})]})})}},3418:function(e,t,n){n.d(t,{D:function(){return p}});var r=n(1413),s=n(9439),a=n(2791),i=n(3734),l=n(5671),o=n(3144),c=n(136),d=n(7277),u=n(9054),m=n(9538),x=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(e,r){var s;return(0,l.Z)(this,n),(s=t.call(this)).client=e,s.setOptions(r),s.bindMethods(),s.updateResult(),s}return(0,o.Z)(n,[{key:"bindMethods",value:function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}},{key:"setOptions",value:function(e){var t,n=this.options;this.options=this.client.defaultMutationOptions(e),(0,i.VS)(n,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}},{key:"onUnsubscribe",value:function(){var e;this.hasListeners()||(null==(e=this.currentMutation)||e.removeObserver(this))}},{key:"onMutationUpdate",value:function(e){this.updateResult();var t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}},{key:"getCurrentResult",value:function(){return this.currentResult}},{key:"reset",value:function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}},{key:"mutate",value:function(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,(0,r.Z)((0,r.Z)({},this.options),{},{variables:"undefined"!==typeof e?e:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()}},{key:"updateResult",value:function(){var e=this.currentMutation?this.currentMutation.state:(0,u.R)(),t=(0,r.Z)((0,r.Z)({},e),{},{isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset});this.currentResult=t}},{key:"notify",value:function(e){var t=this;m.V.batch((function(){var n,r,s,a;if(t.mutateOptions&&t.hasListeners())if(e.onSuccess)null==(n=(r=t.mutateOptions).onSuccess)||n.call(r,t.currentResult.data,t.currentResult.variables,t.currentResult.context),null==(s=(a=t.mutateOptions).onSettled)||s.call(a,t.currentResult.data,null,t.currentResult.variables,t.currentResult.context);else if(e.onError){var i,l,o,c;null==(i=(l=t.mutateOptions).onError)||i.call(l,t.currentResult.error,t.currentResult.variables,t.currentResult.context),null==(o=(c=t.mutateOptions).onSettled)||o.call(c,void 0,t.currentResult.error,t.currentResult.variables,t.currentResult.context)}e.listeners&&t.listeners.forEach((function(e){(0,e.listener)(t.currentResult)}))}))}}]),n}(n(5511).l),f=n(7413),h=n(6403),g=n(9608);function p(e,t,n){var l=(0,i.lV)(e,t,n),o=(0,h.NL)({context:l.context}),c=a.useState((function(){return new x(o,l)})),d=(0,s.Z)(c,1)[0];a.useEffect((function(){d.setOptions(l)}),[d,l]);var u=(0,f.$)(a.useCallback((function(e){return d.subscribe(m.V.batchCalls(e))}),[d]),(function(){return d.getCurrentResult()}),(function(){return d.getCurrentResult()})),p=a.useCallback((function(e,t){d.mutate(e,t).catch(y)}),[d]);if(u.error&&(0,g.L)(d.options.useErrorBoundary,[u.error]))throw u.error;return(0,r.Z)((0,r.Z)({},u),{},{mutate:p,mutateAsync:u.mutate})}function y(){}},5439:function(e,t,n){n.d(t,{a:function(){return i}});var r=n(3734),s=n(1135),a=n(8560);function i(e,t,n){var i=(0,r._v)(e,t,n);return(0,a.r)(i,s.z)}}}]);
//# sourceMappingURL=517.aeab5f42.chunk.js.map