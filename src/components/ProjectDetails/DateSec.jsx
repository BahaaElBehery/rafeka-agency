import { useTranslation } from "react-i18next";
import TransformCom from "./TransformCom";

const DateSec = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className=" mx-auto mt-20 flex items-center justify-around">
      <div className="flex flex-col">
        <h2 className="text-3xl max-w-[750px] max-lg:text-center max-lg:px-5 max-lg:text-2xl max-sm:text-xl">
          {t(
            "Transforming Rare Water's Online Presence through Strategic Social Media Campaigns"
          )}
        </h2>

        <p className="text-[#afafaf] max-w-[750px] mt-10 text-sm max-lg:text-center max-lg:px-5 max-lg:text-xs">
          {t(
            "At PageBuzz, we collaborated closely with FreshEats to develop and execute a powerful social media campaign. Our goal was to enhance brand awareness, increase engagement, and drive conversions for their healthy food delivery service."
          )}
        </p>
      </div>

      <div className="flex flex-col max-lg:hidden">
        <TransformCom title={t("Client")} parag="Rare Water" />
        <TransformCom title={t("Date")} parag={t("23 August 2024")} />
        <TransformCom
          title={t("Services")}
          parag={t("Social Media Management")}
        />
      </div>
    </div>
  );
};

export default DateSec;
