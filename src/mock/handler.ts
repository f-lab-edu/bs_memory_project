import { http, HttpResponse } from 'msw';
import {
  BIBLE_VERSIONS,
  CARD_HIDE_OPTIONS,
  SERIES_DATA,
  SERIES_DATA_SUB,
  VERSE_DETAIL_DATA_KOR,
  VERSE_SUMMARY_DATA,
} from '@/mock/mockData';
import { SUPABASE_URL } from '@/lib/supabase/supabaseConfig';
import { SORT_METHODS_LIST } from '@features/exam/constants/sortMethods';

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
  `${baseURL}/verse?select=idx%2Ccard_num%2Cseries_code%2Ccategory%2Ctheme%2Cchapter%2Cverse1%2Cverse2%2Cbible_code%28bible_name%29&series_code=eq.%25101&order=idx.asc
`,
  () => {
    return HttpResponse.json({
      data: VERSE_SUMMARY_DATA,
      error: null,
    });
  },
);

export const getCardSortMethodHandler = http.get(
  `${baseURL}/card_sort_method?select=*`,
  () => {
    return HttpResponse.json({
      data: SORT_METHODS_LIST,
      error: null,
    });
  },
);

export const getVerseDetailHandler = http.get(
  `${baseURL}/verse?select=idx%2Ccard_num%2Cseries_code%28ord%2Cseries_name%29%2Ccategory%2Ctheme%2Cbible_code%28bible_name%2Cshort_name%29%2Cchapter%2Cverse1%2Cverse2%2Cverse_kor&idx=in.%28697%2C698%2C699%2C700%2C701%29&order=series_code%28ord%29.asc`,
  () => {
    return HttpResponse.json({
      data: VERSE_DETAIL_DATA_KOR,
      error: null,
    });
  },
);

export const getBibleVersionsHandler = http.get(
  `${baseURL}/bible_version?select=*`,
  () => {
    return HttpResponse.json({
      data: BIBLE_VERSIONS,
      error: null,
    });
  },
);

export const getCardHideOptionsHandler = http.get(
  `${baseURL}/card_hide_option?select=*`,
  () => {
    return HttpResponse.json({
      data: CARD_HIDE_OPTIONS,
      error: null,
    });
  },
);
