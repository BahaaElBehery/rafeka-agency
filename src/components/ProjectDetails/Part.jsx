const Part = (Prop) => {
  return (
    <div className="flex items-center mt-3">
      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
      <p className="text-[#afafaf] text-sm flex-1 ms-3 max-w-[414px max-sm:text-xs">
        {Prop.paragraph}
      </p>
    </div>
  );
};

export default Part;
