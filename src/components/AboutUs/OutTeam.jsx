import { useTranslation } from "react-i18next";

const OutTeam = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="flex flex-col items-center mt-20 w-11/12 mx-auto">
      <h2 className="text-7xl max-sm:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
        {t("Our Team")}
      </h2>
      <p className="text-[#Afafaf] max-sm:text-xs text-sm mt-10 max-w-[800px] text-center">
        {t(
          "Our team is a skilled group of professionals, combining creativity and expertise in design, development, and marketing to deliver impactful, tailored solutions for our clients."
        )}
      </p>

      <div className="w-9/12 max-sm:w-11/12 mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-6 max-sm:gap-0 mt-20 *:w-[90%] *:max-sm:w-full">
        <img
          src="/Omar Ghalib.png"
          alt=""
          className="border rounded-2xl mt-10"
        />

        <img
          src="/Huseyin ALOBAIED.png"
          alt=""
          className="border rounded-2xl mt-10"
        />
        <img
          src="/Mohammed Yabrak.png"
          alt=""
          className="border rounded-2xl mt-10"
        />
        <img
          src="/MANHAL Suliman.png"
          alt=""
          className="border rounded-2xl mt-10"
        />
        <img
          src="/Muhammed AlHamad.png"
          alt=""
          className="border rounded-2xl mt-10"
        />
        <img
          src="/Khalil AlFawaz.png"
          alt=""
          className="border rounded-2xl mt-10"
        />
      </div>
    </div>
  );
};

export default OutTeam;
