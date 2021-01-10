import { computed } from 'vue';

export default function useColor(status, color, passiveColor, disabled, isLoading, light) {
  const backgroundClass = computed(() => {
    if (!status.value) {
      return `bg-${passiveColor.value}-${disabled.value ? '50' : '200'}`;
    }
    return `bg-${color.value}-${disabled.value ? '400' : '500'}`;
  });

  const borderClass = computed(() => {
    if (!status.value) {
      return `border-${passiveColor.value}-${disabled.value ? '200' : '200'}`;
    }
    return `border-${color.value}-${disabled.value ? '400' : '700'}`;
  });

  const colorClass = computed(() => `${backgroundClass.value}  ${borderClass.value}`);

  return {
    colorClass,
  };
}
