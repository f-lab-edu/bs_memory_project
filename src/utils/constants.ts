import { BibleVersion } from '@utils/type';

export const BIBLE_VERSIONS = [
  { code: 'BV_001', name: '개역한글판' },
  { code: 'BV_002', name: '개역개정판' },
] as const satisfies readonly BibleVersion[];
