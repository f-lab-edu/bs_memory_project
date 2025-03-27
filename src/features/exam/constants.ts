import { CardSortMethods } from '@features/exam/type';

export const EXPOSE_OPTIONS = {
  ADDR: {
    code: 'EXPOSE_001',
    name: '장절',
  },
  THEME: {
    code: 'EXPOSE_002',
    name: '제목',
  },
  ADDR_THEME: {
    code: 'EXPOSE_003',
    name: '장절,제목',
  },
} as const;

export const SORT_METHODS = {
  NORMAL: {
    code: 'SORT_001',
    name: '기본 순',
  },
  RANDOM: {
    code: 'SORT_002',
    name: '랜덤',
  },
} as const;

export const SORT_METHODS_LIST: CardSortMethods = Object.values(SORT_METHODS);
