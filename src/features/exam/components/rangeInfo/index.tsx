import { VerseDetailDataList } from '@features/drilling/components/verseDisplay/verseCard/type';
import { Textfit } from 'react-textfit';

type RangeInfoProps = {
  data: VerseDetailDataList;
};

function RangeInfo({ data }: RangeInfoProps) {
  const init: string[] = [];
  const seriesNames = data
    .reduce((acc, curr) => {
      const currSeries = curr.series_code.series_name;
      return acc.includes(currSeries) ? acc : [...acc, currSeries];
    }, init)
    .join(', ');

  const total = data.length;

  return (
    <div className='flex w-full flex-col items-start'>
      <h3 className='grid w-full grid-cols-4 place-content-between place-items-center'>
        <div className='col-span-1 min-w-[100px] text-[28px] font-semibold leading-loose mobile:min-w-[70px] mobile:text-[18px]'>
          범위
        </div>
        <Textfit
          min={14}
          max={24}
          mode={'multi'}
          className='col-span-3 ml-2 h-[25px] w-full font-medium leading-tight text-secondary mobile:h-[30px]'
        >
          {seriesNames}
        </Textfit>
      </h3>
      <h3 className='grid w-full grid-cols-4 place-content-between place-items-center'>
        <div className='col-span-1 min-w-[100px] text-[28px] font-semibold leading-loose mobile:min-w-[70px] mobile:text-[18px]'>
          구절 수
        </div>
        <div className='col-span-3 ml-2 mr-auto text-left text-2xl font-medium text-secondary mobile:text-base'>
          {`${total}`}
        </div>
      </h3>
    </div>
  );
}

export default RangeInfo;
