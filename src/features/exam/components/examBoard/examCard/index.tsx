import { ExamExposeOption, ExamVerseData } from '@features/exam/type';
import { getVerseAddress } from '@utils/common';
import AddressInput from '@features/exam/components/examBoard/examCard/AddressInput';
import ThemeInput from '@features/exam/components/examBoard/examCard/ThemeInput';
import ContentsInput from '@features/exam/components/examBoard/examCard/ContentsInput';

type ExamCardProps = {
  data: ExamVerseData;
  exposeOption: ExamExposeOption;
};

function ExamCard({ data, exposeOption }: ExamCardProps) {
  const { theme, contents } = data;
  return (
    <div className='mb-4 flex flex-col'>
      <AddressInput
        address={getVerseAddress(data)}
        exposeOption={exposeOption}
      />
      <ThemeInput theme={theme} exposeOption={exposeOption} />
      <ContentsInput contents={contents} />
    </div>
  );
}

export default ExamCard;
