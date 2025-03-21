import { useExamStatusStore } from '@features/exam/store/examStatusStore';
import cn from '@utils/cn';

function SubmitButton() {
  const isFinished = useExamStatusStore(state => state.isFinished);
  const setIsFinished = useExamStatusStore(state => state.setIsFinished);

  return (
    <div className='mb-6 mt-[70px]'>
      <button
        className={cn(
          'rounded-full bg-red-500 px-6 py-2.5 text-[30px] font-medium text-white shadow-md shadow-neutral-400 mobile:text-xl',
          isFinished && 'bg-gray-300 text-black',
        )}
        disabled={isFinished}
        onClick={() => setIsFinished(true)}
      >
        {isFinished ? '채점완료' : '채점하기'}
      </button>
    </div>
  );
}

export default SubmitButton;
