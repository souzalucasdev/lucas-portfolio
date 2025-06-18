'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/mui/styles/theme';

import Main from '@/components/main/Main';
import SlidingMenu from '@/components/navbar/SlidingMenu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const navBarRef = useRef<HTMLDivElement>(null);

  const toggleHeaderDrawer = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  const toggleNavBarDrawer = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        (headerRef.current && !headerRef.current.contains(e.target as Node)) ||
        (navBarRef.current && !navBarRef.current.contains(e.target as Node))
      ) {
        setIsHeaderOpen(false);
        setIsNavBarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const blurBg =
    isHeaderOpen || isNavBarOpen
      ? 'blur-sm overflow-hidden'
      : 'overflow-scroll';

  return (
    <ThemeProvider theme={theme}>
      <div className='md:hidden flex justify-between items-center p-2'>
        <MoreVertIcon className='text-green-500' onClick={toggleHeaderDrawer} />
        <MenuIcon className='text-green-500' onClick={toggleNavBarDrawer} />
      </div>
      <Main className={`${blurBg}`} />
      {isNavBarOpen && (
        <div
          className='fixed top-0 right-0 z-50 bg-gray-900 p-4 w-64 h-full md:hidden'
          ref={navBarRef}
        >
          <SlidingMenu
            isMenuOpen={isNavBarOpen}
            setIsMenuOpen={setIsNavBarOpen}
          />
        </div>
      )}
    </ThemeProvider>
  );
}
