import { createContext } from 'react';
import { ExamConfigStore } from '@features/exam/store/createExamConfigStore';

export const ExamConfigContext = createContext<ExamConfigStore | null>(null);
