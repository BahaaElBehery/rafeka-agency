import Grid2 from "./Grid2";

const WebDevelopment = () => {
  return (
    <div className="w-10/12 mx-auto mt-32">
      <h2 className="text-7xl max-md:text-5xl max-sm:text-3xl text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50]">
        Web Development
      </h2>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
        <Grid2
          name="Single-page website"
          num="$749"
          space="mt-31 flex items-center justify-between"
          features={[
            {
              text: "Single-page website",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Mobile responsive design",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Basic SEO setup",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
        <Grid2
          name="Plus Package"
          num="$1499"
          space="mt-24 flex items-center justify-between"
          features={[
            {
              text: "Multi-page website",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Mobile optimization",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Enhanced SEO",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Basic e-commerce functionality",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
        <Grid2
          name="Pro Package"
          num="$2999"
          space="mt-18 flex items-center justify-between"
          features={[
            {
              text: "Full-featured website",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Custom design",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Advanced SEO",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "E-commerce integration",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: "Ongoing support",
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
      </div>

      <div className="flex items-center justify-center bg-[#d31f1f] w-fit mx-auto mt-5 px-10 py-2 rounded-full cursor-pointer *:cursor-pointer">
        <img src="/arrow-right.png" alt="arrow" className="mr-3" />
        <button>Most Ordered</button>
      </div>
    </div>
  );
};

export default WebDevelopment;
