import { ExamConfigState } from '@store/exam/createExamConfigStore';
import { ExamConfigContext } from '@/contexts/ExamConfigContext';
import { useContext } from 'react';
import { useStore } from 'zustand/react';

export default function useExamConfigContext<T>(
  selector: (state: ExamConfigState) => T,
): T {
  const store = useContext(ExamConfigContext);
  if (!store) throw new Error('Missing ExamConfigContext.Provider in the tree');
  return useStore(store, selector);
}
