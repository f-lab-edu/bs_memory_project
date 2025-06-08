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
