import Button from "./Button";

const EcommerceCom = (Props) => {
  return (
    <div className=" w-11/12 mx-auto grid grid-cols-3 max-lg:grid-cols-2 gap-2 max-lg:gap-10 mt-20 rtl:flex-row-reverse">
      <div className="col-span-2 max-lg:col-span-full p-3 flex flex-col max-lg:order-2">
        <h2 className="text-4xl max-lg:text-2xl max-lg:text-center">
          {Props.h2}
        </h2>
        <p className="text-[#Afafaf] mt-10 max-lg:text-sm max-lg:text-center">
          {Props.pa}
        </p>
        <div className="flex items-center max-lg:justify-center flex-wrap">
          <Button text={Props.Button1} />
          <Button text={Props.Button2} />
          <Button text={Props.Button3} />
        </div>
        <img
          src="/arrow-right.svg"
          alt=""
          className="mt-20 w-20 max-lg:hidden"
        />

        <button
          className="hidden max-lg:block bg-red-500 rounded-r-full rounded-l-full mt-10 w-fit px-8 py-1.5 mx-auto
        "
        >
          Learn More
        </button>
      </div>
      <div className="flex items-center justify-center max-lg:col-span-full">
        <img src={Props.img} alt="" />
      </div>
    </div>
  );
};

export default EcommerceCom;
