import { createExamConfigStore } from '@store/exam/createExamConfigStore';
import { ExamConfigContext } from '@/contexts/ExamConfigContext';
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
