import { useTranslation } from "react-i18next";
import FooterB from "./FooterB";
import { Link } from "react-router";

const Rafeka = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="flex flex-col items-center mt-20 pb-32 overflow-x-hidden">
      <h2 className="text-8xl max-lg:text-5xl max-sm:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
        {t("Rafeka Agency")}
      </h2>

      <div className=" flex mt-10 gap-3  px-4 flex-wrap" dir="ltr">
        <Link target="_blank" to={`https://www.facebook.com/Rafekaagency`}>
          <FooterB text="facebook" />
        </Link>
        <Link target="_blank" to={`https://www.instagram.com/rafekaagency`}>
          <FooterB text="instagram" />
        </Link>
        <Link target="_blank">
          <FooterB text="Linkedin" />
        </Link>
        <Link target="_blank" to={`https://www.behance.net/RAFEKA`}>
          <FooterB text="Behance" />
        </Link>
      </div>

      <p className="mt-40 relative">{t("Copyright © 2024 Rafeka Agency")}</p>
    </div>
  );
};

export default Rafeka;
