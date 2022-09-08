import { onMounted as e, watch as t, nextTick as o, onUnmounted as a, inject as l, computed as n, defineComponent as s, toRefs as i, ref as u, openBlock as r, createBlock as d, Teleport as c, createVNode as v, Transition as m, mergeProps as f, toHandlers as p, withCtx as M, withDirectives as h, createElementVNode as y, normalizeClass as g, normalizeStyle as C, withModifiers as b, renderSlot as D, vShow as w, createCommentVNode as E, readonly as S } from "vue";
const L = ({ modalRef: l2, latest: n2, show: s2 }) => {
  let i2;
  function u2(e2) {
    const t2 = e2.target.closest(`.${R}`);
    if (!n2.value)
      return;
    if (!t2 || t2 !== l2.value) {
      if (t2 && !t2.classList.contains(`${R}-show`))
        return;
      i2 = e2.target;
    }
  }
  function r2(e2) {
    if (e2) {
      if (l2.value)
        l2.value.focus();
    } else if (i2)
      i2.focus();
  }
  e(() => {
    document.addEventListener("click", u2);
    t(() => s2.value, (e2) => {
      o(() => r2(e2));
    }, { immediate: s2.value });
  });
  a(() => {
    document.removeEventListener("click", u2);
  });
};
const A = ({ close: t2, closeClickDimmed: o2, closeKeyCode: l2, latest: n2 }) => {
  let s2 = null;
  function i2(e2) {
    s2 = e2.target;
  }
  function u2(e2) {
    if (o2 && s2 === e2.target)
      t2.value();
    s2 = null;
  }
  function r2(e2) {
    if (e2.keyCode === l2 && n2.value)
      t2.value();
  }
  e(() => {
    if (l2)
      document.addEventListener("keyup", r2);
  });
  a(() => {
    if (l2)
      document.removeEventListener("keyup", r2);
  });
  return { onMouseDownDimmed: i2, onMouseUpDimmed: u2 };
};
const k = ({ modalRef: e2, show: a2 }) => {
  const { visibleModals: s2, addVisibleModals: i2, removeVisibleModals: u2 } = l(x);
  const r2 = n(() => {
    const t2 = [...s2.value.values()];
    if (!t2.length || !e2.value)
      return false;
    return t2[t2.length - 1] === e2.value;
  });
  t(() => a2.value, () => {
    o(() => {
      if (!e2.value)
        return;
      if (a2.value)
        i2(e2.value);
      else
        u2(e2.value);
    });
  }, { immediate: true });
  return { latest: r2 };
};
var T = (() => ".vue-universal-modal-leave-from[data-v-14c8640a],.vue-universal-modal-enter-to[data-v-14c8640a]{opacity:1}.vue-universal-modal-enter-from[data-v-14c8640a],.vue-universal-modal-leave-to[data-v-14c8640a]{opacity:0}.vue-universal-modal[data-v-14c8640a]{-webkit-overflow-scrolling:touch;overscroll-behavior:contain;position:fixed;overflow-y:auto;left:0;top:0;right:0;bottom:0;background-color:#000c;text-align:left}.vue-universal-modal[data-v-14c8640a]:not(.vue-universal-modal-latest){z-index:1000}.vue-universal-modal-content[data-v-14c8640a]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;min-height:100%}\n")();
var N = (e2, t2) => {
  const o2 = e2.__vccOpts || e2;
  for (const [e3, a2] of t2)
    o2[e3] = a2;
  return o2;
};
const _ = s({ inheritAttrs: false, props: { fullscreen: { type: Boolean, default: false }, swipe: { type: Boolean, default: true }, close: { type: Function, default: () => {
} }, disabled: { type: Boolean, default: false }, modelValue: { type: Boolean, default: true }, options: { type: Object, default: () => ({}) } }, emits: ["before-enter", "enter", "after-enter", "enter-cancelled", "before-leave", "leave", "after-leave", "leave-cancelled"], setup(e2, a2) {
  const { teleportTarget: n2 } = l(x);
  const { close: s2, disabled: r2, options: d2, modelValue: c2 } = i(e2);
  const v2 = u(c2.value === void 0 ? true : c2.value);
  const m2 = u(null);
  const f2 = u(!r2.value);
  const p2 = { transition: 300, closeClickDimmed: true, closeKeyCode: 27, styleModalContent: {}, ...d2.value };
  t([() => c2.value, () => r2.value], () => {
    const e3 = c2.value && !r2.value;
    f2.value = e3;
    if (c2.value)
      v2.value = c2.value;
  }, { immediate: true });
  const { latest: M2 } = k({ modalRef: m2, show: f2 });
  L({ latest: M2, modalRef: m2, show: f2 });
  const { onMouseDownDimmed: h2, onMouseUpDimmed: y2 } = A({ close: s2, closeClickDimmed: p2.closeClickDimmed, closeKeyCode: p2.closeKeyCode, latest: M2 });
  const g2 = (e3) => {
    y2(e3);
    if (s2.value)
      s2.value();
  };
  const C2 = { beforeEnter: () => a2.emit("before-enter", m2.value), enter: () => a2.emit("enter", m2.value), afterEnter: () => a2.emit("after-enter", { targetRef: m2, close: e2.close }), enterCancelled: () => a2.emit("enter-cancelled", m2.value), beforeLeave: () => a2.emit("before-leave", m2.value), leave: () => a2.emit("leave", m2.value), afterLeave: () => {
    a2.emit("after-leave", m2.value);
    if (c2.value === false)
      v2.value = false;
  }, leaveCancelled: () => a2.emit("leave-cancelled", m2.value) };
  const b2 = () => {
    if (s2.value)
      s2.value();
  };
  const D2 = (e3) => {
  };
  let w2 = 0;
  const E2 = (e3) => {
    w2 = e3.touches[0].clientY;
    m2.value.getElementsByClassName("modal")[0].style.transitionDuration = "0ms";
  };
  let S2 = 0;
  const T2 = (e3) => {
    const t2 = Math.round(e3.touches[0].clientY - w2);
    if (t2 != S2 && t2 > 0)
      m2.value.getElementsByClassName("modal")[0].style.transform = `translate3d(0, ${t2}px, 0)`;
    S2 = t2;
  };
  const N2 = (e3) => {
    const t2 = e3.changedTouches[0].clientY - w2;
    if (t2 != 0) {
      m2.value.getElementsByClassName("modal")[0].style.transitionDuration = "200ms";
      o(() => {
        m2.value.getElementsByClassName("modal")[0].style.transform = `translate3d(0, 0%, 0)`;
      });
    } else
      m2.value.getElementsByClassName("modal")[0].style.transitionDuration = "300ms";
  };
  return { Log: D2, CLASS_NAME: R, emitClose: b2, inserted: v2, latest: M2, mergeOptions: p2, modalRef: m2, onMouseDownDimmed: h2, onMouseUpDimmed2: g2, touchModalStart: E2, touchModalMove: T2, touchModalEnd: N2, onTransitionEmit: C2, show: f2, teleportTarget: n2, transition: p2.transition ? p2.transition / 1e3 + "s" : void 0 };
} });
function B(e2, t2, o2, a2, l2, n2) {
  return e2.inserted ? (r(), d(c, { key: 0, to: e2.teleportTarget, disabled: e2.disabled }, [v(m, f({ appear: "", name: e2.CLASS_NAME }, p(e2.onTransitionEmit)), { default: M(() => {
    var _a;
    return [h(y("div", f({ ref: "modalRef", role: "dialog", tabindex: "-1", "aria-modal": "true", "aria-label": "Modal window", class: [e2.CLASS_NAME, { [`${e2.CLASS_NAME}-show`]: e2.show }, { [`${e2.CLASS_NAME}-latest`]: e2.latest }], style: { transitionDuration: e2.transition } }, e2.$attrs), [y("div", { class: g(`${e2.CLASS_NAME}-content`), style: C({ transitionDuration: e2.transition, ...(_a = e2.mergeOptions) == null ? void 0 : _a.styleModalContent }), onMousedown: t2[3] || (t2[3] = b((...t3) => e2.onMouseDownDimmed && e2.onMouseDownDimmed(...t3), ["self"])), onMouseup: t2[4] || (t2[4] = (...t3) => e2.onMouseUpDimmed2 && e2.onMouseUpDimmed2(...t3)), onTouchend: t2[5] || (t2[5] = b((t3) => e2.close(), ["self"])) }, [D(e2.$slots, "default", { emitClose: e2.emitClose, onTouchstart: t2[0] || (t2[0] = (...t3) => e2.touchModalStart && e2.touchModalStart(...t3)), onTouchmove: t2[1] || (t2[1] = (...t3) => e2.touchModalMove && e2.touchModalMove(...t3)), onTouchend: t2[2] || (t2[2] = (...t3) => e2.touchModalEnd && e2.touchModalEnd(...t3)) }, void 0, true), D(e2.$slots, "close", {}, void 0, true)], 38)], 16), [[w, e2.show]])];
  }), _: 3 }, 16, ["name"])], 8, ["to", "disabled"])) : E("", true);
}
var $ = N(_, [["render", B], ["__scopeId", "data-v-14c8640a"]]);
const x = "VueUniversalModal";
const R = "vue-universal-modal";
const V = (e2, t2 = {}) => {
  const { teleportTarget: o2 = "", modalComponent: a2 = "Modal" } = t2;
  if (!o2)
    return;
  const l2 = u(/* @__PURE__ */ new Set());
  const n2 = (e3) => {
    l2.value.add(e3);
  };
  const s2 = (e3) => {
    l2.value.delete(e3);
  };
  e2.provide(x, { teleportTarget: o2, visibleModals: S(l2), addVisibleModals: n2, removeVisibleModals: s2 });
  e2.component(a2, $);
};
var U = { install: V };
export { R as CLASS_NAME, x as PLUGIN_NAME, U as default };
