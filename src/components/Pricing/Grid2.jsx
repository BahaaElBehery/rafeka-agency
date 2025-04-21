import Span from "./Span";

const Grid2 = ({ name, num, features, space, month }) => {
  return (
    <div className="flex flex-col border rounded-2xl px-10 py-5 h-fit">
      <h2 className="text-3xl">{name}</h2>
      <div className="mt-10 ">
        {features?.map((item, index) => (
          <Span key={index} p={item.text} span={item.dotClass} />
        ))}
      </div>

      <div className={space}>
        <p className="text-4xl">{num}</p>
        <p className="text-xs text-[#afafaf]">{month}</p>
      </div>

      <button className="text-xl border border-red-500 rounded-xl mt-5 py-1.5 cursor-pointer">
        Get Started
      </button>
    </div>
  );
};

export default Grid2;
