import { useState } from "react";
import { Menu, Close } from "@material-ui/icons";

export const MobileHeader: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  function openMenu() {
    setMenu(!menu);
  }

  return (
    <nav
      className={`md:hidden lg:hidden overflow-hidden ${menu && "h-screen"}`}
    >
      <ul className="flex items-center justify-between py-3 px-2">
        <li className="text-gray-1 font-bold text-xl">
          <a href="#home">Low.co</a>
        </li>

        <li onClick={openMenu}>{menu ? <Close /> : <Menu />}</li>
      </ul>

      {menu && (
        <ul
          className="h-screen flex items-center justify-center flex-col space-y-20"
          onClick={() => setMenu(false)}
        >
          <li className="text-3xl">
            <a href="#placeholder">Home</a>
          </li>
          <li className="text-3xl">
            <a href="#placeholder">Services</a>
          </li>
          <li className="text-3xl">
            <a href="#placeholder">Our Works</a>
          </li>
          <li className="text-3xl">
            <a href="#placeholder">Clients</a>
          </li>
          <li className="text-3xl">
            <a href="#placeholder">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};
