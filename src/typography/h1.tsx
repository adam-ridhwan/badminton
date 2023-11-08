import { TypographyProps } from '@/types/types';
import { cn } from '@/lib/utils';

const H1 = ({ className, children }: TypographyProps) => {
  return (
    <>
      <h1
        className={cn(
          'mb-5 text-2xl font-semibold leading-7 tracking-tight sm:text-3xl md:text-4xl',
          className
        )}
      >
        {children}
      </h1>
    </>
  );
};

export default H1;
