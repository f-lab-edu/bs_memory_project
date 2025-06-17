import { useVerseSelectStore } from '@store/verseSelectStore';
import { useBibleVersionStore } from '@store/bibleVersionStore';
import { useShallow } from 'zustand/react/shallow';
import CardSwiper from '@features/drilling/components/verseDisplay/cardSwiper';
import { useVersesDetail } from '@features/verseSelect/api/getVersesDetail';

function CardDisplay() {
  const bibleVersion = useBibleVersionStore(state => state.bibleVersion);
  const verseIds = useVerseSelectStore(useShallow(state => state.verseIds));

  const { data } = useVersesDetail(verseIds, bibleVersion);

  return (
    <div className='relative my-8 w-[640px] mobile:w-[300px]'>
      <CardSwiper data={data} />
    </div>
  );
}

export default CardDisplay;
