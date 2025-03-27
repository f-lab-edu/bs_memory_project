import { ExamExposeOption, CardSortMethod } from '@features/exam/type';
import { create } from 'zustand';

type ExamConfigState = {
  time: number;
  sortMethod: CardSortMethod;
  exposeOption: ExamExposeOption;
  setCount: number;
};

type ExamConfigAction = {
  setTime: (time: number) => void;
  setSortMethod: (sortMethod: CardSortMethod) => void;
  setExposeOption: (exposeOption: ExamExposeOption) => void;
  setSetCount: (setCount: number) => void;
  reset: () => void;
};

type GlobalExamConfigStore = ExamConfigState & ExamConfigAction;

const initialState: ExamConfigState = {
  time: 30,
  sortMethod: { name: '기본 순', code: 'SORT_001' },
  exposeOption: { name: '장절', code: 'EXPOSE_001' },
  setCount: 0,
};

export const useGlobalExamConfigStore = create<GlobalExamConfigStore>()(
  set => ({
    ...initialState,
    setTime: time => set(state => ({ ...state, time })),
    setExposeOption: exposeOption => set(state => ({ ...state, exposeOption })),
    setSortMethod: sortMethod => set(state => ({ ...state, sortMethod })),
    setSetCount: setCount => set(state => ({ ...state, setCount })),
    reset: () => set(initialState),
  }),
);
