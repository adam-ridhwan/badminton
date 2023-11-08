import H1 from '@/typography/h1';

import SearchBar from '@/components/search-bar';
import CourtsList from '@/app/court/components/courts-list';

export default function Home() {
  return (
    <main className='mb-20 flex-1'>
      <div className='gradient mb-16 flex h-20 items-end'>
        <div className='container flex items-end justify-center'>
          <SearchBar />
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <H1>Courts</H1>
        <CourtsList />
      </div>
    </main>
  );
}
