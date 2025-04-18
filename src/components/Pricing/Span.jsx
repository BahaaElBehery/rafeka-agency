// const Span = (Props) => {
//   return (
//     <div className=" py-1 flex items-center">
//       <span className={Props.span}></span>
//       <p className="text-sm ml-3 text-[#afafaf] flex-1">{Props.p}</p>
//     </div>
//   );
// };

// export default Span;

const Span = ({ span, p }) => {
  return (
    <div className="py-1 flex items-center">
      <span className={span}></span>
      <p className="text-sm max-sm:text-xs ml-3 text-[#afafaf] flex-1">{p}</p>
    </div>
  );
};

export default Span;
