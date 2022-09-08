import { onMounted as e, watch as t, nextTick as a, onUnmounted as l, inject as o, computed as n, defineComponent as s, toRefs as i, ref as r, openBlock as u, createBlock as d, Teleport as v, createVNode as c, Transition as m, mergeProps as f, toHandlers as p, withCtx as b, withDirectives as y, createElementVNode as M, normalizeClass as g, normalizeStyle as C, withModifiers as h, renderSlot as E, vShow as D, createCommentVNode as w, readonly as L } from "vue";
const N = ({ modalRef: o2, latest: n2, show: s2 }) => {
  let i2;
  function r2(e2) {
    const t2 = e2.target.closest(`.${R}`);
    if (!n2.value)
      return;
    if (!t2 || t2 !== o2.value) {
      if (t2 && !t2.classList.contains(`${R}-show`))
        return;
      i2 = e2.target;
    }
  }
  function u2(e2) {
    if (e2) {
      if (o2.value)
        o2.value.focus();
    } else if (i2)
      i2.focus();
  }
  e(() => {
    document.addEventListener("click", r2);
    t(() => s2.value, (e2) => {
      a(() => u2(e2));
    }, { immediate: s2.value });
  });
  l(() => {
    document.removeEventListener("click", r2);
  });
};
const S = ({ close: t2, closeClickDimmed: a2, closeKeyCode: o2, latest: n2 }) => {
  let s2 = null;
  function i2(e2) {
    s2 = e2.target;
  }
  function r2(e2) {
    if (a2 && s2 === e2.target)
      t2.value();
    s2 = null;
  }
  function u2(e2) {
    if (e2.keyCode === o2 && n2.value)
      t2.value();
  }
  e(() => {
    if (o2)
      document.addEventListener("keyup", u2);
  });
  l(() => {
    if (o2)
      document.removeEventListener("keyup", u2);
  });
  return { onMouseDownDimmed: i2, onMouseUpDimmed: r2 };
};
const A = ({ modalRef: e2, show: l2 }) => {
  const { visibleModals: s2, addVisibleModals: i2, removeVisibleModals: r2 } = o(x);
  const u2 = n(() => {
    const t2 = [...s2.value.values()];
    if (!t2.length || !e2.value)
      return false;
    return t2[t2.length - 1] === e2.value;
  });
  t(() => l2.value, () => {
    a(() => {
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
var k = (() => ".vue-universal-modal-leave-from[data-v-8b3adb94],.vue-universal-modal-enter-to[data-v-8b3adb94]{opacity:1}.vue-universal-modal-enter-from[data-v-8b3adb94],.vue-universal-modal-leave-to[data-v-8b3adb94]{opacity:0}.vue-universal-modal[data-v-8b3adb94]{-webkit-overflow-scrolling:touch;overscroll-behavior:contain;position:fixed;overflow-y:auto;left:0;top:0;right:0;bottom:0;background-color:#000c;text-align:left}.vue-universal-modal[data-v-8b3adb94]:not(.vue-universal-modal-latest){z-index:1000}.vue-universal-modal-content[data-v-8b3adb94]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;min-height:100%}\n")();
var B = (e2, t2) => {
  const a2 = e2.__vccOpts || e2;
  for (const [e3, l2] of t2)
    a2[e3] = l2;
  return a2;
};
const _ = s({ inheritAttrs: false, props: { fullscreen: { type: Boolean, default: false }, swipe: { type: Boolean, default: true }, close: { type: Function, default: () => {
} }, disabled: { type: Boolean, default: false }, modelValue: { type: Boolean, default: true }, options: { type: Object, default: () => ({}) } }, emits: ["before-enter", "enter", "after-enter", "enter-cancelled", "before-leave", "leave", "after-leave", "leave-cancelled"], setup(e2, l2) {
  const { teleportTarget: n2 } = o(x);
  const { close: s2, disabled: u2, options: d2, modelValue: v2 } = i(e2);
  const c2 = r(v2.value === void 0 ? true : v2.value);
  const m2 = r(null);
  const f2 = r(!u2.value);
  const p2 = { transition: 300, closeClickDimmed: true, closeKeyCode: 27, styleModalContent: {}, ...d2.value };
  t([() => v2.value, () => u2.value], () => {
    const e3 = v2.value && !u2.value;
    f2.value = e3;
    if (v2.value)
      c2.value = v2.value;
  }, { immediate: true });
  const { latest: b2 } = A({ modalRef: m2, show: f2 });
  N({ latest: b2, modalRef: m2, show: f2 });
  const { onMouseDownDimmed: y2, onMouseUpDimmed: M2 } = S({ close: s2, closeClickDimmed: p2.closeClickDimmed, closeKeyCode: p2.closeKeyCode, latest: b2 });
  const g2 = (e3) => {
    M2(e3);
    if (s2.value)
      s2.value();
  };
  const C2 = { beforeEnter: () => l2.emit("before-enter", m2.value), enter: () => l2.emit("enter", m2.value), afterEnter: () => {
    m2.value.getElementsByClassName("modal")[0].addEventListener("touchstart", w2)(m2.value.getElementsByClassName("modal")[0]).addEventListener("touchmove", k2)(m2.value.getElementsByClassName("modal")[0]).addEventListener("touchend", B2);
    l2.emit("after-enter", { targetRef: m2, close: e2.close });
  }, enterCancelled: () => l2.emit("enter-cancelled", m2.value), beforeLeave: () => l2.emit("before-leave", m2.value), leave: () => l2.emit("leave", m2.value), afterLeave: () => {
    l2.emit("after-leave", m2.value);
    if (v2.value === false)
      c2.value = false;
  }, leaveCancelled: () => l2.emit("leave-cancelled", m2.value) };
  const h2 = () => {
    if (s2.value)
      s2.value();
  };
  const E2 = (e3) => {
  };
  let D2 = 0;
  const w2 = (e3) => {
    D2 = e3.touches[0].clientY;
    m2.value.getElementsByClassName("modal")[0].style.transitionDuration = "0ms";
  };
  let L2 = 0;
  const k2 = (e3) => {
    const t2 = Math.round(e3.touches[0].clientY - D2);
    if (t2 != L2 && t2 > 0)
      m2.value.getElementsByClassName("modal")[0].style.transform = `translate3d(0, ${t2}px, 0)`;
    L2 = t2;
  };
  const B2 = (e3) => {
    alert(JSON.stringify(e3));
    const t2 = e3.changedTouches[0].clientY - D2;
    if (t2 != 0) {
      m2.value.getElementsByClassName("modal")[0].style.transitionDuration = "200ms";
      a(() => {
        m2.value.getElementsByClassName("modal")[0].style.transform = `translate3d(0, 0%, 0)`;
      });
    } else
      m2.value.getElementsByClassName("modal")[0].style.transitionDuration = "300ms";
  };
  return { Log: E2, CLASS_NAME: R, emitClose: h2, inserted: c2, latest: b2, mergeOptions: p2, modalRef: m2, onMouseDownDimmed: y2, onMouseUpDimmed2: g2, touchModalStart: w2, touchModalMove: k2, touchModalEnd: B2, onTransitionEmit: C2, show: f2, teleportTarget: n2, transition: p2.transition ? p2.transition / 1e3 + "s" : void 0 };
} });
function T(e2, t2, a2, l2, o2, n2) {
  return e2.inserted ? (u(), d(v, { key: 0, to: e2.teleportTarget, disabled: e2.disabled }, [c(m, f({ appear: "", name: e2.CLASS_NAME }, p(e2.onTransitionEmit)), { default: b(() => {
    var _a;
    return [y(M("div", f({ ref: "modalRef", role: "dialog", tabindex: "-1", "aria-modal": "true", "aria-label": "Modal window", class: [e2.CLASS_NAME, { [`${e2.CLASS_NAME}-show`]: e2.show }, { [`${e2.CLASS_NAME}-latest`]: e2.latest }], style: { transitionDuration: e2.transition } }, e2.$attrs), [M("div", { class: g(`${e2.CLASS_NAME}-content`), style: C({ transitionDuration: e2.transition, ...(_a = e2.mergeOptions) == null ? void 0 : _a.styleModalContent }), onMousedown: t2[0] || (t2[0] = h((...t3) => e2.onMouseDownDimmed && e2.onMouseDownDimmed(...t3), ["self"])), onMouseup: t2[1] || (t2[1] = h((...t3) => e2.onMouseUpDimmed2 && e2.onMouseUpDimmed2(...t3), ["self"])), onTouchend: t2[2] || (t2[2] = h((t3) => e2.close(), ["self"])) }, [E(e2.$slots, "default", { emitClose: e2.emitClose }, void 0, true), E(e2.$slots, "close", {}, void 0, true)], 38)], 16), [[D, e2.show]])];
  }), _: 3 }, 16, ["name"])], 8, ["to", "disabled"])) : w("", true);
}
var $ = B(_, [["render", T], ["__scopeId", "data-v-8b3adb94"]]);
const x = "VueUniversalModal";
const R = "vue-universal-modal";
const V = (e2, t2 = {}) => {
  const { teleportTarget: a2 = "", modalComponent: l2 = "Modal" } = t2;
  if (!a2)
    return;
  const o2 = r(/* @__PURE__ */ new Set());
  const n2 = (e3) => {
    o2.value.add(e3);
  };
  const s2 = (e3) => {
    o2.value.delete(e3);
  };
  e2.provide(x, { teleportTarget: a2, visibleModals: L(o2), addVisibleModals: n2, removeVisibleModals: s2 });
  e2.component(l2, $);
};
var U = { install: V };
export { R as CLASS_NAME, x as PLUGIN_NAME, U as default };
