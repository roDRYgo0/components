import { computed } from 'vue';

export default function useSize(color, isLoading, disabled, light, outlined) {
  const focus = computed(() => {
    if (isLoading.value || disabled.value) return '';
    return `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color.value}-500`;
  });
  const hover = computed(() => {
    if (isLoading.value || disabled.value) return '';
    switch (color.value) {
      case 'light':
        return 'hover:text-gray-500';
      case 'dark':
        return 'hover:text-gray-100';
      default:
        if (light.value) {
          return `hover:bg-${color.value}-50`;
        }
        return `hover:bg-${color.value}-500`;
    }
  });
  const active = computed(() => {
    if (isLoading.value || disabled.value) return '';
    switch (color.value) {
      case 'light':
        return 'active:bg-gray-50 active:text-gray-800';
      case 'dark':
        return 'active:bg-gray-800';
      default:
        if (light.value) {
          return `active:bg-${color.value}-200`;
        }
        return `active:bg-${color.value}-700`;
    }
  });

  const colorClass = computed(() => {
    switch (color.value) {
      case 'light':
        return `${focus.value} ${hover.value} ${active.value} border-gray-300 text-gray-700 bg-white`;
      case 'dark':
        return `${focus.value} ${hover.value} ${active.value} border-transparent text-white bg-gray-900`;
      default:
        if (light.value) {
          return `${focus.value} ${hover.value} ${active.value} border-transparent text-${color.value}-800 bg-${color.value}-100`;
        }
        if (outlined.value) {
          return `border-${color.value}-600 text-${color.value}-600 bg-transparent`;
        }
        return `${focus.value} ${hover.value} ${active.value} border-transparent text-white bg-text-${color.value}-600`;
    }
  });

  return {
    colorClass,
  };
}
