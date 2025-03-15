import { useVerseSelectStore } from '@store/verseSelectStore.ts';
import { useQuery } from '@tanstack/react-query';
import { getVersesDetail } from '@apis/verse.ts';
import { useBibleVersionStore } from '@store/bibleVersionStore.ts';
import { useShallow } from 'zustand/react/shallow';
import Loader from '@components/Loader.tsx';
import CardSwiper from 'src/features/drilling/components/cardDisplay/cardSwiper';

function CardDisplay() {
  const bibleVersion = useBibleVersionStore(state => state.bibleVersion);
  const verseIds = useVerseSelectStore(useShallow(state => state.verseIds));

  const { data, isPending, isError } = useQuery({
    queryKey: ['verseDetails', verseIds, bibleVersion],
    queryFn: () => getVersesDetail(verseIds, bibleVersion),
  });

  if (isPending) return <Loader />;
  if (isError) return <div>데이터 조회에 실패했습니다.</div>;

  return (
    <div className='relative my-8 w-[640px]'>
      <CardSwiper data={data} />
    </div>
  );
}

export default CardDisplay;
