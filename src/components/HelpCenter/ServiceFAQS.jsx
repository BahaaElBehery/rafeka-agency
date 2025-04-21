import { useTranslation } from "react-i18next";
import HowCom from "../ContactUs/HowCom";
import Text from "../ContactUs/Text";

const ServiceFAQS = () => {
  const { t } = useTranslation(`translation`);
  return (
    <>
      <div className="flex flex-col max-w-[1920px] items-center justify-center mt-20">
        <Text
          title={t("Service FAQs")}
          p={t(
            "Here are detailed answers to some common questions about the services we provide:"
          )}
        />
      </div>

      <div className="w-11/12 max-w-[1920px] mx-auto flex flex-col items-center">
        <HowCom
          title={t("What is included in your SEO services?")}
          p={t(
            "Our SEO services include comprehensive keyword research, on-page optimization, technical SEO improvements, content optimization, link building, and ongoing performance tracking. We also provide local SEO strategies to help improve your visibility in targeted geographic areas"
          )}
        />
        <HowCom title={t("How can PPC advertising benefit my business?")} />
        <HowCom title={t("What social media platforms do you manage?")} />
        <HowCom title={t("How do you create content for content marketing?")} />
      </div>
    </>
  );
};

export default ServiceFAQS;
