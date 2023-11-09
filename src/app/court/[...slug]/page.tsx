import Image from 'next/image';
import Location from '@/icons/location';
import Phone from '@/icons/phone';
import Website from '@/icons/website';
import H1 from '@/typography/h1';
import H2 from '@/typography/h2';

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

  const { name, image, city, state, street, zipcode, website, phone } = court;
  const mapsQuery = encodeURI(`${street}, ${city}, ${state} ${zipcode}`);

  return (
    <main className='mb-20'>
      <div className='gradient mb-5 flex min-h-[8rem] items-center justify-center py-8 md:mb-10'>
        <div className='container'>
          <H1 className='m-0 text-center text-4xl'>{name}</H1>
        </div>
      </div>

      <div className='container max-w-4xl'>
        <div className='mb-5 md:mb-10'>
          <AspectRatio ratio={16 / 9}>
            <Image src={image} priority fill alt='Image' className='rounded-md object-cover shadow-lg' />
          </AspectRatio>
        </div>

        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center gap-1'>
              <Location />
              <H2 className='m-0'>Location</H2>
            </div>

            <div className='mb-2 flex flex-row items-center gap-1'>
              <span className='fill-muted-foreground'>
                {street}, {city}, {state} {zipcode}
              </span>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-max'
            >
              Google Maps
            </a>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center gap-2'>
              <Website />
              <H2 className='m-0'>Website</H2>
            </div>

            <a href={website} target='_blank' className='text-blue-500 underline'>
              {website}
            </a>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center gap-2'>
              <Phone />
              <H2 className='m-0'>Phone Number</H2>
            </div>

            <span>{phone}</span>
          </div>

          <div className='flex flex-col gap-2'>
            <span>Anything incorrect? Notify our moderator to submit and edit.</span>
            <a
              id='button-22a954acb8'
              className='cmp-button button-core'
              href='mailto:adamridhwan.1@gmail.com?subject=Notify:%20Incorrect%20Court%20Information'
              target='_self'
            >
              <span className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary'>
                Notify
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
