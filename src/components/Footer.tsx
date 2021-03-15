import { LinkedIn, Instagram, Twitter } from "@material-ui/icons";
import { Input } from "./Input";
export const Footer: React.FC = () => (
  <div className="py-9 md:py-11 lg:py-11 px-10 md:px-20 lg:px-40 bg-blue-dark text-white">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      <ul className="font-normal text-lg space-y-2">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#works">Our Works</a>
        </li>
        <li>
          <a href="#clients">Clients</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="py-16 md:pt-0 lg:pt-0 text-gray-6 space-y-3">
        <h1 className="font-extrabold text-4xl">Low.co</h1>
        <div className="flex space-x-2">
          <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
          <a href="http://www.linkedin.com" target="_blank" rel="noreferrer">
            <LinkedIn />
          </a>
          <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
            <Twitter />
          </a>
        </div>
      </div>
      <Input textColor="white" width="md:w-3/4 lg:w-3/4" />
    </div>
    <span className="pt-36 text-center font-bold block">
      created by{" "}
      <a className="underline" href="http://www.github.com/limavini">
        limavini
      </a>
    </span>
  </div>
);
