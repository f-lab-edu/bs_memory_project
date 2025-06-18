const mockVerseSelectStore = () => {
  vi.mock('@store/verseSelectStore', async () => {
    return await vi.importActual('@store/verseSelectStore');
  });
};

export default mockVerseSelectStore;
