import { Application } from "./Application";
import { ArrowRightAlt } from "@material-ui/icons";

export const Business: React.FC = () => (
  <>
    <h2 className="text-2xl md:text-4xl lg:text-4xl px-10 pb-12 md:pb-0 lg:pb-0 text-gray-1 md:w-3/4 lg:w-2/4 md:px-20 lg:px-40 ">
      Good design means good business
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-9 gap-x-2 md:gap-x-4 lg:gap-x-4 px-2 md:px-20 lg:px-40">
      <div className="md:pt-48 lg:pt-48 md:space-y-40 lg:space-y-40">
        <Application
          bgColor="green-500"
          bgImage="energy-dashboard"
          category="Full stack application"
          title="Energy saving dashboard"
        />
        <Application
          bgColor="yellow-500"
          bgImage="starbucks-project"
          category="Full stack application"
          title="Energy saving dashboard"
        />
      </div>
      <div className="md:space-y-40 lg:space-y-40">
        <Application
          bgColor="green-500"
          bgImage="energy-dashboard"
          category="Mobile application"
          title="Booking system"
        />
        <Application
          bgColor="green-500"
          bgImage="energy-dashboard"
          category="Front End applicati on"
          title="Juice product homepage"
        />
        <a
          className=" mt-7 lg:mt-0 md:mt-0 text-blue text-lg md:text-2xl lg:text-2xl block text-left md:text-right lg:text-right"
          href="#more"
        >
          see more <ArrowRightAlt />
        </a>
      </div>
    </div>
  </>
);
