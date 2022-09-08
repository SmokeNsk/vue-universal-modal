<template>
  <teleport v-if="inserted" :to="teleportTarget" :disabled="disabled">
    <transition appear :name="CLASS_NAME" v-on="onTransitionEmit">
      <div
          v-show="show"
          ref="modalRef"
          role="dialog"
          tabindex="-1"
          aria-modal="true"
          aria-label="Modal window"
          :class="[
          CLASS_NAME,
          { [`${CLASS_NAME}-show`]: show },
          { [`${CLASS_NAME}-latest`]: latest },
        ]"
          :style="{ transitionDuration: transition }"
          v-bind="$attrs"
      >
        <div
            :class="`${CLASS_NAME}-content`"
            :style="{
            transitionDuration: transition,
            ...mergeOptions?.styleModalContent,
          }"
            @mousedown.self="onMouseDownDimmed"
            @mouseup.self="onMouseUpDimmed2"
            @touchmove.self="close()"
        >
          <div class="modal modal-sheet " :style="{height:fullscreen?'100%':'unset' }">
            <slot :emitClose="emitClose"/>
            <slot name="close"/>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import {defineComponent, inject, nextTick, ref, toRefs, watch} from 'vue';
import {PLUGIN_NAME, CLASS_NAME} from './index';
import {useA11Y, useClose, useOrder} from './hooks';

import type {Provide} from './index';

interface MergeOptions {
  transition: number | false;
  closeClickDimmed: boolean;
  closeKeyCode: number | false;
  styleModalContent: { [key: string]: unknown };
}

export default defineComponent({
  inheritAttrs: false,
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    },
    swipe: {
      type: Boolean,
      default: true
    },

    close: {
      type: Function,
      default: () => undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: [
    'before-enter',
    'enter',
    'after-enter',
    'enter-cancelled',
    'before-leave',
    'leave',
    'after-leave',
    'leave-cancelled',
  ],
  setup(props, context) {
    const {teleportTarget} = inject(PLUGIN_NAME) as Provide;
    const {close, disabled, options, modelValue} = toRefs(props);

    const inserted = ref(
        modelValue.value === undefined ? true : modelValue.value,
    );
    const modalRef = ref(null);
    const show = ref(!disabled.value);

    const mergeOptions: MergeOptions = {
      transition: 300,
      closeClickDimmed: true,
      closeKeyCode: 27,
      styleModalContent: {},
      ...options.value,
    };

    watch(
        [() => modelValue.value, () => disabled.value],
        () => {
          const isShow = modelValue.value && !disabled.value;

          show.value = isShow;

          if (modelValue.value) {
            inserted.value = modelValue.value;
          }
        },
        {immediate: true},
    );

    const {latest} = useOrder({modalRef, show});
    useA11Y({latest, modalRef, show});

    const {onMouseDownDimmed, onMouseUpDimmed} = useClose({
      close,
      closeClickDimmed: mergeOptions.closeClickDimmed,
      closeKeyCode: mergeOptions.closeKeyCode,
      latest,
    });
    const onMouseUpDimmed2 = (event: MouseEvent) => {
      onMouseUpDimmed(event);
      if (close.value) close.value();
    };

    let sy = 0;
    const touchModalStart = (event: TouchEvent) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      sy = event.touches[0].clientY;
      // (document.getElementsByClassName("modal")[0] as any).classList.remove("start-modal")
      (event.currentTarget as any).style.transitionDuration = "0ms";
      // ((modalRef.value as any).getElementsByClassName("modal")[0] as any).style.transitionDuration="0ms";
      // console.log(event)

    }
    let dy = 0;
    const touchModalMove = (event: TouchEvent) => {
      const y = Math.round(event.touches[0].clientY - sy);
      if (y != dy && y > 0)
        (event.currentTarget as any).style.transform = `translate3d(0, ${y}px, 0)`;
      //((modalRef.value as any).getElementsByClassName("modal")[0] as any).style.transform = `translate3d(0, ${y}px, 0)`;
      dy = y;

    }
    const touchModalEnd = (event: TouchEvent) => {

      const y = event.changedTouches[0].clientY - sy;
      if (y != 0) {
        //(document.getElementsByClassName("modal")[0] as any).classList.add("start-modal");
        (event.currentTarget as any).style.transitionDuration = "200ms";

        nextTick(() => {
              (event.currentTarget as any).style.transform = `translate3d(0, 0%, 0)`
              //setTimeout(() => (document.getElementsByClassName("modal")[0] as any).style.transitionDuration="300ms", 300);
              //   (document.getElementsByClassName("modal")[0] as any).style.animation = "ModalToStart 200ms ease-in normal forwards running"//.animation="ModalToStart 200ms ease-in";
            }
        );

      } else
        (event.currentTarget as any).style.transitionDuration = "300ms"
      //console.log(y)
    }

    const onTransitionEmit = {
      beforeEnter: () => context.emit('before-enter', modalRef.value),
      enter: () => context.emit('enter', modalRef.value),
      afterEnter: () => {
        (modalRef.value as any).querySelector(".modal").addEventListener("touchstart", touchModalStart, {passive: true});
        (modalRef.value as any).querySelector(".modal").addEventListener("touchmove", touchModalMove, {passive: true});
        (modalRef.value as any).querySelector(".modal").addEventListener("touchend", touchModalEnd, {passive: true});
        context.emit('after-enter', {targetRef: modalRef, close: props.close})
      },
      enterCancelled: () => context.emit('enter-cancelled', modalRef.value),
      beforeLeave: () => context.emit('before-leave', modalRef.value),
      leave: () => {
        (modalRef.value as any).querySelector(".modal").removeEventListener("touchstart", touchModalStart, {passive: true});
        (modalRef.value as any).querySelector(".modal").removeEventListener("touchmove", touchModalMove, {passive: true});
        (modalRef.value as any).querySelector(".modal").removeEventListener("touchend", touchModalEnd, {passive: true});

        context.emit('leave', modalRef.value);
      },
      afterLeave: () => {
        context.emit('after-leave', modalRef.value);
        if (modelValue.value === false) {
          inserted.value = false;
        }
      },
      leaveCancelled: () => context.emit('leave-cancelled', modalRef.value),
    };

    /**
     * @deprecated
     */
    const emitClose = () => {
      console.warn(
          'emitClose was deprecated.\nhttps://github.com/hoiheart/vue-universal-modal#usage-modal',
      );
      if (close.value) close.value();
    };

    const Log = (event: any) => {
      console.log(event);
    }


    return {
      Log,
      CLASS_NAME,
      emitClose,
      inserted,
      latest,
      mergeOptions,
      modalRef,
      onMouseDownDimmed,
      onMouseUpDimmed2,
      touchModalStart, touchModalMove, touchModalEnd,
      onTransitionEmit,
      show,
      teleportTarget,
      transition: mergeOptions.transition
          ? mergeOptions.transition / 1000 + 's'
          : undefined,
    };
  },
});
</script>

