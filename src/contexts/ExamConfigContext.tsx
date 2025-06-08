import { createContext } from 'react';
import { ExamConfigStore } from '@store/exam/createExamConfigStore';

export const ExamConfigContext = createContext<ExamConfigStore | null>(null);
