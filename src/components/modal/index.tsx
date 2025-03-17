import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';

type ModalProps = {
  title?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onCloseModal: () => void;
  onClickConfirm: () => void;
};

function Modal({
  title,
  children,
  isOpen,
  onCloseModal,
  onClickConfirm,
}: ModalProps) {
  const handleCloseModal = () => onCloseModal();
  const handleClickConfirm = () => onClickConfirm();
  return (
    <Dialog open={isOpen} onClose={handleCloseModal} className='relative z-10'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
      />

      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-0 text-center'>
          <DialogPanel
            transition
            className='relative w-full max-w-lg overflow-hidden rounded-xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-0 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in mobile:p-6'
          >
            <div className='mt-3 text-center'>
              {title && (
                <DialogTitle
                  as='h3'
                  className='text-3xl font-semibold text-gray-900 mobile:text-xl'
                >
                  {title}
                </DialogTitle>
              )}
              {children}
            </div>
            <div className='my-3 flex items-center justify-center space-x-3'>
              <button
                type='button'
                onClick={handleCloseModal}
                className='col-start-1 mt-3 inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mobile:text-base'
              >
                취소
              </button>
              <button
                type='button'
                onClick={handleClickConfirm}
                className='inline-flex w-full justify-center rounded-lg bg-secondary px-3 py-2 text-lg font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary mobile:text-base'
              >
                확인
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
