import Modal from '@components/modal';
import TimeLimit from '@features/exam/components/examConfigModal/timelimit';
import ExposeSelect from '@features/exam/components/examConfigModal/exposeSelect';
import SortMethodSelect from '@features/exam/components/examConfigModal/sortMethodSelect';
import { useExamConfigModalStore } from '@features/exam/store/examConfigModalStore';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import FetchErrorMessage from '@components/FetchErrorMessage';
import { Suspense } from 'react';
import CommonComboboxSkeleton from '@components/CommonComboboxSkeleton';
import SetCountSelect from '@features/exam/components/examConfigModal/setCountSelect';
import useExamConfigModalHandler from '@/hooks/useExamConfigModalHandler';

function ExamConfigModal() {
  const { reset } = useQueryErrorResetBoundary();
  const { handleClickConfirm, handleClickClose } = useExamConfigModalHandler();

  const isOpen = useExamConfigModalStore(state => state.isOpen);

  return (
    <Modal
      title='시험설정'
      isOpen={isOpen}
      onClickCloseCallback={handleClickClose}
      onClickConfirmCallback={handleClickConfirm}
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
