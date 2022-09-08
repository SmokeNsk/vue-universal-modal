import { onMounted as e, watch as t, nextTick as o, onUnmounted as a, inject as l, computed as n, defineComponent as i, toRefs as r, ref as s, openBlock as u, createBlock as d, Teleport as v, createVNode as c, Transition as m, mergeProps as f, toHandlers as p, withCtx as h, withDirectives as g, createElementVNode as b, normalizeClass as y, normalizeStyle as M, withModifiers as w, renderSlot as C, vShow as D, createCommentVNode as x, readonly as E } from "vue";
const L = ({ modalRef: l2, latest: n2, show: i2 }) => {
  let r2;
  function s2(e2) {
    const t2 = e2.target.closest(`.${B}`);
    if (!n2.value)
      return;
    if (!t2 || t2 !== l2.value) {
      if (t2 && !t2.classList.contains(`${B}-show`))
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
    document.addEventListener("click", s2);
    t(() => i2.value, (e2) => {
      o(() => u2(e2));
    }, { immediate: i2.value });
  });
  a(() => {
    document.removeEventListener("click", s2);
  });
};
const S = ({ close: t2, closeClickDimmed: o2, closeKeyCode: l2, latest: n2 }) => {
  let i2 = null;
  function r2(e2) {
    i2 = e2.target;
  }
  function s2(e2) {
    if (o2 && i2 === e2.target)
      t2.value();
    i2 = null;
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
  return { onMouseDownDimmed: r2, onMouseUpDimmed: s2 };
};
const k = ({ modalRef: e2, show: a2 }) => {
  const { visibleModals: i2, addVisibleModals: r2, removeVisibleModals: s2 } = l(R);
  const u2 = n(() => {
    const t2 = [...i2.value.values()];
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
        s2(e2.value);
    });
  }, { immediate: true });
  return { latest: u2 };
};
var T = (() => ".vue-universal-modal-leave-from[data-v-9366333e],.vue-universal-modal-enter-to[data-v-9366333e]{opacity:1}.vue-universal-modal-enter-from[data-v-9366333e],.vue-universal-modal-leave-to[data-v-9366333e]{opacity:0}.vue-universal-modal[data-v-9366333e]{-webkit-overflow-scrolling:touch;overscroll-behavior:contain;position:fixed;overflow-y:auto;left:0;top:0;right:0;bottom:0;background-color:#000c;text-align:left}.vue-universal-modal[data-v-9366333e]:not(.vue-universal-modal-latest){z-index:1000}.vue-universal-modal-content[data-v-9366333e]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;min-height:100%}.modal[data-v-9366333e]{position:fixed;width:100%;bottom:0;box-sizing:border-box;font-size:20px;text-align:center;background:var(--ion-item-background, var(--ion-background-color, #fff));border-radius:10px 10px 0 0/10px 10px 0px 0px;overflow:hidden;height:var(--maxHeight, unset)}.start-modal[data-v-9366333e],.vue-universal-modal-enter-to .modal[data-v-9366333e],.vue-universal-modal-leave-from .modal[data-v-9366333e]{transition-timing-function:cubic-bezier(.11,.93,.28,1);transition-property:transform;transition-duration:.3s;transform:translateZ(0)}.vue-universal-modal-enter-from .modal[data-v-9366333e],.vue-universal-modal-leave-to .modal[data-v-9366333e]{transition-timing-function:cubic-bezier(.74,0,.23,1);transition-property:transform;transition-duration:.3s;transform:translate3d(0,100%,0)!important}\n")();
var A = (e2, t2) => {
  const o2 = e2.__vccOpts || e2;
  for (const [e3, a2] of t2)
    o2[e3] = a2;
  return o2;
};
const _ = i({ inheritAttrs: false, props: { initialBreakpoint: { type: Number, default: void 0 }, breakpoints: { type: Array, default: [] }, swipe: { type: Boolean, default: true }, swipeToClose: { type: Number, default: 0 }, close: { type: Function, default: () => {
} }, disabled: { type: Boolean, default: false }, modelValue: { type: Boolean, default: true }, options: { type: Object, default: () => ({}) } }, emits: ["before-enter", "enter", "after-enter", "enter-cancelled", "before-leave", "leave", "after-leave", "leave-cancelled"], setup(e2, a2) {
  const { teleportTarget: n2 } = l(R);
  const { close: i2, disabled: u2, options: d2, modelValue: v2 } = r(e2);
  const c2 = s(v2.value === void 0 ? true : v2.value);
  const m2 = s(null);
  const f2 = s(!u2.value);
  const p2 = { transition: 300, closeClickDimmed: true, closeKeyCode: 27, styleModalContent: {}, ...d2.value };
  t([() => v2.value, () => u2.value], () => {
    const e3 = v2.value && !u2.value;
    f2.value = e3;
    if (v2.value)
      c2.value = v2.value;
  }, { immediate: true });
  const { latest: h2 } = k({ modalRef: m2, show: f2 });
  L({ latest: h2, modalRef: m2, show: f2 });
  const { onMouseDownDimmed: g2, onMouseUpDimmed: b2 } = S({ close: i2, closeClickDimmed: p2.closeClickDimmed, closeKeyCode: p2.closeKeyCode, latest: h2 });
  const y2 = (e3) => {
    b2(e3);
    if (i2.value)
      i2.value();
  };
  let M2 = 0;
  const w2 = (e3) => {
    M2 = e3.touches[0].clientY;
    e3.currentTarget.style.transitionDuration = "0ms";
  };
  let C2 = 0;
  const D2 = (e3) => {
    const t2 = Math.round(e3.touches[0].clientY - M2);
    if (t2 != C2 && t2 > 0)
      e3.currentTarget.style.transform = `translate3d(0, ${t2}px, 0)`;
    C2 = t2;
  };
  const x2 = (t2) => {
    const a3 = t2.changedTouches[0].clientY - M2;
    if (a3 != 0) {
      t2.currentTarget.style.transitionDuration = "200ms";
      if (e2.swipeToClose && e2.swipeToClose <= Math.abs(a3) / t2.currentTarget.getBoundingClientRect().height) {
        if (i2.value)
          i2.value();
        return;
      }
      o(() => {
        t2.currentTarget.style.transform = `translate3d(0, 0%, 0)`;
      });
    } else
      t2.currentTarget.style.transitionDuration = "300ms";
  };
  const E2 = { beforeEnter: () => a2.emit("before-enter", m2.value), enter: () => a2.emit("enter", m2.value), afterEnter: () => {
    if (e2.swipe) {
      m2.value.querySelector(".modal").addEventListener("touchstart", w2, { passive: true });
      m2.value.querySelector(".modal").addEventListener("touchmove", D2, { passive: true });
      m2.value.querySelector(".modal").addEventListener("touchend", x2, { passive: true });
    }
    a2.emit("after-enter", { targetRef: m2, close: e2.close });
  }, enterCancelled: () => a2.emit("enter-cancelled", m2.value), beforeLeave: () => a2.emit("before-leave", m2.value), leave: () => {
    if (e2.swipe) {
      m2.value.querySelector(".modal").removeEventListener("touchstart", w2, { passive: true });
      m2.value.querySelector(".modal").removeEventListener("touchmove", D2, { passive: true });
      m2.value.querySelector(".modal").removeEventListener("touchend", x2, { passive: true });
    }
    a2.emit("leave", m2.value);
  }, afterLeave: () => {
    a2.emit("after-leave", m2.value);
    if (v2.value === false)
      c2.value = false;
  }, leaveCancelled: () => a2.emit("leave-cancelled", m2.value) };
  const T2 = () => {
    if (i2.value)
      i2.value();
  };
  const A2 = (e3) => {
  };
  return { Log: A2, CLASS_NAME: B, emitClose: T2, inserted: c2, latest: h2, mergeOptions: p2, modalRef: m2, onMouseDownDimmed: g2, onMouseUpDimmed2: y2, touchModalStart: w2, touchModalMove: D2, touchModalEnd: x2, onTransitionEmit: E2, show: f2, teleportTarget: n2, transition: p2.transition ? p2.transition / 1e3 + "s" : void 0 };
} });
function $(e2, t2, o2, a2, l2, n2) {
  return e2.inserted ? (u(), d(v, { key: 0, to: e2.teleportTarget, disabled: e2.disabled }, [c(m, f({ appear: "", name: e2.CLASS_NAME }, p(e2.onTransitionEmit)), { default: h(() => {
    var _a;
    return [g(b("div", f({ ref: "modalRef", role: "dialog", tabindex: "-1", "aria-modal": "true", "aria-label": "Modal window", class: [e2.CLASS_NAME, { [`${e2.CLASS_NAME}-show`]: e2.show }, { [`${e2.CLASS_NAME}-latest`]: e2.latest }], style: { transitionDuration: e2.transition } }, e2.$attrs), [b("div", { class: y(`${e2.CLASS_NAME}-content`), style: M({ transitionDuration: e2.transition, ...(_a = e2.mergeOptions) == null ? void 0 : _a.styleModalContent }), onMousedown: t2[0] || (t2[0] = w((...t3) => e2.onMouseDownDimmed && e2.onMouseDownDimmed(...t3), ["self"])), onMouseup: t2[1] || (t2[1] = w((...t3) => e2.onMouseUpDimmed2 && e2.onMouseUpDimmed2(...t3), ["self"])), onTouchmove: t2[2] || (t2[2] = w((t3) => e2.close(), ["self"])) }, [b("div", { class: "modal modal-sheet", style: M({ "--maxHeight": e2.initialBreakpoint ? `${Math.round(100 * e2.initialBreakpoint)}%` : "unset" }) }, [C(e2.$slots, "default", { emitClose: e2.emitClose }, void 0, true), C(e2.$slots, "close", {}, void 0, true)], 4)], 38)], 16), [[D, e2.show]])];
  }), _: 3 }, 16, ["name"])], 8, ["to", "disabled"])) : x("", true);
}
var N = A(_, [["render", $], ["__scopeId", "data-v-9366333e"]]);
const R = "VueUniversalModal";
const B = "vue-universal-modal";
const V = (e2, t2 = {}) => {
  const { teleportTarget: o2 = "", modalComponent: a2 = "Modal" } = t2;
  if (!o2)
    return;
  const l2 = s(/* @__PURE__ */ new Set());
  const n2 = (e3) => {
    l2.value.add(e3);
  };
  const i2 = (e3) => {
    l2.value.delete(e3);
  };
  e2.provide(R, { teleportTarget: o2, visibleModals: E(l2), addVisibleModals: n2, removeVisibleModals: i2 });
  e2.component(a2, N);
};
var q = { install: V };
export { B as CLASS_NAME, R as PLUGIN_NAME, q as default };
