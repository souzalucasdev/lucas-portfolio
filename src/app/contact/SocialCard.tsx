import { GitHub, LinkedIn, Mail } from '@mui/icons-material';

const SocialCard = () => {
  return (
    <div className='bg-black rounded-4xl flex justify-center gap-12 items-center p-3'>
      <GitHub
        sx={{
          fontSize: 40,
        }}
      />
      <LinkedIn
        sx={{
          fontSize: 40,
        }}
      />
      <Mail
        sx={{
          fontSize: 40,
        }}
      />
    </div>
  );
};

export default SocialCard;
