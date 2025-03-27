import { CardHideOptions } from '@features/drilling/type';

export const CARD_HIDE_OPTIONS = {
  NONE: { code: 'HIDE_000', name: '없음' },
  ADDR: { code: 'HIDE_001', name: '장절' },
  THEME: { code: 'HIDE_002', name: '제목' },
  CONTENTS: { code: 'HIDE_003', name: '내용' },
} as const;

export const CARD_HIDE_OPTIONS_LIST: CardHideOptions =
  Object.values(CARD_HIDE_OPTIONS);
