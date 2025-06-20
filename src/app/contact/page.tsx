'use client';

import React from 'react';
import { useDrawerContext } from '@/context/DrawerContext';
import MobileMenu from '@/components/MobileMenu';
import Header from '@/components/header/Header';
import SlidingMenu from '@/components/navbar/SlidingMenu';
import { ThemeProvider } from '@mui/material';
import theme from '@/mui/styles/theme';
import NavBar from '@/components/navbar/NavBar';
import Contact from './Contact';

export default function ContactPage() {
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
      ? 'blur-sm overflow-hidden pointer-events-none'
      : 'overflow-scroll';

  console.log('isNavOpen: ', isNavBarOpen);

  return (
    <ThemeProvider theme={theme}>
      <MobileMenu
        toggleHeaderDrawer={toggleHeaderDrawer}
        toggleNavBarDrawer={toggleNavBarDrawer}
      />
      <div
        className={`bg-black flex w-screen h-screen lg:p-[0.8rem] flex-col md:flex-row gap-4 p-4`}
      >
        {isHeaderOpen && (
          <div
            ref={headerRef}
            className='fixed top-0 left-0 z-50 w-64 h-full md:hidden'
          >
            <Header />
          </div>
        )}

        <Header className={`${blurBg} md:flex md:w-[300px] hidden`} />
        <Contact className={blurBg} />

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
        <NavBar
          className='md:flex md:w-[200px] hidden'
          toggleNavBarDrawer={toggleNavBarDrawer}
        />
      </div>
    </ThemeProvider>
  );
}
