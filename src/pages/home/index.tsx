import VerseSelect from '@features/verseSelect';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { useShallow } from 'zustand/react/shallow';
import ExamConfigModal from 'src/features/examConfig';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { useExamConfigModalStore } from '@store/exam/examConfigModalStore';
import Nav from '@/shared/ui/Nav';
import ExamConfigProvider from '@/providers/ExamConfigProvider';
import ALERT_MESSAGE from '@/constants/alertMessage';
import PAGE_HEADING_TEXTS from '@/constants/pageHeadingTexts';

function Home() {
  const hasSelectedVerse = useVerseSelectStore(
    useShallow(state => state.hasAnyId),
  );
  const setExamConfigModalOpen = useExamConfigModalStore(
    state => state.setIsOpen,
  );

  const handleDrillingLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hasSelectedVerse()) {
      e.preventDefault();
      alert(ALERT_MESSAGE.VERSE_NOT_SELECTED);
    }
  };

  const handleExamLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!hasSelectedVerse()) {
      alert(ALERT_MESSAGE.VERSE_NOT_SELECTED);
      return;
    }
    setExamConfigModalOpen(true);
  };

  return (
    <>
      <Nav>
        <Nav.Container>
          <Nav.Link to='/'>
            <FaHome aria-hidden={true} className='size-[32px]' />
            <span className='sr-only'>홈으로</span>
          </Nav.Link>
          <Nav.Link to='/drilling' onClick={handleDrillingLinkClick}>
            암송하기
          </Nav.Link>
          <Nav.Link to='/exam' onClick={handleExamLinkClick}>
            시험보기
          </Nav.Link>
        </Nav.Container>
      </Nav>
      <div className='mx-2 my-14 flex flex-col items-center justify-center'>
        <h1 className='flex items-center text-5xl font-semibold mobile:text-3xl'>
          {PAGE_HEADING_TEXTS.HOME}
        </h1>
        <VerseSelect />
      </div>
      <ExamConfigProvider>
        <ExamConfigModal />
      </ExamConfigProvider>
    </>
  );
}

export default Home;