<style lang="scss" scoped>
.vue-universal-modal-leave-from,
.vue-universal-modal-enter-to {
  opacity: 1;
}

.vue-universal-modal-enter-from,
.vue-universal-modal-leave-to {
  opacity: 0;
}

.vue-universal-modal {
  -webkit-overflow-scrolling: touch;
  // prevent scroll chaining
  // Ios is not supported, but preparations continue to be made for feature mounting (https://bugs.webkit.org/show_bug.cgi?id=176454)
  overscroll-behavior: contain;
  position: fixed;
  overflow-y: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(#000, 0.8);
  text-align: left;

  &:not(.vue-universal-modal-latest) {
    //background: none;
    z-index: 1000;
  }
}

.vue-universal-modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
}

.modal {
  position: fixed;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  font-size: 20px;
  text-align: center;
  background: var(--ion-item-background, var(--ion-background-color, #fff));
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  overflow: hidden;
}

/*.vue-universal-modal-enter-from,*/
/*.vue-universal-modal-enter-to,*/
/*.vue-universal-modal-leave-from,*/
/*.vue-universal-modal-leave-to*/
/*.modal {*/
/*  transition: 0.3s transform;*/
/*}*/
/*open*/
.start-modal,
.vue-universal-modal-enter-to .modal,
.vue-universal-modal-leave-from .modal {
  transition-timing-function: cubic-bezier(.11, .93, .28, 1);
  transition-property: transform;
  transition-duration: 300ms;

  transform: translate3d(0, 0%, 0);

}

/*close*/
.vue-universal-modal-enter-from .modal,
.vue-universal-modal-leave-to .modal {
  transition-timing-function: cubic-bezier(.74, 0, .23, 1);
  transition-property: transform;
  transition-duration: 300ms;
  transform: translate3d(0, 100%, 0) !important;
}

</style>
