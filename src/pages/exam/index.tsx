import { useVerseSelectStore } from '@store/verseSelectStore.ts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Exam() {
  const navigate = useNavigate();
  const hasSelectedVerse = useVerseSelectStore(state => state.hasAnyId);

  useEffect(() => {
    if (!hasSelectedVerse()) void navigate('/', { replace: true });
  }, [hasSelectedVerse, navigate]);
  return <div>Exam</div>;
}

export default Exam;
