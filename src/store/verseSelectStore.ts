import { create } from 'zustand';
import { VerseId } from '@features/verseSelect/types.ts';

type VerseSelectState = {
  verseIds: VerseId[];
};
type VerseSelectAction = {
  remove: (verseId: VerseId) => void;
  add: (verseId: VerseId | VerseId[]) => void;
  hasId: (verseId: VerseId) => boolean;
  reset: () => void;
  hasAnyId: () => boolean;
};

type VerseSelectStore = VerseSelectState & VerseSelectAction;

const initialState: VerseSelectState = {
  verseIds: [],
};

export const useVerseSelectStore = create<VerseSelectStore>()((set, get) => ({
  ...initialState,
  remove: verseId =>
    set(state => ({
      verseIds: state.verseIds.filter(_verseId => _verseId !== verseId),
    })),
  add: verseId =>
    set(state => {
      return Array.isArray(verseId)
        ? { verseIds: [...state.verseIds, ...verseId] }
        : { verseIds: [...state.verseIds, verseId] };
    }),
  hasId: verseId => get().verseIds.some(_verseId => _verseId === verseId),
  reset: () => set(initialState),
  hasAnyId: () => get().verseIds.length > 0,
}));
