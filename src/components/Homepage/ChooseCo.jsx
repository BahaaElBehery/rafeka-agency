import { useState, useEffect } from "react";
import GridCo from "./GridCo";
import { t } from "i18next";

const ChooseCo = ({ cards }) => {
  const [visibleCount, setVisibleCount] = useState(6); // default: show all
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size on mount and on resize
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth <= 640) {
        setIsSmallScreen(true);
        setVisibleCount(1);
      } else {
        setIsSmallScreen(false);
        setVisibleCount(cards.length);
      }
    };

    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowMore = () => {
    if (visibleCount < cards.length) {
      setVisibleCount((prev) => prev + 1);
    }
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div
        className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8"
        dir="ltr"
      >
        {cards.slice(0, visibleCount).map((card, index) => (
          <GridCo key={index} text={card.text} Pa={card.Pa} num={card.num} />
        ))}
      </div>

      {isSmallScreen && visibleCount < cards.length && (
        <div className="text-end mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-2  text-white rounded-r-full rounded-l-full transition border border-red-500"
          >
            {t("Click to see more")}
          </button>
        </div>
      )}
    </div>
  );
};

export default ChooseCo;
