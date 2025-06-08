import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';
import { getExamVerse } from '@features/exam/api/getExamVerse';

export type ExamVerseDataList = ApiResultType<typeof getExamVerse>;
export type ExamVerseDataTypes = ArrayElement<ExamVerseDataList>;
