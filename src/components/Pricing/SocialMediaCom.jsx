import { useTranslation } from "react-i18next";
import Grid2 from "./Grid2";

const SocialMediaCom = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="w-10/12 mx-auto mt-32">
      <h2 className="text-7xl max-md:text-5xl max-sm:text-3xl text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
        {t("Social Media Marketing")}
      </h2>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
        <Grid2
          name={t("Basic Package")}
          num="$499"
          month={t("/month")}
          space="mt-32 flex items-center justify-between"
          features={[
            {
              text: t("10 posts/month"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Basic account management"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Monthly analytics report"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
        <Grid2
          name={t("Plus Package")}
          num="$600"
          month={t("/month")}
          space="mt-24 flex items-center justify-between"
          features={[
            {
              text: t("20 posts/month"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Account management"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Monthly analytics"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Targeted ad campaign setup"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
        <Grid2
          name={t("Pro Package")}
          num="$999"
          month={t("/month")}
          space="mt-20 flex items-center justify-between"
          features={[
            {
              text: t("30+ posts/month"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Full account management"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Analytics report"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Ad campaigns"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Priority Support"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
      </div>

      <div className="flex items-center justify-center *:cursor-pointer bg-[#d31f1f] w-fit mx-auto mt-5 px-10 py-2 rounded-full cursor-pointer">
        <img src="/arrow-right.png" alt="arrow" className="mr-3" />
        <button>{t("Most Ordered")}</button>
      </div>
    </div>
  );
};

export default SocialMediaCom;
