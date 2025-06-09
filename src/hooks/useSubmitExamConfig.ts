import useExamConfigContext from '@/hooks/useExamConfigContext';
import { useShallow } from 'zustand/react/shallow';
import { useGlobalExamConfigStore } from '@store/exam/globalExamConfigStore';
import { useNavigate } from 'react-router-dom';

export default function useSubmitExamConfig() {
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

  const navigate = useNavigate();

  const submitExamConfig = () => {
    setSubmitTime(time);
    setSubmitCount(setCount);
    setSubmitSortMethod(sortMethod);
    setSubmitExposeOption(exposeOption);
    void navigate('/exam');
  };

  return { submitExamConfig };
}
