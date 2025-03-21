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
  buttonElement: React.ReactNode;
};

function Modal({
  title,
  children,
  isOpen,
  onCloseModal,
  buttonElement,
}: ModalProps) {
  const handleCloseModal = () => onCloseModal();
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
            {buttonElement}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
