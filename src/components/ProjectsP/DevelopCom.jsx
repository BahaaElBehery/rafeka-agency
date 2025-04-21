import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const DevelopCom = (Props) => {
  const { t } = useTranslation(`translation`);
  return (
    <div className="flex flex-col">
      <img src={Props.img} alt="" className="rounded-2xl" />

      <div className="flex items-center justify-between ltr:flex-row-reverse flex-1 py-10">
        <Link to={`/projects/project-details`}>
          <button className="px-5 py-1 border border-red-500 rounded-full cursor-pointer">
            {t("See All")}
          </button>
        </Link>
        <h6 className="max-sm:text-sm">{Props.title}</h6>
      </div>
    </div>
  );
};

export default DevelopCom;
