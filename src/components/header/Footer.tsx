import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className='text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items center justify-center text-white bg-white/10 rounded-b-xl bottom-0 p-4 items-center border border-black'>
      <a
        className='hover:scale-125 ease-in-out duration-700'
        href='https://github.com/souzalucasdev'
        target='_blank'
        rel='noreferrer'
      >
        <GitHub />
      </a>
      <a
        className='hover:scale-125 ease-in-out duration-700'
        href='https://www.linkedin.com/in/devlucassouza/'
        target='_blank'
        rel='noreferrer'
      >
        <LinkedIn />
      </a>
    </div>
  );
};

export default Footer;
