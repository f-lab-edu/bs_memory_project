import { useExamConfigModalStore } from '@features/exam/store/examConfigModalStore';
import { useNavigate } from 'react-router-dom';
import useExamConfigContext from '@/hooks/useExamConfigContext';
import { useGlobalExamConfigStore } from '@features/exam/store/globalExamConfigStore';
import { useShallow } from 'zustand/react/shallow';

function ConfigSubmit() {
  const { time, setCount, exposeOption, sortMethod } = useExamConfigContext(
    useShallow(state => ({
      time: state.time,
      setCount: state.setCount,
      sortMethod: state.sortMethod,
      exposeOption: state.exposeOption,
    })),
  );

  const {
    setTime: setSubmitTime,
    setCount: setSubmitCount,
    setSortMethod: setSubmitSortMethod,
    setExposeOption: setSubmitExposeOption,
  } = useGlobalExamConfigStore(
    useShallow(state => ({
      setTime: state.setTime,
      setCount: state.setSetCount,
      setSortMethod: state.setSortMethod,
      setExposeOption: state.setExposeOption,
    })),
  );

  const setIsOpen = useExamConfigModalStore(state => state.setIsOpen);
  const navigate = useNavigate();

  const handleClickCancel = () => {
    setIsOpen(false);
  };

  const handleClickConfirm = () => {
    setIsOpen(false);
    setSubmitTime(time);
    setSubmitCount(setCount);
    setSubmitSortMethod(sortMethod);
    setSubmitExposeOption(exposeOption);
    void navigate('/exam');
  };

  return (
    <div className='my-3 flex items-center justify-center space-x-3'>
      <button
        type='button'
        onClick={handleClickCancel}
        className='col-start-1 mt-3 inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mobile:text-base'
      >
        취소
      </button>
      <button
        type='button'
        onClick={handleClickConfirm}
        className='col-start-1 mt-3 inline-flex w-full justify-center rounded-lg bg-secondary px-3 py-2 text-lg font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary mobile:text-base'
      >
        확인
      </button>
    </div>
  );
}

export default ConfigSubmit;
