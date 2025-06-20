import { GitHub, LinkedIn } from '@mui/icons-material';

const SocialCard = () => {
  return (
    <div className='bg-black/30 hover:bg-gradient-to-tl hover:from-black/30 hover:to-green-800/30 rounded-xl flex justify-center gap-12 items-center w-full p-2 transition-colors duration-300'>
      <a
        href='https://github.com/souzalucasdev'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GitHub
          sx={{
            color: 'white',
            fontSize: 40,
            cursor: 'pointer',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        />
      </a>

      <a
        href='https://www.linkedin.com/in/devlucassouza'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LinkedIn
          sx={{
            color: 'white',
            fontSize: 40,
            cursor: 'pointer',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        />
      </a>
      {/* <a
        href='https://www.github.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Mail
          sx={{
            color: 'white',
            fontSize: 40,
            cursor: 'pointer',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        />
      </a> */}
    </div>
  );
};

export default SocialCard;
