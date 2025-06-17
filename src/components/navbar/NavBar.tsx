'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import SlidingMenu from './SlidingMenu';

const NavBar = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsAnimating((prev) => !prev);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='lg:w-20 flex flex-col sticky no-scroll p-4 cursor-pointer bg-white/10 rounded-xl'>
      <div className='flex justify-center' onClick={toggleMenu}>
        <Image
          src='/hamburger-menu.svg'
          alt='hamburger menu icon'
          height={40}
          width={40}
        />
      </div>
      <div className='flex justify-center items-center h-full'>
        <span className='absolute rotate-90 text-gray-500 font-bold'>
          Navbar
        </span>
      </div>
      <SlidingMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        ref={menuRef}
      />
    </div>
  );
};

export default NavBar;
