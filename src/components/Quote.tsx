export const Quote: React.FC = () => (
  <div className="mx-2 md:px-20 lg:px-40 mb-28">
    <p className="text-gray-1 text-2xl md:text-4xl lg:text-4xl leading-relaxed  lg:w-3/4">
      “Fast and outstanding results. Low.co understands their customer’s needs.
      They have a young and talented team.”
    </p>

    <div className="grid grid-cols-4 md:grid-cols-9 lg:grid-cols-10 gap-x-10 pt-7 md:pt-9 lg:pt-9">
      <div
        className="h-16 md:h-28 lg:h-28 md:col-span-2 lg:col-span-1 rounded-lg bg-cover bg-top"
        style={{ backgroundImage: `url(/assets/dellon.jpg)` }}
      ></div>
      <div className="col-span-3 md:col-span-6 lg:col-span-9">
        <p className="text-gray-1 text-xl2 pb-2">Carlos Tran</p>
        <span className="text-gray-3 text-lg">The Decorate Gatsby</span>
      </div>
    </div>
  </div>
);
