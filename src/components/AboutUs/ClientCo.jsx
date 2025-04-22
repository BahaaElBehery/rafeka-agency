import { useTranslation } from "react-i18next";
import ClientPart from "./ClientPart";

const ClientCo = (Props) => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="w-10/12 max-w-[1920px] mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-10 mt-20">
      <div className="flex flex-col max-lg:items-center max-lg:order-2">
        <div className="flex items-center max-lg:hidden">
          <span className="w-5 rounded-r-full rounded-l-full h-[5px] bg-red-500"></span>
          <h3 className="ms-3 ">{Props.one}</h3>
        </div>

        <h2 className="text-5xl max-sm:text-3xl mt-10 max-w-[490px] max-lg:text-center">
          {Props.two}
        </h2>
        <p className="text-sm text-[#afafaf] mt-10 max-sm:text-xs max-w-[490px] max-lg:text-center">
          {Props.three}
        </p>
        <div className={Props.hide}>
          <ClientPart
            title={t("Client Satisfaction")}
            per="98%"
            className="absolute top-0 start-0 h-full w-[98%] bg-red-500 rounded-full"
          />
          <ClientPart
            title={t("Project Completion Rate")}
            per="95%"
            className="absolute top-0 start-0 h-full w-[95%] bg-red-500 rounded-full"
          />
          <ClientPart
            title={t("Campaign Success Rate")}
            per="90%"
            className="absolute top-0 start-0 h-full w-[90%] bg-red-500 rounded-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-end max-lg:justify-center  max-lg:col-span-full">
        <img src={Props.img} alt="" className="rounded-2xl" />
      </div>
    </div>
  );
};

export default ClientCo;
