const TestmonialSec = (Props) => {
  return (
    <div className="mt-30 max-lg:mt-0">
      <div className="flex items-center justify-between">
        <img src="/Vector.svg" alt="" />
        <div className="flex items-center">
          <img src="/Star-3.png" alt="" className="mr-2" />
          <p className="text-xs text-[#AFAFAF]">{`(4.8/5)`}</p>
        </div>
      </div>

      <h3 className="text-3xl max-lg:text-xl max-sm:text-base max-w-[500px]  mt-10">
        {Props.title}
      </h3>

      <div className="flex items-center justify-between mt-10">
        <div className="flex flex-col">
          <h3 className="text-lg">{Props.name}</h3>
          <p className="text-[#afafaf] text-sm mt-4">CEO</p>
        </div>

        <img src="/image-14.png" alt="" className="rounded-full" />
      </div>
    </div>
  );
};

export default TestmonialSec;
