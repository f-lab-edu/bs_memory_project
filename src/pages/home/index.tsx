import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='flex justify-center'>
      <div className='m-2 flex max-w-[600px] grow flex-col items-center justify-center'>
        <h1 className='flex h-40 items-center text-5xl'>NAVI 성경 암송</h1>
        {/* start 분리1 - 검색 input */}
        <div className='w-[360px] mobile:w-full'>
          <input
            type='text'
            value={''}
            className='w-full rounded-md'
            id='search'
          />
          <label htmlFor='search' className='sr-only'>
            장절/제목 검색
          </label>
        </div>
        {/* end 분리1 - 검색 input */}
        {/* start 분리2 - 시리즈 그룹 */}
        <ul
          role='list'
          className='my-8 w-[370px] space-y-3 mobile:my-4 mobile:w-full'>
          <li className='rounded-2xl bg-yellow-400 py-2.5 text-center text-[26px]'>
            <button className='w-full'>73구절</button>
          </li>
          <ul role='list'>
            <li className='rounded-2xl bg-yellow-200 py-2.5 text-center text-[26px]'>
              <button className='w-full'>5동행</button>
            </li>
            <ul
              role='list'
              className='max-h-[150px] divide-y divide-gray-200 overflow-y-auto px-4 py-1.5'>
              <li className='flex items-center justify-around space-x-2 py-1.5'>
                <input
                  type='checkbox'
                  id='check'
                  className='checked:ring-0 focus-within:ring-0'
                />
                <label
                  htmlFor='check'
                  className='max-w-[90%] truncate text-lg font-medium mobile:text-base'>
                  왜 QT를 가져야 하는가? - 하나님의 명령 이사야 30:18 dsfsdfs
                </label>
              </li>
            </ul>
          </ul>
          <li className='rounded-2xl bg-yellow-400 py-2.5 text-center text-[26px]'>
            242
          </li>
          <li className='rounded-2xl bg-yellow-400 py-2.5 text-center text-[26px]'>
            180
          </li>
        </ul>
        {/* end 분리2 - 시리즈 그룹 */}
        {/* start 분리3 - Nav */}
        <div className='my-2 flex w-full items-center justify-center space-x-4'>
          <Link
            to={`/drilling`}
            className='w-[200px] rounded-3xl bg-secondary px-4 py-2.5 text-center text-2xl text-white mobile:w-[180px] mobile:text-base'>
            암송하기
          </Link>
          <Link
            to={`/exam`}
            className='w-[200px] rounded-3xl bg-secondary px-4 py-2.5 text-center text-2xl text-white mobile:w-[180px] mobile:text-base'>
            시험보기
          </Link>
        </div>
        {/* end 분리3 - Nav */}
      </div>
    </div>
  );
}

export default Home;
