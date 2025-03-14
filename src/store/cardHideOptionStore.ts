import { CardHideOption } from '@apis/custom.types.ts';
import { create } from 'zustand/index';

type CardHideOptionState = {
  cardHideOption: CardHideOption;
};

type CardHideOptionAction = {
  setCardHideOption: (cardHideOption: CardHideOption) => void;
};

const initialState: CardHideOptionState = {
  cardHideOption: {
    name: '내용',
    code: 'HIDE_003',
  },
};

type CardHideOptionStore = CardHideOptionState & CardHideOptionAction;
export const useCardHideOptionStore = create<CardHideOptionStore>()(set => ({
  ...initialState,
  setCardHideOption: (cardHideOption: CardHideOption) =>
    set({ cardHideOption }),
}));
