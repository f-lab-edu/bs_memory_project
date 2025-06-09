import { useNavigate } from 'react-router-dom';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import Drilling from '@features/drilling';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { useEffect } from 'react';
import Nav from '@/shared/ui/Nav';

function DrillingPage() {
  const navigate = useNavigate();
  const hasSelectedVerse = useVerseSelectStore(state => state.hasAnyId);

  useEffect(() => {
    if (!hasSelectedVerse()) void navigate('/', { replace: true });
  }, [hasSelectedVerse, navigate]);

  return (
    <>
      <Nav>
        <Nav.Container>
          <Nav.Link to={`/`}>
            <FaHome aria-hidden={true} className='size-[32px]' />
            <span className='sr-only'>홈으로</span>
          </Nav.Link>
          <Nav.Link to={`/exam`}>시험보기</Nav.Link>
        </Nav.Container>
      </Nav>
      {hasSelectedVerse() && <Drilling />}
    </>
  );
}

export default DrillingPage;
