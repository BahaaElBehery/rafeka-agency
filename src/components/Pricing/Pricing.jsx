import Header from "../Homepage/Header";
import Sora2 from "../ServicesP/Sora2";
import EcommerceCom from "./EcommerceCom";
import SocialMediaCom from "./SocialMediaCom";
import WebDevelopment from "./WebDevelopment";
import AvailableCom from "../Homepage/AvailableCom";
import Rafeka from "../Homepage/Rafeka";
const Pricing = () => {
  return (
    <>
      <Header />
      <Sora2 S="Pricing" />
      <SocialMediaCom />
      <EcommerceCom />
      <WebDevelopment />
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

export default Pricing;
