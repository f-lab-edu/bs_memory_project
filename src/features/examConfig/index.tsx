import Modal from '@/shared/ui/modal';
import TimeLimit from '@features/examConfig/components/timelimit';
import ExposeSelect from '@features/examConfig/components/exposeSelect';
import SortMethodSelect from '@features/examConfig/components/sortMethodSelect';
import CommonComboboxSkeleton from '@/shared/ui/commonCombobox/CommonComboboxSkeleton';
import SetCountSelect from '@features/examConfig/components/setCountSelect';
import useSubmitExamConfig from '@/hooks/useSubmitExamConfig';
import { useExamConfigModalStore } from '@store/exam/examConfigModalStore';
import { ComposedBoundary } from '@/lib/error/ComposedBoundary';
import ErrorMessage from '@/lib/error/ErrorMessage';

function ExamConfigModal() {
  const { submitExamConfig } = useSubmitExamConfig();

  const isOpen = useExamConfigModalStore(state => state.isOpen);
  const setIsOpen = useExamConfigModalStore(state => state.setIsOpen);

  return (
    <Modal
      title='시험설정'
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClickConfirmCallback={submitExamConfig}
    >
      {isOpen && (
        <div className='mx-auto mb-12 mt-10 flex max-w-[200px] flex-col items-start space-y-5'>
          <TimeLimit />
          <ComposedBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <ErrorMessage
                error={error}
                resetErrorBoundary={resetErrorBoundary}
                className='flex-col items-start'
              />
            )}
            suspenseFallback={<CommonComboboxSkeleton label='표시' />}
          >
            <ExposeSelect />
          </ComposedBoundary>
          <SetCountSelect />
          <ComposedBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <ErrorMessage
                error={error}
                resetErrorBoundary={resetErrorBoundary}
                className='flex-col items-start'
              />
            )}
            suspenseFallback={<CommonComboboxSkeleton label='순서' />}
          >
            <SortMethodSelect />
          </ComposedBoundary>
        </div>
      )}
    </Modal>
  );
}

export default ExamConfigModal;
