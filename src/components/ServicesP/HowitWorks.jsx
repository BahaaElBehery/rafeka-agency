import One from "./One";

const HowitWorks = () => {
  return (
    <div className="flex flex-col w-11/12 mx-auto">
      <div className="flex items-center max-lg:justify-center max-lg:mt-10">
        <span className="w-5 rounded-r-full rounded-l-full h-[5px] bg-red-500"></span>
        <h3 className="ml-3">How it Works</h3>
      </div>

      <h3 className="text-5xl max-w-[560px] max-lg:max-w-full max-lg:px-5 max-lg:text-3xl mt-10 max-lg:text-center">
        How Rafeka Agency Works: A Step-by-Step Guide
      </h3>

      <One
        flip="flex max-lg:flex-col max-lg:items-center max-lg:gap-5"
        num="1"
        continue="St"
        title="Consultation and Strategy"
        Pa="We begin by understanding your business and goals to develop a
        customized digital marketing strategy"
        img="/Line-1.png"
        appear="hidden"
      />

      <One
        flip="flex order-2 max-lg:flex-col max-lg:items-center max-lg:gap-5"
        num="2"
        continue="nd"
        title="Development"
        Pa="We begin by understanding your business and goals to develop a customized digital marketing strategy"
        img="/Line-2.png"
        appear="hidden"
      />

      <One
        flip="flex max-lg:flex-col max-lg:items-center max-lg:gap-5"
        num="3"
        continue="rd"
        title="Monitoring and Optimization"
        Pa="We continuously track performance, optimize campaigns based on data insights, and provide regular progress reports"
        img="/Line-2.png"
        hide="hidden"
        appear="bg-red-500 px-5 py-2 rounded-2xl cursor-pointer"
      />
    </div>
  );
};

export default HowitWorks;
