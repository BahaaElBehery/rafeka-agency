import { useTranslation } from "react-i18next";
import AvailableCom from "../Homepage/AvailableCom";
import Header from "../Homepage/Header";
import Rafeka from "../Homepage/Rafeka";
import Sora2 from "../ServicesP/Sora2";
import CallUs from "./CallUs";
import Input from "./Input";
import SecHow from "./SecHow";

const ContactUs = () => {
  const { t } = useTranslation(`translation`);
  return (
    <>
      <Header />
      <Sora2 S={t("Contact Us")} />
      <CallUs />
      <Input />
      <SecHow />

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

export default ContactUs;
