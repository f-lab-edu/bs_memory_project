import { CommonCombobox } from '@/shared/ui/commonCombobox';
import { Field } from '@headlessui/react';
import COMBOBOX_LABEL_TEXTS from '@/constants/comboboxLabelTexts';
import { ComposedBoundary } from '@/lib/error/ComposedBoundary';
import ErrorMessage from '@/lib/error/ErrorMessage';
import Loader from '@/shared/ui/Loader';
import cn from '@utils/cn';
import BibleVersionCombobox from '@features/bibleVersionSelect/components/bibleVersionCombobox';

type BibleVersionSelectProps = {
  className?: string;
};

function BibleVersionSelect({ className }: BibleVersionSelectProps) {
  return (
    <Field className={cn('flex min-w-[30%] flex-col items-start', className)}>
      <CommonCombobox.Label>
        {COMBOBOX_LABEL_TEXTS.BIBLE_VERSION}
      </CommonCombobox.Label>
      <ComposedBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorMessage error={error} resetErrorBoundary={resetErrorBoundary} />
        )}
        suspenseFallback={<Loader />}
      >
        <BibleVersionCombobox />
      </ComposedBoundary>
    </Field>
  );
}

export default BibleVersionSelect;
