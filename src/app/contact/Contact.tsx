import { Button } from '@mui/material';
import InfoCardGroup from './InfoCardGroup';
import SocialCard from './SocialCard';

interface ContactProps {
  className: string;
}
const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <div className='h-full w-full scrollbar-hidden'>
      <div
        className='w-full h-80 bg-cover bg-no-repeat bg-center flex flex-col relative '
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        <div
          className={`${className} p-4 h-full scrollbar-hidden w-full flex flex-col rounded-xl`}
        >
          <h3 className='text-left text-lg font-semibold text-white flex-start mb-4'>
            Contact Information
          </h3>
          <div className='flex flex-col gap-4'>
            <InfoCardGroup />
            <SocialCard />
          </div>
        </div>
      </div>
      <Button href={'/'}>Back to HomePage</Button>
    </div>
  );
};
export default Contact;
