'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/mui/styles/theme';

import Main from '@/components/main/Main';
import NavBar from '@/components/navbar/NavBar';
import Header from '@/components/header/Header';
import MobileMenu from '@/components/MobileMenu';
import SlidingMenu from '@/components/navbar/SlidingMenu';

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
      <div
        className={`bg-black flex w-full h-screen lg:p-[0.8rem] flex-col md:flex-row gap-4`}
      >
        <MobileMenu
          toggleHeaderDrawer={toggleHeaderDrawer}
          toggleNavBarDrawer={toggleNavBarDrawer}
        />

        {isHeaderOpen && (
          <div
            className='fixed top-0 left-0 z-50 w-64 h-full md:hidden blur-none'
            ref={headerRef}
          >
            <Header />
          </div>
        )}
        <Header className='md:flex md:w-[300px] hidden' />

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

        <NavBar className='md:flex md:w-[200px] hidden' />
      </div>
    </ThemeProvider>
  );
}
