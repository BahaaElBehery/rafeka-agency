import { useTranslation } from "react-i18next";
import DevelopCom from "../ProjectsP/DevelopCom";

const Upsevice = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="w-11/12 mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-10 mt-20">
      <DevelopCom
        img="/Image-Zfta.png"
        title={t("Analytics and Reporting")}
        class="w-10"
      />
      <DevelopCom img="/Zfta2.png" title={t("Billing and Payments")} />
      <DevelopCom img="/Zfta-3.png" title={t("Account Management")} />
      <DevelopCom img="/Zfta-4.png" title={t("General Support")} />
    </div>
  );
};

export default Upsevice;
