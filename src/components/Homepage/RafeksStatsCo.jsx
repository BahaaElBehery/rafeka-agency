const RafeksStatsCo = (Props) => {
  return (
    <div className="flex flex-col items-center justify-evenly px-8 py-8 border rounded-2xl max-lg:w-fit">
      <h3 className=" text-5xl max-sm:text-3xl text-center">
        <span>{Props.num}</span>
        <span className="text-red-500">+</span>
      </h3>
      <h2 className="mt-5 text-3xl max-sm:text-xl">{Props.title}</h2>
      <p className="mt-5 text-sm text-[#afafaf] max-sm:text-xs">{Props.p}</p>
    </div>
  );
};

export default RafeksStatsCo;
