import { create } from 'zustand/index';
import { CardHideOption } from '@features/drilling/type';
import { CARD_HIDE_OPTIONS } from '@features/drilling/constants';

type CardHideOptionState = {
  cardHideOption: CardHideOption;
};

type CardHideOptionAction = {
  setCardHideOption: (cardHideOption: CardHideOption) => void;
};

type CardHideOptionStore = CardHideOptionState & CardHideOptionAction;

const initialState: CardHideOptionState = {
  cardHideOption: CARD_HIDE_OPTIONS.NONE,
};

export const useCardHideOptionStore = create<CardHideOptionStore>()(set => ({
  ...initialState,
  setCardHideOption: (cardHideOption: CardHideOption) =>
    set({ cardHideOption }),
}));
