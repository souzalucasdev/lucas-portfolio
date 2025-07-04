import React, { ForwardedRef } from 'react';
import LinkButton from './LinkButton';

interface SlidingMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlidingMenu = React.forwardRef<HTMLDivElement, SlidingMenuProps>(
  ({ isMenuOpen, setIsMenuOpen }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className={`flex justify-center items-center fixed top-0 right-0 h-full bg-third-dark text-white w-64 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className='absolute top-4 right-4 text-2xl text-white'
        >
          &times;
        </button>
        <div className='flex flex-col w-full p-6'>
          <LinkButton
            icon='home'
            link='/'
            label='Home'
            onClick={() => setIsMenuOpen(false)}
          />
          <LinkButton
            icon='contact'
            link='/contact'
            label='Contact'
            onClick={() => setIsMenuOpen(false)}
          />
          {/* <LinkButton
            icon='background'
            link='/background'
            label='Background'
            onClick={() => setIsMenuOpen(false)}
          /> */}
          <LinkButton
            icon='portfolio'
            link='/portfolio'
            label='Portfolio'
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    );
  }
);

SlidingMenu.displayName = 'SlidingMenu';

export default SlidingMenu;
