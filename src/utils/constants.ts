import { BibleVersions } from '@utils/type';

export const BIBLE_VERSIONS = {
  KOR: { code: 'BV_001', name: '개역한글판' },
  GAE: { code: 'BV_002', name: '개역개정판' },
} as const;

export const BIBLE_VERSIONS_LIST: BibleVersions = Object.values(BIBLE_VERSIONS);
