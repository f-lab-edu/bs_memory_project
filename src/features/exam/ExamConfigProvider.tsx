import { createExamConfigStore } from '@features/exam/store/createExamConfigStore';
import { ExamConfigContext } from '@features/exam/context/ExamConfigContext';
import { useVerseSelectStore } from '@store/verseSelectStore';

type ExamConfigProviderProps = {
  children: React.ReactNode;
  initialData?: Partial<typeof createExamConfigStore>;
};

export default function ExamConfigProvider({
  children,
  initialData,
}: ExamConfigProviderProps) {
  const selectedVerseCount = useVerseSelectStore(
    state => state.verseIds.length,
  );
  const store = createExamConfigStore(
    initialData ?? { setCount: selectedVerseCount },
  );

  return (
    <ExamConfigContext.Provider value={store}>
      {children}
    </ExamConfigContext.Provider>
  );
}
