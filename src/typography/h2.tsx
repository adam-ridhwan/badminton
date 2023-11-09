import { TypographyProps } from '@/types/types';
import { cn } from '@/lib/utils';

const H2 = ({ className, children }: TypographyProps) => {
  return (
    <>
      <h1
        className={cn(
          'mb-2 text-xl font-semibold leading-7 tracking-tight sm:text-2xl md:text-3xl',
          className
        )}
      >
        {children}
      </h1>
    </>
  );
};

export default H2;
