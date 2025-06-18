'use client';

import React from 'react';
import { useDrawerContext } from '@/context/DrawerContext';

import MobileMenu from '@/components/MobileMenu';
import Header from '@/components/header/Header';
import SlidingMenu from '@/components/navbar/SlidingMenu';
import { Button, ThemeProvider } from '@mui/material';
import theme from '@/mui/styles/theme';
import NavBar from '@/components/navbar/NavBar';

export default function Portfolio() {
  const {
    isHeaderOpen,
    isNavBarOpen,
    headerRef,
    navBarRef,
    toggleHeaderDrawer,
    toggleNavBarDrawer,
  } = useDrawerContext();

  const blurBg =
    isHeaderOpen || isNavBarOpen
      ? 'blur-sm overflow-hidden'
      : 'overflow-scroll';

  return (
    <ThemeProvider theme={theme}>
      <MobileMenu
        toggleHeaderDrawer={toggleHeaderDrawer}
        toggleNavBarDrawer={toggleNavBarDrawer}
      />
      <div
        className={`bg-black flex w-full h-screen lg:p-[0.8rem] flex-col md:flex-row gap-4`}
      >
        {isHeaderOpen && (
          <div
            ref={headerRef}
            className='fixed top-0 left-0 z-50 w-64 h-full md:hidden'
          >
            <Header />
          </div>
        )}

        <Header className='md:flex md:w-[300px] hidden' />
        <div className='w-full flex justify-center items-center text-bold text-white text-5xl flex-col'>
          <span className='mb-8'>Ooooops... </span>
          <span className='mb-8'>This page is not available yet...</span>
          <Button href={'/'}>Back to HomePage</Button>
        </div>

        {isNavBarOpen && (
          <div
            ref={navBarRef}
            className='fixed top-0 right-0 z-50 bg-gray-900 p-4 w-64 h-full md:hidden'
          >
            <SlidingMenu
              isMenuOpen={isNavBarOpen}
              setIsMenuOpen={toggleNavBarDrawer}
            />
          </div>
        )}
        <NavBar className='md:flex md:w-[200px] hidden' />
      </div>
    </ThemeProvider>
  );
}
