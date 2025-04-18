import RafeksStatsCo from "./RafeksStatsCo";

const RafekaStatsAll = () => {
  return (
    <div className="w-11/12 mx-auto mt-20">
      <h2 className="text-7xl max-sm:text-5xl font-medium mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50] text-center">
        Rafeka Stats
      </h2>
      <div className="flex items-center justify-center flex-wrap  gap-5 mt-10">
        <RafeksStatsCo
          num="500"
          title="Happy Clients"
          p="Number of satisfied clients who have benefited from our services."
        />
        <RafeksStatsCo
          num="700"
          title="Projects Completed"
          p="Total projects successfully delivered across various industries."
        />
      </div>

      <div className="flex items-center justify-center mt-5">
        <RafeksStatsCo
          num="700"
          title="Projects Completed"
          p="Total projects successfully delivered across various industries."
        />
      </div>
    </div>
  );
};

export default RafekaStatsAll;
