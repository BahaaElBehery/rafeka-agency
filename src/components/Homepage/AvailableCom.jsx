import React from "react";

const AvailableCom = (Props) => {
  return (
    <div className="w-11/12 mx-auto flex flex-col items-center justify-evenly mt-50 max-lg:mt-20 border p-5 rounded-2xl">
      <div className="flex items-center justify-center">
        <span className="w-5 h-[5px] bg-red-500 rounded-r-full rounded-l-full mt-2"></span>
        <h2 className="text-2xl mx-3 max-sm:text-xs">{Props.one}</h2>
        <span className="w-5 h-[5px] bg-red-500 rounded-r-full rounded-l-full mt-2"></span>
      </div>

      <h2 className={Props.edit}>{Props.two}</h2>

      <p className="text-[#afafaf] mt-10 max-w-2xl text-center max-lg:text-sm">
        {Props.three}
      </p>

      <button className={Props.four}>{Props.five}</button>
    </div>
  );
};

export default AvailableCom;
