import React from "react";
import FooterB from "./FooterB";

const Rafeka = () => {
  return (
    <div className="flex flex-col items-center mt-20 pb-32 overflow-x-hidden">
      <h2 className="text-8xl max-lg:text-5xl max-sm:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50]">
        Rafeka Agency
      </h2>

      <div className=" flex mt-10 gap-3  px-4 flex-wrap">
        <FooterB text="facebook" />
        <FooterB text="instagram" />
        <FooterB text="Linkedin" />
        <FooterB text="Behance" />
      </div>

      <p className="mt-40 relative">Copyright © 2024 Rafeka Agency</p>
    </div>
  );
};

export default Rafeka;
