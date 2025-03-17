import { Link } from 'react-router-dom';
import VerseSelect from '@features/verseSelect';
import { FaHome } from '@react-icons/all-files/fa/FaHome';

function Home() {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <nav className='mb-2 mt-4 flex w-full items-center justify-start'>
        <ul className='flex h-[80px] items-center justify-center space-x-4'>
          <li className='flex w-[100px] items-center rounded-3xl bg-secondary text-center text-3xl text-white mobile:text-base'>
            <Link to={`/`} className='inline-block w-full px-4 py-2.5'>
              <FaHome aria-hidden={true} className='w-full' />
              <span className='sr-only'>홈으로</span>
            </Link>
          </li>
          <li className='flex w-[150px] items-center rounded-3xl bg-secondary text-center text-2xl text-white mobile:text-base'>
            <Link to={`/drilling`} className='inline-block w-full px-4 py-2.5'>
              암송하기
            </Link>
          </li>
          <li className='flex w-[150px] items-center rounded-3xl bg-secondary text-center text-2xl text-white mobile:text-base'>
            <Link to={`/exam`} className='inline-block w-full px-4 py-2.5'>
              시험보기
            </Link>
          </li>
        </ul>
      </nav>
      <div className='mx-2 my-14 flex flex-col items-center justify-center'>
        <h1 className='flex items-center text-5xl font-semibold mobile:text-3xl'>
          NAVI 성경 암송
        </h1>
        <VerseSelect />
      </div>
    </div>
  );
}

export default Home;
