import React, { ForwardedRef } from 'react';
import Link from 'next/link';

interface SlidingMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlidingMenu = React.forwardRef<HTMLDivElement, SlidingMenuProps>(
  ({ isMenuOpen, setIsMenuOpen }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className={`fixed top-0 right-0 h-full bg-black text-white w-64 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className='absolute top-4 right-4 text-2xl text-white'
        >
          &times;
        </button>
        <nav className='mt-20 flex flex-col items-center space-y-4'>
          <Link href='#about' className='hover:text-accent'>
            About
          </Link>
          <Link href='#projects' className='hover:text-indigo-500'>
            Projects
          </Link>
          <Link href='#contact' className='hover:text-indigo-500'>
            Contact
          </Link>
        </nav>
      </div>
    );
  }
);

export default SlidingMenu;
