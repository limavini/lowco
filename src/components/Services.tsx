import { Create, Code, StorageRounded } from "@material-ui/icons";
import { Card } from "./Card";

export const Services: React.FC = () => (
  <>
    <h2 className="text-2xl px-10 pb-8 text-gray-1 mb-11">
      We offer high demand services
    </h2>

    <div className="px-4 pb-24 grid grid-cols-1 gap-y-2 md:grid-cols-3 lg:grid-cols-3 md:gap-10 lg:gap-10">
      <Card bgColor="blue" title="UI/UX Design" icon={Create} disabled />
      <Card bgColor="green" title="Front end" icon={Code} />
      <Card bgColor="red" title="Back end" icon={StorageRounded} disabled />
    </div>
  </>
);
