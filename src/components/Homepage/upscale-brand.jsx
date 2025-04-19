const upscaleBrand = () => {
  return (
    <div className="mt-36  flex flex-col items-center relative">
      <h2 className="text-8xl max-sm:text-3xl max-lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50]">
        Upscale Your Brand
      </h2>
      <p className="text-[#AFAFAF] mt-10 text-center text-lg max-lg:hidden">
        At Rafeka we craft innovative and compelling advertising strategies that{" "}
        <br /> elevate your brand to new heights
      </p>
      <button className="px-8 py-2 bg-[#EF4444] max-lg:bg-transparent max-lg:border max-lg:border-red-500 font-bold rounded-md ml-5 cursor-pointer mt-10">
        Contact Us
      </button>
      <img
        src="/3333-1.png"
        alt=""
        className="hidden max-lg:block mt-20 w-full"
        height={`300px`}
      />
      <img src="/Header.png" alt="" className="absolute -top-80 left-0 -z-50" />
    </div>
  );
};

export default upscaleBrand;
