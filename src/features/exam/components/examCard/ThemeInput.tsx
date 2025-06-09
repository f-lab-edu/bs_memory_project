import { useExamStatusStore } from '@store/exam/examStatusStore';
import getExamResultHTML from '@utils/getExamResultHTML';
import { useState } from 'react';
import parse from 'html-react-parser';

import { EXPOSE_OPTIONS } from '@features/exam/constants/exposeOptions';
import { ExamExposeOption } from '@features/exam/types/examExposeOptions.types';

type ThemeInputProps = {
  exposeOption: ExamExposeOption;
  theme: string;
};

const { THEME: EXPOSE_THEME } = EXPOSE_OPTIONS;

function ThemeInput({ exposeOption, theme }: ThemeInputProps) {
  const isFinished = useExamStatusStore(state => state.isFinished);
  const [value, setValue] = useState('');

  const { code } = exposeOption;

  return (
    <div className='w-full'>
      {code === EXPOSE_THEME.code ? (
        <div className='text-xl font-medium leading-loose'>{theme}</div>
      ) : isFinished ? (
        <div className='w-4/5 rounded-lg bg-[#f7f7f7] pl-3 pt-[2px] text-xl font-medium leading-loose mobile:text-lg'>
          {parse(getExamResultHTML(value, theme))}
        </div>
      ) : (
        <>
          <label htmlFor='theme' className='sr-only'>
            제목
          </label>
          <input
            id='theme'
            type='text'
            value={value}
            placeholder='제목'
            className='block rounded-md bg-white px-3 py-1.5 text-xl font-medium text-secondary outline outline-1 -outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:border-[#6b7280] focus:outline-1 focus:-outline-offset-2 focus:outline-gray-300 focus:ring-0 mobile:text-base'
            onChange={e => setValue(e.target.value)}
          />
        </>
      )}
    </div>
  );
}

export default ThemeInput;
