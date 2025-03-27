import { ApiResult, ArrayElement } from '@apis/custom.types';
import { getExamExposeOptions } from '@apis/exposeOption';
import { getExamVerse } from '@apis/examVerse';
import { getCardSortMethod } from '@apis/cardSortMethod';

export type CardSortMethods = ApiResult<typeof getCardSortMethod>;
export type CardSortMethod = ArrayElement<CardSortMethods>;

export type ExamExposeOptions = ApiResult<typeof getExamExposeOptions>;
export type ExamExposeOption = ArrayElement<ExamExposeOptions>;

export type ExamVerseDataList = ApiResult<typeof getExamVerse>;
export type ExamVerseData = ArrayElement<ExamVerseDataList>;
