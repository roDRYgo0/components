import { computed } from 'vue';

export default function useSize(size) {
  const sizeClass = computed(() => {
    switch (size.value) {
      case 'xs':
        return 'px-2.5 py-1.5 text-xs leading-4 rounded';
      case 'sm':
        return 'px-3 py-2 text-sm leading-4 rounded-md';
      case 'md':
        return 'px-4 py-2 text-sm leading-5 rounded-md';
      case 'lg':
        return 'px-4 py-2 text-base leading-6 rounded-md';
      case 'xl':
        return 'px-6 py-3 text-base leading-6 rounded-md';
      default:
        return '';
    }
  });

  return {
    sizeClass,
  };
}
