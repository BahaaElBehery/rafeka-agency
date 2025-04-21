const One = (Props) => {
  return (
    <div
      className="flex max-lg:flex-col max-lg:justify-center justify-around mt-20 mr-5"
      dir="ltr"
    >
      <div className={Props.flip}>
        <h1 className="text-5xl max-lg:text-red-500">
          <span className="text-8xl">{Props.num}</span>
          <span>{Props.continue}</span>
        </h1>
        <div className="flex flex-col justify-center ml-10">
          <h1 className="text-5xl max-lg:text-center max-sm:text-3xl">
            {Props.title}
          </h1>
          <p className="text-xs mt-5 text-[#afafaf] max-lg:text-center">
            {Props.Pa}
          </p>
        </div>
      </div>
      <div className={Props.hide}>
        <img src={Props.img} alt="" className="mt-10 ml-20 max-lg:hidden" />
      </div>

      <div className="flex items-center justify-center max-lg:mt-10 max-lg:ml-10">
        <button className={Props.appear}>Get Started</button>
      </div>
    </div>
  );
};

export default One;
