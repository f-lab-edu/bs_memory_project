import { useGlobalExamConfigStore } from '@features/exam/store/globalExamConfigStore';
import { ExamVerseDataList } from '@features/exam/type';
import ExamCard from '@features/exam/components/examBoard/ExamCard';

type ExamBoardProps = {
  data: ExamVerseDataList;
};

function ExamBoard({ data }: ExamBoardProps) {
  const exposeOption = useGlobalExamConfigStore(state => state.exposeOption);
  const sortMethod = useGlobalExamConfigStore(state => state.sortMethod);

  let items: ExamVerseDataList = data;
  if (sortMethod.code === 'SORT_001') {
    items = items.sort((a, b) => a.series_code.ord - b.series_code.ord);
  }

  return (
    <div className='mb-2 mt-16 grid max-h-[calc(100vh-260px)] w-full grid-cols-2 place-content-start place-items-center overflow-auto mobile:mt-8 mobile:max-h-[calc(100vh-100px)] mobile:grid-cols-1'>
      {items.map(data => (
        <ExamCard
          key={`exam-${data.idx}`}
          data={data}
          exposeOption={exposeOption}
        />
      ))}
    </div>
  );
}

export default ExamBoard;
