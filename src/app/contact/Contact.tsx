import InfoCardGroup from './InfoCardGroup';
import SocialCard from './SocialCard';
import ContactForm from './ContactForm';
import { useState } from 'react';

interface ContactProps {
  className: string;
}
const Contact: React.FC<ContactProps> = ({ className }) => {
  const [blurBg, setBlurBg] = useState(false);
  return (
    <div
      className={`${className} ${
        blurBg ? 'blur-sm overflow-hidden pointer-events-none' : ''
      } scrollbar-hidden w-full h-full flex flex-col gap-4 p-4 bg-white/10 rounded-xl`}
    >
      <div>
        <h3 className='text-left text-lg font-semibold text-white flex-start mb-4'>
          Contact Information
        </h3>
        <InfoCardGroup />
      </div>
      <SocialCard />
      <ContactForm setIsBlurBg={setBlurBg} />
    </div>
  );
};
export default Contact;
