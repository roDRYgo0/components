import { computed } from 'vue';

export default function useSize(size) {
  const sizeClass = computed(() => {
    switch (size.value) {
      case 'xs':
        return 'w-12 h-7';
      case 'sm':
        return 'w-14 h-8';
      case 'md':
        return 'w-16 h-9';
      case 'lg':
        return 'w-20 h-11';
      case 'xl':
        return 'w-20 py-2 h-12';
      default:
        return '';
    }
  });
  const sizeClassDot = computed(() => {
    switch (size.value) {
      case 'xs':
        return 'h-5 w-5';
      case 'sm':
        return 'h-6 w-6';
      case 'md':
        return 'h-7 w-7';
      case 'lg':
        return 'h-9 w-9';
      case 'xl':
        return 'h-9 w-9';
      default:
        return '';
    }
  });

  const sizeClassIcon = computed(() => {
    switch (size.value) {
      case 'xs':
        return 'h-2 w-2';
      case 'sm':
        return 'h-2.5 w-2.5';
      case 'md':
        return 'h-3 w-3';
      case 'lg':
        return 'h-4 w-4';
      case 'xl':
        return 'h-5 w-5';
      default:
        return '';
    }
  });

  return {
    sizeClass,
    sizeClassDot,
    sizeClassIcon,
  };
}
