import { useTranslation } from "react-i18next";

const FeaturedCom = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="flex flex-col items-center mt-50 max-lg:hidden">
      <h2 className="text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
        {t("Featured Projects")}
      </h2>
      <p className="text-[#afafaf] max-w-[630px] text-center mt-10 text-sm">
        {t(
          "Explore our recent work that showcases our expertise across a variety ofindustries. From web development to digital marketing and social mediamanagement, we deliver customized solutions that drive results andelevate brands"
        )}
      </p>
      <button className="px-8 py-1 border border-red-500 rounded-md mt-10">
        {t("See All")}
      </button>
    </div>
  );
};

export default FeaturedCom;
