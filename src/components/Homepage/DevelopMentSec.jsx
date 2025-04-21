const DevelopMentSec = (Props) => {
  return (
    <div className={Props.className1} dir="ltr">
      <div className="flex items-center">
        <h2 className={Props.edit2}>{Props.text}</h2>
        <img src="/arrow-right.svg" alt="" className="mt-5 ml-5 max-sm:w-10" />
      </div>
      <div className="flex items-center justify-end max-lg:hidden">
        <p className="text-[#afafaf]">{Props.number}</p>
      </div>
    </div>
  );
};

export default DevelopMentSec;
