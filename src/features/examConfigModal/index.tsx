import Modal from '@/shared/ui/modal';
import TimeLimit from '@features/examConfigModal/components/timelimit';
import ExposeSelect from '@features/examConfigModal/components/exposeSelect';
import SortMethodSelect from '@features/examConfigModal/components/sortMethodSelect';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import FetchErrorMessage from '@/shared/ui/FetchErrorMessage';
import { Suspense } from 'react';
import CommonComboboxSkeleton from '@/shared/ui/commonCombobox/CommonComboboxSkeleton';
import SetCountSelect from '@features/examConfigModal/components/setCountSelect';
import useSubmitExamConfig from '@/hooks/useSubmitExamConfig';
import { useExamConfigModalStore } from '@store/exam/examConfigModalStore';

function ExamConfigModal() {
  const { reset } = useQueryErrorResetBoundary();
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
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <div className='flex w-full flex-col items-start'>
                <div
                  aria-hidden={true}
                  className='text-[22px] font-semibold text-secondary mobile:text-base/4'
                >
                  표시
                </div>
                <FetchErrorMessage
                  className='text-[14px]'
                  iconClass='size-5'
                  onClickRetryButton={resetErrorBoundary}
                />
              </div>
            )}
          >
            <Suspense fallback={<CommonComboboxSkeleton label={'표시'} />}>
              <ExposeSelect />
            </Suspense>
          </ErrorBoundary>
          <SetCountSelect />
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <div className='flex w-full flex-col items-start'>
                <div
                  aria-hidden={true}
                  className='text-[22px] font-semibold text-secondary mobile:text-base/4'
                >
                  순서
                </div>
                <FetchErrorMessage
                  className='text-[14px]'
                  iconClass='size-5'
                  onClickRetryButton={resetErrorBoundary}
                />
              </div>
            )}
          >
            <Suspense fallback={<CommonComboboxSkeleton label={'순서'} />}>
              <SortMethodSelect />
            </Suspense>
          </ErrorBoundary>
        </div>
      )}
    </Modal>
  );
}

export default ExamConfigModal;
