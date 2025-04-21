// import App from "../../App";
import ChooseCo from "../Homepage/ChooseCo";
import Header from "../Homepage/Header";
import RafekaStatsAll from "../Homepage/RafekaStatsAll";
import ClientCo from "./ClientCo";
import KnowUs from "./KnowUs";
import OurVision from "./OurVision";
import OutTeam from "./OutTeam";
import Sora from "./Sora";
import Text from "./Text";
import AvailableCom from "../Homepage/AvailableCom";
import Rafeka from "../Homepage/Rafeka";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation(`translation`);

  const cards = [
    {
      text: t("Foster Innovation"),
      Pa: t(
        "We encourage creativity and innovation in all our strategies, ensuring our clients stay ahead in the ever-evolving digital landscape"
      ),
      num: "1",
    },
    {
      text: t("Promote Transparency"),
      Pa: t(
        "We prioritize open and honest communication with our clients, maintaining transparency in all our processes and decisions"
      ),
      num: "2",
    },
    {
      text: t("Continuous Learning"),
      Pa: t(
        "We are committed to continuous learning and improvement, staying updated with the latest industry trends and best practices to provide the best solutions"
      ),
      num: "3",
    },
    {
      text: t("Champion Sustainability"),
      Pa: t(
        "We advocate for sustainable practices in our operations and campaigns, aiming to make a positive impact on the environment"
      ),
      num: "4",
    },
    {
      text: t("Community Impact"),
      Pa: t(
        "We strive to make a meaningful impact on our community by supporting local initiatives and fostering positive social change"
      ),
      num: "5",
    },
    {
      text: t("Enhance User Experience"),
      Pa: t(
        "We focus on creating engaging and user-friendly experiences, ensuring our clients' audiences have the best possible interactions with their brands"
      ),
      num: "6",
    },
  ];

  return (
    <>
      <Header />
      <Sora />
      <OurVision />
      <Text />
      <ChooseCo cards={cards} />
      <OutTeam />
      <ClientCo
        one={t("Expertise")}
        two={t("Mastering the Art of Digital Solutions")}
        three={t(
          "Our services stand out for their high quality, blending innovation, precision, and best practices to consistently exceed client expectations."
        )}
        img="/network-concept-with-thread-1.png"
        hide="max-sm:w-full mt-20"
      />
      <RafekaStatsAll />
      <KnowUs />
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

export default AboutUs;
