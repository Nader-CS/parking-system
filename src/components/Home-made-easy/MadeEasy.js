import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import style from "./madeEasy.module.css";
import WebFont from "webfontloader";
import img1 from "../../assets/images/Made-easy/find.png";
import img2 from "../../assets/images/Made-easy/park.png";
import img3 from "../../assets/images/Made-easy/reserve.png";
const MadeEasy = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Nunito:400,700", "sans-serif"],
      },
    });
  }, []);
  return (
    <section className="pt-2 pb-5">
      <h1 className={style.header}>Parking made easy</h1>
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
            <h2 className={`${style.sub_head} mt-5`}>Wherever, whenever</h2>
            <p className={`${style.sub_par}`}>
              Choose from millions of spaces across Egypt
            </p>
            <p className={`${style.sub_par}`}>
              Find your best option for every car journey
            </p>
          </div>
        </div>
        <div className={`${style.carousel_item} item`}>
          <div className={style.pic}>
            <img src={img2} alt="img"></img>
          </div>
          <div>
            <h2 className={`${style.sub_head} mt-5`}>Peace of mind</h2>
            <p className={`${style.sub_par}`}>
              View information on availability, price and restrictions
            </p>
            <p className={`${style.sub_par}`}>
              Reserve in advance at over 45,000+ locations
            </p>
          </div>
        </div>
        <div className={`${style.carousel_item} item`}>
          <div className={style.pic}>
            <img src={img3} alt="img"></img>
          </div>
          <div>
            <h2 className={`${style.sub_head} mt-5`}>Seamless experience</h2>
            <p className={`${style.sub_par}`}>
              Pay for IPark spaces via the app or website
            </p>
            <p className={`${style.sub_par}`}>
              Follow easy directions and access instructions
            </p>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};
export default MadeEasy;
