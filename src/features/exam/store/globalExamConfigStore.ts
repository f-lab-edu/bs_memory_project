import { create } from 'zustand';
import { CardSortMethod, ExamExposeOption } from '@features/exam/type';
import { EXPOSE_OPTIONS, SORT_METHODS } from '@features/exam/constants';

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
  sortMethod: SORT_METHODS.NORMAL,
  exposeOption: EXPOSE_OPTIONS.ADDR,
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
