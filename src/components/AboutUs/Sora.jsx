const Sora = () => {
  return (
    <div
      className="relative w-full h-[80vh] max-lg:h-[400px] bg-[url('/masterminds-1.png')] bg-no-repeat max-lg:bg-contain"
      style={{ backgroundPosition: "bottom center" }}
    >
      <img
        src="/Line-BG.png"
        alt=""
        className="w-full h-full py-10 relative -z-50 max-lg:hidden"
      />
      {/* Centered Text */}
      <h2 className="absolute inset-0 max-md:text-5xl flex items-start mt-10 justify-center text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50] z-50">
        About Us
      </h2>
      <img src="/Header.png" alt="" className="absolute -top-60 left-0 -z-50" />
    </div>
  );
};

export default Sora;
