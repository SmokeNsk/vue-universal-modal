interface MergeOptions {
    transition: number | false;
    closeClickDimmed: boolean;
    closeKeyCode: number | false;
    styleModalContent: {
        [key: string]: unknown;
    };
}
declare const _sfc_main: import("vue").DefineComponent<{
    initialBreakpoint: {
        type: NumberConstructor;
        default: undefined;
    };
    breakpoints: {
        type: ArrayConstructor;
        default: never[];
    };
    swipe: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeToClose: {
        type: NumberConstructor;
        default: number;
    };
    close: {
        type: FunctionConstructor;
        default: () => undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    Log: (event: any) => void;
    CLASS_NAME: string;
    emitClose: () => void;
    inserted: import("vue").Ref<boolean>;
    latest: import("vue").ComputedRef<boolean>;
    mergeOptions: MergeOptions;
    modalRef: import("vue").Ref<null>;
    onMouseDownDimmed: (e: MouseEvent) => void;
    onMouseUpDimmed2: (event: MouseEvent) => void;
    touchModalStart: (event: TouchEvent) => void;
    touchModalMove: (event: TouchEvent) => void;
    touchModalEnd: (event: TouchEvent) => void;
    onTransitionEmit: {
        beforeEnter: () => void;
        enter: () => void;
        afterEnter: () => void;
        enterCancelled: () => void;
        beforeLeave: () => void;
        leave: () => void;
        afterLeave: () => void;
        leaveCancelled: () => void;
    };
    show: import("vue").Ref<boolean>;
    teleportTarget: string;
    transition: string | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("before-enter" | "enter" | "after-enter" | "enter-cancelled" | "before-leave" | "leave" | "after-leave" | "leave-cancelled")[], "before-enter" | "enter" | "after-enter" | "enter-cancelled" | "before-leave" | "leave" | "after-leave" | "leave-cancelled", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    initialBreakpoint: {
        type: NumberConstructor;
        default: undefined;
    };
    breakpoints: {
        type: ArrayConstructor;
        default: never[];
    };
    swipe: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeToClose: {
        type: NumberConstructor;
        default: number;
    };
    close: {
        type: FunctionConstructor;
        default: () => undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    "onBefore-enter"?: ((...args: any[]) => any) | undefined;
    onEnter?: ((...args: any[]) => any) | undefined;
    "onAfter-enter"?: ((...args: any[]) => any) | undefined;
    "onEnter-cancelled"?: ((...args: any[]) => any) | undefined;
    "onBefore-leave"?: ((...args: any[]) => any) | undefined;
    onLeave?: ((...args: any[]) => any) | undefined;
    "onAfter-leave"?: ((...args: any[]) => any) | undefined;
    "onLeave-cancelled"?: ((...args: any[]) => any) | undefined;
}, {
    close: Function;
    initialBreakpoint: number;
    breakpoints: unknown[];
    swipe: boolean;
    swipeToClose: number;
    disabled: boolean;
    modelValue: boolean;
    options: Record<string, any>;
}>;
export default _sfc_main;
