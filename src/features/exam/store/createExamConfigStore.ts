import { CardSortMethod, ExamExposeOption } from '@features/exam/type';
import { createStore } from 'zustand/vanilla';
import { EXPOSE_OPTIONS, SORT_METHODS } from '@features/exam/constants';

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
    sortMethod: SORT_METHODS.NORMAL,
    exposeOption: EXPOSE_OPTIONS.ADDR,
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
