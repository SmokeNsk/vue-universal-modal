import { onMounted as e, watch as t, nextTick as a, onUnmounted as o, inject as l, computed as n, defineComponent as s, toRefs as r, ref as i, openBlock as d, createBlock as u, Teleport as c, createVNode as v, Transition as m, mergeProps as f, toHandlers as p, withCtx as g, withDirectives as b, createElementVNode as h, normalizeClass as y, normalizeStyle as M, withModifiers as D, renderSlot as w, vShow as C, createCommentVNode as E, readonly as L } from "vue";
const S = ({ modalRef: l2, latest: n2, show: s2 }) => {
  let r2;
  function i2(e2) {
    const t2 = e2.target.closest(`.${N}`);
    if (!n2.value)
      return;
    if (!t2 || t2 !== l2.value) {
      if (t2 && !t2.classList.contains(`${N}-show`))
        return;
      r2 = e2.target;
    }
  }
  function d2(e2) {
    if (e2) {
      if (l2.value)
        l2.value.focus();
    } else if (r2)
      r2.focus();
  }
  e(() => {
    document.addEventListener("click", i2);
    t(() => s2.value, (e2) => {
      a(() => d2(e2));
    }, { immediate: s2.value });
  });
  o(() => {
    document.removeEventListener("click", i2);
  });
};
const x = ({ close: t2, closeClickDimmed: a2, closeKeyCode: l2, latest: n2 }) => {
  let s2 = null;
  function r2(e2) {
    s2 = e2.target;
  }
  function i2(e2) {
    if (a2 && s2 === e2.target)
      t2.value();
    s2 = null;
  }
  function d2(e2) {
    if (e2.keyCode === l2 && n2.value)
      t2.value();
  }
  e(() => {
    if (l2)
      document.addEventListener("keyup", d2);
  });
  o(() => {
    if (l2)
      document.removeEventListener("keyup", d2);
  });
  return { onMouseDownDimmed: r2, onMouseUpDimmed: i2 };
};
const k = ({ modalRef: e2, show: o2 }) => {
  const { visibleModals: s2, addVisibleModals: r2, removeVisibleModals: i2 } = l(q);
  const d2 = n(() => {
    const t2 = [...s2.value.values()];
    if (!t2.length || !e2.value)
      return false;
    return t2[t2.length - 1] === e2.value;
  });
  t(() => o2.value, () => {
    a(() => {
      if (!e2.value)
        return;
      if (o2.value)
        r2(e2.value);
      else
        i2(e2.value);
    });
  }, { immediate: true });
  return { latest: d2 };
};
var T = (() => ".vue-universal-modal-leave-from[data-v-d5c05a12],.vue-universal-modal-enter-to[data-v-d5c05a12]{opacity:1}.vue-universal-modal-enter-from[data-v-d5c05a12],.vue-universal-modal-leave-to[data-v-d5c05a12]{opacity:0}.vue-universal-modal[data-v-d5c05a12]{-webkit-overflow-scrolling:touch;overscroll-behavior:contain;position:fixed;overflow-y:auto;left:0;top:0;right:0;bottom:0;background-color:#000c;text-align:left}.vue-universal-modal[data-v-d5c05a12]:not(.vue-universal-modal-latest){z-index:1000}.vue-universal-modal-content[data-v-d5c05a12]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;min-height:100%}.modal[data-v-d5c05a12]{position:fixed;width:100%;bottom:0;box-sizing:border-box;font-size:20px;text-align:center;background:var(--ion-item-background, var(--ion-background-color, #fff));border-radius:10px 10px 0 0/10px 10px 0px 0px;overflow:hidden}.start-modal[data-v-d5c05a12],.vue-universal-modal-enter-to .modal[data-v-d5c05a12],.vue-universal-modal-leave-from .modal[data-v-d5c05a12]{transition-timing-function:cubic-bezier(.11,.93,.28,1);transition-property:transform;transition-duration:.3s;transform:translateZ(0)}.vue-universal-modal-enter-from .modal[data-v-d5c05a12],.vue-universal-modal-leave-to .modal[data-v-d5c05a12]{transition-timing-function:cubic-bezier(.74,0,.23,1);transition-property:transform;transition-duration:.3s;transform:translate3d(0,100%,0)!important}\n")();
var A = (e2, t2) => {
  const a2 = e2.__vccOpts || e2;
  for (const [e3, o2] of t2)
    a2[e3] = o2;
  return a2;
};
const _ = s({ inheritAttrs: false, props: { fullscreen: { type: Boolean, default: false }, swipe: { type: Boolean, default: true }, close: { type: Function, default: () => {
} }, disabled: { type: Boolean, default: false }, modelValue: { type: Boolean, default: true }, options: { type: Object, default: () => ({}) } }, emits: ["before-enter", "enter", "after-enter", "enter-cancelled", "before-leave", "leave", "after-leave", "leave-cancelled"], setup(e2, o2) {
  const { teleportTarget: n2 } = l(q);
  const { close: s2, disabled: d2, options: u2, modelValue: c2 } = r(e2);
  const v2 = i(c2.value === void 0 ? true : c2.value);
  const m2 = i(null);
  const f2 = i(!d2.value);
  const p2 = { transition: 300, closeClickDimmed: true, closeKeyCode: 27, styleModalContent: {}, ...u2.value };
  t([() => c2.value, () => d2.value], () => {
    const e3 = c2.value && !d2.value;
    f2.value = e3;
    if (c2.value)
      v2.value = c2.value;
  }, { immediate: true });
  const { latest: g2 } = k({ modalRef: m2, show: f2 });
  S({ latest: g2, modalRef: m2, show: f2 });
  const { onMouseDownDimmed: b2, onMouseUpDimmed: h2 } = x({ close: s2, closeClickDimmed: p2.closeClickDimmed, closeKeyCode: p2.closeKeyCode, latest: g2 });
  const y2 = (e3) => {
    h2(e3);
    if (s2.value)
      s2.value();
  };
  let M2 = 0;
  const D2 = (e3) => {
    e3.preventDefault();
    e3.stopPropagation();
    e3.stopImmediatePropagation();
    M2 = e3.touches[0].clientY;
    e3.currentTarget.style.transitionDuration = "0ms";
  };
  let w2 = 0;
  const C2 = (e3) => {
    const t2 = Math.round(e3.touches[0].clientY - M2);
    if (t2 != w2 && t2 > 0)
      e3.currentTarget.style.transform = `translate3d(0, ${t2}px, 0)`;
    w2 = t2;
  };
  const E2 = (e3) => {
    e3.preventDefault();
    e3.stopPropagation();
    e3.stopImmediatePropagation();
    const t2 = e3.changedTouches[0].clientY - M2;
    if (t2 != 0) {
      e3.currentTarget.style.transitionDuration = "200ms";
      a(() => {
        e3.currentTarget.style.transform = `translate3d(0, 0%, 0)`;
      });
    } else
      e3.currentTarget.style.transitionDuration = "300ms";
  };
  const L2 = { beforeEnter: () => o2.emit("before-enter", m2.value), enter: () => o2.emit("enter", m2.value), afterEnter: () => {
    m2.value.querySelector(".modal").addEventListener("touchstart", D2, { passive: false });
    m2.value.querySelector(".modal").addEventListener("touchmove", C2, { passive: true });
    m2.value.querySelector(".modal").addEventListener("touchend", E2, { passive: false });
    o2.emit("after-enter", { targetRef: m2, close: e2.close });
  }, enterCancelled: () => o2.emit("enter-cancelled", m2.value), beforeLeave: () => o2.emit("before-leave", m2.value), leave: () => {
    m2.value.querySelector(".modal").removeEventListener("touchstart", D2, { passive: false });
    m2.value.querySelector(".modal").removeEventListener("touchmove", C2, { passive: true });
    m2.value.querySelector(".modal").removeEventListener("touchend", E2, { passive: false });
    o2.emit("leave", m2.value);
  }, afterLeave: () => {
    o2.emit("after-leave", m2.value);
    if (c2.value === false)
      v2.value = false;
  }, leaveCancelled: () => o2.emit("leave-cancelled", m2.value) };
  const T2 = () => {
    if (s2.value)
      s2.value();
  };
  const A2 = (e3) => {
  };
  return { Log: A2, CLASS_NAME: N, emitClose: T2, inserted: v2, latest: g2, mergeOptions: p2, modalRef: m2, onMouseDownDimmed: b2, onMouseUpDimmed2: y2, touchModalStart: D2, touchModalMove: C2, touchModalEnd: E2, onTransitionEmit: L2, show: f2, teleportTarget: n2, transition: p2.transition ? p2.transition / 1e3 + "s" : void 0 };
} });
const $ = { class: "modal modal-sheet" };
function R(e2, t2, a2, o2, l2, n2) {
  return e2.inserted ? (d(), u(c, { key: 0, to: e2.teleportTarget, disabled: e2.disabled }, [v(m, f({ appear: "", name: e2.CLASS_NAME }, p(e2.onTransitionEmit)), { default: g(() => {
    var _a;
    return [b(h("div", f({ ref: "modalRef", role: "dialog", tabindex: "-1", "aria-modal": "true", "aria-label": "Modal window", class: [e2.CLASS_NAME, { [`${e2.CLASS_NAME}-show`]: e2.show }, { [`${e2.CLASS_NAME}-latest`]: e2.latest }], style: { transitionDuration: e2.transition } }, e2.$attrs), [h("div", { class: y(`${e2.CLASS_NAME}-content`), style: M({ transitionDuration: e2.transition, ...(_a = e2.mergeOptions) == null ? void 0 : _a.styleModalContent }), onMousedown: t2[0] || (t2[0] = D((...t3) => e2.onMouseDownDimmed && e2.onMouseDownDimmed(...t3), ["self"])), onMouseup: t2[1] || (t2[1] = D((...t3) => e2.onMouseUpDimmed2 && e2.onMouseUpDimmed2(...t3), ["self"])), onTouchmove: t2[2] || (t2[2] = D((t3) => e2.close(), ["self"])) }, [h("div", $, [w(e2.$slots, "default", { emitClose: e2.emitClose }, void 0, true), w(e2.$slots, "close", {}, void 0, true)])], 38)], 16), [[C, e2.show]])];
  }), _: 3 }, 16, ["name"])], 8, ["to", "disabled"])) : E("", true);
}
var V = A(_, [["render", R], ["__scopeId", "data-v-d5c05a12"]]);
const q = "VueUniversalModal";
const N = "vue-universal-modal";
const U = (e2, t2 = {}) => {
  const { teleportTarget: a2 = "", modalComponent: o2 = "Modal" } = t2;
  if (!a2)
    return;
  const l2 = i(/* @__PURE__ */ new Set());
  const n2 = (e3) => {
    l2.value.add(e3);
  };
  const s2 = (e3) => {
    l2.value.delete(e3);
  };
  e2.provide(q, { teleportTarget: a2, visibleModals: L(l2), addVisibleModals: n2, removeVisibleModals: s2 });
  e2.component(o2, V);
};
var z = { install: U };
export { N as CLASS_NAME, q as PLUGIN_NAME, z as default };
