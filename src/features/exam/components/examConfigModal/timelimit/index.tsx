import {
  MINUITE,
  useExamConfigStore,
} from '@features/exam/store/examConfigStore';
import { useShallow } from 'zustand/react/shallow';

function TimeLimit() {
  const time = useExamConfigStore(useShallow(state => state.time / MINUITE));
  const setTime = useExamConfigStore(state => state.setTime);

  return (
    <div className='text-left text-[22px] mobile:text-base/4'>
      <label htmlFor='timelimit' className='block font-semibold text-secondary'>
        제한시간
      </label>
      <div className='mt-2 flex items-center justify-center space-x-2'>
        <input
          type='number'
          id='timelimit'
          value={time}
          className='block w-full rounded-md bg-white px-3 py-1.5 text-xl font-medium text-secondary outline outline-1 -outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:border-[#6b7280] focus:outline-1 focus:-outline-offset-2 focus:outline-gray-300 focus:ring-0 mobile:text-sm'
          onChange={e => setTime(Number(e.target.value))}
        />
        <span>분</span>
      </div>
    </div>
  );
}

export default TimeLimit;
