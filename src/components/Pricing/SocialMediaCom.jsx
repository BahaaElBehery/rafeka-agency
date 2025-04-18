import Grid2 from "./Grid2";

const SocialMediaCom = () => {
  return (
    <div className="w-10/12 mx-auto mt-32">
      <h2 className="text-7xl max-md:text-5xl max-sm:text-3xl text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50]">
        Social Media Marketing
      </h2>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
        <Grid2
          name="Basic Package"
          num="$499"
          month="/month"
          space="mt-32 flex items-center justify-between"
          features={[
            {
              text: "10 posts/month",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Basic account management",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Monthly analytics report",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
        <Grid2
          name="Plus Package"
          num="$600"
          month="/month"
          space="mt-24 flex items-center justify-between"
          features={[
            {
              text: "20 posts/month",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Account management",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Monthly analytics",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Targeted ad campaign setup",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
        <Grid2
          name="Pro Package"
          num="$999"
          month="/month"
          space="mt-20 flex items-center justify-between"
          features={[
            {
              text: "30+ posts/month",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Full account management",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Analytics report",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Ad campaigns",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Priority Support",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
      </div>

      <div className="flex items-center justify-center *:cursor-pointer bg-[#d31f1f] w-fit mx-auto mt-5 px-10 py-2 rounded-full cursor-pointer">
        <img src="/arrow-right.png" alt="arrow" className="mr-3" />
        <button>Most Ordered</button>
      </div>
    </div>
  );
};

export default SocialMediaCom;
