import { v4 as uuidv4 } from 'uuid';

import CourtsItem from '@/app/court/components/courts-item';

export const TEMPORARY_COURTS = [
  {
    id: '1',
    name: 'MIT Recreation - Zesiger Sports and Fitness Center',
    street: '120 Vassar St',
    city: 'Cambridge',
    state: 'MA',
    zipcode: '02139',
    slug: 'mit-recreation-zesiger-sports-and-fitness-center',
    image: '/mit.png',
    website: 'http://www.bu.edu/fitrec',
    phone: '(617) 620-7566',
  },
  {
    id: '2',
    name: 'Boston University Fitness and Recreational Center',
    street: '915 Commonwealth Ave',
    city: 'Boston',
    state: 'MA',
    zipcode: '02215',
    slug: 'boston-university-fitness-and-recreational-center',
    image: '/boston-university.png',
    website: 'http://www.bu.edu/fitrec',
    phone: '(617) 620-7566',
  },
  {
    id: '3',
    name: 'Boston Badminton',
    street: '169 Flanders Rd',
    city: 'Westborough',
    state: 'MA',
    zipcode: '01581',
    slug: 'boston-badminton',
    image: '/boston-badminton.png',
    website: 'http://www.bu.edu/fitrec',
    phone: '(617) 620-7566',
  },
  {
    id: '4',
    name: 'Maugus Club',
    street: '40 Abbott Rd',
    city: 'Wellesley',
    state: 'MA',
    zipcode: '02481',
    slug: 'maugus-club',
    image: '/maugus-club.png',
    website: 'http://www.bu.edu/fitrec',
    phone: '(617) 620-7566',
  },
];

const CourtsList = () => {
  return (
    <div className='container grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8'>
      {TEMPORARY_COURTS.map(court => (
        <CourtsItem key={court.id} court={court} />
      ))}
    </div>
  );
};

export default CourtsList;
