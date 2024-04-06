import { computed, readonly, ref, watchEffect } from 'vue';

const mql = {
  'is-desktop': window.matchMedia('(min-width: 1440px)'),
  'is-laptop': window.matchMedia('(max-width: 1439px) and (min-width: 1024px)'),
  'is-tablet': window.matchMedia('(max-width: 1023px) and (min-width: 640px)'),
  'is-mobile': window.matchMedia('(max-width: 639px)')
} as const;

type Breakpoints = keyof typeof mql;

const breakpoint = ref<Breakpoints | null>(null);

const isCompact = computed(() =>
  breakpoint.value ? ['is-mobile', 'is-tablet'].includes(breakpoint.value) : false
);

const allBreakpointsNames: readonly string[] = Object.keys(mql);

let lock = false;
const changeBreakpoint = () => {
  if (lock) return;
  lock = true;
  setTimeout(() => {
    const match = Object.entries(mql).find(({ 1: value }) => value.matches);
    breakpoint.value = match ? (match[0] as Breakpoints) : null;
    lock = false;
  }, 10);
};

changeBreakpoint();

Object.values(mql).forEach((mqlItem) => {
  mqlItem.addEventListener('change', changeBreakpoint);
});

watchEffect(() => console.log(breakpoint.value));
export const useBreakpoints = () => ({
  breakpoint: readonly(breakpoint),
  isCompact,
  allBreakpointsNames
});
