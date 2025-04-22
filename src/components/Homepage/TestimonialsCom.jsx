import { useTranslation } from "react-i18next";
import TestmonialSec from "./TestmonialSec";

const TestimonialsCom = () => {
  const { t } = useTranslation(`translation`);

  return (
    <>
      <div className="w-10/12 flex flex-col max-lg:items-center mx-auto mt-20 max-w-[1920px]">
        <div className="flex items-center">
          <span className="w-5 h-[5px] bg-red-500 rounded-r-full rounded-l-full"></span>
          <h3 className="ms-5 text-lg">{t("Testimonials")}</h3>
        </div>

        <h3 className="text-5xl max-lg:text-2xl max-w-[530px] mt-10">
          {t("Client Testimonials: Real Results, Real Feedback")}
        </h3>
      </div>

      <div className="w-10/12 max-w-[1920px] max-lg:w-fit max-sm:px-10 mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-20 mt-15">
        <TestmonialSec
          title={t(
            "Rafeka transformed our online store into a sleek, user-friendly platform. Our sales skyrocketed by 35% in just three months! Their teamis professional, creative, and incredibly responsive."
          )}
          name="Jaweer Ali"
        />
        <TestmonialSec
          title={t(
            "The SEO strategies implemented by Rafeka were a game-changer for us. We saw a 50% increase in organic traffic and now rank at the top of search results. Highly recommend their services!"
          )}
          name="Yazan Abdallah"
        />
        <TestmonialSec
          title={t(
            "Our social media engagement went through the roof thanks to PageBuzz. Their innovative campaign brought us a 70% rise in engagement and a significant boost in online orders."
          )}
          name="Hiba Gaber"
        />
        <TestmonialSec
          title={t(
            "Working with PageBuzz was a delight. Their content creation exceeded our expectations, increasing our website engagement by 60%. They truly understand our industry and audience."
          )}
          name="Esraa Sabry"
        />
      </div>
    </>
  );
};

export default TestimonialsCom;
