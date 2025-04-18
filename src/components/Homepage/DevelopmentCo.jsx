import DevelopMentSec from "./DevelopMentSec";

const DevelopmentCo = (Props) => {
  return (
    <>
      <div className="mx-auto flex flex-col items-center mt-36">
        <h2 className="text-7xl max-sm:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#424D50]">
          {Props.tit}
        </h2>
        <button className={Props.css}>See All</button>
      </div>
      <DevelopMentSec
        className1="w-10/12 mx-auto flex items-center justify-between max-lg:justify-center mt-10"
        text="Web Development"
        number="(001)"
        edit2="text-5xl max-lg:text-3xl max-sm:text-sm"
      />
      <DevelopMentSec
        className1="w-10/12 mx-auto flex items-center justify-between max-lg:justify-center flex-row-reverse mt-10 max-lg:mt-0"
        text="Digital Marketing"
        number="(002)"
        edit2="text-5xl max-lg:text-3xl max-sm:text-sm"
      />
      <DevelopMentSec
        className1="w-10/12 mx-auto flex items-center justify-between mt-10 max-lg:justify-center max-lg:mt-0"
        text="Brand Design & Development"
        number="(003)"
        edit2="text-5xl max-lg:text-3xl max-sm:text-sm"
      />
      <DevelopMentSec
        className1="w-10/12 mx-auto flex items-center justify-between mt-10 flex-row-reverse max-lg:justify-center max-lg:mt-0"
        text="Social Media Management"
        number="(004)"
        edit2="text-5xl max-lg:text-3xl max-sm:text-sm"
      />
    </>
  );
};

export default DevelopmentCo;
