import { useTranslation } from "react-i18next";
import AwardSec from "./AwardSec";

const AfterContact = () => {
  const { t } = useTranslation("translation");
  return (
    <div
      className="grid grid-cols-3 max-lg:grid-cols-1 w-11/12 mx-auto mt-40"
      dir="ltr"
    >
      <AwardSec p={t("Award-Winning Strategies")} />
      <AwardSec p={t("1,000+ Successful Campaigns Delivered")} />
      <AwardSec p={t("98% Client Satisfaction Rate")} />
    </div>
  );
};

export default AfterContact;
