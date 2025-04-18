import React from "react";
import { Link } from "react-router";
const Header = () => {
  return (
    <div className="w-11/12 max-lg:justify-between max-lg:px-8  mx-auto flex items-center justify-around py-10 z-50">
      <div className="">
        <Link to={`/`}>
          <img src="/w 1.png" alt="" className="max-lg:hidden" />
        </Link>
        <Link to={`/`}>
          <img src="/W-1-(1).png" alt="" className="hidden max-lg:flex" />
        </Link>
      </div>

      <div className="flex items-center max-lg:hidden">
        <Link className="mr-5" to={`/`}>
          Home
        </Link>
        <Link className="mr-5" to={`/about-us`}>
          About
        </Link>
        <Link className="mr-5" to={`/services`}>
          Services
        </Link>
        <Link className="mr-5" to={`/projects`}>
          Projects
        </Link>
        <Link className="mr-5" to={`/pricing`}>
          Pricing
        </Link>
        <Link className="mr-5" to={`/contact-us`}>
          Contact
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-globe cursor-pointer"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <Link to={`/help-center`}>
          <button className="px-8 py-2 bg-[#EF4444] font-bold rounded-md ml-3 cursor-pointer max-lg:hidden">
            Contact Us
          </button>
        </Link>

        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-5 hidden max-lg:flex"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
