import Header from "../Homepage/Header";
import Sora2 from "./Sora2";
import DevelopmentCo from "../Homepage/DevelopmentCo";
import AvailableCom from "../Homepage/AvailableCom";
import ClientCo from "../AboutUs/ClientCo";
import HowitWorks from "./HowitWorks";
import Rafeka from "../Homepage/Rafeka";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation(`translation`);
  return (
    <>
      <Header />
      <Sora2 S={t("Services")} />
      <DevelopmentCo css="hidden" />
      <AvailableCom
        one={t("Transform Your Digital Presence")}
        two={t("Partner with Rafeka Today!")}
        three={t("Join us at Rafeka Agency, where your success is our mission")}
        edit="text-7xl max-w-[660px] max-lg:text-4xl text-center max-w-4xl mt-10 capitalize font-medium "
        four="px-8 py-1 bg-red-500 mt-10 rounded-md font-medium max-lg:text-base text-lg"
        five={t("Get Started")}
        edit2="text-5xl max-lg:text-3xl max-sm:text-xs"
      />
      <ClientCo
        one={t("Our Value")}
        two={t("Values That Define Our Digital Approach")}
        three={t(
          "Our value is in delivering exceptional quality and innovative solutions that drive results, prioritizing client satisfaction through strong partnerships and tailored strategies."
        )}
        img="/image-25.png"
        hide="hidden"
      />
      <HowitWorks />
      <AvailableCom
        one={t("Available For New Project")}
        two={t("Interested in Working Together?")}
        three={t(
          "Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id cursus id blandit. Consectetur maecenas id vivamus integer integer aliquam."
        )}
        edit="text-8xl max-lg:text-4xl text-center max-w-4xl mt-10 capitalize font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]"
        four="px-8 py-1 border border-red-500 mt-10 rounded-md font-medium max-lg:text-base text-lg"
        five={t("Schedule A Call")}
      />

      <Rafeka />
    </>
  );
};

export default Services;
