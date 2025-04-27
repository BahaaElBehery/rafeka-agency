import React, { useRef, useState, useEffect } from "react";

const VideoCo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    video.addEventListener("pause", handlePause);
    video.addEventListener("play", handlePlay);

    return () => {
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("play", handlePlay);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const shouldShowButton = !isPlaying || isHovered;

  return (
    <div className="w-10/12 max-w-[1920px] mx-auto h-screen max-lg:h-fit rounded-2xl mt-20 max-md:mt-0">
      <div
        className="relative h-full max-w-full rounded-2xl overflow-hidden shadow-lg group flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* الفيديو */}
        <video
          ref={videoRef}
          src="/New folder/VideoCo.mp4"
          className="w-full h-full cursor-pointer rounded-2xl"
          onClick={togglePlayPause}
          poster="/فيديو.png"
        />

        {shouldShowButton && (
          <button
            onClick={togglePlayPause}
            className="absolute inset-0 flex items-center justify-center rounded-2xl bg-opacity-40 transition-opacity"
          >
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
              {isPlaying ? (
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4h2v12H6V4zm6 0h2v12h-2V4z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              )}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoCo;
