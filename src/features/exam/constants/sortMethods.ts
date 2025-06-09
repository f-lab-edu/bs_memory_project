import { CardSortMethodsTypes } from '@features/exam/types/cardSortMethods.types';

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
export const SORT_METHODS_LIST: CardSortMethodsTypes =
  Object.values(SORT_METHODS);
