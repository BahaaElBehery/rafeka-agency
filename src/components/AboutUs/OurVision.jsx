import { useTranslation } from "react-i18next";

const OurVision = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="mx-auto flex flex-col items-center justify-center mt-20 min-lg:mt-40 max-w-[1920px]">
      <h2 className="text-7xl max-lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
        {t("Our Vision")}
      </h2>
      <div className="w-11/12 mx-auto p-[2px] mt-10 rounded-2xl bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
        <div className="flex items-center justify-center p-10 rounded-2xl bg-black">
          <h3 className="text-[32px] max-lg:text-xl max-sm:text-base text-center text-white">
            {t(
              "To empower businesses worldwide by providing innovative and customized digital solutions that drive growth, foster engagement, and transform their online presence. We strive to be the leading digital agency known for our excellence, creativity, and commitment to client success."
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
