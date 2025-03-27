import { useVerseSelectStore } from '@store/verseSelectStore';
import { useQuery } from '@tanstack/react-query';
import { getVersesDetail } from '@apis/verse';
import { useBibleVersionStore } from '@store/bibleVersionStore';
import { useShallow } from 'zustand/react/shallow';
import Loader from '@components/Loader';
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
