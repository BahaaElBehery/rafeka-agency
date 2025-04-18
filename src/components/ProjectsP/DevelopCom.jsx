import { Link } from "react-router";

const DevelopCom = (Props) => {
  return (
    <div className="flex flex-col">
      <img src={Props.img} alt="" className="rounded-2xl" />

      <div className="flex items-center justify-between py-10">
        <h6 className="max-sm:text-sm">{Props.title}</h6>
        <Link to={`/projects/project-details`}>
          <button className="px-5 py-1 border border-red-500 rounded-full cursor-pointer">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DevelopCom;
