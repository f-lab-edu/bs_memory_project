import { CardHideOption } from '@features/drilling/type';

export const CARD_HIDE_OPTIONS = [
  { code: 'HIDE_000', name: '없음' },
  { code: 'HIDE_001', name: '장절' },
  { code: 'HIDE_002', name: '제목' },
  { code: 'HIDE_003', name: '내용' },
] as const satisfies readonly CardHideOption[];
