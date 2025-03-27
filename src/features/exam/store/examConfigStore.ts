import { CardSortMethod } from '@apis/custom.types';
import { ExamExposeOption } from '@features/exam/type';
import { create } from 'zustand';

type ExamConfigState = {
  time: number;
  sortMethod: CardSortMethod;
  exposeOption: ExamExposeOption;
};

type ExamConfigAction = {
  setTime: (time: number) => void;
  setSortMethod: (sortMethod: CardSortMethod) => void;
  setExposeOption: (exposeOption: ExamExposeOption) => void;
  reset: () => void;
};

type ExamConfigStore = ExamConfigState & ExamConfigAction;

export const MINUITE = 1000 * 60;
const initialState: ExamConfigState = {
  time: MINUITE * 30,
  sortMethod: { name: '기본 순', code: 'SORT_001' },
  exposeOption: { name: '장절', code: 'EXPOSE_001' },
};

export const useExamConfigStore = create<ExamConfigStore>()(set => ({
  ...initialState,
  setTime: time => set(state => ({ ...state, time: MINUITE * time })),
  setExposeOption: exposeOption => set(state => ({ ...state, exposeOption })),
  setSortMethod: sortMethod => set(state => ({ ...state, sortMethod })),
  reset: () => set(initialState),
}));
