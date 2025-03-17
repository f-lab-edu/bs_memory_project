import Modal from '@components/modal';
import TimeLimit from '@features/exam/components/examConfigModal/timelimit';
import ExposeSelect from '@features/exam/components/examConfigModal/exposeSelect';
import SortMethodSelect from '@features/exam/components/examConfigModal/sortMethodSelect';
import { useExamConfigModalStore } from '@features/exam/store/examConfigModalStore.ts';
import { useNavigate } from 'react-router-dom';
import { useExamConfigStore } from '@features/exam/store/examConfigStore.ts';

function ExamConfigModal() {
  const isOpen = useExamConfigModalStore(state => state.isOpen);
  const setIsOpen = useExamConfigModalStore(state => state.setIsOpen);
  const navigate = useNavigate();
  const resetExamConfig = useExamConfigStore(state => state.reset);

  const handleOnCloseModal = () => {
    setIsOpen(false);
    resetExamConfig();
  };

  const handleClickConfirm = () => {
    setIsOpen(false);
    void navigate('/exam');
  };

  return (
    <Modal
      title='시험설정'
      onCloseModal={handleOnCloseModal}
      isOpen={isOpen}
      onClickConfirm={handleClickConfirm}
    >
      <div className='mx-auto mb-12 mt-10 flex max-w-[200px] flex-col items-start space-y-5'>
        <TimeLimit />
        <ExposeSelect />
        <SortMethodSelect />
      </div>
    </Modal>
  );
}

export default ExamConfigModal;
