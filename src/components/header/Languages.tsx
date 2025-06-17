import { useEffect, useState } from 'react';
import ProgressWithLabel from './ProgressWithLabel';

const Languages = () => {
  const [portuguese, setportuguese] = useState(0);
  const [english, setEnglish] = useState(0);

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
  }, [portuguese, english]);

  return (
    <div className='p-4'>
      <p className='font-bold px-1 mb-2 text-white'>Languages</p>
      <div className='flex justify-center items-center border-b border-white pb-4'>
        <ProgressWithLabel value={portuguese} label={'Portuguese'} />
        <ProgressWithLabel value={english} label={'English'} />
      </div>
    </div>
  );
};

export default Languages;
