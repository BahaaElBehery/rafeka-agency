const ClientPart = (Props) => {
  return (
    <div className="w-[80%] max-lg:w-[500px] max-sm:w-full flex flex-col mt-8 gap-3">
      <div className="flex items-center justify-between">
        <p className="text-xs">{Props.title}</p>
        <p className="text-xs">{Props.per}</p>
      </div>
      <div className="w-full h-4 relative  rounded-full bg-gray-600 overflow-hidden">
        <div className={Props.className} />
      </div>
    </div>
  );
};

export default ClientPart;
