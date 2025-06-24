const mockBibleVersionStore = () => {
  vi.mock('@store/bibleVersionStore', async () => {
    return await vi.importActual('@store/bibleVersionStore');
  });
};

export default mockBibleVersionStore;
