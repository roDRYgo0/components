import { computed } from 'vue';

export default function useAccessibility(vid, description, error) {
  const accessibility = computed(() => ({
    'aria-describedby': (() => {
      if (error.value) return `${vid.value}-error`;
      if (description.value) return `${vid.value}-description`;
      return undefined;
    })(),
    'aria-invalid': undefined,
  }));

  return {
    accessibility,
  };
}
