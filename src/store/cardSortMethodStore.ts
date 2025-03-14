import { create } from 'zustand';
import { CardSortMethod } from '@apis/custom.types.ts';

type CardSortMethodState = {
  cardSortMethod: CardSortMethod;
};

type CardSortMethodAction = {
  setCardSortMethod: (cardSortMethod: CardSortMethod) => void;
};

const initialState: CardSortMethodState = {
  cardSortMethod: {
    name: '기본 순',
    code: 'SORT_001',
  },
};

type CardSortMethodStore = CardSortMethodState & CardSortMethodAction;
export const useCardSortMethodStore = create<CardSortMethodStore>()(set => ({
  ...initialState,
  setCardSortMethod: (cardSortMethod: CardSortMethod) =>
    set({ cardSortMethod }),
}));
