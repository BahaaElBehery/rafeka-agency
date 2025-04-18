import React from "react";
import { Link } from "react-router";

const VideoCo = () => {
  return (
    <div className="w-11/12 mx-auto p-3 mt-10 border rounded-3xl">
      <Link
        to={`https://www.youtube.com/watch?si=t_jP2qJ_DwbZxS9o&v=ET05Zo1baoc&feature=youtu.be`}
        target="_blank"
      >
        <img src="/Image-Box.png" alt="" className="w-full" />
      </Link>
    </div>
  );
};

export default VideoCo;
