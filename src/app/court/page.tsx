import H1 from '@/typography/h1';

import SearchBar from '@/components/search-bar';
import CourtsList from '@/app/court/components/courts-list';

export default function Home() {
  return (
    <main className='mb-20 flex-1'>
      <CourtsList />
    </main>
  );
}
