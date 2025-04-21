import { useTranslation } from "react-i18next";
import RafeksStatsCo from "./RafeksStatsCo";

const RafekaStatsAll = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="w-11/12 mx-auto mt-20 max-w-[1920px]">
      <h2 className="text-7xl max-sm:text-5xl font-medium mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff] text-center">
        {t("Rafeka Stats")}
      </h2>
      <div className="flex items-center justify-center flex-wrap  gap-5 mt-10">
        <RafeksStatsCo
          num="500"
          title={t("Happy Clients")}
          p={t(
            "Number of satisfied clients who have benefited from our services."
          )}
        />
        <RafeksStatsCo
          num="700"
          title={t("Projects Completed")}
          p={t(
            "Total projects successfully delivered across various industries."
          )}
        />
      </div>

      <div className="flex items-center justify-center mt-5">
        <RafeksStatsCo
          num="700"
          title={t("Projects Completed")}
          p={t(
            "Total projects successfully delivered across various industries."
          )}
        />
      </div>
    </div>
  );
};

export default RafekaStatsAll;
