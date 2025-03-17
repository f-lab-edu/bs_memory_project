import { ApiResult, ArrayElement } from '@apis/custom.types.ts';
import { getExamExposeOptions } from '@apis/exposeOption.ts';

export type ExamExposeOptions = ApiResult<typeof getExamExposeOptions>;
export type ExamExposeOption = ArrayElement<ExamExposeOptions>;
