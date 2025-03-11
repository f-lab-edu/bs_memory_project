import { Link } from 'react-router-dom';
import VerseSelect from '@features/verseSelect';

function Home() {
  return (
    <div className='flex justify-center'>
      <div className='m-2 flex max-w-[600px] grow flex-col items-center justify-center'>
        <h1 className='flex h-40 items-center text-5xl'>NAVI 성경 암송</h1>
        <VerseSelect />
        <div className='my-2 flex w-full items-center justify-center space-x-4'>
          <Link
            to={`/drilling`}
            className='w-[200px] rounded-3xl bg-secondary px-4 py-2.5 text-center text-2xl text-white mobile:w-[180px] mobile:text-base'
          >
            암송하기
          </Link>
          <Link
            to={`/exam`}
            className='w-[200px] rounded-3xl bg-secondary px-4 py-2.5 text-center text-2xl text-white mobile:w-[180px] mobile:text-base'
          >
            시험보기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
