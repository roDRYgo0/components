import { computed } from 'vue';

export default function useColor(color, isLoading, disabled, error) {
  const colorClass = computed(() => {
    if (disabled.value) {
      return 'bg-gray-100 text-gray-400 cursor-not-allowed';
    }
    if (isLoading.value) {
      return 'pr-10 ';
    }
    if (error.value) {
      return 'pr-10 border-red-300 text-red-900 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500';
    }
    return `focus-within:ring-${color.value}-500 focus-within:border-${color.value}-500`;
  });

  return {
    colorClass,
  };
}
