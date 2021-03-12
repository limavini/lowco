import { Create } from "@material-ui/icons";

export const Card: React.FC = () => (
  <div className="px-8 pt-12 pb-11 rounded-3xl bg-red-300">
    <div className="bg-blue p-5 rounded-2xl inline-block">
      <Create
        className="fill-current text-white"
        style={{ fontSize: "200%" }}
      />
    </div>

    <h2 className="text-2xl text-gray-1 pt-9 pb-6">UI/UX Design</h2>

    <p className="mb-8 text-gray-2 text-base font-normal leading-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac
      nulla consequat aliquet id quis turpis.
    </p>

    <button className="rounded-xl bg-gray-5 py-2 px-3 text-gray-3">
      Get started
    </button>
  </div>
);
