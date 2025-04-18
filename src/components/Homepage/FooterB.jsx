import React from "react";

const FooterB = (Props) => {
  return (
    <button className="border rounded-r-full rounded-l-full px-6 max-sm:px-3 py-1.5 text-lg max-lg:text-base max-sm:text-xs cursor-pointer">
      {Props.text}
    </button>
  );
};

export default FooterB;
