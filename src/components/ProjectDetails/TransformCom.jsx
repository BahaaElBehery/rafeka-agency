const TransformCom = (Prop) => {
  return (
    <div className="flex flex-col mt-10">
      <h6>{Prop.title}</h6>
      <p className="text-xs text-[#afafaf] mt-2">{Prop.parag}</p>
    </div>
  );
};

export default TransformCom;
