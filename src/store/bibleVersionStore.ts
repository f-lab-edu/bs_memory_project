import { create } from 'zustand';
import { BibleVersion } from '@utils/type';
import { BIBLE_VERSIONS } from '@utils/constants';

type BibleVersionState = {
  bibleVersion: BibleVersion;
};

type BibleVersionAction = {
  setBibleVersion: (bibleVersion: BibleVersion) => void;
};

type BibleVersionStore = BibleVersionState & BibleVersionAction;

const initialState: BibleVersionState = {
  bibleVersion: BIBLE_VERSIONS[0],
};

export const useBibleVersionStore = create<BibleVersionStore>()(set => ({
  ...initialState,
  setBibleVersion: bibleVersion => set({ bibleVersion }),
}));
