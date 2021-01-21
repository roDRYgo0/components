<template>
  <div
    @click="toggle"
    class="group rounded-full border flex items-center relative"
    :class="[
      colorClass,
      sizeClass,
    ]"
  >
    <div
      :class="[
        colorClassDot,
        sizeClassDot
        ,{
          'mx-1': !status,
          'translate-x-full mx-0.5': status
        }]"
      class="bg-white transform rounded-full shadow transition-all duration-150 ease-linear"
    >
      <div

        v-show="status"
        class="w-full h-full flex items-center justify-center"
      >
        <div
          v-if="iconDefault"
        >
          <svg
            :class="sizeClassIcon"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="check"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          ><path
            fill="currentColor"
            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
          /></svg>
        </div>
        <slot
          name="iconOn"
          v-else
        />
      </div>
      <div
        v-show="!status"
        class="w-full h-full flex items-center justify-center"
      >
        <div
          v-if="iconDefault"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            :class="sizeClassIcon"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          ><path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          /></svg>
        </div>
        <slot
          name="iconOff"
          v-else
        />
      </div>
    </div>
  </div>
</template>
<script>
import {
  ref, toRefs, watch,
} from 'vue';
import useColor from './js/useColor';
import useSize from './js/useSize';

export default {
  name: 'TSwitch',
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: 'md',
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
    },
    colorPassive: {
      type: String,
      default: 'secondary',
    },
    lightPassive: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    iconDefault: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // PROPS
    const {
      color, colorPassive, disabled, light, lightPassive, size,
    } = toRefs(props);
    // Value internal
    const status = ref(props.modelValue);

    watch(status, (value) => {
      emit('update:modelValue', value);
    });
    const { colorClass, colorClassDot } = useColor(status, color, colorPassive, disabled, light, lightPassive);
    const { sizeClass, sizeClassDot, sizeClassIcon } = useSize(size);

    const toggle = () => {
      if (!disabled.value) { status.value = !status.value; }
    };
    return {
      toggle,
      status,
      colorClass,
      colorClassDot,
      sizeClass,
      sizeClassDot,
      sizeClassIcon,
    };
  },
};
</script>
