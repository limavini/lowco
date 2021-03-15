interface Props {
  textColor?: string;
  width?: string;
}

export const Input: React.FC<Props> = ({
  textColor = "text-gray-3",
  width = "md:w-3/4 lg:w-2/4",
}) => (
  <div className={`${width}`}>
    <span
      className={`${textColor} pb-1 md:pb-2 lg:pb-2 block`}
      style={{ fontSize: 10 }}
    >
      Want us to contact you?
    </span>
    <div className="bg-gray-6 rounded-xl pr-1 py-1 pl-5 flex items-center justify-between h-12">
      <input
        type="text"
        className="bg-transparent w-2/3 placeholder-gray-4"
        placeholder="Email"
      />
      <button className="bg-blue text-white px-5 py-2 rounded-xl">Join</button>
    </div>
  </div>
);
