import { VerseDetailData } from '@features/drilling/components/cardDisplay/card/type';
import { getVerseAddress } from '@utils/common';
import { Textfit } from 'react-textfit';
import { useCardHideOptionStore } from '@store/cardHideOptionStore';
import { ClassValue } from 'clsx';
import cn from '@utils/cn';

type CardProps = {
  data: VerseDetailData;
};

const cardTextClass = (isHidden: boolean, ...inputs: ClassValue[]) => {
  return cn(inputs, isHidden && 'text-transparent bg-sky-100/70');
};

function Card({ data }: CardProps) {
  const { theme, category, contents } = data;
  const { code: hideOption } = useCardHideOptionStore(
    state => state.cardHideOption,
  );

  const address = getVerseAddress(data);
  return (
    <div className='my-4 flex h-[400px] flex-col items-start justify-center rounded-xl border border-[#bebebe] px-9 py-6 text-left shadow-lg mobile:h-[200px]'>
      <div
        className={cardTextClass(
          hideOption === 'HIDE_002',
          'mb-3 mt-2 text-[28px] font-semibold mobile:text-[20px]',
        )}
      >
        {theme}
      </div>
      <div
        className={cardTextClass(
          hideOption === 'HIDE_001',
          'mt-2 text-[26px] font-medium mobile:text-[18px]',
        )}
      >
        {address}
      </div>
      <Textfit
        mode='multi'
        min={12}
        max={24}
        className={
          'h-[220px] w-[500px] text-wrap rounded-xl py-4 leading-8 mobile:h-[150px] mobile:leading-4'
        }
      >
        <span className={cardTextClass(hideOption === 'HIDE_003', '')}>
          {contents}
        </span>
      </Textfit>
      <div className='mt-5 text-xl font-semibold mobile:text-base'>
        {category}
      </div>
    </div>
  );
}

export default Card;
