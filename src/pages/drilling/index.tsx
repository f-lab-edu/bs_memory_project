import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import Drilling from '@features/drilling';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { useEffect } from 'react';

function DrillingPage() {
  const navigate = useNavigate();
  const hasSelectedVerse = useVerseSelectStore(state => state.hasAnyId);

  useEffect(() => {
    if (!hasSelectedVerse()) void navigate('/', { replace: true });
  }, [hasSelectedVerse, navigate]);

  return (
    <div className='flex flex-col items-center justify-center'>
      <nav className='mb-2 mt-4 flex w-full items-center justify-start'>
        <ul className='flex h-[80px] items-center justify-center space-x-4'>
          <li className='flex w-[100px] items-center rounded-3xl bg-secondary text-center text-3xl text-white mobile:text-base'>
            <Link to={`/`} className='inline-block w-full px-4 py-2.5'>
              <FaHome aria-hidden={true} className='w-full' />
              <span className='sr-only'>홈으로</span>
            </Link>
          </li>
          <li className='flex w-[150px] items-center rounded-3xl bg-secondary text-center text-2xl text-white mobile:text-base'>
            <Link to={`/exam`} className='inline-block w-full px-4 py-2.5'>
              시험보기
            </Link>
          </li>
        </ul>
      </nav>
      {hasSelectedVerse() && <Drilling />}
    </div>
  );
}

export default DrillingPage;
