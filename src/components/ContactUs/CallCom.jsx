const CallCom = ({ text, num, img }) => {
  return (
    <div className="flex flex-col items-center p-10 border border-gray-500 rounded-2xl">
      <img src={img} alt="" />
      <h6 className="text-2xl">{text}</h6>
      <p className="text-sm text-[#afafaf]">{num}</p>
    </div>
  );
};

export default CallCom;
