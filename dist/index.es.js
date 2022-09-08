import { onMounted as e, watch as t, nextTick as o, onUnmounted as l, inject as a, computed as n, defineComponent as s, toRefs as i, ref as r, openBlock as u, createBlock as d, Teleport as c, createVNode as v, Transition as m, mergeProps as f, toHandlers as p, withCtx as y, withDirectives as M, createElementVNode as b, normalizeClass as h, normalizeStyle as g, withModifiers as C, renderSlot as D, vShow as w, createCommentVNode as E, readonly as S } from "vue";
const L = ({ modalRef: a2, latest: n2, show: s2 }) => {
  let i2;
  function r2(e2) {
    const t2 = e2.target.closest(`.${R}`);
    if (!n2.value)
      return;
    if (!t2 || t2 !== a2.value) {
      if (t2 && !t2.classList.contains(`${R}-show`))
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
const A = ({ close: t2, closeClickDimmed: o2, closeKeyCode: a2, latest: n2 }) => {
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
  const { visibleModals: s2, addVisibleModals: i2, removeVisibleModals: r2 } = a(x);
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
var N = (() => ".vue-universal-modal-leave-from[data-v-65b97ef8],.vue-universal-modal-enter-to[data-v-65b97ef8]{opacity:1}.vue-universal-modal-enter-from[data-v-65b97ef8],.vue-universal-modal-leave-to[data-v-65b97ef8]{opacity:0}.vue-universal-modal[data-v-65b97ef8]{-webkit-overflow-scrolling:touch;overscroll-behavior:contain;position:fixed;overflow-y:auto;left:0;top:0;right:0;bottom:0;background-color:#000c;text-align:left}.vue-universal-modal[data-v-65b97ef8]:not(.vue-universal-modal-latest){z-index:1000}.vue-universal-modal-content[data-v-65b97ef8]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;min-height:100%}\n")();
var _ = (e2, t2) => {
  const o2 = e2.__vccOpts || e2;
  for (const [e3, l2] of t2)
    o2[e3] = l2;
  return o2;
};
const B = s({ inheritAttrs: false, props: { fullscreen: { type: Boolean, default: false }, swipe: { type: Boolean, default: true }, close: { type: Function, default: () => {
} }, disabled: { type: Boolean, default: false }, modelValue: { type: Boolean, default: true }, options: { type: Object, default: () => ({}) } }, emits: ["before-enter", "enter", "after-enter", "enter-cancelled", "before-leave", "leave", "after-leave", "leave-cancelled"], setup(e2, l2) {
  const { teleportTarget: n2 } = a(x);
  const { close: s2, disabled: u2, options: d2, modelValue: c2 } = i(e2);
  const v2 = r(c2.value === void 0 ? true : c2.value);
  const m2 = r(null);
  const f2 = r(!u2.value);
  const p2 = { transition: 300, closeClickDimmed: true, closeKeyCode: 27, styleModalContent: {}, ...d2.value };
  t([() => c2.value, () => u2.value], () => {
    const e3 = c2.value && !u2.value;
    f2.value = e3;
    if (c2.value)
      v2.value = c2.value;
  }, { immediate: true });
  const { latest: y2 } = k({ modalRef: m2, show: f2 });
  L({ latest: y2, modalRef: m2, show: f2 });
  const { onMouseDownDimmed: M2, onMouseUpDimmed: b2 } = A({ close: s2, closeClickDimmed: p2.closeClickDimmed, closeKeyCode: p2.closeKeyCode, latest: y2 });
  const h2 = (e3) => {
    b2(e3);
    if (s2.value)
      s2.value();
  };
  let g2 = 0;
  const C2 = (e3) => {
    g2 = e3.touches[0].clientY;
    m2.value.getElementsByClassName("modal")[0].style.transitionDuration = "0ms";
  };
  let D2 = 0;
  const w2 = (e3) => {
    const t2 = Math.round(e3.touches[0].clientY - g2);
    if (t2 != D2 && t2 > 0)
      m2.value.getElementsByClassName("modal")[0].style.transform = `translate3d(0, ${t2}px, 0)`;
    D2 = t2;
  };
  const E2 = (e3) => {
    alert(JSON.stringify(e3));
    const t2 = e3.changedTouches[0].clientY - g2;
    if (t2 != 0) {
      m2.value.getElementsByClassName("modal")[0].style.transitionDuration = "200ms";
      o(() => {
        m2.value.getElementsByClassName("modal")[0].style.transform = `translate3d(0, 0%, 0)`;
      });
    } else
      m2.value.getElementsByClassName("modal")[0].style.transitionDuration = "300ms";
  };
  const S2 = { beforeEnter: () => l2.emit("before-enter", m2.value), enter: () => l2.emit("enter", m2.value), afterEnter: () => {
    m2.value.querySelector(".modal").ontouchstart = C2;
    m2.value.querySelector(".modal").ontouchmove = w2;
    m2.value.querySelector(".modal").ontouchend = E2;
    l2.emit("after-enter", { targetRef: m2, close: e2.close });
  }, enterCancelled: () => l2.emit("enter-cancelled", m2.value), beforeLeave: () => l2.emit("before-leave", m2.value), leave: () => l2.emit("leave", m2.value), afterLeave: () => {
    l2.emit("after-leave", m2.value);
    if (c2.value === false)
      v2.value = false;
  }, leaveCancelled: () => l2.emit("leave-cancelled", m2.value) };
  const N2 = () => {
    if (s2.value)
      s2.value();
  };
  const _2 = (e3) => {
  };
  return { Log: _2, CLASS_NAME: R, emitClose: N2, inserted: v2, latest: y2, mergeOptions: p2, modalRef: m2, onMouseDownDimmed: M2, onMouseUpDimmed2: h2, touchModalStart: C2, touchModalMove: w2, touchModalEnd: E2, onTransitionEmit: S2, show: f2, teleportTarget: n2, transition: p2.transition ? p2.transition / 1e3 + "s" : void 0 };
} });
function T(e2, t2, o2, l2, a2, n2) {
  return e2.inserted ? (u(), d(c, { key: 0, to: e2.teleportTarget, disabled: e2.disabled }, [v(m, f({ appear: "", name: e2.CLASS_NAME }, p(e2.onTransitionEmit)), { default: y(() => {
    var _a;
    return [M(b("div", f({ ref: "modalRef", role: "dialog", tabindex: "-1", "aria-modal": "true", "aria-label": "Modal window", class: [e2.CLASS_NAME, { [`${e2.CLASS_NAME}-show`]: e2.show }, { [`${e2.CLASS_NAME}-latest`]: e2.latest }], style: { transitionDuration: e2.transition } }, e2.$attrs), [b("div", { class: h(`${e2.CLASS_NAME}-content`), style: g({ transitionDuration: e2.transition, ...(_a = e2.mergeOptions) == null ? void 0 : _a.styleModalContent }), onMousedown: t2[0] || (t2[0] = C((...t3) => e2.onMouseDownDimmed && e2.onMouseDownDimmed(...t3), ["self"])), onMouseup: t2[1] || (t2[1] = C((...t3) => e2.onMouseUpDimmed2 && e2.onMouseUpDimmed2(...t3), ["self"])), onTouchend: t2[2] || (t2[2] = C((t3) => e2.close(), ["self"])) }, [D(e2.$slots, "default", { emitClose: e2.emitClose, class: h({ modal: true, "modal-sheet": true }) }, void 0, true), D(e2.$slots, "close", {}, void 0, true)], 38)], 16), [[w, e2.show]])];
  }), _: 3 }, 16, ["name"])], 8, ["to", "disabled"])) : E("", true);
}
var $ = _(B, [["render", T], ["__scopeId", "data-v-65b97ef8"]]);
const x = "VueUniversalModal";
const R = "vue-universal-modal";
const V = (e2, t2 = {}) => {
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
  e2.provide(x, { teleportTarget: o2, visibleModals: S(a2), addVisibleModals: n2, removeVisibleModals: s2 });
  e2.component(l2, $);
};
var U = { install: V };
export { R as CLASS_NAME, x as PLUGIN_NAME, U as default };
