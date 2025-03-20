import { useBibleVersionStore } from '@store/bibleVersionStore';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { useShallow } from 'zustand/react/shallow';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getVersesDetail } from '@apis/verse';
import Timer from '@features/exam/components/timer';
import RangeInfo from '@features/exam/components/rangeInfo';

function Exam() {
  const bibleVersion = useBibleVersionStore(state => state.bibleVersion);
  const verseIds = useVerseSelectStore(useShallow(state => state.verseIds));

  const { data } = useSuspenseQuery({
    queryKey: ['verseDetails', verseIds, bibleVersion],
    queryFn: () => getVersesDetail(verseIds, bibleVersion),
  });

  return (
    <div className='mt-5 flex w-full flex-col items-center justify-center mobile:mt-2'>
      <div className='grid w-full grid-cols-2 place-content-around place-items-center rounded-xl bg-sky-50 px-5 py-6 mobile:grid-cols-1'>
        <RangeInfo data={data} />
        <Timer />
      </div>
    </div>
  );
}

export default Exam;
