import { Download } from '@mui/icons-material';
import Link from 'next/link';

const DownloadResume = () => {
  return (
    <div className='p-4'>
      <div className='border-b border-white pb-8 flex'>
        <Link href='/lucas-souza-resume.pdf' target='_blank'>
          <span className='text-Snow'>Download Resume</span>
          <Download />
        </Link>
      </div>
    </div>
  );
};

export default DownloadResume;
