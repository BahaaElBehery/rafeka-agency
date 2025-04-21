import { useTranslation } from "react-i18next";
import Grid2 from "./Grid2";

const WebDevelopment = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="w-10/12 mx-auto mt-32">
      <h2 className="text-7xl max-md:text-5xl max-sm:text-3xl text-center font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
        {t("Web Development")}
      </h2>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
        <Grid2
          name={t("Single-page website")}
          num="$749"
          space="mt-36 flex items-center justify-between"
          features={[
            {
              text: t("Single-page website"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Mobile responsive design"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Basic SEO setup"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
        <Grid2
          name={t("Plus Package")}
          num="$1499"
          space="mt-38 flex items-center justify-between"
          features={[
            {
              text: t("Multi-page website"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Mobile optimization"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Enhanced SEO"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Basic e-commerce functionality"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
        <Grid2
          name={t("Pro Package")}
          num="$2999"
          space="mt-30 flex items-center justify-between"
          features={[
            {
              text: t("Full-featured website"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Custom design"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Advanced SEO"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("E-commerce integration"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
            {
              text: t("Ongoing support"),
              dotClass: "w-2 h-2 bg-red-500 rounded-full",
            },
          ]}
        />
      </div>

      <div className="flex items-center justify-center bg-[#d31f1f] w-fit mx-auto mt-5 px-10 py-2 rounded-full cursor-pointer *:cursor-pointer">
        <img src="/arrow-right.png" alt="arrow" className="mr-3" />
        <button>{t("Most Ordered")}</button>
      </div>
    </div>
  );
};

export default WebDevelopment;
