const Span = ({ span, p }) => {
  return (
    <div className="py-1 flex items-center">
      <span className={span}></span>
      <p className="text-sm max-sm:text-xs ms-3 text-[#afafaf] flex-1">{p}</p>
    </div>
  );
};

export default Span;
