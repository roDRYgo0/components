<template>
  <span
    class="inline-flex rounded-md shadow-sm"
  >
    <component
      :is="computedTag"
      v-bind="$attrs"
      class="inline-flex justify-center items-center border border-transparent font-medium focus:outline-none transition ease-in-out duration-150 w-full"
      :class="[
        sizeClass,
        colorClass,
        rounded ? 'rounded-full' : '',
        disabled ? 'opacity-75' : '',
        disabled || isLoading ? 'cursor-default' : ''
      ]"
      :disabled="disabled"
      :type="type"
    >
      <div
        v-if="iconPosition === 'left' && !isLoading"
        :class="{
          '-ml-0.5 mr-2': $slots.default
        }"
      >
        <slot name="icon" />
      </div>
      <progress-circular
        v-if="iconPosition === 'left' &&isLoading"
        class="-ml-0.5 mr-2"
      />
      <slot />
      <div
        v-if="iconPosition === 'right' && !isLoading"
        :class="{
          'ml-2 -mr-0.5': $slots.default
        }"
      >
        <slot name="icon" />
      </div>
      <progress-circular
        v-if="iconPosition === 'right' &&isLoading"
        class="ml-2 -mr-0.5"
      />
    </component>
  </span>
</template>

<script>
import { computed, toRefs } from 'vue';
import useSize from './js/useSize';
import useColor from './js/useColor';

export default {
  name: 'TButton',
  inheritAttrs: false,

  props: {
    size: {
      type: String,
      default: 'md',
    },
    color: {
      type: String,
      default: 'primary',
    },
    light: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: 'left',
    },
    type: {
      type: String,
      default: 'button',
      validator: (value) => [
        'button',
        'submit',
        'reset',
      ].indexOf(value) >= 0,
    },
    tag: {
      type: String,
      default: 'button',
    },
  },

  setup(props) {
    const {
      size, color, isLoading, disabled, light, outlined, tag,
    } = toRefs(props);

    const { sizeClass } = useSize(size);
    const { colorClass } = useColor(color, isLoading, disabled, light, outlined);

    const computedTag = computed(() => {
      if (disabled.value !== false) {
        return 'button';
      }
      return tag.value;
    });

    return {
      sizeClass,
      colorClass,
      computedTag,
    };
  },
};
</script>
