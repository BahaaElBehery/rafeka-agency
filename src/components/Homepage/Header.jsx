import { Link } from "react-router";
import { LocaleSwitcher } from "./LocaleSwitcher";
import HamburgerIcon from "../Icons/HamburgerIcon";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const { t } = useTranslation("translation");

  const [popup, setPopup] = useState(false);

  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopup(false);
      }
    }

    if (popup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popup]);

  return (
    <div
      className="w-11/12 max-lg:justify-between max-lg:px-8 mx-auto flex items-center justify-around py-10 z-50 relative"
      dir="ltr"
    >
      <div className="">
        <Link to={`/`}>
          <img src="/w 1.png" alt="" className="max-lg:hidden" />
        </Link>
        <Link to={`/`}>
          <img src="/W-1-(1).png" alt="" className="hidden max-lg:flex" />
        </Link>
      </div>

      <div dir="auto" className="flex items-center max-lg:hidden">
        <Link className="mr-5" to={`/`}>
          {t("Home")}
        </Link>
        <Link className="mr-5" to={`/about-us`}>
          {t("About Us")}
        </Link>
        <Link className="mr-5" to={`/services`}>
          {t(`Services`)}
        </Link>
        <Link className="mr-5" to={`/projects`}>
          {t(`Projects`)}
        </Link>
        <Link className="mr-5" to={`/pricing`}>
          {t(`Pricing`)}
        </Link>
        <Link className="mr-5" to={`/contact-us`}>
          {t(`Contact`)}
        </Link>
      </div>

      <div className="flex items-center justify-center gap-3 max-lg:gap-0">
        <LocaleSwitcher />
        <Link to="/contact-us">
          <button className="px-8 py-2 bg-[#EF4444] font-bold rounded-md cursor-pointer max-lg:hidden">
            {t(`Contact Us`)}
          </button>
        </Link>
        <div
          onClick={() => {
            setPopup(true);
          }}
        >
          <HamburgerIcon />
        </div>
      </div>

      {popup && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/60 flex items-center justify-end ">
          <div
            className="bg-black/70 z-50 flex flex-col px-8 py-5 h-full text-white w-[300px] max-sm:w-[200px] max-sm:text-base  *:mt-5 *:w-fit"
            ref={popupRef}
            dir="auto"
          >
            <Link className="" to={`/`}>
              {t("Home")}
            </Link>
            <Link className="" to={`/about-us`}>
              {t("About Us")}
            </Link>
            <Link className="" to={`/services`}>
              {t(`Services`)}
            </Link>
            <Link className="" to={`/projects`}>
              {t(`Projects`)}
            </Link>
            <Link className="" to={`/pricing`}>
              {t(`Pricing`)}
            </Link>
            <Link className="" to={`/contact-us`}>
              {t(`Contact`)}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
