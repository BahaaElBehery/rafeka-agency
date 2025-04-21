import { useTranslation } from "react-i18next";
import Succespart from "./Succespart";

const KnowUs = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="w-9/12 mx-auto flex flex-col items-center" dir="ltr">
      <h2 className="text-7xl max-lg:text-5xl max-sm:text-3xl font-medium mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff] text-center">
        {t("Get To Know Us Better")}
      </h2>
      <p className="text-[#afafaf] max-lg:text-xs text-sm mt-10 max-w-[800px] text-center">
        {t(
          "Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id cursus id blandit. Consectetur maecenas id vivamus integer integer aliquam. Donec amet rhoncus ut turpis massa augue faucibus."
        )}
      </p>

      <Succespart
        num="(001)"
        title={t("Our Success Stories")}
        button={t("View Case studies")}
      />
      <Succespart
        num="(002)"
        title={t("Join Our Community")}
        button={t("Contact Us")}
      />
      <Succespart
        num="(003)"
        title={t("See Our Impact")}
        button={t("Explore Projects")}
      />
    </div>
  );
};

export default KnowUs;
