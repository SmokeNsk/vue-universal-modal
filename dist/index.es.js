import { onMounted as e, watch as t, nextTick as o, onUnmounted as a, inject as l, computed as n, defineComponent as r, toRefs as s, ref as i, openBlock as u, createBlock as d, Teleport as v, createVNode as c, Transition as m, mergeProps as f, toHandlers as p, withCtx as b, withDirectives as g, createElementVNode as h, normalizeClass as y, normalizeStyle as M, withModifiers as w, renderSlot as D, vShow as C, createCommentVNode as E, readonly as L } from "vue";
const S = ({ modalRef: l2, latest: n2, show: r2 }) => {
  let s2;
  function i2(e2) {
    const t2 = e2.target.closest(`.${N}`);
    if (!n2.value)
      return;
    if (!t2 || t2 !== l2.value) {
      if (t2 && !t2.classList.contains(`${N}-show`))
        return;
      s2 = e2.target;
    }
  }
  function u2(e2) {
    if (e2) {
      if (l2.value)
        l2.value.focus();
    } else if (s2)
      s2.focus();
  }
  e(() => {
    document.addEventListener("click", i2);
    t(() => r2.value, (e2) => {
      o(() => u2(e2));
    }, { immediate: r2.value });
  });
  a(() => {
    document.removeEventListener("click", i2);
  });
};
const x = ({ close: t2, closeClickDimmed: o2, closeKeyCode: l2, latest: n2 }) => {
  let r2 = null;
  function s2(e2) {
    r2 = e2.target;
  }
  function i2(e2) {
    if (o2 && r2 === e2.target)
      t2.value();
    r2 = null;
  }
  function u2(e2) {
    if (e2.keyCode === l2 && n2.value)
      t2.value();
  }
  e(() => {
    if (l2)
      document.addEventListener("keyup", u2);
  });
  a(() => {
    if (l2)
      document.removeEventListener("keyup", u2);
  });
  return { onMouseDownDimmed: s2, onMouseUpDimmed: i2 };
};
const k = ({ modalRef: e2, show: a2 }) => {
  const { visibleModals: r2, addVisibleModals: s2, removeVisibleModals: i2 } = l(q);
  const u2 = n(() => {
    const t2 = [...r2.value.values()];
    if (!t2.length || !e2.value)
      return false;
    return t2[t2.length - 1] === e2.value;
  });
  t(() => a2.value, () => {
    o(() => {
      if (!e2.value)
        return;
      if (a2.value)
        s2(e2.value);
      else
        i2(e2.value);
    });
  }, { immediate: true });
  return { latest: u2 };
};
var T = (() => ".vue-universal-modal-leave-from[data-v-5a807b4e],.vue-universal-modal-enter-to[data-v-5a807b4e]{opacity:1}.vue-universal-modal-enter-from[data-v-5a807b4e],.vue-universal-modal-leave-to[data-v-5a807b4e]{opacity:0}.vue-universal-modal[data-v-5a807b4e]{-webkit-overflow-scrolling:touch;overscroll-behavior:contain;position:fixed;overflow-y:auto;left:0;top:0;right:0;bottom:0;background-color:#000c;text-align:left}.vue-universal-modal[data-v-5a807b4e]:not(.vue-universal-modal-latest){z-index:1000}.vue-universal-modal-content[data-v-5a807b4e]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;min-height:100%}.modal[data-v-5a807b4e]{position:fixed;width:100%;bottom:0;box-sizing:border-box;font-size:20px;text-align:center;background:var(--ion-item-background, var(--ion-background-color, #fff));border-radius:10px 10px 0 0/10px 10px 0px 0px;overflow:hidden}.start-modal[data-v-5a807b4e],.vue-universal-modal-enter-to .modal[data-v-5a807b4e],.vue-universal-modal-leave-from .modal[data-v-5a807b4e]{transition-timing-function:cubic-bezier(.11,.93,.28,1);transition-property:transform;transition-duration:.3s;transform:translateZ(0)}.vue-universal-modal-enter-from .modal[data-v-5a807b4e],.vue-universal-modal-leave-to .modal[data-v-5a807b4e]{transition-timing-function:cubic-bezier(.74,0,.23,1);transition-property:transform;transition-duration:.3s;transform:translate3d(0,100%,0)!important}\n")();
var A = (e2, t2) => {
  const o2 = e2.__vccOpts || e2;
  for (const [e3, a2] of t2)
    o2[e3] = a2;
  return o2;
};
const _ = r({ inheritAttrs: false, props: { fullscreen: { type: Boolean, default: false }, swipe: { type: Boolean, default: true }, close: { type: Function, default: () => {
} }, disabled: { type: Boolean, default: false }, modelValue: { type: Boolean, default: true }, options: { type: Object, default: () => ({}) } }, emits: ["before-enter", "enter", "after-enter", "enter-cancelled", "before-leave", "leave", "after-leave", "leave-cancelled"], setup(e2, a2) {
  const { teleportTarget: n2 } = l(q);
  const { close: r2, disabled: u2, options: d2, modelValue: v2 } = s(e2);
  const c2 = i(v2.value === void 0 ? true : v2.value);
  const m2 = i(null);
  const f2 = i(!u2.value);
  const p2 = { transition: 300, closeClickDimmed: true, closeKeyCode: 27, styleModalContent: {}, ...d2.value };
  t([() => v2.value, () => u2.value], () => {
    const e3 = v2.value && !u2.value;
    f2.value = e3;
    if (v2.value)
      c2.value = v2.value;
  }, { immediate: true });
  const { latest: b2 } = k({ modalRef: m2, show: f2 });
  S({ latest: b2, modalRef: m2, show: f2 });
  const { onMouseDownDimmed: g2, onMouseUpDimmed: h2 } = x({ close: r2, closeClickDimmed: p2.closeClickDimmed, closeKeyCode: p2.closeKeyCode, latest: b2 });
  const y2 = (e3) => {
    h2(e3);
    if (r2.value)
      r2.value();
  };
  let M2 = 0;
  const w2 = (e3) => {
    e3.preventDefault();
    e3.stopPropagation();
    e3.stopImmediatePropagation();
    M2 = e3.touches[0].clientY;
    e3.currentTarget.style.transitionDuration = "0ms";
  };
  let D2 = 0;
  const C2 = (e3) => {
    const t2 = Math.round(e3.touches[0].clientY - M2);
    if (t2 != D2 && t2 > 0)
      e3.currentTarget.style.transform = `translate3d(0, ${t2}px, 0)`;
    D2 = t2;
  };
  const E2 = (e3) => {
    const t2 = e3.changedTouches[0].clientY - M2;
    if (t2 != 0) {
      e3.currentTarget.style.transitionDuration = "200ms";
      o(() => {
        e3.currentTarget.style.transform = `translate3d(0, 0%, 0)`;
      });
    } else
      e3.currentTarget.style.transitionDuration = "300ms";
  };
  const L2 = { beforeEnter: () => a2.emit("before-enter", m2.value), enter: () => a2.emit("enter", m2.value), afterEnter: () => {
    m2.value.querySelector(".modal").addEventListener("touchstart", w2, { passive: true });
    m2.value.querySelector(".modal").addEventListener("touchmove", C2, { passive: true });
    m2.value.querySelector(".modal").addEventListener("touchend", E2, { passive: true });
    a2.emit("after-enter", { targetRef: m2, close: e2.close });
  }, enterCancelled: () => a2.emit("enter-cancelled", m2.value), beforeLeave: () => a2.emit("before-leave", m2.value), leave: () => {
    m2.value.querySelector(".modal").removeEventListener("touchstart", w2, { passive: true });
    m2.value.querySelector(".modal").removeEventListener("touchmove", C2, { passive: true });
    m2.value.querySelector(".modal").removeEventListener("touchend", E2, { passive: true });
    a2.emit("leave", m2.value);
  }, afterLeave: () => {
    a2.emit("after-leave", m2.value);
    if (v2.value === false)
      c2.value = false;
  }, leaveCancelled: () => a2.emit("leave-cancelled", m2.value) };
  const T2 = () => {
    if (r2.value)
      r2.value();
  };
  const A2 = (e3) => {
  };
  return { Log: A2, CLASS_NAME: N, emitClose: T2, inserted: c2, latest: b2, mergeOptions: p2, modalRef: m2, onMouseDownDimmed: g2, onMouseUpDimmed2: y2, touchModalStart: w2, touchModalMove: C2, touchModalEnd: E2, onTransitionEmit: L2, show: f2, teleportTarget: n2, transition: p2.transition ? p2.transition / 1e3 + "s" : void 0 };
} });
const $ = { class: "modal modal-sheet" };
function R(e2, t2, o2, a2, l2, n2) {
  return e2.inserted ? (u(), d(v, { key: 0, to: e2.teleportTarget, disabled: e2.disabled }, [c(m, f({ appear: "", name: e2.CLASS_NAME }, p(e2.onTransitionEmit)), { default: b(() => {
    var _a;
    return [g(h("div", f({ ref: "modalRef", role: "dialog", tabindex: "-1", "aria-modal": "true", "aria-label": "Modal window", class: [e2.CLASS_NAME, { [`${e2.CLASS_NAME}-show`]: e2.show }, { [`${e2.CLASS_NAME}-latest`]: e2.latest }], style: { transitionDuration: e2.transition } }, e2.$attrs), [h("div", { class: y(`${e2.CLASS_NAME}-content`), style: M({ transitionDuration: e2.transition, ...(_a = e2.mergeOptions) == null ? void 0 : _a.styleModalContent }), onMousedown: t2[0] || (t2[0] = w((...t3) => e2.onMouseDownDimmed && e2.onMouseDownDimmed(...t3), ["self"])), onMouseup: t2[1] || (t2[1] = w((...t3) => e2.onMouseUpDimmed2 && e2.onMouseUpDimmed2(...t3), ["self"])), onTouchmove: t2[2] || (t2[2] = w((t3) => e2.close(), ["self"])) }, [h("div", $, [D(e2.$slots, "default", { emitClose: e2.emitClose }, void 0, true), D(e2.$slots, "close", {}, void 0, true)])], 38)], 16), [[C, e2.show]])];
  }), _: 3 }, 16, ["name"])], 8, ["to", "disabled"])) : E("", true);
}
var V = A(_, [["render", R], ["__scopeId", "data-v-5a807b4e"]]);
const q = "VueUniversalModal";
const N = "vue-universal-modal";
const U = (e2, t2 = {}) => {
  const { teleportTarget: o2 = "", modalComponent: a2 = "Modal" } = t2;
  if (!o2)
    return;
  const l2 = i(/* @__PURE__ */ new Set());
  const n2 = (e3) => {
    l2.value.add(e3);
  };
  const r2 = (e3) => {
    l2.value.delete(e3);
  };
  e2.provide(q, { teleportTarget: o2, visibleModals: L(l2), addVisibleModals: n2, removeVisibleModals: r2 });
  e2.component(a2, V);
};
var z = { install: U };
export { N as CLASS_NAME, q as PLUGIN_NAME, z as default };
