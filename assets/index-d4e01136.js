import{d as g,o as u,e as f,f as e,t as c,g as v,u as r,i as _,I as b,k as P,a as p,X as M,F as y,Y as V,Z as w,l as h,w as $,J as R,$ as S,W as I,c as O,a0 as C,h as K}from"./index-c9f6c702.js";import{t as L,o as x,f as D,_ as F}from"./textAdaptation-7dd9509b.js";import{_ as k}from"./RangeBar.vue_vue_type_script_setup_true_lang-063bc021.js";const H={class:"rounded-lg border border-base-300"},X={class:"table w-full"},Y={class:"w-40 p-3 font-semibold",rowspan:"2"},Q={class:"p-3"},J={class:"p-3"},z={class:"p-3"},W={class:"p-3"},Z={class:"w-40 border-b-0 bg-transparent p-3 font-semibold",rowspan:"2"},j={class:"p-3"},q={class:"p-3"},ee={class:"p-3"},te={class:"p-3"},se=g({__name:"ReadingToolsForm",props:{maskThickness:null,maskOpacity:null,rulerThickness:null,rulerOpacity:null},emits:["undefined","update:rulerThickness","update:maskOpacity","update:rulerOpacity"],setup(a,{emit:t}){return(n,s)=>(u(),f("div",H,[e("table",X,[e("tbody",null,[e("tr",null,[e("td",Y,c(n.$t("QUICK_ACTIVATE.SCREEN_MASK")),1),e("td",Q,c(n.$t("QUICK_ACTIVATE.THICKNESS")),1),e("td",J,[v(k,{"model-value":a.maskThickness,options:r(L),"onUpdate:modelValue":s[0]||(s[0]=o=>t("update:maskThickness",o))},null,8,["model-value","options"])])]),e("tr",null,[e("td",z,c(n.$t("QUICK_ACTIVATE.OPACITY")),1),e("td",W,[v(k,{"model-value":a.maskOpacity,options:r(x),"onUpdate:modelValue":s[1]||(s[1]=o=>t("update:maskOpacity",o))},null,8,["model-value","options"])])]),e("tr",null,[e("td",Z,c(n.$t("QUICK_ACTIVATE.READING_RULER")),1),e("td",j,c(n.$t("QUICK_ACTIVATE.THICKNESS")),1),e("td",q,[v(k,{"model-value":a.rulerThickness,options:r(L),"onUpdate:modelValue":s[2]||(s[2]=o=>t("update:rulerThickness",o))},null,8,["model-value","options"])])]),e("tr",null,[e("td",ee,c(n.$t("QUICK_ACTIVATE.OPACITY")),1),e("td",te,[v(k,{"model-value":a.rulerOpacity,options:r(x),"onUpdate:modelValue":s[3]||(s[3]=o=>t("update:rulerOpacity",o))},null,8,["model-value","options"])])])])])]))}});function G(){const a=_(0),t=n=>a.value=n.clientY;return b(()=>{document.addEventListener("mousemove",t)}),P(()=>{document.removeEventListener("mousemove",t)}),{clientY:a}}const oe={class:"ruler__line fixed inset-x-0 top-0 bg-black print:hidden"},ne=g({__name:"ReadingToolsRuler",props:{ruler:null},setup(a){const t=a;M(l=>({"35f79210":r(d),"1d85f649":r(s),"392b4c24":r(o)}));const{clientY:n}=G(),s=p(()=>`${n.value}px`),o=p(()=>"#000000"+t.ruler.opacity),d=p(()=>`${t.ruler.thickness}px`);return console.log(t),(l,i)=>(u(),f("div",oe))}});const N=(a,t)=>{const n=a.__vccOpts||a;for(const[s,o]of t)n[s]=o;return n},ae=N(ne,[["__scopeId","data-v-e395992c"]]),U=a=>(V("data-v-f2817bde"),a=a(),w(),a),le=U(()=>e("div",{class:"mask__top fixed inset-0 print:hidden"},null,-1)),ie=U(()=>e("div",{class:"mask__bottom top-50 fixed inset-0 print:hidden"},null,-1)),ce=g({__name:"ReadingToolsMask",props:{mask:null},setup(a){const t=a;M(i=>({"93df31a4":r(n),"4ef434d2":r(l),"48bd3f56":r(o)}));const n=p(()=>"#000000"+t.mask.opacity),s=p(()=>25*parseInt(t.mask.thickness)),o=p(()=>`${s.value}px`),{clientY:d}=G(),l=p(()=>`${d.value-Math.floor(s.value/2)}px`);return(i,T)=>(u(),f(y,null,[le,ie],64))}});const re=N(ce,[["__scopeId","data-v-f2817bde"]]),de=g({__name:"PrintButton",setup(a){const t=_(),n=p(()=>t.value!==Office.PlatformType.Mac);b(()=>{Office.onReady(o=>{t.value=o.platform})});const s=()=>window.print();return(o,d)=>r(n)?(u(),f("button",{key:0,class:"btn-outline btn-secondary btn-xs btn",onClick:s},c(o.$t("DIALOG_BOX.PRINT")),1)):h("",!0)}}),ue={class:"sticky top-0 z-10 flex items-center gap-4 bg-white py-2 px-4 print:hidden"},_e={class:"flex cursor-pointer items-center"},pe={class:"flex cursor-pointer items-center"},me={for:"reading-tools-form-modal",class:"btn-outline btn-xs btn"},ve=e("input",{id:"reading-tools-form-modal",type:"checkbox",class:"modal-toggle"},null,-1),fe={class:"modal"},ge={class:"modal-box relative"},he=e("label",{for:"reading-tools-form-modal",class:"btn-sm btn-circle btn absolute right-2 top-2"},"✕",-1),ke=g({__name:"ReadingTools",setup(a){const t=_(C()),n=_(C()),s=_(!1),o=_(!1);return $(s,()=>{s.value&&(o.value=!1)}),$(o,()=>{o.value&&(s.value=!1)}),(d,l)=>(u(),f(y,null,[e("div",ue,[e("label",_e,[R(e("input",{"onUpdate:modelValue":l[0]||(l[0]=i=>s.value=i),type:"checkbox",class:"toggle toggle-sm mr-1"},null,512),[[S,s.value]]),I(" "+c(d.$t("DIALOG_BOX.MASK")),1)]),e("label",pe,[R(e("input",{"onUpdate:modelValue":l[1]||(l[1]=i=>o.value=i),type:"checkbox",class:"toggle toggle-sm mr-1"},null,512),[[S,o.value]]),I(" "+c(d.$t("DIALOG_BOX.RULER")),1)]),e("label",me,c(d.$t("SETTINGS.MY_PREFERENCES")),1),ve,e("div",fe,[e("div",ge,[he,v(se,{"mask-opacity":t.value.opacity,"onUpdate:mask-opacity":l[2]||(l[2]=i=>t.value.opacity=i),"mask-thickness":t.value.thickness,"onUpdate:mask-thickness":l[3]||(l[3]=i=>t.value.thickness=i),"ruler-opacity":n.value.opacity,"onUpdate:ruler-opacity":l[4]||(l[4]=i=>n.value.opacity=i),"ruler-thickness":n.value.thickness,"onUpdate:ruler-thickness":l[5]||(l[5]=i=>n.value.thickness=i),class:"mt-6"},null,8,["mask-opacity","mask-thickness","ruler-opacity","ruler-thickness"])])]),v(de,{class:"ml-auto"})]),s.value?(u(),O(re,{key:0,mask:t.value},null,8,["mask"])):h("",!0),o.value?(u(),O(ae,{key:1,ruler:n.value},null,8,["ruler"])):h("",!0)],64))}}),Ae={key:0,class:"alert relative m-4 block w-auto shadow-lg"},Ie={class:"text-lg font-semibold"},Oe={class:"p-1 text-sm"},be={class:"p-1 text-sm"},ye=["href"],Te=g({__name:"FloatingImagesAlert",setup(a){const t=_(!0),n=()=>t.value=!1;return(s,o)=>t.value?(u(),f("div",Ae,[e("div",{class:"btn-sm btn-circle btn absolute right-2 top-2",onClick:n},"✕"),e("div",Ie,c(s.$t("DIALOG_BOX.FLOATING_IMAGES_TITLE")),1),e("div",Oe,c(s.$t("DIALOG_BOX.FLOATING_IMAGES_EXPLANATION")),1),e("div",be,[I(c(s.$t("DIALOG_BOX.FLOATING_IMAGES_LEARN_MORE"))+" ",1),e("a",{class:"link",target:"_blank",href:s.$t("DIALOG_BOX.FLOATING_IMAGES_SUPPORT_LINK")},c(s.$t("DIALOG_BOX.FLOATING_IMAGES_CLICK_HERE")),9,ye)])])):h("",!0)}}),Ee={class:"py-2 px-4"},$e={key:0},Le=g({__name:"AdaptedContentPage",setup(a){const t=_(""),{getActiveProfile:n}=K(),s=p(()=>{var m;return(m=n())==null?void 0:m.settings}),o=_(""),d=_(!1),l=m=>{try{const A=m.message,{html:B,withFloatingImages:E}=JSON.parse(A);o.value=B,d.value=E,console.log("withFloatingImages",E)}catch{t.value="error"}},i=()=>{Office.context.ui.messageParent("ready",{targetOrigin:"*"})},T=m=>{i(),m.status!==Office.AsyncResultStatus.Succeeded&&(t.value=m.error.message)};return b(()=>{Office.onReady(()=>{Office.context.ui.addHandlerAsync(Office.EventType.DialogParentMessageReceived,l,T)})}),(m,A)=>(u(),f(y,null,[v(r(ke)),e("div",Ee,[t.value?(u(),f("div",$e,c(t.value),1)):h("",!0),d.value?(u(),O(Te,{key:1})):h("",!0),v(F,{"adapt-html-element-async":r(D)(),settings:r(s),"content-to-adapt":o.value},null,8,["adapt-html-element-async","settings","content-to-adapt"])])],64))}});export{Le as AdaptedContentPage};
