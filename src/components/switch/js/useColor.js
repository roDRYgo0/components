import { computed } from 'vue';

export default function useColor(status, color, passiveColor, disabled, light, lightPassive) {
  // Switch
  const backgroundClass = computed(() => {
    if (!status.value) {
      if (lightPassive.value) {
        return `${passiveColor.value}-${disabled.value ? '100' : '200'}`;
      }
      return `${passiveColor.value}-${disabled.value ? '400' : '500'}`;
    }
    if (light.value) {
      return `${color.value}-${disabled.value ? '100' : '200'}`;
    }
    return `${color.value}-${disabled.value ? '400' : '500'}`;
  });

  const borderClass = computed(() => {
    if (!status.value) {
      if (lightPassive.value) {
        return `border-${passiveColor.value}-${disabled.value ? '100' : '100'}`;
      }
      return `border-${passiveColor.value}-${disabled.value ? '200' : '200'}`;
    }
    if (light.value) {
      return `border-${color.value}-${disabled.value ? '100' : '200'}`;
    }
    return `border-${color.value}-${disabled.value ? '400' : '700'}`;
  });

  const colorClass = computed(() => `bg-${backgroundClass.value}  ${borderClass.value}`);

  // Dot
  const colorClassDot = computed(() => `bg-white text-${backgroundClass.value}`);

  return {
    colorClass,
    colorClassDot,
  };
}
