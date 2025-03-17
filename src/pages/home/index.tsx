import { Link } from 'react-router-dom';
import VerseSelect from '@features/verseSelect';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { useVerseSelectStore } from '@store/verseSelectStore.ts';
import { useShallow } from 'zustand/react/shallow';
import ExamConfigModal from '@features/exam/components/examConfigModal';
import { useExamConfigModalStore } from '@features/exam/store/examConfigModalStore.ts';
import { useExamConfigStore } from '@features/exam/store/examConfigStore.ts';

function Home() {
  const hasSelectedVerse = useVerseSelectStore(
    useShallow(state => state.hasAnyId),
  );
  const setExamConfigModalOpen = useExamConfigModalStore(
    state => state.setIsOpen,
  );
  const resetExamConfig = useExamConfigStore(state => state.reset);

  const handleDrillingLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hasSelectedVerse()) {
      e.preventDefault();
      alert('암송 구절을 선택해주세요. 😊');
    }
  };

  const handleExamLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!hasSelectedVerse()) {
      alert('암송 구절을 선택해주세요. 😊');
      return;
    }
    resetExamConfig();
    setExamConfigModalOpen(true);
  };

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
            <Link
              to={`/drilling`}
              className='inline-block w-full px-4 py-2.5'
              onClick={handleDrillingLinkClick}
            >
              암송하기
            </Link>
          </li>
          <li className='flex w-[150px] items-center rounded-3xl bg-secondary text-center text-2xl text-white mobile:text-base'>
            <Link
              to={`/exam`}
              className='inline-block w-full px-4 py-2.5'
              onClick={handleExamLinkClick}
            >
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
      <ExamConfigModal />
    </div>
  );
}

export default Home;
