import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { IoIosWarning } from '@react-icons/all-files/io/IoIosWarning';
import SupabaseResponseError from '@/lib/SupabaseResponseError';

function RouteErrorElement() {
  const error = useRouteError();
  console.error(error);

  let message = '프로세스 수행 중 오류가 발생해 페이지를 이용하실 수 없습니다.';
  if (isRouteErrorResponse(error)) {
    message = `페이지 업데이트 중 오류가 발생했습니다.`;
  } else if (error instanceof SupabaseResponseError) {
    message = `데이터 조회 및 업데이트 중 오류가 발생해 페이지를 이용하실 수 없습니다.`;
  }

  return (
    <div className='absolute top-1/2 flex max-w-[600px] -translate-y-1/2 flex-col items-center justify-center space-y-12 px-4 font-medium leading-loose text-gray-500 mobile:space-y-8'>
      <IoIosWarning aria-hidden={true} className='size-32 mobile:size-16' />
      <p className='text-center text-4xl leading-relaxed mobile:text-xl'>
        {message}
      </p>
    </div>
  );
}

export default RouteErrorElement;
