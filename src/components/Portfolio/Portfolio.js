import React from "react";
import SwipingGallery from "../Swiper/Swiper";
import { Heading } from "../../elements/heading/heading";
import Styles from "./Porfolio.module.scss";

const Portfolio = () => {
  return (
    <div className={Styles.container}>
      <Heading
        name="Портфолио"
        extraStyles={{ margin: "0 auto", marginBottom: "47px" }}
      />
      <SwipingGallery
        slidesPerView={2}
        arrowSize={"70px"}
        slideDimentions={{
          height: "611px",
          width: "431px",
        }}
        arrowPosition={"-80px"}
        swiperWidth={"908px"}
      />
    </div>
  );
};

export default Portfolio;
