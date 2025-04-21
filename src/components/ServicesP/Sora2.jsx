const Sora2 = (Props) => {
  return (
    <div className="relative bg-[url('/Line-BG.png')] h-[490px]   flex items-center justify-center">
      <h2 className="text-8xl max-sm:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
        {Props.S}
      </h2>
      <img src="/Header.png" alt="" className="absolute -top-80 left-0 -z-50" />
    </div>
  );
};

export default Sora2;
