import { useRouteError } from 'react-router-dom';
import ErrorMessage from '@components/errorMessage';
import { IoIosWarning } from '@react-icons/all-files/io/IoIosWarning';

function RouteErrorElement() {
  const error = useRouteError();
  console.error(error);
  return (
    <ErrorMessage className='absolute top-1/2 flex max-w-[600px] -translate-y-1/2 flex-col items-center justify-center space-y-12 px-4 mobile:space-y-8'>
      <IoIosWarning className='size-32 mobile:size-16' />
      <p className='text-center text-4xl leading-relaxed mobile:text-xl'>
        현재 페이지를 이용하실 수 없습니다. <br />
        잠시 후 다시 시도해주세요.
      </p>
    </ErrorMessage>
  );
}

export default RouteErrorElement;
