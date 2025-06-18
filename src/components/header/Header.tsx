'use client';

import ResidenceAge from './ResidenceAge';
import ExpertiseCompetencies from './ExpertiseCompetencies';
import Languages from './Languages';
import Tools from './Tools';
import EmailPhone from './EmailPhone';
import DownloadResume from './DownloadResume';
import Footer from './Footer';
import AvatarWithInfo from './AvatarWithInfo';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div
      className={`${className} flex flex-col h-full lg:w-90 w-80 lg:bg-white/10 bg-black rounded-xl`}
    >
      <div className='overflow-scroll scrollbar-hidden'>
        <AvatarWithInfo />
        <ResidenceAge />
        <Languages />
        <ExpertiseCompetencies />
        <Tools />
        <EmailPhone />
        <DownloadResume />
        <Footer />
      </div>
    </div>
  );
};

export default Header;
