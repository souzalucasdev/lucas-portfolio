import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'; // Import useState and useEffect
import { Home, Contacts, PermIdentity, Badge } from '@mui/icons-material';

interface LinkButtonProps {
  label: string;
  link: string;
  icon: string;
}

const iconMapping: Record<string, React.ElementType> = {
  home: Home,
  contact: Contacts,
  background: PermIdentity,
  portfolio: Badge,
};

const LinkButton: React.FC<LinkButtonProps> = ({ label, link, icon }) => {
  const [isMounted, setIsMounted] = useState(false); // Track component mounting

  // Initialize router only on the client
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setIsMounted(true);
    setPathname(window.location.pathname); // Set pathname after mount
  }, []);

  const isActive = isMounted && pathname === link;

  const IconComponent = iconMapping[icon];

  return (
    <Link href={link} className=''>
      <div
        className={`flex items-center justify-start p-2 rounded-xl mb-4 ${
          isActive ? 'bg-green-500 text-white' : 'text-gray-600'
        }`}
      >
        {IconComponent && <IconComponent className='mr-2' />}
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default LinkButton;
