import cn from '@utils/cn';
import { ErrorMessageVariants } from '@components/errorMessage/css/variants';
import { ErrorMessageProps } from '@components/errorMessage/type';

function ErrorMessage({ theme, size, weight, ...props }: ErrorMessageProps) {
  return (
    <div
      className={cn(
        ErrorMessageVariants({ theme, size, weight }),
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}

export default ErrorMessage;
