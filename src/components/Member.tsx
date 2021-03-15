interface Props {
  size: string;
  bgImage: string;
}

export const Member: React.FC<Props> = ({ size, bgImage }) => (
  <div
    className={`${size} rounded-3xl bg-cover bg-center`}
    style={{ backgroundImage: `url(/assets/${bgImage}.jpg)` }}
  ></div>
);
