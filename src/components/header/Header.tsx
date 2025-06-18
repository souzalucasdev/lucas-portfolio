'use client';

import Image from 'next/image';
import ResidenceAge from './ResidenceAge';
import ExpertiseCompetencies from './ExpertiseCompetencies';
import Languages from './Languages';
import Tools from './Tools';
import EmailPhone from './EmailPhone';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div
      className={`${className} flex flex-col h-screen lg:w-90 w-80 lg:bg-white/10 bg-black rounded-xl`}
    >
      <div className='flex flex-col justify-center items-center mb-4 bg-white/2 p-4 rounded-t-xl'>
        <Image
          src='/lucas-profile.jpeg'
          alt='Lucas Souza'
          className=' rounded-full shadow-lg'
          width={100}
          height={100}
        />
        <p className='font-bold p-1 mt-3 text-white'>Lucas Souza</p>
        <p className='p-1 text-sm text-center text-white'>
          React | NextJS | Typescript | Tailwind
        </p>
      </div>
      <div className='overflow-scroll scrollbar-hidden'>
        <ResidenceAge />
        <Languages />
        <ExpertiseCompetencies />
        <Tools />
        <EmailPhone />
        <div className='my-48'>SPACER</div>
      </div>
    </div>
  );
};

export default Header;
