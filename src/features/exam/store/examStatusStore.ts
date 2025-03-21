import { create } from 'zustand/index';

type ExamStatusState = {
  isFinished: boolean;
};

type ExamStatusAction = {
  setIsFinished: (isFinished: boolean) => void;
};

type ExamStatusStore = ExamStatusState & ExamStatusAction;

const initialState: ExamStatusState = {
  isFinished: false,
};

export const useExamStatusStore = create<ExamStatusStore>()(set => ({
  ...initialState,
  setIsFinished: isFinished => set({ isFinished }),
}));
