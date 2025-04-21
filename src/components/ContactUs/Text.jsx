const Text = ({ title, p }) => {
  return (
    <>
      <h2 className="text-8xl max-md:text-7xl text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
        {title}
      </h2>
      <p className="max-w-[500px] text-lg max-md:text-sm text-center text-[#afafaf] mt-10 mb-20 max-sm:text-xs">
        {p}
      </p>
    </>
  );
};

export default Text;
