import { useNavigate } from 'react-router-dom';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import Drilling from '@features/drilling';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { useEffect } from 'react';
import Nav from '@/shared/ui/Nav';
import PAGE_HEADING_TEXTS from '@/constants/pageHeadingTexts';
import LINK_TEXTS from '@/constants/linkTexts';

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
          <Nav.Link to='/'>
            <FaHome aria-hidden={true} className='size-[32px]' />
            <span className='sr-only'>{LINK_TEXTS.HOME}</span>
          </Nav.Link>
          <Nav.Link to='/exam'>{LINK_TEXTS.EXAM}</Nav.Link>
        </Nav.Container>
      </Nav>
      <h1 className='sr-only'>{PAGE_HEADING_TEXTS.DRILLING}</h1>
      {hasSelectedVerse() && <Drilling />}
    </>
  );
}

export default DrillingPage;
