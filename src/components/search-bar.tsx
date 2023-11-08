'use client';

import { useState } from 'react';
import MagnifyingGlass from '@/icons/magnifying-glass';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

const COURTS = 'courts';
const STRING_SERVICE = 'string-service';
const STORES = 'stores';

type options = typeof COURTS | typeof STRING_SERVICE | typeof STORES;

const values: Record<options, string> = {
  courts: 'Courts',
  'string-service': 'String Service',
  stores: 'Stores',
};

const SearchBar = () => {
  const [value, setValue] = useState<options>('courts');

  const handleValueChange = (newValue: options) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='flex h-16 w-full max-w-2xl translate-y-8 flex-row items-center gap-2 rounded-lg bg-background p-4 shadow-md'>
        <MagnifyingGlass className='min-w-[20px]' />

        <Input
          type='text'
          placeholder='Search...'
          className='text-md container border-none bg-background  shadow-none focus-visible:ring-0'
        />

        <Separator orientation='vertical' />

        <Select value={value} onValueChange={handleValueChange}>
          <SelectTrigger className='w-[150px]'>
            <SelectValue aria-label={value} placeholder={values[value]} />
          </SelectTrigger>

          <SelectContent align='end'>
            <SelectItem value={COURTS}>Courts</SelectItem>
            <SelectItem value={STRING_SERVICE} disabled>
              String Service
            </SelectItem>
            <SelectItem value={STORES} disabled>
              Stores
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default SearchBar;
