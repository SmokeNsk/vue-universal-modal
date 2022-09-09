(function(c,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(c=typeof globalThis!="undefined"?globalThis:c||self,t(c["vue-universal-modal"]={},c.Vue))})(this,function(c,t){"use strict";const S=({modalRef:e,latest:o,show:r})=>{function l(u){const a=u.target.closest(`.${p}`);if(!!o.value&&(!a||a!==e.value)){if(a&&!a.classList.contains(`${p}-show`))return;u.target}}function i(u){u&&e.value}t.onMounted(()=>{document.addEventListener("click",l),t.watch(()=>r.value,u=>{t.nextTick(()=>i(u))},{immediate:r.value})}),t.onUnmounted(()=>{document.removeEventListener("click",l)})},x=({close:e,closeClickDimmed:o,closeKeyCode:r,latest:l})=>{let i=null;function u(n){i=n.target}function a(n){o&&i===n.target&&e.value(),i=null}function d(n){n.keyCode===r&&l.value&&e.value()}return t.onMounted(()=>{r&&document.addEventListener("keyup",d)}),t.onUnmounted(()=>{r&&document.removeEventListener("keyup",d)}),{onMouseDownDimmed:u,onMouseUpDimmed:a}},T=({modalRef:e,show:o})=>{const{visibleModals:r,addVisibleModals:l,removeVisibleModals:i}=t.inject(f),u=t.computed(()=>{const a=[...r.value.values()];return!a.length||!e.value?!1:a[a.length-1]===e.value});return t.watch(()=>o.value,()=>{t.nextTick(()=>{!e.value||(o.value?l(e.value):i(e.value))})},{immediate:!0}),{latest:u}};var $=(()=>`.vue-universal-modal-leave-from[data-v-9366333e],.vue-universal-modal-enter-to[data-v-9366333e]{opacity:1}.vue-universal-modal-enter-from[data-v-9366333e],.vue-universal-modal-leave-to[data-v-9366333e]{opacity:0}.vue-universal-modal[data-v-9366333e]{-webkit-overflow-scrolling:touch;overscroll-behavior:contain;position:fixed;overflow-y:auto;left:0;top:0;right:0;bottom:0;background-color:#000c;text-align:left}.vue-universal-modal[data-v-9366333e]:not(.vue-universal-modal-latest){z-index:1000}.vue-universal-modal-content[data-v-9366333e]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;min-height:100%}.modal[data-v-9366333e]{position:fixed;width:100%;bottom:0;box-sizing:border-box;font-size:20px;text-align:center;background:var(--ion-item-background, var(--ion-background-color, #fff));border-radius:10px 10px 0 0/10px 10px 0px 0px;overflow:hidden;height:var(--maxHeight, unset)}.start-modal[data-v-9366333e],.vue-universal-modal-enter-to .modal[data-v-9366333e],.vue-universal-modal-leave-from .modal[data-v-9366333e]{transition-timing-function:cubic-bezier(.11,.93,.28,1);transition-property:transform;transition-duration:.3s;transform:translateZ(0)}.vue-universal-modal-enter-from .modal[data-v-9366333e],.vue-universal-modal-leave-to .modal[data-v-9366333e]{transition-timing-function:cubic-bezier(.74,0,.23,1);transition-property:transform;transition-duration:.3s;transform:translate3d(0,100%,0)!important}
`)(),D=(e,o)=>{const r=e.__vccOpts||e;for(const[l,i]of o)r[l]=i;return r};const E=t.defineComponent({inheritAttrs:!1,props:{initialBreakpoint:{type:Number,default:void 0},breakpoints:{type:Array,default:[]},swipe:{type:Boolean,default:!0},swipeToClose:{type:Number,default:0},close:{type:Function,default:()=>{}},disabled:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!0},options:{type:Object,default:()=>({})}},emits:["before-enter","enter","after-enter","enter-cancelled","before-leave","leave","after-leave","leave-cancelled"],setup(e,o){const{teleportTarget:r}=t.inject(f),{close:l,disabled:i,options:u,modelValue:a}=t.toRefs(e),d=t.ref(a.value===void 0?!0:a.value),n=t.ref(null),h=t.ref(!i.value),m={transition:300,closeClickDimmed:!0,closeKeyCode:27,styleModalContent:{},...u.value};t.watch([()=>a.value,()=>i.value],()=>{const s=a.value&&!i.value;h.value=s,a.value&&(d.value=a.value)},{immediate:!0});const{latest:g}=T({modalRef:n,show:h});S({latest:g,modalRef:n,show:h});const{onMouseDownDimmed:N,onMouseUpDimmed:_}=x({close:l,closeClickDimmed:m.closeClickDimmed,closeKeyCode:m.closeKeyCode,latest:g}),V=s=>{_(s),l.value&&l.value()};let y=0;const b=s=>{y=s.touches[0].clientY,s.currentTarget.style.transitionDuration="0ms"};let C=0;const M=s=>{const v=Math.round(s.touches[0].clientY-y);v!=C&&v>0&&(s.currentTarget.style.transform=`translate3d(0, ${v}px, 0)`),C=v},w=s=>{const v=s.changedTouches[0].clientY-y;if(v!=0){if(s.currentTarget.style.transitionDuration="200ms",e.swipeToClose&&e.swipeToClose<=Math.abs(v)/s.currentTarget.getBoundingClientRect().height){l.value&&l.value();return}t.nextTick(()=>{s.currentTarget.style.transform="translate3d(0, 0%, 0)"})}else s.currentTarget.style.transitionDuration="300ms"};return{Log:s=>{},CLASS_NAME:p,emitClose:()=>{l.value&&l.value()},inserted:d,latest:g,mergeOptions:m,modalRef:n,onMouseDownDimmed:N,onMouseUpDimmed2:V,touchModalStart:b,touchModalMove:M,touchModalEnd:w,onTransitionEmit:{beforeEnter:()=>o.emit("before-enter",n.value),enter:()=>o.emit("enter",n.value),afterEnter:()=>{e.swipe&&(n.value.querySelector(".modal").addEventListener("touchstart",b,{passive:!0}),n.value.querySelector(".modal").addEventListener("touchmove",M,{passive:!0}),n.value.querySelector(".modal").addEventListener("touchend",w,{passive:!0})),o.emit("after-enter",{targetRef:n,close:e.close})},enterCancelled:()=>o.emit("enter-cancelled",n.value),beforeLeave:()=>o.emit("before-leave",n.value),leave:()=>{e.swipe&&(n.value.querySelector(".modal").removeEventListener("touchstart",b,{passive:!0}),n.value.querySelector(".modal").removeEventListener("touchmove",M,{passive:!0}),n.value.querySelector(".modal").removeEventListener("touchend",w,{passive:!0})),o.emit("leave",n.value)},afterLeave:()=>{o.emit("after-leave",n.value),a.value===!1&&(d.value=!1)},leaveCancelled:()=>o.emit("leave-cancelled",n.value)},show:h,teleportTarget:r,transition:m.transition?m.transition/1e3+"s":void 0}}});function k(e,o,r,l,i,u){return e.inserted?(t.openBlock(),t.createBlock(t.Teleport,{key:0,to:e.teleportTarget,disabled:e.disabled},[t.createVNode(t.Transition,t.mergeProps({appear:"",name:e.CLASS_NAME},t.toHandlers(e.onTransitionEmit)),{default:t.withCtx(()=>{var a;return[t.withDirectives(t.createElementVNode("div",t.mergeProps({ref:"modalRef",role:"dialog",tabindex:"-1","aria-modal":"true","aria-label":"Modal window",class:[e.CLASS_NAME,{[`${e.CLASS_NAME}-show`]:e.show},{[`${e.CLASS_NAME}-latest`]:e.latest}],style:{transitionDuration:e.transition}},e.$attrs),[t.createElementVNode("div",{class:t.normalizeClass(`${e.CLASS_NAME}-content`),style:t.normalizeStyle({transitionDuration:e.transition,...(a=e.mergeOptions)==null?void 0:a.styleModalContent}),onMousedown:o[0]||(o[0]=t.withModifiers((...d)=>e.onMouseDownDimmed&&e.onMouseDownDimmed(...d),["self"])),onMouseup:o[1]||(o[1]=t.withModifiers((...d)=>e.onMouseUpDimmed2&&e.onMouseUpDimmed2(...d),["self"])),onTouchmove:o[2]||(o[2]=t.withModifiers(d=>e.close(),["self"]))},[t.createElementVNode("div",{class:"modal modal-sheet",style:t.normalizeStyle({"--maxHeight":e.initialBreakpoint?`${Math.round(100*e.initialBreakpoint)}%`:"unset"})},[t.renderSlot(e.$slots,"default",{emitClose:e.emitClose},void 0,!0),t.renderSlot(e.$slots,"close",{},void 0,!0)],4)],38)],16),[[t.vShow,e.show]])]}),_:3},16,["name"])],8,["to","disabled"])):t.createCommentVNode("",!0)}var L=D(E,[["render",k],["__scopeId","data-v-9366333e"]]);const f="VueUniversalModal",p="vue-universal-modal";var A={install:(e,o={})=>{const{teleportTarget:r="",modalComponent:l="Modal"}=o;if(!r)return;const i=t.ref(new Set),u=d=>{i.value.add(d)},a=d=>{i.value.delete(d)};e.provide(f,{teleportTarget:r,visibleModals:t.readonly(i),addVisibleModals:u,removeVisibleModals:a}),e.component(l,L)}};c.CLASS_NAME=p,c.PLUGIN_NAME=f,c.default=A,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
