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
import ConfigSubmit from '@features/exam/components/examConfigModal/configSubmit';

function ExamConfigModal() {
  const { reset: handleQueryErrorReset } = useQueryErrorResetBoundary();

  const isOpen = useExamConfigModalStore(state => state.isOpen);
  const setIsOpen = useExamConfigModalStore(state => state.setIsOpen);

  const handleOnCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      title='시험설정'
      onCloseModal={handleOnCloseModal}
      isOpen={isOpen}
      buttonElement={<ConfigSubmit />}
    >
      {isOpen && (
        <div className='mx-auto mb-12 mt-10 flex max-w-[200px] flex-col items-start space-y-5'>
          <TimeLimit />
          <ErrorBoundary
            onReset={handleQueryErrorReset}
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
                  onClickRetryButton={() => resetErrorBoundary()}
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
            onReset={handleQueryErrorReset}
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
                  onClickRetryButton={() => resetErrorBoundary()}
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
