import BibleVersionSelect from '@features/drilling/components/bibleVersionSelect';
import CardHideOptionSelect from '@features/drilling/components/cardHideOptionSelect';
import CardDisplay from '@features/drilling/components/cardDisplay';

function Drilling() {
  return (
    <div className='flex w-full max-w-[800px] grow flex-col items-center justify-center space-y-4'>
      <div className='flex h-[100px] max-w-[400px] items-center justify-start space-x-12 mobile:w-full mobile:space-x-3'>
        <BibleVersionSelect />
        <CardHideOptionSelect />
      </div>
      <CardDisplay />
    </div>
  );
}

export default Drilling;
