import { Create, Code, StorageRounded } from "@material-ui/icons";
import { Card } from "./Card";

export const Services: React.FC = () => (
  <>
    <h2 className="text-2xl md:text-4xl lg:text-4xl px-10 md:px-20 lg:px-40 pb-8 md:pb-9 lg:pb-9 text-gray-1 mb-11 md:w-3/4 lg:w-2/4">
      We offer high demand services
    </h2>

    <div className="px-4 md:px-20 lg:px-40 pb-24 md:pb-48 lg:pb-48 grid grid-cols-1 gap-y-2 md:grid-cols-1 lg:grid-cols-3 md:gap-10 lg:gap-10">
      <Card bgColor="bg-blue" title="UI/UX Design" icon={Create} disabled />
      <Card bgColor="bg-green" title="Front end" icon={Code} />
      <Card bgColor="bg-red" title="Back end" icon={StorageRounded} disabled />
    </div>
  </>
);
