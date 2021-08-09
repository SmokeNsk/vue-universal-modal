var e=Object.defineProperty,o=Object.prototype.hasOwnProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,t=(o,l,a)=>l in o?e(o,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[l]=a,s=(e,s)=>{for(var n in s||(s={}))o.call(s,n)&&t(e,n,s[n]);if(l)for(var n of l(s))a.call(s,n)&&t(e,n,s[n]);return e};import{d as n,r as d,c as u,a as r,w as i,F as c,b as m,o as v,e as b,f as h,p,g as f,h as M,i as w,n as y,j as C,k as g,l as S,t as k,m as E,q as x,T as V,s as _,u as L,v as D,x as U,y as A,z as j,A as R,B as O}from"./vendor.2f2c88a5.js";!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(l){const a=new URL(e,location),t=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((l,s)=>{const n=new URL(e,a);if(self[o].moduleMap[n])return l(self[o].moduleMap[n]);const d=new Blob([`import * as m from '${n}';`,`${o}.moduleMap['${n}']=m;`],{type:"text/javascript"}),u=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){s(new Error(`Failed to import: ${e}`)),t(u)},onload(){l(self[o].moduleMap[n]),t(u)}});document.head.appendChild(u)})),self[o].moduleMap={}}}("/vue-universal-modal/demo/");const $={h3:"mt-6 mb-2 text-xl font-bold",ul:"mt-2 list-disc list-inside",button:"mt-2 rounded-full py-1 px-4 bg-white transition border-blue-500 border-2 text-blue-500 text-sm hover:border-blue-700 hover:text-blue-700 focus:bg-blue-700 focus:text-white focus:outline-none"};var T=n({setup(){const e=d(!1);return{isShow:e,showModal:function(){e.value=!0},closeModal:function(){e.value=!1},style:$}}});const B={class:"modal"},K=r("p",null," Hello ",-1);T.render=function(e,o,l,a,t,s){const n=m("Modal");return v(),u(c,null,[r("h3",{class:e.style.h3}," 1. basic ",2),r("div",null,[r("button",{class:e.style.button,onClick:o[1]||(o[1]=(...o)=>e.showModal&&e.showModal(...o))}," Show modal ",2),r("a",{href:"https://github.com/hoiheart/vue-universal-modal/blob/master/example/1.basic.vue",target:"_blank",class:[e.style.button,"ml-2"]}," Source ",2)]),r(n,{modelValue:e.isShow,"onUpdate:modelValue":o[3]||(o[3]=o=>e.isShow=o),close:e.closeModal},{default:i((()=>[r("div",B,[K,r("button",{class:e.style.button,onClick:o[2]||(o[2]=(...o)=>e.closeModal&&e.closeModal(...o))}," close ",2)])])),_:1},8,["modelValue","close"])],64)};var N=n({setup(){const e=d(!1);return{isShow:e,showModal:function(){e.value=!0},closeModal:function(){e.value=!1},style:$}}});const F={class:"modal"},I=r("p",null," change v-show ",-1);N.render=function(e,o,l,a,t,s){const n=m("Modal");return v(),u(c,null,[r("h3",{class:e.style.h3}," 2. change v-show (always mounted) ",2),r("div",null,[r("button",{class:e.style.button,onClick:o[1]||(o[1]=(...o)=>e.showModal&&e.showModal(...o))}," Show modal ",2),r("a",{href:"https://github.com/hoiheart/vue-universal-modal/blob/master/example/2.visible.vue",target:"_blank",class:[e.style.button,"ml-2"]}," Source ",2)]),r(n,{"model-value":!0,close:e.closeModal,disabled:!e.isShow},{default:i((()=>[r("div",F,[I,r("button",{class:e.style.button,onClick:o[2]||(o[2]=(...o)=>e.closeModal&&e.closeModal(...o))}," close ",2)])])),_:1},8,["close","disabled"])],64)};var P=n({setup(){const e=b({modal1:!1,modal2:!1});return{isShowModal:e,options:{transition:!1,closeClickDimmed:!1,closeKeyCode:!1,styleModalContent:{justifyContent:"flex-start"}},showModal:function(o){e[o]=!0},closeModal:function(o){e[o]=!1},style:$}}});const H=r("li",null,"transition: false",-1),q=r("li",null,"closeClickDimmed: false",-1),z=r("li",null,"closeKeyCode: false",-1),G=r("li",null,"styleModalContent: { justifyContent: 'flex-start' }",-1),J={class:"modal"},Q=r("p",null," modal1 ",-1),W={class:"modal"},X=r("p",null," modal2 ",-1);P.render=function(e,o,l,a,t,s){const n=m("Modal");return v(),u(c,null,[r("h3",{class:e.style.h3}," 3. options ",2),r("ul",{class:e.style.ul},[H,q,z,G],2),r("div",null,[r("button",{class:e.style.button,onClick:o[1]||(o[1]=o=>e.showModal("modal1"))}," Show modal ",2),r("a",{href:"https://github.com/hoiheart/vue-universal-modal/blob/master/example/3.options.vue",target:"_blank",class:[e.style.button,"ml-2"]}," Source ",2)]),r(n,{modelValue:e.isShowModal.modal1,"onUpdate:modelValue":o[4]||(o[4]=o=>e.isShowModal.modal1=o),close:()=>e.closeModal("modal1"),options:e.options,style:{backgroundColor:"rgba(59, 130, 246, 0.3)"}},{default:i((()=>[r("div",J,[Q,r("button",{class:[e.style.button,"mr-2"],onClick:o[2]||(o[2]=o=>e.showModal("modal2"))}," open modal2 ",2),r("button",{class:e.style.button,onClick:o[3]||(o[3]=()=>e.closeModal("modal1"))}," close ",2)])])),_:1},8,["modelValue","close","options","style"]),r(n,{modelValue:e.isShowModal.modal2,"onUpdate:modelValue":o[6]||(o[6]=o=>e.isShowModal.modal2=o),close:()=>e.closeModal("modal2"),options:e.options},{default:i((()=>[r("div",W,[X,r("button",{class:e.style.button,onClick:o[5]||(o[5]=()=>e.closeModal("modal2"))}," close ",2)])])),_:1},8,["modelValue","close","options"])],64)};var Y=n({setup(){const e=b({modal1:!1,modal2:!1});return{isShowModal:e,showModal:function(o){e[o]=!0},closeModal:function(o){e[o]=!1},style:$}}});const Z={class:"modal"},ee=r("p",null," modal1 ",-1),oe={class:"modal"},le=r("p",null," modal2 ",-1);Y.render=function(e,o,l,a,t,s){const n=m("Modal");return v(),u(c,null,[r("h3",{class:e.style.h3}," 4. modal in modal ",2),r("div",null,[r("button",{class:e.style.button,onClick:o[1]||(o[1]=o=>e.showModal("modal1"))}," Show modal1 ",2),r("a",{href:"https://github.com/hoiheart/vue-universal-modal/blob/master/example/4.modal.on.modal.vue",target:"_blank",class:[e.style.button,"ml-2"]}," Source ",2)]),r(n,{modelValue:e.isShowModal.modal1,"onUpdate:modelValue":o[4]||(o[4]=o=>e.isShowModal.modal1=o),close:()=>e.closeModal("modal1")},{default:i((()=>[r("div",Z,[ee,r("button",{class:e.style.button,style:{marginRight:"10px"},onClick:o[2]||(o[2]=o=>e.showModal("modal2"))}," open modal2 ",2),r("button",{class:e.style.button,onClick:o[3]||(o[3]=()=>e.closeModal("modal1"))}," close ",2)])])),_:1},8,["modelValue","close"]),r(n,{modelValue:e.isShowModal.modal2,"onUpdate:modelValue":o[6]||(o[6]=o=>e.isShowModal.modal2=o),close:()=>e.closeModal("modal2")},{default:i((()=>[r("div",oe,[le,r("button",{class:e.style.button,onClick:o[5]||(o[5]=()=>e.closeModal("modal2"))}," close ",2)])])),_:1},8,["modelValue","close"])],64)};var ae=n({setup(){const e=d(!1);return{isShow:e,showModal:function(){e.value=!0},closeModal:function(){e.value=!1},style:$}}});const te=h();p("data-v-118afcd2");const se={class:"modal"},ne=r("p",null," Hello ",-1);f();const de=te(((e,o,l,a,t,s)=>{const n=m("Modal");return v(),u(c,null,[r("h3",{class:e.style.h3}," 5. custom animation ",2),r("div",null,[r("button",{class:e.style.button,onClick:o[1]||(o[1]=(...o)=>e.showModal&&e.showModal(...o))}," Show modal ",2),r("a",{href:"https://github.com/hoiheart/vue-universal-modal/blob/master/example/5.custom.animation.vue",target:"_blank",class:[e.style.button,"ml-2"]}," Source ",2)]),r(n,{modelValue:e.isShow,"onUpdate:modelValue":o[3]||(o[3]=o=>e.isShow=o),close:e.closeModal},{default:te((()=>[r("div",se,[ne,r("button",{class:e.style.button,onClick:o[2]||(o[2]=(...o)=>e.closeModal&&e.closeModal(...o))}," close ",2)])])),_:1},8,["modelValue","close"])],64)}));ae.render=de,ae.__scopeId="data-v-118afcd2";var ue=n({setup(){const e=b({modal1:!1,modal2:!1});return{isShowModal:e,showModal:function(o){e[o]=!0},closeModal:function(o){e[o]=!1},style:$}}});const re={class:"modal"},ie=r("h2",{id:"heading-modal1"}," wai-aria1 ",-1),ce={class:"modal"},me=r("h2",{id:"heading-modal2"}," wai-aria2 ",-1);ue.render=function(e,o,l,a,t,s){const n=m("Modal");return v(),u(c,null,[r("h3",{class:e.style.h3}," 6. wai-aria ",2),r("div",null,[r("button",{class:e.style.button,onClick:o[1]||(o[1]=o=>e.showModal("modal1"))}," Show modal1 ",2),r("a",{href:"https://github.com/hoiheart/vue-universal-modal/blob/master/example/6.wai-aria.vue",target:"_blank",class:[e.style.button,"ml-2"]}," Source ",2)]),r(n,{id:"aria-modal1",modelValue:e.isShowModal.modal1,"onUpdate:modelValue":o[4]||(o[4]=o=>e.isShowModal.modal1=o),class:"border-8 border-white-700 focus:border-blue-700","aria-labelledby":"heading-modal1",close:()=>e.closeModal("modal1")},{default:i((()=>[r("div",re,[ie,r("button",{class:[e.style.button,"mr-2"],onClick:o[2]||(o[2]=o=>e.showModal("modal2"))}," open modal2 ",2),r("button",{class:e.style.button,onClick:o[3]||(o[3]=()=>e.closeModal("modal1"))}," close ",2)])])),_:1},8,["modelValue","close"]),r(n,{id:"aria-modal2",modelValue:e.isShowModal.modal2,"onUpdate:modelValue":o[6]||(o[6]=o=>e.isShowModal.modal2=o),class:"border-8 border-white-700 focus:border-blue-700","aria-labelledby":"heading-modal2",close:()=>e.closeModal("modal2")},{default:i((()=>[r("div",ce,[me,r("button",{class:e.style.button,onClick:o[5]||(o[5]=()=>e.closeModal("modal2"))}," close ",2)])])),_:1},8,["modelValue","close"])],64)};var ve=n({setup(){const e=d(!1);return{isShow:e,showModal:function(){e.value=!0},closeModal:function(){e.value=!1},style:$,beforeEnter:function(){console.log("before enter")},afterEnter:function(){console.log("after enter")},beforeLeave:function(){console.log("before leave")},afterLeave:function(){console.log("after leave")}}}});const be={class:"modal"},he=r("p",null," Hello ",-1);ve.render=function(e,o,l,a,t,s){const n=m("Modal");return v(),u(c,null,[r("h3",{class:e.style.h3}," 7. event (please see console) ",2),r("div",null,[r("button",{class:e.style.button,onClick:o[1]||(o[1]=(...o)=>e.showModal&&e.showModal(...o))}," Show modal ",2),r("a",{href:"https://github.com/hoiheart/vue-universal-modal/blob/master/example/7.event.vue",target:"_blank",class:[e.style.button,"ml-2"]}," Source ",2)]),r(n,{modelValue:e.isShow,"onUpdate:modelValue":o[3]||(o[3]=o=>e.isShow=o),close:e.closeModal,onBeforeEnter:e.beforeEnter,onAfterEnter:e.afterEnter,onBeforeLeave:e.beforeLeave,onAfterLeave:e.afterLeave},{default:i((()=>[r("div",be,[he,r("button",{class:e.style.button,onClick:o[2]||(o[2]=(...o)=>e.closeModal&&e.closeModal(...o))}," close ",2)])])),_:1},8,["modelValue","close","onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],64)};var pe=n({components:{Example1:T,Example2:N,Example3:P,Example4:Y,Example5:ae,Example6:ue,Example7:ve}});const fe=r("h2",{class:"text-2xl font-bold mt-8 mb-4"}," Examples ",-1);pe.render=function(e,o,l,a,t,s){const n=m("Example1"),d=m("Example2"),i=m("Example3"),b=m("Example4"),h=m("Example5"),p=m("Example6"),f=m("Example7");return v(),u(c,null,[fe,r(n),r(d),r(i),r(b),r(h),r(p),r(f)],64)};const Me=({modalRef:e,latest:o,show:l})=>{let a;function t(l){const t=l.target.closest(`.${Ce}`);if(o.value&&(!t||t!==e.value)){if(t&&!t.classList.contains(`${Ce}-show`))return;a=l.target}}M((()=>{document.addEventListener("click",t),w((()=>l.value),(o=>{y((()=>function(o){o?e.value&&e.value.focus():a&&a.focus()}(o)))}),{immediate:l.value})})),C((()=>{document.removeEventListener("click",t)}))};var we=n({inheritAttrs:!1,props:{close:{type:Function,default:()=>{}},disabled:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!0},options:{type:Object,default:()=>({})}},emits:["before-enter","enter","after-enter","enter-cancelled","before-leave","leave","after-leave","leave-cancelled"],setup(e,o){const{teleportTarget:l}=S(ye),{close:a,disabled:t,options:n,modelValue:u}=k(e),r=d(void 0===u.value||u.value),i=d(null),c=d(!t.value),m=s({transition:300,closeClickDimmed:!0,closeKeyCode:27,styleModalContent:{}},n.value);w([()=>u.value,()=>t.value],(()=>{const e=u.value&&!t.value;c.value=e,u.value&&(r.value=u.value)}),{immediate:!0});const{latest:v}=(({modalRef:e,show:o})=>{const{visibleModals:l,addVisibleModals:a,removeVisibleModals:t}=S(ye),s=g((()=>{const o=[...l.value.values()];return!(!o.length||!e.value)&&o[o.length-1]===e.value}));return w((()=>o.value),(()=>{y((()=>{e.value&&(o.value?a(e.value):t(e.value))}))}),{immediate:!0}),{latest:s}})({modalRef:i,show:c});Me({latest:v,modalRef:i,show:c});const{onMouseDownDimmed:b,onMouseUpDimmed:h}=(({close:e,closeClickDimmed:o,closeKeyCode:l,latest:a})=>{let t=null;function s(o){o.keyCode===l&&a.value&&e.value()}return M((()=>{l&&document.addEventListener("keyup",s)})),C((()=>{l&&document.removeEventListener("keyup",s)})),{onMouseDownDimmed:function(e){t=e.target},onMouseUpDimmed:function(l){o&&t===l.target&&e.value(),t=null}}})({close:a,closeClickDimmed:m.closeClickDimmed,closeKeyCode:m.closeKeyCode,latest:v}),p={beforeEnter:()=>o.emit("before-enter"),enter:()=>o.emit("enter"),afterEnter:()=>o.emit("after-enter"),enterCancelled:()=>o.emit("enter-cancelled"),beforeLeave:()=>o.emit("before-leave"),leave:()=>o.emit("leave"),afterLeave:()=>{o.emit("after-leave"),!1===u.value&&(r.value=!1)},leaveCancelled:()=>o.emit("leave-cancelled")};return{CLASS_NAME:Ce,emitClose:()=>{console.warn("emitClose was deprecated.\nhttps://github.com/hoiheart/vue-universal-modal#usage-modal"),a.value&&a.value()},inserted:r,latest:v,mergeOptions:m,modalRef:i,onMouseDownDimmed:b,onMouseUpDimmed:h,onTransitionEmit:p,show:c,teleportTarget:l,transition:!!m.transition&&m.transition/1e3+"s"}}});we.render=function(e,o,l,a,t,n){return e.inserted?(v(),u(_,{key:0,to:e.teleportTarget,disabled:e.disabled},[r(V,E({appear:"",name:e.CLASS_NAME},x(e.onTransitionEmit)),{default:i((()=>{var l;return[D(r("div",E({ref:"modalRef",role:"dialog",tabindex:"-1","aria-modal":"true","aria-label":"Modal window",class:[e.CLASS_NAME,{[`${e.CLASS_NAME}-show`]:e.show},{[`${e.CLASS_NAME}-latest`]:e.latest}],style:{transitionDuration:e.transition}},e.$attrs),[r("div",{class:`${e.CLASS_NAME}-content`,style:s({transitionDuration:e.transition},null==(l=e.mergeOptions)?void 0:l.styleModalContent),onMousedown:o[1]||(o[1]=A(((...o)=>e.onMouseDownDimmed&&e.onMouseDownDimmed(...o)),["self"])),onMouseup:o[2]||(o[2]=(...o)=>e.onMouseUpDimmed&&e.onMouseUpDimmed(...o))},[j(e.$slots,"default",{emitClose:e.emitClose}),j(e.$slots,"close")],38)],16),[[U,e.show]])]})),_:3},16,["name"])],8,["to","disabled"])):L("",!0)};const ye="VueUniversalModal",Ce="vue-universal-modal";var ge={install:(e,o={})=>{const{teleportTarget:l="",teleportComponent:a="",teleportComponentId:t="",modalComponent:s="Modal"}=o;if(!l)return console.error("teleportTarget is required.");if(a||t)return console.error("teleportComponent, teleportComponentId was deprecated. use teleportTarget instead. (https://github.com/hoiheart/vue-universal-modal)");const n=d(new Set);e.provide(ye,{teleportTarget:l,visibleModals:R(n),addVisibleModals:e=>{n.value.add(e)},removeVisibleModals:e=>{n.value.delete(e)}}),e.component(s,we)}};const Se=O(pe);Se.use(ge,{teleportTarget:"#modals"}),Se.mount("#app");
