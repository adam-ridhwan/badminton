import Bars3 from '@/icons/bars3';
import Birdie from '@/icons/birdie';

import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <>
      <header className='flex h-16 items-center'>
        <div className='container flex flex-row items-center justify-center gap-2'>
          {/*<div>*/}
          {/*  <Button variant='ghost' size='icon'>*/}
          {/*    <Bars3 />*/}
          {/*  </Button>*/}
          {/*</div>*/}

          <div className='flex flex-row items-center'>
            <Birdie />
            <span className='text-xl font-bold'>ShuttleCafe</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
