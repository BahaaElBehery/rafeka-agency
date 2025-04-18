import React from "react";
import Header from "../Homepage/Header";
import Sora2 from "./Sora2";
import DevelopmentCo from "../Homepage/DevelopmentCo";
import AvailableCom from "../Homepage/AvailableCom";
import ClientCo from "../AboutUs/ClientCo";
import HowitWorks from "./HowitWorks";
import Rafeka from "../Homepage/Rafeka";

const Services = () => {
  return (
    <>
      <Header />
      <Sora2 S="Services" />
      <DevelopmentCo css="hidden" />
      <AvailableCom
        one="Transform Your Digital Presence"
        two="Partner with Rafeka Today!"
        three="Join us at Rafeka Agency, where your success is our mission"
        edit="text-7xl max-w-[660px] max-lg:text-4xl text-center max-w-4xl mt-10 capitalize font-medium "
        four="px-8 py-1 bg-red-500 mt-10 rounded-md font-medium max-lg:text-base text-lg"
        five="Get Started"
        edit2="text-5xl max-lg:text-3xl max-sm:text-xs"
      />
      <ClientCo
        one="Our Value"
        two="Values That Define Our Digital Approach"
        three="Our value is in delivering exceptional quality and innovative solutions that drive results, prioritizing client satisfaction through strong partnerships and tailored strategies."
        img="/image-25.png"
        hide="hidden"
      />

      <HowitWorks />

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

export default Services;
