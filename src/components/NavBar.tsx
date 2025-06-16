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
    <div className='flex flex-col'>
      <div className='flex-start'>
        <span className='' onClick={toggleMenu}>
          <Image
            src='/hamburger-menu.svg'
            alt='hamburger menu icon'
            height={40}
            width={40}
          />
        </span>
      </div>

      <span className=' rotate-90'>Navbar</span>
      <SlidingMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        ref={menuRef}
      />
    </div>
  );
};

export default NavBar;
