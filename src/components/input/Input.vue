<template>
  <div>
    <div
      class="flex justify-between"
      :class="{
        'px-3': rounded
      }"
    >
      <label
        :for="vid"
        class="block text-sm font-medium leading-5 text-gray-700"
      >
        {{ label }}
      </label>
      <span
        v-if="optional !== false"
        class="text-sm leading-5 text-gray-500"
      >
        {{ typeof optional === 'string' && optional.length ? optional : 'Opcional' }}
      </span>
    </div>
    <div
      class="mt-1 relative shadow-sm"
      :class="[rounded ? 'rounded-full' : 'rounded-md']"
    >
      <input
        ref="input"
        v-bind="{ ...$attrs, ...accessibility }"
        name="email"
        class="shadow-sm block w-full sm:text-sm border-gray-300"
        :class="[ colorClass, rounded ? 'rounded-full' : 'rounded-md' ]"
        :value="modelValue"
        :id="vid"
        :disabled="disabled || isLoading"
        :type="newType"
        @input="$emit('update:modelValue', $event.target.value)"
      >
      <div
        v-if="error || isLoading || passwordReveal"
        class="absolute inset-y-0 right-0 pr-3 flex items-center"
        :class="{
          'pointer-events-none': !passwordReveal
        }"
      >
        <div
          v-if="passwordReveal"
          @click="togglePasswordVisibility"
          class="cursor-pointer"
        >
          <svg
            v-if="isPasswordVisible"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
        <progress-circular
          v-if="isLoading && !passwordReveal"
          color="text-gray-400"
          class="-ml-0.5 mr-2"
        />
        <svg
          v-if="error && !isLoading && !passwordReveal"
          class="h-5 w-5 text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div
      :class="{
        'px-3': rounded
      }"
    >
      <p
        v-if="description && (!error || isLoading)"
        class="mt-2 text-sm text-gray-500"
        :id="accessibility['aria-describedby']"
      >
        {{ description }}
      </p>
      <p
        v-if="error && !isLoading"
        class="mt-2 text-sm text-red-600"
        :id="accessibility['aria-describedby']"
      >
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script>
import { nextTick, ref, toRefs } from 'vue';
import useAccessibility from './js/useAccessibility';
import useColor from './js/useColor';

export default {
  name: 'TInput',
  inheritAttrs: false,
  emits: ['update:modelValue'],

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    vid: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    description: {
      type: [String, Boolean],
      default: false,
    },
    error: {
      type: [String, Boolean],
      default: false,
    },
    optional: {
      type: [String, Boolean],
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary',
    },
    passwordReveal: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { attrs }) {
    const {
      vid, description, error, optional, isLoading, color, disabled,
    } = toRefs(props);

    const isPasswordVisible = ref(false);
    const newType = ref(attrs.type || 'text');
    const input = ref(null);

    const { accessibility } = useAccessibility(vid, description, error);
    const { colorClass } = useColor(color, isLoading, disabled, error);

    const togglePasswordVisibility = async () => {
      isPasswordVisible.value = !isPasswordVisible.value;
      newType.value = isPasswordVisible.value ? 'text' : 'password';

      await nextTick();
      input.value.focus();
    };

    return {
      input,
      isPasswordVisible,
      accessibility,
      colorClass,
      newType,
      togglePasswordVisibility,
    };
  },
};
</script>
