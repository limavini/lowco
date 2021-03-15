import { Member } from "./Member";

export const Team: React.FC = () => (
  <div className="mx-2 md:mx-20 lg:mx-40 pt-24 md:pt-52 lg:pt-52 lg:grid lg:grid-cols-6 lg:gap-x-48 mb-24 md:mb-48 lg:mb-48">
    <div className=" lg:col-span-2 md:flex lg:flex md:flex-col lg:flex-col md:justify-center lg:justify-center">
      <span className="text-red text-lg pb-2">Meet the team</span>
      <h2 className="text-gray-1 text-4xl leading-relaxed pb-3">
        We are chilled and a laidback team
      </h2>
      <p className="text-gray-2 text-base leading-5 font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div className="grid grid-cols-2 gap-2 lg:gap-6 mt-9 md:mt-12 lg:mt-0 lg:col-span-4">
      <div className="h-full flex flex-col justify-center">
        <Member size="h-40 md:h-72 lg:h-74" bgImage="carla" />
      </div>
      <div className="flex flex-col space-y-2 md:space-y-6 lg:space-y-6 rounded-3xl">
        <Member size="h-36 md:h-64 lg:h-64" bgImage="hill" />
        <Member size="h-40 md:h-72 lg:h-74" bgImage="dedan" />
      </div>
    </div>
  </div>
);
