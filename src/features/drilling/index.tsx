import BibleVersionSelect from '@features/bibleVersionSelect';
import CardHideOptionSelect from '@features/cardHideOptionSelect';
import VerseCardDisplay from '@features/verseCardDisplay';

function Drilling() {
  return (
    <div className='flex w-full max-w-[800px] grow flex-col items-center justify-center space-y-4'>
      <div className='flex h-[100px] w-full items-center justify-around mobile:w-full mobile:space-x-3'>
        <BibleVersionSelect />
        <CardHideOptionSelect />
      </div>
      <VerseCardDisplay />
    </div>
  );
}

export default Drilling;
