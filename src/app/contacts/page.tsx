'use client'; // Mark as client component

import { useState, useEffect, useRef } from 'react';
import Main from '@/components/main/Main';
import NavBar from '@/components/navbar/NavBar';
import Header from '@/components/header/Header';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import SlidingMenu from '@/components/navbar/SlidingMenu';
import { useRouter } from 'next/navigation'; // Correct import for App Router

// THIS HOLE PAGE WILL GO TO TRASH AND BE REBUILT BECAUSE THIS IS A BAD COPY OF THE HOME COMPONENT.
// THIS IS FOR QUICK TESTING PURPOSE
export default function Contacts() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const navBarRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Use router from 'next/navigation' for App Router

  const theme = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            color: 'black',
            fontWeight: 500,
            backgroundColor: 'lightGreen',
          },
        },
      },
    },
  });

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

  const blurBg = isHeaderOpen || isNavBarOpen ? 'blur-sm' : '';
  return (
    <ThemeProvider theme={theme}>
      <div
        className={`bg-black flex w-full h-screen lg:p-[0.8rem] overflow-hidden flex-col md:flex-row`}
      >
        <div className='md:hidden flex justify-between items-center p-2'>
          <MoreVertIcon
            className='text-green-500'
            onClick={toggleHeaderDrawer}
          />
          <MenuIcon className='text-green-500' onClick={toggleNavBarDrawer} />
        </div>

        {isHeaderOpen && (
          <div
            className='fixed top-0 left-0 z-50 w-64 h-full md:hidden blur-none'
            ref={headerRef}
          >
            <Header />
          </div>
        )}
        <Header className='md:flex md:w-[300px] hidden' />

        <div className='p-12'>
          <div className='mb-6'>Oooops...</div>
          <div> CONTACTS SESSION WILL BE AVAILABLE SOON...</div>
        </div>
        <div className='flex justify-center items-center'>
          <button
            className='bg-green-500 rounded-xl text-black font-bold p-6'
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
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
