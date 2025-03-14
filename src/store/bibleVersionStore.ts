import { create } from 'zustand';
import { BibleVersion } from '@apis/custom.types.ts';

type BibleVersionState = {
  bibleVersion: BibleVersion;
};

type BibleVersionAction = {
  setBibleVersion: (bibleVersion: BibleVersion) => void;
};

type BibleVersionStore = BibleVersionState & BibleVersionAction;

const initialState: BibleVersionState = {
  bibleVersion: {
    name: '개역한글판',
    code: 'BV_001',
  },
};

export const useBibleVersionStore = create<BibleVersionStore>()(set => ({
  ...initialState,
  setBibleVersion: bibleVersion => set({ bibleVersion }),
}));
