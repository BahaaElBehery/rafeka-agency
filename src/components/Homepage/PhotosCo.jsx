import Photos from "./photos";

const PhotosCo = () => {
  return (
    <div className="grid grid-cols-7 max-lg:hidden mt-10" dir="ltr">
      <Photos img="/Group19.png" className="w-20" />
      <Photos img="/Group18.png" className="w-30" />
      <Photos img="/Group20.png" className="w-20" />
      <Photos img="/Group21.png" className="w-20" />
      <Photos img="/Group22.png" className="w-20" />
      <Photos img="/Group25.png" className="w-20" />
      <Photos img="/Group24.png" className="w-10" />
    </div>
  );
};

export default PhotosCo;
