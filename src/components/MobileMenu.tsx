import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";

interface MobileMenuProps {
  toggleHeaderDrawer: () => void;
  toggleNavBarDrawer: () => void;
}

const MobileMenu = ({
  toggleHeaderDrawer,
  toggleNavBarDrawer,
}: MobileMenuProps) => {
  return (
    <div className="md:hidden flex justify-between items-center p-2 bg-second-dark">
      <MoreVertIcon
        className="text-primary-green animate-grow-shrink"
        onClick={toggleHeaderDrawer}
      />
      <MenuIcon
        className="text-primary-green animate-grow-shrink"
        onClick={toggleNavBarDrawer}
      />
    </div>
  );
};
export default MobileMenu;
