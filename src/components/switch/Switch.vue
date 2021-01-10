<template>
  <div
    @click="status = !status"
    class="w-14 h-8 group rounded-full border  flex items-center bg-gray-50 relative"
  >
    <div
      :class="[
        colorClass
        ,{
          'mx-1': !status,
          'translate-x-full mx-0.5': status
        }]"
      class="bg-white transform h-6 w-6 rounded-full shadow transition-all duration-150 ease-linear"
    />
  </div>
</template>
<script>
import { ref, toRef, watch } from 'vue';
import useColor from './js/useColor';

export default {
  name: 'TSwitch',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // PROPS
    const { color } = toRef(props);
    // Value internal
    const status = ref(false);

    watch(status, (value) => {
      emit('update:modelValue', value);
    });
    const colorClass = useColor(color);
    return {
      status,
      colorClass,
    };
  },
};
</script>
