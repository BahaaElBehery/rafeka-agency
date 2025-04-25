import { Link } from "react-router";

const CallCom = ({ text, num, img, link }) => {
  return (
    <div className="flex flex-col items-center p-10 border border-gray-500 rounded-2xl">
      <img src={img} alt="" />
      <Link to={link} target={link ? "_blank" : "_self"}>
        <h6 className="text-2xl my-5">{text}</h6>
      </Link>
      <p className="text-sm text-[#afafaf]">{num}</p>
    </div>
  );
};

export default CallCom;
