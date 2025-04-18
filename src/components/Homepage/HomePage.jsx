// import { useTranslation } from "react-i18next";
// import { LocaleSwitcher } from "./locale-switcher";
import Header from "./Header";
import UpscaleBrand from "./upscale-brand";
import PhotosCo from "./PhotosCo";
import AfterContact from "./AfterContact";
import PassionCo from "./PassionCo";
import DevelopmentCo from "./DevelopmentCo";
import VideoCo from "./VideoCo";
import ChooseCo from "./ChooseCo";
import WhyCo from "./WhyCo";
import FeaturedCom from "./FeaturedCom";
import AvailableCom from "./AvailableCom";
import Rafeka from "./Rafeka";

import RafekaStatsAll from "./RafekaStatsAll";

const cards = [
  {
    text: "Proven Expertise",
    Pa: "Rafeka Agency delivers successful digital marketing using the latest trends and technologies",
    num: "1",
  },
  {
    text: "Customized Solutions",
    Pa: "We create tailored strategies to meet each client’s unique needs and goals",
    num: "2",
  },
  {
    text: "Client-Centric",
    Pa: "Clients come first, with a focus on communication, transparency, and collaboration for lasting success",
    num: "3",
  },
  {
    text: "Innovative Strategies",
    Pa: "We embrace innovation and creativity to develop growth-driven strategies",
    num: "4",
  },
  {
    text: "Result-Driven",
    Pa: "We deliver measurable results using data to optimize performance and ensure ROI",
    num: "5",
  },
  {
    text: "Creative Excellence",
    Pa: "We blend strategy and creativity to create engaging campaigns that strengthen your brand",
    num: "6",
  },
];

import TestimonialsCom from "./TestimonialsCom";
import Repeat from "./Repeat";
const Home = () => {
  // const { t } = useTranslation();

  return (
    <div>
      <Header />
      <UpscaleBrand />
      <AfterContact />
      <PhotosCo />
      <PassionCo />
      <DevelopmentCo
        tit="Our Services"
        css="border border-red-500 rounded-md text-lg px-8 py-1 mt-20 max-lg:hidden"
      />
      <VideoCo />
      <WhyCo />
      <ChooseCo cards={cards} />
      <FeaturedCom />
      <Repeat />
      <RafekaStatsAll />

      <TestimonialsCom />
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
    </div>
  );
};

export default Home;
