import { CardHideOption } from '@apis/custom.types.ts';
import { create } from 'zustand/index';

type CardHideOptionState = {
  cardHideOption: CardHideOption;
};

type CardHideOptionAction = {
  setCardHideOption: (cardHideOption: CardHideOption) => void;
};

export const DEFAULT_HIDE_OPTION = {
  name: '없음',
  code: 'NONE',
};

const initialState: CardHideOptionState = {
  cardHideOption: DEFAULT_HIDE_OPTION,
};

type CardHideOptionStore = CardHideOptionState & CardHideOptionAction;
export const useCardHideOptionStore = create<CardHideOptionStore>()(set => ({
  ...initialState,
  setCardHideOption: (cardHideOption: CardHideOption) =>
    set({ cardHideOption }),
}));
