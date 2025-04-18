const Succespart = (Props) => {
  return (
    <div className="w-full mt-20 flex max-lg:flex-col items-center justify-between max-lg:gap-10">
      <div className="flex items-center max-lg:flex-col max-lg:gap-5">
        <span className="text-sm text-[#afafaf]">{Props.num}</span>
        <h3 className="text-4xl ml-5 max-sm:text-2xl">{Props.title}</h3>
      </div>

      <button className="px-8 py-2 border max-sm:text-sm max-sm:px-5 border-red-500 rounded-xl cursor-pointer">
        {Props.button}
      </button>
    </div>
  );
};

export default Succespart;
