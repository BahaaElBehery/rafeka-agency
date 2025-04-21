import { useTranslation } from "react-i18next";
import EcommerceCom from "./EcommerceCom";

const Repeat = () => {
  const { t } = useTranslation(`translation`);
  return (
    <>
      <EcommerceCom
        h2={t("E-commerce Website Revamp for A2 Gym")}
        pa={t(
          "At Rafeka, we collaborated closely with Yadhwe Store to develop andexecute a powerful E-Commerce Store. Our goal was to enhance brandawareness, increase engagement."
        )}
        Button1={t("#Ecommerce")}
        Button2={t("#Website")}
        Button3={t("#UXDesign")}
        img="/1.webp"
      />
      <EcommerceCom
        h2={t("SEO Optimization for Mira Clinic")}
        pa={t(
          "At Rafeka, we collaborated closely with Mira Clinic to develop and execute a powerful SEO Optimization. Our goal was to enhance brand awareness, increase engagement, and drive conversions for their health care service."
        )}
        Button1={t("#OrganicGrowth")}
        Button2={t("#SEO")}
        Button3={t("#MiraClinic")}
        img="/2.webp"
      />
      <EcommerceCom
        h2={t("Social Media Campaign for Right Click")}
        pa={t(
          "At Rafeka, we collaborated closely with Rare Water to develop and execute a powerful social media campaign. Our goal was to enhance brand awareness, increase engagement, and drive conversions for their Water service."
        )}
        Button1={t("#SocialMedia")}
        Button2={t("#DiditalMarketing")}
        Button3={t("#RightClick")}
        img="/3.webp"
      />
    </>
  );
};

export default Repeat;
