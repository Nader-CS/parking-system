import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import style from "./madeEasy.module.css";
import WebFont from "webfontloader";
import img1 from "../../assets/images/Made-easy/find.png";
import img2 from "../../assets/images/Made-easy/park.png";
import img3 from "../../assets/images/Made-easy/reserve.png";
import { useTranslation } from "react-i18next";
const MadeEasy = () => {
  const { t, i18n } = useTranslation();
  const [forceUpdate, setForceUpdate] = useState(false); //used to force re-render OwlCarousel component
  useEffect(() => {
    setForceUpdate((prev) => !prev);
    WebFont.load({
      google: {
        families: ["Nunito:400,700", "sans-serif"],
      },
    });
  }, [t]);
  return (
    <section
      style={{
        fontFamily:
          i18n.language === "ar"
            ? "'Noto Kufi Arabic', sans-serif"
            : "'Nunito', sans-serif",
      }}
      className={i18n.language === "ar" ? style.ar : ""}
    >
      <h1 className={style.header}>{t("parking-made-easy")}</h1>
      <OwlCarousel
        className={`${style.carousel} owl-theme`}
        items="3"
        dots
        responsive={{
          0: {
            items: 1,
          },
          700: {
            items: 3,
          },
        }}
      >
        <div className={`${style.carousel_item} ${style.line} item`}>
          <div className={style.pic}>
            <img src={img1} alt="img"></img>
          </div>
          <div>
            <h2 className={`${style.sub_head} mt-5`}>
              {t("wherever-whenever")}
            </h2>
            <p className={`${style.sub_par}`}>{t("millions-of-spaces")}</p>
            <p className={`${style.sub_par}`}>{t("best-option")}</p>
          </div>
        </div>
        <div className={`${style.carousel_item} item`}>
          <div className={style.pic}>
            <img src={img2} alt="img"></img>
          </div>
          <div>
            <h2 className={`${style.sub_head} mt-5`}>{t("peace-of-mind")}</h2>
            <p className={`${style.sub_par}`}>
              {t("information-on-availability")}
            </p>
            <p className={`${style.sub_par}`}>{t("reserve-in-advance")}</p>
          </div>
        </div>
        <div className={`${style.carousel_item} item`}>
          <div className={style.pic}>
            <img src={img3} alt="img"></img>
          </div>
          <div>
            <h2 className={`${style.sub_head} mt-5`}>
              {t("seamless-experience")}
            </h2>
            <p className={`${style.sub_par}`}>{t("pay-for-iPark")}</p>
            <p className={`${style.sub_par}`}>{t("follow-easy-directions")}</p>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};
export default MadeEasy;
