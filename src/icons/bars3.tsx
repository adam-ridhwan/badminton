import { IconProps } from '@/types/types';
import { cn } from '@/lib/utils';

const Bars3 = ({ className }: IconProps) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        aria-hidden='true'
        className={cn('h-7 w-7', className)}
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
      </svg>
    </>
  );
};

export default Bars3;
