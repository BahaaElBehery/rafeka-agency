import { useTranslation } from "react-i18next";
import GlobalIcon from "../Icons/GlobalIcon";

export const LocaleSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.style.direction = lng === "ar" ? "rtl" : "ltr"; // لتغيير اتجاه الصفحة
    document.documentElement.lang = lng;
  };
  return (
    <button
      onClick={() => changeLanguage(i18n.language === "ar" ? "en" : "ar")}
      className="cursor-pointer"
    >
      <GlobalIcon />
    </button>
  );
};
