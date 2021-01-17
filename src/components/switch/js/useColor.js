import { computed } from 'vue';

export default function useColor(status, color, passiveColor, disabled, light) {
  // Switch
  const backgroundClass = computed(() => {
    if (!status.value) {
      return `bg-${passiveColor.value}-${disabled.value ? '50' : '200'}`;
    }
    if (light.value) {
      return `bg-${color.value}-${disabled.value ? '100' : '200'}`;
    }
    return `bg-${color.value}-${disabled.value ? '400' : '500'}`;
  });

  const borderClass = computed(() => {
    if (!status.value) {
      return `border-${passiveColor.value}-${disabled.value ? '200' : '200'}`;
    }
    if (light.value) {
      return `border-${color.value}-${disabled.value ? '100' : '200'}`;
    }
    return `border-${color.value}-${disabled.value ? '400' : '700'}`;
  });

  const colorClass = computed(() => `${backgroundClass.value}  ${borderClass.value}`);

  // Dot
  const colorClassDot = computed(() => 'bg-white');

  return {
    colorClass,
    colorClassDot,
  };
}
