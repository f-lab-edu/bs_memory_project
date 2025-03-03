## 참고

클라이언트측에서 supabase-js를 사용해 작성한 함수를 통해 DB와 상호작용하므로, 엔드포인트 기반이 아닌 함수 중심으로 명세를 작성했습니다.

## Series API

### `getSeries()` **- 모든 성경암송 시리즈 조회**

```tsx
export const getSeries = async () => {
  const { data: series, error } = await supabase
    .from('series')
    .select('series_code,series_name,category,ord')
    .range(1, 23);

  return { data: series, error };
};
```

### 설명

- Series 테이블의 모든 데이터를 조회합니다.

### 파라미터 정보(Typescript)

- 파라미터 없음

### 응답 타입(TypeScript)

```tsx
const series: {   
	series_code: string | null
	series_name: string | null
	category: string | null
	ord: number | null
}[] | null
```

### 응답 예시(JSON)

```json
[
  {
    "series_code": "2%",
    "series_name": "73 구절",
    "category": "73구절 전체",
    "ord": 1
  },
  {
    "series_code": "201",
    "series_name": "5확신",
    "category": "그리스도와의 새출발",
    "ord": 2
  }
]
```

## Verse API

### `getVersesSummary` - 암송구절 요약정보 조회

```tsx
export const getVersesSummary = async (
  seriesCode: SeriesRowData['series_code'],
) => {
  const { data: verse, error } = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code,category,theme,bible_code,chapter,verse1,verse2',
    )
    .eq('series_code', seriesCode!);

  return { data: verse, error };
};
```

### 설명

- Verse테이블에서 구절 컨텐츠를 제외한 정보를 조회합니다.

### 파라미터 정보(Typescript)

```tsx
SeriesRowData['series_code'] : string | null
```

### 응답 타입(Typescript)

```tsx
const verse: {   
	idx: number | null
	card_num: number | null
	series_code: string | null
	category: string | null
	theme: string | null
	bible_code: string | null
	chapter: number | null
	verse1: number | null
	verse2: number | null
}[] | null
```

### 응답 예시(JSON)

```json
[
    {
        "idx": 702,
        "card_num": 1,
        "series_code": "210",
        "category": "A. 새로운 삶",
        "theme": "중심되신 그리스도",
        "bible_code": "47",
        "chapter": 5,
        "verse1": 17,
        "verse2": 0
    },
    {
        "idx": 703,
        "card_num": 2,
        "series_code": "210",
        "category": "A. 새로운 삶",
        "theme": "중심되신 그리스도",
        "bible_code": "48",
        "chapter": 2,
        "verse1": 20,
        "verse2": 0
    }
]
```

### `getVersesDetail` - 암송구절 상세정보 조회

```tsx
export const getVersesDetail = async (
  seriesCode: SeriesRowData['series_code'],
  bibleVersion: BibleVersionName,
) => {
  const { data: verse, error } = await supabase
    .from('verse')
    .select(
      `idx,card_num,series_code,category,theme,bible_code,chapter,verse1,verse2,
         ${bibleVersion === '개역개정판' ? 'verse_gae' : 'verse_kor'}`,
    )
    .eq('series_code', seriesCode!);

  return { data: verse, error };
};
```

### 설명

- Verse 테이블에서 암송구절의 컨텐츠를 포함한 모든 정보를 조회합니다.

### 파라미터 정보(Typescript)

```tsx
seriesCode: string | null
bibleVersion: '개역한글판' | '개역개정판'
```

### 응답 타입(Typescript)

```tsx
const verse: ({   
	idx: number | null
	card_num: number | null
	series_code: string | null
	category: string | null
	theme: string | null
	bible_code: string | null
	chapter: number | null
	verse1: number | null
	verse2: number | null
	verse_gae: string | null
} | {})[] | null
```

### 응답 예시(JSON)

```json
[
    {
        "idx": 702,
        "card_num": 1,
        "series_code": "210",
        "category": "A. 새로운 삶",
        "theme": "중심되신 그리스도",
        "bible_code": "47",
        "chapter": 5,
        "verse1": 17,
        "verse2": 0,
        "verse_kor": " 그런즉 누구든지 그리스도 안에 있으면 새로운 피조물이라 이전 것은 지나갔으니 보라 새 것이 되었도다"
    },
    {
        "idx": 703,
        "card_num": 2,
        "series_code": "210",
        "category": "A. 새로운 삶",
        "theme": "중심되신 그리스도",
        "bible_code": "48",
        "chapter": 2,
        "verse1": 20,
        "verse2": 0,
        "verse_kor": " 내가 그리스도와 함께 십자가에 못 박혔나니 그런즉 이제는 내가 산 것이 아니요 오직 내 안에 그리스도께서 사신 것이라 이제 내가 육체 가운데 사는 것은 나를 사랑하사 나를 위하여 자기 몸을 버리신 하나님의 아들을 믿는 믿음 안에서 사는 것이라"
    }
]
```