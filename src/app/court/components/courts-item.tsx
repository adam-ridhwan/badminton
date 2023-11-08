import Image from 'next/image';
import Link from 'next/link';
import ThreeDots from '@/icons/three-dots';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

const CourtsItem = ({ court: { id, name, city, state, image, slug } }) => {
  const courtLink = `/court/${id}-${slug}`;

  return (
    <div className='flex flex-col gap-3'>
      <Link href={courtLink}>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={image}
            priority
            fill
            alt='Image'
            sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 100vw'
            className='rounded-md object-cover'
          />
        </AspectRatio>
      </Link>

      <div className='flex flex-row justify-between gap-4'>
        <Link href={courtLink} className='flex flex-col justify-between'>
          <div className='text-lg font-semibold leading-none tracking-tight'>{name}</div>
          <div className='text-md text-muted-foreground'>
            {city}, {state}
          </div>
        </Link>

        <Button
          size='icon'
          className='max-h-[20px] max-w-[20px] bg-transparent shadow-none hover:bg-transparent'
        >
          <ThreeDots />
        </Button>
      </div>
    </div>
  );
};

export default CourtsItem;
