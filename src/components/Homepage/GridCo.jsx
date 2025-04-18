import React from "react";

const GridCo = (Props) => {
  return (
    <div className="border rounded-2xl flex flex-col items-center justify-evenly py-10 px-5 relative mt-10">
      <h6 className="text-xl font-medium mt-5">{Props.text}</h6>
      <p className="text-center mt-5">{Props.Pa}</p>

      <span className="absolute -top-10 right-1/2 translate-x-1/2 bg-red-600 flex items-center justify-center text-5xl font-extrabold w-20 h-20 rounded-full">
        {Props.num}
      </span>
    </div>
  );
};

export default GridCo;
