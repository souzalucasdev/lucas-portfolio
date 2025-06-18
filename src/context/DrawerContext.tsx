'use client';

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react';

interface DrawerContextProps {
  isHeaderOpen: boolean;
  isNavBarOpen: boolean;
  headerRef: React.RefObject<HTMLDivElement | null>;
  navBarRef: React.RefObject<HTMLDivElement | null>;
  toggleHeaderDrawer: () => void;
  toggleNavBarDrawer: () => void;
}

interface DrawerProviderProps {
  children: React.ReactNode;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawerContext must be used within a DrawerProvider');
  }
  return context;
};

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const navBarRef = useRef<HTMLDivElement | null>(null);

  const toggleHeaderDrawer = () => {
    setIsHeaderOpen((prev) => !prev);
  };

  const toggleNavBarDrawer = () => {
    setIsNavBarOpen((prev) => !prev);
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

  return (
    <DrawerContext.Provider
      value={{
        isHeaderOpen,
        isNavBarOpen,
        headerRef,
        navBarRef,
        toggleHeaderDrawer,
        toggleNavBarDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
