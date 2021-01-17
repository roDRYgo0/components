<template>
  <div
    @click="toggle"
    class="w-14 h-8 group rounded-full border flex items-center relative"
    :class="[
      colorClass,
    ]"
  >
    <div
      :class="[
        colorClassDot,
        ,{
          'mx-1': !status,
          'translate-x-full mx-0.5': status
        }]"
      class="bg-white transform h-6 w-6 rounded-full shadow transition-all duration-150 ease-linear"
    />
  </div>
</template>
<script>
import {
  ref, toRefs, watch,
} from 'vue';
import useColor from './js/useColor';

export default {
  name: 'TSwitch',
  inheritAttrs: false,
  props: {
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
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // PROPS
    const {
      color, colorPassive, disabled, light, lightPassive,
    } = toRefs(props);
    // Value internal
    const status = ref(props.modelValue);

    watch(status, (value) => {
      emit('update:modelValue', value);
    });
    const { colorClass, colorClassDot } = useColor(status, color, colorPassive, disabled, light, lightPassive);

    const toggle = () => {
      if (!disabled.value) { status.value = !status.value; }
    };
    return {
      toggle,
      status,
      colorClass,
      colorClassDot,
    };
  },
};
</script>
