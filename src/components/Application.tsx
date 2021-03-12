interface Props {
  bgImage: string;
  bgColor: string;
  category: string;
  title: string;
}

export const Application: React.FC<Props> = ({
  bgImage,
  bgColor,
  category,
  title,
}) => (
  <div className="mx-2">
    <div
      className={`mb-3 rounded-3xl h-80 bg-${bgColor} bg-opacity-50 overflow-hidden`}
    >
      <div
        className="h-96 transform -rotate-12 bg-center bg-cover"
        style={{ backgroundImage: `url(/assets/${bgImage}.jpg)` }}
      />
    </div>
    <span className="text-gray-3 font-light text-xs">{category}</span>
    <p className="text-gray-1 text-lg">{title}</p>
  </div>
);
