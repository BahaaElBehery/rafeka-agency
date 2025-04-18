import HowCom from "../ContactUs/HowCom";
import Text from "../ContactUs/Text";

const ServiceFAQS = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20">
        <Text
          title="Service FAQs"
          p="Here are detailed answers to some common questions about the services we provide:"
        />
      </div>

      <div className="w-11/12 mx-auto flex flex-col items-center">
        <HowCom
          title="What is included in your SEO services?"
          p="Our SEO services include comprehensive keyword research, on-page optimization, technical SEO improvements, content optimization, link building, and ongoing performance tracking. We also provide local SEO strategies to help improve your visibility in targeted geographic areas"
        />
        <HowCom title="How can PPC advertising benefit my business?" />
        <HowCom title="What social media platforms do you manage?" />
        <HowCom title="How do you create content for content marketing?" />
      </div>
    </>
  );
};

export default ServiceFAQS;
