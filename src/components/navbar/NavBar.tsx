'use client';

import { useState, useEffect, useRef } from 'react';
import SlidingMenu from './SlidingMenu';
import MenuIcon from '@mui/icons-material/Menu';

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
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
    <div
      className={`${className} lg:w-20 flex flex-col sticky no-scroll p-4 bg-white/10 rounded-xl items-center`}
    >
      {!isMobile && (
        <>
          <MenuIcon
            className='text-green-500 cursor-pointer'
            onClick={toggleMenu}
          />
          <div className='flex justify-center items-center h-full'>
            <span className='absolute rotate-90 text-gray-600 font-bold text-xl'>
              NavBar
            </span>
          </div>

          {isMenuOpen && (
            <div className='fixed top-0 right-0 z-50 w-64 bg-gray-900 p-4 h-full'>
              <SlidingMenu
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                ref={menuRef}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NavBar;
