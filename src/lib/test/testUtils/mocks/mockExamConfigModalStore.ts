const mockExamConfigModalStore = () => {
  vi.mock('@store/exam/examConfigModalStore', async () => {
    return await vi.importActual('@store/exam/examConfigModalStore');
  });
};

export default mockExamConfigModalStore;
