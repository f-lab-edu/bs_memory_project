import { CardSortMethod } from '@apis/custom.types';
import { ExamExposeOption } from '@features/exam/type';
import { createStore } from 'zustand/vanilla';

export interface ExamConfigProps {
  time: number;
  sortMethod: CardSortMethod;
  exposeOption: ExamExposeOption;
  setCount: number;
}

export interface ExamConfigState extends ExamConfigProps {
  setTime: (time: number) => void;
  setSortMethod: (sortMethod: CardSortMethod) => void;
  setExposeOption: (exposeOption: ExamExposeOption) => void;
  setSetCount: (setCount: number) => void;
  reset: () => void;
}

export type ExamConfigStore = ReturnType<typeof createExamConfigStore>;

export const createExamConfigStore = (initProps?: Partial<ExamConfigProps>) => {
  const DEFAULT_PROPS: ExamConfigProps = {
    time: 30,
    sortMethod: { name: '기본 순', code: 'SORT_001' },
    exposeOption: { name: '장절', code: 'EXPOSE_001' },
    setCount: 0,
  };

  return createStore<ExamConfigState>()(set => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setTime: time => set(state => ({ ...state, time })),
    setExposeOption: exposeOption => set(state => ({ ...state, exposeOption })),
    setSortMethod: sortMethod => set(state => ({ ...state, sortMethod })),
    setSetCount: setCount => set(state => ({ ...state, setCount })),
    reset: (initProps?: Partial<ExamConfigProps>) => {
      set({ ...DEFAULT_PROPS, ...initProps });
    },
  }));
};
