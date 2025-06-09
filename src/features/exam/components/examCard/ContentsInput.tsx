import { useState } from 'react';
import { useExamStatusStore } from '@store/exam/examStatusStore';
import getExamResultHTML from '@utils/getExamResultHTML';
import parse from 'html-react-parser';
import { Textfit } from 'react-textfit';

type ContentsInputProps = {
  contents: string;
};

function ContentsInput({ contents }: ContentsInputProps) {
  const isFinished = useExamStatusStore(state => state.isFinished);
  const [value, setValue] = useState('');

  return (
    <div className='my-2 h-[220px] max-w-[450px] overflow-auto'>
      {isFinished ? (
        <Textfit
          mode={'multi'}
          min={14}
          max={18}
          className='size-full rounded-lg bg-[#f7f7f7] px-4 py-6'
        >
          {parse(getExamResultHTML(value, contents))}
        </Textfit>
      ) : (
        <>
          <label htmlFor='contents' className='sr-only'>
            내용
          </label>
          <textarea
            id='contents'
            cols={30}
            rows={7}
            value={value}
            className='block rounded-md bg-white px-3 py-1.5 text-xl font-medium text-secondary outline outline-1 -outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:border-[#6b7280] focus:outline-1 focus:-outline-offset-2 focus:outline-gray-300 focus:ring-0 mobile:text-base'
            onChange={e => setValue(e.target.value)}
          ></textarea>
        </>
      )}
    </div>
  );
}

export default ContentsInput;
