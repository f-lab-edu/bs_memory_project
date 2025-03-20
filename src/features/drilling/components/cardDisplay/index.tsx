import { useVerseSelectStore } from '@store/verseSelectStore';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getVersesDetail } from '@apis/verse';
import { useBibleVersionStore } from '@store/bibleVersionStore';
import { useShallow } from 'zustand/react/shallow';
import CardSwiper from 'src/features/drilling/components/cardDisplay/cardSwiper';

function CardDisplay() {
  const bibleVersion = useBibleVersionStore(state => state.bibleVersion);
  const verseIds = useVerseSelectStore(useShallow(state => state.verseIds));

  const { data } = useSuspenseQuery({
    queryKey: ['verseDetails', verseIds, bibleVersion],
    queryFn: () => getVersesDetail(verseIds, bibleVersion),
  });

  return (
    <div className='relative my-8 w-[640px] mobile:w-[300px]'>
      <CardSwiper data={data} />
    </div>
  );
}

export default CardDisplay;
