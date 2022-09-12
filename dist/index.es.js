import { onMounted as e, watch as t, nextTick as o, onUnmounted as a, inject as n, computed as l, defineComponent as s, toRefs as r, ref as i, openBlock as u, createBlock as d, Teleport as c, createVNode as v, Transition as m, mergeProps as f, toHandlers as p, withCtx as h, withDirectives as y, createElementVNode as g, normalizeClass as b, normalizeStyle as M, withModifiers as w, renderSlot as D, vShow as C, createCommentVNode as x, readonly as E } from "vue";
const L = ({ modalRef: n2, latest: l2, show: s2 }) => {
  function r2(e2) {
    const t2 = e2.target.closest(`.${B}`);
    if (!l2.value)
      return;
    if (!t2 || t2 !== n2.value) {
      if (t2 && !t2.classList.contains(`${B}-show`))
        return;
      e2.target;
    }
  }
  function i2(e2) {
    if (e2) {
      if (n2.value)
        ;
    }
  }
  e(() => {
    document.addEventListener("click", r2);
    t(() => s2.value, (e2) => {
      o(() => i2(e2));
    }, { immediate: s2.value });
  });
  a(() => {
    document.removeEventListener("click", r2);
  });
};
const S = ({ close: t2, closeClickDimmed: o2, closeKeyCode: n2, latest: l2 }) => {
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
    if (e2.keyCode === n2 && l2.value)
      t2.value();
  }
  e(() => {
    if (n2)
      document.addEventListener("keyup", u2);
  });
  a(() => {
    if (n2)
      document.removeEventListener("keyup", u2);
  });
  return { onMouseDownDimmed: r2, onMouseUpDimmed: i2 };
};
const k = ({ modalRef: e2, show: a2 }) => {
  const { visibleModals: s2, addVisibleModals: r2, removeVisibleModals: i2 } = n(R);
  const u2 = l(() => {
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
var T = (() => ".vue-universal-modal-leave-from[data-v-489c86f0],.vue-universal-modal-enter-to[data-v-489c86f0]{opacity:1}.vue-universal-modal-enter-from[data-v-489c86f0],.vue-universal-modal-leave-to[data-v-489c86f0]{opacity:0}.vue-universal-modal[data-v-489c86f0]{-webkit-overflow-scrolling:touch;overscroll-behavior:contain;position:fixed;overflow-y:auto;left:0;top:0;right:0;bottom:0;background-color:#000c;text-align:left}.vue-universal-modal[data-v-489c86f0]:not(.vue-universal-modal-latest){z-index:1000}.vue-universal-modal-content[data-v-489c86f0]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;min-height:100%}.modal[data-v-489c86f0]{position:fixed;width:100%;bottom:0;box-sizing:border-box;font-size:20px;text-align:center;background:var(--ion-item-background, var(--ion-background-color, #fff));border-radius:10px 10px 0 0/10px 10px 0px 0px;overflow:hidden;height:var(--maxHeight, unset)}.start-modal[data-v-489c86f0],.vue-universal-modal-enter-to .modal[data-v-489c86f0],.vue-universal-modal-leave-from .modal[data-v-489c86f0]{transition-timing-function:cubic-bezier(.11,.93,.28,1);transition-property:transform;transition-duration:.3s;transform:translateZ(0)}.vue-universal-modal-enter-from .modal[data-v-489c86f0],.vue-universal-modal-leave-to .modal[data-v-489c86f0]{transition-timing-function:cubic-bezier(.74,0,.23,1);transition-property:transform;transition-duration:.3s;transform:translate3d(0,100%,0)!important}\n")();
var A = (e2, t2) => {
  const o2 = e2.__vccOpts || e2;
  for (const [e3, a2] of t2)
    o2[e3] = a2;
  return o2;
};
const $ = s({ inheritAttrs: false, props: { initialBreakpoint: { type: Number, default: void 0 }, breakpoints: { type: Array, default: [] }, swipe: { type: Boolean, default: true }, swipeToClose: { type: Number, default: 0 }, close: { type: Function, default: () => {
} }, disabled: { type: Boolean, default: false }, modelValue: { type: Boolean, default: true }, options: { type: Object, default: () => ({}) } }, emits: ["before-enter", "enter", "after-enter", "enter-cancelled", "before-leave", "leave", "after-leave", "leave-cancelled"], setup(e2, a2) {
  const { teleportTarget: l2 } = n(R);
  const { close: s2, disabled: u2, options: d2, modelValue: c2 } = r(e2);
  const v2 = i(c2.value === void 0 ? true : c2.value);
  const m2 = i(null);
  const f2 = i(!u2.value);
  const p2 = { transition: 300, closeClickDimmed: true, closeKeyCode: 27, styleModalContent: {}, ...d2.value };
  t([() => c2.value, () => u2.value], () => {
    const e3 = c2.value && !u2.value;
    f2.value = e3;
    if (c2.value)
      v2.value = c2.value;
  }, { immediate: true });
  const { latest: h2 } = k({ modalRef: m2, show: f2 });
  L({ latest: h2, modalRef: m2, show: f2 });
  const { onMouseDownDimmed: y2, onMouseUpDimmed: g2 } = S({ close: s2, closeClickDimmed: p2.closeClickDimmed, closeKeyCode: p2.closeKeyCode, latest: h2 });
  const b2 = (e3) => {
    g2(e3);
    if (s2.value)
      s2.value();
  };
  const M2 = { sy: 0, ts: 0 };
  const w2 = (e3) => {
    M2.sy = e3.touches[0].clientY;
    M2.ts = Date.now();
    e3.currentTarget.style.transitionDuration = "0ms";
  };
  let D2 = 0;
  const C2 = (e3) => {
    const t2 = Math.round(e3.touches[0].clientY - M2.sy);
    if (t2 != D2 && t2 > 0)
      e3.currentTarget.style.transform = `translate3d(0, ${t2}px, 0)`;
    D2 = t2;
    M2.ts = Date.now();
  };
  const x2 = (t2) => {
    const a3 = t2.changedTouches[0].clientY - M2.sy;
    if (a3 != 0) {
      const n2 = Date.now() - M2.ts;
      const l3 = t2.currentTarget.getBoundingClientRect().height;
      const r2 = Math.abs(a3 - D2) / l3;
      const i2 = Math.abs(a3) / l3;
      if (e2.swipeToClose && e2.swipeToClose <= i2) {
        t2.currentTarget.style.transitionDuration = `${Math.round(n2 * (1 - i2) / r2)}ms`;
        if (s2.value)
          s2.value();
        return;
      } else
        t2.currentTarget.style.transitionDuration = "200ms";
      o(() => {
        t2.currentTarget.style.transform = `translate3d(0, 0%, 0)`;
      });
    } else
      t2.currentTarget.style.transitionDuration = "300ms";
  };
  const E2 = { beforeEnter: () => a2.emit("before-enter", m2.value), enter: () => a2.emit("enter", m2.value), afterEnter: () => {
    if (e2.swipe) {
      m2.value.querySelector(".modal").addEventListener("touchstart", w2, { passive: true });
      m2.value.querySelector(".modal").addEventListener("touchmove", C2, { passive: true });
      m2.value.querySelector(".modal").addEventListener("touchend", x2, { passive: true });
    }
    a2.emit("after-enter", { targetRef: m2, close: e2.close });
  }, enterCancelled: () => a2.emit("enter-cancelled", m2.value), beforeLeave: () => a2.emit("before-leave", m2.value), leave: () => {
    if (e2.swipe) {
      m2.value.querySelector(".modal").removeEventListener("touchstart", w2, { passive: true });
      m2.value.querySelector(".modal").removeEventListener("touchmove", C2, { passive: true });
      m2.value.querySelector(".modal").removeEventListener("touchend", x2, { passive: true });
    }
    a2.emit("leave", m2.value);
  }, afterLeave: () => {
    a2.emit("after-leave", m2.value);
    if (c2.value === false)
      v2.value = false;
  }, leaveCancelled: () => a2.emit("leave-cancelled", m2.value) };
  const T2 = () => {
    if (s2.value)
      s2.value();
  };
  const A2 = (e3) => {
  };
  return { Log: A2, CLASS_NAME: B, emitClose: T2, inserted: v2, latest: h2, mergeOptions: p2, modalRef: m2, onMouseDownDimmed: y2, onMouseUpDimmed2: b2, touchModalStart: w2, touchModalMove: C2, touchModalEnd: x2, onTransitionEmit: E2, show: f2, teleportTarget: l2, transition: p2.transition ? p2.transition / 1e3 + "s" : void 0 };
} });
function _(e2, t2, o2, a2, n2, l2) {
  return e2.inserted ? (u(), d(c, { key: 0, to: e2.teleportTarget, disabled: e2.disabled }, [v(m, f({ appear: "", name: e2.CLASS_NAME }, p(e2.onTransitionEmit)), { default: h(() => {
    var _a;
    return [y(g("div", f({ ref: "modalRef", role: "dialog", tabindex: "-1", "aria-modal": "true", "aria-label": "Modal window", class: [e2.CLASS_NAME, { [`${e2.CLASS_NAME}-show`]: e2.show }, { [`${e2.CLASS_NAME}-latest`]: e2.latest }], style: { transitionDuration: e2.transition } }, e2.$attrs), [g("div", { class: b(`${e2.CLASS_NAME}-content`), style: M({ transitionDuration: e2.transition, ...(_a = e2.mergeOptions) == null ? void 0 : _a.styleModalContent }), onMousedown: t2[0] || (t2[0] = w((...t3) => e2.onMouseDownDimmed && e2.onMouseDownDimmed(...t3), ["self"])), onMouseup: t2[1] || (t2[1] = w((...t3) => e2.onMouseUpDimmed2 && e2.onMouseUpDimmed2(...t3), ["self"])), onTouchmove: t2[2] || (t2[2] = w((t3) => e2.close(), ["self"])) }, [g("div", { class: "modal modal-sheet", style: M({ "--maxHeight": e2.initialBreakpoint ? `${Math.round(100 * e2.initialBreakpoint)}%` : "unset" }) }, [D(e2.$slots, "default", { emitClose: e2.emitClose }, void 0, true), D(e2.$slots, "close", {}, void 0, true)], 4)], 38)], 16), [[C, e2.show]])];
  }), _: 3 }, 16, ["name"])], 8, ["to", "disabled"])) : x("", true);
}
var N = A($, [["render", _], ["__scopeId", "data-v-489c86f0"]]);
const R = "VueUniversalModal";
const B = "vue-universal-modal";
const V = (e2, t2 = {}) => {
  const { teleportTarget: o2 = "", modalComponent: a2 = "Modal" } = t2;
  if (!o2)
    return;
  const n2 = i(/* @__PURE__ */ new Set());
  const l2 = (e3) => {
    n2.value.add(e3);
  };
  const s2 = (e3) => {
    n2.value.delete(e3);
  };
  e2.provide(R, { teleportTarget: o2, visibleModals: E(n2), addVisibleModals: l2, removeVisibleModals: s2 });
  e2.component(a2, N);
};
var q = { install: V };
export { B as CLASS_NAME, R as PLUGIN_NAME, q as default };
