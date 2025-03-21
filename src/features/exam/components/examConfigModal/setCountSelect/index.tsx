import useExamConfigContext from '@/hooks/useExamConfigContext';

function SetCountSelect() {
  const setCount = useExamConfigContext(state => state.setCount);
  const setSetCount = useExamConfigContext(state => state.setSetCount);

  return (
    <div className='text-left text-[22px] mobile:text-base/4'>
      <label htmlFor='setCount' className='block font-semibold text-secondary'>
        구절 수
      </label>
      <div className='mt-2 flex items-center justify-center space-x-2'>
        <input
          type='number'
          inputMode='numeric'
          id='setCount'
          className='block w-full rounded-md bg-white px-3 py-1.5 text-xl font-medium text-secondary outline outline-1 -outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:border-[#6b7280] focus:outline-1 focus:-outline-offset-2 focus:outline-gray-300 focus:ring-0 mobile:text-sm'
          value={setCount}
          onChange={e => setSetCount(Number(e.target.value))}
        />
        <span>개</span>
      </div>
    </div>
  );
}

export default SetCountSelect;
