import { useTranslation } from "react-i18next";
import Grid2 from "./Grid2";

const EcommerceCom = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="w-10/12 max-w-[1920px] mx-auto mt-32">
      <h2 className="text-7xl max-md:text-5xl max-sm:text-3xl text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
        {t("E-Commerce Marketing")}
      </h2>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
        <Grid2
          name={t("Basic Package")}
          num="$999"
          space="mt-32 flex items-center justify-between"
          features={[
            {
              text: t("Basic online store setup"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Up to 20 products"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Standard payment integration"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
        <Grid2
          name={t("Plus Package")}
          num="$1999"
          space="mt-18 flex items-center justify-between"
          features={[
            {
              text: t("Advanced Store setup"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Up to 50 products"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Advanced payment integration"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Product optimization"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },

            {
              text: t("Application setup"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
        <Grid2
          name={t("Pro Package")}
          num="$2999"
          space="mt-20 flex items-center justify-between"
          features={[
            {
              text: t("Full store setup"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Unlimited products"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Custom payment integration"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Advanced product optimization"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Advanced application setup"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
      </div>

      <div className="flex items-center justify-center bg-[#d31f1f] *:cursor-pointer w-fit mx-auto mt-5 px-10 py-2 rounded-full cursor-pointer">
        <img src="/arrow-right.png" alt="arrow" className="mr-3" />
        <button>{t("Most Ordered")}</button>
      </div>
    </div>
  );
};

export default EcommerceCom;
