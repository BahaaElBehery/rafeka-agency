import { useTranslation } from "react-i18next";
import HowCom from "../ContactUs/HowCom";
import Text from "../ContactUs/Text";

const General = () => {
  const { t } = useTranslation(`translation`);
  return (
    <>
      <div className="flex flex-col max-w-[1920px] items-center justify-center mt-20">
        <Text
          title={t("General FAQs")}
          p={t(
            "We’ve compiled answers to some common questions to help you better understand our services and processes"
          )}
        />
      </div>

      <div className="w-11/12 max-w-[1920px] mx-auto flex flex-col items-center">
        <HowCom
          title={t("How can digital marketing benefit my business?")}
          p={t(
            "Digital marketing can benefit your business by increasing brand visibility, reaching a wider audience, and driving more targeted traffic to your website. It allows you to engage with potential customers through various online channels, such as social media, email, and search engines, boosting your brand's awareness. Additionally, digital marketing provides measurable results, enabling you to track campaign performance, refine strategies, and maximize return on investment. Overall, it helps you connect with the right audience, grow your customer base, and increase sales"
          )}
        />
        <HowCom title={t("What digital marketing services do you offer?")} />
        <HowCom title={t("How long does it take to see results")} />
      </div>
    </>
  );
};

export default General;
