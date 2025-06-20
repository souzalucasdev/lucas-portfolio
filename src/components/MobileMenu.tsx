import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';

interface MobileMenuProps {
  toggleHeaderDrawer: () => void;
  toggleNavBarDrawer: () => void;
}

const MobileMenu = ({
  toggleHeaderDrawer,
  toggleNavBarDrawer,
}: MobileMenuProps) => {
  return (
    <div className='md:hidden flex justify-between items-center p-2 bg-black'>
      <MoreVertIcon className='text-green-500' onClick={toggleHeaderDrawer} />
      <MenuIcon className='text-green-500' onClick={toggleNavBarDrawer} />
    </div>
  );
};
export default MobileMenu;
