import Grid2 from "./Grid2";

const EcommerceCom = () => {
  return (
    <div className="w-10/12 mx-auto mt-32">
      <h2 className="text-7xl max-md:text-5xl max-sm:text-3xl text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50]">
        E-Commerce Marketing
      </h2>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
        <Grid2
          name="Basic Package"
          num="$999"
          space="mt-32 flex items-center justify-between"
          features={[
            {
              text: "Basic online store setup",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Up to 20 products",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Standard payment integration",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
        <Grid2
          name="Plus Package"
          num="$1999"
          space="mt-18 flex items-center justify-between"
          features={[
            {
              text: "Advanced Store setup",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Up to 50 products",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Advanced payment integration",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Product optimization",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },

            {
              text: "Application setup",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
        <Grid2
          name="Pro Package"
          num="$2999"
          space="mt-20 flex items-center justify-between"
          features={[
            {
              text: "Full store setup",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Unlimited products",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Custom payment integration",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Advanced product optimization",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Advanced application setup",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
      </div>

      <div className="flex items-center justify-center bg-[#d31f1f] *:cursor-pointer w-fit mx-auto mt-5 px-10 py-2 rounded-full cursor-pointer">
        <img src="/arrow-right.png" alt="arrow" className="mr-3" />
        <button>Most Ordered</button>
      </div>
    </div>
  );
};

export default EcommerceCom;
