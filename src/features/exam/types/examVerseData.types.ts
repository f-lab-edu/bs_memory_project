import { getExamVerse } from '@apis/examVerse';
import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';

export type ExamVerseDataList = ApiResultType<typeof getExamVerse>;
export type ExamVerseDataTypes = ArrayElement<ExamVerseDataList>;
