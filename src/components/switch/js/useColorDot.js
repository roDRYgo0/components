import { computed } from 'vue';

export default function useColorDot(status, color, passiveColor, isLoading, disabled, light) {
  const colorClassDot = computed(() => {
    if (status.value) {
      return 'bg-white';
    }
    return 'bg-white';
  });

  return {
    colorClassDot,
  };
}
