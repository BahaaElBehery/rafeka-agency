const photos = (Props) => {
  return (
    <div className="flex items-center justify-center mt-10">
      <img src={Props.img} alt="" className={Props.className} />
    </div>
  );
};

export default photos;
