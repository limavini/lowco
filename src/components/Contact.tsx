import { Input } from "./Input";

export const Contact: React.FC = () => (
  <div className="px-10 mb-24 md:mb-48 lg:mb-48 md:px-36 lg:px-72">
    <h2 className="text-2xl pb-8 text-gray-1  md:text-5xl lg:text-5xl  md:w-3/4 lg:w-2/4 md:leading-normal lg:leading-normal">
      Story, emotion and purpose
    </h2>

    <p className="text-gray-2 font-normal text-xs md:text-lg lg:text-lg leading-5 pb-8 md:pb-10 lg:pb-10 lg:w-2/4 md:w-3/4">
      We help transform your ideas into real world applications that will
      outperform your toughest competition and help you achieve your strategic
      goals in short period of time.
    </p>

    <Input />
  </div>
);
