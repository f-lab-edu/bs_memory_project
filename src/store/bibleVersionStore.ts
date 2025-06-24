import { create } from 'zustand';
import { BibleVersion } from '@utils/type';
import { BIBLE_VERSIONS } from '@/mock/mockData';

type BibleVersionState = {
  bibleVersion: BibleVersion;
};

type BibleVersionAction = {
  setBibleVersion: (bibleVersion: BibleVersion) => void;
};

type BibleVersionStore = BibleVersionState & BibleVersionAction;

const [BIBLE_VERSION_KOR] = BIBLE_VERSIONS;

const initialState: BibleVersionState = {
  bibleVersion: BIBLE_VERSION_KOR,
};

export const useBibleVersionStore = create<BibleVersionStore>()(set => ({
  ...initialState,
  setBibleVersion: bibleVersion => set({ bibleVersion }),
}));
