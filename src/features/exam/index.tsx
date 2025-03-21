import { useBibleVersionStore } from '@store/bibleVersionStore';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { useShallow } from 'zustand/react/shallow';
import { useSuspenseQuery } from '@tanstack/react-query';
import Timer from '@features/exam/components/timer';
import RangeInfo from '@features/exam/components/rangeInfo';
import { getExamVerse } from '@apis/examVerse';
import { useGlobalExamConfigStore } from '@features/exam/store/globalExamConfigStore';
import ExamBoard from '@features/exam/components/examBoard';
import SubmitButton from '@features/exam/components/submitButton';
import { useExamStatusStore } from '@features/exam/store/examStatusStore';
import { useEffect } from 'react';

function Exam() {
  const setIsFinished = useExamStatusStore(state => state.setIsFinished);

  useEffect(() => {
    return () => setIsFinished(false);
  }, [setIsFinished]);

  const { time, setCount } = useGlobalExamConfigStore(
    useShallow(state => ({
      time: state.time,
      setCount: state.setCount,
      sortMethod: state.sortMethod,
      exposeOption: state.exposeOption,
    })),
  );

  const bibleVersion = useBibleVersionStore(state => state.bibleVersion);
  const verseIds = useVerseSelectStore(useShallow(state => state.verseIds));

  const { data } = useSuspenseQuery({
    queryKey: ['verseDetails', verseIds, bibleVersion, setCount],
    queryFn: () => getExamVerse(verseIds, bibleVersion, setCount),
  });

  return (
    <div className='mt-5 flex w-full flex-col items-center justify-center mobile:mt-2'>
      <div className='grid w-full grid-cols-2 place-content-around place-items-center rounded-xl bg-sky-50 px-5 py-6 mobile:grid-cols-1'>
        <RangeInfo data={data} />
        <Timer time={time} />
      </div>
      <SubmitButton />
      <ExamBoard data={data} />
    </div>
  );
}

export default Exam;
