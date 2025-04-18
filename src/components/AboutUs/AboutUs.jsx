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
const cards = [
  {
    text: "Foster Innovation ",
    Pa: "We encourage creativity and innovation in all our strategies, ensuring our clients stay ahead in the ever-evolving digital landscape",
    num: "1",
  },
  {
    text: "Promote Transparency",
    Pa: "We prioritize open and honest communication with our clients, maintaining transparency in all our processes and decisions",
    num: "2",
  },
  {
    text: "Continuous Learning",
    Pa: "We are committed to continuous learning and improvement, staying updated with the latest industry trends and best practices to provide the best solutions",
    num: "3",
  },
  {
    text: "Champion Sustainability",
    Pa: "We advocate for sustainable practices in our operations and campaigns, aiming to make a positive impact on the environment",
    num: "4",
  },
  {
    text: "Community Impact",
    Pa: "We strive to make a meaningful impact on our community by supporting local initiatives and fostering positive social change",
    num: "5",
  },
  {
    text: "Enhance User Experience",
    Pa: "We focus on creating engaging and user-friendly experiences, ensuring our clients' audiences have the best possible interactions with their brands",
    num: "6",
  },
];

const AboutUs = () => {
  return (
    <>
      <Header />
      <Sora />
      <OurVision />
      <Text />
      <ChooseCo cards={cards} />
      <OutTeam />
      <ClientCo
        one="Expertise"
        two="Mastering the Art of Digital Solutions"
        three="Our services stand out for their high quality, blending innovation,
          precision, and best practices to consistently exceed client
          expectations."
        img="/network-concept-with-thread-1.png"
        hide="max-sm:w-full"
      />
      <RafekaStatsAll />
      <KnowUs />
      <AvailableCom
        one="Available For New Project"
        two="Interested in Working Together?"
        three="Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet id
        cursus id blandit. Consectetur maecenas id vivamus integer integer
        aliquam."
        edit="text-8xl max-lg:text-4xl text-center max-w-4xl mt-10 capitalize font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50]"
        four="px-8 py-1 border border-red-500 mt-10 rounded-md font-medium max-lg:text-base text-lg"
        five="Schedule A Call"
      />

      <Rafeka />
    </>
  );
};

export default AboutUs;
