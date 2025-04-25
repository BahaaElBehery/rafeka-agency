import { useTranslation } from "react-i18next";
import DevelopMentSec from "./DevelopMentSec";

const DevelopmentCo = (Props) => {
  const { t } = useTranslation(`translation`);
  return (
    <>
      <div
        className="mx-auto flex flex-col items-center mt-36 max-w-[1920px]"
        dir="ltr"
      >
        <h2 className="text-7xl max-sm:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
          {Props.tit}
        </h2>
        <button className={Props.css}>{t("See All")} </button>
      </div>
      <DevelopMentSec
        className1="w-10/12 mx-auto flex items-center max-w-[1920px] justify-between max-lg:justify-center mt-10 max-w-[1920px]"
        text={t("Web Development")}
        number="(001)"
        edit2="text-5xl max-lg:text-3xl max-sm:text-sm"
      />
      <DevelopMentSec
        className1="w-10/12 mx-auto flex items-center max-w-[1920px] justify-between max-lg:justify-center flex-row-reverse mt-10 max-lg:mt-0"
        text={t("Digital Marketing")}
        number="(002)"
        edit2="text-5xl max-lg:text-3xl max-sm:text-sm"
      />
      <DevelopMentSec
        className1="w-10/12 mx-auto flex items-center max-w-[1920px] justify-between mt-10 max-lg:justify-center max-lg:mt-0"
        text={t("Brand Design & Development")}
        number="(003)"
        edit2="text-5xl max-lg:text-3xl max-sm:text-sm"
      />
      <DevelopMentSec
        className1="w-10/12 mx-auto flex items-center max-w-[1920px] justify-between mt-10 flex-row-reverse max-lg:justify-center max-lg:mt-0"
        text={t("Social Media Management")}
        number="(004)"
        edit2="text-5xl max-lg:text-3xl max-sm:text-sm"
      />
    </>
  );
};

export default DevelopmentCo;
