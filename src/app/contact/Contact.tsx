import InfoCardGroup from './InfoCardGroup';
import SocialCard from './SocialCard';
import ContactForm from './ContactForm';

interface ContactProps {
  className: string;
}
const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <div
      className={`${className} w-full flex flex-col gap-4 p-4 bg-white/10 rounded-xl`}
    >
      <div>
        <h3 className='text-left text-lg font-semibold text-white flex-start mb-4'>
          Contact Information
        </h3>
        <InfoCardGroup />
      </div>
      <SocialCard />
      <ContactForm />
    </div>
  );
};
export default Contact;
