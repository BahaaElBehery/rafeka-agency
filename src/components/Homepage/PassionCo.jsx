import { useTranslation } from "react-i18next";

const PassionCo = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8 w-9/12 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center mx-auto mt-36">
      <div className="w-fit border border-white rounded-md">
        <img
          src="/rafeka-about-img.jpeg"
          alt=""
          className="rounded-md"
          width={`520px`}
          height={`520px`}
        />
      </div>
      <div className=" flex flex-col">
        <div className="flex items-center  max-lg:justify-center">
          <span className="w-7 h-[5px] rounded-r-md rounded-l-md bg-[#EF4444]"></span>
          <p className="ms-3 text-lg">{t("About Us")}</p>
        </div>
        <h3 className="text-5xl mt-8 font-medium max-lg:text-center max-sm:text-4xl">
          {t("Passion for Digital Transformation")}
        </h3>
        <p className="text-[#71717a] text-lg mt-8 max-lg:text-center">
          {t(
            "We will help you grow by investing in design and artistic creativity in the right way for your benefit"
          )}
        </p>
      </div>
    </div>
  );
};

export default PassionCo;
