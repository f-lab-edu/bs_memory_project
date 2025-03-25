import { CardSortMethod, ExamExposeOption } from '@features/exam/type';

export const SORT_METHODS = [
  { code: 'SORT_001', name: '기본 순' },
  { code: 'SORT_002', name: '랜덤' },
] as const satisfies readonly CardSortMethod[];

export const EXPOSE_OPTIONS = [
  { code: 'EXPOSE_001', name: '장절' },
  { code: 'EXPOSE_002', name: '제목' },
  { code: 'EXPOSE_003', name: '장절,제목' },
] as const satisfies readonly ExamExposeOption[];
