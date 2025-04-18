import Part from "./Part";

const CampaginSec = (Prop) => {
  return (
    <div className="flex flex-col max-lg:items-center">
      <h3 className="text-4xl py-10 items-center max-sm:text-2xl">
        {Prop.title}
      </h3>
      <Part paragraph={Prop.pa1} />
      <Part paragraph={Prop.pa2} />
      <Part paragraph={Prop.pa3} />
    </div>
  );
};

export default CampaginSec;
