import { useExamConfigStore } from '@features/exam/store/examConfigStore';
import { useEffect, useRef, useState } from 'react';

function Timer() {
  const [isPaused, setIsPaused] = useState(false);
  const time = useExamConfigStore(state => state.time);
  const [leftSeconds, setLeftSeconds] = useState(() => time / 1000);

  const intervalRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (isPaused && intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setLeftSeconds(prev => prev - 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  useEffect(() => {
    if (leftSeconds === 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [leftSeconds]);

  const min = Number((leftSeconds / 60).toFixed(2));
  const minValue = Math.floor(min);
  const secValue = Number(((min - minValue) * 60).toFixed());
  const minString = minValue.toString().padStart(2, '0');
  const secString = secValue.toString().padStart(2, '0');

  return (
    <div className='grid w-full grid-cols-4 place-items-center'>
      <h3 className='col-span-2 grid w-full grid-cols-4 place-content-between place-items-center'>
        <div className='col-span-2 min-w-[100px] text-[28px] font-semibold leading-loose mobile:min-w-[70px] mobile:text-[18px]'>
          남은 시간
        </div>
        <div className='col-span-2 ml-2 mr-auto text-2xl font-medium text-secondary mobile:text-base'>
          <div className='flex items-center justify-center space-x-1 text-center'>
            <div className='w-[45px] mobile:w-[22px]'>{minString}</div>
            <div className='pb-1 leading-none'>&#58;</div>
            <div className='w-[45px] mobile:w-[22px]'>{secString}</div>
          </div>
        </div>
      </h3>
      <button
        className='col-span-2 mr-auto rounded-3xl bg-secondary px-4 py-2 text-xl font-medium text-white mobile:px-3 mobile:py-1 mobile:text-base'
        onClick={() => setIsPaused(prev => !prev)}
      >
        {isPaused ? '다시시작' : '일시정지'}
      </button>
    </div>
  );
}

export default Timer;
