import Modal from '@/shared/ui/modal';
import TimeLimit from '@features/examConfig/components/timelimit';
import ExposeSelect from '@features/examConfig/components/exposeSelect';
import SetCountSelect from '@features/examConfig/components/setCountSelect';
import useSubmitExamConfig from '@/hooks/useSubmitExamConfig';
import { useExamConfigModalStore } from '@store/exam/examConfigModalStore';
import { ComposedBoundary } from '@/lib/error/ComposedBoundary';
import ErrorMessage from '@/lib/error/ErrorMessage';
import { Field } from '@headlessui/react';
import { CommonCombobox } from '@/shared/ui/commonCombobox';
import Loader from '@/shared/ui/Loader';
import SortMethodSelect from '@features/examConfig/components/sortMethodSelect';
import DIALOG_HEADING_TEXTS from '@/constants/dialogHeadingTexts';

function ExamConfigModal() {
  const { submitExamConfig } = useSubmitExamConfig();

  const isOpen = useExamConfigModalStore(state => state.isOpen);
  const setIsOpen = useExamConfigModalStore(state => state.setIsOpen);

  return (
    <Modal
      title={DIALOG_HEADING_TEXTS.EXAMCONFIG}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClickConfirmCallback={submitExamConfig}
    >
      {isOpen && (
        <div className='mx-auto mb-12 mt-10 flex max-w-[200px] flex-col items-start space-y-5'>
          <TimeLimit />
          <Field className='flex w-full flex-col items-start text-left'>
            <CommonCombobox.Label>표시</CommonCombobox.Label>
            <ComposedBoundary
              fallbackRender={({ error, resetErrorBoundary }) => (
                <ErrorMessage
                  error={error}
                  resetErrorBoundary={resetErrorBoundary}
                  className='flex-col items-start'
                />
              )}
              suspenseFallback={<Loader />}
            >
              <ExposeSelect />
            </ComposedBoundary>
          </Field>
          <SetCountSelect />
          <Field className='flex w-full flex-col items-start text-left'>
            <CommonCombobox.Label>순서</CommonCombobox.Label>
            <ComposedBoundary
              fallbackRender={({ error, resetErrorBoundary }) => (
                <ErrorMessage
                  error={error}
                  resetErrorBoundary={resetErrorBoundary}
                  className='flex-col items-start'
                />
              )}
              suspenseFallback={<Loader />}
            >
              <SortMethodSelect />
            </ComposedBoundary>
          </Field>
        </div>
      )}
    </Modal>
  );
}

export default ExamConfigModal;
