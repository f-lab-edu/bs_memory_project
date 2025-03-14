import BibleVersionSelect from '@features/drilling/components/bibleVersionSelect';
import CardSortMethodSelect from '@features/drilling/components/cardSortMethodSelect';
import CardHideOptionSelect from '@features/drilling/components/cardHideOptionSelect';

function Drilling() {
  return (
    <div className='flex w-full max-w-[600px] grow flex-col items-center justify-center'>
      <h1 className='flex h-40 items-center text-5xl'>암송하기</h1>
      <div className='flex items-center justify-center space-x-12 px-3 mobile:w-full mobile:space-x-3'>
        <BibleVersionSelect />
        <CardSortMethodSelect />
        <CardHideOptionSelect />
      </div>
    </div>
  );
}

export default Drilling;
