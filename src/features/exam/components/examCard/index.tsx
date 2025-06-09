import { getVerseAddress } from '@utils/common';
import AddressInput from '@features/exam/components/examCard/AddressInput';
import ThemeInput from '@features/exam/components/examCard/ThemeInput';
import ContentsInput from '@features/exam/components/examCard/ContentsInput';
import { ExamExposeOption } from '@features/exam/types/examExposeOptions.types';
import { ExamVerseDataTypes } from '@features/exam/types/examVerseData.types';

type ExamCardProps = {
  data: ExamVerseDataTypes;
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
