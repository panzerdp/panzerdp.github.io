System.register(["./index-legacy-73c2d7ce.js","./adaptHtmlElementAsync-legacy-98690e9f.js"],(function(e,t){"use strict";var r,a,n,l,o,i,c,s,u,p,d,b,v,f,y,m,g,O,h,j,T,P,w,C,L,E,k,S,A,_,x,D,M,V,B,H,z,I,q,$,F,N,R,G,K,Y,J,Q,W,U,X,Z,ee,te,re,ae,ne,le,oe,ie,ce,se,ue=document.createElement("style");return ue.textContent=".option-header{display:flex;justify-content:space-between}.template-preview{width:320px}\n",document.head.appendChild(ue),{setters:[e=>{r=e.d,a=e.r,n=e.c,l=e.n,o=e.b,i=e.g,c=e.o,s=e.s,u=e.l,p=e.a,d=e.e,b=e.f,v=e.h,f=e.u,y=e.i,m=e.j,g=e.k},e=>{O=e.m,h=e.P,j=e.a,T=e.b,P=e.e,w=e.N,C=e.c,L=e.t,E=e.d,k=e.i,S=e.f,A=e.o,_=e.k,x=e.p,D=e.g,M=e.h,V=e.j,B=e.l,H=e.n,z=e.q,I=e.r,q=e.s,$=e.u,F=e.v,N=e.w,R=e.x,G=e.y,K=e.z,Y=e.A,J=e.B,Q=e.C,W=e.D,U=e.E,X=e.F,Z=e.G,ee=e.H,te=e.S,re=e.I,ae=e.J,ne=e.K,le=e.L,oe=e.M,ie=e.O,ce=e.Q,se=e.R}],execute:function(){function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ue={viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"icon"},pe={width:null,height:null,focusable:null,role:null,"aria-label":null},de={animation:O(h),content:O(h),flipH:O(j,!1),flipV:O(j,!1),fontScale:O(T,1),rotate:O(T,0),scale:O(T,1),shiftH:O(T,0),shiftV:O(T,0),stacked:O(j,!1),title:O(h),variant:O(h)},be=P({name:w,functional:!0,props:de,render:function(e,r){var a,n=r.data,l=r.props,o=r.children,i=l.animation,c=l.content,s=l.flipH,u=l.flipV,p=l.stacked,d=l.title,b=l.variant,v=C(L(l.fontScale,1),0)||1,f=C(L(l.scale,1),0)||1,y=L(l.rotate,0),m=L(l.shiftH,0),g=L(l.shiftV,0),O=s||u||1!==f,h=O||y,j=m||g,T=!k(c),P=e("g",{attrs:{transform:[h?"translate(8 8)":null,O?"scale(".concat((s?-1:1)*f," ").concat((u?-1:1)*f,")"):null,y?"rotate(".concat(y,")"):null,h?"translate(-8 -8)":null].filter(S).join(" ")||null},domProps:T?{innerHTML:c||""}:{}},o);j&&(P=e("g",{attrs:{transform:"translate(".concat(16*m/16," ").concat(-16*g/16,")")}},[P])),p&&(P=e("g",[P]));var w=[d?e("title",d):null,P].filter(S);return e("svg",E({staticClass:"b-icon bi",class:(a={},t(a,"text-".concat(b),b),t(a,"b-icon-animation-".concat(i),i),a),attrs:ue,style:p?{}:{fontSize:1===v?null:"".concat(100*v,"%")}},n,p?{attrs:pe}:{},{attrs:{xmlns:p?null:"http://www.w3.org/2000/svg",fill:"currentColor"}}),w)}});function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){ye(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ye(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var me=A(de,["content"]),ge=function(e,t){var r=_(e),a="BIcon".concat(x(e)),n="bi-".concat(r),l=r.replace(/-/g," "),o=D(t||"");return P({name:a,functional:!0,props:me,render:function(e,t){var r=t.data,a=t.props;return e(be,E({props:{title:l},attrs:{"aria-label":l}},r,{staticClass:n,props:fe(fe({},a),{},{content:o})}))}})},Oe=ge("ExclamationTriangle",'<path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/><path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>'),he=M({bgVariant:O(h),borderVariant:O(h),tag:O(h,"div"),textVariant:O(h)},V);P({props:he});var je=M({title:O(h),titleTag:O(h,"h4")},B),Te=P({name:B,functional:!0,props:je,render:function(e,t){var r=t.props,a=t.data,n=t.children;return e(r.titleTag,E(a,{staticClass:"card-title"}),n||H(r.title))}}),Pe=M({subTitle:O(h),subTitleTag:O(h,"h6"),subTitleTextVariant:O(h,"muted")},z),we=P({name:z,functional:!0,props:Pe,render:function(e,t){var r=t.props,a=t.data,n=t.children;return e(r.subTitleTag,E(a,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),n||H(r.subTitle))}});function Ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(r),!0).forEach((function(t){Ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ke=M(q(Le(Le(Le(Le({},je),Pe),F(he,N.bind(null,"body"))),{},{bodyClass:O($),overlay:O(j,!1)})),I),Se=P({name:I,functional:!0,props:ke,render:function(e,t){var r,a=t.props,n=t.data,l=t.children,o=a.bodyBgVariant,i=a.bodyBorderVariant,c=a.bodyTextVariant,s=e();a.title&&(s=e(Te,{props:R(je,a)}));var u=e();return a.subTitle&&(u=e(we,{props:R(Pe,a),class:["mb-2"]})),e(a.bodyTag,E(n,{staticClass:"card-body",class:[(r={"card-img-overlay":a.overlay},Ee(r,"bg-".concat(o),o),Ee(r,"border-".concat(i),i),Ee(r,"text-".concat(c),c),r),a.bodyClass]}),[s,u,l])}});function Ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(r),!0).forEach((function(t){xe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function xe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var De=M(q(_e(_e({},F(he,N.bind(null,"header"))),{},{header:O(h),headerClass:O($),headerHtml:O(h)})),G),Me=P({name:G,functional:!0,props:De,render:function(e,t){var r,a=t.props,n=t.data,l=t.children,o=a.headerBgVariant,i=a.headerBorderVariant,c=a.headerTextVariant;return e(a.headerTag,E(n,{staticClass:"card-header",class:[a.headerClass,(r={},xe(r,"bg-".concat(o),o),xe(r,"border-".concat(i),i),xe(r,"text-".concat(c),c),r)],domProps:l?{}:K(a.headerHtml,a.header)}),l)}});function Ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(r),!0).forEach((function(t){He(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function He(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ze=M(q(Be(Be({},F(he,N.bind(null,"footer"))),{},{footer:O(h),footerClass:O($),footerHtml:O(h)})),Y),Ie=P({name:Y,functional:!0,props:ze,render:function(e,t){var r,a=t.props,n=t.data,l=t.children,o=a.footerBgVariant,i=a.footerBorderVariant,c=a.footerTextVariant;return e(a.footerTag,E(n,{staticClass:"card-footer",class:[a.footerClass,(r={},He(r,"bg-".concat(o),o),He(r,"border-".concat(i),i),He(r,"text-".concat(c),c),r)],domProps:l?{}:K(a.footerHtml,a.footer)}),l)}}),qe=M({alt:O(h),blank:O(j,!1),blankColor:O(h,"transparent"),block:O(j,!1),center:O(j,!1),fluid:O(j,!1),fluidGrow:O(j,!1),height:O(T),left:O(j,!1),right:O(j,!1),rounded:O(Q,!1),sizes:O(W),src:O(h),srcset:O(W),thumbnail:O(j,!1),width:O(T)},J);function $e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$e(Object(r),!0).forEach((function(t){Ne(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$e(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Re=M(q(Fe(Fe({},X(qe,["src","alt","width","height","left","right"])),{},{bottom:O(j,!1),end:O(j,!1),start:O(j,!1),top:O(j,!1)})),U),Ge=P({name:U,functional:!0,props:Re,render:function(e,t){var r=t.props,a=t.data,n=r.src,l=r.alt,o=r.width,i=r.height,c="card-img";return r.top?c+="-top":r.right||r.end?c+="-right":r.bottom?c+="-bottom":(r.left||r.start)&&(c+="-left"),e("img",E(a,{class:c,attrs:{src:n,alt:l,width:o,height:i}}))}});function Ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(r),!0).forEach((function(t){Je(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Je(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Qe=F(Re,N.bind(null,"img"));Qe.imgSrc.required=!1;var We=M(q(Ye(Ye(Ye(Ye(Ye(Ye({},ke),De),ze),Qe),he),{},{align:O(h),noBody:O(j,!1)})),V),Ue=P({name:V,functional:!0,props:We,render:function(e,t){var r,a=t.props,n=t.data,l=t.slots,o=t.scopedSlots,i=a.imgSrc,c=a.imgLeft,s=a.imgRight,u=a.imgStart,p=a.imgEnd,d=a.imgBottom,b=a.header,v=a.headerHtml,f=a.footer,y=a.footerHtml,m=a.align,g=a.textVariant,O=a.bgVariant,h=a.borderVariant,j=o||{},T=l(),P={},w=e(),C=e();if(i){var L=e(Ge,{props:R(Qe,a,Z.bind(null,"img"))});d?C=L:w=L}var k=e(),S=ee(te,j,T);(S||b||v)&&(k=e(Me,{props:R(De,a),domProps:S?{}:K(v,b)},re(te,P,j,T)));var A=re(ae,P,j,T);a.noBody||(A=e(Se,{props:R(ke,a)},A),a.overlay&&i&&(A=e("div",{staticClass:"position-relative"},[w,A,C]),w=e(),C=e()));var _=e();return(ee(ne,j,T)||f||y)&&(_=e(Ie,{props:R(ze,a),domProps:S?{}:K(y,f)},re(ne,P,j,T))),e(a.tag,E(n,{staticClass:"card",class:(r={"flex-row":c||u,"flex-row-reverse":(s||p)&&!(c||u)},Je(r,"text-".concat(m),m),Je(r,"bg-".concat(O),O),Je(r,"border-".concat(h),h),Je(r,"text-".concat(g),g),r)}),[w,k,A,_,C])}}),Xe=M({textTag:O(h,"p")},le),Ze=P({name:le,functional:!0,props:Xe,render:function(e,t){var r=t.props,a=t.data,n=t.children;return e(r.textTag,E(a,{staticClass:"card-text"}),n)}});const et=r({components:{BButton:oe,BCard:Ue,BCardText:Ze,AdaptContainer:a.exports.AdaptContainer},props:{name:{type:String,required:!0},template:{type:Object,required:!0}},setup:(e,{emit:t})=>({templateContent:n((()=>`<p>${e.template.content}</p>`)),onModify:()=>t("modify",e.template.settings),adaptHtmlElementAsyncFn:ie})}),tt=l(et,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("b-card",[t("b-card-text",[t("div",{staticClass:"option-header"},[t("strong",{staticClass:"mb-2"},[e._v(e._s(e.template.name))]),t("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.onModify()}}},[e._v(e._s(e.$t("SELECT_TEMPLATE.MODIFY")))])],1),t("ul",[e._l(e.template.descriptions,(function(r){return[t("li",{key:r},[e._v(e._s(r))])]}))],2)]),t("AdaptContainer",{staticClass:"template-preview",attrs:{"adapt-html-element-async":e.adaptHtmlElementAsyncFn(),"content-to-adapt":e.templateContent,settings:e.template.settings,scope:e.template.value}})],1)}),[],!1,null,null,null,null).exports,rt=r({components:{BCol:ce,BRow:se,TemplateSelectorOption:tt},props:{templates:{type:Array,required:!0}},setup:(e,{emit:t})=>({onModify:e=>t("modify",e)})}),at=l(rt,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("b-row",[e._l(e.templates,(function(r){return[t("b-col",{key:r.value,staticClass:"mt-2",attrs:{lg:"6",sm:"12",md:"12"}},[t("TemplateSelectorOption",{attrs:{name:"template-radio-field",template:r},on:{modify:e.onModify}})],1)]}))],2)}),[],!1,null,null,null,null).exports,nt=o("en"),lt=o("fr"),ot=i("en").textPreview,it=i("fr").textPreview,ct=[{name:"Template 1",descriptions:["Alternate lines shaded","Silent letters greyed"],content:ot,value:"template-1-en",settings:{...nt,shadeAlternateLinesActive:!0,shadeAlternateLinesOpacity:c[1].value,silentLetterActive:!0,silentLetterOpacity:s[2].value,lineSpacing:u[1].value}},{name:"Template 2",descriptions:["Syllables colored","Silent letters greyed"],content:ot,value:"template-2-en",settings:{...nt,syllableActive:!0,syllableColor1:p[3],syllableColor2:p[4],syllableOpacity:c[1].value,silentLetterActive:!0,silentLetterOpacity:s[2].value}},{name:"Template 3",descriptions:["Mirror letters differentiated","Silent letters greyed"],content:ot,value:"template-3-en",settings:{...nt,shadeAlternateLinesActive:!0,shadeAlternateLinesOpacity:c[1].value,silentLetterActive:!0,silentLetterOpacity:s[2].value,lineSpacing:u[1].value,letters:d("en",[{key:"2",value:"d",bold:!1,color:p[0],active:!0},{key:"8",value:"m",bold:!1,color:p[1],active:!0},{key:"7",value:"n",bold:!1,color:p[2],active:!0},{key:"3",value:"p",bold:!1,color:p[3],active:!0},{key:"1",value:"b",bold:!1,color:p[4],active:!0},{key:"24",value:"w",bold:!1,color:p[7],active:!0},{key:"19",value:"u",bold:!1,color:p[8],active:!0},{key:"4",value:"q",bold:!1,color:p[11],active:!0}])}},{name:"Template 4",descriptions:["Similar phonemes differentiated","Silent letters greyed"],content:ot,value:"template-4-en",settings:{...nt,shadeAlternateLinesActive:!0,shadeAlternateLinesOpacity:c[1].value,silentLetterActive:!0,silentLetterOpacity:s[2].value,lineSpacing:u[1].value,phonemes:b("en",[{key:"9",value:"d",bold:!1,color:p[0],active:!0},{key:"15",value:"g",bold:!1,color:p[1],active:!0},{key:"14",value:"f",bold:!1,color:p[2],active:!0},{key:"27",value:"p",bold:!1,color:p[3],active:!0},{key:"31",value:"t",bold:!1,color:p[4],active:!0},{key:"20",value:"k",bold:!1,color:p[7],active:!0},{key:"35",value:"v",bold:!1,color:p[8],active:!0},{key:"8",value:"ch",bold:!1,color:p[9],active:!0},{key:"19",value:"jh",bold:!1,color:p[10],active:!0},{key:"7",value:"b",bold:!1,color:p[11],active:!0}])}},{name:"Template 1",descriptions:["Différenciation des lignes","Différenciation des lettres muettes"],content:it,value:"template-1-fr",settings:{...lt,shadeAlternateLinesActive:!0,shadeAlternateLinesOpacity:c[1].value,silentLetterActive:!0,silentLetterOpacity:s[2].value,lineSpacing:u[1].value}},{name:"Template 2",descriptions:["Différenciation des syllabes","Différenciation des lettres muettes"],content:it,value:"template-2-fr",settings:{...lt,syllableActive:!0,syllableColor1:p[3],syllableColor2:p[4],syllableOpacity:c[1].value,silentLetterActive:!0,silentLetterOpacity:s[2].value}},{name:"Template 3",descriptions:["Différenciation des lettres miroirs","Différenciation des lettres muettes"],content:it,value:"template-3-fr",settings:{...lt,shadeAlternateLinesActive:!0,shadeAlternateLinesOpacity:c[1].value,silentLetterActive:!0,silentLetterOpacity:s[2].value,lineSpacing:u[1].value,letters:d("fr",[{key:"2",value:"d",bold:!1,color:p[0],active:!0},{key:"7",value:"m",bold:!1,color:p[1],active:!0},{key:"6",value:"n",bold:!1,color:p[2],active:!0},{key:"3",value:"p",bold:!1,color:p[3],active:!0},{key:"1",value:"b",bold:!1,color:p[4],active:!0},{key:"27",value:"w",bold:!1,color:p[7],active:!0},{key:"5",value:"u, ù",bold:!1,color:p[8],active:!0},{key:"4",value:"q",bold:!1,color:p[11],active:!0}])}},{name:"Template 4",descriptions:["Différenciation des phonèmes similaires","Différenciation des lettres muettes"],content:it,value:"template-4-fr",settings:{...lt,syllableActive:!1,shadeAlternateLinesActive:!0,shadeAlternateLinesOpacity:c[1].value,silentLetterActive:!0,silentLetterOpacity:s[2].value,lineSpacing:u[1].value,phonemes:b("fr",[{key:"6",value:"d",bold:!1,color:p[0],active:!0},{key:"12",value:"g",bold:!1,color:p[1],active:!0},{key:"11",value:"f",bold:!1,color:p[2],active:!0},{key:"29",value:"p",bold:!1,color:p[3],active:!0},{key:"32",value:"t",bold:!1,color:p[4],active:!0},{key:"4",value:"c",bold:!1,color:p[7],active:!0},{key:"35",value:"v",bold:!1,color:p[8],active:!0},{key:"5",value:"ch",bold:!1,color:p[9],active:!0},{key:"17",value:"j",bold:!1,color:p[10],active:!0},{key:"3",value:"b",bold:!1,color:p[11],active:!0}])}}],st=r({components:{BIconExclamationTriangle:Oe,BButton:oe,TemplateSelector:at,LanguageSelector:a.exports.LanguageSelector},setup(){const e=v("en"),{closeCurrentTab:t}=m,r=n((()=>{return ct.filter((t=e.value,e=>e.settings.language===t));var t})),a=v(r.value[0]),{createProfile:l,generateNextProfileId:o}=f(),i=e=>{const t=o();l({name:"From template "+t,settings:g(e)}),c.push({path:"options?profileId="+t})},c=y();return{selectedLanguage:e,onLanguageChange:t=>{e.value=t,a.value=r.value[0]},selectedTemplate:a,onChangeTemplate:e=>a.value=e,onModifyTemplate:e=>{i(e)},filteredTemplates:r,saveTemplate:()=>{i(a.value.settings)},closeCurrentTab:t,router:c}}});e("default",l(st,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"container-md"},[t("div",{staticClass:"mt-2"},[t("h2",[e._v(e._s(e.$t("SELECT_TEMPLATE.PLEASE_SELECT_A_TEMPLATE")))]),t("p",[e._v(e._s(e.$t("SELECT_TEMPLATE.CLICK_TO_MODIFY_OR_SELECT_TEMPLATE")))]),t("p",[t("b-icon-exclamation-triangle"),e._v(" "+e._s(e.$t("SELECT_TEMPLATE.CLICK_ON_SELECT_WARNING")))],1)]),t("div",[t("LanguageSelector",{attrs:{value:e.selectedLanguage},on:{change:e.onLanguageChange}}),t("TemplateSelector",{attrs:{templates:e.filteredTemplates,value:e.selectedTemplate},on:{change:e.onChangeTemplate,modify:e.onModifyTemplate}})],1),t("div",{staticClass:"mt-2 d-flex justify-content-end"},[t("b-button",{staticClass:"mr-3",attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.saveTemplate()}}},[e._v(e._s(e.$t("SELECT_TEMPLATE.SELECT")))]),t("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(t){return e.closeCurrentTab(e.router)}}},[e._v(e._s(e.$t("SELECT_TEMPLATE.CANCEL")))])],1)])}),[],!1,null,null,null,null).exports)}}}));
