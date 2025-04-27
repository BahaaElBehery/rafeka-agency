import { useTranslation } from "react-i18next";

const UpscaleBrand = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="mt-36  flex flex-col items-center relative">
      <h2 className="text-8xl  max-sm:text-3xl max-lg:text-5xl max-w-[700px] text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff] px-5">
        {t("Upscale Your Brand")}
      </h2>
      <p className="text-[#AFAFAF] mt-10 text-center text-lg max-lg:hidden">
        {t(
          "At Rafeka we craft innovative and compelling advertising strategies that"
        )}
        <br /> {t("elevate your brand to new heights")}
      </p>
      <button className="px-8 py-2 bg-[#EF4444] max-lg:bg-transparent max-lg:border max-lg:border-red-500 font-bold rounded-md ml-5 cursor-pointer mt-10">
        {t("Contact Us")}
      </button>
      <img
        src="/3333-1.png"
        alt=""
        className="hidden max-lg:block mt-20 w-full"
        height={`300px`}
      />
      <img src="/Header.png" alt="" className="absolute -top-80 left-0 -z-50" />
    </div>
  );
};

export default UpscaleBrand;
