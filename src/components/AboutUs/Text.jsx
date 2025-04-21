import { useTranslation } from "react-i18next";

const Text = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="flex flex-col items-center justify-center mt-30">
      <h2 className="text-7xl max-lg:text-5xl max-sm:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
        {t("Our Mission")}
      </h2>
      <h4 className="text-5xl max-lg:text-3xl max-sm:text-2xl max-lg:mt-10 max-lg:max-w-[300px] max-w-[614px] mt-20 text-center">
        {t("Transforming Visions into Digital Reality")}
      </h4>
    </div>
  );
};

export default Text;
