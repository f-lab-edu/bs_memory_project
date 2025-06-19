import { SeriesDataTypes } from '@features/verseSelect/types/seriesData.types';

export const SERIES_DATA: SeriesDataTypes = [
  {
    series_code: '%101',
    series_name: '5확신',
    category: '그리스도와의 새출발',
    sub_series_opt: 'N',
    ord: 2,
    parent_series: null,
  },
  {
    series_code: '%110',
    series_name: '8동행',
    category: '그리스도와의 동행',
    sub_series_opt: 'N',
    ord: 3,
    parent_series: null,
  },
  {
    series_code: '2%',
    series_name: '60구절',
    category: '60구절 전체',
    sub_series_opt: 'Y',
    ord: 4,
    parent_series: null,
  },
  {
    series_code: '3%',
    series_name: 'DEP 242구절',
    category: '242 전체',
    sub_series_opt: 'Y',
    ord: 10,
    parent_series: null,
  },
  {
    series_code: '4%',
    series_name: '180 구절',
    category: '180 전체',
    sub_series_opt: 'Y',
    ord: 19,
    parent_series: null,
  },
];

export const SERIES_DATA_NO_SUB = {
  series_code: '%101',
  series_name: '5확신',
  category: '그리스도와의 새출발',
  sub_series_opt: 'N',
  ord: 2,
  parent_series: null,
};

export const SERIES_DATA_HAS_SUB = {
  series_code: '2%',
  series_name: '60구절',
  category: '60구절 전체',
  sub_series_opt: 'Y',
  ord: 4,
  parent_series: null,
};

export const SERIES_DATA_SUB = [
  {
    series_code: '210',
    category: '60구절',
    series_name: 'A. 새로운 삶',
    sub_series_opt: 'N',
    ord: 5,
    parent_series: '2%',
  },
  {
    series_code: '220',
    category: '60구절',
    series_name: 'B. 그리스도를 전파함',
    sub_series_opt: 'N',
    ord: 6,
    parent_series: '2%',
  },
  {
    series_code: '230',
    category: '60구절',
    series_name: 'C. 하나님을 의뢰함',
    sub_series_opt: 'N',
    ord: 7,
    parent_series: '2%',
  },
  {
    series_code: '240',
    category: '60구절',
    series_name: 'D. 그리스도 제자의 자격',
    sub_series_opt: 'N',
    ord: 8,
    parent_series: '2%',
  },
  {
    series_code: '250',
    category: '60구절',
    series_name: 'E. 그리스도를 닮아감',
    sub_series_opt: 'N',
    ord: 9,
    parent_series: '2%',
  },
];

export const VERSE_SUMMARY_DATA = [
  {
    idx: 697,
    card_num: 1,
    series_code: '%101',
    category: '그리스도와의 새출발',
    theme: '구원의 확신',
    chapter: 5,
    verse1: 11,
    verse2: 12,
    bible_code: {
      bible_name: '요한일서',
    },
  },
  {
    idx: 698,
    card_num: 2,
    series_code: '%101',
    category: '그리스도와의 새출발',
    theme: '기도응답의 확신',
    chapter: 16,
    verse1: 24,
    verse2: 0,
    bible_code: {
      bible_name: '요한복음',
    },
  },
  {
    idx: 699,
    card_num: 3,
    series_code: '%101',
    category: '그리스도와의 새출발',
    theme: '승리의 확신',
    chapter: 10,
    verse1: 13,
    verse2: 0,
    bible_code: {
      bible_name: '고린도전서',
    },
  },
  {
    idx: 700,
    card_num: 4,
    series_code: '%101',
    category: '그리스도와의 새출발',
    theme: '사죄의 확신',
    chapter: 1,
    verse1: 9,
    verse2: 0,
    bible_code: {
      bible_name: '요한일서',
    },
  },
  {
    idx: 701,
    card_num: 5,
    series_code: '%101',
    category: '그리스도와의 새출발',
    theme: '인도의 확신',
    chapter: 3,
    verse1: 5,
    verse2: 6,
    bible_code: {
      bible_name: '잠언',
    },
  },
];

export const VERSE_DETAIL_DATA_KOR = [
  {
    idx: 697,
    card_num: 1,
    category: '그리스도와의 새출발',
    theme: '구원의 확신',
    chapter: 5,
    verse1: 11,
    verse2: 12,
    verse_kor:
      '또 증거는 이것이니 하나님이 우리에게 영생을 주신 것과 이 생명이 그의 아들 안에 있는 그것이니라아들이 있는 자에게는 생명이 있고 하나님의 아들이 없는 자에게는 생명이 없느니라',
    series_code: {
      ord: 1,
      series_name: '5확신',
    },
    bible_code: {
      bible_name: '요한일서',
      short_name: '요일',
    },
  },
  {
    idx: 698,
    card_num: 2,
    category: '그리스도와의 새출발',
    theme: '기도응답의 확신',
    chapter: 16,
    verse1: 24,
    verse2: 0,
    verse_kor:
      '지금까지는 너희가 내 이름으로 아무 것도 구하지 아니하였으나 구하라 그리하면 받으리니 너희 기쁨이 충만하리라',
    series_code: {
      ord: 1,
      series_name: '5확신',
    },
    bible_code: {
      bible_name: '요한복음',
      short_name: '요',
    },
  },
  {
    idx: 699,
    card_num: 3,
    category: '그리스도와의 새출발',
    theme: '승리의 확신',
    chapter: 10,
    verse1: 13,
    verse2: 0,
    verse_kor:
      '사람이 감당할 시험 밖에는 너희에게 당한 것이 없나니 오직 하나님은 미쁘사 너희가 감당치 못할 시험 당함을 허락지 아니하시고 시험 당할 즈음에 또한 피할 길을 내사 너희로 능히 감당하게 하시느니라',
    series_code: {
      ord: 1,
      series_name: '5확신',
    },
    bible_code: {
      bible_name: '고린도전서',
      short_name: '고전',
    },
  },
  {
    idx: 700,
    card_num: 4,
    category: '그리스도와의 새출발',
    theme: '사죄의 확신',
    chapter: 1,
    verse1: 9,
    verse2: 0,
    verse_kor:
      '만일 우리가 우리 죄를 자백하면 저는 미쁘시고 의로우사 우리 죄를 사하시며 모든 불의에서 우리를 깨끗케 하실 것이요',
    series_code: {
      ord: 1,
      series_name: '5확신',
    },
    bible_code: {
      bible_name: '요한일서',
      short_name: '요일',
    },
  },
  {
    idx: 701,
    card_num: 5,
    category: '그리스도와의 새출발',
    theme: '인도의 확신',
    chapter: 3,
    verse1: 5,
    verse2: 6,
    verse_kor:
      '너는 마음을 다하여 여호와를 의뢰하고 네 명철을 의지하지 말라너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라',
    series_code: {
      ord: 1,
      series_name: '5확신',
    },
    bible_code: {
      bible_name: '잠언',
      short_name: '잠',
    },
  },
];

export const BIBLE_VERSIONS = [
  { code: 'BV_001', name: '개역한글판' },
  {
    code: 'BV_002',
    name: '개역개정판',
  },
];
