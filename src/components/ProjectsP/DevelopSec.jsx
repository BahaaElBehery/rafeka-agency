import { useTranslation } from "react-i18next";
import DevelopCom from "./DevelopCom";

const DevelopSec = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="w-11/12 mx-auto mt-20 max-w-[1920px]">
      <div className="flex flex-col items-center max-lg:hidden">
        <h2 className="text-8xl max-sm:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
          {t("Category")}
        </h2>
        <p className="text-sm mt-10 text-[#afafaf] max-w-[800px] text-center">
          {t(
            "Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id cursus id blandit. Consectetur maecenas id vivamus integer integer aliquam. Donec amet rhoncus ut turpis massa augue faucibus."
          )}
        </p>
      </div>

      <div className="hidden max-lg:flex items-center justify-center">
        <h3 className="text-3xl max-sm:text-xl text-center px-20 max-sm:px-5">
          {t(
            "We provide Web Development, Digital Marketing, SEO Optimization, and Social Media Management to enhance your brand's online presence and engagement."
          )}
        </h3>
      </div>

      <div className="grid grid-cols-2 max-w-[1920px] max-lg:grid-cols-1 gap-10 mt-20">
        <DevelopCom img="/image-30.png" title={t("Website Development")} />
        <DevelopCom img="/image-32.png" title={t("Digital Marketing")} />
        <DevelopCom img="/image-31.png" title={t("SEO Optimization")} />
        <DevelopCom
          img="/image-34.png"
          title={t("Brand Design & Devolopment")}
        />
      </div>
    </div>
  );
};

export default DevelopSec;
