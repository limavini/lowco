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
  <div>
    <div
      className={`mb-3 rounded-3xl h-80 md:h-145 lg:h-136 bg-${bgColor} bg-opacity-50 overflow-hidden`}
    >
      <div
        className="h-96 md:h-175 lg:h-175 transform -rotate-12 bg-center bg-cover"
        style={{ backgroundImage: `url(/assets/${bgImage}.webp)` }}
      />
    </div>
    <span className="text-gray-3 font-light text-xs md:text-sm lg:text-sm">
      {category}
    </span>
    <p className="text-gray-1 text-lg md:text-2xl lg:text-2xl">{title}</p>
  </div>
);
