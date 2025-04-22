import { useState } from "react";

const HowCom = ({ title, p }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <div
        className={`w-[80%] max-md:w-full max-w-[1920px] flex items-center justify-between px-5 border mt-5 py-2 rounded-full cursor-pointer ${
          visibility ? "border-red-500" : "border-gray-500"
        }`}
        onClick={() => setVisibility(!visibility)}
      >
        <h3 className="text-xl flex-1 max-lg:text-base max-sm:text-sm cursor-default max-sm:pr-10">
          {title}
        </h3>
        <div className="bg-white w-10 h-10  rounded-full flex items-center justify-center cursor-pointer">
          <img
            src="/Vector.png"
            alt=""
            className={`${visibility ? "hidden" : "flex"}`}
          />
          <img
            src="/Vector-play.png"
            alt=""
            className={`${visibility ? "flex" : "hidden"}`}
          />
        </div>
      </div>

      {visibility && (
        <p className="text-sm max-sm:text-xs text-[#afafaf] py-10 max-w-[78%] ">
          {p}
        </p>
      )}
    </>
  );
};

export default HowCom;
