import { useVerseSelectStore } from '@store/verseSelectStore';
import { Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '@/shared/ui/Nav';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import Index from '@features/exam';
import Loader from '@/shared/ui/Loader';

function ExamPage() {
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
          <Nav.Link to={`/drilling`}>암송하기</Nav.Link>
        </Nav.Container>
      </Nav>
      <Suspense fallback={<Loader size='lg' className='my-[100px]' />}>
        <Index />
      </Suspense>
    </>
  );
}

export default ExamPage;
