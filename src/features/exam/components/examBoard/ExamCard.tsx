import { ExamExposeOption, ExamVerseData } from '@features/exam/type';
import { getVerseAddress } from '@utils/common';

type ExamCardProps = {
  data: ExamVerseData;
  exposeOption: ExamExposeOption;
};

function ExamCard({ data, exposeOption }: ExamCardProps) {
  const { code } = exposeOption;
  const { theme } = data;
  return (
    <div className='mb-4 flex flex-col'>
      <div className='w-full'>
        {code === 'EXPOSE_001' || code === 'EXPOSE_003' ? (
          <div className='text-xl font-medium leading-loose'>
            {getVerseAddress(data)}
          </div>
        ) : (
          <div className='w-full'>
            <label htmlFor='address' className='sr-only'>
              장절
            </label>
            <input
              id='address'
              type='text'
              value=''
              placeholder='장절'
              className='block rounded-md bg-white px-3 py-1.5 text-xl font-medium text-secondary outline outline-1 -outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:border-[#6b7280] focus:outline-1 focus:-outline-offset-2 focus:outline-gray-300 focus:ring-0 mobile:text-base'
            />
          </div>
        )}
      </div>
      <div className='w-full'>
        {code === 'EXPOSE_002' ? (
          <div className='text-xl font-medium leading-loose'>{theme}</div>
        ) : (
          <>
            <label htmlFor='theme' className='sr-only'>
              제목
            </label>
            <input
              id='theme'
              type='text'
              value=''
              placeholder='제목'
              className='block rounded-md bg-white px-3 py-1.5 text-xl font-medium text-secondary outline outline-1 -outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:border-[#6b7280] focus:outline-1 focus:-outline-offset-2 focus:outline-gray-300 focus:ring-0 mobile:text-base'
            />
          </>
        )}
      </div>
      <div className='my-2 w-full'>
        <label htmlFor='contents' className='sr-only'>
          내용
        </label>
        <textarea
          id='contents'
          cols={30}
          rows={8}
          className='block rounded-md bg-white px-3 py-1.5 text-xl font-medium text-secondary outline outline-1 -outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:border-[#6b7280] focus:outline-1 focus:-outline-offset-2 focus:outline-gray-300 focus:ring-0 mobile:text-base'
        ></textarea>
      </div>
    </div>
  );
}

export default ExamCard;
