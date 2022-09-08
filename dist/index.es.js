import { onMounted as e, watch as t, nextTick as o, onUnmounted as l, inject as a, computed as n, defineComponent as s, toRefs as i, ref as r, openBlock as u, createBlock as d, Teleport as v, createVNode as c, Transition as m, mergeProps as f, toHandlers as p, withCtx as M, withDirectives as b, createElementVNode as w, normalizeClass as y, normalizeStyle as C, withModifiers as g, renderSlot as D, vShow as h, createCommentVNode as E, readonly as L } from "vue";
const A = ({ modalRef: a2, latest: n2, show: s2 }) => {
  let i2;
  function r2(e2) {
    const t2 = e2.target.closest(`.${N}`);
    if (!n2.value)
      return;
    if (!t2 || t2 !== a2.value) {
      if (t2 && !t2.classList.contains(`${N}-show`))
        return;
      i2 = e2.target;
    }
  }
  function u2(e2) {
    if (e2) {
      if (a2.value)
        a2.value.focus();
    } else if (i2)
      i2.focus();
  }
  e(() => {
    document.addEventListener("click", r2);
    t(() => s2.value, (e2) => {
      o(() => u2(e2));
    }, { immediate: s2.value });
  });
  l(() => {
    document.removeEventListener("click", r2);
  });
};
const S = ({ close: t2, closeClickDimmed: o2, closeKeyCode: a2, latest: n2 }) => {
  let s2 = null;
  function i2(e2) {
    s2 = e2.target;
  }
  function r2(e2) {
    if (o2 && s2 === e2.target)
      t2.value();
    s2 = null;
  }
  function u2(e2) {
    if (e2.keyCode === a2 && n2.value)
      t2.value();
  }
  e(() => {
    if (a2)
      document.addEventListener("keyup", u2);
  });
  l(() => {
    if (a2)
      document.removeEventListener("keyup", u2);
  });
  return { onMouseDownDimmed: i2, onMouseUpDimmed: r2 };
};
const k = ({ modalRef: e2, show: l2 }) => {
  const { visibleModals: s2, addVisibleModals: i2, removeVisibleModals: r2 } = a(V);
  const u2 = n(() => {
    const t2 = [...s2.value.values()];
    if (!t2.length || !e2.value)
      return false;
    return t2[t2.length - 1] === e2.value;
  });
  t(() => l2.value, () => {
    o(() => {
      if (!e2.value)
        return;
      if (l2.value)
        i2(e2.value);
      else
        r2(e2.value);
    });
  }, { immediate: true });
  return { latest: u2 };
};
var _ = (() => ".vue-universal-modal-leave-from,.vue-universal-modal-enter-to{opacity:1}.vue-universal-modal-enter-from,.vue-universal-modal-leave-to{opacity:0}.vue-universal-modal{-webkit-overflow-scrolling:touch;overscroll-behavior:contain;position:fixed;overflow-y:auto;left:0;top:0;right:0;bottom:0;background-color:#000c;text-align:left}.vue-universal-modal:not(.vue-universal-modal-latest){z-index:1000}.vue-universal-modal-content{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;min-height:100%}\n")();
var $ = (e2, t2) => {
  const o2 = e2.__vccOpts || e2;
  for (const [e3, l2] of t2)
    o2[e3] = l2;
  return o2;
};
const x = s({ inheritAttrs: false, props: { fullscreen: { type: Boolean, default: false }, swipe: { type: Boolean, default: true }, close: { type: Function, default: () => {
} }, disabled: { type: Boolean, default: false }, modelValue: { type: Boolean, default: true }, options: { type: Object, default: () => ({}) } }, emits: ["before-enter", "enter", "after-enter", "enter-cancelled", "before-leave", "leave", "after-leave", "leave-cancelled"], setup(e2, o2) {
  const { teleportTarget: l2 } = a(V);
  const { close: n2, disabled: s2, options: u2, modelValue: d2 } = i(e2);
  const v2 = r(d2.value === void 0 ? true : d2.value);
  const c2 = r(null);
  const m2 = r(!s2.value);
  const f2 = { transition: 300, closeClickDimmed: true, closeKeyCode: 27, styleModalContent: {}, ...u2.value };
  t([() => d2.value, () => s2.value], () => {
    const e3 = d2.value && !s2.value;
    m2.value = e3;
    if (d2.value)
      v2.value = d2.value;
  }, { immediate: true });
  const { latest: p2 } = k({ modalRef: c2, show: m2 });
  A({ latest: p2, modalRef: c2, show: m2 });
  const { onMouseDownDimmed: M2, onMouseUpDimmed: b2 } = S({ close: n2, closeClickDimmed: f2.closeClickDimmed, closeKeyCode: f2.closeKeyCode, latest: p2 });
  const w2 = (e3) => {
    b2(e3);
    if (n2.value)
      n2.value();
  };
  const y2 = { beforeEnter: () => o2.emit("before-enter", c2.value), enter: () => o2.emit("enter", c2.value), afterEnter: () => o2.emit("after-enter", { targetRef: c2, close: e2.close }), enterCancelled: () => o2.emit("enter-cancelled", c2.value), beforeLeave: () => o2.emit("before-leave", c2.value), leave: () => o2.emit("leave", c2.value), afterLeave: () => {
    o2.emit("after-leave", c2.value);
    if (d2.value === false)
      v2.value = false;
  }, leaveCancelled: () => o2.emit("leave-cancelled", c2.value) };
  const C2 = () => {
    if (n2.value)
      n2.value();
  };
  const g2 = (e3) => {
  };
  return { Log: g2, CLASS_NAME: N, emitClose: C2, inserted: v2, latest: p2, mergeOptions: f2, modalRef: c2, onMouseDownDimmed: M2, onMouseUpDimmed2: w2, onTransitionEmit: y2, show: m2, teleportTarget: l2, transition: f2.transition ? f2.transition / 1e3 + "s" : void 0 };
} });
function R(e2, t2, o2, l2, a2, n2) {
  return e2.inserted ? (u(), d(v, { key: 0, to: e2.teleportTarget, disabled: e2.disabled }, [c(m, f({ appear: "", name: e2.CLASS_NAME }, p(e2.onTransitionEmit)), { default: M(() => {
    var _a;
    return [b(w("div", f({ ref: "modalRef", role: "dialog", tabindex: "-1", "aria-modal": "true", "aria-label": "Modal window", class: [e2.CLASS_NAME, { [`${e2.CLASS_NAME}-show`]: e2.show }, { [`${e2.CLASS_NAME}-latest`]: e2.latest }], style: { transitionDuration: e2.transition } }, e2.$attrs), [w("div", { class: y(`${e2.CLASS_NAME}-content`), style: C({ transitionDuration: e2.transition, ...(_a = e2.mergeOptions) == null ? void 0 : _a.styleModalContent }), onMousedown: t2[0] || (t2[0] = g((...t3) => e2.onMouseDownDimmed && e2.onMouseDownDimmed(...t3), ["self"])), onMouseup: t2[1] || (t2[1] = (...t3) => e2.onMouseUpDimmed2 && e2.onMouseUpDimmed2(...t3)) }, [D(e2.$slots, "default", { emitClose: e2.emitClose }), D(e2.$slots, "close")], 38)], 16), [[h, e2.show]])];
  }), _: 3 }, 16, ["name"])], 8, ["to", "disabled"])) : E("", true);
}
var T = $(x, [["render", R]]);
const V = "VueUniversalModal";
const N = "vue-universal-modal";
const U = (e2, t2 = {}) => {
  const { teleportTarget: o2 = "", modalComponent: l2 = "Modal" } = t2;
  if (!o2)
    return;
  const a2 = r(/* @__PURE__ */ new Set());
  const n2 = (e3) => {
    a2.value.add(e3);
  };
  const s2 = (e3) => {
    a2.value.delete(e3);
  };
  e2.provide(V, { teleportTarget: o2, visibleModals: L(a2), addVisibleModals: n2, removeVisibleModals: s2 });
  e2.component(l2, T);
};
var B = { install: U };
export { N as CLASS_NAME, V as PLUGIN_NAME, B as default };
