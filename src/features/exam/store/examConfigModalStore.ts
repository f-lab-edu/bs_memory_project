import { create } from 'zustand';

type ExamConfigModalState = {
  isOpen: boolean;
};

type ExamConfigModalAction = {
  setIsOpen: (isOpen: boolean) => void;
};

type ExamConfigModalStore = ExamConfigModalState & ExamConfigModalAction;

const initialState: ExamConfigModalState = {
  isOpen: false,
};

export const useExamConfigModalStore = create<ExamConfigModalStore>()(set => ({
  ...initialState,
  setIsOpen: isOpen => set({ isOpen }),
}));
