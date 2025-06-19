import { Button } from '@mui/material';

interface ContactProps {
  className: string;
}
const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <div
      className={`${className} scrollbar-hidden w-full flex justify-center items-center text-bold text-white text-5xl flex-col`}
    >
      <span className='mb-8'>Ooooops... </span>
      <span className='mb-8'>This page is not available yet...</span>
      <Button href={'/'}>Back to HomePage</Button>
    </div>
  );
};
export default Contact;
