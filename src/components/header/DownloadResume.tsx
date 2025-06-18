import { Download } from '@mui/icons-material';
import Link from 'next/link';

const DownloadResume = () => {
  return (
    <div className='p-4'>
      <div className=' pb-8 flex text-green-500'>
        <Link href='/lucas-souza-resume.pdf' target='_blank'>
          <span className='text-white mr-2'>Download Resume</span>
          <Download />
        </Link>
      </div>
    </div>
  );
};

export default DownloadResume;
