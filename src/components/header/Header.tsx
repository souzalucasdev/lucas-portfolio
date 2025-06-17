'use client';

import Image from 'next/image';
import ProgressWithLabel from './ProgressWithLabel';
import { useEffect, useState } from 'react';
import ResidenceAge from './ResidenceAge';

const Header = () => {
  const [portuguese, setportuguese] = useState(0);
  const [english, setEnglish] = useState(0);
  const [french, setFrench] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (portuguese < 97) {
        setportuguese((prevCount) => prevCount + 1);
      }
      if (english < 92) {
        setEnglish((prevCount) => prevCount + 1);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [portuguese, english, french]);

  return (
    <div className='flex flex-col h-screen w-90 bg-white/10 rounded-xl'>
      <div className='flex flex-col justify-center items-center mb-4 bg-white/2 p-4 rounded-t-xl'>
        <Image
          src='/lucas-profile.jpeg'
          alt='Lucas Souza'
          className=' rounded-full shadow-lg'
          width={100}
          height={100}
        />
        <p className='font-bold p-1 mt-3'>Lucas Souza</p>
        <p className='p-1 text-sm text-center'>
          React | NextJS | Typescript | Tailwind
        </p>
      </div>
      <ResidenceAge />
      <div className='p-4'>
        <p className='p-1'>Languages</p>
        <div className='flex justify-between items-center'>
          <ProgressWithLabel value={portuguese} label={'PT'} />
          <ProgressWithLabel value={english} label={'EN'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
