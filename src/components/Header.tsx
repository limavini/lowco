export const Header: React.FC = () => {
  return (
    <nav className="hidden md:flex lg:flex md:p-9 lg:p-11">
      <ul className="flex flex-row w-screen items-center justify-between">
        <li className="text-gray-1 font-extrabold text-4xl">
          <a href="#home">Low.co</a>
        </li>

        <div className="flex flex-row md:space-x-4 lg:space-x-14">
          <li>
            <a className="text-gray-1 text-2xl" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="text-gray-1 text-2xl" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="text-gray-1 text-2xl" href="#works">
              Our Works
            </a>
          </li>
          <li>
            <a className="text-gray-1 text-2xl" href="#clients">
              Clients
            </a>
          </li>
          <li>
            <a className="text-gray-1 text-2xl" href="#contact">
              Contact
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};
