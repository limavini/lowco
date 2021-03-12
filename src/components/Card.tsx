import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon/SvgIcon";

interface Props {
  bgColor: string;
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  disabled?: boolean;
}

export const Card: React.FC<Props> = ({
  bgColor,
  title,
  icon: Icon,
  disabled,
}) => {
  const buttonClasses = disabled
    ? "bg-gray-5 text-gray-3"
    : "bg-blue text-white";
  return (
    <div className="px-8 pt-12 pb-11 rounded-3xl">
      <div className={`bg-${bgColor} p-5 rounded-2xl inline-block`}>
        <Icon
          className="fill-current text-white"
          style={{ fontSize: "235%" }}
        />
      </div>

      <strong className="text-2xl block text-bold text-gray-1 pt-9 pb-6">
        {title}
      </strong>

      <p className="mb-8 text-gray-2 text-base font-normal leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac
        nulla consequat aliquet id quis turpis.
      </p>

      <button {...disabled} className={`rounded-xl py-2 px-3 ${buttonClasses}`}>
        Get started
      </button>
    </div>
  );
};
