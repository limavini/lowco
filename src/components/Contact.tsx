export const Contact: React.FC = () => (
  <div className="px-10 mb-24">
    <h2 className="text-2xl pb-8 text-gray-1">Story, emotion and purpose</h2>

    <p className="text-gray-2 font-normal text-xs leading-5 pb-8">
      We help transform your ideas into real world applications that will
      outperform your toughest competition and help you achieve your strategic
      goals in short period of time.
    </p>

    <span className="text-gray-3 pb-1" style={{ fontSize: 10 }}>
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
