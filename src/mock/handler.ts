import { http, HttpResponse } from 'msw';
import {
  BIBLE_VERSION,
  CARD_HIDE_OPTION,
  CARD_SORT_METHOD,
  SERIES_DATA,
  SERIES_DATA_SUB,
  VERSE_SUMMARY_DATA,
} from '@/mock/mockData.ts';
import { SUPABASE_URL } from '@/config.ts';

const baseURL = `${SUPABASE_URL}/rest/v1`;

export const getSeriesHandler = http.get(
  `${baseURL}/series?select=series_code%2Cseries_name%2Ccategory%2Csub_series_opt%2Cord%2Cparent_series&parent_series=is.null&order=ord.asc`,
  () => {
    return HttpResponse.json({
      data: SERIES_DATA,
      error: null,
    });
  },
);

export const getSubSeriesHandler = http.get(
  `${baseURL}/series?select=series_code%2Ccategory%3Aseries_name%2Cseries_name%3Acategory%2Csub_series_opt%2Cord%2Cparent_series&parent_series=eq.2%25&order=ord.asc`,
  () => {
    return HttpResponse.json({
      data: SERIES_DATA_SUB,
      error: null,
    });
  },
);

export const getVerseSummaryHandler = http.get(
  `${baseURL}/verse?select=idx%2Ccard_num%2Cseries_code%2Ccategory%2Ctheme%2Cchapter%2Cverse1%2Cverse2%2Cbible_code%28bible_name%29&series_code=eq.100&order=idx.asc
`,
  () => {
    return HttpResponse.json({
      data: VERSE_SUMMARY_DATA,
      error: null,
    });
  },
);

export const getBibleVerseHandler = http.get(
  `${baseURL}/bible_version?select=*`,
  () => {
    return HttpResponse.json({
      data: BIBLE_VERSION,
      error: null,
    });
  },
);

export const getCardSortMethodHandler = http.get(
  `${baseURL}/card_sort_method?select=*`,
  () => {
    return HttpResponse.json({
      data: CARD_SORT_METHOD,
      error: null,
    });
  },
);

export const getCardHideOptionHandler = http.get(
  `${baseURL}/card_hide_option?select=*`,
  () => {
    return HttpResponse.json({
      data: CARD_HIDE_OPTION,
      error: null,
    });
  },
);
