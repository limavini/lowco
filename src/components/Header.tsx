import { Menu } from "@material-ui/icons";

export const Header: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-3 px-2 bg-gray-200">
      <div className="text-gray-900 font-bold">
        <a href="#placeholder">Low.co</a>
      </div>

      <div>
        <Menu />
      </div>
    </nav>
  );
};
