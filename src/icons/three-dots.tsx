import { IconProps } from '@/types/types';
import { cn } from '@/lib/utils';

const ThreeDots = ({ className }: IconProps) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={cn('h-7 w-7 fill-primary', className)}
        viewBox='0 0 16 16'
      >
        <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
      </svg>
    </>
  );
};

export default ThreeDots;
