import Image from 'next/image';
import Location from '@/icons/location';
import H1 from '@/typography/h1';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { TEMPORARY_COURTS } from '@/app/court/components/courts-list';

type CourtPageProps = {
  params: {
    slug: string;
  };
};

export default function CourtPage({ params: { slug } }: CourtPageProps) {
  const id = slug[0].split('-')[0];
  const court = TEMPORARY_COURTS.find(court => String(court.id) === id);

  if (!court) return <p>Court not found.</p>;

  const { name, image, city, state, street, zipcode } = court;
  const mapsQuery = encodeURI(`${street}, ${city}, ${state} ${zipcode}`);

  return (
    <main className='container mb-20 max-w-4xl'>
      <div className='mb-5 md:mb-10'>
        <AspectRatio ratio={16 / 9}>
          <Image src={image} priority fill alt='Image' className='rounded-md object-cover shadow-lg' />
        </AspectRatio>
      </div>

      <H1 className='my-2'>{name}</H1>
      <div className='flex flex-row items-center gap-1'>
        <Location />
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
          target='_blank'
          rel='noopener noreferrer'
          className='fill-muted-foreground underline'
        >
          {street}, {city}, {state} {zipcode}
        </a>
      </div>
    </main>
  );
}
