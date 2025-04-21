import { useTranslation } from "react-i18next";

const WhyCo = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="flex flex-col items-center mt-30">
      <h3 className="text-8xl max-lg:text-6xl max-sm:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
        {t("Why Choose Us")}
      </h3>
      <h4 className="text-[50px] max-lg:text-xl max-sm:text-sm mt-10 text-center max-w-[615px]">
        {t("Your Trusted Partner in Digital Success")}
      </h4>
    </div>
  );
};

export default WhyCo;
