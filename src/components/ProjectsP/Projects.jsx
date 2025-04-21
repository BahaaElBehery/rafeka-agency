import Header from "../Homepage/Header";
import Sora2 from "../ServicesP/Sora2";
import DevelopSec from "./DevelopSec";
import Video from "../Homepage/VideoCo";
import ClientCo from "../AboutUs/ClientCo";
import AvailableCom from "../Homepage/AvailableCom";
import Rafeka from "../Homepage/Rafeka";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation(`translation`);
  return (
    <>
      <Header />
      <Sora2 S={t("Projects")} />
      <DevelopSec />
      <Video />

      <ClientCo
        one={t("Expertise")}
        two={t("Mastering the Art of Digital Solutions")}
        three={t(
          "Our services stand out for their high quality, blending innovation, precision, and best practices to consistently exceed client expectations."
        )}
        img="/network-concept-with-thread-1.png"
        hide="max-sm:w-full"
      />
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

export default Projects;
