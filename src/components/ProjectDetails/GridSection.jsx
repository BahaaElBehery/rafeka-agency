import { useTranslation } from "react-i18next";
import CampaginSec from "./CampaginSec";

const GridSection = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div
      className="w-10/12 max-w-[1920px] mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-5 mt-20"
      dir="ltr"
    >
      <div className="col-span-2 max-lg:col-span-1">
        <img src="/Image-66.png" alt="" className="w-full max-lg:hidden" />
        <img
          src="/Firefly-red-electronic-paths-black-background-82740 1.png"
          alt=""
          className="w-full hidden max-lg:flex"
        />
      </div>

      <CampaginSec
        title={t("Campaign Objectives")}
        pa1={t("Increase follower base on key social media platforms.")}
        pa2={t(
          "Drive traffic to the FreshEats website and increase online orders."
        )}
        pa3={t(
          "Enhance customer engagement and loyalty through interactive content."
        )}
      />
      <CampaginSec
        title={t("Strategy Implemented")}
        pa1={t(
          "Target Audience Analysis: We conducted in-depth research to identify and understand FreshEats' target demographic."
        )}
        pa2={t(
          "Content Strategy: Created engaging and informative content focused on health tips, recipes, and customer testimonials."
        )}
        pa3={t(
          "Paid Advertising: Implemented targeted ads on Facebook and Instagram to reach potential customers effectively."
        )}
      />

      <div className="mt-20 max-lg:mt-0">
        <CampaginSec
          title={t("Results Achieved")}
          pa1={t(
            "30% Increase in Followers: Expanded FreshEats' social media reach significantly within the first three months."
          )}
          pa2={t(
            "40% Boost in Website Traffic: Drove traffic to the FreshEats website, resulting in increased online orders."
          )}
          pa3={t(
            "Enhanced Brand Loyalty: Increased customer engagement and loyalty through personalized interactions and valuable content."
          )}
        />
      </div>
      <img
        src="/image-39.png"
        alt=""
        className="mt-20 rounded-2xl w-[550px] max-lg:hidden"
      />
    </div>
  );
};

export default GridSection;
