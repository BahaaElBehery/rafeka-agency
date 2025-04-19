const Button = (Props) => {
  return (
    <button className="px-8 max-sm:px-4 py-2 border border-red-500 rounded-md mt-10 ml-3 rounded-r-full rounded-l-full text-lg max-lg:text-xs cursor-pointer">
      {Props.text}
    </button>
  );
};

export default Button;
