import { useTranslation } from "react-i18next";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-globe cursor-pointer"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    </button>
  );
};
