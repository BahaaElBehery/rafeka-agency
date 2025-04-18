const OutTeam = () => {
  return (
    <div className="flex flex-col items-center mt-20 w-11/12 mx-auto">
      <h2 className="text-7xl max-sm:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50]">
        Our Team
      </h2>
      <p className="text-[#Afafaf] max-sm:text-xs text-sm mt-10 max-w-[800px] text-center">
        Our team is a skilled group of professionals, combining creativity and
        expertise in design, development, and marketing to deliver impactful,
        tailored solutions for our clients.
      </p>

      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 mt-20 ">
        <div className="col-span-2 max-lg:col-span-1 border flex items-end justify-center rounded-2xl">
          <img src="/OG-1.png" alt="" />
        </div>
        <img src="/II-1.png" alt="" className="border rounded-2xl mt-10" />
        <img src="/FM.png" alt="" className="border rounded-2xl mt-10" />
        <img src="/MH-1.png" alt="" className="border rounded-2xl mt-10" />
        <img src="/MA-1.png" alt="" className="border rounded-2xl mt-10" />
      </div>
    </div>
  );
};

export default OutTeam;
