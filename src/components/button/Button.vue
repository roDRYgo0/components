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
// export default {
//   props: {
//     title: {
//       type: String,
//       required: true,
//     },
//     size: {
//       type: String,
//       default: 'md',
//     },
//     color: {
//       type: String,
//       default: 'primary',
//     },
//     light: {
//       type: Boolean,
//       default: false,
//     },
//     iconPosition: {
//       type: String,
//       default: 'left',
//     },
//     isLoading: {
//       type: Boolean,
//       default: false,
//     },
//     disabled: {
//       type: Boolean,
//       default: false,
//     },
//     type: {
//       type: String,
//       default: 'button',
//     },
//   },

//   emits: ['click'],

//   computed: {
//     sizeClass() {
//       switch (this.size) {
//         case 'xs':
//           return 'px-2.5 py-1.5 text-xs leading-4 rounded';
//         case 'sm':
//           return 'px-3 py-2 text-sm leading-4 rounded-md';
//         case 'md':
//           return 'px-4 py-2 text-sm leading-5 rounded-md';
//         case 'lg':
//           return 'px-4 py-2 text-base leading-6 rounded-md';
//         case 'xl':
//           return 'px-6 py-3 text-base leading-6 rounded-md';
//         default:
//           return '';
//       }
//     },

//     colorClass() {
//       switch (this.color) {
//         case 'light':
//           if (this.isLoading || this.disabled) {
//             return 'border-gray-300 text-gray-700 bg-white';
//           }
//           return 'border-gray-300 text-gray-700 bg-white hover:text-gray-500 focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800';
//         default:
//           if (this.light) {
//             if (this.isLoading || this.disabled) {
//               return `border-transparent text-${this.color}-700 bg-${this.color}-100`;
//             }
//             return `border-transparent text-${this.color}-700 bg-${this.color}-100 hover:bg-${this.color}-50 focus:border-${this.color}-300 focus:shadow-outline-${this.color} active:bg-${this.color}-200`;
//           }
//           if (this.isLoading || this.disabled) {
//             return `border-transparent text-white bg-${this.color}-600`;
//           }
//           return `border-transparent text-white bg-${this.color}-600 hover:bg-${this.color}-500 focus:border-${this.color}-700 focus:shadow-outline-${this.color} active:bg-${this.color}-700`;
//       }
//     },
//   },

//   methods: {
//     handleClick(e) {
//       this.$emit('click', e);
//     },
//   },
// };
</script>
