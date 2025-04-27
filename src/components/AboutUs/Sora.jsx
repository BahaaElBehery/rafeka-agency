import { useTranslation } from "react-i18next";

const Sora = () => {
  const { t } = useTranslation(`translation`);
  return (
    <div
      className="relative w-full  h-[80vh] max-lg:h-[400px] max-lg:bg-contain"
      style={{ backgroundPosition: "bottom center" }}
    >
      <img
        src="/Line-BG.png"
        alt=""
        className="absolute inset-0 w-full h-full py-10 -z-[100] max-lg:hidden"
      />

      <img
        src="/all-team.png"
        alt=""
        className="translate-y-13 w-full h-full object-contain"
      />

      {/* Centered Text */}
      <h2 className="absolute inset-0 max-md:text-5xl flex items-start mt-10 justify-center text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#737b7e] to-[#ffffff]">
        {t("About Us")}
      </h2>
      <img src="/Header.png" alt="" className="absolute -top-60 left-0" />
    </div>
  );
};

export default Sora;
