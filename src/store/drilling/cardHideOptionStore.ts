import { create } from 'zustand/index';
import { CardHideOption } from '@features/cardHideOptionSelect/types';
import { CARD_HIDE_OPTIONS } from '@/mock/mockData';

type CardHideOptionState = {
  cardHideOption: CardHideOption;
};

type CardHideOptionAction = {
  setCardHideOption: (cardHideOption: CardHideOption) => void;
};

type CardHideOptionStore = CardHideOptionState & CardHideOptionAction;

const [HIDE_NONE] = CARD_HIDE_OPTIONS;
const initialState: CardHideOptionState = {
  cardHideOption: HIDE_NONE,
};

export const useCardHideOptionStore = create<CardHideOptionStore>()(set => ({
  ...initialState,
  setCardHideOption: (cardHideOption: CardHideOption) =>
    set({ cardHideOption }),
}));
