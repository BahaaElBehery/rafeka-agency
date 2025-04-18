import React from "react";

const FeaturedCom = () => {
  return (
    <div className="flex flex-col items-center mt-50 max-lg:hidden">
      <h2 className="text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50]">
        Featured Projects
      </h2>
      <p className="text-[#afafaf] max-w-[630px] text-center mt-10 text-sm">
        Explore our recent work that showcases our expertise across a variety of
        industries. From web development to digital marketing and social media
        management, we deliver customized solutions that drive results and
        elevate brands
      </p>
      <button className="px-8 py-1 border border-red-500 rounded-md mt-10">
        See All
      </button>
    </div>
  );
};

export default FeaturedCom;
