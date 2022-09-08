import { onMounted as e, watch as t, nextTick as o, onUnmounted as a, inject as l, computed as n, defineComponent as s, toRefs as r, ref as i, openBlock as u, createBlock as d, Teleport as v, createVNode as c, Transition as f, mergeProps as m, toHandlers as p, withCtx as y, withDirectives as M, createElementVNode as h, normalizeClass as g, normalizeStyle as D, withModifiers as b, renderSlot as w, vShow as C, createCommentVNode as E, readonly as L } from "vue";
const S = ({ modalRef: l2, latest: n2, show: s2 }) => {
  let r2;
  function i2(e2) {
    const t2 = e2.target.closest(`.${q}`);
    if (!n2.value)
      return;
    if (!t2 || t2 !== l2.value) {
      if (t2 && !t2.classList.contains(`${q}-show`))
        return;
      r2 = e2.target;
    }
  }
  function u2(e2) {
    if (e2) {
      if (l2.value)
        l2.value.focus();
    } else if (r2)
      r2.focus();
  }
  e(() => {
    document.addEventListener("click", i2);
    t(() => s2.value, (e2) => {
      o(() => u2(e2));
    }, { immediate: s2.value });
  });
  a(() => {
    document.removeEventListener("click", i2);
  });
};
const T = ({ close: t2, closeClickDimmed: o2, closeKeyCode: l2, latest: n2 }) => {
  let s2 = null;
  function r2(e2) {
    s2 = e2.target;
  }
  function i2(e2) {
    if (o2 && s2 === e2.target)
      t2.value();
    s2 = null;
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
  return { onMouseDownDimmed: r2, onMouseUpDimmed: i2 };
};
const A = ({ modalRef: e2, show: a2 }) => {
  const { visibleModals: s2, addVisibleModals: r2, removeVisibleModals: i2 } = l(V);
  const u2 = n(() => {
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
        r2(e2.value);
      else
        i2(e2.value);
    });
  }, { immediate: true });
  return { latest: u2 };
};
var k = (() => ".vue-universal-modal-leave-from[data-v-1ff397fd],.vue-universal-modal-enter-to[data-v-1ff397fd]{opacity:1}.vue-universal-modal-enter-from[data-v-1ff397fd],.vue-universal-modal-leave-to[data-v-1ff397fd]{opacity:0}.vue-universal-modal[data-v-1ff397fd]{-webkit-overflow-scrolling:touch;overscroll-behavior:contain;position:fixed;overflow-y:auto;left:0;top:0;right:0;bottom:0;background-color:#000c;text-align:left}.vue-universal-modal[data-v-1ff397fd]:not(.vue-universal-modal-latest){z-index:1000}.vue-universal-modal-content[data-v-1ff397fd]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;min-height:100%}\n")();
var _ = (e2, t2) => {
  const o2 = e2.__vccOpts || e2;
  for (const [e3, a2] of t2)
    o2[e3] = a2;
  return o2;
};
const $ = s({ inheritAttrs: false, props: { fullscreen: { type: Boolean, default: false }, swipe: { type: Boolean, default: true }, close: { type: Function, default: () => {
} }, disabled: { type: Boolean, default: false }, modelValue: { type: Boolean, default: true }, options: { type: Object, default: () => ({}) } }, emits: ["before-enter", "enter", "after-enter", "enter-cancelled", "before-leave", "leave", "after-leave", "leave-cancelled"], setup(e2, a2) {
  const { teleportTarget: n2 } = l(V);
  const { close: s2, disabled: u2, options: d2, modelValue: v2 } = r(e2);
  const c2 = i(v2.value === void 0 ? true : v2.value);
  const f2 = i(null);
  const m2 = i(!u2.value);
  const p2 = { transition: 300, closeClickDimmed: true, closeKeyCode: 27, styleModalContent: {}, ...d2.value };
  t([() => v2.value, () => u2.value], () => {
    const e3 = v2.value && !u2.value;
    m2.value = e3;
    if (v2.value)
      c2.value = v2.value;
  }, { immediate: true });
  const { latest: y2 } = A({ modalRef: f2, show: m2 });
  S({ latest: y2, modalRef: f2, show: m2 });
  const { onMouseDownDimmed: M2, onMouseUpDimmed: h2 } = T({ close: s2, closeClickDimmed: p2.closeClickDimmed, closeKeyCode: p2.closeKeyCode, latest: y2 });
  const g2 = (e3) => {
    h2(e3);
    if (s2.value)
      s2.value();
  };
  let D2 = 0;
  const b2 = (e3) => {
    D2 = e3.touches[0].clientY;
    e3.currentTarget.style.transitionDuration = "0ms";
  };
  let w2 = 0;
  const C2 = (e3) => {
    const t2 = Math.round(e3.touches[0].clientY - D2);
    if (t2 != w2 && t2 > 0)
      e3.currentTarget.style.transform = `translate3d(0, ${t2}px, 0)`;
    w2 = t2;
  };
  const E2 = (e3) => {
    e3.preventDefault();
    e3.stopPropagation();
    e3.stopImmediatePropagation();
    const t2 = e3.changedTouches[0].clientY - D2;
    if (t2 != 0) {
      e3.currentTarget.style.transitionDuration = "200ms";
      o(() => {
        e3.currentTarget.style.transform = `translate3d(0, 0%, 0)`;
      });
    } else
      e3.currentTarget.style.transitionDuration = "300ms";
  };
  const L2 = { beforeEnter: () => a2.emit("before-enter", f2.value), enter: () => a2.emit("enter", f2.value), afterEnter: () => {
    f2.value.querySelector(".modal").addEventListener("touchstart", b2, { passive: true });
    f2.value.querySelector(".modal").addEventListener("touchmove", C2, { passive: true });
    f2.value.querySelector(".modal").addEventListener("touchend", E2, { passive: false });
    a2.emit("after-enter", { targetRef: f2, close: e2.close });
  }, enterCancelled: () => a2.emit("enter-cancelled", f2.value), beforeLeave: () => a2.emit("before-leave", f2.value), leave: () => {
    f2.value.querySelector(".modal").removeEventListener("touchstart", b2, { passive: true });
    f2.value.querySelector(".modal").removeEventListener("touchmove", C2, { passive: true });
    f2.value.querySelector(".modal").removeEventListener("touchend", E2, { passive: false });
    a2.emit("leave", f2.value);
  }, afterLeave: () => {
    a2.emit("after-leave", f2.value);
    if (v2.value === false)
      c2.value = false;
  }, leaveCancelled: () => a2.emit("leave-cancelled", f2.value) };
  const k2 = () => {
    if (s2.value)
      s2.value();
  };
  const _2 = (e3) => {
  };
  return { Log: _2, CLASS_NAME: q, emitClose: k2, inserted: c2, latest: y2, mergeOptions: p2, modalRef: f2, onMouseDownDimmed: M2, onMouseUpDimmed2: g2, touchModalStart: b2, touchModalMove: C2, touchModalEnd: E2, onTransitionEmit: L2, show: m2, teleportTarget: n2, transition: p2.transition ? p2.transition / 1e3 + "s" : void 0 };
} });
function x(e2, t2, o2, a2, l2, n2) {
  return e2.inserted ? (u(), d(v, { key: 0, to: e2.teleportTarget, disabled: e2.disabled }, [c(f, m({ appear: "", name: e2.CLASS_NAME }, p(e2.onTransitionEmit)), { default: y(() => {
    var _a;
    return [M(h("div", m({ ref: "modalRef", role: "dialog", tabindex: "-1", "aria-modal": "true", "aria-label": "Modal window", class: [e2.CLASS_NAME, { [`${e2.CLASS_NAME}-show`]: e2.show }, { [`${e2.CLASS_NAME}-latest`]: e2.latest }], style: { transitionDuration: e2.transition } }, e2.$attrs), [h("div", { class: g(`${e2.CLASS_NAME}-content`), style: D({ transitionDuration: e2.transition, ...(_a = e2.mergeOptions) == null ? void 0 : _a.styleModalContent }), onMousedown: t2[0] || (t2[0] = b((...t3) => e2.onMouseDownDimmed && e2.onMouseDownDimmed(...t3), ["self"])), onMouseup: t2[1] || (t2[1] = b((...t3) => e2.onMouseUpDimmed2 && e2.onMouseUpDimmed2(...t3), ["self"])), onTouchmove: t2[2] || (t2[2] = b((t3) => e2.close(), ["self"])) }, [w(e2.$slots, "default", { emitClose: e2.emitClose }, void 0, true), w(e2.$slots, "close", {}, void 0, true)], 38)], 16), [[C, e2.show]])];
  }), _: 3 }, 16, ["name"])], 8, ["to", "disabled"])) : E("", true);
}
var R = _($, [["render", x], ["__scopeId", "data-v-1ff397fd"]]);
const V = "VueUniversalModal";
const q = "vue-universal-modal";
const N = (e2, t2 = {}) => {
  const { teleportTarget: o2 = "", modalComponent: a2 = "Modal" } = t2;
  if (!o2)
    return;
  const l2 = i(/* @__PURE__ */ new Set());
  const n2 = (e3) => {
    l2.value.add(e3);
  };
  const s2 = (e3) => {
    l2.value.delete(e3);
  };
  e2.provide(V, { teleportTarget: o2, visibleModals: L(l2), addVisibleModals: n2, removeVisibleModals: s2 });
  e2.component(a2, R);
};
var U = { install: N };
export { q as CLASS_NAME, V as PLUGIN_NAME, U as default };
