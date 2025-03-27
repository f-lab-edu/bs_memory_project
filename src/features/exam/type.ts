import { ApiResult, ArrayElement } from '@apis/custom.types';
import { getExamExposeOptions } from '@apis/exposeOption';

export type ExamExposeOptions = ApiResult<typeof getExamExposeOptions>;
export type ExamExposeOption = ArrayElement<ExamExposeOptions>;
